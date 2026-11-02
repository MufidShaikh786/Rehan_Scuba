import{_ as ss,g as is,a as Zn,b as as,c as os,r as Nn,S as us}from"./firebase-app-CXXwNLC3.js";import{L as cs,F as ls,j as Ye,k as P,l as tr,p as fs,d as we,m as hs,n as ds,I as ms,C as ps}from"./firebase-shared-BzZDpXpW.js";function D(n,t,e,r){if(e==="a"&&!r)throw new TypeError("Private accessor was defined without a getter");if(typeof t=="function"?n!==t||!r:!t.has(n))throw new TypeError("Cannot read private member from an object whose class did not declare it");return e==="m"?r:e==="a"?r.call(n):r?r.value:t.get(n)}/**
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
 */class L{constructor(t){this.uid=t}isAuthenticated(){return this.uid!=null}toKey(){return this.isAuthenticated()?"uid:"+this.uid:"anonymous-user"}isEqual(t){return t.uid===this.uid}}L.UNAUTHENTICATED=new L(null),L.GOOGLE_CREDENTIALS=new L("google-credentials-uid"),L.FIRST_PARTY=new L("first-party-uid"),L.MOCK_USER=new L("mock-user");/**
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
 */let xt="13.1.0";function gs(n){xt=n}/**
 * @license
 * Copyright 2020 Google LLC
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
 *//**
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
 */const ht=new cs("@firebase/firestore");function Si(n){ht.setLogLevel(n)}function dt(n,...t){if(ht.logLevel<=Ye.DEBUG){const e=t.map(Xe);ht.debug(`Firestore (${xt}): ${n}`,...e)}}function Ae(n,...t){if(ht.logLevel<=Ye.ERROR){const e=t.map(Xe);ht.error(`Firestore (${xt}): ${n}`,...e)}}function er(n,...t){if(ht.logLevel<=Ye.WARN){const e=t.map(Xe);ht.warn(`Firestore (${xt}): ${n}`,...e)}}function Xe(n){if(typeof n=="string")return n;try{return(function(e){return JSON.stringify(e)})(n)}catch{return n}}/**
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
 */function E(n,t,e){let r="Unexpected state";typeof t=="string"?r=t:e=t,nr(n,r,e)}function nr(n,t,e){let r=`FIRESTORE (${xt}) INTERNAL ASSERTION FAILED: ${t} (ID: ${n.toString(16)})`;if(e!==void 0)try{r+=" CONTEXT: "+JSON.stringify(e)}catch{r+=" CONTEXT: "+e}throw Ae(r),new Error(r)}function U(n,t,e,r){let s="Unexpected state";typeof e=="string"?s=e:r=e,n||nr(t,s,r)}function mt(n,t){return n}/**
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
 */const f={OK:"ok",CANCELLED:"cancelled",UNKNOWN:"unknown",INVALID_ARGUMENT:"invalid-argument",DEADLINE_EXCEEDED:"deadline-exceeded",NOT_FOUND:"not-found",ALREADY_EXISTS:"already-exists",PERMISSION_DENIED:"permission-denied",UNAUTHENTICATED:"unauthenticated",RESOURCE_EXHAUSTED:"resource-exhausted",FAILED_PRECONDITION:"failed-precondition",ABORTED:"aborted",OUT_OF_RANGE:"out-of-range",UNIMPLEMENTED:"unimplemented",INTERNAL:"internal",UNAVAILABLE:"unavailable",DATA_LOSS:"data-loss"};class h extends ls{constructor(t,e){super(t,e),this.code=t,this.message=e,this.toString=()=>`${this.name}: [code=${this.code}]: ${this.message}`}}/**
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
 */class rr{constructor(t,e){this.user=e,this.type="OAuth",this.headers=new Map,this.headers.set("Authorization",`Bearer ${t}`)}}class _s{getToken(){return Promise.resolve(null)}invalidateToken(){}start(t,e){t.enqueueRetryable((()=>e(L.UNAUTHENTICATED)))}shutdown(){}}class ys{constructor(t){this.token=t,this.changeListener=null}getToken(){return Promise.resolve(this.token)}invalidateToken(){}start(t,e){this.changeListener=e,t.enqueueRetryable((()=>e(this.token.user)))}shutdown(){this.changeListener=null}}class Es{constructor(t){this.auth=null,t.onInit((e=>{this.auth=e}))}getToken(){return this.auth?this.auth.getToken().then((t=>t?(U(typeof t.accessToken=="string",42297,{Z:t}),new rr(t.accessToken,new L(this.auth.getUid()))):null)):Promise.resolve(null)}invalidateToken(){}start(t,e){}shutdown(){}}class Is{constructor(t,e,r){this.ee=t,this.te=e,this.re=r,this.type="FirstParty",this.user=L.FIRST_PARTY,this.ne=new Map}ie(){return this.re?this.re():null}get headers(){this.ne.set("X-Goog-AuthUser",this.ee);const t=this.ie();return t&&this.ne.set("Authorization",t),this.te&&this.ne.set("X-Goog-Iam-Authorization-Token",this.te),this.ne}}class Ts{constructor(t,e,r){this.ee=t,this.te=e,this.re=r}getToken(){return Promise.resolve(new Is(this.ee,this.te,this.re))}start(t,e){t.enqueueRetryable((()=>e(L.FIRST_PARTY)))}shutdown(){}invalidateToken(){}}class vn{constructor(t){this.value=t,this.type="AppCheck",this.headers=new Map,t&&t.length>0&&this.headers.set("x-firebase-appcheck",this.value)}}class ws{constructor(t,e){this.se=e,this.appCheck=null,this.oe=null,ss(t)&&t.settings.appCheckToken&&(this.oe=t.settings.appCheckToken),e.onInit((r=>{this.appCheck=r}))}getToken(){return this.oe?Promise.resolve(new vn(this.oe)):this.appCheck?this.appCheck.getToken().then((t=>t?(U(typeof t.token=="string",3470,{tokenResult:t}),new vn(t.token)):null)):Promise.resolve(null)}invalidateToken(){}start(t,e){}shutdown(){}}/**
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
 */class As{constructor(t,e,r,s,i,a,o,u,c,l,d,m,_){this.databaseId=t,this.appId=e,this.persistenceKey=r,this.host=s,this.ssl=i,this.forceLongPolling=a,this.autoDetectLongPolling=o,this.longPollingOptions=u,this.useFetchStreams=c,this.isUsingEmulator=l,this.apiKey=d,this._customHeaders=m,this.grpcFlowControlWindow=_}}const ae="(default)";class Ct{constructor(t,e){this.projectId=t,this.database=e||ae}static empty(){return new Ct("","")}get isDefaultDatabase(){return this.database===ae}isEqual(t){return t instanceof Ct&&t.projectId===this.projectId&&t.database===this.database}}function bs(n,t){if(!Object.prototype.hasOwnProperty.apply(n.options,["projectId"]))throw new h(f.INVALID_ARGUMENT,'"projectId" not provided in firebase.initializeApp.');return new Ct(n.options.projectId,t)}/**
 * @license
 * Copyright 2020 Google LLC
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
 */function Vs(n){const t=typeof self<"u"&&(self.crypto||self.msCrypto),e=new Uint8Array(n);if(t&&typeof t.getRandomValues=="function")t.getRandomValues(e);else for(let r=0;r<n;r++)e[r]=Math.floor(256*Math.random());return e}/**
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
 */class Ns{static newId(){const t="ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789",e=62*Math.floor(4.129032258064516);let r="";for(;r.length<20;){const s=Vs(40);for(let i=0;i<s.length;++i)r.length<20&&s[i]<e&&(r+=t.charAt(s[i]%62))}return r}}function v(n,t){return n<t?-1:n>t?1:0}function Ut(n,t){const e=Math.min(n.length,t.length);for(let r=0;r<e;r++){const s=n.charAt(r),i=t.charAt(r);if(s!==i)return Ce(s)===Ce(i)?v(s,i):Ce(s)?1:-1}return v(n.length,t.length)}const vs=55296,xs=57343;function Ce(n){const t=n.charCodeAt(0);return t>=vs&&t<=xs}function Je(n,t,e){return n.length===t.length&&n.every(((r,s)=>e(r,t[s])))}/**
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
 */const je="__name__";class X{constructor(t,e,r){e===void 0?e=0:e>t.length&&E(637,{offset:e,range:t.length}),r===void 0?r=t.length-e:r>t.length-e&&E(1746,{length:r,range:t.length-e}),this.segments=t,this.offset=e,this.len=r}get length(){return this.len}isEqual(t){return X.comparator(this,t)===0}child(t){const e=this.segments.slice(this.offset,this.limit());return t instanceof X?t.forEach((r=>{e.push(r)})):e.push(t),this.construct(e)}limit(){return this.offset+this.length}popFirst(t){return t=t===void 0?1:t,this.construct(this.segments,this.offset+t,this.length-t)}popLast(){return this.construct(this.segments,this.offset,this.length-1)}firstSegment(){return this.segments[this.offset]}lastSegment(){return this.get(this.length-1)}get(t){return this.segments[this.offset+t]}isEmpty(){return this.length===0}isPrefixOf(t){if(t.length<this.length)return!1;for(let e=0;e<this.length;e++)if(this.get(e)!==t.get(e))return!1;return!0}isImmediateParentOf(t){if(this.length+1!==t.length)return!1;for(let e=0;e<this.length;e++)if(this.get(e)!==t.get(e))return!1;return!0}forEach(t){for(let e=this.offset,r=this.limit();e<r;e++)t(this.segments[e])}toArray(){return this.segments.slice(this.offset,this.limit())}static comparator(t,e){const r=Math.min(t.length,e.length);for(let s=0;s<r;s++){const i=X.compareSegments(t.get(s),e.get(s));if(i!==0)return i}return v(t.length,e.length)}static compareSegments(t,e){const r=X.isNumericId(t),s=X.isNumericId(e);return r&&!s?-1:!r&&s?1:r&&s?X.extractNumericId(t).compare(X.extractNumericId(e)):Ut(t,e)}static isNumericId(t){return t.startsWith("__id")&&t.endsWith("__")}static extractNumericId(t){return ms.fromString(t.substring(4,t.length-2))}}class N extends X{construct(t,e,r){return new N(t,e,r)}canonicalString(){return this.toArray().join("/")}toString(){return this.canonicalString()}toStringWithLeadingSlash(){return`/${this.canonicalString()}`}toUriEncodedString(){return this.toArray().map(encodeURIComponent).join("/")}static fromString(...t){const e=[];for(const r of t){if(r.indexOf("//")>=0)throw new h(f.INVALID_ARGUMENT,`Invalid segment (${r}). Paths must not contain // in them.`);e.push(...r.split("/").filter((s=>s.length>0)))}return new N(e)}static emptyPath(){return new N([])}}const Rs=/^[_a-zA-Z][_a-zA-Z0-9]*$/;let ot=class bt extends X{construct(t,e,r){return new bt(t,e,r)}static isValidIdentifier(t){return Rs.test(t)}canonicalString(){return this.toArray().map((t=>(t=t.replace(/\\/g,"\\\\").replace(/`/g,"\\`"),bt.isValidIdentifier(t)||(t="`"+t+"`"),t))).join(".")}toString(){return this.canonicalString()}isKeyField(){return this.length===1&&this.get(0)===je}static keyField(){return new bt([je])}static fromServerFormat(t){const e=[];let r="",s=0;const i=()=>{if(r.length===0)throw new h(f.INVALID_ARGUMENT,`Invalid field path (${t}). Paths must not be empty, begin with '.', end with '.', or contain '..'`);e.push(r),r=""};let a=!1;for(;s<t.length;){const o=t[s];if(o==="\\"){if(s+1===t.length)throw new h(f.INVALID_ARGUMENT,"Path has trailing escape character: "+t);const u=t[s+1];if(u!=="\\"&&u!=="."&&u!=="`")throw new h(f.INVALID_ARGUMENT,"Path has invalid escape sequence: "+t);r+=u,s+=2}else o==="`"?(a=!a,s++):o!=="."||a?(r+=o,s++):(i(),s++)}if(i(),a)throw new h(f.INVALID_ARGUMENT,"Unterminated ` in path: "+t);return new bt(e)}static emptyPath(){return new bt([])}};/**
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
 */class x{constructor(t){this.path=t}static fromPath(t){return new x(N.fromString(t))}static fromName(t){return new x(N.fromString(t).popFirst(5))}static empty(){return new x(N.emptyPath())}get collectionGroup(){return this.path.popLast().lastSegment()}hasCollectionId(t){return this.path.length>=2&&this.path.get(this.path.length-2)===t}getCollectionGroup(){return this.path.get(this.path.length-2)}getCollectionPath(){return this.path.popLast()}isEqual(t){return t!==null&&N.comparator(this.path,t.path)===0}toString(){return this.path.toString()}static comparator(t,e){return N.comparator(t.path,e.path)}static isDocumentKey(t){return t.length%2==0}static fromSegments(t){return new x(new N(t.slice()))}}/**
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
 */function Qe(n,t,e){if(!e)throw new h(f.INVALID_ARGUMENT,`Function ${n}() cannot be called with an empty ${t}.`)}function xn(n){if(!x.isDocumentKey(n))throw new h(f.INVALID_ARGUMENT,`Invalid document reference. Document references must have an even number of segments, but ${n} has ${n.length}.`)}function Rn(n){if(x.isDocumentKey(n))throw new h(f.INVALID_ARGUMENT,`Invalid collection reference. Collection references must have an odd number of segments, but ${n} has ${n.length}.`)}function sr(n){return typeof n=="object"&&n!==null&&(Object.getPrototypeOf(n)===Object.prototype||Object.getPrototypeOf(n)===null)}function be(n){if(n===void 0)return"undefined";if(n===null)return"null";if(typeof n=="string")return n.length>20&&(n=`${n.substring(0,20)}...`),JSON.stringify(n);if(typeof n=="number"||typeof n=="boolean")return""+n;if(typeof n=="object"){if(n instanceof Array)return"an array";{const t=(function(r){return r.constructor?r.constructor.name:null})(n);return t?`a custom ${t} object`:"an object"}}return typeof n=="function"?"a function":E(12329,{type:typeof n})}function K(n,t){if("_delegate"in n&&(n=n._delegate),!(n instanceof t)){if(t.name===n.constructor.name)throw new h(f.INVALID_ARGUMENT,"Type does not match the expected instance. Did you pass a reference from a different Firestore SDK?");{const e=be(n);throw new h(f.INVALID_ARGUMENT,`Expected type '${t.name}', but it was: ${e}`)}}return n}function ir(n,t){if(t<=0)throw new h(f.INVALID_ARGUMENT,`Function ${n}() requires a positive number, but it was: ${t}.`)}/**
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
 */function ar(n){const t={};return n.timeoutSeconds!==void 0&&(t.timeoutSeconds=n.timeoutSeconds),t}/**
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
 */let Zt=null;function Ps(){return Zt===null?Zt=(function(){return 268435456+Math.round(2147483648*Math.random())})():Zt++,"0x"+Zt.toString(16)}/**
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
 */function or(n){return n==null}function oe(n){return n===0&&1/n==-1/0}/**
 * @license
 * Copyright 2020 Google LLC
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
 */const Ue="RestConnection",Ss={BatchGetDocuments:"batchGet",Commit:"commit",RunQuery:"runQuery",RunAggregationQuery:"runAggregationQuery",ExecutePipeline:"executePipeline"};class Ds{get ae(){return!1}constructor(t){this.databaseInfo=t,this.databaseId=t.databaseId;const e=t.ssl?"https":"http",r=encodeURIComponent(this.databaseId.projectId),s=encodeURIComponent(this.databaseId.database);this.ue=e+"://"+t.host,this._e=`projects/${r}/databases/${s}`,this.ce=this.databaseId.database===ae?`project_id=${r}`:`project_id=${r}&database_id=${s}`}le(t,e,r,s,i){const a=Ps(),o=this.fe(t,e.toUriEncodedString());dt(Ue,`Sending RPC '${t}' ${a}:`,o,r);const u={"google-cloud-resource-prefix":this._e,"x-goog-request-params":this.ce};this.he(u,s,i);const{host:c}=new URL(o),l=tr(c);return this.de(t,o,u,r,l).then((d=>(dt(Ue,`Received RPC '${t}' ${a}: `,d),d)),(d=>{throw er(Ue,`RPC '${t}' ${a} failed with error: `,d,"url: ",o,"request:",r),d}))}me(t,e,r,s,i,a){return this.le(t,e,r,s,i)}he(t,e,r){if(t["X-Goog-Api-Client"]=(function(){return"gl-js/ fire/"+xt})(),t["Content-Type"]="text/plain",this.databaseInfo.appId&&(t["X-Firebase-GMPID"]=this.databaseInfo.appId),e&&e.headers.forEach(((s,i)=>t[i]=s)),r&&r.headers.forEach(((s,i)=>t[i]=s)),this.databaseInfo._customHeaders)for(const s of Object.keys(this.databaseInfo._customHeaders))t[s]=this.databaseInfo._customHeaders[s]}fe(t,e){const r=Ss[t];let s=`${this.ue}/v1/${e}:${r}`;return this.databaseInfo.apiKey&&(s=`${s}?key=${encodeURIComponent(this.databaseInfo.apiKey)}`),s}terminate(){}}/**
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
 */var Pn,y,S,Vt,$e,ne,re,Ft;function Fs(n){switch(n){case f.OK:return E(64938);case f.CANCELLED:case f.UNKNOWN:case f.DEADLINE_EXCEEDED:case f.RESOURCE_EXHAUSTED:case f.INTERNAL:case f.UNAVAILABLE:case f.UNAUTHENTICATED:return!1;case f.INVALID_ARGUMENT:case f.NOT_FOUND:case f.ALREADY_EXISTS:case f.PERMISSION_DENIED:case f.FAILED_PRECONDITION:case f.ABORTED:case f.OUT_OF_RANGE:case f.UNIMPLEMENTED:case f.DATA_LOSS:return!0;default:return E(15467,{code:n})}}function Sn(n){if(n===void 0)return Ae("RPC_ERROR","HTTP error has no status"),f.UNKNOWN;switch(n){case 200:return f.OK;case 400:return f.FAILED_PRECONDITION;case 401:return f.UNAUTHENTICATED;case 403:return f.PERMISSION_DENIED;case 404:return f.NOT_FOUND;case 409:return f.ABORTED;case 416:return f.OUT_OF_RANGE;case 429:return f.RESOURCE_EXHAUSTED;case 499:return f.CANCELLED;case 500:return f.UNKNOWN;case 501:return f.UNIMPLEMENTED;case 503:return f.UNAVAILABLE;case 504:return f.DEADLINE_EXCEEDED;default:return n>=200&&n<300?f.OK:n>=400&&n<500?f.FAILED_PRECONDITION:n>=500&&n<600?f.INTERNAL:f.UNKNOWN}}/**
 * @license
 * Copyright 2020 Google LLC
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
 */(y=Pn||(Pn={}))[y.OK=0]="OK",y[y.CANCELLED=1]="CANCELLED",y[y.UNKNOWN=2]="UNKNOWN",y[y.INVALID_ARGUMENT=3]="INVALID_ARGUMENT",y[y.DEADLINE_EXCEEDED=4]="DEADLINE_EXCEEDED",y[y.NOT_FOUND=5]="NOT_FOUND",y[y.ALREADY_EXISTS=6]="ALREADY_EXISTS",y[y.PERMISSION_DENIED=7]="PERMISSION_DENIED",y[y.UNAUTHENTICATED=16]="UNAUTHENTICATED",y[y.RESOURCE_EXHAUSTED=8]="RESOURCE_EXHAUSTED",y[y.FAILED_PRECONDITION=9]="FAILED_PRECONDITION",y[y.ABORTED=10]="ABORTED",y[y.OUT_OF_RANGE=11]="OUT_OF_RANGE",y[y.UNIMPLEMENTED=12]="UNIMPLEMENTED",y[y.INTERNAL=13]="INTERNAL",y[y.UNAVAILABLE=14]="UNAVAILABLE",y[y.DATA_LOSS=15]="DATA_LOSS";class ks extends Ds{Ee(t,e){throw new Error("Not supported by FetchConnection")}async de(t,e,r,s,i){var u;const a=JSON.stringify(s);let o;try{const c={method:"POST",headers:r,body:a};i&&(c.credentials="include"),o=await fetch(e,c)}catch(c){const l=c,d=l==null?void 0:l.message,m=l!=null&&l.cause?String(l.cause):void 0,_=(d&&m?`${d} (${m})`:d??m)??(l==null?void 0:l.statusText)??String(c);throw new h(Sn(l==null?void 0:l.status),`Request failed with error: ${_}`)}if(!o.ok){let c=await o.json();Array.isArray(c)&&(c=c[0]);const l=(u=c==null?void 0:c.error)==null?void 0:u.message;throw new h(Sn(o.status),`Request failed with error: ${l??o.statusText}`)}return o.json()}}/**
 * @license
 * Copyright 2020 Google LLC
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
 *//**
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
 */class Os extends Error{constructor(){super(...arguments),this.name="Base64DecodeError"}}/**
 * @license
 * Copyright 2020 Google LLC
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
 *//**
 * @license
 * Copyright 2020 Google LLC
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
 */class z{constructor(t){this.binaryString=t}static fromBase64String(t){const e=(function(s){try{return atob(s)}catch(i){throw typeof DOMException<"u"&&i instanceof DOMException?new Os("Invalid base64 string: "+i):i}})(t);return new z(e)}static fromUint8Array(t){const e=(function(s){let i="";for(let a=0;a<s.length;++a)i+=String.fromCharCode(s[a]);return i})(t);return new z(e)}[Symbol.iterator](){let t=0;return{next:()=>t<this.binaryString.length?{value:this.binaryString.charCodeAt(t++),done:!1}:{value:void 0,done:!0}}}toBase64(){return(function(e){return btoa(e)})(this.binaryString)}toUint8Array(){return(function(e){const r=new Uint8Array(e.length);for(let s=0;s<e.length;s++)r[s]=e.charCodeAt(s);return r})(this.binaryString)}approximateByteSize(){return 2*this.binaryString.length}compareTo(t){return v(this.binaryString,t.binaryString)}isEqual(t){return this.binaryString===t.binaryString}}function Mt(n){let t=0;for(const e in n)Object.prototype.hasOwnProperty.call(n,e)&&t++;return t}function Kt(n,t){for(const e in n)Object.prototype.hasOwnProperty.call(n,e)&&t(e,n[e])}function Ls(n,t){const e=[];for(const r in n)Object.prototype.hasOwnProperty.call(n,r)&&e.push(t(n[r],r,n));return e}z.EMPTY_BYTE_STRING=new z("");/**
 * Copyright 2021 M.Vokhmentsev
 *
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
 */class g{constructor(){this.exponent=0,this.Ve=0n,this.Te=0n,this.Ie=new Array(4).fill(0n),this.Ae=new Array(6).fill(0n),this.Re=new Array(6).fill(0n),this.Pe=new Array(6).fill(0n),this.pe=new Array(12).fill(0n)}static ye(t,e){let r=new g;return r.parse(t,e),r}parse(t,e){e+=t.length-1,this.exponent=0,this.Ve=0n,this.Te=0n;let r=this.Pe,s=this.be(t,r);if(s==0&&this.isEmpty(r)||(e+=s)<g.we)return;if(e>g.ge)return void(this.exponent=Number(g.Fe));let i=this.ve(e,r);this.xe(e,i,r)}be(t,e){for(let i=0;i<6;i++)e[i]=0n;let r=0;for(;r<t.length&&t[r]==0;)r+=1;if(r==t.length)return 0;let s=-r;if(t.length-r>g.De){let i=t[g.De]>=5,a=new Array(g.De).fill(0);for(let o=0;o<g.De;o++)a[o]=t[o+r];i&&(s+=this.Ne(a)),t=a,r=0}for(let i=t.length-1;i>=r;i--)e[0]|=BigInt(t[i])<<32n,this.Se(e);return s}Se(t){let e=t.length;for(let r=0;r<e;r++){let s=t[r]%10n;t[r]=t[r]/10n,r+1<e&&(t[r+1]+=s<<32n)}}isEmpty(t){for(let e=0;e<t.length;e++)if(t[e]!=0n)return!1;return!0}Ne(t){for(let e=t.length-1;e>=0;e--){if(t[e]!=9)return t[e]=t[e]+1,0;t[e]=0}return t[0]=1,1}ve(t,e){let r=e[0]<<31n|e[1]>>1n,s=Number(r)/g.Ce;return Math.floor(Number(t)*g.Be+this.log2(s))}log2(t){return g.Qe*Math.log(t)}xe(t,e,r){let s=this.Ie;this.Oe(-e,s);let i=this.pe;this.Me(r,s,i),this.qe(i),BigInt(s[0])!=BigInt(-t)&&this.qe(i),e+=this.Le(i),(e+=g.Ue)<=0||(e+=this.$e(i),BigInt(e)>=g.Fe?this.exponent=Number(g.Fe):(this.exponent=Number(e),this.Ve=(i[0]<<32n)+i[1]&0xffffffffffffffffn,this.Te=(i[2]<<32n)+i[3]&0xffffffffffffffffn))}Oe(t,e){if(t==0)return void this.ke(g.je[0],e);let r=g.je;t<0&&(t=-t,r=g.Ke);let s=g.ze,i=32,a=!0;for(;t>0;)t>=s&&(a?(this.ke(r[i],e),a=!1):this.We(e,r[i],e),t-=s),i-=1,s*=.5}ke(t,e){for(let r=0;r<e.length;r++)e[r]=t[r]}We(t,e,r){this.Ge(t,e,this.pe);let s=this.Je(this.pe);this.He(this.pe,r),r[0]=t[0]+e[0]+BigInt(s)}Ge(t,e,r){for(let s=0;s<r.length;s++)r[s]=0n;this.Ye(t,this.Ae),this.Ye(e,this.Re);for(let s=5;s>=0;s--)for(let i=5;i>=0;i--){let a=this.Ae[s]*this.Re[i];r[i+s+1]=r[i+s+1]+(a&g.Xe)&0xffffffffffffffffn,r[i+s]=r[i+s]+(a>>32n)&0xffffffffffffffffn}for(let s=11;s>=1;s--)r[s-1]=r[s-1]+(r[s]>>32n)&0xffffffffffffffffn,r[s]&=g.Xe}Je(t){let e=0;for(;this.Ze(t);)this.qe(t),e-=1;return e}Ze(t){if(t[0]<0x19999999n)return!0;if(t[0]>0x19999999n)return!1;for(let e=1;e<t.length;e++){if(t[e]<0x99999999n)return!0;if(t[e]>0x99999999n)return!1}return!1}Me(t,e,r){for(let a=0;a<r.length;a++)r[a]=0n;let s=this.Re;this.Ye(e,s);let i=t.length;for(let a=i-1;a>=0;a--)for(let o=i-1;o>=0;o--){let u=t[a]*s[o];r[o+a+1]=r[o+a+1]+(u&g.Xe)&0xffffffffffffffffn,r[o+a]=r[o+a]+(u>>32n)&0xffffffffffffffffn}for(let a=11;a>=1;a--)r[a-1]=r[a-1]+(r[a]>>32n)&0xffffffffffffffffn,r[a]&=g.Xe}qe(t){let e=t.length-1;t[0]&=g.Xe,t[e]*=10n;for(let r=e-1;r>=0;r--)t[r]=10n*t[r]+(t[r+1]>>32n)&0xffffffffffffffffn,t[r+1]&=g.Xe}Le(t){let e=31-g.et(t[0]);return e!=0&&this.tt(t,e),e}$e(t){return this.rt(t,5,100n),this.rt(t,4,0x80000000n),(t[0]&g.nt<<1n)!=0n?(this.tt(t,1),1):0}He(t,e){e[1]=(t[0]<<32n)+t[1],e[2]=(t[2]<<32n)+t[3],e[3]=(t[4]<<32n)+t[5]}Ye(t,e){e[0]=t[1]>>32n,e[1]=t[1]&g.Xe,e[2]=t[2]>>32n,e[3]=t[2]&g.Xe,e[4]=t[3]>>32n,e[5]=t[3]&g.Xe}tt(t,e){let r=t.length-1,s=BigInt(32-Math.abs(e));if(e>0){let i=BigInt(e);for(let a=r+1-1;a>=1;a--)t[a]=t[a]>>i|t[a-1]<<s&g.Xe;t[0]=t[0]>>i}else if(e<0){let i=BigInt(-e);t[0]=0xffffffffffffffffn&(t[0]<<i|t[1]>>s);for(let a=1;a<r;a++)t[a]=0xffffffffffffffffn&(t[a]<<i&g.Xe|t[a+1]>>s);t[r]=t[r]<<i&g.Xe}}rt(t,e,r){let s=e;t[s]=t[s]+r&0xffffffffffffffffn;for(let i=s+1-1;i>=1&&(t[i]&g.nt)!=0n;i--)t[i]&=g.Xe,t[i-1]+=1n}static et(t){let e=Number(t>>32n);return e==0?32+Math.clz32(Number(BigInt.asUintN(32,t))):Math.clz32(e)}}g.De=59,g.ge=646456993,g.we=-646457032,g.Ce=0xccccccccccccd00,g.it=0x8000000000000000n,g.ze=2147483648,g.Xe=0x00000000ffffffffn,g.nt=0xffffffff00000000n,g.Be=Math.log(10)/Math.log(2),g.Qe=1/Math.log(2),g.Ue=2147483647,g.Fe=0xffffffffn,g.je=[[1n,0x1999999999999999n,0x9999999999999999n,0x999999999999999an],[1n,0x3333333333333333n,0x3333333333333333n,0x3333333333333334n],[1n,0x6666666666666666n,0x6666666666666666n,0x6666666666666667n],[2n,0x28f5c28f5c28f5c2n,0x8f5c28f5c28f5c28n,0xf5c28f5c28f5c290n],[3n,0x4189374bc6a7ef9dn,0xb22d0e5604189374n,0xbc6a7ef9db22d0e6n],[5n,0xa7c5ac471b478423n,0x0fcf80dc33721d53n,0xcddd6e04c0592104n],[10n,0x6df37f675ef6eadfn,0x5ab9a2072d44268dn,0x97df837e6748956en],[20n,0x2f394219248446ban,0xa23d2ec729af3d61n,0x0607aa0167dd94cbn],[39n,0x571cbec554b60dbbn,0xd5f64baf0506840dn,0x451db70d5904029bn],[78n,0x1da48ce468e7c702n,0x6520247d3556476dn,0x1469caf6db224cfan],[155n,0x2252f0e5b39769dcn,0x9ae2eea30ca3ade0n,0xeeaa3c08dfe84e30n],[309n,0x2e055c9a3f6ba793n,0x16583a816eb60a59n,0x22c4b0826cf1ebf7n],[617n,0x52bb45e9cf23f17fn,0x7688c07606e50364n,0xb34479aa9d449a57n],[1234n,0x1abc81c8ff5f846cn,0x8f5e3c9853e38c97n,0x45060097f3bf9296n],[2467n,0x1bec53b510daa7b4n,0x48369ed77dbb0eb1n,0x3b05587b2187b41en],[4933n,0x1e75063a5ba91326n,0x8abfb8e460016ae3n,0x28008702d29e8a3cn],[9865n,0x243c5d8bb5c5fa55n,0x40c6d248c5881915n,0x4c0fd99fd5befc22n],[19729n,0x334a5570c3f4ef3cn,0xa13c36c43f979c90n,0xda7ac473555fb7a8n],[39457n,0x66c304445dd98f3bn,0xa8c293a20e47a41bn,0x4c5b03dc12604964n],[78914n,0x293ffbf5fb028cc4n,0x89d3e5ff44238406n,0x369a339e1bfe8c9bn],[157827n,0x427792fbb68e5d20n,0x7b297cd9fc154b62n,0xf09142114aa9a20cn],[315653n,0xac92bc65ad5c08fcn,0x00beeb115a566c19n,0x4ba882d8a4622437n],[631306n,0x745581440f92e80en,0x4da822cf7f896f41n,0x509d598678164ecdn],[1262612n,0x34dd99b4c69523a5n,0x64bc2e8f0d8b1044n,0xb03b1c96da5dd349n],[2525223n,0x6d2bbea9d6d25a08n,0xa0a4606a88e96b70n,0x182063bbc2fe8520n],[5050446n,0x2e8e47d63bfdd6e3n,0x2b55fa8976eaa3e9n,0x1a6b9d3086412a73n],[10100891n,0x54aa68efa1d719dfn,0xd8505806612c5c8fn,0xad068837fee8b43an],[20201782n,0x1c00464ccb7bae77n,0x9e3877784c77982cn,0xd94af3b61717404fn],[40403563n,0x1ea099c8be2b6cd0n,0x8bfb6d539fa50466n,0x6d3bc37e69a84218n],[80807125n,0x24a457f466ce8d18n,0xf2c8f3b81bc6bb59n,0xa78c757692e02d49n],[161614249n,0x347256677aba6b53n,0x3fbf90d30611a67cn,0x1e039d87e0bdb32bn],[323228497n,0x6b727daf0fd3432an,0x71f71121f9e4200fn,0x8fcd9942d486c10cn],[646456994n,0x2d18e84484d91f78n,0x4079bfe7829dec6fn,0x21551643e365abc6n]],g.Ke=[[1n,0x1999999999999999n,0x9999999999999999n,0x999999999999999an],[0n,0x8000000000000000n,0x0000000000000000n,0x0000000000000000n],[0n,0x4000000000000000n,0x0000000000000000n,0x0000000000000001n],[-1n,0xa000000000000000n,0x0000000000000000n,0x0000000000000000n],[-2n,0x6400000000000000n,0x0000000000000000n,0x0000000000000000n],[-4n,0x2710000000000000n,0x0000000000000000n,0x0000000000000001n],[-9n,0x3b9aca0000000000n,0x0000000000000000n,0x0000000000000001n],[-19n,0x8ac7230489e80000n,0x0000000000000000n,0x0000000000000000n],[-38n,0x4b3b4ca85a86c47an,0x098a224000000000n,0x0000000000000001n],[-77n,0xdd15fe86affad912n,0x49ef0eb713f39eben,0xaa987b6e6fd2a002n],[-154n,0xbeeefb584aff8603n,0xaafb550ffacfd8fan,0x5ca47e4f88d45371n],[-308n,0x8e679c2f5e44ff8fn,0x570f09eaa7ea7648n,0x5961db50c6d2b888n],[-616n,0x4f371b3399fc2ab0n,0x8170041c9feb05aan,0xc7c343447c75bcf6n],[-1233n,0xf51e928179013fd3n,0xde4bd12cde4d985cn,0x4a573ca6f94bff14n],[-2466n,0xeab388127bccaff7n,0x1667639142b9fbaen,0x775ec9995e1039fbn],[-4932n,0xd72cb2a95c7ef6ccn,0xe81bf1e825ba7515n,0xc2feb521d6cb5dcdn],[-9864n,0xb4dc1be6604502dcn,0xd491079b8eef6535n,0x578d3965d24de84dn],[-19728n,0x7fc6447bee60ea43n,0x2548da5c8b125b27n,0x5f42d1142f41d349n],[-39456n,0x3fc65180f88af8fbn,0x6a6915f383349413n,0x063c3708b6ceb291n],[-78913n,0x9ee0197c8dcd55bfn,0x2b2b9b942c38f4a2n,0x0f8ba634e9c706aen],[-157826n,0x629963a25b8b2d79n,0xd00b9d2286f70876n,0xe97004700c3644fcn],[-315652n,0x25f9cc308ceef4f3n,0x40f19543911a4546n,0xa2cd389452cfc366n],[-631305n,0x385597b0d47e76b8n,0x1b9f67e103bf2329n,0xc3119848595985f7n],[-1262611n,0x7bf795d276c12f66n,0x66a61d62a446659an,0xa1a4d73bebf093d5n],[-2525222n,0x3c07d96ab1ed7799n,0xcb7355c22cc05ac0n,0x4ffc0ab73b1f6a49n],[-5050445n,0x8cc4cd8c3edefb9an,0x6c8ff86a90a97e0cn,0x166cfddbf98b71bfn],[-10100890n,0x4d67d81cc88e1228n,0x1d7cfb06666b79b3n,0x7b916728aaa4e70dn],[-20201781n,0xea0c55494e7a552dn,0xb88cb9484bb86c61n,0x8d44893c610bb7dfn],[-40403562n,0xd5fa8c821ec0c24an,0xa80e46e764e0f8b0n,0xa7276bfa432fac7en],[-80807124n,0xb2dae307426f6791n,0xc970b82f58b12918n,0x0472592f7f39190en],[-161614248n,0x7cf51edd8a15f1c9n,0x656dab3498f8e697n,0x12daa2a80e53c807n],[-323228496n,0x3cfe609ab5883c50n,0xbec8b5d22b198871n,0xe18477703b4622b4n],[-646456993n,0x9152447b9d7cda9an,0x3b4d3f6110d77aadn,0xfa81bad1c394adb4n]];class p{constructor(t,e,r,s){this.negative=t,this.st=e,this.Ve=r,this.Te=s}exponent(){return this.st-g.Ue}ot(){return this.st===0&&this.Ve===0n&&this.Te===0n}ut(){return this.st===D(p,S,"f",Vt)&&this.Ve===0n&&this.Te===0n}isNaN(){return this.st===D(p,S,"f",Vt)&&!(this.Ve===0n&&this.Te===0n)}compareTo(t){if(this.isNaN())return t.isNaN()?0:1;if(t.isNaN())return-1;let e,r;if(this.negative){if(!t.negative)return-1;e=1,r=-1}else{if(t.negative)return 1;e=-1,r=1}return this.st<t.st?e:this.st>t.st?r:this.Ve<t.Ve?e:this.Ve>t.Ve?r:this.Te<t.Te?e:this.Te>t.Te?r:0}debug(){return(this.negative?"+":"-")+D(p,S,"m",$e).call(p,this.Ve)+D(p,S,"m",$e).call(p,this.Te)+"*2^"+this.exponent()}static fromNumber(t){if(isNaN(t))return p.NaN;if(!isFinite(t))return t<0?p._t:p.ct;if(t===0)return Math.sign(1/t)>0?p.lt:p.ft;const e=new DataView(new ArrayBuffer(8));e.setFloat64(0,t);const r=e.getBigUint64(0);let s=BigInt.asUintN(64,r<<12n),i=2047&Number(r>>52n);if(i===0){const a=g.et(s);s=a<63?s<<BigInt(a+1):0n,i=-a}return new p(t<0,D(p,S,"m",Ft).call(p,i-1023),s,0n)}static fromString(t){if(t==="NaN")return p.NaN;if(t==="-Infinity")return p._t;if(t==="Infinity"||t==="+Infinity")return p.ct;const e=new Array(t.length).fill(0);let r=0,s=0,i=0,a=!1;for(t[r]==="-"?(a=!0,r++):t[r]==="+"&&r++;D(p,S,"m",ne).call(p,t,r);)e[s++]=D(p,S,"m",re).call(p,t,r++);if(t[r]==="."){const u=++r;for(;D(p,S,"m",ne).call(p,t,r);)e[s++]=D(p,S,"m",re).call(p,t,r++);i=u-r}if(t[r]==="e"||t[r]==="E"){let u=0;r++;let c=1;t[r]==="-"?(c=-1,r++):t[r]==="+"&&r++;const l=r;for(;D(p,S,"m",ne).call(p,t,r);)if(u=10*u+D(p,S,"m",re).call(p,t,r++),r-l>9)throw new Error("Exponent too large "+t);if(r===l)throw new Error("Invalid number "+t);i+=u*c}if(s===0||r!==t.length)throw new Error("Invalid number "+t);const o=g.ye(e.slice(0,s),i);return new p(a,o.exponent,o.Ve,o.Te)}}S=p,$e=function(t){return t.toString(16).padStart(16,"0")},ne=function(t,e){const r=t.codePointAt(e);return r!==void 0&&r>=48&&r<=57},re=function(t,e){return t.codePointAt(e)-48},Ft=function(t){return t+g.Ue},Vt={value:Number(g.Fe)},p.lt=new p(!1,0,0n,0n),p.ft=new p(!0,0,0n,0n),p.NaN=new p(!1,D(p,S,"f",Vt),1n<<63n,0n),p._t=new p(!0,D(p,S,"f",Vt),0n,0n),p.ct=new p(!1,D(p,S,"f",Vt),0n,0n),new p(!0,D(p,S,"m",Ft).call(p,63),0n,0n),new p(!1,D(p,S,"m",Ft).call(p,0),0n,0n),new p(!0,D(p,S,"m",Ft).call(p,0),0n,0n);/**
 * @license
 * Copyright 2020 Google LLC
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
 */const Cs=new RegExp(/^\d{4}-\d\d-\d\dT\d\d:\d\d:\d\d(?:\.(\d+))?Z$/);function pt(n){if(U(!!n,39018),typeof n=="string"){let t=0;const e=Cs.exec(n);if(U(!!e,46558,{timestamp:n}),e[1]){let s=e[1];s=(s+"000000000").substr(0,9),t=Number(s)}const r=new Date(n);return{seconds:Math.floor(r.getTime()/1e3),nanos:t}}return{seconds:k(n.seconds),nanos:k(n.nanos)}}function k(n){return typeof n=="number"?n:typeof n=="string"?Number(n):0}function ue(n){return typeof n=="string"?z.fromBase64String(n):z.fromUint8Array(n)}/**
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
 */function q(n,t){const e={typeString:n};return t&&(e.value=t),e}function Wt(n,t){if(!sr(n))throw new h(f.INVALID_ARGUMENT,"JSON must be an object");let e;for(const r in t)if(t[r]){const s=t[r].typeString,i="value"in t[r]?{value:t[r].value}:void 0,a=t[r].optional;if(!(r in n)){if(a)continue;e=`JSON missing required field: '${r}'`;break}const o=n[r];if(s&&typeof o!==s){e=`JSON field '${r}' must be a ${s}.`;break}if(i!==void 0&&o!==i.value){e=`Expected '${r}' field to equal '${i.value}'`;break}}if(e)throw new h(f.INVALID_ARGUMENT,e);return!0}/**
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
 */const Dn=-62135596800,Fn=1e6;class V{static now(){return V.fromMillis(Date.now())}static fromDate(t){return V.fromMillis(t.getTime())}static fromMillis(t){const e=Math.floor(t/1e3),r=Math.floor((t-1e3*e)*Fn);return new V(e,r)}static fromInstant(t){if(!t||typeof t.ht!="bigint")throw new h(f.INVALID_ARGUMENT,"Invalid Temporal.Instant object provided.");return V._fromEpochNanoseconds(t.ht)}static _fromEpochNanoseconds(t){let e,r;if(t>=0n)e=Number(t/1000000000n),r=Number(t%1000000000n);else{const s=t%1000000000n;s===0n?(e=Number(t/1000000000n),r=0):(e=Number(t/1000000000n-1n),r=Number(s+1000000000n))}return new V(e,r)}constructor(t,e){if(this.seconds=t,this.nanoseconds=e,e<0)throw new h(f.INVALID_ARGUMENT,"Timestamp nanoseconds out of range: "+e);if(e>=1e9)throw new h(f.INVALID_ARGUMENT,"Timestamp nanoseconds out of range: "+e);if(t<Dn)throw new h(f.INVALID_ARGUMENT,"Timestamp seconds out of range: "+t);if(t>=253402300800)throw new h(f.INVALID_ARGUMENT,"Timestamp seconds out of range: "+t)}toDate(){return new Date(this.toMillis())}toMillis(){return 1e3*this.seconds+this.nanoseconds/Fn}toInstant(){if(typeof Temporal>"u"||!Temporal.Instant)throw new h(f.FAILED_PRECONDITION,"The Temporal object is not available in the current environment.");const t=1000000000n*BigInt(this.seconds)+BigInt(this.nanoseconds);return Temporal.Instant.__PRIVATE_fromEpochNanoseconds(t)}_compareTo(t){return this.seconds===t.seconds?v(this.nanoseconds,t.nanoseconds):v(this.seconds,t.seconds)}isEqual(t){return t.seconds===this.seconds&&t.nanoseconds===this.nanoseconds}toString(){return"Timestamp(seconds="+this.seconds+", nanoseconds="+this.nanoseconds+")"}toJSON(){return{type:V._jsonSchemaVersion,seconds:this.seconds,nanoseconds:this.nanoseconds}}static fromJSON(t){if(Wt(t,V._jsonSchema))return new V(t.seconds,t.nanoseconds)}valueOf(){const t=this.seconds-Dn;return String(t).padStart(12,"0")+"."+String(this.nanoseconds).padStart(9,"0")}}V._jsonSchemaVersion="firestore/timestamp/1.0",V._jsonSchema={type:q("string",V._jsonSchemaVersion),seconds:q("number"),nanoseconds:q("number")};function ur(n){var e,r;return((r=(((e=n==null?void 0:n.mapValue)==null?void 0:e.fields)||{}).__type__)==null?void 0:r.stringValue)==="server_timestamp"}function cr(n){const t=n.mapValue.fields.__previous_value__;return ur(t)?cr(t):t}function qt(n){const t=pt(n.mapValue.fields.__local_write_time__.timestampValue);return new V(t.seconds,t.nanos)}/**
 * @license
 * Copyright 2020 Google LLC
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
 */const lr="__type__",fr="__vector__",ce="value",Us="server_timestamp",hr="__min__",Ze="__max__",at="__regex__",le="pattern",fe="options",jt="__oid__",Ht="__int__",Nt="__decimal128__",lt="__request_timestamp__",he="seconds",de="increment",Ve="__binary__",te={};var I,G;(G=I||(I={})).dt="regexValue",G.Et="bsonObjectIdValue",G.Vt="int32Value",G.Tt="decimal128Value",G.It="bsonTimestampValue",G.At="bsonBinaryValue",G.Rt="minKeyValue",G.Pt="maxKeyValue",G.yt="maxValue",G.bt="vectorValue",G.wt="serverTimestampValue",G.gt="regularMapValue";const kn={[fr]:I.bt,[Ze]:I.yt,[Us]:I.wt},dr={[at]:I.dt,[jt]:I.Et,[Ht]:I.Vt,[Nt]:I.Tt,[lt]:I.It,[Ve]:I.At,[hr]:I.Rt,[Ze]:I.Pt};function gt(n){if("nullValue"in n)return 0;if("booleanValue"in n)return 2;if("integerValue"in n||"doubleValue"in n)return 3;if("timestampValue"in n)return 4;if("stringValue"in n)return 7;if("bytesValue"in n)return 8;if("referenceValue"in n)return 9;if("geoPointValue"in n)return 11;if("arrayValue"in n)return 13;if(!("mapValue"in n))return E(28295,{value:n});switch((function(r){var a,o;if(!((a=r.mapValue)!=null&&a.fields))return I.gt;const s=r.mapValue.fields,i=(o=s[lr])==null?void 0:o.stringValue;if(i&&kn[i])return kn[i];if(Mt(s)===1){const u=Object.keys(s);return dr[u[0]]??I.gt}return I.gt})(n)){case I.wt:return 6;case I.yt:return 9007199254740991;case I.bt:return 14;case I.dt:return 12;case I.Et:return 10;case I.Vt:case I.Tt:return 3;case I.It:return 5;case I.At:return 8;case I.Rt:return 1;case I.Pt:return 16;default:return 15}}function vt(n,t,e){if(n===t)return!0;const r=gt(n);if(r!==gt(t))return!1;switch(r){case 0:case 9007199254740991:case 16:case 1:return!0;case 2:return n.booleanValue===t.booleanValue;case 6:return qt(n).isEqual(qt(t));case 4:return(function(i,a){if(typeof i.timestampValue=="string"&&typeof a.timestampValue=="string"&&i.timestampValue.length===a.timestampValue.length)return i.timestampValue===a.timestampValue;const o=pt(i.timestampValue),u=pt(a.timestampValue);return o.seconds===u.seconds&&o.nanos===u.nanos})(n,t);case 7:return n.stringValue===t.stringValue;case 8:return(function(i,a){return _r(i,a)===0})(n,t);case 9:return n.referenceValue===t.referenceValue;case 11:return(function(i,a){return k(i.geoPointValue.latitude)===k(a.geoPointValue.latitude)&&k(i.geoPointValue.longitude)===k(a.geoPointValue.longitude)})(n,t);case 3:return(function(i,a,o){if(_t(i)&&_t(a))return pr(i,a)===0;if("integerValue"in i&&"integerValue"in a||ge(i)&&ge(a))return Gt(i)===Gt(a);let u,c;return!("doubleValue"in i)||!("doubleValue"in a)?!1:(u=k(i.doubleValue),c=k(a.doubleValue),u===c?oe(u)===oe(c):!!(o===void 0||o.vt)&&isNaN(u)&&isNaN(c))})(n,t,e);case 13:return Je(n.arrayValue.values||[],t.arrayValue.values||[],((s,i)=>vt(s,i,e)));case 14:case 15:return(function(i,a,o){const u=i.mapValue.fields||{},c=a.mapValue.fields||{};if(Mt(u)!==Mt(c))return!1;for(const l in u)if(u.hasOwnProperty(l)&&(c[l]===void 0||!vt(u[l],c[l],o)))return!1;return!0})(n,t,e);case 5:return gr(n,t)===0;case 12:return yr(n,t)===0;case 10:return Er(n,t)===0;default:return E(52216,{left:n})}}function $t(n,t){return(n.values||[]).find((e=>vt(e,t)))!==void 0}function me(n,t){if(n===t)return 0;const e=gt(n),r=gt(t);if(e!==r)return v(e,r);switch(e){case 0:case 1:case 16:case 9007199254740991:return 0;case 2:return v(n.booleanValue,t.booleanValue);case 3:return Ge(n,t);case 4:return Ln(n.timestampValue,t.timestampValue);case 6:return Ln(qt(n),qt(t));case 7:return Ut(n.stringValue,t.stringValue);case 8:return _r(n,t);case 9:return(function(i,a){const o=i.split("/"),u=a.split("/");for(let c=0;c<o.length&&c<u.length;c++){const l=v(o[c],u[c]);if(l!==0)return l}return v(o.length,u.length)})(n.referenceValue,t.referenceValue);case 11:return(function(i,a){const o=v(k(i.latitude),k(a.latitude));return o!==0?o:v(k(i.longitude),k(a.longitude))})(n.geoPointValue,t.geoPointValue);case 13:return Cn(n.arrayValue,t.arrayValue);case 14:return(function(i,a){var m,_,T,w;const o=i.fields||{},u=a.fields||{},c=(m=o[ce])==null?void 0:m.arrayValue,l=(_=u[ce])==null?void 0:_.arrayValue,d=v(((T=c==null?void 0:c.values)==null?void 0:T.length)||0,((w=l==null?void 0:l.values)==null?void 0:w.length)||0);return d!==0?d:Cn(c,l)})(n.mapValue,t.mapValue);case 15:return(function(i,a){if(i===te&&a===te)return 0;if(i===te)return 1;if(a===te)return-1;const o=i.fields||{},u=Object.keys(o),c=a.fields||{},l=Object.keys(c);u.sort(),l.sort();for(let d=0;d<u.length&&d<l.length;++d){const m=Ut(u[d],l[d]);if(m!==0)return m;const _=me(o[u[d]],c[l[d]]);if(_!==0)return _}return v(u.length,l.length)})(n.mapValue,t.mapValue);case 5:return gr(n,t);case 12:return yr(n,t);case 10:return Er(n,t);default:throw E(23264,{xt:e})}}function Gt(n){let t;return t=ge(n)?n.mapValue.fields[Ht].integerValue:n.integerValue||n.doubleValue,k(t)}function mr(n){return n.mapValue.fields[Nt].stringValue}function Ge(n,t){if(_t(n)||_t(t))return pr(n,t);const e=Gt(n),r=Gt(t);return isNaN(e)?isNaN(r)?0:-1:isNaN(r)?1:v(e,r)}function pr(n,t){const e=On(n),r=On(t);return e.ot()&&r.ot()?0:e.isNaN()?r.isNaN()?0:-1:r.isNaN()?1:e.compareTo(r)}function On(n){return _t(n)?p.fromString(mr(n)):p.fromNumber(Gt(n))}function Ln(n,t){if(typeof n=="string"&&typeof t=="string"&&n.length===t.length)return v(n,t);const e=pt(n),r=pt(t),s=v(e.seconds,r.seconds);return s!==0?s:v(e.nanos,r.nanos)}function Cn(n,t){const e=n.values||[],r=t.values||[];for(let s=0;s<e.length&&s<r.length;++s){const i=me(e[s],r[s]);if(i!==void 0&&i!==0)return i}return v(e.length,r.length)}function gr(n,t){var o,u,c,l,d,m,_,T,w,b,H,Y;const e=(c=(u=(o=n.mapValue.fields)==null?void 0:o[lt].mapValue)==null?void 0:u.fields)==null?void 0:c[he],r=(m=(d=(l=t.mapValue.fields)==null?void 0:l[lt].mapValue)==null?void 0:d.fields)==null?void 0:m[he],s=(w=(T=(_=n.mapValue.fields)==null?void 0:_[lt].mapValue)==null?void 0:T.fields)==null?void 0:w[de],i=(Y=(H=(b=t.mapValue.fields)==null?void 0:b[lt].mapValue)==null?void 0:H.fields)==null?void 0:Y[de],a=Ge(e,r);return a!==0?a:Ge(s,i)}function Un(n){var o;if("bytesValue"in n)return{subtype:0,bytes:ue(n.bytesValue)};const t=(o=n.mapValue)==null?void 0:o.fields,e=t==null?void 0:t[Ve],r=e==null?void 0:e.bytesValue;if(!r)throw new Error("Received incorrect value for BsonBinaryData");const s=ue(r).toUint8Array();if(s.length===0)throw new Error("Received empty bytesValue for BsonBinaryData");const i=s[0],a=s.slice(1);return{subtype:i,bytes:z.fromUint8Array(a)}}function _r(n,t){const e=Un(n),r=Un(t);return e.subtype!==r.subtype?e.subtype<r.subtype?-1:1:e.bytes.compareTo(r.bytes)}function yr(n,t){var c,l,d,m,_,T,w,b,H,Y,Qt,Z,ct,An,bn,Vn;const e=n.mapValue.fields,r=((m=(d=(l=(c=e==null?void 0:e[at])==null?void 0:c.mapValue)==null?void 0:l.fields)==null?void 0:d[le])==null?void 0:m.stringValue)??"",s=((b=(w=(T=(_=e==null?void 0:e[at])==null?void 0:_.mapValue)==null?void 0:T.fields)==null?void 0:w[fe])==null?void 0:b.stringValue)??"",i=t.mapValue.fields,a=((Z=(Qt=(Y=(H=i==null?void 0:i[at])==null?void 0:H.mapValue)==null?void 0:Y.fields)==null?void 0:Qt[le])==null?void 0:Z.stringValue)??"",o=((Vn=(bn=(An=(ct=i==null?void 0:i[at])==null?void 0:ct.mapValue)==null?void 0:An.fields)==null?void 0:bn[fe])==null?void 0:Vn.stringValue)??"",u=Ut(r,a);return u!==0?u:v(s,o)}function Er(n,t){var e,r,s,i;return Ut(((r=(e=n.mapValue.fields)==null?void 0:e[jt])==null?void 0:r.stringValue)??"",((i=(s=t.mapValue.fields)==null?void 0:s[jt])==null?void 0:i.stringValue)??"")}function pe(n,t){return{referenceValue:`projects/${n.projectId}/databases/${n.database}/documents/${t.path.canonicalString()}`}}function _t(n){var e;if(!((e=n.mapValue)!=null&&e.fields))return!1;const t=n.mapValue.fields;return Mt(t)===1&&t[Nt]&&!!t[Nt].stringValue}function ge(n){var e,r;if(!((e=n.mapValue)!=null&&e.fields))return!1;const t=n.mapValue.fields;return Mt(t)===1&&((r=t[Ht])==null?void 0:r.integerValue)!==void 0}function Ir(n){return!!n&&"arrayValue"in n}function Mn(n){return!!n&&"nullValue"in n}function qn(n){return!(!(function(e){return!!e&&"doubleValue"in e})(n)||!isNaN(Number(n.doubleValue)))||!(!_t(n)||mr(n)!=="NaN")}function Me(n){return!!n&&"mapValue"in n}function kt(n){if(n.geoPointValue)return{geoPointValue:{...n.geoPointValue}};if(n.timestampValue&&typeof n.timestampValue=="object")return{timestampValue:{...n.timestampValue}};if(n.mapValue){const t={mapValue:{fields:{}}};return Kt(n.mapValue.fields,((e,r)=>t.mapValue.fields[e]=kt(r))),t}if(n.arrayValue){const t={arrayValue:{values:[]}};for(let e=0;e<(n.arrayValue.values||[]).length;++e)t.arrayValue.values[e]=kt(n.arrayValue.values[e]);return t}return{...n}}/**
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
 */new Set(Object.values(dr));class _e{constructor(t,e){this.position=t,this.inclusive=e}}function jn(n,t){if(n===null)return t===null;if(t===null||n.inclusive!==t.inclusive||n.position.length!==t.position.length)return!1;for(let e=0;e<n.position.length;e++)if(!vt(n.position[e],t.position[e]))return!1;return!0}/**
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
 */class Tr{}class j extends Tr{constructor(t,e,r){super(),this.field=t,this.op=e,this.value=r}static create(t,e,r){return t.isKeyField()?e==="in"||e==="not-in"?this.createKeyFieldInFilter(t,e,r):new Ms(t,e,r):e==="array-contains"?new $s(t,r):e==="in"?new Gs(t,r):e==="not-in"?new Bs(t,r):e==="array-contains-any"?new zs(t,r):new j(t,e,r)}static createKeyFieldInFilter(t,e,r){return e==="in"?new qs(t,r):new js(t,r)}matches(t){const e=t.data.field(this.field);return this.op==="!="?e!==null&&e.nullValue===void 0&&this.matchesComparison(me(e,this.value)):e!==null&&gt(this.value)===gt(e)&&this.matchesComparison(me(e,this.value))}matchesComparison(t){switch(this.op){case"<":return t<0;case"<=":return t<=0;case"==":return t===0;case"!=":return t!==0;case">":return t>0;case">=":return t>=0;default:return E(47266,{operator:this.op})}}isInequality(){return["<","<=",">",">=","!=","not-in"].indexOf(this.op)>=0}getFlattenedFilters(){return[this]}getFilters(){return[this]}}class yt extends Tr{constructor(t,e){super(),this.filters=t,this.op=e,this.Dt=null}static create(t,e){return new yt(t,e)}matches(t){return(function(r){return r.op==="and"})(this)?this.filters.find((e=>!e.matches(t)))===void 0:this.filters.find((e=>e.matches(t)))!==void 0}getFlattenedFilters(){return this.Dt!==null||(this.Dt=this.filters.reduce(((t,e)=>t.concat(e.getFlattenedFilters())),[])),this.Dt}getFilters(){return Object.assign([],this.filters)}}function wr(n,t){return n instanceof j?(function(r,s){return s instanceof j&&r.op===s.op&&r.field.isEqual(s.field)&&vt(r.value,s.value)})(n,t):n instanceof yt?(function(r,s){return s instanceof yt&&r.op===s.op&&r.filters.length===s.filters.length?r.filters.reduce(((i,a,o)=>i&&wr(a,s.filters[o])),!0):!1})(n,t):void E(19439)}class Ms extends j{constructor(t,e,r){super(t,e,r),this.key=x.fromName(r.referenceValue)}matches(t){const e=x.comparator(t.key,this.key);return this.matchesComparison(e)}}class qs extends j{constructor(t,e){super(t,"in",e),this.keys=Ar("in",e)}matches(t){return this.keys.some((e=>e.isEqual(t.key)))}}class js extends j{constructor(t,e){super(t,"not-in",e),this.keys=Ar("not-in",e)}matches(t){return!this.keys.some((e=>e.isEqual(t.key)))}}function Ar(n,t){var e;return(((e=t.arrayValue)==null?void 0:e.values)||[]).map((r=>x.fromName(r.referenceValue)))}class $s extends j{constructor(t,e){super(t,"array-contains",e)}matches(t){const e=t.data.field(this.field);return Ir(e)&&$t(e.arrayValue,this.value)}}class Gs extends j{constructor(t,e){super(t,"in",e)}matches(t){const e=t.data.field(this.field);return e!==null&&$t(this.value.arrayValue,e)}}class Bs extends j{constructor(t,e){super(t,"not-in",e)}matches(t){if($t(this.value.arrayValue,{nullValue:"NULL_VALUE"}))return!1;const e=t.data.field(this.field);return e!==null&&e.nullValue===void 0&&!$t(this.value.arrayValue,e)}}class zs extends j{constructor(t,e){super(t,"array-contains-any",e)}matches(t){const e=t.data.field(this.field);return!(!Ir(e)||!e.arrayValue.values)&&e.arrayValue.values.some((r=>$t(this.value.arrayValue,r)))}}/**
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
 */class ye{constructor(t,e="asc"){this.field=t,this.dir=e}}function Ks(n,t){return n.dir===t.dir&&n.field.isEqual(t.field)}/**
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
 */class R{static fromTimestamp(t){return new R(t)}static min(){return new R(new V(0,0))}static max(){return new R(new V(253402300799,999999999))}constructor(t){this.timestamp=t}compareTo(t){return this.timestamp._compareTo(t.timestamp)}isEqual(t){return this.timestamp.isEqual(t.timestamp)}toMicroseconds(){return 1e6*this.timestamp.seconds+this.timestamp.nanoseconds/1e3}toString(){return"SnapshotVersion("+this.timestamp.toString()+")"}toTimestamp(){return this.timestamp}}/**
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
 */class Ee{constructor(t,e){this.comparator=t,this.root=e||F.EMPTY}insert(t,e){return new Ee(this.comparator,this.root.insert(t,e,this.comparator).copy(null,null,F.BLACK,null,null))}remove(t){return new Ee(this.comparator,this.root.remove(t,this.comparator).copy(null,null,F.BLACK,null,null))}get(t){let e=this.root;for(;!e.isEmpty();){const r=this.comparator(t,e.key);if(r===0)return e.value;r<0?e=e.left:r>0&&(e=e.right)}return null}indexOf(t){let e=0,r=this.root;for(;!r.isEmpty();){const s=this.comparator(t,r.key);if(s===0)return e+r.left.size;s<0?r=r.left:(e+=r.left.size+1,r=r.right)}return-1}isEmpty(){return this.root.isEmpty()}get size(){return this.root.size}minKey(){return this.root.minKey()}maxKey(){return this.root.maxKey()}inorderTraversal(t){return this.root.inorderTraversal(t)}forEach(t){this.inorderTraversal(((e,r)=>(t(e,r),!1)))}toString(){const t=[];return this.inorderTraversal(((e,r)=>(t.push(`${e}:${r}`),!1))),`{${t.join(", ")}}`}reverseTraversal(t){return this.root.reverseTraversal(t)}getIterator(){return new ee(this.root,null,this.comparator,!1)}getIteratorFrom(t){return new ee(this.root,t,this.comparator,!1)}getReverseIterator(){return new ee(this.root,null,this.comparator,!0)}getReverseIteratorFrom(t){return new ee(this.root,t,this.comparator,!0)}}class ee{constructor(t,e,r,s){this.isReverse=s,this.nodeStack=[];let i=1;for(;!t.isEmpty();)if(i=e?r(t.key,e):1,e&&s&&(i*=-1),i<0)t=this.isReverse?t.left:t.right;else{if(i===0){this.nodeStack.push(t);break}this.nodeStack.push(t),t=this.isReverse?t.right:t.left}}getNext(){let t=this.nodeStack.pop();const e={key:t.key,value:t.value};if(this.isReverse)for(t=t.left;!t.isEmpty();)this.nodeStack.push(t),t=t.right;else for(t=t.right;!t.isEmpty();)this.nodeStack.push(t),t=t.left;return e}hasNext(){return this.nodeStack.length>0}peek(){if(this.nodeStack.length===0)return null;const t=this.nodeStack[this.nodeStack.length-1];return{key:t.key,value:t.value}}}class F{constructor(t,e,r,s,i){this.key=t,this.value=e,this.color=r??F.RED,this.left=s??F.EMPTY,this.right=i??F.EMPTY,this.size=this.left.size+1+this.right.size}copy(t,e,r,s,i){return new F(t??this.key,e??this.value,r??this.color,s??this.left,i??this.right)}isEmpty(){return!1}inorderTraversal(t){return this.left.inorderTraversal(t)||t(this.key,this.value)||this.right.inorderTraversal(t)}reverseTraversal(t){return this.right.reverseTraversal(t)||t(this.key,this.value)||this.left.reverseTraversal(t)}min(){return this.left.isEmpty()?this:this.left.min()}minKey(){return this.min().key}maxKey(){return this.right.isEmpty()?this.key:this.right.maxKey()}insert(t,e,r){let s=this;const i=r(t,s.key);return s=i<0?s.copy(null,null,null,s.left.insert(t,e,r),null):i===0?s.copy(null,e,null,null,null):s.copy(null,null,null,null,s.right.insert(t,e,r)),s.fixUp()}removeMin(){if(this.left.isEmpty())return F.EMPTY;let t=this;return t.left.isRed()||t.left.left.isRed()||(t=t.moveRedLeft()),t=t.copy(null,null,null,t.left.removeMin(),null),t.fixUp()}remove(t,e){let r,s=this;if(e(t,s.key)<0)s.left.isEmpty()||s.left.isRed()||s.left.left.isRed()||(s=s.moveRedLeft()),s=s.copy(null,null,null,s.left.remove(t,e),null);else{if(s.left.isRed()&&(s=s.rotateRight()),s.right.isEmpty()||s.right.isRed()||s.right.left.isRed()||(s=s.moveRedRight()),e(t,s.key)===0){if(s.right.isEmpty())return F.EMPTY;r=s.right.min(),s=s.copy(r.key,r.value,null,null,s.right.removeMin())}s=s.copy(null,null,null,null,s.right.remove(t,e))}return s.fixUp()}isRed(){return this.color}fixUp(){let t=this;return t.right.isRed()&&!t.left.isRed()&&(t=t.rotateLeft()),t.left.isRed()&&t.left.left.isRed()&&(t=t.rotateRight()),t.left.isRed()&&t.right.isRed()&&(t=t.colorFlip()),t}moveRedLeft(){let t=this.colorFlip();return t.right.left.isRed()&&(t=t.copy(null,null,null,null,t.right.rotateRight()),t=t.rotateLeft(),t=t.colorFlip()),t}moveRedRight(){let t=this.colorFlip();return t.left.left.isRed()&&(t=t.rotateRight(),t=t.colorFlip()),t}rotateLeft(){const t=this.copy(null,null,F.RED,null,this.right.left);return this.right.copy(null,null,this.color,t,null)}rotateRight(){const t=this.copy(null,null,F.RED,this.left.right,null);return this.left.copy(null,null,this.color,null,t)}colorFlip(){const t=this.left.copy(null,null,!this.left.color,null,null),e=this.right.copy(null,null,!this.right.color,null,null);return this.copy(null,null,!this.color,t,e)}checkMaxDepth(){const t=this.check();return Math.pow(2,t)<=this.size+1}check(){if(this.isRed()&&this.left.isRed())throw E(43730,{key:this.key,value:this.value});if(this.right.isRed())throw E(14113,{key:this.key,value:this.value});const t=this.left.check();if(t!==this.right.check())throw E(27949);return t+(this.isRed()?0:1)}}F.EMPTY=null,F.RED=!0,F.BLACK=!1;F.EMPTY=new class{constructor(){this.size=0}get key(){throw E(57766)}get value(){throw E(16141)}get color(){throw E(16727)}get left(){throw E(29726)}get right(){throw E(36894)}copy(t,e,r,s,i){return this}insert(t,e,r){return new F(t,e)}remove(t,e){return this}isEmpty(){return!0}inorderTraversal(t){return!1}reverseTraversal(t){return!1}minKey(){return null}maxKey(){return null}isRed(){return!1}checkMaxDepth(){return!0}check(){return 0}};/**
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
 */class Bt{constructor(t){this.comparator=t,this.data=new Ee(this.comparator)}has(t){return this.data.get(t)!==null}first(){return this.data.minKey()}last(){return this.data.maxKey()}get size(){return this.data.size}indexOf(t){return this.data.indexOf(t)}forEach(t){this.data.inorderTraversal(((e,r)=>(t(e),!1)))}forEachInRange(t,e){const r=this.data.getIteratorFrom(t[0]);for(;r.hasNext();){const s=r.getNext();if(this.comparator(s.key,t[1])>=0)return;e(s.key)}}forEachWhile(t,e){let r;for(r=e!==void 0?this.data.getIteratorFrom(e):this.data.getIterator();r.hasNext();)if(!t(r.getNext().key))return}firstAfterOrEqual(t){const e=this.data.getIteratorFrom(t);return e.hasNext()?e.getNext().key:null}getIterator(){return new $n(this.data.getIterator())}getIteratorFrom(t){return new $n(this.data.getIteratorFrom(t))}add(t){return this.copy(this.data.remove(t).insert(t,!0))}delete(t){return this.has(t)?this.copy(this.data.remove(t)):this}isEmpty(){return this.data.isEmpty()}unionWith(t){let e=this;return e.size<t.size&&(e=t,t=this),t.forEach((r=>{e=e.add(r)})),e}isEqual(t){if(!(t instanceof Bt)||this.size!==t.size)return!1;const e=this.data.getIterator(),r=t.data.getIterator();for(;e.hasNext();){const s=e.getNext().key,i=r.getNext().key;if(this.comparator(s,i)!==0)return!1}return!0}toArray(){const t=[];return this.forEach((e=>{t.push(e)})),t}toString(){const t=[];return this.forEach((e=>t.push(e))),"SortedSet("+t.toString()+")"}copy(t){const e=new Bt(this.comparator);return e.data=t,e}}class $n{constructor(t){this.iter=t}getNext(){return this.iter.getNext().key}hasNext(){return this.iter.hasNext()}}/**
 * @license
 * Copyright 2020 Google LLC
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
 */class Et{constructor(t){this.fields=t,t.sort(ot.comparator)}static empty(){return new Et([])}unionWith(t){let e=new Bt(ot.comparator);for(const r of this.fields)e=e.add(r);for(const r of t)e=e.add(r);return new Et(e.toArray())}covers(t){for(const e of this.fields)if(e.isPrefixOf(t))return!0;return!1}isEqual(t){return Je(this.fields,t.fields,((e,r)=>e.isEqual(r)))}}/**
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
 */class C{constructor(t){this.value=t}static empty(){return new C({mapValue:{}})}field(t){if(t.isEmpty())return this.value;{let e=this.value;for(let r=0;r<t.length-1;++r)if(e=(e.mapValue.fields||{})[t.get(r)],!Me(e))return null;return e=(e.mapValue.fields||{})[t.lastSegment()],e||null}}set(t,e){this.getFieldsMap(t.popLast())[t.lastSegment()]=kt(e)}setAll(t){let e=ot.emptyPath(),r={},s=[];t.forEach(((a,o)=>{if(!e.isImmediateParentOf(o)){const u=this.getFieldsMap(e);this.applyChanges(u,r,s),r={},s=[],e=o.popLast()}a?r[o.lastSegment()]=kt(a):s.push(o.lastSegment())}));const i=this.getFieldsMap(e);this.applyChanges(i,r,s)}delete(t){const e=this.field(t.popLast());Me(e)&&e.mapValue.fields&&delete e.mapValue.fields[t.lastSegment()]}isEqual(t){return vt(this.value,t.value)}getFieldsMap(t){let e=this.value;e.mapValue.fields||(e.mapValue={fields:{}});for(let r=0;r<t.length;++r){let s=e.mapValue.fields[t.get(r)];Me(s)&&s.mapValue.fields||(s={mapValue:{fields:{}}},e.mapValue.fields[t.get(r)]=s),e=s}return e.mapValue.fields}applyChanges(t,e,r){Kt(e,((s,i)=>t[s]=i));for(const s of r)delete t[s]}clone(){return new C(kt(this.value))}}/**
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
 */class J{constructor(t,e,r,s,i,a,o){this.key=t,this.documentType=e,this.version=r,this.readTime=s,this.createTime=i,this.data=a,this.documentState=o}static newInvalidDocument(t){return new J(t,0,R.min(),R.min(),R.min(),C.empty(),0)}static newFoundDocument(t,e,r,s){return new J(t,1,e,R.min(),r,s,0)}static newNoDocument(t,e){return new J(t,2,e,R.min(),R.min(),C.empty(),0)}static newUnknownDocument(t,e){return new J(t,3,e,R.min(),R.min(),C.empty(),2)}convertToFoundDocument(t,e){return!this.createTime.isEqual(R.min())||this.documentType!==2&&this.documentType!==0||(this.createTime=t),this.version=t,this.documentType=1,this.data=e,this.documentState=0,this}convertToNoDocument(t){return this.version=t,this.documentType=2,this.data=C.empty(),this.documentState=0,this}convertToUnknownDocument(t){return this.version=t,this.documentType=3,this.data=C.empty(),this.documentState=2,this}setHasCommittedMutations(){return this.documentState=2,this}setHasLocalMutations(){return this.documentState=1,this.version=R.min(),this}setReadTime(t){return this.readTime=t,this}get hasLocalMutations(){return this.documentState===1}get hasCommittedMutations(){return this.documentState===2}get hasPendingWrites(){return this.hasLocalMutations||this.hasCommittedMutations}isValidDocument(){return this.documentType!==0}isFoundDocument(){return this.documentType===1}isNoDocument(){return this.documentType===2}isUnknownDocument(){return this.documentType===3}isEqual(t){return t instanceof J&&this.key.isEqual(t.key)&&this.version.isEqual(t.version)&&this.documentType===t.documentType&&this.documentState===t.documentState&&this.data.isEqual(t.data)}mutableCopy(){return new J(this.key,this.documentType,this.version,this.readTime,this.createTime,this.data.clone(),this.documentState)}toString(){return`Document(${this.key}, ${this.version}, ${JSON.stringify(this.data.value)}, {createTime: ${this.createTime}}), {documentType: ${this.documentType}}), {documentState: ${this.documentState}})`}}/**
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
 */class Ws{constructor(t,e=null,r=[],s=[],i=null,a=null,o=null){this.path=t,this.collectionGroup=e,this.orderBy=r,this.filters=s,this.limit=i,this.startAt=a,this.endAt=o,this.Nt=null}}function Gn(n,t=null,e=[],r=[],s=null,i=null,a=null){return new Ws(n,t,e,r,s,i,a)}/**
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
 */class Tt{constructor(t,e=null,r=[],s=[],i=null,a="F",o=null,u=null){this.path=t,this.collectionGroup=e,this.explicitOrderBy=r,this.filters=s,this.limit=i,this.limitType=a,this.startAt=o,this.endAt=u,this.St=null,this.Ct=null,this.Bt=null,this.startAt,this.endAt}}function br(n){return n.collectionGroup!==null}function Vr(n){const t=mt(n);if(t.St===null){t.St=[];const e=new Set;for(const i of t.explicitOrderBy)t.St.push(i),e.add(i.field.canonicalString());const r=t.explicitOrderBy.length>0?t.explicitOrderBy[t.explicitOrderBy.length-1].dir:"asc";(function(a){let o=new Bt(ot.comparator);return a.filters.forEach((u=>{u.getFlattenedFilters().forEach((c=>{c.isInequality()&&(o=o.add(c.field))}))})),o})(t).forEach((i=>{e.has(i.canonicalString())||i.isKeyField()||t.St.push(new ye(i,r))})),e.has(ot.keyField().canonicalString())||t.St.push(new ye(ot.keyField(),r))}return t.St}function Be(n){const t=mt(n);return t.Ct||(t.Ct=Nr(t,Vr(n))),t.Ct}function Nr(n,t){if(n.limitType==="F")return Gn(n.path,n.collectionGroup,t,n.filters,n.limit,n.startAt,n.endAt);{t=t.map((s=>{const i=s.dir==="desc"?"asc":"desc";return new ye(s.field,i)}));const e=n.endAt?new _e(n.endAt.position,n.endAt.inclusive):null,r=n.startAt?new _e(n.startAt.position,n.startAt.inclusive):null;return Gn(n.path,n.collectionGroup,t,n.filters,n.limit,e,r)}}function ze(n,t){const e=n.filters.concat([t]);return new Tt(n.path,n.collectionGroup,n.explicitOrderBy.slice(),e,n.limit,n.limitType,n.startAt,n.endAt)}function Hs(n,t){return(function(r,s){if(r.limit!==s.limit||r.orderBy.length!==s.orderBy.length)return!1;for(let i=0;i<r.orderBy.length;i++)if(!Ks(r.orderBy[i],s.orderBy[i]))return!1;if(r.filters.length!==s.filters.length)return!1;for(let i=0;i<r.filters.length;i++)if(!wr(r.filters[i],s.filters[i]))return!1;return r.collectionGroup===s.collectionGroup&&!!r.path.isEqual(s.path)&&!!jn(r.startAt,s.startAt)&&jn(r.endAt,s.endAt)})(Be(n),Be(t))&&n.limitType===t.limitType}/**
 * @license
 * Copyright 2020 Google LLC
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
 */function vr(n,t){if(n.useProto3Json){if(isNaN(t))return{doubleValue:"NaN"};if(t===1/0)return{doubleValue:"Infinity"};if(t===-1/0)return{doubleValue:"-Infinity"}}return{doubleValue:oe(t)?"-0":t}}function se(n){return{integerValue:""+n}}function Ne(n,t,e){return(function(s){return typeof s=="number"&&Number.isInteger(s)&&!oe(s)&&s<=Number.MAX_SAFE_INTEGER&&s>=Number.MIN_SAFE_INTEGER})(t)?se(t):vr(n,t)}/**
 * @license
 * Copyright 2018 Google LLC
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
 */class ve{constructor(){this._=void 0}}class xr extends ve{}class Rr extends ve{constructor(t){super(),this.elements=t}}class Pr extends ve{constructor(t){super(),this.elements=t}}class tn extends ve{constructor(t,e){super(),this.serializer=t,this.Qt=e}}class Sr extends tn{}class Dr extends tn{}class Fr extends tn{}/**
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
 */class Rt{constructor(t,e){this.field=t,this.transform=e}}class O{constructor(t,e){this.updateTime=t,this.exists=e}static none(){return new O}static exists(t){return new O(void 0,t)}static updateTime(t){return new O(t)}get isNone(){return this.updateTime===void 0&&this.exists===void 0}isEqual(t){return this.exists===t.exists&&(this.updateTime?!!t.updateTime&&this.updateTime.isEqual(t.updateTime):!t.updateTime)}}class xe{}class kr extends xe{constructor(t,e,r,s=[]){super(),this.key=t,this.value=e,this.precondition=r,this.fieldTransforms=s,this.type=0}getFieldMask(){return null}}class en extends xe{constructor(t,e,r,s,i=[]){super(),this.key=t,this.data=e,this.fieldMask=r,this.precondition=s,this.fieldTransforms=i,this.type=1}getFieldMask(){return this.fieldMask}}class Re extends xe{constructor(t,e){super(),this.key=t,this.precondition=e,this.type=2,this.fieldTransforms=[]}getFieldMask(){return null}}class Or extends xe{constructor(t,e){super(),this.key=t,this.precondition=e,this.type=3,this.fieldTransforms=[]}getFieldMask(){return null}}/**
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
 */const Ys={asc:"ASCENDING",desc:"DESCENDING"},Xs={"<":"LESS_THAN","<=":"LESS_THAN_OR_EQUAL",">":"GREATER_THAN",">=":"GREATER_THAN_OR_EQUAL","==":"EQUAL","!=":"NOT_EQUAL","array-contains":"ARRAY_CONTAINS",in:"IN","not-in":"NOT_IN","array-contains-any":"ARRAY_CONTAINS_ANY"},Js={and:"AND",or:"OR"};class Qs{constructor(t,e){this.databaseId=t,this.useProto3Json=e}}function ie(n,t){return n.useProto3Json?`${new Date(1e3*t.seconds).toISOString().replace(/\.\d*/,"").replace("Z","")}.${("000000000"+t.nanoseconds).slice(-9)}Z`:{seconds:""+t.seconds,nanos:t.nanoseconds}}function Bn(n,t){return n.useProto3Json?t.toBase64():t.toUint8Array()}function Zs(n,t){return ie(n,t.toTimestamp())}function Ot(n){return U(!!n,49232),R.fromTimestamp((function(e){const r=pt(e);return new V(r.seconds,r.nanos)})(n))}function nn(n,t){return Ke(n,t).canonicalString()}function Ke(n,t){const e=(function(s){return new N(["projects",s.projectId,"databases",s.database])})(n).child("documents");return t===void 0?e:e.child(t)}function Ie(n,t){return nn(n.databaseId,t.path)}function We(n,t){const e=(function(s){const i=N.fromString(s);return U(Ur(i),10190,{key:i.toString()}),i})(t);if(e.get(1)!==n.databaseId.projectId)throw new h(f.INVALID_ARGUMENT,"Tried to deserialize key from different project: "+e.get(1)+" vs "+n.databaseId.projectId);if(e.get(3)!==n.databaseId.database)throw new h(f.INVALID_ARGUMENT,"Tried to deserialize key from different database: "+e.get(3)+" vs "+n.databaseId.database);return new x((function(s){return U(s.length>4&&s.get(4)==="documents",29091,{key:s.toString()}),s.popFirst(5)})(e))}function zn(n,t,e){return{name:Ie(n,t),fields:e.value.mapValue.fields}}function ti(n,t){return"found"in t?(function(r,s){U(!!s.found,43571),s.found.name,s.found.updateTime;const i=We(r,s.found.name),a=Ot(s.found.updateTime),o=s.found.createTime?Ot(s.found.createTime):R.min(),u=new C({mapValue:{fields:s.found.fields}});return J.newFoundDocument(i,a,o,u)})(n,t):"missing"in t?(function(r,s){U(!!s.missing,3894),U(!!s.readTime,22933);const i=We(r,s.missing),a=Ot(s.readTime);return J.newNoDocument(i,a)})(n,t):E(7234,{result:t})}function ei(n,t){let e;if(t instanceof kr)e={update:zn(n,t.key,t.value)};else if(t instanceof Re)e={delete:Ie(n,t.key)};else if(t instanceof en)e={update:zn(n,t.key,t.data),updateMask:ii(t.fieldMask)};else{if(!(t instanceof Or))return E(16599,{Ot:t.type});e={verify:Ie(n,t.key)}}return t.fieldTransforms.length>0&&(e.updateTransforms=t.fieldTransforms.map((r=>(function(i,a){const o=a.transform;if(o instanceof xr)return{fieldPath:a.field.canonicalString(),setToServerValue:"REQUEST_TIME"};if(o instanceof Rr)return{fieldPath:a.field.canonicalString(),appendMissingElements:{values:o.elements}};if(o instanceof Pr)return{fieldPath:a.field.canonicalString(),removeAllFromArray:{values:o.elements}};if(o instanceof Sr)return{fieldPath:a.field.canonicalString(),increment:o.Qt};if(o instanceof Dr)return{fieldPath:a.field.canonicalString(),minimum:o.Qt};if(o instanceof Fr)return{fieldPath:a.field.canonicalString(),maximum:o.Qt};throw E(20930,{transform:a.transform})})(0,r)))),t.precondition.isNone||(e.currentDocument=(function(s,i){return i.updateTime!==void 0?{updateTime:Zs(s,i.updateTime)}:i.exists!==void 0?{exists:i.exists}:E(27497)})(n,t.precondition)),e}function Lr(n,t){const e={structuredQuery:{}},r=t.path;let s;t.collectionGroup!==null?(s=r,e.structuredQuery.from=[{collectionId:t.collectionGroup,allDescendants:!0}]):(s=r.popLast(),e.structuredQuery.from=[{collectionId:r.lastSegment()}]),e.parent=(function(c,l){return nn(c.databaseId,l)})(n,s);const i=(function(c){if(c.length!==0)return Cr(yt.create(c,"and"))})(t.filters);i&&(e.structuredQuery.where=i);const a=(function(c){if(c.length!==0)return c.map((l=>(function(m){return{field:it(m.field),direction:ni(m.dir)}})(l)))})(t.orderBy);a&&(e.structuredQuery.orderBy=a);const o=(function(c,l){return c.useProto3Json||or(l)?l:{value:l}})(n,t.limit);return o!==null&&(e.structuredQuery.limit=o),t.startAt&&(e.structuredQuery.startAt=(function(c){return{before:c.inclusive,values:c.position}})(t.startAt)),t.endAt&&(e.structuredQuery.endAt=(function(c){return{before:!c.inclusive,values:c.position}})(t.endAt)),{Mt:e,parent:s}}function ni(n){return Ys[n]}function ri(n){return Xs[n]}function si(n){return Js[n]}function it(n){return{fieldPath:n.canonicalString()}}function Cr(n){return n instanceof j?(function(e){if(e.op==="=="){if(qn(e.value))return{unaryFilter:{field:it(e.field),op:"IS_NAN"}};if(Mn(e.value))return{unaryFilter:{field:it(e.field),op:"IS_NULL"}}}else if(e.op==="!="){if(qn(e.value))return{unaryFilter:{field:it(e.field),op:"IS_NOT_NAN"}};if(Mn(e.value))return{unaryFilter:{field:it(e.field),op:"IS_NOT_NULL"}}}return{fieldFilter:{field:it(e.field),op:ri(e.op),value:e.value}}})(n):n instanceof yt?(function(e){const r=e.getFilters().map((s=>Cr(s)));return r.length===1?r[0]:{compositeFilter:{op:si(e.op),filters:r}}})(n):E(54877,{filter:n})}function ii(n){const t=[];return n.fields.forEach((e=>t.push(e.canonicalString()))),{fieldPaths:t}}function Ur(n){return n.length>=4&&n.get(0)==="projects"&&n.get(2)==="databases"}function Mr(n){return!!n&&typeof n._toProto=="function"&&n._protoValueType==="ProtoValue"}/**
 * @license
 * Copyright 2020 Google LLC
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
 */function rn(n){return new Qs(n,!0)}/**
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
 */class ai{}class oi extends ai{constructor(t,e,r,s){super(),this.authCredentials=t,this.appCheckCredentials=e,this.connection=r,this.serializer=s,this.qt=!1}Lt(){if(this.qt)throw new h(f.FAILED_PRECONDITION,"The client has already been terminated.")}le(t,e,r,s){return this.Lt(),Promise.all([this.authCredentials.getToken(),this.appCheckCredentials.getToken()]).then((([i,a])=>this.connection.le(t,Ke(e,r),s,i,a))).catch((i=>{throw i.name==="FirebaseError"?(i.code===f.UNAUTHENTICATED&&(this.authCredentials.invalidateToken(),this.appCheckCredentials.invalidateToken()),i):new h(f.UNKNOWN,i.toString())}))}me(t,e,r,s,i){return this.Lt(),Promise.all([this.authCredentials.getToken(),this.appCheckCredentials.getToken()]).then((([a,o])=>this.connection.me(t,Ke(e,r),s,a,o,i))).catch((a=>{throw a.name==="FirebaseError"?(a.code===f.UNAUTHENTICATED&&(this.authCredentials.invalidateToken(),this.appCheckCredentials.invalidateToken()),a):new h(f.UNKNOWN,a.toString())}))}terminate(){this.qt=!0,this.connection.terminate()}}async function Pt(n,t){const e=mt(n),r={writes:t.map((s=>ei(e.serializer,s)))};await e.le("Commit",e.serializer.databaseId,N.emptyPath(),r)}async function qr(n,t){const e=mt(n),r={documents:t.map((o=>Ie(e.serializer,o)))},s=await e.me("BatchGetDocuments",e.serializer.databaseId,N.emptyPath(),r,t.length),i=new Map;s.forEach((o=>{const u=ti(e.serializer,o);i.set(u.key.toString(),u)}));const a=[];return t.forEach((o=>{const u=i.get(o.toString());U(!!u,55234,{key:o}),a.push(u)})),a}async function ui(n,t){const e=mt(n),{Mt:r,parent:s}=Lr(e.serializer,Be(t));return(await e.me("RunQuery",e.serializer.databaseId,s,{structuredQuery:r.structuredQuery})).filter((i=>!!i.document)).map((i=>(function(o,u,c){const l=We(o,u.name),d=Ot(u.updateTime),m=u.createTime?Ot(u.createTime):R.min(),_=new C({mapValue:{fields:u.fields}}),T=J.newFoundDocument(l,d,m,_);return c?T.setHasCommittedMutations():T})(e.serializer,i.document,void 0)))}async function ci(n,t,e){var c;const r=mt(n),{request:s,Ut:i,parent:a}=(function(d,m,_,T){const{Mt:w,parent:b}=Lr(d,m),H={},Y=[];let Qt=0;return _.forEach((Z=>{const ct="aggregate_"+Qt++;H[ct]=Z.alias,Z.aggregateType==="count"?Y.push({alias:ct,count:{}}):Z.aggregateType==="avg"?Y.push({alias:ct,avg:{field:it(Z.fieldPath)}}):Z.aggregateType==="sum"&&Y.push({alias:ct,sum:{field:it(Z.fieldPath)}})})),{request:{structuredAggregationQuery:{aggregations:Y,structuredQuery:w.structuredQuery},parent:w.parent},Ut:H,parent:b}})(r.serializer,(function(d){const m=mt(d);return m.Bt||(m.Bt=Nr(m,d.explicitOrderBy)),m.Bt})(t),e);r.connection.ae||delete s.parent;const o=(await r.me("RunAggregationQuery",r.serializer.databaseId,a,s,1)).filter((l=>!!l.result));U(o.length===1,64727);const u=(c=o[0].result)==null?void 0:c.aggregateFields;return Object.keys(u).reduce(((l,d)=>(l[i[d]]=u[d],l)),{})}/**
 * @license
 * Copyright 2020 Google LLC
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
 */const jr="ComponentProvider",Lt=new Map;function nt(n){if(n._terminated)throw new h(f.FAILED_PRECONDITION,"The client has already been terminated.");if(!Lt.has(n)){dt(jr,"Initializing Datastore");const t=(function(i){return new ks(i)})((function(i,a,o,u,c){return new As(i,a,o,c.host,c.ssl,c.experimentalForceLongPolling,c.experimentalAutoDetectLongPolling,ar(c.experimentalLongPollingOptions),c.useFetchStreams,c.isUsingEmulator,u,c._customHeaders,c.grpcFlowControlWindow)})(n._databaseId,n.app.options.appId||"",n._persistenceKey,n.app.options.apiKey,n._freezeSettings())),e=rn(n._databaseId),r=(function(i,a,o,u){return new oi(i,a,o,u)})(n._authCredentials,n._appCheckCredentials,t,e);Lt.set(n,r)}return Lt.get(n)}const li=1048576,$r="firestore.googleapis.com",Kn=!0;class Wn{constructor(t){if(t.host===void 0){if(t.ssl!==void 0)throw new h(f.INVALID_ARGUMENT,"Can't provide ssl option if host option is not set");this.host=$r,this.ssl=Kn}else this.host=t.host,this.ssl=t.ssl??Kn;if(this.isUsingEmulator=t.emulatorOptions!==void 0,this.credentials=t.credentials,this.ignoreUndefinedProperties=!!t.ignoreUndefinedProperties,this.localCache=t.localCache,t._customHeaders&&(this._customHeaders={...t._customHeaders}),t.cacheSizeBytes===void 0)this.cacheSizeBytes=41943040;else{if(t.cacheSizeBytes!==-1&&t.cacheSizeBytes<li)throw new h(f.INVALID_ARGUMENT,"cacheSizeBytes must be at least 1048576");this.cacheSizeBytes=t.cacheSizeBytes}if((function(r,s,i,a){if(s===!0&&a===!0)throw new h(f.INVALID_ARGUMENT,`${r} and ${i} cannot be used together.`)})("experimentalForceLongPolling",t.experimentalForceLongPolling,"experimentalAutoDetectLongPolling",t.experimentalAutoDetectLongPolling),this.experimentalForceLongPolling=!!t.experimentalForceLongPolling,this.experimentalForceLongPolling?this.experimentalAutoDetectLongPolling=!1:t.experimentalAutoDetectLongPolling===void 0?this.experimentalAutoDetectLongPolling=!0:this.experimentalAutoDetectLongPolling=!!t.experimentalAutoDetectLongPolling,this.experimentalLongPollingOptions=ar(t.experimentalLongPollingOptions??{}),(function(r){if(r.timeoutSeconds!==void 0){if(isNaN(r.timeoutSeconds))throw new h(f.INVALID_ARGUMENT,`invalid long polling timeout: ${r.timeoutSeconds} (must not be NaN)`);if(r.timeoutSeconds<5)throw new h(f.INVALID_ARGUMENT,`invalid long polling timeout: ${r.timeoutSeconds} (minimum allowed value is 5)`);if(r.timeoutSeconds>30)throw new h(f.INVALID_ARGUMENT,`invalid long polling timeout: ${r.timeoutSeconds} (maximum allowed value is 30)`)}})(this.experimentalLongPollingOptions),this.useFetchStreams=!!t.useFetchStreams,t.grpcFlowControlWindow!==void 0){if(typeof t.grpcFlowControlWindow!="number"||t.grpcFlowControlWindow<=0||t.grpcFlowControlWindow>2147483647||!Number.isInteger(t.grpcFlowControlWindow))throw new h(f.INVALID_ARGUMENT,"grpcFlowControlWindow must be a positive integer and cannot exceed 2147483647");this.grpcFlowControlWindow=t.grpcFlowControlWindow}}isEqual(t){return this.host===t.host&&this.ssl===t.ssl&&this.credentials===t.credentials&&this.cacheSizeBytes===t.cacheSizeBytes&&this.experimentalForceLongPolling===t.experimentalForceLongPolling&&this.experimentalAutoDetectLongPolling===t.experimentalAutoDetectLongPolling&&(function(r,s){return r.timeoutSeconds===s.timeoutSeconds})(this.experimentalLongPollingOptions,t.experimentalLongPollingOptions)&&this.ignoreUndefinedProperties===t.ignoreUndefinedProperties&&this.useFetchStreams===t.useFetchStreams&&this.grpcFlowControlWindow===t.grpcFlowControlWindow&&(function(r,s){if(r===s)return!0;if(!r||!s)return!1;const i=Object.keys(r),a=Object.keys(s);if(i.length!==a.length)return!1;for(const o of i)if(r[o]!==s[o])return!1;return!0})(this._customHeaders,t._customHeaders)}}class rt{constructor(t,e,r,s){this._authCredentials=t,this._appCheckCredentials=e,this._databaseId=r,this._app=s,this.type="firestore-lite",this._persistenceKey="(lite)",this._settings=new Wn({}),this._settingsFrozen=!1,this._emulatorOptions={},this._terminateTask="notTerminated"}get app(){if(!this._app)throw new h(f.FAILED_PRECONDITION,"Firestore was not initialized using the Firebase SDK. 'app' is not available");return this._app}get _initialized(){return this._settingsFrozen}get _terminated(){return this._terminateTask!=="notTerminated"}_setSettings(t){if(this._settingsFrozen)throw new h(f.FAILED_PRECONDITION,"Firestore has already been started and its settings can no longer be changed. You can only modify settings before calling any other methods on a Firestore object.");this._settings=new Wn(t),this._emulatorOptions=t.emulatorOptions||{},t.credentials!==void 0&&(this._authCredentials=(function(r){if(!r)return new _s;switch(r.type){case"firstParty":return new Ts(r.sessionIndex||"0",r.iamToken||null,r.authTokenFactory||null);case"provider":return r.client;default:throw new h(f.INVALID_ARGUMENT,"makeAuthCredentialsProvider failed due to invalid credential type")}})(t.credentials))}_getSettings(){return this._settings}_getEmulatorOptions(){return this._emulatorOptions}_freezeSettings(){return this._settingsFrozen=!0,this._settings}_delete(){return this._terminateTask==="notTerminated"&&(this._terminateTask=this._terminate()),this._terminateTask}async _restart(){this._terminateTask==="notTerminated"?await this._terminate():this._terminateTask="notTerminated"}toJSON(){return{app:this._app,databaseId:this._databaseId,settings:this._settings}}_terminate(){return(function(e){const r=Lt.get(e);r&&(dt(jr,"Removing Datastore"),Lt.delete(e),r.terminate())})(this),Promise.resolve()}}function Fi(n,t,e){e||(e=ae);const r=Zn(n,"firestore/lite");if(r.isInitialized(e))throw new h(f.FAILED_PRECONDITION,"Firestore can only be initialized once per app.");return r.initialize({options:t,instanceIdentifier:e})}function ki(n,t){const e=typeof n=="object"?n:is(),r=typeof n=="string"?n:t||"(default)",s=Zn(e,"firestore/lite").getImmediate({identifier:r});if(!s._initialized){const i=ds("firestore");i&&fi(s,...i)}return s}function fi(n,t,e,r={}){var c;n=K(n,rt);const s=tr(t),i=n._getSettings(),a={...i,emulatorOptions:n._getEmulatorOptions()},o=`${t}:${e}`;s&&fs(`https://${o}`),i.host!==$r&&i.host!==o&&er("Host has been set in both settings() and connectFirestoreEmulator(), emulator host will be used.");const u={...i,host:o,ssl:s,emulatorOptions:r};if(!we(u,a)&&(n._setSettings(u),r.mockUserToken)){let l,d;if(typeof r.mockUserToken=="string")l=r.mockUserToken,d=L.MOCK_USER;else{l=hs(r.mockUserToken,(c=n._app)==null?void 0:c.options.projectId);const m=r.mockUserToken.sub||r.mockUserToken.user_id;if(!m)throw new h(f.INVALID_ARGUMENT,"mockUserToken must contain 'sub' or 'user_id' field!");d=new L(m)}n._authCredentials=new ys(new rr(l,d))}}function Oi(n){return n=K(n,rt),as(n.app,"firestore/lite"),n._delete()}/**
 * @license
 * Copyright 2020 Google LLC
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
 */class ${constructor(t,e,r){this.converter=e,this._query=r,this.type="query",this.firestore=t}withConverter(t){return new $(this.firestore,t,this._query)}}class A{constructor(t,e,r){this.converter=e,this._key=r,this.type="document",this.firestore=t}get _path(){return this._key.path}get id(){return this._key.path.lastSegment()}get path(){return this._key.path.canonicalString()}get parent(){return new W(this.firestore,this.converter,this._key.path.popLast())}withConverter(t){return new A(this.firestore,t,this._key)}toJSON(){return{type:A._jsonSchemaVersion,referencePath:this._key.toString()}}static fromJSON(t,e,r){if(Wt(e,A._jsonSchema))return new A(t,r||null,new x(N.fromString(e.referencePath)))}}A._jsonSchemaVersion="firestore/documentReference/1.0",A._jsonSchema={type:q("string",A._jsonSchemaVersion),referencePath:q("string")};class W extends ${constructor(t,e,r){super(t,e,(function(i){return new Tt(i)})(r)),this._path=r,this.type="collection"}get id(){return this._query.path.lastSegment()}get path(){return this._query.path.canonicalString()}get parent(){const t=this._path.popLast();return t.isEmpty()?null:new A(this.firestore,null,new x(t))}withConverter(t){return new W(this.firestore,t,this._path)}}function Li(n,t,...e){if(n=P(n),Qe("collection","path",t),n instanceof rt){const r=N.fromString(t,...e);return Rn(r),new W(n,null,r)}{if(!(n instanceof A||n instanceof W))throw new h(f.INVALID_ARGUMENT,"Expected first argument to collection() to be a CollectionReference, a DocumentReference or FirebaseFirestore");const r=n._path.child(N.fromString(t,...e));return Rn(r),new W(n.firestore,null,r)}}function Ci(n,t){if(n=K(n,rt),Qe("collectionGroup","collection id",t),t.indexOf("/")>=0)throw new h(f.INVALID_ARGUMENT,`Invalid collection ID '${t}' passed to function collectionGroup(). Collection IDs must not contain '/'.`);return new $(n,null,(function(r){return new Tt(N.emptyPath(),r)})(t))}function hi(n,t,...e){if(n=P(n),arguments.length===1&&(t=Ns.newId()),Qe("doc","path",t),n instanceof rt){const r=N.fromString(t,...e);return xn(r),new A(n,null,new x(r))}{if(!(n instanceof A||n instanceof W))throw new h(f.INVALID_ARGUMENT,"Expected first argument to doc() to be a CollectionReference, a DocumentReference or FirebaseFirestore");const r=n._path.child(N.fromString(t,...e));return xn(r),new A(n.firestore,n instanceof W?n.converter:null,new x(r))}}function Ui(n,t){return n=P(n),t=P(t),(n instanceof A||n instanceof W)&&(t instanceof A||t instanceof W)&&n.firestore===t.firestore&&n.path===t.path&&n.converter===t.converter}function Gr(n,t){return n=P(n),t=P(t),n instanceof $&&t instanceof $&&n.firestore===t.firestore&&Hs(n._query,t._query)&&n.converter===t.converter}/**
 * @license
 * Copyright 2020 Google LLC
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
 */class M{constructor(t,e=0){if(this.subtype=e,!Number.isInteger(e)||e<0||e>255)throw new h(f.INVALID_ARGUMENT,"The subtype for Bytes must be a value in the inclusive [0, 255] range.");this._byteString=t}static fromBase64String(t,e=0){try{return new M(z.fromBase64String(t),e)}catch(r){throw new h(f.INVALID_ARGUMENT,"Failed to construct data from Base64 string: "+r)}}static fromUint8Array(t,e=0){return new M(z.fromUint8Array(t),e)}toBase64(){return this._byteString.toBase64()}toUint8Array(){return this._byteString.toUint8Array()}get data(){return this.toUint8Array()}toString(){return"Bytes(base64: "+this.toBase64()+", subtype: "+this.subtype+")"}isEqual(t){return this.subtype===t.subtype&&this._byteString.isEqual(t._byteString)}toJSON(){const t={type:M._jsonSchemaVersion,bytes:this.toBase64()};return this.subtype!==0&&(t.subtype=this.subtype),t}static fromJSON(t){if(Wt(t,M._jsonSchema)){const e=t.subtype??0;return M.fromBase64String(t.bytes,e)}}}M._jsonSchemaVersion="firestore/bytes/1.0",M._jsonSchema={type:q("string",M._jsonSchemaVersion),bytes:q("string"),subtype:{...q("number"),optional:!0}};/**
 * @license
 * Copyright 2020 Google LLC
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
 */class St{constructor(...t){for(let e=0;e<t.length;++e)if(t[e].length===0)throw new h(f.INVALID_ARGUMENT,"Invalid field name at argument $(i + 1). Field names must not be empty.");this._internalPath=new ot(t)}isEqual(t){return this._internalPath.isEqual(t._internalPath)}}function Mi(){return new St(je)}/**
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
 */class sn{constructor(t){this.value=t}isEqual(t){return this.value===t.value}}/**
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
 */class an{constructor(t,e){if(this.seconds=t,this.increment=e,!Number.isInteger(t)||t<0||t>4294967295)throw new Error("BsonTimestamp 'seconds' must be in the range of a 32-bit unsigned integer (0-4294967295).");if(!Number.isInteger(e)||e<0||e>4294967295)throw new Error("BsonTimestamp 'increment' must be in the range of a 32-bit unsigned integer (0-4294967295).")}isEqual(t){return this.seconds===t.seconds&&this.increment===t.increment}}/**
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
 */class on{constructor(t){this.stringValue=t,this.value=p.fromString(t)}isEqual(t){return!(!this.value.ot()||!t.value.ot())||this.value.compareTo(t.value)===0}toJSON(){return{$t:{stringValue:this.stringValue}}}}/**
 * @license
 * Copyright 2020 Google LLC
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
 */class st{constructor(t){this._methodName=t}}/**
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
 */class Q{constructor(t,e){if(!isFinite(t)||t<-90||t>90)throw new h(f.INVALID_ARGUMENT,"Latitude must be a number between -90 and 90, but was: "+t);if(!isFinite(e)||e<-180||e>180)throw new h(f.INVALID_ARGUMENT,"Longitude must be a number between -180 and 180, but was: "+e);this._lat=t,this._long=e}get latitude(){return this._lat}get longitude(){return this._long}isEqual(t){return this._lat===t._lat&&this._long===t._long}_compareTo(t){return v(this._lat,t._lat)||v(this._long,t._long)}toJSON(){return{latitude:this._lat,longitude:this._long,type:Q._jsonSchemaVersion}}static fromJSON(t){if(Wt(t,Q._jsonSchema))return new Q(t.latitude,t.longitude)}}Q._jsonSchemaVersion="firestore/geoPoint/1.0",Q._jsonSchema={type:q("string",Q._jsonSchemaVersion),latitude:q("number"),longitude:q("number")};/**
 * @license
 * Copyright 2020 Google LLC
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
 */class un{constructor(t){this.value=t}isEqual(t){return this.value===t.value}}/**
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
 */class tt{constructor(){this.type="MaxKey"}static instance(){return tt.MAX_KEY_VALUE_INSTANCE||(tt.MAX_KEY_VALUE_INSTANCE=new tt),tt.MAX_KEY_VALUE_INSTANCE}}tt.MAX_KEY_VALUE_INSTANCE=null;/**
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
 */class et{constructor(){this.type="MinKey"}static instance(){return et.MIN_KEY_VALUE_INSTANCE||(et.MIN_KEY_VALUE_INSTANCE=new et),et.MIN_KEY_VALUE_INSTANCE}}et.MIN_KEY_VALUE_INSTANCE=null;/**
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
 */class cn{constructor(t,e){this.pattern=t,this.options=e}isEqual(t){return this.pattern===t.pattern&&this.options===t.options}}/**
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
 *//**
 * @license
 * Copyright 2024 Google LLC
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
 */class B{constructor(t){this._values=(t||[]).map((e=>e))}toArray(){return this._values.map((t=>t))}isEqual(t){return(function(r,s){if(r.length!==s.length)return!1;for(let i=0;i<r.length;++i)if(r[i]!==s[i])return!1;return!0})(this._values,t._values)}toJSON(){return{type:B._jsonSchemaVersion,vectorValues:this._values}}static fromJSON(t){if(Wt(t,B._jsonSchema)){if(Array.isArray(t.vectorValues)&&t.vectorValues.every((e=>typeof e=="number")))return new B(t.vectorValues);throw new h(f.INVALID_ARGUMENT,"Expected 'vectorValues' field to be a number array")}}}B._jsonSchemaVersion="firestore/vectorValue/1.0",B._jsonSchema={type:q("string",B._jsonSchemaVersion),vectorValues:q("object")};/**
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
 */const di=/^__.*__$/;class mi{constructor(t,e,r){this.data=t,this.fieldMask=e,this.fieldTransforms=r}toMutation(t,e){return this.fieldMask!==null?new en(t,this.data,this.fieldMask,e,this.fieldTransforms):new kr(t,this.data,e,this.fieldTransforms)}}class Br{constructor(t,e,r){this.data=t,this.fieldMask=e,this.fieldTransforms=r}toMutation(t,e){return new en(t,this.data,this.fieldMask,e,this.fieldTransforms)}}function zr(n){switch(n){case 0:case 2:case 1:return!0;case 3:case 4:return!1;default:throw E(40011,{dataSource:n})}}class Pe{constructor(t,e,r,s,i,a){this.settings=t,this.databaseId=e,this.serializer=r,this.ignoreUndefinedProperties=s,i===void 0&&this.validatePath(),this.fieldTransforms=i||[],this.fieldMask=a||[]}get path(){return this.settings.path}get dataSource(){return this.settings.dataSource}contextWith(t){return new Pe({...this.settings,...t},this.databaseId,this.serializer,this.ignoreUndefinedProperties,this.fieldTransforms,this.fieldMask)}childContextForField(t){var s;const e=(s=this.path)==null?void 0:s.child(t),r=this.contextWith({path:e,arrayElement:!1});return r.validatePathSegment(t),r}childContextForFieldPath(t){var s;const e=(s=this.path)==null?void 0:s.child(t),r=this.contextWith({path:e,arrayElement:!1});return r.validatePath(),r}childContextForArray(t){return this.contextWith({path:void 0,arrayElement:!0})}createError(t){return Te(t,this.settings.methodName,this.settings.hasConverter||!1,this.path,this.settings.targetDoc)}contains(t){return this.fieldMask.find((e=>t.isPrefixOf(e)))!==void 0||this.fieldTransforms.find((e=>t.isPrefixOf(e.field)))!==void 0}validatePath(){if(this.path)for(let t=0;t<this.path.length;t++)this.validatePathSegment(this.path.get(t))}validatePathSegment(t){if(t.length===0)throw this.createError("Document fields must not be empty");if(zr(this.dataSource)&&di.test(t))throw this.createError('Document fields cannot begin and end with "__"')}}class pi{constructor(t,e,r){this.databaseId=t,this.ignoreUndefinedProperties=e,this.serializer=r||rn(t)}createContext(t,e,r,s=!1){return new Pe({dataSource:t,methodName:e,targetDoc:r,path:ot.emptyPath(),arrayElement:!1,hasConverter:s},this.databaseId,this.serializer,this.ignoreUndefinedProperties)}}function wt(n){const t=n._freezeSettings(),e=rn(n._databaseId);return new pi(n._databaseId,!!t.ignoreUndefinedProperties,e)}function Se(n,t,e,r,s,i={}){const a=n.createContext(i.merge||i.mergeFields?2:0,t,e,s);yn("Data must be an object, but it was:",a,r);const o=Hr(r,a);let u,c;if(i.merge)u=new Et(a.fieldMask),c=a.fieldTransforms;else if(i.mergeFields){const l=[];for(const d of i.mergeFields){const m=ut(t,d,e);if(!a.contains(m))throw new h(f.INVALID_ARGUMENT,`Field '${m}' is specified in your field mask but missing from your input data.`);Qr(l,m)||l.push(m)}u=new Et(l),c=a.fieldTransforms.filter((d=>u.covers(d.field)))}else u=null,c=a.fieldTransforms;return new mi(new C(o),u,c)}class Yt extends st{_toFieldTransform(t){if(t.dataSource!==2)throw t.dataSource===1?t.createError(`${this._methodName}() can only appear at the top level of your update data`):t.createError(`${this._methodName}() cannot be used with set() unless you pass {merge:true}`);return t.fieldMask.push(t.path),null}isEqual(t){return t instanceof Yt}}function Kr(n,t,e){return new Pe({dataSource:3,targetDoc:t.settings.targetDoc,methodName:n._methodName,arrayElement:e},t.databaseId,t.serializer,t.ignoreUndefinedProperties)}class ln extends st{_toFieldTransform(t){return new Rt(t.path,new xr)}isEqual(t){return t instanceof ln}}class fn extends st{constructor(t,e){super(t),this.kt=e}_toFieldTransform(t){const e=Kr(this,t,!0),r=this.kt.map((i=>At(i,e))),s=new Rr(r);return new Rt(t.path,s)}isEqual(t){return t instanceof fn&&we(this.kt,t.kt)}}class hn extends st{constructor(t,e){super(t),this.kt=e}_toFieldTransform(t){const e=Kr(this,t,!0),r=this.kt.map((i=>At(i,e))),s=new Pr(r);return new Rt(t.path,s)}isEqual(t){return t instanceof hn&&we(this.kt,t.kt)}}class dn extends st{constructor(t,e){super(t),this.jt=e}_toFieldTransform(t){const e=new Sr(t.serializer,Ne(t.serializer,this.jt));return new Rt(t.path,e)}isEqual(t){return t instanceof dn&&(this.jt===t.jt||Number.isNaN(this.jt)&&Number.isNaN(t.jt))}}class mn extends st{constructor(t,e){super(t),this.jt=e}_toFieldTransform(t){const e=new Dr(t.serializer,Ne(t.serializer,this.jt));return new Rt(t.path,e)}isEqual(t){return t instanceof mn&&(this.jt===t.jt||Number.isNaN(this.jt)&&Number.isNaN(t.jt))}}class pn extends st{constructor(t,e){super(t),this.jt=e}_toFieldTransform(t){const e=new Fr(t.serializer,Ne(t.serializer,this.jt));return new Rt(t.path,e)}isEqual(t){return t instanceof pn&&(this.jt===t.jt||Number.isNaN(this.jt)&&Number.isNaN(t.jt))}}function gn(n,t,e,r){const s=n.createContext(1,t,e);yn("Data must be an object, but it was:",s,r);const i=[],a=C.empty();Kt(r,((u,c)=>{const l=Jr(t,u,e);c=P(c);const d=s.childContextForFieldPath(l);if(c instanceof Yt)i.push(l);else{const m=At(c,d);m!=null&&(i.push(l),a.set(l,m))}}));const o=new Et(i);return new Br(a,o,s.fieldTransforms)}function _n(n,t,e,r,s,i){const a=n.createContext(1,t,e),o=[ut(t,r,e)],u=[s];if(i.length%2!=0)throw new h(f.INVALID_ARGUMENT,`Function ${t}() needs to be called with an even number of arguments that alternate between field names and values.`);for(let m=0;m<i.length;m+=2)o.push(ut(t,i[m])),u.push(i[m+1]);const c=[],l=C.empty();for(let m=o.length-1;m>=0;--m)if(!Qr(c,o[m])){const _=o[m];let T=u[m];T=P(T);const w=a.childContextForFieldPath(_);if(T instanceof Yt)c.push(_);else{const b=At(T,w);b!=null&&(c.push(_),l.set(_,b))}}const d=new Et(c);return new Br(l,d,a.fieldTransforms)}function Wr(n,t,e,r=!1){return At(e,n.createContext(r?4:3,t))}function At(n,t,e){if(Xr(n=P(n)))return yn("Unsupported field value:",t,n),Hr(n,t);if(n instanceof st)return(function(s,i){if(!zr(i.dataSource))throw i.createError(`${s._methodName}() can only be used with update() and set()`);if(!i.path)throw i.createError(`${s._methodName}() is not currently supported inside arrays`);const a=s._toFieldTransform(i);a&&i.fieldTransforms.push(a)})(n,t),null;if(n===void 0&&t.ignoreUndefinedProperties)return null;if(t.path&&t.fieldMask.push(t.path),n instanceof Array){if(t.settings.arrayElement&&t.dataSource!==4)throw t.createError("Nested arrays are not supported");return(function(s,i){const a=[];let o=0;for(const u of s){let c=At(u,i.childContextForArray(o));c==null&&(c={nullValue:"NULL_VALUE"}),a.push(c),o++}return{arrayValue:{values:a}}})(n,t)}return(function(s,i,a){if((s=P(s))===null)return{nullValue:"NULL_VALUE"};if(typeof s=="number")return Ne(i.serializer,s);if(typeof s=="boolean")return{booleanValue:s};if(typeof s=="string")return{stringValue:s};if(s instanceof Date){const o=V.fromDate(s);return{timestampValue:ie(i.serializer,o)}}if(s instanceof V){const o=new V(s.seconds,1e3*Math.floor(s.nanoseconds/1e3));return{timestampValue:ie(i.serializer,o)}}if(Yr(s)){const o=V.fromInstant(s),u=new V(o.seconds,1e3*Math.floor(o.nanoseconds/1e3));return{timestampValue:ie(i.serializer,u)}}if(s instanceof Q)return{geoPointValue:{latitude:s.latitude,longitude:s.longitude}};if(s instanceof M)return s.subtype===0?{bytesValue:Bn(i.serializer,s._byteString)}:(function(u,c){const l=c.toUint8Array(),d=new Uint8Array(l.length+1);return d[0]=c.subtype,d.set(l,1),{mapValue:{fields:{[Ve]:{bytesValue:Bn(u,z.fromUint8Array(d))}}}}})(i.serializer,s);if(s instanceof A){const o=i.databaseId,u=s.firestore._databaseId;if(!u.isEqual(o))throw i.createError(`Document reference is for database ${u.projectId}/${u.database} but should be for database ${o.projectId}/${o.database}`);return{referenceValue:nn(s.firestore._databaseId||i.databaseId,s._key.path)}}if(s instanceof B)return(function(u,c){const l=u instanceof B?u.toArray():u;return{mapValue:{fields:{[lr]:{stringValue:fr},[ce]:{arrayValue:{values:l.map((m=>{if(typeof m!="number")throw c.createError("VectorValues must only contain numeric values.");return vr(c.serializer,m)}))}}}}}})(s,i);if(s instanceof cn)return(function(u){return{mapValue:{fields:{[at]:{mapValue:{fields:{[le]:{stringValue:u.pattern},[fe]:{stringValue:u.options}}}}}}}})(s);if(s instanceof sn)return(function(u){return{mapValue:{fields:{[jt]:{stringValue:u.value}}}}})(s);if(s instanceof un)return(function(u){return{mapValue:{fields:{[Ht]:se(u.value)}}}})(s);if(s instanceof on)return(function(u){return{mapValue:{fields:{[Nt]:{stringValue:u.stringValue}}}}})(s);if(s instanceof an)return(function(u){return{mapValue:{fields:{[lt]:{mapValue:{fields:{[he]:se(u.seconds),[de]:se(u.increment)}}}}}}})(s);if(s instanceof et)return(function(){return{mapValue:{fields:{[hr]:{nullValue:"NULL_VALUE"}}}}})();if(s instanceof tt)return(function(){return{mapValue:{fields:{[Ze]:{nullValue:"NULL_VALUE"}}}}})();if(Mr(s))return s._toProto(i.serializer);throw i.createError(`Unsupported field value: ${be(s)}`)})(n,t)}function Hr(n,t){const e={};return(function(s){for(const i in s)if(Object.prototype.hasOwnProperty.call(s,i))return!1;return!0})(n)?t.path&&t.path.length>0&&t.fieldMask.push(t.path):Kt(n,((r,s)=>{const i=At(s,t.childContextForField(r));i!=null&&(e[r]=i)})),{mapValue:{fields:e}}}function Yr(n){if(typeof n!="object"||n===null)return!1;if(typeof Temporal<"u"&&typeof Temporal.Instant=="function"&&n instanceof Temporal.Instant)return!0;const t=n;return t[Symbol.toStringTag]==="Temporal.Instant"&&typeof t.ht=="bigint"}function Xr(n){return!(typeof n!="object"||n===null||n instanceof Array||n instanceof Date||n instanceof V||n instanceof Q||n instanceof M||n instanceof A||n instanceof st||n instanceof B||n instanceof et||n instanceof tt||n instanceof un||n instanceof on||n instanceof cn||n instanceof sn||n instanceof an||Yr(n)||Mr(n))}function yn(n,t,e){if(!Xr(e)||!sr(e)){const r=be(e);throw r==="an object"?t.createError(n+" a custom object"):t.createError(n+" "+r)}}function ut(n,t,e){if((t=P(t))instanceof St)return t._internalPath;if(typeof t=="string")return Jr(n,t);throw Te("Field path arguments must be of type string or ",n,!1,void 0,e)}const gi=new RegExp("[~\\*/\\[\\]]");function Jr(n,t,e){if(t.search(gi)>=0)throw Te(`Invalid field path (${t}). Paths must not contain '~', '*', '/', '[', or ']'`,n,!1,void 0,e);try{return new St(...t.split("."))._internalPath}catch{throw Te(`Invalid field path (${t}). Paths must not be empty, begin with '.', end with '.', or contain '..'`,n,!1,void 0,e)}}function Te(n,t,e,r,s){const i=r&&!r.isEmpty(),a=s!==void 0;let o=`Function ${t}() called with invalid data`;e&&(o+=" (via `toFirestore()`)"),o+=". ";let u="";return(i||a)&&(u+=" (found",i&&(u+=` in field ${r}`),a&&(u+=` in document ${s}`),u+=")"),new h(f.INVALID_ARGUMENT,o+n+u)}function Qr(n,t){return n.some((e=>e.isEqual(t)))}/**
 * @license
 * Copyright 2020 Google LLC
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
 */class It{constructor(t,e,r,s,i){this._firestore=t,this._userDataWriter=e,this._key=r,this._document=s,this._converter=i}get id(){return this._key.path.lastSegment()}get ref(){return new A(this._firestore,this._converter,this._key)}exists(){return this._document!==null}data(){if(this._document){if(this._converter){const t=new Zr(this._firestore,this._userDataWriter,this._key,this._document,null);return this._converter.fromFirestore(t)}return this._userDataWriter.convertValue(this._document.data.value)}}_fieldsProto(){var t;return((t=this._document)==null?void 0:t.data.clone().value.mapValue.fields)??void 0}get(t){if(this._document){const e=this._document.data.field(ut("DocumentSnapshot.get",t));if(e!==null)return this._userDataWriter.convertValue(e)}}}class Zr extends It{data(){return super.data()}}class He{constructor(t,e){this._docs=e,this.query=t}get docs(){return[...this._docs]}get size(){return this.docs.length}get empty(){return this.docs.length===0}forEach(t,e){this._docs.forEach(t,e)}}function _i(n,t){return n=P(n),t=P(t),n instanceof It&&t instanceof It?n._firestore===t._firestore&&n._key.isEqual(t._key)&&(n._document===null?t._document===null:n._document.isEqual(t._document))&&n._converter===t._converter:n instanceof He&&t instanceof He&&Gr(n.query,t.query)&&Je(n.docs,t.docs,_i)}/**
 * @license
 * Copyright 2020 Google LLC
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
 */class En{}class Xt extends En{}function qi(n,t,...e){let r=[];t instanceof En&&r.push(t),r=r.concat(e),(function(i){const a=i.filter((u=>u instanceof Dt)).length,o=i.filter((u=>u instanceof Jt)).length;if(a>1||a>0&&o>0)throw new h(f.INVALID_ARGUMENT,"InvalidQuery. When using composite filters, you cannot use more than one filter at the top level. Consider nesting the multiple filters within an `and(...)` statement. For example: change `query(query, where(...), or(...))` to `query(query, and(where(...), or(...)))`.")})(r);for(const s of r)n=s._apply(n);return n}class Jt extends Xt{constructor(t,e,r){super(),this._field=t,this._op=e,this._value=r,this.type="where"}static _create(t,e,r){return new Jt(t,e,r)}_apply(t){const e=this._parse(t);return es(t._query,e),new $(t.firestore,t.converter,ze(t._query,e))}_parse(t){const e=wt(t.firestore);return(function(i,a,o,u,c,l,d){let m;if((function(w,b){if(typeof w=="number"&&isNaN(w)&&b!=="=="&&b!=="!="&&b!=="array-contains")throw new Error("Invalid query. You can only perform '==' and '!=' comparisons on NaN.");if(w===null&&b!=="=="&&b!=="!="&&b!=="array-contains")throw new Error("Invalid query. You can only perform '==' and '!=' comparisons on Null.")})(d,l),c.isKeyField()){if(l==="array-contains"||l==="array-contains-any")throw new h(f.INVALID_ARGUMENT,`Invalid Query. You can't perform '${l}' queries on documentId().`);if(l==="in"||l==="not-in"){Yn(d,l);const T=[];for(const w of d)T.push(Hn(u,i,w));m={arrayValue:{values:T}}}else m=Hn(u,i,d)}else l!=="in"&&l!=="not-in"&&l!=="array-contains-any"||Yn(d,l),m=Wr(o,a,d,l==="in"||l==="not-in");return j.create(c,l,m)})(t._query,"where",e,t.firestore._databaseId,this._field,this._op,this._value)}}function ji(n,t,e){const r=t,s=ut("where",n);return Jt._create(s,r,e)}class Dt extends En{constructor(t,e){super(),this.type=t,this._queryConstraints=e}static _create(t,e){return new Dt(t,e)}_parse(t){const e=this._queryConstraints.map((r=>r._parse(t))).filter((r=>r.getFilters().length>0));return e.length===1?e[0]:yt.create(e,this._getOperator())}_apply(t){const e=this._parse(t);return e.getFilters().length===0?t:((function(s,i){let a=s;const o=i.getFlattenedFilters();for(const u of o)es(a,u),a=ze(a,u)})(t._query,e),new $(t.firestore,t.converter,ze(t._query,e)))}_getQueryConstraints(){return this._queryConstraints}_getOperator(){return this.type==="and"?"and":"or"}}function $i(...n){return n.forEach((t=>ns("or",t))),Dt._create("or",n)}function Gi(...n){return n.forEach((t=>ns("and",t))),Dt._create("and",n)}class In extends Xt{constructor(t,e){super(),this._field=t,this._direction=e,this.type="orderBy"}static _create(t,e){return new In(t,e)}_apply(t){const e=(function(s,i,a){if(s.startAt!==null)throw new h(f.INVALID_ARGUMENT,"Invalid query. You must not call startAt() or startAfter() before calling orderBy().");if(s.endAt!==null)throw new h(f.INVALID_ARGUMENT,"Invalid query. You must not call endAt() or endBefore() before calling orderBy().");return new ye(i,a)})(t._query,this._field,this._direction);return new $(t.firestore,t.converter,(function(s,i){const a=s.explicitOrderBy.concat([i]);return new Tt(s.path,s.collectionGroup,a,s.filters.slice(),s.limit,s.limitType,s.startAt,s.endAt)})(t._query,e))}}function Bi(n,t="asc"){const e=t,r=ut("orderBy",n);return In._create(r,e)}class De extends Xt{constructor(t,e,r){super(),this.type=t,this._limit=e,this._limitType=r}static _create(t,e,r){return new De(t,e,r)}_apply(t){return new $(t.firestore,t.converter,(function(r,s,i){return new Tt(r.path,r.collectionGroup,r.explicitOrderBy.slice(),r.filters.slice(),s,i,r.startAt,r.endAt)})(t._query,this._limit,this._limitType))}}function zi(n){return ir("limit",n),De._create("limit",n,"F")}function Ki(n){return ir("limitToLast",n),De._create("limitToLast",n,"L")}class Fe extends Xt{constructor(t,e,r){super(),this.type=t,this._docOrFields=e,this._inclusive=r}static _create(t,e,r){return new Fe(t,e,r)}_apply(t){const e=ts(t,this.type,this._docOrFields,this._inclusive);return new $(t.firestore,t.converter,(function(s,i){return new Tt(s.path,s.collectionGroup,s.explicitOrderBy.slice(),s.filters.slice(),s.limit,s.limitType,i,s.endAt)})(t._query,e))}}function Wi(...n){return Fe._create("startAt",n,!0)}function Hi(...n){return Fe._create("startAfter",n,!1)}class ke extends Xt{constructor(t,e,r){super(),this.type=t,this._docOrFields=e,this._inclusive=r}static _create(t,e,r){return new ke(t,e,r)}_apply(t){const e=ts(t,this.type,this._docOrFields,this._inclusive);return new $(t.firestore,t.converter,(function(s,i){return new Tt(s.path,s.collectionGroup,s.explicitOrderBy.slice(),s.filters.slice(),s.limit,s.limitType,s.startAt,i)})(t._query,e))}}function Yi(...n){return ke._create("endBefore",n,!1)}function Xi(...n){return ke._create("endAt",n,!0)}function ts(n,t,e,r){if(e[0]=P(e[0]),e[0]instanceof It)return(function(i,a,o,u,c){if(!u)throw new h(f.NOT_FOUND,`Can't use a DocumentSnapshot that doesn't exist for ${o}().`);const l=[];for(const d of Vr(i))if(d.field.isKeyField())l.push(pe(a,u.key));else{const m=u.data.field(d.field);if(ur(m))throw new h(f.INVALID_ARGUMENT,'Invalid query. You are trying to start or end a query using a document for which the field "'+d.field+'" is an uncommitted server timestamp. (Since the value of this field is unknown, you cannot start/end a query with it.)');if(m===null){const _=d.field.canonicalString();throw new h(f.INVALID_ARGUMENT,`Invalid query. You are trying to start or end a query using a document for which the field '${_}' (used as the orderBy) does not exist.`)}l.push(m)}return new _e(l,c)})(n._query,n.firestore._databaseId,t,e[0]._document,r);{const s=wt(n.firestore);return(function(a,o,u,c,l,d){const m=a.explicitOrderBy;if(l.length>m.length)throw new h(f.INVALID_ARGUMENT,`Too many arguments provided to ${c}(). The number of arguments must be less than or equal to the number of orderBy() clauses`);const _=[];for(let T=0;T<l.length;T++){const w=l[T];if(m[T].field.isKeyField()){if(typeof w!="string")throw new h(f.INVALID_ARGUMENT,`Invalid query. Expected a string for document ID in ${c}(), but got a ${typeof w}`);if(!br(a)&&w.indexOf("/")!==-1)throw new h(f.INVALID_ARGUMENT,`Invalid query. When querying a collection and ordering by documentId(), the value passed to ${c}() must be a plain document ID, but '${w}' contains a slash.`);const b=a.path.child(N.fromString(w));if(!x.isDocumentKey(b))throw new h(f.INVALID_ARGUMENT,`Invalid query. When querying a collection group and ordering by documentId(), the value passed to ${c}() must result in a valid document path, but '${b}' is not because it contains an odd number of segments.`);const H=new x(b);_.push(pe(o,H))}else{const b=Wr(u,c,w);_.push(b)}}return new _e(_,d)})(n._query,n.firestore._databaseId,s,t,e,r)}}function Hn(n,t,e){if(typeof(e=P(e))=="string"){if(e==="")throw new h(f.INVALID_ARGUMENT,"Invalid query. When querying with documentId(), you must provide a valid document ID, but it was an empty string.");if(!br(t)&&e.indexOf("/")!==-1)throw new h(f.INVALID_ARGUMENT,`Invalid query. When querying a collection by documentId(), you must provide a plain document ID, but '${e}' contains a '/' character.`);const r=t.path.child(N.fromString(e));if(!x.isDocumentKey(r))throw new h(f.INVALID_ARGUMENT,`Invalid query. When querying a collection group by documentId(), the value provided must result in a valid document path, but '${r}' is not because it has an odd number of segments (${r.length}).`);return pe(n,new x(r))}if(e instanceof A)return pe(n,e._key);throw new h(f.INVALID_ARGUMENT,`Invalid query. When querying with documentId(), you must provide a valid string or a DocumentReference, but it was: ${be(e)}.`)}function Yn(n,t){if(!Array.isArray(n)||n.length===0)throw new h(f.INVALID_ARGUMENT,`Invalid Query. A non-empty array is required for '${t.toString()}' filters.`)}function es(n,t){const e=(function(s,i){for(const a of s)for(const o of a.getFlattenedFilters())if(i.indexOf(o.op)>=0)return o.op;return null})(n.filters,(function(s){switch(s){case"!=":return["!=","not-in"];case"array-contains-any":case"in":return["not-in"];case"not-in":return["array-contains-any","in","not-in","!="];default:return[]}})(t.op));if(e!==null)throw e===t.op?new h(f.INVALID_ARGUMENT,`Invalid query. You cannot use more than one '${t.op.toString()}' filter.`):new h(f.INVALID_ARGUMENT,`Invalid query. You cannot use '${t.op.toString()}' filters with '${e.toString()}' filters.`)}function ns(n,t){if(!(t instanceof Jt||t instanceof Dt))throw new h(f.INVALID_ARGUMENT,`Function ${n}() requires AppliableConstraints created with a call to 'where(...)', 'or(...)', or 'and(...)'.`)}class yi{convertValue(t,e="none"){switch(gt(t)){case 0:return null;case 2:return t.booleanValue;case 3:if("mapValue"in t){if(ge(t))return this.convertToInt32Value(t.mapValue);if(_t(t))return this.convertToDecimal128Value(t.mapValue)}return k(t.integerValue||t.doubleValue);case 4:return this.convertTimestamp(t.timestampValue);case 6:return this.convertServerTimestamp(t,e);case 7:return t.stringValue;case 8:return"bytesValue"in t?this.convertBytes(ue(t.bytesValue)):this.convertToBytesWithSubtype(t.mapValue);case 9:return this.convertReference(t.referenceValue);case 11:return this.convertGeoPoint(t.geoPointValue);case 13:return this.convertArray(t.arrayValue,e);case 15:return this.convertObject(t.mapValue,e);case 14:return this.convertVectorValue(t.mapValue);case 12:return this.convertToRegexValue(t.mapValue);case 10:return this.convertToBsonObjectId(t.mapValue);case 5:return this.convertToBsonTimestamp(t.mapValue);case 16:return tt.instance();case 1:return et.instance();default:throw E(62114,{value:t})}}convertObject(t,e){return this.convertObjectMap(t.fields,e)}convertObjectMap(t,e="none"){const r={};return Kt(t,((s,i)=>{r[s]=this.convertValue(i,e)})),r}convertVectorValue(t){var r,s,i;const e=(i=(s=(r=t.fields)==null?void 0:r[ce].arrayValue)==null?void 0:s.values)==null?void 0:i.map((a=>k(a.doubleValue)));return new B(e)}convertToBsonObjectId(t){var r,s;const e=((s=(r=t.fields)==null?void 0:r[jt])==null?void 0:s.stringValue)??"";return new sn(e)}convertToBytesWithSubtype(t){var o;const e=(o=t.fields)==null?void 0:o[Ve],r=e==null?void 0:e.bytesValue;if(!r)throw new Error("Received incorrect bytesValue for Bytes with subtype");const s=ue(r).toUint8Array();if(s.length===0)throw new Error("Received empty bytesValue for Bytes with subtype");const i=s[0],a=s.slice(1);return new M(z.fromUint8Array(a),i)}convertToBsonTimestamp(t){var i,a,o,u,c,l,d;const e=(i=t.fields)==null?void 0:i[lt],r=Number((u=(o=(a=e==null?void 0:e.mapValue)==null?void 0:a.fields)==null?void 0:o[he])==null?void 0:u.integerValue),s=Number((d=(l=(c=e==null?void 0:e.mapValue)==null?void 0:c.fields)==null?void 0:l[de])==null?void 0:d.integerValue);return new an(r,s)}convertToRegexValue(t){var s,i,a,o,u,c,l,d,m,_;const e=((u=(o=(a=(i=(s=t.fields)==null?void 0:s[at])==null?void 0:i.mapValue)==null?void 0:a.fields)==null?void 0:o[le])==null?void 0:u.stringValue)??"",r=((_=(m=(d=(l=(c=t.fields)==null?void 0:c[at])==null?void 0:l.mapValue)==null?void 0:d.fields)==null?void 0:m[fe])==null?void 0:_.stringValue)??"";return new cn(e,r)}convertToInt32Value(t){var r,s;const e=Number((s=(r=t.fields)==null?void 0:r[Ht])==null?void 0:s.integerValue);return new un(e)}convertToDecimal128Value(t){var r,s;const e=((s=(r=t.fields)==null?void 0:r[Nt])==null?void 0:s.stringValue)??"";return new on(e)}convertGeoPoint(t){return new Q(k(t.latitude),k(t.longitude))}convertArray(t,e){return(t.values||[]).map((r=>this.convertValue(r,e)))}convertServerTimestamp(t,e){switch(e){case"previous":const r=cr(t);return r==null?null:this.convertValue(r,e);case"estimate":return this.convertTimestamp(qt(t));default:return null}}convertTimestamp(t){const e=pt(t);return new V(e.seconds,e.nanos)}convertDocumentKey(t,e){const r=N.fromString(t);U(Ur(r),9688,{name:t});const s=new Ct(r.get(1),r.get(3)),i=new x(r.popFirst(5));return s.isEqual(e)||Ae(`A document reference to ${i} refers to a different database (${s.projectId}/${s.database}), which is not supported. It will be treated as a reference in the current database (${e.projectId}/${e.database}) instead.`),i}}/**
 * @license
 * Copyright 2020 Google LLC
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
 */function Oe(n,t,e){let r;return r=n?e&&(e.merge||e.mergeFields)?n.toFirestore(t,e):n.toFirestore(t):t,r}class Le extends yi{constructor(t){super(),this.firestore=t}convertBytes(t){return new M(t)}convertReference(t){const e=this.convertDocumentKey(t,this.firestore._databaseId);return new A(this.firestore,null,e)}}function Ji(n){const t=nt((n=K(n,A)).firestore),e=new Le(n.firestore);return qr(t,[n._key]).then((r=>{U(r.length===1,15618);const s=r[0];return new It(n.firestore,e,n._key,s.isFoundDocument()?s:null,n.converter)}))}function Qi(n){(function(s){if(s.limitType==="L"&&s.explicitOrderBy.length===0)throw new h(f.UNIMPLEMENTED,"limitToLast() queries require specifying at least one orderBy() clause")})((n=K(n,$))._query);const t=nt(n.firestore),e=new Le(n.firestore);return ui(t,n._query).then((r=>{const s=r.map((i=>new Zr(n.firestore,e,i.key,i,n.converter)));return n._query.limitType==="L"&&s.reverse(),new He(n,s)}))}function Zi(n,t,e){const r=Oe((n=K(n,A)).converter,t,e),s=Se(wt(n.firestore),"setDoc",n._key,r,n.converter!==null,e);return Pt(nt(n.firestore),[s.toMutation(n._key,O.none())])}function ta(n,t,e,...r){const s=wt((n=K(n,A)).firestore);let i;return i=typeof(t=P(t))=="string"||t instanceof St?_n(s,"updateDoc",n._key,t,e,r):gn(s,"updateDoc",n._key,t),Pt(nt(n.firestore),[i.toMutation(n._key,O.exists(!0))])}function ea(n){return Pt(nt((n=K(n,A)).firestore),[new Re(n._key,O.none())])}function na(n,t){const e=hi(n=K(n,W)),r=Oe(n.converter,t),s=Se(wt(n.firestore),"addDoc",e._key,r,e.converter!==null,{});return Pt(nt(n.firestore),[s.toMutation(e._key,O.exists(!1))]).then((()=>e))}function ra(){return new Yt("deleteField")}function sa(){return new ln("serverTimestamp")}function ia(...n){return new fn("arrayUnion",n)}function aa(...n){return new hn("arrayRemove",n)}function oa(n){return new dn("increment",n)}function ua(n){return new mn("minimum",n)}function ca(n){return new pn("maximum",n)}function la(n){return new B(n)}const Xn="4.19.0";/**
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
 */class Tn{constructor(){this.promise=new Promise(((t,e)=>{this.resolve=t,this.reject=e}))}}/**
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
 */class Ei{constructor(t,e,r){this.alias=t,this.aggregateType=e,this.fieldPath=r}}/**
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
 */class rs{constructor(t,e,r=1e3,s=1.5,i=6e4){this.t=t,this.timerId=e,this.i=r,this.o=s,this.h=i,this.u=0,this.l=null,this._=Date.now(),this.reset()}reset(){this.u=0}m(){this.u=this.h}A(t){this.cancel();const e=Math.floor(this.u+this.p()),r=Math.max(0,Date.now()-this._),s=Math.max(0,e-r);s>0&&dt("ExponentialBackoff",`Backing off for ${s} ms (base delay: ${this.u} ms, delay with jitter: ${e} ms, last attempt: ${r} ms ago)`),this.l=this.t.enqueueAfterDelay(this.timerId,s,(()=>(this._=Date.now(),t()))),this.u*=this.o,this.u<this.i&&(this.u=this.i),this.u>this.h&&(this.u=this.h)}T(){this.l!==null&&(this.l.skipDelay(),this.l=null)}cancel(){this.l!==null&&(this.l.cancel(),this.l=null)}p(){return(Math.random()-.5)*this.u}}/**
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
 *//**
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
 */class zt{constructor(t="count",e){this._internalFieldPath=e,this.type="AggregateField",this.aggregateType=t}}class Ii{constructor(t,e,r){this._userDataWriter=e,this._data=r,this.type="AggregateQuerySnapshot",this.query=t}data(){return this._userDataWriter.convertObjectMap(this._data)}_fieldsProto(){return new C({mapValue:{fields:this._data}}).clone().value.mapValue.fields}}/**
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
 */function fa(n){return Ti(n,{count:wi()})}function Ti(n,t){const e=K(n.firestore,rt),r=nt(e),s=Ls(t,((i,a)=>new Ei(a,i.aggregateType,i._internalFieldPath)));return ci(r,n._query,s).then((i=>(function(o,u,c){const l=new Le(o);return new Ii(u,l,c)})(e,n,i)))}function ha(n){return new zt("sum",ut("sum",n))}function da(n){return new zt("avg",ut("average",n))}function wi(){return new zt("count")}function ma(n,t){var e,r;return n instanceof zt&&t instanceof zt&&n.aggregateType===t.aggregateType&&((e=n._internalFieldPath)==null?void 0:e.canonicalString())===((r=t._internalFieldPath)==null?void 0:r.canonicalString())}function pa(n,t){return Gr(n.query,t.query)&&we(n.data(),t.data())}/**
 * @license
 * Copyright 2020 Google LLC
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
 */class Ai{constructor(t,e){this._firestore=t,this._commitHandler=e,this._mutations=[],this._committed=!1,this._dataReader=wt(t)}set(t,e,r){this._verifyNotCommitted();const s=ft(t,this._firestore),i=Oe(s.converter,e,r),a=Se(this._dataReader,"WriteBatch.set",s._key,i,s.converter!==null,r);return this._mutations.push(a.toMutation(s._key,O.none())),this}update(t,e,r,...s){this._verifyNotCommitted();const i=ft(t,this._firestore);let a;return a=typeof(e=P(e))=="string"||e instanceof St?_n(this._dataReader,"WriteBatch.update",i._key,e,r,s):gn(this._dataReader,"WriteBatch.update",i._key,e),this._mutations.push(a.toMutation(i._key,O.exists(!0))),this}delete(t){this._verifyNotCommitted();const e=ft(t,this._firestore);return this._mutations=this._mutations.concat(new Re(e._key,O.none())),this}commit(){return this._verifyNotCommitted(),this._committed=!0,this._mutations.length>0?this._commitHandler(this._mutations):Promise.resolve()}_verifyNotCommitted(){if(this._committed)throw new h(f.FAILED_PRECONDITION,"A write batch can no longer be used after commit() has been called.")}}function ft(n,t){if((n=P(n)).firestore!==t)throw new h(f.INVALID_ARGUMENT,"Provided document reference is from a different Firestore instance.");return n}function ga(n){n=K(n,rt);const t=nt(n);return new Ai(n,(e=>Pt(t,e)))}/**
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
 */let bi=class{constructor(t){this.datastore=t,this.readVersions=new Map,this.mutations=[],this.committed=!1,this.lastTransactionError=null,this.writtenDocs=new Set}async lookup(t){if(this.ensureCommitNotCalled(),this.mutations.length>0)throw this.lastTransactionError=new h(f.INVALID_ARGUMENT,"Firestore transactions require all reads to be executed before all writes."),this.lastTransactionError;const e=await qr(this.datastore,t);return e.forEach((r=>this.recordVersion(r))),e}set(t,e){this.write(e.toMutation(t,this.precondition(t))),this.writtenDocs.add(t.toString())}update(t,e){try{this.write(e.toMutation(t,this.preconditionForUpdate(t)))}catch(r){this.lastTransactionError=r}this.writtenDocs.add(t.toString())}delete(t){this.write(new Re(t,this.precondition(t))),this.writtenDocs.add(t.toString())}async commit(){if(this.ensureCommitNotCalled(),this.lastTransactionError)throw this.lastTransactionError;const t=this.readVersions;this.mutations.forEach((e=>{t.delete(e.key.toString())})),t.forEach(((e,r)=>{const s=x.fromPath(r);this.mutations.push(new Or(s,this.precondition(s)))})),await Pt(this.datastore,this.mutations),this.committed=!0}recordVersion(t){let e;if(t.isFoundDocument())e=t.version;else{if(!t.isNoDocument())throw E(50498,{R:t.constructor.name});e=R.min()}const r=this.readVersions.get(t.key.toString());if(r){if(!e.isEqual(r))throw new h(f.ABORTED,"Document version changed between two reads.")}else this.readVersions.set(t.key.toString(),e)}precondition(t){const e=this.readVersions.get(t.toString());return!this.writtenDocs.has(t.toString())&&e?e.isEqual(R.min())?O.exists(!1):O.updateTime(e):O.none()}preconditionForUpdate(t){const e=this.readVersions.get(t.toString());if(!this.writtenDocs.has(t.toString())&&e){if(e.isEqual(R.min()))throw new h(f.INVALID_ARGUMENT,"Can't update a document that doesn't exist.");return O.updateTime(e)}return O.exists(!0)}write(t){this.ensureCommitNotCalled(),this.mutations.push(t)}ensureCommitNotCalled(){}};/**
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
 */const Vi={maxAttempts:5};/**
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
 */class Ni{constructor(t,e,r,s,i){this.asyncQueue=t,this.datastore=e,this.options=r,this.updateFunction=s,this.deferred=i,this.I=r.maxAttempts,this.P=new rs(this.asyncQueue,"transaction_retry")}V(){this.I-=1,this.D()}D(){this.P.A((async()=>{const t=new bi(this.datastore),e=this.v(t);e&&e.then((r=>{this.asyncQueue.enqueueAndForget((()=>t.commit().then((()=>{this.deferred.resolve(r)})).catch((s=>{this.F(s)}))))})).catch((r=>{this.F(r)}))}))}v(t){try{const e=this.updateFunction(t);return!or(e)&&e.catch&&e.then?e:(this.deferred.reject(Error("Transaction callback must return a Promise")),null)}catch(e){return this.deferred.reject(e),null}}F(t){this.I>0&&this.B(t)?(this.I-=1,this.asyncQueue.enqueueAndForget((()=>(this.D(),Promise.resolve())))):this.deferred.reject(t)}B(t){if((t==null?void 0:t.name)==="FirebaseError"){const e=t.code;return e==="aborted"||e==="failed-precondition"||e==="already-exists"||!Fs(e)}return!1}}/**
 * @license
 * Copyright 2020 Google LLC
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
 */function qe(){return typeof document<"u"?document:null}/**
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
 */class wn{constructor(t,e,r,s,i){this.asyncQueue=t,this.timerId=e,this.targetTimeMs=r,this.op=s,this.removalCallback=i,this.deferred=new Tn,this.then=this.deferred.promise.then.bind(this.deferred.promise),this.deferred.promise.catch((a=>{}))}get promise(){return this.deferred.promise}static createAndSchedule(t,e,r,s,i){const a=Date.now()+r,o=new wn(t,e,a,s,i);return o.start(r),o}start(t){this.timerHandle=setTimeout((()=>this.handleDelayElapsed()),t)}skipDelay(){return this.handleDelayElapsed()}cancel(t){this.timerHandle!==null&&(this.clearTimeout(),this.deferred.reject(new h(f.CANCELLED,"Operation cancelled"+(t?": "+t:""))))}handleDelayElapsed(){this.asyncQueue.enqueueAndForget((()=>this.timerHandle!==null?(this.clearTimeout(),this.op().then((t=>this.deferred.resolve(t)))):Promise.resolve()))}clearTimeout(){this.timerHandle!==null&&(this.removalCallback(this),clearTimeout(this.timerHandle),this.timerHandle=null)}}/**
 * @license
 * Copyright 2020 Google LLC
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
 */const Jn="AsyncQueue";class vi{constructor(t=Promise.resolve()){this.k=[],this.O=!1,this.C=[],this.S=null,this.q=!1,this.M=!1,this.N=[],this.P=new rs(this,"async_queue_retry"),this.L=()=>{const r=qe();r&&dt(Jn,"Visibility state changed to "+r.visibilityState),this.P.T()},this.W=t;const e=qe();e&&typeof e.addEventListener=="function"&&e.addEventListener("visibilitychange",this.L)}get isShuttingDown(){return this.O}enqueueAndForget(t){this.enqueue(t)}enqueueAndForgetEvenWhileRestricted(t){this.U(),this.j(t)}enterRestrictedMode(t){if(!this.O){this.O=!0,this.M=t||!1;const e=qe();e&&typeof e.removeEventListener=="function"&&e.removeEventListener("visibilitychange",this.L)}}enqueue(t){if(this.U(),this.O)return new Promise((()=>{}));const e=new Tn;return this.j((()=>this.O&&this.M?Promise.resolve():(t().then(e.resolve,e.reject),e.promise))).then((()=>e.promise))}enqueueRetryable(t){this.enqueueAndForget((()=>(this.k.push(t),this.$())))}async $(){if(this.k.length!==0){try{await this.k[0](),this.k.shift(),this.P.reset()}catch(t){if(!(function(r){return r.name==="IndexedDbTransactionError"})(t))throw t;dt(Jn,"Operation failed with retryable error: "+t)}this.k.length>0&&this.P.A((()=>this.$()))}}j(t){const e=this.W.then((()=>(this.q=!0,t().catch((r=>{this.S=r,this.q=!1;const s=Qn(r);throw Ae("INTERNAL UNHANDLED ERROR: ",s),r})).then((r=>(this.q=!1,r))))));return this.W=e,e}enqueueAfterDelay(t,e,r){this.U(),this.N.indexOf(t)>-1&&(e=0);const s=wn.createAndSchedule(this,t,e,r,(i=>this.G(i)));return this.C.push(s),s}U(){this.S&&E(47125,{K:Qn(this.S)})}verifyOperationInProgress(){}async H(){let t;do t=this.W,await t;while(t!==this.W)}J(t){for(const e of this.C)if(e.timerId===t)return!0;return!1}X(t){return this.H().then((()=>{this.C.sort(((e,r)=>e.targetTimeMs-r.targetTimeMs));for(const e of this.C)if(e.skipDelay(),t!=="all"&&e.timerId===t)break;return this.H()}))}Y(t){this.N.push(t)}G(t){const e=this.C.indexOf(t);this.C.splice(e,1)}}function Qn(n){let t=n.message||"";return n.stack&&(t=n.stack.includes(n.message)?n.stack:n.message+`
`+n.stack),t}/**
 * @license
 * Copyright 2020 Google LLC
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
 */class xi{constructor(t,e){this._firestore=t,this._transaction=e,this._dataReader=wt(t)}get(t){const e=ft(t,this._firestore),r=new Le(this._firestore);return this._transaction.lookup([e._key]).then((s=>{if(!s||s.length!==1)return E(24041);const i=s[0];if(i.isFoundDocument())return new It(this._firestore,r,i.key,i,e.converter);if(i.isNoDocument())return new It(this._firestore,r,e._key,null,e.converter);throw E(18433,{doc:i})}))}set(t,e,r){const s=ft(t,this._firestore),i=Oe(s.converter,e,r),a=Se(this._dataReader,"Transaction.set",s._key,i,s.converter!==null,r);return this._transaction.set(s._key,a),this}update(t,e,r,...s){const i=ft(t,this._firestore);let a;return a=typeof(e=P(e))=="string"||e instanceof St?_n(this._dataReader,"Transaction.update",i._key,e,r,s):gn(this._dataReader,"Transaction.update",i._key,e),this._transaction.update(i._key,a),this}delete(t){const e=ft(t,this._firestore);return this._transaction.delete(e._key),this}}function ya(n,t,e){n=K(n,rt);const r=nt(n),s={...Vi,...e};(function(o){if(o.maxAttempts<1)throw new h(f.INVALID_ARGUMENT,"Max attempts must be at least 1")})(s);const i=new Tn;return new Ni((function(){return new vi})(),r,s,(a=>t(new xi(n,a))),i).V(),i.promise}/**
 * @license
 * Copyright 2020 Google LLC
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
 */(function(){gs(`${us}_lite`),os(new ps("firestore/lite",((t,{instanceIdentifier:e,options:r})=>{const s=t.getProvider("app").getImmediate(),i=new rt(new Es(t.getProvider("auth-internal")),new ws(s,t.getProvider("app-check-internal")),bs(s,e),s);return r&&i._setSettings(r),i}),"PUBLIC").setMultipleInstances(!0)),Nn("firestore-lite",Xn,""),Nn("firestore-lite",Xn,"esm2020")})();export{ki as $,zt as A,sn as B,W as C,on as D,Li as E,st as F,Q as G,Ci as H,un as I,fi as J,wi as K,ea as L,tt as M,ra as N,hi as O,Mi as P,$ as Q,cn as R,Xi as S,V as T,Yi as U,B as V,Ai as W,Ti as X,fa as Y,Ji as Z,Qi as _,Ii as a,oa as a0,Fi as a1,zi as a2,Ki as a3,ca as a4,ua as a5,$i as a6,Bi as a7,qi as a8,Gr as a9,Ui as aa,ya as ab,sa as ac,Zi as ad,Si as ae,_i as af,Hi as ag,Wi as ah,ha as ai,Oi as aj,ta as ak,la as al,ji as am,ga as an,an as b,M as c,A as d,St as e,et as f,Dt as g,Xt as h,It as i,Zr as j,h as k,ke as l,Jt as m,rt as n,De as o,In as p,He as q,Fe as r,xi as s,na as t,ma as u,pa as v,Gi as w,aa as x,ia as y,da as z};
