import { Component, OnInit } from '@angular/core';
import { HttpErrorResponse, HTTP_INTERCEPTORS } from '@angular/common/http';
import { AuthService } from '../auth.service';
import {Router} from '@angular/router';
// import { CookieService } from 'ngx-cookie-service';


@Component({
  selector: 'app-mobiles',
  templateUrl: './mobiles.component.html',
  styleUrls: ['./mobiles.component.css']
})
export class MobilesComponent implements OnInit {
  

  constructor(private authservice:AuthService, private router : Router) { }
     MobilesData: any = [];
     Orders : any = [];
  ngOnInit(): void {
    


    this.authservice.getMobiles()
    .subscribe(
      res =>{ this.MobilesData = res,
        console.log(this.MobilesData)
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
    console.log(item);
    this.authservice.addtocart(item)
    .subscribe(
      res =>console.log(res),
      err => {
        if(err instanceof HttpErrorResponse){
          if(err.status === 401){
            this.router.navigate(['/login'])
            
          }
        }
      }
    );
  }


}
