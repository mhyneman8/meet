(this.webpackJsonpmeet=this.webpackJsonpmeet||[]).push([[0],{190:function(e,t,n){},192:function(e,t,n){},194:function(e,t,n){},348:function(e,t,n){"use strict";n.r(t);var a=n(0),r=n.n(a),o=n(63),s=n.n(o),c=(n(190),n(25)),i=n.n(c),l=n(50),u=n(21),h=n(27),d=n(22),f=n(23),m=(n(192),n(2)),p=function(e){Object(d.a)(n,e);var t=Object(f.a)(n);function n(){var e;Object(u.a)(this,n);for(var a=arguments.length,r=new Array(a),o=0;o<a;o++)r[o]=arguments[o];return(e=t.call.apply(t,[this].concat(r))).state={summary:"",description:"",location:"",dateTime:"",timeZone:"",show:!1},e.handleShowButton=function(){!0===e.state.show?e.setState({show:!1}):e.setState({show:!0})},e}return Object(h.a)(n,[{key:"render",value:function(){var e=this,t=this.props.event;return Object(m.jsx)("div",{className:"event",children:Object(m.jsxs)("div",{className:"event-list",children:[Object(m.jsx)("h1",{className:"event-title",children:t.summary}),Object(m.jsx)("p",{className:"event-location",children:t.location}),Object(m.jsxs)("p",{className:"event-dateTime",children:["start: ",t.start.dateTime," - ",t.start.timeZone]}),Object(m.jsx)("button",{onClick:function(){return e.handleShowButton()},className:"details-btn",children:this.state.show?"Hide Details":"Show Details"}),!0===this.state.show&&Object(m.jsxs)("div",{className:"details",children:[Object(m.jsx)("h2",{children:"About Event: "}),Object(m.jsx)("p",{children:t.description})]})]})})}}]),n}(a.Component),v=function(e){Object(d.a)(n,e);var t=Object(f.a)(n);function n(){return Object(u.a)(this,n),t.apply(this,arguments)}return Object(h.a)(n,[{key:"render",value:function(){var e=this.props.events;return Object(m.jsx)("ul",{className:"EventList",children:e.map((function(e){return Object(m.jsx)("li",{children:Object(m.jsx)(p,{event:e})},e.id)}))})}}]),n}(a.Component),b=function(e){Object(d.a)(n,e);var t=Object(f.a)(n);function n(e){var a;return Object(u.a)(this,n),(a=t.call(this,e)).getStyle=function(){return{color:a.color}},a.color=null,a}return Object(h.a)(n,[{key:"render",value:function(){return Object(m.jsx)("div",{className:"Alert",children:Object(m.jsx)("p",{style:this.getStyle(),children:this.props.text})})}}]),n}(a.Component),j=function(e){Object(d.a)(n,e);var t=Object(f.a)(n);function n(e){var a;return Object(u.a)(this,n),(a=t.call(this,e)).color="blue",a}return n}(b),g=function(e){Object(d.a)(n,e);var t=Object(f.a)(n);function n(e){var a;return Object(u.a)(this,n),(a=t.call(this,e)).color="red",a}return n}(b),w=function(e){Object(d.a)(n,e);var t=Object(f.a)(n);function n(){var e;Object(u.a)(this,n);for(var a=arguments.length,r=new Array(a),o=0;o<a;o++)r[o]=arguments[o];return(e=t.call.apply(t,[this].concat(r))).state={query:"",locations:e.props.locations,suggestions:[],showSuggestions:void 0},e.handleInputChanged=function(t){var n=t.target.value;e.setState({showSuggestions:!0});var a=e.props.locations.filter((function(e){return e.toUpperCase().indexOf(n.toUpperCase())>-1}));if(0!==a.length)return e.setState({query:n,suggestions:a,infoText:""});e.setState({query:n,infoText:"We can't find that city. Please try another city."})},e.handleItemClicked=function(t){e.setState({query:t,suggestions:[]}),e.props.updateEvents(t)},e.handleClose=function(){e.setState({showSuggestions:!1})},e}return Object(h.a)(n,[{key:"render",value:function(){var e=this;return Object(m.jsxs)("div",{className:"CitySearch",children:[Object(m.jsx)("label",{children:"Search City:"}),Object(m.jsx)(j,{text:this.state.infoText}),Object(m.jsx)("input",{type:"text",className:"city",value:this.state.query,onChange:this.handleInputChanged,onFocus:function(){e.setState({showSuggestions:!0})}}),Object(m.jsxs)("ul",{className:"suggestions",style:this.state.showSuggestions?{}:{display:"none"},children:[Object(m.jsx)("span",{className:"close",onClick:function(){return e.handleClose()},children:"x"}),this.state.suggestions.map((function(t){return Object(m.jsx)("li",{onClick:function(){return e.handleItemClicked(t)},children:t},t)})),Object(m.jsx)("li",{onClick:function(){return e.handleItemClicked("all")},children:Object(m.jsx)("b",{children:"See all cities"})})]})]})}}]),n}(a.Component),O=n.p+"static/media/arrow.a4fcadc4.svg",x=function(e){Object(d.a)(n,e);var t=Object(f.a)(n);function n(){var e;Object(u.a)(this,n);for(var a=arguments.length,r=new Array(a),o=0;o<a;o++)r[o]=arguments[o];return(e=t.call.apply(t,[this].concat(r))).state={numberOfEvents:15},e.handleInputChanged=function(t){t.preventDefault(),console.log(t.target.value),e.setState({numberOfEvents:t.target.value}),console.log(e.state.numberOfEvents);var n=e.state.numberOfEvents;if(!(n<1||n>32))return e.setState({numberOfEvents:n,eventNumber:n,infoText:""});e.setState({infoText:"Enter a number between 1 and 32."}),e.props.updateNumberOfEvents(e.eventNumber)},e}return Object(h.a)(n,[{key:"render",value:function(){var e=this,t=this.state.numberOfEvents;return Object(m.jsxs)("div",{className:"NumberOfEvents",children:[Object(m.jsx)("label",{className:"number-label",children:"Number of Events:"}),Object(m.jsx)(g,{text:this.state.infoText}),Object(m.jsx)("input",{type:"number",id:"number-of-events",className:"number-events",value:t,onChange:function(t){return e.handleInputChanged(t)},placeholder:t}),Object(m.jsx)("button",{className:"arrow",children:Object(m.jsx)("img",{src:O,alt:"Enter",className:"arrow-btn",onClick:this.handleInputChanged})})]})}}]),n}(a.Component),y=n.p+"static/media/Spinner.ce63e495.svg",k=function(e){Object(d.a)(n,e);var t=Object(f.a)(n);function n(){return Object(u.a)(this,n),t.apply(this,arguments)}return Object(h.a)(n,[{key:"render",value:function(){return Object(m.jsx)("div",{className:"loader",children:Object(m.jsx)("img",{src:y,alt:"loading spinner"})})}}]),n}(a.Component);n(194);var S=function(e){return e.showWelcomeScreen?Object(m.jsxs)("div",{className:"WelcomeScreen",children:[Object(m.jsx)("h1",{className:"welcome",children:"Welcome to the Meet app"}),Object(m.jsx)("h4",{className:"wel-text",children:"Log in to see upcoming events around the world for full-stack developers"}),Object(m.jsx)("div",{className:"button_cont",align:"center",children:Object(m.jsxs)("div",{className:"google-btn",children:[Object(m.jsx)("div",{className:"google-icon-wrapper",children:Object(m.jsx)("img",{className:"google-icon",src:"https://upload.wikimedia.org/wikipedia/commons/5/53/Google_%22G%22_Logo.svg",alt:"Google sign-in"})}),Object(m.jsx)("button",{onClick:function(){e.getAccessToken()},rel:"nofollow noopener",className:"btn-text",children:Object(m.jsx)("b",{children:"Sign in with google"})})]})}),Object(m.jsx)("a",{href:"https://mhyneman8.github.io/meet/privacy.html",rel:"nofollow noonpener",children:"Privacy Policy"})]}):null},N=n(180),T=[{kind:"calendar#event",etag:'"3181161784712000"',id:"4eahs9ghkhrvkld72hogu9ph3e_20200519T140000Z",status:"confirmed",htmlLink:"https://www.google.com/calendar/event?eid=NGVhaHM5Z2hraHJ2a2xkNzJob2d1OXBoM2VfMjAyMDA1MTlUMTQwMDAwWiBmdWxsc3RhY2t3ZWJkZXZAY2FyZWVyZm91bmRyeS5jb20",created:"2020-05-19T19:17:46.000Z",updated:"2020-05-27T12:01:32.356Z",summary:"Learn JavaScript",description:"Have you wondered how you can ask Google to show you the list of the top ten must-see places in London? And how Google presents you the list? How can you submit the details of an application? Well, JavaScript is doing these. :) \n\nJavascript offers interactivity to a dull, static website. Come, learn JavaScript with us and make those beautiful websites.",location:"London, UK",creator:{email:"fullstackwebdev@careerfoundry.com",self:!0},organizer:{email:"fullstackwebdev@careerfoundry.com",self:!0},start:{dateTime:"2020-05-19T16:00:00+02:00",timeZone:"Europe/Berlin"},end:{dateTime:"2020-05-19T17:00:00+02:00",timeZone:"Europe/Berlin"},recurringEventId:"4eahs9ghkhrvkld72hogu9ph3e",originalStartTime:{dateTime:"2020-05-19T16:00:00+02:00",timeZone:"Europe/Berlin"},iCalUID:"4eahs9ghkhrvkld72hogu9ph3e@google.com",sequence:0,reminders:{useDefault:!0},eventType:"default"},{kind:"calendar#event",etag:'"3181159875584000"',id:"3qtd6uscq4tsi6gc7nmmtpqlct_20200520T120000Z",status:"confirmed",htmlLink:"https://www.google.com/calendar/event?eid=M3F0ZDZ1c2NxNHRzaTZnYzdubW10cHFsY3RfMjAyMDA1MjBUMTIwMDAwWiBmdWxsc3RhY2t3ZWJkZXZAY2FyZWVyZm91bmRyeS5jb20",created:"2020-05-19T19:14:30.000Z",updated:"2020-05-27T11:45:37.792Z",summary:"React is Fun",description:"Love HTML, CSS, and JS? Want to become a cool front-end developer? \n\nReact is one of the most popular front-end frameworks. There is a huge number of job openings for React developers in most cities. \n\nJoin us in our free React training sessions and give your career a new direction. ",location:"Berlin, Germany",creator:{email:"fullstackwebdev@careerfoundry.com",self:!0},organizer:{email:"fullstackwebdev@careerfoundry.com",self:!0},start:{dateTime:"2020-05-20T14:00:00+02:00",timeZone:"Europe/Berlin"},end:{dateTime:"2020-05-20T15:00:00+02:00",timeZone:"Europe/Berlin"},recurringEventId:"3qtd6uscq4tsi6gc7nmmtpqlct",originalStartTime:{dateTime:"2020-05-20T14:00:00+02:00",timeZone:"Europe/Berlin"},iCalUID:"3qtd6uscq4tsi6gc7nmmtpqlct@google.com",sequence:0,reminders:{useDefault:!0},eventType:"default"}];T=JSON.parse(JSON.stringify(T));var C=n(72),E=n.n(C),W=n(113),Z=n.n(W),A=function(){if(window.history.pushState&&window.location.pathname){var e=window.location.protocol+"//"+window.location.host+window.location.pathname;window.history.pushState("","",e)}else e=window.location.protocol+"//"+window.location.host,window.history.pushState("","",e)},I=function(){var e=Object(l.a)(i.a.mark((function e(t){var n;return i.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,fetch("https://www.googleapis.com/oauth2/v1/tokeninfo?access_token=".concat(t)).then((function(e){return e.json()})).catch((function(e){return e.json()}));case 2:return n=e.sent,e.abrupt("return",n);case 4:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}(),D=function(e){var t=e.map((function(e){return e.location}));return Object(N.a)(new Set(t))},L=function(){var e=Object(l.a)(i.a.mark((function e(){var t,n,a,r,o;return i.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:if(E.a.start(),!window.location.href.startsWith("http://localhost")){e.next=4;break}return E.a.done(),e.abrupt("return",T);case 4:if(navigator.onLine){e.next=8;break}return t=localStorage.getItem("lastEvents"),E.a.done(),e.abrupt("return",t?JSON.parse(t).events:[]);case 8:return e.next=10,M();case 10:if(!(n=e.sent)){e.next=20;break}return A(),a="https://k3o9f64iji.execute-api.us-west-2.amazonaws.com/dev/api/get-events/"+n,e.next=16,Z.a.get(a);case 16:return(r=e.sent).data&&(o=D(r.data.events),localStorage.setItem("lastEvents",JSON.stringify(r.data)),localStorage.setItem("locations",JSON.stringify(o))),E.a.done(),e.abrupt("return",r.data.events);case 20:case"end":return e.stop()}}),e)})));return function(){return e.apply(this,arguments)}}(),M=function(){var e=Object(l.a)(i.a.mark((function e(){var t,n,a,r,o,s;return i.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:if(t=localStorage.getItem("access_token"),e.t0=t,!e.t0){e.next=6;break}return e.next=5,I(t);case 5:e.t0=e.sent;case 6:if(n=e.t0,t&&!n.error){e.next=21;break}return e.next=10,localStorage.removeItem("access_token");case 10:return a=new URLSearchParams(window.location.search),e.next=13,a.get("code");case 13:if(r=e.sent){e.next=20;break}return e.next=17,Z.a.get("https://k3o9f64iji.execute-api.us-west-2.amazonaws.com/dev/api/get-auth-url");case 17:return o=e.sent,s=o.data.authUrl,e.abrupt("return",window.location.href=s);case 20:return e.abrupt("return",r&&J(r));case 21:return e.abrupt("return",t);case 22:case"end":return e.stop()}}),e)})));return function(){return e.apply(this,arguments)}}(),J=function(){var e=Object(l.a)(i.a.mark((function e(t){var n,a,r;return i.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return n=encodeURIComponent(t),e.next=3,fetch("https://k3o9f64iji.execute-api.us-west-2.amazonaws.com/dev/api/token/"+n).then((function(e){return e.json()})).catch((function(e){return e}));case 3:return a=e.sent,(r=a.access_token)&&localStorage.setItem("access_token",r),e.abrupt("return",r);case 7:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}(),q=n(350),B=n(351),R=n(355),U=n(176),_=n(177),F=n(75),P=n(181),z=function(e){Object(d.a)(n,e);var t=Object(f.a)(n);function n(){var e;Object(u.a)(this,n);for(var a=arguments.length,r=new Array(a),o=0;o<a;o++)r[o]=arguments[o];return(e=t.call.apply(t,[this].concat(r))).state={events:[],locations:[],numberOfEvents:15,currentCity:"all",loading:!0,showWelcomeScreen:void 0},e.updateEvents=function(t,n){console.log("update events"),L().then((function(a){var r="all"===t?a.slice(0,n):a.filter((function(e){return e.location===t}));e.mounted&&e.setState({events:r.slice(0,n),currentCity:t})}))},e.getData=function(){var t=e.state,n=t.locations,a=t.events;return n.map((function(e){var t=a.filter((function(t){return t.location===e})).length;return{city:e.split(", ").shift(),number:t}}))},e}return Object(h.a)(n,[{key:"updateNumberOfEvents",value:function(e){console.log("update num of events"),this.setState({numberOfEvents:e});var t=this.state.currentCity;this.updateEvents(t,e)}},{key:"componentDidMount",value:function(){var e=Object(l.a)(i.a.mark((function e(){var t,n,a,r,o,s=this;return i.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return t=this.state.numberOfEvents,this.mounted=!0,n=localStorage.getItem("access_token"),e.next=5,I(n);case 5:if(!e.sent.error){e.next=9;break}e.t0=!1,e.next=10;break;case 9:e.t0=!0;case 10:if(a=e.t0,r=new URLSearchParams(window.location.search),o=r.get("code"),this.setState({showWelcomeScreen:!(o||a)}),!o&&!a||!this.mounted){e.next=21;break}if(L().then((function(e){s.mounted&&s.setState({events:e.slice(0,t),locations:D(e),loading:!1})})),navigator.onLine){e.next=20;break}this.setState({infoText:"You are offline. Events displayed may not be up-to-date"}),e.next=21;break;case 20:return e.abrupt("return",this.setState({infoText:""}));case 21:case"end":return e.stop()}}),e,this)})));return function(){return e.apply(this,arguments)}}()},{key:"render",value:function(){return void 0===this.state.showWelcomeScreen?Object(m.jsx)("div",{className:"App"}):Object(m.jsxs)("div",{className:"App",children:[Object(m.jsx)("h1",{className:"title",children:"Meet App"}),Object(m.jsx)(w,{locations:this.state.locations,updateEvents:this.updateEvents,events:this.state.events}),Object(m.jsx)(x,{updateNumberOfEvents:this.updateNumberOfEvents}),this.state.loading?Object(m.jsx)(k,{}):"",Object(m.jsx)(j,{text:this.state.infoText}),Object(m.jsx)("h4",{children:"Events in each city"}),Object(m.jsx)("div",{className:"data-vis-wrapper",children:Object(m.jsx)(q.a,{height:400,children:Object(m.jsxs)(B.a,{margin:{top:20,right:20,bottom:20,left:20},children:[Object(m.jsx)(R.a,{}),Object(m.jsx)(U.a,{type:"category",dataKey:"city",name:"city"}),Object(m.jsx)(_.a,{type:"number",dataKey:"number",name:"number of events",allowDecimals:!1}),Object(m.jsx)(F.a,{cursor:{strokeDasharray:"3 3"}}),Object(m.jsx)(P.a,{data:this.getData(),fill:"#8884d8"})]})})}),Object(m.jsx)(v,{events:this.state.events,numberOfEvents:this.state.numberOfEvents}),Object(m.jsx)(S,{showWelcomeScreen:this.state.showWelcomeScreen,getAccessToken:function(){M()}})]})}}]),n}(a.Component),H=Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));function G(e,t){navigator.serviceWorker.register(e).then((function(e){e.onupdatefound=function(){var n=e.installing;null!=n&&(n.onstatechange=function(){"installed"===n.state&&(navigator.serviceWorker.controller?(console.log("New content is available and will be used when all tabs for this page are closed. See https://cra.link/PWA."),t&&t.onUpdate&&t.onUpdate(e)):(console.log("Content is cached for offline use."),t&&t.onSuccess&&t.onSuccess(e)))})}})).catch((function(e){console.error("Error during service worker registration:",e)}))}var Y=function(e){e&&e instanceof Function&&n.e(3).then(n.bind(null,357)).then((function(t){var n=t.getCLS,a=t.getFID,r=t.getFCP,o=t.getLCP,s=t.getTTFB;n(e),a(e),r(e),o(e),s(e)}))};n(178).config("07175dfa51824c39be6773ac580969b0").install(),s.a.render(Object(m.jsx)(r.a.StrictMode,{children:Object(m.jsx)(z,{})}),document.getElementById("root")),function(e){if("serviceWorker"in navigator){if(new URL("/meet",window.location.href).origin!==window.location.origin)return;window.addEventListener("load",(function(){var t="".concat("/meet","/service-worker.js");H?(!function(e,t){fetch(e,{headers:{"Service-Worker":"script"}}).then((function(n){var a=n.headers.get("content-type");404===n.status||null!=a&&-1===a.indexOf("javascript")?navigator.serviceWorker.ready.then((function(e){e.unregister().then((function(){window.location.reload()}))})):G(e,t)})).catch((function(){console.log("No internet connection found. App is running in offline mode.")}))}(t,e),navigator.serviceWorker.ready.then((function(){console.log("This web app is being served cache-first by a service worker. To learn more, visit https://cra.link/PWA")}))):G(t,e)}))}}(),Y()}},[[348,1,2]]]);
//# sourceMappingURL=main.eeeaa205.chunk.js.map