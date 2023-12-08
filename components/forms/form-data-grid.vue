<template>
  <div>
    <DxDataGrid
      class="component-wrapper"
      :data-source="dataSource"
      :show-borders="false"
      :hoverStateEnabled="true"
      :allow-column-resizing="true"
      :column-auto-width="true"
      @row-dbl-click="showForms"
    >
      <DxSearchPanel :visible="true" :width="240" placeholder="Search..." />
      <DxColumn data-field="name" :caption="$t('blanks.blanks')" />
    </DxDataGrid>
  </div>
</template>
<script lang="ts">
import Vue from "vue";
import "devextreme/data/odata/store";
import { DxDataGrid, DxColumn, DxSearchPanel } from "devextreme-vue/data-grid";
import DataSource from "devextreme/data/data_source";

export default Vue.extend({
  components: {
    DxDataGrid,
    DxColumn,
    DataSource,
    DxSearchPanel,
  },
  data() {
    return {
      dataSource: new DataSource({
        store: this.$dxStore({
          key: "id",
          loadUrl: this.$dataApi.blanks,
        }),
      }),
    };
  },
  mounted() {
    // this.$axios.get("http://localhost:3000/formsData").then((response) => {
    //   this.dataSource = response.data;
    //   console.log(response);
    // });
  },
  methods: {
    showForms(e: any) {
      this.$router.push(`forms/${e.data.id}`);
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
  background-size: 22px;
  background-repeat: no-repeat;
  background-position: center;
  background-color: $custom-main-color;
}
</style>
