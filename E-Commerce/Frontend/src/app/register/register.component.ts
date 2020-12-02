import { Component, OnInit } from '@angular/core';
import { AuthService } from '../auth.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent implements OnInit {

  constructor(private _auth: AuthService , private _route:Router) { }

  registerUserData ={
    Name : '',
    email: '',
    password : ''
  }

  ngOnInit(): void {
  }


registerUser(){
  this._auth.registerUser(this.registerUserData)
   .subscribe(
     res => {console.log(res)
             this._route.navigate(['/login'])
     }
     ,
     err => console.log(err)

   );
}



}
