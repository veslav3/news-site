import {Component} from '@angular/core';
import {NewsItem} from "./news-item.interface";

@Component({
  selector: 'app-news-items',
  templateUrl: './news-items.component.html',
  styleUrls: ['./news-items.component.scss']
})
export class NewsItemsComponent {
  public newsItems: Array<NewsItem> = [];
}
