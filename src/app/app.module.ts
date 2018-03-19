import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';

import { AppComponent } from './app.component';
import { SearchBarComponent } from './search-bar/search-bar.component';
import { ContactListItemComponent } from './contact-list-item/contact-list-item.component';
import { ContactListComponent } from './contact-list/contact-list.component';
import { ContactMockup } from './contact.mockup.service';
import { QueryService } from './query.service';


@NgModule({
  declarations: [
    AppComponent,
    SearchBarComponent,
    ContactListItemComponent,
    ContactListComponent
  ],
  imports: [
    BrowserModule,
    FormsModule
  ],
  providers: [
    ContactMockup,
    QueryService
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
