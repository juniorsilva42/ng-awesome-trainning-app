import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CalcComponent } from './calc.component';

@NgModule({
  imports: [
    CommonModule
  ],
  declarations: [
    CalcComponent
  ],
  exports: [
    CalcComponent
  ]
})
export class CalcModule { }
