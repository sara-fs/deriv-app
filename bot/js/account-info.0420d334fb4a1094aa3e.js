(window.webpackJsonp=window.webpackJsonp||[]).push([["account-info"],{545:function(e,t,n){"use strict";n.r(t);var a=n(6),c=n.n(a),i=n(1),o=n.n(i),r=n(0),s=n.n(r),l=n(151),u=n(3),p=n(23),_=n(8),d=n(12),f=n(35),g=n(21);function h(e){return(h="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(e){return typeof e}:function(e){return e&&"function"==typeof Symbol&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e})(e)}function m(e,t,n,a,c,i,o){try{var r=e[i](o),s=r.value}catch(e){return void n(e)}r.done?t(s):Promise.resolve(s).then(a,c)}function w(e,t){for(var n=0;n<t.length;n++){var a=t[n];a.enumerable=a.enumerable||!1,a.configurable=!0,"value"in a&&(a.writable=!0),Object.defineProperty(e,a.key,a)}}function b(e,t){return!t||"object"!==h(t)&&"function"!=typeof t?function(e){if(void 0===e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return e}(e):t}function v(e){return(v=Object.setPrototypeOf?Object.getPrototypeOf:function(e){return e.__proto__||Object.getPrototypeOf(e)})(e)}function y(e,t){return(y=Object.setPrototypeOf||function(e,t){return e.__proto__=t,e})(e,t)}var E=function(e){function t(){var e,n;!function(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}(this,t);for(var a=arguments.length,c=new Array(a),i=0;i<a;i++)c[i]=arguments[i];return(n=b(this,(e=v(t)).call.apply(e,[this].concat(c)))).setWrapperRef=function(e){n.wrapper_ref=e},n.handleClickOutside=function(e){var t=!e.target.classList.contains("acc-info");n.wrapper_ref&&!n.wrapper_ref.contains(e.target)&&n.props.is_visible&&t&&n.props.toggle()},n.handleLogout=function(){n.props.toggle(),n.props.is_positions_drawer_on&&n.props.togglePositionsDrawer(),Object(f.c)().then(n.props.cleanUp)},n}var n,a,i,o,r;return function(e,t){if("function"!=typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function");e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,writable:!0,configurable:!0}}),t&&y(e,t)}(t,s.a.Component),n=t,(a=[{key:"componentDidMount",value:function(){document.addEventListener("mousedown",this.handleClickOutside)}},{key:"componentWillUnmount",value:function(){document.removeEventListener("mousedown",this.handleClickOutside)}},{key:"doSwitch",value:(o=regeneratorRuntime.mark(function e(t){return regeneratorRuntime.wrap(function(e){for(;;)switch(e.prev=e.next){case 0:if(this.props.toggle(),this.props.account_loginid!==t){e.next=3;break}return e.abrupt("return");case 3:return e.next=5,this.props.switchAccount(t);case 5:case"end":return e.stop()}},e,this)}),r=function(){var e=this,t=arguments;return new Promise(function(n,a){var c=o.apply(e,t);function i(e){m(c,n,a,i,r,"next",e)}function r(e){m(c,n,a,i,r,"throw",e)}i(void 0)})},function(e){return r.apply(this,arguments)})},{key:"render",value:function(){var e=this;if(!this.props.is_logged_in)return!1;var t=this.props.account_list.filter(function(e){return!e.is_virtual}),n=this.props.account_list.find(function(e){return e.is_virtual}),a=t.length>1?Object(u.localize)("Real accounts"):Object(u.localize)("Real account"),i=function(e){var t=e.text;return s.a.createElement("div",{className:"acc-switcher__new-account"},s.a.createElement("a",{className:"acc-switcher__new-account-link",href:Object(p.urlFor)("user/accounts",void 0,void 0,!0),rel:"noopener noreferrer",target:"_blank"},t))};return s.a.createElement("div",{className:"acc-switcher__list",ref:this.setWrapperRef},!(!this.props.account_list.length||!t.length)&&s.a.createElement("div",{className:"acc-switcher__list-group"},s.a.createElement("span",{className:"acc-switcher__list-title"},a),s.a.createElement("div",{className:"acc-switcher__accounts"},t.map(function(t){return s.a.createElement("div",{key:t.loginid,className:c()("acc-switcher__account",{"acc-switcher__account--selected":t.loginid===e.props.account_loginid}),onClick:e.doSwitch.bind(e,t.loginid)},s.a.createElement("span",{className:"acc-switcher__id"},s.a.createElement(d.a,{icon:"IconAccountsCurrency",className:"acc-switcher__id-icon acc-switcher__id-icon--".concat(t.icon),type:t.icon}),t.loginid))})),!(!this.props.is_upgrade_enabled||!this.props.upgrade_info.can_open_multi)&&s.a.createElement(i,{text:Object(u.localize)("Add new account")})),!Object(_.isEmptyObject)(n)&&s.a.createElement("div",{className:"acc-switcher__list--virtual"},s.a.createElement("span",{className:"acc-switcher__list-title"},Object(u.localize)("Virtual account")),s.a.createElement("div",{className:"acc-switcher__accounts"},s.a.createElement("div",{className:c()("acc-switcher__account",{"acc-switcher__account--selected":this.props.virtual_loginid===this.props.account_loginid}),onClick:this.doSwitch.bind(this,this.props.virtual_loginid)},s.a.createElement("span",{className:c()("acc-switcher__id","acc-switcher__id--virtual")},this.props.virtual_loginid)))),!(!this.props.is_upgrade_enabled||!this.props.is_virtual)&&s.a.createElement(i,{text:Object(u.localize)("Upgrade to Real Account")}),s.a.createElement("div",{className:"acc-switcher__logout",onClick:this.handleLogout},s.a.createElement("span",{className:"acc-switcher__logout-text"},Object(u.localize)("Log out")),s.a.createElement(d.a,{icon:"IconLogout",className:"acc-switcher__logout-icon drawer__icon"})))}}])&&w(n.prototype,a),i&&w(n,i),t}();E.propTypes={account_list:o.a.array,account_loginid:o.a.string,cleanUp:o.a.func,clearError:o.a.func,has_error:o.a.bool,is_logged_in:o.a.bool,is_positions_drawer_on:o.a.bool,is_upgrade_enabled:o.a.bool,is_virtual:o.a.bool,is_visible:o.a.bool,onClickUpgrade:o.a.func,toggle:o.a.func,togglePositionsDrawer:o.a.func,upgrade_info:o.a.object,virtual_loginid:o.a.string};var O=Object(g.b)(function(e){var t=e.client,n=e.ui;return{account_list:t.account_list,account_loginid:t.loginid,is_logged_in:t.is_logged_in,is_virtual:t.is_virtual,switchAccount:t.switchAccount,upgrade_info:t.upgrade_info,cleanUp:t.cleanUp,virtual_loginid:t.virtual_account_loginid,is_positions_drawer_on:n.is_positions_drawer_on,togglePositionsDrawer:n.togglePositionsDrawer}})(E);var N=function(e){var t,n,a,i=e.balance,o=e.currency,r=e.loginid,u=e.is_dialog_on,p=e.is_upgrade_enabled,_=e.is_virtual,f=e.onClickUpgrade,g=e.toggleDialog;return s.a.createElement("div",{className:"acc-info__wrapper"},s.a.createElement("div",{id:"dt_account_dropdown",className:c()("acc-info",{"acc-info--show":u,"acc-info--is-virtual":_}),onClick:g},s.a.createElement("p",{className:"acc-info__id",title:r},r," "),void 0!==i&&s.a.createElement("p",{className:"acc-info__balance"},s.a.createElement("span",{className:c()("symbols",(t={},n="symbols--".concat((o||"").toLowerCase()),a=o,n in t?Object.defineProperty(t,n,{value:a,enumerable:!0,configurable:!0,writable:!0}):t[n]=a,t))}),i),s.a.createElement(d.a,{icon:"IconArrowBold",className:"acc-info__select-arrow"})),s.a.createElement(l.CSSTransition,{in:u,timeout:200,classNames:{enter:"acc-switcher__wrapper--enter",enterDone:"acc-switcher__wrapper--enter-done",exit:"acc-switcher__wrapper--exit"},unmountOnExit:!0},s.a.createElement("div",{className:"acc-switcher__wrapper"},s.a.createElement(O,{is_visible:u,toggle:g,is_upgrade_enabled:p,onClickUpgrade:f}))))};N.propTypes={account_type:o.a.string,balance:o.a.string,currency:o.a.string,is_dialog_on:o.a.bool,is_upgrade_enabled:o.a.bool,is_virtual:o.a.bool,loginid:o.a.string,onClickUpgrade:o.a.func,toggleDialog:o.a.func};t.default=N}}]);
//# sourceMappingURL=account-info.0420d334fb4a1094aa3e.js.map