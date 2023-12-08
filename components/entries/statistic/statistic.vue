<template>
    <div>
         <div class="panel-items">
      <div class="btn-wrapper">
        <button class="statistic">Статистика</button>
        <button @click="backHandler" class="back-btn">Назад</button>
      </div>
      <div>
        <div class="print-wrapper">
          <button class="print-btn" />
        </div>
      </div>
    </div>
    <div class="component-wrapper">
      <div class="entries-count">
    <p><span>Общего количество записей:</span></p>
    <span>65</span>
      </div>
    <p><span>По кабинетам</span></p>
    </div>
    </div>
</template>
<script lang="ts">
import Vue from 'vue'
export default Vue.extend({
    methods: {
      backHandler() {
        this.$router.go(-1)
      }
    }
})
</script>
<style lang="scss" scoped>
  .statistic {
    padding: 12px 150px;
    border: none;
    border-radius: 10px;
    background-color: $custom-main-color;
    font-weight: $bold-weight;
  }
 .panel-items {
    display: flex;
    justify-content: space-between;
    margin-bottom: 10px;
  }
   .btn-wrapper {
    display: flex;
    column-gap: 10px;
  }
    .print-btn {
    border: none;
    border-radius: 10px;
    padding: 18px 26px;
    background-image: url("~assets/images/printer.png");
    background-size: 24px;
    background-position: center;
    background-repeat: no-repeat;
    background-color: $custom-main-color;
    cursor: pointer;
  }
  .entries-count {
    display: flex;
    gap: 50px;
  }
</style>
