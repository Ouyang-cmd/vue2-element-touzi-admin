(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["chunk-75e3e98f"],{"1c35":function(t,e,n){"use strict";n.r(e);var s=function(){var t=this,e=t._self._c;return e("div",{staticClass:"fillcontain"},[e("div",{ref:"contain",staticClass:"contain"},[e("switch-roles",{on:{change:t.handleRolesChange}})],1)])},i=[],o=n("92d0"),a=n("f2bd"),c={name:"pagePermission",components:{SwitchRoles:o["a"]},mounted:function(){a["e"](this,this.$refs.contain,210)},methods:{handleRolesChange:function(){this.$router.push({path:"/permission/index?time="+ +new Date})}}},l=c,r=(n("7010"),n("2877")),u=Object(r["a"])(l,s,i,!1,null,"539b80eb",null);e["default"]=u.exports},"3e9a":function(t,e,n){},5266:function(t,e,n){"use strict";n("3e9a")},7010:function(t,e,n){"use strict";n("9a6d")},"92d0":function(t,e,n){"use strict";var s=function(){var t=this,e=t._self._c;return e("div",[e("div",{staticClass:"ownPer"},[t._v("我的权限："+t._s(t.roles))]),e("div",{staticClass:"rflex"},[e("p",[t._v("切换权限：")]),e("el-radio-group",{model:{value:t.switchRoles,callback:function(e){t.switchRoles=e},expression:"switchRoles"}},[e("el-radio-button",{attrs:{label:"editor"}}),e("el-radio-button",{attrs:{label:"admin"}})],1)],1)])},i=[],o={computed:{roles:function(){return this.$store.getters.roles},switchRoles:{get:function(){return this.roles[0]},set:function(t){var e=this;this.$store.dispatch("ChangeRoles",t).then((function(){e.$emit("change")}))}}}},a=o,c=(n("5266"),n("2877")),l=Object(c["a"])(a,s,i,!1,null,"8186ff46",null);e["a"]=l.exports},"9a6d":function(t,e,n){}}]);