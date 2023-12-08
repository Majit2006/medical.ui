<template>
  <observationCard :currentObservation="currentObservation" />
</template>
<script lang="ts">
import Vue from "vue";
import observationCard from "~/components/observations/observation-card.vue";
import { dataApi } from "~/static/dataApi";
export default Vue.extend({
  components: {
    observationCard,
  },
  data() {
    return {
      currentObservation: null,
    };
  },
  async asyncData({ $axios, params }) {
    const { data } = await $axios.get(`${dataApi.observations}/${+params.id}`);
    return {
      currentObservation: data,
    };
  },
});
</script>
