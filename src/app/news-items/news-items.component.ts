import { Component } from '@angular/core';
import {FormBuilder, FormGroup, Validators} from "@angular/forms";
import {NewsItem} from "./news-item.interface";
import { API } from 'aws-amplify';

@Component({
  selector: 'app-news-items',
  templateUrl: './news-items.component.html',
  styleUrls: ['./news-items.component.css']
})
export class NewsItemsComponent {
  public createForm: FormGroup;

  public newsItems: Array<NewsItem> = [];

  constructor(private fb: FormBuilder) {
    this.createForm = this.fb.group({
      title: ['', Validators.required],
      description: ['', Validators.required],
      date: ['', Validators.required]
    });
  }

  public onCreate(newsItem: NewsItem) {
    API.put('newsapi', '/news', { body: newsItem, headers: {}})
      .then(() => console.log)
      .catch(error => { console.log(error.response)});
  }
}
