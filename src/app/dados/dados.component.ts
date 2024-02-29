import { Component } from '@angular/core';

@Component({
  selector: 'app-dados',
  templateUrl: './dados.component.html',
  styleUrls: ['./dados.component.css']
})
export class DadosComponent {
  resultado: number | null = null;

  lanzarDados(): void {
    const dado1 = this.generarNumeroAleatorio();
    const dado2 = this.generarNumeroAleatorio();
    this.resultado = dado1 + dado2;
  }

  private generarNumeroAleatorio(): number {
    return Math.floor(Math.random() * 6) + 1;
  }
}
