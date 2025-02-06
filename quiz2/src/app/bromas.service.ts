import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class BromasService {
  private categoriesUrl = 'https://api.chucknorris.io/jokes/categories';
  private randomJokeUrl = 'https://api.chucknorris.io/jokes/random';

  constructor(private http: HttpClient) {}

  getJokeCategories(): Observable<any> {
    return this.http.get(this.categoriesUrl);
  }

  getRandomJoke(): Observable<any> {
    return this.http.get(this.randomJokeUrl);
  }
}
