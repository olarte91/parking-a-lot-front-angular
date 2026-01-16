import { Component } from '@angular/core';
import { Card } from "primeng/card";
import { ParkingSpace } from '@features/parking/models/parking-space.model';
import { input } from '@angular/core';

@Component({
  selector: 'parking-space-card',
  imports: [Card],
  templateUrl: './parking-space-card.component.html'
})
export class ParkingSpaceCardComponent {

  parkingSpace = input.required<ParkingSpace>();
}
