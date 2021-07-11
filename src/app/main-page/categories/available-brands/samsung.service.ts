import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { IProducts } from './products';

@Injectable({
  providedIn: 'root'
})
export class MobileService {
  public _url: string = "/assets/data/samsung.json"
  constructor(public http: HttpClient) { }
  getMobiles(): Observable<IProducts[]> {
    return this.http.get<IProducts[]>(this._url)
  }
}
