
          window.__NEXT_REGISTER_PAGE('/monitorData', function() {
            var comp = module.exports=webpackJsonp([9],{220:function(e,t,n){e.exports={default:n(221),__esModule:!0}},221:function(e,t,n){n(222),e.exports=n(17).Object.keys},222:function(e,t,n){var r=n(91),s=n(98);n(339)("keys",function(){return function(e){return s(r(e))}})},253:function(e,t,n){"use strict";function r(e){return e&&e.__esModule?e:{default:e}}Object.defineProperty(t,"__esModule",{value:!0});var s=n(0),l=r(s),i=n(254),o=r(i),a=n(19),u=r(a),c=function(e){return l.default.createElement("div",{className:"controlPanel"},l.default.createElement(u.default,null,l.default.createElement("style",{dangerouslySetInnerHTML:{__html:o.default}})),l.default.createElement("div",{className:"controlPanel-title"},e.title),l.default.createElement("div",{className:"controlPanel-content"},e.children))};t.default=c},254:function(e,t){!function(){"use strict";e.exports='.controlPanel {\n  vertical-align: top;\n  max-width: 505px;\n  min-width: 200px;\n  padding: 7px 32px;\n  display: inline-block;\n  border-radius: 10px;\n  margin: 23px 23px 23px 0;\n  color: #989898;\n  background: #fff;\n  box-shadow: 0 0px 20px rgba(0, 0, 0, 0.2);\n  /*&:before,&:after {\n    content: "";\n    display: table;\n  }\n  &:after {\n    clear: both;\n    visibility: hidden;\n    font-size: 0;\n    height: 0;\n  }\n  &:hover{\n    transition: 0.5s;\n    -webkit-transform: scale(1.08);\n    -moz-transform:  scale(1.08);\n    transform:   scale(1.08);\n    box-shadow: 0 4px 20px 0 rgba(0,0,0,.14), 0 7px 10px -5px rgba(0,188,212,.4);\n    -webkit-box-shadow: 0 4px 20px 0 rgba(0,0,0,.14), 0 7px 10px -5px rgba(0,188,212,.4);\n    -moz-box-shadow: 0 4px 20px 0 rgba(0,0,0,.14), 0 7px 10px -5px rgba(0,188,212,.4); \n  }*/ }\n  .controlPanel .controlPanel-title {\n    width: 100%;\n    height: 32px;\n    border-bottom: 2px solid #f9f9f9;\n    line-height: 32px;\n    font-size: 14px;\n    margin-bottom: 10px; }\n  .controlPanel .controlPanel-content {\n    text-align: left;\n    font-size: 14px; }\n  .controlPanel .controlPanel-content .ant-radio-group {\n      display: block; }\n  .controlPanel .controlPanel-content p {\n      height: 30px;\n      line-height: 30px; }\n  .controlPanel .controlPanel-content p span {\n        color: #0599d9;\n        padding-left: 15px; }\n  .controlPanel .controlPanel-content .ant-table-thead > tr > th {\n      background: #fff;\n      border-bottom: 2px solid #f9f9f9; }\n  .controlPanel .controlPanel-content .control .ant-table-thead > tr > th:nth-child(1) {\n      padding-left: 58px; }\n  .controlPanel .controlPanel-content .status .ant-table-thead > tr > th:nth-child(1) {\n      padding-left: 92px; }\n  .controlPanel .controlPanel-content .status .ant-table-tbody > tr > td:nth-child(1) {\n      padding-left: 50px; }\n  .controlPanel .controlPanel-content .ant-table-tbody > tr > td,\n    .controlPanel .controlPanel-content .ant-table-placeholder {\n      border: none !important; }\n  .controlPanel .controlPanel-content .ant-table-small {\n      border: none !important; }\n'}()},352:function(e,t,n){"use strict";function r(e){return e&&e.__esModule?e:{default:e}}function s(){var e=b.cssRules();return b.flush(),new i.default(e)}Object.defineProperty(t,"__esModule",{value:!0});var l=n(353),i=r(l),o=n(83),a=r(o),u=n(13),c=r(u),d=n(2),f=r(d),p=n(5),h=r(p),m=n(3),_=r(m),v=n(4),y=r(v);t.flush=s;var x=n(0),g=n(359),S=r(g),b=new S.default,j=function(e){function t(){return(0,f.default)(this,t),(0,_.default)(this,(t.__proto__||(0,c.default)(t)).apply(this,arguments))}return(0,y.default)(t,e),(0,h.default)(t,[{key:"componentWillMount",value:function(){b.add(this.props)}},{key:"shouldComponentUpdate",value:function(e){return this.props.css!==e.css}},{key:"componentWillUpdate",value:function(e){b.update(this.props,e)}},{key:"componentWillUnmount",value:function(){b.remove(this.props)}},{key:"render",value:function(){return null}}],[{key:"dynamic",value:function(e){return e.map(function(e){var t=(0,a.default)(e,2),n=t[0],r=t[1];return b.computeId(n,r)}).join(" ")}}]),t}(x.Component);t.default=j},353:function(e,t,n){e.exports={default:n(354),__esModule:!0}},354:function(e,t,n){n(338),n(92),n(96),n(355),n(356),n(357),n(358),e.exports=n(17).Map},355:function(e,t,n){"use strict";var r=n(398),s=n(350);e.exports=n(399)("Map",function(e){return function(){return e(this,arguments.length>0?arguments[0]:void 0)}},{get:function(e){var t=r.getEntry(s(this,"Map"),e);return t&&t.v},set:function(e,t){return r.def(s(this,"Map"),0===e?0:e,t)}},r,!0)},356:function(e,t,n){var r=n(28);r(r.P+r.R,"Map",{toJSON:n(400)("Map")})},357:function(e,t,n){n(401)("Map")},358:function(e,t,n){n(402)("Map")},359:function(e,t,n){"use strict";function r(e){return e&&e.__esModule?e:{default:e}}function s(e,t){if(!e)throw new Error("StyleSheetRegistry: "+t+".")}Object.defineProperty(t,"__esModule",{value:!0});var l=n(220),i=r(l),o=n(2),a=r(o),u=n(5),c=r(u),d=n(360),f=r(d),p=n(361),h=r(p),m=function(){function e(){var t=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{},n=t.styleSheet,r=void 0===n?null:n,s=t.optimizeForSpeed,l=void 0!==s&&s,i=t.isBrowser,o=void 0===i?"undefined"!=typeof window:i;(0,a.default)(this,e),this._sheet=r||new h.default({name:"styled-jsx",optimizeForSpeed:l}),this._sheet.inject(),this._isBrowser=o,this._fromServer=void 0,this._indices={},this._instancesCounts={},this.computeId=this.createComputeId(),this.computeSelector=this.createComputeSelector()}return(0,c.default)(e,[{key:"add",value:function(e){var t=this;void 0===this._optimizeForSpeed&&(this._optimizeForSpeed=Array.isArray(e.css),this._sheet.setOptimizeForSpeed(this._optimizeForSpeed),this._optimizeForSpeed=this._sheet.isOptimizeForSpeed()),this._isBrowser&&!this._fromServer&&(this._fromServer=this.selectFromServer(),this._instancesCounts=(0,i.default)(this._fromServer).reduce(function(e,t){return e[t]=0,e},{}));var n=this.getIdAndRules(e),r=n.styleId,s=n.rules;if(r in this._instancesCounts)return void(this._instancesCounts[r]+=1);var l=s.map(function(e){return t._sheet.insertRule(e)}).filter(function(e){return-1!==e});l.length>0&&(this._indices[r]=l,this._instancesCounts[r]=1)}},{key:"remove",value:function(e){var t=this,n=this.getIdAndRules(e),r=n.styleId;if(s(r in this._instancesCounts,"styleId: `"+r+"` not found"),this._instancesCounts[r]-=1,this._instancesCounts[r]<1){var l=this._fromServer&&this._fromServer[r];l?(l.parentNode.removeChild(l),delete this._fromServer[r]):(this._indices[r].forEach(function(e){return t._sheet.deleteRule(e)}),delete this._indices[r]),delete this._instancesCounts[r]}}},{key:"update",value:function(e,t){this.add(t),this.remove(e)}},{key:"flush",value:function(){this._sheet.flush(),this._sheet.inject(),this._fromServer=void 0,this._indices={},this._instancesCounts={},this.computeId=this.createComputeId(),this.computeSelector=this.createComputeSelector()}},{key:"cssRules",value:function(){var e=this,t=this._fromServer?(0,i.default)(this._fromServer).map(function(t){return[t,e._fromServer[t]]}):[],n=this._sheet.cssRules();return t.concat((0,i.default)(this._indices).map(function(t){return[t,e._indices[t].map(function(e){return n[e].cssText}).join("\n")]}))}},{key:"createComputeId",value:function(){var e={};return function(t,n){if(!n)return"jsx-"+t;var r=String(n),s=t+r;return e[s]||(e[s]="jsx-"+(0,f.default)(t+"-"+r)),e[s]}}},{key:"createComputeSelector",value:function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:/__jsx-style-dynamic-selector/g,t={};return function(n,r){var s=n+r;return t[s]||(t[s]=r.replace(e,n)),t[s]}}},{key:"getIdAndRules",value:function(e){var t=this;if(e.dynamic){var n=this.computeId(e.styleId,e.dynamic);return{styleId:n,rules:Array.isArray(e.css)?e.css.map(function(e){return t.computeSelector(n,e)}):[this.computeSelector(n,e.css)]}}return{styleId:this.computeId(e.styleId),rules:Array.isArray(e.css)?e.css:[e.css]}}},{key:"selectFromServer",value:function(){return Array.prototype.slice.call(document.querySelectorAll('[id^="__jsx-"]')).reduce(function(e,t){return e[t.id.slice(2)]=t,e},{})}}]),e}();t.default=m},360:function(e,t){e.exports=function(e){for(var t=5381,n=e.length;n;)t=33*t^e.charCodeAt(--n);return t>>>0}},361:function(e,t,n){"use strict";(function(e){function r(e){return e&&e.__esModule?e:{default:e}}function s(e,t){if(!e)throw new Error("StyleSheet: "+t+".")}Object.defineProperty(t,"__esModule",{value:!0});var l=n(2),i=r(l),o=n(5),a=r(o),u=e.env&&!0,c=function(e){return"[object String]"===Object.prototype.toString.call(e)},d=function(){function e(){var t=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{},n=t.name,r=void 0===n?"stylesheet":n,l=t.optimizeForSpeed,o=void 0===l?u:l,a=t.isBrowser,d=void 0===a?"undefined"!=typeof window:a;(0,i.default)(this,e),s(c(r),"`name` must be a string"),this._name=r,this._deletedRulePlaceholder="#"+r+"-deleted-rule____{}",s("boolean"==typeof o,"`optimizeForSpeed` must be a boolean"),this._optimizeForSpeed=o,this._isBrowser=d,this._serverSheet=void 0,this._tags=[],this._injected=!1,this._rulesCount=0}return(0,a.default)(e,[{key:"setOptimizeForSpeed",value:function(e){s("boolean"==typeof e,"`setOptimizeForSpeed` accepts a boolean"),s(0===this._rulesCount,"optimizeForSpeed cannot be when rules have already been inserted"),this.flush(),this._optimizeForSpeed=e,this.inject()}},{key:"isOptimizeForSpeed",value:function(){return this._optimizeForSpeed}},{key:"inject",value:function(){var e=this;if(s(!this._injected,"sheet already injected"),this._injected=!0,this._isBrowser&&this._optimizeForSpeed)return this._tags[0]=this.makeStyleTag(this._name),this._optimizeForSpeed="insertRule"in this.getSheet(),void(this._optimizeForSpeed||(u||console.warn("StyleSheet: optimizeForSpeed mode not supported falling back to standard mode."),this.flush(),this._injected=!0));this._serverSheet={cssRules:[],insertRule:function(t,n){return"number"==typeof n?e._serverSheet.cssRules[n]={cssText:t}:e._serverSheet.cssRules.push({cssText:t}),n},deleteRule:function(t){e._serverSheet.cssRules[t]=null}}}},{key:"getSheetForTag",value:function(e){if(e.sheet)return e.sheet;for(var t=0;t<document.styleSheets.length;t++)if(document.styleSheets[t].ownerNode===e)return document.styleSheets[t]}},{key:"getSheet",value:function(){return this.getSheetForTag(this._tags[this._tags.length-1])}},{key:"insertRule",value:function(e,t){if(s(c(e),"`insertRule` accepts only strings"),!this._isBrowser)return"number"!=typeof t&&(t=this._serverSheet.cssRules.length),this._serverSheet.insertRule(e,t),this._rulesCount++;if(this._optimizeForSpeed){var n=this.getSheet();"number"!=typeof t&&(t=n.cssRules.length);try{n.insertRule(e,t)}catch(t){return u||console.warn("StyleSheet: illegal rule: \n\n"+e+"\n\nSee https://stackoverflow.com/q/20007992 for more info"),-1}}else{var r=this._tags[t];this._tags.push(this.makeStyleTag(this._name,e,r))}return this._rulesCount++}},{key:"replaceRule",value:function(e,t){if(this._optimizeForSpeed||!this._isBrowser){var n=this._isBrowser?this.getSheet():this._serverSheet;if(t.trim()||(t=this._deletedRulePlaceholder),!n.cssRules[e])return e;n.deleteRule(e);try{n.insertRule(t,e)}catch(r){u||console.warn("StyleSheet: illegal rule: \n\n"+t+"\n\nSee https://stackoverflow.com/q/20007992 for more info"),n.insertRule(this._deletedRulePlaceholder,e)}}else{var r=this._tags[e];s(r,"old rule at index `"+e+"` not found"),r.textContent=t}return e}},{key:"deleteRule",value:function(e){if(!this._isBrowser)return void this._serverSheet.deleteRule(e);if(this._optimizeForSpeed)this.replaceRule(e,"");else{var t=this._tags[e];s(t,"rule at index `"+e+"` not found"),t.parentNode.removeChild(t),this._tags[e]=null}}},{key:"flush",value:function(){this._injected=!1,this._rulesCount=0,this._isBrowser?(this._tags.forEach(function(e){return e&&e.parentNode.removeChild(e)}),this._tags=[]):this._serverSheet.cssRules=[]}},{key:"cssRules",value:function(){var e=this;return this._isBrowser?this._tags.reduce(function(t,n){return n?t=t.concat(e.getSheetForTag(n).cssRules.map(function(t){return t.cssText===e._deletedRulePlaceholder?null:t})):t.push(null),t},[]):this._serverSheet.cssRules}},{key:"makeStyleTag",value:function(e,t,n){t&&s(c(t),"makeStyleTag acceps only strings as second parameter");var r=document.createElement("style");r.type="text/css",r.setAttribute("data-"+e,""),t&&r.appendChild(document.createTextNode(t));var l=document.head||document.getElementsByTagName("head")[0];return n?l.insertBefore(r,n):l.appendChild(r),r}},{key:"length",get:function(){return this._rulesCount}}]),e}();t.default=d}).call(t,n(55))},457:function(e,t,n){e.exports=n(352)},672:function(e,t,n){e.exports=n(673)},673:function(e,t,n){"use strict";function r(e){return e&&e.__esModule?e:{default:e}}Object.defineProperty(t,"__esModule",{value:!0}),t.default=void 0;var s=n(52),l=r(s),i=n(53),o=r(i),a=n(84),u=r(a),c=n(86),d=r(c),f=n(13),p=r(f),h=n(2),m=r(h),_=n(5),v=r(_),y=n(3),x=r(y),g=n(4),S=r(g),b=n(59),j=r(b),w=n(93),k=r(w),P=n(0),E=r(P),R=n(674),z=r(R),C=j.default.Content,F=(j.default.Footer,[1,2,3,4,5,6,7,8,9]),M=function(e){function t(){return(0,m.default)(this,t),(0,x.default)(this,(t.__proto__||(0,p.default)(t)).apply(this,arguments))}return(0,S.default)(t,e),(0,v.default)(t,[{key:"render",value:function(){var e=this.props.pathname;return E.default.createElement(k.default,{className:"ant-layout-has-sider",pathname:e},E.default.createElement(j.default,null,E.default.createElement(C,{style:{padding:"0 20px"}},E.default.createElement(u.default,null,E.default.createElement(d.default,{span:12},E.default.createElement("h3",{style:{color:"#989898",fontSize:"14px"}},"设备间"),E.default.createElement("div",null,E.default.createElement(z.default,{parameterValues:F}),E.default.createElement(z.default,{parameterValues:F}))),E.default.createElement(d.default,{span:12},E.default.createElement("h3",{style:{color:"#989898",fontSize:"14px"}},"驯养池"),E.default.createElement("div",null,E.default.createElement(z.default,{parameterValues:F}),E.default.createElement(z.default,{parameterValues:F})))))))}}],[{key:"getInitialProps",value:function(){function e(e){return t.apply(this,arguments)}var t=(0,o.default)(l.default.mark(function e(t){var n=(t.req,t.pathname);return l.default.wrap(function(e){for(;;)switch(e.prev=e.next){case 0:return e.abrupt("return",{pathname:n});case 1:case"end":return e.stop()}},e,this)}));return e}()}]),t}(E.default.Component);t.default=M},674:function(e,t,n){"use strict";function r(e){return e&&e.__esModule?e:{default:e}}Object.defineProperty(t,"__esModule",{value:!0});var s=n(0),l=r(s),i=n(253),o=r(i),a=n(675),u=r(a),c=function(e){return l.default.createElement(o.default,{title:""+e.title+e.num+"号池"},l.default.createElement(u.default,{style:{margin:"13px 15px"}}),l.default.createElement(u.default,{type:"danger",style:{margin:"13px 15px"}}),l.default.createElement(u.default,{type:"danger",style:{margin:"13px 0px 15px 15px"}}),l.default.createElement(u.default,{type:"danger",style:{margin:"13px 15px"}}),l.default.createElement(u.default,{type:"danger",style:{margin:"13px 15px"}}),l.default.createElement(u.default,{type:"danger",style:{margin:"13px 15px"}}))};t.default=c,c.defaultProps={title:"设备间",num:1}},675:function(e,t,n){"use strict";function r(e){return e&&e.__esModule?e:{default:e}}Object.defineProperty(t,"__esModule",{value:!0});var s=n(457),l=r(s),i=n(0),o=r(i),a=function(e){var t=e.type,n=e.num,r=e.unit,s=e.name,i=e.style,a="circle-panel "+(t?"circle-"+t:"circle-primary");return o.default.createElement("div",{style:i||null,className:"jsx-1263139294 "+(a||"")},o.default.createElement(l.default,{styleId:"1263139294",css:[".circle-panel.jsx-1263139294{width:108px;height:108px;border-radius:100%;background:#fff;border:6px solid;display:inline-block;}",".circle-panel.jsx-1263139294 .circle-row.jsx-1263139294{text-align:center;}",".circle-row.jsx-1263139294 .circle-num.jsx-1263139294{font-size:30px;}",".circle-row.jsx-1263139294 .circle-unit.jsx-1263139294{font-size:12px;}",".circle-row.jsx-1263139294 .circle-name.jsx-1263139294{font-size:12px;color:#989898;}",".circle-primary.jsx-1263139294{border-color:#e6e6e6;}",".circle-primary.jsx-1263139294 .circle-num.jsx-1263139294,.circle-primary.jsx-1263139294 .circle-unit.jsx-1263139294{color:#0599d9;}",".circle-danger.jsx-1263139294{border-color:#f58d8e;}",".circle-danger.jsx-1263139294 .circle-num.jsx-1263139294,.circle-danger.jsx-1263139294 .circle-unit.jsx-1263139294{color:#f58d8e;}"]}),o.default.createElement("div",{style:{marginTop:10},className:"jsx-1263139294 circle-row"},o.default.createElement("span",{className:"jsx-1263139294 circle-num"},n||"0"),o.default.createElement("span",{className:"jsx-1263139294 circle-unit"},r||"mg/L")),o.default.createElement("div",{className:"jsx-1263139294 circle-row"},o.default.createElement("span",{className:"jsx-1263139294 circle-name"},s||"PH(酸碱度)")))};t.default=a},84:function(e,t,n){"use strict";Object.defineProperty(t,"__esModule",{value:!0});var r=n(85);t.default=r.Row,e.exports=t.default},86:function(e,t,n){"use strict";Object.defineProperty(t,"__esModule",{value:!0});var r=n(85);t.default=r.Col,e.exports=t.default}},[672]);
            return { page: comp.default }
          })
        