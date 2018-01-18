import { Injectable } from '@angular/core';

@Injectable()
export class CalcService {

  private SOMA: string = '+';
  private SUBTRACAO: string = '-';
  private DIVISAO: string = '/';
  private MULTIPLICACAO: string = '*';

  constructor() {}

  calcula(n1: number, n2: number, operacao: string) {

    let resultado: number;

    switch (operacao){
      case this.SOMA:
        resultado = n1 + n2;
        break;

      case this.SUBTRACAO:
        resultado = n1 - n2;
        break;

      case this.DIVISAO:
        resultado = n1 / n2;
        break;

      case this.MULTIPLICACAO:
        resultado = n1 * n2;
        break;

      default:
        resultado = 0;
    }
  }

}
