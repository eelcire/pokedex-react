(window.webpackJsonppokedex=window.webpackJsonppokedex||[]).push([[0],{41:function(e,a,t){e.exports=t.p+"static/media/loader.34cf5337.gif"},42:function(e,a,t){e.exports=t.p+"static/media/pokeball.f8427d33.png"},45:function(e,a,t){e.exports=t(75)},50:function(e,a,t){},52:function(e,a,t){},75:function(e,a,t){"use strict";t.r(a);var s=t(0),n=t.n(s),r=t(36),c=t.n(r),l=(t(50),t(14)),o=t(11),i=(t(51),t(52),t(5)),m=t(6),d=t(8),p=t(7),u=t(9),h=t(15),v=t(16);function g(){var e=Object(h.a)(["\n    text-decoration: none;\n    color: black;\n    &:focus, &:hover, &:visited, &:link, &:active {\n        text-decoration: none;\n    }\n"]);return g=function(){return e},e}var E=Object(v.a)(l.b)(g()),f=function(e){function a(){return Object(i.a)(this,a),Object(d.a)(this,Object(p.a)(a).apply(this,arguments))}return Object(u.a)(a,e),Object(m.a)(a,[{key:"render",value:function(){return n.a.createElement(s.Fragment,null,n.a.createElement("nav",{className:"navbar navbar-expand-md navbar-dark bg-dark fixed-top"},n.a.createElement(E,{to:"/",className:"navbar-brand col-sm-3 col-md-2 mr-0 align-items-center"},"Pokedex")))}}]),a}(s.Component),N=t(17),b=t.n(N),k=t(20),w=t(19),x=t.n(w),y=t(41),j=t.n(y);function O(){var e=Object(h.a)(["\n    text-decoration: none;\n    color: black;\n    &:focus, &:hover, &:visited, &:link, &:active {\n        text-decoration: none;\n    }\n"]);return O=function(){return e},e}function C(){var e=Object(h.a)(["\n    box-shadow: 0 1px 3px rbga(0, 0, 0, 0.12), 0 1px 2px rgba(0, 0, 0, 0.24);\n    transition: all 0.3s cubic-bezier(0.25, 0.8, 0.25, 1);\n    &:hover {\n        box-shadow: 0 14px 28px rgba(0, 0, 0, 0.25), 0 10px 10px rgba(0, 0, 0, 0.22);\n    }\n    -moz-user-select: none;\n    -website-user-select: none;\n    user-select: none;\n    -o-user-select:none;\n"]);return C=function(){return e},e}function A(){var e=Object(h.a)(["\n    width: 5em;\n    height: 5em;\n    display: none;\n"]);return A=function(){return e},e}var B=v.a.img(A()),D=v.a.div(C()),R=Object(v.a)(l.b)(O()),M=function(e){function a(){var e,t;Object(i.a)(this,a);for(var s=arguments.length,n=new Array(s),r=0;r<s;r++)n[r]=arguments[r];return(t=Object(d.a)(this,(e=Object(p.a)(a)).call.apply(e,[this].concat(n)))).state={name:"",imageUrl:"",pokemonIndex:""},t}return Object(u.a)(a,e),Object(m.a)(a,[{key:"componentDidMount",value:function(){var e=this.props,a=e.name,t=e.url,s=t.split("/")[t.split("/").length-2],n="https://github.com/PokeAPI/sprites/blob/master/sprites/pokemon/".concat(s,".png?raw=true");this.setState({name:a,imageUrl:n,pokemonIndex:s,imageLoading:!0,tooManyRequests:!1})}},{key:"render",value:function(){var e=this;return n.a.createElement("div",{className:"col-md-3 col-sm-6 mb-5"},n.a.createElement(R,{to:"pokemon/".concat(this.state.pokemonIndex)},n.a.createElement(D,{className:"card"},n.a.createElement("h5",{className:"card-header"},this.state.pokemonIndex),this.state.imageLoading?n.a.createElement("img",{src:j.a,style:{width:"5em",height:"5em"},className:"card-img-top rounded mx-auto d-block mt-2"}):null,n.a.createElement(B,{className:"card-img-top rounded mx-auto mt-2",onLoad:function(){return e.setState({imageLoading:!1})},onError:function(){return e.setState({tooManyRequests:!0})},src:this.state.imageUrl,style:this.state.tooManyRequests?{display:"none"}:this.state.imageLoading?null:{display:"block"}}),this.state.tooManyRequests?n.a.createElement("h6",{className:"mx-auto"},n.a.createElement("span",{className:"badge badge-danger mt-2"},"Too Many Requests")):null,n.a.createElement("div",{className:"card-body mx-auto"},n.a.createElement("h6",{className:"card-title"},this.state.name.toLowerCase().split(" ").map((function(e){return e.charAt(0).toUpperCase()+e.substring(1)})).join(" "))))))}}]),a}(s.Component),_=function(e){function a(){var e,t;Object(i.a)(this,a);for(var s=arguments.length,n=new Array(s),r=0;r<s;r++)n[r]=arguments[r];return(t=Object(d.a)(this,(e=Object(p.a)(a)).call.apply(e,[this].concat(n)))).state={url:"https://pokeapi.co/api/v2/pokemon/?limit=964",pokemon:null},t}return Object(u.a)(a,e),Object(m.a)(a,[{key:"componentDidMount",value:function(){var e=Object(k.a)(b.a.mark((function e(){var a;return b.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,x.a.get(this.state.url);case 2:a=e.sent,this.setState({pokemon:a.data.results});case 4:case"end":return e.stop()}}),e,this)})));return function(){return e.apply(this,arguments)}}()},{key:"render",value:function(){return n.a.createElement(s.Fragment,null,this.state.pokemon?n.a.createElement("div",{className:"row"},this.state.pokemon.map((function(e){return n.a.createElement(M,{name:e.name,url:e.url,key:e.name})}))):n.a.createElement("h1",null,"Loading Pokemon!"))}}]),a}(s.Component),F=function(e){function a(){return Object(i.a)(this,a),Object(d.a)(this,Object(p.a)(a).apply(this,arguments))}return Object(u.a)(a,e),Object(m.a)(a,[{key:"render",value:function(){return n.a.createElement("div",{className:"row"},n.a.createElement("div",{className:"col"},n.a.createElement(_,null)))}}]),a}(s.Component),S={bug:"B1C12E",dark:"4F3A2D",dragon:"755EDF",electric:"FCBC17",fairy:"F4B1F4",fighting:"823551D",fire:"E73B0C",flying:"A3B3F7",ghost:"6060B2",grass:"74C236",ground:"D3B357",ice:"A3E7FD",normal:"C8C4BC",poison:"934594",rock:"B9A156",steel:"B5B5C3",water:"3295F6"},I=function(e){function a(){var e,t;Object(i.a)(this,a);for(var s=arguments.length,n=new Array(s),r=0;r<s;r++)n[r]=arguments[r];return(t=Object(d.a)(this,(e=Object(p.a)(a)).call.apply(e,[this].concat(n)))).state={name:"",pokemonIndex:"",imageUrl:"",types:[],description:"",stats:{hp:"",attack:"",defense:"",speed:"",specialAttack:"",specialDefense:""},height:"",weight:"",eggGroups:"",abilities:"",genderRatioMale:"",genderRatioFemale:"",evs:"",hatchSteps:""},t}return Object(u.a)(a,e),Object(m.a)(a,[{key:"componentDidMount",value:function(){var e=Object(k.a)(b.a.mark((function e(){var a,t,s,n,r,c,l,o,i,m,d,p,u,h,v,g,E,f=this;return b.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return a=this.props.match.params.pokemonIndex,t="https://pokeapi.co/api/v2/pokemon/".concat(a,"/"),s="https://pokeapi.co/api/v2/pokemon-species/".concat(a,"/"),e.next=5,x.a.get(t);case 5:return n=e.sent,r=n.data.name,c=n.data.sprites.front_default,"",l="".hp,o="".attack,i="".defense,m="".speed,d="".specialAttack,p="".specialDefense,n.data.stats.map((function(e){switch(e.stat.name){case"hp":l=e.base_stat;break;case"attack":o=e.base_stat;break;case"defense":i=e.base_stat;break;case"speed":m=e.base_stat;break;case"special-attack":d=e.base_stat;break;case"special-defense":p=e.base_stat}})),u=Math.round(100*(.328084*n.data.height+1e-4))/100,h=Math.round(100*(.220462*n.data.weight+1e-4))/100,v=n.data.types.map((function(e){return e.type.name})),g=n.data.abilities.map((function(e){return e.ability.name.toLowerCase().split("-").map((function(e){return e.charAt(0).toUpperCase()+e.substring(1)})).join(" ")})),E=n.data.stats.filter((function(e){return e.effort>0})).map((function(e){return"".concat(e.effort," ").concat(e.stat.name.toLowerCase().split("-").map((function(e){return e.charAt(0).toUpperCase()+e.substring(1)})).join(" "))})).join(", "),e.next=17,x.a.get(s).then((function(e){var t="";e.data.flavor_text_entries.some((function(e){"en"!==e.language.name||(t=e.flavor_text)}));var s=12.5*e.data.gender_rate,n=100-s,N=Math.round(100/255*e.data.capture_rate),b=e.data.egg_groups.map((function(e){return e.name.toLowerCase().split("-").map((function(e){return e.charAt(0).toUpperCase()+e.substring(1)})).join(" ")})).join(", "),k=255*(e.data.hatch_counter+1);f.setState({description:t,genderRatioFemale:s,genderRatioMale:n,catchRate:N,eggGroups:b,hatchSteps:k}),f.setState({imageUrl:c,pokemonIndex:a,name:r,types:v,stats:{hp:l,attack:o,defense:i,speed:m,specialAttack:d,specialDefense:p},height:u,weight:h,abilities:g,evs:E})}));case 17:case"end":return e.stop()}}),e,this)})));return function(){return e.apply(this,arguments)}}()},{key:"render",value:function(){return n.a.createElement("div",{className:"col"},n.a.createElement("div",{className:"card"},n.a.createElement("div",{className:"card-header"},n.a.createElement("div",{className:"row"},n.a.createElement("div",{className:"col-5"},n.a.createElement("h5",null,this.state.pokemonIndex)),n.a.createElement("div",{className:"float-right"},this.state.types.map((function(e){return n.a.createElement("span",{key:e,className:"badge badge-primary badge-pill mr-1",style:{backgroundColor:"#".concat(S[e]),color:"white"}},e.toLowerCase().split("-").map((function(e){return e.charAt(0).toUpperCase()+e.substring(1)})).join(" "))}))))),n.a.createElement("div",{className:"card-body"},n.a.createElement("div",{className:"row align-items-center"},n.a.createElement("div",{className:"col-md-3"},n.a.createElement("img",{src:this.state.imageUrl,className:"card-img-top rounded mx-auto mt-2"})),n.a.createElement("div",{className:"col-md-9"},n.a.createElement("h4",{className:"mx-auto"},this.state.name.toLowerCase().split("-").map((function(e){return e.charAt(0).toUpperCase()+e.substring(1)})).join(" ")),n.a.createElement("div",{className:"row align-items-center"},n.a.createElement("div",{className:"col-12 col-md-3"},"HP"),n.a.createElement("div",{className:"col-12 col-md-9"},n.a.createElement("div",{className:"progress"},n.a.createElement("div",{className:"progress-bar",role:"progressBar",style:{width:"".concat(this.state.stats.hp,"%")},"aria-valuemin":"0","aria-valuemax":"100"},n.a.createElement("small",null,this.state.stats.hp))))),n.a.createElement("div",{className:"row align-items-center"},n.a.createElement("div",{className:"col-12 col-md-3"},"Attack"),n.a.createElement("div",{className:"col-12 col-md-9"},n.a.createElement("div",{className:"progress"},n.a.createElement("div",{className:"progress-bar",role:"progressBar",style:{width:"".concat(this.state.stats.attack,"%")},"aria-valuemin":"0","aria-valuemax":"100"},n.a.createElement("small",null,this.state.stats.attack))))),n.a.createElement("div",{className:"row align-items-center"},n.a.createElement("div",{className:"col-12 col-md-3"},"Defense"),n.a.createElement("div",{className:"col-12 col-md-9"},n.a.createElement("div",{className:"progress"},n.a.createElement("div",{className:"progress-bar",role:"progressBar",style:{width:"".concat(this.state.stats.defense,"%")},"aria-valuemin":"0","aria-valuemax":"100"},n.a.createElement("small",null,this.state.stats.defense))))),n.a.createElement("div",{className:"row align-items-center"},n.a.createElement("div",{className:"col-12 col-md-3"},"Speed"),n.a.createElement("div",{className:"col-12 col-md-9"},n.a.createElement("div",{className:"progress"},n.a.createElement("div",{className:"progress-bar",role:"progressBar",style:{width:"".concat(this.state.stats.speed,"%")},"aria-valuemin":"0","aria-valuemax":"100"},n.a.createElement("small",null,this.state.stats.speed))))),n.a.createElement("div",{className:"row align-items-center"},n.a.createElement("div",{className:"col-12 col-md-3"},"Special Attack"),n.a.createElement("div",{className:"col-12 col-md-9"},n.a.createElement("div",{className:"progress"},n.a.createElement("div",{className:"progress-bar",role:"progressBar",style:{width:"".concat(this.state.stats.specialAttack,"%")},"aria-valuemin":"0","aria-valuemax":"100"},n.a.createElement("small",null,this.state.stats.specialAttack))))),n.a.createElement("div",{className:"row align-items-center"},n.a.createElement("div",{className:"col-12 col-md-3"},"Special Defense"),n.a.createElement("div",{className:"col-12 col-md-9"},n.a.createElement("div",{className:"progress"},n.a.createElement("div",{className:"progress-bar",role:"progressBar",style:{width:"".concat(this.state.stats.specialDefense,"%")},"aria-valuemin":"0","aria-valuemax":"100"},n.a.createElement("small",null,this.state.stats.specialDefense)))))),n.a.createElement("div",{className:"row mt-1"},n.a.createElement("div",{className:"col"},n.a.createElement("p",{className:"p-2"},this.state.description))))),n.a.createElement("hr",null),n.a.createElement("div",{className:"card-body"},n.a.createElement("h5",{className:"card-title text-center"},"Profile"),n.a.createElement("div",{className:"row"},n.a.createElement("div",{className:"col-md-6"},n.a.createElement("div",{className:"row"},n.a.createElement("div",{className:"col-md-6"},n.a.createElement("h6",{className:"float-right"},"Height:")),n.a.createElement("div",{className:"col-md-6"},n.a.createElement("h6",{className:"float-left"},this.state.height," ft"))),n.a.createElement("div",{className:"row"},n.a.createElement("div",{className:"col-md-6"},n.a.createElement("h6",{className:"float-right"},"Weight:")),n.a.createElement("div",{className:"col-md-6"},n.a.createElement("h6",{className:"float-left"},this.state.weight," ft"))),n.a.createElement("div",{className:"row"},n.a.createElement("div",{className:"col-md-6"},n.a.createElement("h6",{className:"float-right"},"Catch Rate:")),n.a.createElement("div",{className:"col-md-6"},n.a.createElement("h6",{className:"float-left"},this.state.catchRate," ft"))),n.a.createElement("div",{className:"row"},n.a.createElement("div",{className:"col-md-6"},n.a.createElement("h6",{className:"float-right"},"Gender Ratio:")),n.a.createElement("div",{className:"col-md-6"},n.a.createElement("div",{className:"progress"},n.a.createElement("div",{className:"progress-bar",role:"progressbar",style:{width:"".concat(this.state.genderRatioFemale,"%"),backgroundColor:"#C2185B"},"aria-valuemin":"0","aria-valuemax":"100"},n.a.createElement("small",null,this.state.genderRatioFemale)),n.a.createElement("div",{className:"progress-bar",role:"progressbar",style:{width:"".concat(this.state.genderRatioMale,"%"),backgroundColor:"#1976D2"},"aria-valuemin":"0","aria-valuemax":"100"},n.a.createElement("small",null,this.state.genderRatioMale)))))),n.a.createElement("div",{className:"col-md-6"},n.a.createElement("div",{className:"row"},n.a.createElement("div",{className:"col-md-6"},n.a.createElement("h6",{className:"float-right"},"Egg Groups:")),n.a.createElement("div",{className:"col-md-6"},n.a.createElement("h6",{className:"float-left"},this.state.eggGroups))),n.a.createElement("div",{className:"row"},n.a.createElement("div",{className:"col-md-6"},n.a.createElement("h6",{className:"float-right"},"Hatch Steps")),n.a.createElement("div",{className:"col-md-6"},n.a.createElement("h6",{className:"float-left"},this.state.hatchSteps))),n.a.createElement("div",{className:"row"},n.a.createElement("div",{className:"col-md-6"},n.a.createElement("h6",{className:"float-right"},"Abilities:")),n.a.createElement("div",{className:"col-md-6"},n.a.createElement("h6",{className:"float-left"},this.state.abilities))),n.a.createElement("div",{className:"row"},n.a.createElement("div",{className:"col-md-6"},n.a.createElement("h6",{className:"float-right"},"EVs:")),n.a.createElement("div",{className:"col-md-6"},n.a.createElement("h6",{className:"float-left"},this.state.evs)))))),n.a.createElement("div",{className:"card-footer text-muted"},"Data from ",n.a.createElement("a",{href:"https://pokeapi.co/",target:"_blank",className:"card-link"},"PokeAPI.co"))))}}]),a}(s.Component),L=t(42),U=t.n(L);var P=function(){return n.a.createElement(l.a,null,n.a.createElement("div",{className:"App",style:{background:"url(".concat(U.a,")")}},n.a.createElement(f,null),n.a.createElement("div",{className:"container"},n.a.createElement(o.c,null,n.a.createElement(o.a,{exact:!0,path:"/",component:F}),n.a.createElement(o.a,{exact:!0,path:"/pokemon/:pokemonIndex",component:I}),n.a.createElement(F,null)))))};Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));c.a.render(n.a.createElement(P,null),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then((function(e){e.unregister()}))}},[[45,1,2]]]);
//# sourceMappingURL=main.d6d4bad9.chunk.js.map