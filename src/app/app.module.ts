import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { NavbarComponent } from './navbar/navbar.component';
import { HomeComponent } from './components/home/home.component';
import { CalculadoraComponent } from './components/calculadora/calculadora.component';
import { EvAndRefComponent } from './components/ev-and-ref/ev-and-ref.component';
import { CorParamComponent } from './components/cor-param/cor-param.component';
import { ChuckJokesComponent } from './components/chuck-jokes/chuck-jokes.component';
import { ListaComprasComponent } from './components/lista-compras/lista-compras.component';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';


@NgModule({
  declarations: [
    AppComponent,
    NavbarComponent,
    HomeComponent,
    CalculadoraComponent,
    EvAndRefComponent,
    CorParamComponent,
    ChuckJokesComponent,
    ListaComprasComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FontAwesomeModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
