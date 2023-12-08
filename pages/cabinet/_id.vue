<template>
  <CabinetCard :currentCabinet="currentCabinet" />
</template>
<script lang="ts">
import Vue from "vue";
import CabinetCard from "~/components/cabinets/cabinet-card.vue";
import { dataApi } from "~/static/dataApi";
export default Vue.extend({
  components: {
    CabinetCard,
  },
  data() {
    return {
      currentCabinet: null,
      functionResolve: null,
    };
  },
  async asyncData({ $axios, params }) {
    const { data } = await $axios.get(`${dataApi.cabinets}/${+params.id}`);
    return {
      currentCabinet: data,
    };
  },
  methods: {
    dialogResponse(response) {
      this.functionResolve(response);
    },
  },
});
</script>
