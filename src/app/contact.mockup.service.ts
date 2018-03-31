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

        //initializes subject of contacts
        //this.subject = new Subject();

        //configures observable of contacts
        // this.contacts$ = this.queryString.pipe(
        //     // wait 300ms after each keystroke before considering the term
        //     debounceTime(300),

        //     // ignore new term if same as previous term
        //     distinctUntilChanged(),

        //     // switch to new search observable each time the term changes
        //     switchMap((term: string) => this.searchContacts(term)),
        // );

        // console.log("contact service initialized");

        this.behaviorSubject = new BehaviorSubject(this.contacts);


    }

    //called on every keystroke
    search(term: String): void {
        this.queryString.next(term);
    }

    // //actually searches contacts based on a search string
    // searchContacts2(term: String): Observable<Contact[]> {
    //     this.contacts$ = Observable.create((observer) => {
    //         let matches: Contact[] = [];
    //         for (let contact of this.contacts) {
    //             if (contact.search(term)) {
    //                 matches.push(contact);
    //             }
    //         }
    //         observer.next(matches);
    //         observer.complete();
    //     });
    //     // .pipe(
    //     //     distinctUntilChanged(),
    //     //     debounceTime(1000)
    //     // );
    //     return this.contacts$;
    // }

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
    addContact(contact: Contact) {
        this.contacts.push(contact);
        this.behaviorSubject.next(this.contacts);
    }

    //call next on the contact subject
    //purpose: update all observers of contacts
    // refreshContacts() {
    //     this.behaviorSubject.n
    // }

    //returns the observable of contacts
    getContacts$(): BehaviorSubject<Contact[]> {
        // return (this.contacts$);
        return this.behaviorSubject;
    }
}