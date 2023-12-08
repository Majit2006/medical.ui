import { Plugin } from "@nuxt/types";
import { NavigationGenerator } from "~/infrastructure/classes/navigation/NavigationGenerator";

const accessor: Plugin = async ({ $axios, store }) => {
  let nav = new NavigationGenerator();
  nav.generateItemsByRole();
  store.commit("menu/SET_ITEMS", nav.items);
};
export default accessor;
