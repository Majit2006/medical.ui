import { BaseNavigation } from "./BaseNavigation";
import { IBaseNavigation } from "~/infrastructure/interfaces/navigation/IBasaNavigation";

export class BulletinBlock implements IBaseNavigation {
    name: string;
    path: string;
    title: string;
    description?: string;
    icon?: string;
    visible?: boolean;
    items: IBaseNavigation[];
  
    constructor() {
      this.name = "bulletin";
      this.path = "/bulletin";
      this.title = "Бюллетень";
      this.description = "bulletin description";
      this.icon = "gfjkdghfj";
      this.items = [];
    }

    generateItemsByRole() {
        let moderatorBulletin = new BaseNavigation({
            name: "bulletin",
            path: `${this.path}`,
            title: "bulletin title",
            description: "bulletin description",
            icon: "gfdgdfg",
            visible: true
        })
        this.items.push(moderatorBulletin)
      }
} 