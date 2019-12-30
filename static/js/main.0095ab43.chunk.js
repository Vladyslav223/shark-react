(this["webpackJsonpshark-react"]=this["webpackJsonpshark-react"]||[]).push([[0],{147:function(e,t,a){e.exports=a(285)},272:function(e,t,a){},273:function(e,t,a){},274:function(e,t,a){},275:function(e,t,a){},276:function(e,t,a){},277:function(e,t,a){},278:function(e,t,a){},279:function(e,t,a){},280:function(e,t,a){},281:function(e,t,a){},282:function(e,t,a){},283:function(e,t,a){},285:function(e,t,a){"use strict";a.r(t);var n=a(0),r=a.n(n),o=a(32),c=a.n(o),l=a(10),s=a(59),i=a(16),m=a(132),u=a(8),p=a(139),d=a(120),b=a(24),E=a(29),f=a.n(E),g=a(40),y=a.n(g),h="PRELOADER",v="HANDLE_SUCCESS_CONTACTS",N="HANDLE_SUCCESS_FACEBOOK",O="HANDLE_SUCCESS_POSTLIST",j="HANDLE_SUCCESS_USERLIST",_="HANDLE_SUCCESS_COMMENTS",C="HANDLE_OPEN_USER",x="HANDLE_DELETE_COMMENT",S="HANDLE_EDIT_COMMENT",L=N,k=v,w=O,F=j,D=_,T=x,U=S,A=C,R=h,P=function(){return{type:R}},I=function(){return function(e){return f.a.async((function(t){for(;;)switch(t.prev=t.next){case 0:y.a.get("https://randomuser.me/api/?page=1&results=10&seed=abc").then((function(t){var a=t.data.results;e({type:k,payload:a})}));case 1:case"end":return t.stop()}}))}},H=a(313),K=N,M=v,V=O,z=j,B=_,J=x,G=S,W=C,X=h,q={info:{entries:[{API:"",Auth:"",Category:"",Cors:"",Description:"",HTTPS:"",Link:""}]},comment:{name:null,body:null,id:null},user:null,posts:[],contacts:[],isLoading:!1,userKeyFlag:!1},Q=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:q,t=arguments.length>1?arguments[1]:void 0;switch(t.type){case K:return Object(b.a)({},e,{info:t.payload.result,userKeyFlag:!!t.payload.userKey,isLoading:!1});case V:return Object(b.a)({},e,{posts:t.payload.result,isLoading:!1});case B:return Object(b.a)({},e,{comments:t.payload.result,isLoading:!1});case J:return Object(b.a)({},e,{comments:e.comments.filter((function(e){return e.id!==t.payload}))});case G:return Object(b.a)({},e,{comment:{name:t.payload.values.UserCommentTitle,body:t.payload.values.UserCommentBody,id:t.payload.id}});case z:return Object(b.a)({},e,{userList:t.payload.result,isLoading:!1});case M:return Object(b.a)({},e,{contacts:t.payload,userKeyFlag:!!t.payload.userKey,isLoading:!1});case W:return Object(b.a)({},e,{user:t.payload});case X:return Object(b.a)({},e,{isLoading:!0});default:return e}},Y=function(e){return Object(u.c)({router:Object(s.b)(e),reducer:Q,form:H.a})},Z=f.a.mark($);function $(){return f.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,1;case 2:console.log("Hello Sagas!");case 3:case"end":return e.stop()}}),Z)}var ee=window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__||u.d,te=Object(i.a)(),ae=Object(p.a)();var ne=a(19),re=a(312),oe=a(311),ce=Object(oe.a)({form:"registration"})((function(e){e.handleSubmit;return r.a.createElement("div",null,r.a.createElement("h1",null,"Register please"),r.a.createElement("form",{className:"form registration-form"},r.a.createElement("label",{className:"label",htmlFor:"login"},"login:",r.a.createElement(re.a,{name:"login",component:"input",id:"login",type:"text"})),r.a.createElement("label",{className:"label",htmlFor:"password"},"password:",r.a.createElement(re.a,{name:"password",component:"input",id:"password",type:"password"})),r.a.createElement("label",{className:"label",htmlFor:"confirm-password"},"confirm:",r.a.createElement(re.a,{name:"confirm-password",component:"input",id:"confirm-password",type:"password"})),r.a.createElement("button",{className:"button",type:"submit"},"Register")))})),le=a(34),se=a(35),ie=a(38),me=a(36),ue=a(39),pe=(a(272),function(e){var t=e.contact;return r.a.createElement("div",{className:"contact"},r.a.createElement("img",{className:"contact__img",src:t.picture.medium,alt:"contact"}),r.a.createElement("div",{className:"contact__info"},r.a.createElement("p",{className:"contact__registered"},t.registered.date.slice(0,10)),r.a.createElement("p",{className:"contact__name"},t.name.first+""+t.name.last),r.a.createElement("p",{className:"contact__body"},t.location.city),r.a.createElement("p",{className:"contact__email"},t.email)))}),de=(a(273),function(){return r.a.createElement("div",{className:"lds-ellipsis"},r.a.createElement("div",null),r.a.createElement("div",null),r.a.createElement("div",null),r.a.createElement("div",null))}),be=(a(274),function(e){function t(e){var a;return Object(le.a)(this,t),(a=Object(ie.a)(this,Object(me.a)(t).call(this,e))).state={},a}return Object(ue.a)(t,e),Object(se.a)(t,[{key:"componentDidMount",value:function(){this.props.preLoader(),this.props.loadContactsData()}},{key:"render",value:function(){var e=this.props,t=e.isLoading,a=e.contacts;return t?r.a.createElement("div",null,r.a.createElement(de,null)):r.a.createElement("div",null,r.a.createElement("div",{className:"contacts-list"},a.map((function(e){return r.a.createElement(pe,{key:e.cell,contact:e})}))))}}]),t}(n.Component)),Ee={loadContactsData:I,preLoader:P},fe=Object(l.c)((function(e){return{userKeyFlag:e.reducer.userKeyFlag,contacts:e.reducer.contacts,isLoading:e.reducer.isLoading}}),Ee)(be),ge=(a(275),["API","Auth","Category","Cors","Description","HTTPS","Link"]),ye=function(e){function t(){return Object(le.a)(this,t),Object(ie.a)(this,Object(me.a)(t).apply(this,arguments))}return Object(ue.a)(t,e),Object(se.a)(t,[{key:"componentDidMount",value:function(){var e=this.props,t=e.loadFacebookData;(0,e.preLoader)(),t()}},{key:"render",value:function(){var e=this;return r.a.createElement("div",null,r.a.createElement("div",{className:"home-page"},this.props.isLoading?r.a.createElement(de,null):r.a.createElement("div",{className:"api"},ge.map((function(t){return r.a.createElement(n.Fragment,{key:t},r.a.createElement("p",null,t),r.a.createElement("p",null,e.props.info[t]))})))))}}]),t}(n.Component),he={loadFacebookData:function(){return function(e){y.a.get("https://api.publicapis.org/random").then((function(t){var a=t.data.entries[0];e(function(e){var t=e.result;return{type:L,payload:{result:t}}}({result:a}))}))}},preLoader:P},ve=Object(l.c)((function(e){var t=e.reducer;return{userKeyFlag:t.userKeyFlag,info:t.info,isLoading:t.isLoading}}),he)(ye),Ne=(a(276),function(){var e=JSON.parse(localStorage.getItem("userData"));if(e.results){var t=e.results[0];t.name,t.picture,t.location,t.email,t.login;if(e.results){var a=e.results[0],n=a.name,o=a.picture,c=a.location,l=a.email,s=a.login;return r.a.createElement(r.a.Fragment,null,r.a.createElement("h1",null,"Profile"),r.a.createElement("div",{className:"user"},r.a.createElement("img",{className:"user__image",src:o.large,alt:"user"}),r.a.createElement("div",{className:"user__info"},r.a.createElement("div",{className:"user__label"},"Name:"),r.a.createElement("div",{className:"user__name"},n.title+" "+n.first+" "+n.last),r.a.createElement("div",{className:"user__label"},"Nick:"),r.a.createElement("div",{className:"user__username"},s.username),r.a.createElement("div",{className:"user__label"},"Country:"),r.a.createElement("div",{className:"user__country"},c.country),r.a.createElement("div",{className:"user__label"},"City:"),r.a.createElement("div",{className:"user__name"},c.city),r.a.createElement("div",{className:"user__label"},"Email:"),r.a.createElement("div",{className:"user__email"},l))))}return r.a.createElement("div",null,r.a.createElement("h1",null,"Profile"),r.a.createElement("div",null))}}),Oe=a(71),je=a(28),_e=function(e){function t(e){var a;return Object(le.a)(this,t),(a=Object(ie.a)(this,Object(me.a)(t).call(this,e))).state={src:null},a.handleLogOut=a.handleLogOut.bind(Object(Oe.a)(a)),a}return Object(ue.a)(t,e),Object(se.a)(t,[{key:"handleLogOut",value:function(){localStorage.clear(),this.props.history.push("/autorise")}},{key:"render",value:function(){return r.a.createElement("div",null,r.a.createElement("nav",{className:"nav"},r.a.createElement(je.a,{className:"nav-link",to:"/"},"\u0413\u043b\u0430\u0432\u043d\u0430\u044f"),r.a.createElement(je.a,{className:"nav-link",to:"/contacts"},"\u041a\u043e\u043d\u0442\u0430\u043a\u0442\u044b"),r.a.createElement(je.a,{className:"nav-link",to:"/profile"},"\u041f\u0440\u043e\u0444\u0438\u043b\u044c"),r.a.createElement(je.a,{className:"nav-link",to:"/posts"},"\u041f\u043e\u0441\u0442\u044b")),r.a.createElement("button",{type:"button",className:"logout",onClick:this.handleLogOut}))}}]),t}(r.a.Component),Ce=Object(ne.g)(_e),xe=(a(277),"https://randomuser.me/api/"),Se=function(e){function t(){var e,a;Object(le.a)(this,t);for(var n=arguments.length,r=new Array(n),o=0;o<n;o++)r[o]=arguments[o];return(a=Object(ie.a)(this,(e=Object(me.a)(t)).call.apply(e,[this].concat(r)))).state={handleSubmitResult:0,loginValue:"",passwordValue:""},a.handleSubmitFacebook=function(){var e,t,n;return f.a.async((function(r){for(;;)switch(r.prev=r.next){case 0:return r.prev=0,r.next=3,f.a.awrap(fetch(xe));case 3:return e=r.sent,r.next=6,f.a.awrap(e.json());case 6:t=r.sent,n=t.results[0].login.sha256,localStorage.setItem("userData",JSON.stringify(t)),localStorage.setItem("userKey",JSON.stringify(n)),a.props.history.push("/"),r.next=16;break;case 13:r.prev=13,r.t0=r.catch(0),console.log(r.t0);case 16:case"end":return r.stop()}}),null,null,[[0,13]])},a.handleRegistration=function(){a.props.history.push("/register")},a}return Object(ue.a)(t,e),Object(se.a)(t,[{key:"render",value:function(){var e=this,t=this.state,a=t.handleSubmitResult,n=t.loginValue,o=t.passwordValue;return r.a.createElement(r.a.Fragment,null,r.a.createElement("h1",null,"Login please"),r.a.createElement("form",{className:"form"},r.a.createElement("label",{className:"label",htmlFor:"login"},"login:",r.a.createElement("input",{value:n,onChange:function(t){e.setState({loginValue:t.target.value})},id:"login",type:"text"})),r.a.createElement("label",{className:"label",htmlFor:"password"},"password:",r.a.createElement("input",{value:o,onChange:function(t){e.setState({passwordValue:t.target.value})},id:"password",type:"password"})),r.a.createElement("button",{className:"button",type:"submit",onClick:this.handleRegistration},"Register"),r.a.createElement("button",{className:"button",type:"submit"},"Login"),r.a.createElement("button",{className:"login-facebook",type:"button",onClick:this.handleSubmitFacebook})),1===a&&r.a.createElement("p",{className:"error"},"The data is entered incorrectly."))}}]),t}(r.a.Component),Le=Object(ne.g)(Se),ke=a(140),we=Object(ne.g)((function(e){var t=e.component,a=Object(ke.a)(e,["component"]);return r.a.createElement(ne.b,Object.assign({},a,{render:function(e){return window.localStorage.getItem("userKey")?r.a.createElement(t,e):r.a.createElement(ne.a,{to:"/autorise"})}}))})),Fe=(a(278),a(52)),De=a(304),Te=a(91),Ue=a.n(Te),Ae=a(303),Re=a(301),Pe=a(310),Ie=a(305),He=a(50),Ke=a.n(He),Me=Ke.a[50],Ve=Object(Re.a)((function(e){return{root:{justifyContent:"space-evenly",maxWidth:"1200px",margin:"auto",padding:"2% 0 0"},paper:{width:400},box:{backgroundColor:Me,marginTop:1,padding:"10px 0",width:370,margin:"auto",borderRadius:5},box_son:{padding:"3px 10px",textAlign:"left",fontSize:12},box_son2:{padding:"0 10px",textAlign:"left",fontSize:12},buttonLookPosts:{margin:10,fontSize:10,color:"#9b8c8d",position:"reletive",right:-263,boxShadow:"none"},control:{padding:e.spacing(1)}}})),ze=function(e){var t=e.user,a=r.a.useState(2),n=(Object(Fe.a)(a,1)[0],Ve());return r.a.createElement(Ae.a,{container:!0,className:n.box,justify:"center",spacing:0},r.a.createElement("img",{style:{border:"1px solid #dababa",borderRadius:"5px",height:"107px"},src:t.img,alt:"contact"}),r.a.createElement(Pe.a,{className:n.box_son2},r.a.createElement(Pe.a,{className:n.box_son},"Name: ",t.name),r.a.createElement(Pe.a,{className:n.box_son},"Nickname: ",t.username),r.a.createElement(Pe.a,{className:n.box_son},"Email: ",t.email),r.a.createElement(Pe.a,{className:n.box_son},"City:",t.address.city,r.a.createElement("br",null),r.a.createElement("a",{style:{paddingTop:"5px",display:"block"},href:"http://"+t.website,target:"_blank",rel:"noopener noreferrer"},"Website"))))},Be=(a(279),Object(Re.a)((function(e){return{root:{justifyContent:"space-evenly",maxWidth:"1200px",margin:"auto",padding:"2% 0 0"},paper:{width:400},buttonLookPosts:{margin:10,fontSize:10,color:"#9b8c8d",position:"reletive",right:-263,boxShadow:"none"},control:{padding:e.spacing(1)}}}))),Je=Object(ne.g)((function(e){var t=e.preLoader,a=e.loadPostList,o=e.loadUserList,c=e.loadContactsData,l=e.loadCommentList,s=e.contacts,i=e.userList;Object(n.useEffect)((function(){t(),a(),o(),c(),l()}),[]);var m=r.a.useState(2),u=Object(Fe.a)(m,1)[0],p=Be();return r.a.createElement(Ae.a,{className:p.root,container:!0,justify:"center",spacing:u},i&&i.map((function(t,a){var n=s&&s.find((function(e,t){return t===a})),o=Object(b.a)({},t,{img:n&&n.picture.large});return r.a.createElement(Ae.a,{key:a,item:!0},r.a.createElement(De.a,{className:p.paper},r.a.createElement(Pe.a,null,r.a.createElement("div",{className:"user-id"},r.a.createElement(Pe.a,{component:"span"},t.id),t.username),r.a.createElement(ze,{user:o})),r.a.createElement(Ie.a,{className:p.buttonLookPosts,onClick:function(){return function(t){e.onClickUser(t),e.history.push("/user")}(o)},variant:"contained"},r.a.createElement(Ue.a,null),"Look posts")))})))})),Ge={loadPostList:function(){return function(e){y.a.get("http://jsonplaceholder.typicode.com/posts").then((function(t){var a=t.data;e({type:w,payload:{result:a}})}))}},loadUserList:function(){return function(e){y.a.get("http://jsonplaceholder.typicode.com/users").then((function(t){var a=t.data;e({type:F,payload:{result:a}})}))}},loadCommentList:function(){return function(e){y.a.get("http://jsonplaceholder.typicode.com/comments").then((function(t){var a=t.data;e({type:D,payload:{result:a}})}))}},onClickUser:function(e){return function(t){t({type:A,payload:e})}},loadContactsData:I,preLoader:P},We=Object(l.c)((function(e){var t=e.reducer;return{posts:t.posts,userList:t.userList,isLoading:t.isLoading,contacts:t.contacts,comments:t.comments}}),Ge)(Je),Xe=a(307),qe=a(136),Qe=a.n(qe),Ye=a(308),Ze=a(309),$e=a(137),et=a.n($e),tt=a(138),at=a.n(tt),nt=a(135),rt=a.n(nt),ot=a(306),ct=(a(280),Object(oe.a)({form:"AddComment"})((function(e){var t=e.handleSubmit;return r.a.createElement(r.a.Fragment,null,r.a.createElement("h2",null,"Add comment"),r.a.createElement(ot.a,{onSubmit:t,className:"form add-comment"},r.a.createElement("label",{className:"label",htmlFor:"title"},"Title:",r.a.createElement(re.a,{className:"add-comment__textarea",name:"title",component:"textarea",type:"text"})),r.a.createElement("label",{className:"label",htmlFor:"body"},"Body:",r.a.createElement(re.a,{className:"add-comment__textarea",name:"body",component:"textarea",type:"text"})),r.a.createElement("button",{className:"button",type:"submit"},"\u043e\u0442\u043f\u0440\u0430\u0432\u0438\u0442\u044c")))}))),lt=(a(281),Object(oe.a)({form:"comment"})((function(e){var t=e.handleSubmit;return r.a.createElement(ot.a,{onSubmit:t},r.a.createElement(re.a,{className:"edit-comment",name:"UserCommentTitle",component:"textarea"}),r.a.createElement(re.a,{className:"edit-comment",name:"UserCommentBody",component:"textarea"}),r.a.createElement("button",{type:"submit"},"Save"))}))),st=(a(282),rt.a[600]),it=(Ke.a[600],Object(Re.a)((function(e){return{root:{flexGrow:1},paper:{position:"relative",textAlign:"center",color:e.palette.text.secondary,width:"90%",margin:"10px auto 30px",padding:"20px 10px 30px",borderRadius:10},grid:{marginTop:10,borderRadius:10},comment:{padding:20,margin:20,borderRadius:50},typography:{fontFamily:"Gloria Hallelujah",color:st},title:{fontFamily:"unset",color:st,width:" 80%",margin:"auto"}}}))),mt={deleteComment:function(e){return function(t){var a="https://jsonplaceholder.typicode.com/comments/".concat(e);y.a.delete(a).then((function(e){console.log(e)})),t({type:T,payload:e})}},editComment:function(e,t){return function(a){var n="https://jsonplaceholder.typicode.com/comments/".concat(t);y.a.put(n,{name:e[0],body:e[1],id:t}).then((function(e){console.log(e)})).catch((function(e){console.log(e)})),a({type:U,payload:{values:e,id:t}})}}},ut=Object(l.c)((function(e){return{stateComment:e.reducer.comment}}),mt)((function(e){var t=e.posts,a=e.comments,o=e.currentUser,c=e.deleteComment,l=e.editComment,s=e.stateComment,i=Object(n.useState)(null),m=Object(Fe.a)(i,2),u=m[0],p=m[1],d=it(),b=function(){if(t)return t.filter((function(e){return e.userId===o}))}(),E=function(e,t){p(u=null),function(e,t){l(e,t)}(e,t)};return r.a.createElement(Ae.a,{bgcolor:"#efebe9",className:d.grid,item:!0,xs:12},b.map((function(e,t){var n=a.filter((function(t){return t.postId===e.id})),o=e.title[0].toUpperCase()+e.title.slice(1),l=e.body[0].toUpperCase()+e.body.slice(1);return r.a.createElement(De.a,{className:d.paper,key:e.id},r.a.createElement("b",{className:"post-id"},t+1),r.a.createElement(Xe.a,{paragraph:!0,align:"center",color:"textSecondary",component:"p",variant:"h6",className:d.title},o),r.a.createElement(Xe.a,{paragraph:!0,align:"center",color:"textSecondary",component:"p",className:d.title},l),r.a.createElement(Pe.a,{bgcolor:"#f5f5f5",className:d.paper},r.a.createElement(Xe.a,{className:d.title,component:"h5",variant:"h5"},"Comments:"),n.map((function(e,t){var a=e.id,n=e.name[0].toUpperCase()+e.name.slice(1),o=e.body[0].toUpperCase()+e.body.slice(1),l=s.name&&s.name,i=s.body&&s.body,m=s.id&&s.id;return r.a.createElement(Pe.a,{boxShadow:3,className:d.comment,bgcolor:"white",key:e.id},u!==t+1?r.a.createElement(r.a.Fragment,null,r.a.createElement("b",null,t+1),r.a.createElement(Pe.a,{className:d.typography,align:"left",color:"textSecondary"},m===a&&l?l:n,r.a.createElement("hr",null),m===a&&i?i:o),r.a.createElement(Pe.a,{className:"flex-wrapper"},r.a.createElement(Ye.a,{"aria-label":"delete",onClick:function(){return function(e){c(e)}(a)}},r.a.createElement(Qe.a,null)),r.a.createElement(Ze.a,{onClick:function(){return p(u=t+1)},size:"small","aria-label":"edit"},r.a.createElement(et.a,null)))):r.a.createElement(r.a.Fragment,null,r.a.createElement(lt,{onSubmit:function(e){return E(e,a)},initialValues:{UserCommentTitle:l||e.name,UserCommentBody:i||e.body}}),r.a.createElement(Pe.a,{className:"flex-wrapper"},r.a.createElement(Ze.a,{style:{margin:"20px"},onClick:function(){return p(null)},color:"default",size:"small","aria-label":"edit"},r.a.createElement(at.a,null)))))})),r.a.createElement(ct,null)))})))})),pt=(a(283),Ke.a[50],Object(Re.a)((function(e){return{root:{flexGrow:1},paper:{padding:e.spacing(5),textAlign:"center",color:e.palette.text.secondary},title:{fontFamily:"unset",marginTop:10}}})));var dt=Object(ne.g)((function(e){var t=e.user,a=e.posts,n=e.comments,o=pt();return t?r.a.createElement("div",{className:o.root},r.a.createElement(Xe.a,{color:"textSecondary",align:"center",component:"p",variant:"h5",className:o.title},t.username),r.a.createElement(Ae.a,{className:"current-card",border:1,container:!0,alignContent:"stretch",spacing:1,justify:"center"},r.a.createElement(ze,{user:t}),r.a.createElement(ut,{posts:a,comments:n,currentUser:t.id}))):r.a.createElement("div",null,void e.history.push("/posts"))})),bt=Object(l.c)((function(e){var t=e.reducer;return{user:t.user,posts:t.posts,userList:t.userList,isLoading:t.isLoading,contacts:t.contacts,comments:t.comments}}))(dt),Et=(a(284),function(){return r.a.createElement(ne.d,null,r.a.createElement(ne.b,{path:"/autorise",component:Le}),r.a.createElement(ne.b,{path:"/register",component:ce}),r.a.createElement(r.a.Fragment,null,r.a.createElement(Ce,null),r.a.createElement(ne.d,null,r.a.createElement(ne.b,{path:"/user",component:bt}),r.a.createElement(ne.b,{path:"/posts",component:We}),r.a.createElement(we,{exact:!0,path:"/",component:ve}),r.a.createElement(we,{path:"/contacts",component:fe}),r.a.createElement(we,{path:"/profile",component:Ne}))))}),ft=Object(i.a)();c.a.render(r.a.createElement(l.a,{store:function(){var e=Object(u.e)(Y(te),ee(Object(u.a)(Object(d.a)(te),m.a,ae)));return ae.run($),e}()},r.a.createElement(s.a,{history:ft},r.a.createElement(Et,null))),document.getElementById("root"))}},[[147,1,2]]]);
//# sourceMappingURL=main.0095ab43.chunk.js.map