import { Component } from '@angular/core';
import { Card } from "primeng/card";
import { ParkingSpace } from '@features/parking/models/parking-space.model';
import { input } from '@angular/core';
import { ParkingStatusPipe } from "@shared/pipes/parking-status-pipe";
import { Button } from "primeng/button";
import { TagModule } from 'primeng/tag';

@Component({
  selector: 'parking-space-card',
  imports: [Card, ParkingStatusPipe, Button, TagModule],
  templateUrl: './parking-space-card.component.html'
})
export class ParkingSpaceCardComponent {

  parkingSpace = input.required<ParkingSpace>();

  getNumberColor(): string {
    const status = this.parkingSpace().status;
    if (status === 'AVAILABLE') return 'text-green-500';
    if (status === 'OCCUPIED') return 'text-red-500';
    return 'text-yellow-500';
  }
}
