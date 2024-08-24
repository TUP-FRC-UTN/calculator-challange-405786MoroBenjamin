import { Component } from '@angular/core';
import { CalcActionsComponent } from '../calc-actions/calc-actions.component';

@Component({
  selector: 'app-calc-view',
  standalone: true,
  imports: [CalcActionsComponent],
  templateUrl: './calc-view.component.html',
  styleUrl: './calc-view.component.css'
})
export class CalcViewComponent {
    n1: number = 0;
    n2: number = 0;
    resultado: number = 0;

    onChange(event: any, int : number) {
      if(int == 1) this.n1 = event.target.value;
      else this.n2 = event.target.value;
    }

    resultadoListo(event : any){
      this.resultado = Number(event);
      
    }
}
