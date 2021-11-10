import { Component, ElementRef, ViewChild } from '@angular/core';
import { GifsService } from '../services/gifs.service';

@Component({
  selector: 'app-search',
  templateUrl: './search.component.html',
  styles: [
  ]
})
export class SearchComponent {

  // Obtain instance HTML element
  @ViewChild('txtSearch') txtSearch !: ElementRef<HTMLInputElement>;

  constructor(private gifsService: GifsService) { }

  public search() : void {

    // Obtain Text to Search
    let txtSearchValue = this.txtSearch.nativeElement.value;
  
    // Check if there is a value
    if(txtSearchValue.trim().length > 0) {

      // Add Search Value to History
      this.gifsService.addSearchValueToHistory(txtSearchValue);

      // Clear Text to Search
      this.txtSearch.nativeElement.value = '';
    }
  }
}
