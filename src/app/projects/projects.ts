import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';

interface Project {
  title: string;
  description: string;
  technologies: string[];
  link?: string;
  image: string; // 👈 portada del proyecto
}

@Component({
  selector: 'app-projects',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './projects.html',
  styleUrls: ['./projects.css']
})
export class ProjectsComponent {
  projects: Project[] = [
    {
      title: 'Linya',
      description: 'Red social para buscar empleo como programador y diseñador gráfico. Proyecto TFC hecho con React.',
      technologies: ['React', 'CSS', 'Firebase'],
      link: 'https://github.com/GGmery/Linya-Web',
      image: '/assets/linya.jpg'
    },
    {
      title: 'Champion Selection',
      description: 'Aplicación en Angular para consultar información detallada sobre campeones.',
      technologies: ['Angular', 'TypeScript', 'API REST'],
      link: 'https://github.com/GGmery/Champion-Select-League-of-Legends',
      image: '/assets/champion.jpg'
    },
    {
      title: 'To Do App',
      description: 'Lista de tareas en Angular con clasificación por importancia y urgencia.',
      technologies: ['Angular', 'TypeScript', 'LocalStorage'],
      link: 'https://github.com/GGmery/To-Do-App',
      image: '/assets/todo.jpg'
    },
    {
      title: 'Pokémon Info',
      description: 'Proyecto en JavaScript para ver información de la primera generación de Pokémon (expandible a todas).',
      technologies: ['JavaScript', 'HTML', 'CSS', 'PokéAPI'],
      link: 'https://github.com/GGmery/Pokemon',
      image: '/assets/pokemon.jpg'
    }
  ];
}
