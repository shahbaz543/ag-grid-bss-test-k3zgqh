import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HttpClientModule } from '@angular/common/http';
import { CfgService } from './cfg.service';
import { GrigliaComponent } from './griglia/griglia.component';

@NgModule({
  imports: [
    CommonModule,
    HttpClientModule
  ],
  declarations: [GrigliaComponent],
  exports: [GrigliaComponent],
  providers: [CfgService]
})
export class StdmodModule { }