<template>
    <AdminBulletinEdit/>
</template>
<script lang="ts">
import Vue from 'vue'
import AdminBulletinEdit from "@/components/admin-bulletin/edit/admin-bulletin-edit.vue"
export default Vue.extend({
    components: {
        AdminBulletinEdit
    },
    // async asyncData({ $axios, params }) {
	// 	const { data } = await $axios.get(`https://js.devexpress.com/Demos/DevAV/odata/Products/`);
    //     console.log(data);
        
	// 	return {
	// 		currentEmployee: data
	// 	};
	// }
})
</script>