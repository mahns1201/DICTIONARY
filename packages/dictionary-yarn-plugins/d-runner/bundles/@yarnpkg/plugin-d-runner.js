/* eslint-disable */
//prettier-ignore
module.exports = {
name: "@yarnpkg/plugin-d-runner",
factory: function (require) {
var plugin=(()=>{var F=Object.create;var g=Object.defineProperty;var q=Object.getOwnPropertyDescriptor;var W=Object.getOwnPropertyNames;var M=Object.getPrototypeOf,H=Object.prototype.hasOwnProperty;var l=(t=>typeof require<"u"?require:typeof Proxy<"u"?new Proxy(t,{get:(r,e)=>(typeof require<"u"?require:r)[e]}):t)(function(t){if(typeof require<"u")return require.apply(this,arguments);throw new Error('Dynamic require of "'+t+'" is not supported')});var Q=(t,r)=>{for(var e in r)g(t,e,{get:r[e],enumerable:!0})},A=(t,r,e,s)=>{if(r&&typeof r=="object"||typeof r=="function")for(let o of W(r))!H.call(t,o)&&o!==e&&g(t,o,{get:()=>r[o],enumerable:!(s=q(r,o))||s.enumerable});return t};var f=(t,r,e)=>(e=t!=null?F(M(t)):{},A(r||!t||!t.__esModule?g(e,"default",{value:t,enumerable:!0}):e,t)),J=t=>A(g({},"__esModule",{value:!0}),t);var Z={};Q(Z,{default:()=>Y});var I=l("@yarnpkg/core"),x=l("@yarnpkg/fslib"),P=l("@yarnpkg/cli");var j=f(l("fs")),N=f(l("path"));var m=class{value;end;child;constructor(r=""){this.value=r,this.end=!1,this.child={}}},E=class{root;cursor;constructor(){this.root=new m,this.cursor=this.root}insert(r){let e=this.root;for(let s=0;s<r.length;s++){let o=r[s];e.child[o]===void 0&&(e.child[o]=new m(o)),e=e.child[o]}e.end=!0}search(r){let e="",s=this.root;for(let o=0;o<r.length;o++){let n=r[o];if(e+=n,s.child[n])s=s.child[n];else return null}return s.end?e:null}iterateSearch(r){return this.cursor.child[r]?(this.cursor=this.cursor.child[r],!0):(this.cursor=this.root,!1)}},b=E;var O=f(l("fs")),U=(t,r)=>{let e=new Set,s=o=>{if(e.add(o),O.default.lstatSync(o).isFile()){r(o);return}O.default.readdirSync(o).map(a=>{e.has(a)||s(`${o}/${a}`)})};s(t)},D=U;var k=f(l("crypto")),T=class{cache=new Map;get(r){let e=k.default.createHash("md5").update(r).digest("hex");if(this._has(e))return this.cache.get(e)}set(r,e){let s=k.default.createHash("md5").update(r).digest("hex");this.cache.set(s,e)}has(r){let e=k.default.createHash("md5").update(r).digest("hex");return this._has(e)}clear(){this.cache.clear()}_has(r){return this.cache.has(r)}};var v=class extends Error{constructor(r){super(r)}},y=class extends Error{constructor(r,e){let{errorLine:s,errorCursor:o,errorLineStr:n}=e;super(`DuplciatedError(${o}:${s}) ${r}
${n}`)}},u=class extends Error{constructor(r,e){let{errorLine:s,errorCursor:o,errorLineStr:n}=e;super(`DSyntaxError(${o}:${s}) ${r}
${n}`)}};var w={Common:"Common",Frontend:"Frontend",Backend:"Backend",Database:"Database",Devops:"Devops"},c={Title:"Title",Label:"Label",Tag:"Tag",Body:"Body"},i={Sharp:"#",Space:" ",LineBreak:`
`,Mark:"!",OpenAngleBrackets:"<",ClosedAngleBrackets:">",A:"a",OpenSqureBracket:"[",CloseSqureBracket:"]",Eqaul:"=",Slash:"/",DoubleQuote:'"',Dash:"-"};var p=class{_type;_content;constructor(r){this._content=r}get content(){return this._content}},C=class extends p{_attributes;constructor(r,e){super(r),this._attributes=e,this._type=c.Tag}get url(){return this._attributes.href}},L=class extends p{constructor(r){super(r),this._type=c.Title}},S=class extends p{constructor(r){super(r),this._type=c.Body}},B=class extends p{constructor(r){if(!Object.values(w).includes(r))throw new v(`${r}\uB294 \uC874\uC7AC\uD558\uC9C0 \uC54A\uB294 \uB77C\uBCA8\uC785\uB2C8\uB2E4.`);super(r),this._type=c.Label}get type(){return this._type}};var $=class{tokens={title:null,labels:[],tags:[],body:null};_cursor=0;line=0;text="";get cursor(){return this._cursor}get errorLineStr(){return this.text.split(i.LineBreak)[this.line].trim()}moveCursor(r=1){let e=this._cursor;for(let s=0;s<r&&this._cursor<this.text.length;s++)this.text[this._cursor]===i.LineBreak&&this.line++,this._cursor++;return e}resetCursor(){this._cursor=0}cache;labelTrie;tagKeywordTrie;constructor(r){this.labelTrie=new b,this.tagKeywordTrie=new b,Object.values(w).map(e=>this.labelTrie.insert(e)),this.tagKeywordTrie.insert("href"),this.paths.set(c.Body,this.tokenizeBody.bind(this)),this.paths.set(c.Title,this.tokenizerTitle.bind(this)),this.paths.set(c.Label,this.tokenizeLabel.bind(this)),this.paths.set(c.Tag,this.tokenizeTag.bind(this)),this.paths.set("None",this.next.bind(this)),this.cache=r||new T}next(){return null}nomalizeToken(){return{title:this.tokens.title.content,slug:this.tokens.title.content[0],labels:this.tokens.labels.map(r=>r.content),tags:this.tokens.tags.map(r=>({title:r.content,link:r.url})),body:this.tokens.body.content}}paths=new Map;route(r){if(this.cache.has(r))return this.cache.get(r);let e=this.cursor;switch(!0){case r[e]+r[e+1]+r[e+2]===i.Dash.repeat(3):return c.Body;case(r[e]===i.Sharp&&r[e+1]===i.Space):return c.Title;case(r[e]===i.Mark&&r[e+1]===i.OpenSqureBracket):return c.Label;case(r[e]===i.OpenAngleBrackets&&r[e+1]===i.A&&r[e+2]===i.Space):return c.Tag;default:return"None"}}tokenizerTitle(r){if(this.tokens.title)throw new y("Title\uC740 \uB2E8\uC5B4 \uB2F9 \uD558\uB098\uB9CC \uAC00\uC9C8 \uC218 \uC788\uC2B5\uB2C8\uB2E4.",{errorCursor:this.cursor,errorLineStr:this.errorLineStr,errorLine:this.line});let e="";for(this.moveCursor(2);r[this.cursor]!==i.LineBreak;)e+=r[this.moveCursor()];this.tokens.title=new L(e)}tokenizeBody(r){for(this.moveCursor(3);r[this.moveCursor(1)]==="-";);if(r[this.cursor-1]!==`
`)return;if(r[this.cursor]!==`
`)throw new u("Body \uB77C\uC778 \uC774\uD6C4\uC5D0\uB294 \uBC18\uB4DC\uC2DC \uACF5\uBC31\uC774 \uD558\uB098 \uB354 \uC788\uC5B4\uC57C \uD569\uB2C8\uB2E4.",{errorCursor:this.cursor,errorLineStr:this.errorLineStr,errorLine:this.line});this.moveCursor(1);let e="";for(;this.cursor<r.length;)e+=r[this.moveCursor(1)];this.tokens.body=new S(e)}tokenizeLabel(r){let e="";for(this.moveCursor(2);this.labelTrie.iterateSearch(r[this.cursor]);)e+=r[this.moveCursor(1)];try{let s=new B(e);this.tokens.labels.push(s)}catch{throw new u(`${e}\uB294 \uC874\uC7AC\uD558\uC9C0 \uC54A\uB294 \uB77C\uBCA8\uC785\uB2C8\uB2E4.`,{errorCursor:this.cursor,errorLineStr:this.errorLineStr,errorLine:this.line})}}tokenizeTag(r){let e={Keyword:"Keyword",Value:"Value"},s={},o="";this.moveCursor(3);let n="",a="",h=e.Keyword;for(;r[this.cursor]!==i.ClosedAngleBrackets&&this.cursor<r.length;){let d=r[this.moveCursor(1)];if(d===i.Space){if(!n)continue;Object.assign(s,{[n]:a||!0}),n="",a="",h=e.Keyword}else if(d===i.Eqaul){if(!n)throw new u("\uD0A4\uAC00 \uC5C6\uC2B5\uB2C8\uB2E4.",{errorCursor:this.cursor,errorLineStr:this.errorLineStr,errorLine:this.line});h=e.Value}else if(h===e.Keyword)n+=d;else{if(d===i.DoubleQuote)continue;a+=d}}if(Object.assign(s,{[n]:a||!!a}),this.moveCursor(1),r[this.cursor]!==i.Sharp)throw new u("\uD0A4\uC6CC\uB4DC\uB294 hash\uC5EC\uC57C \uD569\uB2C8\uB2E4.",{errorCursor:this.cursor,errorLineStr:this.errorLineStr,errorLine:this.line});for(this.moveCursor(1);r[this.cursor]!==i.OpenAngleBrackets;)o+=r[this.moveCursor(1)];if(!(r[this.cursor+1]===i.Slash&&r[this.cursor+2]===i.A&&r[this.cursor+3]===i.ClosedAngleBrackets))throw new u("\uC798\uBABB \uB2EB\uD78C \uD0DC\uADF8\uC785\uB2C8\uB2E4.",{errorCursor:this.cursor,errorLineStr:this.errorLineStr,errorLine:this.line});this.moveCursor(3),this.tokens.tags.push(new C(o,s))}parse(r){if(this.cache.has(r))return this.cache.get(r);for(this.text=r,this.resetCursor(),this.tokens={title:null,labels:[],tags:[],body:null};this.cursor<r.length-2;this.moveCursor(1)){let e=this.route(r);this.paths.get(e)(r)}return this.cache.set(r,this.tokens),this.tokens}},K=$;var G=t=>{let r=N.default.resolve(t,"DIC"),e=[];return D(r,o=>{let n=new K,a=j.default.readFileSync(o,{encoding:"utf-8"});n.parse(a);let h=n.nomalizeToken();e.push({[h.title]:{...h,path:o}})}),e},z=G;var V=l("clipanion"),_=class extends P.BaseCommand{constructor(){super(...arguments);this.output=V.Option.String("-o,--output",{description:"\uD30C\uC2F1 \uACB0\uACFC\uBB3C\uC744 \uCD9C\uB825\uD569\uB2C8\uB2E4. \uC608\uB97C \uB4E4\uC5B4 --output ./result.json \uCC98\uB7FC \uC0AC\uC6A9\uD560 \uC218 \uC788\uC2B5\uB2C8\uB2E4."})}async execute(){let e=await I.Configuration.find(this.context.cwd,this.context.plugins),{project:s}=await I.Project.find(e,this.context.cwd),o=s.topLevelWorkspace.cwd,n=z(o);if(this.output){let a=new x.NodeFS,h=x.npath.toPortablePath(this.output);a.writeFileSync(h,JSON.stringify(n),{encoding:"utf-8"})}console.log("No Problem :)")}};_.paths=[["d","runner"]];var X={commands:[_]},Y=X;return J(Z);})();
return plugin;
}
};
