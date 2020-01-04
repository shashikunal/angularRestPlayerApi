import { Component, OnInit } from "@angular/core";
import { HttpClient } from "@angular/common/http";
import { NgForm } from "@angular/forms";

@Component({
  selector: "app-login",
  templateUrl: "./login.component.html",
  styleUrls: ["./login.component.css"]
})
export class LoginComponent implements OnInit {
  nodejsApiUrl = "http://localhost:2000/createPost";
  constructor(private http: HttpClient) {}

  ngOnInit() {}

  submit(form: NgForm) {
    // console.log(form.value);
    this.http.post(this.nodejsApiUrl, form.value).subscribe(data => {
      console.log(data);
    });
  }
}
