import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { ContactsComponent } from './components/contacts/contacts.component';
import { ProcessInfoComponent } from './components/process-info/process-info.component';
import { ContactsInfoComponent } from './components/contacts-info/contacts-info.component';
import { ReactiveFormsModule } from '@angular/forms';
import { DynamicItemComponent } from './dynamic/dynamic-item/dynamic-item.component';
import { FormComponent } from './components/form/form.component';
import { FormControlService } from './services/form-control.service';
import { DynamicFormComponent } from './dynamic/form/dynamic-form/dynamic-form.component';

@NgModule({
  declarations: [
    AppComponent,
    ContactsComponent,
    ProcessInfoComponent,
    ContactsInfoComponent,
    DynamicItemComponent,
    DynamicFormComponent,
    FormComponent
  ],
  imports: [
    BrowserModule,
    ReactiveFormsModule

  ],
  providers: [FormControlService],
  bootstrap: [AppComponent]
})
export class AppModule { }
