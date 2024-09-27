import{g as k,c as rt,C as ct,d as A,s as O,B as X,e as lt,_ as c,f as x,r as d,h as B,i as T,k as b,l as Z,m as tt,j as a,n as v,o as G,q as dt,t as K,R as pt,v as ut,w as mt,p as z,u as gt,D as ft,I as yt,N as xt}from"./index-BW-55gT0.js";import{T as D,D as W}from"./index-DR9Tm9sX.js";import{d as bt}from"./Done-BRqS8nYF.js";const vt=k("MuiBox",["root"]),It=rt({defaultClassName:vt.root,generateClassName:ct.generate});function Ct(t){return A("MuiListItem",t)}const N=k("MuiListItem",["root","container","focusVisible","dense","alignItemsFlexStart","disabled","divider","gutters","padding","button","secondaryAction","selected"]);function ht(t){return A("MuiListItemButton",t)}const P=k("MuiListItemButton",["root","focusVisible","dense","alignItemsFlexStart","disabled","divider","gutters","selected"]),Lt=["alignItems","autoFocus","component","children","dense","disableGutters","divider","focusVisibleClassName","selected","className"],$t=(t,e)=>{const{ownerState:s}=t;return[e.root,s.dense&&e.dense,s.alignItems==="flex-start"&&e.alignItemsFlexStart,s.divider&&e.divider,!s.disableGutters&&e.gutters]},Rt=t=>{const{alignItems:e,classes:s,dense:o,disabled:i,disableGutters:n,divider:r,selected:l}=t,p=G({root:["root",o&&"dense",!n&&"gutters",r&&"divider",i&&"disabled",e==="flex-start"&&"alignItemsFlexStart",l&&"selected"]},ht,s);return c({},s,p)},jt=O(X,{shouldForwardProp:t=>lt(t)||t==="classes",name:"MuiListItemButton",slot:"Root",overridesResolver:$t})(({theme:t,ownerState:e})=>c({display:"flex",flexGrow:1,justifyContent:"flex-start",alignItems:"center",position:"relative",textDecoration:"none",minWidth:0,boxSizing:"border-box",textAlign:"left",paddingTop:8,paddingBottom:8,transition:t.transitions.create("background-color",{duration:t.transitions.duration.shortest}),"&:hover":{textDecoration:"none",backgroundColor:(t.vars||t).palette.action.hover,"@media (hover: none)":{backgroundColor:"transparent"}},[`&.${P.selected}`]:{backgroundColor:t.vars?`rgba(${t.vars.palette.primary.mainChannel} / ${t.vars.palette.action.selectedOpacity})`:x(t.palette.primary.main,t.palette.action.selectedOpacity),[`&.${P.focusVisible}`]:{backgroundColor:t.vars?`rgba(${t.vars.palette.primary.mainChannel} / calc(${t.vars.palette.action.selectedOpacity} + ${t.vars.palette.action.focusOpacity}))`:x(t.palette.primary.main,t.palette.action.selectedOpacity+t.palette.action.focusOpacity)}},[`&.${P.selected}:hover`]:{backgroundColor:t.vars?`rgba(${t.vars.palette.primary.mainChannel} / calc(${t.vars.palette.action.selectedOpacity} + ${t.vars.palette.action.hoverOpacity}))`:x(t.palette.primary.main,t.palette.action.selectedOpacity+t.palette.action.hoverOpacity),"@media (hover: none)":{backgroundColor:t.vars?`rgba(${t.vars.palette.primary.mainChannel} / ${t.vars.palette.action.selectedOpacity})`:x(t.palette.primary.main,t.palette.action.selectedOpacity)}},[`&.${P.focusVisible}`]:{backgroundColor:(t.vars||t).palette.action.focus},[`&.${P.disabled}`]:{opacity:(t.vars||t).palette.action.disabledOpacity}},e.divider&&{borderBottom:`1px solid ${(t.vars||t).palette.divider}`,backgroundClip:"padding-box"},e.alignItems==="flex-start"&&{alignItems:"flex-start"},!e.disableGutters&&{paddingLeft:16,paddingRight:16},e.dense&&{paddingTop:4,paddingBottom:4})),Nt=d.forwardRef(function(e,s){const o=B({props:e,name:"MuiListItemButton"}),{alignItems:i="center",autoFocus:n=!1,component:r="div",children:l,dense:m=!1,disableGutters:p=!1,divider:I=!1,focusVisibleClassName:L,selected:$=!1,className:R}=o,u=T(o,Lt),g=d.useContext(b),f=d.useMemo(()=>({dense:m||g.dense||!1,alignItems:i,disableGutters:p}),[i,g.dense,m,p]),y=d.useRef(null);Z(()=>{n&&y.current&&y.current.focus()},[n]);const F=c({},o,{alignItems:i,dense:f.dense,disableGutters:p,divider:I,selected:$}),S=Rt(F),w=tt(y,s);return a.jsx(b.Provider,{value:f,children:a.jsx(jt,c({ref:w,href:u.href||u.to,component:(u.href||u.to)&&r==="div"?"button":r,focusVisibleClassName:v(S.focusVisible,L),ownerState:F,className:v(S.root,R)},u,{classes:S,children:l}))})});function Pt(t){return A("MuiListItemSecondaryAction",t)}k("MuiListItemSecondaryAction",["root","disableGutters"]);const Tt=["className"],kt=t=>{const{disableGutters:e,classes:s}=t;return G({root:["root",e&&"disableGutters"]},Pt,s)},Ot=O("div",{name:"MuiListItemSecondaryAction",slot:"Root",overridesResolver:(t,e)=>{const{ownerState:s}=t;return[e.root,s.disableGutters&&e.disableGutters]}})(({ownerState:t})=>c({position:"absolute",right:16,top:"50%",transform:"translateY(-50%)"},t.disableGutters&&{right:0})),et=d.forwardRef(function(e,s){const o=B({props:e,name:"MuiListItemSecondaryAction"}),{className:i}=o,n=T(o,Tt),r=d.useContext(b),l=c({},o,{disableGutters:r.disableGutters}),m=kt(l);return a.jsx(Ot,c({className:v(m.root,i),ownerState:l,ref:s},n))});et.muiName="ListItemSecondaryAction";const St=["className"],Mt=["alignItems","autoFocus","button","children","className","component","components","componentsProps","ContainerComponent","ContainerProps","dense","disabled","disableGutters","disablePadding","divider","focusVisibleClassName","secondaryAction","selected","slotProps","slots"],At=(t,e)=>{const{ownerState:s}=t;return[e.root,s.dense&&e.dense,s.alignItems==="flex-start"&&e.alignItemsFlexStart,s.divider&&e.divider,!s.disableGutters&&e.gutters,!s.disablePadding&&e.padding,s.button&&e.button,s.hasSecondaryAction&&e.secondaryAction]},Bt=t=>{const{alignItems:e,button:s,classes:o,dense:i,disabled:n,disableGutters:r,disablePadding:l,divider:m,hasSecondaryAction:p,selected:I}=t;return G({root:["root",i&&"dense",!r&&"gutters",!l&&"padding",m&&"divider",n&&"disabled",s&&"button",e==="flex-start"&&"alignItemsFlexStart",p&&"secondaryAction",I&&"selected"],container:["container"]},Ct,o)},Gt=O("div",{name:"MuiListItem",slot:"Root",overridesResolver:At})(({theme:t,ownerState:e})=>c({display:"flex",justifyContent:"flex-start",alignItems:"center",position:"relative",textDecoration:"none",width:"100%",boxSizing:"border-box",textAlign:"left"},!e.disablePadding&&c({paddingTop:8,paddingBottom:8},e.dense&&{paddingTop:4,paddingBottom:4},!e.disableGutters&&{paddingLeft:16,paddingRight:16},!!e.secondaryAction&&{paddingRight:48}),!!e.secondaryAction&&{[`& > .${P.root}`]:{paddingRight:48}},{[`&.${N.focusVisible}`]:{backgroundColor:(t.vars||t).palette.action.focus},[`&.${N.selected}`]:{backgroundColor:t.vars?`rgba(${t.vars.palette.primary.mainChannel} / ${t.vars.palette.action.selectedOpacity})`:x(t.palette.primary.main,t.palette.action.selectedOpacity),[`&.${N.focusVisible}`]:{backgroundColor:t.vars?`rgba(${t.vars.palette.primary.mainChannel} / calc(${t.vars.palette.action.selectedOpacity} + ${t.vars.palette.action.focusOpacity}))`:x(t.palette.primary.main,t.palette.action.selectedOpacity+t.palette.action.focusOpacity)}},[`&.${N.disabled}`]:{opacity:(t.vars||t).palette.action.disabledOpacity}},e.alignItems==="flex-start"&&{alignItems:"flex-start"},e.divider&&{borderBottom:`1px solid ${(t.vars||t).palette.divider}`,backgroundClip:"padding-box"},e.button&&{transition:t.transitions.create("background-color",{duration:t.transitions.duration.shortest}),"&:hover":{textDecoration:"none",backgroundColor:(t.vars||t).palette.action.hover,"@media (hover: none)":{backgroundColor:"transparent"}},[`&.${N.selected}:hover`]:{backgroundColor:t.vars?`rgba(${t.vars.palette.primary.mainChannel} / calc(${t.vars.palette.action.selectedOpacity} + ${t.vars.palette.action.hoverOpacity}))`:x(t.palette.primary.main,t.palette.action.selectedOpacity+t.palette.action.hoverOpacity),"@media (hover: none)":{backgroundColor:t.vars?`rgba(${t.vars.palette.primary.mainChannel} / ${t.vars.palette.action.selectedOpacity})`:x(t.palette.primary.main,t.palette.action.selectedOpacity)}}},e.hasSecondaryAction&&{paddingRight:48})),Ft=O("li",{name:"MuiListItem",slot:"Container",overridesResolver:(t,e)=>e.container})({position:"relative"}),wt=d.forwardRef(function(e,s){const o=B({props:e,name:"MuiListItem"}),{alignItems:i="center",autoFocus:n=!1,button:r=!1,children:l,className:m,component:p,components:I={},componentsProps:L={},ContainerComponent:$="li",ContainerProps:{className:R}={},dense:u=!1,disabled:g=!1,disableGutters:f=!1,disablePadding:y=!1,divider:F=!1,focusVisibleClassName:S,secondaryAction:w,selected:st=!1,slotProps:at={},slots:ot={}}=o,nt=T(o.ContainerProps,St),it=T(o,Mt),H=d.useContext(b),_=d.useMemo(()=>({dense:u||H.dense||!1,alignItems:i,disableGutters:f}),[i,H.dense,u,f]),E=d.useRef(null);Z(()=>{n&&E.current&&E.current.focus()},[n]);const j=d.Children.toArray(l),q=j.length&&dt(j[j.length-1],["ListItemSecondaryAction"]),V=c({},o,{alignItems:i,autoFocus:n,button:r,dense:_.dense,disabled:g,disableGutters:f,disablePadding:y,divider:F,hasSecondaryAction:q,selected:st}),Y=Bt(V),J=tt(E,s),U=ot.root||I.Root||Gt,M=at.root||L.root||{},C=c({className:v(Y.root,M.className,m),disabled:g},it);let h=p||"li";return r&&(C.component=p||"div",C.focusVisibleClassName=v(N.focusVisible,S),h=X),q?(h=!C.component&&!p?"div":h,$==="li"&&(h==="li"?h="div":C.component==="li"&&(C.component="div")),a.jsx(b.Provider,{value:_,children:a.jsxs(Ft,c({as:$,className:v(Y.container,R),ref:J,ownerState:V},nt,{children:[a.jsx(U,c({},M,!K(U)&&{as:h,ownerState:c({},V,M.ownerState)},C,{children:j})),j.pop()]}))})):a.jsx(b.Provider,{value:_,children:a.jsxs(U,c({},M,{as:h,ref:J},!K(U)&&{ownerState:c({},V,M.ownerState)},C,{children:[j,w&&a.jsx(et,{children:w})]}))})});function Vt(t){return A("MuiListItemIcon",t)}k("MuiListItemIcon",["root","alignItemsFlexStart"]);const Ut=["className"],Dt=t=>{const{alignItems:e,classes:s}=t;return G({root:["root",e==="flex-start"&&"alignItemsFlexStart"]},Vt,s)},_t=O("div",{name:"MuiListItemIcon",slot:"Root",overridesResolver:(t,e)=>{const{ownerState:s}=t;return[e.root,s.alignItems==="flex-start"&&e.alignItemsFlexStart]}})(({theme:t,ownerState:e})=>c({minWidth:56,color:(t.vars||t).palette.action.active,flexShrink:0,display:"inline-flex"},e.alignItems==="flex-start"&&{marginTop:8})),Et=d.forwardRef(function(e,s){const o=B({props:e,name:"MuiListItemIcon"}),{className:i}=o,n=T(o,Ut),r=d.useContext(b),l=c({},o,{alignItems:r.alignItems}),m=Dt(l);return a.jsx(_t,c({className:v(m.root,i),ownerState:l,ref:s},n))});function Wt(t){return A("MuiListItemText",t)}const Q=k("MuiListItemText",["root","multiline","dense","inset","primary","secondary"]),zt=["children","className","disableTypography","inset","primary","primaryTypographyProps","secondary","secondaryTypographyProps"],Ht=t=>{const{classes:e,inset:s,primary:o,secondary:i,dense:n}=t;return G({root:["root",s&&"inset",n&&"dense",o&&i&&"multiline"],primary:["primary"],secondary:["secondary"]},Wt,e)},qt=O("div",{name:"MuiListItemText",slot:"Root",overridesResolver:(t,e)=>{const{ownerState:s}=t;return[{[`& .${Q.primary}`]:e.primary},{[`& .${Q.secondary}`]:e.secondary},e.root,s.inset&&e.inset,s.primary&&s.secondary&&e.multiline,s.dense&&e.dense]}})(({ownerState:t})=>c({flex:"1 1 auto",minWidth:0,marginTop:4,marginBottom:4},t.primary&&t.secondary&&{marginTop:6,marginBottom:6},t.inset&&{paddingLeft:56})),Yt=d.forwardRef(function(e,s){const o=B({props:e,name:"MuiListItemText"}),{children:i,className:n,disableTypography:r=!1,inset:l=!1,primary:m,primaryTypographyProps:p,secondary:I,secondaryTypographyProps:L}=o,$=T(o,zt),{dense:R}=d.useContext(b);let u=m??i,g=I;const f=c({},o,{disableTypography:r,inset:l,primary:!!u,secondary:!!g,dense:R}),y=Ht(f);return u!=null&&u.type!==D&&!r&&(u=a.jsx(D,c({variant:R?"body2":"body1",className:y.primary,component:p!=null&&p.variant?void 0:"span",display:"block"},p,{children:u}))),g!=null&&g.type!==D&&!r&&(g=a.jsx(D,c({variant:"body2",className:y.secondary,color:"text.secondary",display:"block"},L,{children:g}))),a.jsxs(qt,c({className:v(y.root,n),ownerState:f,ref:s},$,{children:[u,g]}))}),Jt=[{id:1,tarefa:"beber 2l de água"},{id:2,tarefa:"Estudar React"},{id:3,tarefa:"Ir para academia"},{id:4,tarefa:"Consulta no medico"}];function Kt(t){const[e,s]=pt.useState([0]),o=i=>()=>{const n=e.indexOf(i),r=[...e];n===-1?r.push(i):r.splice(n,1),s(r),t.onToggleComplete&&t.onToggleComplete(i)};return a.jsx(ut,{sx:{width:"100%",maxWidth:360,margin:"10px"},children:Jt.map((i,n)=>{const r=`checkbox-list-label-${n}`,l=e.indexOf(n)!==-1;return a.jsx(wt,{disablePadding:!0,children:a.jsxs(Nt,{role:void 0,onClick:o(n),dense:!0,children:[a.jsx(Et,{children:a.jsx(mt,{edge:"start",tabIndex:-1,disableRipple:!0,children:a.jsx(bt,{color:l?"primary":"disabled"})})}),a.jsx(Yt,{id:r,primary:i.tarefa,sx:{textDecoration:l?"line-through":"none"}})]})},n)})})}const Qt=z.header`
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: 10px;
`,Xt=z.div`
  flex: 1;
`,Zt=z.main`
  padding: 15px;
`,ae=({breakpoints:t,usuario:e})=>{const s=gt();return d.useEffect(()=>{e||s("/login")},[e,s]),a.jsxs(a.Fragment,{children:[a.jsxs(Qt,{children:[a.jsxs(Xt,{children:[a.jsx(W,{variant:"h4",children:"Olá humano,"}),a.jsx(W,{variant:"body2",children:"gerencie suas tarefas diarias."})]}),a.jsx(ft,{size:70,src:yt})]}),a.jsx(It,{sx:{backgroundColor:"#60c0bf",width:"100%",height:"2px",marginTop:"16px"}}),a.jsx(xt,{variant:"home",breakpoints:t}),a.jsxs(Zt,{children:[a.jsx(W,{variant:"body1",children:"tarefas de hoje:"}),a.jsx(Kt,{})]})]})};export{ae as default};
