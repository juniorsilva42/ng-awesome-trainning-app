import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { CalcComponent } from './calc.component';
import { CalcService } from '../../services/calc/calc.service';

@NgModule({
  imports: [
    CommonModule
  ],
  declarations: [ CalcComponent ],
  exports: [ CalcComponent ],
  providers: [ CalcService ]
})
export class CalcModule { }
