import { Injectable } from '@angular/core';
import {HttpClient, HttpClientModule } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class AuthService {
   email = '';
   Orders : any = [];
  c=0;
  
  private _registerUrl = 'http://localhost:3000/api/register';
  private _loginUrl = 'http://localhost:3000/api/login';
  private _mobilesUrl = 'http://localhost:3000/api/mobiles';
  private _laptopUrl = 'http://localhost:3000/api/laptops';
  private _orderUrl = 'http://localhost:3000/api/order';
  private _HeadphonesUrl = 'http://localhost:3000/api/headphones';
  private _Laptop_bagsUrl = 'http://localhost:3000/api/Laptopbags';
  private _Mobile_accesoriesUrl = 'http://localhost:3000/api/Mobile_accesories';
  private _mousesUrl = 'http://localhost:3000/api/mouses';
  private _TeddybearsUrl = 'http://localhost:3000/api/Teddybears';
  private _TelevisionsUrl = 'http://localhost:3000/api/Televisions';
  private _Sportsitems = 'http://localhost:3000/api/sportsitems';

  constructor(private http: HttpClient) { }
  

 getLaptops(){
  return this.http.get<any>(this._laptopUrl)
}
getMobiles(){
  return this.http.get<any>(this._mobilesUrl);
}
getLaptop_bags(){
  return this.http.get<any>(this._Laptop_bagsUrl);
}
getMobile_accesories(){
  return this.http.get<any>(this._Mobile_accesoriesUrl);
}
getmouses(){
  return this.http.get<any>(this._mousesUrl);
}
getHeadphones(){
  return this.http.get<any>(this._HeadphonesUrl);
}
getTeddybears(){
  return this.http.get<any>(this._TeddybearsUrl);
}
getTelevisions(){
  return this.http.get<any>(this._TelevisionsUrl);
}
getSportsitems(){
  return this.http.get<any>(this._Sportsitems);
}



registerUser(user) {
 return this.http.post<any>(this._registerUrl , user)
}

loginUser(user){
  return this.http.post<any>(this._loginUrl , user)
}

addtocart(item){
   this.Orders.push(item);
   this.c = this.Orders.length;
   return this.http.post<any>(this._orderUrl,item)
}

 AddOrder(orders){
  return this.http.post<any>(this._orderUrl , orders)
 }
}
