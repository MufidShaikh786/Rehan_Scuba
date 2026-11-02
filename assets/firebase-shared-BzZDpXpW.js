const G=()=>{};var H={};/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const W=function(o){const t=[];let a=0;for(let f=0;f<o.length;f++){let u=o.charCodeAt(f);u<128?t[a++]=u:u<2048?(t[a++]=u>>6|192,t[a++]=u&63|128):(u&64512)===55296&&f+1<o.length&&(o.charCodeAt(f+1)&64512)===56320?(u=65536+((u&1023)<<10)+(o.charCodeAt(++f)&1023),t[a++]=u>>18|240,t[a++]=u>>12&63|128,t[a++]=u>>6&63|128,t[a++]=u&63|128):(t[a++]=u>>12|224,t[a++]=u>>6&63|128,t[a++]=u&63|128)}return t},J=function(o){const t=[];let a=0,f=0;for(;a<o.length;){const u=o[a++];if(u<128)t[f++]=String.fromCharCode(u);else if(u>191&&u<224){const g=o[a++];t[f++]=String.fromCharCode((u&31)<<6|g&63)}else if(u>239&&u<365){const g=o[a++],c=o[a++],y=o[a++],p=((u&7)<<18|(g&63)<<12|(c&63)<<6|y&63)-65536;t[f++]=String.fromCharCode(55296+(p>>10)),t[f++]=String.fromCharCode(56320+(p&1023))}else{const g=o[a++],c=o[a++];t[f++]=String.fromCharCode((u&15)<<12|(g&63)<<6|c&63)}}return t.join("")},U={byteToCharMap_:null,charToByteMap_:null,byteToCharMapWebSafe_:null,charToByteMapWebSafe_:null,ENCODED_VALS_BASE:"ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789",get ENCODED_VALS(){return this.ENCODED_VALS_BASE+"+/="},get ENCODED_VALS_WEBSAFE(){return this.ENCODED_VALS_BASE+"-_."},HAS_NATIVE_SUPPORT:typeof atob=="function",encodeByteArray(o,t){if(!Array.isArray(o))throw Error("encodeByteArray takes an array as a parameter");this.init_();const a=t?this.byteToCharMapWebSafe_:this.byteToCharMap_,f=[];for(let u=0;u<o.length;u+=3){const g=o[u],c=u+1<o.length,y=c?o[u+1]:0,p=u+2<o.length,m=p?o[u+2]:0,O=g>>2,v=(g&3)<<4|y>>4;let S=(y&15)<<2|m>>6,_=m&63;p||(_=64,c||(S=64)),f.push(a[O],a[v],a[S],a[_])}return f.join("")},encodeString(o,t){return this.HAS_NATIVE_SUPPORT&&!t?btoa(o):this.encodeByteArray(W(o),t)},decodeString(o,t){return this.HAS_NATIVE_SUPPORT&&!t?atob(o):J(this.decodeStringToByteArray(o,t))},decodeStringToByteArray(o,t){this.init_();const a=t?this.charToByteMapWebSafe_:this.charToByteMap_,f=[];for(let u=0;u<o.length;){const g=a[o.charAt(u++)],y=u<o.length?a[o.charAt(u)]:0;++u;const m=u<o.length?a[o.charAt(u)]:64;++u;const v=u<o.length?a[o.charAt(u)]:64;if(++u,g==null||y==null||m==null||v==null)throw new q;const S=g<<2|y>>4;if(f.push(S),m!==64){const _=y<<4&240|m>>2;if(f.push(_),v!==64){const w=m<<6&192|v;f.push(w)}}}return f},init_(){if(!this.byteToCharMap_){this.byteToCharMap_={},this.charToByteMap_={},this.byteToCharMapWebSafe_={},this.charToByteMapWebSafe_={};for(let o=0;o<this.ENCODED_VALS.length;o++)this.byteToCharMap_[o]=this.ENCODED_VALS.charAt(o),this.charToByteMap_[this.byteToCharMap_[o]]=o,this.byteToCharMapWebSafe_[o]=this.ENCODED_VALS_WEBSAFE.charAt(o),this.charToByteMapWebSafe_[this.byteToCharMapWebSafe_[o]]=o,o>=this.ENCODED_VALS_BASE.length&&(this.charToByteMap_[this.ENCODED_VALS_WEBSAFE.charAt(o)]=o,this.charToByteMapWebSafe_[this.ENCODED_VALS.charAt(o)]=o)}}};class q extends Error{constructor(){super(...arguments),this.name="DecodeBase64StringError"}}const K=function(o){const t=W(o);return U.encodeByteArray(t,!0)},F=function(o){return K(o).replace(/\./g,"")},Y=function(o){try{return U.decodeString(o,!0)}catch(t){console.error("base64Decode failed: ",t)}return null};/**
 * @license
 * Copyright 2022 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Q(){if(typeof self<"u")return self;if(typeof window<"u")return window;if(typeof global<"u")return global;throw new Error("Unable to locate global object.")}/**
 * @license
 * Copyright 2022 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const X=()=>Q().__FIREBASE_DEFAULTS__,Z=()=>{if(typeof process>"u"||typeof H>"u")return;const o=H.__FIREBASE_DEFAULTS__;if(o)return JSON.parse(o)},tt=()=>{if(typeof document>"u")return;let o;try{o=document.cookie.match(/__FIREBASE_DEFAULTS__=([^;]+)/)}catch{return}const t=o&&Y(o[1]);return t&&JSON.parse(t)},k=()=>{try{return G()||X()||Z()||tt()}catch(o){console.info(`Unable to get __FIREBASE_DEFAULTS__ due to: ${o}`);return}},et=o=>{var t,a;return(a=(t=k())==null?void 0:t.emulatorHosts)==null?void 0:a[o]},mt=o=>{const t=et(o);if(!t)return;const a=t.lastIndexOf(":");if(a<=0||a+1===t.length)throw new Error(`Invalid host ${t} with no separate hostname and port!`);const f=parseInt(t.substring(a+1),10);return t[0]==="["?[t.substring(1,a-1),f]:[t.substring(0,a),f]},bt=()=>{var o;return(o=k())==null?void 0:o.config},vt=o=>{var t;return(t=k())==null?void 0:t[`_${o}`]};/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class rt{constructor(){this.reject=()=>{},this.resolve=()=>{},this.promise=new Promise((t,a)=>{this.resolve=t,this.reject=a})}wrapCallback(t){return(a,f)=>{a?this.reject(a):this.resolve(f),typeof t=="function"&&(this.promise.catch(()=>{}),t.length===1?t(a):t(a,f))}}}/**
 * @license
 * Copyright 2021 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Et(o,t){if(o.uid)throw new Error('The "uid" field is no longer supported by mockUserToken. Please use "sub" instead for Firebase Auth User ID.');const a={alg:"none",type:"JWT"},f=t||"demo-project",u=o.iat||0,g=o.sub||o.user_id;if(!g)throw new Error("mockUserToken must contain 'sub' or 'user_id' field!");const c={iss:`https://securetoken.google.com/${f}`,aud:f,iat:u,exp:u+3600,auth_time:u,sub:g,user_id:g,firebase:{sign_in_provider:"custom",identities:{}},...o};return[F(JSON.stringify(a)),F(JSON.stringify(c)),""].join(".")}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function $(){return typeof navigator<"u"&&typeof navigator.userAgent=="string"?navigator.userAgent:""}function wt(){return typeof window<"u"&&!!(window.cordova||window.phonegap||window.PhoneGap)&&/ios|iphone|ipod|ipad|android|blackberry|iemobile/i.test($())}function St(){return typeof window<"u"||nt()}function nt(){return typeof WorkerGlobalScope<"u"&&typeof self<"u"&&self instanceof WorkerGlobalScope}function _t(){return typeof navigator<"u"&&navigator.userAgent==="Cloudflare-Workers"}function At(){const o=typeof chrome=="object"?chrome.runtime:typeof browser=="object"?browser.runtime:void 0;return typeof o=="object"&&o.id!==void 0}function It(){return typeof navigator=="object"&&navigator.product==="ReactNative"}function Ct(){const o=$();return o.indexOf("MSIE ")>=0||o.indexOf("Trident/")>=0}function Ot(){try{return typeof indexedDB=="object"}catch{return!1}}function Dt(){return new Promise((o,t)=>{try{let a=!0;const f="validate-browser-context-for-indexeddb-analytics-module",u=self.indexedDB.open(f);u.onsuccess=()=>{u.result.close(),a||self.indexedDB.deleteDatabase(f),o(!0)},u.onupgradeneeded=()=>{a=!1},u.onerror=()=>{var g;t(((g=u.error)==null?void 0:g.message)||"")}}catch(a){t(a)}})}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const ot="FirebaseError";class R extends Error{constructor(t,a,f){super(a),this.code=t,this.customData=f,this.name=ot,Object.setPrototypeOf(this,R.prototype),Error.captureStackTrace&&Error.captureStackTrace(this,it.prototype.create)}}class it{constructor(t,a,f){this.service=t,this.serviceName=a,this.errors=f}create(t,...a){const f=a[0]||{},u=`${this.service}/${t}`,g=this.errors[t],c=g?st(g,f):"Error",y=`${this.serviceName}: ${c} (${u}).`;return new R(u,y,f)}}function st(o,t){try{let a=0,f="";for(;a<o.length;){const u=o.indexOf("{$",a);if(u===-1){f+=o.substring(a);break}const g=o.indexOf("}",u+2);if(g===-1){f+=o.substring(a);break}const c=o.substring(u+2,g),y=t[c];f+=o.substring(a,u)+(y!=null?String(y):`<${c}?>`),a=g+1}return f}catch{return o}}function Bt(o){for(const t in o)if(Object.prototype.hasOwnProperty.call(o,t))return!1;return!0}function ht(o,t){if(o===t)return!0;const a=Object.keys(o),f=Object.keys(t);for(const u of a){if(!f.includes(u))return!1;const g=o[u],c=t[u];if(j(g)&&j(c)){if(!ht(g,c))return!1}else if(g!==c)return!1}for(const u of f)if(!a.includes(u))return!1;return!0}function j(o){return o!==null&&typeof o=="object"}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Mt(o){const t=[];for(const[a,f]of Object.entries(o))Array.isArray(f)?f.forEach(u=>{t.push(encodeURIComponent(a)+"="+encodeURIComponent(u))}):t.push(encodeURIComponent(a)+"="+encodeURIComponent(f));return t.length?"&"+t.join("&"):""}function Tt(o){const t={};return o.replace(/^\?/,"").split("&").forEach(f=>{if(f){const[u,g]=f.split("=");t[decodeURIComponent(u)]=decodeURIComponent(g)}}),t}function Nt(o){const t=o.indexOf("?");if(!t)return"";const a=o.indexOf("#",t);return o.substring(t,a>0?a:void 0)}function kt(o,t){const a=new lt(o,t);return a.subscribe.bind(a)}class lt{constructor(t,a){this.observers=[],this.unsubscribes=[],this.observerCount=0,this.task=Promise.resolve(),this.finalized=!1,this.onNoObservers=a,this.task.then(()=>{t(this)}).catch(f=>{this.error(f)})}next(t){this.forEachObserver(a=>{a.next(t)})}error(t){this.forEachObserver(a=>{a.error(t)}),this.close(t)}complete(){this.forEachObserver(t=>{t.complete()}),this.close()}subscribe(t,a,f){let u;if(t===void 0&&a===void 0&&f===void 0)throw new Error("Missing Observer.");at(t,["next","error","complete"])?u=t:u={next:t,error:a,complete:f},u.next===void 0&&(u.next=N),u.error===void 0&&(u.error=N),u.complete===void 0&&(u.complete=N);const g=this.unsubscribeOne.bind(this,this.observers.length);return this.finalized&&this.task.then(()=>{try{this.finalError?u.error(this.finalError):u.complete()}catch{}}),this.observers.push(u),g}unsubscribeOne(t){this.observers===void 0||this.observers[t]===void 0||(delete this.observers[t],this.observerCount-=1,this.observerCount===0&&this.onNoObservers!==void 0&&this.onNoObservers(this))}forEachObserver(t){if(!this.finalized)for(let a=0;a<this.observers.length;a++)this.sendOne(a,t)}sendOne(t,a){this.task.then(()=>{if(this.observers!==void 0&&this.observers[t]!==void 0)try{a(this.observers[t])}catch(f){typeof console<"u"&&console.error&&console.error(f)}})}close(t){this.finalized||(this.finalized=!0,t!==void 0&&(this.finalError=t),this.task.then(()=>{this.observers=void 0,this.onNoObservers=void 0}))}}function at(o,t){if(typeof o!="object"||o===null)return!1;for(const a of t)if(a in o&&typeof o[a]=="function")return!0;return!1}function N(){}/**
 * @license
 * Copyright 2021 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Rt(o){return o&&o._delegate?o._delegate:o}/**
 * @license
 * Copyright 2025 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function zt(o){try{return(o.startsWith("http://")||o.startsWith("https://")?new URL(o).hostname:o).endsWith(".cloudworkstations.dev")}catch{return!1}}async function Lt(o){return(await fetch(o,{credentials:"include"})).ok}class xt{constructor(t,a,f){this.name=t,this.instanceFactory=a,this.type=f,this.multipleInstances=!1,this.serviceProps={},this.instantiationMode="LAZY",this.onInstanceCreated=null}setInstantiationMode(t){return this.instantiationMode=t,this}setMultipleInstances(t){return this.multipleInstances=t,this}setServiceProps(t){return this.serviceProps=t,this}setInstanceCreatedCallback(t){return this.onInstanceCreated=t,this}}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const I="[DEFAULT]";/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class ut{constructor(t,a){this.name=t,this.container=a,this.component=null,this.instances=new Map,this.instancesDeferred=new Map,this.instancesOptions=new Map,this.onInitCallbacks=new Map}get(t){const a=this.normalizeInstanceIdentifier(t);if(!this.instancesDeferred.has(a)){const f=new rt;if(this.instancesDeferred.set(a,f),this.isInitialized(a)||this.shouldAutoInitialize())try{const u=this.getOrInitializeService({instanceIdentifier:a});u&&f.resolve(u)}catch{}}return this.instancesDeferred.get(a).promise}getImmediate(t){const a=this.normalizeInstanceIdentifier(t==null?void 0:t.identifier),f=(t==null?void 0:t.optional)??!1;if(this.isInitialized(a)||this.shouldAutoInitialize())try{return this.getOrInitializeService({instanceIdentifier:a})}catch(u){if(f)return null;throw u}else{if(f)return null;throw Error(`Service ${this.name} is not available`)}}getComponent(){return this.component}setComponent(t){if(t.name!==this.name)throw Error(`Mismatching Component ${t.name} for Provider ${this.name}.`);if(this.component)throw Error(`Component for ${this.name} has already been provided`);if(this.component=t,!!this.shouldAutoInitialize()){if(ct(t))try{this.getOrInitializeService({instanceIdentifier:I})}catch{}for(const[a,f]of this.instancesDeferred.entries()){const u=this.normalizeInstanceIdentifier(a);try{const g=this.getOrInitializeService({instanceIdentifier:u});f.resolve(g)}catch{}}}}clearInstance(t=I){this.instancesDeferred.delete(t),this.instancesOptions.delete(t),this.instances.delete(t)}async delete(){const t=Array.from(this.instances.values());await Promise.all([...t.filter(a=>"INTERNAL"in a).map(a=>a.INTERNAL.delete()),...t.filter(a=>"_delete"in a).map(a=>a._delete())])}isComponentSet(){return this.component!=null}isInitialized(t=I){return this.instances.has(t)}getOptions(t=I){return this.instancesOptions.get(t)||{}}initialize(t={}){const{options:a={}}=t,f=this.normalizeInstanceIdentifier(t.instanceIdentifier);if(this.isInitialized(f))throw Error(`${this.name}(${f}) has already been initialized`);if(!this.isComponentSet())throw Error(`Component ${this.name} has not been registered yet`);const u=this.getOrInitializeService({instanceIdentifier:f,options:a});for(const[g,c]of this.instancesDeferred.entries()){const y=this.normalizeInstanceIdentifier(g);f===y&&c.resolve(u)}return u}onInit(t,a){const f=this.normalizeInstanceIdentifier(a),u=this.onInitCallbacks.get(f)??new Set;u.add(t),this.onInitCallbacks.set(f,u);const g=this.instances.get(f);return g&&t(g,f),()=>{u.delete(t)}}invokeOnInitCallbacks(t,a){const f=this.onInitCallbacks.get(a);if(f)for(const u of f)try{u(t,a)}catch{}}getOrInitializeService({instanceIdentifier:t,options:a={}}){let f=this.instances.get(t);if(!f&&this.component&&(f=this.component.instanceFactory(this.container,{instanceIdentifier:ft(t),options:a}),this.instances.set(t,f),this.instancesOptions.set(t,a),this.invokeOnInitCallbacks(f,t),this.component.onInstanceCreated))try{this.component.onInstanceCreated(this.container,t,f)}catch{}return f||null}normalizeInstanceIdentifier(t=I){return this.component?this.component.multipleInstances?t:I:t}shouldAutoInitialize(){return!!this.component&&this.component.instantiationMode!=="EXPLICIT"}}function ft(o){return o===I?void 0:o}function ct(o){return o.instantiationMode==="EAGER"}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Ht{constructor(t){this.name=t,this.providers=new Map}addComponent(t){const a=this.getProvider(t.name);if(a.isComponentSet())throw new Error(`Component ${t.name} has already been registered with ${this.name}`);a.setComponent(t)}addOrOverwriteComponent(t){this.getProvider(t.name).isComponentSet()&&this.providers.delete(t.name),this.addComponent(t)}getProvider(t){if(this.providers.has(t))return this.providers.get(t);const a=new ut(t,this);return this.providers.set(t,a),a}getProviders(){return Array.from(this.providers.values())}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const z=[];var d;(function(o){o[o.DEBUG=0]="DEBUG",o[o.VERBOSE=1]="VERBOSE",o[o.INFO=2]="INFO",o[o.WARN=3]="WARN",o[o.ERROR=4]="ERROR",o[o.SILENT=5]="SILENT"})(d||(d={}));const V={debug:d.DEBUG,verbose:d.VERBOSE,info:d.INFO,warn:d.WARN,error:d.ERROR,silent:d.SILENT},gt=d.INFO,dt={[d.DEBUG]:"log",[d.VERBOSE]:"log",[d.INFO]:"info",[d.WARN]:"warn",[d.ERROR]:"error"},pt=(o,t,...a)=>{if(t<o.logLevel)return;const f=new Date().toISOString(),u=dt[t];if(u)console[u](`[${f}]  ${o.name}:`,...a);else throw new Error(`Attempted to log a message with an invalid logType (value: ${t})`)};class Ft{constructor(t){this.name=t,this._logLevel=gt,this._logHandler=pt,this._userLogHandler=null,z.push(this)}get logLevel(){return this._logLevel}set logLevel(t){if(!(t in d))throw new TypeError(`Invalid value "${t}" assigned to \`logLevel\``);this._logLevel=t}setLogLevel(t){this._logLevel=typeof t=="string"?V[t]:t}get logHandler(){return this._logHandler}set logHandler(t){if(typeof t!="function")throw new TypeError("Value assigned to `logHandler` must be a function");this._logHandler=t}get userLogHandler(){return this._userLogHandler}set userLogHandler(t){this._userLogHandler=t}debug(...t){this._userLogHandler&&this._userLogHandler(this,d.DEBUG,...t),this._logHandler(this,d.DEBUG,...t)}log(...t){this._userLogHandler&&this._userLogHandler(this,d.VERBOSE,...t),this._logHandler(this,d.VERBOSE,...t)}info(...t){this._userLogHandler&&this._userLogHandler(this,d.INFO,...t),this._logHandler(this,d.INFO,...t)}warn(...t){this._userLogHandler&&this._userLogHandler(this,d.WARN,...t),this._logHandler(this,d.WARN,...t)}error(...t){this._userLogHandler&&this._userLogHandler(this,d.ERROR,...t),this._logHandler(this,d.ERROR,...t)}}function jt(o){z.forEach(t=>{t.setLogLevel(o)})}function Pt(o,t){for(const a of z){let f=null;t&&t.level&&(f=V[t.level]),o===null?a.userLogHandler=null:a.userLogHandler=(u,g,...c)=>{const y=c.map(p=>{if(p==null)return null;if(typeof p=="string")return p;if(typeof p=="number"||typeof p=="boolean")return p.toString();if(p instanceof Error)return p.message;try{return JSON.stringify(p)}catch{return null}}).filter(p=>p).join(" ");g>=(f??u.logLevel)&&o({level:d[g].toLowerCase(),message:y,args:c,type:u.name})}}}var P=typeof globalThis<"u"?globalThis:typeof window<"u"?window:typeof global<"u"?global:typeof self<"u"?self:{};/** @license
Copyright The Closure Library Authors.
SPDX-License-Identifier: Apache-2.0
*/var yt;(function(){var o;/** @license

 Copyright The Closure Library Authors.
 SPDX-License-Identifier: Apache-2.0
*/function t(i,e){function n(){}n.prototype=e.prototype,i.F=e.prototype,i.prototype=new n,i.prototype.constructor=i,i.D=function(h,s,l){for(var r=Array(arguments.length-2),A=2;A<arguments.length;A++)r[A-2]=arguments[A];return e.prototype[s].apply(h,r)}}function a(){this.blockSize=-1}function f(){this.blockSize=-1,this.blockSize=64,this.g=Array(4),this.C=Array(this.blockSize),this.o=this.h=0,this.u()}t(f,a),f.prototype.u=function(){this.g[0]=1732584193,this.g[1]=4023233417,this.g[2]=2562383102,this.g[3]=271733878,this.o=this.h=0};function u(i,e,n){n||(n=0);const h=Array(16);if(typeof e=="string")for(var s=0;s<16;++s)h[s]=e.charCodeAt(n++)|e.charCodeAt(n++)<<8|e.charCodeAt(n++)<<16|e.charCodeAt(n++)<<24;else for(s=0;s<16;++s)h[s]=e[n++]|e[n++]<<8|e[n++]<<16|e[n++]<<24;e=i.g[0],n=i.g[1],s=i.g[2];let l=i.g[3],r;r=e+(l^n&(s^l))+h[0]+3614090360&4294967295,e=n+(r<<7&4294967295|r>>>25),r=l+(s^e&(n^s))+h[1]+3905402710&4294967295,l=e+(r<<12&4294967295|r>>>20),r=s+(n^l&(e^n))+h[2]+606105819&4294967295,s=l+(r<<17&4294967295|r>>>15),r=n+(e^s&(l^e))+h[3]+3250441966&4294967295,n=s+(r<<22&4294967295|r>>>10),r=e+(l^n&(s^l))+h[4]+4118548399&4294967295,e=n+(r<<7&4294967295|r>>>25),r=l+(s^e&(n^s))+h[5]+1200080426&4294967295,l=e+(r<<12&4294967295|r>>>20),r=s+(n^l&(e^n))+h[6]+2821735955&4294967295,s=l+(r<<17&4294967295|r>>>15),r=n+(e^s&(l^e))+h[7]+4249261313&4294967295,n=s+(r<<22&4294967295|r>>>10),r=e+(l^n&(s^l))+h[8]+1770035416&4294967295,e=n+(r<<7&4294967295|r>>>25),r=l+(s^e&(n^s))+h[9]+2336552879&4294967295,l=e+(r<<12&4294967295|r>>>20),r=s+(n^l&(e^n))+h[10]+4294925233&4294967295,s=l+(r<<17&4294967295|r>>>15),r=n+(e^s&(l^e))+h[11]+2304563134&4294967295,n=s+(r<<22&4294967295|r>>>10),r=e+(l^n&(s^l))+h[12]+1804603682&4294967295,e=n+(r<<7&4294967295|r>>>25),r=l+(s^e&(n^s))+h[13]+4254626195&4294967295,l=e+(r<<12&4294967295|r>>>20),r=s+(n^l&(e^n))+h[14]+2792965006&4294967295,s=l+(r<<17&4294967295|r>>>15),r=n+(e^s&(l^e))+h[15]+1236535329&4294967295,n=s+(r<<22&4294967295|r>>>10),r=e+(s^l&(n^s))+h[1]+4129170786&4294967295,e=n+(r<<5&4294967295|r>>>27),r=l+(n^s&(e^n))+h[6]+3225465664&4294967295,l=e+(r<<9&4294967295|r>>>23),r=s+(e^n&(l^e))+h[11]+643717713&4294967295,s=l+(r<<14&4294967295|r>>>18),r=n+(l^e&(s^l))+h[0]+3921069994&4294967295,n=s+(r<<20&4294967295|r>>>12),r=e+(s^l&(n^s))+h[5]+3593408605&4294967295,e=n+(r<<5&4294967295|r>>>27),r=l+(n^s&(e^n))+h[10]+38016083&4294967295,l=e+(r<<9&4294967295|r>>>23),r=s+(e^n&(l^e))+h[15]+3634488961&4294967295,s=l+(r<<14&4294967295|r>>>18),r=n+(l^e&(s^l))+h[4]+3889429448&4294967295,n=s+(r<<20&4294967295|r>>>12),r=e+(s^l&(n^s))+h[9]+568446438&4294967295,e=n+(r<<5&4294967295|r>>>27),r=l+(n^s&(e^n))+h[14]+3275163606&4294967295,l=e+(r<<9&4294967295|r>>>23),r=s+(e^n&(l^e))+h[3]+4107603335&4294967295,s=l+(r<<14&4294967295|r>>>18),r=n+(l^e&(s^l))+h[8]+1163531501&4294967295,n=s+(r<<20&4294967295|r>>>12),r=e+(s^l&(n^s))+h[13]+2850285829&4294967295,e=n+(r<<5&4294967295|r>>>27),r=l+(n^s&(e^n))+h[2]+4243563512&4294967295,l=e+(r<<9&4294967295|r>>>23),r=s+(e^n&(l^e))+h[7]+1735328473&4294967295,s=l+(r<<14&4294967295|r>>>18),r=n+(l^e&(s^l))+h[12]+2368359562&4294967295,n=s+(r<<20&4294967295|r>>>12),r=e+(n^s^l)+h[5]+4294588738&4294967295,e=n+(r<<4&4294967295|r>>>28),r=l+(e^n^s)+h[8]+2272392833&4294967295,l=e+(r<<11&4294967295|r>>>21),r=s+(l^e^n)+h[11]+1839030562&4294967295,s=l+(r<<16&4294967295|r>>>16),r=n+(s^l^e)+h[14]+4259657740&4294967295,n=s+(r<<23&4294967295|r>>>9),r=e+(n^s^l)+h[1]+2763975236&4294967295,e=n+(r<<4&4294967295|r>>>28),r=l+(e^n^s)+h[4]+1272893353&4294967295,l=e+(r<<11&4294967295|r>>>21),r=s+(l^e^n)+h[7]+4139469664&4294967295,s=l+(r<<16&4294967295|r>>>16),r=n+(s^l^e)+h[10]+3200236656&4294967295,n=s+(r<<23&4294967295|r>>>9),r=e+(n^s^l)+h[13]+681279174&4294967295,e=n+(r<<4&4294967295|r>>>28),r=l+(e^n^s)+h[0]+3936430074&4294967295,l=e+(r<<11&4294967295|r>>>21),r=s+(l^e^n)+h[3]+3572445317&4294967295,s=l+(r<<16&4294967295|r>>>16),r=n+(s^l^e)+h[6]+76029189&4294967295,n=s+(r<<23&4294967295|r>>>9),r=e+(n^s^l)+h[9]+3654602809&4294967295,e=n+(r<<4&4294967295|r>>>28),r=l+(e^n^s)+h[12]+3873151461&4294967295,l=e+(r<<11&4294967295|r>>>21),r=s+(l^e^n)+h[15]+530742520&4294967295,s=l+(r<<16&4294967295|r>>>16),r=n+(s^l^e)+h[2]+3299628645&4294967295,n=s+(r<<23&4294967295|r>>>9),r=e+(s^(n|~l))+h[0]+4096336452&4294967295,e=n+(r<<6&4294967295|r>>>26),r=l+(n^(e|~s))+h[7]+1126891415&4294967295,l=e+(r<<10&4294967295|r>>>22),r=s+(e^(l|~n))+h[14]+2878612391&4294967295,s=l+(r<<15&4294967295|r>>>17),r=n+(l^(s|~e))+h[5]+4237533241&4294967295,n=s+(r<<21&4294967295|r>>>11),r=e+(s^(n|~l))+h[12]+1700485571&4294967295,e=n+(r<<6&4294967295|r>>>26),r=l+(n^(e|~s))+h[3]+2399980690&4294967295,l=e+(r<<10&4294967295|r>>>22),r=s+(e^(l|~n))+h[10]+4293915773&4294967295,s=l+(r<<15&4294967295|r>>>17),r=n+(l^(s|~e))+h[1]+2240044497&4294967295,n=s+(r<<21&4294967295|r>>>11),r=e+(s^(n|~l))+h[8]+1873313359&4294967295,e=n+(r<<6&4294967295|r>>>26),r=l+(n^(e|~s))+h[15]+4264355552&4294967295,l=e+(r<<10&4294967295|r>>>22),r=s+(e^(l|~n))+h[6]+2734768916&4294967295,s=l+(r<<15&4294967295|r>>>17),r=n+(l^(s|~e))+h[13]+1309151649&4294967295,n=s+(r<<21&4294967295|r>>>11),r=e+(s^(n|~l))+h[4]+4149444226&4294967295,e=n+(r<<6&4294967295|r>>>26),r=l+(n^(e|~s))+h[11]+3174756917&4294967295,l=e+(r<<10&4294967295|r>>>22),r=s+(e^(l|~n))+h[2]+718787259&4294967295,s=l+(r<<15&4294967295|r>>>17),r=n+(l^(s|~e))+h[9]+3951481745&4294967295,i.g[0]=i.g[0]+e&4294967295,i.g[1]=i.g[1]+(s+(r<<21&4294967295|r>>>11))&4294967295,i.g[2]=i.g[2]+s&4294967295,i.g[3]=i.g[3]+l&4294967295}f.prototype.v=function(i,e){e===void 0&&(e=i.length);const n=e-this.blockSize,h=this.C;let s=this.h,l=0;for(;l<e;){if(s==0)for(;l<=n;)u(this,i,l),l+=this.blockSize;if(typeof i=="string"){for(;l<e;)if(h[s++]=i.charCodeAt(l++),s==this.blockSize){u(this,h),s=0;break}}else for(;l<e;)if(h[s++]=i[l++],s==this.blockSize){u(this,h),s=0;break}}this.h=s,this.o+=e},f.prototype.A=function(){var i=Array((this.h<56?this.blockSize:this.blockSize*2)-this.h);i[0]=128;for(var e=1;e<i.length-8;++e)i[e]=0;e=this.o*8;for(var n=i.length-8;n<i.length;++n)i[n]=e&255,e/=256;for(this.v(i),i=Array(16),e=0,n=0;n<4;++n)for(let h=0;h<32;h+=8)i[e++]=this.g[n]>>>h&255;return i};function g(i,e){var n=y;return Object.prototype.hasOwnProperty.call(n,i)?n[i]:n[i]=e(i)}function c(i,e){this.h=e;const n=[];let h=!0;for(let s=i.length-1;s>=0;s--){const l=i[s]|0;h&&l==e||(n[s]=l,h=!1)}this.g=n}var y={};function p(i){return-128<=i&&i<128?g(i,function(e){return new c([e|0],e<0?-1:0)}):new c([i|0],i<0?-1:0)}function m(i){if(isNaN(i)||!isFinite(i))return v;if(i<0)return b(m(-i));const e=[];let n=1;for(let h=0;i>=n;h++)e[h]=i/n|0,n*=4294967296;return new c(e,0)}function O(i,e){if(i.length==0)throw Error("number format error: empty string");if(e=e||10,e<2||36<e)throw Error("radix out of range: "+e);if(i.charAt(0)=="-")return b(O(i.substring(1),e));if(i.indexOf("-")>=0)throw Error('number format error: interior "-" character');const n=m(Math.pow(e,8));let h=v;for(let l=0;l<i.length;l+=8){var s=Math.min(8,i.length-l);const r=parseInt(i.substring(l,l+s),e);s<8?(s=m(Math.pow(e,s)),h=h.j(s).add(m(r))):(h=h.j(n),h=h.add(m(r)))}return h}var v=p(0),S=p(1),_=p(16777216);o=c.prototype,o.m=function(){if(E(this))return-b(this).m();let i=0,e=1;for(let n=0;n<this.g.length;n++){const h=this.i(n);i+=(h>=0?h:4294967296+h)*e,e*=4294967296}return i},o.toString=function(i){if(i=i||10,i<2||36<i)throw Error("radix out of range: "+i);if(w(this))return"0";if(E(this))return"-"+b(this).toString(i);const e=m(Math.pow(i,6));var n=this;let h="";for(;;){const s=T(n,e).g;n=B(n,s.j(e));let l=((n.g.length>0?n.g[0]:n.h)>>>0).toString(i);if(n=s,w(n))return l+h;for(;l.length<6;)l="0"+l;h=l+h}},o.i=function(i){return i<0?0:i<this.g.length?this.g[i]:this.h};function w(i){if(i.h!=0)return!1;for(let e=0;e<i.g.length;e++)if(i.g[e]!=0)return!1;return!0}function E(i){return i.h==-1}o.l=function(i){return i=B(this,i),E(i)?-1:w(i)?0:1};function b(i){const e=i.g.length,n=[];for(let h=0;h<e;h++)n[h]=~i.g[h];return new c(n,~i.h).add(S)}o.abs=function(){return E(this)?b(this):this},o.add=function(i){const e=Math.max(this.g.length,i.g.length),n=[];let h=0;for(let s=0;s<=e;s++){let l=h+(this.i(s)&65535)+(i.i(s)&65535),r=(l>>>16)+(this.i(s)>>>16)+(i.i(s)>>>16);h=r>>>16,l&=65535,r&=65535,n[s]=r<<16|l}return new c(n,n[n.length-1]&-2147483648?-1:0)};function B(i,e){return i.add(b(e))}o.j=function(i){if(w(this)||w(i))return v;if(E(this))return E(i)?b(this).j(b(i)):b(b(this).j(i));if(E(i))return b(this.j(b(i)));if(this.l(_)<0&&i.l(_)<0)return m(this.m()*i.m());const e=this.g.length+i.g.length,n=[];for(var h=0;h<2*e;h++)n[h]=0;for(h=0;h<this.g.length;h++)for(let s=0;s<i.g.length;s++){const l=this.i(h)>>>16,r=this.i(h)&65535,A=i.i(s)>>>16,x=i.i(s)&65535;n[2*h+2*s]+=r*x,M(n,2*h+2*s),n[2*h+2*s+1]+=l*x,M(n,2*h+2*s+1),n[2*h+2*s+1]+=r*A,M(n,2*h+2*s+1),n[2*h+2*s+2]+=l*A,M(n,2*h+2*s+2)}for(i=0;i<e;i++)n[i]=n[2*i+1]<<16|n[2*i];for(i=e;i<2*e;i++)n[i]=0;return new c(n,0)};function M(i,e){for(;(i[e]&65535)!=i[e];)i[e+1]+=i[e]>>>16,i[e]&=65535,e++}function D(i,e){this.g=i,this.h=e}function T(i,e){if(w(e))throw Error("division by zero");if(w(i))return new D(v,v);if(E(i))return e=T(b(i),e),new D(b(e.g),b(e.h));if(E(e))return e=T(i,b(e)),new D(b(e.g),e.h);if(i.g.length>30){if(E(i)||E(e))throw Error("slowDivide_ only works with positive integers.");for(var n=S,h=e;h.l(i)<=0;)n=L(n),h=L(h);var s=C(n,1),l=C(h,1);for(h=C(h,2),n=C(n,2);!w(h);){var r=l.add(h);r.l(i)<=0&&(s=s.add(n),l=r),h=C(h,1),n=C(n,1)}return e=B(i,s.j(e)),new D(s,e)}for(s=v;i.l(e)>=0;){for(n=Math.max(1,Math.floor(i.m()/e.m())),h=Math.ceil(Math.log(n)/Math.LN2),h=h<=48?1:Math.pow(2,h-48),l=m(n),r=l.j(e);E(r)||r.l(i)>0;)n-=h,l=m(n),r=l.j(e);w(l)&&(l=S),s=s.add(l),i=B(i,r)}return new D(s,i)}o.B=function(i){return T(this,i).h},o.and=function(i){const e=Math.max(this.g.length,i.g.length),n=[];for(let h=0;h<e;h++)n[h]=this.i(h)&i.i(h);return new c(n,this.h&i.h)},o.or=function(i){const e=Math.max(this.g.length,i.g.length),n=[];for(let h=0;h<e;h++)n[h]=this.i(h)|i.i(h);return new c(n,this.h|i.h)},o.xor=function(i){const e=Math.max(this.g.length,i.g.length),n=[];for(let h=0;h<e;h++)n[h]=this.i(h)^i.i(h);return new c(n,this.h^i.h)};function L(i){const e=i.g.length+1,n=[];for(let h=0;h<e;h++)n[h]=i.i(h)<<1|i.i(h-1)>>>31;return new c(n,i.h)}function C(i,e){const n=e>>5;e%=32;const h=i.g.length-n,s=[];for(let l=0;l<h;l++)s[l]=e>0?i.i(l+n)>>>e|i.i(l+n+1)<<32-e:i.i(l+n);return new c(s,i.h)}f.prototype.digest=f.prototype.A,f.prototype.reset=f.prototype.u,f.prototype.update=f.prototype.v,c.prototype.add=c.prototype.add,c.prototype.multiply=c.prototype.j,c.prototype.modulo=c.prototype.B,c.prototype.compare=c.prototype.l,c.prototype.toNumber=c.prototype.m,c.prototype.toString=c.prototype.toString,c.prototype.getBits=c.prototype.i,c.fromNumber=m,c.fromString=O,yt=c}).apply(typeof P<"u"?P:typeof self<"u"?self:typeof window<"u"?window:{});export{et as A,Ct as B,xt as C,Bt as D,it as E,R as F,rt as G,_t as H,yt as I,Ft as L,Ht as a,nt as b,jt as c,ht as d,Y as e,F as f,bt as g,Ot as h,St as i,d as j,Rt as k,zt as l,Et as m,mt as n,vt as o,Lt as p,wt as q,It as r,Pt as s,At as t,kt as u,Dt as v,$ as w,Mt as x,Tt as y,Nt as z};
