<template>
  <div>
    <div class="search-panel-wrapper">
      <div>
        <input class="search-input" type="search" />
        <button @click="addEntries" class="add panel-btn">Добавить</button>
      </div>
      <div class="sorting-wrapper">
      <button class="sorting panel-btn" />
      </div>
    </div>
    <DxDataGrid
      class="component-wrapper"
      :data-source="dataSource"
      :show-borders="false"
      :hoverStateEnabled="true"
      :allow-column-resizing="true"
      :column-auto-width="true"
      @row-dbl-click="showEntry"
    >
      <DxColumn data-field="Product_ID" :width="40" />
      <DxColumn :width="250" data-field="Product_Name" />
      <DxColumn
        data-field="Product_Cost"
        caption="Cost"
        data-type="number"
        format="currency"
        alignment="left"
      />
      <DxColumn
        data-field="Product_Sale_Price"
        caption="Sale Price"
        data-type="number"
        format="currency"
      />
      <DxColumn
        data-field="Product_Retail_Price"
        caption="Retail Price"
        data-type="number"
        format="currency"
      />
       <DxColumn
        data-field="Product_Retail_Price"
        caption="Retail Price"
        data-type="number"
        format="currency"
      />
       <DxColumn
        data-field="Product_Retail_Price"
        caption="Retail Price"
        data-type="number"
        format="currency"
      />
      <DxColumn data-field="Product_Current_Inventory" caption="Inventory" />
    </DxDataGrid>
  </div>
</template>
<script lang="ts">
import Vue from "vue";
import "devextreme/data/odata/store";
import { DxDataGrid, DxColumn } from "devextreme-vue/data-grid";
export default Vue.extend({
  components: {
    DxDataGrid,
    DxColumn,
  },
  data() {
    return {
      dataSource: {
        store: {
          type: "odata",
          url: "https://js.devexpress.com/Demos/DevAV/odata/Products",
          key: "Product_ID",
        },
        select: [
          "Product_ID",
          "Product_Name",
          "Product_Cost",
          "Product_Sale_Price",
          "Product_Retail_Price",
          "Product_Current_Inventory",
        ],
        filter: ["Product_Current_Inventory", ">", 0],
      },
    };
  },
  methods: {
    showEntry(e: any) {
      this.$router.push(`/doctor-entries/${e.data.Product_ID}`);
    },
    addEntries(e: string) {
      this.$router.push(`/doctor-entries/create`)
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
  background-position: right ;
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
