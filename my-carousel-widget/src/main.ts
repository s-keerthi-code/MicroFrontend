import { platformBrowserDynamic } from '@angular/platform-browser-dynamic';
import { AppModule } from './app/app.module';

// Expose this to be called manually
(window as any).defineAngularElements = () => {
  platformBrowserDynamic()
    .bootstrapModule(AppModule)
    .catch(err => console.error(err));
};

console.log('✅ Angular defineAngularElements exposed to window');
