import { Component, OnInit } from '@angular/core';
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

  adicionarLista(nome: string, preco: string) {
     this.precoNumber = Number(preco);
    this.listaService.listaCompras.push(new Artigo(nome, this.precoNumber));
  }
}
