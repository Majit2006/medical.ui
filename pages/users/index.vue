<template>
  <div>
    <userdatagrid />
  </div>
</template>
<script lang="ts">
import Vue from "vue";
import userdatagrid from "~/components/users/user-data-grid.vue";
export default Vue.extend({
  components: {
    userdatagrid,
  },
});
</script>
