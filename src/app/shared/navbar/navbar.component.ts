import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.scss']
})
export class NavbarComponent implements OnInit {
  linkId: number = 1
  menu!: boolean
  constructor() { }
  ngOnInit(): void {

  }
  addClass(id: any) {
    this.linkId = id;
    this.menu = true
  }
  removeMenu() {
    this.menu = false
  }
}
