import { Component, Input, OnInit } from '@angular/core';
import { FormGroup } from '@angular/forms';
import { ItemBase } from 'src/app/models/item-base';
import { FormControlService } from 'src/app/services/form-control.service';


@Component({
  selector: 'app-dynamic-form',
  templateUrl: './dynamic-form.component.html',
  styleUrls: ['./dynamic-form.component.css']
})
export class DynamicFormComponent implements OnInit {

  @Input() items: ItemBase<string>[] | null = [];
  form!: FormGroup;
  payLoad = '';
  
  constructor(private fcs: FormControlService) { }

  ngOnInit() {
    this.form = this.fcs.toFormGroup(this.items as ItemBase<string>[]);
  }

  onSubmit() {
    this.payLoad = JSON.stringify(this.form.getRawValue());
  }
}
