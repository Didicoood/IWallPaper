<template>
	<view class="classLayout pageBg">
		<custom-nav-bar title="分类"></custom-nav-bar>
		<view class="classify">
			<theme-item v-for="(item, index) in catergoryList" :key="item._id" :item="item"></theme-item>
		</view>
	</view>
</template>

<script setup>
	import { onMounted, ref } from 'vue';
	import {apiGetCatergory } from '../../api/apis';
	const catergoryList = ref([])
	// 获取分类
	const getCatergory = async () => {
		const res = await apiGetCatergory({pageSize: 20})
		catergoryList.value = res.data
	}
	onMounted(() => {
		getCatergory()
	})
</script>

<style lang="scss" scoped>
	.classify {
		padding: 30rpx;
		display: grid;
		grid-template-columns: repeat(3,1fr);
		gap: 15rpx;
	}
</style>
