<template>
	<view class="userLayout pageBg">
		<!-- 头像部分 -->
		<view class="userInfo">
			<view class="avatar">
				<image src="../../static/logo.jpg" mode="aspectFill"></image>
			</view>
			<view class="nickName">
				派大星
			</view>
			<view class="address">
				来自于: 深圳
			</view>
		</view>
		<!-- 选项 -->
		<view class="section">
			<view class="list">
				<navigator url="/pages/catergoryList/catergoryList">
					<view class="row">
					<view class="left">
						<uni-icons type="download-filled" size="20"></uni-icons>
						<view class="text">
							我的下载
						</view>
					</view>
					<view class="right">
						<view class="text">
							0
						</view>
						<uni-icons type="right" size="15" color="#aaa"></uni-icons>
					</view>
					</view>
				</navigator>
			</view>
			<view class="list">
				<navigator url="/pages/catergoryList/catergoryList" class="">
					<view class="row">
						
					<view class="left">
						<uni-icons type="star-filled" size="20"></uni-icons>
						<view class="text">
							我的评分
						</view>
					</view>
					<view class="right">
						<view class="text">
							0
						</view>
						<uni-icons type="right" size="15" color="#aaa"></uni-icons>
					</view>
					</view>
				</navigator>
			</view>
			<view class="list">
				<view class="row">
					<view class="left">
						<uni-icons type="chatboxes-filled" size="20"></uni-icons>
						<view class="text">
							联系客服
						</view>
					</view>
					<view class="right">
						<view class="text">
							0
						</view>
						<uni-icons type="right" size="15" color="#aaa"></uni-icons>
						<!-- #ifdef MP -->
						<button open-type="contact">联系客服</button>
						<!-- #endif -->
						<!-- #ifndef MP -->
						<button @click="clickContact">拨打电话</button>
						<!-- #endif -->
					</view>
				</view>
			</view>
		</view>
		<view class="section">
			<view class="list">
				<view class="row">
					<view class="left">
						<uni-icons type="notification-filled" size="20"></uni-icons>
						<view class="text">
							订阅更新
						</view>
					</view>
					<view class="right">
						<view class="text">
							0
						</view>
						<uni-icons type="right" size="15" color="#aaa"></uni-icons>
					</view>
				</view>
			</view>
			<view class="list">
				<view class="row">
					<view class="left">
						<uni-icons type="info-filled" size="20"></uni-icons>
						<view class="text">
							常见问题
						</view>
					</view>
					<view class="right">
						<view class="text">
							0
						</view>
						<uni-icons type="right" size="15" color="#aaa"></uni-icons>
					</view>
				</view>
			</view>
		</view>
	</view>
</template>

<script setup>
	// #region 拨打电话
	const clickContact = () => {
		uni.makePhoneCall({
			phoneNumber: '19820141337'
		})
	}
	// #regionend
</script>

<style lang="scss" scoped>
	.userLayout {
		.userInfo {
			display: flex;
			justify-content: center;
			align-items: center;
			flex-direction: column;
			padding: 50rpx 0;

			.avatar {
				width: 160rpx;
				height: 160rpx;
				border-radius: 50%;
				overflow: hidden;

				image {
					width: 100%;
					height: 100%;
				}
			}

			.nickName {
				font-size: 44rpx;
				color: #333;
				padding: 20rpx 0 5rpx;
			}

			.address {
				font-size: 28rpx;
				color: #aaa;
			}
		}

		.section {
			width: 690rpx;
			margin: 50rpx auto;
			border: 1px solid #eee;
			border-radius: 10rpx;
			box-shadow: 0 0 30rpx rgba(0, 0, 0, .05);

			.list {
				.row {
					display: flex;
					justify-content: space-between;
					align-items: center;
					padding: 0 30rpx;
					height: 100rpx;
					border-bottom: 1px solid #eee;
					position: relative;
					background-color: #fff;

					&:last-child {
						// border-bottom: 0;
					}

					:deep() {
						.uni-icons {
							color: $brand-theme-color !important;
						}
					}

					.left {
						display: flex;
						justify-content: center;
						align-items: center;

						.text {
							padding-left: 20rpx;
							color: #666;
						}
					}

					.right {
						display: flex;
						justify-content: center;
						align-items: center;

						.text {
							font-size: 28rpx;
							color: #666;
							padding-right: 10rpx;
						}
					}

					button {
						position: absolute;
						top: 0;
						left: 0;
						height: 100rpx;
						width: 100%;
						opacity: 0;
					}
				}

			}
		}
	}
</style>