import { platformBrowserDynamic } from '@angular/platform-browser-dynamic';
import { registerLicense } from '@syncfusion/ej2-base'
import { AppModule } from './app/app.module';


platformBrowserDynamic().bootstrapModule(AppModule)
  .catch(err => console.error(err));

  registerLicense('Ngo9BigBOggjHTQxAR8/V1NHaF5cWWFCf1FpRmJGdld5fUVHYVZUTXxaS00DNHVRdkdgWH9dcHRWRGhZWUd+WEc=');