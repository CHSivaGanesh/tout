import { Component, OnInit } from '@angular/core';
import { HttpErrorResponse } from '@angular/common/http';
import { AuthService } from '../auth.service';

@Component({
  selector: 'app-teddybears',
  templateUrl: './teddybears.component.html',
  styleUrls: ['./teddybears.component.css']
})
export class TeddybearsComponent implements OnInit {

  constructor(private authservice:AuthService) { }

  TeddybearsData: any = [];


  ngOnInit(): void {
    this.authservice.getTeddybears()
    .subscribe(
      res =>{ this.TeddybearsData = res,
        console.log(this.TeddybearsData)
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
