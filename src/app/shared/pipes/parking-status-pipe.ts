import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'parkingStatus'
})
export class ParkingStatusPipe implements PipeTransform {

  transform(value: string): string {
    const translations: {
      [key: string]: string
    } = {
      AVAILABLE: 'Disponible',
      OCCUPIED: 'Ocupado',
      MAINTENANCE: 'Mantenimiento'
    };

    return translations[value] || value;
  }
}

