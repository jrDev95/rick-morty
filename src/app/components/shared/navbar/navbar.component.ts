import { Component, OnInit } from '@angular/core';
import { ThrowStmt } from '@angular/compiler';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.scss']
})
export class NavbarComponent implements OnInit {

  showMenu : boolean = false;

  constructor() { }

  ngOnInit(): void {
  }

  mobileMenu() {
    this.showMenu = !this.showMenu;
  }

}
