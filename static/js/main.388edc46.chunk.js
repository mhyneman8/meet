(this.webpackJsonpmeet=this.webpackJsonpmeet||[]).push([[0],{200:function(e,t,n){},202:function(e,t,n){},204:function(e,t,n){},356:function(e,t,n){"use strict";n.r(t);var a=n(0),r=n.n(a),o=n(66),s=n.n(o),c=(n(200),n(26)),i=n.n(c),l=n(51),u=n(22),d=n(28),h=n(23),f=n(24),p=(n(202),n(3)),m=function(e){Object(h.a)(n,e);var t=Object(f.a)(n);function n(){var e;Object(u.a)(this,n);for(var a=arguments.length,r=new Array(a),o=0;o<a;o++)r[o]=arguments[o];return(e=t.call.apply(t,[this].concat(r))).state={summary:"",description:"",location:"",dateTime:"",timeZone:"",show:!1},e.handleShowButton=function(){!0===e.state.show?e.setState({show:!1}):e.setState({show:!0})},e}return Object(d.a)(n,[{key:"render",value:function(){var e=this,t=this.props.event;return Object(p.jsx)("div",{className:"event",children:Object(p.jsxs)("div",{className:"event-list",children:[Object(p.jsx)("h1",{className:"event-title",children:t.summary}),Object(p.jsx)("p",{className:"event-location",children:t.location}),Object(p.jsxs)("p",{className:"event-dateTime",children:["start: ",t.start.dateTime," - ",t.start.timeZone]}),Object(p.jsx)("button",{onClick:function(){return e.handleShowButton()},className:"details-btn",children:this.state.show?"Hide Details":"Show Details"}),!0===this.state.show&&Object(p.jsxs)("div",{className:"details",children:[Object(p.jsx)("h2",{children:"About Event: "}),Object(p.jsx)("p",{children:t.description})]})]})})}}]),n}(a.Component),v=function(e){Object(h.a)(n,e);var t=Object(f.a)(n);function n(){return Object(u.a)(this,n),t.apply(this,arguments)}return Object(d.a)(n,[{key:"render",value:function(){var e=this.props.events;return Object(p.jsx)("div",{children:Object(p.jsx)("ul",{className:"EventList",children:e.map((function(e){return Object(p.jsx)("li",{children:Object(p.jsx)(m,{event:e})},e.id)}))})})}}]),n}(a.Component),b=function(e){Object(h.a)(n,e);var t=Object(f.a)(n);function n(e){var a;return Object(u.a)(this,n),(a=t.call(this,e)).getStyle=function(){return{color:a.color}},a.color=null,a}return Object(d.a)(n,[{key:"render",value:function(){return Object(p.jsx)("div",{className:"Alert",children:Object(p.jsx)("p",{style:this.getStyle(),children:this.props.text})})}}]),n}(a.Component),j=function(e){Object(h.a)(n,e);var t=Object(f.a)(n);function n(e){var a;return Object(u.a)(this,n),(a=t.call(this,e)).color="blue",a}return n}(b),g=function(e){Object(h.a)(n,e);var t=Object(f.a)(n);function n(e){var a;return Object(u.a)(this,n),(a=t.call(this,e)).color="red",a}return n}(b),w=function(e){Object(h.a)(n,e);var t=Object(f.a)(n);function n(){var e;Object(u.a)(this,n);for(var a=arguments.length,r=new Array(a),o=0;o<a;o++)r[o]=arguments[o];return(e=t.call.apply(t,[this].concat(r))).state={query:"",locations:e.props.locations,suggestions:[],showSuggestions:void 0},e.handleInputChanged=function(t){var n=t.target.value;e.setState({showSuggestions:!0});var a=e.props.locations.filter((function(e){return e.toUpperCase().indexOf(n.toUpperCase())>-1}));if(0!==a.length)return e.setState({query:n,suggestions:a,infoText:""});e.setState({query:n,infoText:"We can't find that city. Please try another city."})},e.handleItemClicked=function(t){e.setState({query:t,suggestions:[]}),e.props.updateEvents(t)},e.handleClose=function(){e.setState({showSuggestions:!1})},e}return Object(d.a)(n,[{key:"render",value:function(){var e=this;return Object(p.jsxs)("div",{className:"CitySearch",children:[Object(p.jsx)("label",{children:"Search City:"}),Object(p.jsx)(j,{text:this.state.infoText}),Object(p.jsx)("input",{type:"text",className:"city",value:this.state.query,onChange:this.handleInputChanged,onFocus:function(){e.setState({showSuggestions:!0})}}),Object(p.jsxs)("ul",{className:"suggestions",style:this.state.showSuggestions?{}:{display:"none"},children:[Object(p.jsx)("span",{className:"close",onClick:function(){return e.handleClose()},children:"x"}),this.state.suggestions.map((function(t){return Object(p.jsx)("li",{onClick:function(){return e.handleItemClicked(t)},children:t},t)})),Object(p.jsx)("li",{onClick:function(){return e.handleItemClicked("all")},children:Object(p.jsx)("b",{children:"See all cities"})})]})]})}}]),n}(a.Component),O=function(e){Object(h.a)(n,e);var t=Object(f.a)(n);function n(){var e;Object(u.a)(this,n);for(var a=arguments.length,r=new Array(a),o=0;o<a;o++)r[o]=arguments[o];return(e=t.call.apply(t,[this].concat(r))).state={numberOfEvents:15},e.handleInputChanged=function(t){var n=t.target.value;if(e.setState({numberOfEvents:n}),!(n<1|n>32))return e.setState({numberOfEvents:n,infoText:""});e.setState({numberOfEvents:n,infoText:"Enter a number between 1 and 32."}),e.props.updateNumberOfEvents(n)},e}return Object(d.a)(n,[{key:"render",value:function(){var e=this,t=this.state.numberOfEvents;return Object(p.jsxs)("div",{className:"NumberOfEvents",children:[Object(p.jsx)("label",{className:"number-label",children:"Number of Events:"}),Object(p.jsx)(g,{text:this.state.infoText}),Object(p.jsx)("input",{type:"number",id:"number-of-events",className:"number-events",value:t,onChange:function(t){return e.handleInputChanged(t)},placeholder:t})]})}}]),n}(a.Component),x=n.p+"static/media/Spinner.ce63e495.svg",y=function(e){Object(h.a)(n,e);var t=Object(f.a)(n);function n(){return Object(u.a)(this,n),t.apply(this,arguments)}return Object(d.a)(n,[{key:"render",value:function(){return Object(p.jsx)("div",{className:"loader",children:Object(p.jsx)("img",{src:x,alt:"loading spinner"})})}}]),n}(a.Component);n(204);var k=function(e){return e.showWelcomeScreen?Object(p.jsxs)("div",{className:"WelcomeScreen",children:[Object(p.jsx)("h1",{className:"welcome",children:"Welcome to the Meet app"}),Object(p.jsx)("h4",{className:"wel-text",children:"Log in to see upcoming events around the world for full-stack developers"}),Object(p.jsx)("div",{className:"button_cont",align:"center",children:Object(p.jsxs)("div",{className:"google-btn",children:[Object(p.jsx)("div",{className:"google-icon-wrapper",children:Object(p.jsx)("img",{className:"google-icon",src:"https://upload.wikimedia.org/wikipedia/commons/5/53/Google_%22G%22_Logo.svg",alt:"Google sign-in"})}),Object(p.jsx)("button",{onClick:function(){e.getAccessToken()},rel:"nofollow noopener",className:"btn-text",children:Object(p.jsx)("b",{children:"Sign in with google"})})]})}),Object(p.jsx)("a",{href:"https://mhyneman8.github.io/meet/privacy.html",rel:"nofollow noonpener",children:"Privacy Policy"})]}):null},S=n(18),N=n(357),T=n(364),E=n(180),C=n(93),W=function(e){var t=e.events,n=["React","JavaScript","Node","jQuery","Angular JS"],r=["#0088FE","#00C49F","#FFBB28","#FF8042"];Object(a.useEffect)((function(){i((function(){return function(){var e=(void 0).useState.events,t=n.map((function(t){var n=e.filter((function(e){return e.summary.split(" ").includes(t)})).length;return{name:t,value:n}}));return t.filter((function(e){return e.value}))}()}))}),[t]);var o=Object(a.useState)([]),s=Object(S.a)(o,2),c=s[0],i=s[1];return Object(p.jsx)(N.a,{width:"100%",height:"100%",children:Object(p.jsx)(T.a,{width:400,height:400,children:Object(p.jsx)(E.a,{data:c,cx:"50%",cy:"50%",labelLine:!1,label:function(e){var t=e.name,n=e.percent;return"".concat(t," ").concat((100*n).toFixed(0),"%")},outerRadius:80,fill:"#8884d8",dataKey:"value",children:c.map((function(e,t){return Object(p.jsx)(C.a,{fill:r[t%r.length]},"cell-".concat(t))}))})})})},Z=n(189),A=[{kind:"calendar#event",etag:'"3181161784712000"',id:"4eahs9ghkhrvkld72hogu9ph3e_20200519T140000Z",status:"confirmed",htmlLink:"https://www.google.com/calendar/event?eid=NGVhaHM5Z2hraHJ2a2xkNzJob2d1OXBoM2VfMjAyMDA1MTlUMTQwMDAwWiBmdWxsc3RhY2t3ZWJkZXZAY2FyZWVyZm91bmRyeS5jb20",created:"2020-05-19T19:17:46.000Z",updated:"2020-05-27T12:01:32.356Z",summary:"Learn JavaScript",description:"Have you wondered how you can ask Google to show you the list of the top ten must-see places in London? And how Google presents you the list? How can you submit the details of an application? Well, JavaScript is doing these. :) \n\nJavascript offers interactivity to a dull, static website. Come, learn JavaScript with us and make those beautiful websites.",location:"London, UK",creator:{email:"fullstackwebdev@careerfoundry.com",self:!0},organizer:{email:"fullstackwebdev@careerfoundry.com",self:!0},start:{dateTime:"2020-05-19T16:00:00+02:00",timeZone:"Europe/Berlin"},end:{dateTime:"2020-05-19T17:00:00+02:00",timeZone:"Europe/Berlin"},recurringEventId:"4eahs9ghkhrvkld72hogu9ph3e",originalStartTime:{dateTime:"2020-05-19T16:00:00+02:00",timeZone:"Europe/Berlin"},iCalUID:"4eahs9ghkhrvkld72hogu9ph3e@google.com",sequence:0,reminders:{useDefault:!0},eventType:"default"},{kind:"calendar#event",etag:'"3181159875584000"',id:"3qtd6uscq4tsi6gc7nmmtpqlct_20200520T120000Z",status:"confirmed",htmlLink:"https://www.google.com/calendar/event?eid=M3F0ZDZ1c2NxNHRzaTZnYzdubW10cHFsY3RfMjAyMDA1MjBUMTIwMDAwWiBmdWxsc3RhY2t3ZWJkZXZAY2FyZWVyZm91bmRyeS5jb20",created:"2020-05-19T19:14:30.000Z",updated:"2020-05-27T11:45:37.792Z",summary:"React is Fun",description:"Love HTML, CSS, and JS? Want to become a cool front-end developer? \n\nReact is one of the most popular front-end frameworks. There is a huge number of job openings for React developers in most cities. \n\nJoin us in our free React training sessions and give your career a new direction. ",location:"Berlin, Germany",creator:{email:"fullstackwebdev@careerfoundry.com",self:!0},organizer:{email:"fullstackwebdev@careerfoundry.com",self:!0},start:{dateTime:"2020-05-20T14:00:00+02:00",timeZone:"Europe/Berlin"},end:{dateTime:"2020-05-20T15:00:00+02:00",timeZone:"Europe/Berlin"},recurringEventId:"3qtd6uscq4tsi6gc7nmmtpqlct",originalStartTime:{dateTime:"2020-05-20T14:00:00+02:00",timeZone:"Europe/Berlin"},iCalUID:"3qtd6uscq4tsi6gc7nmmtpqlct@google.com",sequence:0,reminders:{useDefault:!0},eventType:"default"}];A=JSON.parse(JSON.stringify(A));var I=n(77),J=n.n(I),L=n(120),B=n.n(L),M=function(){if(window.history.pushState&&window.location.pathname){var e=window.location.protocol+"//"+window.location.host+window.location.pathname;window.history.pushState("","",e)}else e=window.location.protocol+"//"+window.location.host,window.history.pushState("","",e)},D=function(){var e=Object(l.a)(i.a.mark((function e(t){var n;return i.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,fetch("https://www.googleapis.com/oauth2/v1/tokeninfo?access_token=".concat(t)).then((function(e){return e.json()})).catch((function(e){return e.json()}));case 2:return n=e.sent,e.abrupt("return",n);case 4:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}(),F=function(e){var t=e.map((function(e){return e.location}));return Object(Z.a)(new Set(t))},q=function(){var e=Object(l.a)(i.a.mark((function e(){var t,n,a,r,o;return i.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:if(J.a.start(),!window.location.href.startsWith("http://localhost")){e.next=4;break}return J.a.done(),e.abrupt("return",A);case 4:if(navigator.onLine){e.next=8;break}return t=localStorage.getItem("lastEvents"),J.a.done(),e.abrupt("return",t?JSON.parse(t).events:[]);case 8:return e.next=10,R();case 10:if(!(n=e.sent)){e.next=20;break}return M(),a="https://k3o9f64iji.execute-api.us-west-2.amazonaws.com/dev/api/get-events/"+n,e.next=16,B.a.get(a);case 16:return(r=e.sent).data&&(o=F(r.data.events),localStorage.setItem("lastEvents",JSON.stringify(r.data)),localStorage.setItem("locations",JSON.stringify(o))),J.a.done(),e.abrupt("return",r.data.events);case 20:case"end":return e.stop()}}),e)})));return function(){return e.apply(this,arguments)}}(),R=function(){var e=Object(l.a)(i.a.mark((function e(){var t,n,a,r,o,s;return i.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:if(t=localStorage.getItem("access_token"),e.t0=t,!e.t0){e.next=6;break}return e.next=5,D(t);case 5:e.t0=e.sent;case 6:if(n=e.t0,t&&!n.error){e.next=21;break}return e.next=10,localStorage.removeItem("access_token");case 10:return a=new URLSearchParams(window.location.search),e.next=13,a.get("code");case 13:if(r=e.sent){e.next=20;break}return e.next=17,B.a.get("https://k3o9f64iji.execute-api.us-west-2.amazonaws.com/dev/api/get-auth-url");case 17:return o=e.sent,s=o.data.authUrl,e.abrupt("return",window.location.href=s);case 20:return e.abrupt("return",r&&U(r));case 21:return e.abrupt("return",t);case 22:case"end":return e.stop()}}),e)})));return function(){return e.apply(this,arguments)}}(),U=function(){var e=Object(l.a)(i.a.mark((function e(t){var n,a,r;return i.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return n=encodeURIComponent(t),e.next=3,fetch("https://k3o9f64iji.execute-api.us-west-2.amazonaws.com/dev/api/token/"+n).then((function(e){return e.json()})).catch((function(e){return e}));case 3:return a=e.sent,(r=a.access_token)&&localStorage.setItem("access_token",r),e.abrupt("return",r);case 7:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}(),_=n(361),P=n(362),z=n(185),H=n(186),G=n(78),Y=n(190),K=function(e){Object(h.a)(n,e);var t=Object(f.a)(n);function n(){var e;Object(u.a)(this,n);for(var a=arguments.length,r=new Array(a),o=0;o<a;o++)r[o]=arguments[o];return(e=t.call.apply(t,[this].concat(r))).state={events:[],locations:[],numberOfEvents:15,currentCity:"all",loading:!0,showWelcomeScreen:void 0},e.updateEvents=function(t,n){q().then((function(a){var r="all"===t?a.slice(0,n):a.filter((function(e){return e.location===t}));e.mounted&&e.setState({events:r.slice(0,n),currentCity:t})}))},e.getData=function(){var t=e.state,n=t.locations,a=t.events;return n.map((function(e){var t=a.filter((function(t){return t.location===e})).length;return{city:e.split(", ").shift(),number:t}}))},e}return Object(d.a)(n,[{key:"updateNumberOfEvents",value:function(e){this.setState({numberOfEvents:e});var t=this.state.currentCity;this.updateEvents(t,e)}},{key:"componentDidMount",value:function(){var e=Object(l.a)(i.a.mark((function e(){var t,n,a,r,o,s=this;return i.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return t=this.state.numberOfEvents,this.mounted=!0,n=localStorage.getItem("access_token"),e.next=5,D(n);case 5:if(!e.sent.error){e.next=9;break}e.t0=!1,e.next=10;break;case 9:e.t0=!0;case 10:if(a=e.t0,r=new URLSearchParams(window.location.search),o=r.get("code"),this.setState({showWelcomeScreen:!(o||a)}),!o&&!a||!this.mounted){e.next=21;break}if(q().then((function(e){s.mounted&&s.setState({events:e.slice(0,t),locations:F(e),loading:!1})})),navigator.onLine){e.next=20;break}this.setState({infoText:"You are offline. Events displayed may not be up-to-date"}),e.next=21;break;case 20:return e.abrupt("return",this.setState({infoText:""}));case 21:case"end":return e.stop()}}),e,this)})));return function(){return e.apply(this,arguments)}}()},{key:"render",value:function(){var e=this,t=this.state,n=t.locations,a=t.events,r=t.numberOfEvents,o=t.infoText;return void 0===this.state.showWelcomeScreen?Object(p.jsx)("div",{className:"App"}):Object(p.jsxs)("div",{className:"App",children:[Object(p.jsx)("h1",{className:"title",children:"Meet App"}),Object(p.jsx)(w,{locations:n,updateEvents:this.updateEvents,events:a}),Object(p.jsx)(O,{updateNumberOfEvents:function(t){return e.updateNumberOfEvents(t)}}),this.state.loading?Object(p.jsx)(y,{}):"",Object(p.jsx)(j,{text:o}),Object(p.jsx)("h4",{children:"Events in each city"}),Object(p.jsxs)("div",{className:"data-vis-wrapper",children:[Object(p.jsx)(W,{events:a}),Object(p.jsx)(N.a,{height:400,children:Object(p.jsxs)(_.a,{margin:{top:20,right:20,bottom:20,left:20},children:[Object(p.jsx)(P.a,{}),Object(p.jsx)(z.a,{type:"category",dataKey:"city",name:"city"}),Object(p.jsx)(H.a,{type:"number",dataKey:"number",name:"number of events",allowDecimals:!1}),Object(p.jsx)(G.a,{cursor:{strokeDasharray:"3 3"}}),Object(p.jsx)(Y.a,{data:this.getData(),fill:"#8884d8"})]})})]}),Object(p.jsx)(v,{events:a,numberOfEvents:r}),Object(p.jsx)(k,{showWelcomeScreen:this.state.showWelcomeScreen,getAccessToken:function(){R()}})]})}}]),n}(a.Component),V=Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));function X(e,t){navigator.serviceWorker.register(e).then((function(e){e.onupdatefound=function(){var n=e.installing;null!=n&&(n.onstatechange=function(){"installed"===n.state&&(navigator.serviceWorker.controller?(console.log("New content is available and will be used when all tabs for this page are closed. See https://cra.link/PWA."),t&&t.onUpdate&&t.onUpdate(e)):(console.log("Content is cached for offline use."),t&&t.onSuccess&&t.onSuccess(e)))})}})).catch((function(e){console.error("Error during service worker registration:",e)}))}var Q=function(e){e&&e instanceof Function&&n.e(3).then(n.bind(null,365)).then((function(t){var n=t.getCLS,a=t.getFID,r=t.getFCP,o=t.getLCP,s=t.getTTFB;n(e),a(e),r(e),o(e),s(e)}))};n(187).config("07175dfa51824c39be6773ac580969b0").install(),s.a.render(Object(p.jsx)(r.a.StrictMode,{children:Object(p.jsx)(K,{})}),document.getElementById("root")),function(e){if("serviceWorker"in navigator){if(new URL("/meet",window.location.href).origin!==window.location.origin)return;window.addEventListener("load",(function(){var t="".concat("/meet","/service-worker.js");V?(!function(e,t){fetch(e,{headers:{"Service-Worker":"script"}}).then((function(n){var a=n.headers.get("content-type");404===n.status||null!=a&&-1===a.indexOf("javascript")?navigator.serviceWorker.ready.then((function(e){e.unregister().then((function(){window.location.reload()}))})):X(e,t)})).catch((function(){console.log("No internet connection found. App is running in offline mode.")}))}(t,e),navigator.serviceWorker.ready.then((function(){console.log("This web app is being served cache-first by a service worker. To learn more, visit https://cra.link/PWA")}))):X(t,e)}))}}(),Q()}},[[356,1,2]]]);
//# sourceMappingURL=main.388edc46.chunk.js.map