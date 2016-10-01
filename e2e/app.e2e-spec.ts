import { ShoppingCartClientPage } from './app.po';

describe('shopping-cart-client App', function() {
  let page: ShoppingCartClientPage;

  beforeEach(() => {
    page = new ShoppingCartClientPage();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('app works!');
  });
});
