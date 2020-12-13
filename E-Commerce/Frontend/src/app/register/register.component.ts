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

  hide1=true;
  hide2=false;
  
move()
{
  this.hide1=false;
  this.hide2=true;
  setTimeout(() => {
    this.hide1=true;
    this.hide2=false;
  },50000);

}
  registerUserData ={
    name : '',
    email: '',
    password : ''
  }

  ngOnInit(): void {
  }


registerUser(){

  localStorage.setItem('name',this.registerUserData.name)
  localStorage.setItem('email',this.registerUserData.email);
  this.sendmail()
  this._auth.registerUser(this.registerUserData)
   .subscribe(
     res => {
              console.log(res)
              localStorage.setItem('token', res.token)
              this.move();
             this._route.navigate(['/Home'])
     },
     err => console.log(err)

   );
}
sendmail(){

  this._auth.sendmail(this.registerUserData)
  .subscribe(
    res => {console.log(res)},
    err => (console.log(err))
  );
}



}
