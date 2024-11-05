import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { AboutComponent } from './about/about.component';
import { ShopComponent } from './shop/shop.component';
import { ContactComponent } from './contact/contact.component';
import { FooterComponent } from './footer/footer.component';
import { HeaderComponent } from './header/header.component';
import { CartComponent } from './cart/cart.component';
import { CheckoutComponent } from './checkout/checkout.component';
import { DetailcartComponent } from './detailcart/detailcart.component';

const routes: Routes = [
  {path:'',component:HomeComponent},
  {path:'header',component:HeaderComponent},
  {path:'about',component:AboutComponent},
  {path:'shop',component:ShopComponent},
  {path:'contact',component:ContactComponent},
  {path:'footer',component:FooterComponent},  
  {path:'cart',component:CartComponent},
  {path:'checkout',component:CheckoutComponent},
  {path:'detailcart/:id',component:DetailcartComponent}     
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
