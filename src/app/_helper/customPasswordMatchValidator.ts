import { FormGroup } from "@angular/forms";

export function passwordMatchValidator(frm : FormGroup){
    return frm.controls['Password'].value === frm.controls['ConfirmPassword'].value ? null : 
    {'mismatch': true};
}