import { Component, OnInit } from '@angular/core';
import { Calculator } from './models/Calculator';
import { CalculatorService } from './services/calculator.service';

@Component({
  selector: 'app-calculator',
  templateUrl: './calculator.component.html',
  styleUrls: ['./calculator.component.css'],
})
export class CalculatorComponent {
  public calculator: Calculator;

  constructor(private calculatorService: CalculatorService) {
    this.calculator = this.calculatorService.calculator;
  }
  public getNumber(keyboardNumber: string) {
    this.calculatorService.checkScreen(keyboardNumber);
    this.calculator.presentValue = Number(this.calculator.screenValue);
    this.calculatorService.carryOutOperation();
  }

  public getResetValues() {
    this.calculatorService.resetValues();
  }

  public executeOperation() {
    this.calculator.screenValue = this.calculator.storedValue;
    this.calculator.needReset = true;
  }

  public getOperator(operator: string) {
    this.calculator.operator = operator;
    this.calculator.needReset = false;
    this.calculatorService.resetScreenAndSaveValue();
  }
}
