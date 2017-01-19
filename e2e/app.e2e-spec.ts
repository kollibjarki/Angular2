import { RetailAngularPage } from './app.po';

describe('retail-angular App', function() {
  let page: RetailAngularPage;

  beforeEach(() => {
    page = new RetailAngularPage();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('app works!');
  });
});
