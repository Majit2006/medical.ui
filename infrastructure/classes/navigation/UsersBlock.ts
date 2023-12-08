import { BaseNavigation } from "./BaseNavigation";
import { IBaseNavigation } from "~/infrastructure/interfaces/navigation/IBasaNavigation";

export class UsersBlock implements IBaseNavigation {
  name: string;
  path: string;
  title: string;
  description?: string;
  icon?: string;
  visible?: boolean;
  items: IBaseNavigation[];

  constructor() {
    this.name = "users";
    this.path = "/users";
    this.title = "Сотрудники";
    this.description = "description";
    this.icon = "dfsdfsf";
    this.items = [];
  }

  generateItemsByRole() {
    let users = new BaseNavigation({
      name: "users",
      path: `${this.path}`,
      title: "Ishgarler",
      description: "Ishgarler description",
      icon: "fdgfdgdf",
      visible: true,
    });
    this.items.push(users);
  }
}
