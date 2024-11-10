"use strict";
const common_vendor = require("../../common/vendor.js");
const common_assets = require("../../common/assets.js");
const utils_common = require("../../utils/common.js");
if (!Array) {
  const _easycom_uni_icons2 = common_vendor.resolveComponent("uni-icons");
  _easycom_uni_icons2();
}
const _easycom_uni_icons = () => "../../uni_modules/uni-icons/components/uni-icons/uni-icons.js";
if (!Math) {
  _easycom_uni_icons();
}
const _sfc_main = {
  __name: "theme-item",
  props: {
    isMore: {
      type: Boolean,
      default: false
    },
    item: {
      // 对象的默认值要使用函数
      type: Object,
      default() {
        return {
          name: "default",
          picurl: "../../common/images/classify2.jpg",
          updateTime: Date.now() - 1e3 * 60 * 60 * 5
        };
      }
    }
  },
  setup(__props) {
    const props = __props;
    const compareTime = common_vendor.computed(() => {
      return utils_common.compareTimestamp(props.item.updateTime);
    });
    return (_ctx, _cache) => {
      return common_vendor.e({
        a: !__props.isMore
      }, !__props.isMore ? common_vendor.e({
        b: __props.item.picurl,
        c: common_vendor.t(__props.item.name),
        d: compareTime.value
      }, compareTime.value ? {
        e: common_vendor.t(compareTime.value)
      } : {}, {
        f: "../../pages/catergoryList/catergoryList?id=" + __props.item._id + "&name=" + __props.item.name
      }) : {}, {
        g: __props.isMore
      }, __props.isMore ? {
        h: common_assets._imports_0$1,
        i: common_vendor.p({
          type: "more-filled",
          size: "34",
          color: "#fff"
        })
      } : {});
    };
  }
};
const Component = /* @__PURE__ */ common_vendor._export_sfc(_sfc_main, [["__scopeId", "data-v-f4eafbca"]]);
wx.createComponent(Component);
