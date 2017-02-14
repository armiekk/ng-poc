import { NgPocPage } from './app.po';

describe('ng-poc App', function() {
  let page: NgPocPage;

  beforeEach(() => {
    page = new NgPocPage();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('app works!');
  });
});
