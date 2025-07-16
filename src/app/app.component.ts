// src/app/app.component.ts
import { Component, HostListener } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.less']
})
export class AppComponent {
  title = 'proyectodiseno'; // Puedes mantener o cambiar el título de tu aplicación

  // Propiedad para controlar si el navbar debe ser transparente
  isNavbarTransparent: boolean = false;

  // Escucha el evento 'scroll' en la ventana del navegador
  @HostListener('window:scroll', [])
  onWindowScroll() {
    // Si el scroll vertical es mayor a 50px (puedes ajustar este valor)
    // el navbar se vuelve transparente. De lo contrario, no.
    if (window.scrollY > 50) {
      this.isNavbarTransparent = true;
    } else {
      this.isNavbarTransparent = false;
    }
  }
}
