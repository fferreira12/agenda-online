import { Component, OnInit } from '@angular/core';
import { QueryService } from '../query.service';
import { Subject } from 'rxjs/Subject';


@Component({
  selector: 'app-search-bar',
  templateUrl: './search-bar.component.html',
  styleUrls: ['./search-bar.component.css']
})
export class SearchBarComponent implements OnInit {

  private query: String = '';

  constructor(private queryService: QueryService) { }

  ngOnInit() {
    this.filter(this.query);
  }

  filter(term: String) {
    this.queryService.search(term);
  }

}
