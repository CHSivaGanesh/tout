import { Component, OnInit } from '@angular/core';
import {AuthService } from '../auth.service';
import { Router } from '@angular/router';
import {MatSnackBar,MatSnackBarHorizontalPosition,
  MatSnackBarVerticalPosition,} from '@angular/material/snack-bar';
import { TeddybearsComponent } from '../teddybears/teddybears.component';
import { LoginunsuccesfulComponent } from '../loginunsuccesful/loginunsuccesful.component';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
  horizontalPosition: MatSnackBarHorizontalPosition = 'center';
  verticalPosition: MatSnackBarVerticalPosition = 'top';


  durationInSeconds = 5;

  loginUserData ={
    name : '',
    email : '',
    password : ''
  }
  constructor(private _auth:AuthService,private _route : Router,private _snackBar: MatSnackBar) { }

  ngOnInit(): void {
    

  }


loginUser(){
  localStorage.setItem('email',this.loginUserData.email);
  this._auth.loginUser(this.loginUserData)
   .subscribe(
    res => {     
      localStorage.setItem('token', res.token)
      this.openSnackBar()   
        this._route.navigate(['/Home']) 
        console.log(res)   
  },
     err => {
       this.closeSnackBar() 
      console.log(err)
        // alert("Login Unsuccesful")

     }
     )}

     openSnackBar() {
      this._snackBar.openFromComponent(TeddybearsComponent, {
        duration: this.durationInSeconds * 1000,
        horizontalPosition: this.horizontalPosition,
      verticalPosition: this.verticalPosition,
      });
    }
    closeSnackBar() {
      this._snackBar.openFromComponent(LoginunsuccesfulComponent, {
        duration: this.durationInSeconds * 1000,
        horizontalPosition: this.horizontalPosition,
      verticalPosition: this.verticalPosition,
      });
    }

     
  }

  
  










