<template>
  <div class="patient-card-wrapper">
    <div class="panel-items">
      <div class="btn-wrapper">
        <button class="padtient-id">MK000000</button>
        <button @click="backHandler" class="save-btn">Назад</button>
      </div>
      <div class="complaint-btn-wrapper">
        <button @click="showComplaints" class="complaint-btn">Жалобы</button>
        <button @click="showEntries" class="entries-btn">Записи</button>
        <button class="edit-btn" />
      </div>
    </div>
    <div class="component-wrapper">
      <DxForm label-location="top" ref="form">
        <!------------------- LastName, firstName, Surname ---------->
        <DxGroupItem :col-count="2">
          <DxGroupItem :col-count="1">
            <DxSimpleItem data-field="lastName">
              <DxLabel :text="$t('patientPage.lastName')" :show-colon="false" />
            </DxSimpleItem>
            <DxSimpleItem data-field="name">
              <DxLabel
                :text="$t('patientPage.firstName')"
                :show-colon="false"
              />
            </DxSimpleItem>
            <DxSimpleItem data-field="surname">
              <DxLabel :text="$t('patientPage.surname')" :show-colon="false" />
            </DxSimpleItem>
          </DxGroupItem>
        </DxGroupItem>
        <DxEmptyItem />
        <!------------------- Gender, Birthday, PassportNumber,SecondPhoneNumber,CitizenStatus-------->
        <DxGroupItem>
          <DxGroupItem :col-count="3">
            <DxGroupItem>
              <DxSimpleItem data-field="sex" editor-type="dxSelectBox">
                <DxLabel :text="$t('patientPage.gender')" :show-colon="false" />
              </DxSimpleItem>
            </DxGroupItem>
            <DxSimpleItem
              data-field="dateOfBirth"
              data-type="date"
              editor-type="dxDateBox"
            >
              <DxLabel :text="$t('patientPage.birthday')" :show-colon="false" />
            </DxSimpleItem>
            <DxSimpleItem data-field="PassportNumber">
              <DxLabel
                :text="$t('patientPage.passportNumber')"
                :show-colon="false"
              />
            </DxSimpleItem>
          </DxGroupItem>
          <DxEmptyItem />
          <DxGroupItem :col-count="3">
            <DxSimpleItem data-field="">
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
          </DxGroupItem>
        </DxGroupItem>
        <DxEmptyItem />
        <DxSimpleItem template="horizont-line" />
        <!------------Polyclinic------------->
        <DxEmptyItem />
        <DxGroupItem :col-count="2">
          <DxSimpleItem data-field="" editor-type="dxSelectBox">
            <DxLabel :text="$t('patientPage.polyclinic')" :show-colon="false" />
          </DxSimpleItem>
        </DxGroupItem>
        <DxEmptyItem />
        <DxSimpleItem template="horizont-line" />
        <DxEmptyItem />
        <!-------------------- Group, Note ----------------->
        <DxGroupItem :col-count="2">
          <DxGroupItem>
            <DxSimpleItem
              data-field="applicatGroupId"
              editor-type="dxSelectBox"
            >
              <DxLabel :show-colon="false" :text="$t('patientPage.group')" />
            </DxSimpleItem>
            <DxEmptyItem />
            <DxSimpleItem data-field="" css-class="note-height">
              <DxLabel :show-colon="false" :text="$t('patientPage.note')" />
            </DxSimpleItem>
          </DxGroupItem>
        </DxGroupItem>
        <!------------------ Region, City, Area, House, Street, Apartment, -------------------------->
        <!-- <DxGroupItem>
          <DxSimpleItem data-field="">
            <DxLabel :text="$t('patientPage.region')" />
          </DxSimpleItem>
        </DxGroupItem> -->
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
export default Vue.extend({
  components: {
    DxForm,
    DxSimpleItem,
    DxGroupItem,
    DxEmptyItem,
    DxLabel,
    DxItem,
  },
  methods: {
    backHandler() {
      this.$router.go(-1);
    },
    showComplaints(e: string) {
      this.$router.push(`/patients/complaint`);
    },
    showEntries(e: string) {
      this.$router.push(`/patients/entries`);
    },
  },
});
</script>
<style lang="scss" scoped>
.component-wrapper {
  row-gap: 40px;
}
.padtient-id {
  color: red;
  padding: 12px 150px;
  border: none;
  border-radius: 10px;
  background-color: $custom-main-color;
  font-weight: $bold-weight;
  cursor: pointer;
}
.complaint-btn-wrapper {
  display: flex;
  column-gap: 10px;
}
.entries-btn,
.complaint-btn,
.save-btn {
  padding: 12px 40px;
  border: none;
  border-radius: 10px;
  background-color: $custom-main-color;
  font-weight: $bold-weight;
  cursor: pointer;
}
.edit-btn {
  margin-left: 20px;
}
.btn-wrapper {
  display: flex;
  column-gap: 10px;
}
.panel-items {
  display: flex;
  justify-content: space-between;
  align-items: center;
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
  .group-select-box {
    width: 31%;
    height: 42px;
    background-color: $input-bg-color;
    border: none;
    border-radius: 10px;
    padding: 5px 12px;
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
