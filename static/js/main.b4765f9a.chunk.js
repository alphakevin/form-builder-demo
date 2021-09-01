(this["webpackJsonpform-builder-demo"]=this["webpackJsonpform-builder-demo"]||[]).push([[0],{232:function(e,t,n){},233:function(e,t,n){},424:function(e,t,n){"use strict";n.r(t);var r=n(0),c=n.n(r),o=n(11),i=n.n(o),a=(n(232),n(48)),s=n(461),l=(n(233),n(14)),u=n(89),j={type:"object",title:"Form Builder",properties:{title:{type:"string",title:"Form Title"},fields:{type:"array",items:{type:"object",properties:{control:{type:"string",enum:["text","checkbox","select"],default:"No"},key:{type:"string"},label:{type:"string"}},required:["control","key","label"],dependencies:{control:{oneOf:[{properties:{control:{enum:["text"]}}},{properties:{control:{enum:["checkbox"]}}},{properties:{control:{enum:["select"]},options:{type:"array",items:{type:"string"}}}}]}}}}}},b=n(10),d=Object(l.c)(u.a);function f(e){var t=e.value,n=e.onChange;return Object(b.jsx)(d,{schema:j,formData:t,onChange:function(e){return n(e.formData)}})}var O=Object(l.c)(u.a);function h(e){var t=e.schema,n=e.value,r=e.onChange;return Object(b.jsx)(O,{schema:t,formData:n,onChange:function(e){return r(e.formData)}})}var m=n(462),p=n(464),v=n(212),x=(n(422),n(423),Object(m.a)((function(e){return Object(p.a)({root:{flexGrow:1,overflow:"auto"},editor:{height:"calc(50vh - 24px)"}})}))),g={mode:"json",theme:"material",lineNumbers:!0,height:window.innerHeight};function y(e){var t=e.value,n=Object(r.useState)(null),c=Object(a.a)(n,2),o=c[0],i=c[1],s=x(),l=JSON.stringify(t,null,2);return Object(r.useEffect)((function(){null===o||void 0===o||o.setSize(null,window.innerHeight/2-24)})),Object(b.jsx)("div",{className:s.root,children:Object(b.jsx)(v.Controlled,{className:s.editor,value:l,options:g,editorDidMount:function(e){return i(e)},onBeforeChange:function(e,t,n){},onChange:function(e,t,n){}})})}var C=n(88),N=n(49);function S(e){return{type:"object",title:e.title,properties:e.fields.filter((function(e){return e.key&&"No"!==e.control})).reduce((function(e,t){return Object(N.a)(Object(N.a)({},e),{},Object(C.a)({},t.key,function(e){var t={title:e.label};switch(e.control){case"checkbox":return Object(N.a)({type:"boolean"},t);case"text":return Object(N.a)({type:"string"},t);case"select":return Object(N.a)({type:"string",enum:e.options},t)}}(t)))}),{})}}var k=function(){var e=Object(r.useState)({title:"",fields:[]}),t=Object(a.a)(e,2),n=t[0],c=t[1],o=Object(r.useState)({}),i=Object(a.a)(o,2),l=i[0],u=i[1],j=Object(r.useState)({}),d=Object(a.a)(j,2),O=d[0],m=d[1];return Object(r.useEffect)((function(){u(S(n)),m({})}),[n]),Object(b.jsxs)("div",{className:"App",children:[Object(b.jsx)("div",{className:"form-builder",children:Object(b.jsx)(f,{value:n,onChange:c})}),Object(b.jsxs)("div",{className:"source-editor",children:[Object(b.jsx)(s.a,{children:"Builder Schema"}),Object(b.jsx)(y,{value:n}),Object(b.jsx)(s.a,{children:"JSON Schema"}),Object(b.jsx)(y,{value:l})]})," ",Object(b.jsx)("div",{className:"form-builder",children:Object(b.jsx)(h,{schema:l,value:O,onChange:m})}),Object(b.jsxs)("div",{className:"source-editor",children:[Object(b.jsx)(s.a,{children:"Form Data"}),Object(b.jsx)(y,{value:O})]})]})},w=function(e){e&&e instanceof Function&&n.e(3).then(n.bind(null,466)).then((function(t){var n=t.getCLS,r=t.getFID,c=t.getFCP,o=t.getLCP,i=t.getTTFB;n(e),r(e),c(e),o(e),i(e)}))},D=n(213),F=n(463),B=Object(D.a)({palette:{},overrides:{MuiButton:{root:{borderRadius:2}}}});i.a.render(Object(b.jsx)(c.a.StrictMode,{children:Object(b.jsx)(F.a,{theme:B,children:Object(b.jsx)(k,{})})}),document.getElementById("root")),w()}},[[424,1,2]]]);
//# sourceMappingURL=main.b4765f9a.chunk.js.map