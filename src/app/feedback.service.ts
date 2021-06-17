import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { IReviews } from './main-page/review/reviews';

@Injectable({
  providedIn: 'root'
})
export class FeedbackService {
  public _url: string = "/assets/data/feedback.json"
  constructor(public http: HttpClient) { }
  getFeedback(): Observable<IReviews[]> {
    return this.http.get<IReviews[]>(this._url)
  }
}
