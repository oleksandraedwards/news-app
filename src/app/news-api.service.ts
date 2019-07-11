import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http';
const API_URL = 'https://newsapi.org/v2';
const API_KEY = '2fa502f9e72545d0adbb850d25379f31';
@Injectable({
  providedIn: 'root'
})
export class NewsApiService {

  currentArticle: any;
  constructor(private http: HttpClient) {}

  getData(url) {
    return this.http.get(`${API_URL}/${url}&apiKey=${API_KEY}`);
  }
}
