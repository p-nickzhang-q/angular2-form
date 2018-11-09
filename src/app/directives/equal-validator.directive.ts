import { Directive } from '@angular/core';
import { NG_VALIDATORS } from '@angular/forms';
import { equalValidator } from '../validators/validators';

@Directive({
  selector: '[appEqualValidator]',
  providers: [{ provide: NG_VALIDATORS, useValue: equalValidator, multi: true }]//multi: true, 表示NG_VALIDATORS token 可以代表多个usevalue
})
export class EqualValidatorDirective {

  constructor() { }

}
