import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class AskChuckService {

  constructor(private httpAsk : HttpClient) { }
  link = ("https://api.chucknorris.io/jokes/random");
  link2 = ("https://api.chucknorris.io/jokes/search");

  piadaDoServico : string = "Piada do servico";

  getJoke(){

    return this.httpAsk.get(
      this.link,
      {
        params: {'chave':'valor'}
      }
      );

  }

  getJokeFromCat(ValorAPesquisar : string){
    return this.httpAsk.get(
      this.link2,
      {
        params : {'query': ValorAPesquisar}
      }
      )
  }

}
