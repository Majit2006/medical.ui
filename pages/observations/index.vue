<template>
  <div>
    <observationDataGrid />
  </div>
</template>
<script lang="ts">
import Vue from "vue";
import observationDataGrid from "~/components/observations/observation-data-grid.vue";
export default Vue.extend({
  components: {
    observationDataGrid,
  },
});
</script>
