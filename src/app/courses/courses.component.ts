import { Component, OnInit } from "@angular/core";
import { HttpClient } from "@angular/common/http";

@Component({
  selector: "course", //css selector....and this is component name
  templateUrl: "./courses.component.html",
  styleUrls: ["./courses.component.css"]
})
export class coursesComponent implements OnInit {
  //to use service or DI constructor

  constructor(private http: HttpClient) {}
  

  ngOnInit() {} //closing oninitmethod
}
