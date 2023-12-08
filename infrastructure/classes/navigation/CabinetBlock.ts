import { BaseNavigation } from "./BaseNavigation";
import { IBaseNavigation } from "~/infrastructure/interfaces/navigation/IBasaNavigation";

export class CabinetBlock implements IBaseNavigation {
  name: string;
  path: string;
  title: string;
  description?: string;
  icon?: string;
  visible?: boolean;
  items: IBaseNavigation[];

  constructor() {
    this.name = "cabinet";
    this.path = "/cabinet";
    this.title = "Кабинет";
    this.description = "description";
    this.icon = "gfjkdghfj";
    this.items = [];
  }
  // generateItemsByRole() {
  //   let cabinet = new BaseNavigation({
  //     name: "cabinets",
  //     path: `${this.path}`,
  //     title: "Kabinet",
  //     description: "description",
  //     icon: "gdfgd",
  //     visible: true,
  //   });
  //   this.items.push(cabinet)
  // }
}
