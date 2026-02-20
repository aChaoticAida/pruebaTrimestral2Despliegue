import { ApplicationConfig } from '@angular/core';
import { provideRouter } from '@angular/router';
import { routes } from './app.routes';
// 1. IMPORTANTE: Traemos las herramientas de internet
import { provideHttpClient, withFetch } from '@angular/common/http';

export const appConfig: ApplicationConfig = {
  providers: [
    provideRouter(routes),
    // 2. IMPORTANTE: Las activamos aquí
    provideHttpClient(withFetch())
  ]
};