import { Process } from './../../models/process';
import { FormControlService } from 'src/app/services/form-control.service';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-process-info',
  templateUrl: './process-info.component.html',
  styleUrls: ['./process-info.component.css']
})
export class ProcessInfoComponent implements OnInit {
  items!: any
  constructor(private fcs: FormControlService) { }

  ngOnInit(): void {
    this.items = this.fcs.createForm(Process.superClaim);
  }

}
