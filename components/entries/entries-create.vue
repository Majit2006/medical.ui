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
            <DxEmptyItem />
            <DxSimpleItem template="add-polyclinic" />
            <DxEmptyItem />
          </DxGroupItem>

          <DxSimpleItem template="data-grid" />
          <DxEmptyItem />
          <DxSimpleItem template="horizont-line" />
          <DxEmptyItem />
        </DxGroupItem>
        <DxGroupItem>
          <DxGroupItem :col-count="2">
            <DxSimpleItem data-field="asdf">
              <DxLabel :text="$t('entriesPage.patientName')" />
            </DxSimpleItem>
          </DxGroupItem>
          <DxEmptyItem />
          <DxGroupItem :col-count="3">
            <DxSimpleItem data-field="asdf">
              <DxLabel :text="$t('entriesPage.sum')" />
            </DxSimpleItem>
          </DxGroupItem>
          <DxEmptyItem />
          <DxGroupItem>
            <DxSimpleItem data-field="asdf">
              <DxLabel :text="$t('entriesPage.note')" />
            </DxSimpleItem>
          </DxGroupItem>
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
            <DxColumn data-field="id" :width="50" />
            <DxColumn
              data-field="cabinet"
              :width="200"
              :caption="$t('entriesPage.cabinet')"
              alignment="center"
            />
            <DxColumn
              data-field="userId"
              :width="250"
              :caption="$t('entriesPage.employee')"
              alignment="center"
            />
            <DxColumn
              data-field="userId"
              :width="120"
              :caption="$t('entriesPage.date')"
              alignment="center"
            />
            <DxColumn
              data-field="userId"
              :width="120"
              :caption="$t('entriesPage.time')"
              alignment="center"
            />
            <DxColumn
              data-field="userId"
              :width="120"
              :caption="$t('entriesPage.time')"
              alignment="center"
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
        <template #add-polyclinic>
          <button class="polyclinic-list-btn">
            {{ $t("entriesPage.additionalPayment") }}
          </button>
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
.component-wrapper {
  row-gap: 40px;
}

.new-entries {
  padding: 12px 150px;
  border: none;
  border-radius: 10px;
  background-color: $custom-main-color;
  font-weight: $bold-weight;
  cursor: pointer;
}

.create-new-patient {
  padding: 12px 150px;
  border: none;
  border-radius: 10px;
  background-color: $custom-main-color;
  font-weight: $bold-weight;
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

.btn-wrapper {
  display: flex;
  column-gap: 10px;
  margin-bottom: 10px;
}

.note {
  height: 200px !important;
}
.panel-items {
  display: flex;
  justify-content: space-between;
  flex-wrap: wrap;
}

.card-number-wrapper {
  display: flex;
  align-items: center;
  column-gap: 32px;
}

.polyclinic-list-btn {
  padding: 12px 30px;
  border: none;
  border-radius: 10px;
  background-color: $input-bg-color;
  font-weight: $bold-weight;
  cursor: pointer;

  &:active {
    box-shadow: inset 0 2px 2px 0 #333;
    transition: 0.1s ease-out;
    -webkit-box-shadow: inset 1px 1px 8px #333;
    -moz-box-shadow: inset 1px 1px 8px #333;
    box-shadow: inset 1px 1px 8px #333;
  }
}

.add-note-btn {
  padding: 12px 30px;
  border: none;
  border-radius: 10px;
  font-weight: $bold-weight;
  cursor: pointer;

  &:active {
    box-shadow: inset 0 2px 2px 0 #333;
    transition: 0.1s ease-out;
    -webkit-box-shadow: inset 1px 1px 8px #333;
    -moz-box-shadow: inset 1px 1px 8px #333;
    box-shadow: inset 1px 1px 8px #333;
  }
}

.polyclinic-btn-wrapper {
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
  .create-new-patient {
    padding: 12px 50px;
  }

  .save-btn {
    padding: 14px 30px;
  }
}

@media all and (max-width: 730px) {
  .create-new-patient {
    display: none;
  }
}
</style>
