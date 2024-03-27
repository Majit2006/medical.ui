<template>
  <div class="user-panel">
    <MainLogo />
    <div class="user-info">
      <h3>{{ $t("navigation.administration") }}</h3>
    </div>
  </div>
</template>

<script lang="ts">
import MainLogo from "./main-logo.vue";
import Vue from "vue";
export default Vue.extend({
  components: {
    MainLogo,
  },
});
</script>
<style scoped>
.user-info {
  padding-left: 30px;
}
</style>
