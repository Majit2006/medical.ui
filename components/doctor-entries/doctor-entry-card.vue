<template>
  <div>
    <div class="panel-items">
      <div class="btn-wrapper">
        <button class="entry-id">MK000000</button>
        <button @click="backHandler" class="back-btn">Назад</button>
      </div>
      <button class="print-btn" />
    </div>
    <div class="component-wrapper">
        <div class="result-inout-wrapper">
          <span>Приемы, обследования, диагностика</span>
          <div>
            <input class="input" type="text">
            <button @click="showForm" class="show-result-btn">Заполнить</button>
          </div>
        </div>
      <div class="result-textarea-wrapper">
        <span>Диагноз</span>
        <textarea class="input" name="" id="" cols="30" rows="10"></textarea>
        <div>
          <button class="add-btn">Добавить</button>
        </div>
      </div>

   <div class="horizont-line"/>

    <div class="result-inout-wrapper">
          <div>
            <input class="input" type="text">
            <button @click="showForm" class="show-result-btn">Заполнить</button>
          </div>
        </div>
      <div class="result-textarea-wrapper">
        <span>Диагноз</span>
        <textarea class="input" name="" id="" cols="30" rows="10"></textarea>
        <div>
          <button class="add-btn">Добавить</button>
        </div>
      </div>
    </div>
  </div>
</template>
<script lang="ts">
import Vue from "vue";
export default Vue.extend({
  methods: {
    backHandler() {
      this.$router.go(-1);
    },
    showForm(e: string) {
      this.$router.push(`/doctor-entries/form`)
    }
  },
});
</script>
<style lang="scss" scoped>
.panel-items {
  display: flex;
  justify-content: space-between;
  margin-bottom: 10px;
}
.btn-wrapper {
  display: flex;
  column-gap: 10px;
}
.entry-id {
  padding: 12px 200px;
  border: none;
  border-radius: 10px;
  background-color: $custom-main-color;
  font-weight: $bold-weight;
}
.result-textarea-wrapper {
  display: flex;
  flex-direction: column;
  row-gap: 10px;
}
  .input {
    resize: none;
  }
  textarea {
    height:120px;
  }
.add-btn {
  padding: 12px 42px;
  border: none;
  border-radius: 10px;
  background-color: $input-bg-color;
  font-weight: $bold-weight;
  margin-top: 10px;
}
.print-btn {
  padding: 20px 30px;
  border: none;
  border-radius: 10px;
  cursor: pointer;
  background-image: url("@/assets/images/printer.png");
  background-size: 24px;
  background-repeat: no-repeat;
  background-position: center;
  background-color: $custom-main-color;
}
.complaint-text-wrapper {
  display: flex;
  flex-direction: column;
  row-gap: 20px;
  div {
    display: flex;
    column-gap: 32px;
  }
}
.result-inout-wrapper {
  display: flex;
  flex-direction: column;
  row-gap: 10px;
  width: 100%;
  div {
    display: flex;
    column-gap: 20px;
    width: 100%;
  }
  .show-result-btn {
  padding: 8px 32px;
  border: none;
  border-radius: 10px;
  font-weight: $bold-weight;
  cursor: pointer;
}
}

</style>
