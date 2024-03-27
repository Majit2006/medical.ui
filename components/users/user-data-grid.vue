<template>
  <div>
    <DxDataGrid
      class="component-wrapper"
      :data-source="dataSource"
      :show-borders="false"
      :hoverStateEnabled="true"
      :allow-column-resizing="true"
      :column-auto-width="true"
      @row-dbl-click="showUser"
      @toolbar-preparing="toolbarPreparing"
    >
      <DxSearchPanel :visible="true" :width="240" placeholder="Search..." />
      <DxColumn data-field="id" :width="40" caption="ID" />
      <!-- <DxColumn data-field="phone" caption="Тел. номерphone" data-type="string" />
      <DxColumn data-field="lastNamre" caption="Ф.И.О сотрудника" alignment="left" />
      <DxColumn data-field="jobPositionId" caption="Должность" data-type="string">
        <DxLookup value-expr="id" display-expr="name" :data-source="jobDataSource" />
      </DxColumn>
      <DxColumn data-field="cabinetId" caption="Кабинет">
        <DxLookup value-expr="id" display-expr="name" :data-source="cabinetDataSource"></DxLookup>
      </DxColumn>
      <DxColumn data-field="roleId" caption="Допуск">
        <DxLookup value-expr="id" display-expr="name" :data-source="roleDataSource"></DxLookup>
      </DxColumn> -->
      <DxColumn :width="100" :buttons="editButtons" type="buttons" />
    </DxDataGrid>
  </div>
</template>
<script lang="ts">
import Vue from "vue";
import "devextreme/data/odata/store";
import {
  DxDataGrid,
  DxColumn,
  DxLookup,
  // DxButton,
  DxSearchPanel,
} from "devextreme-vue/data-grid";
import DxButton from "devextreme-vue/button";
import DataSource from "devextreme/data/data_source";
export default Vue.extend({
  components: {
    DxLookup,
    DxDataGrid,
    DxColumn,
    DxButton,
    DataSource,
    DxSearchPanel,
  },
  data() {
    return {
      dataSource: new DataSource({
        store: this.$dxStore({
          loadUrl: this.$dataApi.users,
          key: "id",
        }),
      }),
      jobDataSource: this.$dxStore({
        key: "id",
        loadUrl: this.$dataApi.jobPositions,
      }),
      cabinetDataSource: this.$dxStore({
        key: "id",
        loadUrl: this.$dataApi.cabinets,
      }),
      roleDataSource: this.$dxStore({
        key: "id",
        loadUrl: this.$dataApi.roles,
      }),
    };
  },
  computed: {
    editButtons() {
      return [
        {
          hint: "удалить",
          icon: "trash",
          onClick: (e) => {
            this.$axios.delete(`${this.$dataApi.users}/${e.row.data.id}`),
              this.dataSource.reload();
          },
        },
      ];
    },
  },
  methods: {
    showUser(e: any) {
      this.$router.push(`/users/${e.data.id}`);
    },
    userAdd(e: string) {
      this.$router.push(`/users/create`);
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
            this.userAdd();
          },
        },
        ...e.toolbarOptions.items,
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
  background-size: 22px;
  background-repeat: no-repeat;
  background-position: right;
  background-color: $custom-main-color;

  &:focus {
    background: none;
    background-color: $custom-main-color;
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
</style>
