// src/app/pages/proyectos/proyectos.component.ts
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-proyectos',
  templateUrl: './proyectos.component.html',
  styleUrls: ['./proyectos.component.less']
})
export class ProyectosComponent implements OnInit {

  // Array que contendrá todos los proyectos
  allProjects: any[] = [];
  // Número de proyectos visibles actualmente
  visibleProjectsCount: number = 6;
  // Booleano para controlar la visibilidad del botón "Ver más"
  showLoadMoreButton: boolean = true;

  constructor() { }

  ngOnInit(): void {
    // Inicializa tus proyectos aquí. Puedes añadir más propiedades como 'description', 'link', etc.
    this.allProjects = [
      { id: 1, name: 'Proyecto 1', description: 'Descripción breve del proyecto 1, tecnologías usadas, etc.', imageUrl: 'https://placehold.co/400x250/1a0a3a/FFFFFF?text=Proyecto+1' },
      { id: 2, name: 'Proyecto 2', description: 'Descripción breve del proyecto 2, tecnologías usadas, etc.', imageUrl: 'https://placehold.co/400x250/1a0a3a/FFFFFF?text=Proyecto+2' },
      { id: 3, name: 'Proyecto 3', description: 'Descripción breve del proyecto 3, tecnologías usadas, etc.', imageUrl: 'https://placehold.co/400x250/1a0a3a/FFFFFF?text=Proyecto+3' },
      { id: 4, name: 'Proyecto 4', description: 'Descripción breve del proyecto 4, tecnologías usadas, etc.', imageUrl: 'https://placehold.co/400x250/1a0a3a/FFFFFF?text=Proyecto+4' },
      { id: 5, name: 'Proyecto 5', description: 'Descripción breve del proyecto 5, tecnologías usadas, etc.', imageUrl: 'https://placehold.co/400x250/1a0a3a/FFFFFF?text=Proyecto+5' },
      { id: 6, name: 'Proyecto 6', description: 'Descripción breve del proyecto 6, tecnologías usadas, etc.', imageUrl: 'https://placehold.co/400x250/1a0a3a/FFFFFF?text=Proyecto+6' },
      { id: 7, name: 'Proyecto 7', description: 'Descripción breve del proyecto 7, tecnologías usadas, etc.', imageUrl: 'https://placehold.co/400x250/1a0a3a/FFFFFF?text=Proyecto+7' },
      { id: 8, name: 'Proyecto 8', description: 'Descripción breve del proyecto 8, tecnologías usadas, etc.', imageUrl: 'https://placehold.co/400x250/1a0a3a/FFFFFF?text=Proyecto+8' },
      { id: 9, name: 'Proyecto 9', description: 'Descripción breve del proyecto 9, tecnologías usadas, etc.', imageUrl: 'https://placehold.co/400x250/1a0a3a/FFFFFF?text=Proyecto+9' },
    ];

    // Llama a checkLoadMoreButtonStatus para asegurar que el botón se muestre/oculte correctamente al inicio
    this.checkLoadMoreButtonStatus();
  }

  // Método para obtener los proyectos que deben ser visibles
  get visibleProjects(): any[] {
    return this.allProjects.slice(0, this.visibleProjectsCount);
  }

  // Método para cargar más proyectos
  loadMoreProjects(): void {
    this.visibleProjectsCount += 3; // Incrementa en 3
    this.checkLoadMoreButtonStatus(); // Vuelve a verificar el estado del botón
  }

  // Método para verificar si el botón "Ver más" debe ser visible
  checkLoadMoreButtonStatus(): void {
    this.showLoadMoreButton = this.visibleProjectsCount < this.allProjects.length;
  }
}