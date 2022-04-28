import { Component } from '@angular/core';
import { Pokemon } from './Pokemon';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'my-first-project';

  myBooleanVar: boolean = true;

  currencyValue: number = 0;

  reversedConversion: boolean = false;
  temperature: number = 0;

  myPokemon: Pokemon[] = [
    { id: 1, name: 'bulbasaur', sprites: { front_default: 'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/1.png' }},
    { id: 2, name: 'ivysaur', sprites: { front_default: 'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/2.png' }}
  ];
}
