<template>
	<view class="homeLayout">
		<view class="banner">
			<swiper circular autoplay indicator-dots indicator-color="#c0c0c0" indicator-active-color="#FFF">
				<swiper-item v-for="item in 3 ">
					<image src="../../common/images/banner3.jpg" mode="aspectFill"></image>
				</swiper-item>
			</swiper>
		</view>
		<view class="notice">
			<view class="left">
				<uni-icons type="sound" size="30" color="#28b39b"></uni-icons>
				<text class="text">公告</text>
			</view>
			<view class="center">
				<swiper vertical autoplay interval="1500" circular>
					<swiper-item v-for="item in 5">
						XXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXX
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
						<uni-icons type="calendar" size="18" color="#28b39b"></uni-icons>
						<view class="text">
							<uni-dateformat format="dd号" :date="new Date()"></uni-dateformat>
						</view>
					</view>
				</template>
			</common-titel>
			<view class="content">
				<scroll-view scroll-x >
					<view class="box" v-for="item in 5">
						<image src="../../common/images/classify1.jpg" mode="aspectFill"></image>
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
				<theme-item v-for="item in 8"></theme-item>
				<theme-item :isMore="true" ></theme-item>
			</view>
		</view>
	</view>
</template>

<script setup>
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
		.notice {
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
					color: #28b389;
					font-weight: 600;
					font-size: 28rpx
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
				color: #28b39b;
				align-items: center;
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
