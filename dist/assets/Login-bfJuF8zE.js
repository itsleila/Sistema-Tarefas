import{p as c,u as j,r as i,j as e,D as v,a as l,L as d,b as y}from"./index-B7f7ieIX.js";import{D as t}from"./firebase-B00g8A_j.js";import{I as b,D as C}from"./AvatarIconCoala-CmO7P5Lw.js";import{D as x}from"./index-C_GkTooO.js";const D=c.div`
  display: flex;
  justify-content: center;
  align-items: center;
  min-height: 100vh;
`,L=c(d)`
  text-decoration: none;
  color: white;
  padding: 10px;
  font-size: 14px;

  &:hover {
    color: #60c0bf;
    font-weight: 700;
  }
`,I=({setUsuario:u})=>{const m=j(),[a,p]=i.useState("admin@example.com"),[s,h]=i.useState("123456"),[n,f]=i.useState(""),g=()=>{const r={email:"admin@example.com",senha:"123456"};if(a===r.email&&s===r.senha){const o={email:a};u(o),localStorage.setItem("usuario",JSON.stringify(o)),m("/home")}else f("Usuário ou senha inválidos.")};return e.jsx(D,{children:e.jsx(t,{container:!0,spacing:3,maxWidth:"500px",alignItems:"center",sx:{marginLeft:"-12px"},children:e.jsxs(t,{sx:{backgroundColor:"#e06b6b",padding:"27px",border:"solid 3px",borderRadius:"5px"},children:[e.jsx(t,{item:!0,xs:12,display:"flex",justifyContent:"center",children:e.jsx(v,{size:80,src:b})}),e.jsx(t,{item:!0,xs:12,sx:{m:2},children:e.jsx(x,{variant:"h5",textAlign:"center",children:"Bem-vindo de volta!"})}),e.jsx(t,{item:!0,xs:12,children:e.jsx(l,{id:"email",label:"Email",type:"email",value:a,onChange:r=>p(r.target.value),required:!0,fullWidth:!0})}),e.jsx(t,{item:!0,xs:12,children:e.jsx(l,{id:"password",label:"Senha",type:"password",value:s,onChange:r=>h(r.target.value),required:!0,fullWidth:!0})}),e.jsxs(t,{item:!0,xs:12,display:"flex",justifyContent:"center",alignItems:"center",sx:{marginBottom:"10px"},children:[e.jsx(C,{label:"Lembre-se de mim"}),e.jsx(d,{to:"/login",style:{fontSize:"14px",color:"#7fbc95",marginLeft:3},children:"Esqueceu a senha?"})]}),n&&e.jsx(x,{variant:"body2",sx:{color:"white",backgroundColor:"red",padding:"6px",borderRadius:"5px",marginBottom:"10px"},textAlign:"center",children:n}),e.jsx(t,{item:!0,xs:12,display:"flex",justifyContent:"center",children:e.jsx(y,{fullWidth:!0,text:"Entrar",color:"purple",onClick:g})}),e.jsx(t,{item:!0,xs:12,display:"flex",justifyContent:"center",children:e.jsx(L,{to:"/criarConta",children:"Criar uma conta nova"})})]})})})};export{I as default};
