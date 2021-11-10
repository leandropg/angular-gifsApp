import { Component } from '@angular/core';
import { GifsService } from '../services/gifs.service';

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
  get giphyResults(): any[] {

    return this.gifsService.giphyResults;
  }    

  constructor(private gifsService: GifsService) { }
}
