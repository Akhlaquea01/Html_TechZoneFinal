import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-home-page',
  templateUrl: './home-page.component.html',
  styleUrls: ['./home-page.component.css']
})
export class HomePageComponent implements OnInit {
  shopName:String="Tech Zone";
  tagLine1:String="Get all the trending stuff";
  tagLine2:String="Everything at an affordable price";

  constructor() { }
  ngOnInit(): void {
  }

}
