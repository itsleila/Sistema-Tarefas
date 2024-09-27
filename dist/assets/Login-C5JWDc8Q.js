import{p as h,u as j,r as d,j as e,D as v,a as m,L as f,b as y}from"./index-BW-55gT0.js";import{s as b,a as C,D as r}from"./firebase-R8ppH_Du.js";import{I as D,D as E}from"./AvatarIconCoala-pUB0eHjI.js";import{D as L}from"./index-DR9Tm9sX.js";async function w(o,i,n,l,u){l("");try{const t=await b(C,o,i),s={id:t.user.uid,email:t.user.email};return n(s),{usuario:s,successMessage:"Login realizado com sucesso!",error:null}}catch(t){console.error("Erro no login:",t);let s="Ocorreu um erro ao fazer login, tente novamente mais tarde.";return(t.code==="auth/invalid-email"||t.code==="auth/invalid-credential")&&(s="Credenciais inválidas. Verifique seu email e/ou senha"),{usuario:null,successMessage:null,error:s}}}const z=h.div`
  display: flex;
  justify-content: center;
  align-items: center;
  min-height: 100vh;
`,S=h(f)`
  text-decoration: none;
  color: white;
  padding: 10px;
  font-size: 14px;

  &:hover {
    color: #60c0bf;
    font-weight: 700;
  }
`,M=({setUsuario:o})=>{const i=j(),[n,l]=d.useState(""),[u,t]=d.useState(""),[s,c]=d.useState(""),g=async()=>{try{const{usuario:a,error:x,successMessage:p}=await w(n,u,o,c,i);x?c(x):(console.log(p),i("/home"))}catch(a){c("Ocorreu um erro ao fazer login, tente novamente mais tarde."),console.error("Erro no login:",a)}};return e.jsx(z,{children:e.jsx(r,{container:!0,spacing:3,maxWidth:"500px",alignItems:"center",sx:{marginLeft:"-12px"},children:e.jsxs(r,{sx:{backgroundColor:"#e06b6b",padding:"27px",border:"solid 3px",borderRadius:"5px"},children:[e.jsx(r,{item:!0,xs:12,display:"flex",justifyContent:"center",children:e.jsx(v,{size:80,src:D})}),e.jsx(r,{item:!0,xs:12,sx:{m:2},children:e.jsx(L,{variant:"h5",textAlign:"center",children:"Bem-vindo de volta!"})}),e.jsx(r,{item:!0,xs:12,children:e.jsx(m,{id:"email",label:"Email",type:"email",value:n,onChange:a=>l(a.target.value),required:!0,fullWidth:!0})}),e.jsx(r,{item:!0,xs:12,children:e.jsx(m,{id:"password",label:"Senha",type:"password",value:u,onChange:a=>t(a.target.value),required:!0,fullWidth:!0})}),e.jsxs(r,{item:!0,xs:12,display:"flex",justifyContent:"center",alignItems:"center",sx:{marginBottom:"10px"},children:[e.jsx(E,{label:"Lembre-se de mim"}),e.jsx(f,{to:"/login",style:{fontSize:"14px",color:"#7fbc95",marginLeft:3},children:"Esqueceu a senha?"})]}),e.jsx(r,{item:!0,xs:12,display:"flex",justifyContent:"center",children:e.jsx(y,{fullWidth:!0,text:"Entrar",color:"purple",onClick:g})}),e.jsx(r,{item:!0,xs:12,display:"flex",justifyContent:"center",children:e.jsx(S,{to:"/criarConta",children:"Criar uma conta nova"})})]})})})};export{M as default};
