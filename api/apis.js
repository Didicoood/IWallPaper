import {request} from "../utils/request";
/**
 * 获取轮播图
*/
export function apiGetBanner () {
	return request({
		url: '/homeBanner',
	})
}
/**
 * 获取随机图
*/
export function apiGetDayRandom () {
	return request({
		url: '/randomWall',
	})
}


/**
 * 获取公告列表
*/
export function apiGetNotice (data={}) {
	return request({
		url: '/wallNewsList',
		data
	})
}

/**
 * 获取分类
*/
export function apiGetCatergory (data={}) {
	return request({
		url: '/classify',
		data
	})
}
/**
 * 获取分类列表
*/
export function apiGetCatergoryList (data={}) {
	return request({
		url: '/wallList',
		data
	})
}

/**
 * 评分
*/
export function apiScore (data={}) {
	return request({
		url: '/setupScore',
		data
	})
}


/**
 * 评分
*/
export function apiWriteDownload (data={}) {
	return request({
		url: '/downloadWall',
		data
	})
}

/**
 * 壁纸详情
*/
export function apiDetailWall (data={}) {
	return request({
		url: '/detailWall',
		data
	})
}

