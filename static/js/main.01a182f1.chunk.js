(this.webpackJsonpmeet=this.webpackJsonpmeet||[]).push([[0],{128:function(e,t,n){},129:function(e,t,n){},204:function(e,t,n){},208:function(e,t,n){},209:function(e,t,n){},361:function(e,t,n){"use strict";n.r(t);var a=n(0),r=n.n(a),o=n(34),s=n.n(o),c=(n(204),n(26)),i=n.n(c),l=n(53),u=n(22),h=n(28),d=n(23),f=n(24),m=n(48),b=(n(206),n(128),n(129),n(2)),p=function(e){Object(d.a)(n,e);var t=Object(f.a)(n);function n(){var e;Object(u.a)(this,n);for(var a=arguments.length,r=new Array(a),o=0;o<a;o++)r[o]=arguments[o];return(e=t.call.apply(t,[this].concat(r))).state={summary:"",description:"",location:"",dateTime:"",timeZone:"",show:!1},e.handleShowButton=function(){!0===e.state.show?e.setState({show:!1}):e.setState({show:!0})},e}return Object(h.a)(n,[{key:"render",value:function(){var e=this,t=this.props.event,n=new Date(t.start.dateTime).toLocaleTimeString(),a=new Date(t.start.dateTime).toLocaleDateString();return Object(b.jsx)("div",{className:"event",children:Object(b.jsxs)("div",{className:"event-list",children:[Object(b.jsx)("h1",{className:"event-title",children:t.summary}),Object(b.jsx)("p",{className:"event-location",children:t.location}),Object(b.jsxs)("p",{className:"event-dateTime",children:["start: ",n," - ",t.start.timeZone]}),Object(b.jsx)("p",{children:a}),Object(b.jsx)("button",{onClick:function(){return e.handleShowButton()},className:"details-btn",children:this.state.show?"Hide Details":"Show Details"}),!0===this.state.show&&Object(b.jsxs)("div",{className:"details",children:[Object(b.jsx)("h2",{children:"About Event: "}),Object(b.jsx)("p",{children:t.description})]})]})})}}]),n}(a.Component),v=function(e){Object(d.a)(n,e);var t=Object(f.a)(n);function n(){return Object(u.a)(this,n),t.apply(this,arguments)}return Object(h.a)(n,[{key:"render",value:function(){var e=this.props.events;return Object(b.jsx)("ul",{className:"EventList",children:e.map((function(e){return Object(b.jsx)("li",{children:Object(b.jsx)(p,{event:e})},e.id)}))})}}]),n}(a.Component),j=function(e){Object(d.a)(n,e);var t=Object(f.a)(n);function n(e){var a;return Object(u.a)(this,n),(a=t.call(this,e)).getStyle=function(){return{color:a.color}},a.color=null,a}return Object(h.a)(n,[{key:"render",value:function(){return Object(b.jsx)("div",{className:"Alert",children:Object(b.jsx)("p",{style:this.getStyle(),children:this.props.text})})}}]),n}(a.Component),g=function(e){Object(d.a)(n,e);var t=Object(f.a)(n);function n(e){var a;return Object(u.a)(this,n),(a=t.call(this,e)).color="blue",a}return n}(j),w=function(e){Object(d.a)(n,e);var t=Object(f.a)(n);function n(e){var a;return Object(u.a)(this,n),(a=t.call(this,e)).color="red",a}return n}(j),O=function(e){Object(d.a)(n,e);var t=Object(f.a)(n);function n(){var e;Object(u.a)(this,n);for(var a=arguments.length,r=new Array(a),o=0;o<a;o++)r[o]=arguments[o];return(e=t.call.apply(t,[this].concat(r))).state={query:"",suggestions:[],showSuggestions:!1},e.handleInputChanged=function(t){var n=t.target.value;e.setState({showSuggestions:!0});var a=e.props.locations.filter((function(e){return e.toUpperCase().indexOf(n.toUpperCase())>-1}));0===a.length?e.setState({query:n,infoText:"We can't find that city. Please try another city."}):e.setState({query:n,suggestions:a,infoText:""})},e.handleItemClicked=function(t){e.setState({query:t,infoText:"",showSuggestions:!1}),e.props.updateCitySearch(t)},e.handleClose=function(){e.setState({showSuggestions:!1})},e}return Object(h.a)(n,[{key:"render",value:function(){var e=this;return Object(b.jsxs)("div",{className:"CitySearch",children:[Object(b.jsx)("label",{children:"Search City:"}),Object(b.jsx)(g,{text:this.state.infoText}),Object(b.jsx)("input",{type:"text",className:"city",value:this.state.query,onChange:this.handleInputChanged,onFocus:function(){e.setState({showSuggestions:!0})},onBlur:function(){e.setState({showSuggestions:!1})}}),Object(b.jsxs)("ul",{className:"suggestions",style:this.state.showSuggestions?{}:{display:"none"},children:[this.state.suggestions.map((function(t){return Object(b.jsx)("li",{onClick:function(){return e.handleItemClicked(t)},children:t},t)})),Object(b.jsx)("li",{onClick:function(){return e.handleItemClicked("all")},children:Object(b.jsx)("b",{children:"See all cities"})},"all")]})]})}}]),n}(a.Component),x=(n(208),function(e){Object(d.a)(n,e);var t=Object(f.a)(n);function n(){var e;Object(u.a)(this,n);for(var a=arguments.length,r=new Array(a),o=0;o<a;o++)r[o]=arguments[o];return(e=t.call.apply(t,[this].concat(r))).state={numberOfEvents:14,errorText:""},e.handleInputChanged=function(t){var n=t.target.value;n<1||n>32?e.setState({numberOfEvents:"",errorText:"Enter a number between 1 and 32."}):(e.setState({numberOfEvents:n,errorText:""}),e.props.updateNumberOfEvents(n))},e}return Object(h.a)(n,[{key:"render",value:function(){var e=this,t=this.state.numberOfEvents;return Object(b.jsxs)("div",{className:"NumberOfEvents",children:[Object(b.jsx)("label",{className:"number-label",children:"Number of Events:"}),Object(b.jsx)(w,{text:this.state.errorText}),Object(b.jsx)("input",{type:"number",id:"number-of-events",className:"number-events",value:t,onChange:function(t){return e.handleInputChanged(t)},placeholder:t})]})}}]),n}(a.Component)),y=n.p+"static/media/Spinner.b4e24b01.svg",S=function(e){Object(d.a)(n,e);var t=Object(f.a)(n);function n(){return Object(u.a)(this,n),t.apply(this,arguments)}return Object(h.a)(n,[{key:"render",value:function(){return Object(b.jsx)("div",{className:"loader",children:Object(b.jsx)("img",{src:y,alt:"loading spinner"})})}}]),n}(a.Component);n(209);var k=function(e){return e.showWelcomeScreen?Object(b.jsxs)("div",{className:"WelcomeScreen",children:[Object(b.jsxs)("div",{className:"welcome-text",children:[Object(b.jsx)("h3",{className:"welcome",children:"Welcome to"}),Object(b.jsx)("h1",{className:"welcome2",children:"Meet app"})]}),Object(b.jsxs)("div",{className:"welcome-para",children:[Object(b.jsx)("h4",{className:"wel-text",children:"Log in to see upcoming events around the world for full-stack developers"}),Object(b.jsxs)("div",{className:"button_cont",align:"center",children:[Object(b.jsxs)("div",{className:"google-btn",children:[Object(b.jsx)("div",{className:"google-icon-wrapper",children:Object(b.jsx)("img",{className:"google-icon",src:"https://upload.wikimedia.org/wikipedia/commons/5/53/Google_%22G%22_Logo.svg",alt:"Google sign-in"})}),Object(b.jsx)("button",{onClick:function(){e.getAccessToken()},rel:"nofollow noopener",className:"btn-text",children:Object(b.jsx)("b",{children:"Sign in with google"})})]})," "]})," ",Object(b.jsx)("a",{href:"https://mhyneman8.github.io/meet/privacy.html",rel:"nofollow noonpener",children:"Privacy Policy"})]})," "]}):null},N=n(18),T=n(363),C=n(370),E=n(184),W=n(95),Z=function(e){var t=e.events,n=Object(a.useState)([]),r=Object(N.a)(n,2),o=r[0],s=r[1],c=["React","JavaScript","Node","jQuery","Angular JS"],i=["#61a0af","#342a21","#FF715b","#592e83","#679436"];return Object(a.useEffect)((function(){s((function(){return function(){var e=c.map((function(e){var n=t.filter((function(t){return t.summary.split(" ").includes(e)})).length;return{name:e,value:n}}));return e.filter((function(e){return e.value}))}()}))}),[t]),Object(b.jsx)(T.a,{height:400,children:Object(b.jsx)(C.a,{width:400,height:400,children:Object(b.jsx)(E.a,{data:o,cx:"50%",cy:"50%",labelLine:!1,innerRadius:30,label:function(e){var t=e.name,n=e.percent;return"".concat(t," ").concat((100*n).toFixed(0),"%")},outerRadius:90,dataKey:"value",children:o.map((function(e,t){return Object(b.jsx)(W.a,{fill:i[t%i.length]},"cell-".concat(t))}))})})})},A=n(193),I=[{kind:"calendar#event",etag:'"3181161784712000"',id:"4eahs9ghkhrvkld72hogu9ph3e_20200519T140000Z",status:"confirmed",htmlLink:"https://www.google.com/calendar/event?eid=NGVhaHM5Z2hraHJ2a2xkNzJob2d1OXBoM2VfMjAyMDA1MTlUMTQwMDAwWiBmdWxsc3RhY2t3ZWJkZXZAY2FyZWVyZm91bmRyeS5jb20",created:"2020-05-19T19:17:46.000Z",updated:"2020-05-27T12:01:32.356Z",summary:"Learn JavaScript",description:"Have you wondered how you can ask Google to show you the list of the top ten must-see places in London? And how Google presents you the list? How can you submit the details of an application? Well, JavaScript is doing these. :) \n\nJavascript offers interactivity to a dull, static website. Come, learn JavaScript with us and make those beautiful websites.",location:"London, UK",creator:{email:"fullstackwebdev@careerfoundry.com",self:!0},organizer:{email:"fullstackwebdev@careerfoundry.com",self:!0},start:{dateTime:"2020-05-19T16:00:00+02:00",timeZone:"Europe/Berlin"},end:{dateTime:"2020-05-19T17:00:00+02:00",timeZone:"Europe/Berlin"},recurringEventId:"4eahs9ghkhrvkld72hogu9ph3e",originalStartTime:{dateTime:"2020-05-19T16:00:00+02:00",timeZone:"Europe/Berlin"},iCalUID:"4eahs9ghkhrvkld72hogu9ph3e@google.com",sequence:0,reminders:{useDefault:!0},eventType:"default"},{kind:"calendar#event",etag:'"3181159875584000"',id:"3qtd6uscq4tsi6gc7nmmtpqlct_20200520T120000Z",status:"confirmed",htmlLink:"https://www.google.com/calendar/event?eid=M3F0ZDZ1c2NxNHRzaTZnYzdubW10cHFsY3RfMjAyMDA1MjBUMTIwMDAwWiBmdWxsc3RhY2t3ZWJkZXZAY2FyZWVyZm91bmRyeS5jb20",created:"2020-05-19T19:14:30.000Z",updated:"2020-05-27T11:45:37.792Z",summary:"React is Fun",description:"Love HTML, CSS, and JS? Want to become a cool front-end developer? \n\nReact is one of the most popular front-end frameworks. There is a huge number of job openings for React developers in most cities. \n\nJoin us in our free React training sessions and give your career a new direction. ",location:"Berlin, Germany",creator:{email:"fullstackwebdev@careerfoundry.com",self:!0},organizer:{email:"fullstackwebdev@careerfoundry.com",self:!0},start:{dateTime:"2020-05-20T14:00:00+02:00",timeZone:"Europe/Berlin"},end:{dateTime:"2020-05-20T15:00:00+02:00",timeZone:"Europe/Berlin"},recurringEventId:"3qtd6uscq4tsi6gc7nmmtpqlct",originalStartTime:{dateTime:"2020-05-20T14:00:00+02:00",timeZone:"Europe/Berlin"},iCalUID:"3qtd6uscq4tsi6gc7nmmtpqlct@google.com",sequence:0,reminders:{useDefault:!0},eventType:"default"}];I=JSON.parse(JSON.stringify(I));var L=n(78),B=n.n(L),D=n(123),J=n.n(D),M=function(){if(window.history.pushState&&window.location.pathname){var e=window.location.protocol+"//"+window.location.host+window.location.pathname;window.history.pushState("","",e)}else e=window.location.protocol+"//"+window.location.host,window.history.pushState("","",e)},R=function(){var e=Object(l.a)(i.a.mark((function e(t){var n;return i.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,fetch("https://www.googleapis.com/oauth2/v1/tokeninfo?access_token=".concat(t)).then((function(e){return e.json()})).catch((function(e){return e.json()}));case 2:return n=e.sent,console.log(t),e.abrupt("return",n);case 5:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}(),q=function(e){var t=e.map((function(e){return e.location}));return Object(A.a)(new Set(t))},U=function(){var e=Object(l.a)(i.a.mark((function e(){var t,n,a,r,o;return i.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:if(B.a.start(),!window.location.href.startsWith("http://localhost")){e.next=4;break}return B.a.done(),e.abrupt("return",I);case 4:if(navigator.onLine){e.next=8;break}return t=localStorage.getItem("lastEvents"),B.a.done(),e.abrupt("return",t?JSON.parse(t).events:[]);case 8:return e.next=10,F();case 10:if(!(n=e.sent)){e.next=20;break}return M(),a="https://k3o9f64iji.execute-api.us-west-2.amazonaws.com/dev/api/get-events/"+n,e.next=16,J.a.get(a);case 16:return(r=e.sent).data&&(o=q(r.data.events),localStorage.setItem("lastEvents",JSON.stringify(r.data)),localStorage.setItem("locations",JSON.stringify(o))),B.a.done(),e.abrupt("return",r.data.events);case 20:case"end":return e.stop()}}),e)})));return function(){return e.apply(this,arguments)}}(),F=function(){var e=Object(l.a)(i.a.mark((function e(){var t,n,a,r,o,s;return i.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:if(t=localStorage.getItem("access_token"),e.t0=t,!e.t0){e.next=6;break}return e.next=5,R(t);case 5:e.t0=e.sent;case 6:if(n=e.t0,t&&!n.error){e.next=21;break}return e.next=10,localStorage.removeItem("access_token");case 10:return a=new URLSearchParams(window.location.search),e.next=13,a.get("code");case 13:if(r=e.sent){e.next=20;break}return e.next=17,J.a.get("https://k3o9f64iji.execute-api.us-west-2.amazonaws.com/dev/api/get-auth-url");case 17:return o=e.sent,s=o.data.authUrl,e.abrupt("return",window.location.href=s);case 20:return e.abrupt("return",r&&_(r));case 21:return e.abrupt("return",t);case 22:case"end":return e.stop()}}),e)})));return function(){return e.apply(this,arguments)}}(),_=function(){var e=Object(l.a)(i.a.mark((function e(t){var n,a,r;return i.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return n=encodeURIComponent(t),e.next=3,fetch("https://k3o9f64iji.execute-api.us-west-2.amazonaws.com/dev/api/token/"+n).then((function(e){return e.json()})).catch((function(e){return e}));case 3:return a=e.sent,(r=a.access_token)&&localStorage.setItem("access_token",r),e.abrupt("return",r);case 7:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}(),H=n(367),P=n(368),z=n(189),Y=n(190),G=n(79),K=n(194),V=function(e){Object(d.a)(n,e);var t=Object(f.a)(n);function n(){var e;Object(u.a)(this,n);for(var a=arguments.length,r=new Array(a),o=0;o<a;o++)r[o]=arguments[o];return(e=t.call.apply(t,[this].concat(r))).state={events:[],locations:[],numberOfEvents:14,currentCity:"All",loading:!0,showWelcomeScreen:void 0},e.updateEvents=function(t,n){console.log("events"),U().then((function(a){var r="all"===t?a.slice(0,n):a.filter((function(e){return e.location===t}));e.setState({events:r.slice(0,n),currentCity:t,numberOfEvents:n})}))},e.getData=function(){var t=e.state,n=t.locations,a=t.events;return n.map((function(e){var t=a.filter((function(t){return t.location===e})).length;return{city:e.split(", ").shift(),number:t}}))},e}return Object(h.a)(n,[{key:"updateCitySearch",value:function(e){console.log("CitySearch"),this.setState({currentCity:e});var t=this.state.numberOfEvents;this.updateEvents(e,t)}},{key:"updateNumberOfEvents",value:function(e){console.log("NumberOfEvents"),this.setState({numberOfEvents:e});var t=this.state.currentCity;this.updateEvents(t,e)}},{key:"componentDidMount",value:function(){var e=Object(l.a)(i.a.mark((function e(){var t,n,a,r,o,s=this;return i.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return t=this.state.numberOfEvents,this.mounted=!0,n=localStorage.getItem("access_token"),e.next=5,R(n);case 5:if(!e.sent.error){e.next=9;break}e.t0=!1,e.next=10;break;case 9:e.t0=!0;case 10:a=e.t0,r=new URLSearchParams(window.location.search),o=r.get("code"),this.setState({showWelcomeScreen:!(o||a)}),(o||a)&&this.mounted&&U().then((function(e){s.mounted&&s.setState({events:e.slice(0,t),locations:q(e),loading:!1})})),navigator.onLine?this.setState({infoText:""}):this.setState({infoText:"You are offline. Events displayed may not be up-to-date"});case 16:case"end":return e.stop()}}),e,this)})));return function(){return e.apply(this,arguments)}}()},{key:"componentWillUnmount",value:function(){this.mounted=!1}},{key:"render",value:function(){var e=this;return void 0===this.state.showWelcomeScreen?Object(b.jsx)("div",{className:"App"}):Object(b.jsxs)("div",{className:"App",children:[Object(b.jsxs)("div",{className:"title",children:[Object(b.jsx)("h1",{className:"title-text",children:"Meet App"}),Object(b.jsx)(O,{updateCitySearch:function(t){return e.updateCitySearch(t)},locations:this.state.locations})]}),Object(b.jsx)(x,{updateNumberOfEvents:function(t){return e.updateNumberOfEvents(t)}}),this.state.loading?Object(b.jsx)(S,{}):"",navigator.onLine?"":Object(b.jsx)(g,{text:"You are currently offline. The data shown may not be current."}),Object(b.jsx)("h4",{className:"mt-4",children:"Events in each city"}),Object(b.jsxs)(m.a,{children:[Object(b.jsxs)(m.a.Item,{eventKey:"0",children:[Object(b.jsxs)(m.a.Header,{children:["View Number of Events in ",this.state.currentCity]}),Object(b.jsx)(m.a.Body,{children:Object(b.jsx)(T.a,{height:300,width:400,children:Object(b.jsxs)(H.a,{margin:{top:20,right:20,bottom:20,left:0},children:[Object(b.jsx)(P.a,{}),Object(b.jsx)(z.a,{type:"category",dataKey:"city",name:"city"}),Object(b.jsx)(Y.a,{type:"number",dataKey:"number",name:"number of events"}),Object(b.jsx)(G.a,{cursor:{strokeDasharray:"3 3"}}),Object(b.jsx)(K.a,{data:this.getData(),fill:"#ff715b"})]})})})]}),Object(b.jsxs)(m.a.Item,{eventKey:"1",children:[Object(b.jsxs)(m.a.Header,{className:"font-weight-bold",children:["View Most Popular Types of Events in"," ",this.state.currentCity]}),Object(b.jsx)(m.a.Body,{children:Object(b.jsx)(Z,{events:this.state.events})})]})]}),Object(b.jsx)(v,{events:this.state.events}),Object(b.jsx)(k,{showWelcomeScreen:this.state.showWelcomeScreen,getAccessToken:function(){F()}})]})}}]),n}(a.Component),X=Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));function Q(e,t){navigator.serviceWorker.register(e).then((function(e){e.onupdatefound=function(){var n=e.installing;null!=n&&(n.onstatechange=function(){"installed"===n.state&&(navigator.serviceWorker.controller?(console.log("New content is available and will be used when all tabs for this page are closed. See https://cra.link/PWA."),t&&t.onUpdate&&t.onUpdate(e)):(console.log("Content is cached for offline use."),t&&t.onSuccess&&t.onSuccess(e)))})}})).catch((function(e){console.error("Error during service worker registration:",e)}))}var $=function(e){e&&e instanceof Function&&n.e(3).then(n.bind(null,371)).then((function(t){var n=t.getCLS,a=t.getFID,r=t.getFCP,o=t.getLCP,s=t.getTTFB;n(e),a(e),r(e),o(e),s(e)}))};n(191).config("07175dfa51824c39be6773ac580969b0").install(),s.a.render(Object(b.jsx)(r.a.StrictMode,{children:Object(b.jsx)(V,{})}),document.getElementById("root")),function(e){if("serviceWorker"in navigator){if(new URL("/meet",window.location.href).origin!==window.location.origin)return;window.addEventListener("load",(function(){var t="".concat("/meet","/service-worker.js");X?(!function(e,t){fetch(e,{headers:{"Service-Worker":"script"}}).then((function(n){var a=n.headers.get("content-type");404===n.status||null!=a&&-1===a.indexOf("javascript")?navigator.serviceWorker.ready.then((function(e){e.unregister().then((function(){window.location.reload()}))})):Q(e,t)})).catch((function(){console.log("No internet connection found. App is running in offline mode.")}))}(t,e),navigator.serviceWorker.ready.then((function(){console.log("This web app is being served cache-first by a service worker. To learn more, visit https://cra.link/PWA")}))):Q(t,e)}))}}(),$()}},[[361,1,2]]]);
//# sourceMappingURL=main.01a182f1.chunk.js.map