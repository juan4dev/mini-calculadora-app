import { Component, OnInit } from '@angular/core';
import { Calculator } from './models/calculator';

@Component({
  selector: 'app-calculator',
  templateUrl: './calculator.component.html',
  styleUrls: ['./calculator.component.css'],
})
export class CalculatorComponent {

  public calculator: Calculator;

  constructor() {
    this.calculator = new Calculator();
  }
  public getNumber(keyboardNumber: string) {
    this.checkScreen(keyboardNumber);
    this.calculator.presentValue = Number(this.calculator.screenValue);
    this.carryOutOperation();
  }

  public getResetValues() {
    this.resetValues();
  }

  public executeOperation() {
    this.calculator.screenValue = this.calculator.storedValue;

    this.calculator.needReset = true;
  }

  public getOperator(operator: string) {
    this.calculator.operator = operator;
    this.calculator.needReset = false;
    this.resetScreenAndSaveValue();
  }

  private resetScreenAndSaveValue() {
    this.calculator.storedValue = Number(this.calculator.screenValue);
    this.calculator.screenValue = '';
  }

  private carryOutOperation() {
    if (this.calculator.operator && this.calculator.presentValue) {
      var tempOperation = eval(
        `${this.calculator.storedValue}${this.calculator.operator}${this.calculator.presentValue}`
      );

      this.calculator.storedValue =
        Math.round((tempOperation + Number.EPSILON) * 100) / 100;

      this.calculator.operator = undefined;
    }
  }

  private resetValues() {
    this.calculator.screenValue = 0;
    this.calculator.presentValue = 0;
    this.calculator.storedValue = 0;
  }

  private checkScreen(keyboardNumber: string) {
    if (this.calculator.needReset) {
      this.resetValues();
      this.calculator.needReset = false;
      this.calculator.screenValue = keyboardNumber;
    } else if (this.calculator.screenValue) {
      this.calculator.screenValue += keyboardNumber;
    } else {
      this.calculator.screenValue = keyboardNumber;
    }
  }
}
