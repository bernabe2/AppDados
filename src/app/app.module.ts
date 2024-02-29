import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { DadosModule } from './dados/dados.module'; // Importa el módulo "dados"

@NgModule({
  declarations: [
    // Otros componentes declarados aquí si los tienes
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    DadosModule // Importa el módulo "dados" aquí
    // Otros módulos importados aquí
  ],
  providers: [],
})
export class AppModule { }
