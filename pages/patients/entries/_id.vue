<template>
    <PatientEntryCard/>
</template>
<script lang="ts">
import Vue from 'vue'
import PatientEntryCard from "~/components/patients/entries/patient-entry-card.vue"
export default Vue.extend({
    components: {
        PatientEntryCard
    }
})
</script>