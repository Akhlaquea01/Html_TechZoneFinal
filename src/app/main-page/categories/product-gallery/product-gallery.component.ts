import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-product-gallery',
  templateUrl: './product-gallery.component.html',
  styleUrls: ['./product-gallery.component.css']
})
export class ProductGalleryComponent implements OnInit {
addidas:any[]=[]
tiger:any[]=[]
  constructor() { 
    this.addidas=[
      {
        "heading":"I-5923 RUNNER PRIDE",
        "price":786,
        "img":"https://s3-us-west-2.amazonaws.com/s.cdpn.io/881020/adidas01.png"
      },
      {
        "heading":"I-5923 RUNNER PRIDE",
        "price":786,
        "img":"https://s3-us-west-2.amazonaws.com/s.cdpn.io/881020/adidas01.png"
      },
      {
        "heading":"I-5923 RUNNER PRIDE",
        "price":786,
        "img":"https://s3-us-west-2.amazonaws.com/s.cdpn.io/881020/adidas01.png"
      },
      {
        "heading":"I-5923 RUNNER PRIDE",
        "price":786,
        "img":"https://s3-us-west-2.amazonaws.com/s.cdpn.io/881020/adidas01.png"
      },
      {
        "heading":"I-5923 RUNNER PRIDE",
        "price":786,
        "img":"https://s3-us-west-2.amazonaws.com/s.cdpn.io/881020/adidas01.png"
      },
      {
        "heading":"I-5923 RUNNER PRIDE",
        "price":786,
        "img":"https://s3-us-west-2.amazonaws.com/s.cdpn.io/881020/adidas01.png"
      },
    ]
    this.tiger=[
      {
        "heading":"I-5923 RUNNER PRIDE",
        "price":786,
        "img":"https://s3-us-west-2.amazonaws.com/s.cdpn.io/881020/adidas01.png"
      },
      {
        "heading":"I-5923 RUNNER PRIDE",
        "price":786,
        "img":"https://s3-us-west-2.amazonaws.com/s.cdpn.io/881020/adidas01.png"
      },
      {
        "heading":"I-5923 RUNNER PRIDE",
        "price":786,
        "img":"https://s3-us-west-2.amazonaws.com/s.cdpn.io/881020/adidas01.png"
      },
      {
        "heading":"I-5923 RUNNER PRIDE",
        "price":786,
        "img":"https://s3-us-west-2.amazonaws.com/s.cdpn.io/881020/adidas01.png"
      },
      {
        "heading":"I-5923 RUNNER PRIDE",
        "price":786,
        "img":"https://s3-us-west-2.amazonaws.com/s.cdpn.io/881020/adidas01.png"
      },
      {
        "heading":"I-5923 RUNNER PRIDE",
        "price":786,
        "img":"https://s3-us-west-2.amazonaws.com/s.cdpn.io/881020/adidas01.png"
      },
    ]
  }

  ngOnInit(): void {
  }

}
