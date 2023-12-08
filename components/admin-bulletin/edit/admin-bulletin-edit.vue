<template>
  <div class="edit-bulletin-wrapper">
    <div class="panel-items">
      <div class="btn-wrapper">
        <button class="new-bulletin">Бюллетень</button>
        <button class="save-btn">Сохранить</button>
        <button @click="cancelCreate" class="cancel-btn">Отменить</button>
      </div>
      <div class="info-btn-wrapper">
        <button @click="showStatistic" class="bulletin-statistic" >Статистика</button>
        <button class="air-play-btn" />
      </div>
    </div>
    <div class="component-wrapper">
      <div class="info-form-wrapper">
        <span>Название на туркменском</span>
        <input class="input" type="text" />
      </div>
      <div class="info-form-wrapper">
        <span> Название на русском</span>
        <input class="input" type="text" />
      </div>
      <div class="photo-title-wrapper">
      <div class="info-form-wrapper">
        <span>Титульное фото</span>
        <label for="upload-photo"> 
        <input id="upload-photo" class="input" name="file" type="file" multiple />
        Выбрать
        </label>
      </div>
      </div>
      <span>Текст на туркменском</span>
       <DxHtmlEditor
      height="300px"
    >
      <DxMediaResizing :enabled="true"/>
      <DxImageUpload
        file-upload-mode="base64"
      />
      <DxToolbar :multiline="isMultiline">
        <DxItem name="undo"/>
        <DxItem name="redo"/>
        <DxItem name="separator"/>
        <DxItem
          :accepted-values="sizeValues"
          name="size"
        />
        <DxItem
          :accepted-values="fontValues"
          name="font"
        />
        <DxItem name="separator"/>
        <DxItem name="bold"/>
        <DxItem name="italic"/>
        <DxItem name="strike"/>
        <DxItem name="underline"/>
        <DxItem name="separator"/>
        <DxItem name="alignLeft"/>
        <DxItem name="alignCenter"/>
        <DxItem name="alignRight"/>
        <DxItem name="alignJustify"/>
        <DxItem name="separator"/>
        <DxItem name="orderedList"/>
        <DxItem name="bulletList"/>
        <DxItem name="separator"/>
        <DxItem
          :accepted-values="headerValues"
          name="header"
        />
        <DxItem name="separator"/>
        <DxItem name="color"/>
        <DxItem name="background"/>
        <DxItem name="separator"/>
        <DxItem name="link"/>
        <DxItem name="image"/>
        <DxItem name="separator"/>
        <DxItem name="clear"/>
        <DxItem name="codeBlock"/>
        <DxItem name="blockquote"/>
        <DxItem name="separator"/>
        <DxItem name="insertTable"/>
        <DxItem name="deleteTable"/>
        <DxItem name="insertRowAbove"/>
        <DxItem name="insertRowBelow"/>
        <DxItem name="deleteRow"/>
        <DxItem name="insertColumnLeft"/>
        <DxItem name="insertColumnRight"/>
        <DxItem name="deleteColumn"/>
      </DxToolbar>
    </DxHtmlEditor>

       <span>Текст на русском</span>
       <DxHtmlEditor
      height="300px"
    >
      <DxMediaResizing :enabled="true"/>
      <DxImageUpload
        file-upload-mode="base64"
      />
      <DxToolbar :multiline="isMultiline">
        <DxItem name="undo"/>
        <DxItem name="redo"/>
        <DxItem name="separator"/>
        <DxItem
          :accepted-values="sizeValues"
          name="size"
        />
        <DxItem
          :accepted-values="fontValues"
          name="font"
        />
        <DxItem name="separator"/>
        <DxItem name="bold"/>
        <DxItem name="italic"/>
        <DxItem name="strike"/>
        <DxItem name="underline"/>
        <DxItem name="separator"/>
        <DxItem name="alignLeft"/>
        <DxItem name="alignCenter"/>
        <DxItem name="alignRight"/>
        <DxItem name="alignJustify"/>
        <DxItem name="separator"/>
        <DxItem name="orderedList"/>
        <DxItem name="bulletList"/>
        <DxItem name="separator"/>
        <DxItem
          :accepted-values="headerValues"
          name="header"
        />
        <DxItem name="separator"/>
        <DxItem name="color"/>
        <DxItem name="background"/>
        <DxItem name="separator"/>
        <DxItem name="link"/>
        <DxItem name="image"/>
        <DxItem name="separator"/>
        <DxItem name="clear"/>
        <DxItem name="codeBlock"/>
        <DxItem name="blockquote"/>
        <DxItem name="separator"/>
        <DxItem name="insertTable"/>
        <DxItem name="deleteTable"/>
        <DxItem name="insertRowAbove"/>
        <DxItem name="insertRowBelow"/>
        <DxItem name="deleteRow"/>
        <DxItem name="insertColumnLeft"/>
        <DxItem name="insertColumnRight"/>
        <DxItem name="deleteColumn"/>
      </DxToolbar>
    </DxHtmlEditor>
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
} from 'devextreme-vue/html-editor';
import {
  DxCheckBox,
} from 'devextreme-vue/check-box';
import {
  DxSelectBox,
} from 'devextreme-vue/select-box';
export default Vue.extend({
      components: {
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
      sizeValues: ['8pt', '10pt', '12pt', '14pt', '18pt', '24pt', '36pt'],
      fontValues: ['Arial', 'Courier New', 'Georgia', 'Impact', 'Lucida Console', 'Tahoma', 'Times New Roman', 'Verdana'],
      headerValues: [false, 1, 2, 3, 4, 5],
      isMultiline: true,
    };
  },
  methods: {
cancelCreate() {
  this.$router.go(-1)
},
showStatistic() {
  this.$router.push(`/admin-bulletin/statistic`)
  
}
  }
});
</script>
<style lang="scss" scoped>
.edit-bulletin-wrapper {
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
    content: '';
}
}
  .choose-file-btn {
    padding: 12px 46px;
  }
  .chaeckbox-wrapper {
    display: flex;
    flex-direction: row-reverse;
    justify-content: flex-end;
    column-gap:12px ;
  }
  .input {
    max-width:100%;
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

  .air-play-btn {
   padding: 20px 30px;
  border: none;
  border-radius: 10px;
  cursor: pointer;
  background-image: url("@/assets/images/airplay.png");
  background-size: 24px;
background-repeat: no-repeat;
background-position: center;
background-color: $custom-main-color;
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

}
</style>
