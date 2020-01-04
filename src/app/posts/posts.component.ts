import { Component, OnInit } from "@angular/core";
import { HttpClient } from "@angular/common/http";

@Component({
  selector: "app-posts",
  templateUrl: "./posts.component.html",
  styleUrls: ["./posts.component.css"]
})
export class PostsComponent implements OnInit {
  shashiDataFromNodejs = "http://localhost:2000/posts";
  newPostData = [];

  posts = [];
  fakeApiUrl = "https://jsonplaceholder.typicode.com/posts";

  constructor(private http: HttpClient) {
    this.http.get<any>(this.fakeApiUrl).subscribe(post => {
      this.posts = post;
    });

    this.http.get<any>(this.shashiDataFromNodejs).subscribe(post => {
      this.newPostData = post;
    });
  }

  createTitle(input) {
    let post = { title: input.value };
    this.http.post<any>(this.fakeApiUrl, post).subscribe(post => {
      console.log(post);
      this.posts.splice(0, 0, post);
    });

    //http post should call url and body parameter
  }

  // remove title
  removeTitle(post) {
    this.http.delete<any>(`${this.fakeApiUrl}/${post.id}`).subscribe(() => {
      let index = this.posts.indexOf(post);
      console.log(`${this.fakeApiUrl}/${post.id}`);
      this.posts.splice(index, 1);
    });
  }

  //updateTitle
  updateTitle(post) {
    this.http
      .put<any>(`${this.fakeApiUrl}/${post.id}`, post)
      .subscribe(update => {
        console.log(update);
      });
  }

  ngOnInit() {}
}
