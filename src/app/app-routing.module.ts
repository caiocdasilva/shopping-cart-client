import { NgModule, ModuleWithProviders } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { AppComponent } from './app.component';
import { ShoppingCartComponent } from './shopping-cart/shopping-cart.component';
import { ProductComponent } from './products/product.component';

const routes: Routes = [
  { path: '', component: AppComponent },
  { path: 'products', component: ProductComponent },
  { path: 'shoppingcart', component: ShoppingCartComponent }
];


@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
  providers: []
})
export class ShoppingCartClientRoutingModule { }

export const routing: ModuleWithProviders = RouterModule.forRoot(routes);

