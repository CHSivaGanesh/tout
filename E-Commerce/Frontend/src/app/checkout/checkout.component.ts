import { Component, OnInit } from '@angular/core';
import { AuthService } from '../auth.service';

@Component({
  selector: 'app-checkout',
  templateUrl: './checkout.component.html',
  styleUrls: ['./checkout.component.css']
})
export class CheckoutComponent implements OnInit {

  constructor(private auth: AuthService) { }
  Orders = []

totalbill = 0

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
