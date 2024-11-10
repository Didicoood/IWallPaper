<template>
	<view class="catergoryList">
		<!-- 加载动画 -->
		<view class="loadingLayout" v-if="!catergoryList.length && !dataFlag">
			<uni-load-more status="loading"></uni-load-more>
		</view>
		<view class="content">
			<navigator :url="'/pages/preview/preview?id=' + item._id" class="item" v-for="item in catergoryList" :key="item._id">
				<image :src="item.smallPicurl" mode="aspectFill"></image>
			</navigator>
		</view>
		<view class="loadingLayout "  v-if="dataFlag || catergoryList.length">
			<uni-load-more :status="dataFlag ? 'noMore' : 'loading'"></uni-load-more>
		</view>
		<!-- 安全区 -->
		<view class="safe-area-inset-bottom"></view>
	</view>
</template>

<script setup>
import { onMounted, ref } from 'vue';
import {onLoad, onReachBottom, onPullDownRefresh} from '@dcloudio/uni-app'
	import {apiGetCatergoryList } from '../../api/apis';
	const catergoryList = ref([])
	const queryParamas = {
		pageNum: 1,
		pageSize:12
	}
	const dataFlag = ref(false)
	const getCatergoryList = async () => {
		const res = await apiGetCatergoryList(queryParamas)
		catergoryList.value = [...catergoryList.value,...res.data]
		if(queryParamas.pageSize > res.data.length) dataFlag.value = true
		// 存储到store，方便后面做壁纸详情的时候直接拿，不用反复请求接口
		uni.setStorageSync('storgCatergoryList', catergoryList.value)
	}
	onLoad((e) => {
		let {id=null, name=null} = e
		queryParamas.classid = id
		uni.setNavigationBarTitle({
			title:name
		})
		getCatergoryList()
	})
	// 触底加载
	onReachBottom(() => {
		if(dataFlag.value) return
		queryParamas.pageNum += 1
		getCatergoryList()
	})
	// 下拉刷新
	onPullDownRefresh(() => {
		getCatergoryList()
	})
</script>

<style lang="scss" scoped>
	.catergoryList{
		.content {
			display: grid;
			grid-template-columns: repeat(3, 1fr); 
			gap: 5rpx;
			padding: 5rpx;
			.item {
				height: 440rpx;
				image {
					width: 100%;
					height: 100%;
					display: block;
				}
			}
		}
	}
</style>
