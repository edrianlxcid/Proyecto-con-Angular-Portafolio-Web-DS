import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-inicio',
  templateUrl: './inicio.component.html',
  styleUrls: ['./inicio.component.less']
})
export class InicioComponent {
  constructor(private router: Router) {}

  irAProyectos() {
    this.router.navigate(['/proyectos']).then(() => {
      window.scrollTo({ top: 0, behavior: 'smooth' });
    });
  }
}
