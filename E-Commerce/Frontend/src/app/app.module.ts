import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import {FormsModule, ReactiveFormsModule} from '@angular/forms';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { LoginComponent } from './login/login.component';
import { RegisterComponent } from './register/register.component';
import {HttpClientModule , HTTP_INTERCEPTORS} from '@angular/common/http';
import {TokenInterceptorService} from '../app/token-interceptor.service';
import { AuthService } from '../app/auth.service';
import {AuthGuard} from '../app/auth.guard';
import { HomeComponent } from './home/home.component'
import { HomeService } from './home.service';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import {MatButtonModule} from '@angular/material/button';
import {MatMenuModule} from '@angular/material/menu';
import {MatIconModule} from '@angular/material/icon';
import { MatGridListModule } from '@angular/material/grid-list';
import { NavbarComponent } from './navbar/navbar.component';
import { CartComponent } from './cart/cart.component';
import { ProductService } from '../app/product.service';
import { MobilesComponent } from './mobiles/mobiles.component';
import { LaptopsComponent } from './laptops/laptops.component';
import { HeadphonesComponent } from './headphones/headphones.component';
import { LaptopBagsComponent } from './laptop-bags/laptop-bags.component';
import { MobileAccesoriesComponent } from './mobile-accesories/mobile-accesories.component';
import { MousesComponent } from './mouses/mouses.component';
import { TeddybearsComponent } from './teddybears/teddybears.component';
import { TelivisionsComponent } from './telivisions/telivisions.component';
import { ChatbotComponent } from './chatbot/chatbot.component';
import {MatFormFieldModule} from '@angular/material/form-field';
import {MatSnackBarModule} from '@angular/material/snack-bar';
import { LoginunsuccesfulComponent } from './loginunsuccesful/loginunsuccesful.component';
import {MatTableModule} from '@angular/material/table';
import { SportsitemsComponent } from './sportsitems/sportsitems.component';
import { FooterComponent } from './footer/footer.component';
import { WelcomeComponent } from './welcome/welcome.component';
import { CheckoutComponent } from './checkout/checkout.component';
import {MatDividerModule} from '@angular/material/divider';
import { PagenotfoundComponent } from './pagenotfound/pagenotfound.component';





@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    RegisterComponent,
    HomeComponent,
    NavbarComponent,
    CartComponent,
    MobilesComponent,
    LaptopsComponent,
    HeadphonesComponent,
    LaptopBagsComponent,
    MobileAccesoriesComponent,
    MousesComponent,
    TeddybearsComponent,
    TelivisionsComponent,
    ChatbotComponent,
    LoginunsuccesfulComponent,
    SportsitemsComponent,
    FooterComponent,
    WelcomeComponent,
    CheckoutComponent,
    PagenotfoundComponent,
  ],
  imports: [
    ReactiveFormsModule,
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    HttpClientModule,
    BrowserAnimationsModule,
    MatButtonModule,
    MatMenuModule,
    MatIconModule,
    MatGridListModule,
    MatFormFieldModule,
    MatSnackBarModule,  
    MatTableModule,  
    MatDividerModule  
  ],
  providers: [AuthService,HomeService,ProductService,AuthGuard ,
     {
       provide : HTTP_INTERCEPTORS,
       useClass : TokenInterceptorService,
       multi : true
     }],
  bootstrap: [AppComponent]


})
export class AppModule { }
