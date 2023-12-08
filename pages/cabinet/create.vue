<template>
  <div>
    <CabinetCreate />
  </div>
</template>
<script lang="ts">
import Vue from "vue";
import CabinetCreate from "~/components/cabinets/cabinet-create.vue";
export default Vue.extend({
  components: {
    CabinetCreate,
  },
});
</script>
