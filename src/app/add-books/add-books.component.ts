import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-add-books',
  templateUrl: './add-books.component.html',
  styleUrls: ['./add-books.component.css']
})
export class AddBooksComponent implements OnInit {

  constructor(private router:Router) { }
  addbooks(books){
    console.log(books.value);
    books.reset();
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
