import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-get-all-books',
  templateUrl: './get-all-books.component.html',
  styleUrls: ['./get-all-books.component.css']
})
export class GetAllBooksComponent implements OnInit {

  constructor(private router:Router) { }
  searchbooks(books){
    this.router.navigateByUrl('/search-book')
  }
  ngOnInit() {
  }

}
