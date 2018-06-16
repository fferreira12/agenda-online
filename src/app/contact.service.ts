import { Injectable } from "@angular/core";
import { Contact } from "./contact";
import { HttpClient, HttpHeaders } from "@angular/common/http";

@Injectable()
export class ContactService {

    private getContactsUrl: string = 'http://localhost:8080/AgendaOnline/GetContatos';
    private addContactsUrl: string = 'http://localhost:8080/AgendaOnline/AdicionaContato';
    private deleteContactsUrl: string = 'http://localhost:8080/AgendaOnline/DeletaContato';
    private editContactsUrl: string = 'http://localhost:8080/AgendaOnline/AlteraContato';

    private httpOptions = {
        headers: new HttpHeaders({
            'Content-Type': 'application/json'
        })
    };

    constructor(private http: HttpClient) { }

    getContacts() {

        let contacts = this.http.get<Contact[]>(this.getContactsUrl);
        return contacts;

    }

    addContact(contact: Contact) {
        return this.http.post(this.addContactsUrl, contact, this.httpOptions);
    }

    deleteContact(contact: Contact) {
        return this.http.post(this.deleteContactsUrl, contact, this.httpOptions);
    }

    editContact(contact: Contact) {
        return this.http.post(this.editContactsUrl, contact, this.httpOptions);
    }



}