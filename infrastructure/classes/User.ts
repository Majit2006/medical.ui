import { IUser } from "~/infrastructure/interfaces/administration/IUser";
export class User implements IUser {
  userName: string;
  lastNamre: string;
  firstName: string;
  midelName: string;
  phone: string;
  email: string;
  password: string;
  roleId: number;
  cabinetId: number;
  jobPositionId: number;
  imageId: number;
  workingDays: [];

  constructor(payload?: IUser) {
    this.userName = payload?.userName || "";
    this.lastNamre = payload?.lastNamre || "";
    this.firstName = payload?.firstName || "";
    this.midelName = payload?.midelName || "";
    this.phone = payload?.phone || null;
    this.email = payload?.email || "";
    this.password = payload?.password || "";
    this.roleId = payload?.roleId || null;
    this.cabinetId = payload?.cabinetId || null;
    this.jobPositionId = payload?.jobPositionId || null;
    this.imageId = payload?.imageId || null;
  }
}
