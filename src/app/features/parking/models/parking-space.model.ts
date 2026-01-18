import { Vehicle } from "./vehicle.model";

export interface ParkingSpace {
    id: number;
    type: string;
    number: number;
    status: string;
    currentVehicle?: Vehicle;
}
