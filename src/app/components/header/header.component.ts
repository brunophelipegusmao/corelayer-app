import { CommonModule } from '@angular/common';
import { Component, DestroyRef, inject } from '@angular/core';
import { takeUntilDestroyed } from '@angular/core/rxjs-interop';
import { NavigationEnd, Router, RouterLink } from '@angular/router';
import { LucideAngularModule, Menu, X } from 'lucide-angular';
import { filter } from 'rxjs';

import { ThemeToggleComponent } from '../theme-toggle/theme-toggle.component';

interface NavItem {
  href: '/services' | '/portfolio' | '/contact';
  label: string;
}

@Component({
  selector: 'app-header',
  standalone: true,
  imports: [CommonModule, RouterLink, ThemeToggleComponent, LucideAngularModule],
  templateUrl: './header.component.html'
})
export class HeaderComponent {
  private readonly router = inject(Router);
  private readonly destroyRef = inject(DestroyRef);

  protected readonly iconMenu = Menu;
  protected readonly iconClose = X;

  protected readonly navItems: NavItem[] = [
    { href: '/services', label: 'Serviços' },
    { href: '/portfolio', label: 'Portfólio' },
    { href: '/contact', label: 'Contato' }
  ];

  protected isMenuOpen = false;

  constructor() {
    this.router.events
      .pipe(
        filter((event): event is NavigationEnd => event instanceof NavigationEnd),
        takeUntilDestroyed(this.destroyRef)
      )
      .subscribe(() => {
        this.isMenuOpen = false;
      });
  }

  protected isActive(path: string): boolean {
    return this.router.url === path;
  }

  protected toggleMenu(): void {
    this.isMenuOpen = !this.isMenuOpen;
  }

  protected closeMenu(): void {
    this.isMenuOpen = false;
  }
}
