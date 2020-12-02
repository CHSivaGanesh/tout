import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http'

@Injectable({
  providedIn: 'root'
})
export class HomeService {

private _homeUrl ='http://localhost:3000/api/home';

constructor(private http:HttpClient) { }
  
  getHome() {
    return this.http.get<any>(this._homeUrl);
  }


}
