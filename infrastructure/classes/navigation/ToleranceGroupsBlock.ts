import { BaseNavigation } from "./BaseNavigation";
import { IBaseNavigation } from "~/infrastructure/interfaces/navigation/IBasaNavigation";

export class ToleranceGroupsBlock implements IBaseNavigation {
    name: string;
    path: string;
    title: string;
    description?: string;
    icon?: string;
    visible?: boolean;
    items: IBaseNavigation[];
  
    constructor() {
      this.name = "toleranceGroups"
      this.path = "/toleranceGroups"
      this.title = "Группы допуска"
      this.description = "tolerance Groups description"
      this.icon = "ghfghf" 
      this.items = []
    }
  
    generateItemsByRole() {
      let toleranceGroups = new BaseNavigation({
          name: "toleranceGroups",
          path: `${this.path}`,
          title: "toleranc Groups title",
          description: "toleranc eGroups description",
          icon: "gfdgdfg",
          visible: true
      })
      this.items.push(toleranceGroups)
    }
}