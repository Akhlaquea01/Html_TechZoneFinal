import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs/';
import { ICategories } from './main-page/categories/cateogries';

@Injectable({
  providedIn: 'root'
})
export class CategoryService {
  public _url: string = "/assets/data/cateogries.json"
  constructor(public http: HttpClient) { }
  getCateogries(): Observable<ICategories[]> {
    return this.http.get<ICategories[]>(this._url)
  }
}
