import { AbstractControl } from "@angular/forms";

export function noWhiteSpace(control: AbstractControl){
    return control.value && control.value.length > 0 && control.value.trim().length === 0 ? 
    {'mismatch': true} : null;
}