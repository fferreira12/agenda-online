import { Component, OnInit, ViewChild } from '@angular/core';
import { Contact } from '../contact';
import { FormArray, FormBuilder, FormGroup, Validators } from '@angular/forms';
import { ContactMockup } from '../contact.mockup.service';

@Component({
  selector: 'app-add-contact',
  templateUrl: './add-contact.component.html',
  styleUrls: ['./add-contact.component.css']
})
export class AddContactComponent implements OnInit {

  public onAddMode: boolean = false;
  private contactForm: FormGroup;

  constructor(
    private fb: FormBuilder,
    private cs: ContactMockup) {
    this.createForm();
  }

  ngOnInit() {
    this.addItem('telefone');
    this.addItem('email');
    this.addItem('url');
    this.addItem('endereco');
    this.addItem('rede_social');
  }

  createForm() {
    this.contactForm = this.fb.group({
      nome: ['', Validators.required],
      nome_fonetico: '',
      sobrenome: '',
      sobrenome_fonetico: '',
      empresa: '',
      empresa_fonetico: '',
      telefones: this.fb.array([]),
      emails: this.fb.array([]),
      urls: this.fb.array([]),
      enderecos: this.fb.array([]),
      redes_sociais: this.fb.array([])
    });
  }

  setTelefones(telefones: { tipo: String, numero: String }[]) {
    const telefoneFGs = telefones.map(telefone => this.fb.group(telefone));
    const telefoneFormArray = this.fb.array(telefoneFGs);
    this.contactForm.setControl('telefones', telefoneFormArray);
  }

  addTelefone() {
    this.telefones.push(this.fb.group({ tipo: '', numero: '' }));
  }

  addItem(type: String) {
    if (type === 'telefone') {
      this.getItem('telefone').push(this.fb.group({ tipo: '', numero: '' }));
    } else if (type === 'email') {
      this.getItem('email').push(this.fb.group({ tipo: '', email: '' }));
    } else if (type === 'url') {
      this.getItem('url').push(this.fb.group({ tipo: '', url: '' }));
    } else if (type === 'endereco') {
      this.getItem('endereco').push(this.fb.group({ tipo: '', endereco: '' }));
    } else if (type === 'rede_social') {
      this.getItem('rede_social').push(this.fb.group({ rede: '', url: '' }));
    }
  }

  removeTelefone(index: number) {
    this.telefones.removeAt(index);
  }

  removeItem(type: String, index: number) {
    this.getItem(type).removeAt(index);
  }

  get telefones(): FormArray {
    return this.contactForm.get('telefones') as FormArray;
  };

  getItem(type: String): FormArray {
    if (type === 'telefone') {
      return this.contactForm.get('telefones') as FormArray;
    } else if (type === 'email') {
      return this.contactForm.get('emails') as FormArray;
    } else if (type === 'url') {
      return this.contactForm.get('urls') as FormArray;
    } else if (type === 'endereco') {
      return this.contactForm.get('enderecos') as FormArray;
    } else if (type === 'rede_social') {
      return this.contactForm.get('redes_sociais') as FormArray;
    }
  }

  onClickAddContact() {
    this.onAddMode = !this.onAddMode;
  }


  onSave() {
    const saveContact = this.prepareSaveContact();
    console.log(saveContact);
    this.cs.addContact(saveContact);
    this.onClickAddContact();
  }

  prepareSaveContact(): Contact {
    const formModel = this.contactForm.value;
    return new Contact(formModel);
  }

}
