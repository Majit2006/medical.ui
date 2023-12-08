<template>
    <PatientCard/>
</template>
<script lang="ts">
import Vue from 'vue'
import PatientCard from "~/components/patients/patient-card.vue"
export default Vue.extend({
    components: {
        PatientCard
    }
})
</script>