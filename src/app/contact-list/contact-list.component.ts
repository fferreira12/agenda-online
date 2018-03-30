import { Component, OnInit } from '@angular/core';
import { ContactMockup } from '../contact.mockup.service';
import { Contact } from '../contact';
import { AsyncPipe } from '@angular/common';

import { Observable } from 'rxjs/Observable';

@Component({
  selector: 'app-contact-list',
  templateUrl: './contact-list.component.html',
  styleUrls: ['./contact-list.component.css']
})
export class ContactListComponent implements OnInit {

  private contacts$: Observable<Contact[]>;
  private contacts: Contact[];

  constructor(private contactService: ContactMockup) {
    // this.contactService.init();
    // this.contactService.getContacts$().subscribe(this);
    
  }
  
  ngOnInit() {
    // console.log(this.queryService.getContacts$());
    
    //this.contacts$ = this.queryService.getContacts$();
    
    // console.log(this.contacts$);
    
    console.log("ngOnInit on contact list component");
    
    this.contactService.getContacts$().subscribe(this);

    // this.contactService.search('');
  }

  next(contacts: Contact[]): void {
    this.contacts = contacts;
  }
}
