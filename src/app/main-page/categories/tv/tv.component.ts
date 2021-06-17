import { Component, OnInit } from '@angular/core';
import { TvService } from 'src/app/tv.service';
import { ITv } from './tv';

@Component({
  selector: 'app-tv',
  templateUrl: './tv.component.html',
  styleUrls: ['./tv.component.css']
})
export class TvComponent implements OnInit {
  tvBrands: ITv[] = [];

  constructor(public _tvServices:TvService) { }

  ngOnInit(): void {
    this._tvServices.getTv().subscribe(data => this.tvBrands = data)
  }
}
