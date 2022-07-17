import { Component, OnInit } from '@angular/core';
import { Process } from 'src/app/models/process';
import { FormControlService } from 'src/app/services/form-control.service';

@Component({
  selector: 'app-contacts-info',
  templateUrl: './contacts-info.component.html',
  styleUrls: ['./contacts-info.component.css']
})
export class ContactsInfoComponent implements OnInit {
  items!: any

  constructor(private fcs: FormControlService) { }

  ngOnInit(): void {
    this.items = this.fcs.createForm(Process.insured);
  }

}
