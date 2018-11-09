import { FormControl, FormGroup } from "@angular/forms";
import { of } from "rxjs";


export function mobileValidator(control: FormControl): any {
    let reg = /^(13[0-9]|15[012356789]|17[678]|18[0-9]|14[57])[0-9]{8}$/;
    let valid = reg.test(control.value);
    console.log(`mobile的校验结果：${valid}`);
    return valid ? null : { mobile: true };
}

export function mobileAsyncValidator(control: FormControl): any {
    let reg = /^(13[0-9]|15[012356789]|17[678]|18[0-9]|14[57])[0-9]{8}$/;
    let valid = reg.test(control.value);
    console.log(`mobile的校验结果：${valid}`);
    return of(valid ? null : { mobile: true });
}

export function equalValidator(group: FormGroup): any {
    let password: FormControl = group.get('password') as FormControl;
    let pconfirm: FormControl = group.get('pconfirm') as FormControl;
    let valid = password.value === pconfirm.value;
    console.log(`password的校验结果：${valid}`);
    return valid ? null : { equal: { descc: '密码不相同' } };
}