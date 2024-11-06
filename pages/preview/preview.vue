<template>
	<view class="preview">
		<swiper circular>
			<swiper-item v-for="item in 10">
				<image src="../../common/images/preview2.jpg" mode="aspectFill"></image>
			</swiper-item>
		</swiper>
		
		<!-- 模态框 -->
		<view class="mask">
			<view class="goBack">
				1
			</view>
			<view class="count">
				3/9
			</view>
			<view class="time">
				10:10
			</view>
			<view class="date">
				11月11号
			</view>
			<view class="footer">
				<view class="box">
					<uni-icons type="info" size="28"></uni-icons>
					<view class="text">
						信息
					</view>
				</view>
				<view class="box">
					<uni-icons type="star" size="28"></uni-icons>
					<view class="text">
						5凤
					</view>
				</view>
				<view class="box">
					<uni-icons type="download" size="28"></uni-icons>
					<view class="text">
						下载
					</view>
				</view>
			</view>
		</view>
		
	</view>
</template>

<script setup>
	
</script>

<style>
	.preview {
		width: 100%;
		height: 100vh;
		position: relative;
		swiper {
			width: 100%;
			height: 100%;
			image {
				width: 100%;
				height: 100%;
			}
		}
	.mask {
		.goBack {
			
		}
		.count {
			position: absolute;
			top: 10vh;
			right: 0;
			left: 0;
			margin: auto;
			/* 太长太短都不行，内容自适应就行 */
			width: fit-content;
			background: rgba(0, 0, 0, .3);
			font-size: 28rpx;
			color: #fff;
			border-radius: 40rpx;
			padding: 8rpx 28rpx;
			/* 模糊效果 */
			backdrop-filter: blur(10rpx);
		}
		.time {
			
		}
		.date {
			
		}
		.footer {
			
		}
		
	}
}
</style>
