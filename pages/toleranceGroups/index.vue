<template>
  <div>
    <tolerancegroupsdatagrid />
  </div>
</template>

<script lang="ts">
import Vue from "vue";
import tolerancegroupsdatagrid from "~/components/tolerance-groups/tolerance-groups-data-grid.vue";
export default Vue.extend({
  components: { tolerancegroupsdatagrid },
});
</script>
