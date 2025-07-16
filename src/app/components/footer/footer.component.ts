// src/app/components/footer/footer.component.ts
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-footer',
  templateUrl: './footer.component.html',
  styleUrls: ['./footer.component.less'] // Asegúrate de que sea 'styleUrls' si tienes un array
})
export class FooterComponent implements OnInit {
  currentYear: number = 0; // Propiedad para almacenar el año actual

  constructor() { }

  ngOnInit(): void {
    this.currentYear = new Date().getFullYear(); // Obtiene el año actual al inicializar el componente
  }
}