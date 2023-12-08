<template>
  <div class="bulletin-card-wrapper">
    <div class="panel-items">
      <div class="btn-wrapper">
        <button @click="backHandler" class="back-btn">Назад</button>
      </div>
      <div class="info-btn-wrapper">
        <button class="print-btn" />
      </div>
    </div>
    <div class="component-wrapper">
      <p class="date">22.01.2023</p>
      <img
        class="bulletin-image"
        src="../../assets/images/bulletin-image.png"
        alt=""
      />
      <p class="bulletin-title">
        Saglygy goraýyş we derman senagaty ministrliginiň bildirişi
      </p>
      <p class="bulletin-text-content">
        Şu günler howanyň düzüminde tozan bölejikleriniň möçberiniň kadadan 21
        göterim artmagy bilen baglanyşykly häzirki wagtda howa şertleriniň adam
        bedenine ýetirýän oňaýsyz täsirleriniň öňüni almak üçin, köçelerde we
        beýleki jemgyýetçilik ýerlerinde bolýan wagtyňyz agyz-burun örtüklerini
        ulanmagy maslahat berýäris. Saglygyňyzy goraň — agyz-burun örtüklerini
        ulanyň!
      </p>
      <label id>
        <input class="checkbox-input" type="checkbox" />
        <span>Okadym</span>
      </label>
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
  },
});
</script>
<style lang="scss" scoped>
.bulletin-card-wrapper {
  .panel-items {
    display: flex;
    justify-content: space-between;
    margin-bottom: 10px;
  }
  .btn-wrapper {
    display: flex;
    column-gap: 10px;
  }
  .new-bulletin {
    padding: 12px 150px;
    border: none;
    border-radius: 10px;
    background-color: $custom-main-color;
    font-weight: $bold-weight;
    cursor: pointer;
  }
  .component-wrapper {
    row-gap: 30px;
  }
  .bulletin-title {
    font-weight: $bold-weight;
  }
  .bulletin-image {
    max-width: 60%;
    user-select: none;
  }
  label {
    display: flex;
    column-gap: 12px;
    margin-top: 5px;
    cursor: pointer;
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
}
</style>
