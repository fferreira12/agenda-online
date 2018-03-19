import { Component, OnInit } from '@angular/core';
import { ContactMockup } from '../contact.mockup.service';
import { Contact } from '../contact';

import { QueryService } from '../query.service';
import { Observable } from 'rxjs/Observable';

@Component({
  selector: 'app-contact-list',
  templateUrl: './contact-list.component.html',
  styleUrls: ['./contact-list.component.css']
})
export class ContactListComponent implements OnInit {

  private contacts: Contact[];

  constructor(private queryService: QueryService) { }

  ngOnInit() {
    this.queryService.getContacts$().subscribe(contacts => {
      this.contacts = contacts;
    });
    this.queryService.search('');
  }

}
