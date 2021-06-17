import { Component, OnInit } from '@angular/core';
import { AccessoriesService } from 'src/app/accessories.service';
import { IAccessories } from './accessories';

@Component({
  selector: 'app-accessories',
  templateUrl: './accessories.component.html',
  styleUrls: ['./accessories.component.css']
})
export class AccessoriesComponent implements OnInit {
  accessoriesBrands: IAccessories[] = [];

  constructor(public _accessoriesServices:AccessoriesService) { }

  ngOnInit(): void {
    this._accessoriesServices.getAccessories().subscribe(data => this.accessoriesBrands = data)
  }
}
