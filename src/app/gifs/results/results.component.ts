import { Component } from '@angular/core';
import { GifsService } from '../services/gifs.service';
import { Gif } from '../interface/gif.interface';

@Component({
  selector: 'app-results',
  templateUrl: './results.component.html',
  styles: [
  ]
})
export class ResultsComponent {

  /**
   * Getter Giphy Results
   */
  get giphyResults(): Gif[] {

    return this.gifsService.giphyResults;
  }    

  constructor(private gifsService: GifsService) { }
}
