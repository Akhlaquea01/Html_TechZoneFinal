import { Component, OnInit } from '@angular/core';
import { MobileService } from 'src/app/mobile.service';
import { IMobiles } from './mobileBrands';

@Component({
  selector: 'app-available-brands',
  templateUrl: './available-brands.component.html',
  styleUrls: ['./available-brands.component.css']
})
export class AvailableBrandsComponent implements OnInit {
  mobileBrands: IMobiles[] =[]

  constructor(public _mobileServices:MobileService) { }

  ngOnInit(): void {
    this._mobileServices.getMobiles().subscribe(data => this.mobileBrands = data)
  }
}
