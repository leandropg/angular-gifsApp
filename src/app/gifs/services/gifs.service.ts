import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { SearchGifResponse, Gif } from '../interface/gif.interface';

@Injectable({
  providedIn: 'root'
})
export class GifsService {

  // https://developers.giphy.com/docs/api/endpoint#search
  private giphyApiKey: string = 'pQhHckU8imM19TGhpWwenIcM73uUdWMf';
  private _history: string[] = [];
  public giphyResults: Gif[] = [];

  /**
   * Getter History
   */
  get history(): string[] {

    return [...this._history];
  }

  constructor (private httpClient: HttpClient) {

  }

  public addSearchValueToHistory(searchValue : string) : void {

    // Set the value in lowercase
    searchValue = searchValue.trim().toLowerCase();

    // Check if terms doesn't exist
    if (!this._history.includes(searchValue)) {

      // Add the value
      this._history.unshift(searchValue);

      // Let History of 10 items
      this._history = this._history.splice(0, 10);
    }

    // Make Giphy query
    this.httpClient.get<SearchGifResponse>(`https://api.giphy.com/v1/gifs/search?api_key=pQhHckU8imM19TGhpWwenIcM73uUdWMf&q=${searchValue}}&limit=10`)
      .subscribe((response) => {

        this.giphyResults = response.data;
      })
  }
}
