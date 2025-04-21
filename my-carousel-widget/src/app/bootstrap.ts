import { AppModule } from './app.module';
import { platformBrowserDynamic } from '@angular/platform-browser-dynamic';

export function defineCustomElements() {
  platformBrowserDynamic().bootstrapModule(AppModule)
    .catch(err => console.error(err));
}