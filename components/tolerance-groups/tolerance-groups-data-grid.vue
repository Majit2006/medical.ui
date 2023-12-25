<template>
  <div>
    <DxDataGrid
      class="component-wrapper"
      :data-source="dataSource"
      :show-borders="false"
      :hoverStateEnabled="true"
      :allow-column-resizing="true"
      :column-auto-width="false"
      @row-dbl-click="showToleranceGroup"
      @toolbar-preparing="toolbarPreparing"
    >
      <DxSearchPanel :visible="true" :width="240" placeholder="Search..." />
      <DxFilterRow :visible="true" />
      <DxColumn data-field="id" :width="40" caption="ID" />
      <DxColumn
        :width="250"
        data-field="name"
        :caption="$t('toleranceGroup.accessGroupName')"
      />
      <DxColumn
        data-field="userCound"
        :caption="$t('toleranceGroup.employeeCount')"
      />
      <DxColumn
        data-field="number"
        caption="Номер кабинета"
        data-type="cabinetNumber"
      />
      <!-- <DxColumn :width="100" :buttons="editButtons" type="buttons" /> -->
    </DxDataGrid>
  </div>
</template>
<script lang="ts">
import Vue from "vue";
import "devextreme/data/odata/store";
import DxButton from "devextreme-vue/button";
import {
  DxDataGrid,
  DxColumn,
  DxSearchPanel,
  DxFilterRow,
} from "devextreme-vue/data-grid";
import DataSource from "devextreme/data/data_source";
export default Vue.extend({
  components: {
    DxDataGrid,
    DxColumn,
    DxSearchPanel,
    DxFilterRow,
  },
  data(){
     return{
      dataSource: new DataSource({
        store: this.$dxStore({
          key: "id",
          loadUrl: this.$dataApi.roles,
        }),
      }),
     }
  },
  methods: {
    showToleranceGroup(e: any) {
      this.$router.push(`/tolerance-groups/${e.data.id}`);
    },
    addAccess() {
      this.$router.push(`/tolerance-groups/create`);
    },
    toolbarPreparing(e) {
      e.toolbarOptions.items = [
        {
          location: "after",
          widget: "dxButton",
          options: {
            hint: this.$t("cabinetPage.add"),
            icon: "plus",
          },
          onClick: () => {
            this.addAccess();
          },
        },
        ...e.toolbarOptions.items,
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
