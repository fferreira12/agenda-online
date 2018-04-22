import { Component, OnInit, Input } from '@angular/core';
import { Contact } from '../contact';
import { ContactMockup } from '../contact.mockup.service';

@Component({
  selector: 'app-contact-detail',
  templateUrl: './contact-detail.component.html',
  styleUrls: ['./contact-detail.component.css']
})
export class ContactDetailComponent implements OnInit {

  @Input() contact: Contact;

  constructor(private cs: ContactMockup) { }

  ngOnInit() {
  }

  onDeleteContact() {
    this.cs.deleteContact(this.contact);
  }

  onEditContact() {
    this.cs.editContact(this.contact);
  }

}
