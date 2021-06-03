import { Component, OnInit } from '@angular/core';
import { Artigo } from 'src/app/classes/artigo';
import { ListaServiceService } from 'src/app/services/lista-service.service';

@Component({
  selector: 'app-buy',
  templateUrl: './buy.component.html',
  styleUrls: ['./buy.component.css']
})
export class BuyComponent implements OnInit {
  listaService: ListaServiceService;

  constructor(lista: ListaServiceService) {
    this.listaService = lista;
  }

  ngOnInit(): void {}

  precoTotal: number = 0;

  comprar(artigo: Artigo) {
    artigo.carrinho = true;
    console.log(artigo);
  }

  calcularTotal(artigo: Artigo) {
    this.precoTotal += artigo.preco;
  }


}
