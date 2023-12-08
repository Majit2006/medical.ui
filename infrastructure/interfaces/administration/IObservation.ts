import { IObservationPrices } from "~/infrastructure/interfaces/IObservationPrices";
export interface IObservation {
  name: string;
  cashNumber: string;
  blankType?: number;
  observationPrices: IObservationPrices[];
}