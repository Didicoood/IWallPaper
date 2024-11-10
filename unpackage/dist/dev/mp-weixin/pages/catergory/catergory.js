"use strict";
const common_vendor = require("../../common/vendor.js");
const api_apis = require("../../api/apis.js");
if (!Array) {
  const _easycom_custom_nav_bar2 = common_vendor.resolveComponent("custom-nav-bar");
  const _easycom_theme_item2 = common_vendor.resolveComponent("theme-item");
  (_easycom_custom_nav_bar2 + _easycom_theme_item2)();
}
const _easycom_custom_nav_bar = () => "../../components/custom-nav-bar/custom-nav-bar.js";
const _easycom_theme_item = () => "../../components/theme-item/theme-item.js";
if (!Math) {
  (_easycom_custom_nav_bar + _easycom_theme_item)();
}
const _sfc_main = {
  __name: "catergory",
  setup(__props) {
    const catergoryList = common_vendor.ref([]);
    const getCatergory = async () => {
      const res = await api_apis.apiGetCatergory({ pageSize: 20 });
      catergoryList.value = res.data;
    };
    common_vendor.onMounted(() => {
      getCatergory();
    });
    return (_ctx, _cache) => {
      return {
        a: common_vendor.p({
          title: "分类"
        }),
        b: common_vendor.f(catergoryList.value, (item, index, i0) => {
          return {
            a: item._id,
            b: "09f4f211-1-" + i0,
            c: common_vendor.p({
              item
            })
          };
        })
      };
    };
  }
};
const MiniProgramPage = /* @__PURE__ */ common_vendor._export_sfc(_sfc_main, [["__scopeId", "data-v-09f4f211"]]);
wx.createPage(MiniProgramPage);
