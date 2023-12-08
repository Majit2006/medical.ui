<template>
  <div class="employee-card-wrapper">
    <div class="panel-items">
      <div class="btn-wrapper">
        <button class="users-id">{{ $route.params.id }}</button>
        <div v-if="toogleButtons" class="hidden-buttons">
          <button @click="saveUser" class="save-btn panel-btn">
            {{ $t("employeePage.save") }}
          </button>
        </div>
        <button @click="cancelCreate" v-else class="back-btn panel-btn">
          {{ $t("employeePage.cancel") }}
        </button>
      </div>
      <button @click="editHandler" class="edit-btn panel-btn" />
    </div>
    <div class="component-wrapper">
      <div class="images-upload">
        <div
          id="dropzone-external"
          class="flex-box"
          :class="[
            isDropZoneActive
              ? 'dx-theme-accent-as-border-color dropzone-active'
              : 'dx-theme-border-color',
          ]"
        >
          <img id="dropzone-image" :src="imageSource" v-if="imageSource" />
        </div>
        <DxFileUploader
          id="file-uploader"
          dialog-trigger="#dropzone-external"
          drop-zone="#dropzone-external"
          :multiple="false"
          :allowed-file-extensions="allowedFileExtensions"
          upload-mode="instantly"
          upload-url="https://js.devexpress.com/Demos/NetCore/FileUploader/Upload"
          :visible="false"
          @drop-zone-enter="onDropZoneEnter"
          @drop-zone-leave="onDropZoneLeave"
          @uploaded="onUploaded"
          @progress="onProgress"
          @upload-started="onUploadStarted"
        />
      </div>
      <DxForm
        ref="form"
        :form-data.sync="user"
        :show-colon-after-label="false"
        validation-group="customerData"
        label-location="top"
      >
        <DxGroupItem :col-count="2">
          <DxGroupItem :col-count="1">
            <DxSimpleItem data-field="lastNamre">
              <DxLabel
                :text="$t('employeePage.lastName')"
                :show-colon="false"
              />
            </DxSimpleItem>
            <DxSimpleItem data-field="firstName">
              <DxLabel
                :text="$t('employeePage.firstName')"
                :show-colon="false"
              />
            </DxSimpleItem>
            <DxSimpleItem data-field="midelName">
              <DxLabel :text="$t('employeePage.surname')" :show-colon="false" />
            </DxSimpleItem>
            <DxSimpleItem data-field="phone">
              <DxLabel
                :text="$t('employeePage.phoneNumber')"
                :show-colon="false"
              />
            </DxSimpleItem>
          </DxGroupItem>
          <DxGroupItem :col-count="1">
            <DxGroupItem :col-count="2">
              <DxSimpleItem
                data-field="workingDays[6].day"
                editor-type="dxDateBox"
              >
                <DxLabel
                  :text="$t('employeePage.monday')"
                  :show-colon="false"
                />
              </DxSimpleItem>
              <DxSimpleItem
                data-field="workingDays[6].day"
                editor-type="dxDateBox"
              >
                <DxLabel text="WorkingDays" :show-colon="false" />
              </DxSimpleItem>
              <DxSimpleItem
                data-field="workingDays[6].day"
                editor-type="dxDateBox"
              >
                <DxLabel
                  :text="$t('employeePage.thursday')"
                  :show-colon="false"
                />
              </DxSimpleItem>
              <DxSimpleItem
                data-field="workingDays[6].day"
                editor-type="dxDateBox"
              >
                <DxLabel text="WorkingDays" :show-colon="false" />
              </DxSimpleItem>
              <DxSimpleItem
                data-field="workingDays[6].day"
                editor-type="dxDateBox"
              >
                <DxLabel text="WorkingDays" :show-colon="false" />
              </DxSimpleItem>
              <DxSimpleItem
                data-field="workingDays[6].day"
                editor-type="dxDateBox"
              >
                <DxLabel text="WorkingDays" :show-colon="false" />
              </DxSimpleItem>
              <DxSimpleItem
                data-field="workingDays[6].day"
                editor-type="dxDateBox"
              >
                <DxLabel text="WorkingDays" :show-colon="false" />
              </DxSimpleItem>
              <DxSimpleItem
                data-field="workingDays[6].day"
                editor-type="dxDateBox"
              >
                <DxLabel text="WorkingDays" :show-colon="false" />
              </DxSimpleItem>
            </DxGroupItem>
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
import DxButton from "devextreme-vue/button";
import { DxFileUploader } from "devextreme-vue/file-uploader";
import { DxProgressBar } from "devextreme-vue/progress-bar";
import { IUser } from "~/infrastructure/interfaces/administration/IUser";
import DxForm, {
  DxSimpleItem,
  DxGroupItem,
  DxEmptyItem,
  DxButtonItem,
  DxLabel,
  DxRequiredRule,
} from "devextreme-vue/form";
export default Vue.extend({
  components: {
    DxForm,
    DxSimpleItem,
    DxGroupItem,
    DxEmptyItem,
    DxButtonItem,
    DxLabel,
    DxRequiredRule,
    DxButton,
    DxFileUploader,
    DxProgressBar,
  },
  data() {
    let user: IUser = this.currentUser;
    return {
      user,
      isDropZoneActive: false,
      imageSource: "",
      progressValue: 0,
      allowedFileExtensions: [".jpg", ".jpeg", ".gif", ".png"],
      files: [],
      textVisible: true,
      readOnly: true,
    };
  },
  props: {
    currentUser: {
      type: Object,
      required: true,
    },
  },
  computed: {
    toogleButtons(): boolean {
      return this.readOnly === true ? false : true;
    },
  },
  methods: {
    onDropZoneEnter(e) {
      if (e.dropZoneElement.id === "dropzone-external") {
        this.isDropZoneActive = true;
      }
    },
    onDropZoneLeave(e) {
      if (e.dropZoneElement.id === "dropzone-external") {
        this.isDropZoneActive = false;
      }
    },
    onUploaded(e) {
      const { file } = e;
      const fileReader = new FileReader();
      fileReader.onload = () => {
        this.isDropZoneActive = false;
        this.imageSource = fileReader.result;
      };
      fileReader.readAsDataURL(file);
      this.textVisible = false;
      this.progressVisible = false;
      this.progressValue = 0;
    },
    onProgress(e) {
      this.progressValue = (e.bytesLoaded / e.bytesTotal) * 100;
    },
    onUploadStarted() {
      this.imageSource = "";
      this.progressVisible = true;
    },
    saveUser() {
      let result = (this as any).$refs["form"].instance.validate();
      if (result.isValid) {
        (this as any).$awn.asyncBlock(
          this.$axios.put(`${this.$dataApi.users}/${this.user.id}`, this.user),
          (e: any) => {
            (this as any).$awn.success();
            // this.$emit("successedSaved", e.data);
            this.$router.go(-1);
          },
          (e: any) => {
            (this as any).$awn.alert();
          }
        );
      }
    },
    editHandler() {
      this.readOnly = !this.readOnly;
    },
    cancelCreate() {
      this.$router.go(-1);
    },
  },
});
</script>

<style lang="scss" scoped>
.users-id {
  padding: 12px 180px;
  border: none;
  border-radius: 10px;
  background-color: $custom-main-color;
  font-weight: $bold-weight;
  color: $red;
}

.hidden-buttons {
  display: flex;
  column-gap: 10px;
}

.panel-btn {
  margin-bottom: 10px;
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
  align-items: center;
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

#dropzone-external {
  width: 230px;
  height: 230px;
  border-radius: 10px;
  background-color: $input-bg-color;
  border: none;
  padding: 10px;
}

#dropzone-external > * {
  pointer-events: none;
}

#dropzone-external.dropzone-active {
  border-style: solid;
}

.widget-container > span {
  font-size: 22px;
  font-weight: bold;
  margin-bottom: 16px;
}

#dropzone-image {
  max-width: 100%;
  max-height: 100%;
}

#dropzone-text > span {
  font-weight: 100;
  opacity: 0.5;
}

#upload-progress {
  display: flex;
  margin-top: 10px;
}

.flex-box {
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  text-align: center;
}
</style>
