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


  constructor(public contactService: ContactMockup) {
  }
  
  ngOnInit() {
  }

}
