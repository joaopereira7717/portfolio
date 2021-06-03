import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-ev-and-ref',
  templateUrl: './ev-and-ref.component.html',
  styleUrls: ['./ev-and-ref.component.css']
})
export class EvAndRefComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }

  tamanhoLetra : number = 15
  cor:string="white";

  changeColor(corR:string){
    this.cor = corR;
  }

  trocarFundo(referBtn : any){
    referBtn.backgroundColor = "black";
  }

  trocarCorLetra(referBtn : any){
    referBtn.color = "white";
  }

  trocarTamanhoLetra(referBtn : any){
    this.tamanhoLetra++;
    referBtn.fontSize=""+this.tamanhoLetra+"px";
  }

}
