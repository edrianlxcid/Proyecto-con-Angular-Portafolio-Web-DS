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
      { id: 1, name: 'Base de Datos', description: 'Mediante PostgreSQL, usando triggers y procedimeintos almacenados para rastrear cambios.', imageUrl: 'assets/imagenes/database.jpg' },
      { id: 2, name: 'Desarrollo Web', description: 'Landing pages interactivas con diseño web responsive con funcionalidades dinámicas.', imageUrl: 'assets/imagenes/desarrollo_web.jpg' },
      { id: 3, name: 'Redes y comunicación de datos.', description: 'Automatización de flujos de trabajo con integración de tareas repetitivas con n8n y máquinas virtuales.', imageUrl: 'assets/imagenes/redesycomunica.jpg' },
      { id: 4, name: 'Entrono de desarollo multiplataforma', description: 'VMs con distintos sistemas operativos ( Linux, Windows, FreeBSD).', imageUrl: 'assets/imagenes/vm.png' },
      { id: 5, name: 'Chatbots y asistentes locales', description: 'Botpress corriendo en servidor local: integrado con sistemas de respaldo y eventos técnicos.', imageUrl: 'assets/imagenes/chatbot.jpg' },
      { id: 6, name: 'Aplicaciones Web con Nginx como servidor de producción', description: 'Aplicaciones Web con Ngnx Nginx seirve estáticos + redirecciona a backend API para lógica', imageUrl: 'assets/imagenes/nginx.png' },
      { id: 7, name: 'Sistema de Gestión de Inventario Inteligente (SGII)', description: 'Optimiza la gestión de stock para PYMES con seguimiento en tiempo real, automatización de pedidos y análisis predictivo de ventas para evitar pérdidas y mejorar la eficiencia.', imageUrl: 'assets/imagenes/sistemainteli.jpg' },
      { id: 8, name: 'Plataforma Educativa Interactiva para Aprendizaje de Idiomas (PEILA)', description: 'Aplicación multiplataforma que ofrece un aprendizaje de idiomas inmersivo con lecciones gamificadas, práctica de pronunciación y chats con hablantes nativos.', imageUrl: 'assets/imagenes/educati.jpg' },
      { id: 9, name: 'Herramienta de Visualización y Análisis de Datos Climáticos (VIDAC)', description: 'Software intuitivo para investigadores y entusiastas, permite visualizar y analizar datos climáticos históricos y en tiempo real con gráficos interactivos y proyecciones de tendencias.', imageUrl: 'assets/imagenes/analisisdedatos.jpg' },
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