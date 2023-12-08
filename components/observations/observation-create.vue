<template>
  <div class="observation-create-wrapper">
    <div class="panel-items">
      <DxButton
        :width="320"
        :text="$t('newExamination.newExamination')"
        type="normal"
        class="create-observation"
      />
      <DxButton
        :width="150"
        :text="$t('newExamination.save')"
        type="normal"
        class="btn-save"
        @click="SaveData"
      />
      <DxButton
        :width="150"
        :text="$t('newExamination.cancel')"
        type="normal"
        styling-mode="outlined"
        class="cancel-btn"
        @click="cancel"
      />
    </div>
    <div class="component-wrapper">
      <DxForm label-location="top" ref="form">
        <!-- :form-data.sync="observation" -->
        <DxGroupItem>
          <DxGroupItem :col-count="4">
            <DxSimpleItem type="dxNumberBox" data-field="cashNumber ">
              <DxLabel
                :text="$t('newExamination.cashNumber')"
                :show-colon="false"
              />
            </DxSimpleItem>
          </DxGroupItem>
          <DxEmptyItem />
          <DxGroupItem :col-count="2">
            <DxSimpleItem class="input" type="dxTextBox" data-field="name">
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
import {
  DxForm,
  DxSimpleItem,
  DxGroupItem,
  DxEmptyItem,
  DxLabel,
} from "devextreme-vue/form";
import { Observation } from "~/infrastructure/classes/administration/Observation";
import { IObservation } from "~/infrastructure/interfaces/administration/IObservation";
import { BlankTypes } from "~/infrastructure/data-source/Blank-Types";
import { SelectBoxPropertiesWithLocalData } from "~/infrastructure/components-properties/SelectBox/SelectBoxPropertiesWithLocalData";
import DxButton from "devextreme-vue/button";
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
    let observation: IObservation = new Observation();
    return {
      observation,
    };
  },
  computed: {
    blankOptions() {
      return new SelectBoxPropertiesWithLocalData({
        dataSource: BlankTypes(this),
        showClearButton: false,
        readOnly: this.readOnly,
      });
    },
  },
  methods: {
    SaveData() {
      console.log("Save Data");
    },
    cancel() {
      this.$router.go(-1);
    },
  },
});
</script>
<style lang="scss" scoped>
.observation-create-wrapper {
  .create-observation {
    padding: 5px 5px;
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

  .btn-wrapper {
    display: flex;
    column-gap: 10px;
  }
  .cancel-btn {
    margin-left: 10px;
  }

  .info-btn-wrapper {
    display: flex;
    column-gap: 30px;
  }
  .panel-items {
    display: flex;
    margin-bottom: 10px;
  }
}
</style>
~/infrastructure/enums/BlankTypes~/infrastructure/enums/BlankType
