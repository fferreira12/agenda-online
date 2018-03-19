import { Injectable, OnInit } from '@angular/core';
import { Subject } from 'rxjs/Subject';
import { Observable } from 'rxjs/Observable';
import {
    debounceTime, distinctUntilChanged, switchMap
} from 'rxjs/operators';

import { Contact } from './contact';
import { ContactMockup } from './contact.mockup.service';

@Injectable()
export class QueryService implements OnInit {

    // Observable string sources
    contacts$: Observable<Contact[]>;
    private queryString = new Subject<String>();
    
    // // Observable string streams
    // queryString$ = this.queryString.asObservable();
    
    constructor(private contactService: ContactMockup) { }
    
    // Service message commands
    search(term: String): void {
        console.log('term: ' + term);
        this.queryString.next(term);
    }
    
    ngOnInit() {
        this.contacts$ = this.queryString.pipe(
            // wait 300ms after each keystroke before considering the term
            debounceTime(300),

            // ignore new term if same as previous term
            distinctUntilChanged(),

            // switch to new search observable each time the term changes
            switchMap((term: string) => this.contactService.searchContacts(term)),
        );
        //this.getContacts$();
        //this.queryString.next('');
    }

    getContacts$() {
        if (!this.contacts$) {
            this.ngOnInit();
        }
        return this.contacts$;
    }
}