import { Injectable } from '@angular/core';
import { Http } from '@angular/http';
import 'rxjs/add/operator/toPromise';


@Injectable()
export class ProductService {
    constructor(private http : Http) { }
    
    productsUrl = 'http://localhost:3000/products';
    getProducts(): Promise<any[]> {
         return this.http.get(this.productsUrl)
               .toPromise()
               .then(response => response.json())
               .catch(function(err){
                   console.error(err);
               });
    }
}