import { Component, OnInit } from '@angular/core';
import { ContactMockup } from '../contact.mockup.service';
import { Subject } from 'rxjs/Subject';
import { debounceTime, distinctUntilChanged, tap } from 'rxjs/operators';
import { Observable } from 'rxjs/Observable';
import { Contact } from '../contact';


@Component({
  selector: 'app-search-bar',
  templateUrl: './search-bar.component.html',
  styleUrls: ['./search-bar.component.css']
})
export class SearchBarComponent implements OnInit {

  private query: String = '';
  private onAddMode: boolean = false;


  constructor(private contactService: ContactMockup) { }

  ngOnInit() {
    this.filter(this.query);

  }

  filter(term: String) {
    return this.contactService.searchContacts(term);
  }

}