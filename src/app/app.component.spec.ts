import { TestBed, async } from '@angular/core/testing';
import { AppComponent } from './app.component';
import { CalcModule } from './modules/calc/calc.module';
import { CalcService } from './services/calc/calc.service';

describe('AppComponent', () => {
  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [
        AppComponent,
        CalcModule
      ],
      providers: [CalcService]
    }).compileComponents();
  }));

});
