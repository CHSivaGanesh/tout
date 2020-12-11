import { Injectable } from '@angular/core';
import {HttpClient, HttpClientModule } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class AuthService {
   email = ''
   Orders : any = [];
  
  
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
  private _sendmail = 'http://localhost:3000/api/sendmail';
  private _removeitem ='http://localhost:3000/api/remove';
  private _quantityset = 'http://localhost:3000/api/quantityset'


  constructor(private http: HttpClient) { 
    localStorage.setItem('quantity',"1")
  }
 
  quantity=localStorage.getItem('quantity')

  removeitem(name){
    console.log(name)
    return this.http.delete<any>(`http://localhost:3000/api/remove/${localStorage.getItem('email')}/${name}`)
  }

loggedIn(){
    
  return !!(localStorage.getItem('token'))
}

getToken()
{
  return localStorage.getItem('token');
}

logout()
{
  localStorage.removeItem('token')
}

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

sendmail(user){
  return this.http.post<any>(this._sendmail , user);
}

registerUser(user) {

 return this.http.post<any>(this._registerUrl , user)
}

loginUser(user){
  return this.http.post<any>(this._loginUrl , user)
}

addtocart(item){
  const obj  = {​​
    email : localStorage.getItem('email'),
    name : item.name,
    price: item.price,
    type : item.type,
    img : item.img,
    quantity : this.quantity,
  }
   return this.http.post<any>(this._orderUrl,obj)
}

 
 getorders(){
  return this.http.get<any>(this._orderUrl);
 }

 incrementquantity(quantity)

  {​​
    return this.http.put(this._quantityset, quantity);
  }​​
}