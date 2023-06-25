"use strict";var u=globalThis&&globalThis.__assign||function(){return u=Object.assign||function(t){for(var i,n=1,o=arguments.length;n<o;n++){i=arguments[n];for(var a in i)Object.prototype.hasOwnProperty.call(i,a)&&(t[a]=i[a])}return t},u.apply(this,arguments)},g=globalThis&&globalThis.__awaiter||function(t,i,n,o){function a(e){return e instanceof n?e:new n(function(l){l(e)})}return new(n||(n=Promise))(function(e,l){function c(s){try{r(o.next(s))}catch(f){l(f)}}function d(s){try{r(o.throw(s))}catch(f){l(f)}}function r(s){s.done?e(s.value):a(s.value).then(c,d)}r((o=o.apply(t,i||[])).next())})},h=globalThis&&globalThis.__generator||function(t,i){var n={label:0,sent:function(){if(e[0]&1)throw e[1];return e[1]},trys:[],ops:[]},o,a,e,l;return l={next:c(0),throw:c(1),return:c(2)},typeof Symbol=="function"&&(l[Symbol.iterator]=function(){return this}),l;function c(r){return function(s){return d([r,s])}}function d(r){if(o)throw new TypeError("Generator is already executing.");for(;n;)try{if(o=1,a&&(e=r[0]&2?a.return:r[0]?a.throw||((e=a.return)&&e.call(a),0):a.next)&&!(e=e.call(a,r[1])).done)return e;switch(a=0,e&&(r=[r[0]&2,e.value]),r[0]){case 0:case 1:e=r;break;case 4:return n.label++,{value:r[1],done:!1};case 5:n.label++,a=r[1],r=[0];continue;case 7:r=n.ops.pop(),n.trys.pop();continue;default:if(e=n.trys,!(e=e.length>0&&e[e.length-1])&&(r[0]===6||r[0]===2)){n=0;continue}if(r[0]===3&&(!e||r[1]>e[0]&&r[1]<e[3])){n.label=r[1];break}if(r[0]===6&&n.label<e[1]){n.label=e[1],e=r;break}if(e&&n.label<e[2]){n.label=e[2],n.ops.push(r);break}e[2]&&n.ops.pop(),n.trys.pop();continue}r=i.call(t,n)}catch(s){r=[6,s],a=0}finally{o=e=0}if(r[0]&5)throw r[1];return{value:r[0]?r[1]:void 0,done:!0}}},p=globalThis,y={log:!0,timeout:3e4},m="iframe";function b(t){return new Promise(function(i){return setTimeout(i,t)})}var v=function(t,i){t===void 0?t=m:typeof t=="object"&&(i=t,t=m);var n=u(u({},y),i),o=n.log?Cypress.log({name:"frame loaded",displayName:"frame loaded",message:[t]}).snapshot():null;return cy.get(t,{log:!1}).then({timeout:n.timeout},function(a){return g(p,void 0,void 0,function(){var e,l,c,d,r;return h(this,function(s){switch(s.label){case 0:if((d=o)===null||d===void 0||d.set("$el",a),a.length!==1)throw new Error("cypress-iframe commands can only be applied to exactly one iframe at a time.  Instead found "+a.length);e=a.prop("contentWindow"),l=n.url?function(){var f;return typeof n.url=="string"?e.location.toString().includes(n.url):(f=n.url)===null||f===void 0?void 0:f.test(e.location.toString())}:function(){return e.location.toString()!=="about:blank"},s.label=1;case 1:return l()?[3,3]:[4,b(100)];case 2:return s.sent(),[3,1];case 3:return e.document.readyState==="complete"?[2,a]:(c=Cypress.log({name:"Frame Load",message:[e.location.toString()],event:!0}).snapshot(),[4,new Promise(function(f){Cypress.$(e).on("load",f)})]);case 4:return s.sent(),c.end(),(r=o)===null||r===void 0||r.finish(),[2,a]}})})})};Cypress.Commands.add("frameLoaded",v);var w=function(t,i){t===void 0?t=m:typeof t=="object"&&(i=t,t=m);var n=u(u({},y),i),o=n.log?Cypress.log({name:"iframe",displayName:"iframe",message:[t]}).snapshot():null;return cy.frameLoaded(t,u(u({},n),{log:!1})).then(function(a){var e;(e=o)===null||e===void 0||e.set("$el",a).end();var l=a.prop("contentWindow");return Cypress.$(l.document.body)})};Cypress.Commands.add("iframe",w);var _=function(t,i){t===void 0?t=m:typeof t=="object"&&(i=t,t=m);var n=u(u({},y),i),o=n.log?Cypress.log({name:"enter",displayName:"enter",message:[t]}).snapshot():null;return cy.iframe(t,u(u({},n),{log:!1})).then(function(a){var e;return(e=o)===null||e===void 0||e.set("$el",a).end(),function(){return cy.wrap(a,{log:!1})}})};Cypress.Commands.add("enter",_);Cypress.Commands.add("CGFillCreditCardForm",t=>{if(Cypress.config("chromeWebSecurity"))throw new Error('You must set `{ "chromeWebSecurity": false }` in `cypress.json`, or cypress-plugin-stripe-elements cannot access the Stripe Elements <iframe> to perform autofill.');cy.get("iframe#cg-iframe").iframe().should("exist").should("be.visible").then(i=>{const n=i.contents().find("body");expect(n).not.to.be.empty}).within(i=>{for(const[n,o]of Object.entries(t.cardNumberData))cy.get(`[name="${n}"]`).then(a=>{const e=a.prop("tagName").toLowerCase();e==="input"?cy.wrap(a).clear().type(o):e==="select"&&cy.wrap(a).select(o)});t.saveCard!==!1&&cy.get("#tns-box").check({force:!0}),t.submit!==!1&&cy.get("#cg-form").submit()})});Cypress.Commands.add("CGGetIframe",()=>cy.get("iframe#cg-iframe").iframe());const C=Object.freeze(Object.defineProperty({__proto__:null},Symbol.toStringTag,{value:"Module"}));module.exports=C;
//# sourceMappingURL=support.js.map
