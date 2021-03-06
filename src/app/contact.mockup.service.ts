import { Injectable, OnInit } from '@angular/core';
import { Contact } from './contact';
import { Observable } from 'rxjs/Observable';
import { of } from 'rxjs/observable/of';
import { CONTACTS } from './mock-contacts';
import { Subject } from 'rxjs/Subject';
import { debounceTime, distinctUntilChanged, switchMap } from 'rxjs/operators';
import { BehaviorSubject } from 'rxjs';
import { HttpClient } from '@angular/common/http';
import { HttpHeaders } from '@angular/common/http';
import { ContactService } from './contact.service';
// import * as Rx from 'rxjs';

@Injectable()
export class ContactMockup {

    //web config
    private url: string = 'AgendaOnline/AdicionaContato';

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

    constructor(private http: HttpClient, private cs: ContactService) {
        this.init();
    }

    init() {
        //gets mockup data
        //this.contacts = CONTACTS;
        this.behaviorSubject = new BehaviorSubject(null);
        this.editingContact = new BehaviorSubject<Contact>(null);
        this.refreshContacts()

    }

    refreshContacts() {
        this.cs.getContacts()
            .subscribe((value) => {
                let conts = value.map((contact) => {
                    return new Contact(contact);
                });
                
                this.contacts = conts;
                //this.behaviorSubject = new BehaviorSubject(this.contacts);
                this.behaviorSubject.next(this.contacts);
            });
    }


    //called on every keystroke
    search(term: String): void {
        this.queryString.next(term);
    }

    searchContacts(term: string): BehaviorSubject<Contact[]> {

        // let matches: Contact[] = [];
        // if (this.contacts != null) {
        //     for (let contact of this.contacts) {
        //         if (contact.search(term)) {
        //             matches.push(contact);
        //         }
        //     }

        //     this.behaviorSubject.next(matches);
        //     return this.behaviorSubject;
        // }

        if (this.contacts != null) {
            let matches = this.contacts.filter((contact) => contact.search(term));
            this.behaviorSubject.next(matches);
            return this.behaviorSubject;
        }


    }

    //adds new contact to the contact property
    //verifies if new contact or editing
    addContact(contact: Contact) {

        //LOCAL VERSION (MOCKUP)
        /*
        if(this.contactOnEdit != null) {
            this.contacts.splice(this.contacts.indexOf(this.contactOnEdit),1,contact);
            this.contactOnEdit = null;
        } else {
            this.contacts.push(contact);
        }
        */

        //SERVLET VERSION
        this.cs.addContact(contact).subscribe((v) => {
            console.log(v);
            this.behaviorSubject.next(this.contacts);
            this.refreshContacts();
        });

    }

    //returns the observable of contacts
    getContacts$(): BehaviorSubject<Contact[]> {
        // return (this.contacts$);
        return this.behaviorSubject;
    }

    deleteContact(contact: Contact) {
        /*let index = this.contacts.indexOf(contact);
        if (index > -1) {
            this.contacts.splice(index, 1);
            this.behaviorSubject.next(this.contacts);
            return true;
        }
        return false;*/

        //servlet version
        this.cs.deleteContact(contact).subscribe((v) => {
            console.log(v);
            this.behaviorSubject.next(this.contacts);
            this.refreshContacts();
        });
    }

    editContact(contact: Contact) {
        this.contactOnEdit = contact;
        this.editingContact.next(contact);

        console.log('finished edit contact inside service');
    }

    saveEditingContact(contact: Contact) {
        this.cs.editContact(contact).subscribe((v) => {
            console.log(v);
            this.behaviorSubject.next(this.contacts);
            this.refreshContacts();
        });
    }

    getEditingContact$() {
        return this.editingContact;
    }

}