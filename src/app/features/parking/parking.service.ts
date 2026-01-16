import { Injectable } from '@angular/core';
import { environment } from '@env/environment.development';
import { HttpClient } from '@angular/common/http';
import { inject } from '@angular/core';
import { Observable } from 'rxjs';
import { ParkingSpace } from './models/parking-space.model';

@Injectable({
  providedIn: 'root'
})
export class ParkingService {
  private http = inject(HttpClient);
  private apiUrl = environment.apiUrl;

  public getParkingSpaces(): Observable<ParkingSpace[]> {
    return this.http.get<ParkingSpace[]>(`${this.apiUrl}/parking-space`)
  }
}
