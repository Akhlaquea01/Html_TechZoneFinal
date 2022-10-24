import { Component, OnInit } from '@angular/core';
import { CategoryService } from 'src/app/services/category.service';
import { ICategories } from './cateogries';

@Component({
  selector: 'app-categories',
  templateUrl: './categories.component.html',
  styleUrls: ['./categories.component.css']
})
export class CategoriesComponent implements OnInit {
  loader=true
 productCategories:ICategories[]=[];
  constructor(public _cateogriesService:CategoryService) { }

  ngOnInit(): void {
    this._cateogriesService.getCateogries().subscribe(data =>{
      this.loader=false
      this.productCategories = data})
  }

}
