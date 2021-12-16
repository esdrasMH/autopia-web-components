import { newE2EPage } from '@stencil/core/testing';

describe('ap-card', () => {
  it('renders', async () => {
    const page = await newE2EPage();
    await page.setContent('<ap-card></ap-card>');

    const element = await page.find('ap-card');
    expect(element).toHaveClass('hydrated');
  });
});
