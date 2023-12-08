<template>
  <div class="cabinet-card-wrapper">
    <div class="panel-items">
      <div>
        <DxButton
          @click="onSaveCabinet"
          :text="$route.params.id"
          width="400px"
        />
        <DxButton text="Назад" @click="backHandler" width="120px" />
      </div>
    </div>
    <div class="component-wrapper">
      <DxForm label-location="top" :form-data.sync="cabinet" ref="form">
        <DxGroupItem :col-count="2">
          <DxGroupItem :col-count="1">
            <DxGroupItem>
              <DxSimpleItem data-field="name" :editor-options="textBoxOptions">
                <DxLabel text="Название кабинета" :show-colon="false" />
              </DxSimpleItem>
            </DxGroupItem>
            <DxGroupItem>
              <DxSimpleItem
                data-field="phone"
                :editor-options="numberBoxOptions"
              >
                <DxLabel text="Номер телефона" :show-colon="false" />
              </DxSimpleItem>
            </DxGroupItem>
          </DxGroupItem>
        </DxGroupItem>

        <DxGroupItem :col-count="2">
          <DxGroupItem :col-count="2">
            <DxSimpleItem data-field="flat" :editor-options="numberBoxOptions">
              <DxLabel text="Этаж" :show-colon="false" />
            </DxSimpleItem>
            <DxSimpleItem
              data-field="number"
              :editor-options="numberBoxOptions"
            >
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
import DxButton from "devextreme-vue/button";
import { Cabinet } from "~/infrastructure/classes/Cabinet";
import { ICabinet } from "~/infrastructure/interfaces/administration/ICabinet";

export default Vue.extend({
  data() {
    let cabinet: ICabinet = this.currentCabinet;
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
    DxButton,
  },
  computed: {
    numberBoxOptions() {
      return {
        readOnly: this.readOnly,
      };
    },
    textBoxOptions() {
      return {
        readOnly: this.readOnly,
      };
    },
  },
  props: {
    currentCabinet: {
      type: Object,
      required: true,
    },
  },
  // mounted() {
  //   console.log("asdfasdf", this.currentCabinet);
  // },
  methods: {
    onSaveCabinet() {
      let result = this.$refs["form"].instance.validate();
      if (result.isValid) {
        this.$awn.asyncBlock(
          this.$axios.put(
            `${this.$dataApi.cabinets}/${this.formObj.id}`,
            this.formObj
          ),
          (e) => {
            this.$awn.success();
            this.$router.go(-1);
          },
          (e) => {
            this.$awn.alert();
          }
        );
      }
    },

    backHandler() {
      this.$router.go(-1);
    },
  },
});
</script>
<style lang="scss" scoped>
.cabinet-card-wrapper {
  .panel-items {
    display: flex;
    margin-bottom: 10px;
    justify-content: space-between;
  }
}
</style>
~/infrastructure/interfaces/administration/ICabinet
