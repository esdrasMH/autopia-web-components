import { newSpecPage } from '@stencil/core/testing';
import { ApCard } from '../ap-card';

describe('ap-card', () => {
  it('renders', async () => {
    const page = await newSpecPage({
      components: [ApCard],
      html: `<ap-card></ap-card>`,
    });
    expect(page.root).toEqualHtml(`
      <ap-card>
        <mock:shadow-root>
          <slot></slot>
        </mock:shadow-root>
      </ap-card>
    `);
  });
});
