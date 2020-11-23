import { enableProdMode } from '@angular/core';
import { platformBrowserDynamic } from '@angular/platform-browser-dynamic';

import { AppModule } from './app/Manager/app.module';
import { ClientviewModule } from './app/clientview/clientview.module';
import { environment } from './environments/environment';

if (environment.production) {
  enableProdMode();
}

platformBrowserDynamic()
  .bootstrapModule(ClientviewModule)
  .catch((err) => console.error(err));

platformBrowserDynamic()
  .bootstrapModule(AppModule)
  .catch((err) => console.error(err));
