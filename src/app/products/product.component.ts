import { Component, OnInit, Input } from '@angular/core';
import { ProductService } from './product.service';
import { ShoppingCartService } from '../shopping-cart/shopping-cart.service';

@Component({
    selector: 'product',
    templateUrl: './product.component.html'
})
export class ProductComponent implements OnInit {
    constructor(private shoppingCartService : ShoppingCartService, private productService : ProductService) { }

   products = [];
   cartSize : Number = 0;

  ngOnInit() {
    this.getProducts();
    this.getCartSize();
  }

  private getProducts() {
    this.productService.getProducts().then( (res) => {
      this.products = res;
    });
  }

  private getCartSize(){
    this.shoppingCartService.getShoppingCart().then((cart) => {
      this.updateCartSize(cart);
    });
  }

  addItemToCart(item){
    this.shoppingCartService.addItemToCart(item).then((cart) => {
      this.updateCartSize(cart);
    })    
  }

  private updateCartSize(cart){
    this.cartSize = cart['items'].reduce((prevValue, item) => {
        return prevValue + item.quantity;
    }, 0);
  }
}