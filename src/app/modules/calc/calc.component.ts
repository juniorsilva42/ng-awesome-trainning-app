import { Component, OnInit } from '@angular/core';
import { CalcService } from "../../services/calc/calc.service";

@Component({
  selector: 'app-calc',
  templateUrl: './calc.component.html',
  styleUrls: ['./calc.component.sass']
})
export class CalcComponent implements OnInit {

  constructor(private calcService: CalcService) { }

  ngOnInit() {
  }

}
