(global["webpackJsonp"] = global["webpackJsonp"] || []).push([["components/bmusic"],{

/***/ 37:
/*!************************************************************************!*\
  !*** C:/Users/14163/Desktop/新建文件夹/easyMusicPlay/components/bmusic.vue ***!
  \************************************************************************/
/*! no static exports found */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _bmusic_vue_vue_type_template_id_461af066___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./bmusic.vue?vue&type=template&id=461af066& */ 38);
/* harmony import */ var _bmusic_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./bmusic.vue?vue&type=script&lang=js& */ 40);
/* harmony reexport (unknown) */ for(var __WEBPACK_IMPORT_KEY__ in _bmusic_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__) if(__WEBPACK_IMPORT_KEY__ !== 'default') (function(key) { __webpack_require__.d(__webpack_exports__, key, function() { return _bmusic_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__[key]; }) }(__WEBPACK_IMPORT_KEY__));
/* harmony import */ var _bmusic_vue_vue_type_style_index_0_lang_scss___WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./bmusic.vue?vue&type=style&index=0&lang=scss& */ 42);
/* harmony import */ var _D_software_EN_HBuilderX_2_3_0_20190919_full_HBuilderX_plugins_uniapp_cli_node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./node_modules/vue-loader/lib/runtime/componentNormalizer.js */ 14);






/* normalize component */

var component = Object(_D_software_EN_HBuilderX_2_3_0_20190919_full_HBuilderX_plugins_uniapp_cli_node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_3__["default"])(
  _bmusic_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__["default"],
  _bmusic_vue_vue_type_template_id_461af066___WEBPACK_IMPORTED_MODULE_0__["render"],
  _bmusic_vue_vue_type_template_id_461af066___WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"],
  false,
  null,
  null,
  null
  
)

/* hot reload */
if (false) { var api; }
component.options.__file = "C:/Users/14163/Desktop/新建文件夹/easyMusicPlay/components/bmusic.vue"
/* harmony default export */ __webpack_exports__["default"] = (component.exports);

/***/ }),

/***/ 38:
/*!*******************************************************************************************************!*\
  !*** C:/Users/14163/Desktop/新建文件夹/easyMusicPlay/components/bmusic.vue?vue&type=template&id=461af066& ***!
  \*******************************************************************************************************/
/*! exports provided: render, staticRenderFns */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _D_software_EN_HBuilderX_2_3_0_20190919_full_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_hbuilderx_packages_webpack_uni_nvue_loader_lib_templateLoader_js_vue_loader_options_D_software_EN_HBuilderX_2_3_0_20190919_full_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_17_0_D_software_EN_HBuilderX_2_3_0_20190919_full_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_webpack_uni_mp_loader_lib_template_js_D_software_EN_HBuilderX_2_3_0_20190919_full_HBuilderX_plugins_uniapp_cli_node_modules_vue_loader_lib_index_js_vue_loader_options_D_software_EN_HBuilderX_2_3_0_20190919_full_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_custom_block_loader_index_js_ref_0_1_D_software_EN_HBuilderX_2_3_0_20190919_full_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_webpack_uni_mp_loader_lib_style_js_bmusic_vue_vue_type_template_id_461af066___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!./node_modules/@dcloudio/vue-cli-plugin-hbuilderx/packages/webpack-uni-nvue-loader/lib/templateLoader.js??vue-loader-options!./node_modules/@dcloudio/vue-cli-plugin-uni/packages/webpack-preprocess-loader??ref--17-0!./node_modules/@dcloudio/webpack-uni-mp-loader/lib/template.js!./node_modules/vue-loader/lib??vue-loader-options!./node_modules/@dcloudio/vue-cli-plugin-uni/packages/webpack-custom-block-loader??ref--0-1!./node_modules/@dcloudio/webpack-uni-mp-loader/lib/style.js!./bmusic.vue?vue&type=template&id=461af066& */ 39);
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "render", function() { return _D_software_EN_HBuilderX_2_3_0_20190919_full_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_hbuilderx_packages_webpack_uni_nvue_loader_lib_templateLoader_js_vue_loader_options_D_software_EN_HBuilderX_2_3_0_20190919_full_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_17_0_D_software_EN_HBuilderX_2_3_0_20190919_full_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_webpack_uni_mp_loader_lib_template_js_D_software_EN_HBuilderX_2_3_0_20190919_full_HBuilderX_plugins_uniapp_cli_node_modules_vue_loader_lib_index_js_vue_loader_options_D_software_EN_HBuilderX_2_3_0_20190919_full_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_custom_block_loader_index_js_ref_0_1_D_software_EN_HBuilderX_2_3_0_20190919_full_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_webpack_uni_mp_loader_lib_style_js_bmusic_vue_vue_type_template_id_461af066___WEBPACK_IMPORTED_MODULE_0__["render"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "staticRenderFns", function() { return _D_software_EN_HBuilderX_2_3_0_20190919_full_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_hbuilderx_packages_webpack_uni_nvue_loader_lib_templateLoader_js_vue_loader_options_D_software_EN_HBuilderX_2_3_0_20190919_full_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_17_0_D_software_EN_HBuilderX_2_3_0_20190919_full_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_webpack_uni_mp_loader_lib_template_js_D_software_EN_HBuilderX_2_3_0_20190919_full_HBuilderX_plugins_uniapp_cli_node_modules_vue_loader_lib_index_js_vue_loader_options_D_software_EN_HBuilderX_2_3_0_20190919_full_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_custom_block_loader_index_js_ref_0_1_D_software_EN_HBuilderX_2_3_0_20190919_full_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_webpack_uni_mp_loader_lib_style_js_bmusic_vue_vue_type_template_id_461af066___WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"]; });



/***/ }),

/***/ 39:
/*!******************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/@dcloudio/vue-cli-plugin-hbuilderx/packages/webpack-uni-nvue-loader/lib/templateLoader.js??vue-loader-options!./node_modules/@dcloudio/vue-cli-plugin-uni/packages/webpack-preprocess-loader??ref--17-0!./node_modules/@dcloudio/webpack-uni-mp-loader/lib/template.js!./node_modules/vue-loader/lib??vue-loader-options!./node_modules/@dcloudio/vue-cli-plugin-uni/packages/webpack-custom-block-loader??ref--0-1!./node_modules/@dcloudio/webpack-uni-mp-loader/lib/style.js!C:/Users/14163/Desktop/新建文件夹/easyMusicPlay/components/bmusic.vue?vue&type=template&id=461af066& ***!
  \******************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************/
/*! exports provided: render, staticRenderFns */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "render", function() { return render; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "staticRenderFns", function() { return staticRenderFns; });
var render = function() {
  var _vm = this
  var _h = _vm.$createElement
  var _c = _vm._self._c || _h
}
var staticRenderFns = []
render._withStripped = true



/***/ }),

/***/ 40:
/*!*************************************************************************************************!*\
  !*** C:/Users/14163/Desktop/新建文件夹/easyMusicPlay/components/bmusic.vue?vue&type=script&lang=js& ***!
  \*************************************************************************************************/
/*! no static exports found */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _D_software_EN_HBuilderX_2_3_0_20190919_full_HBuilderX_plugins_uniapp_cli_node_modules_babel_loader_lib_index_js_D_software_EN_HBuilderX_2_3_0_20190919_full_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_12_1_D_software_EN_HBuilderX_2_3_0_20190919_full_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_webpack_uni_mp_loader_lib_script_js_D_software_EN_HBuilderX_2_3_0_20190919_full_HBuilderX_plugins_uniapp_cli_node_modules_vue_loader_lib_index_js_vue_loader_options_D_software_EN_HBuilderX_2_3_0_20190919_full_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_custom_block_loader_index_js_ref_0_1_D_software_EN_HBuilderX_2_3_0_20190919_full_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_webpack_uni_mp_loader_lib_style_js_bmusic_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!./node_modules/babel-loader/lib!./node_modules/@dcloudio/vue-cli-plugin-uni/packages/webpack-preprocess-loader??ref--12-1!./node_modules/@dcloudio/webpack-uni-mp-loader/lib/script.js!./node_modules/vue-loader/lib??vue-loader-options!./node_modules/@dcloudio/vue-cli-plugin-uni/packages/webpack-custom-block-loader??ref--0-1!./node_modules/@dcloudio/webpack-uni-mp-loader/lib/style.js!./bmusic.vue?vue&type=script&lang=js& */ 41);
/* harmony import */ var _D_software_EN_HBuilderX_2_3_0_20190919_full_HBuilderX_plugins_uniapp_cli_node_modules_babel_loader_lib_index_js_D_software_EN_HBuilderX_2_3_0_20190919_full_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_12_1_D_software_EN_HBuilderX_2_3_0_20190919_full_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_webpack_uni_mp_loader_lib_script_js_D_software_EN_HBuilderX_2_3_0_20190919_full_HBuilderX_plugins_uniapp_cli_node_modules_vue_loader_lib_index_js_vue_loader_options_D_software_EN_HBuilderX_2_3_0_20190919_full_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_custom_block_loader_index_js_ref_0_1_D_software_EN_HBuilderX_2_3_0_20190919_full_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_webpack_uni_mp_loader_lib_style_js_bmusic_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_D_software_EN_HBuilderX_2_3_0_20190919_full_HBuilderX_plugins_uniapp_cli_node_modules_babel_loader_lib_index_js_D_software_EN_HBuilderX_2_3_0_20190919_full_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_12_1_D_software_EN_HBuilderX_2_3_0_20190919_full_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_webpack_uni_mp_loader_lib_script_js_D_software_EN_HBuilderX_2_3_0_20190919_full_HBuilderX_plugins_uniapp_cli_node_modules_vue_loader_lib_index_js_vue_loader_options_D_software_EN_HBuilderX_2_3_0_20190919_full_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_custom_block_loader_index_js_ref_0_1_D_software_EN_HBuilderX_2_3_0_20190919_full_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_webpack_uni_mp_loader_lib_style_js_bmusic_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__);
/* harmony reexport (unknown) */ for(var __WEBPACK_IMPORT_KEY__ in _D_software_EN_HBuilderX_2_3_0_20190919_full_HBuilderX_plugins_uniapp_cli_node_modules_babel_loader_lib_index_js_D_software_EN_HBuilderX_2_3_0_20190919_full_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_12_1_D_software_EN_HBuilderX_2_3_0_20190919_full_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_webpack_uni_mp_loader_lib_script_js_D_software_EN_HBuilderX_2_3_0_20190919_full_HBuilderX_plugins_uniapp_cli_node_modules_vue_loader_lib_index_js_vue_loader_options_D_software_EN_HBuilderX_2_3_0_20190919_full_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_custom_block_loader_index_js_ref_0_1_D_software_EN_HBuilderX_2_3_0_20190919_full_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_webpack_uni_mp_loader_lib_style_js_bmusic_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__) if(__WEBPACK_IMPORT_KEY__ !== 'default') (function(key) { __webpack_require__.d(__webpack_exports__, key, function() { return _D_software_EN_HBuilderX_2_3_0_20190919_full_HBuilderX_plugins_uniapp_cli_node_modules_babel_loader_lib_index_js_D_software_EN_HBuilderX_2_3_0_20190919_full_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_12_1_D_software_EN_HBuilderX_2_3_0_20190919_full_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_webpack_uni_mp_loader_lib_script_js_D_software_EN_HBuilderX_2_3_0_20190919_full_HBuilderX_plugins_uniapp_cli_node_modules_vue_loader_lib_index_js_vue_loader_options_D_software_EN_HBuilderX_2_3_0_20190919_full_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_custom_block_loader_index_js_ref_0_1_D_software_EN_HBuilderX_2_3_0_20190919_full_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_webpack_uni_mp_loader_lib_style_js_bmusic_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__[key]; }) }(__WEBPACK_IMPORT_KEY__));
 /* harmony default export */ __webpack_exports__["default"] = (_D_software_EN_HBuilderX_2_3_0_20190919_full_HBuilderX_plugins_uniapp_cli_node_modules_babel_loader_lib_index_js_D_software_EN_HBuilderX_2_3_0_20190919_full_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_12_1_D_software_EN_HBuilderX_2_3_0_20190919_full_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_webpack_uni_mp_loader_lib_script_js_D_software_EN_HBuilderX_2_3_0_20190919_full_HBuilderX_plugins_uniapp_cli_node_modules_vue_loader_lib_index_js_vue_loader_options_D_software_EN_HBuilderX_2_3_0_20190919_full_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_custom_block_loader_index_js_ref_0_1_D_software_EN_HBuilderX_2_3_0_20190919_full_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_webpack_uni_mp_loader_lib_style_js_bmusic_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0___default.a); 

/***/ }),

/***/ 41:
/*!*************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/babel-loader/lib!./node_modules/@dcloudio/vue-cli-plugin-uni/packages/webpack-preprocess-loader??ref--12-1!./node_modules/@dcloudio/webpack-uni-mp-loader/lib/script.js!./node_modules/vue-loader/lib??vue-loader-options!./node_modules/@dcloudio/vue-cli-plugin-uni/packages/webpack-custom-block-loader??ref--0-1!./node_modules/@dcloudio/webpack-uni-mp-loader/lib/style.js!C:/Users/14163/Desktop/新建文件夹/easyMusicPlay/components/bmusic.vue?vue&type=script&lang=js& ***!
  \*************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
/* WEBPACK VAR INJECTION */(function(uni) {Object.defineProperty(exports, "__esModule", { value: true });exports.default = void 0; //
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
var _default =
{
  props: ['songList'],
  data: function data() {
    return {
      // 进度条的宽度
      width: 0,
      //当前球的位置
      balllocat: null,
      // 播放的方式 如循环
      loop_type: [{
        name: '列表循环',
        type: 'list-loop' },
      {
        name: '单曲循环',
        type: 'single-loop' },
      {
        name: '随机播放',
        type: 'random' }],

      // 是否打开播放方式的选择列表
      isopenlist: false,
      // 用于改变下边的循环方式的中间变量间接改变样式
      curtype: 'list-loop',
      silderdisabled: true };

  },
  computed: {
    // 改变播放的样式
    stoporplay: function stoporplay() {
      if (!this.$store.state.musicisplay) {
        return 'play';
      } else {
        return 'stop';
      }
    },
    percent: function percent() {
      // 相当于定时器给小球的位置不断计算
      this.balllocat = this.$store.getters.ballprogress * 100;
      if (this.balllocat > 0) {
        // console.log(this.$store.getters.ballprogress * 100);
        this.silderdisabled = false;
      }
      return 'aaa';
    } },

  mounted: function mounted() {

  },
  methods: {
    // 获取评论
    getComment: function getComment() {
      if (!this.$store.state.nowsong) return;
      var songid = this.$store.state.nowsong;
      uni.navigateTo({
        url: '../comment/comment?songid=' + songid,
        success: function success(res) {},
        fail: function fail() {},
        complete: function complete() {} });

    },
    sliderChange: function sliderChange(e) {
      // 获取改变的位置
      var value = e.detail.value;
      // 计算当前的时间
      var nowsec = value * 0.01 * this.$store.state.duration1;
      // 打开计算小球的定时器
      this.$store.commit('aloneballp');
      // 跳跃到目标时间
      this.$store.commit('jumpToTarget', nowsec);
      this.balllocat = value;
    },
    // 处理音乐
    handleMusic: function handleMusic() {
      // 判断是否有src属性
      if (!this.$store.state.innerAudioContext.src) {
        uni.showModal({
          content: '请播放一个音乐',
          showCancel: false });

        return;
      }
      // 判断是否是播放状态
      if (!this.$store.state.musicisplay) {
        this.$store.commit('playMusic');
      } else {
        this.$store.commit('pauseMusic');
      }
    },
    // 下一首
    nextmusic: function nextmusic() {var _this = this;
      var nowsong = this.$store.state.nowsong;
      var nexitem;
      this.songList.forEach(function (item, idx) {
        if (item.id == nowsong) {
          var i = idx + 1 == _this.songList.length ? 0 : idx + 1;
          nexitem = _this.songList[i];
        }
      });
      uni.request({
        url: 'http://39.107.80.8:5000/song/url?id=' + nexitem.id,
        method: 'GET',
        data: {},
        success: function success(res) {
          var url = res.data.data[0].url;
          _this.$store.commit('getMusicAndPlay', {
            src: url,
            id: nexitem.id,
            searchpush: nexitem });

        },
        fail: function fail() {},
        complete: function complete() {} });

    },
    // 上一首
    premusic: function premusic() {var _this2 = this;
      // 获取当前歌曲的ID
      var nowsong = this.$store.state.nowsong;
      var nexitem;
      // 筛选出上一首歌的信息
      this.songList.forEach(function (item, idx) {
        if (item.id == nowsong) {
          var i = idx == 0 ? _this2.songList.length - 1 : idx - 1;
          nexitem = _this2.songList[i];
        }
      });
      uni.request({
        url: 'http://39.107.80.8:5000/song/url?id=' + nexitem.id,
        method: 'GET',
        data: {},
        success: function success(res) {
          var url = res.data.data[0].url;
          _this2.$store.commit('getMusicAndPlay', {
            src: url,
            id: nexitem.id,
            searchpush: nexitem });

        },
        fail: function fail() {},
        complete: function complete() {} });

    },
    touchstart: function touchstart(e) {
      // 发送命令停止小球定时器
      this.$store.commit('stopballp');
    },
    // 打开选择播放模式的开关
    openlist: function openlist() {
      if (this.isopenlist == true) {
        this.isopenlist = false;
      } else {
        this.isopenlist = true;
      }
    },
    // 选择哪种播放模式的type
    choosetype: function choosetype(type, name) {
      this.curtype = type;
      this.$store.commit('getlooptype', type);
      uni.showToast({
        title: "\u5DF2\u5207\u6362\u81F3".concat(name),
        duration: 2000,
        icon: 'none' });

    } } };exports.default = _default;
/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! ./node_modules/@dcloudio/uni-mp-weixin/dist/index.js */ 1)["default"]))

/***/ }),

/***/ 42:
/*!**********************************************************************************************************!*\
  !*** C:/Users/14163/Desktop/新建文件夹/easyMusicPlay/components/bmusic.vue?vue&type=style&index=0&lang=scss& ***!
  \**********************************************************************************************************/
/*! no static exports found */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _D_software_EN_HBuilderX_2_3_0_20190919_full_HBuilderX_plugins_uniapp_cli_node_modules_mini_css_extract_plugin_dist_loader_js_ref_8_oneOf_1_0_D_software_EN_HBuilderX_2_3_0_20190919_full_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_8_oneOf_1_1_D_software_EN_HBuilderX_2_3_0_20190919_full_HBuilderX_plugins_uniapp_cli_node_modules_css_loader_index_js_ref_8_oneOf_1_2_D_software_EN_HBuilderX_2_3_0_20190919_full_HBuilderX_plugins_uniapp_cli_node_modules_vue_loader_lib_loaders_stylePostLoader_js_D_software_EN_HBuilderX_2_3_0_20190919_full_HBuilderX_plugins_uniapp_cli_node_modules_postcss_loader_src_index_js_ref_8_oneOf_1_3_D_software_EN_HBuilderX_2_3_0_20190919_full_HBuilderX_plugins_uniapp_cli_node_modules_sass_loader_lib_loader_js_ref_8_oneOf_1_4_D_software_EN_HBuilderX_2_3_0_20190919_full_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_8_oneOf_1_5_D_software_EN_HBuilderX_2_3_0_20190919_full_HBuilderX_plugins_uniapp_cli_node_modules_vue_loader_lib_index_js_vue_loader_options_D_software_EN_HBuilderX_2_3_0_20190919_full_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_custom_block_loader_index_js_ref_0_1_D_software_EN_HBuilderX_2_3_0_20190919_full_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_webpack_uni_mp_loader_lib_style_js_bmusic_vue_vue_type_style_index_0_lang_scss___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!./node_modules/mini-css-extract-plugin/dist/loader.js??ref--8-oneOf-1-0!./node_modules/@dcloudio/vue-cli-plugin-uni/packages/webpack-preprocess-loader??ref--8-oneOf-1-1!./node_modules/css-loader??ref--8-oneOf-1-2!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/src??ref--8-oneOf-1-3!./node_modules/sass-loader/lib/loader.js??ref--8-oneOf-1-4!./node_modules/@dcloudio/vue-cli-plugin-uni/packages/webpack-preprocess-loader??ref--8-oneOf-1-5!./node_modules/vue-loader/lib??vue-loader-options!./node_modules/@dcloudio/vue-cli-plugin-uni/packages/webpack-custom-block-loader??ref--0-1!./node_modules/@dcloudio/webpack-uni-mp-loader/lib/style.js!./bmusic.vue?vue&type=style&index=0&lang=scss& */ 43);
/* harmony import */ var _D_software_EN_HBuilderX_2_3_0_20190919_full_HBuilderX_plugins_uniapp_cli_node_modules_mini_css_extract_plugin_dist_loader_js_ref_8_oneOf_1_0_D_software_EN_HBuilderX_2_3_0_20190919_full_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_8_oneOf_1_1_D_software_EN_HBuilderX_2_3_0_20190919_full_HBuilderX_plugins_uniapp_cli_node_modules_css_loader_index_js_ref_8_oneOf_1_2_D_software_EN_HBuilderX_2_3_0_20190919_full_HBuilderX_plugins_uniapp_cli_node_modules_vue_loader_lib_loaders_stylePostLoader_js_D_software_EN_HBuilderX_2_3_0_20190919_full_HBuilderX_plugins_uniapp_cli_node_modules_postcss_loader_src_index_js_ref_8_oneOf_1_3_D_software_EN_HBuilderX_2_3_0_20190919_full_HBuilderX_plugins_uniapp_cli_node_modules_sass_loader_lib_loader_js_ref_8_oneOf_1_4_D_software_EN_HBuilderX_2_3_0_20190919_full_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_8_oneOf_1_5_D_software_EN_HBuilderX_2_3_0_20190919_full_HBuilderX_plugins_uniapp_cli_node_modules_vue_loader_lib_index_js_vue_loader_options_D_software_EN_HBuilderX_2_3_0_20190919_full_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_custom_block_loader_index_js_ref_0_1_D_software_EN_HBuilderX_2_3_0_20190919_full_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_webpack_uni_mp_loader_lib_style_js_bmusic_vue_vue_type_style_index_0_lang_scss___WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_D_software_EN_HBuilderX_2_3_0_20190919_full_HBuilderX_plugins_uniapp_cli_node_modules_mini_css_extract_plugin_dist_loader_js_ref_8_oneOf_1_0_D_software_EN_HBuilderX_2_3_0_20190919_full_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_8_oneOf_1_1_D_software_EN_HBuilderX_2_3_0_20190919_full_HBuilderX_plugins_uniapp_cli_node_modules_css_loader_index_js_ref_8_oneOf_1_2_D_software_EN_HBuilderX_2_3_0_20190919_full_HBuilderX_plugins_uniapp_cli_node_modules_vue_loader_lib_loaders_stylePostLoader_js_D_software_EN_HBuilderX_2_3_0_20190919_full_HBuilderX_plugins_uniapp_cli_node_modules_postcss_loader_src_index_js_ref_8_oneOf_1_3_D_software_EN_HBuilderX_2_3_0_20190919_full_HBuilderX_plugins_uniapp_cli_node_modules_sass_loader_lib_loader_js_ref_8_oneOf_1_4_D_software_EN_HBuilderX_2_3_0_20190919_full_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_8_oneOf_1_5_D_software_EN_HBuilderX_2_3_0_20190919_full_HBuilderX_plugins_uniapp_cli_node_modules_vue_loader_lib_index_js_vue_loader_options_D_software_EN_HBuilderX_2_3_0_20190919_full_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_custom_block_loader_index_js_ref_0_1_D_software_EN_HBuilderX_2_3_0_20190919_full_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_webpack_uni_mp_loader_lib_style_js_bmusic_vue_vue_type_style_index_0_lang_scss___WEBPACK_IMPORTED_MODULE_0__);
/* harmony reexport (unknown) */ for(var __WEBPACK_IMPORT_KEY__ in _D_software_EN_HBuilderX_2_3_0_20190919_full_HBuilderX_plugins_uniapp_cli_node_modules_mini_css_extract_plugin_dist_loader_js_ref_8_oneOf_1_0_D_software_EN_HBuilderX_2_3_0_20190919_full_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_8_oneOf_1_1_D_software_EN_HBuilderX_2_3_0_20190919_full_HBuilderX_plugins_uniapp_cli_node_modules_css_loader_index_js_ref_8_oneOf_1_2_D_software_EN_HBuilderX_2_3_0_20190919_full_HBuilderX_plugins_uniapp_cli_node_modules_vue_loader_lib_loaders_stylePostLoader_js_D_software_EN_HBuilderX_2_3_0_20190919_full_HBuilderX_plugins_uniapp_cli_node_modules_postcss_loader_src_index_js_ref_8_oneOf_1_3_D_software_EN_HBuilderX_2_3_0_20190919_full_HBuilderX_plugins_uniapp_cli_node_modules_sass_loader_lib_loader_js_ref_8_oneOf_1_4_D_software_EN_HBuilderX_2_3_0_20190919_full_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_8_oneOf_1_5_D_software_EN_HBuilderX_2_3_0_20190919_full_HBuilderX_plugins_uniapp_cli_node_modules_vue_loader_lib_index_js_vue_loader_options_D_software_EN_HBuilderX_2_3_0_20190919_full_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_custom_block_loader_index_js_ref_0_1_D_software_EN_HBuilderX_2_3_0_20190919_full_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_webpack_uni_mp_loader_lib_style_js_bmusic_vue_vue_type_style_index_0_lang_scss___WEBPACK_IMPORTED_MODULE_0__) if(__WEBPACK_IMPORT_KEY__ !== 'default') (function(key) { __webpack_require__.d(__webpack_exports__, key, function() { return _D_software_EN_HBuilderX_2_3_0_20190919_full_HBuilderX_plugins_uniapp_cli_node_modules_mini_css_extract_plugin_dist_loader_js_ref_8_oneOf_1_0_D_software_EN_HBuilderX_2_3_0_20190919_full_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_8_oneOf_1_1_D_software_EN_HBuilderX_2_3_0_20190919_full_HBuilderX_plugins_uniapp_cli_node_modules_css_loader_index_js_ref_8_oneOf_1_2_D_software_EN_HBuilderX_2_3_0_20190919_full_HBuilderX_plugins_uniapp_cli_node_modules_vue_loader_lib_loaders_stylePostLoader_js_D_software_EN_HBuilderX_2_3_0_20190919_full_HBuilderX_plugins_uniapp_cli_node_modules_postcss_loader_src_index_js_ref_8_oneOf_1_3_D_software_EN_HBuilderX_2_3_0_20190919_full_HBuilderX_plugins_uniapp_cli_node_modules_sass_loader_lib_loader_js_ref_8_oneOf_1_4_D_software_EN_HBuilderX_2_3_0_20190919_full_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_8_oneOf_1_5_D_software_EN_HBuilderX_2_3_0_20190919_full_HBuilderX_plugins_uniapp_cli_node_modules_vue_loader_lib_index_js_vue_loader_options_D_software_EN_HBuilderX_2_3_0_20190919_full_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_custom_block_loader_index_js_ref_0_1_D_software_EN_HBuilderX_2_3_0_20190919_full_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_webpack_uni_mp_loader_lib_style_js_bmusic_vue_vue_type_style_index_0_lang_scss___WEBPACK_IMPORTED_MODULE_0__[key]; }) }(__WEBPACK_IMPORT_KEY__));
 /* harmony default export */ __webpack_exports__["default"] = (_D_software_EN_HBuilderX_2_3_0_20190919_full_HBuilderX_plugins_uniapp_cli_node_modules_mini_css_extract_plugin_dist_loader_js_ref_8_oneOf_1_0_D_software_EN_HBuilderX_2_3_0_20190919_full_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_8_oneOf_1_1_D_software_EN_HBuilderX_2_3_0_20190919_full_HBuilderX_plugins_uniapp_cli_node_modules_css_loader_index_js_ref_8_oneOf_1_2_D_software_EN_HBuilderX_2_3_0_20190919_full_HBuilderX_plugins_uniapp_cli_node_modules_vue_loader_lib_loaders_stylePostLoader_js_D_software_EN_HBuilderX_2_3_0_20190919_full_HBuilderX_plugins_uniapp_cli_node_modules_postcss_loader_src_index_js_ref_8_oneOf_1_3_D_software_EN_HBuilderX_2_3_0_20190919_full_HBuilderX_plugins_uniapp_cli_node_modules_sass_loader_lib_loader_js_ref_8_oneOf_1_4_D_software_EN_HBuilderX_2_3_0_20190919_full_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_8_oneOf_1_5_D_software_EN_HBuilderX_2_3_0_20190919_full_HBuilderX_plugins_uniapp_cli_node_modules_vue_loader_lib_index_js_vue_loader_options_D_software_EN_HBuilderX_2_3_0_20190919_full_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_custom_block_loader_index_js_ref_0_1_D_software_EN_HBuilderX_2_3_0_20190919_full_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_webpack_uni_mp_loader_lib_style_js_bmusic_vue_vue_type_style_index_0_lang_scss___WEBPACK_IMPORTED_MODULE_0___default.a); 

/***/ }),

/***/ 43:
/*!*****************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/mini-css-extract-plugin/dist/loader.js??ref--8-oneOf-1-0!./node_modules/@dcloudio/vue-cli-plugin-uni/packages/webpack-preprocess-loader??ref--8-oneOf-1-1!./node_modules/css-loader??ref--8-oneOf-1-2!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/src??ref--8-oneOf-1-3!./node_modules/sass-loader/lib/loader.js??ref--8-oneOf-1-4!./node_modules/@dcloudio/vue-cli-plugin-uni/packages/webpack-preprocess-loader??ref--8-oneOf-1-5!./node_modules/vue-loader/lib??vue-loader-options!./node_modules/@dcloudio/vue-cli-plugin-uni/packages/webpack-custom-block-loader??ref--0-1!./node_modules/@dcloudio/webpack-uni-mp-loader/lib/style.js!C:/Users/14163/Desktop/新建文件夹/easyMusicPlay/components/bmusic.vue?vue&type=style&index=0&lang=scss& ***!
  \*****************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

// extracted by mini-css-extract-plugin

/***/ })

}]);
//# sourceMappingURL=../../.sourcemap/mp-weixin/components/bmusic.js.map
;(global["webpackJsonp"] = global["webpackJsonp"] || []).push([
    'components/bmusic-create-component',
    {
        'components/bmusic-create-component':(function(module, exports, __webpack_require__){
            __webpack_require__('1')['createComponent'](__webpack_require__(37))
        })
    },
    [['components/bmusic-create-component']]
]);                
