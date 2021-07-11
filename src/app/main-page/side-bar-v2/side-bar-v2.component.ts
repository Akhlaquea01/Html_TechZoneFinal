import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-side-bar-v2',
  templateUrl: './side-bar-v2.component.html',
  styleUrls: ['./side-bar-v2.component.css']
})
export class SideBarV2Component implements OnInit {

  constructor() { }
  btn = document.querySelector("#btn");
  sidebar = document.querySelector(".sidebar");
  searchBtn = document.querySelector(".bx-search");

  ngOnInit(): void {
  }
  onClick() {
    console.log("hi");
    document.querySelector(".sidebar")?.classList.toggle("active");
  }

}
