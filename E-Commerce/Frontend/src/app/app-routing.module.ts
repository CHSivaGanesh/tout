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


const routes: Routes = [ {path : '' , component : LoginComponent},
{path: 'login' , component:LoginComponent},
{path: 'register' , component:RegisterComponent },
{path: 'Home' , component:HomeComponent },
{path:'cart' , component:CartComponent},
{path:'mobiles',component:MobilesComponent},
{path :'laptops' ,  component: LaptopsComponent},
{path :'mouses' ,  component: MousesComponent},
{path :'Headphones' ,  component: HeadphonesComponent},
{path :'Mobile_accesories' ,  component: MobileAccesoriesComponent},
{path :'Telivisions' ,  component: TelivisionsComponent},
{path :'Teddybears' ,  component: TeddybearsComponent},
{path :'Laptop_bags' ,  component: LaptopBagsComponent},
{path : 'chatbot' , component:ChatbotComponent},
{path : 'sportsitems' , component:SportsitemsComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
