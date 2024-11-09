"use strict";
const common_vendor = require("../../common/vendor.js");
const common_assets = require("../../common/assets.js");
const utils_system = require("../../utils/system.js");
if (!Array) {
  const _easycom_uni_icons2 = common_vendor.resolveComponent("uni-icons");
  const _easycom_uni_dateformat2 = common_vendor.resolveComponent("uni-dateformat");
  const _easycom_uni_rate2 = common_vendor.resolveComponent("uni-rate");
  const _easycom_uni_popup2 = common_vendor.resolveComponent("uni-popup");
  (_easycom_uni_icons2 + _easycom_uni_dateformat2 + _easycom_uni_rate2 + _easycom_uni_popup2)();
}
const _easycom_uni_icons = () => "../../uni_modules/uni-icons/components/uni-icons/uni-icons.js";
const _easycom_uni_dateformat = () => "../../uni_modules/uni-dateformat/components/uni-dateformat/uni-dateformat.js";
const _easycom_uni_rate = () => "../../uni_modules/uni-rate/components/uni-rate/uni-rate.js";
const _easycom_uni_popup = () => "../../uni_modules/uni-popup/components/uni-popup/uni-popup.js";
if (!Math) {
  (_easycom_uni_icons + _easycom_uni_dateformat + _easycom_uni_rate + _easycom_uni_popup)();
}
const _sfc_main = {
  __name: "preview",
  setup(__props) {
    const maskState = common_vendor.ref(true);
    const maskChange = () => {
      maskState.value = !maskState.value;
    };
    const infoPopup = common_vendor.ref();
    const handleClickInfo = () => {
      infoPopup.value.open();
    };
    const handleClickInfoClose = () => {
      infoPopup.value.close();
    };
    const userRate = common_vendor.ref();
    const ratePopup = common_vendor.ref();
    const handleClickRate = () => {
      ratePopup.value.open();
    };
    const handleClickRateClose = () => {
      ratePopup.value.close();
    };
    const handleConfirmRate = () => {
      ratePopup.value.close();
    };
    const handleGoBack = () => {
      common_vendor.index.navigateBack();
    };
    return (_ctx, _cache) => {
      return common_vendor.e({
        a: common_vendor.f(10, (item, k0, i0) => {
          return {};
        }),
        b: common_vendor.o(maskChange),
        c: common_assets._imports_0$3,
        d: maskState.value
      }, maskState.value ? {
        e: common_vendor.p({
          type: "left",
          color: "#fff",
          size: "20"
        }),
        f: common_vendor.o(handleGoBack),
        g: common_vendor.unref(utils_system.getStatusBarHeight)() + "px",
        h: common_vendor.unref(utils_system.getLeftIconLeft)() + "px",
        i: common_vendor.p({
          date: /* @__PURE__ */ new Date(),
          format: "hh:mm"
        }),
        j: common_vendor.p({
          date: /* @__PURE__ */ new Date(),
          format: "MM月dd日"
        }),
        k: common_vendor.p({
          type: "info",
          size: "28"
        }),
        l: common_vendor.o(handleClickInfo),
        m: common_vendor.p({
          type: "star",
          size: "28"
        }),
        n: common_vendor.o(handleClickRate),
        o: common_vendor.p({
          type: "download",
          size: "28"
        })
      } : {}, {
        p: common_vendor.p({
          type: "closeempty",
          size: "18",
          color: "#999"
        }),
        q: common_vendor.o(handleClickInfoClose),
        r: common_vendor.p({
          readonly: true,
          touchable: true,
          size: "16"
        }),
        s: common_vendor.f(3, (item, k0, i0) => {
          return {};
        }),
        t: common_vendor.sr(infoPopup, "1f3d8d5c-6", {
          "k": "infoPopup"
        }),
        v: common_vendor.p({
          type: "bottom",
          ["border-radius"]: "10px 10px 0 0"
        }),
        w: common_vendor.p({
          type: "closeempty",
          size: "18",
          color: "#999"
        }),
        x: common_vendor.o(handleClickRateClose),
        y: common_vendor.o(($event) => userRate.value = $event),
        z: common_vendor.p({
          allowHalf: true,
          modelValue: userRate.value
        }),
        A: common_vendor.t(userRate.value),
        B: !userRate.value,
        C: common_vendor.o(handleConfirmRate),
        D: common_vendor.o(handleClickRateClose),
        E: common_vendor.sr(ratePopup, "1f3d8d5c-9", {
          "k": "ratePopup"
        }),
        F: common_vendor.p({
          type: "center",
          ["border-radius"]: "10px 10px 0 0",
          ["is-mask-click"]: false
        })
      });
    };
  }
};
wx.createPage(_sfc_main);
