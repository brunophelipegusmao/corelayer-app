import { CommonModule } from '@angular/common';
import { Component, Input } from '@angular/core';
import { RouterLink } from '@angular/router';

export type ButtonVariant = 'primary' | 'secondary' | 'muted';
export type ButtonSize = 'sm' | 'md' | 'lg';

@Component({
  selector: 'app-button',
  standalone: true,
  imports: [CommonModule, RouterLink],
  templateUrl: './button.component.html'
})
export class ButtonComponent {
  @Input() href?: string;
  @Input() variant: ButtonVariant = 'primary';
  @Input() size: ButtonSize = 'md';
  @Input() className = '';
  @Input() type: 'button' | 'submit' | 'reset' = 'button';
  @Input() disabled = false;

  protected isExternalLink(url: string): boolean {
    return /^https?:\/\//.test(url);
  }

  protected get classes(): string {
    const variantClasses: Record<ButtonVariant, string> = {
      primary:
        'border border-primary/40 bg-linear-to-r from-primary to-primary/75 text-primary-foreground hover:shadow-[0_0_32px_rgba(27,106,255,0.45)]',
      secondary:
        'border border-white/20 bg-white/6 text-secondary-foreground hover:bg-white/12 hover:shadow-[0_0_24px_rgba(255,255,255,0.12)]',
      muted: 'border border-border bg-muted/60 text-muted-foreground hover:bg-muted/85'
    };

    const sizeClasses: Record<ButtonSize, string> = {
      sm: 'px-4 py-2 text-sm',
      md: 'px-6 py-3 text-base',
      lg: 'px-8 py-3 text-lg'
    };

    return [
      'transform rounded-xl font-semibold transition-all duration-300',
      'hover:-translate-y-0.5 hover:scale-[1.01]',
      'focus:ring-primary/45 focus:ring-2 focus:outline-none',
      'disabled:cursor-not-allowed disabled:opacity-50 disabled:transform-none',
      variantClasses[this.variant],
      sizeClasses[this.size],
      this.className
    ].join(' ');
  }
}
