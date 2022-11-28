import { Component } from '@angular/core';
import {FormBuilder, FormGroup, Validators} from "@angular/forms";
import {NewsItem} from "../news-items/news-item.interface";
import {API} from "aws-amplify";

@Component({
  selector: 'app-create-news-item',
  templateUrl: './create-news-item.component.html',
  styleUrls: ['./create-news-item.component.css']
})
export class CreateNewsItemComponent {
  public createForm: FormGroup;

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