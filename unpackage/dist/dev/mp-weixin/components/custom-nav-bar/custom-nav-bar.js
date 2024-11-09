"use strict";
const common_vendor = require("../../common/vendor.js");
const utils_system = require("../../utils/system.js");
if (!Array) {
  const _easycom_uni_icons2 = common_vendor.resolveComponent("uni-icons");
  _easycom_uni_icons2();
}
const _easycom_uni_icons = () => "../../uni_modules/uni-icons/components/uni-icons/uni-icons.js";
if (!Math) {
  _easycom_uni_icons();
}
const _sfc_main = {
  __name: "custom-nav-bar",
  props: {
    title: {
      type: String,
      default: "IWallPaper"
    }
  },
  setup(__props) {
    const statusBarHeight = common_vendor.ref(utils_system.getStatusBarHeight());
    const titleBarHeight = common_vendor.ref(utils_system.getTitleBarHeight());
    const navBarHeight = common_vendor.ref(utils_system.getNavBarHeight());
    return (_ctx, _cache) => {
      return {
        a: statusBarHeight.value + "px",
        b: common_vendor.t(__props.title),
        c: common_vendor.p({
          type: "search",
          size: "18"
        }),
        d: titleBarHeight.value + "px",
        e: common_vendor.unref(utils_system.getLeftIconLeft)() + "px",
        f: navBarHeight.value + "px"
      };
    };
  }
};
const Component = /* @__PURE__ */ common_vendor._export_sfc(_sfc_main, [["__scopeId", "data-v-412fc155"]]);
wx.createComponent(Component);
