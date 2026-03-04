import { CommonModule } from '@angular/common';
import { Component, Input } from '@angular/core';

export type CardVariant = 'default' | 'muted';

@Component({
  selector: 'app-card',
  standalone: true,
  imports: [CommonModule],
  template: '<div [class]="classes"><ng-content /></div>'
})
export class CardComponent {
  @Input() hover = true;
  @Input() animation = '';
  @Input() variant: CardVariant = 'default';
  @Input() className = '';

  protected get classes(): string {
    const variantClasses: Record<CardVariant, string> = {
      default:
        'bg-card/70 text-card-foreground border border-white/10 shadow-[0_16px_44px_rgba(0,0,0,0.25)] backdrop-blur-sm',
      muted: 'bg-muted/60 text-muted-foreground border border-white/8'
    };

    const hoverClass = this.hover
      ? this.variant === 'default'
        ? 'group hover:-translate-y-1 hover:shadow-[0_20px_56px_rgba(27,106,255,0.2)]'
        : 'hover:bg-muted/75 hover:-translate-y-1'
      : '';

    return [
      'rounded-2xl p-6 transition-all duration-300',
      variantClasses[this.variant],
      hoverClass,
      this.animation,
      this.className
    ].join(' ');
  }
}

@Component({
  selector: 'app-card-header',
  standalone: true,
  template: '<div class="mb-4"><ng-content /></div>'
})
export class CardHeaderComponent {}

@Component({
  selector: 'app-card-title',
  standalone: true,
  template: '<h3 class="text-xl font-semibold group-hover:text-primary transition-colors duration-300"><ng-content /></h3>'
})
export class CardTitleComponent {}

@Component({
  selector: 'app-card-content',
  standalone: true,
  template: '<div class="text-card-foreground/80"><ng-content /></div>'
})
export class CardContentComponent {}
