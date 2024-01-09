export { default as AdminBulletinCard } from '../..\\components\\admin-bulletin\\admin-bulletin-card.vue'
export { default as AdminBulletinDataGrid } from '../..\\components\\admin-bulletin\\admin-bulletin-data-grid.vue'
export { default as AdminBulletinCreate } from '../..\\components\\admin-bulletin\\admin-bulletin.create.vue'
export { default as BulletinCard } from '../..\\components\\bulletin\\bulletin-card.vue'
export { default as BulletinDataGrid } from '../..\\components\\bulletin\\bulletin-data-grid.vue'
export { default as CabinetsCabinetCard } from '../..\\components\\cabinets\\cabinet-card.vue'
export { default as CabinetsCabinetCreate } from '../..\\components\\cabinets\\cabinet-create.vue'
export { default as CabinetsCabinetDataGrid } from '../..\\components\\cabinets\\cabinet-data-grid.vue'
export { default as DoctorEntryCard } from '../..\\components\\doctor-entries\\doctor-entry-card.vue'
export { default as DoctorEntryCreate } from '../..\\components\\doctor-entries\\doctor-entry-create.vue'
export { default as DoctorEntryDataGrid } from '../..\\components\\doctor-entries\\doctor-entry-data-grid.vue'
export { default as EntriesCard } from '../..\\components\\entries\\entries-card.vue'
export { default as EntriesCreate } from '../..\\components\\entries\\entries-create.vue'
export { default as EntriesDataGrid } from '../..\\components\\entries\\entries-data-grid.vue'
export { default as FormsFormCard } from '../..\\components\\forms\\form-card.vue'
export { default as FormsFormCreate } from '../..\\components\\forms\\form-create.vue'
export { default as FormsFormDataGrid } from '../..\\components\\forms\\form-data-grid.vue'
export { default as LayoutListMenuItem } from '../..\\components\\layout\\list-menu-item.vue'
export { default as LayoutListMenu } from '../..\\components\\layout\\list-menu.vue'
export { default as LayoutMainLogo } from '../..\\components\\layout\\main-logo.vue'
export { default as LayoutUserPanel } from '../..\\components\\layout\\user-panel.vue'
export { default as ObservationsObservationCard } from '../..\\components\\observations\\observation-card.vue'
export { default as ObservationsObservationCreate } from '../..\\components\\observations\\observation-create.vue'
export { default as ObservationsObservationDataGrid } from '../..\\components\\observations\\observation-data-grid.vue'
export { default as PatientsPatientCard } from '../..\\components\\patients\\patient-card.vue'
export { default as PatientsPatientCreate } from '../..\\components\\patients\\patient-create.vue'
export { default as PatientsPatientDataGrid } from '../..\\components\\patients\\patient-data-grid.vue'
export { default as ToleranceGroupsDataGrid } from '../..\\components\\tolerance-groups\\tolerance-groups-data-grid.vue'
export { default as UsersUserCard } from '../..\\components\\users\\user-card.vue'
export { default as UsersUserCreate } from '../..\\components\\users\\user-create.vue'
export { default as UsersUserDataGrid } from '../..\\components\\users\\user-data-grid.vue'
export { default as AdminBulletinStatistic } from '../..\\components\\admin-bulletin\\bulletin-statistic\\bulletin-statistic.vue'
export { default as AdminBulletinEdit } from '../..\\components\\admin-bulletin\\edit\\admin-bulletin-edit.vue'
export { default as DoctorEntryForm } from '../..\\components\\doctor-entries\\form\\doctor-entry-form.vue'
export { default as EntriesStatistic } from '../..\\components\\entries\\statistic\\statistic.vue'
export { default as PageGuideBlock } from '../..\\components\\page\\guide\\block.vue'
export { default as PatientsComplaint } from '../..\\components\\patients\\complaint\\complaint.vue'
export { default as PatientsEntriesPatientEntryCard } from '../..\\components\\patients\\entries\\patient-entry-card.vue'
export { default as PatientsEntriesPatientEntryCreate } from '../..\\components\\patients\\entries\\patient-entry-create.vue'
export { default as PatientsEntriesPatientEntryDataGrid } from '../..\\components\\patients\\entries\\patient-entry-data-grid.vue'
export { default as StatisticsCashDataGrid } from '../..\\components\\statistics\\cash-statistic\\cash-data-grid.vue'
export { default as StatisticsCashStatistic } from '../..\\components\\statistics\\cash-statistic\\cash-statistic.vue'
export { default as StatisticsEntryDataGrid } from '../..\\components\\statistics\\entry-statistic\\entry-data-grid.vue'
export { default as StatisticsEntryStatistic } from '../..\\components\\statistics\\entry-statistic\\entry-statistic.vue'
export { default as StatisticsPatientDataGrid } from '../..\\components\\statistics\\patient-statistic\\patient-data-grid.vue'
export { default as StatisticsPatientStatistic } from '../..\\components\\statistics\\patient-statistic\\patient-statistic.vue'
export { default as PatientsEntriesResultEntryResultCard } from '../..\\components\\patients\\entries\\result\\entry-result-card.vue'
export { default as PatientsEntriesResultEntryResult } from '../..\\components\\patients\\entries\\result\\entry-result.vue'

// nuxt/nuxt.js#8607
function wrapFunctional(options) {
  if (!options || !options.functional) {
    return options
  }

  const propKeys = Array.isArray(options.props) ? options.props : Object.keys(options.props || {})

  return {
    render(h) {
      const attrs = {}
      const props = {}

      for (const key in this.$attrs) {
        if (propKeys.includes(key)) {
          props[key] = this.$attrs[key]
        } else {
          attrs[key] = this.$attrs[key]
        }
      }

      return h(options, {
        on: this.$listeners,
        attrs,
        props,
        scopedSlots: this.$scopedSlots,
      }, this.$slots.default)
    }
  }
}
