"use strict";
const common_vendor = require("../../common/vendor.js");
const api_apis = require("../../api/apis.js");
if (!Array) {
  const _easycom_uni_load_more2 = common_vendor.resolveComponent("uni-load-more");
  _easycom_uni_load_more2();
}
const _easycom_uni_load_more = () => "../../uni_modules/uni-load-more/components/uni-load-more/uni-load-more.js";
if (!Math) {
  _easycom_uni_load_more();
}
const _sfc_main = {
  __name: "catergoryList",
  setup(__props) {
    const catergoryList = common_vendor.ref([]);
    const queryParamas = {
      pageNum: 1,
      pageSize: 12
    };
    const dataFlag = common_vendor.ref(false);
    const getCatergoryList = async () => {
      const res = await api_apis.apiGetCatergoryList(queryParamas);
      catergoryList.value = [...catergoryList.value, ...res.data];
      if (queryParamas.pageSize > res.data.length)
        dataFlag.value = true;
      common_vendor.index.setStorageSync("storgCatergoryList", catergoryList.value);
    };
    common_vendor.onLoad((e) => {
      let { id = null, name = null } = e;
      queryParamas.classid = id;
      common_vendor.index.setNavigationBarTitle({
        title: name
      });
      getCatergoryList();
    });
    common_vendor.onReachBottom(() => {
      if (dataFlag.value)
        return;
      queryParamas.pageNum += 1;
      getCatergoryList();
    });
    common_vendor.onPullDownRefresh(() => {
      getCatergoryList();
    });
    return (_ctx, _cache) => {
      return common_vendor.e({
        a: !catergoryList.value.length && !dataFlag.value
      }, !catergoryList.value.length && !dataFlag.value ? {
        b: common_vendor.p({
          status: "loading"
        })
      } : {}, {
        c: common_vendor.f(catergoryList.value, (item, k0, i0) => {
          return {
            a: item.smallPicurl,
            b: "/pages/preview/preview?id=" + item._id,
            c: item._id
          };
        }),
        d: dataFlag.value || catergoryList.value.length
      }, dataFlag.value || catergoryList.value.length ? {
        e: common_vendor.p({
          status: dataFlag.value ? "noMore" : "loading"
        })
      } : {});
    };
  }
};
const MiniProgramPage = /* @__PURE__ */ common_vendor._export_sfc(_sfc_main, [["__scopeId", "data-v-65898d46"]]);
wx.createPage(MiniProgramPage);
