import { BaseNavigation } from "./BaseNavigation";
import { IBaseNavigation } from "~/infrastructure/interfaces/navigation/IBasaNavigation";

export class ReviewBlock implements IBaseNavigation {
  name: string;
  path: string;
  title: string;
  description?: string;
  icon?: string;
  visible?: boolean;
  items: IBaseNavigation[];

  constructor() {
    this.name = "review";
    this.path = "/review";
    this.title = "Обзор ";
    this.description = "review description";
    this.icon = "ghfghf";
    this.items = [];
  }

  generateItemsByRole() {
    let review = new BaseNavigation({
      name: "review",
      path: `${this.path}`,
      title: "review title",
      description: "review description",
      icon: "gfdgdfg",
      visible: true,
    });
    this.items.push(review);
  }
}
