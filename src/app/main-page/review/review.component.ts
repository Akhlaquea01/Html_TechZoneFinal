import { Component, OnInit } from '@angular/core';
import { FeedbackService } from 'src/app/feedback.service';
import { IReviews } from './reviews';

@Component({
  selector: 'app-review',
  templateUrl: './review.component.html',
  styleUrls: ['./review.component.css']
})
export class ReviewComponent implements OnInit {
  Reviewers: IReviews[] = [];

  constructor(public _feedbackServices:FeedbackService) { }

  ngOnInit(): void {
    this._feedbackServices.getFeedback().subscribe(data => this.Reviewers = data)
  }

}
