<template>
  <div>
    <UserCreate />
  </div>
</template>
<script lang="ts">
import Vue from "vue";
import UserCreate from "~/components/users/user-create.vue";
export default Vue.extend({
  components: {
    UserCreate,
  },
});
</script>
