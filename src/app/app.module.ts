import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { ReactiveFormsModule, FormsModule } from '@angular/forms';

import { AppComponent } from './app.component';
import { SearchBarComponent } from './search-bar/search-bar.component';
import { ContactListItemComponent } from './contact-list-item/contact-list-item.component';
import { ContactListComponent } from './contact-list/contact-list.component';
import { ContactMockup } from './contact.mockup.service';
import { QueryService } from './query.service';
import { AddContactComponent } from './add-contact/add-contact.component';


@NgModule({
  declarations: [
    AppComponent,
    SearchBarComponent,
    ContactListItemComponent,
    ContactListComponent,
    AddContactComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    ReactiveFormsModule
  ],
  providers: [
    ContactMockup,
    QueryService
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
