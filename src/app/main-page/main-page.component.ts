import { Component, OnInit, AfterViewInit } from '@angular/core';

@Component({
  selector: 'app-main-page',
  templateUrl: './main-page.component.html',
  styleUrls: ['./main-page.component.css']
})
export class MainPageComponent implements OnInit , AfterViewInit {
  isLoading: boolean;
  home:boolean=true;
  constructor() {
    this.isLoading = true;
  }

  ngOnInit(): void {
  }
  ngAfterViewInit() {
    this.isLoading = false;
  }

}
