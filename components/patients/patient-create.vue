<template>
  <div class="patient-create-wrapper">
    <div class="panel-items">
      <DxButton
        :text="$t('patientPage.newPatient')"
        :width="320"
        class="create-patient"
      />
      <DxButton :text="$t('patientPage.save')" :width="150" class="btn-save" />
      <DxButton
        @click="cancelCreate"
        :text="$t('patientPage.cancel')"
        :width="120"
        class="btn-cancel"
      />
    </div>
    <div class="component-wrapper">
      <DxForm label-location="top" ref="form">
        <DxGroupItem :col-count="3">
          <DxSimpleItem data-field="applicantNumber">
            <DxLabel
              :text="$t('patientPage.medicalCardNumber')"
              :show-colon="false"
            />
          </DxSimpleItem>
        </DxGroupItem>
        <DxEmptyItem />
        <DxGroupItem :col-count="1">
          <DxGroupItem :col-count="2">
            <DxSimpleItem data-field="lastName">
              <DxLabel :text="$t('patientPage.lastName')" :show-colon="false" />
            </DxSimpleItem>
          </DxGroupItem>
          <DxGroupItem :col-count="2">
            <DxSimpleItem data-field="firstName">
              <DxLabel
                :text="$t('patientPage.firstName')"
                :show-colon="false"
              />
            </DxSimpleItem>
          </DxGroupItem>
          <DxGroupItem :col-count="2">
            <DxSimpleItem data-field="middleName">
              <DxLabel :text="$t('patientPage.surname')" :show-colon="false" />
            </DxSimpleItem>
          </DxGroupItem>
        </DxGroupItem>
        <DxEmptyItem />
        <DxGroupItem :col-count="3">
          <DxSimpleItem
            data-field="sex"
            editor-type="dxSelectBox"
            :editor-options="genderOptions"
          >
            <DxLabel :text="$t('patientPage.gender')" :show-colon="false" />
          </DxSimpleItem>
          <DxSimpleItem
            data-field="dateOfBirth"
            data-type="date"
            editor-type="dxDateBox"
            :editor-options="dateBoxOptions"
          >
            <DxLabel :text="$t('patientPage.birthday')" :show-colon="false" />
          </DxSimpleItem>
          <DxSimpleItem data-field="passportNumber">
            <DxLabel
              :text="$t('patientPage.passportNumber')"
              :show-colon="false"
            />
          </DxSimpleItem>
        </DxGroupItem>

        <DxEmptyItem />
        <DxGroupItem :col-count="3">
          <DxSimpleItem data-field="" editor-type="dxSelectBox">
            <DxLabel
              :text="$t('patientPage.citizenStatus')"
              :show-colon="false"
            />
          </DxSimpleItem>
          <DxSimpleItem data-field="phone1">
            <DxLabel
              :text="$t('patientPage.phoneNumber')"
              :show-colon="false"
            />
          </DxSimpleItem>
          <DxSimpleItem data-field="phone2">
            <DxLabel
              :text="$t('patientPage.secondPhoneNumber')"
              :show-colon="false"
            />
          </DxSimpleItem>
          <!-- <DxSimpleItem data-field="patientPage.surname">
            <DxLabel :text="$t('patientPage.surname')" :show-colon="false" />
          </DxSimpleItem> -->
        </DxGroupItem>
        <DxEmptyItem />
        <DxSimpleItem template="horizont-line" />
        <DxEmptyItem />

        <DxGroupItem :col-count="2">
          <DxSimpleItem data-field="" editor-type="dxSelectBox">
            <DxLabel :text="$t('patientPage.polyclinic')" :show-colon="false" />
          </DxSimpleItem>
        </DxGroupItem>
        <DxEmptyItem />
        <DxSimpleItem template="horizont-line" />
        <DxGroupItem :col-count="2">
          <DxSimpleItem data-field="" editor-type="dxSelectBox" >
            <DxLabel :show-colon="false" :text="$t('patientPage.group')" />
          </DxSimpleItem>
          <DxEmptyItem />
          <DxGroupItem :col-count="1">
            <DxSimpleItem data-field="" css-class="note-height">
              <DxLabel :show-colon="false" :text="$t('patientPage.note')" />
            </DxSimpleItem>
          </DxGroupItem>
        </DxGroupItem>
        <DxSimpleItem template="horizont-line" />
        <DxGroupItem>
          <DxGroupItem :col-count="3">
            <DxSimpleItem data-field="">
              <DxLabel :show-colon="false" :text="$t('patientPage.region')" />
            </DxSimpleItem>
            <DxSimpleItem data-field="">
              <DxLabel :show-colon="false" :text="$t('patientPage.city')" />
            </DxSimpleItem>
            <DxSimpleItem data-field="">
              <DxLabel :show-colon="false" :text="$t('patientPage.area')" />
            </DxSimpleItem>
          </DxGroupItem>
          <DxEmptyItem/>
          <DxGroupItem :col-count="3">
            <DxSimpleItem data-field="">
              <DxLabel :show-colon="false" :text="$t('patientPage.street')" />
            </DxSimpleItem>
            <DxSimpleItem data-field="">
              <DxLabel :show-colon="false" :text="$t('patientPage.house')" />
            </DxSimpleItem>
            <DxSimpleItem data-field="">
              <DxLabel :show-colon="false" :text="$t('patientPage.apartment')" />
            </DxSimpleItem>
          </DxGroupItem>
        </DxGroupItem>
        <template #horizont-line>
          <div class="horizont-line" />
        </template>
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
  DxItem,
} from "devextreme-vue/form";
import { DxSearchPanel } from "devextreme-vue/data-grid";
import DxButton from "devextreme-vue/button";
import { Patient } from "~/infrastructure/classes/administration/Patient";
import { IPatient } from "~/infrastructure/interfaces/administration/IPaitent";
import { Genders } from "~/infrastructure/data-source/Genders";
import { SelectBoxPropertiesWithDataSource } from "~/infrastructure/components-properties/SelectBox/SelectBoxPropertiesWithDataSource";
import { SelectBoxPropertiesWithLocalData } from "~/infrastructure/components-properties/SelectBox/SelectBoxPropertiesWithLocalData";
import { DateBoxProperties } from "~/infrastructure/components-properties/DateBoxProperties";
export default Vue.extend({
  data() {
    let patient: IPatient = new Patient();
    return {
      patient,
      buttonOptions: {
        text: "Do Something",
        type: "success",
        onClick: function () {
          // Handle the button click here
        },
      },
    };
  },
  components: {
    DxButton,
    DxForm,
    DxGroupItem,
    DxSimpleItem,
    DxLabel,
    DxEmptyItem,
    DxSearchPanel,
    DxItem,
  },
  methods: {
    cancelCreate() {
      this.$router.go(-1);
    },
  },
  computed: {
    genderOptions() {
      return new SelectBoxPropertiesWithLocalData({
        dataSource: Genders(this),
        showClearButton: false,
      });
    },
    dateBoxOptions() {
      return new DateBoxProperties({});
    },
  },
});
</script>
<style lang="scss" scoped>
.component-wrapper {
  row-gap: 40px;
}
.create-patient {
  padding: 5px 5px;
  border: none;
  border-radius: 10px;
  background-color: $custom-main-color;
  font-weight: $bold-weight;
  cursor: pointer;
}
.note-height {
  height: 80px Important;
}
.save-btn,
.cancel-btn {
  padding: 5px 5px;
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
.cancel-btn {
  padding: 10px;
  margin-left: 10px;
}
.panel-items {
  display: flex;
  margin-bottom: 10px;
}
.patient-info {
  display: flex;
  flex-direction: column;
  row-gap: 20px;
}
.info-form-wrapper {
  div {
    margin-bottom: 10px;
  }
}
.input {
  width: 42%;
  height: 42px;
  background-color: $input-bg-color;
  border: none;
  border-radius: 10px;
  padding: 5px 12px;
}
.medical-card-wrapper {
  display: flex;
  flex-direction: column;
  row-gap: 10px;
}
.medical-card-number {
  width: 26%;
}
.gender-wrapper {
  display: flex;
  column-gap: 50px;
  div {
    display: flex;
    flex-direction: column;
    row-gap: 10px;
    width: 100%;
  }
  .choose-gender,
  .birthday,
  .passport-number {
    width: 100%;
  }
}
.insurance-wrapper {
  display: flex;
  column-gap: 50px;
  div {
    display: flex;
    flex-direction: column;
    row-gap: 10px;
    width: 100%;
    input {
      width: 100%;
    }
  }
}
.polyclinic-list-wrapper {
  p {
    margin-bottom: 10px;
  }
  .choose-polyclinic {
    display: flex;
    column-gap: 20px;
  }
  .polyclinic-list-btn {
    padding: 12px 30px;
    border: none;
    border-radius: 10px;
    background-color: $input-bg-color;
    font-weight: $bold-weight;
  }
}
.group-wrapper {
  display: flex;
  flex-direction: column;
  row-gap: 10px;

  textarea {
    width: 100%;
    padding: 10px 16px;
    min-height: 180px;
    resize: none;
    margin-top: 20px;
  }
}

.region-wrapper {
  display: flex;
  column-gap: 50px;
  div {
    display: flex;
    flex-direction: column;
    row-gap: 10px;
    width: 100%;
  }
  .region,
  .city,
  .area {
    width: 100%;
  }
}
.address-wrapper {
  display: flex;
  column-gap: 50px;
  div {
    display: flex;
    flex-direction: column;
    row-gap: 10px;
    width: 100%;
    input {
      width: 100%;
    }
  }
}
.note-wrapper {
  display: flex;
  flex-direction: column;
  row-gap: 20px;
  textarea {
    width: 100%;
    padding: 10px 16px;
    min-height: 180px;
    resize: none;
  }
  .add-note {
    padding: 12px 30px;
    border: none;
    border-radius: 10px;
    font-weight: $bold-weight;
    cursor: pointer;
  }
}
.active-checkbox-wrapper {
  display: flex;
  column-gap: 20px;
  div {
    display: flex;
    column-gap: 10px;
    input {
      cursor: pointer;
    }
  }
}
</style>
