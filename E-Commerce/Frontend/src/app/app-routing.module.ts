import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { AppComponent } from './app.component';
import { CartComponent } from './cart/cart.component';
import { ChatbotComponent } from './chatbot/chatbot.component';
import { HeadphonesComponent } from './headphones/headphones.component';
import { HomeComponent } from './home/home.component';
import { LaptopBagsComponent } from './laptop-bags/laptop-bags.component';
import { LaptopsComponent } from './laptops/laptops.component';
import { LoginComponent } from './login/login.component';
import { MobileAccesoriesComponent } from './mobile-accesories/mobile-accesories.component';
import { MobilesComponent } from './mobiles/mobiles.component';
import { MousesComponent } from './mouses/mouses.component';
import { RegisterComponent } from './register/register.component';
import { SportsitemsComponent } from './sportsitems/sportsitems.component';
import { TeddybearsComponent } from './teddybears/teddybears.component';
import { TelivisionsComponent } from './telivisions/telivisions.component';
import {AuthGuard} from '../app/auth.guard';
import { LoginunsuccesfulComponent } from './loginunsuccesful/loginunsuccesful.component';
import { WelcomeComponent } from './welcome/welcome.component';
import { CheckoutComponent } from './checkout/checkout.component';
import { PagenotfoundComponent } from './pagenotfound/pagenotfound.component';

const routes: Routes = [ {path : '' , component : LoginComponent},
{path: 'login' , component:LoginComponent},
{path: 'register' , component:RegisterComponent },
{path: 'Home' , component:HomeComponent, canActivate : [AuthGuard] },
{path:'cart' , component:CartComponent, canActivate : [AuthGuard]},
{path:'mobiles',component:MobilesComponent},
{path :'laptops' ,  component: LaptopsComponent, canActivate : [AuthGuard]},
{path :'mouses' ,  component: MousesComponent, canActivate : [AuthGuard]},
{path :'Headphones' ,  component: HeadphonesComponent, canActivate : [AuthGuard]},
{path :'Mobile_accesories' ,  component: MobileAccesoriesComponent, canActivate : [AuthGuard]},
{path :'Telivisions' ,  component: TelivisionsComponent, canActivate : [AuthGuard]},
{path :'Teddybears' ,  component: TeddybearsComponent, canActivate : [AuthGuard]},
{path :'Laptop_bags' ,  component: LaptopBagsComponent, canActivate : [AuthGuard]},
{path : 'chatbot' , component:ChatbotComponent},
{path : 'sportsitems' , component:SportsitemsComponent, canActivate : [AuthGuard]},
{path : 'loginunsuccesful',component:LoginunsuccesfulComponent},
{path:'welcome' , component:WelcomeComponent},
{path:'checkout',component:CheckoutComponent},
{path:'pagenotfound' , component: PagenotfoundComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
