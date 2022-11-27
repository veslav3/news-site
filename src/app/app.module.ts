import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import {AmplifyAuthenticatorModule} from "@aws-amplify/ui-angular";
import { NewsItemsComponent } from './news-items/news-items.component';
import {ReactiveFormsModule} from "@angular/forms";

@NgModule({
  declarations: [
    AppComponent,
    NewsItemsComponent
  ],
  imports: [
    BrowserModule,
    AmplifyAuthenticatorModule,
    ReactiveFormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
