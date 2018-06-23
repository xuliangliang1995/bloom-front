<template>
	<div class = "showBox">
		<!--<router-link to="/home">Go to Home</router-link>
	    <router-link to="/about">Go to About</router-link>
	    <router-link to="/login">Go to Login</router-link>-->
		<router-view class = "showBox"></router-view>
	</div>
	
</template>
<script>
	export default{
		
	}
</script>
<style scoped>
	.showBox {
		width: 100%;
		height: 100%;
	}
</style>
