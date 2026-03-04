import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { LucideAngularModule, type LucideIconData, ArrowRight, Boxes, Code2, Database, Rocket, ShieldCheck, Smartphone, Workflow } from 'lucide-angular';

import { ButtonComponent } from '../../components/button/button.component';

interface Highlight {
  label: string;
  value: string;
  icon: LucideIconData;
}

interface TechGroup {
  title: string;
  icon: LucideIconData;
  items: string[];
}

interface DeliveryStep {
  title: string;
  description: string;
}

@Component({
  selector: 'app-home-page',
  standalone: true,
  imports: [CommonModule, LucideAngularModule, ButtonComponent],
  templateUrl: './home-page.component.html'
})
export class HomePageComponent {
  protected readonly iconShieldCheck = ShieldCheck;
  protected readonly iconArrowRight = ArrowRight;

  protected readonly highlights: Highlight[] = [
    {
      label: 'Repositórios públicos',
      value: '20+',
      icon: Boxes
    },
    {
      label: 'Stack full cycle',
      value: 'Web + Mobile + API',
      icon: Workflow
    },
    {
      label: 'Foco de entrega',
      value: 'Performance e DX',
      icon: Rocket
    }
  ];

  protected readonly techGroups: TechGroup[] = [
    {
      title: 'Frontend',
      icon: Code2,
      items: ['Next.js 16', 'React 19', 'TypeScript', 'Tailwind CSS 4', 'Framer Motion', 'MUI 7', 'Swup']
    },
    {
      title: 'Backend e Dados',
      icon: Database,
      items: ['NestJS', 'Drizzle ORM', 'PostgreSQL', 'Better Auth', 'JWT', 'Zod']
    },
    {
      title: 'Mobile e Automação',
      icon: Smartphone,
      items: ['React Native', 'React Navigation', 'n8n Workflows', 'Integrações com APIs']
    }
  ];

  protected readonly deliveryFlow: DeliveryStep[] = [
    {
      title: 'Análise de Requisitos',
      description: 'Mapeamento de domínio, riscos e prioridades de produto.'
    },
    {
      title: 'Construção',
      description: 'Implementação incremental com foco em legibilidade e escala.'
    },
    {
      title: 'Operação',
      description: 'Deploy, observabilidade e ajustes orientados por uso real.'
    }
  ];
}
