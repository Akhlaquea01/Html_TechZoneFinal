import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { MobileService } from 'src/app/services/mobile.service';
import { IMobiles } from './mobileBrands';

@Component({
  selector: 'app-available-brands',
  templateUrl: './available-brands.component.html',
  styleUrls: ['./available-brands.component.css']
})
export class AvailableBrandsComponent implements OnInit {
  mobileBrands: IMobiles[] =[]

  constructor(public _mobileServices:MobileService, private _router:Router) { }

  ngOnInit(): void {
    this._mobileServices.getMobiles().subscribe(data => this.mobileBrands = data)
  }
  onClick(i:number){
    this._router.navigate(["/gallery"])
  }
}
