// src/app/app-routing.module.ts
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

// Importa los componentes de tus páginas
import { InicioComponent } from './pages/inicio/inicio.component';
import { ProyectosComponent } from './pages/proyectos/proyectos.component';
import { ContactoComponent } from './pages/contacto/contacto.component';

// Define tus rutas
const routes: Routes = [
  { path: '', redirectTo: '/inicio', pathMatch: 'full' }, // Ruta por defecto, redirige a /inicio
  { path: 'inicio', component: InicioComponent },
  { path: 'proyectos', component: ProyectosComponent },
  { path: 'contacto', component: ContactoComponent },
  { path: '**', redirectTo: '/inicio' } // Redirige cualquier ruta no encontrada a /inicio
];

@NgModule({
  imports: [RouterModule.forRoot(routes)], // Configura el módulo de enrutamiento con tus rutas
  exports: [RouterModule] // Exporta RouterModule para que esté disponible en toda la aplicación
})
export class AppRoutingModule { }
