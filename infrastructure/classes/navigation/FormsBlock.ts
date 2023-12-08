import { BaseNavigation } from "./BaseNavigation";
import { IBaseNavigation } from "~/infrastructure/interfaces/navigation/IBasaNavigation";

export class FormsBlock implements IBaseNavigation {
  name: string;
  path: string;
  title: string;
  description?: string;
  icon?: string;
  visible?: boolean;
  items: IBaseNavigation[];

  constructor() {
    this.name = "forms";
    this.path = "/forms";
    this.title = "Бланки";
    this.description = "Form description";
    this.icon = "fsfgd";
    this.items = [];
  }

  generateItemsByRole() {
    let forms = new BaseNavigation({
      name: "forms",
      path: `${this.path}`,
      title: "Form title",
      description: "Form description",
      icon: "jkjkj",
      visible: true,
    });
    this.items.push(forms)
  }
}
