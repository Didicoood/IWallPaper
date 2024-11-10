<template>
	<view class="preview" v-if="currentInfo">
		<swiper circular :current="currentIndex" @change="handleChangePic">
			<swiper-item v-for="(item, index) in catergoryList" :key="item._id">
				<image v-if="readImgs.includes(index)"  @click="maskChange" :src="item.picurl" mode="aspectFill"></image>
			</swiper-item>
		</swiper>
		
		<!-- 模态框 -->
		<view v-if="maskState" class="mask">
			<view @click="handleGoBack" class="goBack" :style="{top: getStatusBarHeight() + 'px', marginLeft: getLeftIconLeft() + 'px'}">
				<uni-icons type="left" color="#fff" size="20"></uni-icons>
			</view>
			<view class="count">
				{{currentIndex + 1}}/{{catergoryList.length}}
			</view>
			<view class="time">
				<uni-dateformat :date="new Date()" format="hh:mm"></uni-dateformat>
			</view>
			<view class="date">
				<uni-dateformat :date="new Date()" format="MM月dd日"></uni-dateformat>
			</view>
			<view class="footer" v-if="currentInfo">
				<view @click="handleClickInfo" class="box">
					<uni-icons type="info" size="28"></uni-icons>
					<view class="text">
						信息
					</view>
				</view>
				<view class="box" @click="handleClickRate">
					<uni-icons type="star" size="28"></uni-icons>
					<view class="text">
						{{currentInfo.score}}分
					</view>
				</view>
				<view class="box" @click="handleDownload">
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
					<view class="content" v-if="currentInfo">
						<view class="row" >
							<view class="label">
								UUID：
							</view>
							<view class="value" selectable>
								{{currentInfo._id}}
							</view>
						</view><view class="row" >
							<view class="label">
								分类：
							</view>
							<view class="value catergory" selectable>
								{{currentInfo._id}}
							</view>
						</view><view class="row" >
							<view class="label">
								发布者：
							</view>
							<view class="value" selectable>
								{{currentInfo.nickname}}
							</view>
						</view>
						<view class="row" >
							<view class="label">
								评分：
							</view>
							<view class="value rateBox" >
								<uni-rate readonly :value="currentInfo.score" touchable size="16"/>
								<text class="score">{{currentInfo.score}}分</text>
							</view>
						</view>
						<view class="row" >
							<view class="label">
								摘要：
							</view>
							<view class="value" selectable>
								{{currentInfo.description}}
							</view>
						</view>
						<view class="row" >
							<text class="label">
								标签：
							</text>
							<view class="value tabs" selectable>
								<view class="tab" v-for="item in currentInfo.tabs" :key="item._id">
									{{item}}
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
				{{isScore? '已评分' : '评分信息'}}
			</view>
			<view class="close" @click="handleClickRateClose">
				<uni-icons type="closeempty" size="18" color="#999"></uni-icons>
			</view>
			</view>
			<view class="content">
				<uni-rate :disabled="isScore" allowHalf v-model="userRate" />
				<text class="text">{{userRate}} 分</text>
			</view>
			<view class="footer">
				<button type="default" size="mini" plain :disabled="!userRate || isScore" @click="handleConfirmRate">确认</button>
				<button type="warn" size="mini"  @click="handleClickRateClose">取消</button>
			</view>
			</view>
		</uni-popup>
	</view>
</template>

<script setup>
import { ref } from 'vue';
import {getStatusBarHeight, getLeftIconLeft} from '@/utils/system.js'
import {onLoad} from '@dcloudio/uni-app'
import {apiScore, apiWriteDownload} from '@/api/apis.js'
	// 点击图片隐藏遮罩层
	const maskState = ref(true)
	const catergoryList = ref([])
	const currentId = ref()
	const currentIndex = ref(0)
	const readImgs = ref([])
	const currentInfo = ref()
	const isScore = ref(false)
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
		if(currentInfo.value.userScore) {
			isScore.value = true
			userRate.value = currentInfo.value.userScore
		}
		ratePopup.value.open()
	}
	// 关闭评分
	const handleClickRateClose = () => {
		isScore.value = false
		ratePopup.value.close()
	}
	// 确认评分
	const handleConfirmRate = async () => {
		const res = await apiScore({userScore:userRate.value, classid:currentInfo.value.classid, wallId:currentInfo.value._id})
		if(res.errCode === 0) {
			uni.showToast({
				title:'评分成功',
				icon:'none'
			})
		}
		catergoryList.value[currentIndex.value].userScore = userRate.value
		// 覆盖原来的catergoryList
		uni.setStorageSync('storgCatergoryList', catergoryList.value)
		handleClickRateClose()
	}
	// 返回
	const handleGoBack = () => {
		uni.navigateBack()
	}
	const storgCatergoryList =  uni.getStorageSync('storgCatergoryList') || []
	catergoryList.value = storgCatergoryList.map(item => {
		return {
			...item,
			picurl: item.smallPicurl.replace('_small.webp', '.jpg')
		}
	})
	const handleChangePic = (e) => {
		currentIndex.value = e.detail.current
		// 滑动换图优化
		readImgsFun()
		currentInfo.value = catergoryList.value[currentIndex.value]
	}
	const readImgsFun = () => {
		readImgs.value.push(
		currentIndex.value <=0 ? catergoryList.value.length - 1: currentIndex.value - 1,
		currentIndex.value,
		currentIndex.value >= catergoryList.value.length - 1 ? 0 : currentIndex.value + 1
		)
		// 数组去重
		readImgs.value = [...new Set(readImgs.value)]
	}
	// 下载
	const handleDownload = async () => {
		// #ifdef H5
		uni.showModal({
			content:'长按保存',
			showCancel:false
		})
		// #endif
		// #ifndef H5
		try{
			
		
		uni.showLoading({
			title:'下载中',
			mask: true
		})
		// 记录下载
		const res = await apiWriteDownload({classid:currentInfo.value.classid, wallId:currentInfo.value._id})
		// 使用trycatch这里就不要使用return了，用throw把错误抛给catch
		// if(res.errCode != 0) return
		if(res.errCode != 0) throw res
		uni.getImageInfo({
			src:currentInfo.value.picurl,
			success: (e) => {
				uni.saveImageToPhotosAlbum({
					filePath:e.path,
					success: (e) => {
						uni.showToast({
							title:'保存成功',
							icon:'none'
						})
					},
					fail: (err) => {
						if(err.errMsg == 'saveImageToPhotosAlbum:fail cancel') {
							uni.showToast({
								title:'保存失败',
								icon:'none'
							})
							return
						}
						uni.showModal({
							title: '提示',
							content:'需要授权保存相册权限',
							success: (res) => {
								// 手动开启权限对话框
								if(res.confirm) {
									uni.openSetting({
										success(setting) {
											if(setting.authSetting['scope.writePhotosAlbum']) {
												uni.showToast({
													title: '授权成功',
													icon:'none'
												})
											}else {
												uni.showToast({
													title: '授权失败',
													icon:'none'
												})
											}
										}
									})
								}
							}
						})
					},
					complete() {
						uni.hideLoading()
					}
				})
			}
		})
		}catch(err) {
			uni.hideLoading()
		}
		// #endif
	}
	onLoad((e) => {
		let {id=null} = e
		currentId.value = id
		currentIndex.value = catergoryList.value.findIndex(item => item._id === currentId.value)
		currentInfo.value = catergoryList.value[currentIndex.value]
		readImgsFun()
	})
	
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
