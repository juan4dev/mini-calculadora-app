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

  constructor() {}

  ngOnInit(): void {}

  public getNumber(keyboardNumber: number) {
    this.presentValue = this.screenValue = keyboardNumber;
    if (this.operator) {
      this.carryOutOperation();
    }
  }

  public resetValue() {
    this.screenValue = 0;
    this.presentValue = 0;
    this.storedValue = 0;
  }

  public executeOperation() {
    this.screenValue = this.storedValue;
    console.log(this.screenValue);
  }

  public getOperator(operator: string) {
    this.operator = operator;
    this.resetScreenAndSaveValue();
  }

  private resetScreenAndSaveValue() {
    this.storedValue = Number(this.screenValue);
    this.screenValue = '';
  }

  private carryOutOperation() {
    this.storedValue = eval(
      `${this.storedValue}${this.operator}${this.presentValue}`
    );
    this.operator = undefined;
  }
}
