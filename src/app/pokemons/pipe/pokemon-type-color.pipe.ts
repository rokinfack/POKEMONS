import {Pipe, PipeTransform} from "@angular/core";

@Pipe(
  {
    name: "pokemonTypeColorPipe"
  }
)
export class PokemonTypeColorPipe implements PipeTransform {
  transform(type: string): string {
    let color: string
    switch (type) {
      case 'Feu':
        color = 'red lighten-1';
        break;
      case 'Eau':
        color = 'blue lighten-1';
        break;
      case 'Plante':
        color = 'green lighten-1';
        break;
      case 'Insecte':
        color = 'brown lighten-1';
        break;
      case 'Normal':
        color = 'grey lighten-3';
        break;
      case 'Vol':
        color = 'blue lighten-3';
        break;
      case 'Electrik':
        color = 'lime accent-1';
        break;
      default:
        color = 'grey';
        break;
    }
    return ' chip ' + color
  }

}
