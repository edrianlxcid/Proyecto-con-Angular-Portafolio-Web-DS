import { Component, HostListener } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.less']
})
export class NavbarComponent {
  isTransparent = false;

  constructor(private router: Router) {}

  @HostListener('window:scroll', [])
  onWindowScroll() {
    this.isTransparent = window.scrollY > 50;
  }

  navegarYScroll(ruta: string) {
    this.router.navigate([ruta]).then(() => {
      window.scrollTo({ top: 0, behavior: 'smooth' });
    });
  }
}
