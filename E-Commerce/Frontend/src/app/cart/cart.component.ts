import { Component, OnInit } from '@angular/core';
import { AuthService } from '../auth.service';
import {MatTableModule} from '@angular/material/table';
import { ShowOnDirtyErrorStateMatcher } from '@angular/material/core';
import {Router} from '@angular/router'


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

quantity = localStorage.getItem('quantity');

empty : boolean = false;
notempty = !this.empty;
  Orders : any = [];
 temp = Number (localStorage.getItem('temp'));

  constructor(private authservice:AuthService , private router : Router) 
  {  
    localStorage.setItem('quantity',"1")
    localStorage.setItem('temp',"1")
  }

  totalbill = 0;
  ngOnInit(): void {

    
   this.authservice.getorders()
    .subscribe(
      res =>{ this.Orders = res,
        console.log(this.Orders)
        for (let j = 0; j < this.Orders.length; j++)
        {
          this.totalbill = this.totalbill + (this.Orders[j].quantity * this.Orders[j].price);
        }
       if (this.Orders.length == 0){
         this.empty=true;
  
       }
      },
      err =>{
        
            console.log("error");
          }
          )

  }
  

   temp1=Number(document.getElementsByClassName("qty qty-minus"));

  

  increment(order){
    
    if(order.quantity!==5){
    order.quantity = order.quantity + 1;
    }
    const object = {​​​​
      name : order.name,
      quantity: order.quantity

    }​​​​;
    this.totalbill = 0;
    for (let j = 0; j < this.Orders.length; j++)
        {
          
          this.totalbill = this.totalbill + (this.Orders[j].quantity * this.Orders[j].price);
        }
        if (this.Orders.length == 0){
          this.empty=true;
        }
  
    this.authservice.incrementquantity(object)

    .subscribe(() => {​​​​console.log(''); }​​​​);
  }

  decrement(order){
    if(order.quantity!=0){
    order.quantity = order.quantity - 1;
    }
    const object = {​​​​
      name : order.name,
      quantity: order.quantity

    }​​​​;
    this.totalbill = 0;

    for (let j = 0; j < this.Orders.length; j++)
        {
          this.totalbill = this.totalbill + (this.Orders[j].quantity * this.Orders[j].price);
        }
        if (this.Orders.length == 0){
          this.empty=true;
        }

    this.authservice.incrementquantity(object)

    .subscribe(() => {​​​​console.log(''); }​​​​);

  }

 i=1;
  
  totalprice = 0

removeitem(order){
 
  this.authservice.removeitem(order.name)
  .subscribe(
    res=> { 
            console.log("removed succesfully")
          },
    err=> {    
    console.log("Error")
    this.authservice.getorders()
    .subscribe(
      res =>{ this.Orders = res,
        console.log(this.Orders)
        this.totalbill = 0;

        for (let j = 0; j < this.Orders.length; j++)
        {
          this.totalbill = this.totalbill + (this.Orders[j].quantity * this.Orders[j].price);
        }

        if (this.Orders.length == 0){
          this.empty=true;
        }

      },
      err =>{
        this.totalbill = 0;

        for (let j = 0; j < this.Orders.length; j++)
        {
          this.totalbill = this.totalbill + (this.Orders[j].quantity * this.Orders[j].price);
        }
        
            console.log("error");
          }
          )
  
          }  );
         
}
  checkout(){
     
  }
  

  
  

 

// signUpButton.addEventListener('click', () => {
// 	container.classList.add("right-panel-active");
// });


// signInButton.addEventListener('click', () => {
// 	container.classList.remove("right-panel-active");
// });
}

