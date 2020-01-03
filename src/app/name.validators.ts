import { AbstractControl, ValidationErrors } from '@angular/forms';

export class usernameValidators {
  //first step
  static pleaseDontGivewhiteSpace(control: AbstractControl):ValidationErrors | null {
    if ((control.value as string).indexOf(" ") >= 0) {
      return { pleaseDontGivewhiteSpace :true}
    } else {
      return null;
    }
  }
}