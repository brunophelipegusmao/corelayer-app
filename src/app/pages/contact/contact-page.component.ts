import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';

import { ContactFormComponent } from '../../components/contact-form/contact-form.component';
import {
  AvailabilityCardComponent,
  AvailabilityItem,
  ContactInfoCardComponent,
  ContactInfoItem,
  SocialLinkItem,
  SocialLinksCardComponent
} from '../../components/contact-card/contact-card.component';

@Component({
  selector: 'app-contact-page',
  standalone: true,
  imports: [
    CommonModule,
    ContactFormComponent,
    ContactInfoCardComponent,
    AvailabilityCardComponent,
    SocialLinksCardComponent
  ],
  templateUrl: './contact-page.component.html'
})
export class ContactPageComponent {
  protected readonly contactInfo: ContactInfoItem[] = [
    { icon: '📧', label: 'bruno.mulim.prog@gmail.com' },
    {
      icon: '',
      label: 'WhatsApp: (21) 99870-8634',
      href: 'https://wa.me/5521998708634',
      isWhatsapp: true
    },
    { icon: '📍', label: 'Rio de Janeiro, RJ - Brasil' },
    { icon: '💼', label: 'LinkedIn: /in/bruno-mulim' }
  ];

  protected readonly availability: AvailabilityItem[] = [
    { day: 'Segunda - Sexta', time: '9h às 18h', available: true },
    { day: ' Sábado e Domingo', time: 'Indisponível', available: false }
  ];

  protected readonly socialLinks: SocialLinkItem[] = [
    { name: 'GitHub', href: 'https://github.com/brunophelipegusmao' },
    { name: 'LinkedIn', href: 'https://www.linkedin.com/in/bruno-mulim/' },
    {
      name: 'Instagram',
      href: 'https://www.instagram.com/corelayer_webdesenvolvimento?utm_source=ig_web_button_share_sheet&igsh=ZDNlZDc0MzIxNw=='
    }
  ];

  protected readonly stackTags = ['Next.js', 'React', 'TypeScript', 'NestJS', 'Drizzle ORM', 'Framer Motion'];
}
