import { DOCUMENT, isPlatformBrowser } from '@angular/common';
import { Injectable, PLATFORM_ID, computed, inject, signal } from '@angular/core';

export type Theme = 'light' | 'dark';

@Injectable({ providedIn: 'root' })
export class ThemeService {
  private readonly platformId = inject(PLATFORM_ID);
  private readonly document = inject(DOCUMENT);
  private readonly isBrowser = isPlatformBrowser(this.platformId);

  private readonly currentThemeSignal = signal<Theme>('dark');

  readonly theme = computed(() => this.currentThemeSignal());

  constructor() {
    if (!this.isBrowser) {
      return;
    }

    const savedTheme = localStorage.getItem('theme');
    const initialTheme: Theme = savedTheme === 'light' || savedTheme === 'dark' ? savedTheme : 'dark';
    this.applyTheme(initialTheme, false);
  }

  toggleTheme(): void {
    const nextTheme: Theme = this.currentThemeSignal() === 'dark' ? 'light' : 'dark';
    this.applyTheme(nextTheme, true);
  }

  private applyTheme(theme: Theme, persist: boolean): void {
    this.currentThemeSignal.set(theme);

    if (!this.isBrowser) {
      return;
    }

    const root = this.document.documentElement;
    root.classList.remove('light', 'dark');
    root.classList.add(theme);

    if (persist) {
      localStorage.setItem('theme', theme);
    }
  }
}
