import { CommonModule } from '@angular/common';
import { Component, Input } from '@angular/core';
import { LucideAngularModule, ExternalLink, Github } from 'lucide-angular';

@Component({
  selector: 'app-project-card',
  standalone: true,
  imports: [CommonModule, LucideAngularModule],
  templateUrl: './project-card.component.html'
})
export class ProjectCardComponent {
  @Input({ required: true }) title!: string;
  @Input({ required: true }) description!: string;
  @Input({ required: true }) technologies!: string[];

  @Input() image?: string;
  @Input() placeholder?: string;
  @Input() placeholderImage?: string;
  @Input() animation = '';
  @Input() href?: string;
  @Input() githubUrl?: string;

  protected readonly iconExternal = ExternalLink;
  protected readonly iconGithub = Github;

  protected get cardClasses(): string {
    return [
      'group relative overflow-hidden rounded-2xl border border-white/12 bg-card/60 p-5',
      'shadow-[0_18px_48px_rgba(0,0,0,0.32)] backdrop-blur-sm transition-colors duration-300',
      'hover:border-primary/45 hover:bg-card/80',
      this.animation
    ].join(' ');
  }
}
