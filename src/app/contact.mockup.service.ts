import { Injectable, OnInit } from '@angular/core';
import { Contact } from './contact';
import { Observable } from 'rxjs/Observable';
import { of } from 'rxjs/observable/of';
import { CONTACTS } from './mock-contacts';
//import * as Rx from 'rxjs';

@Injectable()
export class ContactMockup {

    private contacts: Contact[];

    constructor() {
        this.init();
    }

    init() {
        this.contacts = CONTACTS;
    }

    getContacts(): Observable<Contact[]> {
        return of(CONTACTS);
    }

    searchContacts(term: String): Observable<Contact[]> {
        let observable = Observable.create((observer) => {
            let matches: Contact[] = [];
            for (let contact of this.contacts) {
                if (contact.search(term)) {
                    matches.push(contact);
                }
            }
            observer.next(matches);
            observer.complete();
        });

        return observable;
    }

    addContact(contact: Contact) {
        this.contacts.push(contact);
    }

}