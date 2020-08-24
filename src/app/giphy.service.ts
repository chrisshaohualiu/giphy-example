import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root',
})
export class GiphyService {
  constructor(private http: HttpClient) {}
  baseUrl: string = 'https://api.giphy.com/v1/gifs/search';
  key: string = 'XBWtkhEBFpWdNnxTY2TwolO1eTwFpXEV';

  getData: any = (searchTerm: string) => {
    return this.http.get(this.baseUrl, {
      params: {
        api_key: this.key,
        q: searchTerm,
      },
    });
  };
}
