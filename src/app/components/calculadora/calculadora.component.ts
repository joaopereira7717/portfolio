import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-calculadora',
  templateUrl: './calculadora.component.html',
  styleUrls: ['./calculadora.component.css']
})
export class CalculadoraComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }

  resultado : number = 0;
  valor1 = 0;
  valor2 = 0;
  sinal : string = "+";


  soma(){
    switch(this.sinal){
      case "+":
        this.resultado=+this.valor1+ +this.valor2;
        break;
      case "-":
        this.resultado=+this.valor1- +this.valor2;
        break;
      case "*":
        this.resultado=+this.valor1* +this.valor2;
        break;
      case "/":
        this.resultado=+this.valor1/ +this.valor2;
        break;
      default:
        this.resultado=+this.valor1+ +this.valor2;
        break;
    }
  }

}
