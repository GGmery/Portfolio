import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';


interface Project {
  title: string;
  description: string;
  technologies: string[];
  link?: string;
  image: string;
  date: string
  type: string;
  features: string[];
  status: string; 
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
      title: 'Linya Web',
      description: 'Página web para buscar empleo en programación y diseño gráfico. Proyecto TFC desarrollado con React y TypeScript.',
      technologies: ['React', 'TypeScript', 'TailwindCSS', 'Firebase'],
      link: 'https://github.com/GGmery/Linya-Web',
      image: '/assets/images/linyaweb.png',
      date: '2025-11',
      type: 'Académico & personal',
      features: [
        'Diseño de la interfaz web',
        'Modo día/noche con Liny Aurora y Liny Noctis'
      ],
      status: 'En desarrollo',
    },
    {
      title: 'Champion Selection',
      description: 'Aplicación en Angular para consultar información detallada sobre campeones.',
      technologies: ['Angular', 'TypeScript', 'API REST'],
      link: 'https://github.com/GGmery/Champion-Select-League-of-Legends',
      image: '/assets/images/champion.png',
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
      image: '/assets/images/todo.png',
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
      image: '/assets/images/pokemon.png',
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
