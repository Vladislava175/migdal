import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { ContactsComponent } from './components/contacts/contacts.component';
import { ProcessInfoComponent } from './components/process-info/process-info.component';
import { ContactsInfoComponent } from './components/contacts-info/contacts-info.component';

@NgModule({
  declarations: [
    AppComponent,
    ContactsComponent,
    ProcessInfoComponent,
    ContactsInfoComponent
  ],
  imports: [
    BrowserModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
