import { Component, OnInit } from "@angular/core";

@Component({
  selector: "app-simple",
  templateUrl: "./simple.component.html",
  styleUrls: ["./simple.component.css"]
})
export class SimpleComponent implements OnInit {
  users = [
    {
      name: "manu",
      age: 20,
      gender: "male",
      country: "india"
    },
    {
      name: "anu",
      age: 22,
      gender: "female",
      country: "usa"
    },
    {
      name: "arun",
      age: 25,
      gender: "male",
      country: "india"
    }
  ];
  constructor() {}

  ngOnInit() {}
}
