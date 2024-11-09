const SYSTEM_INFO = uni.getSystemInfoSync()
const getStatusBarHeight = () => SYSTEM_INFO.statusBarHeight || 15
// 获取胶囊按钮
const getTitleBarHeight = () => {
	if (uni.getMenuButtonBoundingClientRect) {
		let {
			top,
			height
		} = uni.getMenuButtonBoundingClientRect()
		return height + (top - getStatusBarHeight()) * 2
	} else {
		return 40
	}
}
const getNavBarHeight = () => getStatusBarHeight() + getTitleBarHeight()

// 针对抖音
const getLeftIconLeft = () => {
	// #ifdef MP-TOUTIAO
	let {leftIcon: {left, width}} = tt.getCustomButtonBoundingClientRect()
	return left + parseInt(width)
	// #endif
	// #ifndef MP-TOUTIAO
	return 0
	// #endif
}
export {
	getStatusBarHeight,
	getTitleBarHeight,
	getNavBarHeight,
	getLeftIconLeft

}