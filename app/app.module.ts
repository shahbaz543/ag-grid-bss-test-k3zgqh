import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';

import { AppComponent } from './app.component';

import { StdmodModule } from './stdmod/stdmod.module';

import {AgGridModule} from 'ag-grid-angular';
import "ag-grid-enterprise";

@NgModule({
  imports:      [ BrowserModule, FormsModule, StdmodModule,
  AgGridModule.withComponents([/*optional Angular Components to be used in the grid*/]), ],
  declarations: [ AppComponent ],
  bootstrap:    [ AppComponent ]
})
export class AppModule { }
