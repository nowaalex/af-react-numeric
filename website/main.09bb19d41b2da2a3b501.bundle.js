(window.webpackJsonp=window.webpackJsonp||[]).push([[0],{277:function(module,exports,__webpack_require__){__webpack_require__(278),__webpack_require__(424),module.exports=__webpack_require__(425)},342:function(module,exports){},425:function(module,__webpack_exports__,__webpack_require__){"use strict";__webpack_require__.r(__webpack_exports__),function(module){var _storybook_react__WEBPACK_IMPORTED_MODULE_0__=__webpack_require__(270);module._StorybookPreserveDecorators=!0,Object(_storybook_react__WEBPACK_IMPORTED_MODULE_0__.configure)([__webpack_require__(610)],module)}.call(this,__webpack_require__(426)(module))},610:function(module,exports,__webpack_require__){var map={"./index.stories.js":625};function webpackContext(req){var id=webpackContextResolve(req);return __webpack_require__(id)}function webpackContextResolve(req){if(!__webpack_require__.o(map,req)){var e=new Error("Cannot find module '"+req+"'");throw e.code="MODULE_NOT_FOUND",e}return map[req]}webpackContext.keys=function webpackContextKeys(){return Object.keys(map)},webpackContext.resolve=webpackContextResolve,module.exports=webpackContext,webpackContext.id=610},625:function(module,__webpack_exports__,__webpack_require__){"use strict";__webpack_require__.r(__webpack_exports__),__webpack_require__.d(__webpack_exports__,"WholeNumber",(function(){return WholeNumber})),__webpack_require__.d(__webpack_exports__,"FractionNumber",(function(){return FractionNumber})),__webpack_require__.d(__webpack_exports__,"MaxMinStep",(function(){return MaxMinStep})),__webpack_require__.d(__webpack_exports__,"AlwaysAllowZero",(function(){return AlwaysAllowZero})),__webpack_require__.d(__webpack_exports__,"PrefixSuffix",(function(){return PrefixSuffix})),__webpack_require__.d(__webpack_exports__,"WithButtons",(function(){return WithButtons})),__webpack_require__.d(__webpack_exports__,"WithIntervalButtons",(function(){return WithIntervalButtons})),__webpack_require__.d(__webpack_exports__,"getValueAfterRelativeInput",(function(){return index_stories_getValueAfterRelativeInput}));var react=__webpack_require__(5),react_default=__webpack_require__.n(react),esm_extends=(__webpack_require__(18),__webpack_require__(153),__webpack_require__(54),__webpack_require__(611),__webpack_require__(267),__webpack_require__(613),__webpack_require__(614),__webpack_require__(615),__webpack_require__(616),__webpack_require__(21),__webpack_require__(619),__webpack_require__(621),__webpack_require__(55),__webpack_require__(56),__webpack_require__(258),__webpack_require__(164),__webpack_require__(163),__webpack_require__(271)),objectWithoutProperties=__webpack_require__(274),classCallCheck=__webpack_require__(272),createClass=__webpack_require__(273),assertThisInitialized=__webpack_require__(15),inherits=__webpack_require__(275),possibleConstructorReturn=__webpack_require__(276),getPrototypeOf=__webpack_require__(166),defineProperty=__webpack_require__(17);__webpack_require__(622);function _createSuper(Derived){var hasNativeReflectConstruct=function _isNativeReflectConstruct(){if("undefined"==typeof Reflect||!Reflect.construct)return!1;if(Reflect.construct.sham)return!1;if("function"==typeof Proxy)return!0;try{return Date.prototype.toString.call(Reflect.construct(Date,[],(function(){}))),!0}catch(e){return!1}}();return function(){var result,Super=Object(getPrototypeOf.a)(Derived);if(hasNativeReflectConstruct){var NewTarget=Object(getPrototypeOf.a)(this).constructor;result=Reflect.construct(Super,arguments,NewTarget)}else result=Super.apply(this,arguments);return Object(possibleConstructorReturn.a)(this,result)}}var clamp=function(v,min,max){return v>max?max:v<min?min:v},getFractionPos=function(inputValue){return inputValue.search(/\.|\,/)},src_NumericInputCore=function(_PureComponent){Object(inherits.a)(NumericInputCore,_PureComponent);var _super=_createSuper(NumericInputCore);function NumericInputCore(props){var _this,fn,timer,cancel,resultFn;Object(classCallCheck.a)(this,NumericInputCore),_this=_super.call(this,props),Object(defineProperty.a)(Object(assertThisInitialized.a)(_this),"syncCursorPos",(fn=function(){var current=_this.inputRef.current;document.activeElement!==current&&current.focus(),current.setSelectionRange(_this.caretPos,_this.caretPos)},timer=0,(resultFn=function(){cancel(),timer=requestAnimationFrame(fn)}).cancel=cancel=function(){return cancelAnimationFrame(timer)},resultFn)),Object(defineProperty.a)(Object(assertThisInitialized.a)(_this),"onAfterValueChanged",(function(){_this.syncCursorPos(),_this.props.onChange&&_this.props.onChange(_this.state.numericValue)})),Object(defineProperty.a)(Object(assertThisInitialized.a)(_this),"changeHandler",(function(_ref){var inputValue,fractionPos,value=_ref.target.value,_this$props=_this.props,prefix=_this$props.prefix,suffix=_this$props.suffix,numericValue=parseFloat((inputValue=value,fractionPos=_this.fractionPos,-1===fractionPos||-1!==getFractionPos(inputValue)?inputValue:"".concat(inputValue.slice(0,fractionPos),".").concat(inputValue.slice(fractionPos))).slice(prefix.length,-suffix.length||void 0).replace(/[^\.,\d\-]/g,""));_this.changeValue(Number.isNaN(numericValue)?0:numericValue,!1)})),Object(defineProperty.a)(Object(assertThisInitialized.a)(_this),"wheelHandler",(function(_ref2){var deltaY=_ref2.deltaY;_this.changeValue(Math.sign(deltaY)*-_this.props.step,!0)})),Object(defineProperty.a)(Object(assertThisInitialized.a)(_this),"increment",(function(){_this.changeValue(_this.props.step,!0)})),Object(defineProperty.a)(Object(assertThisInitialized.a)(_this),"decrement",(function(){_this.changeValue(-_this.props.step,!0)})),Object(defineProperty.a)(Object(assertThisInitialized.a)(_this),"kdHandler",(function(e){var action=_this.keyActions[e.key];action&&(e.preventDefault(),action())})),Object(defineProperty.a)(Object(assertThisInitialized.a)(_this),"intervaledIncrement",(function(){return _this.startInterval(_this.increment)})),Object(defineProperty.a)(Object(assertThisInitialized.a)(_this),"intervaledDecrement",(function(){return _this.startInterval(_this.decrement)})),Object(defineProperty.a)(Object(assertThisInitialized.a)(_this),"keyActions",{ArrowUp:_this.intervaledIncrement,ArrowDown:_this.intervaledDecrement}),Object(defineProperty.a)(Object(assertThisInitialized.a)(_this),"clearAutoIncreaseInterval",(function(){clearInterval(_this.autoIncreaseInterval),clearTimeout(_this.autoIncreaseStartTimer),_this.autoIncreaseInterval=null,_this.detachIntervalEvents()}));var valueProp=props.value;return _this.state={valueProp:valueProp,numericValue:props.hasOwnProperty("value")?valueProp:props.defaultValue,stringValue:""},_this.fractionPos=-1,_this.caretPos=props.prefix.length,_this.inputRef=Object(react.createRef)(),_this.autoIncreaseInterval=null,_this.autoIncreaseStartTimer=null,_this}return Object(createClass.a)(NumericInputCore,[{key:"changeValue",value:function changeValue(newNumericValue,isRelative){var _this2=this;this.setState((function(_ref3,_ref4){var numericValue=_ref3.numericValue,stringValue=_ref3.stringValue,getValueAfterRelativeInput=_ref4.getValueAfterRelativeInput,prefix=_ref4.prefix,suffix=_ref4.suffix,selectionStart=_this2.inputRef.current.selectionStart;return _this2.caretPos=clamp(selectionStart,prefix.length,stringValue.length-suffix.length),_this2.fractionPos=getFractionPos(stringValue),{numericValue:isRelative?getValueAfterRelativeInput(numericValue,newNumericValue):newNumericValue}}),this.onAfterValueChanged)}},{key:"startInterval",value:function startInterval(method){var _this3=this;null===this.autoIncreaseInterval&&(method(),this.attachIntervalEvents(),clearTimeout(this.autoIncreaseStartTimer),this.autoIncreaseStartTimer=setTimeout((function(){_this3.autoIncreaseInterval=setInterval(method,50)}),300))}},{key:"render",value:function render(){var _this$props2=this.props,Component=(_this$props2.maskLength,_this$props2.min,_this$props2.max,_this$props2.step,_this$props2.value,_this$props2.defaultValue,_this$props2.onChange,_this$props2.alwaysAllowZero,_this$props2.Component),props=(_this$props2.getValueAfterRelativeInput,_this$props2.prefix,_this$props2.suffix,Object(objectWithoutProperties.a)(_this$props2,["maskLength","min","max","step","value","defaultValue","onChange","alwaysAllowZero","Component","getValueAfterRelativeInput","prefix","suffix"]));return react_default.a.createElement(Component,Object(esm_extends.a)({},props,{ref:this.inputRef,type:"text",value:this.state.stringValue,onChange:this.changeHandler,onWheel:this.wheelHandler,onKeyDown:this.kdHandler,"data-lpignore":"true",autoComplete:"off"}))}},{key:"attachIntervalEvents",value:function attachIntervalEvents(){window.addEventListener("keyup",this.clearAutoIncreaseInterval),window.addEventListener("mouseup",this.clearAutoIncreaseInterval)}},{key:"detachIntervalEvents",value:function detachIntervalEvents(){window.removeEventListener("keyup",this.clearAutoIncreaseInterval),window.removeEventListener("mouseup",this.clearAutoIncreaseInterval)}},{key:"componentDidMount",value:function componentDidMount(){this.fractionPos=getFractionPos(this.state.stringValue)}},{key:"componentWillUnmount",value:function componentWillUnmount(){this.syncCursorPos.cancel(),this.clearAutoIncreaseInterval(),this.detachIntervalEvents()}}],[{key:"getDerivedStateFromProps",value:function getDerivedStateFromProps(_ref5,_ref6){var value=_ref5.value,maskLength=_ref5.maskLength,min=_ref5.min,max=_ref5.max,prefix=_ref5.prefix,suffix=_ref5.suffix,alwaysAllowZero=_ref5.alwaysAllowZero,valueProp=_ref6.valueProp,stringValue=_ref6.stringValue,numericValue=_ref6.numericValue,finalNumericValue=function(numericValue,min,max,alwaysAllowZero){return 0===numericValue&&alwaysAllowZero?0:clamp(numericValue,min,max)}(value!==valueProp?value:numericValue,min,max,alwaysAllowZero),finalStringValue=function(numericValue,maskLength,prefix,suffix){return prefix+(0===numericValue&&1/numericValue==-1/0?"-":"")+(maskLength?numericValue.toFixed(maskLength+5).slice(0,-5):numericValue.toString())+suffix}(finalNumericValue,maskLength,prefix,suffix);return finalStringValue!==stringValue||finalNumericValue!==numericValue||value!==valueProp?{numericValue:finalNumericValue,stringValue:finalStringValue,valueProp:value}:null}}]),NumericInputCore}(react.PureComponent);src_NumericInputCore.displayName="NumericInputCore",src_NumericInputCore.propTypes={},src_NumericInputCore.defaultProps={prefix:"",suffix:"",maskLength:0,alwaysAllowZero:!1,defaultValue:0,min:Number.MIN_SAFE_INTEGER,max:Number.MAX_SAFE_INTEGER,getValueAfterRelativeInput:function(currentValue,valueToAdd){return currentValue+valueToAdd},step:1,Component:"input"},src_NumericInputCore.__docgenInfo={description:"",methods:[{name:"onAfterValueChanged",docblock:null,modifiers:[],params:[],returns:null},{name:"changeValue",docblock:null,modifiers:[],params:[{name:"newNumericValue",type:null},{name:"isRelative",type:null}],returns:null},{name:"changeHandler",docblock:null,modifiers:[],params:[{name:"{ target: { value } }",type:null}],returns:null},{name:"wheelHandler",docblock:null,modifiers:[],params:[{name:"{ deltaY }",type:null}],returns:null},{name:"increment",docblock:null,modifiers:[],params:[],returns:null},{name:"decrement",docblock:null,modifiers:[],params:[],returns:null},{name:"kdHandler",docblock:null,modifiers:[],params:[{name:"e",type:null}],returns:null},{name:"startInterval",docblock:null,modifiers:[],params:[{name:"method",type:null}],returns:null},{name:"intervaledIncrement",docblock:null,modifiers:[],params:[],returns:null},{name:"intervaledDecrement",docblock:null,modifiers:[],params:[],returns:null},{name:"clearAutoIncreaseInterval",docblock:null,modifiers:[],params:[],returns:null},{name:"attachIntervalEvents",docblock:null,modifiers:[],params:[],returns:null},{name:"detachIntervalEvents",docblock:null,modifiers:[],params:[],returns:null}],displayName:"NumericInputCore",props:{prefix:{defaultValue:{value:'""',computed:!1},type:{name:"string"},required:!1,description:""},suffix:{defaultValue:{value:'""',computed:!1},type:{name:"string"},required:!1,description:""},maskLength:{defaultValue:{value:"0",computed:!1},type:{name:"number"},required:!1,description:""},alwaysAllowZero:{defaultValue:{value:"false",computed:!1},type:{name:"bool"},required:!1,description:""},defaultValue:{defaultValue:{value:"0",computed:!1},type:{name:"number"},required:!1,description:""},min:{defaultValue:{value:"Number.MIN_SAFE_INTEGER",computed:!0},type:{name:"number"},required:!1,description:""},max:{defaultValue:{value:"Number.MAX_SAFE_INTEGER",computed:!0},type:{name:"number"},required:!1,description:""},getValueAfterRelativeInput:{defaultValue:{value:"( currentValue, valueToAdd ) => currentValue + valueToAdd",computed:!1},type:{name:"func"},required:!1,description:""},step:{defaultValue:{value:"1",computed:!1},type:{name:"number"},required:!1,description:""},Component:{defaultValue:{value:'"input"',computed:!1},type:{name:"elementType"},required:!1,description:""},value:{type:{name:"number"},required:!1,description:""},onChange:{type:{name:"func"},required:!1,description:""}}};var src=src_NumericInputCore;"undefined"!=typeof STORYBOOK_REACT_CLASSES&&(STORYBOOK_REACT_CLASSES["src/index.js"]={name:"NumericInputCore",docgenInfo:src_NumericInputCore.__docgenInfo,path:"src/index.js"});__webpack_exports__.default={title:"Core"};var _ref=react_default.a.createElement(src,{maskLength:0}),WholeNumber=function(){return _ref};WholeNumber.displayName="WholeNumber";var _ref2=react_default.a.createElement(src,{maskLength:5}),FractionNumber=function(){return _ref2};FractionNumber.displayName="FractionNumber";var _ref3=react_default.a.createElement(src,{maskLength:5,max:100,min:0,step:.1}),MaxMinStep=function(){return _ref3};MaxMinStep.displayName="MaxMinStep";var _ref4=react_default.a.createElement(src,{maskLength:5,max:100,min:10,alwaysAllowZero:!0}),AlwaysAllowZero=function(){return _ref4};AlwaysAllowZero.displayName="AlwaysAllowZero";var _ref5=react_default.a.createElement(src,{maskLength:5,prefix:"HAHA ",suffix:" HOHO",alwaysAllowZero:!0}),PrefixSuffix=function(){return _ref5};PrefixSuffix.displayName="PrefixSuffix";var WithButtons=function(){var ref=Object(react.useRef)();return react_default.a.createElement("div",null,react_default.a.createElement(src,{ref:ref}),react_default.a.createElement("button",{onClick:function onClick(){return ref.current.increment()}},"+"),react_default.a.createElement("button",{onClick:function onClick(){return ref.current.decrement()}},"-"))};WithButtons.displayName="WithButtons";var WithIntervalButtons=function(){var ref=Object(react.useRef)();return react_default.a.createElement("div",null,react_default.a.createElement(src,{ref:ref}),react_default.a.createElement("button",{onMouseDown:function onMouseDown(){return ref.current.intervaledIncrement()}},"+"),react_default.a.createElement("button",{onMouseDown:function onMouseDown(){return ref.current.intervaledDecrement()}},"-"))};WithIntervalButtons.displayName="WithIntervalButtons";var index_stories_getValueAfterRelativeInput=function(){return react_default.a.createElement(src,{getValueAfterRelativeInput:function(curValue,step){return curValue?curValue+step:1234}})};index_stories_getValueAfterRelativeInput.displayName="getValueAfterRelativeInput",WholeNumber.__docgenInfo={description:"",methods:[],displayName:"WholeNumber"},"undefined"!=typeof STORYBOOK_REACT_CLASSES&&(STORYBOOK_REACT_CLASSES["src/index.stories.js"]={name:"WholeNumber",docgenInfo:WholeNumber.__docgenInfo,path:"src/index.stories.js"}),FractionNumber.__docgenInfo={description:"",methods:[],displayName:"FractionNumber"},"undefined"!=typeof STORYBOOK_REACT_CLASSES&&(STORYBOOK_REACT_CLASSES["src/index.stories.js"]={name:"FractionNumber",docgenInfo:FractionNumber.__docgenInfo,path:"src/index.stories.js"}),MaxMinStep.__docgenInfo={description:"",methods:[],displayName:"MaxMinStep"},"undefined"!=typeof STORYBOOK_REACT_CLASSES&&(STORYBOOK_REACT_CLASSES["src/index.stories.js"]={name:"MaxMinStep",docgenInfo:MaxMinStep.__docgenInfo,path:"src/index.stories.js"}),AlwaysAllowZero.__docgenInfo={description:"",methods:[],displayName:"AlwaysAllowZero"},"undefined"!=typeof STORYBOOK_REACT_CLASSES&&(STORYBOOK_REACT_CLASSES["src/index.stories.js"]={name:"AlwaysAllowZero",docgenInfo:AlwaysAllowZero.__docgenInfo,path:"src/index.stories.js"}),PrefixSuffix.__docgenInfo={description:"",methods:[],displayName:"PrefixSuffix"},"undefined"!=typeof STORYBOOK_REACT_CLASSES&&(STORYBOOK_REACT_CLASSES["src/index.stories.js"]={name:"PrefixSuffix",docgenInfo:PrefixSuffix.__docgenInfo,path:"src/index.stories.js"}),WithButtons.__docgenInfo={description:"",methods:[],displayName:"WithButtons"},"undefined"!=typeof STORYBOOK_REACT_CLASSES&&(STORYBOOK_REACT_CLASSES["src/index.stories.js"]={name:"WithButtons",docgenInfo:WithButtons.__docgenInfo,path:"src/index.stories.js"}),WithIntervalButtons.__docgenInfo={description:"",methods:[],displayName:"WithIntervalButtons"},"undefined"!=typeof STORYBOOK_REACT_CLASSES&&(STORYBOOK_REACT_CLASSES["src/index.stories.js"]={name:"WithIntervalButtons",docgenInfo:WithIntervalButtons.__docgenInfo,path:"src/index.stories.js"}),index_stories_getValueAfterRelativeInput.__docgenInfo={description:"",methods:[],displayName:"getValueAfterRelativeInput"},"undefined"!=typeof STORYBOOK_REACT_CLASSES&&(STORYBOOK_REACT_CLASSES["src/index.stories.js"]={name:"getValueAfterRelativeInput",docgenInfo:index_stories_getValueAfterRelativeInput.__docgenInfo,path:"src/index.stories.js"})}},[[277,1,2]]]);
//# sourceMappingURL=main.09bb19d41b2da2a3b501.bundle.js.map