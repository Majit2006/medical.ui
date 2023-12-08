<template>
  <div>
    <div class="search-panel-wrapper">
      <div>
        <input class="search-input" type="search" />
      </div>
      <button class="sorting panel-btn" />
    </div>
    <div class="component-wrapper">
      <div class="bulletin-content-wrapper">
        <div class="bulletin-text-wrapper">
          <p>20.01.2023</p>
          <p class="bulletin-title">
            Заявление Министерства здравоохранения и медицинской промышленности
          </p>
          <p class="bulletin-subtitle">
            В связи с увеличением количества пыли в воздухе на 21% в наши дни мы
            рекомендуем использовать жидкость для полоскания рта, когда вы
            находитесь на улицах и в других общественных местах, чтобы
            предотвратить неблагоприятные воздействия текущей погоды на организм
            человека. Берегите свое здоровье - используйте медицинские маски!
          </p>
          <div>
          <button @click="showBulletin" class="read-btn">Прочитать</button>
          </div>
        </div>
        <img
          class="bulletin-image"
          src="../../assets/images/bulletin-image.png"
          alt=""
        />
      </div>
    </div>
  </div>
</template>
<script lang="ts">
import Vue from "vue";
export default Vue.extend({
    methods: {
        showBulletin() {
            this.$router.push(`bulletin/id`)
        }
    }
});
</script>
<style lang="scss" scoped>
.search-panel-wrapper {
  display: flex;
  justify-content: space-between;
  margin-bottom: 10px;
  width: 100%;
}
.search-input {
  width: 400px;
  height: 30px;
  border: none;
  border-radius: 10px;
  padding: 5px 10px;
  background-image: url("@/assets/images/magnifyingGlass.png");
  background-size: 22px;
  background-repeat: no-repeat;
  background-position: right;
  background-color: $custom-main-color;

  &:focus {
    background-image: none;
    border: 1px solid $light-blue;
  }
}
.sorting {
  padding: 8px 26px;
  border: none;
  background-image: url("@/assets/images/sorting.png");
  background-size: 22px;
  background-repeat: no-repeat;
  background-position: center;
  background-color: $custom-main-color;
}
.panel-btn {
  background-color: $custom-main-color;
  border-radius: 10px;
  cursor: pointer;
}
.bulletin-content-wrapper {
  display: flex;
  column-gap:40px ;

.bulletin-text-wrapper {
    display: flex;
    flex-direction: column;
    row-gap: 10px;
}
}
.bulletin-title {
    font-weight: $bold-weight;
}
.read-btn {
    padding: 12px 40px;
    border:none;
    border-radius: 10px;
    background-color: $input-bg-color;
    font-weight: $bold-weight;
    // margin-top: ;
    cursor: pointer;
    margin-top: 6px;
}
.bulletin-image {
    max-width: 30%;
    height: auto;
}
</style>
