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
				<uni-icons type="sound" size="30"></uni-icons>
				<text class="text">公告</text>
			</view>
			<view class="center">
				
			</view>
			<view class="right">
				
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
	}
</style>
