import { Component, ElementRef, EventEmitter, Output, ViewChild } from '@angular/core';

@Component({
  selector: 'app-search',
  templateUrl: './search.component.html',
  styleUrls: ['./search.component.css']
})

export class SearchComponent {
  searchText:string='';
  //1. Create a event
  @Output()
  onSearchTextChanged: EventEmitter<string> = new EventEmitter<string>();

  @ViewChild('searchInput') searchInputElement:ElementRef;
  
  updateSearchText(inputEl : HTMLInputElement){
    // this.searchText = event?.target.value;
    this.searchText = this.searchInputElement.nativeElement.value;
    this.onSearchTextChanged.emit(this.searchText)
  }
}