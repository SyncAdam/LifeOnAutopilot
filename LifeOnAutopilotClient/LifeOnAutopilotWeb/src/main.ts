import { bootstrapApplication } from '@angular/platform-browser';
import { appConfig } from './app/app.config';
import { App } from './app/app';

// This is the entry point of the app

bootstrapApplication(App, appConfig)
  .catch((err) => console.error(err));
