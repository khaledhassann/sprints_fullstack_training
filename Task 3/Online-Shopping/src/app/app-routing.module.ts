import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CartComponent } from './component/views/cart/cart.component';
import { CheckoutComponent } from './component/views/checkout/checkout.component';
import { ContactComponent } from './component/views/contact/contact.component';
import { DetailComponent } from './component/views/detail/detail.component';
import { HomeComponent } from './component/views/home/home.component';
import { ShopComponent } from './component/shop/shop.component';

const routes: Routes = [
  {path:'', component:HomeComponent},
  {path:'shop',component:ShopComponent},
  {path:'checkout',component:CheckoutComponent},
  {path:'detail',component:DetailComponent},
  {path:'contact',component:ContactComponent},
  {path:'cart',component:CartComponent},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
