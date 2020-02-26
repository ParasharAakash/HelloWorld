import { Component, APP_BOOTSTRAP_LISTENER } from '@angular/core';
import{FormGroup,FormControl,FormBuilder,NgForm} from '@angular/forms';
@Component({
  selector: 'app-root',
  templateUrl: './app.component.html' ,
  styleUrls: ['./app.component.css','./aakash/aakash.component.css']
})
export class AppComponent {

  title = 'AakashParashar';
  signupForm:FormGroup;
  FullName:string="";
  Age:string="";
  Contact:string="";
  Address:string="";
  Email:string="";
  Bio:string="";
  
  constructor(private frmbuilder:FormBuilder){
    this.signupForm=this.frmbuilder.group({
      fname :new FormControl(),
      fage:new FormControl(),
      fcontact :new FormControl(),
      faddress:new FormControl(),
      femail:new FormControl(),
      fbio:new FormControl(),
                                  });
  }
  ngOnInit(){
  }
    postdata(signupForm:any) 
    {
      console.log(signupForm.controls);
    } 
  }