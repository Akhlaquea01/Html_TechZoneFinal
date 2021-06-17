import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { IAccessories } from './main-page/categories/accessories/accessories';

@Injectable({
  providedIn: 'root'
})
export class AccessoriesService {
  public _url: string = "/assets/data/accessories.json"
  constructor(public http: HttpClient) { }
  getAccessories(): Observable<IAccessories[]> {
    return this.http.get<IAccessories[]>(this._url)
  }
}
