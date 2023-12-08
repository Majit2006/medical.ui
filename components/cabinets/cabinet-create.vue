<template>
  <div class="cabinet-create-wrapper">
    <div class="panel-items">
      <div class="btn-wrapper">
        <button class="create-cabinet">
          {{ $t("cabinetPage.newCabinet") }}
        </button>
        <button @click="saveCabinetData" class="save-btn">
          {{ $t("cabinetPage.save") }}
        </button>
        <button @click="cancelCreate" class="cancel-btn">
          {{ $t("cabinetPage.cancel") }}
        </button>
      </div>
    </div>
    <div class="component-wrapper">
      <DxForm label-location="top" :form-data.sync="cabinet" ref="form">
        <DxGroupItem>
          <DxGroupItem class="cabinet-simple-item" :col-count="2">
            <DxSimpleItem data-field="name">
              <DxLabel text="Название кабинета" :show-colon="false" />
            </DxSimpleItem>
          </DxGroupItem>
        </DxGroupItem>
        <DxGroupItem>
          <DxGroupItem :col-count="2">
            <DxSimpleItem data-field="phone">
              <DxLabel text="Номер телефона" :show-colon="false" />
            </DxSimpleItem>
          </DxGroupItem>
        </DxGroupItem>
        <DxGroupItem :col-count="2">
          <DxGroupItem :col-count="2">
            <DxSimpleItem data-field="flat">
              <DxLabel text="Этаж" :show-colon="false" />
            </DxSimpleItem>
            <DxSimpleItem data-field="number" >
              <!-- :editor-type="numberBoxOptions" -->
              <DxLabel text="Номер кабинета" :show-colon="false" />
            </DxSimpleItem>
          </DxGroupItem>
        </DxGroupItem>
      </DxForm>
    </div>
  </div>
</template>
<script lang="ts">
import Vue from "vue";
import {
  DxForm,
  DxSimpleItem,
  DxGroupItem,
  DxLabel,
} from "devextreme-vue/form";
import { DxCheckBox } from "devextreme-vue/check-box";
import { Cabinet } from "~/infrastructure/classes/Cabinet";
import { ICabinet } from "~/infrastructure/interfaces/administration/ICabinet";
export default Vue.extend({
  data() {
    let cabinet: ICabinet = new Cabinet();
    return {
      cabinet,
      readOnly: true,
    };
  },
  components: {
    DxForm,
    DxSimpleItem,
    DxGroupItem,
    DxLabel,
    DxCheckBox,
    Cabinet,
  },

  methods: {
    saveCabinetData() {
      let result = this.$refs["form"].instance.validate();
      if (result.isValid) {
        this.$axios.post(this.$dataApi.cabinets, this.cabinet);
      }
      this.$router.go(-1);
    },
    cancelCreate() {
      this.$router.go(-1);
    },
  },
});
</script>
<style lang="scss">
.cabinet-create-wrapper {
  .cabinet-name {
    display: flex;
    flex-direction: column;
  }

  .create-cabinet {
    padding: 12px 150px;
    border: none;
    border-radius: 10px;
    background-color: $custom-main-color;
    font-weight: $bold-weight;
    cursor: pointer;
  }

  .cabinet-number {
    display: flex;
  }

  .component-wrapper {
    row-gap: 40px;
    padding: 30px 50px;
  }

  .info-form-wrapper {
    display: flex;
    flex-direction: column;
    row-gap: 10px;
  }

  .cabinet-info {
    display: flex;
    column-gap: 40px;
  }

  .chaeckbox-wrapper {
    display: flex;
    flex-direction: row-reverse;
    justify-content: flex-end;
    column-gap: 12px;
  }

  .input {
    max-width: 516px;
    height: 42px;
    background-color: $input-bg-color;
    border: none;
    border-radius: 10px;
    padding: 5px 12px;
  }

  .save-btn,
  .cancel-btn {
    padding: 12px 40px;
    border: none;
    border-radius: 10px;
    background-color: $custom-main-color;
    font-weight: $bold-weight;
    cursor: pointer;
  }

  .btn-wrapper {
    display: flex;
    column-gap: 10px;
  }

  .info-btn-wrapper {
    display: flex;
    column-gap: 30px;
  }

  .panel-items {
    display: flex;
    justify-content: space-between;
    margin-bottom: 10px;
  }
}
</style>
