"use strict";
const common_vendor = require("../../common/vendor.js");
const common_assets = require("../../common/assets.js");
const _sfc_main = {};
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
function _sfc_render(_ctx, _cache) {
  return {
    a: common_vendor.p({
      title: "推荐"
    }),
    b: common_vendor.f(3, (item, k0, i0) => {
      return {};
    }),
    c: common_assets._imports_0,
    d: common_vendor.p({
      type: "sound",
      size: "30",
      color: "$brand-theme-color"
    }),
    e: common_vendor.f(5, (item, k0, i0) => {
      return {};
    }),
    f: common_vendor.p({
      type: "right",
      size: "16",
      color: "#333"
    }),
    g: common_vendor.p({
      type: "calendar",
      size: "18",
      color: "$brand-theme-color"
    }),
    h: common_vendor.p({
      format: "dd号",
      date: /* @__PURE__ */ new Date()
    }),
    i: common_vendor.f(5, (item, k0, i0) => {
      return {};
    }),
    j: common_assets._imports_1,
    k: common_vendor.f(8, (item, k0, i0) => {
      return {
        a: "1cf27b2a-7-" + i0
      };
    }),
    l: common_vendor.p({
      isMore: true
    })
  };
}
const MiniProgramPage = /* @__PURE__ */ common_vendor._export_sfc(_sfc_main, [["render", _sfc_render], ["__scopeId", "data-v-1cf27b2a"]]);
wx.createPage(MiniProgramPage);
