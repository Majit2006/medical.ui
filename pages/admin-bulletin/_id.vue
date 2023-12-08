<template>
  <div>
    <AdminBulletinCard />
  </div>
</template>
<script lang="ts">
import Vue from "vue";
import AdminBulletinCard from "~/components/admin-bulletin/admin-bulletin-card.vue";
export default Vue.extend({
  components: {
    AdminBulletinCard,
  },
});
</script>
