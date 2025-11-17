import { Routes } from '@angular/router';
import { Home } from './home/home';
import { About } from './about/about';
import { ProjectsComponent } from './projects/projects';
import { ContactComponent } from './contact/contact';

export const routes: Routes = [
  { path: '', component: Home },              // Página de inicio
  { path: 'about', component: About },        // Página "Sobre mí"
  { path: 'projects', component: ProjectsComponent },  // Página de proyectos
  { path: 'contact', component: ContactComponent },    // Página de contacto
  { path: '**', redirectTo: '' }                       // Redirección si la ruta no existe
];
