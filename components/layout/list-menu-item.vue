<template>
    <div class="list-menu-item-wrapper">
            <h4 :title="(data.title)">{{ (data.title) }}</h4>
    </div>
</template>
<script lang="ts">
import Vue from "vue"

export default Vue.extend({
    props: {
        data: {
            type: Object,
            required : true
        },
    },
})
</script>
<style scoped>
</style>