import { WHITE_ON_BLACK_CSS_CLASS } from '@angular/cdk/a11y/high-contrast-mode/high-contrast-mode-detector';
import { Component,OnInit} from '@angular/core';

declare var $:any;

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
  title = 'Tout';
  ngOnInit(){
    $(document).ready(function(){
      $("#login1").click(function(){
        $("#homediv").fadeTo("slow",0.7);
        $("#card").fadeIn("slow");
      });
        $("#close1").click(function(){
          $("#homediv").fadeTo("slow",1);
          $("#card").fadeOut("slow");
        });
     });
  }
}
