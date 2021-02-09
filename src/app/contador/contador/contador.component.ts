import { Component } from '@angular/core';

@Component({
  selector: 'app-contador',
  template: `
    <!-- traemos la propiedad titulo que tiene un valor de 0 -->
    <h1>{{ titulo }}</h1>
    <h3>
      La base es : <strong>{{ base }}</strong>
    </h3>

    <!-- el boton tiene un evento click en el cual mandamos a traer el metodo acumular y como parametro le estamos pasando -1 -->
    <button (click)="acumular(-base)">- {{ base }}</button>

    <span>{{ numero }}</span>

    <!-- el boton tiene un evento click en el cual mandamos a traer el metodo acumular y como parametro le estamos pasando +1 -->

    <button (click)="acumular(base)">+ {{ base }}</button>
  `,
})
export class ContadorComponent {
  public titulo: string = 'Contador App'; //para acceder a esto usamos {{ titulo }} no sin antes haber puesto la etiqueta app-root en el html
  public numero: number = 0; // estoy declarando una pripiedad de la clase de tipo numero
  public base: number = 5;
  // sumar() {
  //   this.numero += +1;    esto seria igual pero de una forma mas primitiva
  // }
  // restar() {
  //   this.numero -= 1;
  // }

  acumular(valor: number) {
    // creo un metodo acumulador que recibe un parametro "valor" de tipo number
    this.numero += valor; // apuntamos a la pripiedad "numero" y le vamos a sumar el parametro "valor que nos manden"
  }
}
