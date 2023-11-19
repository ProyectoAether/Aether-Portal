import { test, expect } from '@playwright/test';

test('main page', async ({ page }) => {
  await page.goto('https://portal.aether.es/');
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
  await page.goto('https://portal.aether.es/submit');
  await page.getByRole('heading', { name: 'Submit an Ontology' }).click();
  const page1Promise = page.waitForEvent('popup');
  await page.getByRole('link', { name: 'Github Notification' }).click();
  const page1 = await page1Promise;
  await page.getByRole('link', { name: 'Github Pull Request' }).click();
});

test('search page', async ({ page }) => {
  await page.goto('https://portal.aether.es/search');
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
  await page.goto('https://portal.aether.es/ontologies');
  await page.getByRole('button', { name: 'A-Z sort' }).click();
  await page.getByRole('button', { name: 'Z-A sort' }).click();
  await page.getByRole('button', { name: '2' }).click();
  await page.getByRole('button', { name: '1' }).click();
  await page.getByRole('link', { name: 'e-LION e-LION (e-Learning' }).click();
  await page.getByRole('row', { name: 'title e-LION' }).getByRole('paragraph').click();
  await page.getByText('e-lion', { exact: true }).click();
  await page.getByText('e-LION (e-Learning').click();
  await page.getByRole('cell', { name: 'title' }).click();
  await page.getByTestId('hierarchy-view').check();
  await page.getByText('foaf:Person').dblclick();
  await page.getByText('Table Class Hierarchy').click();
  await page.getByTestId('mappings-toggle').check();
  await page.getByRole('row', { name: 'http://schema.org 4 toggle' }).getByRole('button').click();
  await page.getByRole('row', { name: 'http://schema.org 4 toggle' }).getByRole('button').click();
  await page.getByTestId('table-view').check();
  await page.locator('label').filter({ hasText: 'Others' }).click();
  await page.locator('label').filter({ hasText: 'Others' }).click();
  await page.getByLabel('Individuals').uncheck();
  await page.getByLabel('Datatype properties').uncheck();
  await page.getByLabel('Object properties').uncheck();
  await page.getByLabel('Classes').uncheck();
  await page.getByRole('heading', { name: 'No results' }).click();
});
