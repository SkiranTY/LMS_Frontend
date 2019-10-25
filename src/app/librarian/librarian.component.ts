import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-librarian',
  templateUrl: './librarian.component.html',
  styleUrls: ['./librarian.component.css']
})
export class LibrarianComponent implements OnInit {

  constructor(private router:Router) { }

  printform(loginform){
    console.log(loginform.value);
  }
  tohome(admin){
    this.router.navigateByUrl('/home')
  }
  ngOnInit() {
  }

}
