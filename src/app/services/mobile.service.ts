import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { IMobiles } from '../main-page/categories/available-brands/mobileBrands';

@Injectable({
  providedIn: 'root'
})
export class MobileService {
  public _url: string = "/assets/data/mobiles.json"
  constructor(public http: HttpClient) { }
  getMobiles(): Observable<IMobiles[]> {
    return this.http.get<IMobiles[]>(this._url)
  }
}
