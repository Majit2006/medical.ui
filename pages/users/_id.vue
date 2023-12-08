<template>
  <UserCard :currentUser="currentUser" />
</template>

<script lang="ts">
import Vue from "vue";
import UserCard from "~/components/users/user-card.vue";
import { dataApi } from "~/static/dataApi";
export default Vue.extend({
  components: {
    UserCard,
  },
  data() {
    return {
      currentUser: null,
    };
  },
  async asyncData({ $axios, params }) {
    const { data } = await $axios.get(`${dataApi.users}/${+params.id}`);
    return {
      currentUser: data,
    };
  },
});
</script>
