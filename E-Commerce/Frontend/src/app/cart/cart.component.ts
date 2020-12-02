import { Component, OnInit } from '@angular/core';
import { AuthService } from '../auth.service';
import {MatTableModule} from '@angular/material/table';
import { ShowOnDirtyErrorStateMatcher } from '@angular/material/core';



@Component({
  selector: 'app-cart',
  templateUrl: './cart.component.html',
  styleUrls: ['./cart.component.css']
})
export class CartComponent implements OnInit {
  name: string;
  position: number;
  weight: number;
  symbol: string;

  orders : any = this.authservice.Orders;
email = this.authservice.email;
  constructor(private authservice:AuthService) 
  {  }
  ngOnInit(): void {

  }
  c = this.authservice.Orders.length;
  checkout(){
    console.log(this.orders);
    this.authservice.AddOrder(this.orders);
  
  }
  displayedColumns: string[] = ['position', 'name', 'weight', 'symbol'];
  dataSource = this.orders;


}

