"use strict";
const common_vendor = require("../../common/vendor.js");
const api_apis = require("../../api/apis.js");
if (!Array) {
  const _easycom_custom_nav_bar2 = common_vendor.resolveComponent("custom-nav-bar");
  const _easycom_uni_icons2 = common_vendor.resolveComponent("uni-icons");
  const _easycom_uni_dateformat2 = common_vendor.resolveComponent("uni-dateformat");
  const _easycom_common_titel2 = common_vendor.resolveComponent("common-titel");
  const _easycom_theme_item2 = common_vendor.resolveComponent("theme-item");
  (_easycom_custom_nav_bar2 + _easycom_uni_icons2 + _easycom_uni_dateformat2 + _easycom_common_titel2 + _easycom_theme_item2)();
}
const _easycom_custom_nav_bar = () => "../../components/custom-nav-bar/custom-nav-bar.js";
const _easycom_uni_icons = () => "../../uni_modules/uni-icons/components/uni-icons/uni-icons.js";
const _easycom_uni_dateformat = () => "../../uni_modules/uni-dateformat/components/uni-dateformat/uni-dateformat.js";
const _easycom_common_titel = () => "../../components/common-titel/common-titel.js";
const _easycom_theme_item = () => "../../components/theme-item/theme-item.js";
if (!Math) {
  (_easycom_custom_nav_bar + _easycom_uni_icons + _easycom_uni_dateformat + _easycom_common_titel + _easycom_theme_item)();
}
const _sfc_main = {
  __name: "index",
  setup(__props) {
    const randomList = common_vendor.ref([]);
    const bannerList = common_vendor.ref([]);
    const noticeList = common_vendor.ref([]);
    const catergoryList = common_vendor.ref([]);
    const getbannerList = async () => {
      const res = await api_apis.apiGetBanner();
      bannerList.value = res.data;
    };
    const getDayRandom = async () => {
      const res = await api_apis.apiGetDayRandom();
      randomList.value = res.data;
    };
    const getNotice = async () => {
      const res = await api_apis.apiGetNotice({ select: true });
      noticeList.value = res.data;
    };
    const getCatergory = async () => {
      const res = await api_apis.apiGetCatergory({ select: true });
      catergoryList.value = res.data;
    };
    const goPrevieww = () => {
      common_vendor.index.setStorageSync("storgCatergoryList", randomList.value);
    };
    common_vendor.onMounted(() => {
      getbannerList();
      getDayRandom();
      getNotice();
      getCatergory();
    });
    common_vendor.onShareAppMessage((e) => {
      return {
        title: "IWallPaper手机壁纸",
        path: "/pages/index/index"
      };
    });
    common_vendor.onShareTimeline(() => {
      return {
        title: "IWallPaper手机壁纸"
      };
    });
    return (_ctx, _cache) => {
      return {
        a: common_vendor.p({
          title: "推荐"
        }),
        b: common_vendor.f(bannerList.value, (item, index, i0) => {
          return {
            a: item.picurl,
            b: item._id
          };
        }),
        c: common_vendor.p({
          type: "sound",
          size: "30",
          color: "$brand-theme-color"
        }),
        d: common_vendor.f(noticeList.value, (item, index, i0) => {
          return {
            a: item._id
          };
        }),
        e: common_vendor.p({
          type: "right",
          size: "16",
          color: "#333"
        }),
        f: common_vendor.p({
          type: "calendar",
          size: "18",
          color: "$brand-theme-color"
        }),
        g: common_vendor.p({
          format: "dd号",
          date: /* @__PURE__ */ new Date()
        }),
        h: common_vendor.f(randomList.value, (item, index, i0) => {
          return {
            a: item.smallPicurl,
            b: "/pages/preview/preview?id=" + item._id,
            c: common_vendor.o(goPrevieww, item.classid),
            d: item.classid
          };
        }),
        i: common_vendor.f(catergoryList.value, (item, index, i0) => {
          return {
            a: item._id,
            b: "1cf27b2a-7-" + i0,
            c: common_vendor.p({
              item
            })
          };
        }),
        j: common_vendor.p({
          isMore: true
        })
      };
    };
  }
};
const MiniProgramPage = /* @__PURE__ */ common_vendor._export_sfc(_sfc_main, [["__scopeId", "data-v-1cf27b2a"]]);
_sfc_main.__runtimeHooks = 6;
wx.createPage(MiniProgramPage);
