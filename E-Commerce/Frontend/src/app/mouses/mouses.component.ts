import { Component, OnInit } from '@angular/core';
import { HttpErrorResponse } from '@angular/common/http';
import { AuthService } from '../auth.service';

@Component({
  selector: 'app-mouses',
  templateUrl: './mouses.component.html',
  styleUrls: ['./mouses.component.css']
})
export class MousesComponent implements OnInit {

  constructor(private authservice:AuthService) { }

  mousesData: any = [];


  ngOnInit(): void {
    this.authservice.getmouses()
    .subscribe(
      res =>{ this.mousesData = res,
        console.log(this.mousesData)
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
