import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-user-home',
  templateUrl: './user-home.component.html',
  styleUrls: ['./user-home.component.css']
})
export class UserHomeComponent implements OnInit {

  constructor(private router:Router) { }
  getAllbooks(books){
    this.router.navigateByUrl('/get-all-books')
  }
  serachbooks(books){
    this.router.navigateByUrl('/search-book')
  }
  ngOnInit() {
  }

}
