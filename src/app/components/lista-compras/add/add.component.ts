import { Component, OnInit } from '@angular/core';
import { faTwitter } from '@fortawesome/free-brands-svg-icons';
import { faFacebook } from '@fortawesome/free-brands-svg-icons';
import { faInstagram } from '@fortawesome/free-brands-svg-icons';
import { faGithub } from '@fortawesome/free-brands-svg-icons';
import { Artigo } from 'src/app/classes/artigo';
import { ListaServiceService } from 'src/app/services/lista-service.service';

@Component({
  selector: 'app-add',
  templateUrl: './add.component.html',
  styleUrls: ['./add.component.css']
})
export class AddComponent implements OnInit {

  listaService: ListaServiceService;
  precoNumber : number = 0;
  constructor(private lista: ListaServiceService) {
    this.listaService = lista;
  }

  ngOnInit(): void {}

  faTwitter = faTwitter;
  faFacebook = faFacebook;
  faInstagram = faInstagram;
  faGitHub = faGithub;

  adicionarLista(nome: string, preco: string) {
     this.precoNumber = Number(preco);
    this.listaService.listaCompras.push(new Artigo(nome, this.precoNumber));
  }
}
