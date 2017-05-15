import { HgupediaPage } from './app.po';

describe('hgupedia App', function() {
  let page: HgupediaPage;

  beforeEach(() => {
    page = new HgupediaPage();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('app works!');
  });
});
