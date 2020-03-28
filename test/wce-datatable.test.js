import { html, fixture, expect } from '@open-wc/testing';

import '../wces-datatable.js';

describe('WcesDatatable', () => {
  it('can be instantiated without any property specified', async () => {
    await fixture(html`
      <wces-datatable></wces-datatable>
    `);
  });

  it('passes the a11y audit', async () => {
    const el = await fixture(html`
      <wces-datatable></wces-datatable>
    `);

    await expect(el).shadowDom.to.be.accessible();
  });
});
