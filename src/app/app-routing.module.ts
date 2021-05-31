import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CalculadoraComponent } from './components/calculadora/calculadora.component';
import { ChuckJokesComponent } from './components/chuck-jokes/chuck-jokes.component';
import { CorParamComponent } from './components/cor-param/cor-param.component';
import { EvAndRefComponent } from './components/ev-and-ref/ev-and-ref.component';
import { HomeComponent } from './components/home/home.component';
import { ListaComprasComponent } from './components/lista-compras/lista-compras.component';

const routes: Routes = [
  {path: "", component: HomeComponent},
  {path: "home", component: HomeComponent},
  {path: "calculadora", component: CalculadoraComponent},
  {path: "evAndRef", component: EvAndRefComponent},
  {path: "corParam", component: CorParamComponent},
  {path: "chuckJoke", component: ChuckJokesComponent},
  {path: "listaCompras", component:ListaComprasComponent}

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
