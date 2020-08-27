import './polyfills';

import { enableProdMode } from '@angular/core';
import { platformBrowserDynamic } from '@angular/platform-browser-dynamic';

import { AppModule } from './app/app.module';

import {LicenseManager} from "ag-grid-enterprise/main";
LicenseManager.setLicenseKey("Evaluation_License_Valid_Until__26_May_2018__MTUyNzI4OTIwMDAwMA==345b4a029e68391149aa2162aaa0807c");

platformBrowserDynamic().bootstrapModule(AppModule).then(ref => {
  // Ensure Angular destroys itself on hot reloads.
  if (window['ngRef']) {
    window['ngRef'].destroy();
  }
  window['ngRef'] = ref;

  // Otherise, log the boot error
}).catch(err => console.error(err));