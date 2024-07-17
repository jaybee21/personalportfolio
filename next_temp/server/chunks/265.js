"use strict";
exports.id = 265;
exports.ids = [265];
exports.modules = {

/***/ 5265:
/***/ ((module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.a(module, async (__webpack_handle_async_dependencies__, __webpack_async_result__) => { try {
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(997);
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(6689);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var framer_motion__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(6197);
var __webpack_async_dependencies__ = __webpack_handle_async_dependencies__([framer_motion__WEBPACK_IMPORTED_MODULE_2__]);
framer_motion__WEBPACK_IMPORTED_MODULE_2__ = (__webpack_async_dependencies__.then ? (await __webpack_async_dependencies__)() : __webpack_async_dependencies__)[0];



const ExperienceCard = ({ company , position , date , description , skills  })=>{
    const ref = (0,react__WEBPACK_IMPORTED_MODULE_1__.useRef)(null);
    const { 0: rotateX , 1: setRotateX  } = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(0);
    const { 0: rotateY , 1: setRotateY  } = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(0);
    const ROTATION_RANGE = 32.5;
    const HALF_ROTATION_RANGE = ROTATION_RANGE / 2;
    const handleMouseMove = (e)=>{
        if (!ref.current) return;
        const rect = ref.current.getBoundingClientRect();
        const width = rect.width;
        const height = rect.height;
        const mouseX = (e.clientX - rect.left) * ROTATION_RANGE;
        const mouseY = (e.clientY - rect.top) * ROTATION_RANGE;
        const rY = mouseX / width - HALF_ROTATION_RANGE;
        const rX = (mouseY / height - HALF_ROTATION_RANGE) * -1;
        setRotateX(rX);
        setRotateY(rY);
    };
    const handleMouseLeave = ()=>{
        if (!ref.current) return;
        setRotateX(0);
        setRotateY(0);
    };
    return /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(framer_motion__WEBPACK_IMPORTED_MODULE_2__.motion.div, {
        ref: ref,
        onMouseMove: handleMouseMove,
        onMouseLeave: handleMouseLeave,
        style: {
            transformStyle: "preserve-3d",
            boxShadow: "0px 5px 10px rgba(0, 0, 0, 0.1)"
        },
        animate: {
            rotateX,
            rotateY
        },
        whileHover: {
            scale: 1.05
        },
        className: "text-center shadow-lg p-10 rounded-xl my-10 dark:bg-white flex-1",
        children: [
            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("h3", {
                className: "text-lg font-medium pt-8 pb-2 text-blue-600 border-b-2 border-blue-600",
                children: company
            }),
            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("h4", {
                className: "py-4 text-blue-600 text-2xl font-semibold border-b-2 border-blue-600",
                children: position
            }),
            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("h4", {
                className: "py-4 text-gray-600 font-medium",
                children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("span", {
                    className: "text-blue-600",
                    children: date
                })
            }),
            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("p", {
                className: "py-2",
                children: description
            }),
            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
                className: "flex flex-wrap gap-2 mt-3",
                children: skills.map((skill, index)=>/*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("p", {
                        className: "text-gray-800 py-1 inline-flex items-center justify-center rounded-full bg-blue-200 px-3",
                        children: skill
                    }, index))
            })
        ]
    });
};
// Default props declaration
ExperienceCard.defaultProps = {
    skills: []
};
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (ExperienceCard);

__webpack_async_result__();
} catch(e) { __webpack_async_result__(e); } });

/***/ })

};
;