import { PruebaProjectPage } from './app.po';

describe('prueba-project App', () => {
  let page: PruebaProjectPage;

  beforeEach(() => {
    page = new PruebaProjectPage();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('app works!');
  });
});
