(this.webpackJsonpbnewmandotdev=this.webpackJsonpbnewmandotdev||[]).push([[0],{28:function(e,t,n){},29:function(e,t,n){"use strict";n.r(t);var a=n(0),c=n(9),i=(n(1),n(14)),s=n.n(i),d=n(2),r=function(){return Object(a.jsx)("div",{className:"footerWrapper",children:Object(a.jsx)("p",{children:"Ben Newman Development Limited \xa9 2021 | All Rights Reserved"})})},o=function(e){var t=e.active;return Object(a.jsx)("header",{children:Object(a.jsxs)("div",{id:"heading",children:[Object(a.jsx)("img",{src:"https://bnewmandev.b-cdn.net/logos/logo.png",alt:"BNewman.dev"}),Object(a.jsx)("h1",{children:"BNewman.Dev"}),Object(a.jsx)("a",{href:"/home",className:"".concat(t.home?"ORANGEBGCOL":""),id:"homeL",children:"Home"}),Object(a.jsx)("a",{href:"/aboutme",className:"".concat(t.aboutme?"ORANGEBGCOL":""),id:"aboutMeL",children:"About Me"}),Object(a.jsx)("a",{href:"/myplans",id:"myPlansL",className:"".concat(t.myplans?"ORANGEBGCOL":""),children:"My Plans"}),Object(a.jsx)("a",{href:"/myprojects",id:"myProjectsL",className:"".concat(t.myprojects?"ORANGEBGCOL":""),children:"Projects"}),Object(a.jsx)("a",{href:"/links",id:"linksL",className:"".concat(t.links?"ORANGEBGCOL":""),children:"Links"}),Object(a.jsx)("a",{href:"/contactme",id:"contactMeL",className:"".concat(t.contactme?"ORANGEBGCOL":""),children:"Contact"})]})})},l=function(){return Object(a.jsx)("div",{id:"home-intro",children:Object(a.jsxs)("main",{children:[Object(a.jsx)("h2",{children:"Ben Newman, Developer"}),Object(a.jsx)("p",{children:"I am experienced with a number of programming languages and technologies. Please see below for a list of my skills. I specialize in tutoring python and javascript as well as teaching web development."}),Object(a.jsx)("br",{}),Object(a.jsx)("a",{href:"/aboutme",children:"Learn More"}),Object(a.jsx)("a",{href:"/puc",children:"View CV"})]})})},b=function(e){var t=!1,n=null;return Object(a.jsxs)("button",{id:e.element.id+"BUTTON",onClick:function(e){if(!1===t){var a=("BUTTON"!==e.target.nodeName?e.target.parentElement:e.target).childNodes[3];"none"===a.style.display?a.style.display="none":a.style.display="block",t=!0,n=a}else"none"===n.style.display?n.style.display="block":n.style.display="none"},children:[Object(a.jsx)("h2",{children:e.element.title}),Object(a.jsx)("img",{src:e.element.image,alt:e.element.title}),Object(a.jsx)("p",{children:e.element.body}),Object(a.jsx)("div",{id:e.element.id+"OVERLAY",className:"MINOR-OVERLAY",children:e.element.eg.map((function(e){return Object(a.jsxs)("div",{children:[Object(a.jsx)("br",{}),Object(a.jsx)("h1",{children:e.heading}),Object(a.jsx)("p",{children:e.body}),Object(a.jsx)("br",{})]},e.id)}))})]})},j=n(5),m=function(){var e=j.skills;return Object(a.jsxs)("div",{id:"HomeMySkills",children:[Object(a.jsx)("h1",{children:"My Skills"}),Object(a.jsx)("div",{className:"HomeMySkillsWrapper",children:e.map((function(e){return Object(a.jsx)(b,{element:e},e.id)}))})]})},h=function(){return Object(a.jsxs)("div",{id:"home",children:[Object(a.jsx)(o,{active:{home:!0,aboutme:!1,myplans:!1,myprojects:!1,links:!1,contactme:!1}}),Object(a.jsx)(l,{}),Object(a.jsx)(m,{}),Object(a.jsx)(r,{})]})},p=function(){return Object(a.jsx)("h1",{className:"BLACKTEXT",children:"404 PAGE NOT FOUND"})},O=function(){return Object(a.jsxs)("div",{id:"aboutMeWrapper",children:[Object(a.jsx)("h1",{className:"MAINHEADING",children:"About Me"}),Object(a.jsxs)("main",{children:[Object(a.jsx)("article",{children:Object(a.jsxs)("p",{children:["I am currently reading computer science at university in the UK and I have experience working in a broad range of fields such as networking, full-stack web development and scripting.",Object(a.jsx)("br",{}),Object(a.jsx)("br",{}),"I have had experience working with a team notably in working on the API for a food blog website.",Object(a.jsx)("br",{}),Object(a.jsx)("br",{}),"I primarily focus on teaching programming in python and javascript as well as teaching web development. I also offer data analysis using R and a broad range of development solutions."]})}),Object(a.jsx)("article",{children:Object(a.jsx)("img",{src:"https://bnewmandev.b-cdn.net/ben.jpg",alt:"Ben Newman"})})]})]})},g=function(){return Object(a.jsxs)("div",{id:"aboutme",children:[Object(a.jsx)(o,{active:{home:!1,aboutme:!0,myplans:!1,myprojects:!1,links:!1,contactme:!1}}),Object(a.jsx)(O,{}),Object(a.jsx)(r,{})]})},x=function(e){return Object(a.jsxs)("article",{children:[Object(a.jsx)("h2",{children:e.element.title}),Object(a.jsx)("p",{children:e.element.body})]})},u=function(){return Object(a.jsxs)("div",{className:"primaryPage",id:"myplans",children:[Object(a.jsx)(o,{active:{home:!1,aboutme:!1,myplans:!0,myprojects:!1,links:!1,contactme:!1}}),Object(a.jsxs)("div",{id:"myplanswrapper",children:[Object(a.jsx)("h1",{className:"MAINHEADING",children:"My Plans"}),Object(a.jsx)("main",{children:j.plans.map((function(e){return Object(a.jsx)(x,{element:e},e.id)}))})]}),Object(a.jsx)(r,{})]})},f=function(){return Object(a.jsxs)("div",{className:"primaryPage",id:"myprojects",children:[Object(a.jsx)(o,{active:{home:!1,aboutme:!1,myplans:!1,myprojects:!0,links:!1,contactme:!1}}),Object(a.jsx)("h1",{className:"MAINHEADING",children:"My Projects"}),Object(a.jsx)("main",{children:j.projects.map((function(e){return Object(a.jsx)(x,{element:e},e.id)}))}),Object(a.jsx)(r,{})]})},y=function(e){return console.log(e),Object(a.jsx)("a",{href:e.data.link,children:Object(a.jsx)("img",{src:e.data.img,alt:e.data.alt})})},v=function(){return Object(a.jsxs)("div",{id:"links",children:[Object(a.jsx)(o,{active:{home:!1,aboutme:!1,myplans:!1,myprojects:!1,links:!0,contactme:!1}}),Object(a.jsx)("h1",{className:"MAINHEADING",children:"Links"}),Object(a.jsx)("main",{children:[{link:"https://www.facebook.com/profile.php?id=100057371245350",alt:"Facebook Logo",img:"https://bnewmandev.b-cdn.net/facebook.png"},{link:"https://twitter.com/dev_newman",alt:"Twitter Logo",img:"https://bnewmandev.b-cdn.net/twitter.png"},{link:"https://www.linkedin.com/in/benjamin-s-newman/",alt:"LinkedIn Logo",img:"https://bnewmandev.b-cdn.net/linkedin.png"},{link:"https://github.com/jam1nb3n",alt:"Github Logo",img:"https://bnewmandev.b-cdn.net/github.png"}].map((function(e){return Object(a.jsx)(y,{data:e})}))}),Object(a.jsx)(r,{})]})},w=n(15),k=function(){return Object(a.jsxs)("div",{id:"contactme",children:[Object(a.jsx)(o,{active:{home:!1,aboutme:!1,myplans:!1,myprojects:!1,links:!1,contactme:!0}}),Object(a.jsxs)("main",{children:[Object(a.jsx)("h1",{className:"MAINHEADING",children:"Contact Me"}),Object(a.jsx)("h2",{children:"For any business enquiries or any other feedback or questions please contact me directly or use the contact form:"}),Object(a.jsx)("form",{action:"/contactme",id:"contact-form",method:"post",children:Object(a.jsxs)("fieldset",{children:[Object(a.jsx)("label",{htmlFor:"name",children:"Name*"}),Object(a.jsx)("input",{id:"name",name:"name",placeholder:"John Smith",type:"text",required:!0}),Object(a.jsx)("label",{htmlFor:"email",children:"Email*"}),Object(a.jsx)("input",{type:"email",name:"email",id:"email",placeholder:"john.smith@example.com",required:!0}),Object(a.jsx)("label",{htmlFor:"phone",children:"Phone Number"}),Object(a.jsx)("input",{type:"tel",placeholder:"+44 20 7946 0879",name:"phone",id:"phone"}),Object(a.jsx)("label",{htmlFor:"msg",children:"Message*"}),Object(a.jsx)("textarea",{name:"msg",id:"msg",rows:"10",placeholder:"Message",required:!0}),Object(a.jsx)("p",{children:"* indicates required fields"}),Object(a.jsx)("button",{type:"submit",children:"Submit"})]})}),Object(a.jsx)("h3",{children:"Email: ben@bnewman.dev"}),Object(a.jsx)("h3",{children:"Phone: +44 7860 241605"}),Object(a.jsxs)(w.MobileView,{children:[Object(a.jsx)("br",{}),Object(a.jsx)("h3",{children:Object(a.jsx)("a",{href:"mailto:ben@bnewman.dev",children:"Email"})}),Object(a.jsx)("h3",{children:Object(a.jsx)("a",{href:"tel:+4407860241605",children:"Call"})}),Object(a.jsx)("h3",{children:Object(a.jsx)("a",{href:"sms:+4407860241605",children:"SMS"})})]})]}),Object(a.jsx)(r,{})]})},N=function(){return Object(a.jsxs)("div",{id:"PUC",children:[Object(a.jsx)(o,{active:{home:!1,aboutme:!1,myplans:!1,myprojects:!1,links:!1,contactme:!1}}),Object(a.jsx)("article",{children:Object(a.jsx)("h1",{children:"This Page / Feature is currently under construction"})})]})},I=function(){return Object(a.jsx)("main",{children:Object(a.jsxs)(d.c,{children:[Object(a.jsx)(d.a,{path:"/",component:h,exact:!0}),Object(a.jsx)(d.a,{path:"/home",component:h}),Object(a.jsx)(d.a,{path:"/aboutme",component:g}),Object(a.jsx)(d.a,{path:"/myplans",component:u}),Object(a.jsx)(d.a,{path:"/myprojects",component:f}),Object(a.jsx)(d.a,{path:"/links",component:v}),Object(a.jsx)(d.a,{path:"/contactme",component:k}),Object(a.jsx)(d.a,{path:"/puc",component:N}),Object(a.jsx)(d.a,{path:"/",component:p})]})})};n(28);s.a.render(Object(a.jsx)(c.a,{children:Object(a.jsx)(I,{})}),document.getElementById("root"))},5:function(e){e.exports=JSON.parse('{"skills":[{"title":"C#","image":"https://bnewmandev.b-cdn.net/CSharp.png","body":".NET core and framework & Unity game engine","link":"","id":"c475df4a77274ab3b7dafac9e3a2c57c","tags":["C#"],"eg":[{"id":"6797ab61ccd84a67b8b97605ccf72973","heading":"WIP","body":"Work In Progress"}]},{"title":"Javascript","image":"https://bnewmandev.b-cdn.net/JavaScript.png","body":"Front-end and back end with NodeJS","link":"","id":"e278fa475e2540fdb1dda064d5d8b271","tags":["JS"],"eg":[{"id":"a168ab68a2f54ab7a2a3947b1fd42c99","heading":"WIP","body":"Work In Progress"}]},{"title":"HTML5 & CSS3","image":"https://bnewmandev.b-cdn.net/html.png","body":"SASS precompiler and JSON","link":"","id":"302366f3820a4ef29ffece75821b2c37","tags":["HTML"],"eg":[{"id":"37768b25298440d6afd70a5e9f5f0be9","heading":"WIP","body":"Work In Progress"}]},{"title":"React","image":"https://bnewmandev.b-cdn.net/React.png","body":"Advanced front-end development","link":"","id":"7471fd4736c84082bd766f98bec9214e","tags":["REACT"],"eg":[{"id":"13ddd81fdf6c4c0c8953513682539d83","heading":"WIP","body":"Work In Progress"}]},{"title":"Express","image":"https://bnewmandev.b-cdn.net/node.png","body":"Node JS based web servers","link":"","id":"7944f17655894aa2a17d9b7ef0d1e9cf","tags":["EXPRESS"],"eg":[{"id":"886c094c15ec41f6b4edd4f40ab64907","heading":"WIP","body":"Work In Progress"}]},{"title":"MongoDB","image":"https://bnewmandev.b-cdn.net/mongo.png","body":"With Mongoose and Express for APIs","link":"","id":"e5a2e52806074806b46a4bed4e80346a","tags":["MONGODB"],"eg":[{"id":"aef3c2b9cfc7497bb502c7f65a783867","heading":"WIP","body":"Work In Progress"}]},{"title":"Python","image":"https://bnewmandev.b-cdn.net/python.png","body":"Scripting and OOP","link":"","id":"f7360a45c00c497d944a1b7b0aa428d8","tags":["PYTHON"],"eg":[{"id":"e25a312929ee4c958407d0d5e9f8d0b0","heading":"WIP","body":"Work In Progress"},{"id":"1edf8aa0bd1242bd99970d9cfdebd345","heading":"WIP","body":"Work In Progress"}]},{"title":"R","image":"https://bnewmandev.b-cdn.net/r.png","body":"Data science and analysis","link":"","id":"b59b0a05b4474f97be6a852b69d60866","tags":["R"],"eg":[{"id":"37b7ff998ba04d72a29041a64452e344","heading":"WIP","body":"Work In Progress"}]},{"title":"SQL","image":"https://bnewmandev.b-cdn.net/postgres.png","body":"PostgreSQL and SQLite","link":"","id":"98ae3e4510144a6b81a892ea5f03f2a7","tags":["SQL"],"eg":[{"id":"41aa41f4c2354404a72b0561e5710462","heading":"WIP","body":"Work In Progress"}]}],"learning":[{"title":"Under Development","image":"https://bnewmandev.b-cdn.net/wip.png","body":"","link":"","id":"x"},{"title":"Under Development","image":"https://bnewmandev.b-cdn.net/wip.png","body":"","link":"","id":"y"}],"plans":[{"title":"API for this website","body":"I plan on changing the data dource for this website to a hosted API so that I can add a dev-diary and allow for the easier content updating. I plan on using MongoDB and express in order to do this","dateAdded":1613505032451,"id":"46fc5982322141c1817572884bb7d284"}],"projects":[{"title":"This Website","body":"This website has had a number of iterations since late 2020. The current version uses React for the front end using a static json file as a data source. SASS is used as a CSS preprocessor. A simple express server is used for hosting the site to allow the use of react router. The website is hosted on an ubuntu VPS using a NGINX reverse proxy with a letsencrypt signed SSL certificate","dateAdded":1613505032452,"id":"9ef16374cbe04f2da38556ff27577477"}]}')}},[[29,1,2]]]);
//# sourceMappingURL=main.f9a346bc.chunk.js.map