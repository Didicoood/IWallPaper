<template>
	<view class="homeLayout pageBg">
		<custom-nav-bar title="推荐"></custom-nav-bar>
		<view class="banner">
			<swiper circular autoplay indicator-dots indicator-color="#c0c0c0" indicator-active-color="#FFF">
				<swiper-item v-for="(item, index) in bannerList " :key="item._id">
					<image :src="item.picurl" mode="aspectFill"></image>
				</swiper-item>
			</swiper>
		</view>
		<view class="noticee">
			<view class="left">
				<uni-icons type="sound" size="30" color="$brand-theme-color"></uni-icons>
				<text class="text">公告</text>
			</view>
			<view class="center">
				<swiper vertical autoplay interval="1500" circular>
					<swiper-item v-for="(item, index) in noticeList" :key="item._id">
						<navigator url="/pages/notice/detail">
						即将取代
						</navigator>
					</swiper-item>
				</swiper>
			</view>
			<view class="right">
				<uni-icons type="right" size="16" color="#333"></uni-icons>
			</view>
		</view>
		<view class="select">
			<common-titel>
				<template #name>每日推荐</template>
				<template #custom>
					<view class="date">
						<uni-icons type="calendar" size="18" color="$brand-theme-color"></uni-icons>
						<view class="text">
							<uni-dateformat format="dd号" :date="new Date()"></uni-dateformat>
						</view>
					</view>
				</template>
			</common-titel>
			<view class="content">
				<scroll-view scroll-x >
					<view class="box" v-for="(item, index) in randomList" :key="item.classid">
						<navigator :url="'/pages/preview/preview?id=' + item._id" class="box" @click="goPrevieww">
						<image :src="item.smallPicurl" mode="aspectFill"></image>
						</navigator>
					</view>
				</scroll-view>
			</view>
		</view>
		<view class="theme">
			<common-titel>
				<template #name>专题精选</template>
				<template #custom>
					<navigator url="" class="more">More +</navigator>
				</template>
			</common-titel>
			
			<view class="content">
				<theme-item v-for="(item, index) in catergoryList" :key="item._id" :item="item"></theme-item>
				<theme-item :isMore="true" ></theme-item>
			</view>
		</view>
	</view>
</template>

<script setup>
	import { onMounted, ref } from 'vue';
	import {onShareAppMessage,onShareTimeline} from "@dcloudio/uni-app"
import { apiGetBanner, apiGetDayRandom, apiGetNotice, apiGetCatergory } from '../../api/apis';
	const randomList = ref([])
	const bannerList = ref([])
	const noticeList = ref([])
	const catergoryList = ref([])
	// 获取轮播图
	const getbannerList = async () => {
		const res = await apiGetBanner()
		bannerList.value = res.data
	}
	// 获取随机
	const getDayRandom = async () => {
		const res = await apiGetDayRandom()
		randomList.value = res.data
	}
	// 获取公告列表
	const getNotice = async () => {
		const res = await apiGetNotice({select: true})
		noticeList.value = res.data
	}
	// 获取分类
	const getCatergory = async () => {
		const res = await apiGetCatergory({select: true})
		catergoryList.value = res.data
	}
	// 跳转预览页面
	const goPrevieww = () => {
		uni.setStorageSync('storgCatergoryList', randomList.value)
	}
	onMounted(() => {
		getbannerList()
		getDayRandom()
		getNotice()
		getCatergory()
	})
	onShareAppMessage((e) => {
		return {
			title: 'IWallPaper手机壁纸',
			path: '/pages/index/index'
		}
	})
	onShareTimeline(() => {
		return {
			title: 'IWallPaper手机壁纸',
		}
	})
</script>

<style lang="scss" scoped>
	.homeLayout {
		.banner {
			width: 750rpx;
			padding: 30rpx 0rpx;
			swiper {
				width: 750rpx;
				height: 340rpx;
				&-item {
					width: 100%;
					height: 100%;
					padding: 0 30rpx;
					image {
						width: 100%;
						height: 100%;
						border-radius: 10rpx;
						
					}
				}
			}
		}
		.noticee {
			width: 690rpx;
			height: 80rpx;
			line-height: 80rpx;
			background: #f9f9f9f;
			margin: 0 auto;
			border-radius: 80rpx;
			display: flex;
			.left {
				width: 140rpx;
				display: flex;
				justify-content: center;
				align-items: center;
				.text {
					color:$text-font-color-1;
					font-weight: 600;
					font-size: 28rpx
				}
			}
			:deep() {
			.uni-icons {
				color: $brand-theme-color !important;
			}
			}
			.center {
				flex: 1;
				swiper {
					height: 100%;
					&-item {
						height: 100%;
						font-size: 30rpx;
						color: #666;
						// 缩略三剑客
						white-space: nowrap;
						overflow: hidden;
						text-overflow: ellipsis;
					}
				}
			}
			.right {
				width: 70rpx;
			}
		}
		.select {
			padding-top: 50rpx;
			.content {
				width: 720rpx;
				margin-left: 30rpx;
				margin-top: 30rpx;
				scroll-view {
					white-space: nowrap;
					.box {
						width: 200rpx;
						height: 430rpx;
						display: inline-block;
						margin-right: 20rpx;
						image {
							width: 100%;
							height: 100%;
							border-radius: 10rpx;
						}
					}
				}
			}
			.date {
				display: flex;
				color: $brand-theme-color;
				align-items: center;
				:deep() {
				.uni-icons {
					color: $brand-theme-color !important;
				}
				}
				.text {
					margin-left: 5rpx;
					font-size: 30rpx;
				}
			}
		}
		.theme {
			padding: 50rpx 0;
			.more {
				font-size: 32rpx;
				color: #888;
			}
			.content {
				margin-top: 30rpx;
				padding: 0 30rpx;
				// 网格布局
				display: grid;
				gap: 15rpx;
				grid-template-columns: repeat(3,1fr);
			}
		}
	}
</style>
