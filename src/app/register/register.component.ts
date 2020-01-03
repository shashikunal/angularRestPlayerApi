import { usernameValidators } from "./../name.validators";

import { Component, OnInit } from "@angular/core";
import { FormGroup, FormControl, Validators } from "@angular/forms";

@Component({
  selector: "app-register",
  templateUrl: "./register.component.html",
  styleUrls: ["./register.component.css"]
})
export class RegisterComponent implements OnInit {
  constructor() {}
  // to create reactiveform first we need to import FormGroup class
  // and FormControl class from @angular/forms

  // create formGroup instance...
  form = new FormGroup({
    // we need to create formControl instance...
    username: new FormControl("", [
      Validators.required,
      Validators.minLength(3),
      Validators.pattern("jspiders"),
      usernameValidators.pleaseDontGivewhiteSpace
    ]),
    password: new FormControl("", Validators.required)
  });

  //get username and password
  get username() {
    return this.form.get("username");
  }
  get password() {
    return this.password.get("password");
  }

  ngOnInit() {}
}
