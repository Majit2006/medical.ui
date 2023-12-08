import { IObservation } from "~/infrastructure/interfaces/administration/IObservation";
import { IObservationPrices } from "~/infrastructure/interfaces/IObservationPrices";

export class Observation implements IObservation {
  name: string;
  cashNumber: string;
  blankType?: number;
  observationPrices: IObservationPrices[];

  constructor(payload?: IObservation) {
    this.cashNumber = payload?.cashNumber || "";
    this.name = payload?.name || "";
    this.blankType = payload?.blankType || null;
    this.observationPrices = payload?.observationPrices || [];
  }
}
