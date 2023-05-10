<script lang="ts">
	import LinkIcon from '$lib/assets/svg/link-icon.svg';
	import help1 from '$lib/assets/img/help-1.png';
	import help2 from '$lib/assets/img/help-2.png';
	import help3 from '$lib/assets/img/help-3.png';
	import help4 from '$lib/assets/img/help-4.png';
	import help5 from '$lib/assets/img/help-5.png';
	import githubIcon from '$lib/assets/svg/github-icon.svg';
</script>

<title>Submit</title>
<meta
	name="description"
	content="Provides clear instructions on how to update the collection of ontologies in the app."
/>
<main class="min-h-screen container p-8 prose">
	<h1 class="text-primary">Submit an Ontology</h1>
	<h2 class="text-secondary">Prerrequisites</h2>
	<ol>
		<li>
			Your OWL ontology must be in one of the following standard formats:
			<ul>
				<li>
					<a class="link text-primary" href="https://www.w3.org/TR/rdf-syntax-grammar/">XML</a>
				</li>
				<li><a class="link text-primary" href="https://www.w3.org/TR/json-ld11/">JSON-LD</a></li>
				<li><a class="link text-primary" href="https://www.w3.org/TR/turtle/">Turtle</a></li>
				<li><a class="link text-primary" href="https://www.w3.org/TeamSubmission/n3/">N3</a></li>
				<li><a class="link text-primary" href="https://www.w3.org/TR/n-quads/">NQuads</a></li>
			</ul>
		</li>
		<li>
			To avoid any issues, your OWL ontology should have the following properties:
			<ul>
				<li>
					<b>http://purl.org/dc/terms/title</b>
					<a href="http://purl.org/dc/terms/title" class="align-middle inline-block">
						<img
							class="w-5 m-0"
							width="1em"
							height="1em"
							src={LinkIcon}
							alt="Documentation Link Icon"
						/>
					</a>: The title of the ontology. It provides a concise and meaningful name for the
					ontology.
				</li>
				<li>
					<b>http://purl.org/vocab/vann/preferredNamespaceUri</b>
					<a
						href="http://purl.org/vocab/vann/preferredNamespaceUri"
						class="align-middle inline-block"
					>
						<img
							class="w-5 m-0"
							width="1em"
							height="1em"
							src={LinkIcon}
							alt="Documentation Link Icon"
						/>
					</a>
					: The preferred namespace URI for the ontology. It defines the base URI that is used to identify
					and reference the elements in the ontology.
				</li>
			</ul>
		</li>
		<li>
			For an improved ontology, you can provide the following values:
			<ul>
				<li>
					<b>http://purl.org/dc/terms/created</b>
					<a href="http://purl.org/dc/terms/created" class="align-middle inline-block">
						<img
							class="w-5 m-0"
							width="1em"
							height="1em"
							src={LinkIcon}
							alt="Documentation Link Icon"
						/>
					</a>
					: The date or time when the ontology was created. It helps to track the creation timestamp
					of the ontology. It expects only one date to be specified.
				</li>
				<li>
					<b>http://purl.org/dc/terms/creator</b>
					<a href="http://purl.org/dc/terms/creator" class="align-middle inline-block">
						<img
							class="w-5 m-0"
							width="1em"
							height="1em"
							src={LinkIcon}
							alt="Documentation Link Icon"
						/>
					</a>
					: The creator or author of the ontology. It represents the individual or organization who originally
					conceptualized and developed the ontology.
				</li>
				<li>
					<b>http://purl.org/dc/terms/rights</b>
					<a href="http://purl.org/dc/terms/rights" class="align-middle inline-block">
						<img
							class="w-5 m-0"
							width="1em"
							height="1em"
							src={LinkIcon}
							alt="Documentation Link Icon"
						/>
					</a>
					: The rights associated with the ontology. It can include information about permissions, licenses,
					or restrictions on the usage or distribution of the ontology.
				</li>
				<li>
					<b>http://purl.org/dc/terms/description</b>
					<a href="http://purl.org/dc/terms/description" class="align-middle inline-block">
						<img
							class="w-5 m-0"
							width="1em"
							height="1em"
							src={LinkIcon}
							alt="Documentation Link Icon"
						/>
					</a>
					: A textual description or abstract of the ontology. It helps to provide additional information
					about the purpose, scope, or contents of the ontology.
				</li>
				<li>
					<b>http://purl.org/dc/terms/publisher</b>
					<a href="http://purl.org/dc/terms/publisher" class="align-middle inline-block">
						<img
							class="w-5 m-0"
							width="1em"
							height="1em"
							src={LinkIcon}
							alt="Documentation Link Icon"
						/>
					</a>
					: The entity or organization responsible for publishing or releasing the ontology. It helps
					to attribute the ontology to its publisher.
				</li>
				<li>
					<b>http://purl.org/vocab/vann/preferredNamespacePrefix</b>
					<a
						href="http://purl.org/vocab/vann/preferredNamespacePrefix"
						class="align-middle inline-block"
					>
						<img
							class="w-5 m-0"
							width="1em"
							height="1em"
							src={LinkIcon}
							alt="Documentation Link Icon"
						/>
					</a>
					: The preferred namespace prefix for the ontology. It is used to provide a shorter alias or
					abbreviation for the namespace URI.
				</li>
				<li>
					<b>https://schema.org/logo</b>
					<a href="https://schema.org/logo" class="align-middle inline-block">
						<img
							class="w-5 m-0"
							width="1em"
							height="1em"
							src={LinkIcon}
							alt="Documentation Link Icon"
						/>
					</a>: The logo associated with the ontology. It can be used to provide an image or icon
					that visually represents the ontology.
				</li>
			</ul>
		</li>
	</ol>
	<h2 class="text-secondary">Steps</h2>
	<blockquote>
		The following steps assume that you are making changes in the "main" branch of the Github
		repository.
	</blockquote>
	<ol>
		<li>
			<p class="flex items-center gap-3">
				<span> Go to our Github repository </span>
				<a
					href="https://github.com/ProyectoAether/Aether-Portal/edit/main/ontologies.txt"
					rel="noreferrer"
					target="_blank"
				>
					<img class="w-8 m-0" src={githubIcon} height="40px" width="40px" alt="Github Icon" />
				</a>
			</p>
		</li>
		<li>Add your ontology's URI to the "ontologies.txt" file.</li>
		<img src={help1} alt="Edit button" />
		<img src={help2} alt="Edit file" />
		<blockquote>
			NOTE: The blank lines are only used for clarity purposes, they do not alter the correctness of
			the txt file.
		</blockquote>
		<blockquote>Make sure the URI of your ontology is correct.</blockquote>
		<li>Provide a title and optionally a comment to commit the change.</li>
		<img src={help3} alt="Commit change" />
		<li>Click on create pull request.</li>
		<img src={help4} alt="Create pull request" />
		<li>
			The maintainers of the website will review your uploaded ontology. Please wait for any
			comments or feedback from the maintainers. If the ontology accomplishes the expected format,
			it will be added to the page.
		</li>
		<li>
			Make sure to activate notifications in order to get notified during the process of adding your
			ontology.
		</li>
		<img src={help5} alt="Email Notification" />
	</ol>

	<blockquote>
		For more information about notifications, check out&nbsp;
		<a
			class="link text-primary"
			href="https://docs.github.com/en/account-and-profile/managing-subscriptions-and-notifications-on-github/setting-up-notifications/configuring-notifications"
			rel="noreferrer"
			target="_blank"
		>
			Github Notification Documentation
		</a>
	</blockquote>
	<blockquote>
		For more information, check out&nbsp;<a
			class="link text-primary"
			href="https://docs.github.com/en/pull-requests/collaborating-with-pull-requests/proposing-changes-to-your-work-with-pull-requests/creating-a-pull-request-from-a-fork"
			>Github Pull Request Documentation</a
		>.
	</blockquote>
</main>
