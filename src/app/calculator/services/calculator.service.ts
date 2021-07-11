import { Injectable } from '@angular/core';
import { Calculator } from '../models/Calculator';
import { ICalculator } from '../models/ICalculator';

@Injectable({
  providedIn: 'root',
})
export class CalculatorService {
  private _calculator: ICalculator;

  public get calculator(): ICalculator {
    return this._calculator;
  }
  public set calculator(value: ICalculator) {
    this._calculator = value;
  }

  constructor() {
    this._calculator = new Calculator();
  }

  public resetValues(keyboardNumber: string = '0') {
    this._calculator.screenValue = Number(keyboardNumber);
    this._calculator.presentValue = 0;
    this._calculator.storedValue = 0;
    this._calculator.needReset = false;
  }

  public checkScreen(keyboardNumber: string) {
    if (this._calculator.needReset) {
      this.resetValues(keyboardNumber);
    } else if (this._calculator.screenValue) {
      this._calculator.screenValue += keyboardNumber;
    } else {
      this._calculator.screenValue = keyboardNumber;
    }
  }

  public resetScreenAndSaveValue() {
    this._calculator.storedValue = Number(this._calculator.screenValue);
    this._calculator.screenValue = '';
  }

  public carryOutOperation() {
    if (this._calculator.operator && this._calculator.presentValue) {
      var tempOperation = eval(
        `${this._calculator.storedValue}${this._calculator.operator}${this._calculator.presentValue}`
      );

      this._calculator.storedValue =
        Math.round((tempOperation + Number.EPSILON) * 100) / 100;

      this._calculator.operator = undefined;
    }
  }
}
