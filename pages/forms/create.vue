<template>
    <div>
        Majit
        <FormCreate/>
    </div>
</template>

<script lang="ts">
import Vue from "vue"
import FormCreate from "~/components/forms/form-create.vue";
export default Vue.extend({
    components:{
        FormCreate
    }
})
</script>
