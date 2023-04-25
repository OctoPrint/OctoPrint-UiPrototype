(function webpackUniversalModuleDefinition(root, factory) {
	if(typeof exports === 'object' && typeof module === 'object')
		module.exports = factory(require("React"), require("ReactDOM"));
	else if(typeof define === 'function' && define.amd)
		define(["React", "ReactDOM"], factory);
	else if(typeof exports === 'object')
		exports["octoprint_uiprototype"] = factory(require("React"), require("ReactDOM"));
	else
		root["octoprint_uiprototype"] = factory(root["React"], root["ReactDOM"]);
})(self, (__WEBPACK_EXTERNAL_MODULE__24__, __WEBPACK_EXTERNAL_MODULE__314__) => {
return /******/ (() => { // webpackBootstrap
/******/ 	var __webpack_modules__ = ({

/***/ 201:
/***/ ((__unused_webpack_module, exports, __webpack_require__) => {

"use strict";
var __webpack_unused_export__;


var _interopRequireDefault = __webpack_require__(836);
__webpack_unused_export__ = ({
  value: true
});
exports.Z = void 0;
var _createSvgIcon = _interopRequireDefault(__webpack_require__(938));
var _jsxRuntime = __webpack_require__(893);
var _default = (0, _createSvgIcon.default)( /*#__PURE__*/(0, _jsxRuntime.jsx)("path", {
  d: "M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm0 4c1.93 0 3.5 1.57 3.5 3.5S13.93 13 12 13s-3.5-1.57-3.5-3.5S10.07 6 12 6zm0 14c-2.03 0-4.43-.82-6.14-2.88C7.55 15.8 9.68 15 12 15s4.45.8 6.14 2.12C16.43 19.18 14.03 20 12 20z"
}), 'AccountCircle');
exports.Z = _default;

/***/ }),

/***/ 879:
/***/ ((__unused_webpack_module, exports, __webpack_require__) => {

"use strict";
var __webpack_unused_export__;


var _interopRequireDefault = __webpack_require__(836);
__webpack_unused_export__ = ({
  value: true
});
exports.Z = void 0;
var _createSvgIcon = _interopRequireDefault(__webpack_require__(938));
var _jsxRuntime = __webpack_require__(893);
var _default = (0, _createSvgIcon.default)( /*#__PURE__*/(0, _jsxRuntime.jsx)("path", {
  d: "M20 8.69V4h-4.69L12 .69 8.69 4H4v4.69L.69 12 4 15.31V20h4.69L12 23.31 15.31 20H20v-4.69L23.31 12 20 8.69zM12 18c-.89 0-1.74-.2-2.5-.55C11.56 16.5 13 14.42 13 12s-1.44-4.5-3.5-5.45C10.26 6.2 11.11 6 12 6c3.31 0 6 2.69 6 6s-2.69 6-6 6z"
}), 'Brightness4');
exports.Z = _default;

/***/ }),

/***/ 572:
/***/ ((__unused_webpack_module, exports, __webpack_require__) => {

"use strict";
var __webpack_unused_export__;


var _interopRequireDefault = __webpack_require__(836);
__webpack_unused_export__ = ({
  value: true
});
exports.Z = void 0;
var _createSvgIcon = _interopRequireDefault(__webpack_require__(938));
var _jsxRuntime = __webpack_require__(893);
var _default = (0, _createSvgIcon.default)( /*#__PURE__*/(0, _jsxRuntime.jsx)("path", {
  d: "M15.41 7.41 14 6l-6 6 6 6 1.41-1.41L10.83 12z"
}), 'ChevronLeft');
exports.Z = _default;

/***/ }),

/***/ 326:
/***/ ((__unused_webpack_module, exports, __webpack_require__) => {

"use strict";
var __webpack_unused_export__;


var _interopRequireDefault = __webpack_require__(836);
__webpack_unused_export__ = ({
  value: true
});
exports.Z = void 0;
var _createSvgIcon = _interopRequireDefault(__webpack_require__(938));
var _jsxRuntime = __webpack_require__(893);
var _default = (0, _createSvgIcon.default)( /*#__PURE__*/(0, _jsxRuntime.jsx)("path", {
  d: "M3 18h18v-2H3v2zm0-5h18v-2H3v2zm0-7v2h18V6H3z"
}), 'Menu');
exports.Z = _default;

/***/ }),

/***/ 686:
/***/ ((__unused_webpack_module, exports, __webpack_require__) => {

"use strict";
var __webpack_unused_export__;


var _interopRequireDefault = __webpack_require__(836);
__webpack_unused_export__ = ({
  value: true
});
exports.Z = void 0;
var _createSvgIcon = _interopRequireDefault(__webpack_require__(938));
var _jsxRuntime = __webpack_require__(893);
var _default = (0, _createSvgIcon.default)( /*#__PURE__*/(0, _jsxRuntime.jsx)("path", {
  d: "M10 8H8v4H4v2h4v4h2v-4h4v-2h-4zm4.5-1.92V7.9l2.5-.5V18h2V5z"
}), 'PlusOne');
exports.Z = _default;

/***/ }),

/***/ 938:
/***/ ((__unused_webpack_module, exports, __webpack_require__) => {

"use strict";


Object.defineProperty(exports, "__esModule", ({
  value: true
}));
Object.defineProperty(exports, "default", ({
  enumerable: true,
  get: function () {
    return _utils.createSvgIcon;
  }
}));
var _utils = __webpack_require__(774);

/***/ }),

/***/ 745:
/***/ ((__unused_webpack_module, exports, __webpack_require__) => {

"use strict";


var m = __webpack_require__(314);
if (true) {
  exports.createRoot = m.createRoot;
  exports.hydrateRoot = m.hydrateRoot;
} else { var i; }


/***/ }),

/***/ 251:
/***/ ((__unused_webpack_module, exports, __webpack_require__) => {

"use strict";
/**
 * @license React
 * react-jsx-runtime.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */
var f=__webpack_require__(24),k=Symbol.for("react.element"),l=Symbol.for("react.fragment"),m=Object.prototype.hasOwnProperty,n=f.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED.ReactCurrentOwner,p={key:!0,ref:!0,__self:!0,__source:!0};
function q(c,a,g){var b,d={},e=null,h=null;void 0!==g&&(e=""+g);void 0!==a.key&&(e=""+a.key);void 0!==a.ref&&(h=a.ref);for(b in a)m.call(a,b)&&!p.hasOwnProperty(b)&&(d[b]=a[b]);if(c&&c.defaultProps)for(b in a=c.defaultProps,a)void 0===d[b]&&(d[b]=a[b]);return{$$typeof:k,type:c,key:e,ref:h,props:d,_owner:n.current}}exports.Fragment=l;exports.jsx=q;exports.jsxs=q;


/***/ }),

/***/ 893:
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

"use strict";


if (true) {
  module.exports = __webpack_require__(251);
} else {}


/***/ }),

/***/ 24:
/***/ ((module) => {

"use strict";
module.exports = __WEBPACK_EXTERNAL_MODULE__24__;

/***/ }),

/***/ 314:
/***/ ((module) => {

"use strict";
module.exports = __WEBPACK_EXTERNAL_MODULE__314__;

/***/ }),

/***/ 774:
/***/ ((module) => {

"use strict";
module.exports = window['MaterialUI'];

/***/ }),

/***/ 836:
/***/ ((module) => {

function _interopRequireDefault(obj) {
  return obj && obj.__esModule ? obj : {
    "default": obj
  };
}
module.exports = _interopRequireDefault, module.exports.__esModule = true, module.exports["default"] = module.exports;

/***/ })

/******/ 	});
/************************************************************************/
/******/ 	// The module cache
/******/ 	var __webpack_module_cache__ = {};
/******/ 	
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/ 		// Check if module is in cache
/******/ 		var cachedModule = __webpack_module_cache__[moduleId];
/******/ 		if (cachedModule !== undefined) {
/******/ 			return cachedModule.exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = __webpack_module_cache__[moduleId] = {
/******/ 			// no module.id needed
/******/ 			// no module.loaded needed
/******/ 			exports: {}
/******/ 		};
/******/ 	
/******/ 		// Execute the module function
/******/ 		__webpack_modules__[moduleId](module, module.exports, __webpack_require__);
/******/ 	
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/ 	
/************************************************************************/
/******/ 	/* webpack/runtime/compat get default export */
/******/ 	(() => {
/******/ 		// getDefaultExport function for compatibility with non-harmony modules
/******/ 		__webpack_require__.n = (module) => {
/******/ 			var getter = module && module.__esModule ?
/******/ 				() => (module['default']) :
/******/ 				() => (module);
/******/ 			__webpack_require__.d(getter, { a: getter });
/******/ 			return getter;
/******/ 		};
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/define property getters */
/******/ 	(() => {
/******/ 		// define getter functions for harmony exports
/******/ 		__webpack_require__.d = (exports, definition) => {
/******/ 			for(var key in definition) {
/******/ 				if(__webpack_require__.o(definition, key) && !__webpack_require__.o(exports, key)) {
/******/ 					Object.defineProperty(exports, key, { enumerable: true, get: definition[key] });
/******/ 				}
/******/ 			}
/******/ 		};
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/hasOwnProperty shorthand */
/******/ 	(() => {
/******/ 		__webpack_require__.o = (obj, prop) => (Object.prototype.hasOwnProperty.call(obj, prop))
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/make namespace object */
/******/ 	(() => {
/******/ 		// define __esModule on exports
/******/ 		__webpack_require__.r = (exports) => {
/******/ 			if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 				Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 			}
/******/ 			Object.defineProperty(exports, '__esModule', { value: true });
/******/ 		};
/******/ 	})();
/******/ 	
/************************************************************************/
var __webpack_exports__ = {};
// This entry need to be wrapped in an IIFE because it need to be in strict mode.
(() => {
"use strict";
// ESM COMPAT FLAG
__webpack_require__.r(__webpack_exports__);

// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  "App": () => (/* reexport */ src_App),
  "components": () => (/* reexport */ components_namespaceObject)
});

// NAMESPACE OBJECT: ./src/components/extensions/index.js
var extensions_namespaceObject = {};
__webpack_require__.r(extensions_namespaceObject);
__webpack_require__.d(extensions_namespaceObject, {
  "ExtensionPoint": () => (extensions_ExtensionPoint),
  "ExtensionProvider": () => (extensions_ExtensionProvider)
});

// NAMESPACE OBJECT: ./src/components/index.js
var components_namespaceObject = {};
__webpack_require__.r(components_namespaceObject);
__webpack_require__.d(components_namespaceObject, {
  "Dashboard": () => (Dashboard),
  "DashboardContainer": () => (components_DashboardContainer),
  "ExtensionSpawner": () => (components_ExtensionSpawner),
  "extensions": () => (extensions_namespaceObject)
});

// EXTERNAL MODULE: external "React"
var external_React_ = __webpack_require__(24);
var external_React_default = /*#__PURE__*/__webpack_require__.n(external_React_);
// EXTERNAL MODULE: ./node_modules/react-dom/client.js
var client = __webpack_require__(745);
// EXTERNAL MODULE: external "window['MaterialUI']"
var external_window_MaterialUI_ = __webpack_require__(774);
// EXTERNAL MODULE: ./node_modules/@mui/icons-material/Menu.js
var Menu = __webpack_require__(326);
// EXTERNAL MODULE: ./node_modules/@mui/icons-material/ChevronLeft.js
var ChevronLeft = __webpack_require__(572);
// EXTERNAL MODULE: ./node_modules/@mui/icons-material/Brightness4.js
var Brightness4 = __webpack_require__(879);
// EXTERNAL MODULE: ./node_modules/@mui/icons-material/AccountCircle.js
var AccountCircle = __webpack_require__(201);
;// CONCATENATED MODULE: ./src/lib/extensionregistry.js
const extensions = {};
const listeners = {};
const getDisplayName = WrappedComponent => WrappedComponent.displayName || WrappedComponent.name || "Component";
const _registerExtension = (name, extension) => {
  const extensionName = getDisplayName(extension);
  console.log(`Registering ${extensionName} for extension point ${name}`);
  if (!extensions[name]) {
    extensions[name] = [];
  }
  if (extensions[name].includes(extension)) {
    console.warn(`Extension ${extensionName} is already registered for extension point ${name}`);
    return;
  }
  extensions[name].push(extension);
  console.log("Registered extensions: ", extensions);
};
const registerExtensions = registrations => {
  for (const name in registrations) {
    for (const extension of registrations[name]) {
      registerExtension(name, extension);
    }
  }
  trigger("change");
};
const registerExtension = (name, extension) => {
  _registerExtension(name, extension);
  trigger("change");
};
const getExtensionsFor = (name, sorter) => {
  if (sorter) {
    return extensions[name].sort(sorter) || [];
  }
  return extensions[name] || [];
};
const on = (event, callback) => {
  if (!listeners[event]) {
    listeners[event] = [];
  }
  if (listeners[event].includes(callback)) {
    return;
  }
  listeners[event].push(callback);
};
const trigger = function (event) {
  if (!listeners[event]) {
    return;
  }
  for (var _len = arguments.length, args = new Array(_len > 1 ? _len - 1 : 0), _key = 1; _key < _len; _key++) {
    args[_key - 1] = arguments[_key];
  }
  for (const callback of listeners[event]) {
    callback(...args);
  }
};
const registry = {
  registerExtension,
  registerExtensions,
  getExtensionsFor,
  on
};
/* harmony default export */ const extensionregistry = (registry);
;// CONCATENATED MODULE: ./src/components/extensions/ExtensionProvider.js


const ExtensionContext = /*#__PURE__*/external_React_default().createContext();
const ExtensionProvider = _ref => {
  let {
    children
  } = _ref;
  const [update, forceUpdate] = external_React_default().useState(0);
  extensionregistry.on("change", () => {
    forceUpdate(update + 1);
  });
  return /*#__PURE__*/external_React_default().createElement(ExtensionContext.Provider, {
    value: {
      registry: extensionregistry,
      update: update
    }
  }, children);
};
/* harmony default export */ const extensions_ExtensionProvider = (ExtensionProvider);
;// CONCATENATED MODULE: ./src/components/extensions/ExtensionPoint.js


class ExtensionErrorBoundary extends (external_React_default()).Component {
  // see https://react.dev/reference/react/Component#catching-rendering-errors-with-an-error-boundary
  constructor(props) {
    super(props);
    this.state = {
      hasError: false
    };
  }
  static getDerivedStateFromError(error) {
    return {
      hasError: true
    };
  }
  componentDidCatch(error, info) {
    console.error(error, info);
  }
  render() {
    if (this.state.hasError) {
      return this.props.fallback;
    }
    return this.props.children;
  }
}
const ExtensionPoint = _ref => {
  let {
    name,
    sort,
    ...props
  } = _ref;
  const {
    registry
  } = external_React_default().useContext(ExtensionContext);
  const extensions = registry.getExtensionsFor(name, sort);
  console.log(`Rendering extension point ${name} with ${extensions.length} extensions...`);
  if (extensions.length === 0) {
    return null;
  }
  return /*#__PURE__*/external_React_default().createElement((external_React_default()).Fragment, null, extensions.map((Extension, index) => {
    return /*#__PURE__*/external_React_default().createElement(ExtensionErrorBoundary, {
      key: index,
      fallback: "💩"
    }, /*#__PURE__*/external_React_default().createElement(Extension, props));
  }));
};
/* harmony default export */ const extensions_ExtensionPoint = (ExtensionPoint);
// EXTERNAL MODULE: ./node_modules/@mui/icons-material/PlusOne.js
var PlusOne = __webpack_require__(686);
;// CONCATENATED MODULE: external "{ ...window['MaterialUI']['Paper'] }"
const external_window_MaterialUI_Paper_namespaceObject = { ...window['MaterialUI']['Paper'] };
var external_window_MaterialUI_Paper_default = /*#__PURE__*/__webpack_require__.n(external_window_MaterialUI_Paper_namespaceObject);
;// CONCATENATED MODULE: external "{ ...window['MaterialUI']['Grid'] }"
const external_window_MaterialUI_Grid_namespaceObject = { ...window['MaterialUI']['Grid'] };
var external_window_MaterialUI_Grid_default = /*#__PURE__*/__webpack_require__.n(external_window_MaterialUI_Grid_namespaceObject);
;// CONCATENATED MODULE: ./src/components/DashboardContainer.js



const DashboardContainer = _ref => {
  let {
    mode,
    children
  } = _ref;
  const narrow = mode === "narrow";
  return /*#__PURE__*/external_React_default().createElement((external_window_MaterialUI_Grid_default()), {
    item: true,
    xs: narrow ? 4 : 8
  }, /*#__PURE__*/external_React_default().createElement((external_window_MaterialUI_Paper_default()), {
    sx: {
      p: 2
    }
  }, children));
};
/* harmony default export */ const components_DashboardContainer = (DashboardContainer);
;// CONCATENATED MODULE: ./src/components/ExtensionSpawner.js






const ExtensionSpawner = _ref => {
  let {
    name
  } = _ref;
  const {
    registry
  } = external_React_default().useContext(ExtensionContext);
  const [counter, setCounter] = external_React_default().useState(1);
  const spawnExtension = () => {
    const Component = () => {
      return /*#__PURE__*/external_React_default().createElement(components_DashboardContainer, {
        mode: "narrow"
      }, "Spawned component #", counter);
    };
    registry.registerExtension("Dashboard.Containers", Component);
    setCounter(counter + 1);
  };
  return /*#__PURE__*/external_React_default().createElement(external_window_MaterialUI_.IconButton, {
    color: "inherit",
    onClick: spawnExtension
  }, /*#__PURE__*/external_React_default().createElement(PlusOne/* default */.Z, null));
};
extensionregistry.registerExtension("Dashboard.Navigation.NavigationBar.Icons", ExtensionSpawner);
/* harmony default export */ const components_ExtensionSpawner = (ExtensionSpawner);
;// CONCATENATED MODULE: ./src/components/Dashboard.js








 // eslint-disable-line no-unused-vars

const drawerWidth = 240;
const StyledAppBar = (0,external_window_MaterialUI_.styled)(external_window_MaterialUI_.AppBar, {
  shouldForwardProp: prop => prop !== "open"
})(_ref => {
  let {
    theme,
    open
  } = _ref;
  return {
    zIndex: theme.zIndex.drawer + 1,
    transition: theme.transitions.create(["width", "margin"], {
      easing: theme.transitions.easing.sharp,
      duration: theme.transitions.duration.leavingScreen
    }),
    ...(open && {
      marginLeft: drawerWidth,
      width: `calc(100% - ${drawerWidth}px)`,
      transition: theme.transitions.create(["width", "margin"], {
        easing: theme.transitions.easing.sharp,
        duration: theme.transitions.duration.enteringScreen
      })
    })
  };
});
const StyledDrawer = (0,external_window_MaterialUI_.styled)(external_window_MaterialUI_.Drawer, {
  shouldForwardProp: prop => prop !== "open"
})(_ref2 => {
  let {
    theme,
    open
  } = _ref2;
  return {
    "& .MuiDrawer-paper": {
      position: "relative",
      whiteSpace: "nowrap",
      width: drawerWidth,
      transition: theme.transitions.create("width", {
        easing: theme.transitions.easing.sharp,
        duration: theme.transitions.duration.enteringScreen
      }),
      boxSizing: "border-box",
      ...(!open && {
        overflowX: "hidden",
        transition: theme.transitions.create("width", {
          easing: theme.transitions.easing.sharp,
          duration: theme.transitions.duration.leavingScreen
        }),
        width: theme.spacing(7),
        [theme.breakpoints.up("sm")]: {
          width: theme.spacing(9)
        }
      })
    }
  };
});
const mdTheme = (0,external_window_MaterialUI_.createTheme)();
const NavigationBar = _ref3 => {
  let {
    open,
    toggleDrawer,
    toggleTheme
  } = _ref3;
  return /*#__PURE__*/external_React_.createElement(StyledAppBar, {
    position: "absolute",
    open: open
  }, /*#__PURE__*/external_React_.createElement(external_window_MaterialUI_.Toolbar, {
    sx: {
      pr: "24px" // keep right padding when drawer closed
    }
  }, /*#__PURE__*/external_React_.createElement(external_window_MaterialUI_.IconButton, {
    edge: "start",
    color: "inherit",
    "aria-label": "open drawer",
    onClick: toggleDrawer,
    sx: {
      marginRight: "36px",
      ...(open && {
        display: "none"
      })
    }
  }, /*#__PURE__*/external_React_.createElement(Menu/* default */.Z, null)), /*#__PURE__*/external_React_.createElement(external_window_MaterialUI_.Typography, {
    component: "h1",
    variant: "h6",
    color: "inherit",
    noWrap: true,
    sx: {
      flexGrow: 1
    }
  }, "UI Prototype"), /*#__PURE__*/external_React_.createElement(extensions_ExtensionPoint, {
    name: "Dashboard.Navigation.NavigationBar.Icons"
  }), /*#__PURE__*/external_React_.createElement(external_window_MaterialUI_.IconButton, {
    color: "inherit",
    onClick: toggleTheme
  }, /*#__PURE__*/external_React_.createElement(Brightness4/* default */.Z, null))));
};
const NavigationDrawer = _ref4 => {
  let {
    open,
    toggleDrawer
  } = _ref4;
  return /*#__PURE__*/external_React_.createElement(StyledDrawer, {
    variant: "permanent",
    open: open
  }, /*#__PURE__*/external_React_.createElement(external_window_MaterialUI_.Toolbar, {
    sx: {
      display: "flex",
      alignItems: "center",
      justifyContent: "flex-end",
      px: [1]
    }
  }, /*#__PURE__*/external_React_.createElement(external_window_MaterialUI_.IconButton, {
    onClick: toggleDrawer
  }, /*#__PURE__*/external_React_.createElement(ChevronLeft/* default */.Z, null))), /*#__PURE__*/external_React_.createElement(external_window_MaterialUI_.Divider, null), /*#__PURE__*/external_React_.createElement(external_window_MaterialUI_.List, {
    component: "nav"
  }, /*#__PURE__*/external_React_.createElement(external_window_MaterialUI_.ListItemButton, null, /*#__PURE__*/external_React_.createElement(external_window_MaterialUI_.ListItemIcon, null, /*#__PURE__*/external_React_.createElement(AccountCircle/* default */.Z, null)), /*#__PURE__*/external_React_.createElement(external_window_MaterialUI_.ListItemText, {
    primary: "Logged in"
  })), /*#__PURE__*/external_React_.createElement(extensions_ExtensionPoint, {
    name: "Dashboard.Navigation.NavigationDrawer.List"
  })));
};
const Navigation = () => {
  const [open, setOpen] = external_React_.useState(false);
  const toggleDrawer = () => {
    setOpen(!open);
  };
  const toggleTheme = () => {
    const newPaletteMode = mdTheme.palette.mode === "light" ? "dark" : "light";
    mdTheme.palette.mode = newPaletteMode;
  };
  return /*#__PURE__*/external_React_.createElement(external_React_.Fragment, null, /*#__PURE__*/external_React_.createElement(NavigationBar, {
    open: open,
    toggleDrawer: toggleDrawer,
    toggleTheme: toggleTheme
  }), /*#__PURE__*/external_React_.createElement(NavigationDrawer, {
    open: open,
    toggleDrawer: toggleDrawer
  }));
};
function DashboardContent() {
  const sortContainers = (a, b) => {
    return a > b;
  };
  return /*#__PURE__*/external_React_.createElement(external_window_MaterialUI_.ThemeProvider, {
    theme: mdTheme
  }, /*#__PURE__*/external_React_.createElement(external_window_MaterialUI_.Box, {
    sx: {
      display: "flex"
    }
  }, /*#__PURE__*/external_React_.createElement(Navigation, null), /*#__PURE__*/external_React_.createElement(external_window_MaterialUI_.Box, {
    component: "main",
    sx: {
      backgroundColor: theme => theme.palette.mode === "light" ? theme.palette.grey[100] : theme.palette.grey[900],
      flexGrow: 1,
      height: "100vh",
      overflow: "auto"
    }
  }, /*#__PURE__*/external_React_.createElement(external_window_MaterialUI_.Toolbar, null), /*#__PURE__*/external_React_.createElement(external_window_MaterialUI_.Container, {
    sx: {
      mt: 5,
      mb: 5
    }
  }, /*#__PURE__*/external_React_.createElement(external_window_MaterialUI_.Grid, {
    container: true,
    spacing: 3
  }, /*#__PURE__*/external_React_.createElement(extensions_ExtensionPoint, {
    name: "Dashboard.Containers",
    sort: sortContainers
  }))))));
}
function Dashboard() {
  return /*#__PURE__*/external_React_.createElement(DashboardContent, null);
}
;// CONCATENATED MODULE: ./src/App.js




function App() {
  return /*#__PURE__*/external_React_default().createElement(extensions_ExtensionProvider, null, /*#__PURE__*/external_React_default().createElement(external_window_MaterialUI_.CssBaseline, null), /*#__PURE__*/external_React_default().createElement(Dashboard, null));
}
/* harmony default export */ const src_App = (App);
;// CONCATENATED MODULE: ./src/components/extensions/index.js



;// CONCATENATED MODULE: ./src/components/index.js





;// CONCATENATED MODULE: ./src/index.js






function createTestComponent(name) {
  return () => {
    console.log(name);
    return /*#__PURE__*/external_React_default().createElement(components_DashboardContainer, {
      mode: "narrow"
    }, name);
  };
}
function injectScript(src) {
  return new Promise((resolve, reject) => {
    const script = document.createElement("script");
    script.src = src;
    script.onload = resolve;
    script.onerror = reject;
    document.head.appendChild(script);
  });
}
const registrations = {
  "Dashboard.Containers": [createTestComponent("TestComponentA"), createTestComponent("TestComponentB"), createTestComponent("TestComponentD"), createTestComponent("TestComponentE"), createTestComponent("TestComponentC")]
};
extensionregistry.registerExtensions(registrations);
const OCTOPRINT_CONFIG = window.OCTOPRINT_CONFIG;
for (const key of Object.keys(OCTOPRINT_CONFIG.modules)) {
  const script = OCTOPRINT_CONFIG.modules[key];
  if (!script) {
    continue;
  }
  const url = OCTOPRINT_CONFIG.modulePrefix + script;
  injectScript(url).then(() => {
    const module = window[key];
    if (module && module.default && module.default.extensionPoints) {
      extensionregistry.registerExtensions(module.default.extensionPoints);
    }
  }).catch(() => {
    console.error(`Failed to load module ${key} from ${url}`);
  });
}
const rootElement = document.getElementById("root");
if (rootElement) {
  const root = client.createRoot(document.getElementById("root"));
  root.render( /*#__PURE__*/external_React_default().createElement((external_React_default()).StrictMode, null, /*#__PURE__*/external_React_default().createElement(src_App, null)));
}

})();

/******/ 	return __webpack_exports__;
/******/ })()
;
});