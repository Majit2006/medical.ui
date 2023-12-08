<template>
  <div>
    <DxDataGrid
      class="component-wrapper"
      :data-source="dataSource"
      :show-borders="false"
      :hoverStateEnabled="true"
      :allow-column-resizing="true"
      :column-auto-width="true"
      @row-dbl-click="showEntry"
      @toolbar-preparing="toolbarPreparing"
    >
      <DxSearchPanel :visible="true" :width="240" placeholder="Search..." />
      <DxFilterRow :visible="true" />
      <DxColumn data-field="id" :width="40" />
      <DxColumn
        :width="250"
        :caption="$t('entriesPage.entryNumber')"
        data-field="applicantNumber"
      />
      <DxColumn
        :width="250"
        :caption="$t('entriesPage.medicalCardNumber')"
        data-field="applicationNumber"
        alignment="left"
      />
      <DxColumn
        :width="250"
        :caption="$t('entriesPage.patientName')"
        data-field="applicantName"
      />
      <DxColumn
        :width="250"
        :caption="$t('entriesPage.status')"
        data-field="paymentStatus"
      />
    </DxDataGrid>
  </div>
</template>
<script lang="ts">
import Vue from "vue";
import "devextreme/data/odata/store";
import DataSource from "devextreme/data/data_source";
import {
  DxDataGrid,
  DxColumn,
  DxSearchPanel,
  DxFilterRow,
} from "devextreme-vue/data-grid";

export default Vue.extend({
  components: {
    DxDataGrid,
    DxColumn,
    DxSearchPanel,
    DxFilterRow,
    DataSource,
  },
  data() {
    return {
      dataSource: new DataSource({
        store: this.$dxStore({
          key: "id",
          loadUrl: this.$dataApi.applications,
        }),
      }),
    };
  },
  methods: {
    toolbarPreparing(e) {
      e.toolbarOptions.items = [
        {
          location: "after",
          widget: "dxButton",
          options: {
            hint: this.$t("entriesPage.add"),
            icon: "plus",
            stylingMode: "contained",
            type: "default",
          },
          onClick: () => {
            this.addEntries();
          },
        },
        ...e.toolbarOptions.items,
      ];
    },
    showEntry(e: any) {
      this.$router.push(`/entries/${e.data.id}`);
    },
    addEntries(e: string) {
      this.$router.push(`/entries/create`);
    },
    showStatistic(e: string) {
      this.$router.push(`/entries/statistic`);
    },
  },
});
</script>
<style lang="scss" scoped>
.search-panel-wrapper {
  display: flex;
  justify-content: space-between;
  margin-bottom: 10px;
  width: 100%;
}
.component-wrapper {
  padding: 10px;
}

.search-input {
  width: 400px;
  height: 30px;
  border: none;
  border-radius: 10px;
  padding: 5px 10px;
  background-image: url("@/assets/images/magnifyingGlass.png");
  background-repeat: no-repeat;
  background-size: 22px;
  background-position: right;
  background-color: $custom-main-color;
  &:focus {
    background-image: none;
    border: 1px solid $light-blue;
  }
}

.panel-btn {
  font-weight: $bold-weight;
  padding: 8px 42px;
  background-color: $custom-main-color;
  border-radius: 10px;
  border: none;
  cursor: pointer;
}

.add {
  font-weight: $bold-weight;
  padding: 8px 42px;
  border: none;
}
.add:hover {
  background-color: $light-blue;
  color: $custom-main-color;
  transition: 0.3s ease-in-out;
}
.add:active {
  box-shadow: inset 0 2px 2px 0 #333;
  transition: 0.1s ease-out;
  -webkit-box-shadow: inset 1px 1px 8px #333;
  -moz-box-shadow: inset 1px 1px 8px #333;
  box-shadow: inset 1px 1px 8px #333;
}
.sorting {
  padding: 16px 26px;
  border: none;
  background-image: url("@/assets/images/sorting.png");
  background-size: 24px;
  background-repeat: no-repeat;
  background-position: center;
  background-color: $custom-main-color;
}
.sorting-wrapper {
  display: flex;
  column-gap: 30px;
}
</style>
