import {Component, OnInit} from '@angular/core';
import {NewsItem} from "./news-item.interface";
import {API} from "aws-amplify";

@Component({
  selector: 'app-news-items',
  templateUrl: './news-items.component.html',
  styleUrls: ['./news-items.component.scss']
})
export class NewsItemsComponent implements OnInit {
  public newsItems: Array<NewsItem> = [];

  ngOnInit() {
    API.get('newsapi', '/news', {})
      .then(response => this.newsItems = response)
      .catch(error => { console.log('error:', error.response)});
  }
}
