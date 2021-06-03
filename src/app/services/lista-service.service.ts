import { Injectable } from '@angular/core';
import { Artigo } from '../classes/artigo';

@Injectable({
  providedIn: 'root'
})
export class ListaServiceService {

  constructor() { }
  listaCompras: Array<Artigo> = new Array<Artigo>();
}
