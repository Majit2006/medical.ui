<template>
  <div class="examination-create-wrapper">
    <div class="panel-items">
      <div class="btn-wrapper">
        <button class="create-examination">
          {{ $t("newExamination.newExamination") }}
        </button>
        <DxButton :text="$t('newExamination.save')" :width="180" />
        <DxButton
          @click="cancelCreate"
          :text="$t('newExamination.cancel')"
          :width="180"
        />
      </div>

      <button class="edit-btn"></button>
    </div>
    <div class="component-wrapper">
      <DxForm :form-data.sync="observation" label-location="top" ref="form">
        <DxGroupItem>
          <DxGroupItem :col-count="4">
            <DxSimpleItem type="dxNumberBox" data-field="Кассовый номер">
              <DxLabel
                :text="$t('newExamination.articul')"
                :show-colon="false"
              />
            </DxSimpleItem>
          </DxGroupItem>
          <DxEmptyItem />
          <DxGroupItem :col-count="2">
            <DxSimpleItem class="input" type="dxTextBox" data-field="Название">
              <DxLabel
                :text="$t('newExamination.examinationName')"
                :show-colon="false"
              />
            </DxSimpleItem>
          </DxGroupItem>
        </DxGroupItem>
        <DxGroupItem :col-count="2">
          <DxSimpleItem
            editor-type="dxSelectBox"
            :editor-options="blankOptions"
            data-field="blankType"
          >
            <DxLabel
              :text="$t('newExamination.blank')"
              :show-colon="false"
            ></DxLabel>
          </DxSimpleItem>
        </DxGroupItem>
        <DxEmptyItem />

        <DxGroupItem :col-count="4">
          <DxGroupItem>
            <DxSimpleItem
              class="input"
              type="dxTextBox"
              data-field="observationPrices[0].price"
            >
              <DxLabel
                :text="$t('newExamination.withoutInsurance')"
                :show-colon="false"
              />
            </DxSimpleItem>
          </DxGroupItem>
          <DxGroupItem>
            <DxSimpleItem
              class="input"
              type="dxTextBox"
              data-field="observationPrices[1].price"
            >
              <DxLabel
                :text="$t('newExamination.withInsurance')"
                :show-colon="false"
              />
            </DxSimpleItem>
          </DxGroupItem>
          <DxGroupItem>
            <DxSimpleItem
              class="input"
              type="dxTextBox"
              data-field="observationPrices[2].price"
            >
              <DxLabel
                :text="$t('newExamination.foreigner')"
                :show-colon="false"
              />
            </DxSimpleItem>
          </DxGroupItem>
          <DxGroupItem>
            <DxSimpleItem
              class="input"
              type="dxTextBox"
              data-field="observationPrices[3].price"
            >
              <DxLabel
                :text="$t('newExamination.diplomat')"
                :show-colon="false"
              />
            </DxSimpleItem>
          </DxGroupItem>
        </DxGroupItem>
      </DxForm>
    </div>
  </div>
</template>
<script lang="ts">
import Vue from "vue";
import DxButton from "devextreme-vue/button";
import {
  DxForm,
  DxSimpleItem,
  DxGroupItem,
  DxEmptyItem,
  DxLabel,
} from "devextreme-vue/form";
import { IObservation } from "~/infrastructure/interfaces/administration/IObservation";
import { BlankTypes } from "~/infrastructure/data-source/Blank-Types";
import { SelectBoxPropertiesWithLocalData } from "~/infrastructure/components-properties/SelectBox/SelectBoxPropertiesWithLocalData";
export default Vue.extend({
  components: {
    DxForm,
    DxGroupItem,
    DxSimpleItem,
    DxLabel,
    DxEmptyItem,
    DxButton,
  },
  data() {
    let observation: IObservation = this.currentObservation;
    return {
      readOnly: false,
      observation,
    };
  },
  props: {
    currentObservation: {
      type: Object,
      required: true,
    },
  },
  computed: {
    blankOptions() {
      return new SelectBoxPropertiesWithLocalData({
        dataSource: BlankTypes(this),
        readOnly: this.readOnly,
      });
    },
  },
  methods: {
    cancelCreate() {
      this.$router.go(-1);
    },
  },
});
</script>
<style lang="scss" scoped>
.examination-create-wrapper {
  .create-examination {
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
    width: 100%;
  }
  .payment-title {
    font-weight: $bold-weight;
  }
  .payment-info {
    display: flex;
    column-gap: 96px;
    justify-content: space-between;
    .payment {
      width: 100%;
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
  .cash-number {
    width: 20%;
  }
  .name {
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
}
</style>
