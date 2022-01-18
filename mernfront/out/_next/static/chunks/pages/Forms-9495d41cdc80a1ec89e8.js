(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[369],{5018:function(e,s,n){"use strict";n.r(s),n.d(s,{default:function(){return I}});var r=n(5861),o=n(7757),t=n.n(o),i=n(4649),c=(n(7294),n(8396)),a=n(9226),l=n(6501),d=n(6446),u=n(2658),p=n(6914),h=n(1303),m=n(9352),x=n(3854),b=n(9501),g=n(4737),w=n(1163),f=n(5893),j=(0,g.Z)({cssOutlinedInput:{"&$cssFocused $notchedOutline":{borderColor:"white"}},cssFocused:{},cssLabel:{color:"white"},notchedOutline:{borderWidth:"1px",borderColor:"white !important"}}),Z=(0,i.j0)({mapPropsToValues:function(e){var s=e.name,n=e.email,r=e.phone;return{name:s||"",email:n||"",password:e.password||"",cPassword:e.cPassword||"",phone:r||""}},handleSubmit:function(e,s){return(0,r.Z)(t().mark((function n(){var r,o,i,c,a,l,d,u;return t().wrap((function(n){for(;;)switch(n.prev=n.next){case 0:return r=s.props,o=e.name,i=e.email,c=e.password,a=e.phone,l=e.cPassword,n.next=4,fetch("/reg",{method:"POST",headers:{"Content-Type":"application/json"},body:JSON.stringify({name:o,email:i,phone:a,password:c,cPassword:l})});case 4:return d=n.sent,n.next=7,d.json();case 7:u=n.sent,console.log(u),200==u.status?(console.log(u.status),window.alert(u.message),r.setNewUser(!1)):(console.log(u.status),window.alert(u.err));case 10:case"end":return n.stop()}}),n)})))()},validationSchema:b.Ry().shape({email:b.Z_().email("Enter valid Email Address").required(),name:b.Z_().required("Username is mandatory"),password:b.Z_().required("password required").min(8,"Weak Password"),cPassword:b.Z_().oneOf([b.iH("password"),null],"Passwords must match")})})((function(e){e.values;var s=e.setNewUser,n=(e.errors,e.touched,e.isValid),r=e.isSubmitting,o=e.dirty,t=(0,c.Z)("(max-width:600px)"),b=j();(0,w.useRouter)();return(0,f.jsx)(a.Z,{sx:{backgroundImage:"url(".concat("/img/form-bg.jpeg",")"),backgroundPosition:"center",backgroundSize:"cover",backgroundRepeat:"no-repeat",p:2,color:"#b6a288"},children:(0,f.jsx)(i.l0,{method:"POST",children:(0,f.jsx)(l.Z,{elevation:8,sx:{m:"5vh auto",display:"block",width:t?"100%":"50%",textAlign:"center",color:"white",backgroundColor:"transparent"},children:(0,f.jsxs)(d.Z,{sx:{color:"white"},children:[(0,f.jsx)(a.Z,{sx:{height:"5rem",width:"5rem",backgroundColor:"transparent",display:"block",margin:"0 auto",textAlign:"center"},children:(0,f.jsx)("img",{src:"https://img.icons8.com/external-bearicons-blue-bearicons/64/000000/external-login-call-to-action-bearicons-blue-bearicons-1.png",width:"100%",height:"100%"})}),(0,f.jsxs)(u.Z,{sx:{mb:"2rem",transform:"scale(1.5,1.5)",fontFamily:"Georgia, serif"},children:[" ",(0,f.jsx)("h2",{children:" Register Member"})," "]}),(0,f.jsxs)(a.Z,{margin:1,sx:{display:"inline-flex",alignItems:"center",background:"rgba(0, 0, 0, .2)"},children:[(0,f.jsxs)(a.Z,{sx:{p:"1vw"},children:["  ",(0,f.jsx)(x.HHH,{size:40})]}),(0,f.jsx)(i.gN,{sx:{input:{color:"white"}},InputProps:{classes:{root:b.cssOutlinedInput,focused:b.cssFocused,notchedOutline:b.notchedOutline}},InputLabelProps:{classes:{root:b.cssLabel,focused:b.cssFocused}},component:h.n,name:"name",label:"First Name",type:"text",autoFocus:!0})]}),(0,f.jsxs)(a.Z,{margin:1,sx:{display:"inline-flex",alignItems:"center",background:"rgba(0, 0, 0, .2)"},children:[(0,f.jsxs)(a.Z,{sx:{p:"1vw"},children:["  ",(0,f.jsx)(x.Zuw,{size:40})]}),(0,f.jsx)(i.gN,{sx:{input:{color:"white"}},InputProps:{classes:{root:b.cssOutlinedInput,focused:b.cssFocused,notchedOutline:b.notchedOutline}},InputLabelProps:{classes:{root:b.cssLabel,focused:b.cssFocused}},component:h.n,name:"email",label:"Email",type:"email"})]}),(0,f.jsxs)(a.Z,{margin:1,sx:{display:"inline-flex",alignItems:"center",background:"rgba(0, 0, 0, .2)"},children:[(0,f.jsxs)(a.Z,{sx:{p:"1vw"},children:["  ",(0,f.jsx)(x.Zuw,{size:40})]}),(0,f.jsx)(i.gN,{sx:{input:{color:"white"}},InputProps:{classes:{root:b.cssOutlinedInput,focused:b.cssFocused,notchedOutline:b.notchedOutline}},InputLabelProps:{classes:{root:b.cssLabel,focused:b.cssFocused}},component:h.n,name:"phone",label:"Phone"})]}),(0,f.jsxs)(a.Z,{margin:1,sx:{display:"inline-flex",alignItems:"center",background:"rgba(0, 0, 0, .2)"},children:[(0,f.jsxs)(a.Z,{sx:{p:"1vw"},children:["  ",(0,f.jsx)(m.z85,{size:40})]}),(0,f.jsx)(i.gN,{sx:{input:{color:"white"}},InputProps:{classes:{root:b.cssOutlinedInput,focused:b.cssFocused,notchedOutline:b.notchedOutline}},InputLabelProps:{classes:{root:b.cssLabel,focused:b.cssFocused}},component:h.n,name:"password",label:"Password",color:"info",type:"password"})]}),(0,f.jsxs)(a.Z,{margin:1,sx:{display:"inline-flex",alignItems:"center",background:"rgba(0, 0, 0, .2)"},children:[(0,f.jsxs)(a.Z,{sx:{p:"1vw"},children:["  ",(0,f.jsx)(m.z85,{size:40})]}),(0,f.jsx)(i.gN,{sx:{input:{color:"white"}},InputProps:{classes:{root:b.cssOutlinedInput,focused:b.cssFocused,notchedOutline:b.notchedOutline}},InputLabelProps:{classes:{root:b.cssLabel,focused:b.cssFocused}},component:h.n,name:"cPassword",label:"Confirm Password",color:"info",type:"password"})]}),(0,f.jsx)(l.Z,{elevation:8,sx:{backgroundColor:"inherit",my:"2rem"},children:(0,f.jsx)(p.Z,{type:"submit",sx:{backgroundColor:"#778b9f",width:"50%","&:hover":{color:"white"}},disabled:r||!n||!o,color:"inherit",children:" Submit"})}),(0,f.jsx)(a.Z,{children:(0,f.jsxs)(u.Z,{children:["Already a User? ",(0,f.jsx)("u",{onClick:function(){s(!1)},style:{color:"#F7991C",cursor:"pointer"},children:" SignIn here"})]})})]})})})})}));function I(e){var s=e.setNewUser;return(0,f.jsx)(Z,{setNewUser:s})}},9545:function(e,s,n){"use strict";n.r(s),n.d(s,{default:function(){return j}});var r=n(5861),o=n(7757),t=n.n(o),i=n(4649),c=(n(7294),n(9226)),a=n(6501),l=n(6446),d=n(2658),u=n(6914),p=n(1303),h=n(9501),m=n(9352),x=n(3854),b=n(4737),g=(n(1163),n(7007),n(5893)),w=(0,b.Z)({cssOutlinedInput:{"&$cssFocused $notchedOutline":{borderColor:"white !important"}},cssFocused:{},cssLabel:{color:"white"},notchedOutline:{borderWidth:"1px",borderColor:"white !important"}}),f=(0,i.j0)({mapPropsToValues:function(e){return{email:e.email||"",password:e.password||""}},validationSchema:h.Ry().shape({email:h.Z_().email("Enter valid Email").required("Email is required"),password:h.Z_().required("Password is required").min(8)}),handleSubmit:function(e,s){return(0,r.Z)(t().mark((function n(){var r,o,i,c,a;return t().wrap((function(n){for(;;)switch(n.prev=n.next){case 0:return r=s.props,console.log(e),o=e.email,i=e.password,n.next=5,fetch("/login",{method:"POST",headers:{"Content-Type":"application/json"},body:JSON.stringify({email:o,password:i})});case 5:return c=n.sent,n.next=8,c.json();case 8:a=n.sent,console.log(a),200==a.status?(r.setIsUser(!0),window.alert(a.message)):window.alert(a.error);case 11:case"end":return n.stop()}}),n)})))()}})((function(e){e.values;var s=e.errors,n=e.touched,r=e.setNewUser,o=w();return console.log(s),(0,g.jsx)(c.Z,{sx:{backgroundImage:"url(".concat("/img/form-bg.jpeg",")"),backgroundPosition:"center",backgroundSize:"cover",backgroundRepeat:"no-repeat",p:2,color:"#b6a288"},children:(0,g.jsx)(i.l0,{method:"POST",children:(0,g.jsx)(a.Z,{elevation:8,sx:{m:"0 auto",display:"block",width:"50%",textAlign:"center",color:"white",backgroundColor:"transparent"},children:(0,g.jsxs)(l.Z,{sx:{color:"white"},children:[(0,g.jsx)(c.Z,{sx:{height:"5rem",width:"5rem",backgroundColor:"transparent",display:"block",margin:"0 auto",textAlign:"center"},children:(0,g.jsx)("img",{src:"https://img.icons8.com/external-bearicons-blue-bearicons/64/000000/external-login-call-to-action-bearicons-blue-bearicons-1.png",width:"100%",height:"100%"})}),(0,g.jsxs)(d.Z,{sx:{mb:"2rem",transform:"scale(1.5,1.5)",fontFamily:"Georgia, serif"},children:[" ",(0,g.jsx)("h2",{children:" Member Sign In"})," "]}),(0,g.jsxs)(c.Z,{margin:1,sx:{display:"inline-flex",alignItems:"center",background:"rgba(0, 0, 0, .2)"},children:[(0,g.jsxs)(c.Z,{sx:{p:"1vw"},children:["  ",(0,g.jsx)(x.Zuw,{size:40})]}),(0,g.jsx)(i.gN,{sx:{input:{color:"white"}},InputProps:{classes:{root:o.cssOutlinedInput,focused:o.cssFocused,notchedOutline:o.notchedOutline}},InputLabelProps:{classes:{root:o.cssLabel,focused:o.cssFocused}},component:p.n,name:"email",label:"Email",type:"email"})]}),s.email&&n.emial&&(0,g.jsx)(c.Z,{children:(0,g.jsx)(d.Z,{variant:"subtitle1",children:s.email})}),(0,g.jsxs)(c.Z,{margin:1,sx:{display:"inline-flex",alignItems:"center",background:"rgba(0, 0, 0, .2)"},children:[(0,g.jsxs)(c.Z,{sx:{p:"1vw"},children:["  ",(0,g.jsx)(m.z85,{size:40})]}),(0,g.jsx)(i.gN,{sx:{input:{color:"white"}},InputProps:{classes:{root:o.cssOutlinedInput,focused:o.cssFocused,notchedOutline:o.notchedOutline}},InputLabelProps:{classes:{root:o.cssLabel,focused:o.cssFocused}},component:p.n,name:"password",label:"Password",type:"password"})]}),(0,g.jsx)(a.Z,{elevation:8,sx:{backgroundColor:"inherit",my:"2rem"},children:(0,g.jsx)(u.Z,{type:"submit",sx:{backgroundColor:"#778b9f",width:"50%","&:hover":{color:"white"}},color:"inherit",children:" Submit"})}),(0,g.jsx)(c.Z,{children:(0,g.jsxs)(d.Z,{children:["New User? ",(0,g.jsx)("u",{onClick:function(){r(!0)},style:{color:"#F7991C",cursor:"pointer"},children:" Register here"})]})})]})})})})}));function j(e){var s=e.setNewUser,n=e.setIsUser;return(0,g.jsx)(f,{setNewUser:s,setIsUser:n})}},4044:function(e,s,n){"use strict";n.r(s);var r=n(7294),o=n(9545),t=n(5018),i=n(7007),c=n(5893);s.default=function(){var e=(0,i.I0)(),s=(0,r.useState)(!1),n=s[0],a=s[1],l=(0,r.useState)(!1),d=l[0],u=l[1];return r.useEffect((function(){e({type:"IS_USER",payload:{isuser:d}})}),[d]),(0,c.jsx)("div",{children:n?(0,c.jsx)(t.default,{setNewUser:a}):(0,c.jsx)(o.default,{setNewUser:a,setIsUser:u})})}},5919:function(e,s,n){(window.__NEXT_P=window.__NEXT_P||[]).push(["/Forms",function(){return n(4044)}])}},function(e){e.O(0,[937,556,524,640,371,774,888,179],(function(){return s=5919,e(e.s=s);var s}));var s=e.O();_N_E=s}]);