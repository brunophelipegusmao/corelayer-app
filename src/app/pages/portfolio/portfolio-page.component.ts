import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';

import { ProjectCardComponent } from '../../components/project-card/project-card.component';

interface ProjectItem {
  title: string;
  description: string;
  technologies: string[];
  image: string;
  placeholderImage: string;
  projectUrl?: string;
  githubUrl: string;
}

@Component({
  selector: 'app-portfolio-page',
  standalone: true,
  imports: [CommonModule, ProjectCardComponent],
  templateUrl: './portfolio-page.component.html',
})
export class PortfolioPageComponent {
  protected readonly projects: ProjectItem[] = [
    {
      title: 'Corelayer - Réplica em Angular',
      description:
        'Réplica do projeto MyPage reescrita em Angular, mantendo estrutura visual e conteúdo, com roteamento, SSR e tema dark/light.',
      technologies: [
        'Angular 21',
        'TypeScript 5',
        'Tailwind CSS 4',
        'Angular Router',
        'Angular SSR',
        'EmailJS',
        'Lucide Angular',
        'pnpm',
      ],
      image: '/covers/web-cover.svg',
      placeholderImage: '/covers/web-cover.svg',
      githubUrl: 'https://github.com/brunophelipegusmao/mypage',
    },
    {
      title: 'Chronos Pomodoro - Timer de Produtividade',
      description:
        'Aplicação da técnica Pomodoro com controle de ciclos, histórico de sessões e navegação SPA para uso diário de foco.',
      technologies: [
        'React 19',
        'TypeScript',
        'Vite 7',
        'React Router 7',
        'date-fns',
        'Lucide React',
      ],
      image: '/covers/chronos-pomodoro-og.png',
      placeholderImage: '/covers/chronos-pomodoro-og.png',
      projectUrl: 'https://chronospomodoro.vercel.app/',
      githubUrl: 'https://github.com/brunophelipegusmao/chronos-pomodoro',
    },
    {
      title: 'Aura Frontend - Plataforma Web',
      description:
        'Frontend moderno com navegação fluida, transições de página e experiência responsiva baseada em stack React/Next atual.',
      technologies: [
        'Next.js 16',
        'React 19',
        'TypeScript',
        'MUI 7',
        'Tailwind CSS 4',
        'Framer Motion',
        'Swup',
      ],
      image: '/covers/aura-frontend-og.png',
      placeholderImage: '/covers/aura-frontend-og.png',
      projectUrl: 'https://aura-frontend-lovat.vercel.app',
      githubUrl: 'https://github.com/brunophelipegusmao/aura-frontend',
    },
    {
      title: 'JM Store - E-commerce de Suplementos',
      description:
        'Loja online com catálogo de 500+ produtos, carrinho, avaliações e fluxo de compra orientado a conversão.',
      technologies: [
        'Next.js 15',
        'React 19',
        'TypeScript',
        'PostgreSQL',
        'Drizzle ORM',
        'Tailwind CSS',
        'Shadcn/ui',
        'Auth.js',
      ],
      image: '/ChatGPT Image 12 de nov. de 2025, 09_34_50.png',
      placeholderImage: '/ChatGPT Image 12 de nov. de 2025, 09_34_50.png',
      projectUrl: 'https://ecommerce-jm.vercel.app/',
      githubUrl: 'https://github.com/brunophelipegusmao/ecommerce-jm',
    },
    {
      title: 'Navarro Advocacia - Website Institucional',
      description:
        'Website institucional para escritório jurídico com blog, painel administrativo e integração de temas dark/light.',
      technologies: [
        'Next.js 16',
        'React 19',
        'TypeScript',
        'NestJS',
        'Tailwind CSS 4',
        'Turbopack',
        'SSG',
      ],
      image: '/navarro.png',
      placeholderImage: '/navarro.png',
      projectUrl: 'https://navarro-adv.vercel.app/',
      githubUrl: 'https://github.com/brunophelipegusmao/navarro_adv',
    },
    {
      title: 'daCoach Confeitaria Fina - E-commerce Artesanal',
      description:
        'Website institucional com catálogo, integração com WhatsApp e painel administrativo para gestão de produtos e categorias.',
      technologies: [
        'Next.js 16',
        'React 19',
        'TypeScript',
        'Tailwind CSS 4',
        'Framer Motion',
        'Turbopack',
      ],
      image: '/dacoachsimp.png',
      placeholderImage: '/dacoachsimp.png',
      projectUrl: 'https://dacoach-confeitariafina.vercel.app/',
      githubUrl: 'https://github.com/brunophelipegusmao/dacoach-confeitariafina',
    },
    {
      title: 'JM Studio Fitness - Gestão de Academia',
      description:
        'Sistema para academias com controle de alunos, check-ins, gestão financeira e dashboards por perfil de usuário.',
      technologies: [
        'Next.js 15',
        'React 19',
        'TypeScript',
        'PostgreSQL',
        'Drizzle ORM',
        'Tailwind CSS',
        'JWT',
        'Shadcn/ui',
      ],
      image: '/covers/jmstudio.svg',
      placeholderImage: '/covers/jmstudio.svg',
      projectUrl: 'https://www.jmfitnessstudio.com.br',
      githubUrl: 'https://github.com/brunophelipegusmao/jm-bmstudiofitness',
    },
  ];

  protected readonly stackTags = [
    'Angular 21',
    'Next.js',
    'React',
    'TypeScript',
    'Tailwind CSS',
    'Framer Motion',
    'NestJS',
    'Drizzle ORM',
    'PostgreSQL',
    'Better Auth',
    'React Native',
  ];

  protected readonly delayClasses = [
    'animate-delay-200',
    'animate-delay-300',
    'animate-delay-400',
    'animate-delay-500',
    'animate-delay-600',
    'animate-delay-700',
  ];
}
