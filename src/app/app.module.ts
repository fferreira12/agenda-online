import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { ReactiveFormsModule, FormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';
import { HttpClientModule } from '@angular/common/http';

import { AppComponent } from './app.component';
import { SearchBarComponent } from './search-bar/search-bar.component';
import { ContactListItemComponent } from './contact-list-item/contact-list-item.component';
import { ContactListComponent } from './contact-list/contact-list.component';
import { ContactMockup } from './contact.mockup.service';
import { AddContactComponent } from './add-contact/add-contact.component';
import { ContactDetailComponent } from './contact-detail/contact-detail.component';


@NgModule({
  declarations: [
    AppComponent,
    SearchBarComponent,
    ContactListItemComponent,
    ContactListComponent,
    AddContactComponent,
    ContactDetailComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    ReactiveFormsModule, 
    CommonModule,
    HttpClientModule
  ],
  providers: [
    ContactMockup
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
