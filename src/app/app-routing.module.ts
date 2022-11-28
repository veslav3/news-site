import {NgModule} from '@angular/core';
import {RouterModule, Routes} from "@angular/router";
import {CreateNewsItemComponent} from "./create-news-item/create-news-item.component";

const routes: Routes = [
  { path: 'create-news-item', component: CreateNewsItemComponent }
]

@NgModule({
  declarations: [],
  imports: [
    RouterModule.forRoot(routes)
  ]
})
export class AppRoutingModule { }
