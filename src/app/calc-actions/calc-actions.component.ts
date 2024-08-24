import { Component, Input, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-calc-actions',
  standalone: true,
  imports: [],
  templateUrl: './calc-actions.component.html',
  styleUrl: './calc-actions.component.css'
})
export class CalcActionsComponent {
  @Input() n1: number = 0;
  @Input() n2: number = 0;

  resultado: number = 0;

  @Output() result = new EventEmitter<string>();

  enviarResultado() {
    this.result.emit(this.resultado.toString());
  }

  calcular(int: number) {
    const num1 = Number(this.n1);
    const num2 = Number(this.n2);
  
    if(int == 1){
      this.resultado = num1 + num2;
    }
    else if(int == 2){
      this.resultado = num1 - num2;
    }
    else if(int == 3){
      this.resultado = num1 * num2;
    }
    else if(int == 4){
      this.resultado = num1 / num2;
    }
    else if(int == 5){
      this.resultado = Math.pow(num1, num2);
    }
    else{
      this.n1 = 0;
      this.n2 = 0;
    }

    this.enviarResultado();
  }
  
}
