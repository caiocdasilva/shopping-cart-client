import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';
import { MaterialModule } from '@angular/material';
import { routing, ShoppingCartClientRoutingModule }  from './app-routing.module';
import { AppComponent } from './app.component';
import { ProductComponent } from './products/product.component';
import { ShoppingCartComponent } from './shopping-cart/shopping-cart.component';
import { ProductService } from './products/product.service';
import { ShoppingCartService } from './shopping-cart/shopping-cart.service';


@NgModule({
  declarations: [
    AppComponent, ProductComponent, ShoppingCartComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpModule,
    routing,
    MaterialModule.forRoot()
  ],
  providers: [ ShoppingCartClientRoutingModule, ProductService, ShoppingCartService],
  bootstrap: [AppComponent]
})
export class AppModule { }

