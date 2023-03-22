<script lang="ts">
	import help0 from '$lib/assets/img/help-0.png';
	import help1 from '$lib/assets/img/help-1.png';
	import help2 from '$lib/assets/img/help-2.png';
	import help3 from '$lib/assets/img/help-3.png';
	import help4 from '$lib/assets/img/help-4.png';
	import githubIcon from '$lib/assets/svg/github-icon.svg';
</script>

<title>Help</title>
<meta
	name="description"
	content="Provides instructions to update the collection of ontologies that the app shows and filters.
    It is expected to be easy to understand so that any user is able to upload ontologies to the page"
/>
<main class="min-h-screen container p-8 prose">
	<h1>Submit an Ontology</h1>
	<blockquote>Make sure that your OWL ontology has the RDF/XML format.</blockquote>
	<blockquote>Follow this instructions in the "main" branch of the repository.</blockquote>
	<ol>
		<li>
			<p class="flex items-center gap-3">
				<span> Go to our Github repository </span>
				<a href="https://github.com/ProyectoAether/Aether-Portal" rel="noreferrer" target="_blank">
					<img src={githubIcon} height="40px" width="40px" alt="Github Icon" />
				</a>
			</p>
		</li>
		<li>Click on "ontologies.txt" and start making changes.</li>
		<img src={help0} alt="File location" />
		<img src={help1} alt="Edit button" />
		<li>Add your Ontology's URI to the file.</li>
		<img src={help2} alt="Edit file" />
		<blockquote>
			NOTE: The blank lines are only used for clarity purposes, they do not alter the correctness of
			the txt file.
		</blockquote>
		<blockquote>Make sure that your Ontology's URI is correct.</blockquote>
		<li>Give it a title and optionally a comment to commit the change.</li>
		<img src={help3} alt="Commit change" />
		<li>Click on create pull request.</li>
		<img src={help4} alt="Create pull request" />
	</ol>

	<blockquote>
		For more information, check out&nbsp;<a
			class="link text-primary-focus"
			href="https://docs.github.com/en/pull-requests/collaborating-with-pull-requests/proposing-changes-to-your-work-with-pull-requests/creating-a-pull-request-from-a-fork"
			>Github Documentation</a
		>.
	</blockquote>
</main>
