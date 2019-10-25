import { Component, OnInit } from '@angular/core';
import { HttpClientModule } from '@angular/common/http';
import { Router } from '@angular/router';

@Component({
  selector: 'app-admin',
  templateUrl: './admin.component.html',
  styleUrls: ['./admin.component.css']
})
export class AdminComponent implements OnInit {

  constructor(private http:HttpClientModule,private router:Router) { }

  printform(loginform){
    console.log(loginform.value);
    loginform.reset();
  }
  printformreg(registerform){
    console.log(registerform.value);
    registerform.reset();
  }
  toadminhome(adminhome){
    this.router.navigateByUrl('/admin-home');
  }

  ngOnInit() {
  }

}
