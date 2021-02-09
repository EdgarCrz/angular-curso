import { Component } from '@angular/core';

@Component({
  selector: 'app-heroe',
  templateUrl: 'heroe.component.html',
})
export class HeroeComponent {
  // se crea esta clase, y para que pueda ser usada en otros lugares se le coloca el export
  nombre: string = 'Ironman';
  edad: number = 47;

  get nombreCapitalizado(): string {
    return this.nombre.toUpperCase();
  }
  obtenerNombre(): string {
    return `${this.nombre}- ${this.edad}`;
  }

  cambiarNombre(): void {
    this.nombre = 'Spider-man';
  }

  cambiarEdad(): void {
    this.edad = 23;
  }
}
