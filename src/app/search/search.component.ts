import { Component } from '@angular/core';

@Component({
  selector: 'app-search',
  templateUrl: './search.component.html',
  styleUrls: ['./search.component.scss']
})
export class SearchComponent {

  searchQuery: string = "";
  searchResults: any[] = [];

  search(){
    console.log("Hey there...", this.searchQuery);
    this.searchResults = [
      { bookName: 'Book A', author: 'ABC', price: 20.99, location: 'New York' },
      { bookName: 'Book B', author: 'ABC', price: 15.49, location: 'Los Angeles' },
      { bookName: 'Book C', author: 'ABC', price: 12.99, location: 'Chicago' }
      // Add more results as needed
    ];
  }
}
