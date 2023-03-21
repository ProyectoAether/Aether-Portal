<script lang="ts">
	import help0 from '$lib/assets/img/help-0.png';
	import help1 from '$lib/assets/img/help-1.png';
	import help2 from '$lib/assets/img/help-2.png';
	import help3 from '$lib/assets/img/help-3.png';
	import help4 from '$lib/assets/img/help-4.png';
</script>

<title>Help</title>
<meta
	name="description"
	content="Provides instructions to update the collection of ontologies that the app shows and filters.
    It is expected to be easy to understand so that any user is able to upload ontologies to the page"
/>
<main class="min-h-screen container p-8 prose">
	<h1>Submit a Ontology</h1>
	<blockquote>Make sure that your OWL ontology has the RDF/XML format.</blockquote>
	<blockquote>Follow this instructions in the "main" branch</blockquote>
	<ol>
		<li>
			<p class="flex items-center gap-3">
				Go to our Github repository
				<a href="https://github.com/ProyectoAether/Aether-Portal">
					<svg class="w-8 h-8" fill="currentColor" viewBox="0 0 24 24"
						><path
							fill-rule="evenodd"
							d="M12 2C6.477 2 2 6.484 2 12.017c0 4.425 2.865 8.18 6.839 9.504.5.092.682-.217.682-.483 0-.237-.008-.868-.013-1.703-2.782.605-3.369-1.343-3.369-1.343-.454-1.158-1.11-1.466-1.11-1.466-.908-.62.069-.608.069-.608 1.003.07 1.531 1.032 1.531 1.032.892 1.53 2.341 1.088 2.91.832.092-.647.35-1.088.636-1.338-2.22-.253-4.555-1.113-4.555-4.951 0-1.093.39-1.988 1.029-2.688-.103-.253-.446-1.272.098-2.65 0 0 .84-.27 2.75 1.026A9.564 9.564 0 0112 6.844c.85.004 1.705.115 2.504.337 1.909-1.296 2.747-1.027 2.747-1.027.546 1.379.202 2.398.1 2.651.64.7 1.028 1.595 1.028 2.688 0 3.848-2.339 4.695-4.566 4.943.359.309.678.92.678 1.855 0 1.338-.012 2.419-.012 2.747 0 .268.18.58.688.482A10.019 10.019 0 0022 12.017C22 6.484 17.522 2 12 2z"
							clip-rule="evenodd"
						/></svg
					>
				</a>
			</p>
		</li>
		<li>Click on ontologies.txt and start making changes.</li>
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
