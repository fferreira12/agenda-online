import { Injectable, OnInit } from '@angular/core';
import { Contact } from './contact';
import { Observable } from 'rxjs/Observable';
import { of } from 'rxjs/observable/of';
import { CONTACTS } from './mock-contacts';
import { Subject } from 'rxjs/Subject';
import { debounceTime, distinctUntilChanged, switchMap } from 'rxjs/operators';
import { BehaviorSubject } from 'rxjs';
// import * as Rx from 'rxjs';

@Injectable()
export class ContactMockup {

    //array of contacts
    private contacts: Contact[];

    //contact being edited
    private contactOnEdit: Contact;
    private editingContact: BehaviorSubject<Contact>;

    //subject of contacts, con multicast to many observers
    //is an observable and an observer at the same time
    //private subject: Subject<Contact[]>;

    //observable of contacts
    private contacts$: Observable<Contact[]>;
    private behaviorSubject: BehaviorSubject<Contact[]>;

    //subject of the query string
    private queryString = new Subject<String>();

    constructor() {
        this.init();
    }

    init() {
        //gets mockup data
        this.contacts = CONTACTS;

        this.behaviorSubject = new BehaviorSubject(this.contacts);

        this.editingContact = new BehaviorSubject<Contact>(null);
    }

    //called on every keystroke
    search(term: String): void {
        this.queryString.next(term);
    }

    searchContacts(term: String): BehaviorSubject<Contact[]> {

        let matches: Contact[] = [];
        for (let contact of this.contacts) {
            if (contact.search(term)) {
                matches.push(contact);
            }
        }
        this.behaviorSubject.next(matches);

        return this.behaviorSubject;
    }

    //adds new contact to the contact property
    //verifies if new contact or editing
    addContact(contact: Contact) {

        if(this.contactOnEdit != null) {
            this.contacts.splice(this.contacts.indexOf(this.contactOnEdit),1,contact);
            this.contactOnEdit = null;
        } else {
            this.contacts.push(contact);
        }

        this.behaviorSubject.next(this.contacts);
    }

    //returns the observable of contacts
    getContacts$(): BehaviorSubject<Contact[]> {
        // return (this.contacts$);
        return this.behaviorSubject;
    }

    deleteContact(contact: Contact): boolean {
        let index = this.contacts.indexOf(contact);
        if (index > -1) {
            this.contacts.splice(index, 1);
            this.behaviorSubject.next(this.contacts);
            return true;
        }
        return false;
    }

    editContact(contact: Contact) {
        this.contactOnEdit = contact;
        this.editingContact.next(contact);
        // this.contactOnEdit = null;
    }

    getEditingContact$() {
        return this.editingContact;
    }

}