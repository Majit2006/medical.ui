import { BaseNavigation } from "./BaseNavigation";
import { IBaseNavigation } from "~/infrastructure/interfaces/navigation/IBasaNavigation";

export class EntriesBlock implements IBaseNavigation {
    name: string;
  path: string;
  title: string;
  description?: string;
  icon?: string;
  visible?: boolean;
  items: IBaseNavigation[];

  constructor() {
    this.name = "entries"
    this.path = "/entries"
    this.title = "Записи"
    this.description = "entries description"
    this.icon = "ghfghf" 
    this.items = []
  }

  generateItemsByRole() {
    let entries = new BaseNavigation({
        name: "entries",
        path: `${this.path}`,
        title: "entries title",
        description: "entries description",
        icon: "gfdgdfg",
        visible: true
    })
    this.items.push(entries)
  }
}