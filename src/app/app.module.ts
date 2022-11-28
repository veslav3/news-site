import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import {AmplifyAuthenticatorModule} from "@aws-amplify/ui-angular";
import { NewsItemsComponent } from './news-items/news-items.component';
import {ReactiveFormsModule} from "@angular/forms";
import { CreateNewsItemComponent } from './create-news-item/create-news-item.component';
import { AppRoutingModule } from './app-routing.module';
import {RouterLink, RouterOutlet} from "@angular/router";

@NgModule({
  declarations: [
    AppComponent,
    NewsItemsComponent,
    CreateNewsItemComponent
  ],
  imports: [
    BrowserModule,
    AmplifyAuthenticatorModule,
    ReactiveFormsModule,
    AppRoutingModule,
    RouterLink,
    RouterOutlet
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
