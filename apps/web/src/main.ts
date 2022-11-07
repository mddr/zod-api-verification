import { HttpClientModule } from '@angular/common/http';
import { AppComponent } from './app/app.component';
import { enableProdMode, importProvidersFrom } from '@angular/core';
import { bootstrapApplication, BrowserModule } from '@angular/platform-browser';

import { environment } from './environments/environment';

if (environment.production) {
  enableProdMode();
}

bootstrapApplication(AppComponent, {
  providers: [
    importProvidersFrom(BrowserModule),
    importProvidersFrom(HttpClientModule),
  ],
}).catch((err) => console.error(err));
