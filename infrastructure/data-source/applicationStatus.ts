import Vue from "vue";
import { ApplicationStatus } from "../enums/ApplicationStatus";

function ApplicationStatuses(context: Vue) {
  return [{ id: ApplicationStatus.InProgress, name: context.$t("Гражданин") }];
}

export { ApplicationStatuses };
