import { NewAngularPage } from './app.po';

describe('new-angular App', function() {
  let page: NewAngularPage;

  beforeEach(() => {
    page = new NewAngularPage();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('app works!');
  });
});
