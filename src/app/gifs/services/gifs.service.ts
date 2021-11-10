import { HttpClient, HttpParams } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { SearchGifResponse, Gif } from '../interface/gif.interface';

@Injectable({
  providedIn: 'root'
})
export class GifsService {

  // https://developers.giphy.com/docs/api/endpoint#search
  private giphyApiKey: string = 'pQhHckU8imM19TGhpWwenIcM73uUdWMf';
  private giphyApiUrl: string = 'https://api.giphy.com/v1/gifs';
  
  private _history: string[] = [];
  public giphyResults: Gif[] = [];

  /**
   * Getter History
   */
  get history(): string[] {

    return [...this._history];
  }

  constructor (private httpClient: HttpClient) {

    // Obtain Local Storage
    /*if (localStorage.getItem('history') != null) {

      this._history = JSON.parse(localStorage.getItem('history')!);
    }*/
    this._history = JSON.parse(localStorage.getItem('history')!) || [];
    this.giphyResults = JSON.parse(localStorage.getItem('giphyResults')!) || [];
  }


  public searchGif(searchValue : string) : void {

    // Set the value in lowercase
    searchValue = searchValue.trim().toLowerCase();

    // Check if terms doesn't exist
    if (!this._history.includes(searchValue)) {

      // Add the value
      this._history.unshift(searchValue);

      // Let History of 10 items
      this._history = this._history.splice(0, 10);

      // Save History in Local Storage
      localStorage.setItem('history', JSON.stringify(this._history));
    }

    // Build parameters
    const httpParams = new HttpParams()
      .set('api_key', this.giphyApiKey)
      .set('q', searchValue)
      .set('limit', '10');

    // Make Giphy query
    this.httpClient.get<SearchGifResponse>(`${ this.giphyApiUrl}/search`, { params: httpParams})
      .subscribe((response) => {

        // Save Results
        this.giphyResults = response.data;

        // Save Results in Local Storage
        localStorage.setItem('giphyResults', JSON.stringify(this.giphyResults));
      })
  }
}
