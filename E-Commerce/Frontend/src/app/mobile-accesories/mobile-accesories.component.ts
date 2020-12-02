import { Component, OnInit } from '@angular/core';
import { HttpErrorResponse } from '@angular/common/http';
import { AuthService } from '../auth.service';

@Component({
  selector: 'app-mobile-accesories',
  templateUrl: './mobile-accesories.component.html',
  styleUrls: ['./mobile-accesories.component.css']
})
export class MobileAccesoriesComponent implements OnInit {

  constructor(private authservice:AuthService) { }

  Mobile_accesoriesData: any = [];


  ngOnInit(): void {
    this.authservice.getMobile_accesories()
    .subscribe(
      res =>{ this.Mobile_accesoriesData = res,
        console.log(this.Mobile_accesoriesData)
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

