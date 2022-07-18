import { Component, OnInit } from '@angular/core';
import { Process } from 'src/app/models/process';
import { FormControlService } from 'src/app/services/form-control.service';
import * as data from '../../../assets/properties.json'

@Component({
  selector: 'app-contacts',
  templateUrl: './contacts.component.html',
  styleUrls: ['./contacts.component.css']
})
export class ContactsComponent implements OnInit {
  items!: any
  labels: any = (data as any);

  constructor(private fcs: FormControlService) { }

  ngOnInit(): void {
    let process = {...Process.contactPersons[0], addContact: this.addContact}
    this.items = this.fcs.createForm(process);
  }
  
  addContact = () => {
    alert("Add contact")
  }

}
