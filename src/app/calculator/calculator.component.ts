import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-calculator',
  templateUrl: './calculator.component.html',
  styleUrls: ['./calculator.component.css'],
})
export class CalculatorComponent implements OnInit {

  public actualValue: number = 0;

  constructor() { }

  ngOnInit(): void { }

  public getNumber(numberKeyBoard: number) {
    console.log(typeof numberKeyBoard)
    this.actualValue += numberKeyBoard;
  }
}
