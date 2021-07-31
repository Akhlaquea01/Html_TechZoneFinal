import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Params, Router } from '@angular/router';
import { AccessoriesComponent } from '../accessories/accessories.component';

@Component({
  selector: 'app-product-gallery',
  templateUrl: './product-gallery.component.html',
  styleUrls: ['./product-gallery.component.css']
})
export class ProductGalleryComponent implements OnInit {
  id:number | undefined
addidas:any[]=[]
tiger:any[]=[]
  constructor(private route:ActivatedRoute, private router:Router) {
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
    this.route.params.subscribe(
      (params:Params)=>{
      this.id=+params["id"]
    })
  }

}
