import { Component, OnInit } from "@angular/core";
import * as firebase from 'firebase'; 


@Component({
  selector: "app-root", //component directives
  templateUrl: "./app.component.html",
  styleUrls: ["./app.component.css"]
})
export class AppComponent implements OnInit {
  title = "qspiders";

  ngOnInit() {
    var firebaseConfig = {
      apiKey: "AIzaSyACzNCdXFCNC3ITQZrbwvdWFAyg-jjzSZA",
      authDomain: "fullstack-angular-b83ff.firebaseapp.com",
      databaseURL: "https://fullstack-angular-b83ff.firebaseio.com",
      projectId: "fullstack-angular-b83ff",
      storageBucket: "fullstack-angular-b83ff.appspot.com",
      messagingSenderId: "662195832932",
      appId: "1:662195832932:web:bf4625baf76decffa0f771"
    };
    // Initialize Firebase
    firebase.initializeApp(firebaseConfig);
  }
}
