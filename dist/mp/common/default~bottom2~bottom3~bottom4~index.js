module.exports = function(window, document) {var App = function(options) {window.appOptions = options};var self = window.self;var HTMLElement = window.HTMLElement;var Element = window.Element;var Node = window.Node;var localStorage = window.localStorage;var sessionStorage = window.sessionStorage;var navigator = window.navigator;var history = window.history;var location = window.location;var performance = window.performance;var Image = window.Image;var CustomEvent = window.CustomEvent;var Event = window.Event;var requestAnimationFrame = window.requestAnimationFrame;var cancelAnimationFrame = window.cancelAnimationFrame;var getComputedStyle = window.getComputedStyle;var XMLHttpRequest = window.XMLHttpRequest;var Worker = window.Worker;var SharedWorker = window.SharedWorker;(window["webpackJsonpcreateApp"] = window["webpackJsonpcreateApp"] || []).push([[0],{

/***/ 37:
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _slicedToArray2 = __webpack_require__(18);

var _slicedToArray3 = _interopRequireDefault(_slicedToArray2);

var _react = __webpack_require__(0);

var _react2 = _interopRequireDefault(_react);

var _dumyData = __webpack_require__(67);

__webpack_require__(68);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var AllCourse = function AllCourse() {
  var _useState = (0, _react.useState)(0),
      _useState2 = (0, _slicedToArray3.default)(_useState, 2),
      currentSlider = _useState2[0],
      setCurrentSlider = _useState2[1];

  var ref = (0, _react.useRef)(null);
  var handleTouchStart = function handleTouchStart(e) {
    setCurrentSlider(e.$_currentTarget.$__attrs.$_map.current);
  };
  (0, _react.useEffect)(function () {
    if (ref) {
      ref.current.addEventListener('change', handleTouchStart);
    }
    return function () {
      ref.current.removeEventListener('change', handleTouchStart);
    };
  }, []);

  return _react2.default.createElement(
    'div',
    { className: 'section allCourse-section' },
    _react2.default.createElement(
      'h2',
      { className: 'title' },
      '\u6240\u6709\u8BFE\u7A0B'
    ),
    _react2.default.createElement(
      'div',
      { className: 'tabBar-container' },
      _dumyData.dumyDatas.map(function (dumyData, index) {
        return _react2.default.createElement(
          'div',
          { className: 'tabBar', onClick: function onClick() {
              setCurrentSlider(index);
            } },
          _react2.default.createElement(
            'span',
            { className: 'tabBar-text ' + (index === currentSlider && 'selected') },
            dumyData.tabName
          )
        );
      })
    ),
    _react2.default.createElement(
      'wx-view',
      { className: 'AllCourse-swiper' },
      _react2.default.createElement(
        'wx-swiper',
        { ref: ref, current: currentSlider },
        _dumyData.dumyDatas.map(function (dumyData) {
          return _react2.default.createElement(
            'wx-swiper-item',
            null,
            _react2.default.createElement(
              'div',
              { className: 'icon-list' },
              dumyData.iconList.map(function (data, index) {
                var title = data.title,
                    firstIconInfo = data.firstIconInfo,
                    lastIconInfo = data.lastIconInfo;

                return _react2.default.createElement(
                  'div',
                  { className: 'icon-info' },
                  _react2.default.createElement(
                    'div',
                    { className: 'icon-info-title-content' },
                    _react2.default.createElement(
                      'div',
                      { className: 'circle-number-contain' },
                      _react2.default.createElement(
                        'span',
                        { className: 'circle-number' },
                        index + 1
                      )
                    ),
                    _react2.default.createElement(
                      'span',
                      { className: 'icon-info-title' },
                      title
                    )
                  ),
                  _react2.default.createElement(
                    'div',
                    { className: 'icon-list-content' },
                    _react2.default.createElement(
                      'div',
                      { className: 'single-first-icon single-icon' },
                      _react2.default.createElement('img', { src: firstIconInfo.iconLink }),
                      _react2.default.createElement(
                        'span',
                        null,
                        firstIconInfo.name
                      )
                    ),
                    _react2.default.createElement(
                      'div',
                      { className: 'single-middle-icon single-icon' },
                      _react2.default.createElement('img', { src: 'https://ucarecdn.com/253c9936-7581-4a70-9981-7bd21abd6a76/lian_he.svg' })
                    ),
                    _react2.default.createElement(
                      'div',
                      { className: 'single-last-icon single-icon' },
                      _react2.default.createElement('img', { src: lastIconInfo.iconLink }),
                      _react2.default.createElement(
                        'span',
                        null,
                        lastIconInfo.name
                      )
                    )
                  )
                );
              })
            )
          );
        })
      )
    )
  );
};

exports.default = AllCourse;

/***/ }),

/***/ 67:
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
var dumyDatas = exports.dumyDatas = [{
  tabName: 'VisuMax',
  iconList: [{
    title: '无SMILE手术经验',
    firstIconInfo: {
      iconLink: 'https://ucarecdn.com/8805cc70-cbca-4b99-8d80-b8c0d7eeae3f/freshhelp.svg',
      name: '新手入门'
    },
    lastIconInfo: {
      iconLink: 'https://ucarecdn.com/b416d4f9-c021-449f-ab11-02cb4b58a446/xian_xia_shi_cao.svg',
      name: '线下实操班'
    }
  }, {
    title: '0-20眼SMILE',
    firstIconInfo: {
      iconLink: 'https://ucarecdn.com/d06f359b-b794-4bd5-ba10-40308f750028/chu_kui_men_jing.svg',
      name: '初窥门径'
    },
    lastIconInfo: {
      iconLink: 'https://ucarecdn.com/cb0ceaa5-0143-42ee-a596-4d431a914256/xian_xia_ji_chu.svg',
      name: '线下基础班'
    }
  }, {
    title: '100-300眼SMILE',
    firstIconInfo: {
      iconLink: 'https://ucarecdn.com/b5d69c65-7cbe-45a4-8565-8ddb39d6f467/lve_you_xiao_cheng.svg',
      name: '略有小成'
    },
    lastIconInfo: {
      iconLink: 'https://ucarecdn.com/530ccf17-f5da-4f5b-9200-c387af462056/xian_xia_yan_tao.svg',
      name: '线下研讨班'
    }
  }, {
    title: '>300眼SMILE',
    firstIconInfo: {
      iconLink: 'https://ucarecdn.com/e13e70a0-e9f0-482b-bcf8-f44eacc29b01/icn.svg',
      name: '融会贯通'
    },
    lastIconInfo: {
      iconLink: 'https://ucarecdn.com/67ef8430-7789-4526-af16-e690543fe57e/xian_xia_gao_ji.svg',
      name: '线下高级班'
    }
  }]
}, {
  tabName: 'MEL90',
  iconList: [{
    title: '无MEL90手术经验',
    firstIconInfo: {
      iconLink: 'https://ucarecdn.com/8805cc70-cbca-4b99-8d80-b8c0d7eeae3f/freshhelp.svg',
      name: '新手入门'
    },
    lastIconInfo: {
      iconLink: 'https://ucarecdn.com/cb0ceaa5-0143-42ee-a596-4d431a914256/xian_xia_ji_chu.svg',
      name: '线下基础班'
    }
  }, {
    title: 'MEL90手术经验>100眼',
    firstIconInfo: {
      iconLink: 'https://ucarecdn.com/b5d69c65-7cbe-45a4-8565-8ddb39d6f467/lve_you_xiao_cheng.svg',
      name: '个性化之路'
    },
    lastIconInfo: {
      iconLink: 'https://ucarecdn.com/530ccf17-f5da-4f5b-9200-c387af462056/xian_xia_yan_tao.svg',
      name: '线下研讨班'
    }
  }]
}];
// 首页， 所有课程， 文献&解读，  我的

/***/ }),

/***/ 68:
/***/ (function(module, exports, __webpack_require__) {

// extracted by mini-css-extract-plugin

/***/ }),

/***/ 69:
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _slicedToArray2 = __webpack_require__(18);

var _slicedToArray3 = _interopRequireDefault(_slicedToArray2);

var _react = __webpack_require__(0);

var _react2 = _interopRequireDefault(_react);

__webpack_require__(70);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var Search = function Search() {
  var _useState = (0, _react.useState)(false),
      _useState2 = (0, _slicedToArray3.default)(_useState, 2),
      isFocus = _useState2[0],
      setForcus = _useState2[1];

  var ref = (0, _react.useRef)(null);
  var onFocus = function onFocus() {
    setForcus(true);
  };
  var onBlur = function onBlur() {
    setForcus(false);
  };

  return _react2.default.createElement(
    'div',
    { className: 'seachContain ' + (isFocus && 'on-focus') },
    _react2.default.createElement('img', { className: 'seach-logo', src: 'https://ucarecdn.com/26f306ca-4e02-47df-a960-4e5e4091c338/zeisslogorgb.svg' }),
    _react2.default.createElement(
      'div',
      { className: 'input-container', onClick: function onClick() {
          ref.current.focus();
        } },
      _react2.default.createElement(
        'div',
        { className: 'input-container-wrapper' },
        _react2.default.createElement('wx-icon', { className: 'icon-small', color: 'blue', type: 'search', size: '10' }),
        _react2.default.createElement('input', { ref: ref, onFocus: onFocus, onBlur: onBlur, placeholder: '' + (isFocus ? '' : '讲师/设备/疾病') })
      )
    ),
    _react2.default.createElement(
      'button',
      { className: 'search-button' },
      '\u641C\u7D22'
    )
  );
};

exports.default = Search;

/***/ }),

/***/ 7:
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _react = __webpack_require__(0);

var _react2 = _interopRequireDefault(_react);

var _AllCourse = __webpack_require__(37);

var _AllCourse2 = _interopRequireDefault(_AllCourse);

var _Search = __webpack_require__(69);

var _Search2 = _interopRequireDefault(_Search);

var _slider = __webpack_require__(71);

var _slider2 = _interopRequireDefault(_slider);

var _TraningCenter = __webpack_require__(73);

var _TraningCenter2 = _interopRequireDefault(_TraningCenter);

__webpack_require__(75);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var App = function App() {
  return _react2.default.createElement(
    'div',
    { className: 'main' },
    _react2.default.createElement(_Search2.default, null),
    _react2.default.createElement(_slider2.default, null),
    _react2.default.createElement(_AllCourse2.default, null),
    _react2.default.createElement(_TraningCenter2.default, null)
  );
};

exports.default = App;

/***/ }),

/***/ 70:
/***/ (function(module, exports, __webpack_require__) {

// extracted by mini-css-extract-plugin

/***/ }),

/***/ 71:
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _react = __webpack_require__(0);

var _react2 = _interopRequireDefault(_react);

__webpack_require__(72);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var Slider = function Slider() {
  return _react2.default.createElement(
    'div',
    null,
    _react2.default.createElement(
      'wx-view',
      null,
      _react2.default.createElement(
        'wx-swiper',
        { className: 'slider', 'indicator-dots': 'true', 'indicator-active-color': 'blue', 'indicator-color': '#eeeeee' },
        _react2.default.createElement(
          'wx-swiper-item',
          null,
          _react2.default.createElement(
            'div',
            { className: 'slider-picture' },
            _react2.default.createElement('wx-image', { className: 'image', src: 'https://ucarecdn.com/02672f37-8876-451e-abcd-c94227a9a7b6/banner1.PNG' })
          )
        ),
        _react2.default.createElement(
          'wx-swiper-item',
          null,
          _react2.default.createElement(
            'div',
            { className: 'slider-picture' },
            _react2.default.createElement('wx-image', { className: 'image', src: 'https://ucarecdn.com/ec1f8f8f-9de9-4687-b3cd-ea19b5a68e2d/banner2.PNG' })
          )
        )
      )
    )
  );
};

exports.default = Slider;

/***/ }),

/***/ 72:
/***/ (function(module, exports, __webpack_require__) {

// extracted by mini-css-extract-plugin

/***/ }),

/***/ 73:
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _react = __webpack_require__(0);

var _react2 = _interopRequireDefault(_react);

__webpack_require__(74);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var TraningCenter = function TraningCenter() {

  return _react2.default.createElement(
    'div',
    { className: 'section' },
    _react2.default.createElement(
      'h2',
      { className: 'title' },
      '\u57F9\u8BAD\u4E2D\u5FC3\u548C\u57FA\u7840'
    ),
    _react2.default.createElement(
      'div',
      { className: 'traning-center-content' },
      _react2.default.createElement('img', { src: 'https://ucarecdn.com/f51487a2-4634-4609-9225-2a71e0746ee8/expcenter.png' }),
      _react2.default.createElement('img', { src: 'https://ucarecdn.com/1bf81d69-a5fd-4f2e-b7f1-a894375e9732/traincenter.png' })
    )
  );
};

exports.default = TraningCenter;

/***/ }),

/***/ 74:
/***/ (function(module, exports, __webpack_require__) {

// extracted by mini-css-extract-plugin

/***/ }),

/***/ 75:
/***/ (function(module, exports, __webpack_require__) {

// extracted by mini-css-extract-plugin

/***/ })

}]);}