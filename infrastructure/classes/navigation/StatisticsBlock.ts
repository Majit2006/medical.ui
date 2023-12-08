import { BaseNavigation } from "./BaseNavigation";
import { IBaseNavigation } from "~/infrastructure/interfaces/navigation/IBasaNavigation";


export class StatisticsBlock implements IBaseNavigation {
    name: string;
  path: string;
  title: string;
  description?: string;
  icon?: string;
  visible?: boolean;
  items: IBaseNavigation[];

  constructor() {
    this.name = "statistics"
    this.path = "/statistics"
    this.title = "Статистика"
    this.description = "statistics description"
    this.icon = "ghfghf" 
    this.items = []
  }

  generateItemsByRole() {
    let statistics = new BaseNavigation({
        name: "statistics",
        path: `${this.path}`,
        title: "statistics title",
        description: "statistics description",
        icon: "gfdgdfg",
        visible: true
    })
    this.items.push(statistics)
  }
}