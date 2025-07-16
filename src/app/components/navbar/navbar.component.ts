import { Component, HostListener } from '@angular/core';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.less']
})
export class NavbarComponent {
  isTransparent = false;

  @HostListener('window:scroll', [])
  onWindowScroll() {
    this.isTransparent = window.scrollY > 50;
  }
}
