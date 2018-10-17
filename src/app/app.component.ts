import { Component } from '@angular/core';
import { NewsApiService} from './news-api.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  mArticles: Array<any>;
  mSources: Array<any>;

  constructor(private newsapi: NewsApiService) {
    console.log('app component constructor called');
  }
  ngOnInit() {
    // carga de artículos
    this.newsapi.initArticles().subscribe(data => this.mArticles = data['articles']);
    // cargando nuevas busquedas
    this.newsapi.initSources().subscribe(data => this.mSources = data['sources']);
  }

  searchArticles(source) {
    console.log('selected source is: ' + source);
    this.newsapi.getArticlesById(source).subscribe(data => this.mArticles = data['articles']);
  }
}
