import { BaseNavigation } from "./BaseNavigation";
import { IBaseNavigation } from "~/infrastructure/interfaces/navigation/IBasaNavigation";

export class AdminBulletinBlock implements IBaseNavigation {
    name: string;
    path: string;
    title: string;
    description?: string;
    icon?: string;
    visible?: boolean;
    items: IBaseNavigation[];
  
    constructor() {
      this.name = "bulletin";
      this.path = "/admin-bulletin";
      this.title = "Админ Бюллетень";
      this.description = "bulletin description";
      this.icon = "gfjkdghfj";
      this.items = [];
    }

    generateItemsByRole() {
        let adminBulletinBlock = new BaseNavigation({
            name: "bulletin",
            path: `${this.path}`,
            title: "bulletin title",
            description: "bulletin description",
            icon: "gfdgdfg",
            visible: true
        })
        this.items.push(adminBulletinBlock)
      }
} 