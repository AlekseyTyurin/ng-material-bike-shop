import { NgMaterialBikeShopPage } from './app.po';

describe('ng-material-bike-shop App', () => {
  let page: NgMaterialBikeShopPage;

  beforeEach(() => {
    page = new NgMaterialBikeShopPage();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('app works!');
  });
});
