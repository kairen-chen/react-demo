(this["webpackJsonptest-app"]=this["webpackJsonptest-app"]||[]).push([[4],{419:function(e,t,n){"use strict";n.r(t);var r=n(0),o=n(20),a=n(21),s=n(23),i=n(22),c=n(25),h=n(1),u=n(7),l=n(18);function d(){var e=Object(c.a)(["\n  border: 1px solid red;\n  margin: 40px 0;\n  color:",";\n  border-color:",";\n  border-radius:",";\n  border-width:",";\n  background-color: ",";\n"]);return d=function(){return e},e}var m=l.c.div(d(),(function(e){return e.theme[e.theme.mainColor].textColor}),(function(e){return e.theme[e.theme.mainColor].borderColor}),(function(e){return e.theme[e.theme.mainColor].borderRadius}),(function(e){return e.theme[e.theme.mainColor].borderWidth}),(function(e){return e.theme[e.theme.mainColor].backgroundColor})),p=function(e){Object(s.a)(n,e);var t=Object(i.a)(n);function n(){var e;Object(o.a)(this,n);for(var r=arguments.length,a=new Array(r),s=0;s<r;s++)a[s]=arguments[s];return(e=t.call.apply(t,[this].concat(a))).state={PID:"s96113123"},e}return Object(a.a)(n,[{key:"componentDidMount",value:function(){console.log("class component get URL information :",this.props.match),window.previousLocation=this.props.location}},{key:"handlePush",value:function(){this.props.history.push({pathname:"/about",state:{message:" Home send massage "}})}},{key:"handleSendUrlParameters",value:function(){this.props.history.push({pathname:"/about/".concat(this.state.PID),search:"?searchMsg=this is searchMsg"})}},{key:"render",value:function(){return Object(r.jsx)(l.a,{theme:this.props.theme,children:Object(r.jsxs)(m,{children:["Home",Object(r.jsx)("div",{children:Object(r.jsx)("button",{onClick:this.handlePush.bind(this),children:"RouterPush state"})}),Object(r.jsx)("div",{children:Object(r.jsx)("button",{onClick:this.handleSendUrlParameters.bind(this),children:"URL Parameters"})})]})})}}]),n}(h.Component);t.default=Object(u.l)(p)}}]);
//# sourceMappingURL=4.df26c854.chunk.js.map