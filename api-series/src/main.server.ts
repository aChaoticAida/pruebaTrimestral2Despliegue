import { bootstrapApplication } from '@angular/platform-browser';
import { AppComponent } from './app/app.component';
import { appConfig } from './app/app.config';
import { mergeApplicationConfig } from '@angular/core';
import { provideServerRendering } from '@angular/platform-server';

// Fusionamos la configuración normal con la del servidor aquí mismo
// para que no haya fallos de archivos perdidos.
const serverConfig = {
  providers: [
    provideServerRendering()
  ]
};

const bootstrap = () => bootstrapApplication(AppComponent, mergeApplicationConfig(appConfig, serverConfig));

export default bootstrap;