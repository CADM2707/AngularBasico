import { Component } from '@angular/core';

@Component({
  selector: 'app-listado',
  templateUrl: './listado.component.html',
})
export class ListadoComponent {

  heroes: string[] = [
    'Spiderman', 'Ironman', 'Hulk', 'Thor', 'Capitan América'
  ];

  heroesBorrados: string = '' ;
  mostrar: boolean = false;

  borrarHeroe(){
    
    this.heroesBorrados = this.heroes.shift() || '';
        
  }
}
