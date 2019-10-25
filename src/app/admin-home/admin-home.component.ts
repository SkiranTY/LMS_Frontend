import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-admin-home',
  templateUrl: './admin-home.component.html',
  styleUrls: ['./admin-home.component.css']
})
export class AdminHomeComponent implements OnInit {

  constructor(private router:Router) { }

  adduser(user){
    this.router.navigateByUrl('/add-user');
  }
  getAllusers(user){
    this.router.navigateByUrl('/get-all-user');
  }
  ngOnInit() {
  }

}
