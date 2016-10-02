import { Component, EventEmitter, OnInit, Output } from '@angular/core';
import { ShoppingCartService } from './shopping-cart/shopping-cart.service';


@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent extends OnInit {
  
  ngOnInit(){
  }
}
