<template>
  <div class="admin-bulletin-wrapper">
    <div class="panel-items">
      <div class="btn-wrapper">
        <button class="new-bulletin">
          {{ $t("bulletinPage.newBulletin") }}
        </button>
        <button @click="savebulletinData" class="save-btn">
          {{ $t("cabinetPage.save") }}
        </button>
        <button @click="cancelCreate" class="cancel-btn">
          {{ $t("cabinetPage.cancel") }}
        </button>
      </div>
    </div>
    <div class="component-wrapper">
      <DxForm label-location="top" ref="form">
        <!-- :form-data.sync=""  -->
        <DxGroupItem :col-count="2">
          <DxGroupItem :col-count="1">
            <DxSimpleItem data-field="afsdfs">
              <DxLabel
                :text="$t('bulletinPage.turkmenTitle')"
                :show-colon="false"
              />
            </DxSimpleItem>
            <DxEmptyItem />
            <DxSimpleItem data-field="afsdfs">
              <DxLabel
                :text="$t('bulletinPage.rusTitle')"
                :show-colon="false"
              />
            </DxSimpleItem>
          </DxGroupItem>
          <DxEmptyItem />
          <DxSimpleItem template="imageUpload" />
          <DxEmptyItem />
        </DxGroupItem>

        <template #imageUpload>
          <div class="photo-title-wrapper">
            <span>{{ $t("bulletinPage.titlePhoto") }}</span>
            <div>
              <input
                id="upload-photo"
                class="input"
                @change="editorImage"
                name="file"
                type="file"
                multiple
              />
              <label class="add-photo" for="upload-photo">
                {{ $t("bulletinPage.choose") }}
              </label>
            </div>
          </div>
        </template>
      </DxForm>
    </div>
  </div>
</template>
<script lang="ts">
import Vue from "vue";
import {
  DxHtmlEditor,
  DxToolbar,
  DxMediaResizing,
  DxImageUpload,
  DxItem,
} from "devextreme-vue/html-editor";
import { DxCheckBox } from "devextreme-vue/check-box";
import { DxSelectBox } from "devextreme-vue/select-box";
import {
  DxForm,
  DxSimpleItem,
  DxEmptyItem,
  DxGroupItem,
  DxLabel,
} from "devextreme-vue/form";
// import {}
export default Vue.extend({
  components: {
    DxForm,
    DxSimpleItem,
    DxGroupItem,
    DxEmptyItem,
    DxLabel,
    DxHtmlEditor,
    DxMediaResizing,
    DxToolbar,
    DxItem,
    DxImageUpload,
    DxCheckBox,
    DxSelectBox,
  },
  data() {
    return {
      sizeValues: ["8pt", "10pt", "12pt", "14pt", "18pt", "24pt", "36pt"],
      fontValues: [
        "Arial",
        "Courier New",
        "Georgia",
        "Impact",
        "Lucida Console",
        "Tahoma",
        "Times New Roman",
        "Verdana",
      ],
      headerValues: [false, 1, 2, 3, 4, 5],
      isMultiline: true,
    };
  },
  methods: {
    savebulletinData() {},
    cancelCreate() {
      this.$router.go(-1);
    },
    editorImage(e) {
      this.formData.image = e.target.files[0];
    },
  },
});
</script>
<style lang="scss" scoped>
.admin-bulletin-wrapper {
  .new-bulletin {
    padding: 12px 200px;
    border: none;
    border-radius: 10px;
    background-color: $custom-main-color;
    font-weight: $bold-weight;
    cursor: pointer;
  }
  .component-wrapper {
    display: flex;
    row-gap: 40px;
    padding: 30px 50px;
  }
  .info-form-wrapper {
    display: flex;
    flex-direction: column;
    row-gap: 10px;
  }
  .photo-title-wrapper {
    display: flex;
    column-gap: 40px;
  }
  #upload-photo {
    //    opacity: 0;
    //    position: absolute;
    //    z-index: -1;
    &::-webkit-file-upload-button {
      visibility: hidden;
    }
    &::before {
      content: "";
    }
  }
  .choose-file-btn {
    padding: 12px 46px;
  }
  .chaeckbox-wrapper {
    display: flex;
    flex-direction: row-reverse;
    justify-content: flex-end;
    column-gap: 12px;
  }
  .input {
    max-width: 100%;
    height: 42px;
    background-color: $input-bg-color;
    border: none;
    border-radius: 10px;
    padding: 5px 12px;
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

  .dx-htmleditor-content img {
    vertical-align: middle;
    padding-right: 10px;
  }

  .dx-htmleditor-content table {
    width: 50%;
  }

  .options {
    padding: 20px;
    background-color: rgba(191, 191, 191, 0.15);
    margin-top: 20px;
  }

  .caption {
    font-size: 18px;
    font-weight: 500;
  }

  .option {
    margin-top: 10px;
    display: inline-block;
    margin-right: 40px;
  }

  .option > .dx-selectbox,
  .option > .label {
    display: inline-block;
    vertical-align: middle;
  }

  .option > .label {
    margin-right: 10px;
  }
  .turkmen-text,
  .rus-text {
    display: block;
    margin-bottom: 10px;
  }
}
</style>
