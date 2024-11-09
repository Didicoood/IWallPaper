<template>
	<view class="layout">
		<view class="navbar">
			<!-- 状态栏，手机的安全区域，占位用 -->
			<view class="statusBar" :style="{height:statusBarHeight + 'px'}"></view>
			<view class="titleBar" :style="{height: titleBarHeight + 'px', marginLeft:getLeftIconLeft() + 'px'}">
				<view class="title">{{title}}</view>
				<view class="search">
					<uni-icons class="icon" type="search" size="18">
						<text class="text">搜索</text>
					</uni-icons>
				</view>
			</view>
		</view>
		<!-- 填充区，解决上面高度塌陷问题 -->
		<view class="fill" :style="{height: navBarHeight + 'px'}">
			
		</view>
	</view>
</template>

<script setup>
import { ref } from 'vue';
import {getStatusBarHeight, getTitleBarHeight, getNavBarHeight, getLeftIconLeft} from '@/utils/system.js'
	const statusBarHeight =ref(getStatusBarHeight())
	// 获取胶囊按钮
	const titleBarHeight =ref(getTitleBarHeight())
	const navBarHeight =ref(getNavBarHeight())
	
	defineProps({
		title: {
			type: String,
			default: 'IWallPaper'
		}
	})

</script>

<style lang="scss" scoped>
.layout {
	.navbar {
		position: fixed;
		z-index: 9999;
		top: 0;
		left: 0;
		width: 100%;
		background:
		linear-gradient(to bottom, rgba(0, 0, 0, 0), #fff 400rpx),
		linear-gradient(to right, #6CB4EE 5%, #F3C4CB);
		.statusBar {
		}
		.titleBar {
			display: flex;
			align-items: center;
			padding: 0 30rpx;
			.title{
				font-size: 22px;
				font-weight: 700;
				color:$text-font-color-1 ;
			}
			.search {
				width: 220rpx;
				height: 50rpx;
				border-radius: 60rpx;
				background: rgba(255, 255, 255, 0.4);
				border: 1px solid #fff;
				margin-left: 30rpx;
				color: #999;
				font-size: 28rpx;
				display: flex;
				align-items: center;
				.text {
					padding-left: 10rpx;
				}
				.icon {
					margin-left: 5rpx;
				}
			}
		}
	}
	.fill {
		
	}
}
</style>