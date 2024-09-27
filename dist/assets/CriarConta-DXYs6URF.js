import{r as i,u as g,p,j as e,D as C,a as h,b as y,L as v}from"./index-BW-55gT0.js";import{I as b,D as S}from"./AvatarIconCoala-pUB0eHjI.js";import{c as A,a as D,D as t}from"./firebase-R8ppH_Du.js";import{D as f}from"./index-DR9Tm9sX.js";function w(){const[o,u]=i.useState(""),[n,d]=i.useState(""),[c,x]=i.useState(""),[l,s]=i.useState(""),[m,r]=i.useState(""),j=g();return{email:o,setEmail:u,senha:n,setSenha:d,confirmarSenha:c,setConfirmarSenha:x,error:l,successMessage:m,handleCreateAccount:async()=>{if(n!==c){s("As senhas não correspondem.");return}else s("");try{const a=await A(D,o,n),L={id:a.user.uid,email:a.user.email};r("Usuário criado com sucesso!"),setTimeout(()=>{j("/")},2e3)}catch(a){a.code==="auth/email-already-in-use"?s("O email já está em uso."):a.code==="auth/weak-password"?s("A senha é muito fraca."):s(a.message)}}}}const E=p.div`
  display: flex;
  justify-content: center;
  align-items: center;
  min-height: 100vh;
`,k=p(v)`
  text-decoration: none;
  color: white;
  padding: 10px;
  font-size: 14px;

  &:hover {
    color: #60c0bf;
    font-weight: 700;
  }
`,z=()=>{const{email:o,setEmail:u,senha:n,setSenha:d,confirmarSenha:c,setConfirmarSenha:x,error:l,successMessage:s,handleCreateAccount:m}=w();return e.jsx(E,{children:e.jsx(t,{container:!0,spacing:3,maxWidth:"500px",alignItems:"center",sx:{marginLeft:"-12px"},children:e.jsxs(t,{sx:{backgroundColor:"#e06b6b",padding:"27px",border:"solid 3px",borderRadius:"5px"},children:[e.jsx(t,{item:!0,xs:12,display:"flex",justifyContent:"center",children:e.jsx(C,{size:80,src:b})}),e.jsx(t,{item:!0,xs:12,sx:{m:2},children:e.jsx(f,{variant:"h5",textAlign:"center",children:"Bem-vindo, crie uma conta"})}),e.jsx(t,{item:!0,xs:12,children:e.jsx(h,{id:"email",label:"Email",type:"email",value:o,onChange:r=>u(r.target.value),required:!0,fullWidth:!0})}),e.jsx(t,{item:!0,xs:12,children:e.jsx(h,{id:"password",label:"Senha",type:"password",value:n,onChange:r=>d(r.target.value),required:!0,fullWidth:!0})}),e.jsx(t,{item:!0,xs:12,children:e.jsx(h,{id:"confirmPassword",label:"Confirmar Senha",type:"password",value:c,onChange:r=>x(r.target.value),required:!0,fullWidth:!0})}),l&&e.jsx(t,{item:!0,xs:12,children:e.jsx(f,{variant:"body2",color:"error",textAlign:"center",children:l})}),s&&e.jsx(t,{item:!0,xs:12,children:e.jsx(f,{variant:"body2",color:"success",textAlign:"center",children:s})}),e.jsx(t,{item:!0,xs:12,display:"flex",justifyContent:"center",children:e.jsx(S,{label:"Concorda com os termos e condições?"})}),e.jsx(t,{item:!0,xs:12,display:"flex",justifyContent:"center",children:e.jsx(y,{fullWidth:!0,text:"Criar Conta",color:"purple",onClick:m})}),e.jsx(t,{item:!0,xs:12,display:"flex",justifyContent:"center",children:e.jsx(k,{to:"/login",children:"Já tem uma conta?"})})]})})})};export{z as default};
