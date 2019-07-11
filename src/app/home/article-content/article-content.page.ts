import {Component, Input, OnInit} from '@angular/core';
import {NewsApiService} from '../../news-api.service';



@Component({
  selector: 'app-article-content',
  templateUrl: './article-content.page.html',
  styleUrls: ['./article-content.page.scss'],
})
export class ArticleContentPage implements OnInit {
  article;

  constructor(private newsService: NewsApiService,
              ) {}

  ngOnInit() {
    this.article = this.newsService.currentArticle;
    // console.log(this.newsService.currentArticle);
  }
}
