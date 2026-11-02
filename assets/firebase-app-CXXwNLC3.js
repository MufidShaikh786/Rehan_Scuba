import{L as Q,C as D,g as x,E as Z,d as P,a as V,i as ee,b as te,s as ne,c as ae,e as re,f as U,h as se,v as ie,F as j}from"./firebase-shared-BzZDpXpW.js";const oe=(e,t)=>t.some(n=>e instanceof n);let T,M;function ce(){return T||(T=[IDBDatabase,IDBObjectStore,IDBIndex,IDBCursor,IDBTransaction])}function fe(){return M||(M=[IDBCursor.prototype.advance,IDBCursor.prototype.continue,IDBCursor.prototype.continuePrimaryKey])}const z=new WeakMap,S=new WeakMap,J=new WeakMap,_=new WeakMap,O=new WeakMap;function de(e){const t=new Promise((n,a)=>{const r=()=>{e.removeEventListener("success",s),e.removeEventListener("error",i)},s=()=>{n(p(e.result)),r()},i=()=>{a(e.error),r()};e.addEventListener("success",s),e.addEventListener("error",i)});return t.then(n=>{n instanceof IDBCursor&&z.set(n,e)}).catch(()=>{}),O.set(t,e),t}function le(e){if(S.has(e))return;const t=new Promise((n,a)=>{const r=()=>{e.removeEventListener("complete",s),e.removeEventListener("error",i),e.removeEventListener("abort",i)},s=()=>{n(),r()},i=()=>{a(e.error||new DOMException("AbortError","AbortError")),r()};e.addEventListener("complete",s),e.addEventListener("error",i),e.addEventListener("abort",i)});S.set(e,t)}let A={get(e,t,n){if(e instanceof IDBTransaction){if(t==="done")return S.get(e);if(t==="objectStoreNames")return e.objectStoreNames||J.get(e);if(t==="store")return n.objectStoreNames[1]?void 0:n.objectStore(n.objectStoreNames[0])}return p(e[t])},set(e,t,n){return e[t]=n,!0},has(e,t){return e instanceof IDBTransaction&&(t==="done"||t==="store")?!0:t in e}};function pe(e){A=e(A)}function he(e){return e===IDBDatabase.prototype.transaction&&!("objectStoreNames"in IDBTransaction.prototype)?function(t,...n){const a=e.call(v(this),t,...n);return J.set(a,t.sort?t.sort():[t]),p(a)}:fe().includes(e)?function(...t){return e.apply(v(this),t),p(z.get(this))}:function(...t){return p(e.apply(v(this),t))}}function ue(e){return typeof e=="function"?he(e):(e instanceof IDBTransaction&&le(e),oe(e,ce())?new Proxy(e,A):e)}function p(e){if(e instanceof IDBRequest)return de(e);if(_.has(e))return _.get(e);const t=ue(e);return t!==e&&(_.set(e,t),O.set(t,e)),t}const v=e=>O.get(e);function me(e,t,{blocked:n,upgrade:a,blocking:r,terminated:s}={}){const i=indexedDB.open(e,t),c=p(i);return a&&i.addEventListener("upgradeneeded",o=>{a(p(i.result),o.oldVersion,o.newVersion,p(i.transaction),o)}),n&&i.addEventListener("blocked",o=>n(o.oldVersion,o.newVersion,o)),c.then(o=>{s&&o.addEventListener("close",()=>s()),r&&o.addEventListener("versionchange",d=>r(d.oldVersion,d.newVersion,d))}).catch(()=>{}),c}const be=["get","getKey","getAll","getAllKeys","count"],ge=["put","add","delete","clear"],E=new Map;function R(e,t){if(!(e instanceof IDBDatabase&&!(t in e)&&typeof t=="string"))return;if(E.get(t))return E.get(t);const n=t.replace(/FromIndex$/,""),a=t!==n,r=ge.includes(n);if(!(n in(a?IDBIndex:IDBObjectStore).prototype)||!(r||be.includes(n)))return;const s=async function(i,...c){const o=this.transaction(i,r?"readwrite":"readonly");let d=o.store;return a&&(d=d.index(c.shift())),(await Promise.all([d[n](...c),r&&o.done]))[0]};return E.set(t,s),s}pe(e=>({...e,get:(t,n,a)=>R(t,n)||e.get(t,n,a),has:(t,n)=>!!R(t,n)||e.has(t,n)}));/**
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
 */class De{constructor(t){this.container=t}getPlatformInfoString(){return this.container.getProviders().map(n=>{if(we(n)){const a=n.getImmediate();return`${a.library}/${a.version}`}else return null}).filter(n=>n).join(" ")}}function we(e){const t=e.getComponent();return(t==null?void 0:t.type)==="VERSION"}const w="@firebase/app",$="0.16.4";/**
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
 */const l=new Q("@firebase/app"),Ce="@firebase/app-compat",ye="@firebase/analytics-compat",_e="@firebase/analytics",ve="@firebase/app-check-compat",Ee="@firebase/app-check",Ie="@firebase/auth",Se="@firebase/auth-compat",Ae="@firebase/database",$e="@firebase/data-connect",Be="@firebase/database-compat",xe="@firebase/functions",Oe="@firebase/functions-compat",Pe="@firebase/installations",Te="@firebase/installations-compat",Me="@firebase/messaging",Re="@firebase/messaging-compat",Fe="@firebase/performance",Ne="@firebase/performance-compat",ke="@firebase/remote-config",Le="@firebase/remote-config-compat",He="@firebase/storage",Ve="@firebase/storage-compat",Ue="@firebase/firestore",je="@firebase/ai",ze="@firebase/firestore-compat",Je="firebase",We="13.1.0";/**
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
 */const C="[DEFAULT]",Ke={[w]:"fire-core",[Ce]:"fire-core-compat",[_e]:"fire-analytics",[ye]:"fire-analytics-compat",[Ee]:"fire-app-check",[ve]:"fire-app-check-compat",[Ie]:"fire-auth",[Se]:"fire-auth-compat",[Ae]:"fire-rtdb",[$e]:"fire-data-connect",[Be]:"fire-rtdb-compat",[xe]:"fire-fn",[Oe]:"fire-fn-compat",[Pe]:"fire-iid",[Te]:"fire-iid-compat",[Me]:"fire-fcm",[Re]:"fire-fcm-compat",[Fe]:"fire-perf",[Ne]:"fire-perf-compat",[ke]:"fire-rc",[Le]:"fire-rc-compat",[He]:"fire-gcs",[Ve]:"fire-gcs-compat",[Ue]:"fire-fst",[ze]:"fire-fst-compat",[je]:"fire-vertex","fire-js":"fire-js",[Je]:"fire-js-all"};/**
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
 */const h=new Map,u=new Map,m=new Map;function F(e,t){try{e.container.addComponent(t)}catch(n){l.debug(`Component ${t.name} failed to register with FirebaseApp ${e.name}`,n)}}function lt(e,t){e.container.addOrOverwriteComponent(t)}function B(e){const t=e.name;if(m.has(t))return l.debug(`There were multiple attempts to register component ${t}.`),!1;m.set(t,e);for(const n of h.values())F(n,e);for(const n of u.values())F(n,e);return!0}function Ge(e,t){const n=e.container.getProvider("heartbeat").getImmediate({optional:!0});return n&&n.triggerHeartbeat(),e.container.getProvider(t)}function pt(e,t,n=C){Ge(e,t).clearInstance(n)}function W(e){return e.options!==void 0}function Ye(e){return W(e)?!1:"authIdToken"in e||"appCheckToken"in e||"releaseOnDeref"in e||"automaticDataCollectionEnabled"in e}function ht(e){return e==null?!1:e.settings!==void 0}function ut(){m.clear()}/**
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
 */const Xe={"no-app":"No Firebase App '{$appName}' has been created - call initializeApp() first","bad-app-name":"Illegal App name: '{$appName}'","duplicate-app":"Firebase App named '{$appName}' already exists with different {$mismatchedParam}. Existing: '{$oldValue}'. New: '{$newValue}'.","app-deleted":"Firebase App named '{$appName}' already deleted","server-app-deleted":"Firebase Server App has been deleted","no-options":"Need to provide options, when not being deployed to hosting via source.","invalid-app-argument":"firebase.{$appName}() takes either no argument or a Firebase App instance.","invalid-log-argument":"First argument to `onLog` must be null or a function.","idb-open":"Error thrown when opening IndexedDB. Original error: {$originalErrorMessage}.","idb-get":"Error thrown when reading from IndexedDB. Original error: {$originalErrorMessage}.","idb-set":"Error thrown when writing to IndexedDB. Original error: {$originalErrorMessage}.","idb-delete":"Error thrown when deleting from IndexedDB. Original error: {$originalErrorMessage}.","finalization-registry-not-supported":"FirebaseServerApp deleteOnDeref field defined but the JS runtime does not support FinalizationRegistry.","invalid-server-app-environment":"FirebaseServerApp is not for use in browser environments."},f=new Z("app","Firebase",Xe);/**
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
 */class K{constructor(t,n,a){this._isDeleted=!1,this._options={...t},this._config={...n},this._name=n.name,this._automaticDataCollectionEnabled=n.automaticDataCollectionEnabled,this._container=a,this.container.addComponent(new D("app",()=>this,"PUBLIC"))}get automaticDataCollectionEnabled(){return this.checkDestroyed(),this._automaticDataCollectionEnabled}set automaticDataCollectionEnabled(t){this.checkDestroyed(),this._automaticDataCollectionEnabled=t}get name(){return this.checkDestroyed(),this._name}get options(){return this.checkDestroyed(),this._options}get config(){return this.checkDestroyed(),this._config}get container(){return this._container}get isDeleted(){return this._isDeleted}set isDeleted(t){this._isDeleted=t}checkDestroyed(){if(this.isDeleted)throw f.create("app-deleted",{appName:this._name})}}/**
 * @license
 * Copyright 2023 Google LLC
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
 */function N(e,t){const n=re(e.split(".")[1]);if(n===null){console.error(`FirebaseServerApp ${t} is invalid: second part could not be parsed.`);return}if(JSON.parse(n).exp===void 0){console.error(`FirebaseServerApp ${t} is invalid: expiration claim could not be parsed`);return}const r=JSON.parse(n).exp*1e3,s=new Date().getTime();r-s<=0&&console.error(`FirebaseServerApp ${t} is invalid: the token has expired.`)}class qe extends K{constructor(t,n,a,r){const s=n.automaticDataCollectionEnabled!==void 0?n.automaticDataCollectionEnabled:!0,i={name:a,automaticDataCollectionEnabled:s};if(t.apiKey!==void 0)super(t,i,r);else{const c=t;super(c.options,i,r)}this._serverConfig={automaticDataCollectionEnabled:s,...n},this._serverConfig.authIdToken&&N(this._serverConfig.authIdToken,"authIdToken"),this._serverConfig.appCheckToken&&N(this._serverConfig.appCheckToken,"appCheckToken"),this._finalizationRegistry=null,typeof FinalizationRegistry<"u"&&(this._finalizationRegistry=new FinalizationRegistry(()=>{this.automaticCleanup()})),this._refCount=0,this.incRefCount(this._serverConfig.releaseOnDeref),this._serverConfig.releaseOnDeref=void 0,n.releaseOnDeref=void 0,g(w,$,"serverapp")}toJSON(){}get refCount(){return this._refCount}incRefCount(t){this.isDeleted||(this._refCount++,t!==void 0&&this._finalizationRegistry!==null&&this._finalizationRegistry.register(t,this))}decRefCount(){return this.isDeleted?0:--this._refCount}automaticCleanup(){Ze(this)}get settings(){return this.checkDestroyed(),this._serverConfig}checkDestroyed(){if(this.isDeleted)throw f.create("server-app-deleted")}}/**
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
 */const mt=We;function Qe(e,t={}){let n=e;typeof t!="object"&&(t={name:t});const a={name:C,automaticDataCollectionEnabled:!0,...t},r=a.name;if(typeof r!="string"||!r)throw f.create("bad-app-name",{appName:String(r)});if(n||(n=x()),!n)throw f.create("no-options");const s=h.get(r);if(s)if(P(n,s.options)){if(P(a,s.config))return s;throw f.create("duplicate-app",{appName:r,mismatchedParam:"config",oldValue:JSON.stringify(s.config),newValue:JSON.stringify(a)})}else throw f.create("duplicate-app",{appName:r,mismatchedParam:"options",oldValue:JSON.stringify(s.options),newValue:JSON.stringify(n)});const i=new V(r);for(const o of m.values())i.addComponent(o);const c=new K(n,a,i);return h.set(r,c),c}function bt(e,t={}){if(ee()&&!te())throw f.create("invalid-server-app-environment");let n,a=t||{};if(e&&(W(e)?n=e.options:Ye(e)?a=e:n=e),a.automaticDataCollectionEnabled===void 0&&(a.automaticDataCollectionEnabled=!0),n||(n=x()),!n)throw f.create("no-options");const r={...a,...n};r.releaseOnDeref!==void 0&&delete r.releaseOnDeref;const s=y=>[...y].reduce((X,q)=>Math.imul(31,X)+q.charCodeAt(0)|0,0);if(a.releaseOnDeref!==void 0&&typeof FinalizationRegistry>"u")throw f.create("finalization-registry-not-supported",{});const i=""+s(JSON.stringify(r)),c=u.get(i);if(c)return c.incRefCount(a.releaseOnDeref),c;const o=new V(i);for(const y of m.values())o.addComponent(y);const d=new qe(n,a,i,o);return u.set(i,d),d}function gt(e=C){const t=h.get(e);if(!t&&e===C&&x())return Qe();if(!t)throw f.create("no-app",{appName:e});return t}function Dt(){return Array.from(h.values())}async function Ze(e){let t=!1;const n=e.name;h.has(n)?(t=!0,h.delete(n)):u.has(n)&&e.decRefCount()<=0&&(u.delete(n),t=!0),t&&(await Promise.all(e.container.getProviders().map(a=>a.delete())),e.isDeleted=!0)}function g(e,t,n){let a=Ke[e]??e;n&&(a+=`-${n}`);const r=a.match(/\s|\//),s=t.match(/\s|\//);if(r||s){const i=[`Unable to register library "${a}" with version "${t}":`];r&&i.push(`library name "${a}" contains illegal characters (whitespace or "/")`),r&&s&&i.push("and"),s&&i.push(`version name "${t}" contains illegal characters (whitespace or "/")`),l.warn(i.join(" "));return}B(new D(`${a}-version`,()=>({library:a,version:t}),"VERSION"))}function wt(e,t){if(e!==null&&typeof e!="function")throw f.create("invalid-log-argument");ne(e,t)}function Ct(e){ae(e)}/**
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
 */const et="firebase-heartbeat-database",tt=1,b="firebase-heartbeat-store";let I=null;function G(){return I||(I=me(et,tt,{upgrade:(e,t)=>{switch(t){case 0:try{e.createObjectStore(b)}catch(n){console.warn(n)}}}}).catch(e=>{throw f.create("idb-open",{originalErrorMessage:e.message})})),I}async function nt(e){try{const n=(await G()).transaction(b),a=await n.objectStore(b).get(Y(e));return await n.done,a}catch(t){if(t instanceof j)l.warn(t.message);else{const n=f.create("idb-get",{originalErrorMessage:t==null?void 0:t.message});l.warn(n.message)}}}async function k(e,t){try{const a=(await G()).transaction(b,"readwrite");await a.objectStore(b).put(t,Y(e)),await a.done}catch(n){if(n instanceof j)l.warn(n.message);else{const a=f.create("idb-set",{originalErrorMessage:n==null?void 0:n.message});l.warn(a.message)}}}function Y(e){return`${e.name}!${e.options.appId}`}/**
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
 */const at=1024,rt=30;class st{constructor(t){this.container=t,this._heartbeatsCache=null;const n=this.container.getProvider("app").getImmediate();this._storage=new ot(n),this._heartbeatsCachePromise=this._storage.read().then(a=>(this._heartbeatsCache=a,a))}async triggerHeartbeat(){var t,n;try{const r=this.container.getProvider("platform-logger").getImmediate().getPlatformInfoString(),s=L();if(((t=this._heartbeatsCache)==null?void 0:t.heartbeats)==null&&(this._heartbeatsCache=await this._heartbeatsCachePromise,((n=this._heartbeatsCache)==null?void 0:n.heartbeats)==null)||this._heartbeatsCache.lastSentHeartbeatDate===s||this._heartbeatsCache.heartbeats.some(i=>i.date===s))return;if(this._heartbeatsCache.heartbeats.push({date:s,agent:r}),this._heartbeatsCache.heartbeats.length>rt){const i=ct(this._heartbeatsCache.heartbeats);this._heartbeatsCache.heartbeats.splice(i,1)}return this._storage.overwrite(this._heartbeatsCache)}catch(a){l.warn(a)}}async getHeartbeatsHeader(){var t;try{if(this._heartbeatsCache===null&&await this._heartbeatsCachePromise,((t=this._heartbeatsCache)==null?void 0:t.heartbeats)==null||this._heartbeatsCache.heartbeats.length===0)return"";const n=L(),{heartbeatsToSend:a,unsentEntries:r}=it(this._heartbeatsCache.heartbeats),s=U(JSON.stringify({version:2,heartbeats:a}));return this._heartbeatsCache.lastSentHeartbeatDate=n,r.length>0?(this._heartbeatsCache.heartbeats=r,await this._storage.overwrite(this._heartbeatsCache)):(this._heartbeatsCache.heartbeats=[],this._storage.overwrite(this._heartbeatsCache)),s}catch(n){return l.warn(n),""}}}function L(){return new Date().toISOString().substring(0,10)}function it(e,t=at){const n=[];let a=e.slice();for(const r of e){const s=n.find(i=>i.agent===r.agent);if(s){if(s.dates.push(r.date),H(n)>t){s.dates.pop();break}}else if(n.push({agent:r.agent,dates:[r.date]}),H(n)>t){n.pop();break}a=a.slice(1)}return{heartbeatsToSend:n,unsentEntries:a}}class ot{constructor(t){this.app=t,this._canUseIndexedDBPromise=this.runIndexedDBEnvironmentCheck()}async runIndexedDBEnvironmentCheck(){return se()?ie().then(()=>!0).catch(()=>!1):!1}async read(){if(await this._canUseIndexedDBPromise){const n=await nt(this.app);return n!=null&&n.heartbeats?n:{heartbeats:[]}}else return{heartbeats:[]}}async overwrite(t){if(await this._canUseIndexedDBPromise){const a=await this.read();return k(this.app,{lastSentHeartbeatDate:t.lastSentHeartbeatDate??a.lastSentHeartbeatDate,heartbeats:t.heartbeats})}else return}async add(t){if(await this._canUseIndexedDBPromise){const a=await this.read();return k(this.app,{lastSentHeartbeatDate:t.lastSentHeartbeatDate??a.lastSentHeartbeatDate,heartbeats:[...a.heartbeats,...t.heartbeats]})}else return}}function H(e){return U(JSON.stringify({version:2,heartbeats:e})).length}function ct(e){if(e.length===0)return-1;let t=0,n=e[0].date;for(let a=1;a<e.length;a++)e[a].date<n&&(n=e[a].date,t=a);return t}/**
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
 */function ft(e){B(new D("platform-logger",t=>new De(t),"PRIVATE")),B(new D("heartbeat",t=>new st(t),"PRIVATE")),g(w,$,e),g(w,$,"esm2020"),g("fire-js","")}/**
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
 */ft("");export{C as D,mt as S,ht as _,Ge as a,pt as b,B as c,F as d,lt as e,h as f,gt as g,ut as h,m as i,W as j,Ye as k,u as l,Ze as m,Dt as n,Qe as o,bt as p,wt as q,g as r,Ct as s};
