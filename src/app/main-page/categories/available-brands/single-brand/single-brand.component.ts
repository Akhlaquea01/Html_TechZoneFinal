import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-single-brand',
  templateUrl: './single-brand.component.html',
  styleUrls: ['./single-brand.component.css']
})
export class SingleBrandComponent implements OnInit {

  @Input() siBrand:any;
  @Input()index!: number;

  constructor() { }

  ngOnInit(): void {
  }
}
