<template>
  <div>
    <!-- <div class="search-panel-wrapper">
      <div>
        <input class="search-input" type="search" />
        <DxButton @click="addCabinet" text="Добавить" />
      </div>
      <button class="sorting panel-btn"></button>
    </div> -->
    <!-- <DxButton @click="userAdd" text="Добавить" /> -->
    <DxDataGrid
      class="component-wrapper"
      :data-source="dataSource"
      :show-borders="false"
      :hoverStateEnabled="true"
      :allow-column-resizing="true"
      :column-auto-width="false"
      @row-dbl-click="showCabinet"
      @toolbar-preparing="toolbarPreparing"
    >
      <DxSearchPanel :visible="true" :width="240" placeholder="Search..." />
      <DxFilterRow :visible="true" />
      <DxColumn data-field="id" :width="40" caption="ID" />
      <DxColumn :width="250" data-field="name" caption="Название кабинета" />
      <DxColumn
        data-field="phone"
        caption="Номер телефона"
        data-type="number"
        alignment="left"
      />
      <DxColumn
        data-field="number"
        caption="Номер кабинета"
        data-type="cabinetNumber"
      />
      <DxColumn data-field="flat" caption="Этаж" data-type="number" />
      <DxColumn
        data-field="status"
        caption="Статус"
        data-type="status"
        format="status"
      />
      <DxColumn :width="100" :buttons="editButtons" type="buttons" />
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
    DxButton,
    DataSource,
  },
  data() {
    return {
      dataSource: new DataSource({
        store: this.$dxStore({
          key: "id",
          loadUrl: this.$dataApi.cabinets,
        }),
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
  methods: {
    showCabinet(e: any) {
      this.$router.push(`/cabinet/${e.data.id}`);
    },
    addCabinet(e: string) {
      this.$router.push(`/cabinet/create`);
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
            this.addCabinet();
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
  background-repeat: no-repeat;
  background-size: 22px;
  background-position: right;
  background-color: $custom-main-color;
  &:focus {
    background-image: none;
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
