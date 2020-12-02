import { Component, OnInit } from '@angular/core';
import { HttpErrorResponse } from '@angular/common/http';
import { AuthService } from '../auth.service';

@Component({
  selector: 'app-laptop-bags',
  templateUrl: './laptop-bags.component.html',
  styleUrls: ['./laptop-bags.component.css']
})
export class LaptopBagsComponent implements OnInit {

  constructor(private authservice:AuthService) { }

  Laptop_bagsData: any = [];


  ngOnInit(): void {
    this.authservice.getLaptop_bags()
    .subscribe(
      res =>{ this.Laptop_bagsData = res,
        console.log(this.Laptop_bagsData)
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
