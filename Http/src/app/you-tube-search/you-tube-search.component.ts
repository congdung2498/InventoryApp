import { Component, OnInit } from '@angular/core';
import { YouTubeSearchService } from './you-tube-search.service';
import { SearchResult } from './search-result.model';

@Component({
  selector: 'app-you-tube-search',
  templateUrl: './you-tube-search.component.html',
  styleUrls: ['./you-tube-search.component.css']
})
export class YouTubeSearchComponent implements OnInit {

  results: SearchResult[];
  loading: boolean;

  constructor() { }

  ngOnInit() {
  }

  updateResult(results: SearchResult[]){
    this.results = results;
    console.log("results: ", this.results);
  }

}
