import {Component, OnInit} from '@angular/core';
import {NewsApiService} from '../news-api.service';
import {Article} from '../article';
import {Router} from '@angular/router';
import {HttpClient} from '@angular/common/http';

@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
})
export class HomePage implements OnInit {

  articles: [];
  article: Article;
  data: any;
  page = 1;
  searchTerm = '';
  key = 'articles';

  constructor(private newsService: NewsApiService,
              private router: Router,
              private http: HttpClient) {}

  searchArticle() {
    return this.http.get('https://newsapi.org/v2/everything?q=' +
        this.searchTerm + '&apiKey=2fa502f9e72545d0adbb850d25379f31').subscribe(
        data => {
          console.log(data);
          this.data = data;
        });
  }


  ngOnInit() {
    this.newsService
        .getData(
            `top-headlines?country=us&category=technology&pageSize=10&page=${
                this.page
                }`
        )
        .subscribe(data => {
          console.log(data);
          this.data = data;
        });
  }

  openArticle(article: Article) {
    this.newsService.currentArticle = article;
    console.log(article);
    this.router.navigateByUrl('article-content' );
  }

  loadMoreNews(event) {
    this.page++;
    console.log(event);
    this.newsService
        .getData(
            `top-headlines?country=us&category=technology&pageSize=5&page=${
                this.page
                }`
        )
        .subscribe(data => {
          console.log(data);
          this.data = data;
          for (const article of data[this.key]) {
            this.data.articles.push(article);
          }
          event.target.complete();
          console.log(this.data);
        });
  }

}
