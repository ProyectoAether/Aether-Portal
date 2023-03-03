import { render } from '@testing-library/svelte';
import { expect } from 'vitest';
import AetherIcon from './aetherIcon.svelte';

it('does not show', async () => {
	const { container } = render(AetherIcon);
	expect(container.querySelector('path')).not.toBeInTheDocument();
});

it('does shows', async () => {
	const { container } = render(AetherIcon, { show: true });
	expect(container.querySelector('path')).toBeInTheDocument();
});
