import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class GifsService {

  private _history: string[] = [];

  /**
   * Getter History
   */
  get history(): string[] {

    return [...this._history];
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
  }
}
