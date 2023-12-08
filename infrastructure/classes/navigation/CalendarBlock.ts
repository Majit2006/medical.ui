import { BaseNavigation } from "./BaseNavigation";
import { IBaseNavigation } from "~/infrastructure/interfaces/navigation/IBasaNavigation";

export class CalendarBlock implements IBaseNavigation {
    name: string;
  path: string;
  title: string;
  description?: string;
  icon?: string;
  visible?: boolean;
  items: IBaseNavigation[];

  constructor() {
    this.name = "calendar"
    this.path = "/calendar"
    this.title = "Календарь"
    this.description = "calendar description"
    this.icon = "ghfghf" 
    this.items = []
  }

  generateItemsByRole() {
    let calendar = new BaseNavigation({
        name: "calendar",
        path: `${this.path}`,
        title: "calendar ",
        description: "calendar description",
        icon: "gfdgdfg",
        visible: true
    })
    this.items.push(calendar)
  }
}