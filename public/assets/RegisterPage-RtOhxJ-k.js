import{d as p,m as b,e as a,j as w,c,o as g,a as l,n,v as u,q as x,h as y,s as v,x as N,F as R,y as k}from"./index-5SobYu43.js";const I={class:"mb-4"},V={class:"mb-4"},F={class:"mb-4"},_={class:"mt-6 text-blue-500 text-center"},S=p({__name:"RegisterPage",setup(B){const o=b({fullName:"",email:"",password:""}),d=a(null),i=a(null),f=a(null),m=async()=>{var r,e,t;if(o.fullName.length<3){(r=d.value)==null||r.focus();return}if(o.email===""){(e=i.value)==null||e.focus();return}if(o.password===""||o.password.length<6){(t=f.value)==null||t.focus();return}await k(o.fullName,o.email,o.password)};return(r,e)=>{const t=w("RouterLink");return g(),c(R,null,[e[8]||(e[8]=l("h1",{class:"text-2xl font-semibold mb-4"},"Register",-1)),l("form",{onSubmit:x(m,["prevent"])},[l("div",I,[e[3]||(e[3]=l("label",{for:"fullName",class:"block text-gray-600"},"Full name",-1)),n(l("input",{"onUpdate:modelValue":e[0]||(e[0]=s=>o.fullName=s),ref_key:"fullNameInputRef",ref:d,type:"text",id:"fullName",name:"fullName",class:"w-full border border-gray-300 rounded-md py-2 px-3 focus:outline-none focus:border-blue-500",autocomplete:"off"},null,512),[[u,o.fullName]])]),l("div",V,[e[4]||(e[4]=l("label",{for:"email",class:"block text-gray-600"},"Email",-1)),n(l("input",{"onUpdate:modelValue":e[1]||(e[1]=s=>o.email=s),ref_key:"emailInputRef",ref:i,type:"text",id:"email",name:"email",class:"w-full border border-gray-300 rounded-md py-2 px-3 focus:outline-none focus:border-blue-500",autocomplete:"off"},null,512),[[u,o.email]])]),l("div",F,[e[5]||(e[5]=l("label",{for:"password",class:"block text-gray-600"},"Password",-1)),n(l("input",{"onUpdate:modelValue":e[2]||(e[2]=s=>o.password=s),ref_key:"passwordInputRef",ref:f,type:"password",id:"password",name:"password",class:"w-full border border-gray-300 rounded-md py-2 px-3 focus:outline-none focus:border-blue-500",autocomplete:"off"},null,512),[[u,o.password]])]),e[6]||(e[6]=l("button",{type:"submit",class:"bg-blue-500 hover:bg-blue-600 text-white font-semibold rounded-md py-2 px-4 w-full"}," Sign up ",-1))],32),l("div",_,[y(t,{to:{name:"login"},class:"hover:underline"},{default:v(()=>e[7]||(e[7]=[N("Sign in Here")])),_:1})])],64)}}});export{S as default};
