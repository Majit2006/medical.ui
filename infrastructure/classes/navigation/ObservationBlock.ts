import { BaseNavigation } from "./BaseNavigation";
import { IBaseNavigation } from "~/infrastructure/interfaces/navigation/IBasaNavigation";

export class ObservationBlock implements IBaseNavigation {
  name: string;
  path: string;
  title: string;
  description?: string;
  icon?: string;
  visible?: boolean;
  items: IBaseNavigation[];

  constructor() {
    this.name = "observation";
    this.path = "/observations";
    this.title = "Обследование";
    this.description = "observation description";
    this.icon = "ghfghf";
    this.items = [];
  }

  generateItemsByRole() {
    let observation = new BaseNavigation({
      name: "observation",
      path: `${this.path}`,
      title: "observation title",
      description: "observation description",
      icon: "gfdgdfg",
      visible: true,
    });
    this.items.push(observation);
  }
}
