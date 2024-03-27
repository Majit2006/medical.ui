<template>
    <div>
        <div class="panel-items">
            <DxButton :text="$t('toleranceGroup.newAccessGroup')" width="230px" />
            <DxButton :text="$t('toleranceGroup.save')" width="150px" class="btn-save" />
            <DxButton :text="$t('toleranceGroup.cancel')" width="100px" class="btn-cancel" />
        </div>
        <div class="component-wrapper">
            <DxForm label-location="top" :show-colon-after-label="false">
                <DxGroupItem>
                    <DxGroupItem :col-count="2">
                        <DxSimpleItem data-field="name">
                            <DxLabel :text="$t('toleranceGroup.name')" />
                        </DxSimpleItem>
                    </DxGroupItem>
                </DxGroupItem>
            </DxForm>
            <DxList :height="400" :search-enabled="true" search-expr="text" class="list">
                <DxCheckBox value="checked" :element-attr="{ 'aria-label': 'Selection By Click' }" />
            </DxList>
        </div>
    </div>
</template>
<script lang="ts">
import Vue from 'vue'
import DxButton from 'devextreme-vue/button';
import DxForm, {
    DxSimpleItem,
    DxGroupItem,
    DxEmptyItem,
    DxButtonItem,
    DxLabel,
} from "devextreme-vue/form";
import { DxList } from 'devextreme-vue/list';
import { DxCheckBox } from 'devextreme-vue/check-box'
export default Vue.extend({
    components: {
        DxButton,
        DxForm,
        DxSimpleItem,
        DxGroupItem,
        DxEmptyItem,
        DxButtonItem,
        DxLabel,
        DxCheckBox,
        DxList,
    },
    data() {
        return {
            dataSource: [
                { text: 'Item 1', checked: false },
                { text: 'Item 2', checked: false },
                { text: 'Item 3', checked: false },
            ],
        }
    }
})
</script>





<style lang="scss" scoped>
.list {
    width: 350px;
}

.btn-save {
    margin-left: 10px;
}

.btn-cancel {
    margin-left: 10px;
}

.component-wrapper {
    margin-top: 10px;
}

.btn-wrapper {
    display: flex;
    column-gap: 10px;
}

.create-cabinet {
    font-family: $fontFamily;
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

.panel-btn:hover {
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

.dx-icon-chevronright,
.dx-icon-back {
    font-size: 24px;
    padding: 8px 10px;
    border-radius: 10px;
    background-color: $input-bg-color;
    margin-top: 20px;
    cursor: pointer;

    &:active {
        box-shadow: inset 0 2px 2px 0 #333;
        transition: 0.1s ease-out;
        -webkit-box-shadow: inset 1px 1px 8px #333;
        -moz-box-shadow: inset 1px 1px 8px #333;
        box-shadow: inset 1px 1px 8px #333;
    }
}

.chevron-icon-wrapper {
    width: 20%;
    /* margin: 250px 45%; */

    .chevron-icon {
        display: inline-flex;
        flex-direction: column;
        margin: 200px 42%;
    }
}

.select-all-btn,
.delete-all-btn {
    font-weight: $bold-weight;
    border: none;
    border-radius: 10px;
    background-color: $input-bg-color;
    padding: 12px 36px;
    cursor: pointer;
    margin-top: 20px;

    &:active {
        box-shadow: inset 0 2px 2px 0 #333;
        transition: 0.1s ease-out;
        -webkit-box-shadow: inset 1px 1px 8px #333;
        -moz-box-shadow: inset 1px 1px 8px #333;
        box-shadow: inset 1px 1px 8px #333;
    }
}

.box-wrapper {
    display: flex;
}

.access-wrapper {
    width: 40%;

    .access-items-wrapper {
        display: flex;
        flex-direction: column;
        row-gap: 20px;
        column-gap: 10px;
        border: 1px solid $input-bg-color;
        border-radius: 10px;
        height: 60vh;
        padding: 15px;
        overflow-y: scroll;
    }
}

.choose-element-wrapper {
    /* width: 40%; */

    .choose-item {
        border: 1px solid $input-bg-color;
        border-radius: 10px;
        height: 100%;
        /* width: 40%; */
        padding: 15px;
    }
}

.dx-command-select {
    width: 40px !important;
}
</style>