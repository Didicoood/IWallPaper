<template>
	<view class="preview">
		<swiper circular>
			<swiper-item v-for="item in 10">
				<image @click="maskChange" src="../../common/images/preview2.jpg" mode="aspectFill"></image>
			</swiper-item>
		</swiper>
		
		<!-- 模态框 -->
		<view v-if="maskState" class="mask">
			<view @click="handleGoBack" class="goBack" :style="{top: getStatusBarHeight() + 'px', marginLeft: getLeftIconLeft() + 'px'}">
				<uni-icons type="left" color="#fff" size="20"></uni-icons>
			</view>
			<view class="count">
				3/9
			</view>
			<view class="time">
				<uni-dateformat :date="new Date()" format="hh:mm"></uni-dateformat>
			</view>
			<view class="date">
				<uni-dateformat :date="new Date()" format="MM月dd日"></uni-dateformat>
			</view>
			<view class="footer">
				<view @click="handleClickInfo" class="box">
					<uni-icons type="info" size="28"></uni-icons>
					<view class="text">
						信息
					</view>
				</view>
				<view class="box" @click="handleClickRate">
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
		<!-- 操作栏 -->
		<uni-popup ref="infoPopup" type="bottom" border-radius="10px 10px 0 0">
			<view class="infoPopup">
				<view class="popHeader">
				<!-- 空盒子为了平均分布，方便布局 -->
				<view></view>
				<view class="title">
					壁纸信息
				</view>
				<view class="close" @click="handleClickInfoClose">
					<uni-icons type="closeempty" size="18" color="#999"></uni-icons>
				</view>
				</view>
				<scroll-view scroll-y >
					<view class="content">
						<view class="row" >
							<view class="label">
								UUID：
							</view>
							<view class="value" selectable>
								XXXXXXXXXX
							</view>
						</view><view class="row" >
							<view class="label">
								分类：
							</view>
							<view class="value catergory" selectable>
								XXXXXXXXXX
							</view>
						</view><view class="row" >
							<view class="label">
								发布者：
							</view>
							<view class="value" selectable>
								XXXXXXXXXX
							</view>
						</view>
						<view class="row" >
							<view class="label">
								评分：
							</view>
							<view class="value rateBox" >
								<uni-rate readonly touchable size="16"/>
								<text class="score">5分</text>
							</view>
						</view>
						<view class="row" >
							<view class="label">
								摘要：
							</view>
							<view class="value" selectable>
								XXXXXXXXXX
							</view>
						</view>
						<view class="row" >
							<text class="label">
								标签：
							</text>
							<view class="value tabs" selectable>
								<view class="tab" v-for="item in 3">
									标签名
								</view>
							</view>
						</view>
						<view class="row" >
							<text class="label">
								声明：
							</text>
							<view class="value" selectable>
								壁纸均由网络收集，如侵犯了您的版权权益，可以将UUID举报至平台，邮箱2673013887@qq.com,管理员将删除侵犯壁纸，维护您的权益。
							</view>
						</view>
					</view>
				</scroll-view>
			</view>
		</uni-popup>
		<uni-popup ref="ratePopup" type="center" border-radius="10px 10px 0 0" :is-mask-click="false">
			<view class="ratePopup">
				
			
			<view class="popHeader">
			<!-- 空盒子为了平均分布，方便布局 -->
			<view></view>
			<view class="title">
				评分信息
			</view>
			<view class="close" @click="handleClickRateClose">
				<uni-icons type="closeempty" size="18" color="#999"></uni-icons>
			</view>
			</view>
			<view class="content">
				<uni-rate allowHalf v-model="userRate" />
				<text class="text">{{userRate}} 分</text>
			</view>
			<view class="footer">
				<button type="default" size="mini" plain :disabled="!userRate" @click="handleConfirmRate">确认</button>
				<button type="warn" size="mini"  @click="handleClickRateClose">取消</button>
			</view>
			</view>
		</uni-popup>
	</view>
</template>

<script setup>
import { ref } from 'vue';
import {getStatusBarHeight, getLeftIconLeft} from '@/utils/system.js'
	// 点击图片隐藏遮罩层
	const maskState = ref(true)
	const maskChange = () => {
		maskState.value = !maskState.value
	}
	// 信息弹窗
	const infoPopup = ref()
	const handleClickInfo = () => {
		infoPopup.value.open()
	}
	const handleClickInfoClose = () => {
		infoPopup.value.close()
	}
	
	// 评分
	const userRate = ref()
	const ratePopup = ref()
	const handleClickRate = () => {
		ratePopup.value.open()
	}
	// 关闭评分
	const handleClickRateClose = () => {
		ratePopup.value.close()
	}
	// 确认评分
	const handleConfirmRate = () => {
		ratePopup.value.close()
	}
	// 返回
	const handleGoBack = () => {
		uni.navigateBack()
	}
</script>

<style lang="scss">
	.preview {
		width: 100%;
		height: 100vh;
		position: relative;
		.popHeader {
			display: flex;
			justify-content: space-between;
			align-items: center;
			.title {
				color: $text-font-color-2;
				font-size: 26rpx;
			}
			.close {
				padding: 6rpx;
			}
		}
		swiper {
			width: 100%;
			height: 100%;
			image {
				width: 100%;
				height: 100%;
			}
		}
	.mask {
		&>view{
			position: absolute;
			left: 0;
			margin: auto;
			color: #eee;
			 right: 0;
			 width: fit-content;
		}
		.goBack {
			width: 38px;
			height: 38px;
			background:rgba(0, 0, 0, .5) ;
			left: 30rpx;
			margin-left: 0%;
			border-radius: 100px;
			top: 0%;
			backdrop-filter: blur(10rpx);
			border: 1px solid rgba(255, 255, 255, 0.3);
			display: flex;
			justify-content: center;
			align-items: center;
		}
		.count {
			
			top: 10vh;
			/* 太长太短都不行，内容自适应就行 */
			
			background: rgba(0, 0, 0, .3);
			font-size: 28rpx;
			
			border-radius: 40rpx;
			padding: 8rpx 28rpx;
			/* 模糊效果 */
			backdrop-filter: blur(10rpx);
		}
		.time {
			
			font-size: 140rpx;
			/* calc()计算的时候符号要有空格 */
			top: calc(10vh + 80rpx);
			font-weight: 100;
			line-height: 1em;
			/* 避免白色背景混淆时间 */
			text-shadow: 0 4rpx rgba(0, 0, 0,0.3);
		}
		.date {
			font-size: 34rpx;
			/* calc()计算的时候符号要有空格 */
			top: calc(10vh + 210rpx);
			text-shadow: 0 4rpx rgba(0, 0, 0,0.3);
		}
		.footer {
			background: rgba(255, 255, 255, 0.8);
			bottom: 10vh ;
			display: flex;
			width: 65vw;
			height: 120rpx;
			border-radius: 120rpx;
			color: #000;
			justify-content: space-around;
			align-items: center;
			box-shadow: 0 4rpx rgba(0, 0, 0,0.3);
			backdrop-filter: blur(20rpx);
			.box {
				display: flex;
				flex-direction: column;
				justify-content: center;
				align-items: center;
				padding: 2rpx 12rpx;
				.text {
					font-size: 26rpx;
					color: $text-font-color-2;
				}
			}
		}
		
	}
	.infoPopup {
		background-color: #fff;
		padding: 30rpx;
		border-radius: 30rpx 30rpx 0 0;
		overflow: hidden;
		
		scroll-view {
			max-height: 60vh;
			.content {
				.row {
					display: flex;
					padding: 16rpx;
					font-size: 32rpx;
					line-height: 1.7em;
					.label {
						color: $text-font-color-3;
						width: 140rpx;
						text-align: right;
						font-size: 30rpx;
					}
					.value {
						flex: 1;
						width: 0;
					}
					.rateBox {
						display: flex;
						align-items: center;
					.score {
						font-size: 26rpx;
						color: $text-font-color-2 ;
						padding-left: 20rpx;
					}
					}
					.tabs {
						display: flex;
						flex-wrap: wrap;
						.tab {
							border: 1px solid $brand-theme-color;
							color: $brand-theme-color;
							font-size: 22rpx;
							padding: 10rpx 30rpx;
							border-radius: 40rpx;
							line-height: 29rpx;
							margin: 0 10rpx 10rpx 0;
							
						}
					}
					.catergory {
							color: $brand-theme-color;
					}
				}
			}
		}
	}
	.ratePopup {
		background: #fff;
		padding: 30rpx;
		width: 70vw;
		border-radius: 30rpx;
		.content {
			padding: 30rpx 0;
			display: flex;
			justify-content: center;
			align-items: center;
			.text {
				width: 100rpx;
				text-align: right;
				padding-left: 10rpx;
				color: #ffca3e;
			}
		}
		.footer {
			display: flex;
			justify-content: space-around;
			button {
				flex: 1;
				&:first-child {
					margin-right: 60rpx;
				}
			}
		}
	}
}
</style>
