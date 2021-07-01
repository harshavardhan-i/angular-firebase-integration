import { Component, OnInit } from '@angular/core';
import { ApiCallService } from "../app/api-call.service";

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})


export class AppComponent implements OnInit {
  title = 'firebaseProject';

  getResponse: any = "";
  postResponse: any = "";
  constructor(private firebaseService: ApiCallService) {}

  ngOnInit(){
    this.makeGetCall();
  }

  makeGetCall(){
    this.firebaseService.firebaseGetCall().subscribe(
      (data) => {
        console.log(data);
        this.getResponse = JSON.stringify(data);
      }, (error) => {
        console.error("error");
        alert(error);
      }, () =>{
        console.log("Get call successfull.");
      }
    );
  }

  onBottomSectionClick(){
    console.log("Bottom section clicked.");
    this.makePostCall();
  }

  makePostCall(){
    const payload = {
      superHeroes: ["Captain Marvel", "Hulk"],
      superVillains: ["Thanos", "Hela"]
    };
    this.firebaseService.firebasePostCall(payload).subscribe(
      (data) => {
        console.log(data);
        const res = {};
        res[data['name']] = payload;
        this.postResponse = JSON.stringify(res);
      }, (error) => {
        console.error("error");
        alert(error);
      }, () =>{
        console.log("Post call successfull.");
        this.makeGetCall();
      }
    );
  }

}
