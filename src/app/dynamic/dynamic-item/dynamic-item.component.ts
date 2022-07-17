import { ItemBase } from './../../models/item-base';
import { Component, Input, OnInit } from '@angular/core';
import { FormGroup } from '@angular/forms';

@Component({
  selector: 'app-dynamic-item',
  templateUrl: './dynamic-item.component.html',
  styleUrls: ['./dynamic-item.component.css']
})
export class DynamicItemComponent implements OnInit {

  @Input() item!: ItemBase<string>;
  @Input() form!: FormGroup;
  get isValid() { return this.form.controls[this.item.key].valid; }

  constructor() { }

  ngOnInit(): void {
  }

}
