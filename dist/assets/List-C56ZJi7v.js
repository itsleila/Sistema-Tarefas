import{r as c,j as e,a as h,b as q,F as M,G as S,p as m,N as L,H as W,J as y}from"./index-BW-55gT0.js";import{g as F,d as G,e as f,f as H,h as j,i as k,u as E,D as _}from"./firebase-R8ppH_Du.js";import{D as T}from"./index-DR9Tm9sX.js";import{d as A}from"./Done-BRqS8nYF.js";async function N(){let a;return await F(G(f,"tarefas")).then(n=>{a=n.docs.map(s=>({...s.data(),id:s.id}))}),a}async function P(a){await H(j(f,"tarefas",a))}async function V(a,n){const s=j(f,"tarefas",a);await E(s,n)}async function B(a){const n=j(f,"tarefas",a),s=await k(n);if(s.exists()){const r=s.data().concluida;await E(n,{concluida:!r})}}const J=({tarefa:a,onClose:n,onTarefaUpdated:s})=>{const[r,p]=c.useState({tarefa:a.tarefa,data:a.data,descricao:a.descricao}),i=o=>{const{name:l,value:d}=o.target;p({...r,[l]:d})},x=async o=>{o.preventDefault(),await V(a.id,r),s(),n()};return e.jsxs("form",{onSubmit:x,children:[e.jsx(h,{name:"tarefa",label:"Tarefa",value:r.tarefa,onChange:i,fullWidth:!0}),e.jsx(h,{name:"data",label:"Data",type:"date",value:r.data,onChange:i,fullWidth:!0}),e.jsx(h,{name:"descricao",label:"Descrição",multiline:!0,rows:4,value:r.descricao,onChange:i,fullWidth:!0}),e.jsx(q,{type:"submit",text:"Salvar"})]})};var v={},U=S;Object.defineProperty(v,"__esModule",{value:!0});var w=v.default=void 0,K=U(M()),Q=e;w=v.default=(0,K.default)((0,Q.jsx)("path",{d:"M3 17.25V21h3.75L17.81 9.94l-3.75-3.75zM20.71 7.04c.39-.39.39-1.02 0-1.41l-2.34-2.34a.9959.9959 0 0 0-1.41 0l-1.83 1.83 3.75 3.75z"}),"Edit");var g={},X=S;Object.defineProperty(g,"__esModule",{value:!0});var R=g.default=void 0,Y=X(M()),Z=e;R=g.default=(0,Y.default)((0,Z.jsx)("path",{d:"M6 19c0 1.1.9 2 2 2h8c1.1 0 2-.9 2-2V7H6zM19 4h-3.5l-1-1h-5l-1 1H5v2h14z"}),"Delete");const ee=m.div`
  display: flex;
  justify-content: center;
  align-items: center;
  min-height: 80vh;
`,b=m(_)`
  && {
    margin: 16px;
    padding: 0 !important;
  }
`,ae=m.div`
  background-color: ${a=>a.concluida?"#d4edda":"inherit"};
  text-decoration: ${a=>a.concluida?"line-through":"none"};
  padding: 10px;
  border-radius: 5px;
`,ie=({props:a,breakpoints:n})=>{const[s,r]=c.useState([]),[p,i]=c.useState(!1),[x,o]=c.useState(!1),[l,d]=c.useState(null);c.useEffect(()=>{u()},[]);async function u(){const t=await N();r(t)}const O=t=>{d(t),i(!0)},C=()=>{i(!1),d(null),u()},$=t=>{d(t),o(!0)},D=()=>{o(!1),d(null),u()},z=async()=>{l&&(await P(l.id),D())},I=async t=>{t&&(await B(t.id),u())};return e.jsxs(e.Fragment,{children:[e.jsx(L,{variant:"menu",breakpoints:n}),e.jsxs(ee,{children:[e.jsxs(_,{container:!0,spacing:3,maxWidth:"700px",alignItems:"center",sx:{backgroundColor:"#60c0bf",padding:"20px",margin:0,border:"solid 3px",borderRadius:"5px",width:"100%",justifyContent:"center",alignItems:"center"},children:[e.jsx(b,{item:!0,xs:12,children:e.jsx(T,{variant:"h5",textAlign:"center",children:"Lista de Tarefas"})}),e.jsx(b,{item:!0,xs:12,children:e.jsx(W,{breakpoints:n,headers:["Tarefa","Data","Descrição","Ações"],data:s.map(t=>({tarefa:e.jsx(ae,{concluida:t.concluida,children:t.tarefa}),data:t.data,descricao:t.descricao,acoes:e.jsxs("div",{children:[e.jsx(A,{style:{cursor:"pointer"},onClick:()=>I(t)}),e.jsx(w,{style:{cursor:"pointer",marginRight:"5px"},onClick:()=>O(t)}),e.jsx(R,{style:{cursor:"pointer",marginRight:"5px"},onClick:()=>$(t)})]})}))})})]}),e.jsx(y,{breakpoints:n,open:p,onClose:C,title:"Editar Tarefa",children:l&&e.jsx(J,{tarefa:l,onClose:C,onTarefaUpdated:u})}),e.jsx(y,{breakpoints:n,open:x,onClose:D,title:"Confirmar Exclusão",onConfirm:z,children:e.jsx(T,{variant:"body",children:"Tem certeza que deseja excluir esta tarefa?"})})]})]})};export{ie as default};
