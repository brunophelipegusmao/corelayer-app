import { Component, inject } from '@angular/core';

import { ThemeService } from '../../services/theme.service';

@Component({
  selector: 'app-theme-toggle',
  standalone: true,
  templateUrl: './theme-toggle.component.html'
})
export class ThemeToggleComponent {
  private readonly themeService = inject(ThemeService);

  protected readonly theme = this.themeService.theme;

  protected toggleTheme(): void {
    this.themeService.toggleTheme();
  }
}
