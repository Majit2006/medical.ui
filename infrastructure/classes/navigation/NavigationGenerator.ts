import { ObservationBlock } from "./ObservationBlock";
import { IBaseNavigation } from "~/infrastructure/interfaces/navigation/IBasaNavigation";
import { CabinetBlock } from "./CabinetBlock";
import { UsersBlock } from "./UsersBlock";
import { FormsBlock } from "./FormsBlock";
import { PatientsBlock } from "./PatientsBlock";
import { BulletinBlock } from "./BulletinBlock";
import { AdminBulletinBlock } from "./AdminBulletinBlock";
import { EntriesBlock } from "./EntriesBlock";
import { ToleranceGroupsBlock } from "./ToleranceGroupsBlock";
import { StatisticsBlock } from "./StatisticsBlock";
import { ReviewBlock } from "./ReviewBlock";
import { CalendarBlock } from "./CalendarBlock";
import { DoctorEntriesBlock } from "./DoctorEntriesBlock";

export class NavigationGenerator {
  items: IBaseNavigation[];
  constructor() {
    this.items = [];
  }
  generateItemsByRole() {
    const cabinetBlock = new CabinetBlock();
    // cabinetBlock.generateItemsByRole()
    this.items.push(cabinetBlock);

    const usersBlock = new UsersBlock();  
    // staffsBlock.generateItemsByRole()
    this.items.push(usersBlock);

    const formsBlock = new FormsBlock();
    // formsBlock.generateItemsByRole()
    this.items.push(formsBlock);

    const observationBlock = new ObservationBlock();
    // surveysBlock.generateItemsByRole()
    this.items.push(observationBlock);

    const patientsBlock = new PatientsBlock();
    // patientsBlock.generateItemsByRole()
    this.items.push(patientsBlock);

    const bulletinBlock = new BulletinBlock();
    // bulletinBlock.generateItemsByRole()
    this.items.push(bulletinBlock);

    const adminBulletinBlock = new AdminBulletinBlock();
    // bulletinBlock.generateItemsByRole()
    this.items.push(adminBulletinBlock);

    const entriesBlock = new EntriesBlock();
    // entriesBlock.generateItemsByRole()
    this.items.push(entriesBlock);

    const toleranceGroupsBlock = new ToleranceGroupsBlock();
    // toleranceGroupsBlock.generateItemsByRole()
    this.items.push(toleranceGroupsBlock);

    const statisticsBlock = new StatisticsBlock();
    // statisticsBlock.generateItemsByRole()
    this.items.push(statisticsBlock);

    const reviewBlock = new ReviewBlock();
    // reviewBlock.generateItemsByRole()
    this.items.push(reviewBlock);

    const calendarBlock = new CalendarBlock();
    // calendarBlock.generateItemsByRole()
    this.items.push(calendarBlock);

    const doctorEntriesbBlock = new DoctorEntriesBlock();
    // calendarBlock.generateItemsByRole()
    this.items.push(doctorEntriesbBlock);
  }
}
