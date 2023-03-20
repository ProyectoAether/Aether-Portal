---
title: #{{ issue.issue_number }} Deployment failure
labels: bug
---

{{ date | date('dddd, MMMM Do') }}: Pull Request #{{ pullRequest.pull_number }} from {{ payload.sender.login }}.
