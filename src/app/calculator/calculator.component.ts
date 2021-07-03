import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-calculator',
  templateUrl: './calculator.component.html',
  styleUrls: ['./calculator.component.css'],
})
export class CalculatorComponent implements OnInit {
  public presentValue: number = 0;
  public storedValue: number = 0;

  public operator: string | undefined;
  public screenValue: number | string = 0;
  private needReset: boolean = false;

  constructor() {}

  ngOnInit(): void {}

  public getNumber(keyboardNumber: string) {
    this.checkScreen(keyboardNumber);
    this.presentValue = Number(this.screenValue);
    this.carryOutOperation();
  }

  public getResetValues() {
    this.resetValues();
  }

  public executeOperation() {
    this.screenValue = this.storedValue;

    if ((this.presentValue = 17)) {
      this.screenValue = 'Love you';
    }
    this.needReset = true;
  }

  public getOperator(operator: string) {
    this.operator = operator;
    this.needReset = false;
    this.resetScreenAndSaveValue();
  }

  private resetScreenAndSaveValue() {
    this.storedValue = Number(this.screenValue);
    this.screenValue = '';
  }

  private carryOutOperation() {
    if (this.operator && this.presentValue) {
      var tempOperation = eval(
        `${this.storedValue}${this.operator}${this.presentValue}`
      );

      this.storedValue =
        Math.round((tempOperation + Number.EPSILON) * 100) / 100;

      this.operator = undefined;
    }
  }

  private resetValues() {
    this.screenValue = 0;
    this.presentValue = 0;
    this.storedValue = 0;
  }

  private checkScreen(keyboardNumber: string) {
    if (this.needReset) {
      this.resetValues();
      this.needReset = false;
      this.screenValue = keyboardNumber;
    } else if (this.screenValue) {
      this.screenValue += keyboardNumber;
    } else {
      this.screenValue = keyboardNumber;
    }
  }
}
