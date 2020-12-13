import { Component, OnInit } from '@angular/core';
import { AuthService } from '../auth.service';
import {Router } from '@angular/router'
@Component({
  selector: 'app-checkout',
  templateUrl: './checkout.component.html',
  styleUrls: ['./checkout.component.css']
})
export class CheckoutComponent implements OnInit {

  constructor(private auth: AuthService,private route : Router) { }
  Orders = []



checkoutUserData = {
  name : "" ,
  email : localStorage.getItem('email'),
  address : "",
  city : "",
  state : "",
  zip: "",
  nameoncard : "",
  expmonth : "",
  expyear : "",
  cvv : ""
}
totalbill = 0
hide1=true;
hide2=false;

totalprice  = String(this.totalbill)

checkout(){
  localStorage.setItem('Fullname',this.checkoutUserData.name);
  localStorage.setItem('uemail',this.checkoutUserData.email);
  localStorage.setItem('address',this.checkoutUserData.address);
  localStorage.setItem('city',this.checkoutUserData.city);
  localStorage.setItem('state',this.checkoutUserData.state);
  localStorage.setItem('zip',this.checkoutUserData.zip);
  localStorage.setItem('totalprice',this.totalprice)
  
  this.sendmail(this.Orders);
  this.move()
   
  this.auth.cashondelivery(this.Orders)
  .subscribe(
    res => console.log("succesful"),
    err => console.log("error")
  )

  this.route.navigate['/Home']


}
sendmail(Orders){
  this.auth.sendordermail(Orders)
  .subscribe(
    res=>console.log("succesful"),
    err =>console.log("Unsuccesful")

  )
}

move()
  {
    this.hide1=false;
    this.hide2=true;
    setTimeout(() => {
      this.hide1=true;
      this.hide2=false;
    },5000);

  }
  ngOnInit(): void {

    this.auth.getorders()
    .subscribe(
      res =>{ this.Orders = res,
        console.log(this.Orders)
        for (let j = 0; j < this.Orders.length; j++)
        {
          this.totalbill = this.totalbill + (this.Orders[j].quantity * this.Orders[j].price);
        }

        
      },
      err =>{
        
            console.log("error");
          }
          )
  }



}
