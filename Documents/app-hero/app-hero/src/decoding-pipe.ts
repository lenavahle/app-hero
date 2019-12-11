import { Pipe, PipeTransform } from '@angular/core';
import { utf8Encode } from '@angular/compiler/src/util';


/*
 * Raise the value exponentially
 * Takes an exponent argument that defaults to 1.
 * Usage:
 *   value | exponentialStrength:exponent
 * Example:
 *   {{ 2 | exponentialStrength:10 }}
 *   formats to: 1024
*/
@Pipe({name: 'decode'})
export class DecodingPipe implements PipeTransform {
  transform(value: string): string {
    let result = value;
    result += result.replace('ä', '&auml;');
     result += result.replace('ü', '&uuml;');
    result += result.replace('Ä', '&Auml;');
    result += result.replace('ö', '&ouml;');
    result += result.replace('Ö', '&Ouml;');
    result += result.replace('ü', '&uuml;');
    result += result.replace('Ü', '&Uuml;');
    result += result.replace('ß', '&szlig;');
   return result;
  }
}