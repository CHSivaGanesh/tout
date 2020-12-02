import { Component, OnInit } from '@angular/core';
import {AuthService} from '../auth.service';
import { HttpErrorResponse } from '@angular/common/http';


@Component({
  selector: 'app-sportsitems',
  templateUrl: './sportsitems.component.html',
  styleUrls: ['./sportsitems.component.css']
})
export class SportsitemsComponent implements OnInit {

  constructor(private authservice : AuthService) { }

  SportsitemsData : any = [];

  ngOnInit(): void {
    this.authservice.getSportsitems()
    .subscribe(
      res =>{ this.SportsitemsData = res,
        console.log(res)
      },
      err =>{
        if(err instanceof HttpErrorResponse){
          if(err.status == 401){
            console.log("error");
          }
        }
      }
    )
  }
  addtocart(item){
    this.authservice.addtocart(item)
    .subscribe(
      res =>console.log(res),
      err => console.log(err)
    );
  }

}
