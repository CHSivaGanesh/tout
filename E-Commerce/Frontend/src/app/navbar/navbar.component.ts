import { Component, OnInit ,Input } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { NgModule } from '@angular/core';
import { variable } from '@angular/compiler/src/output/output_ast';
import {Router} from '@angular/router';
import {AuthService} from '../auth.service';
import {MatAutocompleteModule} from '@angular/material/autocomplete';
import {MatFormFieldModule} from '@angular/material/form-field';


@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.css']
})
export class NavbarComponent implements OnInit {

  
  constructor( private _route:Router, private authService : AuthService) { }

  open = false;
  
// temp = this.authService.c;
  search = '';
  ngOnInit(): void {
    // console.log(this.temp);
  }

  Search(){
    if(this.search == "mobiles" || this.search == "Mobiles" || this.search == "phone" || this.search == "Phone" || this.search == "mobile" || this.search == "mobiles" || this.search == "smart phone" || this.search == "Smart phone" || this.search == "smart phones" || this.search == "Smart phones" || this.search == " Smart Phones" || this.search == "phones" || this.search =="Phones")
    {
      this._route.navigate(['/mobiles']);
      }
    else if(this.search == "laptop" || this.search == "laptops" || this.search == "Laptop" || this.search == "Laptops")
      {
        this._route.navigate(['/laptops']);
      }
      else if(this.search == "tv" || this.search == "tvs" || this.search == "Tv" || this.search == "Tvs" || this.search == "television" || this.search =="Television" || this.search == "televisions" || this.search =="Televisions")
      {
        this._route.navigate(['/Telivisions']);
      }
      else if(this.search == "headphone" || this.search == "headphones" || this.search == "Headphone" || this.search == "Headphones" || this.search == "earphone" || this.search =="earphones" || this.search == "Earphone" || this.search =="Earphones")
      {
        this._route.navigate(['/Headphones']);
      }
      else if(this.search == "laptop bag" || this.search == "laptop bags" || this.search == "Laptop bag" || this.search == "Laptop bags" || this.search == "bag" || this.search =="bags" || this.search == "Bag" || this.search == "Bags")
      {
        this._route.navigate(['/Laptop_bags']);
      }  
      
      else{
        this._route.navigate(['/Home']);
      }
  }

   openNav()  {
    document.getElementById("mySidenav").style.width = "70%";
    // document.getElementById("flipkart-navbar").style.width = "50%";
    document.body.style.backgroundColor = "rgba(0,0,0,0.4)";
    this.open = !this.open;
    
}

 closeNav() {
    document.getElementById("mySidenav").style.width = "0";
    document.body.style.backgroundColor = "rgba(0,0,0,0)";
    this.open = !this.open;
}


}
