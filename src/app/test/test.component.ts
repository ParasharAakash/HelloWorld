import { Component, OnInit } from '@angular/core';
import { AakashComponent } from '../aakash/aakash.component';

@Component({
  selector: 'app-test',
  templateUrl: './test.component.html',
  styleUrls: ['./test.component.css']
})
export class TestComponent implements OnInit {
  fname = "";
  fage = "";
  fcontact = "";
  faddress = "";
  femail = "";
  fbio = "";
  constructor() { }

  //  onClickMe(){
  //    const s = localStorage.getItem("users");
  //    const ss = JSON.parse(s);
  //    console.log(ss);
  //    let val = "<table style='width:100%'><tr>";
  //    val = val +  "<th>Fullname</th><th>Age</th><th>Contact</th><th>Address</th><th>Email</th><th>Bio</th></tr>";
  //    console.log(ss.length);
  //    for(var i=0;i<ss.length;i++){
  //      var sd = "<tr><td>"+ss[i].fname+"</td><td>"+ss[i].fage+"</td><td>"+ss[i].fcontact+"</td><td>"+ss[i].faddress+"</td><td>"+ss[i].femail+"</td><td>"+ss[i].fbio+"</td></tr>"
  //      val = val + sd;
  //    }
  //    val = val + " </tr></table>";
  //    document.getElementById("ab").innerHTML = val;

  //  }
  ngOnInit(): void {
    let sdat = "";
    let su = [""];
  }

  sdat = JSON.parse(localStorage.getItem("users"));

  onEdit(id) {
    console.log("Edit id is: " + id);
    console.log(this.sdat[id]);
    this.sdat.splice(id, 1);
    localStorage.setItem('users', JSON.stringify(this.sdat));
  }

  cAll() {
    this.sdat.splice(0, this.sdat.length);
    localStorage.setItem('users', JSON.stringify(this.sdat));
  }

  onDel(id) {
    // console.log("Delete id is: " + id);
    // console.log(this.sdat[id]);
    this.sdat.splice(id, 1);
    localStorage.setItem('users', JSON.stringify(this.sdat));
  }
}

