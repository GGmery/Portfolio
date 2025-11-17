import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';


interface Project {
  title: string;
  description: string;
  technologies: string[];
  link?: string;
  image: string;
  date: string;          // fecha de creación
  type: string;          // académico, personal, freelance
  features: string[];    // funcionalidades principales
  status: string;        // terminado, en desarrollo...
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
      image: '/assets/linya.jpg',
      date: '2025-11', // más compacto
      type: 'Académico & personal',
      features: [
        'Diseño de la interfaz',
        'Registro y login de usuarios',
        'Publicación de ofertas de empleo',
        'Chat entre usuarios'
      ],
      status: 'En desarrollo',
    },
    {
      title: 'Champion Selection',
      description: 'Aplicación en Angular para consultar información detallada sobre campeones.',
      technologies: ['Angular', 'TypeScript', 'API REST'],
      link: 'https://github.com/GGmery/Champion-Select-League-of-Legends',
      image: '/assets/champion.jpg',
      date: '2025-11',
      type: 'Personal',
      features: [
        'Listado de campeones',
        'Filtros por rol y dificultad',
        'Detalle con estadísticas y habilidades',
        'Diseño responsive'
      ],
      status: 'En desarrollo'
    },
    {
      title: 'To Do App',
      description: 'Lista de tareas en Angular con clasificación por importancia y urgencia.',
      technologies: ['Angular', 'TypeScript', 'LocalStorage'],
      link: 'https://github.com/GGmery/To-Do-App',
      image: '/assets/todo.jpg',
      date: '2025-10',
      type: 'Personal',
      features: [
        'Añadir, editar y eliminar tareas',
        'Clasificación por importancia y urgencia',
        'Persistencia en LocalStorage',
        'Interfaz minimalista y responsive'
      ],
      status: 'Ampliable'
    },
    {
      title: 'Pokémon Info',
      description: 'Proyecto en JavaScript para ver información de la primera generación de Pokémon (expandible a todas).',
      technologies: ['JavaScript', 'HTML', 'CSS', 'PokéAPI'],
      link: 'https://github.com/GGmery/Pokemon',
      image: '/assets/pokemon.jpg',
      date: '2023-09',
      type: 'Personal',
      features: [
        'Listado de Pokémon de la primera generación',
        'Detalle con estadísticas y habilidades',
        'Consumo de PokéAPI',
        'Diseño retro inspirado en los juegos clásicos'
      ],
      status: 'Ampliable'
    }
  ];
}
