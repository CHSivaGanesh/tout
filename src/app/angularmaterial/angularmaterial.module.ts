import { NgModule } from '@angular/core';
import {MatCardModule} from '@angular/material/card';
import {MatButtonModule} from '@angular/material/button';
import {MatIconModule} from '@angular/material/icon';
import {MatFormFieldModule} from '@angular/material/form-field';
import {MatToolbarModule} from '@angular/material/toolbar';
const MaterialComponents = [MatCardModule,MatButtonModule,MatIconModule,MatFormFieldModule,MatToolbarModule]

@NgModule({
  imports: [
    
    MaterialComponents
  ],
  exports:[
   MaterialComponents
  ]
})
export class AngularmaterialModule { 
  
}
