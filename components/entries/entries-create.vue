<template>
  <div class="entries-create-wrapper">
    <div class="panel-items">
      <div class="btn-wrapper">
        <button class="new-entries">Новая запись</button>
        <button class="save-btn">Сохранить</button>
        <button @click="cancelCreate" class="cancel-btn">Отменить</button>
      </div>
    </div>
    <div class="component-wrapper">
      <DxForm label-location="top" :show-colon-after-label="false">
        <DxGroupItem>
          <DxGroupItem>
            <DxSimpleItem data-field="">
              <DxLabel
                :text="$t('entriesPage.entryNumber')"
                :show-colon="false"
              />
            </DxSimpleItem>
          </DxGroupItem>
          <DxEmptyItem />
          <DxGroupItem :col-count="2">
            <DxSimpleItem data-field="" editor-type="dxSelectBox">
              <DxLabel :text="$t('entriesPage.cabinet')" />
            </DxSimpleItem>

            <DxSimpleItem data-field="" editor-type="dxSelectBox">
              <DxLabel :text="$t('entriesPage.doctor')" />
            </DxSimpleItem>
          </DxGroupItem>
          <DxEmptyItem />
          <DxGroupItem :col-count="1">
            <DxSimpleItem data-field="" editor-type="dxSelectBox">
              <DxLabel :text="$t('entriesPage.diagnosis')" />
            </DxSimpleItem>
          </DxGroupItem>

          <DxEmptyItem />
          <DxGroupItem :col-count="2">
            <DxSimpleItem data-field="">
              <DxLabel :text="$t('entriesPage.date')" />
            </DxSimpleItem>

            <DxSimpleItem data-field="">
              <DxLabel :text="$t('entriesPage.time')" />
            </DxSimpleItem>
          </DxGroupItem>
          <DxEmptyItem />
          <DxGroupItem>
            <DxSimpleItem data-field="">
              <DxLabel :text="$t('entriesPage.note')" />
            </DxSimpleItem>
          </DxGroupItem>

          <DxSimpleItem template="data-grid" />
          <DxEmptyItem />
          <DxSimpleItem template="horizont-line" />
          <DxEmptyItem />
          <DxGoupItem>
           <DxSimpleItem template="additional-payment-title"/>
                 <!-- <DxSimpleItem>
                  <DxLabel :text=/>
                 </DxSimpleItem> -->
            </DxGoupItem>
        </DxGroupItem>
        <template #data-grid>
          <!-- :data-source="gridData" -->
          <DxDataGrid
            :show-borders="false"
            :hoverStateEnabled="true"
            :allow-column-resizing="true"
            :column-auto-width="true"
            height="240px"
          >
            <DxColumn data-field="id" :width="40" />
            <DxColumn
              data-field="cabinet"
              :width="40"
              :caption="$t('entriesPage.cabinet')"
            />
          </DxDataGrid>
        </template>
        <template #additional-payment-title>
          <span class="additional-payment-title">{{
            $t("entriesPage.additionalPayment")
          }}</span>
        </template>
        <template #horizont-line>
          <div class="horizont-line" />
        </template>
      </DxForm>
    </div>
  </div>
</template>
<script lang="ts">
import {
  DxForm,
  DxSimpleItem,
  DxGroupItem,
  DxEmptyItem,
  DxLabel,
} from "devextreme-vue/form";
import DxButton from "devextreme-vue/button";
import { DxDataGrid, DxColumn } from "devextreme-vue/data-grid";

import Vue from "vue";
export default Vue.extend({
  components: {
    DxForm,
    DxDataGrid,
    DxColumn,
    DxButton,
    DxSimpleItem,
    DxGroupItem,
    DxEmptyItem,
    DxLabel,
  },
  methods: {
    cancelCreate() {
      this.$router.go(-1);
    },
  },
});
</script>
<style lang="scss" scoped>
.entries-create-wrapper {
  .new-entries {
    padding: 12px 150px;
    border: none;
    border-radius: 10px;
    background-color: $custom-main-color;
    font-weight: $bold-weight;
    cursor: pointer;
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
  .payment-info {
    display: flex;
    column-gap: 60px;
    margin-top: 6px;
    .payment {
      display: flex;
      column-gap: 12px;
    }
    label {
      font-weight: $bold-weight;
    }
  }
  .chaeckbox-wrapper {
    display: flex;
    flex-direction: row-reverse;
    justify-content: flex-end;
    column-gap: 12px;
  }
  .input {
    height: 42px;
    background-color: $input-bg-color;
    border: none;
    border-radius: 10px;
    padding: 5px 12px;
  }
  .entries-number {
    width: 20%;
  }
  .name {
    background-image: url("@/assets/images/magnifyingGlass.png");
    background-repeat: no-repeat;
    background-size: 24px;
    background-position: right;
    background-color: $input-bg-color;
    &:focus {
      background-image: none;
      transform: 0.8s;
    }
    width: 40%;
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
  .new-patient {
    font-weight: $bold-weight;
    padding: 12px 20px;
    border: none;
    border-radius: 10px;
    margin-left: 20px;
    cursor: pointer;
  }
  .select-box-wrapper {
    display: flex;
    column-gap: 54px;
    div {
      display: flex;
      flex-direction: column;
      row-gap: 10px;
      width: 100%;
    }
  }
  .receptions-wrapper {
    display: flex;
    flex-direction: column;
    row-gap: 10px;
    p {
      font-weight: $bold-weight;
    }
    .add-receptions-btn {
      padding: 12px 42px;
      border: none;
      border-radius: 10px;
      font-weight: $bold-weight;
      cursor: pointer;
    }
  }
  .date-input-wrapper {
    display: flex;
    column-gap: 50px;
    div {
      display: flex;
      flex-direction: column;
      row-gap: 10px;
      width: 18%;
    }
  }
  .note-wrapper {
    display: flex;
    flex-direction: column;
    row-gap: 10px;
    textarea {
      padding: 10px 16px;
      min-height: 180px;
      resize: none;
    }
  }
  .additional-payment-wrapper {
    display: flex;
    flex-direction: column;

    .additional-payment-title {
      margin-bottom: 20px;
    }
    .sum-input-wrapper {
      display: flex;
      align-items: center;
      column-gap: 50px;
      .sum-input {
        width: 18%;
      }
      .choose-currency-wrapper {
        display: flex;
        column-gap: 30px;
      }
      .radio-input-wrapper {
        display: flex;
        column-gap: 10px;
      }
    }
    p {
      margin-bottom: 10px;
      font-weight: $bold-weight;
    }
  }
  input[type="radio"],
  label {
    font-weight: $bold-weight;
    cursor: pointer;
  }
}
</style>
