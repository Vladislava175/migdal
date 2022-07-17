import { Component, OnInit } from '@angular/core';
import { Process } from 'src/app/models/process';
import { FormControlService } from 'src/app/services/form-control.service';

@Component({
  selector: 'app-contacts',
  templateUrl: './contacts.component.html',
  styleUrls: ['./contacts.component.css']
})
export class ContactsComponent implements OnInit {
  items!: any

  constructor(private fcs: FormControlService) { }

  ngOnInit(): void {
    this.items = this.fcs.createForm(Process.superClaim);
  }

}
