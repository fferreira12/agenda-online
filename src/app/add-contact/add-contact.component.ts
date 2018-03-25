import { Component, OnInit, ViewChild } from '@angular/core';
import { Contact } from '../contact';
import { NgForm } from '@angular/forms';

@Component({
  selector: 'app-add-contact',
  templateUrl: './add-contact.component.html',
  styleUrls: ['./add-contact.component.css']
})
export class AddContactComponent implements OnInit {

  private onAddMode: boolean = false;
  private contact: Contact;
  @ViewChild('f') contactForm: NgForm;

  private dataItems = {
    telefone: 1,
    email: 1,
    endereco: 1,
    redesSociais: 1
  }

  constructor() { }

  ngOnInit() {
    //this.contact = new Contact();
  }

  onClickAddContact() {
    this.onAddMode = !this.onAddMode;
  }

  onAddItem(type: string) {
    this.dataItems[type] += 1;
  }

  onRemoveItem(type: string, item: any) {
    let index = this.contact[type].indexOf(item);
    if (index > -1) {
      this.dataItems[type].splice(index, 1);
    }
  }

  onSave() {
    this.contact = new Contact({
      nome: this.contactForm.value['nome'],
      nome_fonetico: this.contactForm.value['nome_fonetico'],
      sobrenome: this.contactForm.value['sobrenome'],
      sobrenome_fonetico: this.contactForm.value['sobrenome_fonetico'],
      empresa: this.contactForm.value['empresa'],
      empresa_fonetico: this.contactForm.value['empresa_fonetico'],
      
    });
    console.log(this.contact);
  }
}
