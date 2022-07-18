import { Component, OnInit } from '@angular/core';
import { Process } from 'src/app/models/process';
import { FormControlService } from 'src/app/services/form-control.service';
import * as data from '../../../assets/properties.json'

@Component({
  selector: 'app-contacts-info',
  templateUrl: './contacts-info.component.html',
  styleUrls: ['./contacts-info.component.css']
})
export class ContactsInfoComponent implements OnInit {
  items!: any
  labels: any = (data as any);

  constructor(private fcs: FormControlService) { }

  ngOnInit(): void {
    this.items = this.fcs.createForm(Process.insured);
  }

}
