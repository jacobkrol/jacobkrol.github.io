(this.webpackJsonpkroljs=this.webpackJsonpkroljs||[]).push([[0],[,,,,,,,,,,function(e,t,a){e.exports=a.p+"static/media/disk-packing.2d18db29.gif"},,,,,,,,,,function(e,t,a){e.exports=a.p+"static/media/french-club-example.b4ce68a2.png"},function(e,t,a){e.exports=a.p+"static/media/waves-example.f6b14e1e.gif"},function(e,t,a){e.exports=a.p+"static/media/trifolium-mechanism.61d14dbf.gif"},,,,,,,,,,,,function(e,t,a){e.exports=a.p+"static/media/uic-full-logo-2.a3c71970.png"},function(e,t,a){e.exports=a.p+"static/media/chicago-uic-small-3.22009885.jpg"},function(e,t,a){e.exports=a.p+"static/media/jacob-3.cd54f089.jpg"},function(e,t,a){e.exports=a.p+"static/media/afa-group.8aab9e00.jpg"},,function(e,t,a){e.exports=a.p+"static/media/maze-generator.9b3cf548.gif"},function(e,t,a){e.exports=a.p+"static/media/circle-growth.1ff8849e.gif"},function(e,t,a){e.exports=a.p+"static/media/dynamic-ball-pit.5b895e20.gif"},function(e,t,a){e.exports=a.p+"static/media/asteroids.6455f3ac.gif"},function(e,t,a){e.exports=a.p+"static/media/snake.348288bd.gif"},function(e,t,a){e.exports=a.p+"static/media/smove.3d6d707c.gif"},function(e,t,a){e.exports=a.p+"static/media/lp-timer.b2ba75af.png"},function(e,t,a){e.exports=a.p+"static/media/epa-logo.93e9095d.png"},function(e,t,a){e.exports=a.p+"static/media/scoreboard.bee97041.png"},function(e,t,a){e.exports=a.p+"static/media/split-the-bill-2.a5043c8d.jpg"},function(e,t,a){e.exports=a.p+"static/media/chicago-uic-small-2.a6a2d2d3.png"},function(e,t,a){e.exports=a.p+"static/media/zoommates.9858e3dd.png"},function(e,t,a){e.exports=a.p+"static/media/collatz-tree.0c3414af.gif"},function(e,t,a){e.exports=a.p+"static/media/js-gibberish.313393c2.png"},function(e,t,a){e.exports=a.p+"static/media/colab-photo.ade63139.jpg"},function(e,t,a){e.exports=a.p+"static/media/cornell-paper-2.6ad3a1fe.png"},function(e,t,a){e.exports=a.p+"static/media/uic-today-1.201bbaf9.png"},function(e,t,a){e.exports=a.p+"static/media/pap-stem-poster.fda9991c.pdf"},function(e,t,a){e.exports=a.p+"static/media/capstone-report.961fdbb8.pdf"},,function(e,t,a){e.exports=a.p+"static/media/rotary-phones-1280.d4c4337b.jpg"},function(e,t,a){e.exports=a.p+"static/media/map-lost.3e6078f4.jpg"},function(e,t,a){e.exports=a(86)},,,,,function(e,t,a){},,,,,,function(e,t,a){},function(e,t,a){},function(e,t,a){},function(e,t,a){},function(e,t,a){},function(e,t,a){},function(e,t,a){},function(e,t,a){},function(e,t,a){},function(e,t,a){},function(e,t,a){},function(e,t,a){},function(e,t,a){},function(e,t,a){},function(e,t,a){"use strict";a.r(t);var n=a(1),l=a.n(n),r=a(31),i=a.n(r),c=(a(66),a(7)),o=a(2),s=a(17),m=a(18),u=a(24),d=a(23);var p=function(e){return l.a.createElement("li",null,l.a.createElement(c.b,{to:e.route,onClick:e.onClick},e.label))},E=(a(72),a(33)),g=a(8),h=function(e){Object(u.a)(a,e);var t=Object(d.a)(a);function a(){var e;Object(s.a)(this,a);for(var n=arguments.length,l=new Array(n),r=0;r<n;r++)l[r]=arguments[r];return(e=t.call.apply(t,[this].concat(l))).state={scrollPos:void 0},e.handleScroll=function(){var t=document.scrollingElement.scrollTop,a=document.getElementById("menu-container");if(t<120&&window.innerWidth>604){e.setState({scrollPos:t}),document.getElementById("menu").className="transparent";var n=String(Math.floor(100*t/120)/100);a.style.backgroundColor="rgba(85,85,85,"+n+")",a.style.borderColor="rgba(255,0,0,"+n+")"}else document.getElementById("menu").className="opaque",a.style.backgroundColor="#555",a.style.borderColor="red"},e.toggleSmallNav=function(){window.innerWidth>604||(document.getElementById("menu-container").className="expanded"===document.getElementById("menu-container").className?"collapsed":"expanded")},e}return Object(m.a)(a,[{key:"componentDidMount",value:function(){document.addEventListener("scroll",this.handleScroll),window.addEventListener("resize",this.handleScroll),this.handleScroll()}},{key:"componentWillUnmount",value:function(){var e=document;e.removeEventListener?e.removeEventListener("scroll",this.handleScroll):e.detachEvent&&e.detachEvent("scroll",this.handleScroll)}},{key:"render",value:function(){var e=this;return l.a.createElement("div",{id:"menu"},l.a.createElement(E.a,{id:"expand-icon",size:75,color:"#FFF",onClick:this.toggleSmallNav}),l.a.createElement("div",{id:"menu-container",className:"collapsed"},l.a.createElement("div",{id:"menu-button-row"},l.a.createElement(c.b,{to:"/",id:"icon",onClick:function(){return e.toggleSmallNav()}}),l.a.createElement(g.a,{id:"collapse-icon",size:40,color:"#FFF",onClick:this.toggleSmallNav})),l.a.createElement("ul",{id:"menu-items"},l.a.createElement(p,{key:"1",label:"Home",route:"/",onClick:function(){return e.toggleSmallNav()}}),l.a.createElement(p,{key:"2",label:"About Me",route:"/about",onClick:function(){return e.toggleSmallNav()}}),l.a.createElement(p,{key:"3",label:"Projects",route:"/projects",onClick:function(){return e.toggleSmallNav()}}),l.a.createElement(p,{key:"4",label:"Resume",route:"/resume",onClick:function(){return e.toggleSmallNav()}}),l.a.createElement(p,{key:"5",label:"Contact",route:"/contact",onClick:function(){return e.toggleSmallNav()}}))),l.a.createElement("div",{id:"menu-overlay",onClick:function(){return e.toggleSmallNav()}}))}}]),a}(l.a.Component),b=(a(73),a(11));var f=function(){return l.a.createElement("footer",null,l.a.createElement("div",{className:"content-row"},l.a.createElement("p",null,"Jacob Krol 2021\xa0\xa0\xa0|\xa0\xa0\xa0"),l.a.createElement("a",{href:"https://github.com/jacobkrol",target:"_blank",rel:"noopener noreferrer"},l.a.createElement(b.a,{title:"github"})),"\xa0",l.a.createElement("a",{href:"https://linkedin.com/in/JacobSKrol",target:"_blank",rel:"noopener noreferrer"},l.a.createElement(b.b,{title:"linked in"})),"\xa0",l.a.createElement(c.b,{to:"/contact"},l.a.createElement(g.c,{title:"email"}))))};function v(){var e=Object(o.f)().pathname;return Object(n.useEffect)((function(){window.scrollTo(0,0)}),[e]),null}a(74);var y=function(e){return l.a.createElement("div",{className:"cover-image",style:{backgroundImage:"url("+e.imgName+")"}},l.a.createElement("div",{className:"overlay",style:{backgroundColor:e.overlayColor?e.overlayColor.slice(0,e.overlayColor.length-1)+",0.7)":"rgba(40, 150, 160, 0.7)"}}))};a(75);function k(){return l.a.createElement("div",{className:"h-line"})}a(76);var w=function(e){var t=e.Icon;return l.a.createElement("div",{className:"title-container",style:{minHeight:(e.size||100)+"vh"}},l.a.createElement("div",{className:"title-cell"},e.title?l.a.createElement("h1",{className:"title"},e.title):t?l.a.createElement("h1",{className:"title"},l.a.createElement(t,null)):null,l.a.createElement(k,null),"object"===typeof e.subtitle?e.subtitle.map((function(e,t){return l.a.createElement("h2",{className:"subtitle",key:t},e)})):"string"===typeof e.subtitle?l.a.createElement("h2",{className:"subtitle"},e.subtitle):null))},N=(a(77),a(34)),S=a.n(N);var x=function(){return l.a.createElement("div",{id:"corner-logo-container"},l.a.createElement("img",{id:"corner-logo",alt:"uic logo",src:S.a}))},C=(a(78),["#F6F6F6","#CCF2DD","#BBEEF2","#CCF"]);var j=function(e){return l.a.createElement("div",{className:"content-block ".concat(e.size||"large"),style:{backgroundColor:e.bg?C[e.bg]:C[0]}},l.a.createElement("div",{className:"content-block-title"},e.title?l.a.createElement("h3",null,e.title):null),e.children)},I=a(35),P=a.n(I),M=a(36),z=a.n(M);function A(){return l.a.createElement("svg",{width:"340",height:"60",viewBox:"0 0 340 60",fill:"none",xmlns:"http://www.w3.org/2000/svg"},l.a.createElement("g",{id:"nametag",clipPath:"url(#clip0)"},l.a.createElement("text",{id:"krol",fill:"white",xmlSpace:"preserve",style:{whiteSpace:"pre"},fontFamily:"Source Sans","font-size":"64",letterSpacing:"0em"},l.a.createElement("tspan",{x:"226",y:"52.752"},"Krol")),l.a.createElement("text",{id:"s",fill:"white",xmlSpace:"preserve",style:{whiteSpace:"pre"},fontFamily:"Source Sans","font-size":"64",letterSpacing:"0em"},l.a.createElement("tspan",{x:"179",y:"52.752"},"S")),l.a.createElement("text",{id:"acob",fill:"white",xmlSpace:"preserve",style:{whiteSpace:"pre"},fontFamily:"Source Sans","font-size":"64",letterSpacing:"0em"},l.a.createElement("tspan",{x:"36",y:"52.752"},"acob")),l.a.createElement("text",{id:"j",fill:"white",xmlSpace:"preserve",style:{whiteSpace:"pre"},fontFamily:"Source Sans","font-size":"64",letterSpacing:"0em"},l.a.createElement("tspan",{x:"5",y:"52.752"},"J"))),l.a.createElement("defs",null,l.a.createElement("clipPath",{id:"clip0"},l.a.createElement("rect",{width:"340",height:"60",fill:"white"}))))}var F=function(){return l.a.createElement("div",null,l.a.createElement(y,{imgName:P.a}),l.a.createElement(w,{Icon:A,subtitle:["Full-Stack Web Developer","Short-Stack Pancake Lover"]}),l.a.createElement(x,null),l.a.createElement(j,{key:0,bg:0,title:"bio."},l.a.createElement("div",{className:"content-row"},l.a.createElement("div",{className:"content-box"},l.a.createElement("img",{id:"portrait",src:z.a,alt:"Jacob's Headshot"})),l.a.createElement("div",{className:"content-box"},l.a.createElement("p",null,"Hello! I am a software engineer with a focus in full-stack web development. I am passionate about bringing accessible, intuitive web apps to life through ",l.a.createElement("a",{href:"https://reactjs.org/docs/optimizing-performance.html"},"lightweight landing pages"),", ",l.a.createElement("a",{href:"https://caniuse.com/"},"widely-supported CSS tools"),", and ",l.a.createElement("a",{href:"https://reactjs.org"},"new frameworks like ReactJS"),". And pancakes.")))),l.a.createElement("div",{className:"content-row content-block-container"},l.a.createElement(j,{key:1,bg:1,title:"about.",size:"small"},l.a.createElement("div",{className:"content-column"},l.a.createElement("div",{className:"content-box"},l.a.createElement("p",null,"Read more on some things I'm passionate about. From extra-curriculars I participated in while in school, to activities I enjoy year-round, here is where you can learn about some of the things that make me tick.")))),l.a.createElement(j,{key:2,bg:2,title:"projects.",size:"small"},l.a.createElement("div",{className:"content-column"},l.a.createElement("div",{className:"content-box"},l.a.createElement("p",null,"Visit my projects page to browse a selection from some of my most recent, exciting projects. These range from academic to professional to personal, but each one has taught me a myriad of lessons on my road to completing them.")))),l.a.createElement(j,{key:3,bg:3,title:"resume.",size:"small"},l.a.createElement("div",{className:"content-column"},l.a.createElement("div",{className:"content-box"},l.a.createElement("p",null,'My resume page features many components from my resume, including a showcase of some of my front-end coding abilities. However, you\'ll have to reach out personally through my "contact" page for an updated PDF.'))))))},L=(a(79),a(12)),J=a(38),D=a(37),T=a.n(D);var O=function(){return l.a.createElement("div",{id:"about"},l.a.createElement(y,{imgName:T.a}),l.a.createElement(w,{title:"About Me",subtitle:"Get a little glimpse into some things I love",size:66}),l.a.createElement("div",{className:"content-row content-block-container"},l.a.createElement(j,{key:0,bg:0,title:"coding.",size:"small"},l.a.createElement("div",{className:"content-column"},l.a.createElement(L.b,{title:"laptop"}),l.a.createElement("div",{className:"content-box"},l.a.createElement("p",null,"In every language I've learned, I've found ways to use it for professional as well as creative means. I believe coders have a responsibility to leverage uniquely customizable programs to uplift others."),l.a.createElement("p",null,"You can read more about just some of the projects I've made recently on my ",l.a.createElement(c.b,{to:"/projects"},"projects page"),".")))),l.a.createElement(j,{key:1,bg:1,title:"cycling.",size:"small"},l.a.createElement("div",{className:"content-column"},l.a.createElement(g.b,{title:"bike"}),l.a.createElement("div",{className:"content-box"},l.a.createElement("p",null,"In addition to my love of team sports like baseball and tennis, which I have enjoyed for nearly my whole life, cycling captures an idiosyncratic love of mine for exploration, meditation, and exhiliration."),l.a.createElement("p",null,"I have biked several 100+ mile trips, including my trek from my apartment in downtown Chicago up to Wisconsin and back. I challenge myself to one day, bike across an entire nation.")))),l.a.createElement(j,{key:2,bg:2,title:"speech.",size:"small"},l.a.createElement("div",{className:"content-column"},l.a.createElement(J.a,{title:"orator"}),l.a.createElement("div",{className:"content-box"},l.a.createElement("p",null,"I participated in competitive speech tournaments for 6 years through high school and college. I still participate today through coaching and providing software aids to the community."),l.a.createElement("p",null,"Actively practicing and competing in limited preparation and oratorical media have provided me not only valuable skills, but invaluable friends and experiences.")))),l.a.createElement(j,{key:3,bg:3,title:"travel.",size:"small"},l.a.createElement("div",{className:"content-column"},l.a.createElement(L.a,{title:"globe"}),l.a.createElement("div",{className:"content-box"},l.a.createElement("p",null,"Exploring within my city, my country, and the world, brings me excitement and amazing learning opportunities."),l.a.createElement("p",null,"I've visited 4 nations, half of the US states and D.C., and countless neighborhoods within my own city of Chicago, IL. This notably includes my summer spent abroad in Paris, where I worked in the social services and learned the culture better than through any other form."))))))},R=(a(80),a(16));function W(e,t,a){var n=20*Math.floor(Math.random()*(t/20)),l=20*Math.floor(Math.random()*(a/20)+1),r=String(Math.floor(2*Math.random())),i=1===Math.floor(6*Math.random())?" ":r;e.fillStyle="#222",e.fillRect(n,l-20+1,20,20),e.fillStyle="lime",e.font=String(Math.floor(25))+"px monospace",e.textAlign="left",e.fillText(i,n,l)}var B=function(){var e=function(){var e=Object(n.useRef)(null),t=Object(n.useRef)(null),a=Object(n.useState)(window.innerWidth),l=Object(R.a)(a,2),r=l[0],i=l[1],c=Object(n.useState)(window.innerHeight),o=Object(R.a)(c,2),s=o[0],m=o[1],u=function(){if(e.current){i(window.innerWidth),m(window.innerHeight);var a=e.current.getContext("2d");a.fillStyle="#222",a.fillRect(0,0,window.innerWidth,window.innerHeight),clearInterval(t.current),t.current=setInterval((function(){return W(a,window.innerWidth,window.innerHeight)}),10)}};return window.addEventListener("resize",u),Object(n.useEffect)((function(){var a=e.current.getContext("2d");return a.fillStyle="#222",a.fillRect(0,0,r,s),t.current=setInterval((function(){return W(a,r,s)}),10),function(){clearInterval(t.current),window.removeEventListener?window.removeEventListener("resize",u):window.detachEvent&&window.detachEvent("resize",u)}}),[r,s]),[e,r,s]}(),t=Object(R.a)(e,3),a=t[0],r=t[1],i=t[2];return l.a.createElement(l.a.Fragment,null,l.a.createElement("canvas",{ref:a,className:"cover-canvas",width:r,height:i}),l.a.createElement("div",{className:"overlay"}))},H=(a(81),a(82),["transparent","#FF4","#B30","#F90","#2B0","#03F"]);var U=function(e){return l.a.createElement("span",{className:"star",style:{backgroundColor:e.fill?H[e.fill]:H[0]}})};var q=function(e){return l.a.createElement("div",{className:"content-box media-box",style:{backgroundImage:"url("+e.imgName+")",color:"dark"===e.theme?"#EEE":"#111"}},l.a.createElement("div",{className:"media-column"},e.date?l.a.createElement("p",null,e.date):null,l.a.createElement("span",{className:"content-row"},e.star?l.a.createElement(U,{fill:e.star}):null,l.a.createElement("p",null,l.a.createElement("strong",null,e.title))),l.a.createElement("p",null,l.a.createElement("em",null,e.subtitle)),e.location?l.a.createElement("span",{className:"content-row"},l.a.createElement(g.e,{title:"pin",size:15}),l.a.createElement("p",null,e.location)):null,"object"===typeof e.language?e.language.map((function(e,t){return l.a.createElement("span",{className:"content-row",key:t},l.a.createElement(L.c,{title:"languages",size:15}),l.a.createElement("p",null,e))})):"string"===typeof e.language?l.a.createElement("span",{className:"content-row"},l.a.createElement(L.c,{title:"languages",size:15}),l.a.createElement("p",null,e.language)):null,e.link?l.a.createElement("p",null,"See more ",l.a.createElement("a",{style:{color:"dark"===e.theme?"#EEE":"#111"},href:e.link,target:"_blank",rel:"noopener noreferrer"},"here")):null))},G=a(39),K=a.n(G),_=a(40),V=a.n(_),Y=a(41),Q=a.n(Y),$=a(42),X=a.n($),Z=a(43),ee=a.n(Z),te=a(44),ae=a.n(te),ne=a(45),le=a.n(ne),re=a(46),ie=a.n(re),ce=a(47),oe=a.n(ce),se=a(48),me=a.n(se),ue=a(49),de=a.n(ue),pe=a(50),Ee=a.n(pe),ge=a(20),he=a.n(ge),be=a(10),fe=a.n(be),ve=a(21),ye=a.n(ve),ke=a(22),we=a.n(ke),Ne=a(51),Se=a.n(Ne);var xe=function(){return l.a.createElement("div",{id:"projects"},l.a.createElement(B,null),l.a.createElement(w,{title:"Projects",subtitle:"Check out some cool things I've been working on",size:66}),l.a.createElement("div",{id:"legend-row",className:"content-row"},l.a.createElement("div",{className:"content-row"},l.a.createElement("div",{className:"content-row"},l.a.createElement(U,{fill:2}),l.a.createElement("p",null,"Deprecated")),l.a.createElement("div",{className:"content-row"},l.a.createElement(U,{fill:3}),l.a.createElement("p",null,"In Progress"))),l.a.createElement("div",{className:"content-row"},l.a.createElement("div",{className:"content-row"},l.a.createElement(U,{fill:4}),l.a.createElement("p",null,"Completed")),l.a.createElement("div",{className:"content-row"},l.a.createElement(U,{fill:5}),l.a.createElement("p",null,"Maintained")))),l.a.createElement("div",{className:"content-row content-block-container"},l.a.createElement(j,{title:"utilities.",bg:3,size:"medium"},l.a.createElement("div",{className:"content-row"},l.a.createElement(q,{title:"LP Timer",star:5,subtitle:"A simple timer application with time signals to help the forensics community",language:"ReactJS, Node.js, Express",imgName:le.a,link:"https://kroljs.com/LP-Timer"}),l.a.createElement(q,{title:"Scoreboard",star:5,subtitle:"Scoreboard interface for personal game nights",language:"JavaScript, HTML5, CSS",imgName:oe.a,link:"https://kroljs.com/Scoreboard"}),l.a.createElement(q,{title:"Extemp Panel App",star:3,subtitle:"A web app to share and practice extemporaneous speaking prompts",language:"ReactJS, Node.js, Express",imgName:ie.a}))),l.a.createElement(j,{title:"games.",bg:1,size:"medium"},l.a.createElement("div",{className:"content-row"},l.a.createElement(q,{title:"Asteroids",theme:"dark",star:4,subtitle:"Play the classic arcade game Asteroids!",language:"JavaScript",imgName:X.a,link:"https://github.com/jacobkrol/Asteroids"}),l.a.createElement(q,{title:"Snake",star:4,subtitle:"Play the classic game Snake",language:"JavaScript",imgName:ee.a,link:"https://github.com/jacobkrol/Snake"}),l.a.createElement(q,{title:"Smove",star:4,subtitle:"Navigate the incoming enemies to collect gold",language:"JavaScript",imgName:ae.a,link:"https://github.com/jacobkrol/Smove"}))),l.a.createElement(j,{title:"wallpapers.",bg:0,size:"medium"},l.a.createElement("div",{className:"content-row"},l.a.createElement(q,{title:"Mazes",star:4,subtitle:"A variety of work with JavaScript canvas programs in relation to mazes",language:"JavaScript",imgName:K.a,link:"https://github.com/jacobkrol/Mazes"}),l.a.createElement(q,{title:"Circle Growth",star:4,subtitle:"Screensaver design of colorful circle growth",language:"JavaScript",imgName:V.a,link:"https://github.com/jacobkrol/Circle-Growth"}),l.a.createElement(q,{title:"Dynamic Ball Pit",star:4,subtitle:"A basic JavaScript program with interactive dots",language:"JavaScript",imgName:Q.a,link:"https://github.com/jacobkrol/Dynamic-Ball-Pit"}))),l.a.createElement(j,{title:"adtl_websites.",bg:2,size:"medium"},l.a.createElement("div",{className:"content-row"},l.a.createElement(q,{title:"Jacob's Homepage",star:5,subtitle:"Learn about me and what I am working on, and get in touch",language:"ReactJS, Node.js, Express",imgName:de.a,link:"https://github.com/jacobkrol/jacobkrol.github.io"}),l.a.createElement(q,{title:"Split The Bill",star:5,subtitle:"Need to split a bill proportional to everyone's costs? This is the solution!",language:"ReactJS",imgName:me.a,link:"https://github.com/jacobkrol/Split-The-Bill"}),l.a.createElement(q,{title:"Apartment Manager",star:5,subtitle:"Post, like, filter, and compare multiple apartment listings in one place",language:"Node.js, Express, ReactJS",imgName:Ee.a,link:"https://github.com/jacobkrol/Apartment-Manager"}),l.a.createElement(q,{title:"FrenchClubUIC.com",star:5,subtitle:"Public website produced for the French Club at UIC",language:"HTML5, CSS",imgName:he.a,link:"http://frenchclubuic.com"}))),l.a.createElement(j,{title:"maths.",bg:0,size:"medium"},l.a.createElement("div",{className:"content-row"},l.a.createElement(q,{title:"Efficiency of Planar Disk Packings",star:4,subtitle:"Analyzing the packing efficiency of disks in an infinite plane",language:"C++, CMAKE, JavaScript",imgName:fe.a,link:"https://github.com/jacobkrol/Planar-Disk-Packing"}),l.a.createElement(q,{title:"Magnetic Waves",star:4,subtitle:"Studying MHD equations and visualizing magnetic waves",language:"SageMath, Python, JavaScript",imgName:ye.a,link:"https://github.com/jacobkrol/Magnetic-Waves"}),l.a.createElement(q,{title:"Wikipedia Illustration Task Force",star:4,subtitle:"Create visualizations for complex mathematical theorems on wikipedia",language:"SageMath, Python",imgName:we.a,link:"https://en.wikipedia.org/wiki/Kempe%27s_universality_theorem"}),l.a.createElement(q,{title:"Collatz Conjecture",star:3,subtitle:"Personal investigations using coding as a tool",language:"Python, JavaScript",imgName:Se.a,link:"https://github.com/jacobkrol/Collatz-Conjecture"})))))},Ce=a(13);a(83);var je=function(e){return l.a.createElement("div",{className:"content-column"},l.a.createElement("div",{className:"skill-column-title"},l.a.createElement("h3",null,e.title)),e.children)},Ie=a(28);var Pe=function(e){return l.a.createElement("div",{className:"content-box"},l.a.createElement("div",{className:"skill-box"},l.a.createElement("p",null,e.name),Object(Ie.a)(Array(e.stars)).map((function(e,t){return l.a.createElement(U,{key:t,fill:1})})),Object(Ie.a)(Array(Number(5-e.stars))).map((function(e,t){return l.a.createElement(U,{key:5-t,fill:0})}))))},Me=a(52),ze=a.n(Me),Ae=a(53),Fe=a.n(Ae),Le=a(54),Je=a.n(Le),De=a(55),Te=a.n(De),Oe=a(56),Re=a.n(Oe),We=a(57),Be=a.n(We);var He=function(){return l.a.createElement("div",null,l.a.createElement(y,{imgName:ze.a,overlayColor:""}),l.a.createElement(w,{title:"Resume",subtitle:"Contact me for the newest, print-friendly version!",size:66}),l.a.createElement(j,{bg:2,title:"skills."},l.a.createElement("div",{className:"content-row flex-start"},l.a.createElement("div",{className:"content-row flex-start"},l.a.createElement(je,{title:"languages"},l.a.createElement(Pe,{name:"C#",stars:5}),l.a.createElement(Pe,{name:"JS ES6",stars:5}),l.a.createElement(Pe,{name:"HTML + CSS",stars:5}),l.a.createElement(Pe,{name:"Python",stars:4}),l.a.createElement(Pe,{name:"C++",stars:4})),l.a.createElement(je,{title:"server libs"},l.a.createElement(Pe,{name:".NET",stars:5}),l.a.createElement(Pe,{name:"MassTransit",stars:5}),l.a.createElement(Pe,{name:"Node.js",stars:5}),l.a.createElement(Pe,{name:"Express",stars:5}))),l.a.createElement("div",{className:"content-row flex-start"},l.a.createElement(je,{title:"client libs"},l.a.createElement(Pe,{name:"React.js",stars:5}),l.a.createElement(Pe,{name:"jQuery",stars:5}),l.a.createElement(Pe,{name:"ReGraph",stars:5}),l.a.createElement(Pe,{name:"Material UI",stars:5})),l.a.createElement(je,{title:"storage"},l.a.createElement(Pe,{name:"RDBMS",stars:5}),l.a.createElement(Pe,{name:"Document",stars:4}),l.a.createElement(Pe,{name:"Key-Value",stars:4}),l.a.createElement(Pe,{name:"Graph",stars:2}))),l.a.createElement("div",{className:"content-row flex-start"},l.a.createElement(je,{title:"software"},l.a.createElement(Pe,{name:"M. Office",stars:5}),l.a.createElement(Pe,{name:"VS Code",stars:5}),l.a.createElement(Pe,{name:"Git",stars:5}),l.a.createElement(Pe,{name:"Docker",stars:2})),l.a.createElement(je,{title:"cloud"},l.a.createElement(Pe,{name:"Azure",stars:5}),l.a.createElement(Pe,{name:"AWS",stars:3}),l.a.createElement(Pe,{name:"GCP",stars:3}))),l.a.createElement("div",{className:"content-row"},l.a.createElement(je,{title:"communication"},l.a.createElement("div",{className:"content-row"},l.a.createElement("div",{className:"content-box"},l.a.createElement("div",{className:"skill-box skill-text"},l.a.createElement("p",null,"French"),l.a.createElement("ul",null,l.a.createElement("li",null,"BA in French and Francophone Studies"),l.a.createElement("li",null,"Professional Working Proficiency ",l.a.createElement("span",{className:"nobr"},"(ILR Scale)")),l.a.createElement("li",null,"C1 on CEFR")))),l.a.createElement("div",{className:"content-box"},l.a.createElement("div",{className:"skill-box skill-text"},l.a.createElement("p",null,"Public Speaking"),l.a.createElement("ul",null,l.a.createElement("li",null,"Current competitive speech team coach at the collegiate level"),l.a.createElement("li",null,"Former competitor on a nationally-ranked speech team ",l.a.createElement("span",{className:"nobr"},"(4 years)")),l.a.createElement("li",null,"Limited preparation specialty")))),l.a.createElement("div",{className:"content-box"},l.a.createElement("div",{className:"skill-box skill-text"},l.a.createElement("p",null,"Cross-Functional Communication"),l.a.createElement("ul",null,l.a.createElement("li",null,"Experience in translating between business and technology teams"),l.a.createElement("li",null,"Communication of infrastructure and time requirements with story point estimation to management and other stakeholders"))))))))),l.a.createElement(j,{bg:3,title:"experience."},l.a.createElement("div",{className:"content-row"},l.a.createElement("div",{className:"content-box left-small-card"},l.a.createElement("p",null,"Ernst & Young LLP"),l.a.createElement("p",null,"Madison, WI"),l.a.createElement("p",null,"June 2021 - Present")),l.a.createElement("div",{className:"content-box right-large-card stretch-box"},l.a.createElement("p",null,"Senior - Technology Consulting"),l.a.createElement("ul",null,l.a.createElement("li",null,"Develop web applications across the stack, focusing on projects with React and emerging cloud technologies"),l.a.createElement("li",null,"Support internal teams with RFP response materials as a subject matter expert and through development of made-to-order application demos"),l.a.createElement("li",null,"Act as a cross-functional communication channel between technical scrum teams and business leaders")))),l.a.createElement("div",{className:"content-row"},l.a.createElement("div",{className:"content-box left-small-card"},l.a.createElement("p",null,"Tata Consultancy Services Ltd."),l.a.createElement("p",null,"Chicago, IL"),l.a.createElement("p",null,"August 2020 - May 2021")),l.a.createElement("div",{className:"content-box right-large-card stretch-box"},l.a.createElement("p",null,"Software Engineer"),l.a.createElement("ul",null,l.a.createElement("li",null,"Contributed to the test-driven development through CI/CD to Azure serverless back-end microservices built with C# in the .NET framework"),l.a.createElement("li",null,"Coordinated virtually with on-shore and off-shore scrum team members to ensure effective utilization of client resources"),l.a.createElement("li",null,"Designed message architecture using Google Protobuf and POCO messages with serialization and deserialization sent via MassTransit")))),l.a.createElement("div",{className:"content-row"},l.a.createElement("div",{className:"content-box left-small-card"},l.a.createElement("p",null,"Wolcott, Wood, and Taylor Inc."),l.a.createElement("p",null,"Chicago, IL"),l.a.createElement("p",null,"June 2017 - April 2020")),l.a.createElement("div",{className:"content-box right-large-card stretch-box"},l.a.createElement("p",null,"Charge Entry Specialist, Insurance Verification Specialist"),l.a.createElement("ul",null,l.a.createElement("li",null,"Trained in both departments to assist based on office deadlines and needs"),l.a.createElement("li",null,"Oversee the entry and review of over $2,000,000 worth of patient visits monthly"),l.a.createElement("li",null,"Perform month-over-month at 210% of the charge entry department average productivity output")))),l.a.createElement("div",{className:"content-row"},l.a.createElement("div",{className:"content-box left-small-card"},l.a.createElement("p",null,"L'Espace Parisien Pour l'Insertion"),l.a.createElement("p",null,"Paris, France"),l.a.createElement("p",null,"June 2019 - July 2019")),l.a.createElement("div",{className:"content-box right-large-card stretch-box"},l.a.createElement("p",null,"Intern through CEA Study Abroad"),l.a.createElement("ul",null,l.a.createElement("li",null,"Communicate exclusively in French to coworkers, clients, and other organizations"),l.a.createElement("li",null,"Research improvement of social aid distribution networks through computer models"),l.a.createElement("li",null,"Cooperate with individuals of economically- and socially-disadvantaged groups to provide resources to improve quality of life")))),l.a.createElement("div",{className:"content-row"},l.a.createElement("div",{className:"content-box left-small-card"},l.a.createElement("p",null,"University of Illinois at Chicago"),l.a.createElement("p",null,"Chicago, IL"),l.a.createElement("p",null,"Spring 2017, Fall 2018")),l.a.createElement("div",{className:"content-box right-large-card stretch-box"},l.a.createElement("p",null,"Teaching Aide"),l.a.createElement("ul",null,l.a.createElement("li",null,"Create answer keys, rubrics, and determine point allocation independently"),l.a.createElement("li",null,"Grade and comment over 300 calculus student quizzes weekly"),l.a.createElement("li",null,"Develop time-allocation along own schedule to complete the work"))))),l.a.createElement("div",{className:"content-row content-block-container"},l.a.createElement(j,{bg:0,title:"education.",size:"medium"},l.a.createElement("div",{className:"content-row"},l.a.createElement("div",{className:"content-box left-small-card"},l.a.createElement("p",null,"University of Illinois at Chicago"),l.a.createElement("p",null,"Chicago, IL")),l.a.createElement("div",{className:"content-box right-large-card"},l.a.createElement("p",null,"BS in Mathematics and Computer Science"),l.a.createElement("p",null,"BA in French and Francophone Studies"),l.a.createElement("ul",null,l.a.createElement("li",null,"President's Award Program STEM"),l.a.createElement("li",null,"Honors College, ",l.a.createElement("em",null,"magna cum laude"))),l.a.createElement("p",null,"CUMULATIVE GPA 3.8"),l.a.createElement("p",null,"MAJOR GPA 4.0")))),l.a.createElement(j,{bg:1,title:"awards.",size:"medium"},l.a.createElement("div",{className:"content-box"},l.a.createElement("div",{className:"spaced-ul"},l.a.createElement("span",{className:"content-row"},l.a.createElement(Ce.a,{className:"bullet-icon",title:"bullet point"}),l.a.createElement("p",null,"Marie-Odile Sweetser Prize, ",l.a.createElement("em",null,"Department of French and Francophone Studies"))),l.a.createElement("span",{className:"content-row"},l.a.createElement(Ce.a,{className:"bullet-icon",title:"bullet point"}),l.a.createElement("p",null,"Twersky Award Nominee, ",l.a.createElement("em",null,"Department of Mathematics, Statistics, and Computer Science"))),l.a.createElement("span",{className:"content-row"},l.a.createElement(Ce.a,{className:"bullet-icon",title:"bullet point"}),l.a.createElement("p",null,"Illinois State Scholar, ",l.a.createElement("em",null,"Illinois Student Assistance Commission"))),l.a.createElement("span",{className:"content-row"},l.a.createElement(Ce.a,{className:"bullet-icon",title:"bullet point"}),l.a.createElement("p",null,"Impact Scholar, ",l.a.createElement("em",null,"Center for Student Involvement"))),l.a.createElement("span",{className:"content-row"},l.a.createElement(Ce.a,{className:"bullet-icon",title:"bullet point"}),l.a.createElement("p",null,"Dean\u2019s List, ",l.a.createElement("em",null,"College of Liberal Arts & Sciences"))))))),l.a.createElement(j,{bg:0,title:"publications."},l.a.createElement("div",{className:"content-row"},l.a.createElement(q,{date:"November 13, 2019",title:"On uniqueness and helicity conservation of weak solutions to the electron-MHD system",subtitle:"Cornell University",link:"https://arxiv.org/abs/1911.08285",imgName:Je.a}),l.a.createElement(q,{date:"March 18, 2019",title:"Representing UIC well in regular season, ready for nationals",subtitle:"UIC Today",link:"https://today.uic.edu/representing-uic-well-in-regular-season-ready-for-nationals",imgName:Te.a}))),l.a.createElement(j,{bg:1,title:"presentations."},l.a.createElement("div",{className:"content-row"},l.a.createElement(q,{title:"The Identification and Aid of Organizations through Web Presence",subtitle:"UIC Honors College Presentation Expo",location:"Chicago, IL",link:Be.a,date:"December 10, 2019",imgName:he.a}),l.a.createElement(q,{title:"Magnetic Waves",subtitle:"UIC Mathematical Computing Lab Poster Session",location:"Chicago, IL",link:"https://github.com/jacobkrol/Magnetic-Waves",date:"December 4, 2019",imgName:ye.a}),l.a.createElement(q,{title:"Efficiency of Planar Disk Packings",subtitle:"MAA Joint Mathematics Meetings",location:"Baltimore, MD",link:"https://www.maa.org/sites/default/files/Programs/%28Final%29%20JMM%202019%20Student%20Poster%20Booklet.pdf",date:"January 19, 2019",imgName:fe.a}),l.a.createElement(q,{title:"Efficiency of Planar Disk Packings",subtitle:"UIC Mathematical Computing Lab Poster Session",location:"Chicago, IL",link:"http://mcl.math.uic.edu/fall-2018-projects",date:"December 5, 2018",imgName:fe.a}),l.a.createElement(q,{title:"Efficiency of Planar Disk Packings",subtitle:"Undergraduate Mathematics Symposium",location:"Chicago, IL",link:"https://github.com/jacobkrol/Planar-Disk-Packing",date:"November 10, 2018",imgName:fe.a}),l.a.createElement(q,{title:"Efficiency of Planar Disk Packings",subtitle:"UIC Mathematical Computing Lab Poster Session",location:"Chicago, IL",link:"http://mcl.math.uic.edu/spring-2018-projects",date:"May 2, 2018",imgName:fe.a}),l.a.createElement(q,{title:"Wikipedia Illustration Task Force",subtitle:"UIC Mathematical Computing Lab Poster Session",location:"Chicago, IL",link:"http://mcl.math.uic.edu/fall-2017-projects",date:"December 6, 2017",imgName:we.a}),l.a.createElement(q,{title:"Studying Fluorescence of Coumarin 102 after NaOH Quenching",subtitle:"PAP STEM Co-Lab Poster Presentation",location:"Chicago, IL",link:Re.a,date:"July 29, 2016",imgName:Fe.a,theme:"dark"}))))},Ue=(a(84),a(58)),qe=(a(85),function(e){Object(u.a)(a,e);var t=Object(d.a)(a);function a(){var e;Object(s.a)(this,a);for(var n=arguments.length,l=new Array(n),r=0;r<n;r++)l[r]=arguments[r];return(e=t.call.apply(t,[this].concat(l))).state={name:"",email:"",title:"",details:"",disabled:!1},e.handleChange=function(t){e.setState(Object(Ue.a)({},t.target.name,t.target.value))},e.handleSubmit=function(t){if(!e.state.disabled){e.setState({disabled:!0});var a={method:"POST",headers:{"Content-Type":"application/json"},body:JSON.stringify(e.state)},n=null,l="An error has occurred submitting your feedback. Please verify your internet connection and try again later.\n\nError Code: ";fetch("https://jacob-krol.herokuapp.com/add",a).then((function(e){return n=e.status,e.text()})).then((function(t){"success"===t?alert("Your message has been successfully sent. Thank you for reaching out!"):"error"===t?alert(l+"E1-"+(n?String(n):"0")):alert(l+n),e.setState({disabled:!1})})).catch((function(t){console.log(t),alert(l+"E2-"+(n?String(n):"0")),e.setState({disabled:!1})})),t.preventDefault()}},e}return Object(m.a)(a,[{key:"render",value:function(){return l.a.createElement("form",{onSubmit:this.handleSubmit},l.a.createElement("label",null,"Your Name:"),l.a.createElement("input",{type:"text",name:"name",onChange:this.handleChange,value:this.state.name,disabled:this.state.disabled,required:!0}),l.a.createElement("label",null,"Your Email:"),l.a.createElement("input",{type:"email",name:"email",placeholder:"name@example.com",onChange:this.handleChange,value:this.state.email,disabled:this.state.disabled,required:!0}),l.a.createElement("label",null,"Subject:"),l.a.createElement("input",{type:"text",name:"title",className:"extend",onChange:this.handleChange,value:this.state.title,disabled:this.state.disabled,required:!0}),l.a.createElement("label",null,"Message Details:"),l.a.createElement("textarea",{name:"details",className:"extend",placeholder:"what's up?",onChange:this.handleChange,value:this.state.details,disabled:this.state.disabled,required:!0}),l.a.createElement("input",{type:"submit",disabled:this.state.disabled}))}}]),a}(l.a.Component)),Ge=a(59),Ke=a.n(Ge);var _e=function(){return l.a.createElement("div",null,l.a.createElement(y,{imgName:Ke.a}),l.a.createElement(w,{title:"Contact Me",subtitle:"Let's Keep in Touch!",size:66}),l.a.createElement(j,{bg:0},l.a.createElement("div",{id:"contact-row",className:"content-row"},l.a.createElement("div",{className:"content-column"},l.a.createElement(b.a,{title:"Github",color:"rgb(40,40,40)"}),l.a.createElement("a",{href:"https://github.com/jacobkrol",target:"_blank",rel:"noopener noreferrer"},"./jacobkrol")),l.a.createElement("div",{className:"content-column"},l.a.createElement(b.b,{title:"linkedin",color:"rgb(2,116,179)"}),l.a.createElement("a",{href:"https://linkedin.com/in/JacobSKrol",target:"_blank",rel:"noopener noreferrer"},"Jacob S Krol")),l.a.createElement("div",{className:"content-column"},l.a.createElement(g.d,{title:"location",color:"rgb(210,63,64)"}),l.a.createElement("p",null,"Madison, WI"))),l.a.createElement("div",{id:"form-box"},l.a.createElement("div",{className:"content-box"},l.a.createElement("p",null,"If you have any feedback on this website (or any of my apps), are a recruiter looking for a fun, ambitious coder to add to your team, or have any other questions / comments, please message me on LinkedIn or send me an email using the form below!")),l.a.createElement(qe,null),l.a.createElement("div",{className:"content-box"},l.a.createElement("p",null,"I look forward to speaking to you soon!")))))},Ve=a(60),Ye=a.n(Ve);var Qe=function(){return l.a.createElement(l.a.Fragment,null,l.a.createElement(y,{imgName:Ye.a}),l.a.createElement(w,{title:"404 Error",subtitle:"Sorry we couldn't find this page"}))};var $e=function(){return l.a.createElement(c.a,{baseline:"/"},l.a.createElement(v,null),l.a.createElement("div",{id:"page-container"},l.a.createElement(h,null),l.a.createElement(o.c,null,l.a.createElement(o.a,{exact:!0,path:"/",component:F}),l.a.createElement(o.a,{path:"/about",component:O}),l.a.createElement(o.a,{path:"/projects",component:xe}),l.a.createElement(o.a,{path:"/resume",component:He}),l.a.createElement(o.a,{path:"/contact",component:_e}),l.a.createElement(o.a,{component:Qe})),l.a.createElement(f,null)))};Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));i.a.render(l.a.createElement(l.a.StrictMode,null,l.a.createElement($e,null)),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then((function(e){e.unregister()})).catch((function(e){console.error(e.message)}))}],[[61,1,2]]]);
//# sourceMappingURL=main.4150b68d.chunk.js.map