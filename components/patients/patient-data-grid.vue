<template>
  <div>
    <!-- <div class="panel-items"></div> -->
    <DxDataGrid
      class="component-wrapper"
      :data-source="dataSource"
      :show-borders="false"
      :hoverStateEnabled="true"
      :allow-column-resizing="true"
      :column-auto-width="true"
      @row-dbl-click="showPatient"
      @toolbar-preparing="toolbarPreparing"
    >
      <DxSearchPanel :visible="true" :width="240" placeholder="Search..." />
      <DxFilterRow :visible="true" />
      <!-- <DxColumn :allow-filtering="false" ... /> -->
      <DxColumn data-field="id" :width="40" caption="№" />
      <DxColumn
        data-field="firstName"
        :caption="$t('patientPage.patientName')"
        alignment="ceneter"
      />
      <DxColumn
        data-field="applicantNumber"
        :caption="$t('patientPage.medicalCardNumber')"
        alignment="ceneter"
      />
      <DxColumn
        data-field="createdDate"
        :caption="$t('patientPage.birthday')"
        alignment="ceneter"
      />
      <DxColumn
        data-field="phone1"
        :caption="$t('patientPage.phone')"
        alignment="ceneter"
      />
      <DxColumn
        data-field="passportNumber"
        :caption="$t('patientPage.passportNumber')"
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
          loadUrl: this.$dataApi.applicants,
        }),
      }),
    };
  },
  methods: {
    addPatient(e: string) {
      this.$router.push(`/patients/create`);
    },
    showPatient(e: any) {
      this.$router.push(`/patients/${e.data.id}`);
    },
    toolbarPreparing(e) {
      e.toolbarOptions.items = [
        {
          location: "after",
          widget: "dxButton",
          options: {
            hint: this.$t("patientPage.add"),
            icon: "plus",
            stylingMode: "contained",
            type: "default",
          },
          onClick: () => {
            this.addPatient();
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
              this.$axios.delete(`${this.$dataApi.applicants}/${e.row.data.id}`),
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
.search-panel-wrapper {
  display: flex;
  justify-content: space-between;
  margin-bottom: 10px;
  width: 100%;
}

.search-input {
  width: 400px;
  height: 30px;
  border: none;
  border-radius: 10px;
  padding: 5px 10px;
  background-image: url("@/assets/images/magnifyingGlass.png");
  background-size: 22px;
  background-repeat: no-repeat;
  background-position: right;
  background-color: $custom-main-color;

  &:focus {
    background-image: none;
    border: 1px solid $light-blue;
  }
}
.panel-btn {
  background-color: $custom-main-color;
  border-radius: 10px;
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
  padding: 8px 26px;
  border: none;
  background-image: url("@/assets/images/sorting.png");
  background-size: 24px;
  background-repeat: no-repeat;
  background-position: center;
  background-color: $custom-main-color;
}
.component-wrapper {
  padding: 10px;
}
</style>
