import { Component, APP_BOOTSTRAP_LISTENER, OnInit } from '@angular/core';
import { FormGroup, FormControl, FormBuilder, NgForm, Validators } from '@angular/forms';
@Component({
  selector: 'aakash',
  templateUrl: './aakash.component.html',
  styleUrls: ['./aakash.component.css']
})
export class AakashComponent implements OnInit {
  message = [];
  title = 'AakashParashar';
 // signupForm: FormGroup;
  FullName: string = "";
  Age: string = " ";
  Contact: string = "";
  Address: string = "";
  Email: string = "";
  Bio: string = "";

  
   
  constructor(private frmbuilder: FormBuilder) {
   
    }
      signupForm = this.frmbuilder.group({
      fname: ['', Validators.required],
      fage: ['', Validators.required],
      fcontact: ['', [Validators.required, Validators.maxLength(12), Validators.minLength(10)]],
      faddress: ['', Validators.required],
      femail: ['', Validators.required],
      fbio: ['', Validators.required]
      })
 
    ngOnInit(): void {}

onClickMe() {
      console.log(this.message.length);
      if(this.message.length === 0){
      const fr = localStorage.getItem("users");
      const sds = JSON.parse(fr);
      console.log("sds length " + sds.length)
      for (var i = 0; i < sds.length; i++) {
        this.message[i] = sds[i];
        console.log("sds", sds[i]);
      }
    }
    console.log(this.signupForm.value);
    this.message.push(this.signupForm.value);
    console.log(this.message);
    localStorage.setItem('users', JSON.stringify(this.message));

  }

  ongetEmp() {
    console.log(localStorage.getItem('users'));
    const onj = localStorage.getItem('users');
    const d = JSON.parse(onj);
    console.log(d)
    console.log(d[0].fname);
  }

  Submit() {
    this.FullName = this.signupForm.get('fname').value;
    console.log(this.FullName);
    console.log(this.signupForm.value);
    this.message.push(this.signupForm.value);
    console.log(this.message);
    localStorage.setItem("userss", JSON.stringify(this.message));
  }
  resetForm() {
    this.signupForm.reset();
  }
  Details() {
    const obj = localStorage.getItem("userss");
    const detailsObj = JSON.parse(obj);
    console.log("details", detailsObj);
    console.log(detailsObj[0].fname);
  }

}





  //  Submit(signupForm: any) {
  //   //  this.FullName = signupForm.controls.fname.value;
  //   //  this.Age = signupForm.controls.fage.value;
  //   //  this.Contact = signupForm.controls.fcontact.value;
  //   //  this.Address = signupForm.controls.faddress.value;
  //   //  this.Email = signupForm.controls.femail.value;
  //   //  this.Bio = signupForm.controls.fbio.value;
  //   //  console.log(this.FullName);
  //   //  console.log(signupForm.controls);

  // }

/*export class AakashComponent implements OnInit {

  message = [];
  title = 'AakashParashar';
  signupForm: FormGroup;
  FullName: string = "";
  Age: string = " ";
  Contact: string = "";
  Address: string = "";
  Email: string = "";
  Bio: string = "";

  constructor(private frmbuilder: FormBuilder) {

    });
  }*/