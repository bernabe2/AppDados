import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { DadosComponent } from './dados/dados.component'; // Importa el componente dados

const routes: Routes = [
  { path: '', component: DadosComponent }, // Establece el componente dados como la ruta principal
  // Otras rutas pueden ir aquí si tienes más componentes para mostrar
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
