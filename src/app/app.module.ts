import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { ItemsComponent } from './items/items.component';
import { CardsComponent } from './items/cards/cards.component';
import { NavbarComponent } from './navbar/navbar.component';
import { StockPipe } from './pipes/stock.pipe';
import { LoginComponent } from './login/login.component';
import { SigninComponent } from './signin/signin.component';
import { CartComponent } from './cart/cart.component';
import { NotfoudComponent } from './notfoud/notfoud.component';
import { DetailsComponent } from './details/details.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { SliderComponent } from './slider/slider.component';

@NgModule({
  declarations: [
    AppComponent,
    ItemsComponent,
    CardsComponent,
    NavbarComponent,
    StockPipe,
    LoginComponent,
    SigninComponent,
    CartComponent,
    NotfoudComponent,
    DetailsComponent,
    SliderComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    ReactiveFormsModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
