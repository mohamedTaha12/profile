import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.scss']
})
export class NavbarComponent implements OnInit {
  linkId: number = 1
  menu!: boolean
  constructor(
    private router: Router
  ) { }
  ngOnInit(): void {

  }

  removeMenu() {
    this.menu = false
  }
  navigateTo(id: any, url: string) {
    this.linkId = id;
    this.menu = true;
    this.router.navigate([url])
  }
}
