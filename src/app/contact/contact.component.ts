import { Component, OnInit } from "@angular/core";
import { FormBuilder, Validators } from "@angular/forms";

@Component({
  selector: "app-contact",
  templateUrl: "./contact.component.html",
  styleUrls: ["./contact.component.css"]
})
export class ContactComponent implements OnInit {
  constructor(private fb: FormBuilder) {}
  //services DI
  contactForm = this.fb.group({
    name: ["", Validators.required],
    email: ["", Validators.required]
  });

  get name() {
    return this.contactForm.get("name");
  }

  ngOnInit() {}
}
