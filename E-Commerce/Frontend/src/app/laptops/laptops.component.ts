import { Component, OnInit } from '@angular/core';
import {AuthService} from '../auth.service';
import { HttpErrorResponse } from '@angular/common/http';



@Component({
  selector: 'app-laptops',
  templateUrl: './laptops.component.html',
  styleUrls: ['./laptops.component.css']
})
export class LaptopsComponent implements OnInit {

  constructor(private authservice:AuthService ) { }
  LaptopsData: any = [];


  ngOnInit(): void {
    this.authservice.getLaptops()
    .subscribe(
      res =>{ this.LaptopsData = res,
        console.log(this.LaptopsData)
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
    // localStorage.setItem('order', item)
    this.authservice.addtocart(item)
    .subscribe(
      res =>console.log(res),
      err => console.log(err)
    );
  }


}
