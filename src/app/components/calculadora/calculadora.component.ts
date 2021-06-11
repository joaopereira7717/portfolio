import { Component, OnInit } from '@angular/core';
import { faTwitter } from '@fortawesome/free-brands-svg-icons';
import { faFacebook } from '@fortawesome/free-brands-svg-icons';
import { faInstagram } from '@fortawesome/free-brands-svg-icons';
import { faGithub } from '@fortawesome/free-brands-svg-icons';

@Component({
  selector: 'app-calculadora',
  templateUrl: './calculadora.component.html',
  styleUrls: ['./calculadora.component.css']
})
export class CalculadoraComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }
  faTwitter = faTwitter;
  faFacebook = faFacebook;
  faInstagram = faInstagram;
  faGitHub = faGithub;

  resultado : number = 0;
  valor1 = 0;
  valor2 = 0;
  sinal : string = "+";


  calcular(){
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
