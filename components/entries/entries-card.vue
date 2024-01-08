<template>
  <div class="entries-card-wrapper">
    <div class="panel-items fix-header">
      <div class="btn-wrapper">
        <div class="entries-id">
          <!-- {{ entry.applicantNumber }}/{{ entry.applicationNumber }} -->
          Mk 000000 / 0000
        </div>
        <button @click="backHandler" class="back-btn panel-btn">
          {{ $t("entriesPage.cancel") }}
        </button>
      </div>
      <div>
        <div class="print-wrapper">
          <!-- <button
            v-if="permissionControler"
            @click="openPaymentPopup"
            class="paid-btn panel-btn"
          >
            {{ $t("entriesPage.pay") }}
          </button> -->
          <button class="print-btn panel-btn" />
        </div>
      </div>
    </div>
    <div class="component-wrapper">
      <DxForm
        :show-validation-summary="true"
        :show-colon-after-label="false"
        label-location="top"
      >
        <DxGroupItem>
          <DxSimpleItem data-field="asdf">
            <DxLabel text="ad" />
          </DxSimpleItem>
          <DxSimpleItem data-field="asdf">
            <DxLabel text="ad" />
          </DxSimpleItem>
          <DxSimpleItem data-field="asdf">
            <DxLabel text="ad" />
          </DxSimpleItem>
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
export default Vue.extend({
  components: { 
    DxForm,
    DxSimpleItem,
    DxGroupItem,
    DxEmptyItem,
    DxLabel,
    DxButton,
  },
  methods: {
    backHandler() {
      this.$router(-1);
    },
  },
});
</script>

<style lang="scss" scoped>
.entries-card-wrapper {
  .entries-id {
    padding: 12px 150px;
    border: none;
    border-radius: 10px;
    background-color: $custom-main-color;
    font-weight: $bold-weight;
    color: $red;
    cursor: pointer;
  }

  .panel-btn {
    font-family: $fontFamily;

    &:hover {
      background-color: $light-blue;
      color: $custom-main-color;
      transition: 0.3s ease-in-out;

      &:active {
        box-shadow: inset 0 2px 2px 0 #333;
        transition: 0.1s ease-out;
        -webkit-box-shadow: inset 1px 1px 8px #333;
        -moz-box-shadow: inset 1px 1px 8px #333;
        box-shadow: inset 1px 1px 8px #333;
      }
    }
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

  .entries-number {
    width: 20%;
  }

  .print-wrapper {
    display: flex;
    column-gap: 30px;
    align-items: center;
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
    flex-wrap: wrap;
  }

  .new-patient {
    font-weight: $bold-weight;
    padding: 12px 20px;
    border: none;
    border-radius: 10px;
    margin-left: 20px;
    cursor: pointer;
  }

  .add-diagnosis {
    padding: 12px 30px;
    margin-top: 20px;
    border: none;
    border-radius: 10px;
    font-weight: $bold-weight;
    white-space: nowrap;
    cursor: pointer;

    &:active {
      box-shadow: inset 0 2px 2px 0 #333;
      transition: 0.1s ease-out;
      -webkit-box-shadow: inset 1px 1px 8px #333;
      -moz-box-shadow: inset 1px 1px 8px #333;
      box-shadow: inset 1px 1px 8px #333;
    }
  }

  .add-btn {
    padding: 12px 42px;
    border: none;
    border-radius: 10px;
    background-color: $input-bg-color;
    font-weight: $bold-weight;
    margin-top: 10px;
    cursor: pointer;

    &:active {
      box-shadow: inset 0 2px 2px 0 #333;
      transition: 0.1s ease-out;
      -webkit-box-shadow: inset 1px 1px 8px #333;
      -moz-box-shadow: inset 1px 1px 8px #333;
      box-shadow: inset 1px 1px 8px #333;
    }
  }
}

.payment-radio-input {
  display: flex;
  column-gap: 30px;
  margin-bottom: 20px;
}

.payment-item {
  display: flex;
  column-gap: 10px;

  label {
    font-weight: $bold-weight;
    cursor: pointer;
  }
}

.payment-checkbox-input {
  display: flex;
  justify-content: space-between;
  margin: 20px 0;
}

.sum-wrapper {
  margin-top: 20px;
}

.sum-item {
  display: flex;
  justify-content: space-between;
}

.payment-btn-wrapper {
  display: flex;
  justify-content: center;
  column-gap: 40px;
  margin-top: 2.3rem;

  button {
    padding: 0.9rem 3rem;
    border: none;
    border-radius: 10px;
    font-weight: $bold-weight;
    cursor: pointer;
  }
}

.space-block {
  height: 100px;
}

.diagnosis-item {
  display: flex;
  flex-direction: column;
  row-gap: 10px;
}

.diagnosis-btn-wrapper {
  display: flex;
  justify-content: center;
  column-gap: 40px;
  margin-top: 2.3rem;

  button {
    padding: 0.9rem 3rem;
    border: none;
    border-radius: 10px;
    font-weight: $bold-weight;
    cursor: pointer;
  }
}

@media all and (max-width: 870px) {
  .entries-id {
    padding: 14px 80px;
  }
}

@media all and (max-width: 645px) {
  .panel-items {
    row-gap: 10px;
  }
}

@media all and (max-width: 630px) {
  .entries-id {
    display: none;
  }

  .save-btn {
    padding: 14px 28px;
  }
}
</style>
