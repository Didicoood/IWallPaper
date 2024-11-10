<template>
	<view class="themeItem">
		<navigator v-if="!isMore" :url="'../../pages/catergoryList/catergoryList?id=' + item._id + '&name=' + item.name" class="box">
			<image class="pic" :src="item.picurl" mode="aspectFill"></image>
			<view class="mask">
				{{item.name}}
			</view>
			<view v-if="compareTime" class="tab">
				{{compareTime}}前更新 
			</view>
		</navigator>
		<navigator v-if="isMore" url="../../pages/catergory/catergory" open-type="reLaunch" class="box more">
			<image class="pic" src="../../common/images/classify2.jpg" mode="aspectFill"></image>
			<view class="mask">
				<uni-icons type="more-filled" size="34" color="#fff" ></uni-icons>
				<view class="text">
					更多
				</view>
			</view>
		</navigator>
	</view>
</template>

<script setup>
	import { computed } from 'vue';
import {compareTimestamp} from'@/utils/common.js'
const props = defineProps({
	isMore:{
		type:Boolean,
		default: false
	},
	item: {
		// 对象的默认值要使用函数
		type:Object,
		default() {
			return {
				name: 'default',
				picurl: '../../common/images/classify2.jpg',
				updateTime: Date.now() - 1000*60*60*5
			}
		}
	}
})
// 计算时间
const compareTime = computed(() => {
	return compareTimestamp(props.item.updateTime)
})
</script>

<style lang="scss" scoped>
	.themeItem {
		.box {
			height: 340rpx;
			border-radius: 10rpx;
			overflow: hidden;
			position: relative;
			.pic {
				width: 100%;
				height: 100%;
			}
			.mask {
				position: absolute;
				width: 100%;
				height: 70rpx;
				font-size: 30rpx;
				bottom: 0;
				left: 0; 
				background: rgba(0, 0, 0, 0.2);
				color: #fff;
				display: flex;
				justify-content: center;
				align-items: center;
				backdrop-filter: blur(20rpx);
				font-weight: 600;
				font-size: 30rpx
			}
			.tab {
				position: absolute;
				left: 0;
				top: 0;
				background: rgba(250, 129, 90, 0.7);
				backdrop-filter: blur(20rpx);
				color: #fff;
				font-size: 22rpx;
				padding:6rpx 14rpx;
				border-radius: 0 0 20rpx 0;
				transform: scale(0.8);
				transform-origin: left top; 
			}
		}
		.box.more {
			.mask {
				height: 100%;
				width: 100%;
				display: flex;
				flex-direction: column;
				
			}
			.text {
				font-size: 22rpx;
			}
		}
	}
</style>