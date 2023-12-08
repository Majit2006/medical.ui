<template>
  <div>
    <observationCreate />
  </div>
</template>
<script lang="ts">
import Vue from "vue";
import observationCreate from "~/components/observations/observation-create.vue";
export default Vue.extend({
  components: {
    observationCreate,
  },
});
</script>
