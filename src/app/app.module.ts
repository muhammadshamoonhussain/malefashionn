import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HomeComponent } from './home/home.component';
import { ShopComponent } from './shop/shop.component';
import { FooterComponent } from './footer/footer.component';
import { ContactComponent } from './contact/contact.component';
import { AboutComponent } from './about/about.component';
import { HttpClientModule } from "@angular/common/http";
import { HeaderComponent } from './header/header.component';
import { ReactiveFormsModule } from '@angular/forms';
import { CartComponent } from './cart/cart.component';
import { CheckoutComponent } from './checkout/checkout.component';
import { DetailcartComponent } from './detailcart/detailcart.component';
import { MatSlideToggle } from "@angular/material/slide-toggle";

import { AngularFireModule } from "@angular/fire/compat";
import { AngularFirestore } from '@angular/fire/compat/firestore';
import { provideAnimationsAsync } from '@angular/platform-browser/animations/async';

const firebaseConfig = {
  apiKey: "AIzaSyBJjdjFFExnTMu9BQTPh_H8DCQF15GM-Fo",
  authDomain: "project-95984.firebaseapp.com",
  projectId: "project-95984",
  storageBucket: "project-95984.firebasestorage.app",
  messagingSenderId: "171817860782",
  appId: "1:171817860782:web:34fcf23fc6bd067ca8373f"
};

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    ShopComponent,
    FooterComponent,
    ContactComponent,
    AboutComponent,
    HeaderComponent,
    CartComponent,
    CheckoutComponent,
    DetailcartComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    ReactiveFormsModule, 
    AngularFireModule.initializeApp(firebaseConfig),
    MatSlideToggle
  
  ],
  providers: [
    provideAnimationsAsync()
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
