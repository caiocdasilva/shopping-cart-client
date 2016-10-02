import { Component, OnInit, Input } from '@angular/core';
import { ShoppingCartService } from './shopping-cart.service';
import { ProductService } from '../products/product.service';

@Component({
    selector: 'cart',
    templateUrl: './shopping-cart.component.html',
    styleUrls: ['./shopping-cart.component.css']
})
export class ShoppingCartComponent implements OnInit {
    constructor(private shoppingCartService: ShoppingCartService, private productService: ProductService) { }

    items = [];
    amount = 0;
    cartSize = 0;

    ngOnInit() {
        this.getShoppingCart();
    }

    getShoppingCart() {
        this.items = [];
        this.shoppingCartService.getShoppingCart().then((cart) => {
            cart['items'].map((item) => {
                this.productService.getProducts().then((res) => {
                    res.forEach((product) => {
                        if (item.product_id == product._id || item.product_id === product._id) {
                            product.quantity = item.quantity;
                            this.items.push(product);
                        }
                    });
                });
            });
            this.cartSize = cart['items'].reduce((prevValue, item) => {
                return prevValue + item.quantity;
            }, 0);
            this.amount = cart['amount'];
        });
    }

    decreaseItem(item) {
        this.shoppingCartService.decreaseItem(item).then(_ => {
            this.getShoppingCart();
        });
    }
}