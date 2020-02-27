import { Component, APP_BOOTSTRAP_LISTENER } from '@angular/core';
import { FormGroup, FormControl, FormBuilder, NgForm, Validators } from '@angular/forms';
@Component({
  selector: 'aakash',
  templateUrl: './aakash.component.html',
  styleUrls: ['./aakash.component.css']
})
export class AakashComponent implements OnInit {

  
  title = 'AakashParashar';
  signupForm: FormGroup;
  FullName: string = "";
  Age: string = " ";
  Contact: string = "";
  Address: string = "";
  Email: string = "";
  Bio: string = "";

  constructor(private frmbuilder: FormBuilder) {
    this.signupForm = frmbuilder.group({
      fname: ['', Validators.required],
      fage: ['', Validators.required],
      fcontact: ['', Validators.required],
      faddress: ['', Validators.required],
      femail: ['', Validators.required],
      fbio: ['', Validators.required]
    });
  }
  ngOnInit() {}
  
  Submit(signupForm: any) {
    this.FullName = signupForm.controls.fname.value;
    this.Age = signupForm.controls.fage.value;
    this.Contact = signupForm.controls.fcontact.value;
    this.Address = signupForm.controls.faddress.value;
    this.Email = signupForm.controls.femail.value;
    this.Bio = signupForm.controls.fbio.value;
    console.log(this.FullName);
    console.log(signupForm.controls);
  }
}