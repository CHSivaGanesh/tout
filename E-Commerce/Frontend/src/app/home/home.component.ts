import { Component, OnInit } from '@angular/core';
import {HomeService} from '../home.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})

export class HomeComponent implements OnInit {


  items = []
  constructor(private _homeservice : HomeService) { }

  ngOnInit(): void {
    this._homeservice.getHome()
    .subscribe(
      res => this.items =res,
      err => console.log(err)
    )
  }

  







}
