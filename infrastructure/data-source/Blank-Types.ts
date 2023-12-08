import Vue from "vue";
import { BlankType } from "~/infrastructure/enums/BlankType";

function BlankTypes(context: Vue) {
  return [
    {
      id: BlankType.LegVeins,
      name: "AÝAKLARYŇ WENALARYNYŇ DUPLEKS SKAN BARLAGYNYŇ BEÝANY",
    },
    {
      id: BlankType.LegArtery,
      name: "AÝAKLARYŇ ARTERIÝALARYNYŇ DUPLEKS SKAN BARLAGYNYŇ BEÝANY",
    },
    {
      id: BlankType.ArmArtery,
      name: "ELLERIŇ ARTERIÝALARYNYŇ DUPLEKS SKAN BARLAGYNYŇ BEÝANY",
    },
    {
      id: BlankType.ImmunofermentResult,
      name: "IMMUNOFERMENT DERŇEJINIŇ NETIJESI",
    },
    {
      id: BlankType.BloodThicken,
      name: "GANYŇ LAGTALANMAK ULGAMYNYŇ GÖRKEZIJILERI",
    },
    {
      id: BlankType.BloodRhesusFactor,
      name: "GANYŇ TOPARY WE REZUS-FAKTOR BARLAGYNYŇ NETIJESI",
    },
    {
      id: BlankType.BloodThicken2,
      name: "GANYŇ LAGTALANMAK ULGAMYNYŇ GÖRKEZIJILERI №2",
    },
    {
      id: BlankType.BloodGlucose,
      name: "GANYŇ GLÝUKOZASYNYŇ BARLAGYNYŇ NETIJESI",
    },
  ];
}

export { BlankTypes };
