import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import {FormsModule} from "@angular/forms";
import {NgOptimizedImage} from "@angular/common";
import { FooterComponent } from './components/footer/footer.component';
import { HeaderComponent } from './components/header/header.component';
import { AdvantageComponent } from './components/advantage/advantage.component';
import { ProductComponent } from './components/product/product.component';
import { TextTransformPipe } from './pipes/text-transform.pipe';
import { PhoneNumberPipe } from './pipes/phone-number.pipe';
import { BackgroundIsChangeDirective } from './directives/background-is-change.directive';
import {ProductService} from "./services/product.service";

@NgModule({
  declarations: [
    AppComponent,
    FooterComponent,
    HeaderComponent,
    AdvantageComponent,
    ProductComponent,
    TextTransformPipe,
    PhoneNumberPipe,
    BackgroundIsChangeDirective
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    NgOptimizedImage
  ],
  providers: [ProductService],
  bootstrap: [AppComponent, FooterComponent, HeaderComponent]
})
export class AppModule { }
