import { ICabinet } from "~/infrastructure/interfaces/administration/ICabinet";

export class Cabinet implements ICabinet {
  name: string;
  phone: string;
  flat: string;
  number: string;
  constructor(payload?: ICabinet) {
    this.name = payload?.name || "";
    this.phone = payload?.phone || null;
    this.flat = payload?.flat || null;
    this.number = payload?.number || null;
  }
}
