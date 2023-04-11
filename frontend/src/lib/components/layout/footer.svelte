<script lang="ts">
	import KhaosLogo from '$lib/assets/img/khaos-logo.png';
	import AetherLogo from '$lib/assets/img/aether-logo.png';
	import AetherPortalLogo from '$lib/assets/svg/aether-portal-logo.svg';
	import TwitterIcon from '$lib/assets/svg/twitter-icon.svg';
	import EmailIcon from '$lib/assets/svg/email-icon.svg';
	import GithubIcon from '$lib/assets/svg/github-icon.svg';
	import { base } from '$app/paths';
</script>

<footer class="bg border-t border-t-gray-100 h-full">
	<div class="mx-auto w-full container p-4 sm:p-6">
		<div class="flex md:justify-between">
			<ul class="mb-6 md:mb-0 flex md:justify-center items-center gap-2 menu md:menu-horizontal">
				<li>
					<a data-testid="home-link" href="{base}/" aria-label="Go to home"
						><img
							class="w-72"
							src={AetherPortalLogo}
							alt="Aether Portal Logo"
							width="80px"
							height="45px"
						/>
						<span class="sr-only">Aether Portal</span>
					</a>
				</li>
				<li>
					<a href="https://aether.es">
						<img src={AetherLogo} alt="Aether Logo" width="75px" height="45px" class="w-44" />
						<span class="sr-only">Aether</span>
					</a>
				</li>
				<li>
					<a href="https://khaos.uma.es"
						><img
							class="w-32"
							src={KhaosLogo}
							alt="Khaos Research Logo"
							width="75px"
							height="45px"
							aria-label="Go to Khaos Research Website"
						/>
						<span class="sr-only">Khaos Research</span>
					</a>
				</li>
			</ul>
			<ul class="mb-6 md:mb-0 flex justify-center  items-center gap-2 menu menu-horizontal">
				<li>
					<a href="https://twitter.com/aether_social" aria-label="Go to Aether Twitter">
						<img class="w-11" src={TwitterIcon} alt="Twitter Icon" />
						<span class="sr-only">Twitter page</span>
					</a>
				</li>
				<li>
					<a href="https://github.com/ProyectoAether" aria-label="Go to Aether Github">
						<img class="w-11" src={GithubIcon} alt="Github Icon" />
						<span class="sr-only">GitHub account</span>
					</a>
				</li>
				<li>
					<a href="mailto:info@aether.es" aria-label="Contact to Aether Developer's Team">
						<img class="w-11" src={EmailIcon} alt="Email Icon" />
						<span class="sr-only">Contact us</span>
					</a>
				</li>
			</ul>
		</div>
	</div>
</footer>
