"use strict";
const common_vendor = require("../../common/vendor.js");
const utils_system = require("../../utils/system.js");
const api_apis = require("../../api/apis.js");
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
    const catergoryList = common_vendor.ref([]);
    const currentId = common_vendor.ref();
    const currentIndex = common_vendor.ref(0);
    const readImgs = common_vendor.ref([]);
    const currentInfo = common_vendor.ref();
    const isScore = common_vendor.ref(false);
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
      if (currentInfo.value.userScore) {
        isScore.value = true;
        userRate.value = currentInfo.value.userScore;
      }
      ratePopup.value.open();
    };
    const handleClickRateClose = () => {
      isScore.value = false;
      ratePopup.value.close();
    };
    const handleConfirmRate = async () => {
      const res = await api_apis.apiScore({ userScore: userRate.value, classid: currentInfo.value.classid, wallId: currentInfo.value._id });
      if (res.errCode === 0) {
        common_vendor.index.showToast({
          title: "评分成功",
          icon: "none"
        });
      }
      catergoryList.value[currentIndex.value].userScore = userRate.value;
      common_vendor.index.setStorageSync("storgCatergoryList", catergoryList.value);
      handleClickRateClose();
    };
    const handleGoBack = () => {
      common_vendor.index.navigateBack();
    };
    const storgCatergoryList = common_vendor.index.getStorageSync("storgCatergoryList") || [];
    catergoryList.value = storgCatergoryList.map((item) => {
      return {
        ...item,
        picurl: item.smallPicurl.replace("_small.webp", ".jpg")
      };
    });
    const handleChangePic = (e) => {
      currentIndex.value = e.detail.current;
      readImgsFun();
      currentInfo.value = catergoryList.value[currentIndex.value];
    };
    const readImgsFun = () => {
      readImgs.value.push(
        currentIndex.value <= 0 ? catergoryList.value.length - 1 : currentIndex.value - 1,
        currentIndex.value,
        currentIndex.value >= catergoryList.value.length - 1 ? 0 : currentIndex.value + 1
      );
      readImgs.value = [...new Set(readImgs.value)];
    };
    const handleDownload = async () => {
      try {
        common_vendor.index.showLoading({
          title: "下载中",
          mask: true
        });
        const res = await api_apis.apiWriteDownload({ classid: currentInfo.value.classid, wallId: currentInfo.value._id });
        if (res.errCode != 0)
          throw res;
        common_vendor.index.getImageInfo({
          src: currentInfo.value.picurl,
          success: (e) => {
            common_vendor.index.saveImageToPhotosAlbum({
              filePath: e.path,
              success: (e2) => {
                common_vendor.index.showToast({
                  title: "保存成功",
                  icon: "none"
                });
              },
              fail: (err) => {
                if (err.errMsg == "saveImageToPhotosAlbum:fail cancel") {
                  common_vendor.index.showToast({
                    title: "保存失败",
                    icon: "none"
                  });
                  return;
                }
                common_vendor.index.showModal({
                  title: "提示",
                  content: "需要授权保存相册权限",
                  success: (res2) => {
                    if (res2.confirm) {
                      common_vendor.index.openSetting({
                        success(setting) {
                          if (setting.authSetting["scope.writePhotosAlbum"]) {
                            common_vendor.index.showToast({
                              title: "授权成功",
                              icon: "none"
                            });
                          } else {
                            common_vendor.index.showToast({
                              title: "授权失败",
                              icon: "none"
                            });
                          }
                        }
                      });
                    }
                  }
                });
              },
              complete() {
                common_vendor.index.hideLoading();
              }
            });
          }
        });
      } catch (err) {
        common_vendor.index.hideLoading();
      }
    };
    common_vendor.onLoad((e) => {
      let { id = null } = e;
      currentId.value = id;
      currentIndex.value = catergoryList.value.findIndex((item) => item._id === currentId.value);
      currentInfo.value = catergoryList.value[currentIndex.value];
      readImgsFun();
    });
    return (_ctx, _cache) => {
      return common_vendor.e({
        a: currentInfo.value
      }, currentInfo.value ? common_vendor.e({
        b: common_vendor.f(catergoryList.value, (item, index, i0) => {
          return common_vendor.e({
            a: readImgs.value.includes(index)
          }, readImgs.value.includes(index) ? {
            b: common_vendor.o(maskChange, item._id),
            c: item.picurl
          } : {}, {
            d: item._id
          });
        }),
        c: currentIndex.value,
        d: common_vendor.o(handleChangePic),
        e: maskState.value
      }, maskState.value ? common_vendor.e({
        f: common_vendor.p({
          type: "left",
          color: "#fff",
          size: "20"
        }),
        g: common_vendor.o(handleGoBack),
        h: common_vendor.unref(utils_system.getStatusBarHeight)() + "px",
        i: common_vendor.unref(utils_system.getLeftIconLeft)() + "px",
        j: common_vendor.t(currentIndex.value + 1),
        k: common_vendor.t(catergoryList.value.length),
        l: common_vendor.p({
          date: /* @__PURE__ */ new Date(),
          format: "hh:mm"
        }),
        m: common_vendor.p({
          date: /* @__PURE__ */ new Date(),
          format: "MM月dd日"
        }),
        n: currentInfo.value
      }, currentInfo.value ? {
        o: common_vendor.p({
          type: "info",
          size: "28"
        }),
        p: common_vendor.o(handleClickInfo),
        q: common_vendor.p({
          type: "star",
          size: "28"
        }),
        r: common_vendor.t(currentInfo.value.score),
        s: common_vendor.o(handleClickRate),
        t: common_vendor.p({
          type: "download",
          size: "28"
        }),
        v: common_vendor.o(handleDownload)
      } : {}) : {}, {
        w: common_vendor.p({
          type: "closeempty",
          size: "18",
          color: "#999"
        }),
        x: common_vendor.o(handleClickInfoClose),
        y: currentInfo.value
      }, currentInfo.value ? {
        z: common_vendor.t(currentInfo.value._id),
        A: common_vendor.t(currentInfo.value._id),
        B: common_vendor.t(currentInfo.value.nickname),
        C: common_vendor.p({
          readonly: true,
          value: currentInfo.value.score,
          touchable: true,
          size: "16"
        }),
        D: common_vendor.t(currentInfo.value.score),
        E: common_vendor.t(currentInfo.value.description),
        F: common_vendor.f(currentInfo.value.tabs, (item, k0, i0) => {
          return {
            a: common_vendor.t(item),
            b: item._id
          };
        })
      } : {}, {
        G: common_vendor.sr(infoPopup, "1f3d8d5c-6", {
          "k": "infoPopup"
        }),
        H: common_vendor.p({
          type: "bottom",
          ["border-radius"]: "10px 10px 0 0"
        }),
        I: common_vendor.t(isScore.value ? "已评分" : "评分信息"),
        J: common_vendor.p({
          type: "closeempty",
          size: "18",
          color: "#999"
        }),
        K: common_vendor.o(handleClickRateClose),
        L: common_vendor.o(($event) => userRate.value = $event),
        M: common_vendor.p({
          disabled: isScore.value,
          allowHalf: true,
          modelValue: userRate.value
        }),
        N: common_vendor.t(userRate.value),
        O: !userRate.value || isScore.value,
        P: common_vendor.o(handleConfirmRate),
        Q: common_vendor.o(handleClickRateClose),
        R: common_vendor.sr(ratePopup, "1f3d8d5c-9", {
          "k": "ratePopup"
        }),
        S: common_vendor.p({
          type: "center",
          ["border-radius"]: "10px 10px 0 0",
          ["is-mask-click"]: false
        })
      }) : {});
    };
  }
};
wx.createPage(_sfc_main);
