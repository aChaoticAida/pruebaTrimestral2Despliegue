import { bootstrapApplication } from '@angular/platform-browser';
import { appConfig } from './app/app.config';
import { AppComponent } from './app/app.component'; // <--- Aquí estaba el fallo, tiene que ser AppComponent

bootstrapApplication(AppComponent, appConfig)
  .catch((err) => console.error(err));