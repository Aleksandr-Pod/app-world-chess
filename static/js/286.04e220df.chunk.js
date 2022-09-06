"use strict";(self.webpackChunkapp_world_chess=self.webpackChunkapp_world_chess||[]).push([[286],{7182:function(n,e,r){r.d(e,{Z:function(){return c}});var t,i,s=r(168),a=r(225),o=r.p+"static/media/chess.067246333bafc1e6e5f9.jpg",d=a.Z.div(t||(t=(0,s.Z)(["\n    background-color: #4a4f5a;\n    justify-content: center;\n    align-items: center;\n    min-height: 100vh;\n    display: flex;\n    flex-direction: column;\n    background-image: linear-gradient(rgba(0, 0, 0, 0.31), rgba(0, 0, 0, 0.31)), url(",");\n"])),o),l=a.Z.div(i||(i=(0,s.Z)(["\n    width: 100%;\n    height: 100%;\n    background: rgba(255, 255, 255, 0.01);\n    backdrop-filter: blur(5px);\n    z-index: 1;\n    position: fixed;\n    top: 0;\n    right: 0;\n    width: 100vw;\n    height: 100vh;\n"]))),u=r(184),c=function(n){var e=n.children;return(0,u.jsxs)(d,{children:[(0,u.jsx)(l,{}),e]})}},2895:function(n,e,r){r.d(e,{$5:function(){return c},Az:function(){return u},NZ:function(){return p},Wv:function(){return x},Wz:function(){return m},hW:function(){return h}});var t,i,s,a,o,d=r(168),l=r(225),u=l.Z.div(t||(t=(0,d.Z)(["\n    position: absolute;\n    z-index: 25;\n    top: 0;\n    left: 0;\n    display: flex;\n    flex-direction: column;\n    justify-content: center;\n    align-items: center;\n\n    width: 100vw;\n    height: 100vh;\n    padding: 20px;\n    background-color: ",";\n    @media (min-width: 768px) {\n        position: relative;\n        margin-left: auto;\n        margin-right: auto;\n        border-radius: 20px;\n        padding: 40px;\n        width: 533px;\n        height: 468px;\n    }\n    /* @media (min-width: 1280px) {\n        margin-left: 107px;\n    } */\n"])),(function(n){return n.theme.colors.white})),c=l.Z.form(i||(i=(0,d.Z)(["\n    max-width: 280px;\n    margin-top: 20px;\n    @media (min-width: 768px) {\n        width: 410px;\n    }\n"]))),h=l.Z.div(s||(s=(0,d.Z)(["\n    color: ",";\n    font-size: 14px;\n    margin-left: 10px;\n"])),(function(n){return n.theme.colors.error})),m=l.Z.div(a||(a=(0,d.Z)(["\n    display: flex;\n    flex-direction: column;\n    justify-content: end;\n    margin-top: 40px;\n    width: 100%;\n"]))),p={color:"#E0E0E0"},x=l.Z.div(o||(o=(0,d.Z)(["\n    display: flex;\n    flex-direction: column;\n    margin-left: auto;\n    margin-right: auto;\n    margin-top: 42px;\n    @media (min-width: 768px) {\n        width: 300px;\n    }\n"])))},2998:function(n,e,r){r.d(e,{Z:function(){return u}});r(2791);var t,i,s=r(168),a=r(225),o=a.Z.h1(t||(t=(0,s.Z)(['\n    display: flex;\n    align-items: center;\n    margin: 0;\n    font-weight: 700;\n    font-family: "Poppins";\n    font-size: 24px;\n    line-height: 1.46;\n    @media (min-width: 768px) {\n        font-weight: 700;\n        font-size: 30px;\n        line-height: 1.5;\n    }\n']))),d=a.Z.div(i||(i=(0,s.Z)(["\n    display: flex;\n    align-items: center;\n    height: 40px;\n"]))),l=r(184),u=function(){return(0,l.jsx)(d,{children:(0,l.jsx)(o,{children:"Chess-World"})})}},3683:function(n,e,r){r.d(e,{d:function(){return i},g:function(){return s}});var t=r(4929),i=(0,t.Ry)().shape({email:(0,t.Z_)().email("Invalid email").required("Email must by required"),password:(0,t.Z_)().min(6,"Password must be longer than 6 letters!").max(18,"Password must be shorts than 18 letters!").required("Password must by required")}),s=(0,t.Ry)().shape({firstName:(0,t.Z_)().min(2,"Name must be longer than 2 letters!").max(30,"Name must be shorts than 30 letters!").required("Name must by required"),password:(0,t.Z_)().min(6,"Password must be longer than 6 letters!").max(18,"Password must be shorts than 18 letters!").required("Password must by required"),dublePassword:(0,t.Z_)().min(6,"Password must be longer than 6 letters!").max(18,"Password must be shorts than 18 letters!").required("Password must by required"),email:(0,t.Z_)().email("Invalid email").required("Email must by required")})},8047:function(n,e,r){r.r(e),r.d(e,{default:function(){return _}});var t=r(2791),i=r(4165),s=r(5861),a=r(885),o=r(5048),d=r(6871),l=r(5705),u=r(5206),c=r(4925),h=r(7708),m=r(9009),p=r(3400),x=r(3835),f=r(117),g=r(3710),w=r(9569),Z=r(4928),b=r(1229),v=r(2703),j=r(3683),y=r(2998),k=r(6615),q=r(2895),P=r(184),W=function(){var n=(0,t.useState)(!1),e=(0,a.Z)(n,2),r=e[0],W=e[1],E=(0,t.useState)(!1),_=(0,a.Z)(E,2),z=_[0],A=_[1],C=(0,v.OQ)(),N=(0,a.Z)(C,1)[0],S=(0,d.s0)(),I=(0,o.I0)(),R=(0,l.TA)({initialValues:{password:"",email:""},validationSchema:j.d,onSubmit:function(){var n=(0,s.Z)((0,i.Z)().mark((function n(e){var r;return(0,i.Z)().wrap((function(n){for(;;)switch(n.prev=n.next){case 0:return A(!0),n.prev=1,n.next=4,N(e);case 4:if(!(r=n.sent).error){n.next=9;break}return u.Am.error("Email or password is wrong"),A(!1),n.abrupt("return");case 9:r.data.user.name&&(I((0,Z.s)(r.data.user.token)),I((0,b._)(r.data.user.name)),u.Am.success("Welcome ".concat(r.data.user.name,"!"))),n.next=15;break;case 12:n.prev=12,n.t0=n.catch(1),console.log(n.t0);case 15:A(!1);case 16:case"end":return n.stop()}}),n,null,[[1,12]])})));return function(e){return n.apply(this,arguments)}}()});return(0,P.jsxs)(q.Az,{children:[(0,P.jsx)(y.Z,{}),(0,P.jsxs)(q.$5,{onSubmit:R.handleSubmit,children:[(0,P.jsxs)(q.Wz,{children:[(0,P.jsx)(c.Z,{htmlFor:"email",children:R.touched.email&&R.errors.email?(0,P.jsx)(q.hW,{children:R.errors.email}):null}),(0,P.jsx)(h.Z,{fullWidth:!0,variant:"standard",required:!0,id:"email",name:"email",type:"email",onChange:R.handleChange,value:R.values.email,placeholder:"Email Address",InputProps:{startAdornment:(0,P.jsx)(m.Z,{position:"start",children:(0,P.jsx)(x.Z,{sx:{color:"#E0E0E0",ml:"7px"}})})}})]}),(0,P.jsxs)(q.Wz,{children:[(0,P.jsx)(c.Z,{htmlFor:"password",children:R.touched.password&&R.errors.password?(0,P.jsx)(q.hW,{children:R.errors.password}):null}),(0,P.jsx)(h.Z,{fullWidth:!0,variant:"standard",required:!0,id:"password",name:"password",type:r?"text":"password",onChange:R.handleChange,value:R.values.password,placeholder:"Password",InputProps:{startAdornment:(0,P.jsx)(m.Z,{position:"start",children:(0,P.jsx)(f.Z,{sx:{color:"#E0E0E0",ml:"7px"}})}),endAdornment:(0,P.jsx)(m.Z,{position:"end",children:(0,P.jsx)(p.Z,{"aria-label":"toggle password visibility",onClick:function(){return W(!r)},children:r?(0,P.jsx)(g.Z,{}):(0,P.jsx)(w.Z,{sx:q.NZ})})})}})]}),(0,P.jsxs)(q.Wv,{children:[(0,P.jsx)(k.W,{variant:"contained",bts:"submit",disabled:z,type:"submit",children:"Log in"}),(0,P.jsx)(k.W,{bts:"link",variant:"outlined",onClick:function(){return S("/register",{replace:!0})},children:"Register"})]})]})]})},E=r(7182),_=function(){return(0,P.jsx)(E.Z,{children:(0,P.jsx)(W,{})})}}}]);
//# sourceMappingURL=286.04e220df.chunk.js.map