import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'fahrenheitToCelsius'
})
export class FahrenheitToCelsiusPipe implements PipeTransform {

  transform(value: number, reversedConversion: boolean): unknown {
    if (reversedConversion) { // Go from celsius to fahrenheit
      return (value * 9/5) + 32;
    }

    return (value - 32) * (5/9);
  }

}
