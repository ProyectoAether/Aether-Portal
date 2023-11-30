import { test, expect } from '@playwright/test';

test('main page', async ({ page }) => {
  await page.goto('/');
  await page.getByText('Number of Ontologies').click();
  await page.getByText('Number of Classes').click();
  await page.getByText('Number of Datatype Properties').click();
  await page.getByText('Number of Object Properties').click();
  await page.getByText('This is an ontology portal').click();
  await page.getByRole('main').getByRole('img', { name: 'Aether Portal Logo' }).click();
  await page.getByRole('link', { name: 'Aether Portal Logo' }).click();
  await page.getByLabel('Go to home').click();
});
test('submit page', async ({ page }) => {
  await page.goto('/submit');
  await page.getByRole('heading', { name: 'Submit an Ontology' }).click();
  const page1Promise = page.waitForEvent('popup');
  await page.getByRole('link', { name: 'Github Notification' }).click();
  const page1 = await page1Promise;
  await page.getByRole('link', { name: 'Github Pull Request' }).click();
});

test('search page', async ({ page }) => {
  await page.goto('/search');
  await page.getByRole('heading', { name: 'Search for Classes and' }).click();
  await page.getByTestId('search-input').click();
  await page.getByTestId('search-input').fill('bigowl');
  await page.getByRole('button', { name: '2' }).click();
  await page.getByRole('button', { name: '3' }).click();
  await page.getByTestId('go-to-end-btn').click();
  await page.getByRole('button', { name: 'A-Z sort' }).click();
  await page.getByRole('button', { name: 'Z-A sort' }).click();
  await page.getByTestId('go-to-start-btn').click();
  await page.locator('svg').first().click();
  await page.getByTestId('search-input').click();
  await page.getByTestId('search-input').fill('bigowl4dq');
  await page.getByRole('row', { name: '1 Accuracy Documentation Link' }).getByRole('link').nth(1).click();
});
test('ontologies page', async ({ page }) => {
  await page.goto('/ontologies');
  await page.getByTestId('search-input').click();
  await page.getByTestId('search-input').fill('bigowlalgorithm');
  await page.getByRole('link', { name: 'BIGOWLAlgorithms This' }).click();
  await page.getByRole('cell', { name: 'title' }).click();
  await page.getByRole('cell', { name: 'uri' }).click();
  await page.getByRole('cell', { name: 'prefix' }).click();
  await page.getByRole('cell', { name: 'description' }).click();
  await page.getByRole('cell', { name: 'creator' }).click();
  await page.getByRole('cell', { name: 'publisher' }).click();
  await page.getByRole('cell', { name: 'created' }).click();
  await page.getByRole('cell', { name: 'rights' }).click();
  await page.getByRole('cell', { name: 'imports' }).click();
  await page.getByRole('cell', { name: 'Number of Individuals' }).click();
  await page.getByRole('cell', { name: 'Number of Classes' }).click();
  await page.getByRole('cell', { name: 'Number of Datatype Properties' }).click();
  await page.getByRole('cell', { name: 'Number of Object Properties' }).click();
  await page.getByRole('button', { name: '2' }).click();
  await page.getByRole('button', { name: '3' }).click();
  await page.getByTestId('go-to-end-btn').click();
  await page.getByTestId('go-to-start-btn').click();
  await page.getByTestId('hierarchy-view').check();
  await page.getByText('BIGOWLAlgorithms:Algorithm').click();
  await page.getByText('BIGOWLAlgorithms:Algorithm').click();
  await page.getByText('BIGOWLAlgorithms:RFPredict').click();
  await page.getByText('Table Class Hierarchy').click();
  await page.getByTestId('mappings-toggle').check();
  await page.getByRole('cell', { name: 'Referenced classes' }).click();
  await page.getByRole('cell', { name: 'Ontology', exact: true }).click();
});
