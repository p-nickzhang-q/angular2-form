import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, Validators, FormControl } from '@angular/forms';

@Component({
  selector: 'app-reactive-regist',
  templateUrl: './reactive-regist.component.html',
  styleUrls: ['./reactive-regist.component.css']
})
export class ReactiveRegistComponent implements OnInit {

  mobileValidator(control: FormControl): any {
    let reg = /^((13[0-9])|(14[5,7])|(15[0-3,5-9])|(17[0,3,5-8])|(18[0-9])|166|198|199|(147))\\d{8}$/;
    let valid = reg.test(control.value);
    console.log(`mobile的校验结果：${valid}`);
    return valid ? null : { mobile: true };
  }


  equalValidator(group: FormGroup): any {
    let password: FormControl = group.get('password') as FormControl;
    let pconfirm: FormControl = group.get('pconfirm') as FormControl;
    let valid = password.value === pconfirm.value;
    console.log(`password的校验结果：${valid}`);
    return valid ? null : { equal: true };
  }

  formModel: FormGroup;

  constructor(fb: FormBuilder) {
    this.formModel = fb.group({
      username: ['', [Validators.required, Validators.minLength(4)]],
      mobile: ['', [this.mobileValidator]],
      passwordGroup: fb.group({
        password: [''],
        pconfirm: ['']
      }, { validator: this.equalValidator })
    })
  }

  ngOnInit() {
  }

  onSubmit() {
    let isValid: boolean = this.formModel.get('username').valid;
    console.log(`username的校验结果：${isValid}`);
    let errors: any = this.formModel.get('username').errors;
    console.log(`username的校验错误：${JSON.stringify(errors)}`);
    console.log(this.formModel.value);
  }

}
