import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-test',
  templateUrl: './test.component.html',
  styleUrls: ['./test.component.css']
})
export class TestComponent implements OnInit {
  name ="";
  lname = "";
  email = "";
  street = "";
  city = "";
  state = "";

  constructor() { }

  ngOnInit(): void {
  }

  onClickMe(){
    const s = localStorage.getItem("user");
    const ss = JSON.parse(s);
    console.log(ss);
    let val = "<table style='width:100%'><tr>";
    val = val +  "<th>Firstname</th><th>Age</th><th>Contact</th><th>Address</th><th>Email</th><th>Bio</th></tr>";
    console.log(ss.length);
    for(var i=0;i<ss.length;i++){
      var sd = "<tr><td>"+ss[i].fname+"</td><td>"+ss[i].lname+"</td><td>"+ss[i].email+"</td><td>"+ss[i].street+"</td><td>"+ss[i].city+"</td><td>"+ss[i].state+"</td></tr>"
      val = val + sd;
    }
    val = val + " </tr></table>";
    document.getElementById("ab").innerHTML = val;
    
  }

}