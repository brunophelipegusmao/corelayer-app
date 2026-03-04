import { CommonModule } from '@angular/common';
import { Component, Input } from '@angular/core';

import { CardComponent, CardContentComponent, CardHeaderComponent, CardTitleComponent } from '../card/card.component';

export interface ContactInfoItem {
  icon: string;
  label: string;
  href?: string;
  target?: '_blank' | '_self';
  isWhatsapp?: boolean;
}

export interface AvailabilityItem {
  day: string;
  time: string;
  available?: boolean;
}

export interface SocialLinkItem {
  name: string;
  href: string;
}

@Component({
  selector: 'app-contact-info-card',
  standalone: true,
  imports: [CommonModule, CardComponent, CardHeaderComponent, CardTitleComponent, CardContentComponent],
  templateUrl: './contact-info-card.component.html'
})
export class ContactInfoCardComponent {
  @Input({ required: true }) contacts!: ContactInfoItem[];
  @Input() animation = '';
}

@Component({
  selector: 'app-availability-card',
  standalone: true,
  imports: [CommonModule, CardComponent, CardHeaderComponent, CardTitleComponent, CardContentComponent],
  templateUrl: './availability-card.component.html'
})
export class AvailabilityCardComponent {
  @Input({ required: true }) availability!: AvailabilityItem[];
  @Input({ required: true }) description!: string;
  @Input() animation = '';
}

@Component({
  selector: 'app-social-links-card',
  standalone: true,
  imports: [CommonModule, CardComponent, CardHeaderComponent, CardTitleComponent, CardContentComponent],
  templateUrl: './social-links-card.component.html'
})
export class SocialLinksCardComponent {
  @Input({ required: true }) links!: SocialLinkItem[];
  @Input() animation = '';
}
