import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { ITv } from '../main-page/categories/tv/tv';

@Injectable({
  providedIn: 'root'
})
export class TvService {
  public _url: string = "/assets/data/tv.json"
  constructor(public http: HttpClient) { }
  getTv(): Observable<ITv[]> {
    return this.http.get<ITv[]>(this._url)
  }
}
