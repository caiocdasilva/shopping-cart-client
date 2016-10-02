import { Injectable } from '@angular/core';
import { Http } from '@angular/http';
import 'rxjs/add/operator/toPromise';


@Injectable()
export class ShoppingCartService {

    constructor(private http: Http) { }

    private shoppingCartUrl = 'http://localhost:3000/shoppingcart';

    getShoppingCart(): Promise<any[]> {
        return this.http.get(this.shoppingCartUrl)
            .toPromise()
            .then(response => response.json())
            .catch(function (err) {
                console.error(err);
            });
    }

    addItemToCart(item): Promise<any[]> {
        var urlAddItem = this.shoppingCartUrl + '/items/' + item['_id'];
        return this.http.post(urlAddItem, '').toPromise().then( _ => {
            return this.getShoppingCart();
        });
    }

    decreaseItem(item): Promise<any> {
        var urlRemoveItem = this.shoppingCartUrl + '/items/' + item['_id'];
        return this.http.delete(urlRemoveItem).toPromise();
    }
}
