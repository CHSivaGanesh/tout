import { Component, OnInit } from '@angular/core';
import {AuthService} from '../auth.service';
import {FormBuilder, FormGroup, Validators} from '@angular/forms';

@Component({
  selector: 'app-myorders',
  templateUrl: './myorders.component.html',
  styleUrls: ['./myorders.component.css']
})
export class MyordersComponent implements OnInit {

  constructor(private auth : AuthService) {

   }
   isLinear = false;
   firstFormGroup: FormGroup;
   secondFormGroup: FormGroup;
  Orders : any = []
  productorders : any = []
  ngOnInit(): void {
    
    this.auth.getuserconfirmedorders()
    .subscribe(
      res =>{ this.Orders = res , this.productorders = res.Orders , console.log(res.Orders)},
      err => console.log("error")

    )
    this.productorders = this.Orders.Orders ;

  }

}
