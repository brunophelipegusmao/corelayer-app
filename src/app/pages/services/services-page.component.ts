import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';

import { ServiceCardComponent } from '../../components/service-card/service-card.component';

interface ServiceItem {
  title: string;
  description: string;
  features: string[];
}

interface ServiceVisual {
  src: string;
  alt: string;
  label: string;
}

@Component({
  selector: 'app-services-page',
  standalone: true,
  imports: [CommonModule, ServiceCardComponent],
  templateUrl: './services-page.component.html'
})
export class ServicesPageComponent {
  protected readonly services: ServiceItem[] = [
    {
      title: 'Produtos Web de Alta Conversão',
      description: 'Criação de aplicações web modernas com foco em experiência fluida, performance e evolução contínua.',
      features: [
        'Next.js + React + TypeScript',
        'Design responsivo e UI orientada a produto',
        'Animações com Framer Motion e transições avançadas',
        'SEO técnico e otimização de Core Web Vitals'
      ]
    },
    {
      title: 'Backends e APIs Escaláveis',
      description: 'Análise técnica e implementação de APIs robustas para sistemas com regras de negócio complexas.',
      features: [
        'NestJS para camadas de domínio bem definidas',
        'PostgreSQL e modelagem orientada a produção',
        'Drizzle ORM com migrações seguras',
        'Autenticação com Better Auth/Auth.js e JWT'
      ]
    },
    {
      title: 'Automação e Operação Técnica',
      description: 'Integração entre sistemas, automações e suporte técnico para acelerar operação e entrega.',
      features: [
        'Workflows com n8n para processos recorrentes',
        'Integrações com serviços de terceiros',
        'Ajustes de performance e observabilidade',
        'Consultoria técnica e code review'
      ]
    }
  ];

  protected readonly stackTags = [
    'Next.js 16',
    'React 19',
    'TypeScript',
    'Tailwind CSS 4',
    'Framer Motion',
    'NestJS',
    'Drizzle ORM',
    'PostgreSQL',
    'Better Auth',
    'React Native'
  ];

  protected readonly delayClasses = ['animate-delay-200', 'animate-delay-300', 'animate-delay-400'];

  protected readonly serviceVisuals: ServiceVisual[] = [
    {
      src: '/illustrations/tech-command-center.svg',
      alt: 'Painel moderno de monitoramento para aplicações web',
      label: 'Web Apps'
    },
    {
      src: '/illustrations/api-topology.svg',
      alt: 'Topologia de integração entre serviços de backend e banco de dados',
      label: 'APIs Escaláveis'
    },
    {
      src: '/illustrations/mobile-cloud.svg',
      alt: 'Aplicação mobile conectada a serviços em nuvem',
      label: 'Mobile + Cloud'
    }
  ];
}
