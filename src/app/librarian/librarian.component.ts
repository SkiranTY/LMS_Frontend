import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-librarian',
  templateUrl: './librarian.component.html',
  styleUrls: ['./librarian.component.css']
})
export class LibrarianComponent implements OnInit {

  constructor() { }

  printform(loginform){
    console.log(loginform.value);
  }
  ngOnInit() {
  }

}
