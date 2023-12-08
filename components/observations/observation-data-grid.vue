<template>
  <div>
    <DxDataGrid
      class="component-wrapper"
      :data-source="dataSource"
      :show-borders="false"
      :hoverStateEnabled="true"
      :allow-column-resizing="true"
      :column-auto-width="true"
      @row-dbl-click="showObservation"
      @toolbar-preparing="toolbarPreparing"
    >
      <DxSearchPanel :visible="true" :width="240" placeholder="Search..." />
      <DxFilterRow :visible="true" />
      <!-- <DxColumn :allow-filtering="false" ... /> -->
      <DxColumn data-field="id" :width="40" caption="№" />
      <DxColumn
        data-field="name"
        :caption="$t('newExamination.examinationName')"
      />
      <DxColumn
        data-field="cashNumber"
        :caption="$t('newExamination.cabinetName')"
      />
      <DxColumn
        data-field="observationPrices[0].price"
        :caption="$t('newExamination.withoutInsuranceGrid')"
      />
      <DxColumn
        data-field="observationPrices[1].price"
        :caption="$t('newExamination.withInsuranceGrid')"
      />
      <DxColumn
        data-field="observationPrices[2].price"
        :caption="$t('newExamination.foreignerGrid')"
      />
      <DxColumn
        data-field="observationPrices[3].price"
        :caption="$t('newExamination.diplomatGrid')"
      />
      <DxColumn :width="100" :buttons="editButtons" type="buttons" />
    </DxDataGrid>
  </div>
</template>
<script lang="ts">
import Vue from "vue";
import { DxDataGrid, DxColumn, DxFilterRow } from "devextreme-vue/data-grid";
import { DxSearchPanel } from "devextreme-vue/data-grid";
import DataSource from "devextreme/data/data_source";
import DxButton from "devextreme-vue/button";
export default Vue.extend({
  components: {
    DxDataGrid,
    DxColumn,
    DxSearchPanel,
    DataSource,
    DxButton,
    DxFilterRow,
  },
  data() {
    return {
      dataSource: new DataSource({
        store: this.$dxStore({
          key: "id",
          loadUrl: this.$dataApi.observations,
        }),
      }),
    };
  },
  methods: {
    showObservation(e: any) {
      this.$router.push(`observations/${e.data.id}`);
    },
    addObservations(e) {
      this.$router.push(`/observations/create`);
    },
    toolbarPreparing(e) {
      e.toolbarOptions.items = [
        {
          location: "after",
          widget: "dxButton",
          options: {
            hint: this.$t("cabinetPage.add"),
            icon: "plus",
            stylingMode: "contained",
            type: "default",
          },
          onClick: () => {
            this.addObservations();
          },
        },
        ...e.toolbarOptions.items,
      ];
    },
  },
  computed: {
    editButtons() {
      return [
        {
          hint: "удалить",
          icon: "trash",
          onClick: (e) => {
            this.$awn.asyncBlock(
              this.$axios.delete(`${this.$dataApi.cabinets}/${e.row.data.id}`),
              (e) => {
                this.$awn.success();
                this.dataSource.reload();
              },
              (e) => {
                this.$awn.alert();
              }
            );
          },
        },
      ];
    },
  },
});
</script>
<style lang="scss" scoped>
.component-wrapper {
  padding: 10px;
}
</style>
