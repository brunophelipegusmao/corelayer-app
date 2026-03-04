import { CommonModule } from '@angular/common';
import { Component, Input } from '@angular/core';

import { CardComponent, CardContentComponent, CardHeaderComponent, CardTitleComponent } from '../card/card.component';

@Component({
  selector: 'app-service-card',
  standalone: true,
  imports: [CommonModule, CardComponent, CardHeaderComponent, CardTitleComponent, CardContentComponent],
  templateUrl: './service-card.component.html'
})
export class ServiceCardComponent {
  @Input({ required: true }) title!: string;
  @Input({ required: true }) description!: string;
  @Input({ required: true }) features!: string[];
  @Input() animation = '';
}
