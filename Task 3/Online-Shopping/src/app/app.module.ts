import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { ImageComponentComponent } from './component/image-component/image-component.component';
import { HeaderComponent } from './component/layouts/header/header.component';
import { FooterComponent } from './component/layouts/footer/footer.component';
import { HomeComponent } from './component/views/home/home.component';
import { ShopComponent } from './component/shop/shop.component';
import { DetailComponent } from './component/views/detail/detail.component';
import { CartComponent } from './component/views/cart/cart.component';
import { CheckoutComponent } from './component/views/checkout/checkout.component';
import { ContactComponent } from './component/views/contact/contact.component';
import { CategoriesComponent } from './component/sub-components/categories/categories.component';
import { CategoryComponent } from './component/sub-components/category/category.component';
import { FeaturedComponentsComponent } from './component/sub-components/featured-components/featured-components.component';
import { RecentComponentsComponent } from './component/sub-components/recent-components/recent-components.component';
import { RCsComponent } from './component/sub-components/rcs/rcs.component';
import { FCsComponent } from './component/sub-components/fcs/fcs.component';

@NgModule({
  declarations: [
    AppComponent,
    ImageComponentComponent,
    HeaderComponent,
    FooterComponent,
    HomeComponent,
    ShopComponent,
    DetailComponent,
    CartComponent,
    CheckoutComponent,
    ContactComponent,
    CategoriesComponent,
    CategoryComponent,
    FeaturedComponentsComponent,
    RecentComponentsComponent,
    RCsComponent,
    FCsComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
