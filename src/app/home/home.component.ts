import { Component, OnInit } from '@angular/core';
import { RouterModule, Router } from '@angular/router';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

  constructor(private router:Router) { }
  addbooks(book){
    this.router.navigateByUrl('/add-books');
    console.log(book);
  }
  getallbooks(books){
    this.router.navigateByUrl('/get-all-books')
  }

  searchbook(book){
    this.router.navigateByUrl('/search-book')
  }

  ngOnInit() {
  }

}
