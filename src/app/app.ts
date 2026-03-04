import { DOCUMENT, isPlatformBrowser } from '@angular/common';
import { Component, OnInit, PLATFORM_ID, inject } from '@angular/core';
import { RouterOutlet } from '@angular/router';

import { HeaderComponent } from './components/header/header.component';
import { ThemeService } from './services/theme.service';

@Component({
  selector: 'app-root',
  imports: [RouterOutlet, HeaderComponent],
  templateUrl: './app.html',
  styleUrl: './app.css'
})
export class App implements OnInit {
  private readonly platformId = inject(PLATFORM_ID);
  private readonly document = inject(DOCUMENT);
  private readonly themeService = inject(ThemeService);

  ngOnInit(): void {
    // Garantir inicialização do serviço de tema no bootstrap do app.
    void this.themeService;

    if (!isPlatformBrowser(this.platformId)) {
      return;
    }

    if (!('serviceWorker' in navigator) || !window.isSecureContext) {
      return;
    }

    const registerServiceWorker = async (): Promise<void> => {
      try {
        await navigator.serviceWorker.register('/sw.js', { scope: '/' });
      } catch (error) {
        console.error('Falha ao registrar o service worker:', error);
      }
    };

    if (this.document.readyState === 'complete') {
      void registerServiceWorker();
      return;
    }

    const handleLoad = (): void => {
      void registerServiceWorker();
    };

    window.addEventListener('load', handleLoad, { once: true });
  }
}
