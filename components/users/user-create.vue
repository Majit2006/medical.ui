<template>
  <div class="users-create-wrapper">
    <div class="panel-items">
      <DxButton
        :text="$t('employeePage.newEmployee')"
        class="btn-users"
        type="default"
      />
      <DxButton
        :text="$t('employeePage.save')"
        class="btn-save"
        type="default"
        @click="saveUserData"
      />
      <DxButton
        :text="$t('employeePage.cancel')"
        class="btn-cancel"
        type="default"
        @click="cancelCreate"
      />
    </div>
    <div class="component-wrapper">
      <div class="widget-container">
        <div
          id="dropzone-external"
          class="flex-box"
          :class="[
            isDropZoneActive
              ? 'dx-theme-accent-as-border-color dropzone-active'
              : 'dx-theme-border-color',
          ]"
        >
          <img
            id="dropzone-image"
            :src="imageSource"
            v-if="imageSource"
            alt=""
          />
          <div
            id="dropzone-text"
            class="flex-box justify-content-center"
            v-if="textVisible"
          >
            <span>{{ $t("employeePage.fileUploader") }}</span>
          </div>
        </div>

        <DxFileUploader
          id="file-uploader"
          name="image"
          :value.sync="files"
          dialog-trigger="#dropzone-external"
          drop-zone="#dropzone-external"
          :multiple="false"
          :allowed-file-extensions="allowedFileExtensions"
          upload-mode="instantly"
          :upload-headers="uploaderHeaders"
          :upload-url="url"
          :visible="false"
          @drop-zone-enter="onDropZoneEnter"
          @drop-zone-leave="onDropZoneLeave"
          @uploaded="onUploaded"
          @progress="onProgress"
          @upload-started="onUploadStarted"
        />
      </div>

      <DxForm :form-data.sync="user" label-location="top">
        <DxGroupItem :col-count="2">
          <DxGroupItem :col-count="1">
            <DxSimpleItem data-field="lastNamre">
              <DxLabel
                :text="$t('employeePage.lastName')"
                :show-colon="false"
              />
            </DxSimpleItem>
            <DxSimpleItem data-field="userName">
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
                :editor-options="sundaystartDateOptions"
              >
                <DxLabel
                  :text="$t('employeePage.monday')"
                  :show-colon="false"
                />
              </DxSimpleItem>
              <DxSimpleItem
                data-field="workingDays[6].day"
                editor-type="dxDateBox"
                :editor-options="sundaystartDateOptions"
              >
                <DxLabel text="WorkingDays" :show-colon="false" />
              </DxSimpleItem>
              <DxSimpleItem
                data-field="workingDays[6].day"
                editor-type="dxDateBox"
                :editor-options="sundaystartDateOptions"
              >
                <DxLabel
                  :text="$t('employeePage.thursday')"
                  :show-colon="false"
                />
              </DxSimpleItem>
              <DxSimpleItem
                data-field="workingDays[6].day"
                editor-type="dxDateBox"
                :editor-options="sundaystartDateOptions"
              >
                <DxLabel text="WorkingDays" :show-colon="false" />
              </DxSimpleItem>
              <DxSimpleItem
                data-field="workingDays[6].day"
                editor-type="dxDateBox"
                :editor-options="sundaystartDateOptions"
              >
                <DxLabel text="WorkingDays" :show-colon="false" />
              </DxSimpleItem>
              <DxSimpleItem
                data-field="workingDays[6].day"
                editor-type="dxDateBox"
                :editor-options="sundaystartDateOptions"
              >
                <DxLabel text="WorkingDays" :show-colon="false" />
              </DxSimpleItem>
              <DxSimpleItem
                data-field="workingDays[6].day"
                editor-type="dxDateBox"
                :editor-options="sundaystartDateOptions"
              >
                <DxLabel text="WorkingDays" :show-colon="false" />
              </DxSimpleItem>
              <DxSimpleItem
                data-field="workingDays[6].day"
                editor-type="dxDateBox"
                :editor-options="sundaystartDateOptions"
              >
                <DxLabel text="WorkingDays" :show-colon="false" />
              </DxSimpleItem>
            </DxGroupItem>
          </DxGroupItem>
        </DxGroupItem>

        <DxEmptyItem />
        <DxSimpleItem template="horizont-line" />
        <DxEmptyItem />

        <DxGroupItem :col-count="2">
          <DxSimpleItem data-field="password" :editor-options="passwordOptions">
            <DxLabel :show-colon="false" :text="$t('employeePage.password')" />
          </DxSimpleItem>
          <DxSimpleItem
            name="ConfirmPassword"
            data-field="confirmPassword"
            :editor-options="confirmPasswordOptions"
          >
            <DxCompareRule
              :comparison-target="passwordComparison"
              :message="$t('employeePage.noMatch')"
            />
            <DxLabel
              :show-colon="false"
              :text="$t('employeePage.confirmPassword')"
            />
          </DxSimpleItem>
        </DxGroupItem>
        <DxEmptyItem />
        <DxSimpleItem template="horizont-line" />
        <DxEmptyItem />
        <DxGroupItem :col-count="2">
          <DxSimpleItem
            data-field="cabinetId"
            data-type="string"
            editor-type="dxSelectBox"
            :editor-options="cabinetOptions"
          >
            <DxLabel :show-colon="false" :text="$t('employeePage.cabinet')" />
          </DxSimpleItem>
          <DxSimpleItem
            data-field="jobPositionId"
            data-type="string"
            editor-type="dxSelectBox"
            :editor-options="jobTitleOptions"
          >
            <DxLabel :show-colon="false" :text="$t('employeePage.jobTitle')" />
          </DxSimpleItem>
        </DxGroupItem>
        <DxEmptyItem />
        <DxSimpleItem template="horizont-line" />
        <DxGroupItem>
          <DxSimpleItem
            data-field="roleId"
            editor-type="dxSelectBox"
            :editor-options="accessGroupOptions"
          >
            <DxLabel
              :show-colon="false"
              :text="$t('employeePage.toleranceGroup')"
            />
          </DxSimpleItem>
        </DxGroupItem>
        <DxEmptyItem />

        <template #workingDaysText>
          <span>{{ $t("employeePage.workingDays") }}</span>
        </template>
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
  DxEmptyItem,
  DxGroupItem,
  DxCompareRule,
  DxLabel,
} from "devextreme-vue/form";
import Validator from "devextreme/ui/validator";
import { DxCheckBox } from "devextreme-vue/check-box";
import { DxFileUploader } from "devextreme-vue/file-uploader";
import { DxProgressBar } from "devextreme-vue/progress-bar";
import DxButton from "devextreme-vue/button";
import DxDateBox from "devextreme-vue/date-box";
import { User } from "~/infrastructure/classes/User";
import { IUser } from "~/infrastructure/interfaces/administration/IUser";
import { SelectBoxPropertiesWithDataSource } from "~/infrastructure/components-properties/SelectBox/SelectBoxPropertiesWithDataSource";
import { DateBoxProperties } from "~/infrastructure/components-properties/DateBoxProperties";
export default Vue.extend({
  components: {
    DxForm,
    DxButton,
    DxSimpleItem,
    DxGroupItem,
    DxEmptyItem,
    DxLabel,
    DxCompareRule,
    DxCheckBox,
    DxFileUploader,
    DxProgressBar,
    DxDateBox,
    Validator,
  },
  data() {
    let user: IUser = new User();
    return {
      user,
      value: new Date(1981, 3, 27),
      now: new Date(),
      firstWorkDay2017: new Date(2017, 0, 3),
      min: new Date(1900, 0, 1),
      formInstance: null,
      dateClear: new Date(2015, 11, 1, 6),
      isDropZoneActive: false,
      imageSource: "",
      textVisible: true,
      progressVisible: false,
      progressValue: 0,
      allowedFileExtensions: [".jpg", ".jpeg", ".gif", ".png"],
      files: [],
    };
  },
  computed: {
    url() {
      return `${this.$axios.defaults.baseURL}${this.$dataApi.images}`;
    },
    uploaderHeaders() {
      return {
        Authorization: "Bearer " + localStorage.getItem("token"),
      };
    },
    accessGroupOptions() {
      return new SelectBoxPropertiesWithDataSource(this, {
        loadUrl: this.$dataApi.roles,
      });
    },
    sundaystartDateOptions() {
      return new DateBoxProperties({
        dateSerializationFormat: "HH:mm:ss",
        type: "time",
      });
    },
    jobTitleOptions() {
      return new SelectBoxPropertiesWithDataSource(this, {
        loadUrl: this.$dataApi.jobPositions,
        readOnly: this.readOnly,
        valueExpr: "id",
      });
    },
    passwordOptions() {
      return {
        mode: "password",
        onValueChanged: () => {
          const editor = this.formInstance.getEditor("ConfirmPassword");
          // if (editor.option("value")) {
          //   const instance = Validator.getInstance(editor.element());
          //   instance.validate();
          // }
        },
        buttons: [
          {
            name: "password",
            location: "after",
            options: {
              icon: "/icons/svg/eye.svg",
              type: "default",
              onClick: () => this.changePasswordMode("password"),
            },
          },
        ],
      };
    },
    confirmPasswordOptions() {
      return {
        mode: "password",
        buttons: [
          {
            name: "password",
            location: "after",
            options: {
              icon: "/icons/svg/eye.svg",
              type: "default",
              onClick: () => this.changePasswordMode("ConfirmPassword"),
            },
          },
        ],
      };
    },
    cabinetOptions() {
      return new SelectBoxPropertiesWithDataSource(this, {
        loadUrl: this.$dataApi.cabinets,
        displayExpr: "name",
      });
    },
  },
  methods: {
    saveUserData() {
      let result = this.$refs["form"].instance.validate();
      if (result.isValid) {
        this.$axios.post(this.$dataApi.users, this.user);
        console.log("asdfasd");
      }
      this.$router.go(-1);
    },
    cancelCreate() {
      this.$router.go(-1);
    },
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
    changePasswordMode(name: any) {
      const editor = this.formInstance.getEditor(name);
      editor.option(
        "mode",
        editor.option("mode") === "text" ? "password" : "text"
      );
    },
    passwordComparison() {
      return this.user.password;
    },
    onUploaded(e) {
      const { file } = e;
      this.employee.imageId = JSON.parse(e.request.response).id;
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
    saveFormInstance(e) {
      this.formInstance = e.component;
    },
  },
});
</script>
<style lang="scss" scoped>
#dropzone-external {
  height: 230px;
  width: 230px;
  left: 0px;
  top: 0px;
  border-radius: 10px;
  background-color: #f3f3f3;
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
}

.panel-items {
  margin-bottom: 10px;
}
</style>
