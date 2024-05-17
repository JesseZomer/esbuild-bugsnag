import { ApplicationConfig, ErrorHandler } from '@angular/core';
import { provideRouter } from '@angular/router';
import { BugsnagErrorHandler } from '@bugsnag/plugin-angular';
import { routes } from './app.routes';

export const appConfig: ApplicationConfig = {
  providers: [
    provideRouter(routes),
    {
      provide: ErrorHandler,
      useFactory() {
        return new BugsnagErrorHandler();
      },
    },
  ],
};
