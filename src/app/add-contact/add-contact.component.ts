import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-add-contact',
  templateUrl: './add-contact.component.html',
  styleUrls: ['./add-contact.component.css']
})
export class AddContactComponent implements OnInit {

  private onAddMode: boolean = false;

  constructor() { }

  ngOnInit() {
  }

  onClickAddContact() {
    this.onAddMode = !this.onAddMode;
  }

}
