import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ExtratoComponent } from './extrato.component';
import { LancamentosComponent } from './lancamentos/lancamentos.component';

@NgModule({
  declarations: [
    ExtratoComponent,
    LancamentosComponent
  ],
  imports: [
    CommonModule
  ],
  exports: [
    ExtratoComponent
  ]
})
export class ExtratoModule { }
