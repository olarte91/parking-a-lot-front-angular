export interface Vehicle {
  plate: string;
  entryTime: Date;
  exitTime?: Date;
  parkingSpaceId: number;
  totalCost?: number;
  status: 'PARKED' | 'EXITED';
}
