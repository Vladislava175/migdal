import { FormControl, FormGroup, Validators } from '@angular/forms';
import { Injectable } from '@angular/core';
import { ItemBase } from '../models/item-base';
import * as data from '../../assets/properties.json'
@Injectable({
  providedIn: 'root'
})
export class FormControlService {
  labels: any = (data as any);

  constructor() { }
  
  toFormGroup(questions: ItemBase<string>[] ) {
    const group: any = {};

    questions.forEach(question => {
      group[question.key] = question.required ? new FormControl(question.value || '', Validators.required)
                                              : new FormControl(question.value || '');
    });
    return new FormGroup(group);
  }

  createForm(form: any) {
    let items = [];
    for (const [key, value] of Object.entries(form)) {
      let item = null;
      switch (true) {
        case Array.isArray(value): {
          item = new ItemBase({
            options: <any> value, 
            key: key, 
            label: this.labels[key].label,
            required: this.labels[key].required,
            controlType: "dropdown"
          })
        }
        break;
        case typeof value == 'string': {
          item = new ItemBase({
            key: key, 
            label: this.labels[key].label,
            required: this.labels[key].required,
            type: "text",
            controlType: "text"

          })
        }
        break;
        case value instanceof Date: {
          item = new ItemBase({
            key: key, 
            label: this.labels[key].label,
            required: this.labels[key].required,
            type: "date",
            controlType: "date"
          })
        }
        break;
        case typeof value == 'boolean': {
          item = new ItemBase({
            value: value, 
            key: key, 
            label: this.labels[key].label,
            required: this.labels[key].required,
            type: "boolean",
            controlType: "boolean"
          })
        }
        break;
        case typeof value == 'function': {
          item = new ItemBase({
            func: value, 
            key: key, 
            label: this.labels.btns[key],
            type: "submit",
            controlType: "submit"
          })
        }
        break;
        case typeof value == 'number': {
          item = new ItemBase({
            value: value, 
            label: key,
            key: this.labels[key].label,
            required: this.labels[key].required,
            type: "number",
            controlType: "number"
          })
        }
        break;
      }
      if (item) items.push(<any>item)
    }
  return items;
  }
}
