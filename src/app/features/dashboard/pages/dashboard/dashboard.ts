import { Component, computed, inject, OnInit, signal } from '@angular/core';
import { Sidebar } from '../../components/sidebar/sidebar';
import { RouterOutlet } from '@angular/router';
import { ParkingSpace } from '@features/parking/models/parking-space.model';
import { ParkingService } from '@features/parking/parking.service';
import { ParkingSpaceCardComponent } from "@features/parking/components/parking-space-card/parking-space-card.component";

@Component({
  selector: 'app-dashboard',
  imports: [
    RouterOutlet,
    Sidebar,
    ParkingSpaceCardComponent
  ],
  templateUrl: './dashboard.html',
  styleUrl: './dashboard.css'
})
export class Dashboard implements OnInit {
  private parkingService = inject(ParkingService);

  parkingSpaces = signal<ParkingSpace[]>([]);

  sortedParkingSpaces = computed(() => {
    return this.parkingSpaces().sort((a, b) => a.number - b.number);
  });

  ngOnInit() {

    this.parkingService.getParkingSpaces().subscribe({
      next: (data) =>
        this.parkingSpaces.set(data),
      error: (error) =>
        console.error("error al cargar los espacios de parqueo")
    });
  }

}
