import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { Command } from 'protractor';
import { HeroeComponent } from './heroe/heroe.component';
import { ListadoComponent } from './listado/listado.component';

@NgModule({
  declarations: [HeroeComponent, ListadoComponent],
  exports: [ListadoComponent],
  imports: [CommonModule],
})
export class HeroesModule {}
