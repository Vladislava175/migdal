import { FormControl, FormGroup, Validators } from '@angular/forms';
import { Injectable } from '@angular/core';
import { ItemBase } from '../models/item-base';

@Injectable({
  providedIn: 'root'
})
export class FormControlService {

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
      // TODO add json labels
      switch (true) {
        case Array.isArray(value): {
          item = new ItemBase({
            options: <any> value, 
            key: key, 
            label: key,
            controlType: "dropdown"
          })
        }
        break;
        case typeof value == 'string': {
          item = new ItemBase({
            key: key, 
            label: key,
            controlType: "text"
          })
        }
        break;
        case typeof value == 'boolean': {
          item = new ItemBase({
            value: value, 
            key: key, 
            label: key,
            controlType: "boolean"
          })
        }
        break;
        case typeof value == 'number': {
          item = new ItemBase({
            value: value, 
            label: key,
            key: key, 
            controlType: "number"
          })
        }
      }
      console.log('ITEM', item);
      if (item) items.push(<any>item)
    }
  return items;
  }
}
