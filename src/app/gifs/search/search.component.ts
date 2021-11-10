import { Component, ElementRef, ViewChild } from '@angular/core';

@Component({
  selector: 'app-search',
  templateUrl: './search.component.html',
  styles: [
  ]
})
export class SearchComponent {

  // Obtain instance HTML element
  @ViewChild('txtSearch') txtSearch !: ElementRef<HTMLInputElement>;

  constructor() { }

  public search() : void {

    // Obtain Text to Search
    let txtSearchValue = this.txtSearch.nativeElement.value;
    console.log(txtSearchValue);

    // Clear Text to Search
    this.txtSearch.nativeElement.value = '';
  }
}
