import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, Validators, FormControl } from '@angular/forms';
import { mobileValidator, equalValidator, mobileAsyncValidator } from '../validators/validators';

@Component({
  selector: 'app-reactive-regist',
  templateUrl: './reactive-regist.component.html',
  styleUrls: ['./reactive-regist.component.css']
})
export class ReactiveRegistComponent implements OnInit {



  formModel: FormGroup;

  constructor(fb: FormBuilder) {
    this.formModel = fb.group({
      username: ['', [Validators.required, Validators.minLength(4)]],
      mobile: ['', [mobileValidator], [mobileAsyncValidator]],
      passwordGroup: fb.group({
        password: ['', [Validators.minLength(6)]],
        pconfirm: ['']
      }, { validator: equalValidator })
    })
  }

  ngOnInit() {
  }

  onSubmit() {
    // let isValid: boolean = this.formModel.get('username').valid;
    // console.log(`username的校验结果：${isValid}`);
    // let errors: any = this.formModel.get('username').errors;
    // console.log(`username的校验错误：${JSON.stringify(errors)}`);
    // console.log(this.formModel.value);
    if (this.formModel.valid) {
      console.log(this.formModel.value);
    }
  }

}
