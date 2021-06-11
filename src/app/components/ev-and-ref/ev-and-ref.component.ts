import { Component, OnInit } from '@angular/core';
import { faTwitter } from '@fortawesome/free-brands-svg-icons';
import { faFacebook } from '@fortawesome/free-brands-svg-icons';
import { faInstagram } from '@fortawesome/free-brands-svg-icons';
import { faGithub } from '@fortawesome/free-brands-svg-icons';

@Component({
  selector: 'app-ev-and-ref',
  templateUrl: './ev-and-ref.component.html',
  styleUrls: ['./ev-and-ref.component.css']
})
export class EvAndRefComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }

  faTwitter = faTwitter;
  faFacebook = faFacebook;
  faInstagram = faInstagram;
  faGitHub = faGithub;

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
