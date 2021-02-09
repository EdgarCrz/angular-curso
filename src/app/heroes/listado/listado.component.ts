// en este caso creamos un componente de manera automatica en el cual usamos ng generate component heroes/listado
// y nos crea en automatico la conexion en el app.module.ts y los archivos necesarios y listos para trabajar, borramos algunas cosas
import { Component } from '@angular/core';

@Component({
  selector: 'app-listado',
  templateUrl: './listado.component.html',
})
export class ListadoComponent {
  heroes: string[] = [
    'Ironman',
    'Spiderman',
    'Thor',
    'Hulk',
    'Capitan America',
  ];
  heroeBorrado: string = ''; // para poder usar {{en el html}} es necesario que esto sea una propiedad

  borrarHeroe() {
    console.log('Borrando...');
    this.heroeBorrado = this.heroes.pop() || ''; // estamos apuntando al heroeBorrado de arriba y estamos indicando que su valor va a ser lo que nos devuelve el metodo.pop despues de ser usado y para solucionar los errores indicamos que si no hay nada que nos devuelva un vacio
  }
}
