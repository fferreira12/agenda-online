import { Component, OnInit, Input } from '@angular/core';
import { Contact } from '../contact';

@Component({
  selector: 'app-contact-list-item',
  templateUrl: './contact-list-item.component.html',
  styleUrls: ['./contact-list-item.component.css']
})
export class ContactListItemComponent implements OnInit {

  @Input() contact: Contact;
  showDetails: boolean = false;

  constructor() { }

  ngOnInit() {
  }

  onShowDetails(){
    this.showDetails = !this.showDetails;
  }

}
