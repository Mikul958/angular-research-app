import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-calculator',
  standalone: true,
  imports: [FormsModule],
  templateUrl: './calculator.component.html',
  styleUrl: './calculator.component.css'
})
export class CalculatorComponent {
  firstOperand: number = 0;
  secondOperand: number = 0;
  operator: string = "";
  lastAnswer: number = 0;
  history: Array<any> = []
  operationCount: number = 0;       // ID for @for in html
  allowOperation: boolean = false;  // Calculate button is disabled if false

  // Event handler for Calculate button
  calculate() {
    // Call operations
    if (this.operator == "+")
      this.add(this.firstOperand, this.operator, this.secondOperand)
    else if (this.operator == "-")
      this.subtract(this.firstOperand, this.operator, this.secondOperand)
    else if (this.operator == "x")
      this.multiply(this.firstOperand, this.operator, this.secondOperand)
    else if (this.operator == "/")
      this.divide(this.firstOperand, this.operator, this.secondOperand)
    else
      this.exponentiate(this.firstOperand, this.operator, this.secondOperand)

    // Push answer to history and increment operation count
    let operationLog = this.firstOperand + " " + this.operator + " " + this.secondOperand + " = " + this.lastAnswer;
    this.history.unshift({id: this.operationCount, content: operationLog});
    if (this.history.length > 10)
      this.history.pop();
    this.operationCount++;
  }

  // Note: Angular sends back operands as strings, so default behavior of + is concatenation. '+' before each operand fixes this.
  add(op1: number, operator: string, op2: number) {
    this.lastAnswer = +this.firstOperand + +this.secondOperand;
  }
  subtract(op1: number, operator: string, op2: number) {
    this.lastAnswer = this.firstOperand - this.secondOperand;
  }
  multiply(op1: number, operator: string, op2: number) {
    this.lastAnswer = this.firstOperand * this.secondOperand;
  }
  divide(op1: number, operator: string, op2: number) {
    this.lastAnswer = this.firstOperand / this.secondOperand;
  }
  exponentiate(op1: number, operator: string, op2: number) {
    this.lastAnswer = this.firstOperand ** this.secondOperand;
  }
}