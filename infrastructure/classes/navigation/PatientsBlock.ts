import { BaseNavigation } from "./BaseNavigation";
import { IBaseNavigation } from "~/infrastructure/interfaces/navigation/IBasaNavigation";

export class PatientsBlock implements IBaseNavigation {
    name: string;
    path: string;
    title: string;
    description?: string;
    icon?: string;
    visible?: boolean;
    items: IBaseNavigation[];

    constructor() {
        this.name = "patients"
        this.path = "/patients"
        this.title = "Пациенты"
        this.description = "patients description"
        this.icon = "ghfghf" 
        this.items = []
      }

      generateItemsByRole() {
        let patients = new BaseNavigation({
            name: "patients",
            path: `${this.path}`,
            title: "patients title",
            description: "patients description",
            icon: "gfdgdfg",
            visible: true
        })
        this.items.push(patients)
      }
    
}