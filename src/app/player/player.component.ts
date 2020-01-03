import { Component, OnInit } from "@angular/core";
import { HttpClient } from "@angular/common/http";

@Component({
  selector: "app-player",
  templateUrl: "./player.component.html",
  styleUrls: ["./player.component.css"]
})
export class PlayerComponent implements OnInit {
  private playerUrl =
    "https://cricapi.com/api/playerStats?apikey=1D6ppYK5u0cDXu44ZkY3oLssVMf1&pid=";
  constructor(private http: HttpClient) {}
  playerInfo;

  searchPlayer(pid) {
    this.http.get<any>(`${this.playerUrl}${pid}`).subscribe(user => {
      this.playerInfo = user;
    });
  }

  ngOnInit() {}
}
