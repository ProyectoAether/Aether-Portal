FROM python:3.11.2 AS data-builder
WORKDIR /scripts
COPY scripts/requirements.txt .
RUN pip install -r requirements.txt
COPY scripts .
COPY input.txt .
RUN mkdir output
RUN python3 main.py ./input.txt ./output

FROM node:19.8.1 AS app-builder
WORKDIR /app
RUN curl -f https://get.pnpm.io/v6.16.js | node - add --global pnpm
COPY frontend/pnpm-lock.yaml .
RUN pnpm fetch --prod
COPY frontend .
RUN pnpm install -r --offline --prod
COPY --from=data-builder /scripts/output /app/src/lib/assets/ontologies
RUN pnpm build


FROM nginx:1.23.3 AS deploy-static
WORKDIR /usr/share/nginx/html
RUN rm -rvf ./*
COPY --from=app-builder /app/build .
CMD ["nginx", "-g", "daemon off;"]
