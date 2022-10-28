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
  homePageOptions=[
    
      {route:'/main',icon:'fa fa-universal-access',name:'Welcome'},
      {route:'/about',icon:'fa-bullseye',name:'About'},
      {route:'/services',icon:'fa fa-cogs',name:'Admin'},
      {route:'/user',icon:'fa fa-user',name:'Login'},
      {route:'/products',icon:'fa fa-braille',name:'Products'},
      {route:'/feedback',icon:'fa fa-clipboard',name:'Feedback'},
      {route:'/contact',icon:'fa fa-map-signs',name:'Contacts'}
  ]

  constructor() { }
  ngOnInit(): void {
  }

}
