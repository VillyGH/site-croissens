(self["webpackChunksite_croissens"]=self["webpackChunksite_croissens"]||[]).push([[998],{3831:function(t,e,n){"use strict";n.d(e,{hJ:function(){return ge},Xb:function(){return Oe},v0:function(){return $a},Aj:function(){return Ie},e5:function(){return De},rh:function(){return In},w7:function(){return Pe}});var a=n(4444),r=n(7456),i=n(3333);function o(t,e){var n={};for(var a in t)Object.prototype.hasOwnProperty.call(t,a)&&e.indexOf(a)<0&&(n[a]=t[a]);if(null!=t&&"function"===typeof Object.getOwnPropertySymbols){var r=0;for(a=Object.getOwnPropertySymbols(t);r<a.length;r++)e.indexOf(a[r])<0&&Object.prototype.propertyIsEnumerable.call(t,a[r])&&(n[a[r]]=t[a[r]])}return n}Object.create;Object.create;"function"===typeof SuppressedError&&SuppressedError;var s=n(8463);function l(t){return void 0!==t&&void 0!==t.enterprise}class c{constructor(t){if(this.siteKey="",this.emailPasswordEnabled=!1,void 0===t.recaptchaKey)throw new Error("recaptchaKey undefined");this.siteKey=t.recaptchaKey.split("/")[3],this.emailPasswordEnabled=t.recaptchaEnforcementState.some((t=>"EMAIL_PASSWORD_PROVIDER"===t.provider&&"OFF"!==t.enforcementState))}}
/**
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
 */function u(){return{["dependent-sdk-initialized-before-auth"]:"Another Firebase SDK was initialized and is trying to use Auth before Auth is initialized. Please be sure to call `initializeAuth` or `getAuth` before starting any other Firebase SDK."}}const h=u,d=new a.LL("auth","Firebase",u()),f=new i.Yd("@firebase/auth");function p(t,...e){f.logLevel<=i["in"].WARN&&f.warn(`Auth (${r.Jn}): ${t}`,...e)}function m(t,...e){f.logLevel<=i["in"].ERROR&&f.error(`Auth (${r.Jn}): ${t}`,...e)}
/**
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
 */function v(t,...e){throw b(t,...e)}function g(t,...e){return b(t,...e)}function _(t,e,n){const r=Object.assign(Object.assign({},h()),{[e]:n}),i=new a.LL("auth","Firebase",r);return i.create(e,{appName:t.name})}function y(t,e,n){const a=n;if(!(e instanceof a))throw a.name!==e.constructor.name&&v(t,"argument-error"),_(t,"argument-error",`Type of ${e.constructor.name} does not match expected instance.Did you pass a reference from a different Auth SDK?`)}function b(t,...e){if("string"!==typeof t){const n=e[0],a=[...e.slice(1)];return a[0]&&(a[0].appName=t.name),t._errorFactory.create(n,...a)}return d.create(t,...e)}function M(t,e,...n){if(!t)throw b(e,...n)}function z(t){const e="INTERNAL ASSERTION FAILED: "+t;throw m(e),new Error(e)}function w(t,e){t||z(e)}
/**
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
 */function L(){var t;return"undefined"!==typeof self&&(null===(t=self.location)||void 0===t?void 0:t.href)||""}function k(){return"http:"===H()||"https:"===H()}function H(){var t;return"undefined"!==typeof self&&(null===(t=self.location)||void 0===t?void 0:t.protocol)||null}
/**
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
 */function T(){return!("undefined"!==typeof navigator&&navigator&&"onLine"in navigator&&"boolean"===typeof navigator.onLine&&(k()||(0,a.ru)()||"connection"in navigator))||navigator.onLine}function S(){if("undefined"===typeof navigator)return null;const t=navigator;return t.languages&&t.languages[0]||t.language||null}
/**
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
 */class A{constructor(t,e){this.shortDelay=t,this.longDelay=e,w(e>t,"Short delay should be less than long delay!"),this.isMobile=(0,a.uI)()||(0,a.b$)()}get(){return T()?this.isMobile?this.longDelay:this.shortDelay:Math.min(5e3,this.shortDelay)}}
/**
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
 */function O(t,e){w(t.emulator,"Emulator should always be set here");const{url:n}=t.emulator;return e?`${n}${e.startsWith("/")?e.slice(1):e}`:n}
/**
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
 */class D{static initialize(t,e,n){this.fetchImpl=t,e&&(this.headersImpl=e),n&&(this.responseImpl=n)}static fetch(){return this.fetchImpl?this.fetchImpl:"undefined"!==typeof self&&"fetch"in self?self.fetch:void z("Could not find fetch implementation, make sure you call FetchProvider.initialize() with an appropriate polyfill")}static headers(){return this.headersImpl?this.headersImpl:"undefined"!==typeof self&&"Headers"in self?self.Headers:void z("Could not find Headers implementation, make sure you call FetchProvider.initialize() with an appropriate polyfill")}static response(){return this.responseImpl?this.responseImpl:"undefined"!==typeof self&&"Response"in self?self.Response:void z("Could not find Response implementation, make sure you call FetchProvider.initialize() with an appropriate polyfill")}}
/**
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
 */const V={["CREDENTIAL_MISMATCH"]:"custom-token-mismatch",["MISSING_CUSTOM_TOKEN"]:"internal-error",["INVALID_IDENTIFIER"]:"invalid-email",["MISSING_CONTINUE_URI"]:"internal-error",["INVALID_PASSWORD"]:"wrong-password",["MISSING_PASSWORD"]:"missing-password",["EMAIL_EXISTS"]:"email-already-in-use",["PASSWORD_LOGIN_DISABLED"]:"operation-not-allowed",["INVALID_IDP_RESPONSE"]:"invalid-credential",["INVALID_PENDING_TOKEN"]:"invalid-credential",["FEDERATED_USER_ID_ALREADY_LINKED"]:"credential-already-in-use",["MISSING_REQ_TYPE"]:"internal-error",["EMAIL_NOT_FOUND"]:"user-not-found",["RESET_PASSWORD_EXCEED_LIMIT"]:"too-many-requests",["EXPIRED_OOB_CODE"]:"expired-action-code",["INVALID_OOB_CODE"]:"invalid-action-code",["MISSING_OOB_CODE"]:"internal-error",["CREDENTIAL_TOO_OLD_LOGIN_AGAIN"]:"requires-recent-login",["INVALID_ID_TOKEN"]:"invalid-user-token",["TOKEN_EXPIRED"]:"user-token-expired",["USER_NOT_FOUND"]:"user-token-expired",["TOO_MANY_ATTEMPTS_TRY_LATER"]:"too-many-requests",["PASSWORD_DOES_NOT_MEET_REQUIREMENTS"]:"password-does-not-meet-requirements",["INVALID_CODE"]:"invalid-verification-code",["INVALID_SESSION_INFO"]:"invalid-verification-id",["INVALID_TEMPORARY_PROOF"]:"invalid-credential",["MISSING_SESSION_INFO"]:"missing-verification-id",["SESSION_EXPIRED"]:"code-expired",["MISSING_ANDROID_PACKAGE_NAME"]:"missing-android-pkg-name",["UNAUTHORIZED_DOMAIN"]:"unauthorized-continue-uri",["INVALID_OAUTH_CLIENT_ID"]:"invalid-oauth-client-id",["ADMIN_ONLY_OPERATION"]:"admin-restricted-operation",["INVALID_MFA_PENDING_CREDENTIAL"]:"invalid-multi-factor-session",["MFA_ENROLLMENT_NOT_FOUND"]:"multi-factor-info-not-found",["MISSING_MFA_ENROLLMENT_ID"]:"missing-multi-factor-info",["MISSING_MFA_PENDING_CREDENTIAL"]:"missing-multi-factor-session",["SECOND_FACTOR_EXISTS"]:"second-factor-already-in-use",["SECOND_FACTOR_LIMIT_EXCEEDED"]:"maximum-second-factor-count-exceeded",["BLOCKING_FUNCTION_ERROR_RESPONSE"]:"internal-error",["RECAPTCHA_NOT_ENABLED"]:"recaptcha-not-enabled",["MISSING_RECAPTCHA_TOKEN"]:"missing-recaptcha-token",["INVALID_RECAPTCHA_TOKEN"]:"invalid-recaptcha-token",["INVALID_RECAPTCHA_ACTION"]:"invalid-recaptcha-action",["MISSING_CLIENT_TYPE"]:"missing-client-type",["MISSING_RECAPTCHA_VERSION"]:"missing-recaptcha-version",["INVALID_RECAPTCHA_VERSION"]:"invalid-recaptcha-version",["INVALID_REQ_TYPE"]:"invalid-req-type"},C=new A(3e4,6e4);
/**
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
 */function I(t,e){return t.tenantId&&!e.tenantId?Object.assign(Object.assign({},e),{tenantId:t.tenantId}):e}async function P(t,e,n,r,i={}){return E(t,i,(async()=>{let i={},o={};r&&("GET"===e?o=r:i={body:JSON.stringify(r)});const s=(0,a.xO)(Object.assign({key:t.config.apiKey},o)).slice(1),l=await t._getAdditionalHeaders();return l["Content-Type"]="application/json",t.languageCode&&(l["X-Firebase-Locale"]=t.languageCode),D.fetch()(F(t,t.config.apiHost,n,s),Object.assign({method:e,headers:l,referrerPolicy:"no-referrer"},i))}))}async function E(t,e,n){t._canInitEmulator=!1;const r=Object.assign(Object.assign({},V),e);try{const e=new j(t),a=await Promise.race([n(),e.promise]);e.clearNetworkTimeout();const i=await a.json();if("needConfirmation"in i)throw Y(t,"account-exists-with-different-credential",i);if(a.ok&&!("errorMessage"in i))return i;{const e=a.ok?i.errorMessage:i.error.message,[n,o]=e.split(" : ");if("FEDERATED_USER_ID_ALREADY_LINKED"===n)throw Y(t,"credential-already-in-use",i);if("EMAIL_EXISTS"===n)throw Y(t,"email-already-in-use",i);if("USER_DISABLED"===n)throw Y(t,"user-disabled",i);const s=r[n]||n.toLowerCase().replace(/[_\s]+/g,"-");if(o)throw _(t,s,o);v(t,s)}}catch(i){if(i instanceof a.ZR)throw i;v(t,"network-request-failed",{message:String(i)})}}async function B(t,e,n,a,r={}){const i=await P(t,e,n,a,r);return"mfaPendingCredential"in i&&v(t,"multi-factor-auth-required",{_serverResponse:i}),i}function F(t,e,n,a){const r=`${e}${n}?${a}`;return t.config.emulator?O(t.config,r):`${t.config.apiScheme}://${r}`}class j{constructor(t){this.auth=t,this.timer=null,this.promise=new Promise(((t,e)=>{this.timer=setTimeout((()=>e(g(this.auth,"network-request-failed"))),C.get())}))}clearNetworkTimeout(){clearTimeout(this.timer)}}function Y(t,e,n){const a={appName:t.name};n.email&&(a.email=n.email),n.phoneNumber&&(a.phoneNumber=n.phoneNumber);const r=g(t,e,a);return r.customData._tokenResponse=n,r}
/**
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
 */async function x(t,e){return P(t,"GET","/v2/recaptchaConfig",I(t,e))}
/**
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
 */async function N(t,e){return P(t,"POST","/v1/accounts:delete",e)}async function R(t,e){return P(t,"POST","/v1/accounts:lookup",e)}
/**
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
 */function $(t){if(t)try{const e=new Date(Number(t));if(!isNaN(e.getTime()))return e.toUTCString()}catch(e){}}
/**
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
 */async function U(t,e=!1){const n=(0,a.m9)(t),r=await n.getIdToken(e),i=G(r);M(i&&i.exp&&i.auth_time&&i.iat,n.auth,"internal-error");const o="object"===typeof i.firebase?i.firebase:void 0,s=null===o||void 0===o?void 0:o["sign_in_provider"];return{claims:i,token:r,authTime:$(W(i.auth_time)),issuedAtTime:$(W(i.iat)),expirationTime:$(W(i.exp)),signInProvider:s||null,signInSecondFactor:(null===o||void 0===o?void 0:o["sign_in_second_factor"])||null}}function W(t){return 1e3*Number(t)}function G(t){const[e,n,r]=t.split(".");if(void 0===e||void 0===n||void 0===r)return m("JWT malformed, contained fewer than 3 sections"),null;try{const t=(0,a.tV)(n);return t?JSON.parse(t):(m("Failed to decode base64 JWT payload"),null)}catch(i){return m("Caught error parsing JWT payload as JSON",null===i||void 0===i?void 0:i.toString()),null}}function q(t){const e=G(t);return M(e,"internal-error"),M("undefined"!==typeof e.exp,"internal-error"),M("undefined"!==typeof e.iat,"internal-error"),Number(e.exp)-Number(e.iat)}
/**
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
 */async function K(t,e,n=!1){if(n)return e;try{return await e}catch(r){throw r instanceof a.ZR&&J(r)&&t.auth.currentUser===t&&await t.auth.signOut(),r}}function J({code:t}){return"auth/user-disabled"===t||"auth/user-token-expired"===t}
/**
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
 */class X{constructor(t){this.user=t,this.isRunning=!1,this.timerId=null,this.errorBackoff=3e4}_start(){this.isRunning||(this.isRunning=!0,this.schedule())}_stop(){this.isRunning&&(this.isRunning=!1,null!==this.timerId&&clearTimeout(this.timerId))}getInterval(t){var e;if(t){const t=this.errorBackoff;return this.errorBackoff=Math.min(2*this.errorBackoff,96e4),t}{this.errorBackoff=3e4;const t=null!==(e=this.user.stsTokenManager.expirationTime)&&void 0!==e?e:0,n=t-Date.now()-3e5;return Math.max(0,n)}}schedule(t=!1){if(!this.isRunning)return;const e=this.getInterval(t);this.timerId=setTimeout((async()=>{await this.iteration()}),e)}async iteration(){try{await this.user.getIdToken(!0)}catch(t){return void("auth/network-request-failed"===(null===t||void 0===t?void 0:t.code)&&this.schedule(!0))}this.schedule()}}
/**
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
 */class Q{constructor(t,e){this.createdAt=t,this.lastLoginAt=e,this._initializeTime()}_initializeTime(){this.lastSignInTime=$(this.lastLoginAt),this.creationTime=$(this.createdAt)}_copy(t){this.createdAt=t.createdAt,this.lastLoginAt=t.lastLoginAt,this._initializeTime()}toJSON(){return{createdAt:this.createdAt,lastLoginAt:this.lastLoginAt}}}
/**
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
 */async function Z(t){var e;const n=t.auth,a=await t.getIdToken(),r=await K(t,R(n,{idToken:a}));M(null===r||void 0===r?void 0:r.users.length,n,"internal-error");const i=r.users[0];t._notifyReloadListener(i);const o=(null===(e=i.providerUserInfo)||void 0===e?void 0:e.length)?nt(i.providerUserInfo):[],s=et(t.providerData,o),l=t.isAnonymous,c=!(t.email&&i.passwordHash)&&!(null===s||void 0===s?void 0:s.length),u=!!l&&c,h={uid:i.localId,displayName:i.displayName||null,photoURL:i.photoUrl||null,email:i.email||null,emailVerified:i.emailVerified||!1,phoneNumber:i.phoneNumber||null,tenantId:i.tenantId||null,providerData:s,metadata:new Q(i.createdAt,i.lastLoginAt),isAnonymous:u};Object.assign(t,h)}async function tt(t){const e=(0,a.m9)(t);await Z(e),await e.auth._persistUserIfCurrent(e),e.auth._notifyListenersIfCurrent(e)}function et(t,e){const n=t.filter((t=>!e.some((e=>e.providerId===t.providerId))));return[...n,...e]}function nt(t){return t.map((t=>{var{providerId:e}=t,n=o(t,["providerId"]);return{providerId:e,uid:n.rawId||"",displayName:n.displayName||null,email:n.email||null,phoneNumber:n.phoneNumber||null,photoURL:n.photoUrl||null}}))}
/**
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
 */async function at(t,e){const n=await E(t,{},(async()=>{const n=(0,a.xO)({grant_type:"refresh_token",refresh_token:e}).slice(1),{tokenApiHost:r,apiKey:i}=t.config,o=F(t,r,"/v1/token",`key=${i}`),s=await t._getAdditionalHeaders();return s["Content-Type"]="application/x-www-form-urlencoded",D.fetch()(o,{method:"POST",headers:s,body:n})}));return{accessToken:n.access_token,expiresIn:n.expires_in,refreshToken:n.refresh_token}}
/**
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
 */class rt{constructor(){this.refreshToken=null,this.accessToken=null,this.expirationTime=null}get isExpired(){return!this.expirationTime||Date.now()>this.expirationTime-3e4}updateFromServerResponse(t){M(t.idToken,"internal-error"),M("undefined"!==typeof t.idToken,"internal-error"),M("undefined"!==typeof t.refreshToken,"internal-error");const e="expiresIn"in t&&"undefined"!==typeof t.expiresIn?Number(t.expiresIn):q(t.idToken);this.updateTokensAndExpiration(t.idToken,t.refreshToken,e)}async getToken(t,e=!1){return M(!this.accessToken||this.refreshToken,t,"user-token-expired"),e||!this.accessToken||this.isExpired?this.refreshToken?(await this.refresh(t,this.refreshToken),this.accessToken):null:this.accessToken}clearRefreshToken(){this.refreshToken=null}async refresh(t,e){const{accessToken:n,refreshToken:a,expiresIn:r}=await at(t,e);this.updateTokensAndExpiration(n,a,Number(r))}updateTokensAndExpiration(t,e,n){this.refreshToken=e||null,this.accessToken=t||null,this.expirationTime=Date.now()+1e3*n}static fromJSON(t,e){const{refreshToken:n,accessToken:a,expirationTime:r}=e,i=new rt;return n&&(M("string"===typeof n,"internal-error",{appName:t}),i.refreshToken=n),a&&(M("string"===typeof a,"internal-error",{appName:t}),i.accessToken=a),r&&(M("number"===typeof r,"internal-error",{appName:t}),i.expirationTime=r),i}toJSON(){return{refreshToken:this.refreshToken,accessToken:this.accessToken,expirationTime:this.expirationTime}}_assign(t){this.accessToken=t.accessToken,this.refreshToken=t.refreshToken,this.expirationTime=t.expirationTime}_clone(){return Object.assign(new rt,this.toJSON())}_performRefresh(){return z("not implemented")}}
/**
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
 */function it(t,e){M("string"===typeof t||"undefined"===typeof t,"internal-error",{appName:e})}class ot{constructor(t){var{uid:e,auth:n,stsTokenManager:a}=t,r=o(t,["uid","auth","stsTokenManager"]);this.providerId="firebase",this.proactiveRefresh=new X(this),this.reloadUserInfo=null,this.reloadListener=null,this.uid=e,this.auth=n,this.stsTokenManager=a,this.accessToken=a.accessToken,this.displayName=r.displayName||null,this.email=r.email||null,this.emailVerified=r.emailVerified||!1,this.phoneNumber=r.phoneNumber||null,this.photoURL=r.photoURL||null,this.isAnonymous=r.isAnonymous||!1,this.tenantId=r.tenantId||null,this.providerData=r.providerData?[...r.providerData]:[],this.metadata=new Q(r.createdAt||void 0,r.lastLoginAt||void 0)}async getIdToken(t){const e=await K(this,this.stsTokenManager.getToken(this.auth,t));return M(e,this.auth,"internal-error"),this.accessToken!==e&&(this.accessToken=e,await this.auth._persistUserIfCurrent(this),this.auth._notifyListenersIfCurrent(this)),e}getIdTokenResult(t){return U(this,t)}reload(){return tt(this)}_assign(t){this!==t&&(M(this.uid===t.uid,this.auth,"internal-error"),this.displayName=t.displayName,this.photoURL=t.photoURL,this.email=t.email,this.emailVerified=t.emailVerified,this.phoneNumber=t.phoneNumber,this.isAnonymous=t.isAnonymous,this.tenantId=t.tenantId,this.providerData=t.providerData.map((t=>Object.assign({},t))),this.metadata._copy(t.metadata),this.stsTokenManager._assign(t.stsTokenManager))}_clone(t){const e=new ot(Object.assign(Object.assign({},this),{auth:t,stsTokenManager:this.stsTokenManager._clone()}));return e.metadata._copy(this.metadata),e}_onReload(t){M(!this.reloadListener,this.auth,"internal-error"),this.reloadListener=t,this.reloadUserInfo&&(this._notifyReloadListener(this.reloadUserInfo),this.reloadUserInfo=null)}_notifyReloadListener(t){this.reloadListener?this.reloadListener(t):this.reloadUserInfo=t}_startProactiveRefresh(){this.proactiveRefresh._start()}_stopProactiveRefresh(){this.proactiveRefresh._stop()}async _updateTokensIfNecessary(t,e=!1){let n=!1;t.idToken&&t.idToken!==this.stsTokenManager.accessToken&&(this.stsTokenManager.updateFromServerResponse(t),n=!0),e&&await Z(this),await this.auth._persistUserIfCurrent(this),n&&this.auth._notifyListenersIfCurrent(this)}async delete(){const t=await this.getIdToken();return await K(this,N(this.auth,{idToken:t})),this.stsTokenManager.clearRefreshToken(),this.auth.signOut()}toJSON(){return Object.assign(Object.assign({uid:this.uid,email:this.email||void 0,emailVerified:this.emailVerified,displayName:this.displayName||void 0,isAnonymous:this.isAnonymous,photoURL:this.photoURL||void 0,phoneNumber:this.phoneNumber||void 0,tenantId:this.tenantId||void 0,providerData:this.providerData.map((t=>Object.assign({},t))),stsTokenManager:this.stsTokenManager.toJSON(),_redirectEventId:this._redirectEventId},this.metadata.toJSON()),{apiKey:this.auth.config.apiKey,appName:this.auth.name})}get refreshToken(){return this.stsTokenManager.refreshToken||""}static _fromJSON(t,e){var n,a,r,i,o,s,l,c;const u=null!==(n=e.displayName)&&void 0!==n?n:void 0,h=null!==(a=e.email)&&void 0!==a?a:void 0,d=null!==(r=e.phoneNumber)&&void 0!==r?r:void 0,f=null!==(i=e.photoURL)&&void 0!==i?i:void 0,p=null!==(o=e.tenantId)&&void 0!==o?o:void 0,m=null!==(s=e._redirectEventId)&&void 0!==s?s:void 0,v=null!==(l=e.createdAt)&&void 0!==l?l:void 0,g=null!==(c=e.lastLoginAt)&&void 0!==c?c:void 0,{uid:_,emailVerified:y,isAnonymous:b,providerData:z,stsTokenManager:w}=e;M(_&&w,t,"internal-error");const L=rt.fromJSON(this.name,w);M("string"===typeof _,t,"internal-error"),it(u,t.name),it(h,t.name),M("boolean"===typeof y,t,"internal-error"),M("boolean"===typeof b,t,"internal-error"),it(d,t.name),it(f,t.name),it(p,t.name),it(m,t.name),it(v,t.name),it(g,t.name);const k=new ot({uid:_,auth:t,email:h,emailVerified:y,displayName:u,isAnonymous:b,photoURL:f,phoneNumber:d,tenantId:p,stsTokenManager:L,createdAt:v,lastLoginAt:g});return z&&Array.isArray(z)&&(k.providerData=z.map((t=>Object.assign({},t)))),m&&(k._redirectEventId=m),k}static async _fromIdTokenResponse(t,e,n=!1){const a=new rt;a.updateFromServerResponse(e);const r=new ot({uid:e.localId,auth:t,stsTokenManager:a,isAnonymous:n});return await Z(r),r}}
/**
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
 */const st=new Map;function lt(t){w(t instanceof Function,"Expected a class definition");let e=st.get(t);return e?(w(e instanceof t,"Instance stored in cache mismatched with class"),e):(e=new t,st.set(t,e),e)}
/**
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
 */class ct{constructor(){this.type="NONE",this.storage={}}async _isAvailable(){return!0}async _set(t,e){this.storage[t]=e}async _get(t){const e=this.storage[t];return void 0===e?null:e}async _remove(t){delete this.storage[t]}_addListener(t,e){}_removeListener(t,e){}}ct.type="NONE";const ut=ct;
/**
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
 */function ht(t,e,n){return`firebase:${t}:${e}:${n}`}class dt{constructor(t,e,n){this.persistence=t,this.auth=e,this.userKey=n;const{config:a,name:r}=this.auth;this.fullUserKey=ht(this.userKey,a.apiKey,r),this.fullPersistenceKey=ht("persistence",a.apiKey,r),this.boundEventHandler=e._onStorageEvent.bind(e),this.persistence._addListener(this.fullUserKey,this.boundEventHandler)}setCurrentUser(t){return this.persistence._set(this.fullUserKey,t.toJSON())}async getCurrentUser(){const t=await this.persistence._get(this.fullUserKey);return t?ot._fromJSON(this.auth,t):null}removeCurrentUser(){return this.persistence._remove(this.fullUserKey)}savePersistenceForRedirect(){return this.persistence._set(this.fullPersistenceKey,this.persistence.type)}async setPersistence(t){if(this.persistence===t)return;const e=await this.getCurrentUser();return await this.removeCurrentUser(),this.persistence=t,e?this.setCurrentUser(e):void 0}delete(){this.persistence._removeListener(this.fullUserKey,this.boundEventHandler)}static async create(t,e,n="authUser"){if(!e.length)return new dt(lt(ut),t,n);const a=(await Promise.all(e.map((async t=>{if(await t._isAvailable())return t})))).filter((t=>t));let r=a[0]||lt(ut);const i=ht(n,t.config.apiKey,t.name);let o=null;for(const c of e)try{const e=await c._get(i);if(e){const n=ot._fromJSON(t,e);c!==r&&(o=n),r=c;break}}catch(l){}const s=a.filter((t=>t._shouldAllowMigration));return r._shouldAllowMigration&&s.length?(r=s[0],o&&await r._set(i,o.toJSON()),await Promise.all(e.map((async t=>{if(t!==r)try{await t._remove(i)}catch(l){}}))),new dt(r,t,n)):new dt(r,t,n)}}
/**
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
 */function ft(t){const e=t.toLowerCase();if(e.includes("opera/")||e.includes("opr/")||e.includes("opios/"))return"Opera";if(gt(e))return"IEMobile";if(e.includes("msie")||e.includes("trident/"))return"IE";if(e.includes("edge/"))return"Edge";if(pt(e))return"Firefox";if(e.includes("silk/"))return"Silk";if(yt(e))return"Blackberry";if(bt(e))return"Webos";if(mt(e))return"Safari";if((e.includes("chrome/")||vt(e))&&!e.includes("edge/"))return"Chrome";if(_t(e))return"Android";{const e=/([a-zA-Z\d\.]+)\/[a-zA-Z\d\.]*$/,n=t.match(e);if(2===(null===n||void 0===n?void 0:n.length))return n[1]}return"Other"}function pt(t=(0,a.z$)()){return/firefox\//i.test(t)}function mt(t=(0,a.z$)()){const e=t.toLowerCase();return e.includes("safari/")&&!e.includes("chrome/")&&!e.includes("crios/")&&!e.includes("android")}function vt(t=(0,a.z$)()){return/crios\//i.test(t)}function gt(t=(0,a.z$)()){return/iemobile/i.test(t)}function _t(t=(0,a.z$)()){return/android/i.test(t)}function yt(t=(0,a.z$)()){return/blackberry/i.test(t)}function bt(t=(0,a.z$)()){return/webos/i.test(t)}function Mt(t=(0,a.z$)()){return/iphone|ipad|ipod/i.test(t)||/macintosh/i.test(t)&&/mobile/i.test(t)}function zt(t=(0,a.z$)()){var e;return Mt(t)&&!!(null===(e=window.navigator)||void 0===e?void 0:e.standalone)}function wt(){return(0,a.w1)()&&10===document.documentMode}function Lt(t=(0,a.z$)()){return Mt(t)||_t(t)||bt(t)||yt(t)||/windows phone/i.test(t)||gt(t)}function kt(){try{return!(!window||window===window.top)}catch(t){return!1}}
/**
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
 */function Ht(t,e=[]){let n;switch(t){case"Browser":n=ft((0,a.z$)());break;case"Worker":n=`${ft((0,a.z$)())}-${t}`;break;default:n=t}const i=e.length?e.join(","):"FirebaseCore-web";return`${n}/JsCore/${r.Jn}/${i}`}
/**
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
 */class Tt{constructor(t){this.auth=t,this.queue=[]}pushCallback(t,e){const n=e=>new Promise(((n,a)=>{try{const a=t(e);n(a)}catch(r){a(r)}}));n.onAbort=e,this.queue.push(n);const a=this.queue.length-1;return()=>{this.queue[a]=()=>Promise.resolve()}}async runMiddleware(t){if(this.auth.currentUser===t)return;const e=[];try{for(const n of this.queue)await n(t),n.onAbort&&e.push(n.onAbort)}catch(n){e.reverse();for(const t of e)try{t()}catch(a){}throw this.auth._errorFactory.create("login-blocked",{originalMessage:null===n||void 0===n?void 0:n.message})}}}
/**
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
 */async function St(t,e={}){return P(t,"GET","/v2/passwordPolicy",I(t,e))}
/**
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
 */const At=6;class Ot{constructor(t){var e,n,a,r;const i=t.customStrengthOptions;this.customStrengthOptions={},this.customStrengthOptions.minPasswordLength=null!==(e=i.minPasswordLength)&&void 0!==e?e:At,i.maxPasswordLength&&(this.customStrengthOptions.maxPasswordLength=i.maxPasswordLength),void 0!==i.containsLowercaseCharacter&&(this.customStrengthOptions.containsLowercaseLetter=i.containsLowercaseCharacter),void 0!==i.containsUppercaseCharacter&&(this.customStrengthOptions.containsUppercaseLetter=i.containsUppercaseCharacter),void 0!==i.containsNumericCharacter&&(this.customStrengthOptions.containsNumericCharacter=i.containsNumericCharacter),void 0!==i.containsNonAlphanumericCharacter&&(this.customStrengthOptions.containsNonAlphanumericCharacter=i.containsNonAlphanumericCharacter),this.enforcementState=t.enforcementState,"ENFORCEMENT_STATE_UNSPECIFIED"===this.enforcementState&&(this.enforcementState="OFF"),this.allowedNonAlphanumericCharacters=null!==(a=null===(n=t.allowedNonAlphanumericCharacters)||void 0===n?void 0:n.join(""))&&void 0!==a?a:"",this.forceUpgradeOnSignin=null!==(r=t.forceUpgradeOnSignin)&&void 0!==r&&r,this.schemaVersion=t.schemaVersion}validatePassword(t){var e,n,a,r,i,o;const s={isValid:!0,passwordPolicy:this};return this.validatePasswordLengthOptions(t,s),this.validatePasswordCharacterOptions(t,s),s.isValid&&(s.isValid=null===(e=s.meetsMinPasswordLength)||void 0===e||e),s.isValid&&(s.isValid=null===(n=s.meetsMaxPasswordLength)||void 0===n||n),s.isValid&&(s.isValid=null===(a=s.containsLowercaseLetter)||void 0===a||a),s.isValid&&(s.isValid=null===(r=s.containsUppercaseLetter)||void 0===r||r),s.isValid&&(s.isValid=null===(i=s.containsNumericCharacter)||void 0===i||i),s.isValid&&(s.isValid=null===(o=s.containsNonAlphanumericCharacter)||void 0===o||o),s}validatePasswordLengthOptions(t,e){const n=this.customStrengthOptions.minPasswordLength,a=this.customStrengthOptions.maxPasswordLength;n&&(e.meetsMinPasswordLength=t.length>=n),a&&(e.meetsMaxPasswordLength=t.length<=a)}validatePasswordCharacterOptions(t,e){let n;this.updatePasswordCharacterOptionsStatuses(e,!1,!1,!1,!1);for(let a=0;a<t.length;a++)n=t.charAt(a),this.updatePasswordCharacterOptionsStatuses(e,n>="a"&&n<="z",n>="A"&&n<="Z",n>="0"&&n<="9",this.allowedNonAlphanumericCharacters.includes(n))}updatePasswordCharacterOptionsStatuses(t,e,n,a,r){this.customStrengthOptions.containsLowercaseLetter&&(t.containsLowercaseLetter||(t.containsLowercaseLetter=e)),this.customStrengthOptions.containsUppercaseLetter&&(t.containsUppercaseLetter||(t.containsUppercaseLetter=n)),this.customStrengthOptions.containsNumericCharacter&&(t.containsNumericCharacter||(t.containsNumericCharacter=a)),this.customStrengthOptions.containsNonAlphanumericCharacter&&(t.containsNonAlphanumericCharacter||(t.containsNonAlphanumericCharacter=r))}}
/**
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
 */class Dt{constructor(t,e,n,a){this.app=t,this.heartbeatServiceProvider=e,this.appCheckServiceProvider=n,this.config=a,this.currentUser=null,this.emulatorConfig=null,this.operations=Promise.resolve(),this.authStateSubscription=new Ct(this),this.idTokenSubscription=new Ct(this),this.beforeStateQueue=new Tt(this),this.redirectUser=null,this.isProactiveRefreshEnabled=!1,this.EXPECTED_PASSWORD_POLICY_SCHEMA_VERSION=1,this._canInitEmulator=!0,this._isInitialized=!1,this._deleted=!1,this._initializationPromise=null,this._popupRedirectResolver=null,this._errorFactory=d,this._agentRecaptchaConfig=null,this._tenantRecaptchaConfigs={},this._projectPasswordPolicy=null,this._tenantPasswordPolicies={},this.lastNotifiedUid=void 0,this.languageCode=null,this.tenantId=null,this.settings={appVerificationDisabledForTesting:!1},this.frameworks=[],this.name=t.name,this.clientVersion=a.sdkClientVersion}_initializeWithPersistence(t,e){return e&&(this._popupRedirectResolver=lt(e)),this._initializationPromise=this.queue((async()=>{var n,a;if(!this._deleted&&(this.persistenceManager=await dt.create(this,t),!this._deleted)){if(null===(n=this._popupRedirectResolver)||void 0===n?void 0:n._shouldInitProactively)try{await this._popupRedirectResolver._initialize(this)}catch(r){}await this.initializeCurrentUser(e),this.lastNotifiedUid=(null===(a=this.currentUser)||void 0===a?void 0:a.uid)||null,this._deleted||(this._isInitialized=!0)}})),this._initializationPromise}async _onStorageEvent(){if(this._deleted)return;const t=await this.assertedPersistence.getCurrentUser();return this.currentUser||t?this.currentUser&&t&&this.currentUser.uid===t.uid?(this._currentUser._assign(t),void await this.currentUser.getIdToken()):void await this._updateCurrentUser(t,!0):void 0}async initializeCurrentUser(t){var e;const n=await this.assertedPersistence.getCurrentUser();let a=n,r=!1;if(t&&this.config.authDomain){await this.getOrInitRedirectPersistenceManager();const n=null===(e=this.redirectUser)||void 0===e?void 0:e._redirectEventId,i=null===a||void 0===a?void 0:a._redirectEventId,o=await this.tryRedirectSignIn(t);n&&n!==i||!(null===o||void 0===o?void 0:o.user)||(a=o.user,r=!0)}if(!a)return this.directlySetCurrentUser(null);if(!a._redirectEventId){if(r)try{await this.beforeStateQueue.runMiddleware(a)}catch(i){a=n,this._popupRedirectResolver._overrideRedirectResult(this,(()=>Promise.reject(i)))}return a?this.reloadAndSetCurrentUserOrClear(a):this.directlySetCurrentUser(null)}return M(this._popupRedirectResolver,this,"argument-error"),await this.getOrInitRedirectPersistenceManager(),this.redirectUser&&this.redirectUser._redirectEventId===a._redirectEventId?this.directlySetCurrentUser(a):this.reloadAndSetCurrentUserOrClear(a)}async tryRedirectSignIn(t){let e=null;try{e=await this._popupRedirectResolver._completeRedirectFn(this,t,!0)}catch(n){await this._setRedirectUser(null)}return e}async reloadAndSetCurrentUserOrClear(t){try{await Z(t)}catch(e){if("auth/network-request-failed"!==(null===e||void 0===e?void 0:e.code))return this.directlySetCurrentUser(null)}return this.directlySetCurrentUser(t)}useDeviceLanguage(){this.languageCode=S()}async _delete(){this._deleted=!0}async updateCurrentUser(t){const e=t?(0,a.m9)(t):null;return e&&M(e.auth.config.apiKey===this.config.apiKey,this,"invalid-user-token"),this._updateCurrentUser(e&&e._clone(this))}async _updateCurrentUser(t,e=!1){if(!this._deleted)return t&&M(this.tenantId===t.tenantId,this,"tenant-id-mismatch"),e||await this.beforeStateQueue.runMiddleware(t),this.queue((async()=>{await this.directlySetCurrentUser(t),this.notifyAuthListeners()}))}async signOut(){return await this.beforeStateQueue.runMiddleware(null),(this.redirectPersistenceManager||this._popupRedirectResolver)&&await this._setRedirectUser(null),this._updateCurrentUser(null,!0)}setPersistence(t){return this.queue((async()=>{await this.assertedPersistence.setPersistence(lt(t))}))}_getRecaptchaConfig(){return null==this.tenantId?this._agentRecaptchaConfig:this._tenantRecaptchaConfigs[this.tenantId]}async validatePassword(t){this._getPasswordPolicyInternal()||await this._updatePasswordPolicy();const e=this._getPasswordPolicyInternal();return e.schemaVersion!==this.EXPECTED_PASSWORD_POLICY_SCHEMA_VERSION?Promise.reject(this._errorFactory.create("unsupported-password-policy-schema-version",{})):e.validatePassword(t)}_getPasswordPolicyInternal(){return null===this.tenantId?this._projectPasswordPolicy:this._tenantPasswordPolicies[this.tenantId]}async _updatePasswordPolicy(){const t=await St(this),e=new Ot(t);null===this.tenantId?this._projectPasswordPolicy=e:this._tenantPasswordPolicies[this.tenantId]=e}_getPersistence(){return this.assertedPersistence.persistence.type}_updateErrorMap(t){this._errorFactory=new a.LL("auth","Firebase",t())}onAuthStateChanged(t,e,n){return this.registerStateListener(this.authStateSubscription,t,e,n)}beforeAuthStateChanged(t,e){return this.beforeStateQueue.pushCallback(t,e)}onIdTokenChanged(t,e,n){return this.registerStateListener(this.idTokenSubscription,t,e,n)}authStateReady(){return new Promise(((t,e)=>{if(this.currentUser)t();else{const n=this.onAuthStateChanged((()=>{n(),t()}),e)}}))}toJSON(){var t;return{apiKey:this.config.apiKey,authDomain:this.config.authDomain,appName:this.name,currentUser:null===(t=this._currentUser)||void 0===t?void 0:t.toJSON()}}async _setRedirectUser(t,e){const n=await this.getOrInitRedirectPersistenceManager(e);return null===t?n.removeCurrentUser():n.setCurrentUser(t)}async getOrInitRedirectPersistenceManager(t){if(!this.redirectPersistenceManager){const e=t&&lt(t)||this._popupRedirectResolver;M(e,this,"argument-error"),this.redirectPersistenceManager=await dt.create(this,[lt(e._redirectPersistence)],"redirectUser"),this.redirectUser=await this.redirectPersistenceManager.getCurrentUser()}return this.redirectPersistenceManager}async _redirectUserForId(t){var e,n;return this._isInitialized&&await this.queue((async()=>{})),(null===(e=this._currentUser)||void 0===e?void 0:e._redirectEventId)===t?this._currentUser:(null===(n=this.redirectUser)||void 0===n?void 0:n._redirectEventId)===t?this.redirectUser:null}async _persistUserIfCurrent(t){if(t===this.currentUser)return this.queue((async()=>this.directlySetCurrentUser(t)))}_notifyListenersIfCurrent(t){t===this.currentUser&&this.notifyAuthListeners()}_key(){return`${this.config.authDomain}:${this.config.apiKey}:${this.name}`}_startProactiveRefresh(){this.isProactiveRefreshEnabled=!0,this.currentUser&&this._currentUser._startProactiveRefresh()}_stopProactiveRefresh(){this.isProactiveRefreshEnabled=!1,this.currentUser&&this._currentUser._stopProactiveRefresh()}get _currentUser(){return this.currentUser}notifyAuthListeners(){var t,e;if(!this._isInitialized)return;this.idTokenSubscription.next(this.currentUser);const n=null!==(e=null===(t=this.currentUser)||void 0===t?void 0:t.uid)&&void 0!==e?e:null;this.lastNotifiedUid!==n&&(this.lastNotifiedUid=n,this.authStateSubscription.next(this.currentUser))}registerStateListener(t,e,n,a){if(this._deleted)return()=>{};const r="function"===typeof e?e:e.next.bind(e);let i=!1;const o=this._isInitialized?Promise.resolve():this._initializationPromise;if(M(o,this,"internal-error"),o.then((()=>{i||r(this.currentUser)})),"function"===typeof e){const r=t.addObserver(e,n,a);return()=>{i=!0,r()}}{const n=t.addObserver(e);return()=>{i=!0,n()}}}async directlySetCurrentUser(t){this.currentUser&&this.currentUser!==t&&this._currentUser._stopProactiveRefresh(),t&&this.isProactiveRefreshEnabled&&t._startProactiveRefresh(),this.currentUser=t,t?await this.assertedPersistence.setCurrentUser(t):await this.assertedPersistence.removeCurrentUser()}queue(t){return this.operations=this.operations.then(t,t),this.operations}get assertedPersistence(){return M(this.persistenceManager,this,"internal-error"),this.persistenceManager}_logFramework(t){t&&!this.frameworks.includes(t)&&(this.frameworks.push(t),this.frameworks.sort(),this.clientVersion=Ht(this.config.clientPlatform,this._getFrameworks()))}_getFrameworks(){return this.frameworks}async _getAdditionalHeaders(){var t;const e={["X-Client-Version"]:this.clientVersion};this.app.options.appId&&(e["X-Firebase-gmpid"]=this.app.options.appId);const n=await(null===(t=this.heartbeatServiceProvider.getImmediate({optional:!0}))||void 0===t?void 0:t.getHeartbeatsHeader());n&&(e["X-Firebase-Client"]=n);const a=await this._getAppCheckToken();return a&&(e["X-Firebase-AppCheck"]=a),e}async _getAppCheckToken(){var t;const e=await(null===(t=this.appCheckServiceProvider.getImmediate({optional:!0}))||void 0===t?void 0:t.getToken());return(null===e||void 0===e?void 0:e.error)&&p(`Error while retrieving App Check token: ${e.error}`),null===e||void 0===e?void 0:e.token}}function Vt(t){return(0,a.m9)(t)}class Ct{constructor(t){this.auth=t,this.observer=null,this.addObserver=(0,a.ne)((t=>this.observer=t))}get next(){return M(this.observer,this.auth,"internal-error"),this.observer.next.bind(this.observer)}}
/**
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
 */function It(){var t,e;return null!==(e=null===(t=document.getElementsByTagName("head"))||void 0===t?void 0:t[0])&&void 0!==e?e:document}function Pt(t){return new Promise(((e,n)=>{const a=document.createElement("script");a.setAttribute("src",t),a.onload=e,a.onerror=t=>{const e=g("internal-error");e.customData=t,n(e)},a.type="text/javascript",a.charset="UTF-8",It().appendChild(a)}))}function Et(t){return`__${t}${Math.floor(1e6*Math.random())}`}const Bt="https://www.google.com/recaptcha/enterprise.js?render=",Ft="recaptcha-enterprise",jt="NO_RECAPTCHA";class Yt{constructor(t){this.type=Ft,this.auth=Vt(t)}async verify(t="verify",e=!1){async function n(t){if(!e){if(null==t.tenantId&&null!=t._agentRecaptchaConfig)return t._agentRecaptchaConfig.siteKey;if(null!=t.tenantId&&void 0!==t._tenantRecaptchaConfigs[t.tenantId])return t._tenantRecaptchaConfigs[t.tenantId].siteKey}return new Promise((async(e,n)=>{x(t,{clientType:"CLIENT_TYPE_WEB",version:"RECAPTCHA_ENTERPRISE"}).then((a=>{if(void 0!==a.recaptchaKey){const n=new c(a);return null==t.tenantId?t._agentRecaptchaConfig=n:t._tenantRecaptchaConfigs[t.tenantId]=n,e(n.siteKey)}n(new Error("recaptcha Enterprise site key undefined"))})).catch((t=>{n(t)}))}))}function a(e,n,a){const r=window.grecaptcha;l(r)?r.enterprise.ready((()=>{r.enterprise.execute(e,{action:t}).then((t=>{n(t)})).catch((()=>{n(jt)}))})):a(Error("No reCAPTCHA enterprise script loaded."))}return new Promise(((t,r)=>{n(this.auth).then((n=>{if(!e&&l(window.grecaptcha))a(n,t,r);else{if("undefined"===typeof window)return void r(new Error("RecaptchaVerifier is only supported in browser"));Pt(Bt+n).then((()=>{a(n,t,r)})).catch((t=>{r(t)}))}})).catch((t=>{r(t)}))}))}}async function xt(t,e,n,a=!1){const r=new Yt(t);let i;try{i=await r.verify(n)}catch(s){i=await r.verify(n,!0)}const o=Object.assign({},e);return a?Object.assign(o,{captchaResp:i}):Object.assign(o,{captchaResponse:i}),Object.assign(o,{clientType:"CLIENT_TYPE_WEB"}),Object.assign(o,{recaptchaVersion:"RECAPTCHA_ENTERPRISE"}),o}
/**
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
 */
function Nt(t,e){const n=(0,r.qX)(t,"auth");if(n.isInitialized()){const t=n.getImmediate(),r=n.getOptions();if((0,a.vZ)(r,null!==e&&void 0!==e?e:{}))return t;v(t,"already-initialized")}const i=n.initialize({options:e});return i}function Rt(t,e){const n=(null===e||void 0===e?void 0:e.persistence)||[],a=(Array.isArray(n)?n:[n]).map(lt);(null===e||void 0===e?void 0:e.errorMap)&&t._updateErrorMap(e.errorMap),t._initializeWithPersistence(a,null===e||void 0===e?void 0:e.popupRedirectResolver)}function $t(t,e,n){const a=Vt(t);M(a._canInitEmulator,a,"emulator-config-failed"),M(/^https?:\/\//.test(e),a,"invalid-emulator-scheme");const r=!!(null===n||void 0===n?void 0:n.disableWarnings),i=Ut(e),{host:o,port:s}=Wt(e),l=null===s?"":`:${s}`;a.config.emulator={url:`${i}//${o}${l}/`},a.settings.appVerificationDisabledForTesting=!0,a.emulatorConfig=Object.freeze({host:o,port:s,protocol:i.replace(":",""),options:Object.freeze({disableWarnings:r})}),r||qt()}function Ut(t){const e=t.indexOf(":");return e<0?"":t.substr(0,e+1)}function Wt(t){const e=Ut(t),n=/(\/\/)?([^?#/]+)/.exec(t.substr(e.length));if(!n)return{host:"",port:null};const a=n[2].split("@").pop()||"",r=/^(\[[^\]]+\])(:|$)/.exec(a);if(r){const t=r[1];return{host:t,port:Gt(a.substr(t.length+1))}}{const[t,e]=a.split(":");return{host:t,port:Gt(e)}}}function Gt(t){if(!t)return null;const e=Number(t);return isNaN(e)?null:e}function qt(){function t(){const t=document.createElement("p"),e=t.style;t.innerText="Running in emulator mode. Do not use with production credentials.",e.position="fixed",e.width="100%",e.backgroundColor="#ffffff",e.border=".1em solid #000000",e.color="#b50000",e.bottom="0px",e.left="0px",e.margin="0px",e.zIndex="10000",e.textAlign="center",t.classList.add("firebase-emulator-warning"),document.body.appendChild(t)}"undefined"!==typeof console&&"function"===typeof console.info&&console.info("WARNING: You are using the Auth Emulator, which is intended for local testing only.  Do not use with production credentials."),"undefined"!==typeof window&&"undefined"!==typeof document&&("loading"===document.readyState?window.addEventListener("DOMContentLoaded",t):t())}
/**
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
 */class Kt{constructor(t,e){this.providerId=t,this.signInMethod=e}toJSON(){return z("not implemented")}_getIdTokenResponse(t){return z("not implemented")}_linkToIdToken(t,e){return z("not implemented")}_getReauthenticationResolver(t){return z("not implemented")}}
/**
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
 */async function Jt(t,e){return P(t,"POST","/v1/accounts:update",e)}
/**
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
 */
async function Xt(t,e){return B(t,"POST","/v1/accounts:signInWithPassword",I(t,e))}
/**
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
 */
async function Qt(t,e){return B(t,"POST","/v1/accounts:signInWithEmailLink",I(t,e))}async function Zt(t,e){return B(t,"POST","/v1/accounts:signInWithEmailLink",I(t,e))}
/**
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
 */class te extends Kt{constructor(t,e,n,a=null){super("password",n),this._email=t,this._password=e,this._tenantId=a}static _fromEmailAndPassword(t,e){return new te(t,e,"password")}static _fromEmailAndCode(t,e,n=null){return new te(t,e,"emailLink",n)}toJSON(){return{email:this._email,password:this._password,signInMethod:this.signInMethod,tenantId:this._tenantId}}static fromJSON(t){const e="string"===typeof t?JSON.parse(t):t;if((null===e||void 0===e?void 0:e.email)&&(null===e||void 0===e?void 0:e.password)){if("password"===e.signInMethod)return this._fromEmailAndPassword(e.email,e.password);if("emailLink"===e.signInMethod)return this._fromEmailAndCode(e.email,e.password,e.tenantId)}return null}async _getIdTokenResponse(t){var e;switch(this.signInMethod){case"password":const n={returnSecureToken:!0,email:this._email,password:this._password,clientType:"CLIENT_TYPE_WEB"};if(null===(e=t._getRecaptchaConfig())||void 0===e?void 0:e.emailPasswordEnabled){const e=await xt(t,n,"signInWithPassword");return Xt(t,e)}return Xt(t,n).catch((async e=>{if("auth/missing-recaptcha-token"===e.code){console.log("Sign-in with email address and password is protected by reCAPTCHA for this project. Automatically triggering the reCAPTCHA flow and restarting the sign-in flow.");const e=await xt(t,n,"signInWithPassword");return Xt(t,e)}return Promise.reject(e)}));case"emailLink":return Qt(t,{email:this._email,oobCode:this._password});default:v(t,"internal-error")}}async _linkToIdToken(t,e){switch(this.signInMethod){case"password":return Jt(t,{idToken:e,returnSecureToken:!0,email:this._email,password:this._password});case"emailLink":return Zt(t,{idToken:e,email:this._email,oobCode:this._password});default:v(t,"internal-error")}}_getReauthenticationResolver(t){return this._getIdTokenResponse(t)}}
/**
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
 */async function ee(t,e){return B(t,"POST","/v1/accounts:signInWithIdp",I(t,e))}
/**
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
 */const ne="http://localhost";class ae extends Kt{constructor(){super(...arguments),this.pendingToken=null}static _fromParams(t){const e=new ae(t.providerId,t.signInMethod);return t.idToken||t.accessToken?(t.idToken&&(e.idToken=t.idToken),t.accessToken&&(e.accessToken=t.accessToken),t.nonce&&!t.pendingToken&&(e.nonce=t.nonce),t.pendingToken&&(e.pendingToken=t.pendingToken)):t.oauthToken&&t.oauthTokenSecret?(e.accessToken=t.oauthToken,e.secret=t.oauthTokenSecret):v("argument-error"),e}toJSON(){return{idToken:this.idToken,accessToken:this.accessToken,secret:this.secret,nonce:this.nonce,pendingToken:this.pendingToken,providerId:this.providerId,signInMethod:this.signInMethod}}static fromJSON(t){const e="string"===typeof t?JSON.parse(t):t,{providerId:n,signInMethod:a}=e,r=o(e,["providerId","signInMethod"]);if(!n||!a)return null;const i=new ae(n,a);return i.idToken=r.idToken||void 0,i.accessToken=r.accessToken||void 0,i.secret=r.secret,i.nonce=r.nonce,i.pendingToken=r.pendingToken||null,i}_getIdTokenResponse(t){const e=this.buildRequest();return ee(t,e)}_linkToIdToken(t,e){const n=this.buildRequest();return n.idToken=e,ee(t,n)}_getReauthenticationResolver(t){const e=this.buildRequest();return e.autoCreate=!1,ee(t,e)}buildRequest(){const t={requestUri:ne,returnSecureToken:!0};if(this.pendingToken)t.pendingToken=this.pendingToken;else{const e={};this.idToken&&(e["id_token"]=this.idToken),this.accessToken&&(e["access_token"]=this.accessToken),this.secret&&(e["oauth_token_secret"]=this.secret),e["providerId"]=this.providerId,this.nonce&&!this.pendingToken&&(e["nonce"]=this.nonce),t.postBody=(0,a.xO)(e)}return t}}
/**
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
 */async function re(t,e){return P(t,"POST","/v1/accounts:sendVerificationCode",I(t,e))}async function ie(t,e){return B(t,"POST","/v1/accounts:signInWithPhoneNumber",I(t,e))}async function oe(t,e){const n=await B(t,"POST","/v1/accounts:signInWithPhoneNumber",I(t,e));if(n.temporaryProof)throw Y(t,"account-exists-with-different-credential",n);return n}const se={["USER_NOT_FOUND"]:"user-not-found"};async function le(t,e){const n=Object.assign(Object.assign({},e),{operation:"REAUTH"});return B(t,"POST","/v1/accounts:signInWithPhoneNumber",I(t,n),se)}
/**
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
 */class ce extends Kt{constructor(t){super("phone","phone"),this.params=t}static _fromVerification(t,e){return new ce({verificationId:t,verificationCode:e})}static _fromTokenResponse(t,e){return new ce({phoneNumber:t,temporaryProof:e})}_getIdTokenResponse(t){return ie(t,this._makeVerificationRequest())}_linkToIdToken(t,e){return oe(t,Object.assign({idToken:e},this._makeVerificationRequest()))}_getReauthenticationResolver(t){return le(t,this._makeVerificationRequest())}_makeVerificationRequest(){const{temporaryProof:t,phoneNumber:e,verificationId:n,verificationCode:a}=this.params;return t&&e?{temporaryProof:t,phoneNumber:e}:{sessionInfo:n,code:a}}toJSON(){const t={providerId:this.providerId};return this.params.phoneNumber&&(t.phoneNumber=this.params.phoneNumber),this.params.temporaryProof&&(t.temporaryProof=this.params.temporaryProof),this.params.verificationCode&&(t.verificationCode=this.params.verificationCode),this.params.verificationId&&(t.verificationId=this.params.verificationId),t}static fromJSON(t){"string"===typeof t&&(t=JSON.parse(t));const{verificationId:e,verificationCode:n,phoneNumber:a,temporaryProof:r}=t;return n||e||a||r?new ce({verificationId:e,verificationCode:n,phoneNumber:a,temporaryProof:r}):null}}
/**
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
 */function ue(t){switch(t){case"recoverEmail":return"RECOVER_EMAIL";case"resetPassword":return"PASSWORD_RESET";case"signIn":return"EMAIL_SIGNIN";case"verifyEmail":return"VERIFY_EMAIL";case"verifyAndChangeEmail":return"VERIFY_AND_CHANGE_EMAIL";case"revertSecondFactorAddition":return"REVERT_SECOND_FACTOR_ADDITION";default:return null}}function he(t){const e=(0,a.zd)((0,a.pd)(t))["link"],n=e?(0,a.zd)((0,a.pd)(e))["deep_link_id"]:null,r=(0,a.zd)((0,a.pd)(t))["deep_link_id"],i=r?(0,a.zd)((0,a.pd)(r))["link"]:null;return i||r||n||e||t}class de{constructor(t){var e,n,r,i,o,s;const l=(0,a.zd)((0,a.pd)(t)),c=null!==(e=l["apiKey"])&&void 0!==e?e:null,u=null!==(n=l["oobCode"])&&void 0!==n?n:null,h=ue(null!==(r=l["mode"])&&void 0!==r?r:null);M(c&&u&&h,"argument-error"),this.apiKey=c,this.operation=h,this.code=u,this.continueUrl=null!==(i=l["continueUrl"])&&void 0!==i?i:null,this.languageCode=null!==(o=l["languageCode"])&&void 0!==o?o:null,this.tenantId=null!==(s=l["tenantId"])&&void 0!==s?s:null}static parseLink(t){const e=he(t);try{return new de(e)}catch(n){return null}}}
/**
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
 */
class fe{constructor(){this.providerId=fe.PROVIDER_ID}static credential(t,e){return te._fromEmailAndPassword(t,e)}static credentialWithLink(t,e){const n=de.parseLink(e);return M(n,"argument-error"),te._fromEmailAndCode(t,n.code,n.tenantId)}}fe.PROVIDER_ID="password",fe.EMAIL_PASSWORD_SIGN_IN_METHOD="password",fe.EMAIL_LINK_SIGN_IN_METHOD="emailLink";
/**
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
 */
class pe{constructor(t){this.providerId=t,this.defaultLanguageCode=null,this.customParameters={}}setDefaultLanguage(t){this.defaultLanguageCode=t}setCustomParameters(t){return this.customParameters=t,this}getCustomParameters(){return this.customParameters}}
/**
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
 */class me extends pe{constructor(){super(...arguments),this.scopes=[]}addScope(t){return this.scopes.includes(t)||this.scopes.push(t),this}getScopes(){return[...this.scopes]}}
/**
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
 */
class ve extends me{constructor(){super("facebook.com")}static credential(t){return ae._fromParams({providerId:ve.PROVIDER_ID,signInMethod:ve.FACEBOOK_SIGN_IN_METHOD,accessToken:t})}static credentialFromResult(t){return ve.credentialFromTaggedObject(t)}static credentialFromError(t){return ve.credentialFromTaggedObject(t.customData||{})}static credentialFromTaggedObject({_tokenResponse:t}){if(!t||!("oauthAccessToken"in t))return null;if(!t.oauthAccessToken)return null;try{return ve.credential(t.oauthAccessToken)}catch(e){return null}}}ve.FACEBOOK_SIGN_IN_METHOD="facebook.com",ve.PROVIDER_ID="facebook.com";
/**
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
 */
class ge extends me{constructor(){super("google.com"),this.addScope("profile")}static credential(t,e){return ae._fromParams({providerId:ge.PROVIDER_ID,signInMethod:ge.GOOGLE_SIGN_IN_METHOD,idToken:t,accessToken:e})}static credentialFromResult(t){return ge.credentialFromTaggedObject(t)}static credentialFromError(t){return ge.credentialFromTaggedObject(t.customData||{})}static credentialFromTaggedObject({_tokenResponse:t}){if(!t)return null;const{oauthIdToken:e,oauthAccessToken:n}=t;if(!e&&!n)return null;try{return ge.credential(e,n)}catch(a){return null}}}ge.GOOGLE_SIGN_IN_METHOD="google.com",ge.PROVIDER_ID="google.com";
/**
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
 */
class _e extends me{constructor(){super("github.com")}static credential(t){return ae._fromParams({providerId:_e.PROVIDER_ID,signInMethod:_e.GITHUB_SIGN_IN_METHOD,accessToken:t})}static credentialFromResult(t){return _e.credentialFromTaggedObject(t)}static credentialFromError(t){return _e.credentialFromTaggedObject(t.customData||{})}static credentialFromTaggedObject({_tokenResponse:t}){if(!t||!("oauthAccessToken"in t))return null;if(!t.oauthAccessToken)return null;try{return _e.credential(t.oauthAccessToken)}catch(e){return null}}}_e.GITHUB_SIGN_IN_METHOD="github.com",_e.PROVIDER_ID="github.com";
/**
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
 */
class ye extends me{constructor(){super("twitter.com")}static credential(t,e){return ae._fromParams({providerId:ye.PROVIDER_ID,signInMethod:ye.TWITTER_SIGN_IN_METHOD,oauthToken:t,oauthTokenSecret:e})}static credentialFromResult(t){return ye.credentialFromTaggedObject(t)}static credentialFromError(t){return ye.credentialFromTaggedObject(t.customData||{})}static credentialFromTaggedObject({_tokenResponse:t}){if(!t)return null;const{oauthAccessToken:e,oauthTokenSecret:n}=t;if(!e||!n)return null;try{return ye.credential(e,n)}catch(a){return null}}}
/**
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
 */
async function be(t,e){return B(t,"POST","/v1/accounts:signUp",I(t,e))}
/**
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
 */ye.TWITTER_SIGN_IN_METHOD="twitter.com",ye.PROVIDER_ID="twitter.com";class Me{constructor(t){this.user=t.user,this.providerId=t.providerId,this._tokenResponse=t._tokenResponse,this.operationType=t.operationType}static async _fromIdTokenResponse(t,e,n,a=!1){const r=await ot._fromIdTokenResponse(t,n,a),i=ze(n),o=new Me({user:r,providerId:i,_tokenResponse:n,operationType:e});return o}static async _forOperation(t,e,n){await t._updateTokensIfNecessary(n,!0);const a=ze(n);return new Me({user:t,providerId:a,_tokenResponse:n,operationType:e})}}function ze(t){return t.providerId?t.providerId:"phoneNumber"in t?"phone":null}
/**
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
 */
/**
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
 */
class we extends a.ZR{constructor(t,e,n,a){var r;super(e.code,e.message),this.operationType=n,this.user=a,Object.setPrototypeOf(this,we.prototype),this.customData={appName:t.name,tenantId:null!==(r=t.tenantId)&&void 0!==r?r:void 0,_serverResponse:e.customData._serverResponse,operationType:n}}static _fromErrorAndOperation(t,e,n,a){return new we(t,e,n,a)}}function Le(t,e,n,a){const r="reauthenticate"===e?n._getReauthenticationResolver(t):n._getIdTokenResponse(t);return r.catch((n=>{if("auth/multi-factor-auth-required"===n.code)throw we._fromErrorAndOperation(t,n,e,a);throw n}))}
/**
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
 */async function ke(t,e,n=!1){const a=await K(t,e._linkToIdToken(t.auth,await t.getIdToken()),n);return Me._forOperation(t,"link",a)}
/**
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
 */
async function He(t,e,n=!1){const{auth:a}=t,r="reauthenticate";try{const i=await K(t,Le(a,r,e,t),n);M(i.idToken,a,"internal-error");const o=G(i.idToken);M(o,a,"internal-error");const{sub:s}=o;return M(t.uid===s,a,"user-mismatch"),Me._forOperation(t,r,i)}catch(i){throw"auth/user-not-found"===(null===i||void 0===i?void 0:i.code)&&v(a,"user-mismatch"),i}}
/**
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
 */async function Te(t,e,n=!1){const a="signIn",r=await Le(t,a,e),i=await Me._fromIdTokenResponse(t,a,r);return n||await t._updateCurrentUser(i.user),i}async function Se(t,e){return Te(Vt(t),e)}
/**
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
 */
async function Ae(t){const e=Vt(t);e._getPasswordPolicyInternal()&&await e._updatePasswordPolicy()}async function Oe(t,e,n){var a;const r=Vt(t),i={returnSecureToken:!0,email:e,password:n,clientType:"CLIENT_TYPE_WEB"};let o;if(null===(a=r._getRecaptchaConfig())||void 0===a?void 0:a.emailPasswordEnabled){const t=await xt(r,i,"signUpPassword");o=be(r,t)}else o=be(r,i).catch((async t=>{if("auth/missing-recaptcha-token"===t.code){console.log("Sign-up is protected by reCAPTCHA for this project. Automatically triggering the reCAPTCHA flow and restarting the sign-up flow.");const t=await xt(r,i,"signUpPassword");return be(r,t)}throw t}));const s=await o.catch((e=>{throw"auth/password-does-not-meet-requirements"===e.code&&Ae(t),e})),l=await Me._fromIdTokenResponse(r,"signIn",s);return await r._updateCurrentUser(l.user),l}function De(t,e,n){return Se((0,a.m9)(t),fe.credential(e,n)).catch((async e=>{throw"auth/password-does-not-meet-requirements"===e.code&&Ae(t),e}))}
/**
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
 */function Ve(t,e,n,r){return(0,a.m9)(t).onIdTokenChanged(e,n,r)}function Ce(t,e,n){return(0,a.m9)(t).beforeAuthStateChanged(e,n)}function Ie(t,e,n,r){return(0,a.m9)(t).onAuthStateChanged(e,n,r)}function Pe(t){return(0,a.m9)(t).signOut()}
/**
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
 */
function Ee(t,e){return P(t,"POST","/v2/accounts/mfaEnrollment:start",I(t,e))}function Be(t,e){return P(t,"POST","/v2/accounts/mfaEnrollment:finalize",I(t,e))}function Fe(t,e){return P(t,"POST","/v2/accounts/mfaEnrollment:start",I(t,e))}function je(t,e){return P(t,"POST","/v2/accounts/mfaEnrollment:finalize",I(t,e))}new WeakMap;const Ye="__sak";
/**
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
 */class xe{constructor(t,e){this.storageRetriever=t,this.type=e}_isAvailable(){try{return this.storage?(this.storage.setItem(Ye,"1"),this.storage.removeItem(Ye),Promise.resolve(!0)):Promise.resolve(!1)}catch(t){return Promise.resolve(!1)}}_set(t,e){return this.storage.setItem(t,JSON.stringify(e)),Promise.resolve()}_get(t){const e=this.storage.getItem(t);return Promise.resolve(e?JSON.parse(e):null)}_remove(t){return this.storage.removeItem(t),Promise.resolve()}get storage(){return this.storageRetriever()}}
/**
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
 */function Ne(){const t=(0,a.z$)();return mt(t)||Mt(t)}const Re=1e3,$e=10;class Ue extends xe{constructor(){super((()=>window.localStorage),"LOCAL"),this.boundEventHandler=(t,e)=>this.onStorageEvent(t,e),this.listeners={},this.localCache={},this.pollTimer=null,this.safariLocalStorageNotSynced=Ne()&&kt(),this.fallbackToPolling=Lt(),this._shouldAllowMigration=!0}forAllChangedKeys(t){for(const e of Object.keys(this.listeners)){const n=this.storage.getItem(e),a=this.localCache[e];n!==a&&t(e,a,n)}}onStorageEvent(t,e=!1){if(!t.key)return void this.forAllChangedKeys(((t,e,n)=>{this.notifyListeners(t,n)}));const n=t.key;if(e?this.detachListener():this.stopPolling(),this.safariLocalStorageNotSynced){const a=this.storage.getItem(n);if(t.newValue!==a)null!==t.newValue?this.storage.setItem(n,t.newValue):this.storage.removeItem(n);else if(this.localCache[n]===t.newValue&&!e)return}const a=()=>{const t=this.storage.getItem(n);(e||this.localCache[n]!==t)&&this.notifyListeners(n,t)},r=this.storage.getItem(n);wt()&&r!==t.newValue&&t.newValue!==t.oldValue?setTimeout(a,$e):a()}notifyListeners(t,e){this.localCache[t]=e;const n=this.listeners[t];if(n)for(const a of Array.from(n))a(e?JSON.parse(e):e)}startPolling(){this.stopPolling(),this.pollTimer=setInterval((()=>{this.forAllChangedKeys(((t,e,n)=>{this.onStorageEvent(new StorageEvent("storage",{key:t,oldValue:e,newValue:n}),!0)}))}),Re)}stopPolling(){this.pollTimer&&(clearInterval(this.pollTimer),this.pollTimer=null)}attachListener(){window.addEventListener("storage",this.boundEventHandler)}detachListener(){window.removeEventListener("storage",this.boundEventHandler)}_addListener(t,e){0===Object.keys(this.listeners).length&&(this.fallbackToPolling?this.startPolling():this.attachListener()),this.listeners[t]||(this.listeners[t]=new Set,this.localCache[t]=this.storage.getItem(t)),this.listeners[t].add(e)}_removeListener(t,e){this.listeners[t]&&(this.listeners[t].delete(e),0===this.listeners[t].size&&delete this.listeners[t]),0===Object.keys(this.listeners).length&&(this.detachListener(),this.stopPolling())}async _set(t,e){await super._set(t,e),this.localCache[t]=JSON.stringify(e)}async _get(t){const e=await super._get(t);return this.localCache[t]=JSON.stringify(e),e}async _remove(t){await super._remove(t),delete this.localCache[t]}}Ue.type="LOCAL";const We=Ue;
/**
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
 */class Ge extends xe{constructor(){super((()=>window.sessionStorage),"SESSION")}_addListener(t,e){}_removeListener(t,e){}}Ge.type="SESSION";const qe=Ge;
/**
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
 */function Ke(t){return Promise.all(t.map((async t=>{try{const e=await t;return{fulfilled:!0,value:e}}catch(e){return{fulfilled:!1,reason:e}}})))}
/**
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
 */class Je{constructor(t){this.eventTarget=t,this.handlersMap={},this.boundEventHandler=this.handleEvent.bind(this)}static _getInstance(t){const e=this.receivers.find((e=>e.isListeningto(t)));if(e)return e;const n=new Je(t);return this.receivers.push(n),n}isListeningto(t){return this.eventTarget===t}async handleEvent(t){const e=t,{eventId:n,eventType:a,data:r}=e.data,i=this.handlersMap[a];if(!(null===i||void 0===i?void 0:i.size))return;e.ports[0].postMessage({status:"ack",eventId:n,eventType:a});const o=Array.from(i).map((async t=>t(e.origin,r))),s=await Ke(o);e.ports[0].postMessage({status:"done",eventId:n,eventType:a,response:s})}_subscribe(t,e){0===Object.keys(this.handlersMap).length&&this.eventTarget.addEventListener("message",this.boundEventHandler),this.handlersMap[t]||(this.handlersMap[t]=new Set),this.handlersMap[t].add(e)}_unsubscribe(t,e){this.handlersMap[t]&&e&&this.handlersMap[t].delete(e),e&&0!==this.handlersMap[t].size||delete this.handlersMap[t],0===Object.keys(this.handlersMap).length&&this.eventTarget.removeEventListener("message",this.boundEventHandler)}}
/**
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
 */
function Xe(t="",e=10){let n="";for(let a=0;a<e;a++)n+=Math.floor(10*Math.random());return t+n}
/**
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
 */Je.receivers=[];class Qe{constructor(t){this.target=t,this.handlers=new Set}removeMessageHandler(t){t.messageChannel&&(t.messageChannel.port1.removeEventListener("message",t.onMessage),t.messageChannel.port1.close()),this.handlers.delete(t)}async _send(t,e,n=50){const a="undefined"!==typeof MessageChannel?new MessageChannel:null;if(!a)throw new Error("connection_unavailable");let r,i;return new Promise(((o,s)=>{const l=Xe("",20);a.port1.start();const c=setTimeout((()=>{s(new Error("unsupported_event"))}),n);i={messageChannel:a,onMessage(t){const e=t;if(e.data.eventId===l)switch(e.data.status){case"ack":clearTimeout(c),r=setTimeout((()=>{s(new Error("timeout"))}),3e3);break;case"done":clearTimeout(r),o(e.data.response);break;default:clearTimeout(c),clearTimeout(r),s(new Error("invalid_response"));break}}},this.handlers.add(i),a.port1.addEventListener("message",i.onMessage),this.target.postMessage({eventType:t,eventId:l,data:e},[a.port2])})).finally((()=>{i&&this.removeMessageHandler(i)}))}}
/**
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
 */function Ze(){return window}function tn(t){Ze().location.href=t}
/**
 * @license
 * Copyright 2020 Google LLC.
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
 */function en(){return"undefined"!==typeof Ze()["WorkerGlobalScope"]&&"function"===typeof Ze()["importScripts"]}async function nn(){if(!(null===navigator||void 0===navigator?void 0:navigator.serviceWorker))return null;try{const t=await navigator.serviceWorker.ready;return t.active}catch(t){return null}}function an(){var t;return(null===(t=null===navigator||void 0===navigator?void 0:navigator.serviceWorker)||void 0===t?void 0:t.controller)||null}function rn(){return en()?self:null}
/**
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
 */const on="firebaseLocalStorageDb",sn=1,ln="firebaseLocalStorage",cn="fbase_key";class un{constructor(t){this.request=t}toPromise(){return new Promise(((t,e)=>{this.request.addEventListener("success",(()=>{t(this.request.result)})),this.request.addEventListener("error",(()=>{e(this.request.error)}))}))}}function hn(t,e){return t.transaction([ln],e?"readwrite":"readonly").objectStore(ln)}function dn(){const t=indexedDB.deleteDatabase(on);return new un(t).toPromise()}function fn(){const t=indexedDB.open(on,sn);return new Promise(((e,n)=>{t.addEventListener("error",(()=>{n(t.error)})),t.addEventListener("upgradeneeded",(()=>{const e=t.result;try{e.createObjectStore(ln,{keyPath:cn})}catch(a){n(a)}})),t.addEventListener("success",(async()=>{const n=t.result;n.objectStoreNames.contains(ln)?e(n):(n.close(),await dn(),e(await fn()))}))}))}async function pn(t,e,n){const a=hn(t,!0).put({[cn]:e,value:n});return new un(a).toPromise()}async function mn(t,e){const n=hn(t,!1).get(e),a=await new un(n).toPromise();return void 0===a?null:a.value}function vn(t,e){const n=hn(t,!0).delete(e);return new un(n).toPromise()}const gn=800,_n=3;class yn{constructor(){this.type="LOCAL",this._shouldAllowMigration=!0,this.listeners={},this.localCache={},this.pollTimer=null,this.pendingWrites=0,this.receiver=null,this.sender=null,this.serviceWorkerReceiverAvailable=!1,this.activeServiceWorker=null,this._workerInitializationPromise=this.initializeServiceWorkerMessaging().then((()=>{}),(()=>{}))}async _openDb(){return this.db||(this.db=await fn()),this.db}async _withRetries(t){let e=0;while(1)try{const e=await this._openDb();return await t(e)}catch(n){if(e++>_n)throw n;this.db&&(this.db.close(),this.db=void 0)}}async initializeServiceWorkerMessaging(){return en()?this.initializeReceiver():this.initializeSender()}async initializeReceiver(){this.receiver=Je._getInstance(rn()),this.receiver._subscribe("keyChanged",(async(t,e)=>{const n=await this._poll();return{keyProcessed:n.includes(e.key)}})),this.receiver._subscribe("ping",(async(t,e)=>["keyChanged"]))}async initializeSender(){var t,e;if(this.activeServiceWorker=await nn(),!this.activeServiceWorker)return;this.sender=new Qe(this.activeServiceWorker);const n=await this.sender._send("ping",{},800);n&&(null===(t=n[0])||void 0===t?void 0:t.fulfilled)&&(null===(e=n[0])||void 0===e?void 0:e.value.includes("keyChanged"))&&(this.serviceWorkerReceiverAvailable=!0)}async notifyServiceWorker(t){if(this.sender&&this.activeServiceWorker&&an()===this.activeServiceWorker)try{await this.sender._send("keyChanged",{key:t},this.serviceWorkerReceiverAvailable?800:50)}catch(e){}}async _isAvailable(){try{if(!indexedDB)return!1;const t=await fn();return await pn(t,Ye,"1"),await vn(t,Ye),!0}catch(t){}return!1}async _withPendingWrite(t){this.pendingWrites++;try{await t()}finally{this.pendingWrites--}}async _set(t,e){return this._withPendingWrite((async()=>(await this._withRetries((n=>pn(n,t,e))),this.localCache[t]=e,this.notifyServiceWorker(t))))}async _get(t){const e=await this._withRetries((e=>mn(e,t)));return this.localCache[t]=e,e}async _remove(t){return this._withPendingWrite((async()=>(await this._withRetries((e=>vn(e,t))),delete this.localCache[t],this.notifyServiceWorker(t))))}async _poll(){const t=await this._withRetries((t=>{const e=hn(t,!1).getAll();return new un(e).toPromise()}));if(!t)return[];if(0!==this.pendingWrites)return[];const e=[],n=new Set;for(const{fbase_key:a,value:r}of t)n.add(a),JSON.stringify(this.localCache[a])!==JSON.stringify(r)&&(this.notifyListeners(a,r),e.push(a));for(const a of Object.keys(this.localCache))this.localCache[a]&&!n.has(a)&&(this.notifyListeners(a,null),e.push(a));return e}notifyListeners(t,e){this.localCache[t]=e;const n=this.listeners[t];if(n)for(const a of Array.from(n))a(e)}startPolling(){this.stopPolling(),this.pollTimer=setInterval((async()=>this._poll()),gn)}stopPolling(){this.pollTimer&&(clearInterval(this.pollTimer),this.pollTimer=null)}_addListener(t,e){0===Object.keys(this.listeners).length&&this.startPolling(),this.listeners[t]||(this.listeners[t]=new Set,this._get(t)),this.listeners[t].add(e)}_removeListener(t,e){this.listeners[t]&&(this.listeners[t].delete(e),0===this.listeners[t].size&&delete this.listeners[t]),0===Object.keys(this.listeners).length&&this.stopPolling()}}yn.type="LOCAL";const bn=yn;
/**
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
 */function Mn(t,e){return P(t,"POST","/v2/accounts/mfaSignIn:start",I(t,e))}function zn(t,e){return P(t,"POST","/v2/accounts/mfaSignIn:finalize",I(t,e))}function wn(t,e){return P(t,"POST","/v2/accounts/mfaSignIn:finalize",I(t,e))}
/**
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
 */
/**
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
 */
Et("rcb"),new A(3e4,6e4);
/**
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
 */
const Ln="recaptcha";async function kn(t,e,n){var a;const r=await n.verify();try{let i;if(M("string"===typeof r,t,"argument-error"),M(n.type===Ln,t,"argument-error"),i="string"===typeof e?{phoneNumber:e}:e,"session"in i){const e=i.session;if("phoneNumber"in i){M("enroll"===e.type,t,"internal-error");const n=await Ee(t,{idToken:e.credential,phoneEnrollmentInfo:{phoneNumber:i.phoneNumber,recaptchaToken:r}});return n.phoneSessionInfo.sessionInfo}{M("signin"===e.type,t,"internal-error");const n=(null===(a=i.multiFactorHint)||void 0===a?void 0:a.uid)||i.multiFactorUid;M(n,t,"missing-multi-factor-info");const o=await Mn(t,{mfaPendingCredential:e.credential,mfaEnrollmentId:n,phoneSignInInfo:{recaptchaToken:r}});return o.phoneResponseInfo.sessionInfo}}{const{sessionInfo:e}=await re(t,{phoneNumber:i.phoneNumber,recaptchaToken:r});return e}}finally{n._reset()}}
/**
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
 */
class Hn{constructor(t){this.providerId=Hn.PROVIDER_ID,this.auth=Vt(t)}verifyPhoneNumber(t,e){return kn(this.auth,t,(0,a.m9)(e))}static credential(t,e){return ce._fromVerification(t,e)}static credentialFromResult(t){const e=t;return Hn.credentialFromTaggedObject(e)}static credentialFromError(t){return Hn.credentialFromTaggedObject(t.customData||{})}static credentialFromTaggedObject({_tokenResponse:t}){if(!t)return null;const{phoneNumber:e,temporaryProof:n}=t;return e&&n?ce._fromTokenResponse(e,n):null}}
/**
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
 */
function Tn(t,e){return e?lt(e):(M(t._popupRedirectResolver,t,"argument-error"),t._popupRedirectResolver)}
/**
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
 */Hn.PROVIDER_ID="phone",Hn.PHONE_SIGN_IN_METHOD="phone";class Sn extends Kt{constructor(t){super("custom","custom"),this.params=t}_getIdTokenResponse(t){return ee(t,this._buildIdpRequest())}_linkToIdToken(t,e){return ee(t,this._buildIdpRequest(e))}_getReauthenticationResolver(t){return ee(t,this._buildIdpRequest())}_buildIdpRequest(t){const e={requestUri:this.params.requestUri,sessionId:this.params.sessionId,postBody:this.params.postBody,tenantId:this.params.tenantId,pendingToken:this.params.pendingToken,returnSecureToken:!0,returnIdpCredential:!0};return t&&(e.idToken=t),e}}function An(t){return Te(t.auth,new Sn(t),t.bypassAuthState)}function On(t){const{auth:e,user:n}=t;return M(n,e,"internal-error"),He(n,new Sn(t),t.bypassAuthState)}async function Dn(t){const{auth:e,user:n}=t;return M(n,e,"internal-error"),ke(n,new Sn(t),t.bypassAuthState)}
/**
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
 */class Vn{constructor(t,e,n,a,r=!1){this.auth=t,this.resolver=n,this.user=a,this.bypassAuthState=r,this.pendingPromise=null,this.eventManager=null,this.filter=Array.isArray(e)?e:[e]}execute(){return new Promise((async(t,e)=>{this.pendingPromise={resolve:t,reject:e};try{this.eventManager=await this.resolver._initialize(this.auth),await this.onExecution(),this.eventManager.registerConsumer(this)}catch(n){this.reject(n)}}))}async onAuthEvent(t){const{urlResponse:e,sessionId:n,postBody:a,tenantId:r,error:i,type:o}=t;if(i)return void this.reject(i);const s={auth:this.auth,requestUri:e,sessionId:n,tenantId:r||void 0,postBody:a||void 0,user:this.user,bypassAuthState:this.bypassAuthState};try{this.resolve(await this.getIdpTask(o)(s))}catch(l){this.reject(l)}}onError(t){this.reject(t)}getIdpTask(t){switch(t){case"signInViaPopup":case"signInViaRedirect":return An;case"linkViaPopup":case"linkViaRedirect":return Dn;case"reauthViaPopup":case"reauthViaRedirect":return On;default:v(this.auth,"internal-error")}}resolve(t){w(this.pendingPromise,"Pending promise was never set"),this.pendingPromise.resolve(t),this.unregisterAndCleanUp()}reject(t){w(this.pendingPromise,"Pending promise was never set"),this.pendingPromise.reject(t),this.unregisterAndCleanUp()}unregisterAndCleanUp(){this.eventManager&&this.eventManager.unregisterConsumer(this),this.pendingPromise=null,this.cleanUp()}}
/**
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
 */const Cn=new A(2e3,1e4);async function In(t,e,n){const a=Vt(t);y(t,e,pe);const r=Tn(a,n),i=new Pn(a,"signInViaPopup",e,r);return i.executeNotNull()}class Pn extends Vn{constructor(t,e,n,a,r){super(t,e,a,r),this.provider=n,this.authWindow=null,this.pollId=null,Pn.currentPopupAction&&Pn.currentPopupAction.cancel(),Pn.currentPopupAction=this}async executeNotNull(){const t=await this.execute();return M(t,this.auth,"internal-error"),t}async onExecution(){w(1===this.filter.length,"Popup operations only handle one event");const t=Xe();this.authWindow=await this.resolver._openPopup(this.auth,this.provider,this.filter[0],t),this.authWindow.associatedEvent=t,this.resolver._originValidation(this.auth).catch((t=>{this.reject(t)})),this.resolver._isIframeWebStorageSupported(this.auth,(t=>{t||this.reject(g(this.auth,"web-storage-unsupported"))})),this.pollUserCancellation()}get eventId(){var t;return(null===(t=this.authWindow)||void 0===t?void 0:t.associatedEvent)||null}cancel(){this.reject(g(this.auth,"cancelled-popup-request"))}cleanUp(){this.authWindow&&this.authWindow.close(),this.pollId&&window.clearTimeout(this.pollId),this.authWindow=null,this.pollId=null,Pn.currentPopupAction=null}pollUserCancellation(){const t=()=>{var e,n;(null===(n=null===(e=this.authWindow)||void 0===e?void 0:e.window)||void 0===n?void 0:n.closed)?this.pollId=window.setTimeout((()=>{this.pollId=null,this.reject(g(this.auth,"popup-closed-by-user"))}),8e3):this.pollId=window.setTimeout(t,Cn.get())};t()}}Pn.currentPopupAction=null;
/**
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
 */
const En="pendingRedirect",Bn=new Map;class Fn extends Vn{constructor(t,e,n=!1){super(t,["signInViaRedirect","linkViaRedirect","reauthViaRedirect","unknown"],e,void 0,n),this.eventId=null}async execute(){let t=Bn.get(this.auth._key());if(!t){try{const e=await jn(this.resolver,this.auth),n=e?await super.execute():null;t=()=>Promise.resolve(n)}catch(e){t=()=>Promise.reject(e)}Bn.set(this.auth._key(),t)}return this.bypassAuthState||Bn.set(this.auth._key(),(()=>Promise.resolve(null))),t()}async onAuthEvent(t){if("signInViaRedirect"===t.type)return super.onAuthEvent(t);if("unknown"!==t.type){if(t.eventId){const e=await this.auth._redirectUserForId(t.eventId);if(e)return this.user=e,super.onAuthEvent(t);this.resolve(null)}}else this.resolve(null)}async onExecution(){}cleanUp(){}}async function jn(t,e){const n=Nn(e),a=xn(t);if(!await a._isAvailable())return!1;const r="true"===await a._get(n);return await a._remove(n),r}function Yn(t,e){Bn.set(t._key(),e)}function xn(t){return lt(t._redirectPersistence)}function Nn(t){return ht(En,t.config.apiKey,t.name)}
/**
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
 */async function Rn(t,e,n=!1){const a=Vt(t),r=Tn(a,e),i=new Fn(a,r,n),o=await i.execute();return o&&!n&&(delete o.user._redirectEventId,await a._persistUserIfCurrent(o.user),await a._setRedirectUser(null,e)),o}
/**
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
 */
const $n=6e5;class Un{constructor(t){this.auth=t,this.cachedEventUids=new Set,this.consumers=new Set,this.queuedRedirectEvent=null,this.hasHandledPotentialRedirect=!1,this.lastProcessedEventTime=Date.now()}registerConsumer(t){this.consumers.add(t),this.queuedRedirectEvent&&this.isEventForConsumer(this.queuedRedirectEvent,t)&&(this.sendToConsumer(this.queuedRedirectEvent,t),this.saveEventToCache(this.queuedRedirectEvent),this.queuedRedirectEvent=null)}unregisterConsumer(t){this.consumers.delete(t)}onEvent(t){if(this.hasEventBeenHandled(t))return!1;let e=!1;return this.consumers.forEach((n=>{this.isEventForConsumer(t,n)&&(e=!0,this.sendToConsumer(t,n),this.saveEventToCache(t))})),this.hasHandledPotentialRedirect||!qn(t)||(this.hasHandledPotentialRedirect=!0,e||(this.queuedRedirectEvent=t,e=!0)),e}sendToConsumer(t,e){var n;if(t.error&&!Gn(t)){const a=(null===(n=t.error.code)||void 0===n?void 0:n.split("auth/")[1])||"internal-error";e.onError(g(this.auth,a))}else e.onAuthEvent(t)}isEventForConsumer(t,e){const n=null===e.eventId||!!t.eventId&&t.eventId===e.eventId;return e.filter.includes(t.type)&&n}hasEventBeenHandled(t){return Date.now()-this.lastProcessedEventTime>=$n&&this.cachedEventUids.clear(),this.cachedEventUids.has(Wn(t))}saveEventToCache(t){this.cachedEventUids.add(Wn(t)),this.lastProcessedEventTime=Date.now()}}function Wn(t){return[t.type,t.eventId,t.sessionId,t.tenantId].filter((t=>t)).join("-")}function Gn({type:t,error:e}){return"unknown"===t&&"auth/no-auth-event"===(null===e||void 0===e?void 0:e.code)}function qn(t){switch(t.type){case"signInViaRedirect":case"linkViaRedirect":case"reauthViaRedirect":return!0;case"unknown":return Gn(t);default:return!1}}
/**
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
 */async function Kn(t,e={}){return P(t,"GET","/v1/projects",e)}
/**
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
 */const Jn=/^\d{1,3}\.\d{1,3}\.\d{1,3}\.\d{1,3}$/,Xn=/^https?/;async function Qn(t){if(t.config.emulator)return;const{authorizedDomains:e}=await Kn(t);for(const a of e)try{if(Zn(a))return}catch(n){}v(t,"unauthorized-domain")}function Zn(t){const e=L(),{protocol:n,hostname:a}=new URL(e);if(t.startsWith("chrome-extension://")){const r=new URL(t);return""===r.hostname&&""===a?"chrome-extension:"===n&&t.replace("chrome-extension://","")===e.replace("chrome-extension://",""):"chrome-extension:"===n&&r.hostname===a}if(!Xn.test(n))return!1;if(Jn.test(t))return a===t;const r=t.replace(/\./g,"\\."),i=new RegExp("^(.+\\."+r+"|"+r+")$","i");return i.test(a)}
/**
 * @license
 * Copyright 2020 Google LLC.
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
 */const ta=new A(3e4,6e4);function ea(){const t=Ze().___jsl;if(null===t||void 0===t?void 0:t.H)for(const e of Object.keys(t.H))if(t.H[e].r=t.H[e].r||[],t.H[e].L=t.H[e].L||[],t.H[e].r=[...t.H[e].L],t.CP)for(let n=0;n<t.CP.length;n++)t.CP[n]=null}function na(t){return new Promise(((e,n)=>{var a,r,i;function o(){ea(),gapi.load("gapi.iframes",{callback:()=>{e(gapi.iframes.getContext())},ontimeout:()=>{ea(),n(g(t,"network-request-failed"))},timeout:ta.get()})}if(null===(r=null===(a=Ze().gapi)||void 0===a?void 0:a.iframes)||void 0===r?void 0:r.Iframe)e(gapi.iframes.getContext());else{if(!(null===(i=Ze().gapi)||void 0===i?void 0:i.load)){const e=Et("iframefcb");return Ze()[e]=()=>{gapi.load?o():n(g(t,"network-request-failed"))},Pt(`https://apis.google.com/js/api.js?onload=${e}`).catch((t=>n(t)))}o()}})).catch((t=>{throw aa=null,t}))}let aa=null;function ra(t){return aa=aa||na(t),aa}
/**
 * @license
 * Copyright 2020 Google LLC.
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
 */const ia=new A(5e3,15e3),oa="__/auth/iframe",sa="emulator/auth/iframe",la={style:{position:"absolute",top:"-100px",width:"1px",height:"1px"},"aria-hidden":"true",tabindex:"-1"},ca=new Map([["identitytoolkit.googleapis.com","p"],["staging-identitytoolkit.sandbox.googleapis.com","s"],["test-identitytoolkit.sandbox.googleapis.com","t"]]);function ua(t){const e=t.config;M(e.authDomain,t,"auth-domain-config-required");const n=e.emulator?O(e,sa):`https://${t.config.authDomain}/${oa}`,i={apiKey:e.apiKey,appName:t.name,v:r.Jn},o=ca.get(t.config.apiHost);o&&(i.eid=o);const s=t._getFrameworks();return s.length&&(i.fw=s.join(",")),`${n}?${(0,a.xO)(i).slice(1)}`}async function ha(t){const e=await ra(t),n=Ze().gapi;return M(n,t,"internal-error"),e.open({where:document.body,url:ua(t),messageHandlersFilter:n.iframes.CROSS_ORIGIN_IFRAMES_FILTER,attributes:la,dontclear:!0},(e=>new Promise((async(n,a)=>{await e.restyle({setHideOnLeave:!1});const r=g(t,"network-request-failed"),i=Ze().setTimeout((()=>{a(r)}),ia.get());function o(){Ze().clearTimeout(i),n(e)}e.ping(o).then(o,(()=>{a(r)}))}))))}
/**
 * @license
 * Copyright 2020 Google LLC.
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
 */const da={location:"yes",resizable:"yes",statusbar:"yes",toolbar:"no"},fa=500,pa=600,ma="_blank",va="http://localhost";class ga{constructor(t){this.window=t,this.associatedEvent=null}close(){if(this.window)try{this.window.close()}catch(t){}}}function _a(t,e,n,r=fa,i=pa){const o=Math.max((window.screen.availHeight-i)/2,0).toString(),s=Math.max((window.screen.availWidth-r)/2,0).toString();let l="";const c=Object.assign(Object.assign({},da),{width:r.toString(),height:i.toString(),top:o,left:s}),u=(0,a.z$)().toLowerCase();n&&(l=vt(u)?ma:n),pt(u)&&(e=e||va,c.scrollbars="yes");const h=Object.entries(c).reduce(((t,[e,n])=>`${t}${e}=${n},`),"");if(zt(u)&&"_self"!==l)return ya(e||"",l),new ga(null);const d=window.open(e||"",l,h);M(d,t,"popup-blocked");try{d.focus()}catch(f){}return new ga(d)}function ya(t,e){const n=document.createElement("a");n.href=t,n.target=e;const a=document.createEvent("MouseEvent");a.initMouseEvent("click",!0,!0,window,1,0,0,0,0,!1,!1,!1,!1,1,null),n.dispatchEvent(a)}
/**
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
 */const ba="__/auth/handler",Ma="emulator/auth/handler",za=encodeURIComponent("fac");async function wa(t,e,n,i,o,s){M(t.config.authDomain,t,"auth-domain-config-required"),M(t.config.apiKey,t,"invalid-api-key");const l={apiKey:t.config.apiKey,appName:t.name,authType:n,redirectUrl:i,v:r.Jn,eventId:o};if(e instanceof pe){e.setDefaultLanguage(t.languageCode),l.providerId=e.providerId||"",(0,a.xb)(e.getCustomParameters())||(l.customParameters=JSON.stringify(e.getCustomParameters()));for(const[t,e]of Object.entries(s||{}))l[t]=e}if(e instanceof me){const t=e.getScopes().filter((t=>""!==t));t.length>0&&(l.scopes=t.join(","))}t.tenantId&&(l.tid=t.tenantId);const c=l;for(const a of Object.keys(c))void 0===c[a]&&delete c[a];const u=await t._getAppCheckToken(),h=u?`#${za}=${encodeURIComponent(u)}`:"";return`${La(t)}?${(0,a.xO)(c).slice(1)}${h}`}function La({config:t}){return t.emulator?O(t,Ma):`https://${t.authDomain}/${ba}`}
/**
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
 */const ka="webStorageSupport";class Ha{constructor(){this.eventManagers={},this.iframes={},this.originValidationPromises={},this._redirectPersistence=qe,this._completeRedirectFn=Rn,this._overrideRedirectResult=Yn}async _openPopup(t,e,n,a){var r;w(null===(r=this.eventManagers[t._key()])||void 0===r?void 0:r.manager,"_initialize() not called before _openPopup()");const i=await wa(t,e,n,L(),a);return _a(t,i,Xe())}async _openRedirect(t,e,n,a){await this._originValidation(t);const r=await wa(t,e,n,L(),a);return tn(r),new Promise((()=>{}))}_initialize(t){const e=t._key();if(this.eventManagers[e]){const{manager:t,promise:n}=this.eventManagers[e];return t?Promise.resolve(t):(w(n,"If manager is not set, promise should be"),n)}const n=this.initAndGetManager(t);return this.eventManagers[e]={promise:n},n.catch((()=>{delete this.eventManagers[e]})),n}async initAndGetManager(t){const e=await ha(t),n=new Un(t);return e.register("authEvent",(e=>{M(null===e||void 0===e?void 0:e.authEvent,t,"invalid-auth-event");const a=n.onEvent(e.authEvent);return{status:a?"ACK":"ERROR"}}),gapi.iframes.CROSS_ORIGIN_IFRAMES_FILTER),this.eventManagers[t._key()]={manager:n},this.iframes[t._key()]=e,n}_isIframeWebStorageSupported(t,e){const n=this.iframes[t._key()];n.send(ka,{type:ka},(n=>{var a;const r=null===(a=null===n||void 0===n?void 0:n[0])||void 0===a?void 0:a[ka];void 0!==r&&e(!!r),v(t,"internal-error")}),gapi.iframes.CROSS_ORIGIN_IFRAMES_FILTER)}_originValidation(t){const e=t._key();return this.originValidationPromises[e]||(this.originValidationPromises[e]=Qn(t)),this.originValidationPromises[e]}get _shouldInitProactively(){return Lt()||mt()||Mt()}}const Ta=Ha;class Sa{constructor(t){this.factorId=t}_process(t,e,n){switch(e.type){case"enroll":return this._finalizeEnroll(t,e.credential,n);case"signin":return this._finalizeSignIn(t,e.credential);default:return z("unexpected MultiFactorSessionType")}}}class Aa extends Sa{constructor(t){super("phone"),this.credential=t}static _fromCredential(t){return new Aa(t)}_finalizeEnroll(t,e,n){return Be(t,{idToken:e,displayName:n,phoneVerificationInfo:this.credential._makeVerificationRequest()})}_finalizeSignIn(t,e){return zn(t,{mfaPendingCredential:e,phoneVerificationInfo:this.credential._makeVerificationRequest()})}}class Oa{constructor(){}static assertion(t){return Aa._fromCredential(t)}}Oa.FACTOR_ID="phone";class Da{static assertionForEnrollment(t,e){return Va._fromSecret(t,e)}static assertionForSignIn(t,e){return Va._fromEnrollmentId(t,e)}static async generateSecret(t){var e;const n=t;M("undefined"!==typeof(null===(e=n.user)||void 0===e?void 0:e.auth),"internal-error");const a=await Fe(n.user.auth,{idToken:n.credential,totpEnrollmentInfo:{}});return Ca._fromStartTotpMfaEnrollmentResponse(a,n.user.auth)}}Da.FACTOR_ID="totp";class Va extends Sa{constructor(t,e,n){super("totp"),this.otp=t,this.enrollmentId=e,this.secret=n}static _fromSecret(t,e){return new Va(e,void 0,t)}static _fromEnrollmentId(t,e){return new Va(e,t)}async _finalizeEnroll(t,e,n){return M("undefined"!==typeof this.secret,t,"argument-error"),je(t,{idToken:e,displayName:n,totpVerificationInfo:this.secret._makeTotpVerificationInfo(this.otp)})}async _finalizeSignIn(t,e){M(void 0!==this.enrollmentId&&void 0!==this.otp,t,"argument-error");const n={verificationCode:this.otp};return wn(t,{mfaPendingCredential:e,mfaEnrollmentId:this.enrollmentId,totpVerificationInfo:n})}}class Ca{constructor(t,e,n,a,r,i,o){this.sessionInfo=i,this.auth=o,this.secretKey=t,this.hashingAlgorithm=e,this.codeLength=n,this.codeIntervalSeconds=a,this.enrollmentCompletionDeadline=r}static _fromStartTotpMfaEnrollmentResponse(t,e){return new Ca(t.totpSessionInfo.sharedSecretKey,t.totpSessionInfo.hashingAlgorithm,t.totpSessionInfo.verificationCodeLength,t.totpSessionInfo.periodSec,new Date(t.totpSessionInfo.finalizeEnrollmentTime).toUTCString(),t.totpSessionInfo.sessionInfo,e)}_makeTotpVerificationInfo(t){return{sessionInfo:this.sessionInfo,verificationCode:t}}generateQrCodeUrl(t,e){var n;let a=!1;return(Ia(t)||Ia(e))&&(a=!0),a&&(Ia(t)&&(t=(null===(n=this.auth.currentUser)||void 0===n?void 0:n.email)||"unknownuser"),Ia(e)&&(e=this.auth.name)),`otpauth://totp/${e}:${t}?secret=${this.secretKey}&issuer=${e}&algorithm=${this.hashingAlgorithm}&digits=${this.codeLength}`}}function Ia(t){return"undefined"===typeof t||0===(null===t||void 0===t?void 0:t.length)}var Pa="@firebase/auth",Ea="1.3.0";
/**
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
 */
class Ba{constructor(t){this.auth=t,this.internalListeners=new Map}getUid(){var t;return this.assertAuthConfigured(),(null===(t=this.auth.currentUser)||void 0===t?void 0:t.uid)||null}async getToken(t){if(this.assertAuthConfigured(),await this.auth._initializationPromise,!this.auth.currentUser)return null;const e=await this.auth.currentUser.getIdToken(t);return{accessToken:e}}addAuthTokenListener(t){if(this.assertAuthConfigured(),this.internalListeners.has(t))return;const e=this.auth.onIdTokenChanged((e=>{t((null===e||void 0===e?void 0:e.stsTokenManager.accessToken)||null)}));this.internalListeners.set(t,e),this.updateProactiveRefresh()}removeAuthTokenListener(t){this.assertAuthConfigured();const e=this.internalListeners.get(t);e&&(this.internalListeners.delete(t),e(),this.updateProactiveRefresh())}assertAuthConfigured(){M(this.auth._initializationPromise,"dependent-sdk-initialized-before-auth")}updateProactiveRefresh(){this.internalListeners.size>0?this.auth._startProactiveRefresh():this.auth._stopProactiveRefresh()}}
/**
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
 */function Fa(t){switch(t){case"Node":return"node";case"ReactNative":return"rn";case"Worker":return"webworker";case"Cordova":return"cordova";default:return}}function ja(t){(0,r.Xd)(new s.wA("auth",((e,{options:n})=>{const a=e.getProvider("app").getImmediate(),r=e.getProvider("heartbeat"),i=e.getProvider("app-check-internal"),{apiKey:o,authDomain:s}=a.options;M(o&&!o.includes(":"),"invalid-api-key",{appName:a.name});const l={apiKey:o,authDomain:s,clientPlatform:t,apiHost:"identitytoolkit.googleapis.com",tokenApiHost:"securetoken.googleapis.com",apiScheme:"https",sdkClientVersion:Ht(t)},c=new Dt(a,r,i,l);return Rt(c,n),c}),"PUBLIC").setInstantiationMode("EXPLICIT").setInstanceCreatedCallback(((t,e,n)=>{const a=t.getProvider("auth-internal");a.initialize()}))),(0,r.Xd)(new s.wA("auth-internal",(t=>{const e=Vt(t.getProvider("auth").getImmediate());return(t=>new Ba(t))(e)}),"PRIVATE").setInstantiationMode("EXPLICIT")),(0,r.KN)(Pa,Ea,Fa(t)),(0,r.KN)(Pa,Ea,"esm2017")}
/**
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
 */const Ya=300,xa=(0,a.Pz)("authIdTokenMaxAge")||Ya;let Na=null;const Ra=t=>async e=>{const n=e&&await e.getIdTokenResult(),a=n&&((new Date).getTime()-Date.parse(n.issuedAtTime))/1e3;if(a&&a>xa)return;const r=null===n||void 0===n?void 0:n.token;Na!==r&&(Na=r,await fetch(t,{method:r?"POST":"DELETE",headers:r?{Authorization:`Bearer ${r}`}:{}}))};function $a(t=(0,r.Mq)()){const e=(0,r.qX)(t,"auth");if(e.isInitialized())return e.getImmediate();const n=Nt(t,{popupRedirectResolver:Ta,persistence:[bn,We,qe]}),i=(0,a.Pz)("authTokenSyncURL");if(i){const t=Ra(i);Ce(n,t,(()=>t(n.currentUser))),Ve(n,(e=>t(e)))}const o=(0,a.q4)("auth");return o&&$t(n,`http://${o}`),n}ja("Browser")},8036:function(t,e,n){"use strict";n.d(e,{ET:function(){return hd},hJ:function(){return sh},oe:function(){return ud},JU:function(){return lh},QT:function(){return od},PL:function(){return ld},ad:function(){return hh},IO:function(){return Uh},r7:function(){return cd},ar:function(){return Gh},qs:function(){return vd}});var a,r=n(7456),i=n(8463),o=n(3333),s=n(4444),l="undefined"!==typeof globalThis?globalThis:"undefined"!==typeof window?window:"undefined"!==typeof global?global:"undefined"!==typeof self?self:{},c={},u=u||{},h=l||self;function d(t){var e=typeof t;return e="object"!=e?e:t?Array.isArray(t)?"array":e:"null","array"==e||"object"==e&&"number"==typeof t.length}function f(t){var e=typeof t;return"object"==e&&null!=t||"function"==e}function p(t){return Object.prototype.hasOwnProperty.call(t,m)&&t[m]||(t[m]=++v)}var m="closure_uid_"+(1e9*Math.random()>>>0),v=0;function g(t,e,n){return t.call.apply(t.bind,arguments)}function _(t,e,n){if(!t)throw Error();if(2<arguments.length){var a=Array.prototype.slice.call(arguments,2);return function(){var n=Array.prototype.slice.call(arguments);return Array.prototype.unshift.apply(n,a),t.apply(e,n)}}return function(){return t.apply(e,arguments)}}function y(t,e,n){return y=Function.prototype.bind&&-1!=Function.prototype.bind.toString().indexOf("native code")?g:_,y.apply(null,arguments)}function b(t,e){var n=Array.prototype.slice.call(arguments,1);return function(){var e=n.slice();return e.push.apply(e,arguments),t.apply(this,e)}}function M(t,e){function n(){}n.prototype=e.prototype,t.$=e.prototype,t.prototype=new n,t.prototype.constructor=t,t.ac=function(t,n,a){for(var r=Array(arguments.length-2),i=2;i<arguments.length;i++)r[i-2]=arguments[i];return e.prototype[n].apply(t,r)}}function z(){this.s=this.s,this.o=this.o}var w=0;z.prototype.s=!1,z.prototype.sa=function(){this.s||(this.s=!0,this.N(),0==w)||p(this)},z.prototype.N=function(){if(this.o)for(;this.o.length;)this.o.shift()()};const L=Array.prototype.indexOf?function(t,e){return Array.prototype.indexOf.call(t,e,void 0)}:function(t,e){if("string"===typeof t)return"string"!==typeof e||1!=e.length?-1:t.indexOf(e,0);for(let n=0;n<t.length;n++)if(n in t&&t[n]===e)return n;return-1};function k(t){const e=t.length;if(0<e){const n=Array(e);for(let a=0;a<e;a++)n[a]=t[a];return n}return[]}function H(t,e){for(let n=1;n<arguments.length;n++){const e=arguments[n];if(d(e)){const n=t.length||0,a=e.length||0;t.length=n+a;for(let r=0;r<a;r++)t[n+r]=e[r]}else t.push(e)}}function T(t,e){this.type=t,this.g=this.target=e,this.defaultPrevented=!1}T.prototype.h=function(){this.defaultPrevented=!0};var S=function(){if(!h.addEventListener||!Object.defineProperty)return!1;var t=!1,e=Object.defineProperty({},"passive",{get:function(){t=!0}});try{h.addEventListener("test",(()=>{}),e),h.removeEventListener("test",(()=>{}),e)}catch(n){}return t}();function A(t){return/^[\s\xa0]*$/.test(t)}function O(){var t=h.navigator;return t&&(t=t.userAgent)?t:""}function D(t){return-1!=O().indexOf(t)}function V(t){return V[" "](t),t}function C(t,e){var n=ba;return Object.prototype.hasOwnProperty.call(n,t)?n[t]:n[t]=e(t)}V[" "]=function(){};var I,P,E=D("Opera"),B=D("Trident")||D("MSIE"),F=D("Edge"),j=F||B,Y=D("Gecko")&&!(-1!=O().toLowerCase().indexOf("webkit")&&!D("Edge"))&&!(D("Trident")||D("MSIE"))&&!D("Edge"),x=-1!=O().toLowerCase().indexOf("webkit")&&!D("Edge");function N(){var t=h.document;return t?t.documentMode:void 0}t:{var R="",$=function(){var t=O();return Y?/rv:([^\);]+)(\)|;)/.exec(t):F?/Edge\/([\d\.]+)/.exec(t):B?/\b(?:MSIE|rv)[: ]([^\);]+)(\)|;)/.exec(t):x?/WebKit\/(\S+)/.exec(t):E?/(?:Version)[ \/]?(\S+)/.exec(t):void 0}();if($&&(R=$?$[1]:""),B){var U=N();if(null!=U&&U>parseFloat(R)){I=String(U);break t}}I=R}if(h.document&&B){var W=N();P=W||(parseInt(I,10)||void 0)}else P=void 0;var G=P;function q(t,e){if(T.call(this,t?t.type:""),this.relatedTarget=this.g=this.target=null,this.button=this.screenY=this.screenX=this.clientY=this.clientX=0,this.key="",this.metaKey=this.shiftKey=this.altKey=this.ctrlKey=!1,this.state=null,this.pointerId=0,this.pointerType="",this.i=null,t){var n=this.type=t.type,a=t.changedTouches&&t.changedTouches.length?t.changedTouches[0]:null;if(this.target=t.target||t.srcElement,this.g=e,e=t.relatedTarget){if(Y){t:{try{V(e.nodeName);var r=!0;break t}catch(i){}r=!1}r||(e=null)}}else"mouseover"==n?e=t.fromElement:"mouseout"==n&&(e=t.toElement);this.relatedTarget=e,a?(this.clientX=void 0!==a.clientX?a.clientX:a.pageX,this.clientY=void 0!==a.clientY?a.clientY:a.pageY,this.screenX=a.screenX||0,this.screenY=a.screenY||0):(this.clientX=void 0!==t.clientX?t.clientX:t.pageX,this.clientY=void 0!==t.clientY?t.clientY:t.pageY,this.screenX=t.screenX||0,this.screenY=t.screenY||0),this.button=t.button,this.key=t.key||"",this.ctrlKey=t.ctrlKey,this.altKey=t.altKey,this.shiftKey=t.shiftKey,this.metaKey=t.metaKey,this.pointerId=t.pointerId||0,this.pointerType="string"===typeof t.pointerType?t.pointerType:K[t.pointerType]||"",this.state=t.state,this.i=t,t.defaultPrevented&&q.$.h.call(this)}}M(q,T);var K={2:"touch",3:"pen",4:"mouse"};q.prototype.h=function(){q.$.h.call(this);var t=this.i;t.preventDefault?t.preventDefault():t.returnValue=!1};var J="closure_listenable_"+(1e6*Math.random()|0),X=0;function Q(t,e,n,a,r){this.listener=t,this.proxy=null,this.src=e,this.type=n,this.capture=!!a,this.la=r,this.key=++X,this.fa=this.ia=!1}function Z(t){t.fa=!0,t.listener=null,t.proxy=null,t.src=null,t.la=null}function tt(t,e,n){for(const a in t)e.call(n,t[a],a,t)}function et(t,e){for(const n in t)e.call(void 0,t[n],n,t)}function nt(t){const e={};for(const n in t)e[n]=t[n];return e}const at="constructor hasOwnProperty isPrototypeOf propertyIsEnumerable toLocaleString toString valueOf".split(" ");function rt(t,e){let n,a;for(let r=1;r<arguments.length;r++){for(n in a=arguments[r],a)t[n]=a[n];for(let e=0;e<at.length;e++)n=at[e],Object.prototype.hasOwnProperty.call(a,n)&&(t[n]=a[n])}}function it(t){this.src=t,this.g={},this.h=0}function ot(t,e){var n=e.type;if(n in t.g){var a,r=t.g[n],i=L(r,e);(a=0<=i)&&Array.prototype.splice.call(r,i,1),a&&(Z(e),0==t.g[n].length&&(delete t.g[n],t.h--))}}function st(t,e,n,a){for(var r=0;r<t.length;++r){var i=t[r];if(!i.fa&&i.listener==e&&i.capture==!!n&&i.la==a)return r}return-1}it.prototype.add=function(t,e,n,a,r){var i=t.toString();t=this.g[i],t||(t=this.g[i]=[],this.h++);var o=st(t,e,a,r);return-1<o?(e=t[o],n||(e.ia=!1)):(e=new Q(e,this.src,i,!!a,r),e.ia=n,t.push(e)),e};var lt="closure_lm_"+(1e6*Math.random()|0),ct={};function ut(t,e,n,a,r){if(a&&a.once)return ft(t,e,n,a,r);if(Array.isArray(e)){for(var i=0;i<e.length;i++)ut(t,e[i],n,a,r);return null}return n=bt(n),t&&t[J]?t.O(e,n,f(a)?!!a.capture:!!a,r):ht(t,e,n,!1,a,r)}function ht(t,e,n,a,r,i){if(!e)throw Error("Invalid event type");var o=f(r)?!!r.capture:!!r,s=_t(t);if(s||(t[lt]=s=new it(t)),n=s.add(e,n,a,o,i),n.proxy)return n;if(a=dt(),n.proxy=a,a.src=t,a.listener=n,t.addEventListener)S||(r=o),void 0===r&&(r=!1),t.addEventListener(e.toString(),a,r);else if(t.attachEvent)t.attachEvent(vt(e.toString()),a);else{if(!t.addListener||!t.removeListener)throw Error("addEventListener and attachEvent are unavailable.");t.addListener(a)}return n}function dt(){function t(n){return e.call(t.src,t.listener,n)}const e=gt;return t}function ft(t,e,n,a,r){if(Array.isArray(e)){for(var i=0;i<e.length;i++)ft(t,e[i],n,a,r);return null}return n=bt(n),t&&t[J]?t.P(e,n,f(a)?!!a.capture:!!a,r):ht(t,e,n,!0,a,r)}function pt(t,e,n,a,r){if(Array.isArray(e))for(var i=0;i<e.length;i++)pt(t,e[i],n,a,r);else a=f(a)?!!a.capture:!!a,n=bt(n),t&&t[J]?(t=t.i,e=String(e).toString(),e in t.g&&(i=t.g[e],n=st(i,n,a,r),-1<n&&(Z(i[n]),Array.prototype.splice.call(i,n,1),0==i.length&&(delete t.g[e],t.h--)))):t&&(t=_t(t))&&(e=t.g[e.toString()],t=-1,e&&(t=st(e,n,a,r)),(n=-1<t?e[t]:null)&&mt(n))}function mt(t){if("number"!==typeof t&&t&&!t.fa){var e=t.src;if(e&&e[J])ot(e.i,t);else{var n=t.type,a=t.proxy;e.removeEventListener?e.removeEventListener(n,a,t.capture):e.detachEvent?e.detachEvent(vt(n),a):e.addListener&&e.removeListener&&e.removeListener(a),(n=_t(e))?(ot(n,t),0==n.h&&(n.src=null,e[lt]=null)):Z(t)}}}function vt(t){return t in ct?ct[t]:ct[t]="on"+t}function gt(t,e){if(t.fa)t=!0;else{e=new q(e,this);var n=t.listener,a=t.la||t.src;t.ia&&mt(t),t=n.call(a,e)}return t}function _t(t){return t=t[lt],t instanceof it?t:null}var yt="__closure_events_fn_"+(1e9*Math.random()>>>0);function bt(t){return"function"===typeof t?t:(t[yt]||(t[yt]=function(e){return t.handleEvent(e)}),t[yt])}function Mt(){z.call(this),this.i=new it(this),this.S=this,this.J=null}function zt(t,e){var n,a=t.J;if(a)for(n=[];a;a=a.J)n.push(a);if(t=t.S,a=e.type||e,"string"===typeof e)e=new T(e,t);else if(e instanceof T)e.target=e.target||t;else{var r=e;e=new T(a,t),rt(e,r)}if(r=!0,n)for(var i=n.length-1;0<=i;i--){var o=e.g=n[i];r=wt(o,a,!0,e)&&r}if(o=e.g=t,r=wt(o,a,!0,e)&&r,r=wt(o,a,!1,e)&&r,n)for(i=0;i<n.length;i++)o=e.g=n[i],r=wt(o,a,!1,e)&&r}function wt(t,e,n,a){if(e=t.i.g[String(e)],!e)return!0;e=e.concat();for(var r=!0,i=0;i<e.length;++i){var o=e[i];if(o&&!o.fa&&o.capture==n){var s=o.listener,l=o.la||o.src;o.ia&&ot(t.i,o),r=!1!==s.call(l,a)&&r}}return r&&!a.defaultPrevented}M(Mt,z),Mt.prototype[J]=!0,Mt.prototype.removeEventListener=function(t,e,n,a){pt(this,t,e,n,a)},Mt.prototype.N=function(){if(Mt.$.N.call(this),this.i){var t,e=this.i;for(t in e.g){for(var n=e.g[t],a=0;a<n.length;a++)Z(n[a]);delete e.g[t],e.h--}}this.J=null},Mt.prototype.O=function(t,e,n,a){return this.i.add(String(t),e,!1,n,a)},Mt.prototype.P=function(t,e,n,a){return this.i.add(String(t),e,!0,n,a)};var Lt=h.JSON.stringify;class kt{constructor(t,e){this.i=t,this.j=e,this.h=0,this.g=null}get(){let t;return 0<this.h?(this.h--,t=this.g,this.g=t.next,t.next=null):t=this.i(),t}}function Ht(){var t=It;let e=null;return t.g&&(e=t.g,t.g=t.g.next,t.g||(t.h=null),e.next=null),e}class Tt{constructor(){this.h=this.g=null}add(t,e){const n=St.get();n.set(t,e),this.h?this.h.next=n:this.g=n,this.h=n}}var St=new kt((()=>new At),(t=>t.reset()));class At{constructor(){this.next=this.g=this.h=null}set(t,e){this.h=t,this.g=e,this.next=null}reset(){this.next=this.g=this.h=null}}function Ot(t){var e=1;t=t.split(":");const n=[];for(;0<e&&t.length;)n.push(t.shift()),e--;return t.length&&n.push(t.join(":")),n}function Dt(t){h.setTimeout((()=>{throw t}),0)}let Vt,Ct=!1,It=new Tt,Pt=()=>{const t=h.Promise.resolve(void 0);Vt=()=>{t.then(Et)}};var Et=()=>{for(var t;t=Ht();){try{t.h.call(t.g)}catch(n){Dt(n)}var e=St;e.j(t),100>e.h&&(e.h++,t.next=e.g,e.g=t)}Ct=!1};function Bt(t,e){Mt.call(this),this.h=t||1,this.g=e||h,this.j=y(this.qb,this),this.l=Date.now()}function Ft(t){t.ga=!1,t.T&&(t.g.clearTimeout(t.T),t.T=null)}function jt(t,e,n){if("function"===typeof t)n&&(t=y(t,n));else{if(!t||"function"!=typeof t.handleEvent)throw Error("Invalid listener argument");t=y(t.handleEvent,t)}return 2147483647<Number(e)?-1:h.setTimeout(t,e||0)}function Yt(t){t.g=jt((()=>{t.g=null,t.i&&(t.i=!1,Yt(t))}),t.j);const e=t.h;t.h=null,t.m.apply(null,e)}M(Bt,Mt),a=Bt.prototype,a.ga=!1,a.T=null,a.qb=function(){if(this.ga){var t=Date.now()-this.l;0<t&&t<.8*this.h?this.T=this.g.setTimeout(this.j,this.h-t):(this.T&&(this.g.clearTimeout(this.T),this.T=null),zt(this,"tick"),this.ga&&(Ft(this),this.start()))}},a.start=function(){this.ga=!0,this.T||(this.T=this.g.setTimeout(this.j,this.h),this.l=Date.now())},a.N=function(){Bt.$.N.call(this),Ft(this),delete this.g};class xt extends z{constructor(t,e){super(),this.m=t,this.j=e,this.h=null,this.i=!1,this.g=null}l(t){this.h=arguments,this.g?this.i=!0:Yt(this)}N(){super.N(),this.g&&(h.clearTimeout(this.g),this.g=null,this.i=!1,this.h=null)}}function Nt(t){z.call(this),this.h=t,this.g={}}M(Nt,z);var Rt=[];function $t(t,e,n,a){Array.isArray(n)||(n&&(Rt[0]=n.toString()),n=Rt);for(var r=0;r<n.length;r++){var i=ut(e,n[r],a||t.handleEvent,!1,t.h||t);if(!i)break;t.g[i.key]=i}}function Ut(t){tt(t.g,(function(t,e){this.g.hasOwnProperty(e)&&mt(t)}),t),t.g={}}function Wt(){this.g=!0}function Gt(t,e,n,a,r,i){t.info((function(){if(t.g)if(i)for(var o="",s=i.split("&"),l=0;l<s.length;l++){var c=s[l].split("=");if(1<c.length){var u=c[0];c=c[1];var h=u.split("_");o=2<=h.length&&"type"==h[1]?o+(u+"=")+c+"&":o+(u+"=redacted&")}}else o=null;else o=i;return"XMLHTTP REQ ("+a+") [attempt "+r+"]: "+e+"\n"+n+"\n"+o}))}function qt(t,e,n,a,r,i,o){t.info((function(){return"XMLHTTP RESP ("+a+") [ attempt "+r+"]: "+e+"\n"+n+"\n"+i+" "+o}))}function Kt(t,e,n,a){t.info((function(){return"XMLHTTP TEXT ("+e+"): "+Xt(t,n)+(a?" "+a:"")}))}function Jt(t,e){t.info((function(){return"TIMEOUT: "+e}))}function Xt(t,e){if(!t.g)return e;if(!e)return null;try{var n=JSON.parse(e);if(n)for(t=0;t<n.length;t++)if(Array.isArray(n[t])){var a=n[t];if(!(2>a.length)){var r=a[1];if(Array.isArray(r)&&!(1>r.length)){var i=r[0];if("noop"!=i&&"stop"!=i&&"close"!=i)for(var o=1;o<r.length;o++)r[o]=""}}}return Lt(n)}catch(s){return e}}Nt.prototype.N=function(){Nt.$.N.call(this),Ut(this)},Nt.prototype.handleEvent=function(){throw Error("EventHandler.handleEvent not implemented")},Wt.prototype.Ea=function(){this.g=!1},Wt.prototype.info=function(){};var Qt={},Zt=null;function te(){return Zt=Zt||new Mt}function ee(t){T.call(this,Qt.Ta,t)}function ne(t){const e=te();zt(e,new ee(e))}function ae(t,e){T.call(this,Qt.STAT_EVENT,t),this.stat=e}function re(t){const e=te();zt(e,new ae(e,t))}function ie(t,e){T.call(this,Qt.Ua,t),this.size=e}function oe(t,e){if("function"!==typeof t)throw Error("Fn must not be null and must be a function");return h.setTimeout((function(){t()}),e)}Qt.Ta="serverreachability",M(ee,T),Qt.STAT_EVENT="statevent",M(ae,T),Qt.Ua="timingevent",M(ie,T);var se={NO_ERROR:0,rb:1,Eb:2,Db:3,yb:4,Cb:5,Fb:6,Qa:7,TIMEOUT:8,Ib:9},le={wb:"complete",Sb:"success",Ra:"error",Qa:"abort",Kb:"ready",Lb:"readystatechange",TIMEOUT:"timeout",Gb:"incrementaldata",Jb:"progress",zb:"downloadprogress",$b:"uploadprogress"};function ce(){}function ue(t){return t.h||(t.h=t.i())}function he(){}ce.prototype.h=null;var de,fe={OPEN:"a",vb:"b",Ra:"c",Hb:"d"};function pe(){T.call(this,"d")}function me(){T.call(this,"c")}function ve(){}function ge(t,e,n,a){this.l=t,this.j=e,this.m=n,this.W=a||1,this.U=new Nt(this),this.P=ye,t=j?125:void 0,this.V=new Bt(t),this.I=null,this.i=!1,this.s=this.A=this.v=this.L=this.G=this.Y=this.B=null,this.F=[],this.g=null,this.C=0,this.o=this.u=null,this.ca=-1,this.J=!1,this.O=0,this.M=null,this.ba=this.K=this.aa=this.S=!1,this.h=new _e}function _e(){this.i=null,this.g="",this.h=!1}M(pe,T),M(me,T),M(ve,ce),ve.prototype.g=function(){return new XMLHttpRequest},ve.prototype.i=function(){return{}},de=new ve;var ye=45e3,be={},Me={};function ze(t,e,n){t.L=1,t.v=$e(je(e)),t.s=n,t.S=!0,we(t,null)}function we(t,e){t.G=Date.now(),Te(t),t.A=je(t.v);var n=t.A,a=t.W;Array.isArray(a)||(a=[String(a)]),an(n.i,"t",a),t.C=0,n=t.l.J,t.h=new _e,t.g=ca(t.l,n?e:null,!t.s),0<t.O&&(t.M=new xt(y(t.Pa,t,t.g),t.O)),$t(t.U,t.g,"readystatechange",t.nb),e=t.I?nt(t.I):{},t.s?(t.u||(t.u="POST"),e["Content-Type"]="application/x-www-form-urlencoded",t.g.ha(t.A,t.u,t.s,e)):(t.u="GET",t.g.ha(t.A,t.u,null,e)),ne(),Gt(t.j,t.u,t.A,t.m,t.W,t.s)}function Le(t){return!!t.g&&("GET"==t.u&&2!=t.L&&t.l.Ha)}function ke(t,e,n){let a,r=!0;for(;!t.J&&t.C<n.length;){if(a=He(t,n),a==Me){4==e&&(t.o=4,re(14),r=!1),Kt(t.j,t.m,null,"[Incomplete Response]");break}if(a==be){t.o=4,re(15),Kt(t.j,t.m,n,"[Invalid Chunk]"),r=!1;break}Kt(t.j,t.m,a,null),Ve(t,a)}Le(t)&&a!=Me&&a!=be&&(t.h.g="",t.C=0),4!=e||0!=n.length||t.h.h||(t.o=1,re(16),r=!1),t.i=t.i&&r,r?0<n.length&&!t.ba&&(t.ba=!0,e=t.l,e.g==t&&e.ca&&!e.M&&(e.l.info("Great, no buffering proxy detected. Bytes received: "+n.length),ea(e),e.M=!0,re(11))):(Kt(t.j,t.m,n,"[Invalid Chunked Response]"),De(t),Oe(t))}function He(t,e){var n=t.C,a=e.indexOf("\n",n);return-1==a?Me:(n=Number(e.substring(n,a)),isNaN(n)?be:(a+=1,a+n>e.length?Me:(e=e.slice(a,a+n),t.C=a+n,e)))}function Te(t){t.Y=Date.now()+t.P,Se(t,t.P)}function Se(t,e){if(null!=t.B)throw Error("WatchDog timer not null");t.B=oe(y(t.lb,t),e)}function Ae(t){t.B&&(h.clearTimeout(t.B),t.B=null)}function Oe(t){0==t.l.H||t.J||ra(t.l,t)}function De(t){Ae(t);var e=t.M;e&&"function"==typeof e.sa&&e.sa(),t.M=null,Ft(t.V),Ut(t.U),t.g&&(e=t.g,t.g=null,e.abort(),e.sa())}function Ve(t,e){try{var n=t.l;if(0!=n.H&&(n.g==t||dn(n.i,t)))if(!t.K&&dn(n.i,t)&&3==n.H){try{var a=n.Ja.g.parse(e)}catch(c){a=null}if(Array.isArray(a)&&3==a.length){var r=a;if(0==r[0]){t:if(!n.u){if(n.g){if(!(n.g.G+3e3<t.G))break t;aa(n),Wn(n)}ta(n),re(18)}}else n.Fa=r[1],0<n.Fa-n.V&&37500>r[2]&&n.G&&0==n.A&&!n.v&&(n.v=oe(y(n.ib,n),6e3));if(1>=hn(n.i)&&n.oa){try{n.oa()}catch(c){}n.oa=void 0}}else oa(n,11)}else if((t.K||n.g==t)&&aa(n),!A(e))for(r=n.Ja.g.parse(e),e=0;e<r.length;e++){let c=r[e];if(n.V=c[0],c=c[1],2==n.H)if("c"==c[0]){n.K=c[1],n.pa=c[2];const e=c[3];null!=e&&(n.ra=e,n.l.info("VER="+n.ra));const r=c[4];null!=r&&(n.Ga=r,n.l.info("SVER="+n.Ga));const u=c[5];null!=u&&"number"===typeof u&&0<u&&(a=1.5*u,n.L=a,n.l.info("backChannelRequestTimeoutMs_="+a)),a=n;const h=t.g;if(h){const t=h.g?h.g.getResponseHeader("X-Client-Wire-Protocol"):null;if(t){var i=a.i;i.g||-1==t.indexOf("spdy")&&-1==t.indexOf("quic")&&-1==t.indexOf("h2")||(i.j=i.l,i.g=new Set,i.h&&(fn(i,i.h),i.h=null))}if(a.F){const t=h.g?h.g.getResponseHeader("X-HTTP-Session-Id"):null;t&&(a.Da=t,Re(a.I,a.F,t))}}n.H=3,n.h&&n.h.Ba(),n.ca&&(n.S=Date.now()-t.G,n.l.info("Handshake RTT: "+n.S+"ms")),a=n;var o=t;if(a.wa=la(a,a.J?a.pa:null,a.Y),o.K){pn(a.i,o);var s=o,l=a.L;l&&s.setTimeout(l),s.B&&(Ae(s),Te(s)),a.g=o}else Zn(a);0<n.j.length&&qn(n)}else"stop"!=c[0]&&"close"!=c[0]||oa(n,7);else 3==n.H&&("stop"==c[0]||"close"==c[0]?"stop"==c[0]?oa(n,7):Un(n):"noop"!=c[0]&&n.h&&n.h.Aa(c),n.A=0)}ne(4)}catch(c){}}function Ce(t){if(t.Z&&"function"==typeof t.Z)return t.Z();if("undefined"!==typeof Map&&t instanceof Map||"undefined"!==typeof Set&&t instanceof Set)return Array.from(t.values());if("string"===typeof t)return t.split("");if(d(t)){for(var e=[],n=t.length,a=0;a<n;a++)e.push(t[a]);return e}for(a in e=[],n=0,t)e[n++]=t[a];return e}function Ie(t){if(t.ta&&"function"==typeof t.ta)return t.ta();if(!t.Z||"function"!=typeof t.Z){if("undefined"!==typeof Map&&t instanceof Map)return Array.from(t.keys());if(!("undefined"!==typeof Set&&t instanceof Set)){if(d(t)||"string"===typeof t){var e=[];t=t.length;for(var n=0;n<t;n++)e.push(n);return e}e=[],n=0;for(const a in t)e[n++]=a;return e}}}function Pe(t,e){if(t.forEach&&"function"==typeof t.forEach)t.forEach(e,void 0);else if(d(t)||"string"===typeof t)Array.prototype.forEach.call(t,e,void 0);else for(var n=Ie(t),a=Ce(t),r=a.length,i=0;i<r;i++)e.call(void 0,a[i],n&&n[i],t)}a=ge.prototype,a.setTimeout=function(t){this.P=t},a.nb=function(t){t=t.target;const e=this.M;e&&3==Fn(t)?e.l():this.Pa(t)},a.Pa=function(t){try{if(t==this.g)t:{const u=Fn(this.g);var e=this.g.Ia();const d=this.g.da();if(!(3>u)&&(3!=u||j||this.g&&(this.h.h||this.g.ja()||jn(this.g)))){this.J||4!=u||7==e||ne(8==e||0>=d?3:2),Ae(this);var n=this.g.da();this.ca=n;e:if(Le(this)){var a=jn(this.g);t="";var r=a.length,i=4==Fn(this.g);if(!this.h.i){if("undefined"===typeof TextDecoder){De(this),Oe(this);var o="";break e}this.h.i=new h.TextDecoder}for(e=0;e<r;e++)this.h.h=!0,t+=this.h.i.decode(a[e],{stream:i&&e==r-1});a.splice(0,r),this.h.g+=t,this.C=0,o=this.h.g}else o=this.g.ja();if(this.i=200==n,qt(this.j,this.u,this.A,this.m,this.W,u,n),this.i){if(this.aa&&!this.K){e:{if(this.g){var s,l=this.g;if((s=l.g?l.g.getResponseHeader("X-HTTP-Initial-Response"):null)&&!A(s)){var c=s;break e}}c=null}if(!(n=c)){this.i=!1,this.o=3,re(12),De(this),Oe(this);break t}Kt(this.j,this.m,n,"Initial handshake response via X-HTTP-Initial-Response"),this.K=!0,Ve(this,n)}this.S?(ke(this,u,o),j&&this.i&&3==u&&($t(this.U,this.V,"tick",this.mb),this.V.start())):(Kt(this.j,this.m,o,null),Ve(this,o)),4==u&&De(this),this.i&&!this.J&&(4==u?ra(this.l,this):(this.i=!1,Te(this)))}else Yn(this.g),400==n&&0<o.indexOf("Unknown SID")?(this.o=3,re(12)):(this.o=0,re(13)),De(this),Oe(this)}}}catch(u){}},a.mb=function(){if(this.g){var t=Fn(this.g),e=this.g.ja();this.C<e.length&&(Ae(this),ke(this,t,e),this.i&&4!=t&&Te(this))}},a.cancel=function(){this.J=!0,De(this)},a.lb=function(){this.B=null;const t=Date.now();0<=t-this.Y?(Jt(this.j,this.A),2!=this.L&&(ne(),re(17)),De(this),this.o=2,Oe(this)):Se(this,this.Y-t)};var Ee=RegExp("^(?:([^:/?#.]+):)?(?://(?:([^\\\\/?#]*)@)?([^\\\\/?#]*?)(?::([0-9]+))?(?=[\\\\/?#]|$))?([^?#]+)?(?:\\?([^#]*))?(?:#([\\s\\S]*))?$");function Be(t,e){if(t){t=t.split("&");for(var n=0;n<t.length;n++){var a=t[n].indexOf("="),r=null;if(0<=a){var i=t[n].substring(0,a);r=t[n].substring(a+1)}else i=t[n];e(i,r?decodeURIComponent(r.replace(/\+/g," ")):"")}}}function Fe(t){if(this.g=this.s=this.j="",this.m=null,this.o=this.l="",this.h=!1,t instanceof Fe){this.h=t.h,Ye(this,t.j),this.s=t.s,this.g=t.g,xe(this,t.m),this.l=t.l;var e=t.i,n=new Ze;n.i=e.i,e.g&&(n.g=new Map(e.g),n.h=e.h),Ne(this,n),this.o=t.o}else t&&(e=String(t).match(Ee))?(this.h=!1,Ye(this,e[1]||"",!0),this.s=Ue(e[2]||""),this.g=Ue(e[3]||"",!0),xe(this,e[4]),this.l=Ue(e[5]||"",!0),Ne(this,e[6]||"",!0),this.o=Ue(e[7]||"")):(this.h=!1,this.i=new Ze(null,this.h))}function je(t){return new Fe(t)}function Ye(t,e,n){t.j=n?Ue(e,!0):e,t.j&&(t.j=t.j.replace(/:$/,""))}function xe(t,e){if(e){if(e=Number(e),isNaN(e)||0>e)throw Error("Bad port number "+e);t.m=e}else t.m=null}function Ne(t,e,n){e instanceof Ze?(t.i=e,on(t.i,t.h)):(n||(e=We(e,Xe)),t.i=new Ze(e,t.h))}function Re(t,e,n){t.i.set(e,n)}function $e(t){return Re(t,"zx",Math.floor(2147483648*Math.random()).toString(36)+Math.abs(Math.floor(2147483648*Math.random())^Date.now()).toString(36)),t}function Ue(t,e){return t?e?decodeURI(t.replace(/%25/g,"%2525")):decodeURIComponent(t):""}function We(t,e,n){return"string"===typeof t?(t=encodeURI(t).replace(e,Ge),n&&(t=t.replace(/%25([0-9a-fA-F]{2})/g,"%$1")),t):null}function Ge(t){return t=t.charCodeAt(0),"%"+(t>>4&15).toString(16)+(15&t).toString(16)}Fe.prototype.toString=function(){var t=[],e=this.j;e&&t.push(We(e,qe,!0),":");var n=this.g;return(n||"file"==e)&&(t.push("//"),(e=this.s)&&t.push(We(e,qe,!0),"@"),t.push(encodeURIComponent(String(n)).replace(/%25([0-9a-fA-F]{2})/g,"%$1")),n=this.m,null!=n&&t.push(":",String(n))),(n=this.l)&&(this.g&&"/"!=n.charAt(0)&&t.push("/"),t.push(We(n,"/"==n.charAt(0)?Je:Ke,!0))),(n=this.i.toString())&&t.push("?",n),(n=this.o)&&t.push("#",We(n,Qe)),t.join("")};var qe=/[#\/\?@]/g,Ke=/[#\?:]/g,Je=/[#\?]/g,Xe=/[#\?@]/g,Qe=/#/g;function Ze(t,e){this.h=this.g=null,this.i=t||null,this.j=!!e}function tn(t){t.g||(t.g=new Map,t.h=0,t.i&&Be(t.i,(function(e,n){t.add(decodeURIComponent(e.replace(/\+/g," ")),n)})))}function en(t,e){tn(t),e=rn(t,e),t.g.has(e)&&(t.i=null,t.h-=t.g.get(e).length,t.g.delete(e))}function nn(t,e){return tn(t),e=rn(t,e),t.g.has(e)}function an(t,e,n){en(t,e),0<n.length&&(t.i=null,t.g.set(rn(t,e),k(n)),t.h+=n.length)}function rn(t,e){return e=String(e),t.j&&(e=e.toLowerCase()),e}function on(t,e){e&&!t.j&&(tn(t),t.i=null,t.g.forEach((function(t,e){var n=e.toLowerCase();e!=n&&(en(this,e),an(this,n,t))}),t)),t.j=e}a=Ze.prototype,a.add=function(t,e){tn(this),this.i=null,t=rn(this,t);var n=this.g.get(t);return n||this.g.set(t,n=[]),n.push(e),this.h+=1,this},a.forEach=function(t,e){tn(this),this.g.forEach((function(n,a){n.forEach((function(n){t.call(e,n,a,this)}),this)}),this)},a.ta=function(){tn(this);const t=Array.from(this.g.values()),e=Array.from(this.g.keys()),n=[];for(let a=0;a<e.length;a++){const r=t[a];for(let t=0;t<r.length;t++)n.push(e[a])}return n},a.Z=function(t){tn(this);let e=[];if("string"===typeof t)nn(this,t)&&(e=e.concat(this.g.get(rn(this,t))));else{t=Array.from(this.g.values());for(let n=0;n<t.length;n++)e=e.concat(t[n])}return e},a.set=function(t,e){return tn(this),this.i=null,t=rn(this,t),nn(this,t)&&(this.h-=this.g.get(t).length),this.g.set(t,[e]),this.h+=1,this},a.get=function(t,e){return t?(t=this.Z(t),0<t.length?String(t[0]):e):e},a.toString=function(){if(this.i)return this.i;if(!this.g)return"";const t=[],e=Array.from(this.g.keys());for(var n=0;n<e.length;n++){var a=e[n];const i=encodeURIComponent(String(a)),o=this.Z(a);for(a=0;a<o.length;a++){var r=i;""!==o[a]&&(r+="="+encodeURIComponent(String(o[a]))),t.push(r)}}return this.i=t.join("&")};var sn=class{constructor(t,e){this.g=t,this.map=e}};function ln(t){this.l=t||cn,h.PerformanceNavigationTiming?(t=h.performance.getEntriesByType("navigation"),t=0<t.length&&("hq"==t[0].nextHopProtocol||"h2"==t[0].nextHopProtocol)):t=!!(h.g&&h.g.Ka&&h.g.Ka()&&h.g.Ka().ec),this.j=t?this.l:1,this.g=null,1<this.j&&(this.g=new Set),this.h=null,this.i=[]}var cn=10;function un(t){return!!t.h||!!t.g&&t.g.size>=t.j}function hn(t){return t.h?1:t.g?t.g.size:0}function dn(t,e){return t.h?t.h==e:!!t.g&&t.g.has(e)}function fn(t,e){t.g?t.g.add(e):t.h=e}function pn(t,e){t.h&&t.h==e?t.h=null:t.g&&t.g.has(e)&&t.g.delete(e)}function mn(t){if(null!=t.h)return t.i.concat(t.h.F);if(null!=t.g&&0!==t.g.size){let e=t.i;for(const n of t.g.values())e=e.concat(n.F);return e}return k(t.i)}ln.prototype.cancel=function(){if(this.i=mn(this),this.h)this.h.cancel(),this.h=null;else if(this.g&&0!==this.g.size){for(const t of this.g.values())t.cancel();this.g.clear()}};var vn=class{stringify(t){return h.JSON.stringify(t,void 0)}parse(t){return h.JSON.parse(t,void 0)}};function gn(){this.g=new vn}function _n(t,e,n){const a=n||"";try{Pe(t,(function(t,n){let r=t;f(t)&&(r=Lt(t)),e.push(a+n+"="+encodeURIComponent(r))}))}catch(r){throw e.push(a+"type="+encodeURIComponent("_badmap")),r}}function yn(t,e){const n=new Wt;if(h.Image){const a=new Image;a.onload=b(bn,n,a,"TestLoadImage: loaded",!0,e),a.onerror=b(bn,n,a,"TestLoadImage: error",!1,e),a.onabort=b(bn,n,a,"TestLoadImage: abort",!1,e),a.ontimeout=b(bn,n,a,"TestLoadImage: timeout",!1,e),h.setTimeout((function(){a.ontimeout&&a.ontimeout()}),1e4),a.src=t}else e(!1)}function bn(t,e,n,a,r){try{e.onload=null,e.onerror=null,e.onabort=null,e.ontimeout=null,r(a)}catch(i){}}function Mn(t){this.l=t.fc||null,this.j=t.ob||!1}function zn(t,e){Mt.call(this),this.F=t,this.u=e,this.m=void 0,this.readyState=wn,this.status=0,this.responseType=this.responseText=this.response=this.statusText="",this.onreadystatechange=null,this.v=new Headers,this.h=null,this.C="GET",this.B="",this.g=!1,this.A=this.j=this.l=null}M(Mn,ce),Mn.prototype.g=function(){return new zn(this.l,this.j)},Mn.prototype.i=function(t){return function(){return t}}({}),M(zn,Mt);var wn=0;function Ln(t){t.j.read().then(t.Xa.bind(t)).catch(t.ka.bind(t))}function kn(t){t.readyState=4,t.l=null,t.j=null,t.A=null,Hn(t)}function Hn(t){t.onreadystatechange&&t.onreadystatechange.call(t)}a=zn.prototype,a.open=function(t,e){if(this.readyState!=wn)throw this.abort(),Error("Error reopening a connection");this.C=t,this.B=e,this.readyState=1,Hn(this)},a.send=function(t){if(1!=this.readyState)throw this.abort(),Error("need to call open() first. ");this.g=!0;const e={headers:this.v,method:this.C,credentials:this.m,cache:void 0};t&&(e.body=t),(this.F||h).fetch(new Request(this.B,e)).then(this.$a.bind(this),this.ka.bind(this))},a.abort=function(){this.response=this.responseText="",this.v=new Headers,this.status=0,this.j&&this.j.cancel("Request was aborted.").catch((()=>{})),1<=this.readyState&&this.g&&4!=this.readyState&&(this.g=!1,kn(this)),this.readyState=wn},a.$a=function(t){if(this.g&&(this.l=t,this.h||(this.status=this.l.status,this.statusText=this.l.statusText,this.h=t.headers,this.readyState=2,Hn(this)),this.g&&(this.readyState=3,Hn(this),this.g)))if("arraybuffer"===this.responseType)t.arrayBuffer().then(this.Ya.bind(this),this.ka.bind(this));else if("undefined"!==typeof h.ReadableStream&&"body"in t){if(this.j=t.body.getReader(),this.u){if(this.responseType)throw Error('responseType must be empty for "streamBinaryChunks" mode responses.');this.response=[]}else this.response=this.responseText="",this.A=new TextDecoder;Ln(this)}else t.text().then(this.Za.bind(this),this.ka.bind(this))},a.Xa=function(t){if(this.g){if(this.u&&t.value)this.response.push(t.value);else if(!this.u){var e=t.value?t.value:new Uint8Array(0);(e=this.A.decode(e,{stream:!t.done}))&&(this.response=this.responseText+=e)}t.done?kn(this):Hn(this),3==this.readyState&&Ln(this)}},a.Za=function(t){this.g&&(this.response=this.responseText=t,kn(this))},a.Ya=function(t){this.g&&(this.response=t,kn(this))},a.ka=function(){this.g&&kn(this)},a.setRequestHeader=function(t,e){this.v.append(t,e)},a.getResponseHeader=function(t){return this.h&&this.h.get(t.toLowerCase())||""},a.getAllResponseHeaders=function(){if(!this.h)return"";const t=[],e=this.h.entries();for(var n=e.next();!n.done;)n=n.value,t.push(n[0]+": "+n[1]),n=e.next();return t.join("\r\n")},Object.defineProperty(zn.prototype,"withCredentials",{get:function(){return"include"===this.m},set:function(t){this.m=t?"include":"same-origin"}});var Tn=h.JSON.parse;function Sn(t){Mt.call(this),this.headers=new Map,this.u=t||null,this.h=!1,this.C=this.g=null,this.I="",this.m=0,this.j="",this.l=this.G=this.v=this.F=!1,this.B=0,this.A=null,this.K=An,this.L=this.M=!1}M(Sn,Mt);var An="",On=/^https?$/i,Dn=["POST","PUT"];function Vn(t){return B&&"number"===typeof t.timeout&&void 0!==t.ontimeout}function Cn(t,e){t.h=!1,t.g&&(t.l=!0,t.g.abort(),t.l=!1),t.j=e,t.m=5,In(t),En(t)}function In(t){t.F||(t.F=!0,zt(t,"complete"),zt(t,"error"))}function Pn(t){if(t.h&&"undefined"!=typeof u&&(!t.C[1]||4!=Fn(t)||2!=t.da()))if(t.v&&4==Fn(t))jt(t.La,0,t);else if(zt(t,"readystatechange"),4==Fn(t)){t.h=!1;try{const s=t.da();t:switch(s){case 200:case 201:case 202:case 204:case 206:case 304:case 1223:var e=!0;break t;default:e=!1}var n;if(!(n=e)){var a;if(a=0===s){var r=String(t.I).match(Ee)[1]||null;!r&&h.self&&h.self.location&&(r=h.self.location.protocol.slice(0,-1)),a=!On.test(r?r.toLowerCase():"")}n=a}if(n)zt(t,"complete"),zt(t,"success");else{t.m=6;try{var i=2<Fn(t)?t.g.statusText:""}catch(o){i=""}t.j=i+" ["+t.da()+"]",In(t)}}finally{En(t)}}}function En(t,e){if(t.g){Bn(t);const a=t.g,r=t.C[0]?()=>{}:null;t.g=null,t.C=null,e||zt(t,"ready");try{a.onreadystatechange=r}catch(n){}}}function Bn(t){t.g&&t.L&&(t.g.ontimeout=null),t.A&&(h.clearTimeout(t.A),t.A=null)}function Fn(t){return t.g?t.g.readyState:0}function jn(t){try{if(!t.g)return null;if("response"in t.g)return t.g.response;switch(t.K){case An:case"text":return t.g.responseText;case"arraybuffer":if("mozResponseArrayBuffer"in t.g)return t.g.mozResponseArrayBuffer}return null}catch(Ja){return null}}function Yn(t){const e={};t=(t.g&&2<=Fn(t)&&t.g.getAllResponseHeaders()||"").split("\r\n");for(let a=0;a<t.length;a++){if(A(t[a]))continue;var n=Ot(t[a]);const r=n[0];if(n=n[1],"string"!==typeof n)continue;n=n.trim();const i=e[r]||[];e[r]=i,i.push(n)}et(e,(function(t){return t.join(", ")}))}function xn(t){let e="";return tt(t,(function(t,n){e+=n,e+=":",e+=t,e+="\r\n"})),e}function Nn(t,e,n){t:{for(a in n){var a=!1;break t}a=!0}a||(n=xn(n),"string"===typeof t?null!=n&&encodeURIComponent(String(n)):Re(t,e,n))}function Rn(t,e,n){return n&&n.internalChannelParams&&n.internalChannelParams[t]||e}function $n(t){this.Ga=0,this.j=[],this.l=new Wt,this.pa=this.wa=this.I=this.Y=this.g=this.Da=this.F=this.na=this.o=this.U=this.s=null,this.fb=this.W=0,this.cb=Rn("failFast",!1,t),this.G=this.v=this.u=this.m=this.h=null,this.aa=!0,this.Fa=this.V=-1,this.ba=this.A=this.C=0,this.ab=Rn("baseRetryDelayMs",5e3,t),this.hb=Rn("retryDelaySeedMs",1e4,t),this.eb=Rn("forwardChannelMaxRetries",2,t),this.xa=Rn("forwardChannelRequestTimeoutMs",2e4,t),this.va=t&&t.xmlHttpFactory||void 0,this.Ha=t&&t.dc||!1,this.L=void 0,this.J=t&&t.supportsCrossDomainXhr||!1,this.K="",this.i=new ln(t&&t.concurrentRequestLimit),this.Ja=new gn,this.P=t&&t.fastHandshake||!1,this.O=t&&t.encodeInitMessageHeaders||!1,this.P&&this.O&&(this.O=!1),this.bb=t&&t.bc||!1,t&&t.Ea&&this.l.Ea(),t&&t.forceLongPolling&&(this.aa=!1),this.ca=!this.P&&this.aa&&t&&t.detectBufferingProxy||!1,this.qa=void 0,t&&t.longPollingTimeout&&0<t.longPollingTimeout&&(this.qa=t.longPollingTimeout),this.oa=void 0,this.S=0,this.M=!1,this.ma=this.B=null}function Un(t){if(Gn(t),3==t.H){var e=t.W++,n=je(t.I);if(Re(n,"SID",t.K),Re(n,"RID",e),Re(n,"TYPE","terminate"),Xn(t,n),e=new ge(t,t.l,e),e.L=2,e.v=$e(je(n)),n=!1,h.navigator&&h.navigator.sendBeacon)try{n=h.navigator.sendBeacon(e.v.toString(),"")}catch(a){}!n&&h.Image&&((new Image).src=e.v,n=!0),n||(e.g=ca(e.l,null),e.g.ha(e.v)),e.G=Date.now(),Te(e)}sa(t)}function Wn(t){t.g&&(ea(t),t.g.cancel(),t.g=null)}function Gn(t){Wn(t),t.u&&(h.clearTimeout(t.u),t.u=null),aa(t),t.i.cancel(),t.m&&("number"===typeof t.m&&h.clearTimeout(t.m),t.m=null)}function qn(t){if(!un(t.i)&&!t.m){t.m=!0;var e=t.Na;Vt||Pt(),Ct||(Vt(),Ct=!0),It.add(e,t),t.C=0}}function Kn(t,e){return!(hn(t.i)>=t.i.j-(t.m?1:0))&&(t.m?(t.j=e.F.concat(t.j),!0):!(1==t.H||2==t.H||t.C>=(t.cb?0:t.eb))&&(t.m=oe(y(t.Na,t,e),ia(t,t.C)),t.C++,!0))}function Jn(t,e){var n;n=e?e.m:t.W++;const a=je(t.I);Re(a,"SID",t.K),Re(a,"RID",n),Re(a,"AID",t.V),Xn(t,a),t.o&&t.s&&Nn(a,t.o,t.s),n=new ge(t,t.l,n,t.C+1),null===t.o&&(n.I=t.s),e&&(t.j=e.F.concat(t.j)),e=Qn(t,n,1e3),n.setTimeout(Math.round(.5*t.xa)+Math.round(.5*t.xa*Math.random())),fn(t.i,n),ze(n,a,e)}function Xn(t,e){t.na&&tt(t.na,(function(t,n){Re(e,n,t)})),t.h&&Pe({},(function(t,n){Re(e,n,t)}))}function Qn(t,e,n){n=Math.min(t.j.length,n);var a=t.h?y(t.h.Va,t.h,t):null;t:{var r=t.j;let e=-1;for(;;){const t=["count="+n];-1==e?0<n?(e=r[0].g,t.push("ofs="+e)):e=0:t.push("ofs="+e);let o=!0;for(let s=0;s<n;s++){let n=r[s].g;const l=r[s].map;if(n-=e,0>n)e=Math.max(0,r[s].g-100),o=!1;else try{_n(l,t,"req"+n+"_")}catch(i){a&&a(l)}}if(o){a=t.join("&");break t}}}return t=t.j.splice(0,n),e.F=t,a}function Zn(t){if(!t.g&&!t.u){t.ba=1;var e=t.Ma;Vt||Pt(),Ct||(Vt(),Ct=!0),It.add(e,t),t.A=0}}function ta(t){return!(t.g||t.u||3<=t.A)&&(t.ba++,t.u=oe(y(t.Ma,t),ia(t,t.A)),t.A++,!0)}function ea(t){null!=t.B&&(h.clearTimeout(t.B),t.B=null)}function na(t){t.g=new ge(t,t.l,"rpc",t.ba),null===t.o&&(t.g.I=t.s),t.g.O=0;var e=je(t.wa);Re(e,"RID","rpc"),Re(e,"SID",t.K),Re(e,"AID",t.V),Re(e,"CI",t.G?"0":"1"),!t.G&&t.qa&&Re(e,"TO",t.qa),Re(e,"TYPE","xmlhttp"),Xn(t,e),t.o&&t.s&&Nn(e,t.o,t.s),t.L&&t.g.setTimeout(t.L);var n=t.g;t=t.pa,n.L=1,n.v=$e(je(e)),n.s=null,n.S=!0,we(n,t)}function aa(t){null!=t.v&&(h.clearTimeout(t.v),t.v=null)}function ra(t,e){var n=null;if(t.g==e){aa(t),ea(t),t.g=null;var a=2}else{if(!dn(t.i,e))return;n=e.F,pn(t.i,e),a=1}if(0!=t.H)if(e.i)if(1==a){n=e.s?e.s.length:0,e=Date.now()-e.G;var r=t.C;a=te(),zt(a,new ie(a,n)),qn(t)}else Zn(t);else if(r=e.o,3==r||0==r&&0<e.ca||!(1==a&&Kn(t,e)||2==a&&ta(t)))switch(n&&0<n.length&&(e=t.i,e.i=e.i.concat(n)),r){case 1:oa(t,5);break;case 4:oa(t,10);break;case 3:oa(t,6);break;default:oa(t,2)}}function ia(t,e){let n=t.ab+Math.floor(Math.random()*t.hb);return t.isActive()||(n*=2),n*e}function oa(t,e){if(t.l.info("Error code "+e),2==e){var n=null;t.h&&(n=null);var a=y(t.pb,t);n||(n=new Fe("//www.google.com/images/cleardot.gif"),h.location&&"http"==h.location.protocol||Ye(n,"https"),$e(n)),yn(n.toString(),a)}else re(2);t.H=0,t.h&&t.h.za(e),sa(t),Gn(t)}function sa(t){if(t.H=0,t.ma=[],t.h){const e=mn(t.i);0==e.length&&0==t.j.length||(H(t.ma,e),H(t.ma,t.j),t.i.i.length=0,k(t.j),t.j.length=0),t.h.ya()}}function la(t,e,n){var a=n instanceof Fe?je(n):new Fe(n);if(""!=a.g)e&&(a.g=e+"."+a.g),xe(a,a.m);else{var r=h.location;a=r.protocol,e=e?e+"."+r.hostname:r.hostname,r=+r.port;var i=new Fe(null);a&&Ye(i,a),e&&(i.g=e),r&&xe(i,r),n&&(i.l=n),a=i}return n=t.F,e=t.Da,n&&e&&Re(a,n,e),Re(a,"VER",t.ra),Xn(t,a),a}function ca(t,e,n){if(e&&!t.J)throw Error("Can't create secondary domain capable XhrIo object.");return e=n&&t.Ha&&!t.va?new Sn(new Mn({ob:!0})):new Sn(t.va),e.Oa(t.J),e}function ua(){}function ha(){if(B&&!(10<=Number(G)))throw Error("Environmental error: no available transport.")}function da(t,e){Mt.call(this),this.g=new $n(e),this.l=t,this.h=e&&e.messageUrlParams||null,t=e&&e.messageHeaders||null,e&&e.clientProtocolHeaderRequired&&(t?t["X-Client-Protocol"]="webchannel":t={"X-Client-Protocol":"webchannel"}),this.g.s=t,t=e&&e.initMessageHeaders||null,e&&e.messageContentType&&(t?t["X-WebChannel-Content-Type"]=e.messageContentType:t={"X-WebChannel-Content-Type":e.messageContentType}),e&&e.Ca&&(t?t["X-WebChannel-Client-Profile"]=e.Ca:t={"X-WebChannel-Client-Profile":e.Ca}),this.g.U=t,(t=e&&e.cc)&&!A(t)&&(this.g.o=t),this.A=e&&e.supportsCrossDomainXhr||!1,this.v=e&&e.sendRawJson||!1,(e=e&&e.httpSessionIdParam)&&!A(e)&&(this.g.F=e,t=this.h,null!==t&&e in t&&(t=this.h,e in t&&delete t[e])),this.j=new ma(this)}function fa(t){pe.call(this),t.__headers__&&(this.headers=t.__headers__,this.statusCode=t.__status__,delete t.__headers__,delete t.__status__);var e=t.__sm__;if(e){t:{for(const n in e){t=n;break t}t=void 0}(this.i=t)&&(t=this.i,e=null!==e&&t in e?e[t]:void 0),this.data=e}else this.data=t}function pa(){me.call(this),this.status=1}function ma(t){this.g=t}function va(){this.blockSize=-1}function ga(){this.blockSize=-1,this.blockSize=64,this.g=Array(4),this.m=Array(this.blockSize),this.i=this.h=0,this.reset()}function _a(t,e,n){n||(n=0);var a=Array(16);if("string"===typeof e)for(var r=0;16>r;++r)a[r]=e.charCodeAt(n++)|e.charCodeAt(n++)<<8|e.charCodeAt(n++)<<16|e.charCodeAt(n++)<<24;else for(r=0;16>r;++r)a[r]=e[n++]|e[n++]<<8|e[n++]<<16|e[n++]<<24;e=t.g[0],n=t.g[1],r=t.g[2];var i=t.g[3],o=e+(i^n&(r^i))+a[0]+3614090360&4294967295;e=n+(o<<7&4294967295|o>>>25),o=i+(r^e&(n^r))+a[1]+3905402710&4294967295,i=e+(o<<12&4294967295|o>>>20),o=r+(n^i&(e^n))+a[2]+606105819&4294967295,r=i+(o<<17&4294967295|o>>>15),o=n+(e^r&(i^e))+a[3]+3250441966&4294967295,n=r+(o<<22&4294967295|o>>>10),o=e+(i^n&(r^i))+a[4]+4118548399&4294967295,e=n+(o<<7&4294967295|o>>>25),o=i+(r^e&(n^r))+a[5]+1200080426&4294967295,i=e+(o<<12&4294967295|o>>>20),o=r+(n^i&(e^n))+a[6]+2821735955&4294967295,r=i+(o<<17&4294967295|o>>>15),o=n+(e^r&(i^e))+a[7]+4249261313&4294967295,n=r+(o<<22&4294967295|o>>>10),o=e+(i^n&(r^i))+a[8]+1770035416&4294967295,e=n+(o<<7&4294967295|o>>>25),o=i+(r^e&(n^r))+a[9]+2336552879&4294967295,i=e+(o<<12&4294967295|o>>>20),o=r+(n^i&(e^n))+a[10]+4294925233&4294967295,r=i+(o<<17&4294967295|o>>>15),o=n+(e^r&(i^e))+a[11]+2304563134&4294967295,n=r+(o<<22&4294967295|o>>>10),o=e+(i^n&(r^i))+a[12]+1804603682&4294967295,e=n+(o<<7&4294967295|o>>>25),o=i+(r^e&(n^r))+a[13]+4254626195&4294967295,i=e+(o<<12&4294967295|o>>>20),o=r+(n^i&(e^n))+a[14]+2792965006&4294967295,r=i+(o<<17&4294967295|o>>>15),o=n+(e^r&(i^e))+a[15]+1236535329&4294967295,n=r+(o<<22&4294967295|o>>>10),o=e+(r^i&(n^r))+a[1]+4129170786&4294967295,e=n+(o<<5&4294967295|o>>>27),o=i+(n^r&(e^n))+a[6]+3225465664&4294967295,i=e+(o<<9&4294967295|o>>>23),o=r+(e^n&(i^e))+a[11]+643717713&4294967295,r=i+(o<<14&4294967295|o>>>18),o=n+(i^e&(r^i))+a[0]+3921069994&4294967295,n=r+(o<<20&4294967295|o>>>12),o=e+(r^i&(n^r))+a[5]+3593408605&4294967295,e=n+(o<<5&4294967295|o>>>27),o=i+(n^r&(e^n))+a[10]+38016083&4294967295,i=e+(o<<9&4294967295|o>>>23),o=r+(e^n&(i^e))+a[15]+3634488961&4294967295,r=i+(o<<14&4294967295|o>>>18),o=n+(i^e&(r^i))+a[4]+3889429448&4294967295,n=r+(o<<20&4294967295|o>>>12),o=e+(r^i&(n^r))+a[9]+568446438&4294967295,e=n+(o<<5&4294967295|o>>>27),o=i+(n^r&(e^n))+a[14]+3275163606&4294967295,i=e+(o<<9&4294967295|o>>>23),o=r+(e^n&(i^e))+a[3]+4107603335&4294967295,r=i+(o<<14&4294967295|o>>>18),o=n+(i^e&(r^i))+a[8]+1163531501&4294967295,n=r+(o<<20&4294967295|o>>>12),o=e+(r^i&(n^r))+a[13]+2850285829&4294967295,e=n+(o<<5&4294967295|o>>>27),o=i+(n^r&(e^n))+a[2]+4243563512&4294967295,i=e+(o<<9&4294967295|o>>>23),o=r+(e^n&(i^e))+a[7]+1735328473&4294967295,r=i+(o<<14&4294967295|o>>>18),o=n+(i^e&(r^i))+a[12]+2368359562&4294967295,n=r+(o<<20&4294967295|o>>>12),o=e+(n^r^i)+a[5]+4294588738&4294967295,e=n+(o<<4&4294967295|o>>>28),o=i+(e^n^r)+a[8]+2272392833&4294967295,i=e+(o<<11&4294967295|o>>>21),o=r+(i^e^n)+a[11]+1839030562&4294967295,r=i+(o<<16&4294967295|o>>>16),o=n+(r^i^e)+a[14]+4259657740&4294967295,n=r+(o<<23&4294967295|o>>>9),o=e+(n^r^i)+a[1]+2763975236&4294967295,e=n+(o<<4&4294967295|o>>>28),o=i+(e^n^r)+a[4]+1272893353&4294967295,i=e+(o<<11&4294967295|o>>>21),o=r+(i^e^n)+a[7]+4139469664&4294967295,r=i+(o<<16&4294967295|o>>>16),o=n+(r^i^e)+a[10]+3200236656&4294967295,n=r+(o<<23&4294967295|o>>>9),o=e+(n^r^i)+a[13]+681279174&4294967295,e=n+(o<<4&4294967295|o>>>28),o=i+(e^n^r)+a[0]+3936430074&4294967295,i=e+(o<<11&4294967295|o>>>21),o=r+(i^e^n)+a[3]+3572445317&4294967295,r=i+(o<<16&4294967295|o>>>16),o=n+(r^i^e)+a[6]+76029189&4294967295,n=r+(o<<23&4294967295|o>>>9),o=e+(n^r^i)+a[9]+3654602809&4294967295,e=n+(o<<4&4294967295|o>>>28),o=i+(e^n^r)+a[12]+3873151461&4294967295,i=e+(o<<11&4294967295|o>>>21),o=r+(i^e^n)+a[15]+530742520&4294967295,r=i+(o<<16&4294967295|o>>>16),o=n+(r^i^e)+a[2]+3299628645&4294967295,n=r+(o<<23&4294967295|o>>>9),o=e+(r^(n|~i))+a[0]+4096336452&4294967295,e=n+(o<<6&4294967295|o>>>26),o=i+(n^(e|~r))+a[7]+1126891415&4294967295,i=e+(o<<10&4294967295|o>>>22),o=r+(e^(i|~n))+a[14]+2878612391&4294967295,r=i+(o<<15&4294967295|o>>>17),o=n+(i^(r|~e))+a[5]+4237533241&4294967295,n=r+(o<<21&4294967295|o>>>11),o=e+(r^(n|~i))+a[12]+1700485571&4294967295,e=n+(o<<6&4294967295|o>>>26),o=i+(n^(e|~r))+a[3]+2399980690&4294967295,i=e+(o<<10&4294967295|o>>>22),o=r+(e^(i|~n))+a[10]+4293915773&4294967295,r=i+(o<<15&4294967295|o>>>17),o=n+(i^(r|~e))+a[1]+2240044497&4294967295,n=r+(o<<21&4294967295|o>>>11),o=e+(r^(n|~i))+a[8]+1873313359&4294967295,e=n+(o<<6&4294967295|o>>>26),o=i+(n^(e|~r))+a[15]+4264355552&4294967295,i=e+(o<<10&4294967295|o>>>22),o=r+(e^(i|~n))+a[6]+2734768916&4294967295,r=i+(o<<15&4294967295|o>>>17),o=n+(i^(r|~e))+a[13]+1309151649&4294967295,n=r+(o<<21&4294967295|o>>>11),o=e+(r^(n|~i))+a[4]+4149444226&4294967295,e=n+(o<<6&4294967295|o>>>26),o=i+(n^(e|~r))+a[11]+3174756917&4294967295,i=e+(o<<10&4294967295|o>>>22),o=r+(e^(i|~n))+a[2]+718787259&4294967295,r=i+(o<<15&4294967295|o>>>17),o=n+(i^(r|~e))+a[9]+3951481745&4294967295,t.g[0]=t.g[0]+e&4294967295,t.g[1]=t.g[1]+(r+(o<<21&4294967295|o>>>11))&4294967295,t.g[2]=t.g[2]+r&4294967295,t.g[3]=t.g[3]+i&4294967295}function ya(t,e){this.h=e;for(var n=[],a=!0,r=t.length-1;0<=r;r--){var i=0|t[r];a&&i==e||(n[r]=i,a=!1)}this.g=n}a=Sn.prototype,a.Oa=function(t){this.M=t},a.ha=function(t,e,n,a){if(this.g)throw Error("[goog.net.XhrIo] Object is active with another request="+this.I+"; newUri="+t);e=e?e.toUpperCase():"GET",this.I=t,this.j="",this.m=0,this.F=!1,this.h=!0,this.g=this.u?this.u.g():de.g(),this.C=this.u?ue(this.u):ue(de),this.g.onreadystatechange=y(this.La,this);try{this.G=!0,this.g.open(e,String(t),!0),this.G=!1}catch(i){return void Cn(this,i)}if(t=n||"",n=new Map(this.headers),a)if(Object.getPrototypeOf(a)===Object.prototype)for(var r in a)n.set(r,a[r]);else{if("function"!==typeof a.keys||"function"!==typeof a.get)throw Error("Unknown input type for opt_headers: "+String(a));for(const t of a.keys())n.set(t,a.get(t))}a=Array.from(n.keys()).find((t=>"content-type"==t.toLowerCase())),r=h.FormData&&t instanceof h.FormData,!(0<=L(Dn,e))||a||r||n.set("Content-Type","application/x-www-form-urlencoded;charset=utf-8");for(const[o,s]of n)this.g.setRequestHeader(o,s);this.K&&(this.g.responseType=this.K),"withCredentials"in this.g&&this.g.withCredentials!==this.M&&(this.g.withCredentials=this.M);try{Bn(this),0<this.B&&((this.L=Vn(this.g))?(this.g.timeout=this.B,this.g.ontimeout=y(this.ua,this)):this.A=jt(this.ua,this.B,this)),this.v=!0,this.g.send(t),this.v=!1}catch(i){Cn(this,i)}},a.ua=function(){"undefined"!=typeof u&&this.g&&(this.j="Timed out after "+this.B+"ms, aborting",this.m=8,zt(this,"timeout"),this.abort(8))},a.abort=function(t){this.g&&this.h&&(this.h=!1,this.l=!0,this.g.abort(),this.l=!1,this.m=t||7,zt(this,"complete"),zt(this,"abort"),En(this))},a.N=function(){this.g&&(this.h&&(this.h=!1,this.l=!0,this.g.abort(),this.l=!1),En(this,!0)),Sn.$.N.call(this)},a.La=function(){this.s||(this.G||this.v||this.l?Pn(this):this.kb())},a.kb=function(){Pn(this)},a.isActive=function(){return!!this.g},a.da=function(){try{return 2<Fn(this)?this.g.status:-1}catch(t){return-1}},a.ja=function(){try{return this.g?this.g.responseText:""}catch(t){return""}},a.Wa=function(t){if(this.g){var e=this.g.responseText;return t&&0==e.indexOf(t)&&(e=e.substring(t.length)),Tn(e)}},a.Ia=function(){return this.m},a.Sa=function(){return"string"===typeof this.j?this.j:String(this.j)},a=$n.prototype,a.ra=8,a.H=1,a.Na=function(t){if(this.m)if(this.m=null,1==this.H){if(!t){this.W=Math.floor(1e5*Math.random()),t=this.W++;const r=new ge(this,this.l,t);let i=this.s;if(this.U&&(i?(i=nt(i),rt(i,this.U)):i=this.U),null!==this.o||this.O||(r.I=i,i=null),this.P)t:{for(var e=0,n=0;n<this.j.length;n++){var a=this.j[n];if(a="__data__"in a.map&&(a=a.map.__data__,"string"===typeof a)?a.length:void 0,void 0===a)break;if(e+=a,4096<e){e=n;break t}if(4096===e||n===this.j.length-1){e=n+1;break t}}e=1e3}else e=1e3;e=Qn(this,r,e),n=je(this.I),Re(n,"RID",t),Re(n,"CVER",22),this.F&&Re(n,"X-HTTP-Session-Id",this.F),Xn(this,n),i&&(this.O?e="headers="+encodeURIComponent(String(xn(i)))+"&"+e:this.o&&Nn(n,this.o,i)),fn(this.i,r),this.bb&&Re(n,"TYPE","init"),this.P?(Re(n,"$req",e),Re(n,"SID","null"),r.aa=!0,ze(r,n,null)):ze(r,n,e),this.H=2}}else 3==this.H&&(t?Jn(this,t):0==this.j.length||un(this.i)||Jn(this))},a.Ma=function(){if(this.u=null,na(this),this.ca&&!(this.M||null==this.g||0>=this.S)){var t=2*this.S;this.l.info("BP detection timer enabled: "+t),this.B=oe(y(this.jb,this),t)}},a.jb=function(){this.B&&(this.B=null,this.l.info("BP detection timeout reached."),this.l.info("Buffering proxy detected and switch to long-polling!"),this.G=!1,this.M=!0,re(10),Wn(this),na(this))},a.ib=function(){null!=this.v&&(this.v=null,Wn(this),ta(this),re(19))},a.pb=function(t){t?(this.l.info("Successfully pinged google.com"),re(2)):(this.l.info("Failed to ping google.com"),re(1))},a.isActive=function(){return!!this.h&&this.h.isActive(this)},a=ua.prototype,a.Ba=function(){},a.Aa=function(){},a.za=function(){},a.ya=function(){},a.isActive=function(){return!0},a.Va=function(){},ha.prototype.g=function(t,e){return new da(t,e)},M(da,Mt),da.prototype.m=function(){this.g.h=this.j,this.A&&(this.g.J=!0);var t=this.g,e=this.l,n=this.h||void 0;re(0),t.Y=e,t.na=n||{},t.G=t.aa,t.I=la(t,null,t.Y),qn(t)},da.prototype.close=function(){Un(this.g)},da.prototype.u=function(t){var e=this.g;if("string"===typeof t){var n={};n.__data__=t,t=n}else this.v&&(n={},n.__data__=Lt(t),t=n);e.j.push(new sn(e.fb++,t)),3==e.H&&qn(e)},da.prototype.N=function(){this.g.h=null,delete this.j,Un(this.g),delete this.g,da.$.N.call(this)},M(fa,pe),M(pa,me),M(ma,ua),ma.prototype.Ba=function(){zt(this.g,"a")},ma.prototype.Aa=function(t){zt(this.g,new fa(t))},ma.prototype.za=function(t){zt(this.g,new pa)},ma.prototype.ya=function(){zt(this.g,"b")},M(ga,va),ga.prototype.reset=function(){this.g[0]=1732584193,this.g[1]=4023233417,this.g[2]=2562383102,this.g[3]=271733878,this.i=this.h=0},ga.prototype.j=function(t,e){void 0===e&&(e=t.length);for(var n=e-this.blockSize,a=this.m,r=this.h,i=0;i<e;){if(0==r)for(;i<=n;)_a(this,t,i),i+=this.blockSize;if("string"===typeof t){for(;i<e;)if(a[r++]=t.charCodeAt(i++),r==this.blockSize){_a(this,a),r=0;break}}else for(;i<e;)if(a[r++]=t[i++],r==this.blockSize){_a(this,a),r=0;break}}this.h=r,this.i+=e},ga.prototype.l=function(){var t=Array((56>this.h?this.blockSize:2*this.blockSize)-this.h);t[0]=128;for(var e=1;e<t.length-8;++e)t[e]=0;var n=8*this.i;for(e=t.length-8;e<t.length;++e)t[e]=255&n,n/=256;for(this.j(t),t=Array(16),e=n=0;4>e;++e)for(var a=0;32>a;a+=8)t[n++]=this.g[e]>>>a&255;return t};var ba={};function Ma(t){return-128<=t&&128>t?C(t,(function(t){return new ya([0|t],0>t?-1:0)})):new ya([0|t],0>t?-1:0)}function za(t){if(isNaN(t)||!isFinite(t))return ka;if(0>t)return Oa(za(-t));for(var e=[],n=1,a=0;t>=n;a++)e[a]=t/n|0,n*=La;return new ya(e,0)}function wa(t,e){if(0==t.length)throw Error("number format error: empty string");if(e=e||10,2>e||36<e)throw Error("radix out of range: "+e);if("-"==t.charAt(0))return Oa(wa(t.substring(1),e));if(0<=t.indexOf("-"))throw Error('number format error: interior "-" character');for(var n=za(Math.pow(e,8)),a=ka,r=0;r<t.length;r+=8){var i=Math.min(8,t.length-r),o=parseInt(t.substring(r,r+i),e);8>i?(i=za(Math.pow(e,i)),a=a.R(i).add(za(o))):(a=a.R(n),a=a.add(za(o)))}return a}var La=4294967296,ka=Ma(0),Ha=Ma(1),Ta=Ma(16777216);function Sa(t){if(0!=t.h)return!1;for(var e=0;e<t.g.length;e++)if(0!=t.g[e])return!1;return!0}function Aa(t){return-1==t.h}function Oa(t){for(var e=t.g.length,n=[],a=0;a<e;a++)n[a]=~t.g[a];return new ya(n,~t.h).add(Ha)}function Da(t,e){return t.add(Oa(e))}function Va(t,e){for(;(65535&t[e])!=t[e];)t[e+1]+=t[e]>>>16,t[e]&=65535,e++}function Ca(t,e){this.g=t,this.h=e}function Ia(t,e){if(Sa(e))throw Error("division by zero");if(Sa(t))return new Ca(ka,ka);if(Aa(t))return e=Ia(Oa(t),e),new Ca(Oa(e.g),Oa(e.h));if(Aa(e))return e=Ia(t,Oa(e)),new Ca(Oa(e.g),e.h);if(30<t.g.length){if(Aa(t)||Aa(e))throw Error("slowDivide_ only works with positive integers.");for(var n=Ha,a=e;0>=a.X(t);)n=Pa(n),a=Pa(a);var r=Ea(n,1),i=Ea(a,1);for(a=Ea(a,2),n=Ea(n,2);!Sa(a);){var o=i.add(a);0>=o.X(t)&&(r=r.add(n),i=o),a=Ea(a,1),n=Ea(n,1)}return e=Da(t,r.R(e)),new Ca(r,e)}for(r=ka;0<=t.X(e);){for(n=Math.max(1,Math.floor(t.ea()/e.ea())),a=Math.ceil(Math.log(n)/Math.LN2),a=48>=a?1:Math.pow(2,a-48),i=za(n),o=i.R(e);Aa(o)||0<o.X(t);)n-=a,i=za(n),o=i.R(e);Sa(i)&&(i=Ha),r=r.add(i),t=Da(t,o)}return new Ca(r,t)}function Pa(t){for(var e=t.g.length+1,n=[],a=0;a<e;a++)n[a]=t.D(a)<<1|t.D(a-1)>>>31;return new ya(n,t.h)}function Ea(t,e){var n=e>>5;e%=32;for(var a=t.g.length-n,r=[],i=0;i<a;i++)r[i]=0<e?t.D(i+n)>>>e|t.D(i+n+1)<<32-e:t.D(i+n);return new ya(r,t.h)}a=ya.prototype,a.ea=function(){if(Aa(this))return-Oa(this).ea();for(var t=0,e=1,n=0;n<this.g.length;n++){var a=this.D(n);t+=(0<=a?a:La+a)*e,e*=La}return t},a.toString=function(t){if(t=t||10,2>t||36<t)throw Error("radix out of range: "+t);if(Sa(this))return"0";if(Aa(this))return"-"+Oa(this).toString(t);for(var e=za(Math.pow(t,6)),n=this,a="";;){var r=Ia(n,e).g;n=Da(n,r.R(e));var i=((0<n.g.length?n.g[0]:n.h)>>>0).toString(t);if(n=r,Sa(n))return i+a;for(;6>i.length;)i="0"+i;a=i+a}},a.D=function(t){return 0>t?0:t<this.g.length?this.g[t]:this.h},a.X=function(t){return t=Da(this,t),Aa(t)?-1:Sa(t)?0:1},a.abs=function(){return Aa(this)?Oa(this):this},a.add=function(t){for(var e=Math.max(this.g.length,t.g.length),n=[],a=0,r=0;r<=e;r++){var i=a+(65535&this.D(r))+(65535&t.D(r)),o=(i>>>16)+(this.D(r)>>>16)+(t.D(r)>>>16);a=o>>>16,i&=65535,o&=65535,n[r]=o<<16|i}return new ya(n,-2147483648&n[n.length-1]?-1:0)},a.R=function(t){if(Sa(this)||Sa(t))return ka;if(Aa(this))return Aa(t)?Oa(this).R(Oa(t)):Oa(Oa(this).R(t));if(Aa(t))return Oa(this.R(Oa(t)));if(0>this.X(Ta)&&0>t.X(Ta))return za(this.ea()*t.ea());for(var e=this.g.length+t.g.length,n=[],a=0;a<2*e;a++)n[a]=0;for(a=0;a<this.g.length;a++)for(var r=0;r<t.g.length;r++){var i=this.D(a)>>>16,o=65535&this.D(a),s=t.D(r)>>>16,l=65535&t.D(r);n[2*a+2*r]+=o*l,Va(n,2*a+2*r),n[2*a+2*r+1]+=i*l,Va(n,2*a+2*r+1),n[2*a+2*r+1]+=o*s,Va(n,2*a+2*r+1),n[2*a+2*r+2]+=i*s,Va(n,2*a+2*r+2)}for(a=0;a<e;a++)n[a]=n[2*a+1]<<16|n[2*a];for(a=e;a<2*e;a++)n[a]=0;return new ya(n,0)},a.gb=function(t){return Ia(this,t).h},a.and=function(t){for(var e=Math.max(this.g.length,t.g.length),n=[],a=0;a<e;a++)n[a]=this.D(a)&t.D(a);return new ya(n,this.h&t.h)},a.or=function(t){for(var e=Math.max(this.g.length,t.g.length),n=[],a=0;a<e;a++)n[a]=this.D(a)|t.D(a);return new ya(n,this.h|t.h)},a.xor=function(t){for(var e=Math.max(this.g.length,t.g.length),n=[],a=0;a<e;a++)n[a]=this.D(a)^t.D(a);return new ya(n,this.h^t.h)},ha.prototype.createWebChannel=ha.prototype.g,da.prototype.send=da.prototype.u,da.prototype.open=da.prototype.m,da.prototype.close=da.prototype.close,se.NO_ERROR=0,se.TIMEOUT=8,se.HTTP_ERROR=6,le.COMPLETE="complete",he.EventType=fe,fe.OPEN="a",fe.CLOSE="b",fe.ERROR="c",fe.MESSAGE="d",Mt.prototype.listen=Mt.prototype.O,Sn.prototype.listenOnce=Sn.prototype.P,Sn.prototype.getLastError=Sn.prototype.Sa,Sn.prototype.getLastErrorCode=Sn.prototype.Ia,Sn.prototype.getStatus=Sn.prototype.da,Sn.prototype.getResponseJson=Sn.prototype.Wa,Sn.prototype.getResponseText=Sn.prototype.ja,Sn.prototype.send=Sn.prototype.ha,Sn.prototype.setWithCredentials=Sn.prototype.Oa,ga.prototype.digest=ga.prototype.l,ga.prototype.reset=ga.prototype.reset,ga.prototype.update=ga.prototype.j,ya.prototype.add=ya.prototype.add,ya.prototype.multiply=ya.prototype.R,ya.prototype.modulo=ya.prototype.gb,ya.prototype.compare=ya.prototype.X,ya.prototype.toNumber=ya.prototype.ea,ya.prototype.toString=ya.prototype.toString,ya.prototype.getBits=ya.prototype.D,ya.fromNumber=za,ya.fromString=wa;var Ba=c.createWebChannelTransport=function(){return new ha},Fa=c.getStatEventTarget=function(){return te()},ja=c.ErrorCode=se,Ya=c.EventType=le,xa=c.Event=Qt,Na=c.Stat={xb:0,Ab:1,Bb:2,Ub:3,Zb:4,Wb:5,Xb:6,Vb:7,Tb:8,Yb:9,PROXY:10,NOPROXY:11,Rb:12,Nb:13,Ob:14,Mb:15,Pb:16,Qb:17,tb:18,sb:19,ub:20},Ra=(c.FetchXmlHttpFactory=Mn,c.WebChannel=he),$a=c.XhrIo=Sn,Ua=c.Md5=ga,Wa=c.Integer=ya;const Ga="@firebase/firestore";
/**
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
 */class qa{constructor(t){this.uid=t}isAuthenticated(){return null!=this.uid}toKey(){return this.isAuthenticated()?"uid:"+this.uid:"anonymous-user"}isEqual(t){return t.uid===this.uid}}qa.UNAUTHENTICATED=new qa(null),qa.GOOGLE_CREDENTIALS=new qa("google-credentials-uid"),qa.FIRST_PARTY=new qa("first-party-uid"),qa.MOCK_USER=new qa("mock-user");
/**
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
 */
let Ka="10.3.1";
/**
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
 */const Ja=new o.Yd("@firebase/firestore");function Xa(){return Ja.logLevel}function Qa(t,...e){if(Ja.logLevel<=o["in"].DEBUG){const n=e.map(er);Ja.debug(`Firestore (${Ka}): ${t}`,...n)}}function Za(t,...e){if(Ja.logLevel<=o["in"].ERROR){const n=e.map(er);Ja.error(`Firestore (${Ka}): ${t}`,...n)}}function tr(t,...e){if(Ja.logLevel<=o["in"].WARN){const n=e.map(er);Ja.warn(`Firestore (${Ka}): ${t}`,...n)}}function er(t){if("string"==typeof t)return t;try{
/**
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
 */
return function(t){return JSON.stringify(t)}(t)}catch(e){return t}}
/**
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
 */function nr(t="Unexpected state"){const e=`FIRESTORE (${Ka}) INTERNAL ASSERTION FAILED: `+t;throw Za(e),new Error(e)}function ar(t,e){t||nr()}function rr(t,e){return t}
/**
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
 */const ir={OK:"ok",CANCELLED:"cancelled",UNKNOWN:"unknown",INVALID_ARGUMENT:"invalid-argument",DEADLINE_EXCEEDED:"deadline-exceeded",NOT_FOUND:"not-found",ALREADY_EXISTS:"already-exists",PERMISSION_DENIED:"permission-denied",UNAUTHENTICATED:"unauthenticated",RESOURCE_EXHAUSTED:"resource-exhausted",FAILED_PRECONDITION:"failed-precondition",ABORTED:"aborted",OUT_OF_RANGE:"out-of-range",UNIMPLEMENTED:"unimplemented",INTERNAL:"internal",UNAVAILABLE:"unavailable",DATA_LOSS:"data-loss"};class or extends s.ZR{constructor(t,e){super(t,e),this.code=t,this.message=e,this.toString=()=>`${this.name}: [code=${this.code}]: ${this.message}`}}
/**
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
 */class sr{constructor(){this.promise=new Promise(((t,e)=>{this.resolve=t,this.reject=e}))}}
/**
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
 */class lr{constructor(t,e){this.user=e,this.type="OAuth",this.headers=new Map,this.headers.set("Authorization",`Bearer ${t}`)}}class cr{getToken(){return Promise.resolve(null)}invalidateToken(){}start(t,e){t.enqueueRetryable((()=>e(qa.UNAUTHENTICATED)))}shutdown(){}}class ur{constructor(t){this.token=t,this.changeListener=null}getToken(){return Promise.resolve(this.token)}invalidateToken(){}start(t,e){this.changeListener=e,t.enqueueRetryable((()=>e(this.token.user)))}shutdown(){this.changeListener=null}}class hr{constructor(t){this.t=t,this.currentUser=qa.UNAUTHENTICATED,this.i=0,this.forceRefresh=!1,this.auth=null}start(t,e){let n=this.i;const a=t=>this.i!==n?(n=this.i,e(t)):Promise.resolve();let r=new sr;this.o=()=>{this.i++,this.currentUser=this.u(),r.resolve(),r=new sr,t.enqueueRetryable((()=>a(this.currentUser)))};const i=()=>{const e=r;t.enqueueRetryable((async()=>{await e.promise,await a(this.currentUser)}))},o=t=>{Qa("FirebaseAuthCredentialsProvider","Auth detected"),this.auth=t,this.auth.addAuthTokenListener(this.o),i()};this.t.onInit((t=>o(t))),setTimeout((()=>{if(!this.auth){const t=this.t.getImmediate({optional:!0});t?o(t):(Qa("FirebaseAuthCredentialsProvider","Auth not yet detected"),r.resolve(),r=new sr)}}),0),i()}getToken(){const t=this.i,e=this.forceRefresh;return this.forceRefresh=!1,this.auth?this.auth.getToken(e).then((e=>this.i!==t?(Qa("FirebaseAuthCredentialsProvider","getToken aborted due to token change."),this.getToken()):e?(ar("string"==typeof e.accessToken),new lr(e.accessToken,this.currentUser)):null)):Promise.resolve(null)}invalidateToken(){this.forceRefresh=!0}shutdown(){this.auth&&this.auth.removeAuthTokenListener(this.o)}u(){const t=this.auth&&this.auth.getUid();return ar(null===t||"string"==typeof t),new qa(t)}}class dr{constructor(t,e,n){this.l=t,this.h=e,this.P=n,this.type="FirstParty",this.user=qa.FIRST_PARTY,this.I=new Map}T(){return this.P?this.P():null}get headers(){this.I.set("X-Goog-AuthUser",this.l);const t=this.T();return t&&this.I.set("Authorization",t),this.h&&this.I.set("X-Goog-Iam-Authorization-Token",this.h),this.I}}class fr{constructor(t,e,n){this.l=t,this.h=e,this.P=n}getToken(){return Promise.resolve(new dr(this.l,this.h,this.P))}start(t,e){t.enqueueRetryable((()=>e(qa.FIRST_PARTY)))}shutdown(){}invalidateToken(){}}class pr{constructor(t){this.value=t,this.type="AppCheck",this.headers=new Map,t&&t.length>0&&this.headers.set("x-firebase-appcheck",this.value)}}class mr{constructor(t){this.A=t,this.forceRefresh=!1,this.appCheck=null,this.R=null}start(t,e){const n=t=>{null!=t.error&&Qa("FirebaseAppCheckTokenProvider",`Error getting App Check token; using placeholder token instead. Error: ${t.error.message}`);const n=t.token!==this.R;return this.R=t.token,Qa("FirebaseAppCheckTokenProvider",`Received ${n?"new":"existing"} token.`),n?e(t.token):Promise.resolve()};this.o=e=>{t.enqueueRetryable((()=>n(e)))};const a=t=>{Qa("FirebaseAppCheckTokenProvider","AppCheck detected"),this.appCheck=t,this.appCheck.addTokenListener(this.o)};this.A.onInit((t=>a(t))),setTimeout((()=>{if(!this.appCheck){const t=this.A.getImmediate({optional:!0});t?a(t):Qa("FirebaseAppCheckTokenProvider","AppCheck not yet detected")}}),0)}getToken(){const t=this.forceRefresh;return this.forceRefresh=!1,this.appCheck?this.appCheck.getToken(t).then((t=>t?(ar("string"==typeof t.token),this.R=t.token,new pr(t.token)):null)):Promise.resolve(null)}invalidateToken(){this.forceRefresh=!0}shutdown(){this.appCheck&&this.appCheck.removeTokenListener(this.o)}}
/**
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
 */
function vr(t){const e="undefined"!=typeof self&&(self.crypto||self.msCrypto),n=new Uint8Array(t);if(e&&"function"==typeof e.getRandomValues)e.getRandomValues(n);else for(let a=0;a<t;a++)n[a]=Math.floor(256*Math.random());return n}
/**
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
 */class gr{static V(){const t="ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789",e=Math.floor(256/t.length)*t.length;let n="";for(;n.length<20;){const a=vr(40);for(let r=0;r<a.length;++r)n.length<20&&a[r]<e&&(n+=t.charAt(a[r]%t.length))}return n}}function _r(t,e){return t<e?-1:t>e?1:0}function yr(t,e,n){return t.length===e.length&&t.every(((t,a)=>n(t,e[a])))}
/**
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
 */
class br{constructor(t,e){if(this.seconds=t,this.nanoseconds=e,e<0)throw new or(ir.INVALID_ARGUMENT,"Timestamp nanoseconds out of range: "+e);if(e>=1e9)throw new or(ir.INVALID_ARGUMENT,"Timestamp nanoseconds out of range: "+e);if(t<-62135596800)throw new or(ir.INVALID_ARGUMENT,"Timestamp seconds out of range: "+t);if(t>=253402300800)throw new or(ir.INVALID_ARGUMENT,"Timestamp seconds out of range: "+t)}static now(){return br.fromMillis(Date.now())}static fromDate(t){return br.fromMillis(t.getTime())}static fromMillis(t){const e=Math.floor(t/1e3),n=Math.floor(1e6*(t-1e3*e));return new br(e,n)}toDate(){return new Date(this.toMillis())}toMillis(){return 1e3*this.seconds+this.nanoseconds/1e6}_compareTo(t){return this.seconds===t.seconds?_r(this.nanoseconds,t.nanoseconds):_r(this.seconds,t.seconds)}isEqual(t){return t.seconds===this.seconds&&t.nanoseconds===this.nanoseconds}toString(){return"Timestamp(seconds="+this.seconds+", nanoseconds="+this.nanoseconds+")"}toJSON(){return{seconds:this.seconds,nanoseconds:this.nanoseconds}}valueOf(){const t=this.seconds- -62135596800;return String(t).padStart(12,"0")+"."+String(this.nanoseconds).padStart(9,"0")}}
/**
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
 */class Mr{constructor(t){this.timestamp=t}static fromTimestamp(t){return new Mr(t)}static min(){return new Mr(new br(0,0))}static max(){return new Mr(new br(253402300799,999999999))}compareTo(t){return this.timestamp._compareTo(t.timestamp)}isEqual(t){return this.timestamp.isEqual(t.timestamp)}toMicroseconds(){return 1e6*this.timestamp.seconds+this.timestamp.nanoseconds/1e3}toString(){return"SnapshotVersion("+this.timestamp.toString()+")"}toTimestamp(){return this.timestamp}}
/**
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
 */class zr{constructor(t,e,n){void 0===e?e=0:e>t.length&&nr(),void 0===n?n=t.length-e:n>t.length-e&&nr(),this.segments=t,this.offset=e,this.len=n}get length(){return this.len}isEqual(t){return 0===zr.comparator(this,t)}child(t){const e=this.segments.slice(this.offset,this.limit());return t instanceof zr?t.forEach((t=>{e.push(t)})):e.push(t),this.construct(e)}limit(){return this.offset+this.length}popFirst(t){return t=void 0===t?1:t,this.construct(this.segments,this.offset+t,this.length-t)}popLast(){return this.construct(this.segments,this.offset,this.length-1)}firstSegment(){return this.segments[this.offset]}lastSegment(){return this.get(this.length-1)}get(t){return this.segments[this.offset+t]}isEmpty(){return 0===this.length}isPrefixOf(t){if(t.length<this.length)return!1;for(let e=0;e<this.length;e++)if(this.get(e)!==t.get(e))return!1;return!0}isImmediateParentOf(t){if(this.length+1!==t.length)return!1;for(let e=0;e<this.length;e++)if(this.get(e)!==t.get(e))return!1;return!0}forEach(t){for(let e=this.offset,n=this.limit();e<n;e++)t(this.segments[e])}toArray(){return this.segments.slice(this.offset,this.limit())}static comparator(t,e){const n=Math.min(t.length,e.length);for(let a=0;a<n;a++){const n=t.get(a),r=e.get(a);if(n<r)return-1;if(n>r)return 1}return t.length<e.length?-1:t.length>e.length?1:0}}class wr extends zr{construct(t,e,n){return new wr(t,e,n)}canonicalString(){return this.toArray().join("/")}toString(){return this.canonicalString()}static fromString(...t){const e=[];for(const n of t){if(n.indexOf("//")>=0)throw new or(ir.INVALID_ARGUMENT,`Invalid segment (${n}). Paths must not contain // in them.`);e.push(...n.split("/").filter((t=>t.length>0)))}return new wr(e)}static emptyPath(){return new wr([])}}const Lr=/^[_a-zA-Z][_a-zA-Z0-9]*$/;class kr extends zr{construct(t,e,n){return new kr(t,e,n)}static isValidIdentifier(t){return Lr.test(t)}canonicalString(){return this.toArray().map((t=>(t=t.replace(/\\/g,"\\\\").replace(/`/g,"\\`"),kr.isValidIdentifier(t)||(t="`"+t+"`"),t))).join(".")}toString(){return this.canonicalString()}isKeyField(){return 1===this.length&&"__name__"===this.get(0)}static keyField(){return new kr(["__name__"])}static fromServerFormat(t){const e=[];let n="",a=0;const r=()=>{if(0===n.length)throw new or(ir.INVALID_ARGUMENT,`Invalid field path (${t}). Paths must not be empty, begin with '.', end with '.', or contain '..'`);e.push(n),n=""};let i=!1;for(;a<t.length;){const e=t[a];if("\\"===e){if(a+1===t.length)throw new or(ir.INVALID_ARGUMENT,"Path has trailing escape character: "+t);const e=t[a+1];if("\\"!==e&&"."!==e&&"`"!==e)throw new or(ir.INVALID_ARGUMENT,"Path has invalid escape sequence: "+t);n+=e,a+=2}else"`"===e?(i=!i,a++):"."!==e||i?(n+=e,a++):(r(),a++)}if(r(),i)throw new or(ir.INVALID_ARGUMENT,"Unterminated ` in path: "+t);return new kr(e)}static emptyPath(){return new kr([])}}
/**
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
 */class Hr{constructor(t){this.path=t}static fromPath(t){return new Hr(wr.fromString(t))}static fromName(t){return new Hr(wr.fromString(t).popFirst(5))}static empty(){return new Hr(wr.emptyPath())}get collectionGroup(){return this.path.popLast().lastSegment()}hasCollectionId(t){return this.path.length>=2&&this.path.get(this.path.length-2)===t}getCollectionGroup(){return this.path.get(this.path.length-2)}getCollectionPath(){return this.path.popLast()}isEqual(t){return null!==t&&0===wr.comparator(this.path,t.path)}toString(){return this.path.toString()}static comparator(t,e){return wr.comparator(t.path,e.path)}static isDocumentKey(t){return t.length%2==0}static fromSegments(t){return new Hr(new wr(t.slice()))}}
/**
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
 */class Tr{constructor(t,e,n,a){this.indexId=t,this.collectionGroup=e,this.fields=n,this.indexState=a}}Tr.UNKNOWN_ID=-1;function Sr(t,e){const n=t.toTimestamp().seconds,a=t.toTimestamp().nanoseconds+1,r=Mr.fromTimestamp(1e9===a?new br(n+1,0):new br(n,a));return new Or(r,Hr.empty(),e)}function Ar(t){return new Or(t.readTime,t.key,-1)}class Or{constructor(t,e,n){this.readTime=t,this.documentKey=e,this.largestBatchId=n}static min(){return new Or(Mr.min(),Hr.empty(),-1)}static max(){return new Or(Mr.max(),Hr.empty(),-1)}}function Dr(t,e){let n=t.readTime.compareTo(e.readTime);return 0!==n?n:(n=Hr.comparator(t.documentKey,e.documentKey),0!==n?n:_r(t.largestBatchId,e.largestBatchId))}
/**
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
 */const Vr="The current tab is not in the required state to perform this operation. It might be necessary to refresh the browser tab.";class Cr{constructor(){this.onCommittedListeners=[]}addOnCommittedListener(t){this.onCommittedListeners.push(t)}raiseOnCommittedEvent(){this.onCommittedListeners.forEach((t=>t()))}}
/**
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
 */async function Ir(t){if(t.code!==ir.FAILED_PRECONDITION||t.message!==Vr)throw t;Qa("LocalStore","Unexpectedly lost primary lease")}
/**
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
 */class Pr{constructor(t){this.nextCallback=null,this.catchCallback=null,this.result=void 0,this.error=void 0,this.isDone=!1,this.callbackAttached=!1,t((t=>{this.isDone=!0,this.result=t,this.nextCallback&&this.nextCallback(t)}),(t=>{this.isDone=!0,this.error=t,this.catchCallback&&this.catchCallback(t)}))}catch(t){return this.next(void 0,t)}next(t,e){return this.callbackAttached&&nr(),this.callbackAttached=!0,this.isDone?this.error?this.wrapFailure(e,this.error):this.wrapSuccess(t,this.result):new Pr(((n,a)=>{this.nextCallback=e=>{this.wrapSuccess(t,e).next(n,a)},this.catchCallback=t=>{this.wrapFailure(e,t).next(n,a)}}))}toPromise(){return new Promise(((t,e)=>{this.next(t,e)}))}wrapUserFunction(t){try{const e=t();return e instanceof Pr?e:Pr.resolve(e)}catch(t){return Pr.reject(t)}}wrapSuccess(t,e){return t?this.wrapUserFunction((()=>t(e))):Pr.resolve(e)}wrapFailure(t,e){return t?this.wrapUserFunction((()=>t(e))):Pr.reject(e)}static resolve(t){return new Pr(((e,n)=>{e(t)}))}static reject(t){return new Pr(((e,n)=>{n(t)}))}static waitFor(t){return new Pr(((e,n)=>{let a=0,r=0,i=!1;t.forEach((t=>{++a,t.next((()=>{++r,i&&r===a&&e()}),(t=>n(t)))})),i=!0,r===a&&e()}))}static or(t){let e=Pr.resolve(!1);for(const n of t)e=e.next((t=>t?Pr.resolve(t):n()));return e}static forEach(t,e){const n=[];return t.forEach(((t,a)=>{n.push(e.call(this,t,a))})),this.waitFor(n)}static mapArray(t,e){return new Pr(((n,a)=>{const r=t.length,i=new Array(r);let o=0;for(let s=0;s<r;s++){const l=s;e(t[l]).next((t=>{i[l]=t,++o,o===r&&n(i)}),(t=>a(t)))}}))}static doWhile(t,e){return new Pr(((n,a)=>{const r=()=>{!0===t()?e().next((()=>{r()}),a):n()};r()}))}}
/**
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
 */function Er(t){return"IndexedDbTransactionError"===t.name}
/**
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
 */
class Br{constructor(t,e){this.previousValue=t,e&&(e.sequenceNumberHandler=t=>this.oe(t),this._e=t=>e.writeSequenceNumber(t))}oe(t){return this.previousValue=Math.max(t,this.previousValue),this.previousValue}next(){const t=++this.previousValue;return this._e&&this._e(t),t}}function Fr(t){return null==t}function jr(t){return 0===t&&1/t==-1/0}function Yr(t){return"number"==typeof t&&Number.isInteger(t)&&!jr(t)&&t<=Number.MAX_SAFE_INTEGER&&t>=Number.MIN_SAFE_INTEGER}
/**
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
 */Br.ae=-1;const xr=["mutationQueues","mutations","documentMutations","remoteDocuments","targets","owner","targetGlobal","targetDocuments","clientMetadata","remoteDocumentGlobal","collectionParents","bundles","namedQueries"],Nr=["mutationQueues","mutations","documentMutations","remoteDocumentsV14","targets","owner","targetGlobal","targetDocuments","clientMetadata","remoteDocumentGlobal","collectionParents","bundles","namedQueries","documentOverlays"],Rr=Nr;
/**
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
 */
/**
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
 */
function $r(t){let e=0;for(const n in t)Object.prototype.hasOwnProperty.call(t,n)&&e++;return e}function Ur(t,e){for(const n in t)Object.prototype.hasOwnProperty.call(t,n)&&e(n,t[n])}function Wr(t){for(const e in t)if(Object.prototype.hasOwnProperty.call(t,e))return!1;return!0}
/**
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
 */class Gr{constructor(t,e){this.comparator=t,this.root=e||Kr.EMPTY}insert(t,e){return new Gr(this.comparator,this.root.insert(t,e,this.comparator).copy(null,null,Kr.BLACK,null,null))}remove(t){return new Gr(this.comparator,this.root.remove(t,this.comparator).copy(null,null,Kr.BLACK,null,null))}get(t){let e=this.root;for(;!e.isEmpty();){const n=this.comparator(t,e.key);if(0===n)return e.value;n<0?e=e.left:n>0&&(e=e.right)}return null}indexOf(t){let e=0,n=this.root;for(;!n.isEmpty();){const a=this.comparator(t,n.key);if(0===a)return e+n.left.size;a<0?n=n.left:(e+=n.left.size+1,n=n.right)}return-1}isEmpty(){return this.root.isEmpty()}get size(){return this.root.size}minKey(){return this.root.minKey()}maxKey(){return this.root.maxKey()}inorderTraversal(t){return this.root.inorderTraversal(t)}forEach(t){this.inorderTraversal(((e,n)=>(t(e,n),!1)))}toString(){const t=[];return this.inorderTraversal(((e,n)=>(t.push(`${e}:${n}`),!1))),`{${t.join(", ")}}`}reverseTraversal(t){return this.root.reverseTraversal(t)}getIterator(){return new qr(this.root,null,this.comparator,!1)}getIteratorFrom(t){return new qr(this.root,t,this.comparator,!1)}getReverseIterator(){return new qr(this.root,null,this.comparator,!0)}getReverseIteratorFrom(t){return new qr(this.root,t,this.comparator,!0)}}class qr{constructor(t,e,n,a){this.isReverse=a,this.nodeStack=[];let r=1;for(;!t.isEmpty();)if(r=e?n(t.key,e):1,e&&a&&(r*=-1),r<0)t=this.isReverse?t.left:t.right;else{if(0===r){this.nodeStack.push(t);break}this.nodeStack.push(t),t=this.isReverse?t.right:t.left}}getNext(){let t=this.nodeStack.pop();const e={key:t.key,value:t.value};if(this.isReverse)for(t=t.left;!t.isEmpty();)this.nodeStack.push(t),t=t.right;else for(t=t.right;!t.isEmpty();)this.nodeStack.push(t),t=t.left;return e}hasNext(){return this.nodeStack.length>0}peek(){if(0===this.nodeStack.length)return null;const t=this.nodeStack[this.nodeStack.length-1];return{key:t.key,value:t.value}}}class Kr{constructor(t,e,n,a,r){this.key=t,this.value=e,this.color=null!=n?n:Kr.RED,this.left=null!=a?a:Kr.EMPTY,this.right=null!=r?r:Kr.EMPTY,this.size=this.left.size+1+this.right.size}copy(t,e,n,a,r){return new Kr(null!=t?t:this.key,null!=e?e:this.value,null!=n?n:this.color,null!=a?a:this.left,null!=r?r:this.right)}isEmpty(){return!1}inorderTraversal(t){return this.left.inorderTraversal(t)||t(this.key,this.value)||this.right.inorderTraversal(t)}reverseTraversal(t){return this.right.reverseTraversal(t)||t(this.key,this.value)||this.left.reverseTraversal(t)}min(){return this.left.isEmpty()?this:this.left.min()}minKey(){return this.min().key}maxKey(){return this.right.isEmpty()?this.key:this.right.maxKey()}insert(t,e,n){let a=this;const r=n(t,a.key);return a=r<0?a.copy(null,null,null,a.left.insert(t,e,n),null):0===r?a.copy(null,e,null,null,null):a.copy(null,null,null,null,a.right.insert(t,e,n)),a.fixUp()}removeMin(){if(this.left.isEmpty())return Kr.EMPTY;let t=this;return t.left.isRed()||t.left.left.isRed()||(t=t.moveRedLeft()),t=t.copy(null,null,null,t.left.removeMin(),null),t.fixUp()}remove(t,e){let n,a=this;if(e(t,a.key)<0)a.left.isEmpty()||a.left.isRed()||a.left.left.isRed()||(a=a.moveRedLeft()),a=a.copy(null,null,null,a.left.remove(t,e),null);else{if(a.left.isRed()&&(a=a.rotateRight()),a.right.isEmpty()||a.right.isRed()||a.right.left.isRed()||(a=a.moveRedRight()),0===e(t,a.key)){if(a.right.isEmpty())return Kr.EMPTY;n=a.right.min(),a=a.copy(n.key,n.value,null,null,a.right.removeMin())}a=a.copy(null,null,null,null,a.right.remove(t,e))}return a.fixUp()}isRed(){return this.color}fixUp(){let t=this;return t.right.isRed()&&!t.left.isRed()&&(t=t.rotateLeft()),t.left.isRed()&&t.left.left.isRed()&&(t=t.rotateRight()),t.left.isRed()&&t.right.isRed()&&(t=t.colorFlip()),t}moveRedLeft(){let t=this.colorFlip();return t.right.left.isRed()&&(t=t.copy(null,null,null,null,t.right.rotateRight()),t=t.rotateLeft(),t=t.colorFlip()),t}moveRedRight(){let t=this.colorFlip();return t.left.left.isRed()&&(t=t.rotateRight(),t=t.colorFlip()),t}rotateLeft(){const t=this.copy(null,null,Kr.RED,null,this.right.left);return this.right.copy(null,null,this.color,t,null)}rotateRight(){const t=this.copy(null,null,Kr.RED,this.left.right,null);return this.left.copy(null,null,this.color,null,t)}colorFlip(){const t=this.left.copy(null,null,!this.left.color,null,null),e=this.right.copy(null,null,!this.right.color,null,null);return this.copy(null,null,!this.color,t,e)}checkMaxDepth(){const t=this.check();return Math.pow(2,t)<=this.size+1}check(){if(this.isRed()&&this.left.isRed())throw nr();if(this.right.isRed())throw nr();const t=this.left.check();if(t!==this.right.check())throw nr();return t+(this.isRed()?0:1)}}Kr.EMPTY=null,Kr.RED=!0,Kr.BLACK=!1,Kr.EMPTY=new class{constructor(){this.size=0}get key(){throw nr()}get value(){throw nr()}get color(){throw nr()}get left(){throw nr()}get right(){throw nr()}copy(t,e,n,a,r){return this}insert(t,e,n){return new Kr(t,e)}remove(t,e){return this}isEmpty(){return!0}inorderTraversal(t){return!1}reverseTraversal(t){return!1}minKey(){return null}maxKey(){return null}isRed(){return!1}checkMaxDepth(){return!0}check(){return 0}};
/**
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
 */
class Jr{constructor(t){this.comparator=t,this.data=new Gr(this.comparator)}has(t){return null!==this.data.get(t)}first(){return this.data.minKey()}last(){return this.data.maxKey()}get size(){return this.data.size}indexOf(t){return this.data.indexOf(t)}forEach(t){this.data.inorderTraversal(((e,n)=>(t(e),!1)))}forEachInRange(t,e){const n=this.data.getIteratorFrom(t[0]);for(;n.hasNext();){const a=n.getNext();if(this.comparator(a.key,t[1])>=0)return;e(a.key)}}forEachWhile(t,e){let n;for(n=void 0!==e?this.data.getIteratorFrom(e):this.data.getIterator();n.hasNext();)if(!t(n.getNext().key))return}firstAfterOrEqual(t){const e=this.data.getIteratorFrom(t);return e.hasNext()?e.getNext().key:null}getIterator(){return new Xr(this.data.getIterator())}getIteratorFrom(t){return new Xr(this.data.getIteratorFrom(t))}add(t){return this.copy(this.data.remove(t).insert(t,!0))}delete(t){return this.has(t)?this.copy(this.data.remove(t)):this}isEmpty(){return this.data.isEmpty()}unionWith(t){let e=this;return e.size<t.size&&(e=t,t=this),t.forEach((t=>{e=e.add(t)})),e}isEqual(t){if(!(t instanceof Jr))return!1;if(this.size!==t.size)return!1;const e=this.data.getIterator(),n=t.data.getIterator();for(;e.hasNext();){const t=e.getNext().key,a=n.getNext().key;if(0!==this.comparator(t,a))return!1}return!0}toArray(){const t=[];return this.forEach((e=>{t.push(e)})),t}toString(){const t=[];return this.forEach((e=>t.push(e))),"SortedSet("+t.toString()+")"}copy(t){const e=new Jr(this.comparator);return e.data=t,e}}class Xr{constructor(t){this.iter=t}getNext(){return this.iter.getNext().key}hasNext(){return this.iter.hasNext()}}
/**
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
 */
class Qr{constructor(t){this.fields=t,t.sort(kr.comparator)}static empty(){return new Qr([])}unionWith(t){let e=new Jr(kr.comparator);for(const n of this.fields)e=e.add(n);for(const n of t)e=e.add(n);return new Qr(e.toArray())}covers(t){for(const e of this.fields)if(e.isPrefixOf(t))return!0;return!1}isEqual(t){return yr(this.fields,t.fields,((t,e)=>t.isEqual(e)))}}
/**
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
 */class Zr extends Error{constructor(){super(...arguments),this.name="Base64DecodeError"}}
/**
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
 */
/**
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
 */
class ti{constructor(t){this.binaryString=t}static fromBase64String(t){const e=function(t){try{return atob(t)}catch(t){throw"undefined"!=typeof DOMException&&t instanceof DOMException?new Zr("Invalid base64 string: "+t):t}}(t);return new ti(e)}static fromUint8Array(t){const e=function(t){let e="";for(let n=0;n<t.length;++n)e+=String.fromCharCode(t[n]);return e}(t);return new ti(e)}[Symbol.iterator](){let t=0;return{next:()=>t<this.binaryString.length?{value:this.binaryString.charCodeAt(t++),done:!1}:{value:void 0,done:!0}}}toBase64(){return function(t){return btoa(t)}(this.binaryString)}toUint8Array(){return function(t){const e=new Uint8Array(t.length);for(let n=0;n<t.length;n++)e[n]=t.charCodeAt(n);return e}
/**
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
 */(this.binaryString)}approximateByteSize(){return 2*this.binaryString.length}compareTo(t){return _r(this.binaryString,t.binaryString)}isEqual(t){return this.binaryString===t.binaryString}}ti.EMPTY_BYTE_STRING=new ti("");const ei=new RegExp(/^\d{4}-\d\d-\d\dT\d\d:\d\d:\d\d(?:\.(\d+))?Z$/);function ni(t){if(ar(!!t),"string"==typeof t){let e=0;const n=ei.exec(t);if(ar(!!n),n[1]){let t=n[1];t=(t+"000000000").substr(0,9),e=Number(t)}const a=new Date(t);return{seconds:Math.floor(a.getTime()/1e3),nanos:e}}return{seconds:ai(t.seconds),nanos:ai(t.nanos)}}function ai(t){return"number"==typeof t?t:"string"==typeof t?Number(t):0}function ri(t){return"string"==typeof t?ti.fromBase64String(t):ti.fromUint8Array(t)}
/**
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
 */function ii(t){var e,n;return"server_timestamp"===(null===(n=((null===(e=null==t?void 0:t.mapValue)||void 0===e?void 0:e.fields)||{}).__type__)||void 0===n?void 0:n.stringValue)}function oi(t){const e=t.mapValue.fields.__previous_value__;return ii(e)?oi(e):e}function si(t){const e=ni(t.mapValue.fields.__local_write_time__.timestampValue);return new br(e.seconds,e.nanos)}
/**
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
 */class li{constructor(t,e,n,a,r,i,o,s,l){this.databaseId=t,this.appId=e,this.persistenceKey=n,this.host=a,this.ssl=r,this.forceLongPolling=i,this.autoDetectLongPolling=o,this.longPollingOptions=s,this.useFetchStreams=l}}class ci{constructor(t,e){this.projectId=t,this.database=e||"(default)"}static empty(){return new ci("","")}get isDefaultDatabase(){return"(default)"===this.database}isEqual(t){return t instanceof ci&&t.projectId===this.projectId&&t.database===this.database}}
/**
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
 */const ui={mapValue:{fields:{__type__:{stringValue:"__max__"}}}};function hi(t){return"nullValue"in t?0:"booleanValue"in t?1:"integerValue"in t||"doubleValue"in t?2:"timestampValue"in t?3:"stringValue"in t?5:"bytesValue"in t?6:"referenceValue"in t?7:"geoPointValue"in t?8:"arrayValue"in t?9:"mapValue"in t?ii(t)?4:ki(t)?9007199254740991:10:nr()}function di(t,e){if(t===e)return!0;const n=hi(t);if(n!==hi(e))return!1;switch(n){case 0:case 9007199254740991:return!0;case 1:return t.booleanValue===e.booleanValue;case 4:return si(t).isEqual(si(e));case 3:return function(t,e){if("string"==typeof t.timestampValue&&"string"==typeof e.timestampValue&&t.timestampValue.length===e.timestampValue.length)return t.timestampValue===e.timestampValue;const n=ni(t.timestampValue),a=ni(e.timestampValue);return n.seconds===a.seconds&&n.nanos===a.nanos}(t,e);case 5:return t.stringValue===e.stringValue;case 6:return function(t,e){return ri(t.bytesValue).isEqual(ri(e.bytesValue))}(t,e);case 7:return t.referenceValue===e.referenceValue;case 8:return function(t,e){return ai(t.geoPointValue.latitude)===ai(e.geoPointValue.latitude)&&ai(t.geoPointValue.longitude)===ai(e.geoPointValue.longitude)}(t,e);case 2:return function(t,e){if("integerValue"in t&&"integerValue"in e)return ai(t.integerValue)===ai(e.integerValue);if("doubleValue"in t&&"doubleValue"in e){const n=ai(t.doubleValue),a=ai(e.doubleValue);return n===a?jr(n)===jr(a):isNaN(n)&&isNaN(a)}return!1}(t,e);case 9:return yr(t.arrayValue.values||[],e.arrayValue.values||[],di);case 10:return function(t,e){const n=t.mapValue.fields||{},a=e.mapValue.fields||{};if($r(n)!==$r(a))return!1;for(const r in n)if(n.hasOwnProperty(r)&&(void 0===a[r]||!di(n[r],a[r])))return!1;return!0}(t,e);default:return nr()}}function fi(t,e){return void 0!==(t.values||[]).find((t=>di(t,e)))}function pi(t,e){if(t===e)return 0;const n=hi(t),a=hi(e);if(n!==a)return _r(n,a);switch(n){case 0:case 9007199254740991:return 0;case 1:return _r(t.booleanValue,e.booleanValue);case 2:return function(t,e){const n=ai(t.integerValue||t.doubleValue),a=ai(e.integerValue||e.doubleValue);return n<a?-1:n>a?1:n===a?0:isNaN(n)?isNaN(a)?0:-1:1}(t,e);case 3:return mi(t.timestampValue,e.timestampValue);case 4:return mi(si(t),si(e));case 5:return _r(t.stringValue,e.stringValue);case 6:return function(t,e){const n=ri(t),a=ri(e);return n.compareTo(a)}(t.bytesValue,e.bytesValue);case 7:return function(t,e){const n=t.split("/"),a=e.split("/");for(let r=0;r<n.length&&r<a.length;r++){const t=_r(n[r],a[r]);if(0!==t)return t}return _r(n.length,a.length)}(t.referenceValue,e.referenceValue);case 8:return function(t,e){const n=_r(ai(t.latitude),ai(e.latitude));return 0!==n?n:_r(ai(t.longitude),ai(e.longitude))}(t.geoPointValue,e.geoPointValue);case 9:return function(t,e){const n=t.values||[],a=e.values||[];for(let r=0;r<n.length&&r<a.length;++r){const t=pi(n[r],a[r]);if(t)return t}return _r(n.length,a.length)}(t.arrayValue,e.arrayValue);case 10:return function(t,e){if(t===ui.mapValue&&e===ui.mapValue)return 0;if(t===ui.mapValue)return 1;if(e===ui.mapValue)return-1;const n=t.fields||{},a=Object.keys(n),r=e.fields||{},i=Object.keys(r);a.sort(),i.sort();for(let o=0;o<a.length&&o<i.length;++o){const t=_r(a[o],i[o]);if(0!==t)return t;const e=pi(n[a[o]],r[i[o]]);if(0!==e)return e}return _r(a.length,i.length)}(t.mapValue,e.mapValue);default:throw nr()}}function mi(t,e){if("string"==typeof t&&"string"==typeof e&&t.length===e.length)return _r(t,e);const n=ni(t),a=ni(e),r=_r(n.seconds,a.seconds);return 0!==r?r:_r(n.nanos,a.nanos)}function vi(t){return gi(t)}function gi(t){return"nullValue"in t?"null":"booleanValue"in t?""+t.booleanValue:"integerValue"in t?""+t.integerValue:"doubleValue"in t?""+t.doubleValue:"timestampValue"in t?function(t){const e=ni(t);return`time(${e.seconds},${e.nanos})`}(t.timestampValue):"stringValue"in t?t.stringValue:"bytesValue"in t?function(t){return ri(t).toBase64()}(t.bytesValue):"referenceValue"in t?function(t){return Hr.fromName(t).toString()}(t.referenceValue):"geoPointValue"in t?function(t){return`geo(${t.latitude},${t.longitude})`}(t.geoPointValue):"arrayValue"in t?function(t){let e="[",n=!0;for(const a of t.values||[])n?n=!1:e+=",",e+=gi(a);return e+"]"}(t.arrayValue):"mapValue"in t?function(t){const e=Object.keys(t.fields||{}).sort();let n="{",a=!0;for(const r of e)a?a=!1:n+=",",n+=`${r}:${gi(t.fields[r])}`;return n+"}"}(t.mapValue):nr()}function _i(t,e){return{referenceValue:`projects/${t.projectId}/databases/${t.database}/documents/${e.path.canonicalString()}`}}function yi(t){return!!t&&"integerValue"in t}function bi(t){return!!t&&"arrayValue"in t}function Mi(t){return!!t&&"nullValue"in t}function zi(t){return!!t&&"doubleValue"in t&&isNaN(Number(t.doubleValue))}function wi(t){return!!t&&"mapValue"in t}function Li(t){if(t.geoPointValue)return{geoPointValue:Object.assign({},t.geoPointValue)};if(t.timestampValue&&"object"==typeof t.timestampValue)return{timestampValue:Object.assign({},t.timestampValue)};if(t.mapValue){const e={mapValue:{fields:{}}};return Ur(t.mapValue.fields,((t,n)=>e.mapValue.fields[t]=Li(n))),e}if(t.arrayValue){const e={arrayValue:{values:[]}};for(let n=0;n<(t.arrayValue.values||[]).length;++n)e.arrayValue.values[n]=Li(t.arrayValue.values[n]);return e}return Object.assign({},t)}function ki(t){return"__max__"===(((t.mapValue||{}).fields||{}).__type__||{}).stringValue}
/**
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
 */
class Hi{constructor(t){this.value=t}static empty(){return new Hi({mapValue:{}})}field(t){if(t.isEmpty())return this.value;{let e=this.value;for(let n=0;n<t.length-1;++n)if(e=(e.mapValue.fields||{})[t.get(n)],!wi(e))return null;return e=(e.mapValue.fields||{})[t.lastSegment()],e||null}}set(t,e){this.getFieldsMap(t.popLast())[t.lastSegment()]=Li(e)}setAll(t){let e=kr.emptyPath(),n={},a=[];t.forEach(((t,r)=>{if(!e.isImmediateParentOf(r)){const t=this.getFieldsMap(e);this.applyChanges(t,n,a),n={},a=[],e=r.popLast()}t?n[r.lastSegment()]=Li(t):a.push(r.lastSegment())}));const r=this.getFieldsMap(e);this.applyChanges(r,n,a)}delete(t){const e=this.field(t.popLast());wi(e)&&e.mapValue.fields&&delete e.mapValue.fields[t.lastSegment()]}isEqual(t){return di(this.value,t.value)}getFieldsMap(t){let e=this.value;e.mapValue.fields||(e.mapValue={fields:{}});for(let n=0;n<t.length;++n){let a=e.mapValue.fields[t.get(n)];wi(a)&&a.mapValue.fields||(a={mapValue:{fields:{}}},e.mapValue.fields[t.get(n)]=a),e=a}return e.mapValue.fields}applyChanges(t,e,n){Ur(e,((e,n)=>t[e]=n));for(const a of n)delete t[a]}clone(){return new Hi(Li(this.value))}}function Ti(t){const e=[];return Ur(t.fields,((t,n)=>{const a=new kr([t]);if(wi(n)){const t=Ti(n.mapValue).fields;if(0===t.length)e.push(a);else for(const n of t)e.push(a.child(n))}else e.push(a)})),new Qr(e)
/**
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
 */}class Si{constructor(t,e,n,a,r,i,o){this.key=t,this.documentType=e,this.version=n,this.readTime=a,this.createTime=r,this.data=i,this.documentState=o}static newInvalidDocument(t){return new Si(t,0,Mr.min(),Mr.min(),Mr.min(),Hi.empty(),0)}static newFoundDocument(t,e,n,a){return new Si(t,1,e,Mr.min(),n,a,0)}static newNoDocument(t,e){return new Si(t,2,e,Mr.min(),Mr.min(),Hi.empty(),0)}static newUnknownDocument(t,e){return new Si(t,3,e,Mr.min(),Mr.min(),Hi.empty(),2)}convertToFoundDocument(t,e){return!this.createTime.isEqual(Mr.min())||2!==this.documentType&&0!==this.documentType||(this.createTime=t),this.version=t,this.documentType=1,this.data=e,this.documentState=0,this}convertToNoDocument(t){return this.version=t,this.documentType=2,this.data=Hi.empty(),this.documentState=0,this}convertToUnknownDocument(t){return this.version=t,this.documentType=3,this.data=Hi.empty(),this.documentState=2,this}setHasCommittedMutations(){return this.documentState=2,this}setHasLocalMutations(){return this.documentState=1,this.version=Mr.min(),this}setReadTime(t){return this.readTime=t,this}get hasLocalMutations(){return 1===this.documentState}get hasCommittedMutations(){return 2===this.documentState}get hasPendingWrites(){return this.hasLocalMutations||this.hasCommittedMutations}isValidDocument(){return 0!==this.documentType}isFoundDocument(){return 1===this.documentType}isNoDocument(){return 2===this.documentType}isUnknownDocument(){return 3===this.documentType}isEqual(t){return t instanceof Si&&this.key.isEqual(t.key)&&this.version.isEqual(t.version)&&this.documentType===t.documentType&&this.documentState===t.documentState&&this.data.isEqual(t.data)}mutableCopy(){return new Si(this.key,this.documentType,this.version,this.readTime,this.createTime,this.data.clone(),this.documentState)}toString(){return`Document(${this.key}, ${this.version}, ${JSON.stringify(this.data.value)}, {createTime: ${this.createTime}}), {documentType: ${this.documentType}}), {documentState: ${this.documentState}})`}}
/**
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
 */class Ai{constructor(t,e){this.position=t,this.inclusive=e}}function Oi(t,e,n){let a=0;for(let r=0;r<t.position.length;r++){const i=e[r],o=t.position[r];if(a=i.field.isKeyField()?Hr.comparator(Hr.fromName(o.referenceValue),n.key):pi(o,n.data.field(i.field)),"desc"===i.dir&&(a*=-1),0!==a)break}return a}function Di(t,e){if(null===t)return null===e;if(null===e)return!1;if(t.inclusive!==e.inclusive||t.position.length!==e.position.length)return!1;for(let n=0;n<t.position.length;n++)if(!di(t.position[n],e.position[n]))return!1;return!0}
/**
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
 */class Vi{constructor(t,e="asc"){this.field=t,this.dir=e}}function Ci(t,e){return t.dir===e.dir&&t.field.isEqual(e.field)}
/**
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
 */class Ii{}class Pi extends Ii{constructor(t,e,n){super(),this.field=t,this.op=e,this.value=n}static create(t,e,n){return t.isKeyField()?"in"===e||"not-in"===e?this.createKeyFieldInFilter(t,e,n):new Ri(t,e,n):"array-contains"===e?new Gi(t,n):"in"===e?new qi(t,n):"not-in"===e?new Ki(t,n):"array-contains-any"===e?new Ji(t,n):new Pi(t,e,n)}static createKeyFieldInFilter(t,e,n){return"in"===e?new $i(t,n):new Ui(t,n)}matches(t){const e=t.data.field(this.field);return"!="===this.op?null!==e&&this.matchesComparison(pi(e,this.value)):null!==e&&hi(this.value)===hi(e)&&this.matchesComparison(pi(e,this.value))}matchesComparison(t){switch(this.op){case"<":return t<0;case"<=":return t<=0;case"==":return 0===t;case"!=":return 0!==t;case">":return t>0;case">=":return t>=0;default:return nr()}}isInequality(){return["<","<=",">",">=","!=","not-in"].indexOf(this.op)>=0}getFlattenedFilters(){return[this]}getFilters(){return[this]}getFirstInequalityField(){return this.isInequality()?this.field:null}}class Ei extends Ii{constructor(t,e){super(),this.filters=t,this.op=e,this.ce=null}static create(t,e){return new Ei(t,e)}matches(t){return Bi(this)?void 0===this.filters.find((e=>!e.matches(t))):void 0!==this.filters.find((e=>e.matches(t)))}getFlattenedFilters(){return null!==this.ce||(this.ce=this.filters.reduce(((t,e)=>t.concat(e.getFlattenedFilters())),[])),this.ce}getFilters(){return Object.assign([],this.filters)}getFirstInequalityField(){const t=this.le((t=>t.isInequality()));return null!==t?t.field:null}le(t){for(const e of this.getFlattenedFilters())if(t(e))return e;return null}}function Bi(t){return"and"===t.op}function Fi(t){return ji(t)&&Bi(t)}function ji(t){for(const e of t.filters)if(e instanceof Ei)return!1;return!0}function Yi(t){if(t instanceof Pi)return t.field.canonicalString()+t.op.toString()+vi(t.value);if(Fi(t))return t.filters.map((t=>Yi(t))).join(",");{const e=t.filters.map((t=>Yi(t))).join(",");return`${t.op}(${e})`}}function xi(t,e){return t instanceof Pi?function(t,e){return e instanceof Pi&&t.op===e.op&&t.field.isEqual(e.field)&&di(t.value,e.value)}(t,e):t instanceof Ei?function(t,e){return e instanceof Ei&&t.op===e.op&&t.filters.length===e.filters.length&&t.filters.reduce(((t,n,a)=>t&&xi(n,e.filters[a])),!0)}(t,e):void nr()}function Ni(t){return t instanceof Pi?function(t){return`${t.field.canonicalString()} ${t.op} ${vi(t.value)}`}(t):t instanceof Ei?function(t){return t.op.toString()+" {"+t.getFilters().map(Ni).join(" ,")+"}"}(t):"Filter"}class Ri extends Pi{constructor(t,e,n){super(t,e,n),this.key=Hr.fromName(n.referenceValue)}matches(t){const e=Hr.comparator(t.key,this.key);return this.matchesComparison(e)}}class $i extends Pi{constructor(t,e){super(t,"in",e),this.keys=Wi("in",e)}matches(t){return this.keys.some((e=>e.isEqual(t.key)))}}class Ui extends Pi{constructor(t,e){super(t,"not-in",e),this.keys=Wi("not-in",e)}matches(t){return!this.keys.some((e=>e.isEqual(t.key)))}}function Wi(t,e){var n;return((null===(n=e.arrayValue)||void 0===n?void 0:n.values)||[]).map((t=>Hr.fromName(t.referenceValue)))}class Gi extends Pi{constructor(t,e){super(t,"array-contains",e)}matches(t){const e=t.data.field(this.field);return bi(e)&&fi(e.arrayValue,this.value)}}class qi extends Pi{constructor(t,e){super(t,"in",e)}matches(t){const e=t.data.field(this.field);return null!==e&&fi(this.value.arrayValue,e)}}class Ki extends Pi{constructor(t,e){super(t,"not-in",e)}matches(t){if(fi(this.value.arrayValue,{nullValue:"NULL_VALUE"}))return!1;const e=t.data.field(this.field);return null!==e&&!fi(this.value.arrayValue,e)}}class Ji extends Pi{constructor(t,e){super(t,"array-contains-any",e)}matches(t){const e=t.data.field(this.field);return!(!bi(e)||!e.arrayValue.values)&&e.arrayValue.values.some((t=>fi(this.value.arrayValue,t)))}}
/**
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
 */class Xi{constructor(t,e=null,n=[],a=[],r=null,i=null,o=null){this.path=t,this.collectionGroup=e,this.orderBy=n,this.filters=a,this.limit=r,this.startAt=i,this.endAt=o,this.he=null}}function Qi(t,e=null,n=[],a=[],r=null,i=null,o=null){return new Xi(t,e,n,a,r,i,o)}function Zi(t){const e=rr(t);if(null===e.he){let t=e.path.canonicalString();null!==e.collectionGroup&&(t+="|cg:"+e.collectionGroup),t+="|f:",t+=e.filters.map((t=>Yi(t))).join(","),t+="|ob:",t+=e.orderBy.map((t=>function(t){return t.field.canonicalString()+t.dir}(t))).join(","),Fr(e.limit)||(t+="|l:",t+=e.limit),e.startAt&&(t+="|lb:",t+=e.startAt.inclusive?"b:":"a:",t+=e.startAt.position.map((t=>vi(t))).join(",")),e.endAt&&(t+="|ub:",t+=e.endAt.inclusive?"a:":"b:",t+=e.endAt.position.map((t=>vi(t))).join(",")),e.he=t}return e.he}function to(t,e){if(t.limit!==e.limit)return!1;if(t.orderBy.length!==e.orderBy.length)return!1;for(let n=0;n<t.orderBy.length;n++)if(!Ci(t.orderBy[n],e.orderBy[n]))return!1;if(t.filters.length!==e.filters.length)return!1;for(let n=0;n<t.filters.length;n++)if(!xi(t.filters[n],e.filters[n]))return!1;return t.collectionGroup===e.collectionGroup&&!!t.path.isEqual(e.path)&&!!Di(t.startAt,e.startAt)&&Di(t.endAt,e.endAt)}function eo(t){return Hr.isDocumentKey(t.path)&&null===t.collectionGroup&&0===t.filters.length}
/**
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
 */
class no{constructor(t,e=null,n=[],a=[],r=null,i="F",o=null,s=null){this.path=t,this.collectionGroup=e,this.explicitOrderBy=n,this.filters=a,this.limit=r,this.limitType=i,this.startAt=o,this.endAt=s,this.Pe=null,this.Ie=null,this.de=null,this.startAt,this.endAt}}function ao(t,e,n,a,r,i,o,s){return new no(t,e,n,a,r,i,o,s)}function ro(t){return new no(t)}function io(t){return 0===t.filters.length&&null===t.limit&&null==t.startAt&&null==t.endAt&&(0===t.explicitOrderBy.length||1===t.explicitOrderBy.length&&t.explicitOrderBy[0].field.isKeyField())}function oo(t){return t.explicitOrderBy.length>0?t.explicitOrderBy[0].field:null}function so(t){for(const e of t.filters){const t=e.getFirstInequalityField();if(null!==t)return t}return null}function lo(t){return null!==t.collectionGroup}function co(t){const e=rr(t);if(null===e.Pe){e.Pe=[];const t=so(e),n=oo(e);if(null!==t&&null===n)t.isKeyField()||e.Pe.push(new Vi(t)),e.Pe.push(new Vi(kr.keyField(),"asc"));else{let t=!1;for(const n of e.explicitOrderBy)e.Pe.push(n),n.field.isKeyField()&&(t=!0);if(!t){const t=e.explicitOrderBy.length>0?e.explicitOrderBy[e.explicitOrderBy.length-1].dir:"asc";e.Pe.push(new Vi(kr.keyField(),t))}}}return e.Pe}function uo(t){const e=rr(t);return e.Ie||(e.Ie=ho(e,co(t))),e.Ie}function ho(t,e){if("F"===t.limitType)return Qi(t.path,t.collectionGroup,e,t.filters,t.limit,t.startAt,t.endAt);{e=e.map((t=>{const e="desc"===t.dir?"asc":"desc";return new Vi(t.field,e)}));const n=t.endAt?new Ai(t.endAt.position,t.endAt.inclusive):null,a=t.startAt?new Ai(t.startAt.position,t.startAt.inclusive):null;return Qi(t.path,t.collectionGroup,e,t.filters,t.limit,n,a)}}function fo(t,e){e.getFirstInequalityField(),so(t);const n=t.filters.concat([e]);return new no(t.path,t.collectionGroup,t.explicitOrderBy.slice(),n,t.limit,t.limitType,t.startAt,t.endAt)}function po(t,e,n){return new no(t.path,t.collectionGroup,t.explicitOrderBy.slice(),t.filters.slice(),e,n,t.startAt,t.endAt)}function mo(t,e){return to(uo(t),uo(e))&&t.limitType===e.limitType}function vo(t){return`${Zi(uo(t))}|lt:${t.limitType}`}function go(t){return`Query(target=${function(t){let e=t.path.canonicalString();return null!==t.collectionGroup&&(e+=" collectionGroup="+t.collectionGroup),t.filters.length>0&&(e+=`, filters: [${t.filters.map((t=>Ni(t))).join(", ")}]`),Fr(t.limit)||(e+=", limit: "+t.limit),t.orderBy.length>0&&(e+=`, orderBy: [${t.orderBy.map((t=>function(t){return`${t.field.canonicalString()} (${t.dir})`}(t))).join(", ")}]`),t.startAt&&(e+=", startAt: ",e+=t.startAt.inclusive?"b:":"a:",e+=t.startAt.position.map((t=>vi(t))).join(",")),t.endAt&&(e+=", endAt: ",e+=t.endAt.inclusive?"a:":"b:",e+=t.endAt.position.map((t=>vi(t))).join(",")),`Target(${e})`}(uo(t))}; limitType=${t.limitType})`}function _o(t,e){return e.isFoundDocument()&&function(t,e){const n=e.key.path;return null!==t.collectionGroup?e.key.hasCollectionId(t.collectionGroup)&&t.path.isPrefixOf(n):Hr.isDocumentKey(t.path)?t.path.isEqual(n):t.path.isImmediateParentOf(n)}(t,e)&&function(t,e){for(const n of co(t))if(!n.field.isKeyField()&&null===e.data.field(n.field))return!1;return!0}(t,e)&&function(t,e){for(const n of t.filters)if(!n.matches(e))return!1;return!0}(t,e)&&function(t,e){return!(t.startAt&&!function(t,e,n){const a=Oi(t,e,n);return t.inclusive?a<=0:a<0}(t.startAt,co(t),e))&&!(t.endAt&&!function(t,e,n){const a=Oi(t,e,n);return t.inclusive?a>=0:a>0}(t.endAt,co(t),e))}(t,e)}function yo(t){return t.collectionGroup||(t.path.length%2==1?t.path.lastSegment():t.path.get(t.path.length-2))}function bo(t){return(e,n)=>{let a=!1;for(const r of co(t)){const t=Mo(r,e,n);if(0!==t)return t;a=a||r.field.isKeyField()}return 0}}function Mo(t,e,n){const a=t.field.isKeyField()?Hr.comparator(e.key,n.key):function(t,e,n){const a=e.data.field(t),r=n.data.field(t);return null!==a&&null!==r?pi(a,r):nr()}(t.field,e,n);switch(t.dir){case"asc":return a;case"desc":return-1*a;default:return nr()}}
/**
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
 */class zo{constructor(t,e){this.mapKeyFn=t,this.equalsFn=e,this.inner={},this.innerSize=0}get(t){const e=this.mapKeyFn(t),n=this.inner[e];if(void 0!==n)for(const[a,r]of n)if(this.equalsFn(a,t))return r}has(t){return void 0!==this.get(t)}set(t,e){const n=this.mapKeyFn(t),a=this.inner[n];if(void 0===a)return this.inner[n]=[[t,e]],void this.innerSize++;for(let r=0;r<a.length;r++)if(this.equalsFn(a[r][0],t))return void(a[r]=[t,e]);a.push([t,e]),this.innerSize++}delete(t){const e=this.mapKeyFn(t),n=this.inner[e];if(void 0===n)return!1;for(let a=0;a<n.length;a++)if(this.equalsFn(n[a][0],t))return 1===n.length?delete this.inner[e]:n.splice(a,1),this.innerSize--,!0;return!1}forEach(t){Ur(this.inner,((e,n)=>{for(const[a,r]of n)t(a,r)}))}isEmpty(){return Wr(this.inner)}size(){return this.innerSize}}
/**
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
 */const wo=new Gr(Hr.comparator);function Lo(){return wo}const ko=new Gr(Hr.comparator);function Ho(...t){let e=ko;for(const n of t)e=e.insert(n.key,n);return e}function To(t){let e=ko;return t.forEach(((t,n)=>e=e.insert(t,n.overlayedDocument))),e}function So(){return Oo()}function Ao(){return Oo()}function Oo(){return new zo((t=>t.toString()),((t,e)=>t.isEqual(e)))}const Do=new Gr(Hr.comparator),Vo=new Jr(Hr.comparator);function Co(...t){let e=Vo;for(const n of t)e=e.add(n);return e}const Io=new Jr(_r);function Po(){return Io}
/**
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
 */function Eo(t,e){if(t.useProto3Json){if(isNaN(e))return{doubleValue:"NaN"};if(e===1/0)return{doubleValue:"Infinity"};if(e===-1/0)return{doubleValue:"-Infinity"}}return{doubleValue:jr(e)?"-0":e}}function Bo(t){return{integerValue:""+t}}function Fo(t,e){return Yr(e)?Bo(e):Eo(t,e)}
/**
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
 */class jo{constructor(){this._=void 0}}function Yo(t,e,n){return t instanceof Ro?function(t,e){const n={fields:{__type__:{stringValue:"server_timestamp"},__local_write_time__:{timestampValue:{seconds:t.seconds,nanos:t.nanoseconds}}}};return e&&ii(e)&&(e=oi(e)),e&&(n.fields.__previous_value__=e),{mapValue:n}}(n,e):t instanceof $o?Uo(t,e):t instanceof Wo?Go(t,e):function(t,e){const n=No(t,e),a=Ko(n)+Ko(t.Te);return yi(n)&&yi(t.Te)?Bo(a):Eo(t.serializer,a)}(t,e)}function xo(t,e,n){return t instanceof $o?Uo(t,e):t instanceof Wo?Go(t,e):n}function No(t,e){return t instanceof qo?function(t){return yi(t)||function(t){return!!t&&"doubleValue"in t}(t)}(e)?e:{integerValue:0}:null}class Ro extends jo{}class $o extends jo{constructor(t){super(),this.elements=t}}function Uo(t,e){const n=Jo(e);for(const a of t.elements)n.some((t=>di(t,a)))||n.push(a);return{arrayValue:{values:n}}}class Wo extends jo{constructor(t){super(),this.elements=t}}function Go(t,e){let n=Jo(e);for(const a of t.elements)n=n.filter((t=>!di(t,a)));return{arrayValue:{values:n}}}class qo extends jo{constructor(t,e){super(),this.serializer=t,this.Te=e}}function Ko(t){return ai(t.integerValue||t.doubleValue)}function Jo(t){return bi(t)&&t.arrayValue.values?t.arrayValue.values.slice():[]}
/**
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
 */function Xo(t,e){return t.field.isEqual(e.field)&&function(t,e){return t instanceof $o&&e instanceof $o||t instanceof Wo&&e instanceof Wo?yr(t.elements,e.elements,di):t instanceof qo&&e instanceof qo?di(t.Te,e.Te):t instanceof Ro&&e instanceof Ro}(t.transform,e.transform)}class Qo{constructor(t,e){this.version=t,this.transformResults=e}}class Zo{constructor(t,e){this.updateTime=t,this.exists=e}static none(){return new Zo}static exists(t){return new Zo(void 0,t)}static updateTime(t){return new Zo(t)}get isNone(){return void 0===this.updateTime&&void 0===this.exists}isEqual(t){return this.exists===t.exists&&(this.updateTime?!!t.updateTime&&this.updateTime.isEqual(t.updateTime):!t.updateTime)}}function ts(t,e){return void 0!==t.updateTime?e.isFoundDocument()&&e.version.isEqual(t.updateTime):void 0===t.exists||t.exists===e.isFoundDocument()}class es{}function ns(t,e){if(!t.hasLocalMutations||e&&0===e.fields.length)return null;if(null===e)return t.isNoDocument()?new ds(t.key,Zo.none()):new ss(t.key,t.data,Zo.none());{const n=t.data,a=Hi.empty();let r=new Jr(kr.comparator);for(let t of e.fields)if(!r.has(t)){let e=n.field(t);null===e&&t.length>1&&(t=t.popLast(),e=n.field(t)),null===e?a.delete(t):a.set(t,e),r=r.add(t)}return new ls(t.key,a,new Qr(r.toArray()),Zo.none())}}function as(t,e,n){t instanceof ss?function(t,e,n){const a=t.value.clone(),r=us(t.fieldTransforms,e,n.transformResults);a.setAll(r),e.convertToFoundDocument(n.version,a).setHasCommittedMutations()}(t,e,n):t instanceof ls?function(t,e,n){if(!ts(t.precondition,e))return void e.convertToUnknownDocument(n.version);const a=us(t.fieldTransforms,e,n.transformResults),r=e.data;r.setAll(cs(t)),r.setAll(a),e.convertToFoundDocument(n.version,r).setHasCommittedMutations()}(t,e,n):function(t,e,n){e.convertToNoDocument(n.version).setHasCommittedMutations()}(0,e,n)}function rs(t,e,n,a){return t instanceof ss?function(t,e,n,a){if(!ts(t.precondition,e))return n;const r=t.value.clone(),i=hs(t.fieldTransforms,a,e);return r.setAll(i),e.convertToFoundDocument(e.version,r).setHasLocalMutations(),null}(t,e,n,a):t instanceof ls?function(t,e,n,a){if(!ts(t.precondition,e))return n;const r=hs(t.fieldTransforms,a,e),i=e.data;return i.setAll(cs(t)),i.setAll(r),e.convertToFoundDocument(e.version,i).setHasLocalMutations(),null===n?null:n.unionWith(t.fieldMask.fields).unionWith(t.fieldTransforms.map((t=>t.field)))}(t,e,n,a):function(t,e,n){return ts(t.precondition,e)?(e.convertToNoDocument(e.version).setHasLocalMutations(),null):n}(t,e,n)}function is(t,e){let n=null;for(const a of t.fieldTransforms){const t=e.data.field(a.field),r=No(a.transform,t||null);null!=r&&(null===n&&(n=Hi.empty()),n.set(a.field,r))}return n||null}function os(t,e){return t.type===e.type&&!!t.key.isEqual(e.key)&&!!t.precondition.isEqual(e.precondition)&&!!function(t,e){return void 0===t&&void 0===e||!(!t||!e)&&yr(t,e,((t,e)=>Xo(t,e)))}(t.fieldTransforms,e.fieldTransforms)&&(0===t.type?t.value.isEqual(e.value):1!==t.type||t.data.isEqual(e.data)&&t.fieldMask.isEqual(e.fieldMask))}class ss extends es{constructor(t,e,n,a=[]){super(),this.key=t,this.value=e,this.precondition=n,this.fieldTransforms=a,this.type=0}getFieldMask(){return null}}class ls extends es{constructor(t,e,n,a,r=[]){super(),this.key=t,this.data=e,this.fieldMask=n,this.precondition=a,this.fieldTransforms=r,this.type=1}getFieldMask(){return this.fieldMask}}function cs(t){const e=new Map;return t.fieldMask.fields.forEach((n=>{if(!n.isEmpty()){const a=t.data.field(n);e.set(n,a)}})),e}function us(t,e,n){const a=new Map;ar(t.length===n.length);for(let r=0;r<n.length;r++){const i=t[r],o=i.transform,s=e.data.field(i.field);a.set(i.field,xo(o,s,n[r]))}return a}function hs(t,e,n){const a=new Map;for(const r of t){const t=r.transform,i=n.data.field(r.field);a.set(r.field,Yo(t,i,e))}return a}class ds extends es{constructor(t,e){super(),this.key=t,this.precondition=e,this.type=2,this.fieldTransforms=[]}getFieldMask(){return null}}class fs extends es{constructor(t,e){super(),this.key=t,this.precondition=e,this.type=3,this.fieldTransforms=[]}getFieldMask(){return null}}
/**
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
 */class ps{constructor(t,e,n,a){this.batchId=t,this.localWriteTime=e,this.baseMutations=n,this.mutations=a}applyToRemoteDocument(t,e){const n=e.mutationResults;for(let a=0;a<this.mutations.length;a++){const e=this.mutations[a];e.key.isEqual(t.key)&&as(e,t,n[a])}}applyToLocalView(t,e){for(const n of this.baseMutations)n.key.isEqual(t.key)&&(e=rs(n,t,e,this.localWriteTime));for(const n of this.mutations)n.key.isEqual(t.key)&&(e=rs(n,t,e,this.localWriteTime));return e}applyToLocalDocumentSet(t,e){const n=Ao();return this.mutations.forEach((a=>{const r=t.get(a.key),i=r.overlayedDocument;let o=this.applyToLocalView(i,r.mutatedFields);o=e.has(a.key)?null:o;const s=ns(i,o);null!==s&&n.set(a.key,s),i.isValidDocument()||i.convertToNoDocument(Mr.min())})),n}keys(){return this.mutations.reduce(((t,e)=>t.add(e.key)),Co())}isEqual(t){return this.batchId===t.batchId&&yr(this.mutations,t.mutations,((t,e)=>os(t,e)))&&yr(this.baseMutations,t.baseMutations,((t,e)=>os(t,e)))}}class ms{constructor(t,e,n,a){this.batch=t,this.commitVersion=e,this.mutationResults=n,this.docVersions=a}static from(t,e,n){ar(t.mutations.length===n.length);let a=function(){return Do}();const r=t.mutations;for(let i=0;i<r.length;i++)a=a.insert(r[i].key,n[i].version);return new ms(t,e,n,a)}}
/**
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
 */class vs{constructor(t,e){this.largestBatchId=t,this.mutation=e}getKey(){return this.mutation.key}isEqual(t){return null!==t&&this.mutation===t.mutation}toString(){return`Overlay{\n      largestBatchId: ${this.largestBatchId},\n      mutation: ${this.mutation.toString()}\n    }`}}
/**
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
 */
/**
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
 */
class gs{constructor(t,e){this.count=t,this.unchangedNames=e}}
/**
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
 */var _s,ys;function bs(t){switch(t){default:return nr();case ir.CANCELLED:case ir.UNKNOWN:case ir.DEADLINE_EXCEEDED:case ir.RESOURCE_EXHAUSTED:case ir.INTERNAL:case ir.UNAVAILABLE:case ir.UNAUTHENTICATED:return!1;case ir.INVALID_ARGUMENT:case ir.NOT_FOUND:case ir.ALREADY_EXISTS:case ir.PERMISSION_DENIED:case ir.FAILED_PRECONDITION:case ir.ABORTED:case ir.OUT_OF_RANGE:case ir.UNIMPLEMENTED:case ir.DATA_LOSS:return!0}}function Ms(t){if(void 0===t)return Za("GRPC error has no .code"),ir.UNKNOWN;switch(t){case _s.OK:return ir.OK;case _s.CANCELLED:return ir.CANCELLED;case _s.UNKNOWN:return ir.UNKNOWN;case _s.DEADLINE_EXCEEDED:return ir.DEADLINE_EXCEEDED;case _s.RESOURCE_EXHAUSTED:return ir.RESOURCE_EXHAUSTED;case _s.INTERNAL:return ir.INTERNAL;case _s.UNAVAILABLE:return ir.UNAVAILABLE;case _s.UNAUTHENTICATED:return ir.UNAUTHENTICATED;case _s.INVALID_ARGUMENT:return ir.INVALID_ARGUMENT;case _s.NOT_FOUND:return ir.NOT_FOUND;case _s.ALREADY_EXISTS:return ir.ALREADY_EXISTS;case _s.PERMISSION_DENIED:return ir.PERMISSION_DENIED;case _s.FAILED_PRECONDITION:return ir.FAILED_PRECONDITION;case _s.ABORTED:return ir.ABORTED;case _s.OUT_OF_RANGE:return ir.OUT_OF_RANGE;case _s.UNIMPLEMENTED:return ir.UNIMPLEMENTED;case _s.DATA_LOSS:return ir.DATA_LOSS;default:return nr()}}(ys=_s||(_s={}))[ys.OK=0]="OK",ys[ys.CANCELLED=1]="CANCELLED",ys[ys.UNKNOWN=2]="UNKNOWN",ys[ys.INVALID_ARGUMENT=3]="INVALID_ARGUMENT",ys[ys.DEADLINE_EXCEEDED=4]="DEADLINE_EXCEEDED",ys[ys.NOT_FOUND=5]="NOT_FOUND",ys[ys.ALREADY_EXISTS=6]="ALREADY_EXISTS",ys[ys.PERMISSION_DENIED=7]="PERMISSION_DENIED",ys[ys.UNAUTHENTICATED=16]="UNAUTHENTICATED",ys[ys.RESOURCE_EXHAUSTED=8]="RESOURCE_EXHAUSTED",ys[ys.FAILED_PRECONDITION=9]="FAILED_PRECONDITION",ys[ys.ABORTED=10]="ABORTED",ys[ys.OUT_OF_RANGE=11]="OUT_OF_RANGE",ys[ys.UNIMPLEMENTED=12]="UNIMPLEMENTED",ys[ys.INTERNAL=13]="INTERNAL",ys[ys.UNAVAILABLE=14]="UNAVAILABLE",ys[ys.DATA_LOSS=15]="DATA_LOSS";
/**
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
 */
let zs=null;
/**
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
 */function ws(){return new TextEncoder}
/**
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
 */const Ls=new Wa([4294967295,4294967295],0);function ks(t){const e=ws().encode(t),n=new Ua;return n.update(e),new Uint8Array(n.digest())}function Hs(t){const e=new DataView(t.buffer),n=e.getUint32(0,!0),a=e.getUint32(4,!0),r=e.getUint32(8,!0),i=e.getUint32(12,!0);return[new Wa([n,a],0),new Wa([r,i],0)]}class Ts{constructor(t,e,n){if(this.bitmap=t,this.padding=e,this.hashCount=n,e<0||e>=8)throw new Ss(`Invalid padding: ${e}`);if(n<0)throw new Ss(`Invalid hash count: ${n}`);if(t.length>0&&0===this.hashCount)throw new Ss(`Invalid hash count: ${n}`);if(0===t.length&&0!==e)throw new Ss(`Invalid padding when bitmap length is 0: ${e}`);this.Ae=8*t.length-e,this.Re=Wa.fromNumber(this.Ae)}Ve(t,e,n){let a=t.add(e.multiply(Wa.fromNumber(n)));return 1===a.compare(Ls)&&(a=new Wa([a.getBits(0),a.getBits(1)],0)),a.modulo(this.Re).toNumber()}me(t){return 0!=(this.bitmap[Math.floor(t/8)]&1<<t%8)}mightContain(t){if(0===this.Ae)return!1;const e=ks(t),[n,a]=Hs(e);for(let r=0;r<this.hashCount;r++){const t=this.Ve(n,a,r);if(!this.me(t))return!1}return!0}static create(t,e,n){const a=t%8==0?0:8-t%8,r=new Uint8Array(Math.ceil(t/8)),i=new Ts(r,a,e);return n.forEach((t=>i.insert(t))),i}insert(t){if(0===this.Ae)return;const e=ks(t),[n,a]=Hs(e);for(let r=0;r<this.hashCount;r++){const t=this.Ve(n,a,r);this.fe(t)}}fe(t){const e=Math.floor(t/8),n=t%8;this.bitmap[e]|=1<<n}}class Ss extends Error{constructor(){super(...arguments),this.name="BloomFilterError"}}
/**
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
 */class As{constructor(t,e,n,a,r){this.snapshotVersion=t,this.targetChanges=e,this.targetMismatches=n,this.documentUpdates=a,this.resolvedLimboDocuments=r}static createSynthesizedRemoteEventForCurrentChange(t,e,n){const a=new Map;return a.set(t,Os.createSynthesizedTargetChangeForCurrentChange(t,e,n)),new As(Mr.min(),a,new Gr(_r),Lo(),Co())}}class Os{constructor(t,e,n,a,r){this.resumeToken=t,this.current=e,this.addedDocuments=n,this.modifiedDocuments=a,this.removedDocuments=r}static createSynthesizedTargetChangeForCurrentChange(t,e,n){return new Os(n,e,Co(),Co(),Co())}}
/**
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
 */class Ds{constructor(t,e,n,a){this.ge=t,this.removedTargetIds=e,this.key=n,this.pe=a}}class Vs{constructor(t,e){this.targetId=t,this.ye=e}}class Cs{constructor(t,e,n=ti.EMPTY_BYTE_STRING,a=null){this.state=t,this.targetIds=e,this.resumeToken=n,this.cause=a}}class Is{constructor(){this.we=0,this.Se=Bs(),this.be=ti.EMPTY_BYTE_STRING,this.De=!1,this.Ce=!0}get current(){return this.De}get resumeToken(){return this.be}get ve(){return 0!==this.we}get Fe(){return this.Ce}Me(t){t.approximateByteSize()>0&&(this.Ce=!0,this.be=t)}xe(){let t=Co(),e=Co(),n=Co();return this.Se.forEach(((a,r)=>{switch(r){case 0:t=t.add(a);break;case 2:e=e.add(a);break;case 1:n=n.add(a);break;default:nr()}})),new Os(this.be,this.De,t,e,n)}Oe(){this.Ce=!1,this.Se=Bs()}Ne(t,e){this.Ce=!0,this.Se=this.Se.insert(t,e)}Be(t){this.Ce=!0,this.Se=this.Se.remove(t)}Le(){this.we+=1}ke(){this.we-=1}qe(){this.Ce=!0,this.De=!0}}class Ps{constructor(t){this.Qe=t,this.Ke=new Map,this.$e=Lo(),this.Ue=Es(),this.We=new Gr(_r)}Ge(t){for(const e of t.ge)t.pe&&t.pe.isFoundDocument()?this.ze(e,t.pe):this.je(e,t.key,t.pe);for(const e of t.removedTargetIds)this.je(e,t.key,t.pe)}He(t){this.forEachTarget(t,(e=>{const n=this.Je(e);switch(t.state){case 0:this.Ye(e)&&n.Me(t.resumeToken);break;case 1:n.ke(),n.ve||n.Oe(),n.Me(t.resumeToken);break;case 2:n.ke(),n.ve||this.removeTarget(e);break;case 3:this.Ye(e)&&(n.qe(),n.Me(t.resumeToken));break;case 4:this.Ye(e)&&(this.Ze(e),n.Me(t.resumeToken));break;default:nr()}}))}forEachTarget(t,e){t.targetIds.length>0?t.targetIds.forEach(e):this.Ke.forEach(((t,n)=>{this.Ye(n)&&e(n)}))}Xe(t){const e=t.targetId,n=t.ye.count,a=this.et(e);if(a){const r=a.target;if(eo(r))if(0===n){const t=new Hr(r.path);this.je(e,t,Si.newNoDocument(t,Mr.min()))}else ar(1===n);else{const a=this.tt(e);if(a!==n){const n=this.nt(t),r=n?this.rt(n,t,a):1;if(0!==r){this.Ze(e);const t=2===r?"TargetPurposeExistenceFilterMismatchBloom":"TargetPurposeExistenceFilterMismatch";this.We=this.We.insert(e,t)}null==zs||zs.it(function(t,e,n,a,r){var i,o,s,l,c,u;const h={localCacheCount:t,existenceFilterCount:e.count,databaseId:n.database,projectId:n.projectId},d=e.unchangedNames;return d&&(h.bloomFilter={applied:0===r,hashCount:null!==(i=null==d?void 0:d.hashCount)&&void 0!==i?i:0,bitmapLength:null!==(l=null===(s=null===(o=null==d?void 0:d.bits)||void 0===o?void 0:o.bitmap)||void 0===s?void 0:s.length)&&void 0!==l?l:0,padding:null!==(u=null===(c=null==d?void 0:d.bits)||void 0===c?void 0:c.padding)&&void 0!==u?u:0,mightContain:t=>{var e;return null!==(e=null==a?void 0:a.mightContain(t))&&void 0!==e&&e}}),h}
/**
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
 */(a,t.ye,this.Qe.st(),n,r))}}}}nt(t){const e=t.ye.unchangedNames;if(!e||!e.bits)return null;const{bits:{bitmap:n="",padding:a=0},hashCount:r=0}=e;let i,o;try{i=ri(n).toUint8Array()}catch(t){if(t instanceof Zr)return tr("Decoding the base64 bloom filter in existence filter failed ("+t.message+"); ignoring the bloom filter and falling back to full re-query."),null;throw t}try{o=new Ts(i,a,r)}catch(t){return tr(t instanceof Ss?"BloomFilter error: ":"Applying bloom filter failed: ",t),null}return 0===o.Ae?null:o}rt(t,e,n){return e.ye.count===n-this.ot(t,e.targetId)?0:2}ot(t,e){const n=this.Qe.getRemoteKeysForTarget(e);let a=0;return n.forEach((n=>{const r=this.Qe.st(),i=`projects/${r.projectId}/databases/${r.database}/documents/${n.path.canonicalString()}`;t.mightContain(i)||(this.je(e,n,null),a++)})),a}_t(t){const e=new Map;this.Ke.forEach(((n,a)=>{const r=this.et(a);if(r){if(n.current&&eo(r.target)){const e=new Hr(r.target.path);null!==this.$e.get(e)||this.ut(a,e)||this.je(a,e,Si.newNoDocument(e,t))}n.Fe&&(e.set(a,n.xe()),n.Oe())}}));let n=Co();this.Ue.forEach(((t,e)=>{let a=!0;e.forEachWhile((t=>{const e=this.et(t);return!e||"TargetPurposeLimboResolution"===e.purpose||(a=!1,!1)})),a&&(n=n.add(t))})),this.$e.forEach(((e,n)=>n.setReadTime(t)));const a=new As(t,e,this.We,this.$e,n);return this.$e=Lo(),this.Ue=Es(),this.We=new Gr(_r),a}ze(t,e){if(!this.Ye(t))return;const n=this.ut(t,e.key)?2:0;this.Je(t).Ne(e.key,n),this.$e=this.$e.insert(e.key,e),this.Ue=this.Ue.insert(e.key,this.ct(e.key).add(t))}je(t,e,n){if(!this.Ye(t))return;const a=this.Je(t);this.ut(t,e)?a.Ne(e,1):a.Be(e),this.Ue=this.Ue.insert(e,this.ct(e).delete(t)),n&&(this.$e=this.$e.insert(e,n))}removeTarget(t){this.Ke.delete(t)}tt(t){const e=this.Je(t).xe();return this.Qe.getRemoteKeysForTarget(t).size+e.addedDocuments.size-e.removedDocuments.size}Le(t){this.Je(t).Le()}Je(t){let e=this.Ke.get(t);return e||(e=new Is,this.Ke.set(t,e)),e}ct(t){let e=this.Ue.get(t);return e||(e=new Jr(_r),this.Ue=this.Ue.insert(t,e)),e}Ye(t){const e=null!==this.et(t);return e||Qa("WatchChangeAggregator","Detected inactive target",t),e}et(t){const e=this.Ke.get(t);return e&&e.ve?null:this.Qe.lt(t)}Ze(t){this.Ke.set(t,new Is),this.Qe.getRemoteKeysForTarget(t).forEach((e=>{this.je(t,e,null)}))}ut(t,e){return this.Qe.getRemoteKeysForTarget(t).has(e)}}function Es(){return new Gr(Hr.comparator)}function Bs(){return new Gr(Hr.comparator)}const Fs=(()=>{const t={asc:"ASCENDING",desc:"DESCENDING"};return t})(),js=(()=>{const t={"<":"LESS_THAN","<=":"LESS_THAN_OR_EQUAL",">":"GREATER_THAN",">=":"GREATER_THAN_OR_EQUAL","==":"EQUAL","!=":"NOT_EQUAL","array-contains":"ARRAY_CONTAINS",in:"IN","not-in":"NOT_IN","array-contains-any":"ARRAY_CONTAINS_ANY"};return t})(),Ys=(()=>{const t={and:"AND",or:"OR"};return t})();class xs{constructor(t,e){this.databaseId=t,this.useProto3Json=e}}function Ns(t,e){return t.useProto3Json||Fr(e)?e:{value:e}}function Rs(t,e){return t.useProto3Json?`${new Date(1e3*e.seconds).toISOString().replace(/\.\d*/,"").replace("Z","")}.${("000000000"+e.nanoseconds).slice(-9)}Z`:{seconds:""+e.seconds,nanos:e.nanoseconds}}function $s(t,e){return t.useProto3Json?e.toBase64():e.toUint8Array()}function Us(t,e){return Rs(t,e.toTimestamp())}function Ws(t){return ar(!!t),Mr.fromTimestamp(function(t){const e=ni(t);return new br(e.seconds,e.nanos)}(t))}function Gs(t,e){return function(t){return new wr(["projects",t.projectId,"databases",t.database])}(t).child("documents").child(e).canonicalString()}function qs(t){const e=wr.fromString(t);return ar(gl(e)),e}function Ks(t,e){return Gs(t.databaseId,e.path)}function Js(t,e){const n=qs(e);if(n.get(1)!==t.databaseId.projectId)throw new or(ir.INVALID_ARGUMENT,"Tried to deserialize key from different project: "+n.get(1)+" vs "+t.databaseId.projectId);if(n.get(3)!==t.databaseId.database)throw new or(ir.INVALID_ARGUMENT,"Tried to deserialize key from different database: "+n.get(3)+" vs "+t.databaseId.database);return new Hr(tl(n))}function Xs(t,e){return Gs(t.databaseId,e)}function Qs(t){const e=qs(t);return 4===e.length?wr.emptyPath():tl(e)}function Zs(t){return new wr(["projects",t.databaseId.projectId,"databases",t.databaseId.database]).canonicalString()}function tl(t){return ar(t.length>4&&"documents"===t.get(4)),t.popFirst(5)}function el(t,e,n){return{name:Ks(t,e),fields:n.value.mapValue.fields}}function nl(t,e){let n;if("targetChange"in e){e.targetChange;const a=function(t){return"NO_CHANGE"===t?0:"ADD"===t?1:"REMOVE"===t?2:"CURRENT"===t?3:"RESET"===t?4:nr()}(e.targetChange.targetChangeType||"NO_CHANGE"),r=e.targetChange.targetIds||[],i=function(t,e){return t.useProto3Json?(ar(void 0===e||"string"==typeof e),ti.fromBase64String(e||"")):(ar(void 0===e||e instanceof Uint8Array),ti.fromUint8Array(e||new Uint8Array))}(t,e.targetChange.resumeToken),o=e.targetChange.cause,s=o&&function(t){const e=void 0===t.code?ir.UNKNOWN:Ms(t.code);return new or(e,t.message||"")}(o);n=new Cs(a,r,i,s||null)}else if("documentChange"in e){e.documentChange;const a=e.documentChange;a.document,a.document.name,a.document.updateTime;const r=Js(t,a.document.name),i=Ws(a.document.updateTime),o=a.document.createTime?Ws(a.document.createTime):Mr.min(),s=new Hi({mapValue:{fields:a.document.fields}}),l=Si.newFoundDocument(r,i,o,s),c=a.targetIds||[],u=a.removedTargetIds||[];n=new Ds(c,u,l.key,l)}else if("documentDelete"in e){e.documentDelete;const a=e.documentDelete;a.document;const r=Js(t,a.document),i=a.readTime?Ws(a.readTime):Mr.min(),o=Si.newNoDocument(r,i),s=a.removedTargetIds||[];n=new Ds([],s,o.key,o)}else if("documentRemove"in e){e.documentRemove;const a=e.documentRemove;a.document;const r=Js(t,a.document),i=a.removedTargetIds||[];n=new Ds([],i,r,null)}else{if(!("filter"in e))return nr();{e.filter;const t=e.filter;t.targetId;const{count:a=0,unchangedNames:r}=t,i=new gs(a,r),o=t.targetId;n=new Vs(o,i)}}return n}function al(t,e){let n;if(e instanceof ss)n={update:el(t,e.key,e.value)};else if(e instanceof ds)n={delete:Ks(t,e.key)};else if(e instanceof ls)n={update:el(t,e.key,e.data),updateMask:vl(e.fieldMask)};else{if(!(e instanceof fs))return nr();n={verify:Ks(t,e.key)}}return e.fieldTransforms.length>0&&(n.updateTransforms=e.fieldTransforms.map((t=>function(t,e){const n=e.transform;if(n instanceof Ro)return{fieldPath:e.field.canonicalString(),setToServerValue:"REQUEST_TIME"};if(n instanceof $o)return{fieldPath:e.field.canonicalString(),appendMissingElements:{values:n.elements}};if(n instanceof Wo)return{fieldPath:e.field.canonicalString(),removeAllFromArray:{values:n.elements}};if(n instanceof qo)return{fieldPath:e.field.canonicalString(),increment:n.Te};throw nr()}(0,t)))),e.precondition.isNone||(n.currentDocument=function(t,e){return void 0!==e.updateTime?{updateTime:Us(t,e.updateTime)}:void 0!==e.exists?{exists:e.exists}:nr()}(t,e.precondition)),n}function rl(t,e){return t&&t.length>0?(ar(void 0!==e),t.map((t=>function(t,e){let n=t.updateTime?Ws(t.updateTime):Ws(e);return n.isEqual(Mr.min())&&(n=Ws(e)),new Qo(n,t.transformResults||[])}(t,e)))):[]}function il(t,e){return{documents:[Xs(t,e.path)]}}function ol(t,e){const n={structuredQuery:{}},a=e.path;null!==e.collectionGroup?(n.parent=Xs(t,a),n.structuredQuery.from=[{collectionId:e.collectionGroup,allDescendants:!0}]):(n.parent=Xs(t,a.popLast()),n.structuredQuery.from=[{collectionId:a.lastSegment()}]);const r=function(t){if(0!==t.length)return ml(Ei.create(t,"and"))}(e.filters);r&&(n.structuredQuery.where=r);const i=function(t){if(0!==t.length)return t.map((t=>function(t){return{field:fl(t.field),direction:ul(t.dir)}}(t)))}(e.orderBy);i&&(n.structuredQuery.orderBy=i);const o=Ns(t,e.limit);return null!==o&&(n.structuredQuery.limit=o),e.startAt&&(n.structuredQuery.startAt=function(t){return{before:t.inclusive,values:t.position}}(e.startAt)),e.endAt&&(n.structuredQuery.endAt=function(t){return{before:!t.inclusive,values:t.position}}(e.endAt)),n}function sl(t){let e=Qs(t.parent);const n=t.structuredQuery,a=n.from?n.from.length:0;let r=null;if(a>0){ar(1===a);const t=n.from[0];t.allDescendants?r=t.collectionId:e=e.child(t.collectionId)}let i=[];n.where&&(i=function(t){const e=cl(t);return e instanceof Ei&&Fi(e)?e.getFilters():[e]}(n.where));let o=[];n.orderBy&&(o=function(t){return t.map((t=>function(t){return new Vi(pl(t.field),function(t){switch(t){case"ASCENDING":return"asc";case"DESCENDING":return"desc";default:return}}(t.direction))}(t)))}(n.orderBy));let s=null;n.limit&&(s=function(t){let e;return e="object"==typeof t?t.value:t,Fr(e)?null:e}(n.limit));let l=null;n.startAt&&(l=function(t){const e=!!t.before,n=t.values||[];return new Ai(n,e)}(n.startAt));let c=null;return n.endAt&&(c=function(t){const e=!t.before,n=t.values||[];return new Ai(n,e)}(n.endAt)),ao(e,r,o,i,s,"F",l,c)}function ll(t,e){const n=function(t){switch(t){case"TargetPurposeListen":return null;case"TargetPurposeExistenceFilterMismatch":return"existence-filter-mismatch";case"TargetPurposeExistenceFilterMismatchBloom":return"existence-filter-mismatch-bloom";case"TargetPurposeLimboResolution":return"limbo-document";default:return nr()}}(e.purpose);return null==n?null:{"goog-listen-tags":n}}function cl(t){return void 0!==t.unaryFilter?function(t){switch(t.unaryFilter.op){case"IS_NAN":const e=pl(t.unaryFilter.field);return Pi.create(e,"==",{doubleValue:NaN});case"IS_NULL":const n=pl(t.unaryFilter.field);return Pi.create(n,"==",{nullValue:"NULL_VALUE"});case"IS_NOT_NAN":const a=pl(t.unaryFilter.field);return Pi.create(a,"!=",{doubleValue:NaN});case"IS_NOT_NULL":const r=pl(t.unaryFilter.field);return Pi.create(r,"!=",{nullValue:"NULL_VALUE"});default:return nr()}}(t):void 0!==t.fieldFilter?function(t){return Pi.create(pl(t.fieldFilter.field),function(t){switch(t){case"EQUAL":return"==";case"NOT_EQUAL":return"!=";case"GREATER_THAN":return">";case"GREATER_THAN_OR_EQUAL":return">=";case"LESS_THAN":return"<";case"LESS_THAN_OR_EQUAL":return"<=";case"ARRAY_CONTAINS":return"array-contains";case"IN":return"in";case"NOT_IN":return"not-in";case"ARRAY_CONTAINS_ANY":return"array-contains-any";default:return nr()}}(t.fieldFilter.op),t.fieldFilter.value)}(t):void 0!==t.compositeFilter?function(t){return Ei.create(t.compositeFilter.filters.map((t=>cl(t))),function(t){switch(t){case"AND":return"and";case"OR":return"or";default:return nr()}}(t.compositeFilter.op))}(t):nr()}function ul(t){return Fs[t]}function hl(t){return js[t]}function dl(t){return Ys[t]}function fl(t){return{fieldPath:t.canonicalString()}}function pl(t){return kr.fromServerFormat(t.fieldPath)}function ml(t){return t instanceof Pi?function(t){if("=="===t.op){if(zi(t.value))return{unaryFilter:{field:fl(t.field),op:"IS_NAN"}};if(Mi(t.value))return{unaryFilter:{field:fl(t.field),op:"IS_NULL"}}}else if("!="===t.op){if(zi(t.value))return{unaryFilter:{field:fl(t.field),op:"IS_NOT_NAN"}};if(Mi(t.value))return{unaryFilter:{field:fl(t.field),op:"IS_NOT_NULL"}}}return{fieldFilter:{field:fl(t.field),op:hl(t.op),value:t.value}}}(t):t instanceof Ei?function(t){const e=t.getFilters().map((t=>ml(t)));return 1===e.length?e[0]:{compositeFilter:{op:dl(t.op),filters:e}}}(t):nr()}function vl(t){const e=[];return t.fields.forEach((t=>e.push(t.canonicalString()))),{fieldPaths:e}}function gl(t){return t.length>=4&&"projects"===t.get(0)&&"databases"===t.get(2)}
/**
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
 */class _l{constructor(t,e,n,a,r=Mr.min(),i=Mr.min(),o=ti.EMPTY_BYTE_STRING,s=null){this.target=t,this.targetId=e,this.purpose=n,this.sequenceNumber=a,this.snapshotVersion=r,this.lastLimboFreeSnapshotVersion=i,this.resumeToken=o,this.expectedCount=s}withSequenceNumber(t){return new _l(this.target,this.targetId,this.purpose,t,this.snapshotVersion,this.lastLimboFreeSnapshotVersion,this.resumeToken,this.expectedCount)}withResumeToken(t,e){return new _l(this.target,this.targetId,this.purpose,this.sequenceNumber,e,this.lastLimboFreeSnapshotVersion,t,null)}withExpectedCount(t){return new _l(this.target,this.targetId,this.purpose,this.sequenceNumber,this.snapshotVersion,this.lastLimboFreeSnapshotVersion,this.resumeToken,t)}withLastLimboFreeSnapshotVersion(t){return new _l(this.target,this.targetId,this.purpose,this.sequenceNumber,this.snapshotVersion,t,this.resumeToken,this.expectedCount)}}
/**
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
 */class yl{constructor(t){this.ht=t}}function bl(t){const e=sl({parent:t.parent,structuredQuery:t.structuredQuery});return"LAST"===t.limitType?po(e,e.limit,"L"):e}
/**
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
 */
class Ml{constructor(){}dt(t,e){this.Tt(t,e),e.Et()}Tt(t,e){if("nullValue"in t)this.At(e,5);else if("booleanValue"in t)this.At(e,10),e.Rt(t.booleanValue?1:0);else if("integerValue"in t)this.At(e,15),e.Rt(ai(t.integerValue));else if("doubleValue"in t){const n=ai(t.doubleValue);isNaN(n)?this.At(e,13):(this.At(e,15),jr(n)?e.Rt(0):e.Rt(n))}else if("timestampValue"in t){const n=t.timestampValue;this.At(e,20),"string"==typeof n?e.Vt(n):(e.Vt(`${n.seconds||""}`),e.Rt(n.nanos||0))}else if("stringValue"in t)this.ft(t.stringValue,e),this.gt(e);else if("bytesValue"in t)this.At(e,30),e.yt(ri(t.bytesValue)),this.gt(e);else if("referenceValue"in t)this.wt(t.referenceValue,e);else if("geoPointValue"in t){const n=t.geoPointValue;this.At(e,45),e.Rt(n.latitude||0),e.Rt(n.longitude||0)}else"mapValue"in t?ki(t)?this.At(e,Number.MAX_SAFE_INTEGER):(this.St(t.mapValue,e),this.gt(e)):"arrayValue"in t?(this.bt(t.arrayValue,e),this.gt(e)):nr()}ft(t,e){this.At(e,25),this.Dt(t,e)}Dt(t,e){e.Vt(t)}St(t,e){const n=t.fields||{};this.At(e,55);for(const a of Object.keys(n))this.ft(a,e),this.Tt(n[a],e)}bt(t,e){const n=t.values||[];this.At(e,50);for(const a of n)this.Tt(a,e)}wt(t,e){this.At(e,37),Hr.fromName(t).path.forEach((t=>{this.At(e,60),this.Dt(t,e)}))}At(t,e){t.Rt(e)}gt(t){t.Rt(2)}}Ml.Ct=new Ml;
/**
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
 */
class zl{constructor(){this.an=new wl}addToCollectionParentIndex(t,e){return this.an.add(e),Pr.resolve()}getCollectionParents(t,e){return Pr.resolve(this.an.getEntries(e))}addFieldIndex(t,e){return Pr.resolve()}deleteFieldIndex(t,e){return Pr.resolve()}deleteAllFieldIndexes(t){return Pr.resolve()}createTargetIndexes(t,e){return Pr.resolve()}getDocumentsMatchingTarget(t,e){return Pr.resolve(null)}getIndexType(t,e){return Pr.resolve(0)}getFieldIndexes(t,e){return Pr.resolve([])}getNextCollectionGroupToUpdate(t){return Pr.resolve(null)}getMinOffset(t,e){return Pr.resolve(Or.min())}getMinOffsetFromCollectionGroup(t,e){return Pr.resolve(Or.min())}updateCollectionGroup(t,e,n){return Pr.resolve()}updateIndexEntries(t,e){return Pr.resolve()}}class wl{constructor(){this.index={}}add(t){const e=t.lastSegment(),n=t.popLast(),a=this.index[e]||new Jr(wr.comparator),r=!a.has(n);return this.index[e]=a.add(n),r}has(t){const e=t.lastSegment(),n=t.popLast(),a=this.index[e];return a&&a.has(n)}getEntries(t){return(this.index[t]||new Jr(wr.comparator)).toArray()}}
/**
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
 */new Uint8Array(0);class Ll{constructor(t,e,n){this.cacheSizeCollectionThreshold=t,this.percentileToCollect=e,this.maximumSequenceNumbersToCollect=n}static withCacheSize(t){return new Ll(t,Ll.DEFAULT_COLLECTION_PERCENTILE,Ll.DEFAULT_MAX_SEQUENCE_NUMBERS_TO_COLLECT)}}
/**
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
 */
/**
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
 */Ll.DEFAULT_COLLECTION_PERCENTILE=10,Ll.DEFAULT_MAX_SEQUENCE_NUMBERS_TO_COLLECT=1e3,Ll.DEFAULT=new Ll(41943040,Ll.DEFAULT_COLLECTION_PERCENTILE,Ll.DEFAULT_MAX_SEQUENCE_NUMBERS_TO_COLLECT),Ll.DISABLED=new Ll(-1,0,0);
/**
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
 */
class kl{constructor(t){this.Nn=t}next(){return this.Nn+=2,this.Nn}static Bn(){return new kl(0)}static Ln(){return new kl(-1)}}
/**
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
 */
/**
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
 */
class Hl{constructor(){this.changes=new zo((t=>t.toString()),((t,e)=>t.isEqual(e))),this.changesApplied=!1}addEntry(t){this.assertNotApplied(),this.changes.set(t.key,t)}removeEntry(t,e){this.assertNotApplied(),this.changes.set(t,Si.newInvalidDocument(t).setReadTime(e))}getEntry(t,e){this.assertNotApplied();const n=this.changes.get(e);return void 0!==n?Pr.resolve(n):this.getFromCache(t,e)}getEntries(t,e){return this.getAllFromCache(t,e)}apply(t){return this.assertNotApplied(),this.changesApplied=!0,this.applyChanges(t)}assertNotApplied(){}}
/**
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
 */
/**
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
 */
/**
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
 */
class Tl{constructor(t,e){this.overlayedDocument=t,this.mutatedFields=e}}
/**
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
 */class Sl{constructor(t,e,n,a){this.remoteDocumentCache=t,this.mutationQueue=e,this.documentOverlayCache=n,this.indexManager=a}getDocument(t,e){let n=null;return this.documentOverlayCache.getOverlay(t,e).next((a=>(n=a,this.remoteDocumentCache.getEntry(t,e)))).next((t=>(null!==n&&rs(n.mutation,t,Qr.empty(),br.now()),t)))}getDocuments(t,e){return this.remoteDocumentCache.getEntries(t,e).next((e=>this.getLocalViewOfDocuments(t,e,Co()).next((()=>e))))}getLocalViewOfDocuments(t,e,n=Co()){const a=So();return this.populateOverlays(t,a,e).next((()=>this.computeViews(t,e,a,n).next((t=>{let e=Ho();return t.forEach(((t,n)=>{e=e.insert(t,n.overlayedDocument)})),e}))))}getOverlayedDocuments(t,e){const n=So();return this.populateOverlays(t,n,e).next((()=>this.computeViews(t,e,n,Co())))}populateOverlays(t,e,n){const a=[];return n.forEach((t=>{e.has(t)||a.push(t)})),this.documentOverlayCache.getOverlays(t,a).next((t=>{t.forEach(((t,n)=>{e.set(t,n)}))}))}computeViews(t,e,n,a){let r=Lo();const i=Oo(),o=function(){return Oo()}();return e.forEach(((t,e)=>{const o=n.get(e.key);a.has(e.key)&&(void 0===o||o.mutation instanceof ls)?r=r.insert(e.key,e):void 0!==o?(i.set(e.key,o.mutation.getFieldMask()),rs(o.mutation,e,o.mutation.getFieldMask(),br.now())):i.set(e.key,Qr.empty())})),this.recalculateAndSaveOverlays(t,r).next((t=>(t.forEach(((t,e)=>i.set(t,e))),e.forEach(((t,e)=>{var n;return o.set(t,new Tl(e,null!==(n=i.get(t))&&void 0!==n?n:null))})),o)))}recalculateAndSaveOverlays(t,e){const n=Oo();let a=new Gr(((t,e)=>t-e)),r=Co();return this.mutationQueue.getAllMutationBatchesAffectingDocumentKeys(t,e).next((t=>{for(const r of t)r.keys().forEach((t=>{const i=e.get(t);if(null===i)return;let o=n.get(t)||Qr.empty();o=r.applyToLocalView(i,o),n.set(t,o);const s=(a.get(r.batchId)||Co()).add(t);a=a.insert(r.batchId,s)}))})).next((()=>{const i=[],o=a.getReverseIterator();for(;o.hasNext();){const a=o.getNext(),s=a.key,l=a.value,c=Ao();l.forEach((t=>{if(!r.has(t)){const a=ns(e.get(t),n.get(t));null!==a&&c.set(t,a),r=r.add(t)}})),i.push(this.documentOverlayCache.saveOverlays(t,s,c))}return Pr.waitFor(i)})).next((()=>n))}recalculateAndSaveOverlaysForDocumentKeys(t,e){return this.remoteDocumentCache.getEntries(t,e).next((e=>this.recalculateAndSaveOverlays(t,e)))}getDocumentsMatchingQuery(t,e,n,a){return function(t){return Hr.isDocumentKey(t.path)&&null===t.collectionGroup&&0===t.filters.length}(e)?this.getDocumentsMatchingDocumentQuery(t,e.path):lo(e)?this.getDocumentsMatchingCollectionGroupQuery(t,e,n,a):this.getDocumentsMatchingCollectionQuery(t,e,n,a)}getNextDocuments(t,e,n,a){return this.remoteDocumentCache.getAllFromCollectionGroup(t,e,n,a).next((r=>{const i=a-r.size>0?this.documentOverlayCache.getOverlaysForCollectionGroup(t,e,n.largestBatchId,a-r.size):Pr.resolve(So());let o=-1,s=r;return i.next((e=>Pr.forEach(e,((e,n)=>(o<n.largestBatchId&&(o=n.largestBatchId),r.get(e)?Pr.resolve():this.remoteDocumentCache.getEntry(t,e).next((t=>{s=s.insert(e,t)}))))).next((()=>this.populateOverlays(t,e,r))).next((()=>this.computeViews(t,s,e,Co()))).next((t=>({batchId:o,changes:To(t)})))))}))}getDocumentsMatchingDocumentQuery(t,e){return this.getDocument(t,new Hr(e)).next((t=>{let e=Ho();return t.isFoundDocument()&&(e=e.insert(t.key,t)),e}))}getDocumentsMatchingCollectionGroupQuery(t,e,n,a){const r=e.collectionGroup;let i=Ho();return this.indexManager.getCollectionParents(t,r).next((o=>Pr.forEach(o,(o=>{const s=function(t,e){return new no(e,null,t.explicitOrderBy.slice(),t.filters.slice(),t.limit,t.limitType,t.startAt,t.endAt)}(e,o.child(r));return this.getDocumentsMatchingCollectionQuery(t,s,n,a).next((t=>{t.forEach(((t,e)=>{i=i.insert(t,e)}))}))})).next((()=>i))))}getDocumentsMatchingCollectionQuery(t,e,n,a){let r;return this.documentOverlayCache.getOverlaysForCollection(t,e.path,n.largestBatchId).next((i=>(r=i,this.remoteDocumentCache.getDocumentsMatchingQuery(t,e,n,r,a)))).next((t=>{r.forEach(((e,n)=>{const a=n.getKey();null===t.get(a)&&(t=t.insert(a,Si.newInvalidDocument(a)))}));let n=Ho();return t.forEach(((t,a)=>{const i=r.get(t);void 0!==i&&rs(i.mutation,a,Qr.empty(),br.now()),_o(e,a)&&(n=n.insert(t,a))})),n}))}}
/**
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
 */class Al{constructor(t){this.serializer=t,this.lr=new Map,this.hr=new Map}getBundleMetadata(t,e){return Pr.resolve(this.lr.get(e))}saveBundleMetadata(t,e){return this.lr.set(e.id,function(t){return{id:t.id,version:t.version,createTime:Ws(t.createTime)}}(e)),Pr.resolve()}getNamedQuery(t,e){return Pr.resolve(this.hr.get(e))}saveNamedQuery(t,e){return this.hr.set(e.name,function(t){return{name:t.name,query:bl(t.bundledQuery),readTime:Ws(t.readTime)}}(e)),Pr.resolve()}}
/**
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
 */class Ol{constructor(){this.overlays=new Gr(Hr.comparator),this.Pr=new Map}getOverlay(t,e){return Pr.resolve(this.overlays.get(e))}getOverlays(t,e){const n=So();return Pr.forEach(e,(e=>this.getOverlay(t,e).next((t=>{null!==t&&n.set(e,t)})))).next((()=>n))}saveOverlays(t,e,n){return n.forEach(((n,a)=>{this.It(t,e,a)})),Pr.resolve()}removeOverlaysForBatchId(t,e,n){const a=this.Pr.get(n);return void 0!==a&&(a.forEach((t=>this.overlays=this.overlays.remove(t))),this.Pr.delete(n)),Pr.resolve()}getOverlaysForCollection(t,e,n){const a=So(),r=e.length+1,i=new Hr(e.child("")),o=this.overlays.getIteratorFrom(i);for(;o.hasNext();){const t=o.getNext().value,i=t.getKey();if(!e.isPrefixOf(i.path))break;i.path.length===r&&t.largestBatchId>n&&a.set(t.getKey(),t)}return Pr.resolve(a)}getOverlaysForCollectionGroup(t,e,n,a){let r=new Gr(((t,e)=>t-e));const i=this.overlays.getIterator();for(;i.hasNext();){const t=i.getNext().value;if(t.getKey().getCollectionGroup()===e&&t.largestBatchId>n){let e=r.get(t.largestBatchId);null===e&&(e=So(),r=r.insert(t.largestBatchId,e)),e.set(t.getKey(),t)}}const o=So(),s=r.getIterator();for(;s.hasNext();)if(s.getNext().value.forEach(((t,e)=>o.set(t,e))),o.size()>=a)break;return Pr.resolve(o)}It(t,e,n){const a=this.overlays.get(n.key);if(null!==a){const t=this.Pr.get(a.largestBatchId).delete(n.key);this.Pr.set(a.largestBatchId,t)}this.overlays=this.overlays.insert(n.key,new vs(e,n));let r=this.Pr.get(e);void 0===r&&(r=Co(),this.Pr.set(e,r)),this.Pr.set(e,r.add(n.key))}}
/**
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
 */class Dl{constructor(){this.Ir=new Jr(Vl.dr),this.Tr=new Jr(Vl.Er)}isEmpty(){return this.Ir.isEmpty()}addReference(t,e){const n=new Vl(t,e);this.Ir=this.Ir.add(n),this.Tr=this.Tr.add(n)}Ar(t,e){t.forEach((t=>this.addReference(t,e)))}removeReference(t,e){this.Rr(new Vl(t,e))}Vr(t,e){t.forEach((t=>this.removeReference(t,e)))}mr(t){const e=new Hr(new wr([])),n=new Vl(e,t),a=new Vl(e,t+1),r=[];return this.Tr.forEachInRange([n,a],(t=>{this.Rr(t),r.push(t.key)})),r}gr(){this.Ir.forEach((t=>this.Rr(t)))}Rr(t){this.Ir=this.Ir.delete(t),this.Tr=this.Tr.delete(t)}pr(t){const e=new Hr(new wr([])),n=new Vl(e,t),a=new Vl(e,t+1);let r=Co();return this.Tr.forEachInRange([n,a],(t=>{r=r.add(t.key)})),r}containsKey(t){const e=new Vl(t,0),n=this.Ir.firstAfterOrEqual(e);return null!==n&&t.isEqual(n.key)}}class Vl{constructor(t,e){this.key=t,this.yr=e}static dr(t,e){return Hr.comparator(t.key,e.key)||_r(t.yr,e.yr)}static Er(t,e){return _r(t.yr,e.yr)||Hr.comparator(t.key,e.key)}}
/**
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
 */class Cl{constructor(t,e){this.indexManager=t,this.referenceDelegate=e,this.mutationQueue=[],this.wr=1,this.Sr=new Jr(Vl.dr)}checkEmpty(t){return Pr.resolve(0===this.mutationQueue.length)}addMutationBatch(t,e,n,a){const r=this.wr;this.wr++,this.mutationQueue.length>0&&this.mutationQueue[this.mutationQueue.length-1];const i=new ps(r,e,n,a);this.mutationQueue.push(i);for(const o of a)this.Sr=this.Sr.add(new Vl(o.key,r)),this.indexManager.addToCollectionParentIndex(t,o.key.path.popLast());return Pr.resolve(i)}lookupMutationBatch(t,e){return Pr.resolve(this.br(e))}getNextMutationBatchAfterBatchId(t,e){const n=e+1,a=this.Dr(n),r=a<0?0:a;return Pr.resolve(this.mutationQueue.length>r?this.mutationQueue[r]:null)}getHighestUnacknowledgedBatchId(){return Pr.resolve(0===this.mutationQueue.length?-1:this.wr-1)}getAllMutationBatches(t){return Pr.resolve(this.mutationQueue.slice())}getAllMutationBatchesAffectingDocumentKey(t,e){const n=new Vl(e,0),a=new Vl(e,Number.POSITIVE_INFINITY),r=[];return this.Sr.forEachInRange([n,a],(t=>{const e=this.br(t.yr);r.push(e)})),Pr.resolve(r)}getAllMutationBatchesAffectingDocumentKeys(t,e){let n=new Jr(_r);return e.forEach((t=>{const e=new Vl(t,0),a=new Vl(t,Number.POSITIVE_INFINITY);this.Sr.forEachInRange([e,a],(t=>{n=n.add(t.yr)}))})),Pr.resolve(this.Cr(n))}getAllMutationBatchesAffectingQuery(t,e){const n=e.path,a=n.length+1;let r=n;Hr.isDocumentKey(r)||(r=r.child(""));const i=new Vl(new Hr(r),0);let o=new Jr(_r);return this.Sr.forEachWhile((t=>{const e=t.key.path;return!!n.isPrefixOf(e)&&(e.length===a&&(o=o.add(t.yr)),!0)}),i),Pr.resolve(this.Cr(o))}Cr(t){const e=[];return t.forEach((t=>{const n=this.br(t);null!==n&&e.push(n)})),e}removeMutationBatch(t,e){ar(0===this.vr(e.batchId,"removed")),this.mutationQueue.shift();let n=this.Sr;return Pr.forEach(e.mutations,(a=>{const r=new Vl(a.key,e.batchId);return n=n.delete(r),this.referenceDelegate.markPotentiallyOrphaned(t,a.key)})).next((()=>{this.Sr=n}))}xn(t){}containsKey(t,e){const n=new Vl(e,0),a=this.Sr.firstAfterOrEqual(n);return Pr.resolve(e.isEqual(a&&a.key))}performConsistencyCheck(t){return this.mutationQueue.length,Pr.resolve()}vr(t,e){return this.Dr(t)}Dr(t){return 0===this.mutationQueue.length?0:t-this.mutationQueue[0].batchId}br(t){const e=this.Dr(t);return e<0||e>=this.mutationQueue.length?null:this.mutationQueue[e]}}
/**
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
 */class Il{constructor(t){this.Fr=t,this.docs=function(){return new Gr(Hr.comparator)}(),this.size=0}setIndexManager(t){this.indexManager=t}addEntry(t,e){const n=e.key,a=this.docs.get(n),r=a?a.size:0,i=this.Fr(e);return this.docs=this.docs.insert(n,{document:e.mutableCopy(),size:i}),this.size+=i-r,this.indexManager.addToCollectionParentIndex(t,n.path.popLast())}removeEntry(t){const e=this.docs.get(t);e&&(this.docs=this.docs.remove(t),this.size-=e.size)}getEntry(t,e){const n=this.docs.get(e);return Pr.resolve(n?n.document.mutableCopy():Si.newInvalidDocument(e))}getEntries(t,e){let n=Lo();return e.forEach((t=>{const e=this.docs.get(t);n=n.insert(t,e?e.document.mutableCopy():Si.newInvalidDocument(t))})),Pr.resolve(n)}getDocumentsMatchingQuery(t,e,n,a){let r=Lo();const i=e.path,o=new Hr(i.child("")),s=this.docs.getIteratorFrom(o);for(;s.hasNext();){const{key:t,value:{document:o}}=s.getNext();if(!i.isPrefixOf(t.path))break;t.path.length>i.length+1||Dr(Ar(o),n)<=0||(a.has(o.key)||_o(e,o))&&(r=r.insert(o.key,o.mutableCopy()))}return Pr.resolve(r)}getAllFromCollectionGroup(t,e,n,a){nr()}Mr(t,e){return Pr.forEach(this.docs,(t=>e(t)))}newChangeBuffer(t){return new Pl(this)}getSize(t){return Pr.resolve(this.size)}}class Pl extends Hl{constructor(t){super(),this.ur=t}applyChanges(t){const e=[];return this.changes.forEach(((n,a)=>{a.isValidDocument()?e.push(this.ur.addEntry(t,a)):this.ur.removeEntry(n)})),Pr.waitFor(e)}getFromCache(t,e){return this.ur.getEntry(t,e)}getAllFromCache(t,e){return this.ur.getEntries(t,e)}}
/**
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
 */class El{constructor(t){this.persistence=t,this.Or=new zo((t=>Zi(t)),to),this.lastRemoteSnapshotVersion=Mr.min(),this.highestTargetId=0,this.Nr=0,this.Br=new Dl,this.targetCount=0,this.Lr=kl.Bn()}forEachTarget(t,e){return this.Or.forEach(((t,n)=>e(n))),Pr.resolve()}getLastRemoteSnapshotVersion(t){return Pr.resolve(this.lastRemoteSnapshotVersion)}getHighestSequenceNumber(t){return Pr.resolve(this.Nr)}allocateTargetId(t){return this.highestTargetId=this.Lr.next(),Pr.resolve(this.highestTargetId)}setTargetsMetadata(t,e,n){return n&&(this.lastRemoteSnapshotVersion=n),e>this.Nr&&(this.Nr=e),Pr.resolve()}Qn(t){this.Or.set(t.target,t);const e=t.targetId;e>this.highestTargetId&&(this.Lr=new kl(e),this.highestTargetId=e),t.sequenceNumber>this.Nr&&(this.Nr=t.sequenceNumber)}addTargetData(t,e){return this.Qn(e),this.targetCount+=1,Pr.resolve()}updateTargetData(t,e){return this.Qn(e),Pr.resolve()}removeTargetData(t,e){return this.Or.delete(e.target),this.Br.mr(e.targetId),this.targetCount-=1,Pr.resolve()}removeTargets(t,e,n){let a=0;const r=[];return this.Or.forEach(((i,o)=>{o.sequenceNumber<=e&&null===n.get(o.targetId)&&(this.Or.delete(i),r.push(this.removeMatchingKeysForTargetId(t,o.targetId)),a++)})),Pr.waitFor(r).next((()=>a))}getTargetCount(t){return Pr.resolve(this.targetCount)}getTargetData(t,e){const n=this.Or.get(e)||null;return Pr.resolve(n)}addMatchingKeys(t,e,n){return this.Br.Ar(e,n),Pr.resolve()}removeMatchingKeys(t,e,n){this.Br.Vr(e,n);const a=this.persistence.referenceDelegate,r=[];return a&&e.forEach((e=>{r.push(a.markPotentiallyOrphaned(t,e))})),Pr.waitFor(r)}removeMatchingKeysForTargetId(t,e){return this.Br.mr(e),Pr.resolve()}getMatchingKeysForTargetId(t,e){const n=this.Br.pr(e);return Pr.resolve(n)}containsKey(t,e){return Pr.resolve(this.Br.containsKey(e))}}
/**
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
 */class Bl{constructor(t,e){this.kr={},this.overlays={},this.qr=new Br(0),this.Qr=!1,this.Qr=!0,this.referenceDelegate=t(this),this.Kr=new El(this),this.indexManager=new zl,this.remoteDocumentCache=function(t){return new Il(t)}((t=>this.referenceDelegate.$r(t))),this.serializer=new yl(e),this.Ur=new Al(this.serializer)}start(){return Promise.resolve()}shutdown(){return this.Qr=!1,Promise.resolve()}get started(){return this.Qr}setDatabaseDeletedListener(){}setNetworkEnabled(){}getIndexManager(t){return this.indexManager}getDocumentOverlayCache(t){let e=this.overlays[t.toKey()];return e||(e=new Ol,this.overlays[t.toKey()]=e),e}getMutationQueue(t,e){let n=this.kr[t.toKey()];return n||(n=new Cl(e,this.referenceDelegate),this.kr[t.toKey()]=n),n}getTargetCache(){return this.Kr}getRemoteDocumentCache(){return this.remoteDocumentCache}getBundleCache(){return this.Ur}runTransaction(t,e,n){Qa("MemoryPersistence","Starting transaction:",t);const a=new Fl(this.qr.next());return this.referenceDelegate.Wr(),n(a).next((t=>this.referenceDelegate.Gr(a).next((()=>t)))).toPromise().then((t=>(a.raiseOnCommittedEvent(),t)))}zr(t,e){return Pr.or(Object.values(this.kr).map((n=>()=>n.containsKey(t,e))))}}class Fl extends Cr{constructor(t){super(),this.currentSequenceNumber=t}}class jl{constructor(t){this.persistence=t,this.jr=new Dl,this.Hr=null}static Jr(t){return new jl(t)}get Yr(){if(this.Hr)return this.Hr;throw nr()}addReference(t,e,n){return this.jr.addReference(n,e),this.Yr.delete(n.toString()),Pr.resolve()}removeReference(t,e,n){return this.jr.removeReference(n,e),this.Yr.add(n.toString()),Pr.resolve()}markPotentiallyOrphaned(t,e){return this.Yr.add(e.toString()),Pr.resolve()}removeTarget(t,e){this.jr.mr(e.targetId).forEach((t=>this.Yr.add(t.toString())));const n=this.persistence.getTargetCache();return n.getMatchingKeysForTargetId(t,e.targetId).next((t=>{t.forEach((t=>this.Yr.add(t.toString())))})).next((()=>n.removeTargetData(t,e)))}Wr(){this.Hr=new Set}Gr(t){const e=this.persistence.getRemoteDocumentCache().newChangeBuffer();return Pr.forEach(this.Yr,(n=>{const a=Hr.fromPath(n);return this.Zr(t,a).next((t=>{t||e.removeEntry(a,Mr.min())}))})).next((()=>(this.Hr=null,e.apply(t))))}updateLimboDocument(t,e){return this.Zr(t,e).next((t=>{t?this.Yr.delete(e.toString()):this.Yr.add(e.toString())}))}$r(t){return 0}Zr(t,e){return Pr.or([()=>Pr.resolve(this.jr.containsKey(e)),()=>this.persistence.getTargetCache().containsKey(t,e),()=>this.persistence.zr(t,e)])}}
/**
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
 */
class Yl{constructor(t,e,n,a){this.targetId=t,this.fromCache=e,this.Qi=n,this.Ki=a}static $i(t,e){let n=Co(),a=Co();for(const r of e.docChanges)switch(r.type){case 0:n=n.add(r.doc.key);break;case 1:a=a.add(r.doc.key)}return new Yl(t,e.fromCache,n,a)}}
/**
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
 */class xl{constructor(){this._documentReadCount=0}get documentReadCount(){return this._documentReadCount}incrementDocumentReadCount(t){this._documentReadCount+=t}}
/**
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
 */class Nl{constructor(){this.Ui=!1,this.Wi=!1,this.Gi=100,this.zi=2}initialize(t,e){this.ji=t,this.indexManager=e,this.Ui=!0}getDocumentsMatchingQuery(t,e,n,a){const r={result:null};return this.Hi(t,e).next((t=>{r.result=t})).next((()=>{if(!r.result)return this.Ji(t,e,a,n).next((t=>{r.result=t}))})).next((()=>{if(r.result)return;const n=new xl;return this.Yi(t,e,n).next((a=>{if(r.result=a,this.Wi)return this.Zi(t,e,n,a.size)}))})).next((()=>r.result))}Zi(t,e,n,a){return n.documentReadCount<this.Gi?(Xa()<=o["in"].DEBUG&&Qa("QueryEngine","SDK will not create cache indexes for query:",go(e),"since it only creates cache indexes for collection contains","more than or equal to",this.Gi,"documents"),Pr.resolve()):(Xa()<=o["in"].DEBUG&&Qa("QueryEngine","Query:",go(e),"scans",n.documentReadCount,"local documents and returns",a,"documents as results."),n.documentReadCount>this.zi*a?(Xa()<=o["in"].DEBUG&&Qa("QueryEngine","The SDK decides to create cache indexes for query:",go(e),"as using cache indexes may help improve performance."),this.indexManager.createTargetIndexes(t,uo(e))):Pr.resolve())}Hi(t,e){if(io(e))return Pr.resolve(null);let n=uo(e);return this.indexManager.getIndexType(t,n).next((a=>0===a?null:(null!==e.limit&&1===a&&(e=po(e,null,"F"),n=uo(e)),this.indexManager.getDocumentsMatchingTarget(t,n).next((a=>{const r=Co(...a);return this.ji.getDocuments(t,r).next((a=>this.indexManager.getMinOffset(t,n).next((n=>{const i=this.Xi(e,a);return this.es(e,i,r,n.readTime)?this.Hi(t,po(e,null,"F")):this.ts(t,i,e,n)}))))})))))}Ji(t,e,n,a){return io(e)||a.isEqual(Mr.min())?Pr.resolve(null):this.ji.getDocuments(t,n).next((r=>{const i=this.Xi(e,r);return this.es(e,i,n,a)?Pr.resolve(null):(Xa()<=o["in"].DEBUG&&Qa("QueryEngine","Re-using previous result from %s to execute query: %s",a.toString(),go(e)),this.ts(t,i,e,Sr(a,-1)).next((t=>t)))}))}Xi(t,e){let n=new Jr(bo(t));return e.forEach(((e,a)=>{_o(t,a)&&(n=n.add(a))})),n}es(t,e,n,a){if(null===t.limit)return!1;if(n.size!==e.size)return!0;const r="F"===t.limitType?e.last():e.first();return!!r&&(r.hasPendingWrites||r.version.compareTo(a)>0)}Yi(t,e,n){return Xa()<=o["in"].DEBUG&&Qa("QueryEngine","Using full collection scan to execute query:",go(e)),this.ji.getDocumentsMatchingQuery(t,e,Or.min(),n)}ts(t,e,n,a){return this.ji.getDocumentsMatchingQuery(t,n,a).next((t=>(e.forEach((e=>{t=t.insert(e.key,e)})),t)))}}
/**
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
 */class Rl{constructor(t,e,n,a){this.persistence=t,this.ns=e,this.serializer=a,this.rs=new Gr(_r),this.ss=new zo((t=>Zi(t)),to),this.os=new Map,this._s=t.getRemoteDocumentCache(),this.Kr=t.getTargetCache(),this.Ur=t.getBundleCache(),this.us(n)}us(t){this.documentOverlayCache=this.persistence.getDocumentOverlayCache(t),this.indexManager=this.persistence.getIndexManager(t),this.mutationQueue=this.persistence.getMutationQueue(t,this.indexManager),this.localDocuments=new Sl(this._s,this.mutationQueue,this.documentOverlayCache,this.indexManager),this._s.setIndexManager(this.indexManager),this.ns.initialize(this.localDocuments,this.indexManager)}collectGarbage(t){return this.persistence.runTransaction("Collect garbage","readwrite-primary",(e=>t.collect(e,this.rs)))}}function $l(t,e,n,a){return new Rl(t,e,n,a)}async function Ul(t,e){const n=rr(t);return await n.persistence.runTransaction("Handle user change","readonly",(t=>{let a;return n.mutationQueue.getAllMutationBatches(t).next((r=>(a=r,n.us(e),n.mutationQueue.getAllMutationBatches(t)))).next((e=>{const r=[],i=[];let o=Co();for(const t of a){r.push(t.batchId);for(const e of t.mutations)o=o.add(e.key)}for(const t of e){i.push(t.batchId);for(const e of t.mutations)o=o.add(e.key)}return n.localDocuments.getDocuments(t,o).next((t=>({cs:t,removedBatchIds:r,addedBatchIds:i})))}))}))}function Wl(t,e){const n=rr(t);return n.persistence.runTransaction("Acknowledge batch","readwrite-primary",(t=>{const a=e.batch.keys(),r=n._s.newChangeBuffer({trackRemovals:!0});return function(t,e,n,a){const r=n.batch,i=r.keys();let o=Pr.resolve();return i.forEach((t=>{o=o.next((()=>a.getEntry(e,t))).next((e=>{const i=n.docVersions.get(t);ar(null!==i),e.version.compareTo(i)<0&&(r.applyToRemoteDocument(e,n),e.isValidDocument()&&(e.setReadTime(n.commitVersion),a.addEntry(e)))}))})),o.next((()=>t.mutationQueue.removeMutationBatch(e,r)))}(n,t,e,r).next((()=>r.apply(t))).next((()=>n.mutationQueue.performConsistencyCheck(t))).next((()=>n.documentOverlayCache.removeOverlaysForBatchId(t,a,e.batch.batchId))).next((()=>n.localDocuments.recalculateAndSaveOverlaysForDocumentKeys(t,function(t){let e=Co();for(let n=0;n<t.mutationResults.length;++n)t.mutationResults[n].transformResults.length>0&&(e=e.add(t.batch.mutations[n].key));return e}(e)))).next((()=>n.localDocuments.getDocuments(t,a)))}))}function Gl(t){const e=rr(t);return e.persistence.runTransaction("Get last remote snapshot version","readonly",(t=>e.Kr.getLastRemoteSnapshotVersion(t)))}function ql(t,e){const n=rr(t),a=e.snapshotVersion;let r=n.rs;return n.persistence.runTransaction("Apply remote event","readwrite-primary",(t=>{const i=n._s.newChangeBuffer({trackRemovals:!0});r=n.rs;const o=[];e.targetChanges.forEach(((i,s)=>{const l=r.get(s);if(!l)return;o.push(n.Kr.removeMatchingKeys(t,i.removedDocuments,s).next((()=>n.Kr.addMatchingKeys(t,i.addedDocuments,s))));let c=l.withSequenceNumber(t.currentSequenceNumber);null!==e.targetMismatches.get(s)?c=c.withResumeToken(ti.EMPTY_BYTE_STRING,Mr.min()).withLastLimboFreeSnapshotVersion(Mr.min()):i.resumeToken.approximateByteSize()>0&&(c=c.withResumeToken(i.resumeToken,a)),r=r.insert(s,c),function(t,e,n){return 0===t.resumeToken.approximateByteSize()||(e.snapshotVersion.toMicroseconds()-t.snapshotVersion.toMicroseconds()>=3e8||n.addedDocuments.size+n.modifiedDocuments.size+n.removedDocuments.size>0)}(l,c,i)&&o.push(n.Kr.updateTargetData(t,c))}));let s=Lo(),l=Co();if(e.documentUpdates.forEach((a=>{e.resolvedLimboDocuments.has(a)&&o.push(n.persistence.referenceDelegate.updateLimboDocument(t,a))})),o.push(Kl(t,i,e.documentUpdates).next((t=>{s=t.ls,l=t.hs}))),!a.isEqual(Mr.min())){const e=n.Kr.getLastRemoteSnapshotVersion(t).next((e=>n.Kr.setTargetsMetadata(t,t.currentSequenceNumber,a)));o.push(e)}return Pr.waitFor(o).next((()=>i.apply(t))).next((()=>n.localDocuments.getLocalViewOfDocuments(t,s,l))).next((()=>s))})).then((t=>(n.rs=r,t)))}function Kl(t,e,n){let a=Co(),r=Co();return n.forEach((t=>a=a.add(t))),e.getEntries(t,a).next((t=>{let a=Lo();return n.forEach(((n,i)=>{const o=t.get(n);i.isFoundDocument()!==o.isFoundDocument()&&(r=r.add(n)),i.isNoDocument()&&i.version.isEqual(Mr.min())?(e.removeEntry(n,i.readTime),a=a.insert(n,i)):!o.isValidDocument()||i.version.compareTo(o.version)>0||0===i.version.compareTo(o.version)&&o.hasPendingWrites?(e.addEntry(i),a=a.insert(n,i)):Qa("LocalStore","Ignoring outdated watch update for ",n,". Current version:",o.version," Watch version:",i.version)})),{ls:a,hs:r}}))}function Jl(t,e){const n=rr(t);return n.persistence.runTransaction("Get next mutation batch","readonly",(t=>(void 0===e&&(e=-1),n.mutationQueue.getNextMutationBatchAfterBatchId(t,e))))}function Xl(t,e){const n=rr(t);return n.persistence.runTransaction("Allocate target","readwrite",(t=>{let a;return n.Kr.getTargetData(t,e).next((r=>r?(a=r,Pr.resolve(a)):n.Kr.allocateTargetId(t).next((r=>(a=new _l(e,r,"TargetPurposeListen",t.currentSequenceNumber),n.Kr.addTargetData(t,a).next((()=>a)))))))})).then((t=>{const a=n.rs.get(t.targetId);return(null===a||t.snapshotVersion.compareTo(a.snapshotVersion)>0)&&(n.rs=n.rs.insert(t.targetId,t),n.ss.set(e,t.targetId)),t}))}async function Ql(t,e,n){const a=rr(t),r=a.rs.get(e),i=n?"readwrite":"readwrite-primary";try{n||await a.persistence.runTransaction("Release target",i,(t=>a.persistence.referenceDelegate.removeTarget(t,r)))}catch(t){if(!Er(t))throw t;Qa("LocalStore",`Failed to update sequence numbers for target ${e}: ${t}`)}a.rs=a.rs.remove(e),a.ss.delete(r.target)}function Zl(t,e,n){const a=rr(t);let r=Mr.min(),i=Co();return a.persistence.runTransaction("Execute query","readwrite",(t=>function(t,e,n){const a=rr(t),r=a.ss.get(n);return void 0!==r?Pr.resolve(a.rs.get(r)):a.Kr.getTargetData(e,n)}(a,t,uo(e)).next((e=>{if(e)return r=e.lastLimboFreeSnapshotVersion,a.Kr.getMatchingKeysForTargetId(t,e.targetId).next((t=>{i=t}))})).next((()=>a.ns.getDocumentsMatchingQuery(t,e,n?r:Mr.min(),n?i:Co()))).next((t=>(tc(a,yo(e),t),{documents:t,Ps:i})))))}function tc(t,e,n){let a=t.os.get(e)||Mr.min();n.forEach(((t,e)=>{e.readTime.compareTo(a)>0&&(a=e.readTime)})),t.os.set(e,a)}class ec{constructor(){this.activeTargetIds=Po()}Rs(t){this.activeTargetIds=this.activeTargetIds.add(t)}Vs(t){this.activeTargetIds=this.activeTargetIds.delete(t)}As(){const t={activeTargetIds:this.activeTargetIds.toArray(),updateTimeMs:Date.now()};return JSON.stringify(t)}}class nc{constructor(){this.ro=new ec,this.io={},this.onlineStateHandler=null,this.sequenceNumberHandler=null}addPendingMutation(t){}updateMutationState(t,e,n){}addLocalQueryTarget(t){return this.ro.Rs(t),this.io[t]||"not-current"}updateQueryState(t,e,n){this.io[t]=e}removeLocalQueryTarget(t){this.ro.Vs(t)}isLocalQueryTarget(t){return this.ro.activeTargetIds.has(t)}clearQueryState(t){delete this.io[t]}getAllActiveQueryTargets(){return this.ro.activeTargetIds}isActiveQueryTarget(t){return this.ro.activeTargetIds.has(t)}start(){return this.ro=new ec,Promise.resolve()}handleUserChange(t,e,n){}setOnlineState(t){}shutdown(){}writeSequenceNumber(t){}notifyBundleLoaded(t){}}
/**
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
 */class ac{so(t){}shutdown(){}}
/**
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
 */class rc{constructor(){this.oo=()=>this._o(),this.ao=()=>this.uo(),this.co=[],this.lo()}so(t){this.co.push(t)}shutdown(){window.removeEventListener("online",this.oo),window.removeEventListener("offline",this.ao)}lo(){window.addEventListener("online",this.oo),window.addEventListener("offline",this.ao)}_o(){Qa("ConnectivityMonitor","Network connectivity changed: AVAILABLE");for(const t of this.co)t(0)}uo(){Qa("ConnectivityMonitor","Network connectivity changed: UNAVAILABLE");for(const t of this.co)t(1)}static C(){return"undefined"!=typeof window&&void 0!==window.addEventListener&&void 0!==window.removeEventListener}}
/**
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
 */let ic=null;function oc(){return null===ic?ic=function(){return 268435456+Math.round(2147483648*Math.random())}():ic++,"0x"+ic.toString(16)
/**
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
 */}const sc={BatchGetDocuments:"batchGet",Commit:"commit",RunQuery:"runQuery",RunAggregationQuery:"runAggregationQuery"};
/**
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
 */class lc{constructor(t){this.ho=t.ho,this.Po=t.Po}Io(t){this.To=t}Eo(t){this.Ao=t}onMessage(t){this.Ro=t}close(){this.Po()}send(t){this.ho(t)}Vo(){this.To()}mo(t){this.Ao(t)}fo(t){this.Ro(t)}}
/**
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
 */const cc="WebChannelConnection";class uc extends class{constructor(t){this.databaseInfo=t,this.databaseId=t.databaseId;const e=t.ssl?"https":"http",n=encodeURIComponent(this.databaseId.projectId),a=encodeURIComponent(this.databaseId.database);this.po=e+"://"+t.host,this.yo=`projects/${n}/databases/${a}`,this.wo="(default)"===this.databaseId.database?`project_id=${n}`:`project_id=${n}&database_id=${a}`}get So(){return!1}bo(t,e,n,a,r){const i=oc(),o=this.Do(t,e);Qa("RestConnection",`Sending RPC '${t}' ${i}:`,o,n);const s={"google-cloud-resource-prefix":this.yo,"x-goog-request-params":this.wo};return this.Co(s,a,r),this.vo(t,o,s,n).then((e=>(Qa("RestConnection",`Received RPC '${t}' ${i}: `,e),e)),(e=>{throw tr("RestConnection",`RPC '${t}' ${i} failed with error: `,e,"url: ",o,"request:",n),e}))}Fo(t,e,n,a,r,i){return this.bo(t,e,n,a,r)}Co(t,e,n){t["X-Goog-Api-Client"]=function(){return"gl-js/ fire/"+Ka}(),t["Content-Type"]="text/plain",this.databaseInfo.appId&&(t["X-Firebase-GMPID"]=this.databaseInfo.appId),e&&e.headers.forEach(((e,n)=>t[n]=e)),n&&n.headers.forEach(((e,n)=>t[n]=e))}Do(t,e){const n=sc[t];return`${this.po}/v1/${e}:${n}`}}{constructor(t){super(t),this.forceLongPolling=t.forceLongPolling,this.autoDetectLongPolling=t.autoDetectLongPolling,this.useFetchStreams=t.useFetchStreams,this.longPollingOptions=t.longPollingOptions}vo(t,e,n,a){const r=oc();return new Promise(((i,o)=>{const s=new $a;s.setWithCredentials(!0),s.listenOnce(Ya.COMPLETE,(()=>{try{switch(s.getLastErrorCode()){case ja.NO_ERROR:const e=s.getResponseJson();Qa(cc,`XHR for RPC '${t}' ${r} received:`,JSON.stringify(e)),i(e);break;case ja.TIMEOUT:Qa(cc,`RPC '${t}' ${r} timed out`),o(new or(ir.DEADLINE_EXCEEDED,"Request time out"));break;case ja.HTTP_ERROR:const n=s.getStatus();if(Qa(cc,`RPC '${t}' ${r} failed with status:`,n,"response text:",s.getResponseText()),n>0){let t=s.getResponseJson();Array.isArray(t)&&(t=t[0]);const e=null==t?void 0:t.error;if(e&&e.status&&e.message){const t=function(t){const e=t.toLowerCase().replace(/_/g,"-");return Object.values(ir).indexOf(e)>=0?e:ir.UNKNOWN}(e.status);o(new or(t,e.message))}else o(new or(ir.UNKNOWN,"Server responded with status "+s.getStatus()))}else o(new or(ir.UNAVAILABLE,"Connection failed."));break;default:nr()}}finally{Qa(cc,`RPC '${t}' ${r} completed.`)}}));const l=JSON.stringify(a);Qa(cc,`RPC '${t}' ${r} sending request:`,a),s.send(e,"POST",l,n,15)}))}Mo(t,e,n){const a=oc(),r=[this.po,"/","google.firestore.v1.Firestore","/",t,"/channel"],i=Ba(),o=Fa(),s={httpSessionIdParam:"gsessionid",initMessageHeaders:{},messageUrlParams:{database:`projects/${this.databaseId.projectId}/databases/${this.databaseId.database}`},sendRawJson:!0,supportsCrossDomainXhr:!0,internalChannelParams:{forwardChannelRequestTimeoutMs:6e5},forceLongPolling:this.forceLongPolling,detectBufferingProxy:this.autoDetectLongPolling},l=this.longPollingOptions.timeoutSeconds;void 0!==l&&(s.longPollingTimeout=Math.round(1e3*l)),this.useFetchStreams&&(s.useFetchStreams=!0),this.Co(s.initMessageHeaders,e,n),s.encodeInitMessageHeaders=!0;const c=r.join("");Qa(cc,`Creating RPC '${t}' stream ${a}: ${c}`,s);const u=i.createWebChannel(c,s);let h=!1,d=!1;const f=new lc({ho:e=>{d?Qa(cc,`Not sending because RPC '${t}' stream ${a} is closed:`,e):(h||(Qa(cc,`Opening RPC '${t}' stream ${a} transport.`),u.open(),h=!0),Qa(cc,`RPC '${t}' stream ${a} sending:`,e),u.send(e))},Po:()=>u.close()}),p=(t,e,n)=>{t.listen(e,(t=>{try{n(t)}catch(t){setTimeout((()=>{throw t}),0)}}))};return p(u,Ra.EventType.OPEN,(()=>{d||Qa(cc,`RPC '${t}' stream ${a} transport opened.`)})),p(u,Ra.EventType.CLOSE,(()=>{d||(d=!0,Qa(cc,`RPC '${t}' stream ${a} transport closed`),f.mo())})),p(u,Ra.EventType.ERROR,(e=>{d||(d=!0,tr(cc,`RPC '${t}' stream ${a} transport errored:`,e),f.mo(new or(ir.UNAVAILABLE,"The operation could not be completed")))})),p(u,Ra.EventType.MESSAGE,(e=>{var n;if(!d){const r=e.data[0];ar(!!r);const i=r,o=i.error||(null===(n=i[0])||void 0===n?void 0:n.error);if(o){Qa(cc,`RPC '${t}' stream ${a} received error:`,o);const e=o.status;let n=function(t){const e=_s[t];if(void 0!==e)return Ms(e)}(e),r=o.message;void 0===n&&(n=ir.INTERNAL,r="Unknown error status: "+e+" with message "+o.message),d=!0,f.mo(new or(n,r)),u.close()}else Qa(cc,`RPC '${t}' stream ${a} received:`,r),f.fo(r)}})),p(o,xa.STAT_EVENT,(e=>{e.stat===Na.PROXY?Qa(cc,`RPC '${t}' stream ${a} detected buffering proxy`):e.stat===Na.NOPROXY&&Qa(cc,`RPC '${t}' stream ${a} detected no buffering proxy`)})),setTimeout((()=>{f.Vo()}),0),f}}
/**
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
 */
/**
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
 */function hc(){return"undefined"!=typeof document?document:null}
/**
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
 */function dc(t){return new xs(t,!0)}
/**
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
 */class fc{constructor(t,e,n=1e3,a=1.5,r=6e4){this._i=t,this.timerId=e,this.xo=n,this.Oo=a,this.No=r,this.Bo=0,this.Lo=null,this.ko=Date.now(),this.reset()}reset(){this.Bo=0}qo(){this.Bo=this.No}Qo(t){this.cancel();const e=Math.floor(this.Bo+this.Ko()),n=Math.max(0,Date.now()-this.ko),a=Math.max(0,e-n);a>0&&Qa("ExponentialBackoff",`Backing off for ${a} ms (base delay: ${this.Bo} ms, delay with jitter: ${e} ms, last attempt: ${n} ms ago)`),this.Lo=this._i.enqueueAfterDelay(this.timerId,a,(()=>(this.ko=Date.now(),t()))),this.Bo*=this.Oo,this.Bo<this.xo&&(this.Bo=this.xo),this.Bo>this.No&&(this.Bo=this.No)}$o(){null!==this.Lo&&(this.Lo.skipDelay(),this.Lo=null)}cancel(){null!==this.Lo&&(this.Lo.cancel(),this.Lo=null)}Ko(){return(Math.random()-.5)*this.Bo}}
/**
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
 */class pc{constructor(t,e,n,a,r,i,o,s){this._i=t,this.Uo=n,this.Wo=a,this.connection=r,this.authCredentialsProvider=i,this.appCheckCredentialsProvider=o,this.listener=s,this.state=0,this.Go=0,this.zo=null,this.jo=null,this.stream=null,this.Ho=new fc(t,e)}Jo(){return 1===this.state||5===this.state||this.Yo()}Yo(){return 2===this.state||3===this.state}start(){4!==this.state?this.auth():this.Zo()}async stop(){this.Jo()&&await this.close(0)}Xo(){this.state=0,this.Ho.reset()}e_(){this.Yo()&&null===this.zo&&(this.zo=this._i.enqueueAfterDelay(this.Uo,6e4,(()=>this.t_())))}n_(t){this.r_(),this.stream.send(t)}async t_(){if(this.Yo())return this.close(0)}r_(){this.zo&&(this.zo.cancel(),this.zo=null)}i_(){this.jo&&(this.jo.cancel(),this.jo=null)}async close(t,e){this.r_(),this.i_(),this.Ho.cancel(),this.Go++,4!==t?this.Ho.reset():e&&e.code===ir.RESOURCE_EXHAUSTED?(Za(e.toString()),Za("Using maximum backoff delay to prevent overloading the backend."),this.Ho.qo()):e&&e.code===ir.UNAUTHENTICATED&&3!==this.state&&(this.authCredentialsProvider.invalidateToken(),this.appCheckCredentialsProvider.invalidateToken()),null!==this.stream&&(this.s_(),this.stream.close(),this.stream=null),this.state=t,await this.listener.Eo(e)}s_(){}auth(){this.state=1;const t=this.o_(this.Go),e=this.Go;Promise.all([this.authCredentialsProvider.getToken(),this.appCheckCredentialsProvider.getToken()]).then((([t,n])=>{this.Go===e&&this.__(t,n)}),(e=>{t((()=>{const t=new or(ir.UNKNOWN,"Fetching auth token failed: "+e.message);return this.a_(t)}))}))}__(t,e){const n=this.o_(this.Go);this.stream=this.u_(t,e),this.stream.Io((()=>{n((()=>(this.state=2,this.jo=this._i.enqueueAfterDelay(this.Wo,1e4,(()=>(this.Yo()&&(this.state=3),Promise.resolve()))),this.listener.Io())))})),this.stream.Eo((t=>{n((()=>this.a_(t)))})),this.stream.onMessage((t=>{n((()=>this.onMessage(t)))}))}Zo(){this.state=5,this.Ho.Qo((async()=>{this.state=0,this.start()}))}a_(t){return Qa("PersistentStream",`close with error: ${t}`),this.stream=null,this.close(4,t)}o_(t){return e=>{this._i.enqueueAndForget((()=>this.Go===t?e():(Qa("PersistentStream","stream callback skipped by getCloseGuardedDispatcher."),Promise.resolve())))}}}class mc extends pc{constructor(t,e,n,a,r,i){super(t,"listen_stream_connection_backoff","listen_stream_idle","health_check_timeout",e,n,a,i),this.serializer=r}u_(t,e){return this.connection.Mo("Listen",t,e)}onMessage(t){this.Ho.reset();const e=nl(this.serializer,t),n=function(t){if(!("targetChange"in t))return Mr.min();const e=t.targetChange;return e.targetIds&&e.targetIds.length?Mr.min():e.readTime?Ws(e.readTime):Mr.min()}(t);return this.listener.c_(e,n)}l_(t){const e={};e.database=Zs(this.serializer),e.addTarget=function(t,e){let n;const a=e.target;if(n=eo(a)?{documents:il(t,a)}:{query:ol(t,a)},n.targetId=e.targetId,e.resumeToken.approximateByteSize()>0){n.resumeToken=$s(t,e.resumeToken);const a=Ns(t,e.expectedCount);null!==a&&(n.expectedCount=a)}else if(e.snapshotVersion.compareTo(Mr.min())>0){n.readTime=Rs(t,e.snapshotVersion.toTimestamp());const a=Ns(t,e.expectedCount);null!==a&&(n.expectedCount=a)}return n}(this.serializer,t);const n=ll(this.serializer,t);n&&(e.labels=n),this.n_(e)}h_(t){const e={};e.database=Zs(this.serializer),e.removeTarget=t,this.n_(e)}}class vc extends pc{constructor(t,e,n,a,r,i){super(t,"write_stream_connection_backoff","write_stream_idle","health_check_timeout",e,n,a,i),this.serializer=r,this.P_=!1}get I_(){return this.P_}start(){this.P_=!1,this.lastStreamToken=void 0,super.start()}s_(){this.P_&&this.d_([])}u_(t,e){return this.connection.Mo("Write",t,e)}onMessage(t){if(ar(!!t.streamToken),this.lastStreamToken=t.streamToken,this.P_){this.Ho.reset();const e=rl(t.writeResults,t.commitTime),n=Ws(t.commitTime);return this.listener.T_(n,e)}return ar(!t.writeResults||0===t.writeResults.length),this.P_=!0,this.listener.E_()}A_(){const t={};t.database=Zs(this.serializer),this.n_(t)}d_(t){const e={streamToken:this.lastStreamToken,writes:t.map((t=>al(this.serializer,t)))};this.n_(e)}}
/**
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
 */class gc extends class{}{constructor(t,e,n,a){super(),this.authCredentials=t,this.appCheckCredentials=e,this.connection=n,this.serializer=a,this.R_=!1}V_(){if(this.R_)throw new or(ir.FAILED_PRECONDITION,"The client has already been terminated.")}bo(t,e,n){return this.V_(),Promise.all([this.authCredentials.getToken(),this.appCheckCredentials.getToken()]).then((([a,r])=>this.connection.bo(t,e,n,a,r))).catch((t=>{throw"FirebaseError"===t.name?(t.code===ir.UNAUTHENTICATED&&(this.authCredentials.invalidateToken(),this.appCheckCredentials.invalidateToken()),t):new or(ir.UNKNOWN,t.toString())}))}Fo(t,e,n,a){return this.V_(),Promise.all([this.authCredentials.getToken(),this.appCheckCredentials.getToken()]).then((([r,i])=>this.connection.Fo(t,e,n,r,i,a))).catch((t=>{throw"FirebaseError"===t.name?(t.code===ir.UNAUTHENTICATED&&(this.authCredentials.invalidateToken(),this.appCheckCredentials.invalidateToken()),t):new or(ir.UNKNOWN,t.toString())}))}terminate(){this.R_=!0}}class _c{constructor(t,e){this.asyncQueue=t,this.onlineStateHandler=e,this.state="Unknown",this.f_=0,this.g_=null,this.p_=!0}y_(){0===this.f_&&(this.w_("Unknown"),this.g_=this.asyncQueue.enqueueAfterDelay("online_state_timeout",1e4,(()=>(this.g_=null,this.S_("Backend didn't respond within 10 seconds."),this.w_("Offline"),Promise.resolve()))))}b_(t){"Online"===this.state?this.w_("Unknown"):(this.f_++,this.f_>=1&&(this.D_(),this.S_(`Connection failed 1 times. Most recent error: ${t.toString()}`),this.w_("Offline")))}set(t){this.D_(),this.f_=0,"Online"===t&&(this.p_=!1),this.w_(t)}w_(t){t!==this.state&&(this.state=t,this.onlineStateHandler(t))}S_(t){const e=`Could not reach Cloud Firestore backend. ${t}\nThis typically indicates that your device does not have a healthy Internet connection at the moment. The client will operate in offline mode until it is able to successfully connect to the backend.`;this.p_?(Za(e),this.p_=!1):Qa("OnlineStateTracker",e)}D_(){null!==this.g_&&(this.g_.cancel(),this.g_=null)}}
/**
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
 */class yc{constructor(t,e,n,a,r){this.localStore=t,this.datastore=e,this.asyncQueue=n,this.remoteSyncer={},this.C_=[],this.v_=new Map,this.F_=new Set,this.M_=[],this.x_=r,this.x_.so((t=>{n.enqueueAndForget((async()=>{Sc(this)&&(Qa("RemoteStore","Restarting streams for network reachability change."),await async function(t){const e=rr(t);e.F_.add(4),await Mc(e),e.O_.set("Unknown"),e.F_.delete(4),await bc(e)}(this))}))})),this.O_=new _c(n,a)}}async function bc(t){if(Sc(t))for(const e of t.M_)await e(!0)}async function Mc(t){for(const e of t.M_)await e(!1)}function zc(t,e){const n=rr(t);n.v_.has(e.targetId)||(n.v_.set(e.targetId,e),Tc(n)?Hc(n):Wc(n).Yo()&&Lc(n,e))}function wc(t,e){const n=rr(t),a=Wc(n);n.v_.delete(e),a.Yo()&&kc(n,e),0===n.v_.size&&(a.Yo()?a.e_():Sc(n)&&n.O_.set("Unknown"))}function Lc(t,e){if(t.N_.Le(e.targetId),e.resumeToken.approximateByteSize()>0||e.snapshotVersion.compareTo(Mr.min())>0){const n=t.remoteSyncer.getRemoteKeysForTarget(e.targetId).size;e=e.withExpectedCount(n)}Wc(t).l_(e)}function kc(t,e){t.N_.Le(e),Wc(t).h_(e)}function Hc(t){t.N_=new Ps({getRemoteKeysForTarget:e=>t.remoteSyncer.getRemoteKeysForTarget(e),lt:e=>t.v_.get(e)||null,st:()=>t.datastore.serializer.databaseId}),Wc(t).start(),t.O_.y_()}function Tc(t){return Sc(t)&&!Wc(t).Jo()&&t.v_.size>0}function Sc(t){return 0===rr(t).F_.size}function Ac(t){t.N_=void 0}async function Oc(t){t.v_.forEach(((e,n)=>{Lc(t,e)}))}async function Dc(t,e){Ac(t),Tc(t)?(t.O_.b_(e),Hc(t)):t.O_.set("Unknown")}async function Vc(t,e,n){if(t.O_.set("Online"),e instanceof Cs&&2===e.state&&e.cause)try{await async function(t,e){const n=e.cause;for(const a of e.targetIds)t.v_.has(a)&&(await t.remoteSyncer.rejectListen(a,n),t.v_.delete(a),t.N_.removeTarget(a))}(t,e)}catch(n){Qa("RemoteStore","Failed to remove targets %s: %s ",e.targetIds.join(","),n),await Cc(t,n)}else if(e instanceof Ds?t.N_.Ge(e):e instanceof Vs?t.N_.Xe(e):t.N_.He(e),!n.isEqual(Mr.min()))try{const e=await Gl(t.localStore);n.compareTo(e)>=0&&await function(t,e){const n=t.N_._t(e);return n.targetChanges.forEach(((n,a)=>{if(n.resumeToken.approximateByteSize()>0){const r=t.v_.get(a);r&&t.v_.set(a,r.withResumeToken(n.resumeToken,e))}})),n.targetMismatches.forEach(((e,n)=>{const a=t.v_.get(e);if(!a)return;t.v_.set(e,a.withResumeToken(ti.EMPTY_BYTE_STRING,a.snapshotVersion)),kc(t,e);const r=new _l(a.target,e,n,a.sequenceNumber);Lc(t,r)})),t.remoteSyncer.applyRemoteEvent(n)}(t,n)}catch(e){Qa("RemoteStore","Failed to raise snapshot:",e),await Cc(t,e)}}async function Cc(t,e,n){if(!Er(e))throw e;t.F_.add(1),await Mc(t),t.O_.set("Offline"),n||(n=()=>Gl(t.localStore)),t.asyncQueue.enqueueRetryable((async()=>{Qa("RemoteStore","Retrying IndexedDB access"),await n(),t.F_.delete(1),await bc(t)}))}function Ic(t,e){return e().catch((n=>Cc(t,n,e)))}async function Pc(t){const e=rr(t),n=Gc(e);let a=e.C_.length>0?e.C_[e.C_.length-1].batchId:-1;for(;Ec(e);)try{const t=await Jl(e.localStore,a);if(null===t){0===e.C_.length&&n.e_();break}a=t.batchId,Bc(e,t)}catch(t){await Cc(e,t)}Fc(e)&&jc(e)}function Ec(t){return Sc(t)&&t.C_.length<10}function Bc(t,e){t.C_.push(e);const n=Gc(t);n.Yo()&&n.I_&&n.d_(e.mutations)}function Fc(t){return Sc(t)&&!Gc(t).Jo()&&t.C_.length>0}function jc(t){Gc(t).start()}async function Yc(t){Gc(t).A_()}async function xc(t){const e=Gc(t);for(const n of t.C_)e.d_(n.mutations)}async function Nc(t,e,n){const a=t.C_.shift(),r=ms.from(a,e,n);await Ic(t,(()=>t.remoteSyncer.applySuccessfulWrite(r))),await Pc(t)}async function Rc(t,e){e&&Gc(t).I_&&await async function(t,e){if(function(t){return bs(t)&&t!==ir.ABORTED}(e.code)){const n=t.C_.shift();Gc(t).Xo(),await Ic(t,(()=>t.remoteSyncer.rejectFailedWrite(n.batchId,e))),await Pc(t)}}(t,e),Fc(t)&&jc(t)}async function $c(t,e){const n=rr(t);n.asyncQueue.verifyOperationInProgress(),Qa("RemoteStore","RemoteStore received new credentials");const a=Sc(n);n.F_.add(3),await Mc(n),a&&n.O_.set("Unknown"),await n.remoteSyncer.handleCredentialChange(e),n.F_.delete(3),await bc(n)}async function Uc(t,e){const n=rr(t);e?(n.F_.delete(2),await bc(n)):e||(n.F_.add(2),await Mc(n),n.O_.set("Unknown"))}function Wc(t){return t.B_||(t.B_=function(t,e,n){const a=rr(t);return a.V_(),new mc(e,a.connection,a.authCredentials,a.appCheckCredentials,a.serializer,n)
/**
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
 */}(t.datastore,t.asyncQueue,{Io:Oc.bind(null,t),Eo:Dc.bind(null,t),c_:Vc.bind(null,t)}),t.M_.push((async e=>{e?(t.B_.Xo(),Tc(t)?Hc(t):t.O_.set("Unknown")):(await t.B_.stop(),Ac(t))}))),t.B_}function Gc(t){return t.L_||(t.L_=function(t,e,n){const a=rr(t);return a.V_(),new vc(e,a.connection,a.authCredentials,a.appCheckCredentials,a.serializer,n)}(t.datastore,t.asyncQueue,{Io:Yc.bind(null,t),Eo:Rc.bind(null,t),E_:xc.bind(null,t),T_:Nc.bind(null,t)}),t.M_.push((async e=>{e?(t.L_.Xo(),await Pc(t)):(await t.L_.stop(),t.C_.length>0&&(Qa("RemoteStore",`Stopping write stream with ${t.C_.length} pending writes`),t.C_=[]))}))),t.L_
/**
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
 */}class qc{constructor(t,e,n,a,r){this.asyncQueue=t,this.timerId=e,this.targetTimeMs=n,this.op=a,this.removalCallback=r,this.deferred=new sr,this.then=this.deferred.promise.then.bind(this.deferred.promise),this.deferred.promise.catch((t=>{}))}get promise(){return this.deferred.promise}static createAndSchedule(t,e,n,a,r){const i=Date.now()+n,o=new qc(t,e,i,a,r);return o.start(n),o}start(t){this.timerHandle=setTimeout((()=>this.handleDelayElapsed()),t)}skipDelay(){return this.handleDelayElapsed()}cancel(t){null!==this.timerHandle&&(this.clearTimeout(),this.deferred.reject(new or(ir.CANCELLED,"Operation cancelled"+(t?": "+t:""))))}handleDelayElapsed(){this.asyncQueue.enqueueAndForget((()=>null!==this.timerHandle?(this.clearTimeout(),this.op().then((t=>this.deferred.resolve(t)))):Promise.resolve()))}clearTimeout(){null!==this.timerHandle&&(this.removalCallback(this),clearTimeout(this.timerHandle),this.timerHandle=null)}}function Kc(t,e){if(Za("AsyncQueue",`${e}: ${t}`),Er(t))return new or(ir.UNAVAILABLE,`${e}: ${t}`);throw t}
/**
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
 */class Jc{constructor(t){this.comparator=t?(e,n)=>t(e,n)||Hr.comparator(e.key,n.key):(t,e)=>Hr.comparator(t.key,e.key),this.keyedMap=Ho(),this.sortedSet=new Gr(this.comparator)}static emptySet(t){return new Jc(t.comparator)}has(t){return null!=this.keyedMap.get(t)}get(t){return this.keyedMap.get(t)}first(){return this.sortedSet.minKey()}last(){return this.sortedSet.maxKey()}isEmpty(){return this.sortedSet.isEmpty()}indexOf(t){const e=this.keyedMap.get(t);return e?this.sortedSet.indexOf(e):-1}get size(){return this.sortedSet.size}forEach(t){this.sortedSet.inorderTraversal(((e,n)=>(t(e),!1)))}add(t){const e=this.delete(t.key);return e.copy(e.keyedMap.insert(t.key,t),e.sortedSet.insert(t,null))}delete(t){const e=this.get(t);return e?this.copy(this.keyedMap.remove(t),this.sortedSet.remove(e)):this}isEqual(t){if(!(t instanceof Jc))return!1;if(this.size!==t.size)return!1;const e=this.sortedSet.getIterator(),n=t.sortedSet.getIterator();for(;e.hasNext();){const t=e.getNext().key,a=n.getNext().key;if(!t.isEqual(a))return!1}return!0}toString(){const t=[];return this.forEach((e=>{t.push(e.toString())})),0===t.length?"DocumentSet ()":"DocumentSet (\n  "+t.join("  \n")+"\n)"}copy(t,e){const n=new Jc;return n.comparator=this.comparator,n.keyedMap=t,n.sortedSet=e,n}}
/**
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
 */class Xc{constructor(){this.k_=new Gr(Hr.comparator)}track(t){const e=t.doc.key,n=this.k_.get(e);n?0!==t.type&&3===n.type?this.k_=this.k_.insert(e,t):3===t.type&&1!==n.type?this.k_=this.k_.insert(e,{type:n.type,doc:t.doc}):2===t.type&&2===n.type?this.k_=this.k_.insert(e,{type:2,doc:t.doc}):2===t.type&&0===n.type?this.k_=this.k_.insert(e,{type:0,doc:t.doc}):1===t.type&&0===n.type?this.k_=this.k_.remove(e):1===t.type&&2===n.type?this.k_=this.k_.insert(e,{type:1,doc:n.doc}):0===t.type&&1===n.type?this.k_=this.k_.insert(e,{type:2,doc:t.doc}):nr():this.k_=this.k_.insert(e,t)}q_(){const t=[];return this.k_.inorderTraversal(((e,n)=>{t.push(n)})),t}}class Qc{constructor(t,e,n,a,r,i,o,s,l){this.query=t,this.docs=e,this.oldDocs=n,this.docChanges=a,this.mutatedKeys=r,this.fromCache=i,this.syncStateChanged=o,this.excludesMetadataChanges=s,this.hasCachedResults=l}static fromInitialDocuments(t,e,n,a,r){const i=[];return e.forEach((t=>{i.push({type:0,doc:t})})),new Qc(t,e,Jc.emptySet(e),i,n,a,!0,!1,r)}get hasPendingWrites(){return!this.mutatedKeys.isEmpty()}isEqual(t){if(!(this.fromCache===t.fromCache&&this.hasCachedResults===t.hasCachedResults&&this.syncStateChanged===t.syncStateChanged&&this.mutatedKeys.isEqual(t.mutatedKeys)&&mo(this.query,t.query)&&this.docs.isEqual(t.docs)&&this.oldDocs.isEqual(t.oldDocs)))return!1;const e=this.docChanges,n=t.docChanges;if(e.length!==n.length)return!1;for(let a=0;a<e.length;a++)if(e[a].type!==n[a].type||!e[a].doc.isEqual(n[a].doc))return!1;return!0}}
/**
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
 */class Zc{constructor(){this.Q_=void 0,this.listeners=[]}}class tu{constructor(){this.queries=new zo((t=>vo(t)),mo),this.onlineState="Unknown",this.K_=new Set}}async function eu(t,e){const n=rr(t),a=e.query;let r=!1,i=n.queries.get(a);if(i||(r=!0,i=new Zc),r)try{i.Q_=await n.onListen(a)}catch(t){const n=Kc(t,`Initialization of query '${go(e.query)}' failed`);return void e.onError(n)}n.queries.set(a,i),i.listeners.push(e),e.U_(n.onlineState),i.Q_&&e.W_(i.Q_)&&iu(n)}async function nu(t,e){const n=rr(t),a=e.query;let r=!1;const i=n.queries.get(a);if(i){const t=i.listeners.indexOf(e);t>=0&&(i.listeners.splice(t,1),r=0===i.listeners.length)}if(r)return n.queries.delete(a),n.onUnlisten(a)}function au(t,e){const n=rr(t);let a=!1;for(const r of e){const t=r.query,e=n.queries.get(t);if(e){for(const t of e.listeners)t.W_(r)&&(a=!0);e.Q_=r}}a&&iu(n)}function ru(t,e,n){const a=rr(t),r=a.queries.get(e);if(r)for(const i of r.listeners)i.onError(n);a.queries.delete(e)}function iu(t){t.K_.forEach((t=>{t.next()}))}class ou{constructor(t,e,n){this.query=t,this.G_=e,this.z_=!1,this.j_=null,this.onlineState="Unknown",this.options=n||{}}W_(t){if(!this.options.includeMetadataChanges){const e=[];for(const n of t.docChanges)3!==n.type&&e.push(n);t=new Qc(t.query,t.docs,t.oldDocs,e,t.mutatedKeys,t.fromCache,t.syncStateChanged,!0,t.hasCachedResults)}let e=!1;return this.z_?this.H_(t)&&(this.G_.next(t),e=!0):this.J_(t,this.onlineState)&&(this.Y_(t),e=!0),this.j_=t,e}onError(t){this.G_.error(t)}U_(t){this.onlineState=t;let e=!1;return this.j_&&!this.z_&&this.J_(this.j_,t)&&(this.Y_(this.j_),e=!0),e}J_(t,e){if(!t.fromCache)return!0;const n="Offline"!==e;return(!this.options.Z_||!n)&&(!t.docs.isEmpty()||t.hasCachedResults||"Offline"===e)}H_(t){if(t.docChanges.length>0)return!0;const e=this.j_&&this.j_.hasPendingWrites!==t.hasPendingWrites;return!(!t.syncStateChanged&&!e)&&!0===this.options.includeMetadataChanges}Y_(t){t=Qc.fromInitialDocuments(t.query,t.docs,t.mutatedKeys,t.fromCache,t.hasCachedResults),this.z_=!0,this.G_.next(t)}}
/**
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
 */
/**
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
 */
class su{constructor(t){this.key=t}}class lu{constructor(t){this.key=t}}class cu{constructor(t,e){this.query=t,this.oa=e,this._a=null,this.hasCachedResults=!1,this.current=!1,this.aa=Co(),this.mutatedKeys=Co(),this.ua=bo(t),this.ca=new Jc(this.ua)}get la(){return this.oa}ha(t,e){const n=e?e.Pa:new Xc,a=e?e.ca:this.ca;let r=e?e.mutatedKeys:this.mutatedKeys,i=a,o=!1;const s="F"===this.query.limitType&&a.size===this.query.limit?a.last():null,l="L"===this.query.limitType&&a.size===this.query.limit?a.first():null;if(t.inorderTraversal(((t,e)=>{const c=a.get(t),u=_o(this.query,e)?e:null,h=!!c&&this.mutatedKeys.has(c.key),d=!!u&&(u.hasLocalMutations||this.mutatedKeys.has(u.key)&&u.hasCommittedMutations);let f=!1;c&&u?c.data.isEqual(u.data)?h!==d&&(n.track({type:3,doc:u}),f=!0):this.Ia(c,u)||(n.track({type:2,doc:u}),f=!0,(s&&this.ua(u,s)>0||l&&this.ua(u,l)<0)&&(o=!0)):!c&&u?(n.track({type:0,doc:u}),f=!0):c&&!u&&(n.track({type:1,doc:c}),f=!0,(s||l)&&(o=!0)),f&&(u?(i=i.add(u),r=d?r.add(t):r.delete(t)):(i=i.delete(t),r=r.delete(t)))})),null!==this.query.limit)for(;i.size>this.query.limit;){const t="F"===this.query.limitType?i.last():i.first();i=i.delete(t.key),r=r.delete(t.key),n.track({type:1,doc:t})}return{ca:i,Pa:n,es:o,mutatedKeys:r}}Ia(t,e){return t.hasLocalMutations&&e.hasCommittedMutations&&!e.hasLocalMutations}applyChanges(t,e,n){const a=this.ca;this.ca=t.ca,this.mutatedKeys=t.mutatedKeys;const r=t.Pa.q_();r.sort(((t,e)=>function(t,e){const n=t=>{switch(t){case 0:return 1;case 2:case 3:return 2;case 1:return 0;default:return nr()}};return n(t)-n(e)}
/**
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
 */(t.type,e.type)||this.ua(t.doc,e.doc))),this.da(n);const i=e?this.Ta():[],o=0===this.aa.size&&this.current?1:0,s=o!==this._a;return this._a=o,0!==r.length||s?{snapshot:new Qc(this.query,t.ca,a,r,t.mutatedKeys,0===o,s,!1,!!n&&n.resumeToken.approximateByteSize()>0),Ea:i}:{Ea:i}}U_(t){return this.current&&"Offline"===t?(this.current=!1,this.applyChanges({ca:this.ca,Pa:new Xc,mutatedKeys:this.mutatedKeys,es:!1},!1)):{Ea:[]}}Aa(t){return!this.oa.has(t)&&!!this.ca.has(t)&&!this.ca.get(t).hasLocalMutations}da(t){t&&(t.addedDocuments.forEach((t=>this.oa=this.oa.add(t))),t.modifiedDocuments.forEach((t=>{})),t.removedDocuments.forEach((t=>this.oa=this.oa.delete(t))),this.current=t.current)}Ta(){if(!this.current)return[];const t=this.aa;this.aa=Co(),this.ca.forEach((t=>{this.Aa(t.key)&&(this.aa=this.aa.add(t.key))}));const e=[];return t.forEach((t=>{this.aa.has(t)||e.push(new lu(t))})),this.aa.forEach((n=>{t.has(n)||e.push(new su(n))})),e}Ra(t){this.oa=t.Ps,this.aa=Co();const e=this.ha(t.documents);return this.applyChanges(e,!0)}Va(){return Qc.fromInitialDocuments(this.query,this.ca,this.mutatedKeys,0===this._a,this.hasCachedResults)}}class uu{constructor(t,e,n){this.query=t,this.targetId=e,this.view=n}}class hu{constructor(t){this.key=t,this.ma=!1}}class du{constructor(t,e,n,a,r,i){this.localStore=t,this.remoteStore=e,this.eventManager=n,this.sharedClientState=a,this.currentUser=r,this.maxConcurrentLimboResolutions=i,this.fa={},this.ga=new zo((t=>vo(t)),mo),this.pa=new Map,this.ya=new Set,this.wa=new Gr(Hr.comparator),this.Sa=new Map,this.ba=new Dl,this.Da={},this.Ca=new Map,this.va=kl.Ln(),this.onlineState="Unknown",this.Fa=void 0}get isPrimaryClient(){return!0===this.Fa}}async function fu(t,e){const n=Vu(t);let a,r;const i=n.ga.get(e);if(i)a=i.targetId,n.sharedClientState.addLocalQueryTarget(a),r=i.view.Va();else{const t=await Xl(n.localStore,uo(e)),i=n.sharedClientState.addLocalQueryTarget(t.targetId);a=t.targetId,r=await pu(n,e,a,"current"===i,t.resumeToken),n.isPrimaryClient&&zc(n.remoteStore,t)}return r}async function pu(t,e,n,a,r){t.Ma=(e,n,a)=>async function(t,e,n,a){let r=e.view.ha(n);r.es&&(r=await Zl(t.localStore,e.query,!1).then((({documents:t})=>e.view.ha(t,r))));const i=a&&a.targetChanges.get(e.targetId),o=e.view.applyChanges(r,t.isPrimaryClient,i);return Hu(t,e.targetId,o.Ea),o.snapshot}(t,e,n,a);const i=await Zl(t.localStore,e,!0),o=new cu(e,i.Ps),s=o.ha(i.documents),l=Os.createSynthesizedTargetChangeForCurrentChange(n,a&&"Offline"!==t.onlineState,r),c=o.applyChanges(s,t.isPrimaryClient,l);Hu(t,n,c.Ea);const u=new uu(e,n,o);return t.ga.set(e,u),t.pa.has(n)?t.pa.get(n).push(e):t.pa.set(n,[e]),c.snapshot}async function mu(t,e){const n=rr(t),a=n.ga.get(e),r=n.pa.get(a.targetId);if(r.length>1)return n.pa.set(a.targetId,r.filter((t=>!mo(t,e)))),void n.ga.delete(e);n.isPrimaryClient?(n.sharedClientState.removeLocalQueryTarget(a.targetId),n.sharedClientState.isActiveQueryTarget(a.targetId)||await Ql(n.localStore,a.targetId,!1).then((()=>{n.sharedClientState.clearQueryState(a.targetId),wc(n.remoteStore,a.targetId),Lu(n,a.targetId)})).catch(Ir)):(Lu(n,a.targetId),await Ql(n.localStore,a.targetId,!0))}async function vu(t,e,n){const a=Cu(t);try{const t=await function(t,e){const n=rr(t),a=br.now(),r=e.reduce(((t,e)=>t.add(e.key)),Co());let i,o;return n.persistence.runTransaction("Locally write mutations","readwrite",(t=>{let s=Lo(),l=Co();return n._s.getEntries(t,r).next((t=>{s=t,s.forEach(((t,e)=>{e.isValidDocument()||(l=l.add(t))}))})).next((()=>n.localDocuments.getOverlayedDocuments(t,s))).next((r=>{i=r;const o=[];for(const t of e){const e=is(t,i.get(t.key).overlayedDocument);null!=e&&o.push(new ls(t.key,e,Ti(e.value.mapValue),Zo.exists(!0)))}return n.mutationQueue.addMutationBatch(t,a,o,e)})).next((e=>{o=e;const a=e.applyToLocalDocumentSet(i,l);return n.documentOverlayCache.saveOverlays(t,e.batchId,a)}))})).then((()=>({batchId:o.batchId,changes:To(i)})))}(a.localStore,e);a.sharedClientState.addPendingMutation(t.batchId),function(t,e,n){let a=t.Da[t.currentUser.toKey()];a||(a=new Gr(_r)),a=a.insert(e,n),t.Da[t.currentUser.toKey()]=a}(a,t.batchId,n),await Au(a,t.changes),await Pc(a.remoteStore)}catch(t){const e=Kc(t,"Failed to persist write");n.reject(e)}}async function gu(t,e){const n=rr(t);try{const t=await ql(n.localStore,e);e.targetChanges.forEach(((t,e)=>{const a=n.Sa.get(e);a&&(ar(t.addedDocuments.size+t.modifiedDocuments.size+t.removedDocuments.size<=1),t.addedDocuments.size>0?a.ma=!0:t.modifiedDocuments.size>0?ar(a.ma):t.removedDocuments.size>0&&(ar(a.ma),a.ma=!1))})),await Au(n,t,e)}catch(t){await Ir(t)}}function _u(t,e,n){const a=rr(t);if(a.isPrimaryClient&&0===n||!a.isPrimaryClient&&1===n){const t=[];a.ga.forEach(((n,a)=>{const r=a.view.U_(e);r.snapshot&&t.push(r.snapshot)})),function(t,e){const n=rr(t);n.onlineState=e;let a=!1;n.queries.forEach(((t,n)=>{for(const r of n.listeners)r.U_(e)&&(a=!0)})),a&&iu(n)}(a.eventManager,e),t.length&&a.fa.c_(t),a.onlineState=e,a.isPrimaryClient&&a.sharedClientState.setOnlineState(e)}}async function yu(t,e,n){const a=rr(t);a.sharedClientState.updateQueryState(e,"rejected",n);const r=a.Sa.get(e),i=r&&r.key;if(i){let t=new Gr(Hr.comparator);t=t.insert(i,Si.newNoDocument(i,Mr.min()));const n=Co().add(i),r=new As(Mr.min(),new Map,new Gr(_r),t,n);await gu(a,r),a.wa=a.wa.remove(i),a.Sa.delete(e),Su(a)}else await Ql(a.localStore,e,!1).then((()=>Lu(a,e,n))).catch(Ir)}async function bu(t,e){const n=rr(t),a=e.batch.batchId;try{const t=await Wl(n.localStore,e);wu(n,a,null),zu(n,a),n.sharedClientState.updateMutationState(a,"acknowledged"),await Au(n,t)}catch(t){await Ir(t)}}async function Mu(t,e,n){const a=rr(t);try{const t=await function(t,e){const n=rr(t);return n.persistence.runTransaction("Reject batch","readwrite-primary",(t=>{let a;return n.mutationQueue.lookupMutationBatch(t,e).next((e=>(ar(null!==e),a=e.keys(),n.mutationQueue.removeMutationBatch(t,e)))).next((()=>n.mutationQueue.performConsistencyCheck(t))).next((()=>n.documentOverlayCache.removeOverlaysForBatchId(t,a,e))).next((()=>n.localDocuments.recalculateAndSaveOverlaysForDocumentKeys(t,a))).next((()=>n.localDocuments.getDocuments(t,a)))}))}(a.localStore,e);wu(a,e,n),zu(a,e),a.sharedClientState.updateMutationState(e,"rejected",n),await Au(a,t)}catch(n){await Ir(n)}}function zu(t,e){(t.Ca.get(e)||[]).forEach((t=>{t.resolve()})),t.Ca.delete(e)}function wu(t,e,n){const a=rr(t);let r=a.Da[a.currentUser.toKey()];if(r){const t=r.get(e);t&&(n?t.reject(n):t.resolve(),r=r.remove(e)),a.Da[a.currentUser.toKey()]=r}}function Lu(t,e,n=null){t.sharedClientState.removeLocalQueryTarget(e);for(const a of t.pa.get(e))t.ga.delete(a),n&&t.fa.xa(a,n);t.pa.delete(e),t.isPrimaryClient&&t.ba.mr(e).forEach((e=>{t.ba.containsKey(e)||ku(t,e)}))}function ku(t,e){t.ya.delete(e.path.canonicalString());const n=t.wa.get(e);null!==n&&(wc(t.remoteStore,n),t.wa=t.wa.remove(e),t.Sa.delete(n),Su(t))}function Hu(t,e,n){for(const a of n)a instanceof su?(t.ba.addReference(a.key,e),Tu(t,a)):a instanceof lu?(Qa("SyncEngine","Document no longer in limbo: "+a.key),t.ba.removeReference(a.key,e),t.ba.containsKey(a.key)||ku(t,a.key)):nr()}function Tu(t,e){const n=e.key,a=n.path.canonicalString();t.wa.get(n)||t.ya.has(a)||(Qa("SyncEngine","New document in limbo: "+n),t.ya.add(a),Su(t))}function Su(t){for(;t.ya.size>0&&t.wa.size<t.maxConcurrentLimboResolutions;){const e=t.ya.values().next().value;t.ya.delete(e);const n=new Hr(wr.fromString(e)),a=t.va.next();t.Sa.set(a,new hu(n)),t.wa=t.wa.insert(n,a),zc(t.remoteStore,new _l(uo(ro(n.path)),a,"TargetPurposeLimboResolution",Br.ae))}}async function Au(t,e,n){const a=rr(t),r=[],i=[],o=[];a.ga.isEmpty()||(a.ga.forEach(((t,s)=>{o.push(a.Ma(s,e,n).then((t=>{if((t||n)&&a.isPrimaryClient&&a.sharedClientState.updateQueryState(s.targetId,(null==t?void 0:t.fromCache)?"not-current":"current"),t){r.push(t);const e=Yl.$i(s.targetId,t);i.push(e)}})))})),await Promise.all(o),a.fa.c_(r),await async function(t,e){const n=rr(t);try{await n.persistence.runTransaction("notifyLocalViewChanges","readwrite",(t=>Pr.forEach(e,(e=>Pr.forEach(e.Qi,(a=>n.persistence.referenceDelegate.addReference(t,e.targetId,a))).next((()=>Pr.forEach(e.Ki,(a=>n.persistence.referenceDelegate.removeReference(t,e.targetId,a)))))))))}catch(t){if(!Er(t))throw t;Qa("LocalStore","Failed to update sequence numbers: "+t)}for(const a of e){const t=a.targetId;if(!a.fromCache){const e=n.rs.get(t),a=e.snapshotVersion,r=e.withLastLimboFreeSnapshotVersion(a);n.rs=n.rs.insert(t,r)}}}(a.localStore,i))}async function Ou(t,e){const n=rr(t);if(!n.currentUser.isEqual(e)){Qa("SyncEngine","User change. New user:",e.toKey());const t=await Ul(n.localStore,e);n.currentUser=e,function(t,e){t.Ca.forEach((t=>{t.forEach((t=>{t.reject(new or(ir.CANCELLED,e))}))})),t.Ca.clear()}(n,"'waitForPendingWrites' promise is rejected due to a user change."),n.sharedClientState.handleUserChange(e,t.removedBatchIds,t.addedBatchIds),await Au(n,t.cs)}}function Du(t,e){const n=rr(t),a=n.Sa.get(e);if(a&&a.ma)return Co().add(a.key);{let t=Co();const a=n.pa.get(e);if(!a)return t;for(const e of a){const a=n.ga.get(e);t=t.unionWith(a.view.la)}return t}}function Vu(t){const e=rr(t);return e.remoteStore.remoteSyncer.applyRemoteEvent=gu.bind(null,e),e.remoteStore.remoteSyncer.getRemoteKeysForTarget=Du.bind(null,e),e.remoteStore.remoteSyncer.rejectListen=yu.bind(null,e),e.fa.c_=au.bind(null,e.eventManager),e.fa.xa=ru.bind(null,e.eventManager),e}function Cu(t){const e=rr(t);return e.remoteStore.remoteSyncer.applySuccessfulWrite=bu.bind(null,e),e.remoteStore.remoteSyncer.rejectFailedWrite=Mu.bind(null,e),e}class Iu{constructor(){this.synchronizeTabs=!1}async initialize(t){this.serializer=dc(t.databaseInfo.databaseId),this.sharedClientState=this.createSharedClientState(t),this.persistence=this.createPersistence(t),await this.persistence.start(),this.localStore=this.createLocalStore(t),this.gcScheduler=this.createGarbageCollectionScheduler(t,this.localStore),this.indexBackfillerScheduler=this.createIndexBackfillerScheduler(t,this.localStore)}createGarbageCollectionScheduler(t,e){return null}createIndexBackfillerScheduler(t,e){return null}createLocalStore(t){return $l(this.persistence,new Nl,t.initialUser,this.serializer)}createPersistence(t){return new Bl(jl.Jr,this.serializer)}createSharedClientState(t){return new nc}async terminate(){this.gcScheduler&&this.gcScheduler.stop(),await this.sharedClientState.shutdown(),await this.persistence.shutdown()}}class Pu{async initialize(t,e){this.localStore||(this.localStore=t.localStore,this.sharedClientState=t.sharedClientState,this.datastore=this.createDatastore(e),this.remoteStore=this.createRemoteStore(e),this.eventManager=this.createEventManager(e),this.syncEngine=this.createSyncEngine(e,!t.synchronizeTabs),this.sharedClientState.onlineStateHandler=t=>_u(this.syncEngine,t,1),this.remoteStore.remoteSyncer.handleCredentialChange=Ou.bind(null,this.syncEngine),await Uc(this.remoteStore,this.syncEngine.isPrimaryClient))}createEventManager(t){return function(){return new tu}()}createDatastore(t){const e=dc(t.databaseInfo.databaseId),n=function(t){return new uc(t)}(t.databaseInfo);return function(t,e,n,a){return new gc(t,e,n,a)}(t.authCredentials,t.appCheckCredentials,n,e)}createRemoteStore(t){return function(t,e,n,a,r){return new yc(t,e,n,a,r)}(this.localStore,this.datastore,t.asyncQueue,(t=>_u(this.syncEngine,t,0)),function(){return rc.C()?new rc:new ac}())}createSyncEngine(t,e){return function(t,e,n,a,r,i,o){const s=new du(t,e,n,a,r,i);return o&&(s.Fa=!0),s}(this.localStore,this.remoteStore,this.eventManager,this.sharedClientState,t.initialUser,t.maxConcurrentLimboResolutions,e)}terminate(){return async function(t){const e=rr(t);Qa("RemoteStore","RemoteStore shutting down."),e.F_.add(5),await Mc(e),e.x_.shutdown(),e.O_.set("Unknown")}(this.remoteStore)}}
/**
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
 */
/**
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
 */
/**
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
 */
class Eu{constructor(t){this.observer=t,this.muted=!1}next(t){this.observer.next&&this.Ba(this.observer.next,t)}error(t){this.observer.error?this.Ba(this.observer.error,t):Za("Uncaught Error in snapshot listener:",t.toString())}La(){this.muted=!0}Ba(t,e){this.muted||setTimeout((()=>{this.muted||t(e)}),0)}}
/**
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
 */
/**
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
 */
class Bu{constructor(t,e,n,a){this.authCredentials=t,this.appCheckCredentials=e,this.asyncQueue=n,this.databaseInfo=a,this.user=qa.UNAUTHENTICATED,this.clientId=gr.V(),this.authCredentialListener=()=>Promise.resolve(),this.appCheckCredentialListener=()=>Promise.resolve(),this.authCredentials.start(n,(async t=>{Qa("FirestoreClient","Received user=",t.uid),await this.authCredentialListener(t),this.user=t})),this.appCheckCredentials.start(n,(t=>(Qa("FirestoreClient","Received new app check token=",t),this.appCheckCredentialListener(t,this.user))))}async getConfiguration(){return{asyncQueue:this.asyncQueue,databaseInfo:this.databaseInfo,clientId:this.clientId,authCredentials:this.authCredentials,appCheckCredentials:this.appCheckCredentials,initialUser:this.user,maxConcurrentLimboResolutions:100}}setCredentialChangeListener(t){this.authCredentialListener=t}setAppCheckTokenChangeListener(t){this.appCheckCredentialListener=t}verifyNotTerminated(){if(this.asyncQueue.isShuttingDown)throw new or(ir.FAILED_PRECONDITION,"The client has already been terminated.")}terminate(){this.asyncQueue.enterRestrictedMode();const t=new sr;return this.asyncQueue.enqueueAndForgetEvenWhileRestricted((async()=>{try{this._onlineComponents&&await this._onlineComponents.terminate(),this._offlineComponents&&await this._offlineComponents.terminate(),this.authCredentials.shutdown(),this.appCheckCredentials.shutdown(),t.resolve()}catch(e){const n=Kc(e,"Failed to shutdown persistence");t.reject(n)}})),t.promise}}async function Fu(t,e){t.asyncQueue.verifyOperationInProgress(),Qa("FirestoreClient","Initializing OfflineComponentProvider");const n=await t.getConfiguration();await e.initialize(n);let a=n.initialUser;t.setCredentialChangeListener((async t=>{a.isEqual(t)||(await Ul(e.localStore,t),a=t)})),e.persistence.setDatabaseDeletedListener((()=>t.terminate())),t._offlineComponents=e}async function ju(t,e){t.asyncQueue.verifyOperationInProgress();const n=await xu(t);Qa("FirestoreClient","Initializing OnlineComponentProvider");const a=await t.getConfiguration();await e.initialize(n,a),t.setCredentialChangeListener((t=>$c(e.remoteStore,t))),t.setAppCheckTokenChangeListener(((t,n)=>$c(e.remoteStore,n))),t._onlineComponents=e}function Yu(t){return"FirebaseError"===t.name?t.code===ir.FAILED_PRECONDITION||t.code===ir.UNIMPLEMENTED:!("undefined"!=typeof DOMException&&t instanceof DOMException)||22===t.code||20===t.code||11===t.code}async function xu(t){if(!t._offlineComponents)if(t._uninitializedComponentsProvider){Qa("FirestoreClient","Using user provided OfflineComponentProvider");try{await Fu(t,t._uninitializedComponentsProvider._offline)}catch(e){const n=e;if(!Yu(n))throw n;tr("Error using user provided cache. Falling back to memory cache: "+n),await Fu(t,new Iu)}}else Qa("FirestoreClient","Using default OfflineComponentProvider"),await Fu(t,new Iu);return t._offlineComponents}async function Nu(t){return t._onlineComponents||(t._uninitializedComponentsProvider?(Qa("FirestoreClient","Using user provided OnlineComponentProvider"),await ju(t,t._uninitializedComponentsProvider._online)):(Qa("FirestoreClient","Using default OnlineComponentProvider"),await ju(t,new Pu))),t._onlineComponents}function Ru(t){return Nu(t).then((t=>t.syncEngine))}async function $u(t){const e=await Nu(t),n=e.eventManager;return n.onListen=fu.bind(null,e.syncEngine),n.onUnlisten=mu.bind(null,e.syncEngine),n}function Uu(t,e,n={}){const a=new sr;return t.asyncQueue.enqueueAndForget((async()=>function(t,e,n,a,r){const i=new Eu({next:i=>{e.enqueueAndForget((()=>nu(t,o)));const s=i.docs.has(n);!s&&i.fromCache?r.reject(new or(ir.UNAVAILABLE,"Failed to get document because the client is offline.")):s&&i.fromCache&&a&&"server"===a.source?r.reject(new or(ir.UNAVAILABLE,'Failed to get document from server. (However, this document does exist in the local cache. Run again without setting source to "server" to retrieve the cached document.)')):r.resolve(i)},error:t=>r.reject(t)}),o=new ou(ro(n.path),i,{includeMetadataChanges:!0,Z_:!0});return eu(t,o)}(await $u(t),t.asyncQueue,e,n,a))),a.promise}function Wu(t,e,n={}){const a=new sr;return t.asyncQueue.enqueueAndForget((async()=>function(t,e,n,a,r){const i=new Eu({next:n=>{e.enqueueAndForget((()=>nu(t,o))),n.fromCache&&"server"===a.source?r.reject(new or(ir.UNAVAILABLE,'Failed to get documents from server. (However, these documents may exist in the local cache. Run again without setting source to "server" to retrieve the cached documents.)')):r.resolve(n)},error:t=>r.reject(t)}),o=new ou(n,i,{includeMetadataChanges:!0,Z_:!0});return eu(t,o)}(await $u(t),t.asyncQueue,e,n,a))),a.promise}
/**
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
 */
function Gu(t){const e={};return void 0!==t.timeoutSeconds&&(e.timeoutSeconds=t.timeoutSeconds),e
/**
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
 */}const qu=new Map;
/**
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
 */function Ku(t,e,n){if(!n)throw new or(ir.INVALID_ARGUMENT,`Function ${t}() cannot be called with an empty ${e}.`)}function Ju(t,e,n,a){if(!0===e&&!0===a)throw new or(ir.INVALID_ARGUMENT,`${t} and ${n} cannot be used together.`)}function Xu(t){if(!Hr.isDocumentKey(t))throw new or(ir.INVALID_ARGUMENT,`Invalid document reference. Document references must have an even number of segments, but ${t} has ${t.length}.`)}function Qu(t){if(Hr.isDocumentKey(t))throw new or(ir.INVALID_ARGUMENT,`Invalid collection reference. Collection references must have an odd number of segments, but ${t} has ${t.length}.`)}function Zu(t){if(void 0===t)return"undefined";if(null===t)return"null";if("string"==typeof t)return t.length>20&&(t=`${t.substring(0,20)}...`),JSON.stringify(t);if("number"==typeof t||"boolean"==typeof t)return""+t;if("object"==typeof t){if(t instanceof Array)return"an array";{const e=function(t){return t.constructor?t.constructor.name:null}(t);return e?`a custom ${e} object`:"an object"}}return"function"==typeof t?"a function":nr()}function th(t,e){if("_delegate"in t&&(t=t._delegate),!(t instanceof e)){if(e.name===t.constructor.name)throw new or(ir.INVALID_ARGUMENT,"Type does not match the expected instance. Did you pass a reference from a different Firestore SDK?");{const n=Zu(t);throw new or(ir.INVALID_ARGUMENT,`Expected type '${e.name}', but it was: ${n}`)}}return t}
/**
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
 */
class eh{constructor(t){var e,n;if(void 0===t.host){if(void 0!==t.ssl)throw new or(ir.INVALID_ARGUMENT,"Can't provide ssl option if host option is not set");this.host="firestore.googleapis.com",this.ssl=!0}else this.host=t.host,this.ssl=null===(e=t.ssl)||void 0===e||e;if(this.credentials=t.credentials,this.ignoreUndefinedProperties=!!t.ignoreUndefinedProperties,this.localCache=t.localCache,void 0===t.cacheSizeBytes)this.cacheSizeBytes=41943040;else{if(-1!==t.cacheSizeBytes&&t.cacheSizeBytes<1048576)throw new or(ir.INVALID_ARGUMENT,"cacheSizeBytes must be at least 1048576");this.cacheSizeBytes=t.cacheSizeBytes}Ju("experimentalForceLongPolling",t.experimentalForceLongPolling,"experimentalAutoDetectLongPolling",t.experimentalAutoDetectLongPolling),this.experimentalForceLongPolling=!!t.experimentalForceLongPolling,this.experimentalForceLongPolling?this.experimentalAutoDetectLongPolling=!1:void 0===t.experimentalAutoDetectLongPolling?this.experimentalAutoDetectLongPolling=!0:this.experimentalAutoDetectLongPolling=!!t.experimentalAutoDetectLongPolling,this.experimentalLongPollingOptions=Gu(null!==(n=t.experimentalLongPollingOptions)&&void 0!==n?n:{}),function(t){if(void 0!==t.timeoutSeconds){if(isNaN(t.timeoutSeconds))throw new or(ir.INVALID_ARGUMENT,`invalid long polling timeout: ${t.timeoutSeconds} (must not be NaN)`);if(t.timeoutSeconds<5)throw new or(ir.INVALID_ARGUMENT,`invalid long polling timeout: ${t.timeoutSeconds} (minimum allowed value is 5)`);if(t.timeoutSeconds>30)throw new or(ir.INVALID_ARGUMENT,`invalid long polling timeout: ${t.timeoutSeconds} (maximum allowed value is 30)`)}}
/**
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
 */(this.experimentalLongPollingOptions),this.useFetchStreams=!!t.useFetchStreams}isEqual(t){return this.host===t.host&&this.ssl===t.ssl&&this.credentials===t.credentials&&this.cacheSizeBytes===t.cacheSizeBytes&&this.experimentalForceLongPolling===t.experimentalForceLongPolling&&this.experimentalAutoDetectLongPolling===t.experimentalAutoDetectLongPolling&&function(t,e){return t.timeoutSeconds===e.timeoutSeconds}(this.experimentalLongPollingOptions,t.experimentalLongPollingOptions)&&this.ignoreUndefinedProperties===t.ignoreUndefinedProperties&&this.useFetchStreams===t.useFetchStreams}}class nh{constructor(t,e,n,a){this._authCredentials=t,this._appCheckCredentials=e,this._databaseId=n,this._app=a,this.type="firestore-lite",this._persistenceKey="(lite)",this._settings=new eh({}),this._settingsFrozen=!1}get app(){if(!this._app)throw new or(ir.FAILED_PRECONDITION,"Firestore was not initialized using the Firebase SDK. 'app' is not available");return this._app}get _initialized(){return this._settingsFrozen}get _terminated(){return void 0!==this._terminateTask}_setSettings(t){if(this._settingsFrozen)throw new or(ir.FAILED_PRECONDITION,"Firestore has already been started and its settings can no longer be changed. You can only modify settings before calling any other methods on a Firestore object.");this._settings=new eh(t),void 0!==t.credentials&&(this._authCredentials=function(t){if(!t)return new cr;switch(t.type){case"firstParty":return new fr(t.sessionIndex||"0",t.iamToken||null,t.authTokenFactory||null);case"provider":return t.client;default:throw new or(ir.INVALID_ARGUMENT,"makeAuthCredentialsProvider failed due to invalid credential type")}}(t.credentials))}_getSettings(){return this._settings}_freezeSettings(){return this._settingsFrozen=!0,this._settings}_delete(){return this._terminateTask||(this._terminateTask=this._terminate()),this._terminateTask}toJSON(){return{app:this._app,databaseId:this._databaseId,settings:this._settings}}_terminate(){return function(t){const e=qu.get(t);e&&(Qa("ComponentProvider","Removing Datastore"),qu.delete(t),e.terminate())}(this),Promise.resolve()}}function ah(t,e,n,a={}){var r;const i=(t=th(t,nh))._getSettings(),o=`${e}:${n}`;if("firestore.googleapis.com"!==i.host&&i.host!==o&&tr("Host has been set in both settings() and connectFirestoreEmulator(), emulator host will be used."),t._setSettings(Object.assign(Object.assign({},i),{host:o,ssl:!1})),a.mockUserToken){let e,n;if("string"==typeof a.mockUserToken)e=a.mockUserToken,n=qa.MOCK_USER;else{e=(0,s.Sg)(a.mockUserToken,null===(r=t._app)||void 0===r?void 0:r.options.projectId);const i=a.mockUserToken.sub||a.mockUserToken.user_id;if(!i)throw new or(ir.INVALID_ARGUMENT,"mockUserToken must contain 'sub' or 'user_id' field!");n=new qa(i)}t._authCredentials=new ur(new lr(e,n))}}
/**
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
 */class rh{constructor(t,e,n){this.converter=e,this._query=n,this.type="query",this.firestore=t}withConverter(t){return new rh(this.firestore,t,this._query)}}class ih{constructor(t,e,n){this.converter=e,this._key=n,this.type="document",this.firestore=t}get _path(){return this._key.path}get id(){return this._key.path.lastSegment()}get path(){return this._key.path.canonicalString()}get parent(){return new oh(this.firestore,this.converter,this._key.path.popLast())}withConverter(t){return new ih(this.firestore,t,this._key)}}class oh extends rh{constructor(t,e,n){super(t,e,ro(n)),this._path=n,this.type="collection"}get id(){return this._query.path.lastSegment()}get path(){return this._query.path.canonicalString()}get parent(){const t=this._path.popLast();return t.isEmpty()?null:new ih(this.firestore,null,new Hr(t))}withConverter(t){return new oh(this.firestore,t,this._path)}}function sh(t,e,...n){if(t=(0,s.m9)(t),Ku("collection","path",e),t instanceof nh){const a=wr.fromString(e,...n);return Qu(a),new oh(t,null,a)}{if(!(t instanceof ih||t instanceof oh))throw new or(ir.INVALID_ARGUMENT,"Expected first argument to collection() to be a CollectionReference, a DocumentReference or FirebaseFirestore");const a=t._path.child(wr.fromString(e,...n));return Qu(a),new oh(t.firestore,null,a)}}function lh(t,e,...n){if(t=(0,s.m9)(t),1===arguments.length&&(e=gr.V()),Ku("doc","path",e),t instanceof nh){const a=wr.fromString(e,...n);return Xu(a),new ih(t,null,new Hr(a))}{if(!(t instanceof ih||t instanceof oh))throw new or(ir.INVALID_ARGUMENT,"Expected first argument to collection() to be a CollectionReference, a DocumentReference or FirebaseFirestore");const a=t._path.child(wr.fromString(e,...n));return Xu(a),new ih(t.firestore,t instanceof oh?t.converter:null,new Hr(a))}}
/**
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
 */
class ch{constructor(){this.Za=Promise.resolve(),this.Xa=[],this.eu=!1,this.tu=[],this.nu=null,this.ru=!1,this.iu=!1,this.su=[],this.Ho=new fc(this,"async_queue_retry"),this.ou=()=>{const t=hc();t&&Qa("AsyncQueue","Visibility state changed to "+t.visibilityState),this.Ho.$o()};const t=hc();t&&"function"==typeof t.addEventListener&&t.addEventListener("visibilitychange",this.ou)}get isShuttingDown(){return this.eu}enqueueAndForget(t){this.enqueue(t)}enqueueAndForgetEvenWhileRestricted(t){this._u(),this.au(t)}enterRestrictedMode(t){if(!this.eu){this.eu=!0,this.iu=t||!1;const e=hc();e&&"function"==typeof e.removeEventListener&&e.removeEventListener("visibilitychange",this.ou)}}enqueue(t){if(this._u(),this.eu)return new Promise((()=>{}));const e=new sr;return this.au((()=>this.eu&&this.iu?Promise.resolve():(t().then(e.resolve,e.reject),e.promise))).then((()=>e.promise))}enqueueRetryable(t){this.enqueueAndForget((()=>(this.Xa.push(t),this.uu())))}async uu(){if(0!==this.Xa.length){try{await this.Xa[0](),this.Xa.shift(),this.Ho.reset()}catch(t){if(!Er(t))throw t;Qa("AsyncQueue","Operation failed with retryable error: "+t)}this.Xa.length>0&&this.Ho.Qo((()=>this.uu()))}}au(t){const e=this.Za.then((()=>(this.ru=!0,t().catch((t=>{this.nu=t,this.ru=!1;const e=function(t){let e=t.message||"";return t.stack&&(e=t.stack.includes(t.message)?t.stack:t.message+"\n"+t.stack),e}
/**
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
 */(t);throw Za("INTERNAL UNHANDLED ERROR: ",e),t})).then((t=>(this.ru=!1,t))))));return this.Za=e,e}enqueueAfterDelay(t,e,n){this._u(),this.su.indexOf(t)>-1&&(e=0);const a=qc.createAndSchedule(this,t,e,n,(t=>this.cu(t)));return this.tu.push(a),a}_u(){this.nu&&nr()}verifyOperationInProgress(){}async lu(){let t;do{t=this.Za,await t}while(t!==this.Za)}hu(t){for(const e of this.tu)if(e.timerId===t)return!0;return!1}Pu(t){return this.lu().then((()=>{this.tu.sort(((t,e)=>t.targetTimeMs-e.targetTimeMs));for(const e of this.tu)if(e.skipDelay(),"all"!==t&&e.timerId===t)break;return this.lu()}))}Iu(t){this.su.push(t)}cu(t){const e=this.tu.indexOf(t);this.tu.splice(e,1)}}class uh extends nh{constructor(t,e,n,a){super(t,e,n,a),this.type="firestore",this._queue=function(){return new ch}(),this._persistenceKey=(null==a?void 0:a.name)||"[DEFAULT]"}_terminate(){return this._firestoreClient||fh(this),this._firestoreClient.terminate()}}function hh(t,e){const n="object"==typeof t?t:(0,r.Mq)(),a="string"==typeof t?t:e||"(default)",i=(0,r.qX)(n,"firestore").getImmediate({identifier:a});if(!i._initialized){const t=(0,s.P0)("firestore");t&&ah(i,...t)}return i}function dh(t){return t._firestoreClient||fh(t),t._firestoreClient.verifyNotTerminated(),t._firestoreClient}function fh(t){var e,n,a;const r=t._freezeSettings(),i=function(t,e,n,a){return new li(t,e,n,a.host,a.ssl,a.experimentalForceLongPolling,a.experimentalAutoDetectLongPolling,Gu(a.experimentalLongPollingOptions),a.useFetchStreams)}(t._databaseId,(null===(e=t._app)||void 0===e?void 0:e.options.appId)||"",t._persistenceKey,r);t._firestoreClient=new Bu(t._authCredentials,t._appCheckCredentials,t._queue,i),(null===(n=r.localCache)||void 0===n?void 0:n._offlineComponentProvider)&&(null===(a=r.localCache)||void 0===a?void 0:a._onlineComponentProvider)&&(t._firestoreClient._uninitializedComponentsProvider={_offlineKind:r.localCache.kind,_offline:r.localCache._offlineComponentProvider,_online:r.localCache._onlineComponentProvider})}
/**
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
 */
class ph{constructor(t){this._byteString=t}static fromBase64String(t){try{return new ph(ti.fromBase64String(t))}catch(t){throw new or(ir.INVALID_ARGUMENT,"Failed to construct data from Base64 string: "+t)}}static fromUint8Array(t){return new ph(ti.fromUint8Array(t))}toBase64(){return this._byteString.toBase64()}toUint8Array(){return this._byteString.toUint8Array()}toString(){return"Bytes(base64: "+this.toBase64()+")"}isEqual(t){return this._byteString.isEqual(t._byteString)}}
/**
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
 */class mh{constructor(...t){for(let e=0;e<t.length;++e)if(0===t[e].length)throw new or(ir.INVALID_ARGUMENT,"Invalid field name at argument $(i + 1). Field names must not be empty.");this._internalPath=new kr(t)}isEqual(t){return this._internalPath.isEqual(t._internalPath)}}
/**
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
 */
class vh{constructor(t){this._methodName=t}}
/**
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
 */class gh{constructor(t,e){if(!isFinite(t)||t<-90||t>90)throw new or(ir.INVALID_ARGUMENT,"Latitude must be a number between -90 and 90, but was: "+t);if(!isFinite(e)||e<-180||e>180)throw new or(ir.INVALID_ARGUMENT,"Longitude must be a number between -180 and 180, but was: "+e);this._lat=t,this._long=e}get latitude(){return this._lat}get longitude(){return this._long}isEqual(t){return this._lat===t._lat&&this._long===t._long}toJSON(){return{latitude:this._lat,longitude:this._long}}_compareTo(t){return _r(this._lat,t._lat)||_r(this._long,t._long)}}
/**
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
 */const _h=/^__.*__$/;class yh{constructor(t,e,n){this.data=t,this.fieldMask=e,this.fieldTransforms=n}toMutation(t,e){return null!==this.fieldMask?new ls(t,this.data,this.fieldMask,e,this.fieldTransforms):new ss(t,this.data,e,this.fieldTransforms)}}class bh{constructor(t,e,n){this.data=t,this.fieldMask=e,this.fieldTransforms=n}toMutation(t,e){return new ls(t,this.data,this.fieldMask,e,this.fieldTransforms)}}function Mh(t){switch(t){case 0:case 2:case 1:return!0;case 3:case 4:return!1;default:throw nr()}}class zh{constructor(t,e,n,a,r,i){this.settings=t,this.databaseId=e,this.serializer=n,this.ignoreUndefinedProperties=a,void 0===r&&this.du(),this.fieldTransforms=r||[],this.fieldMask=i||[]}get path(){return this.settings.path}get Tu(){return this.settings.Tu}Eu(t){return new zh(Object.assign(Object.assign({},this.settings),t),this.databaseId,this.serializer,this.ignoreUndefinedProperties,this.fieldTransforms,this.fieldMask)}Au(t){var e;const n=null===(e=this.path)||void 0===e?void 0:e.child(t),a=this.Eu({path:n,Ru:!1});return a.Vu(t),a}mu(t){var e;const n=null===(e=this.path)||void 0===e?void 0:e.child(t),a=this.Eu({path:n,Ru:!1});return a.du(),a}fu(t){return this.Eu({path:void 0,Ru:!0})}gu(t){return Bh(t,this.settings.methodName,this.settings.pu||!1,this.path,this.settings.yu)}contains(t){return void 0!==this.fieldMask.find((e=>t.isPrefixOf(e)))||void 0!==this.fieldTransforms.find((e=>t.isPrefixOf(e.field)))}du(){if(this.path)for(let t=0;t<this.path.length;t++)this.Vu(this.path.get(t))}Vu(t){if(0===t.length)throw this.gu("Document fields must not be empty");if(Mh(this.Tu)&&_h.test(t))throw this.gu('Document fields cannot begin and end with "__"')}}class wh{constructor(t,e,n){this.databaseId=t,this.ignoreUndefinedProperties=e,this.serializer=n||dc(t)}wu(t,e,n,a=!1){return new zh({Tu:t,methodName:e,yu:n,path:kr.emptyPath(),Ru:!1,pu:a},this.databaseId,this.serializer,this.ignoreUndefinedProperties)}}function Lh(t){const e=t._freezeSettings(),n=dc(t._databaseId);return new wh(t._databaseId,!!e.ignoreUndefinedProperties,n)}function kh(t,e,n,a,r,i={}){const o=t.wu(i.merge||i.mergeFields?2:0,e,n,r);Ch("Data must be an object, but it was:",o,a);const s=Dh(a,o);let l,c;if(i.merge)l=new Qr(o.fieldMask),c=o.fieldTransforms;else if(i.mergeFields){const t=[];for(const a of i.mergeFields){const r=Ih(e,a,n);if(!o.contains(r))throw new or(ir.INVALID_ARGUMENT,`Field '${r}' is specified in your field mask but missing from your input data.`);Fh(t,r)||t.push(r)}l=new Qr(t),c=o.fieldTransforms.filter((t=>l.covers(t.field)))}else l=null,c=o.fieldTransforms;return new yh(new Hi(s),l,c)}class Hh extends vh{_toFieldTransform(t){if(2!==t.Tu)throw 1===t.Tu?t.gu(`${this._methodName}() can only appear at the top level of your update data`):t.gu(`${this._methodName}() cannot be used with set() unless you pass {merge:true}`);return t.fieldMask.push(t.path),null}isEqual(t){return t instanceof Hh}}function Th(t,e,n,a){const r=t.wu(1,e,n);Ch("Data must be an object, but it was:",r,a);const i=[],o=Hi.empty();Ur(a,((t,a)=>{const l=Eh(e,t,n);a=(0,s.m9)(a);const c=r.mu(l);if(a instanceof Hh)i.push(l);else{const t=Oh(a,c);null!=t&&(i.push(l),o.set(l,t))}}));const l=new Qr(i);return new bh(o,l,r.fieldTransforms)}function Sh(t,e,n,a,r,i){const o=t.wu(1,e,n),l=[Ih(e,a,n)],c=[r];if(i.length%2!=0)throw new or(ir.INVALID_ARGUMENT,`Function ${e}() needs to be called with an even number of arguments that alternate between field names and values.`);for(let s=0;s<i.length;s+=2)l.push(Ih(e,i[s])),c.push(i[s+1]);const u=[],h=Hi.empty();for(let f=l.length-1;f>=0;--f)if(!Fh(u,l[f])){const t=l[f];let e=c[f];e=(0,s.m9)(e);const n=o.mu(t);if(e instanceof Hh)u.push(t);else{const a=Oh(e,n);null!=a&&(u.push(t),h.set(t,a))}}const d=new Qr(u);return new bh(h,d,o.fieldTransforms)}function Ah(t,e,n,a=!1){return Oh(n,t.wu(a?4:3,e))}function Oh(t,e){if(Vh(t=(0,s.m9)(t)))return Ch("Unsupported field value:",e,t),Dh(t,e);if(t instanceof vh)return function(t,e){if(!Mh(e.Tu))throw e.gu(`${t._methodName}() can only be used with update() and set()`);if(!e.path)throw e.gu(`${t._methodName}() is not currently supported inside arrays`);const n=t._toFieldTransform(e);n&&e.fieldTransforms.push(n)}(t,e),null;if(void 0===t&&e.ignoreUndefinedProperties)return null;if(e.path&&e.fieldMask.push(e.path),t instanceof Array){if(e.settings.Ru&&4!==e.Tu)throw e.gu("Nested arrays are not supported");return function(t,e){const n=[];let a=0;for(const r of t){let t=Oh(r,e.fu(a));null==t&&(t={nullValue:"NULL_VALUE"}),n.push(t),a++}return{arrayValue:{values:n}}}(t,e)}return function(t,e){if(null===(t=(0,s.m9)(t)))return{nullValue:"NULL_VALUE"};if("number"==typeof t)return Fo(e.serializer,t);if("boolean"==typeof t)return{booleanValue:t};if("string"==typeof t)return{stringValue:t};if(t instanceof Date){const n=br.fromDate(t);return{timestampValue:Rs(e.serializer,n)}}if(t instanceof br){const n=new br(t.seconds,1e3*Math.floor(t.nanoseconds/1e3));return{timestampValue:Rs(e.serializer,n)}}if(t instanceof gh)return{geoPointValue:{latitude:t.latitude,longitude:t.longitude}};if(t instanceof ph)return{bytesValue:$s(e.serializer,t._byteString)};if(t instanceof ih){const n=e.databaseId,a=t.firestore._databaseId;if(!a.isEqual(n))throw e.gu(`Document reference is for database ${a.projectId}/${a.database} but should be for database ${n.projectId}/${n.database}`);return{referenceValue:Gs(t.firestore._databaseId||e.databaseId,t._key.path)}}throw e.gu(`Unsupported field value: ${Zu(t)}`)}(t,e)}function Dh(t,e){const n={};return Wr(t)?e.path&&e.path.length>0&&e.fieldMask.push(e.path):Ur(t,((t,a)=>{const r=Oh(a,e.Au(t));null!=r&&(n[t]=r)})),{mapValue:{fields:n}}}function Vh(t){return!("object"!=typeof t||null===t||t instanceof Array||t instanceof Date||t instanceof br||t instanceof gh||t instanceof ph||t instanceof ih||t instanceof vh)}function Ch(t,e,n){if(!Vh(n)||!function(t){return"object"==typeof t&&null!==t&&(Object.getPrototypeOf(t)===Object.prototype||null===Object.getPrototypeOf(t))}(n)){const a=Zu(n);throw"an object"===a?e.gu(t+" a custom object"):e.gu(t+" "+a)}}function Ih(t,e,n){if((e=(0,s.m9)(e))instanceof mh)return e._internalPath;if("string"==typeof e)return Eh(t,e);throw Bh("Field path arguments must be of type string or ",t,!1,void 0,n)}const Ph=new RegExp("[~\\*/\\[\\]]");function Eh(t,e,n){if(e.search(Ph)>=0)throw Bh(`Invalid field path (${e}). Paths must not contain '~', '*', '/', '[', or ']'`,t,!1,void 0,n);try{return new mh(...e.split("."))._internalPath}catch(M){throw Bh(`Invalid field path (${e}). Paths must not be empty, begin with '.', end with '.', or contain '..'`,t,!1,void 0,n)}}function Bh(t,e,n,a,r){const i=a&&!a.isEmpty(),o=void 0!==r;let s=`Function ${e}() called with invalid data`;n&&(s+=" (via `toFirestore()`)"),s+=". ";let l="";return(i||o)&&(l+=" (found",i&&(l+=` in field ${a}`),o&&(l+=` in document ${r}`),l+=")"),new or(ir.INVALID_ARGUMENT,s+t+l)}function Fh(t,e){return t.some((t=>t.isEqual(e)))}
/**
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
 */class jh{constructor(t,e,n,a,r){this._firestore=t,this._userDataWriter=e,this._key=n,this._document=a,this._converter=r}get id(){return this._key.path.lastSegment()}get ref(){return new ih(this._firestore,this._converter,this._key)}exists(){return null!==this._document}data(){if(this._document){if(this._converter){const t=new Yh(this._firestore,this._userDataWriter,this._key,this._document,null);return this._converter.fromFirestore(t)}return this._userDataWriter.convertValue(this._document.data.value)}}get(t){if(this._document){const e=this._document.data.field(xh("DocumentSnapshot.get",t));if(null!==e)return this._userDataWriter.convertValue(e)}}}class Yh extends jh{data(){return super.data()}}function xh(t,e){return"string"==typeof e?Eh(t,e):e instanceof mh?e._internalPath:e._delegate._internalPath}
/**
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
 */function Nh(t){if("L"===t.limitType&&0===t.explicitOrderBy.length)throw new or(ir.UNIMPLEMENTED,"limitToLast() queries require specifying at least one orderBy() clause")}class Rh{}class $h extends Rh{}function Uh(t,e,...n){let a=[];e instanceof Rh&&a.push(e),a=a.concat(n),function(t){const e=t.filter((t=>t instanceof qh)).length,n=t.filter((t=>t instanceof Wh)).length;if(e>1||e>0&&n>0)throw new or(ir.INVALID_ARGUMENT,"InvalidQuery. When using composite filters, you cannot use more than one filter at the top level. Consider nesting the multiple filters within an `and(...)` statement. For example: change `query(query, where(...), or(...))` to `query(query, and(where(...), or(...)))`.")}
/**
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
 */(a);for(const r of a)t=r._apply(t);return t}class Wh extends $h{constructor(t,e,n){super(),this._field=t,this._op=e,this._value=n,this.type="where"}static _create(t,e,n){return new Wh(t,e,n)}_apply(t){const e=this._parse(t);return Xh(t._query,e),new rh(t.firestore,t.converter,fo(t._query,e))}_parse(t){const e=Lh(t.firestore),n=function(t,e,n,a,r,i,o){let s;if(r.isKeyField()){if("array-contains"===i||"array-contains-any"===i)throw new or(ir.INVALID_ARGUMENT,`Invalid Query. You can't perform '${i}' queries on documentId().`);if("in"===i||"not-in"===i){Jh(o,i);const e=[];for(const n of o)e.push(Kh(a,t,n));s={arrayValue:{values:e}}}else s=Kh(a,t,o)}else"in"!==i&&"not-in"!==i&&"array-contains-any"!==i||Jh(o,i),s=Ah(n,e,o,"in"===i||"not-in"===i);return Pi.create(r,i,s)}(t._query,"where",e,t.firestore._databaseId,this._field,this._op,this._value);return n}}function Gh(t,e,n){const a=e,r=xh("where",t);return Wh._create(r,a,n)}class qh extends Rh{constructor(t,e){super(),this.type=t,this._queryConstraints=e}static _create(t,e){return new qh(t,e)}_parse(t){const e=this._queryConstraints.map((e=>e._parse(t))).filter((t=>t.getFilters().length>0));return 1===e.length?e[0]:Ei.create(e,this._getOperator())}_apply(t){const e=this._parse(t);return 0===e.getFilters().length?t:(function(t,e){let n=t;const a=e.getFlattenedFilters();for(const r of a)Xh(n,r),n=fo(n,r)}(t._query,e),new rh(t.firestore,t.converter,fo(t._query,e)))}_getQueryConstraints(){return this._queryConstraints}_getOperator(){return"and"===this.type?"and":"or"}}function Kh(t,e,n){if("string"==typeof(n=(0,s.m9)(n))){if(""===n)throw new or(ir.INVALID_ARGUMENT,"Invalid query. When querying with documentId(), you must provide a valid document ID, but it was an empty string.");if(!lo(e)&&-1!==n.indexOf("/"))throw new or(ir.INVALID_ARGUMENT,`Invalid query. When querying a collection by documentId(), you must provide a plain document ID, but '${n}' contains a '/' character.`);const a=e.path.child(wr.fromString(n));if(!Hr.isDocumentKey(a))throw new or(ir.INVALID_ARGUMENT,`Invalid query. When querying a collection group by documentId(), the value provided must result in a valid document path, but '${a}' is not because it has an odd number of segments (${a.length}).`);return _i(t,new Hr(a))}if(n instanceof ih)return _i(t,n._key);throw new or(ir.INVALID_ARGUMENT,`Invalid query. When querying with documentId(), you must provide a valid string or a DocumentReference, but it was: ${Zu(n)}.`)}function Jh(t,e){if(!Array.isArray(t)||0===t.length)throw new or(ir.INVALID_ARGUMENT,`Invalid Query. A non-empty array is required for '${e.toString()}' filters.`)}function Xh(t,e){if(e.isInequality()){const n=so(t),a=e.field;if(null!==n&&!n.isEqual(a))throw new or(ir.INVALID_ARGUMENT,`Invalid query. All where filters with an inequality (<, <=, !=, not-in, >, or >=) must be on the same field. But you have inequality filters on '${n.toString()}' and '${a.toString()}'`);const r=oo(t);null!==r&&Qh(t,a,r)}const n=function(t,e){for(const n of t)for(const t of n.getFlattenedFilters())if(e.indexOf(t.op)>=0)return t.op;return null}(t.filters,function(t){switch(t){case"!=":return["!=","not-in"];case"array-contains-any":case"in":return["not-in"];case"not-in":return["array-contains-any","in","not-in","!="];default:return[]}}(e.op));if(null!==n)throw n===e.op?new or(ir.INVALID_ARGUMENT,`Invalid query. You cannot use more than one '${e.op.toString()}' filter.`):new or(ir.INVALID_ARGUMENT,`Invalid query. You cannot use '${e.op.toString()}' filters with '${n.toString()}' filters.`)}function Qh(t,e,n){if(!n.isEqual(e))throw new or(ir.INVALID_ARGUMENT,`Invalid query. You have a where filter with an inequality (<, <=, !=, not-in, >, or >=) on field '${e.toString()}' and so you must also use '${e.toString()}' as your first argument to orderBy(), but your first orderBy() is on field '${n.toString()}' instead.`)}class Zh{convertValue(t,e="none"){switch(hi(t)){case 0:return null;case 1:return t.booleanValue;case 2:return ai(t.integerValue||t.doubleValue);case 3:return this.convertTimestamp(t.timestampValue);case 4:return this.convertServerTimestamp(t,e);case 5:return t.stringValue;case 6:return this.convertBytes(ri(t.bytesValue));case 7:return this.convertReference(t.referenceValue);case 8:return this.convertGeoPoint(t.geoPointValue);case 9:return this.convertArray(t.arrayValue,e);case 10:return this.convertObject(t.mapValue,e);default:throw nr()}}convertObject(t,e){return this.convertObjectMap(t.fields,e)}convertObjectMap(t,e="none"){const n={};return Ur(t,((t,a)=>{n[t]=this.convertValue(a,e)})),n}convertGeoPoint(t){return new gh(ai(t.latitude),ai(t.longitude))}convertArray(t,e){return(t.values||[]).map((t=>this.convertValue(t,e)))}convertServerTimestamp(t,e){switch(e){case"previous":const n=oi(t);return null==n?null:this.convertValue(n,e);case"estimate":return this.convertTimestamp(si(t));default:return null}}convertTimestamp(t){const e=ni(t);return new br(e.seconds,e.nanos)}convertDocumentKey(t,e){const n=wr.fromString(t);ar(gl(n));const a=new ci(n.get(1),n.get(3)),r=new Hr(n.popFirst(5));return a.isEqual(e)||Za(`Document ${r} contains a document reference within a different database (${a.projectId}/${a.database}) which is not supported. It will be treated as a reference in the current database (${e.projectId}/${e.database}) instead.`),r}}
/**
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
 */function td(t,e,n){let a;return a=t?n&&(n.merge||n.mergeFields)?t.toFirestore(e,n):t.toFirestore(e):e,a}
/**
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
 */
class ed{constructor(t,e){this.hasPendingWrites=t,this.fromCache=e}isEqual(t){return this.hasPendingWrites===t.hasPendingWrites&&this.fromCache===t.fromCache}}class nd extends jh{constructor(t,e,n,a,r,i){super(t,e,n,a,i),this._firestore=t,this._firestoreImpl=t,this.metadata=r}exists(){return super.exists()}data(t={}){if(this._document){if(this._converter){const e=new ad(this._firestore,this._userDataWriter,this._key,this._document,this.metadata,null);return this._converter.fromFirestore(e,t)}return this._userDataWriter.convertValue(this._document.data.value,t.serverTimestamps)}}get(t,e={}){if(this._document){const n=this._document.data.field(xh("DocumentSnapshot.get",t));if(null!==n)return this._userDataWriter.convertValue(n,e.serverTimestamps)}}}class ad extends nd{data(t={}){return super.data(t)}}class rd{constructor(t,e,n,a){this._firestore=t,this._userDataWriter=e,this._snapshot=a,this.metadata=new ed(a.hasPendingWrites,a.fromCache),this.query=n}get docs(){const t=[];return this.forEach((e=>t.push(e))),t}get size(){return this._snapshot.docs.size}get empty(){return 0===this.size}forEach(t,e){this._snapshot.docs.forEach((n=>{t.call(e,new ad(this._firestore,this._userDataWriter,n.key,n,new ed(this._snapshot.mutatedKeys.has(n.key),this._snapshot.fromCache),this.query.converter))}))}docChanges(t={}){const e=!!t.includeMetadataChanges;if(e&&this._snapshot.excludesMetadataChanges)throw new or(ir.INVALID_ARGUMENT,"To include metadata changes with your document changes, you must also pass { includeMetadataChanges:true } to onSnapshot().");return this._cachedChanges&&this._cachedChangesIncludeMetadataChanges===e||(this._cachedChanges=function(t,e){if(t._snapshot.oldDocs.isEmpty()){let e=0;return t._snapshot.docChanges.map((n=>{const a=new ad(t._firestore,t._userDataWriter,n.doc.key,n.doc,new ed(t._snapshot.mutatedKeys.has(n.doc.key),t._snapshot.fromCache),t.query.converter);return n.doc,{type:"added",doc:a,oldIndex:-1,newIndex:e++}}))}{let n=t._snapshot.oldDocs;return t._snapshot.docChanges.filter((t=>e||3!==t.type)).map((e=>{const a=new ad(t._firestore,t._userDataWriter,e.doc.key,e.doc,new ed(t._snapshot.mutatedKeys.has(e.doc.key),t._snapshot.fromCache),t.query.converter);let r=-1,i=-1;return 0!==e.type&&(r=n.indexOf(e.doc.key),n=n.delete(e.doc.key)),1!==e.type&&(n=n.add(e.doc),i=n.indexOf(e.doc.key)),{type:id(e.type),doc:a,oldIndex:r,newIndex:i}}))}}(this,e),this._cachedChangesIncludeMetadataChanges=e),this._cachedChanges}}function id(t){switch(t){case 0:return"added";case 2:case 3:return"modified";case 1:return"removed";default:return nr()}}
/**
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
 */
function od(t){t=th(t,ih);const e=th(t.firestore,uh);return Uu(dh(e),t._key).then((n=>fd(e,t,n)))}class sd extends Zh{constructor(t){super(),this.firestore=t}convertBytes(t){return new ph(t)}convertReference(t){const e=this.convertDocumentKey(t,this.firestore._databaseId);return new ih(this.firestore,null,e)}}function ld(t){t=th(t,rh);const e=th(t.firestore,uh),n=dh(e),a=new sd(e);return Nh(t._query),Wu(n,t._query).then((n=>new rd(e,a,t,n)))}function cd(t,e,n,...a){t=th(t,ih);const r=th(t.firestore,uh),i=Lh(r);let o;return o="string"==typeof(e=(0,s.m9)(e))||e instanceof mh?Sh(i,"updateDoc",t._key,e,n,a):Th(i,"updateDoc",t._key,e),dd(r,[o.toMutation(t._key,Zo.exists(!0))])}function ud(t){return dd(th(t.firestore,uh),[new ds(t._key,Zo.none())])}function hd(t,e){const n=th(t.firestore,uh),a=lh(t),r=td(t.converter,e);return dd(n,[kh(Lh(t.firestore),"addDoc",a._key,r,null!==t.converter,{}).toMutation(a._key,Zo.exists(!1))]).then((()=>a))}function dd(t,e){return function(t,e){const n=new sr;return t.asyncQueue.enqueueAndForget((async()=>vu(await Ru(t),e,n))),n.promise}(dh(t),e)}function fd(t,e,n){const a=n.docs.get(e._key),r=new sd(t);return new nd(t,r,e._key,a,new ed(n.hasPendingWrites,n.fromCache),e.converter)}
/**
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
 */
/**
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
 */
class pd{constructor(t,e){this._firestore=t,this._commitHandler=e,this._mutations=[],this._committed=!1,this._dataReader=Lh(t)}set(t,e,n){this._verifyNotCommitted();const a=md(t,this._firestore),r=td(a.converter,e,n),i=kh(this._dataReader,"WriteBatch.set",a._key,r,null!==a.converter,n);return this._mutations.push(i.toMutation(a._key,Zo.none())),this}update(t,e,n,...a){this._verifyNotCommitted();const r=md(t,this._firestore);let i;return i="string"==typeof(e=(0,s.m9)(e))||e instanceof mh?Sh(this._dataReader,"WriteBatch.update",r._key,e,n,a):Th(this._dataReader,"WriteBatch.update",r._key,e),this._mutations.push(i.toMutation(r._key,Zo.exists(!0))),this}delete(t){this._verifyNotCommitted();const e=md(t,this._firestore);return this._mutations=this._mutations.concat(new ds(e._key,Zo.none())),this}commit(){return this._verifyNotCommitted(),this._committed=!0,this._mutations.length>0?this._commitHandler(this._mutations):Promise.resolve()}_verifyNotCommitted(){if(this._committed)throw new or(ir.FAILED_PRECONDITION,"A write batch can no longer be used after commit() has been called.")}}function md(t,e){if((t=(0,s.m9)(t)).firestore!==e)throw new or(ir.INVALID_ARGUMENT,"Provided document reference is from a different Firestore instance.");return t}
/**
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
 */
/**
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
 */
/**
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
 */
function vd(t){return dh(t=th(t,uh)),new pd(t,(e=>dd(t,e)))
/**
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
 */}new WeakMap;
/**
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
 */!function(t,e=!0){!function(t){Ka=t}(r.Jn),(0,r.Xd)(new i.wA("firestore",((t,{instanceIdentifier:n,options:a})=>{const r=t.getProvider("app").getImmediate(),i=new uh(new hr(t.getProvider("auth-internal")),new mr(t.getProvider("app-check-internal")),function(t,e){if(!Object.prototype.hasOwnProperty.apply(t.options,["projectId"]))throw new or(ir.INVALID_ARGUMENT,'"projectId" not provided in firebase.initializeApp.');return new ci(t.options.projectId,e)}(r,n),r);return a=Object.assign({useFetchStreams:e},a),i._setSettings(a),i}),"PUBLIC").setMultipleInstances(!0)),(0,r.KN)(Ga,"4.1.3",t),(0,r.KN)(Ga,"4.1.3","esm2017")}()},4444:function(t,e,n){"use strict";n.d(e,{BH:function(){return y},L:function(){return l},LL:function(){return O},P0:function(){return v},Pz:function(){return _},Sg:function(){return b},ZR:function(){return A},aH:function(){return g},b$:function(){return L},eu:function(){return T},hl:function(){return H},m9:function(){return R},ne:function(){return j},pd:function(){return F},q4:function(){return m},ru:function(){return w},tV:function(){return c},uI:function(){return z},vZ:function(){return I},w1:function(){return k},xO:function(){return E},xb:function(){return C},z$:function(){return M},zd:function(){return B}});
/**
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
 */
const a=function(t){const e=[];let n=0;for(let a=0;a<t.length;a++){let r=t.charCodeAt(a);r<128?e[n++]=r:r<2048?(e[n++]=r>>6|192,e[n++]=63&r|128):55296===(64512&r)&&a+1<t.length&&56320===(64512&t.charCodeAt(a+1))?(r=65536+((1023&r)<<10)+(1023&t.charCodeAt(++a)),e[n++]=r>>18|240,e[n++]=r>>12&63|128,e[n++]=r>>6&63|128,e[n++]=63&r|128):(e[n++]=r>>12|224,e[n++]=r>>6&63|128,e[n++]=63&r|128)}return e},r=function(t){const e=[];let n=0,a=0;while(n<t.length){const r=t[n++];if(r<128)e[a++]=String.fromCharCode(r);else if(r>191&&r<224){const i=t[n++];e[a++]=String.fromCharCode((31&r)<<6|63&i)}else if(r>239&&r<365){const i=t[n++],o=t[n++],s=t[n++],l=((7&r)<<18|(63&i)<<12|(63&o)<<6|63&s)-65536;e[a++]=String.fromCharCode(55296+(l>>10)),e[a++]=String.fromCharCode(56320+(1023&l))}else{const i=t[n++],o=t[n++];e[a++]=String.fromCharCode((15&r)<<12|(63&i)<<6|63&o)}}return e.join("")},i={byteToCharMap_:null,charToByteMap_:null,byteToCharMapWebSafe_:null,charToByteMapWebSafe_:null,ENCODED_VALS_BASE:"ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789",get ENCODED_VALS(){return this.ENCODED_VALS_BASE+"+/="},get ENCODED_VALS_WEBSAFE(){return this.ENCODED_VALS_BASE+"-_."},HAS_NATIVE_SUPPORT:"function"===typeof atob,encodeByteArray(t,e){if(!Array.isArray(t))throw Error("encodeByteArray takes an array as a parameter");this.init_();const n=e?this.byteToCharMapWebSafe_:this.byteToCharMap_,a=[];for(let r=0;r<t.length;r+=3){const e=t[r],i=r+1<t.length,o=i?t[r+1]:0,s=r+2<t.length,l=s?t[r+2]:0,c=e>>2,u=(3&e)<<4|o>>4;let h=(15&o)<<2|l>>6,d=63&l;s||(d=64,i||(h=64)),a.push(n[c],n[u],n[h],n[d])}return a.join("")},encodeString(t,e){return this.HAS_NATIVE_SUPPORT&&!e?btoa(t):this.encodeByteArray(a(t),e)},decodeString(t,e){return this.HAS_NATIVE_SUPPORT&&!e?atob(t):r(this.decodeStringToByteArray(t,e))},decodeStringToByteArray(t,e){this.init_();const n=e?this.charToByteMapWebSafe_:this.charToByteMap_,a=[];for(let r=0;r<t.length;){const e=n[t.charAt(r++)],i=r<t.length,s=i?n[t.charAt(r)]:0;++r;const l=r<t.length,c=l?n[t.charAt(r)]:64;++r;const u=r<t.length,h=u?n[t.charAt(r)]:64;if(++r,null==e||null==s||null==c||null==h)throw new o;const d=e<<2|s>>4;if(a.push(d),64!==c){const t=s<<4&240|c>>2;if(a.push(t),64!==h){const t=c<<6&192|h;a.push(t)}}}return a},init_(){if(!this.byteToCharMap_){this.byteToCharMap_={},this.charToByteMap_={},this.byteToCharMapWebSafe_={},this.charToByteMapWebSafe_={};for(let t=0;t<this.ENCODED_VALS.length;t++)this.byteToCharMap_[t]=this.ENCODED_VALS.charAt(t),this.charToByteMap_[this.byteToCharMap_[t]]=t,this.byteToCharMapWebSafe_[t]=this.ENCODED_VALS_WEBSAFE.charAt(t),this.charToByteMapWebSafe_[this.byteToCharMapWebSafe_[t]]=t,t>=this.ENCODED_VALS_BASE.length&&(this.charToByteMap_[this.ENCODED_VALS_WEBSAFE.charAt(t)]=t,this.charToByteMapWebSafe_[this.ENCODED_VALS.charAt(t)]=t)}}};
/**
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
 */class o extends Error{constructor(){super(...arguments),this.name="DecodeBase64StringError"}}const s=function(t){const e=a(t);return i.encodeByteArray(e,!0)},l=function(t){return s(t).replace(/\./g,"")},c=function(t){try{return i.decodeString(t,!0)}catch(e){console.error("base64Decode failed: ",e)}return null};
/**
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
 */
function u(){if("undefined"!==typeof self)return self;if("undefined"!==typeof window)return window;if("undefined"!==typeof n.g)return n.g;throw new Error("Unable to locate global object.")}
/**
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
 */const h=()=>u().__FIREBASE_DEFAULTS__,d=()=>{if("undefined"===typeof process)return;const t={NODE_ENV:"production",BASE_URL:"/site-croissens/"}.__FIREBASE_DEFAULTS__;return t?JSON.parse(t):void 0},f=()=>{if("undefined"===typeof document)return;let t;try{t=document.cookie.match(/__FIREBASE_DEFAULTS__=([^;]+)/)}catch(n){return}const e=t&&c(t[1]);return e&&JSON.parse(e)},p=()=>{try{return h()||d()||f()}catch(t){return void console.info(`Unable to get __FIREBASE_DEFAULTS__ due to: ${t}`)}},m=t=>{var e,n;return null===(n=null===(e=p())||void 0===e?void 0:e.emulatorHosts)||void 0===n?void 0:n[t]},v=t=>{const e=m(t);if(!e)return;const n=e.lastIndexOf(":");if(n<=0||n+1===e.length)throw new Error(`Invalid host ${e} with no separate hostname and port!`);const a=parseInt(e.substring(n+1),10);return"["===e[0]?[e.substring(1,n-1),a]:[e.substring(0,n),a]},g=()=>{var t;return null===(t=p())||void 0===t?void 0:t.config},_=t=>{var e;return null===(e=p())||void 0===e?void 0:e[`_${t}`]};
/**
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
 */
class y{constructor(){this.reject=()=>{},this.resolve=()=>{},this.promise=new Promise(((t,e)=>{this.resolve=t,this.reject=e}))}wrapCallback(t){return(e,n)=>{e?this.reject(e):this.resolve(n),"function"===typeof t&&(this.promise.catch((()=>{})),1===t.length?t(e):t(e,n))}}}
/**
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
 */function b(t,e){if(t.uid)throw new Error('The "uid" field is no longer supported by mockUserToken. Please use "sub" instead for Firebase Auth User ID.');const n={alg:"none",type:"JWT"},a=e||"demo-project",r=t.iat||0,i=t.sub||t.user_id;if(!i)throw new Error("mockUserToken must contain 'sub' or 'user_id' field!");const o=Object.assign({iss:`https://securetoken.google.com/${a}`,aud:a,iat:r,exp:r+3600,auth_time:r,sub:i,user_id:i,firebase:{sign_in_provider:"custom",identities:{}}},t),s="";return[l(JSON.stringify(n)),l(JSON.stringify(o)),s].join(".")}
/**
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
 */function M(){return"undefined"!==typeof navigator&&"string"===typeof navigator["userAgent"]?navigator["userAgent"]:""}function z(){return"undefined"!==typeof window&&!!(window["cordova"]||window["phonegap"]||window["PhoneGap"])&&/ios|iphone|ipod|ipad|android|blackberry|iemobile/i.test(M())}function w(){const t="object"===typeof chrome?chrome.runtime:"object"===typeof browser?browser.runtime:void 0;return"object"===typeof t&&void 0!==t.id}function L(){return"object"===typeof navigator&&"ReactNative"===navigator["product"]}function k(){const t=M();return t.indexOf("MSIE ")>=0||t.indexOf("Trident/")>=0}function H(){try{return"object"===typeof indexedDB}catch(t){return!1}}function T(){return new Promise(((t,e)=>{try{let n=!0;const a="validate-browser-context-for-indexeddb-analytics-module",r=self.indexedDB.open(a);r.onsuccess=()=>{r.result.close(),n||self.indexedDB.deleteDatabase(a),t(!0)},r.onupgradeneeded=()=>{n=!1},r.onerror=()=>{var t;e((null===(t=r.error)||void 0===t?void 0:t.message)||"")}}catch(n){e(n)}}))}
/**
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
 */
const S="FirebaseError";class A extends Error{constructor(t,e,n){super(e),this.code=t,this.customData=n,this.name=S,Object.setPrototypeOf(this,A.prototype),Error.captureStackTrace&&Error.captureStackTrace(this,O.prototype.create)}}class O{constructor(t,e,n){this.service=t,this.serviceName=e,this.errors=n}create(t,...e){const n=e[0]||{},a=`${this.service}/${t}`,r=this.errors[t],i=r?D(r,n):"Error",o=`${this.serviceName}: ${i} (${a}).`,s=new A(a,o,n);return s}}function D(t,e){return t.replace(V,((t,n)=>{const a=e[n];return null!=a?String(a):`<${n}?>`}))}const V=/\{\$([^}]+)}/g;
/**
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
 */function C(t){for(const e in t)if(Object.prototype.hasOwnProperty.call(t,e))return!1;return!0}function I(t,e){if(t===e)return!0;const n=Object.keys(t),a=Object.keys(e);for(const r of n){if(!a.includes(r))return!1;const n=t[r],i=e[r];if(P(n)&&P(i)){if(!I(n,i))return!1}else if(n!==i)return!1}for(const r of a)if(!n.includes(r))return!1;return!0}function P(t){return null!==t&&"object"===typeof t}
/**
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
 */
/**
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
 */
function E(t){const e=[];for(const[n,a]of Object.entries(t))Array.isArray(a)?a.forEach((t=>{e.push(encodeURIComponent(n)+"="+encodeURIComponent(t))})):e.push(encodeURIComponent(n)+"="+encodeURIComponent(a));return e.length?"&"+e.join("&"):""}function B(t){const e={},n=t.replace(/^\?/,"").split("&");return n.forEach((t=>{if(t){const[n,a]=t.split("=");e[decodeURIComponent(n)]=decodeURIComponent(a)}})),e}function F(t){const e=t.indexOf("?");if(!e)return"";const n=t.indexOf("#",e);return t.substring(e,n>0?n:void 0)}
/**
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
 */function j(t,e){const n=new Y(t,e);return n.subscribe.bind(n)}class Y{constructor(t,e){this.observers=[],this.unsubscribes=[],this.observerCount=0,this.task=Promise.resolve(),this.finalized=!1,this.onNoObservers=e,this.task.then((()=>{t(this)})).catch((t=>{this.error(t)}))}next(t){this.forEachObserver((e=>{e.next(t)}))}error(t){this.forEachObserver((e=>{e.error(t)})),this.close(t)}complete(){this.forEachObserver((t=>{t.complete()})),this.close()}subscribe(t,e,n){let a;if(void 0===t&&void 0===e&&void 0===n)throw new Error("Missing Observer.");a=x(t,["next","error","complete"])?t:{next:t,error:e,complete:n},void 0===a.next&&(a.next=N),void 0===a.error&&(a.error=N),void 0===a.complete&&(a.complete=N);const r=this.unsubscribeOne.bind(this,this.observers.length);return this.finalized&&this.task.then((()=>{try{this.finalError?a.error(this.finalError):a.complete()}catch(t){}})),this.observers.push(a),r}unsubscribeOne(t){void 0!==this.observers&&void 0!==this.observers[t]&&(delete this.observers[t],this.observerCount-=1,0===this.observerCount&&void 0!==this.onNoObservers&&this.onNoObservers(this))}forEachObserver(t){if(!this.finalized)for(let e=0;e<this.observers.length;e++)this.sendOne(e,t)}sendOne(t,e){this.task.then((()=>{if(void 0!==this.observers&&void 0!==this.observers[t])try{e(this.observers[t])}catch(n){"undefined"!==typeof console&&console.error&&console.error(n)}}))}close(t){this.finalized||(this.finalized=!0,void 0!==t&&(this.finalError=t),this.task.then((()=>{this.observers=void 0,this.onNoObservers=void 0})))}}function x(t,e){if("object"!==typeof t||null===t)return!1;for(const n of e)if(n in t&&"function"===typeof t[n])return!0;return!1}function N(){}
/**
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
 */
/**
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
 */
//! moment.js locale configuration
var e=t.defineLocale("af",{months:"Januarie_Februarie_Maart_April_Mei_Junie_Julie_Augustus_September_Oktober_November_Desember".split("_"),monthsShort:"Jan_Feb_Mrt_Apr_Mei_Jun_Jul_Aug_Sep_Okt_Nov_Des".split("_"),weekdays:"Sondag_Maandag_Dinsdag_Woensdag_Donderdag_Vrydag_Saterdag".split("_"),weekdaysShort:"Son_Maa_Din_Woe_Don_Vry_Sat".split("_"),weekdaysMin:"So_Ma_Di_Wo_Do_Vr_Sa".split("_"),meridiemParse:/vm|nm/i,isPM:function(t){return/^nm$/i.test(t)},meridiem:function(t,e,n){return t<12?n?"vm":"VM":n?"nm":"NM"},longDateFormat:{LT:"HH:mm",LTS:"HH:mm:ss",L:"DD/MM/YYYY",LL:"D MMMM YYYY",LLL:"D MMMM YYYY HH:mm",LLLL:"dddd, D MMMM YYYY HH:mm"},calendar:{sameDay:"[Vandag om] LT",nextDay:"[Môre om] LT",nextWeek:"dddd [om] LT",lastDay:"[Gister om] LT",lastWeek:"[Laas] dddd [om] LT",sameElse:"L"},relativeTime:{future:"oor %s",past:"%s gelede",s:"'n paar sekondes",ss:"%d sekondes",m:"'n minuut",mm:"%d minute",h:"'n uur",hh:"%d ure",d:"'n dag",dd:"%d dae",M:"'n maand",MM:"%d maande",y:"'n jaar",yy:"%d jaar"},dayOfMonthOrdinalParse:/\d{1,2}(ste|de)/,ordinal:function(t){return t+(1===t||8===t||t>=20?"ste":"de")},week:{dow:1,doy:4}});return e}))},4130:function(t,e,n){(function(t,e){e(n(381))})(0,(function(t){"use strict";
//! moment.js locale configuration
var e=function(t){return 0===t?0:1===t?1:2===t?2:t%100>=3&&t%100<=10?3:t%100>=11?4:5},n={s:["أقل من ثانية","ثانية واحدة",["ثانيتان","ثانيتين"],"%d ثوان","%d ثانية","%d ثانية"],m:["أقل من دقيقة","دقيقة واحدة",["دقيقتان","دقيقتين"],"%d دقائق","%d دقيقة","%d دقيقة"],h:["أقل من ساعة","ساعة واحدة",["ساعتان","ساعتين"],"%d ساعات","%d ساعة","%d ساعة"],d:["أقل من يوم","يوم واحد",["يومان","يومين"],"%d أيام","%d يومًا","%d يوم"],M:["أقل من شهر","شهر واحد",["شهران","شهرين"],"%d أشهر","%d شهرا","%d شهر"],y:["أقل من عام","عام واحد",["عامان","عامين"],"%d أعوام","%d عامًا","%d عام"]},a=function(t){return function(a,r,i,o){var s=e(a),l=n[t][e(a)];return 2===s&&(l=l[r?0:1]),l.replace(/%d/i,a)}},r=["جانفي","فيفري","مارس","أفريل","ماي","جوان","جويلية","أوت","سبتمبر","أكتوبر","نوفمبر","ديسمبر"],i=t.defineLocale("ar-dz",{months:r,monthsShort:r,weekdays:"الأحد_الإثنين_الثلاثاء_الأربعاء_الخميس_الجمعة_السبت".split("_"),weekdaysShort:"أحد_إثنين_ثلاثاء_أربعاء_خميس_جمعة_سبت".split("_"),weekdaysMin:"ح_ن_ث_ر_خ_ج_س".split("_"),weekdaysParseExact:!0,longDateFormat:{LT:"HH:mm",LTS:"HH:mm:ss",L:"D/‏M/‏YYYY",LL:"D MMMM YYYY",LLL:"D MMMM YYYY HH:mm",LLLL:"dddd D MMMM YYYY HH:mm"},meridiemParse:/ص|م/,isPM:function(t){return"م"===t},meridiem:function(t,e,n){return t<12?"ص":"م"},calendar:{sameDay:"[اليوم عند الساعة] LT",nextDay:"[غدًا عند الساعة] LT",nextWeek:"dddd [عند الساعة] LT",lastDay:"[أمس عند الساعة] LT",lastWeek:"dddd [عند الساعة] LT",sameElse:"L"},relativeTime:{future:"بعد %s",past:"منذ %s",s:a("s"),ss:a("s"),m:a("m"),mm:a("m"),h:a("h"),hh:a("h"),d:a("d"),dd:a("d"),M:a("M"),MM:a("M"),y:a("y"),yy:a("y")},postformat:function(t){return t.replace(/,/g,"،")},week:{dow:0,doy:4}});return i}))},6135:function(t,e,n){(function(t,e){e(n(381))})(0,(function(t){"use strict";
//! moment.js locale configuration
var e=t.defineLocale("ar-kw",{months:"يناير_فبراير_مارس_أبريل_ماي_يونيو_يوليوز_غشت_شتنبر_أكتوبر_نونبر_دجنبر".split("_"),monthsShort:"يناير_فبراير_مارس_أبريل_ماي_يونيو_يوليوز_غشت_شتنبر_أكتوبر_نونبر_دجنبر".split("_"),weekdays:"الأحد_الإتنين_الثلاثاء_الأربعاء_الخميس_الجمعة_السبت".split("_"),weekdaysShort:"احد_اتنين_ثلاثاء_اربعاء_خميس_جمعة_سبت".split("_"),weekdaysMin:"ح_ن_ث_ر_خ_ج_س".split("_"),weekdaysParseExact:!0,longDateFormat:{LT:"HH:mm",LTS:"HH:mm:ss",L:"DD/MM/YYYY",LL:"D MMMM YYYY",LLL:"D MMMM YYYY HH:mm",LLLL:"dddd D MMMM YYYY HH:mm"},calendar:{sameDay:"[اليوم على الساعة] LT",nextDay:"[غدا على الساعة] LT",nextWeek:"dddd [على الساعة] LT",lastDay:"[أمس على الساعة] LT",lastWeek:"dddd [على الساعة] LT",sameElse:"L"},relativeTime:{future:"في %s",past:"منذ %s",s:"ثوان",ss:"%d ثانية",m:"دقيقة",mm:"%d دقائق",h:"ساعة",hh:"%d ساعات",d:"يوم",dd:"%d أيام",M:"شهر",MM:"%d أشهر",y:"سنة",yy:"%d سنوات"},week:{dow:0,doy:12}});return e}))},6440:function(t,e,n){(function(t,e){e(n(381))})(0,(function(t){"use strict";
//! moment.js locale configuration
var e={1:"1",2:"2",3:"3",4:"4",5:"5",6:"6",7:"7",8:"8",9:"9",0:"0"},n=function(t){return 0===t?0:1===t?1:2===t?2:t%100>=3&&t%100<=10?3:t%100>=11?4:5},a={s:["أقل من ثانية","ثانية واحدة",["ثانيتان","ثانيتين"],"%d ثوان","%d ثانية","%d ثانية"],m:["أقل من دقيقة","دقيقة واحدة",["دقيقتان","دقيقتين"],"%d دقائق","%d دقيقة","%d دقيقة"],h:["أقل من ساعة","ساعة واحدة",["ساعتان","ساعتين"],"%d ساعات","%d ساعة","%d ساعة"],d:["أقل من يوم","يوم واحد",["يومان","يومين"],"%d أيام","%d يومًا","%d يوم"],M:["أقل من شهر","شهر واحد",["شهران","شهرين"],"%d أشهر","%d شهرا","%d شهر"],y:["أقل من عام","عام واحد",["عامان","عامين"],"%d أعوام","%d عامًا","%d عام"]},r=function(t){return function(e,r,i,o){var s=n(e),l=a[t][n(e)];return 2===s&&(l=l[r?0:1]),l.replace(/%d/i,e)}},i=["يناير","فبراير","مارس","أبريل","مايو","يونيو","يوليو","أغسطس","سبتمبر","أكتوبر","نوفمبر","ديسمبر"],o=t.defineLocale("ar-ly",{months:i,monthsShort:i,weekdays:"الأحد_الإثنين_الثلاثاء_الأربعاء_الخميس_الجمعة_السبت".split("_"),weekdaysShort:"أحد_إثنين_ثلاثاء_أربعاء_خميس_جمعة_سبت".split("_"),weekdaysMin:"ح_ن_ث_ر_خ_ج_س".split("_"),weekdaysParseExact:!0,longDateFormat:{LT:"HH:mm",LTS:"HH:mm:ss",L:"D/‏M/‏YYYY",LL:"D MMMM YYYY",LLL:"D MMMM YYYY HH:mm",LLLL:"dddd D MMMM YYYY HH:mm"},meridiemParse:/ص|م/,isPM:function(t){return"م"===t},meridiem:function(t,e,n){return t<12?"ص":"م"},calendar:{sameDay:"[اليوم عند الساعة] LT",nextDay:"[غدًا عند الساعة] LT",nextWeek:"dddd [عند الساعة] LT",lastDay:"[أمس عند الساعة] LT",lastWeek:"dddd [عند الساعة] LT",sameElse:"L"},relativeTime:{future:"بعد %s",past:"منذ %s",s:r("s"),ss:r("s"),m:r("m"),mm:r("m"),h:r("h"),hh:r("h"),d:r("d"),dd:r("d"),M:r("M"),MM:r("M"),y:r("y"),yy:r("y")},preparse:function(t){return t.replace(/،/g,",")},postformat:function(t){return t.replace(/\d/g,(function(t){return e[t]})).replace(/,/g,"،")},week:{dow:6,doy:12}});return o}))},7702:function(t,e,n){(function(t,e){e(n(381))})(0,(function(t){"use strict";
//! moment.js locale configuration
var e=t.defineLocale("ar-ma",{months:"يناير_فبراير_مارس_أبريل_ماي_يونيو_يوليوز_غشت_شتنبر_أكتوبر_نونبر_دجنبر".split("_"),monthsShort:"يناير_فبراير_مارس_أبريل_ماي_يونيو_يوليوز_غشت_شتنبر_أكتوبر_نونبر_دجنبر".split("_"),weekdays:"الأحد_الإثنين_الثلاثاء_الأربعاء_الخميس_الجمعة_السبت".split("_"),weekdaysShort:"احد_اثنين_ثلاثاء_اربعاء_خميس_جمعة_سبت".split("_"),weekdaysMin:"ح_ن_ث_ر_خ_ج_س".split("_"),weekdaysParseExact:!0,longDateFormat:{LT:"HH:mm",LTS:"HH:mm:ss",L:"DD/MM/YYYY",LL:"D MMMM YYYY",LLL:"D MMMM YYYY HH:mm",LLLL:"dddd D MMMM YYYY HH:mm"},calendar:{sameDay:"[اليوم على الساعة] LT",nextDay:"[غدا على الساعة] LT",nextWeek:"dddd [على الساعة] LT",lastDay:"[أمس على الساعة] LT",lastWeek:"dddd [على الساعة] LT",sameElse:"L"},relativeTime:{future:"في %s",past:"منذ %s",s:"ثوان",ss:"%d ثانية",m:"دقيقة",mm:"%d دقائق",h:"ساعة",hh:"%d ساعات",d:"يوم",dd:"%d أيام",M:"شهر",MM:"%d أشهر",y:"سنة",yy:"%d سنوات"},week:{dow:1,doy:4}});return e}))},6040:function(t,e,n){(function(t,e){e(n(381))})(0,(function(t){"use strict";
//! moment.js locale configuration
var e={1:"١",2:"٢",3:"٣",4:"٤",5:"٥",6:"٦",7:"٧",8:"٨",9:"٩",0:"٠"},n={"١":"1","٢":"2","٣":"3","٤":"4","٥":"5","٦":"6","٧":"7","٨":"8","٩":"9","٠":"0"},a=t.defineLocale("ar-sa",{months:"يناير_فبراير_مارس_أبريل_مايو_يونيو_يوليو_أغسطس_سبتمبر_أكتوبر_نوفمبر_ديسمبر".split("_"),monthsShort:"يناير_فبراير_مارس_أبريل_مايو_يونيو_يوليو_أغسطس_سبتمبر_أكتوبر_نوفمبر_ديسمبر".split("_"),weekdays:"الأحد_الإثنين_الثلاثاء_الأربعاء_الخميس_الجمعة_السبت".split("_"),weekdaysShort:"أحد_إثنين_ثلاثاء_أربعاء_خميس_جمعة_سبت".split("_"),weekdaysMin:"ح_ن_ث_ر_خ_ج_س".split("_"),weekdaysParseExact:!0,longDateFormat:{LT:"HH:mm",LTS:"HH:mm:ss",L:"DD/MM/YYYY",LL:"D MMMM YYYY",LLL:"D MMMM YYYY HH:mm",LLLL:"dddd D MMMM YYYY HH:mm"},meridiemParse:/ص|م/,isPM:function(t){return"م"===t},meridiem:function(t,e,n){return t<12?"ص":"م"},calendar:{sameDay:"[اليوم على الساعة] LT",nextDay:"[غدا على الساعة] LT",nextWeek:"dddd [على الساعة] LT",lastDay:"[أمس على الساعة] LT",lastWeek:"dddd [على الساعة] LT",sameElse:"L"},relativeTime:{future:"في %s",past:"منذ %s",s:"ثوان",ss:"%d ثانية",m:"دقيقة",mm:"%d دقائق",h:"ساعة",hh:"%d ساعات",d:"يوم",dd:"%d أيام",M:"شهر",MM:"%d أشهر",y:"سنة",yy:"%d سنوات"},preparse:function(t){return t.replace(/[١٢٣٤٥٦٧٨٩٠]/g,(function(t){return n[t]})).replace(/،/g,",")},postformat:function(t){return t.replace(/\d/g,(function(t){return e[t]})).replace(/,/g,"،")},week:{dow:0,doy:6}});return a}))},7100:function(t,e,n){(function(t,e){e(n(381))})(0,(function(t){"use strict";
//! moment.js locale configuration
var e=t.defineLocale("ar-tn",{months:"جانفي_فيفري_مارس_أفريل_ماي_جوان_جويلية_أوت_سبتمبر_أكتوبر_نوفمبر_ديسمبر".split("_"),monthsShort:"جانفي_فيفري_مارس_أفريل_ماي_جوان_جويلية_أوت_سبتمبر_أكتوبر_نوفمبر_ديسمبر".split("_"),weekdays:"الأحد_الإثنين_الثلاثاء_الأربعاء_الخميس_الجمعة_السبت".split("_"),weekdaysShort:"أحد_إثنين_ثلاثاء_أربعاء_خميس_جمعة_سبت".split("_"),weekdaysMin:"ح_ن_ث_ر_خ_ج_س".split("_"),weekdaysParseExact:!0,longDateFormat:{LT:"HH:mm",LTS:"HH:mm:ss",L:"DD/MM/YYYY",LL:"D MMMM YYYY",LLL:"D MMMM YYYY HH:mm",LLLL:"dddd D MMMM YYYY HH:mm"},calendar:{sameDay:"[اليوم على الساعة] LT",nextDay:"[غدا على الساعة] LT",nextWeek:"dddd [على الساعة] LT",lastDay:"[أمس على الساعة] LT",lastWeek:"dddd [على الساعة] LT",sameElse:"L"},relativeTime:{future:"في %s",past:"منذ %s",s:"ثوان",ss:"%d ثانية",m:"دقيقة",mm:"%d دقائق",h:"ساعة",hh:"%d ساعات",d:"يوم",dd:"%d أيام",M:"شهر",MM:"%d أشهر",y:"سنة",yy:"%d سنوات"},week:{dow:1,doy:4}});return e}))},867:function(t,e,n){(function(t,e){e(n(381))})(0,(function(t){"use strict";
//! moment.js locale configuration
var e={1:"١",2:"٢",3:"٣",4:"٤",5:"٥",6:"٦",7:"٧",8:"٨",9:"٩",0:"٠"},n={"١":"1","٢":"2","٣":"3","٤":"4","٥":"5","٦":"6","٧":"7","٨":"8","٩":"9","٠":"0"},a=function(t){return 0===t?0:1===t?1:2===t?2:t%100>=3&&t%100<=10?3:t%100>=11?4:5},r={s:["أقل من ثانية","ثانية واحدة",["ثانيتان","ثانيتين"],"%d ثوان","%d ثانية","%d ثانية"],m:["أقل من دقيقة","دقيقة واحدة",["دقيقتان","دقيقتين"],"%d دقائق","%d دقيقة","%d دقيقة"],h:["أقل من ساعة","ساعة واحدة",["ساعتان","ساعتين"],"%d ساعات","%d ساعة","%d ساعة"],d:["أقل من يوم","يوم واحد",["يومان","يومين"],"%d أيام","%d يومًا","%d يوم"],M:["أقل من شهر","شهر واحد",["شهران","شهرين"],"%d أشهر","%d شهرا","%d شهر"],y:["أقل من عام","عام واحد",["عامان","عامين"],"%d أعوام","%d عامًا","%d عام"]},i=function(t){return function(e,n,i,o){var s=a(e),l=r[t][a(e)];return 2===s&&(l=l[n?0:1]),l.replace(/%d/i,e)}},o=["يناير","فبراير","مارس","أبريل","مايو","يونيو","يوليو","أغسطس","سبتمبر","أكتوبر","نوفمبر","ديسمبر"],s=t.defineLocale("ar",{months:o,monthsShort:o,weekdays:"الأحد_الإثنين_الثلاثاء_الأربعاء_الخميس_الجمعة_السبت".split("_"),weekdaysShort:"أحد_إثنين_ثلاثاء_أربعاء_خميس_جمعة_سبت".split("_"),weekdaysMin:"ح_ن_ث_ر_خ_ج_س".split("_"),weekdaysParseExact:!0,longDateFormat:{LT:"HH:mm",LTS:"HH:mm:ss",L:"D/‏M/‏YYYY",LL:"D MMMM YYYY",LLL:"D MMMM YYYY HH:mm",LLLL:"dddd D MMMM YYYY HH:mm"},meridiemParse:/ص|م/,isPM:function(t){return"م"===t},meridiem:function(t,e,n){return t<12?"ص":"م"},calendar:{sameDay:"[اليوم عند الساعة] LT",nextDay:"[غدًا عند الساعة] LT",nextWeek:"dddd [عند الساعة] LT",lastDay:"[أمس عند الساعة] LT",lastWeek:"dddd [عند الساعة] LT",sameElse:"L"},relativeTime:{future:"بعد %s",past:"منذ %s",s:i("s"),ss:i("s"),m:i("m"),mm:i("m"),h:i("h"),hh:i("h"),d:i("d"),dd:i("d"),M:i("M"),MM:i("M"),y:i("y"),yy:i("y")},preparse:function(t){return t.replace(/[١٢٣٤٥٦٧٨٩٠]/g,(function(t){return n[t]})).replace(/،/g,",")},postformat:function(t){return t.replace(/\d/g,(function(t){return e[t]})).replace(/,/g,"،")},week:{dow:6,doy:12}});return s}))},1083:function(t,e,n){(function(t,e){e(n(381))})(0,(function(t){"use strict";
//! moment.js locale configuration
var e={1:"-inci",5:"-inci",8:"-inci",70:"-inci",80:"-inci",2:"-nci",7:"-nci",20:"-nci",50:"-nci",3:"-üncü",4:"-üncü",100:"-üncü",6:"-ncı",9:"-uncu",10:"-uncu",30:"-uncu",60:"-ıncı",90:"-ıncı"},n=t.defineLocale("az",{months:"yanvar_fevral_mart_aprel_may_iyun_iyul_avqust_sentyabr_oktyabr_noyabr_dekabr".split("_"),monthsShort:"yan_fev_mar_apr_may_iyn_iyl_avq_sen_okt_noy_dek".split("_"),weekdays:"Bazar_Bazar ertəsi_Çərşənbə axşamı_Çərşənbə_Cümə axşamı_Cümə_Şənbə".split("_"),weekdaysShort:"Baz_BzE_ÇAx_Çər_CAx_Cüm_Şən".split("_"),weekdaysMin:"Bz_BE_ÇA_Çə_CA_Cü_Şə".split("_"),weekdaysParseExact:!0,longDateFormat:{LT:"HH:mm",LTS:"HH:mm:ss",L:"DD.MM.YYYY",LL:"D MMMM YYYY",LLL:"D MMMM YYYY HH:mm",LLLL:"dddd, D MMMM YYYY HH:mm"},calendar:{sameDay:"[bugün saat] LT",nextDay:"[sabah saat] LT",nextWeek:"[gələn həftə] dddd [saat] LT",lastDay:"[dünən] LT",lastWeek:"[keçən həftə] dddd [saat] LT",sameElse:"L"},relativeTime:{future:"%s sonra",past:"%s əvvəl",s:"bir neçə saniyə",ss:"%d saniyə",m:"bir dəqiqə",mm:"%d dəqiqə",h:"bir saat",hh:"%d saat",d:"bir gün",dd:"%d gün",M:"bir ay",MM:"%d ay",y:"bir il",yy:"%d il"},meridiemParse:/gecə|səhər|gündüz|axşam/,isPM:function(t){return/^(gündüz|axşam)$/.test(t)},meridiem:function(t,e,n){return t<4?"gecə":t<12?"səhər":t<17?"gündüz":"axşam"},dayOfMonthOrdinalParse:/\d{1,2}-(ıncı|inci|nci|üncü|ncı|uncu)/,ordinal:function(t){if(0===t)return t+"-ıncı";var n=t%10,a=t%100-n,r=t>=100?100:null;return t+(e[n]||e[a]||e[r])},week:{dow:1,doy:7}});return n}))},9808:function(t,e,n){(function(t,e){e(n(381))})(0,(function(t){"use strict";
//! moment.js locale configuration
function e(t,e){var n=t.split("_");return e%10===1&&e%100!==11?n[0]:e%10>=2&&e%10<=4&&(e%100<10||e%100>=20)?n[1]:n[2]}function n(t,n,a){var r={ss:n?"секунда_секунды_секунд":"секунду_секунды_секунд",mm:n?"хвіліна_хвіліны_хвілін":"хвіліну_хвіліны_хвілін",hh:n?"гадзіна_гадзіны_гадзін":"гадзіну_гадзіны_гадзін",dd:"дзень_дні_дзён",MM:"месяц_месяцы_месяцаў",yy:"год_гады_гадоў"};return"m"===a?n?"хвіліна":"хвіліну":"h"===a?n?"гадзіна":"гадзіну":t+" "+e(r[a],+t)}var a=t.defineLocale("be",{months:{format:"студзеня_лютага_сакавіка_красавіка_траўня_чэрвеня_ліпеня_жніўня_верасня_кастрычніка_лістапада_снежня".split("_"),standalone:"студзень_люты_сакавік_красавік_травень_чэрвень_ліпень_жнівень_верасень_кастрычнік_лістапад_снежань".split("_")},monthsShort:"студ_лют_сак_крас_трав_чэрв_ліп_жнів_вер_каст_ліст_снеж".split("_"),weekdays:{format:"нядзелю_панядзелак_аўторак_сераду_чацвер_пятніцу_суботу".split("_"),standalone:"нядзеля_панядзелак_аўторак_серада_чацвер_пятніца_субота".split("_"),isFormat:/\[ ?[Ууў] ?(?:мінулую|наступную)? ?\] ?dddd/},weekdaysShort:"нд_пн_ат_ср_чц_пт_сб".split("_"),weekdaysMin:"нд_пн_ат_ср_чц_пт_сб".split("_"),longDateFormat:{LT:"HH:mm",LTS:"HH:mm:ss",L:"DD.MM.YYYY",LL:"D MMMM YYYY г.",LLL:"D MMMM YYYY г., HH:mm",LLLL:"dddd, D MMMM YYYY г., HH:mm"},calendar:{sameDay:"[Сёння ў] LT",nextDay:"[Заўтра ў] LT",lastDay:"[Учора ў] LT",nextWeek:function(){return"[У] dddd [ў] LT"},lastWeek:function(){switch(this.day()){case 0:case 3:case 5:case 6:return"[У мінулую] dddd [ў] LT";case 1:case 2:case 4:return"[У мінулы] dddd [ў] LT"}},sameElse:"L"},relativeTime:{future:"праз %s",past:"%s таму",s:"некалькі секунд",m:n,mm:n,h:n,hh:n,d:"дзень",dd:n,M:"месяц",MM:n,y:"год",yy:n},meridiemParse:/ночы|раніцы|дня|вечара/,isPM:function(t){return/^(дня|вечара)$/.test(t)},meridiem:function(t,e,n){return t<4?"ночы":t<12?"раніцы":t<17?"дня":"вечара"},dayOfMonthOrdinalParse:/\d{1,2}-(і|ы|га)/,ordinal:function(t,e){switch(e){case"M":case"d":case"DDD":case"w":case"W":return t%10!==2&&t%10!==3||t%100===12||t%100===13?t+"-ы":t+"-і";case"D":return t+"-га";default:return t}},week:{dow:1,doy:7}});return a}))},8338:function(t,e,n){(function(t,e){e(n(381))})(0,(function(t){"use strict";
//! moment.js locale configuration
var e=t.defineLocale("bg",{months:"януари_февруари_март_април_май_юни_юли_август_септември_октомври_ноември_декември".split("_"),monthsShort:"яну_фев_мар_апр_май_юни_юли_авг_сеп_окт_ное_дек".split("_"),weekdays:"неделя_понеделник_вторник_сряда_четвъртък_петък_събота".split("_"),weekdaysShort:"нед_пон_вто_сря_чет_пет_съб".split("_"),weekdaysMin:"нд_пн_вт_ср_чт_пт_сб".split("_"),longDateFormat:{LT:"H:mm",LTS:"H:mm:ss",L:"D.MM.YYYY",LL:"D MMMM YYYY",LLL:"D MMMM YYYY H:mm",LLLL:"dddd, D MMMM YYYY H:mm"},calendar:{sameDay:"[Днес в] LT",nextDay:"[Утре в] LT",nextWeek:"dddd [в] LT",lastDay:"[Вчера в] LT",lastWeek:function(){switch(this.day()){case 0:case 3:case 6:return"[Миналата] dddd [в] LT";case 1:case 2:case 4:case 5:return"[Миналия] dddd [в] LT"}},sameElse:"L"},relativeTime:{future:"след %s",past:"преди %s",s:"няколко секунди",ss:"%d секунди",m:"минута",mm:"%d минути",h:"час",hh:"%d часа",d:"ден",dd:"%d дена",w:"седмица",ww:"%d седмици",M:"месец",MM:"%d месеца",y:"година",yy:"%d години"},dayOfMonthOrdinalParse:/\d{1,2}-(ев|ен|ти|ви|ри|ми)/,ordinal:function(t){var e=t%10,n=t%100;return 0===t?t+"-ев":0===n?t+"-ен":n>10&&n<20?t+"-ти":1===e?t+"-ви":2===e?t+"-ри":7===e||8===e?t+"-ми":t+"-ти"},week:{dow:1,doy:7}});return e}))},7438:function(t,e,n){(function(t,e){e(n(381))})(0,(function(t){"use strict";
//! moment.js locale configuration
var e=t.defineLocale("bm",{months:"Zanwuyekalo_Fewuruyekalo_Marisikalo_Awirilikalo_Mɛkalo_Zuwɛnkalo_Zuluyekalo_Utikalo_Sɛtanburukalo_ɔkutɔburukalo_Nowanburukalo_Desanburukalo".split("_"),monthsShort:"Zan_Few_Mar_Awi_Mɛ_Zuw_Zul_Uti_Sɛt_ɔku_Now_Des".split("_"),weekdays:"Kari_Ntɛnɛn_Tarata_Araba_Alamisa_Juma_Sibiri".split("_"),weekdaysShort:"Kar_Ntɛ_Tar_Ara_Ala_Jum_Sib".split("_"),weekdaysMin:"Ka_Nt_Ta_Ar_Al_Ju_Si".split("_"),longDateFormat:{LT:"HH:mm",LTS:"HH:mm:ss",L:"DD/MM/YYYY",LL:"MMMM [tile] D [san] YYYY",LLL:"MMMM [tile] D [san] YYYY [lɛrɛ] HH:mm",LLLL:"dddd MMMM [tile] D [san] YYYY [lɛrɛ] HH:mm"},calendar:{sameDay:"[Bi lɛrɛ] LT",nextDay:"[Sini lɛrɛ] LT",nextWeek:"dddd [don lɛrɛ] LT",lastDay:"[Kunu lɛrɛ] LT",lastWeek:"dddd [tɛmɛnen lɛrɛ] LT",sameElse:"L"},relativeTime:{future:"%s kɔnɔ",past:"a bɛ %s bɔ",s:"sanga dama dama",ss:"sekondi %d",m:"miniti kelen",mm:"miniti %d",h:"lɛrɛ kelen",hh:"lɛrɛ %d",d:"tile kelen",dd:"tile %d",M:"kalo kelen",MM:"kalo %d",y:"san kelen",yy:"san %d"},week:{dow:1,doy:4}});return e}))},6225:function(t,e,n){(function(t,e){e(n(381))})(0,(function(t){"use strict";
//! moment.js locale configuration
var e={1:"১",2:"২",3:"৩",4:"৪",5:"৫",6:"৬",7:"৭",8:"৮",9:"৯",0:"০"},n={"১":"1","২":"2","৩":"3","৪":"4","৫":"5","৬":"6","৭":"7","৮":"8","৯":"9","০":"0"},a=t.defineLocale("bn-bd",{months:"জানুয়ারি_ফেব্রুয়ারি_মার্চ_এপ্রিল_মে_জুন_জুলাই_আগস্ট_সেপ্টেম্বর_অক্টোবর_নভেম্বর_ডিসেম্বর".split("_"),monthsShort:"জানু_ফেব্রু_মার্চ_এপ্রিল_মে_জুন_জুলাই_আগস্ট_সেপ্ট_অক্টো_নভে_ডিসে".split("_"),weekdays:"রবিবার_সোমবার_মঙ্গলবার_বুধবার_বৃহস্পতিবার_শুক্রবার_শনিবার".split("_"),weekdaysShort:"রবি_সোম_মঙ্গল_বুধ_বৃহস্পতি_শুক্র_শনি".split("_"),weekdaysMin:"রবি_সোম_মঙ্গল_বুধ_বৃহ_শুক্র_শনি".split("_"),longDateFormat:{LT:"A h:mm সময়",LTS:"A h:mm:ss সময়",L:"DD/MM/YYYY",LL:"D MMMM YYYY",LLL:"D MMMM YYYY, A h:mm সময়",LLLL:"dddd, D MMMM YYYY, A h:mm সময়"},calendar:{sameDay:"[আজ] LT",nextDay:"[আগামীকাল] LT",nextWeek:"dddd, LT",lastDay:"[গতকাল] LT",lastWeek:"[গত] dddd, LT",sameElse:"L"},relativeTime:{future:"%s পরে",past:"%s আগে",s:"কয়েক সেকেন্ড",ss:"%d সেকেন্ড",m:"এক মিনিট",mm:"%d মিনিট",h:"এক ঘন্টা",hh:"%d ঘন্টা",d:"এক দিন",dd:"%d দিন",M:"এক মাস",MM:"%d মাস",y:"এক বছর",yy:"%d বছর"},preparse:function(t){return t.replace(/[১২৩৪৫৬৭৮৯০]/g,(function(t){return n[t]}))},postformat:function(t){return t.replace(/\d/g,(function(t){return e[t]}))},meridiemParse:/রাত|ভোর|সকাল|দুপুর|বিকাল|সন্ধ্যা|রাত/,meridiemHour:function(t,e){return 12===t&&(t=0),"রাত"===e?t<4?t:t+12:"ভোর"===e||"সকাল"===e?t:"দুপুর"===e?t>=3?t:t+12:"বিকাল"===e||"সন্ধ্যা"===e?t+12:void 0},meridiem:function(t,e,n){return t<4?"রাত":t<6?"ভোর":t<12?"সকাল":t<15?"দুপুর":t<18?"বিকাল":t<20?"সন্ধ্যা":"রাত"},week:{dow:0,doy:6}});return a}))},8905:function(t,e,n){(function(t,e){e(n(381))})(0,(function(t){"use strict";
//! moment.js locale configuration
var e={1:"১",2:"২",3:"৩",4:"৪",5:"৫",6:"৬",7:"৭",8:"৮",9:"৯",0:"০"},n={"১":"1","২":"2","৩":"3","৪":"4","৫":"5","৬":"6","৭":"7","৮":"8","৯":"9","০":"0"},a=t.defineLocale("bn",{months:"জানুয়ারি_ফেব্রুয়ারি_মার্চ_এপ্রিল_মে_জুন_জুলাই_আগস্ট_সেপ্টেম্বর_অক্টোবর_নভেম্বর_ডিসেম্বর".split("_"),monthsShort:"জানু_ফেব্রু_মার্চ_এপ্রিল_মে_জুন_জুলাই_আগস্ট_সেপ্ট_অক্টো_নভে_ডিসে".split("_"),weekdays:"রবিবার_সোমবার_মঙ্গলবার_বুধবার_বৃহস্পতিবার_শুক্রবার_শনিবার".split("_"),weekdaysShort:"রবি_সোম_মঙ্গল_বুধ_বৃহস্পতি_শুক্র_শনি".split("_"),weekdaysMin:"রবি_সোম_মঙ্গল_বুধ_বৃহ_শুক্র_শনি".split("_"),longDateFormat:{LT:"A h:mm সময়",LTS:"A h:mm:ss সময়",L:"DD/MM/YYYY",LL:"D MMMM YYYY",LLL:"D MMMM YYYY, A h:mm সময়",LLLL:"dddd, D MMMM YYYY, A h:mm সময়"},calendar:{sameDay:"[আজ] LT",nextDay:"[আগামীকাল] LT",nextWeek:"dddd, LT",lastDay:"[গতকাল] LT",lastWeek:"[গত] dddd, LT",sameElse:"L"},relativeTime:{future:"%s পরে",past:"%s আগে",s:"কয়েক সেকেন্ড",ss:"%d সেকেন্ড",m:"এক মিনিট",mm:"%d মিনিট",h:"এক ঘন্টা",hh:"%d ঘন্টা",d:"এক দিন",dd:"%d দিন",M:"এক মাস",MM:"%d মাস",y:"এক বছর",yy:"%d বছর"},preparse:function(t){return t.replace(/[১২৩৪৫৬৭৮৯০]/g,(function(t){return n[t]}))},postformat:function(t){return t.replace(/\d/g,(function(t){return e[t]}))},meridiemParse:/রাত|সকাল|দুপুর|বিকাল|রাত/,meridiemHour:function(t,e){return 12===t&&(t=0),"রাত"===e&&t>=4||"দুপুর"===e&&t<5||"বিকাল"===e?t+12:t},meridiem:function(t,e,n){return t<4?"রাত":t<10?"সকাল":t<17?"দুপুর":t<20?"বিকাল":"রাত"},week:{dow:0,doy:6}});return a}))},1560:function(t,e,n){(function(t,e){e(n(381))})(0,(function(t){"use strict";
//! moment.js locale configuration
var e={1:"༡",2:"༢",3:"༣",4:"༤",5:"༥",6:"༦",7:"༧",8:"༨",9:"༩",0:"༠"},n={"༡":"1","༢":"2","༣":"3","༤":"4","༥":"5","༦":"6","༧":"7","༨":"8","༩":"9","༠":"0"},a=t.defineLocale("bo",{months:"ཟླ་བ་དང་པོ_ཟླ་བ་གཉིས་པ_ཟླ་བ་གསུམ་པ_ཟླ་བ་བཞི་པ_ཟླ་བ་ལྔ་པ_ཟླ་བ་དྲུག་པ_ཟླ་བ་བདུན་པ_ཟླ་བ་བརྒྱད་པ_ཟླ་བ་དགུ་པ_ཟླ་བ་བཅུ་པ_ཟླ་བ་བཅུ་གཅིག་པ_ཟླ་བ་བཅུ་གཉིས་པ".split("_"),monthsShort:"ཟླ་1_ཟླ་2_ཟླ་3_ཟླ་4_ཟླ་5_ཟླ་6_ཟླ་7_ཟླ་8_ཟླ་9_ཟླ་10_ཟླ་11_ཟླ་12".split("_"),monthsShortRegex:/^(ཟླ་\d{1,2})/,monthsParseExact:!0,weekdays:"གཟའ་ཉི་མ་_གཟའ་ཟླ་བ་_གཟའ་མིག་དམར་_གཟའ་ལྷག་པ་_གཟའ་ཕུར་བུ_གཟའ་པ་སངས་_གཟའ་སྤེན་པ་".split("_"),weekdaysShort:"ཉི་མ་_ཟླ་བ་_མིག་དམར་_ལྷག་པ་_ཕུར་བུ_པ་སངས་_སྤེན་པ་".split("_"),weekdaysMin:"ཉི_ཟླ_མིག_ལྷག_ཕུར_སངས_སྤེན".split("_"),longDateFormat:{LT:"A h:mm",LTS:"A h:mm:ss",L:"DD/MM/YYYY",LL:"D MMMM YYYY",LLL:"D MMMM YYYY, A h:mm",LLLL:"dddd, D MMMM YYYY, A h:mm"},calendar:{sameDay:"[དི་རིང] LT",nextDay:"[སང་ཉིན] LT",nextWeek:"[བདུན་ཕྲག་རྗེས་མ], LT",lastDay:"[ཁ་སང] LT",lastWeek:"[བདུན་ཕྲག་མཐའ་མ] dddd, LT",sameElse:"L"},relativeTime:{future:"%s ལ་",past:"%s སྔན་ལ",s:"ལམ་སང",ss:"%d སྐར་ཆ།",m:"སྐར་མ་གཅིག",mm:"%d སྐར་མ",h:"ཆུ་ཚོད་གཅིག",hh:"%d ཆུ་ཚོད",d:"ཉིན་གཅིག",dd:"%d ཉིན་",M:"ཟླ་བ་གཅིག",MM:"%d ཟླ་བ",y:"ལོ་གཅིག",yy:"%d ལོ"},preparse:function(t){return t.replace(/[༡༢༣༤༥༦༧༨༩༠]/g,(function(t){return n[t]}))},postformat:function(t){return t.replace(/\d/g,(function(t){return e[t]}))},meridiemParse:/མཚན་མོ|ཞོགས་ཀས|ཉིན་གུང|དགོང་དག|མཚན་མོ/,meridiemHour:function(t,e){return 12===t&&(t=0),"མཚན་མོ"===e&&t>=4||"ཉིན་གུང"===e&&t<5||"དགོང་དག"===e?t+12:t},meridiem:function(t,e,n){return t<4?"མཚན་མོ":t<10?"ཞོགས་ཀས":t<17?"ཉིན་གུང":t<20?"དགོང་དག":"མཚན་མོ"},week:{dow:0,doy:6}});return a}))},1278:function(t,e,n){(function(t,e){e(n(381))})(0,(function(t){"use strict";
//! moment.js locale configuration
function e(t,e,n){var a={mm:"munutenn",MM:"miz",dd:"devezh"};return t+" "+r(a[n],t)}function n(t){switch(a(t)){case 1:case 3:case 4:case 5:case 9:return t+" bloaz";default:return t+" vloaz"}}function a(t){return t>9?a(t%10):t}function r(t,e){return 2===e?i(t):t}function i(t){var e={m:"v",b:"v",d:"z"};return void 0===e[t.charAt(0)]?t:e[t.charAt(0)]+t.substring(1)}var o=[/^gen/i,/^c[ʼ\']hwe/i,/^meu/i,/^ebr/i,/^mae/i,/^(mez|eve)/i,/^gou/i,/^eos/i,/^gwe/i,/^her/i,/^du/i,/^ker/i],s=/^(genver|c[ʼ\']hwevrer|meurzh|ebrel|mae|mezheven|gouere|eost|gwengolo|here|du|kerzu|gen|c[ʼ\']hwe|meu|ebr|mae|eve|gou|eos|gwe|her|du|ker)/i,l=/^(genver|c[ʼ\']hwevrer|meurzh|ebrel|mae|mezheven|gouere|eost|gwengolo|here|du|kerzu)/i,c=/^(gen|c[ʼ\']hwe|meu|ebr|mae|eve|gou|eos|gwe|her|du|ker)/i,u=[/^sul/i,/^lun/i,/^meurzh/i,/^merc[ʼ\']her/i,/^yaou/i,/^gwener/i,/^sadorn/i],h=[/^Sul/i,/^Lun/i,/^Meu/i,/^Mer/i,/^Yao/i,/^Gwe/i,/^Sad/i],d=[/^Su/i,/^Lu/i,/^Me([^r]|$)/i,/^Mer/i,/^Ya/i,/^Gw/i,/^Sa/i],f=t.defineLocale("br",{months:"Genver_Cʼhwevrer_Meurzh_Ebrel_Mae_Mezheven_Gouere_Eost_Gwengolo_Here_Du_Kerzu".split("_"),monthsShort:"Gen_Cʼhwe_Meu_Ebr_Mae_Eve_Gou_Eos_Gwe_Her_Du_Ker".split("_"),weekdays:"Sul_Lun_Meurzh_Mercʼher_Yaou_Gwener_Sadorn".split("_"),weekdaysShort:"Sul_Lun_Meu_Mer_Yao_Gwe_Sad".split("_"),weekdaysMin:"Su_Lu_Me_Mer_Ya_Gw_Sa".split("_"),weekdaysParse:d,fullWeekdaysParse:u,shortWeekdaysParse:h,minWeekdaysParse:d,monthsRegex:s,monthsShortRegex:s,monthsStrictRegex:l,monthsShortStrictRegex:c,monthsParse:o,longMonthsParse:o,shortMonthsParse:o,longDateFormat:{LT:"HH:mm",LTS:"HH:mm:ss",L:"DD/MM/YYYY",LL:"D [a viz] MMMM YYYY",LLL:"D [a viz] MMMM YYYY HH:mm",LLLL:"dddd, D [a viz] MMMM YYYY HH:mm"},calendar:{sameDay:"[Hiziv da] LT",nextDay:"[Warcʼhoazh da] LT",nextWeek:"dddd [da] LT",lastDay:"[Decʼh da] LT",lastWeek:"dddd [paset da] LT",sameElse:"L"},relativeTime:{future:"a-benn %s",past:"%s ʼzo",s:"un nebeud segondennoù",ss:"%d eilenn",m:"ur vunutenn",mm:e,h:"un eur",hh:"%d eur",d:"un devezh",dd:e,M:"ur miz",MM:e,y:"ur bloaz",yy:n},dayOfMonthOrdinalParse:/\d{1,2}(añ|vet)/,ordinal:function(t){var e=1===t?"añ":"vet";return t+e},week:{dow:1,doy:4},meridiemParse:/a.m.|g.m./,isPM:function(t){return"g.m."===t},meridiem:function(t,e,n){return t<12?"a.m.":"g.m."}});return f}))},622:function(t,e,n){(function(t,e){e(n(381))})(0,(function(t){"use strict";
//! moment.js locale configuration
function e(t,e,n){var a=t+" ";switch(n){case"ss":return a+=1===t?"sekunda":2===t||3===t||4===t?"sekunde":"sekundi",a;case"m":return e?"jedna minuta":"jedne minute";case"mm":return a+=1===t?"minuta":2===t||3===t||4===t?"minute":"minuta",a;case"h":return e?"jedan sat":"jednog sata";case"hh":return a+=1===t?"sat":2===t||3===t||4===t?"sata":"sati",a;case"dd":return a+=1===t?"dan":"dana",a;case"MM":return a+=1===t?"mjesec":2===t||3===t||4===t?"mjeseca":"mjeseci",a;case"yy":return a+=1===t?"godina":2===t||3===t||4===t?"godine":"godina",a}}var n=t.defineLocale("bs",{months:"januar_februar_mart_april_maj_juni_juli_august_septembar_oktobar_novembar_decembar".split("_"),monthsShort:"jan._feb._mar._apr._maj._jun._jul._aug._sep._okt._nov._dec.".split("_"),monthsParseExact:!0,weekdays:"nedjelja_ponedjeljak_utorak_srijeda_četvrtak_petak_subota".split("_"),weekdaysShort:"ned._pon._uto._sri._čet._pet._sub.".split("_"),weekdaysMin:"ne_po_ut_sr_če_pe_su".split("_"),weekdaysParseExact:!0,longDateFormat:{LT:"H:mm",LTS:"H:mm:ss",L:"DD.MM.YYYY",LL:"D. MMMM YYYY",LLL:"D. MMMM YYYY H:mm",LLLL:"dddd, D. MMMM YYYY H:mm"},calendar:{sameDay:"[danas u] LT",nextDay:"[sutra u] LT",nextWeek:function(){switch(this.day()){case 0:return"[u] [nedjelju] [u] LT";case 3:return"[u] [srijedu] [u] LT";case 6:return"[u] [subotu] [u] LT";case 1:case 2:case 4:case 5:return"[u] dddd [u] LT"}},lastDay:"[jučer u] LT",lastWeek:function(){switch(this.day()){case 0:case 3:return"[prošlu] dddd [u] LT";case 6:return"[prošle] [subote] [u] LT";case 1:case 2:case 4:case 5:return"[prošli] dddd [u] LT"}},sameElse:"L"},relativeTime:{future:"za %s",past:"prije %s",s:"par sekundi",ss:e,m:e,mm:e,h:e,hh:e,d:"dan",dd:e,M:"mjesec",MM:e,y:"godinu",yy:e},dayOfMonthOrdinalParse:/\d{1,2}\./,ordinal:"%d.",week:{dow:1,doy:7}});return n}))},2468:function(t,e,n){(function(t,e){e(n(381))})(0,(function(t){"use strict";
//! moment.js locale configuration
var e=t.defineLocale("ca",{months:{standalone:"gener_febrer_març_abril_maig_juny_juliol_agost_setembre_octubre_novembre_desembre".split("_"),format:"de gener_de febrer_de març_d'abril_de maig_de juny_de juliol_d'agost_de setembre_d'octubre_de novembre_de desembre".split("_"),isFormat:/D[oD]?(\s)+MMMM/},monthsShort:"gen._febr._març_abr._maig_juny_jul._ag._set._oct._nov._des.".split("_"),monthsParseExact:!0,weekdays:"diumenge_dilluns_dimarts_dimecres_dijous_divendres_dissabte".split("_"),weekdaysShort:"dg._dl._dt._dc._dj._dv._ds.".split("_"),weekdaysMin:"dg_dl_dt_dc_dj_dv_ds".split("_"),weekdaysParseExact:!0,longDateFormat:{LT:"H:mm",LTS:"H:mm:ss",L:"DD/MM/YYYY",LL:"D MMMM [de] YYYY",ll:"D MMM YYYY",LLL:"D MMMM [de] YYYY [a les] H:mm",lll:"D MMM YYYY, H:mm",LLLL:"dddd D MMMM [de] YYYY [a les] H:mm",llll:"ddd D MMM YYYY, H:mm"},calendar:{sameDay:function(){return"[avui a "+(1!==this.hours()?"les":"la")+"] LT"},nextDay:function(){return"[demà a "+(1!==this.hours()?"les":"la")+"] LT"},nextWeek:function(){return"dddd [a "+(1!==this.hours()?"les":"la")+"] LT"},lastDay:function(){return"[ahir a "+(1!==this.hours()?"les":"la")+"] LT"},lastWeek:function(){return"[el] dddd [passat a "+(1!==this.hours()?"les":"la")+"] LT"},sameElse:"L"},relativeTime:{future:"d'aquí %s",past:"fa %s",s:"uns segons",ss:"%d segons",m:"un minut",mm:"%d minuts",h:"una hora",hh:"%d hores",d:"un dia",dd:"%d dies",M:"un mes",MM:"%d mesos",y:"un any",yy:"%d anys"},dayOfMonthOrdinalParse:/\d{1,2}(r|n|t|è|a)/,ordinal:function(t,e){var n=1===t?"r":2===t?"n":3===t?"r":4===t?"t":"è";return"w"!==e&&"W"!==e||(n="a"),t+n},week:{dow:1,doy:4}});return e}))},5822:function(t,e,n){(function(t,e){e(n(381))})(0,(function(t){"use strict";
//! moment.js locale configuration
var e={format:"leden_únor_březen_duben_květen_červen_červenec_srpen_září_říjen_listopad_prosinec".split("_"),standalone:"ledna_února_března_dubna_května_června_července_srpna_září_října_listopadu_prosince".split("_")},n="led_úno_bře_dub_kvě_čvn_čvc_srp_zář_říj_lis_pro".split("_"),a=[/^led/i,/^úno/i,/^bře/i,/^dub/i,/^kvě/i,/^(čvn|červen$|června)/i,/^(čvc|červenec|července)/i,/^srp/i,/^zář/i,/^říj/i,/^lis/i,/^pro/i],r=/^(leden|únor|březen|duben|květen|červenec|července|červen|června|srpen|září|říjen|listopad|prosinec|led|úno|bře|dub|kvě|čvn|čvc|srp|zář|říj|lis|pro)/i;function i(t){return t>1&&t<5&&1!==~~(t/10)}function o(t,e,n,a){var r=t+" ";switch(n){case"s":return e||a?"pár sekund":"pár sekundami";case"ss":return e||a?r+(i(t)?"sekundy":"sekund"):r+"sekundami";case"m":return e?"minuta":a?"minutu":"minutou";case"mm":return e||a?r+(i(t)?"minuty":"minut"):r+"minutami";case"h":return e?"hodina":a?"hodinu":"hodinou";case"hh":return e||a?r+(i(t)?"hodiny":"hodin"):r+"hodinami";case"d":return e||a?"den":"dnem";case"dd":return e||a?r+(i(t)?"dny":"dní"):r+"dny";case"M":return e||a?"měsíc":"měsícem";case"MM":return e||a?r+(i(t)?"měsíce":"měsíců"):r+"měsíci";case"y":return e||a?"rok":"rokem";case"yy":return e||a?r+(i(t)?"roky":"let"):r+"lety"}}var s=t.defineLocale("cs",{months:e,monthsShort:n,monthsRegex:r,monthsShortRegex:r,monthsStrictRegex:/^(leden|ledna|února|únor|březen|března|duben|dubna|květen|května|červenec|července|červen|června|srpen|srpna|září|říjen|října|listopadu|listopad|prosinec|prosince)/i,monthsShortStrictRegex:/^(led|úno|bře|dub|kvě|čvn|čvc|srp|zář|říj|lis|pro)/i,monthsParse:a,longMonthsParse:a,shortMonthsParse:a,weekdays:"neděle_pondělí_úterý_středa_čtvrtek_pátek_sobota".split("_"),weekdaysShort:"ne_po_út_st_čt_pá_so".split("_"),weekdaysMin:"ne_po_út_st_čt_pá_so".split("_"),longDateFormat:{LT:"H:mm",LTS:"H:mm:ss",L:"DD.MM.YYYY",LL:"D. MMMM YYYY",LLL:"D. MMMM YYYY H:mm",LLLL:"dddd D. MMMM YYYY H:mm",l:"D. M. YYYY"},calendar:{sameDay:"[dnes v] LT",nextDay:"[zítra v] LT",nextWeek:function(){switch(this.day()){case 0:return"[v neděli v] LT";case 1:case 2:return"[v] dddd [v] LT";case 3:return"[ve středu v] LT";case 4:return"[ve čtvrtek v] LT";case 5:return"[v pátek v] LT";case 6:return"[v sobotu v] LT"}},lastDay:"[včera v] LT",lastWeek:function(){switch(this.day()){case 0:return"[minulou neděli v] LT";case 1:case 2:return"[minulé] dddd [v] LT";case 3:return"[minulou středu v] LT";case 4:case 5:return"[minulý] dddd [v] LT";case 6:return"[minulou sobotu v] LT"}},sameElse:"L"},relativeTime:{future:"za %s",past:"před %s",s:o,ss:o,m:o,mm:o,h:o,hh:o,d:o,dd:o,M:o,MM:o,y:o,yy:o},dayOfMonthOrdinalParse:/\d{1,2}\./,ordinal:"%d.",week:{dow:1,doy:4}});return s}))},877:function(t,e,n){(function(t,e){e(n(381))})(0,(function(t){"use strict";
//! moment.js locale configuration
var e=t.defineLocale("cv",{months:"кӑрлач_нарӑс_пуш_ака_май_ҫӗртме_утӑ_ҫурла_авӑн_юпа_чӳк_раштав".split("_"),monthsShort:"кӑр_нар_пуш_ака_май_ҫӗр_утӑ_ҫур_авн_юпа_чӳк_раш".split("_"),weekdays:"вырсарникун_тунтикун_ытларикун_юнкун_кӗҫнерникун_эрнекун_шӑматкун".split("_"),weekdaysShort:"выр_тун_ытл_юн_кӗҫ_эрн_шӑм".split("_"),weekdaysMin:"вр_тн_ыт_юн_кҫ_эр_шм".split("_"),longDateFormat:{LT:"HH:mm",LTS:"HH:mm:ss",L:"DD-MM-YYYY",LL:"YYYY [ҫулхи] MMMM [уйӑхӗн] D[-мӗшӗ]",LLL:"YYYY [ҫулхи] MMMM [уйӑхӗн] D[-мӗшӗ], HH:mm",LLLL:"dddd, YYYY [ҫулхи] MMMM [уйӑхӗн] D[-мӗшӗ], HH:mm"},calendar:{sameDay:"[Паян] LT [сехетре]",nextDay:"[Ыран] LT [сехетре]",lastDay:"[Ӗнер] LT [сехетре]",nextWeek:"[Ҫитес] dddd LT [сехетре]",lastWeek:"[Иртнӗ] dddd LT [сехетре]",sameElse:"L"},relativeTime:{future:function(t){var e=/сехет$/i.exec(t)?"рен":/ҫул$/i.exec(t)?"тан":"ран";return t+e},past:"%s каялла",s:"пӗр-ик ҫеккунт",ss:"%d ҫеккунт",m:"пӗр минут",mm:"%d минут",h:"пӗр сехет",hh:"%d сехет",d:"пӗр кун",dd:"%d кун",M:"пӗр уйӑх",MM:"%d уйӑх",y:"пӗр ҫул",yy:"%d ҫул"},dayOfMonthOrdinalParse:/\d{1,2}-мӗш/,ordinal:"%d-мӗш",week:{dow:1,doy:7}});return e}))},7373:function(t,e,n){(function(t,e){e(n(381))})(0,(function(t){"use strict";
//! moment.js locale configuration
var e=t.defineLocale("cy",{months:"Ionawr_Chwefror_Mawrth_Ebrill_Mai_Mehefin_Gorffennaf_Awst_Medi_Hydref_Tachwedd_Rhagfyr".split("_"),monthsShort:"Ion_Chwe_Maw_Ebr_Mai_Meh_Gor_Aws_Med_Hyd_Tach_Rhag".split("_"),weekdays:"Dydd Sul_Dydd Llun_Dydd Mawrth_Dydd Mercher_Dydd Iau_Dydd Gwener_Dydd Sadwrn".split("_"),weekdaysShort:"Sul_Llun_Maw_Mer_Iau_Gwe_Sad".split("_"),weekdaysMin:"Su_Ll_Ma_Me_Ia_Gw_Sa".split("_"),weekdaysParseExact:!0,longDateFormat:{LT:"HH:mm",LTS:"HH:mm:ss",L:"DD/MM/YYYY",LL:"D MMMM YYYY",LLL:"D MMMM YYYY HH:mm",LLLL:"dddd, D MMMM YYYY HH:mm"},calendar:{sameDay:"[Heddiw am] LT",nextDay:"[Yfory am] LT",nextWeek:"dddd [am] LT",lastDay:"[Ddoe am] LT",lastWeek:"dddd [diwethaf am] LT",sameElse:"L"},relativeTime:{future:"mewn %s",past:"%s yn ôl",s:"ychydig eiliadau",ss:"%d eiliad",m:"munud",mm:"%d munud",h:"awr",hh:"%d awr",d:"diwrnod",dd:"%d diwrnod",M:"mis",MM:"%d mis",y:"blwyddyn",yy:"%d flynedd"},dayOfMonthOrdinalParse:/\d{1,2}(fed|ain|af|il|ydd|ed|eg)/,ordinal:function(t){var e=t,n="",a=["","af","il","ydd","ydd","ed","ed","ed","fed","fed","fed","eg","fed","eg","eg","fed","eg","eg","fed","eg","fed"];return e>20?n=40===e||50===e||60===e||80===e||100===e?"fed":"ain":e>0&&(n=a[e]),t+n},week:{dow:1,doy:4}});return e}))},4780:function(t,e,n){(function(t,e){e(n(381))})(0,(function(t){"use strict";
//! moment.js locale configuration
var e=t.defineLocale("da",{months:"januar_februar_marts_april_maj_juni_juli_august_september_oktober_november_december".split("_"),monthsShort:"jan_feb_mar_apr_maj_jun_jul_aug_sep_okt_nov_dec".split("_"),weekdays:"søndag_mandag_tirsdag_onsdag_torsdag_fredag_lørdag".split("_"),weekdaysShort:"søn_man_tir_ons_tor_fre_lør".split("_"),weekdaysMin:"sø_ma_ti_on_to_fr_lø".split("_"),longDateFormat:{LT:"HH:mm",LTS:"HH:mm:ss",L:"DD.MM.YYYY",LL:"D. MMMM YYYY",LLL:"D. MMMM YYYY HH:mm",LLLL:"dddd [d.] D. MMMM YYYY [kl.] HH:mm"},calendar:{sameDay:"[i dag kl.] LT",nextDay:"[i morgen kl.] LT",nextWeek:"på dddd [kl.] LT",lastDay:"[i går kl.] LT",lastWeek:"[i] dddd[s kl.] LT",sameElse:"L"},relativeTime:{future:"om %s",past:"%s siden",s:"få sekunder",ss:"%d sekunder",m:"et minut",mm:"%d minutter",h:"en time",hh:"%d timer",d:"en dag",dd:"%d dage",M:"en måned",MM:"%d måneder",y:"et år",yy:"%d år"},dayOfMonthOrdinalParse:/\d{1,2}\./,ordinal:"%d.",week:{dow:1,doy:4}});return e}))},217:function(t,e,n){(function(t,e){e(n(381))})(0,(function(t){"use strict";
//! moment.js locale configuration
function e(t,e,n,a){var r={m:["eine Minute","einer Minute"],h:["eine Stunde","einer Stunde"],d:["ein Tag","einem Tag"],dd:[t+" Tage",t+" Tagen"],w:["eine Woche","einer Woche"],M:["ein Monat","einem Monat"],MM:[t+" Monate",t+" Monaten"],y:["ein Jahr","einem Jahr"],yy:[t+" Jahre",t+" Jahren"]};return e?r[n][0]:r[n][1]}var n=t.defineLocale("de-at",{months:"Jänner_Februar_März_April_Mai_Juni_Juli_August_September_Oktober_November_Dezember".split("_"),monthsShort:"Jän._Feb._März_Apr._Mai_Juni_Juli_Aug._Sep._Okt._Nov._Dez.".split("_"),monthsParseExact:!0,weekdays:"Sonntag_Montag_Dienstag_Mittwoch_Donnerstag_Freitag_Samstag".split("_"),weekdaysShort:"So._Mo._Di._Mi._Do._Fr._Sa.".split("_"),weekdaysMin:"So_Mo_Di_Mi_Do_Fr_Sa".split("_"),weekdaysParseExact:!0,longDateFormat:{LT:"HH:mm",LTS:"HH:mm:ss",L:"DD.MM.YYYY",LL:"D. MMMM YYYY",LLL:"D. MMMM YYYY HH:mm",LLLL:"dddd, D. MMMM YYYY HH:mm"},calendar:{sameDay:"[heute um] LT [Uhr]",sameElse:"L",nextDay:"[morgen um] LT [Uhr]",nextWeek:"dddd [um] LT [Uhr]",lastDay:"[gestern um] LT [Uhr]",lastWeek:"[letzten] dddd [um] LT [Uhr]"},relativeTime:{future:"in %s",past:"vor %s",s:"ein paar Sekunden",ss:"%d Sekunden",m:e,mm:"%d Minuten",h:e,hh:"%d Stunden",d:e,dd:e,w:e,ww:"%d Wochen",M:e,MM:e,y:e,yy:e},dayOfMonthOrdinalParse:/\d{1,2}\./,ordinal:"%d.",week:{dow:1,doy:4}});return n}))},894:function(t,e,n){(function(t,e){e(n(381))})(0,(function(t){"use strict";
//! moment.js locale configuration
function e(t,e,n,a){var r={m:["eine Minute","einer Minute"],h:["eine Stunde","einer Stunde"],d:["ein Tag","einem Tag"],dd:[t+" Tage",t+" Tagen"],w:["eine Woche","einer Woche"],M:["ein Monat","einem Monat"],MM:[t+" Monate",t+" Monaten"],y:["ein Jahr","einem Jahr"],yy:[t+" Jahre",t+" Jahren"]};return e?r[n][0]:r[n][1]}var n=t.defineLocale("de-ch",{months:"Januar_Februar_März_April_Mai_Juni_Juli_August_September_Oktober_November_Dezember".split("_"),monthsShort:"Jan._Feb._März_Apr._Mai_Juni_Juli_Aug._Sep._Okt._Nov._Dez.".split("_"),monthsParseExact:!0,weekdays:"Sonntag_Montag_Dienstag_Mittwoch_Donnerstag_Freitag_Samstag".split("_"),weekdaysShort:"So_Mo_Di_Mi_Do_Fr_Sa".split("_"),weekdaysMin:"So_Mo_Di_Mi_Do_Fr_Sa".split("_"),weekdaysParseExact:!0,longDateFormat:{LT:"HH:mm",LTS:"HH:mm:ss",L:"DD.MM.YYYY",LL:"D. MMMM YYYY",LLL:"D. MMMM YYYY HH:mm",LLLL:"dddd, D. MMMM YYYY HH:mm"},calendar:{sameDay:"[heute um] LT [Uhr]",sameElse:"L",nextDay:"[morgen um] LT [Uhr]",nextWeek:"dddd [um] LT [Uhr]",lastDay:"[gestern um] LT [Uhr]",lastWeek:"[letzten] dddd [um] LT [Uhr]"},relativeTime:{future:"in %s",past:"vor %s",s:"ein paar Sekunden",ss:"%d Sekunden",m:e,mm:"%d Minuten",h:e,hh:"%d Stunden",d:e,dd:e,w:e,ww:"%d Wochen",M:e,MM:e,y:e,yy:e},dayOfMonthOrdinalParse:/\d{1,2}\./,ordinal:"%d.",week:{dow:1,doy:4}});return n}))},9740:function(t,e,n){(function(t,e){e(n(381))})(0,(function(t){"use strict";
//! moment.js locale configuration
function e(t,e,n,a){var r={m:["eine Minute","einer Minute"],h:["eine Stunde","einer Stunde"],d:["ein Tag","einem Tag"],dd:[t+" Tage",t+" Tagen"],w:["eine Woche","einer Woche"],M:["ein Monat","einem Monat"],MM:[t+" Monate",t+" Monaten"],y:["ein Jahr","einem Jahr"],yy:[t+" Jahre",t+" Jahren"]};return e?r[n][0]:r[n][1]}var n=t.defineLocale("de",{months:"Januar_Februar_März_April_Mai_Juni_Juli_August_September_Oktober_November_Dezember".split("_"),monthsShort:"Jan._Feb._März_Apr._Mai_Juni_Juli_Aug._Sep._Okt._Nov._Dez.".split("_"),monthsParseExact:!0,weekdays:"Sonntag_Montag_Dienstag_Mittwoch_Donnerstag_Freitag_Samstag".split("_"),weekdaysShort:"So._Mo._Di._Mi._Do._Fr._Sa.".split("_"),weekdaysMin:"So_Mo_Di_Mi_Do_Fr_Sa".split("_"),weekdaysParseExact:!0,longDateFormat:{LT:"HH:mm",LTS:"HH:mm:ss",L:"DD.MM.YYYY",LL:"D. MMMM YYYY",LLL:"D. MMMM YYYY HH:mm",LLLL:"dddd, D. MMMM YYYY HH:mm"},calendar:{sameDay:"[heute um] LT [Uhr]",sameElse:"L",nextDay:"[morgen um] LT [Uhr]",nextWeek:"dddd [um] LT [Uhr]",lastDay:"[gestern um] LT [Uhr]",lastWeek:"[letzten] dddd [um] LT [Uhr]"},relativeTime:{future:"in %s",past:"vor %s",s:"ein paar Sekunden",ss:"%d Sekunden",m:e,mm:"%d Minuten",h:e,hh:"%d Stunden",d:e,dd:e,w:e,ww:"%d Wochen",M:e,MM:e,y:e,yy:e},dayOfMonthOrdinalParse:/\d{1,2}\./,ordinal:"%d.",week:{dow:1,doy:4}});return n}))},5300:function(t,e,n){(function(t,e){e(n(381))})(0,(function(t){"use strict";
//! moment.js locale configuration
var e=["ޖެނުއަރީ","ފެބްރުއަރީ","މާރިޗު","އޭޕްރީލު","މޭ","ޖޫން","ޖުލައި","އޯގަސްޓު","ސެޕްޓެމްބަރު","އޮކްޓޯބަރު","ނޮވެމްބަރު","ޑިސެމްބަރު"],n=["އާދިއްތަ","ހޯމަ","އަންގާރަ","ބުދަ","ބުރާސްފަތި","ހުކުރު","ހޮނިހިރު"],a=t.defineLocale("dv",{months:e,monthsShort:e,weekdays:n,weekdaysShort:n,weekdaysMin:"އާދި_ހޯމަ_އަން_ބުދަ_ބުރާ_ހުކު_ހޮނި".split("_"),longDateFormat:{LT:"HH:mm",LTS:"HH:mm:ss",L:"D/M/YYYY",LL:"D MMMM YYYY",LLL:"D MMMM YYYY HH:mm",LLLL:"dddd D MMMM YYYY HH:mm"},meridiemParse:/މކ|މފ/,isPM:function(t){return"މފ"===t},meridiem:function(t,e,n){return t<12?"މކ":"މފ"},calendar:{sameDay:"[މިއަދު] LT",nextDay:"[މާދަމާ] LT",nextWeek:"dddd LT",lastDay:"[އިއްޔެ] LT",lastWeek:"[ފާއިތުވި] dddd LT",sameElse:"L"},relativeTime:{future:"ތެރޭގައި %s",past:"ކުރިން %s",s:"ސިކުންތުކޮޅެއް",ss:"d% ސިކުންތު",m:"މިނިޓެއް",mm:"މިނިޓު %d",h:"ގަޑިއިރެއް",hh:"ގަޑިއިރު %d",d:"ދުވަހެއް",dd:"ދުވަސް %d",M:"މަހެއް",MM:"މަސް %d",y:"އަހަރެއް",yy:"އަހަރު %d"},preparse:function(t){return t.replace(/،/g,",")},postformat:function(t){return t.replace(/,/g,"،")},week:{dow:7,doy:12}});return a}))},837:function(t,e,n){(function(t,e){e(n(381))})(0,(function(t){"use strict";
//! moment.js locale configuration
function e(t){return"undefined"!==typeof Function&&t instanceof Function||"[object Function]"===Object.prototype.toString.call(t)}var n=t.defineLocale("el",{monthsNominativeEl:"Ιανουάριος_Φεβρουάριος_Μάρτιος_Απρίλιος_Μάιος_Ιούνιος_Ιούλιος_Αύγουστος_Σεπτέμβριος_Οκτώβριος_Νοέμβριος_Δεκέμβριος".split("_"),monthsGenitiveEl:"Ιανουαρίου_Φεβρουαρίου_Μαρτίου_Απριλίου_Μαΐου_Ιουνίου_Ιουλίου_Αυγούστου_Σεπτεμβρίου_Οκτωβρίου_Νοεμβρίου_Δεκεμβρίου".split("_"),months:function(t,e){return t?"string"===typeof e&&/D/.test(e.substring(0,e.indexOf("MMMM")))?this._monthsGenitiveEl[t.month()]:this._monthsNominativeEl[t.month()]:this._monthsNominativeEl},monthsShort:"Ιαν_Φεβ_Μαρ_Απρ_Μαϊ_Ιουν_Ιουλ_Αυγ_Σεπ_Οκτ_Νοε_Δεκ".split("_"),weekdays:"Κυριακή_Δευτέρα_Τρίτη_Τετάρτη_Πέμπτη_Παρασκευή_Σάββατο".split("_"),weekdaysShort:"Κυρ_Δευ_Τρι_Τετ_Πεμ_Παρ_Σαβ".split("_"),weekdaysMin:"Κυ_Δε_Τρ_Τε_Πε_Πα_Σα".split("_"),meridiem:function(t,e,n){return t>11?n?"μμ":"ΜΜ":n?"πμ":"ΠΜ"},isPM:function(t){return"μ"===(t+"").toLowerCase()[0]},meridiemParse:/[ΠΜ]\.?Μ?\.?/i,longDateFormat:{LT:"h:mm A",LTS:"h:mm:ss A",L:"DD/MM/YYYY",LL:"D MMMM YYYY",LLL:"D MMMM YYYY h:mm A",LLLL:"dddd, D MMMM YYYY h:mm A"},calendarEl:{sameDay:"[Σήμερα {}] LT",nextDay:"[Αύριο {}] LT",nextWeek:"dddd [{}] LT",lastDay:"[Χθες {}] LT",lastWeek:function(){switch(this.day()){case 6:return"[το προηγούμενο] dddd [{}] LT";default:return"[την προηγούμενη] dddd [{}] LT"}},sameElse:"L"},calendar:function(t,n){var a=this._calendarEl[t],r=n&&n.hours();return e(a)&&(a=a.apply(n)),a.replace("{}",r%12===1?"στη":"στις")},relativeTime:{future:"σε %s",past:"%s πριν",s:"λίγα δευτερόλεπτα",ss:"%d δευτερόλεπτα",m:"ένα λεπτό",mm:"%d λεπτά",h:"μία ώρα",hh:"%d ώρες",d:"μία μέρα",dd:"%d μέρες",M:"ένας μήνας",MM:"%d μήνες",y:"ένας χρόνος",yy:"%d χρόνια"},dayOfMonthOrdinalParse:/\d{1,2}η/,ordinal:"%dη",week:{dow:1,doy:4}});return n}))},8348:function(t,e,n){(function(t,e){e(n(381))})(0,(function(t){"use strict";
//! moment.js locale configuration
var e=t.defineLocale("en-au",{months:"January_February_March_April_May_June_July_August_September_October_November_December".split("_"),monthsShort:"Jan_Feb_Mar_Apr_May_Jun_Jul_Aug_Sep_Oct_Nov_Dec".split("_"),weekdays:"Sunday_Monday_Tuesday_Wednesday_Thursday_Friday_Saturday".split("_"),weekdaysShort:"Sun_Mon_Tue_Wed_Thu_Fri_Sat".split("_"),weekdaysMin:"Su_Mo_Tu_We_Th_Fr_Sa".split("_"),longDateFormat:{LT:"h:mm A",LTS:"h:mm:ss A",L:"DD/MM/YYYY",LL:"D MMMM YYYY",LLL:"D MMMM YYYY h:mm A",LLLL:"dddd, D MMMM YYYY h:mm A"},calendar:{sameDay:"[Today at] LT",nextDay:"[Tomorrow at] LT",nextWeek:"dddd [at] LT",lastDay:"[Yesterday at] LT",lastWeek:"[Last] dddd [at] LT",sameElse:"L"},relativeTime:{future:"in %s",past:"%s ago",s:"a few seconds",ss:"%d seconds",m:"a minute",mm:"%d minutes",h:"an hour",hh:"%d hours",d:"a day",dd:"%d days",M:"a month",MM:"%d months",y:"a year",yy:"%d years"},dayOfMonthOrdinalParse:/\d{1,2}(st|nd|rd|th)/,ordinal:function(t){var e=t%10,n=1===~~(t%100/10)?"th":1===e?"st":2===e?"nd":3===e?"rd":"th";return t+n},week:{dow:0,doy:4}});return e}))},7925:function(t,e,n){(function(t,e){e(n(381))})(0,(function(t){"use strict";
//! moment.js locale configuration
var e=t.defineLocale("en-ca",{months:"January_February_March_April_May_June_July_August_September_October_November_December".split("_"),monthsShort:"Jan_Feb_Mar_Apr_May_Jun_Jul_Aug_Sep_Oct_Nov_Dec".split("_"),weekdays:"Sunday_Monday_Tuesday_Wednesday_Thursday_Friday_Saturday".split("_"),weekdaysShort:"Sun_Mon_Tue_Wed_Thu_Fri_Sat".split("_"),weekdaysMin:"Su_Mo_Tu_We_Th_Fr_Sa".split("_"),longDateFormat:{LT:"h:mm A",LTS:"h:mm:ss A",L:"YYYY-MM-DD",LL:"MMMM D, YYYY",LLL:"MMMM D, YYYY h:mm A",LLLL:"dddd, MMMM D, YYYY h:mm A"},calendar:{sameDay:"[Today at] LT",nextDay:"[Tomorrow at] LT",nextWeek:"dddd [at] LT",lastDay:"[Yesterday at] LT",lastWeek:"[Last] dddd [at] LT",sameElse:"L"},relativeTime:{future:"in %s",past:"%s ago",s:"a few seconds",ss:"%d seconds",m:"a minute",mm:"%d minutes",h:"an hour",hh:"%d hours",d:"a day",dd:"%d days",M:"a month",MM:"%d months",y:"a year",yy:"%d years"},dayOfMonthOrdinalParse:/\d{1,2}(st|nd|rd|th)/,ordinal:function(t){var e=t%10,n=1===~~(t%100/10)?"th":1===e?"st":2===e?"nd":3===e?"rd":"th";return t+n}});return e}))},2243:function(t,e,n){(function(t,e){e(n(381))})(0,(function(t){"use strict";
//! moment.js locale configuration
var e=t.defineLocale("en-gb",{months:"January_February_March_April_May_June_July_August_September_October_November_December".split("_"),monthsShort:"Jan_Feb_Mar_Apr_May_Jun_Jul_Aug_Sep_Oct_Nov_Dec".split("_"),weekdays:"Sunday_Monday_Tuesday_Wednesday_Thursday_Friday_Saturday".split("_"),weekdaysShort:"Sun_Mon_Tue_Wed_Thu_Fri_Sat".split("_"),weekdaysMin:"Su_Mo_Tu_We_Th_Fr_Sa".split("_"),longDateFormat:{LT:"HH:mm",LTS:"HH:mm:ss",L:"DD/MM/YYYY",LL:"D MMMM YYYY",LLL:"D MMMM YYYY HH:mm",LLLL:"dddd, D MMMM YYYY HH:mm"},calendar:{sameDay:"[Today at] LT",nextDay:"[Tomorrow at] LT",nextWeek:"dddd [at] LT",lastDay:"[Yesterday at] LT",lastWeek:"[Last] dddd [at] LT",sameElse:"L"},relativeTime:{future:"in %s",past:"%s ago",s:"a few seconds",ss:"%d seconds",m:"a minute",mm:"%d minutes",h:"an hour",hh:"%d hours",d:"a day",dd:"%d days",M:"a month",MM:"%d months",y:"a year",yy:"%d years"},dayOfMonthOrdinalParse:/\d{1,2}(st|nd|rd|th)/,ordinal:function(t){var e=t%10,n=1===~~(t%100/10)?"th":1===e?"st":2===e?"nd":3===e?"rd":"th";return t+n},week:{dow:1,doy:4}});return e}))},6436:function(t,e,n){(function(t,e){e(n(381))})(0,(function(t){"use strict";
//! moment.js locale configuration
var e=t.defineLocale("en-ie",{months:"January_February_March_April_May_June_July_August_September_October_November_December".split("_"),monthsShort:"Jan_Feb_Mar_Apr_May_Jun_Jul_Aug_Sep_Oct_Nov_Dec".split("_"),weekdays:"Sunday_Monday_Tuesday_Wednesday_Thursday_Friday_Saturday".split("_"),weekdaysShort:"Sun_Mon_Tue_Wed_Thu_Fri_Sat".split("_"),weekdaysMin:"Su_Mo_Tu_We_Th_Fr_Sa".split("_"),longDateFormat:{LT:"HH:mm",LTS:"HH:mm:ss",L:"DD/MM/YYYY",LL:"D MMMM YYYY",LLL:"D MMMM YYYY HH:mm",LLLL:"dddd D MMMM YYYY HH:mm"},calendar:{sameDay:"[Today at] LT",nextDay:"[Tomorrow at] LT",nextWeek:"dddd [at] LT",lastDay:"[Yesterday at] LT",lastWeek:"[Last] dddd [at] LT",sameElse:"L"},relativeTime:{future:"in %s",past:"%s ago",s:"a few seconds",ss:"%d seconds",m:"a minute",mm:"%d minutes",h:"an hour",hh:"%d hours",d:"a day",dd:"%d days",M:"a month",MM:"%d months",y:"a year",yy:"%d years"},dayOfMonthOrdinalParse:/\d{1,2}(st|nd|rd|th)/,ordinal:function(t){var e=t%10,n=1===~~(t%100/10)?"th":1===e?"st":2===e?"nd":3===e?"rd":"th";return t+n},week:{dow:1,doy:4}});return e}))},7207:function(t,e,n){(function(t,e){e(n(381))})(0,(function(t){"use strict";
//! moment.js locale configuration
var e=t.defineLocale("en-il",{months:"January_February_March_April_May_June_July_August_September_October_November_December".split("_"),monthsShort:"Jan_Feb_Mar_Apr_May_Jun_Jul_Aug_Sep_Oct_Nov_Dec".split("_"),weekdays:"Sunday_Monday_Tuesday_Wednesday_Thursday_Friday_Saturday".split("_"),weekdaysShort:"Sun_Mon_Tue_Wed_Thu_Fri_Sat".split("_"),weekdaysMin:"Su_Mo_Tu_We_Th_Fr_Sa".split("_"),longDateFormat:{LT:"HH:mm",LTS:"HH:mm:ss",L:"DD/MM/YYYY",LL:"D MMMM YYYY",LLL:"D MMMM YYYY HH:mm",LLLL:"dddd, D MMMM YYYY HH:mm"},calendar:{sameDay:"[Today at] LT",nextDay:"[Tomorrow at] LT",nextWeek:"dddd [at] LT",lastDay:"[Yesterday at] LT",lastWeek:"[Last] dddd [at] LT",sameElse:"L"},relativeTime:{future:"in %s",past:"%s ago",s:"a few seconds",ss:"%d seconds",m:"a minute",mm:"%d minutes",h:"an hour",hh:"%d hours",d:"a day",dd:"%d days",M:"a month",MM:"%d months",y:"a year",yy:"%d years"},dayOfMonthOrdinalParse:/\d{1,2}(st|nd|rd|th)/,ordinal:function(t){var e=t%10,n=1===~~(t%100/10)?"th":1===e?"st":2===e?"nd":3===e?"rd":"th";return t+n}});return e}))},4175:function(t,e,n){(function(t,e){e(n(381))})(0,(function(t){"use strict";
//! moment.js locale configuration
var e=t.defineLocale("en-in",{months:"January_February_March_April_May_June_July_August_September_October_November_December".split("_"),monthsShort:"Jan_Feb_Mar_Apr_May_Jun_Jul_Aug_Sep_Oct_Nov_Dec".split("_"),weekdays:"Sunday_Monday_Tuesday_Wednesday_Thursday_Friday_Saturday".split("_"),weekdaysShort:"Sun_Mon_Tue_Wed_Thu_Fri_Sat".split("_"),weekdaysMin:"Su_Mo_Tu_We_Th_Fr_Sa".split("_"),longDateFormat:{LT:"h:mm A",LTS:"h:mm:ss A",L:"DD/MM/YYYY",LL:"D MMMM YYYY",LLL:"D MMMM YYYY h:mm A",LLLL:"dddd, D MMMM YYYY h:mm A"},calendar:{sameDay:"[Today at] LT",nextDay:"[Tomorrow at] LT",nextWeek:"dddd [at] LT",lastDay:"[Yesterday at] LT",lastWeek:"[Last] dddd [at] LT",sameElse:"L"},relativeTime:{future:"in %s",past:"%s ago",s:"a few seconds",ss:"%d seconds",m:"a minute",mm:"%d minutes",h:"an hour",hh:"%d hours",d:"a day",dd:"%d days",M:"a month",MM:"%d months",y:"a year",yy:"%d years"},dayOfMonthOrdinalParse:/\d{1,2}(st|nd|rd|th)/,ordinal:function(t){var e=t%10,n=1===~~(t%100/10)?"th":1===e?"st":2===e?"nd":3===e?"rd":"th";return t+n},week:{dow:0,doy:6}});return e}))},6319:function(t,e,n){(function(t,e){e(n(381))})(0,(function(t){"use strict";
//! moment.js locale configuration
var e=t.defineLocale("en-nz",{months:"January_February_March_April_May_June_July_August_September_October_November_December".split("_"),monthsShort:"Jan_Feb_Mar_Apr_May_Jun_Jul_Aug_Sep_Oct_Nov_Dec".split("_"),weekdays:"Sunday_Monday_Tuesday_Wednesday_Thursday_Friday_Saturday".split("_"),weekdaysShort:"Sun_Mon_Tue_Wed_Thu_Fri_Sat".split("_"),weekdaysMin:"Su_Mo_Tu_We_Th_Fr_Sa".split("_"),longDateFormat:{LT:"h:mm A",LTS:"h:mm:ss A",L:"DD/MM/YYYY",LL:"D MMMM YYYY",LLL:"D MMMM YYYY h:mm A",LLLL:"dddd, D MMMM YYYY h:mm A"},calendar:{sameDay:"[Today at] LT",nextDay:"[Tomorrow at] LT",nextWeek:"dddd [at] LT",lastDay:"[Yesterday at] LT",lastWeek:"[Last] dddd [at] LT",sameElse:"L"},relativeTime:{future:"in %s",past:"%s ago",s:"a few seconds",ss:"%d seconds",m:"a minute",mm:"%d minutes",h:"an hour",hh:"%d hours",d:"a day",dd:"%d days",M:"a month",MM:"%d months",y:"a year",yy:"%d years"},dayOfMonthOrdinalParse:/\d{1,2}(st|nd|rd|th)/,ordinal:function(t){var e=t%10,n=1===~~(t%100/10)?"th":1===e?"st":2===e?"nd":3===e?"rd":"th";return t+n},week:{dow:1,doy:4}});return e}))},1662:function(t,e,n){(function(t,e){e(n(381))})(0,(function(t){"use strict";
//! moment.js locale configuration
var e=t.defineLocale("en-sg",{months:"January_February_March_April_May_June_July_August_September_October_November_December".split("_"),monthsShort:"Jan_Feb_Mar_Apr_May_Jun_Jul_Aug_Sep_Oct_Nov_Dec".split("_"),weekdays:"Sunday_Monday_Tuesday_Wednesday_Thursday_Friday_Saturday".split("_"),weekdaysShort:"Sun_Mon_Tue_Wed_Thu_Fri_Sat".split("_"),weekdaysMin:"Su_Mo_Tu_We_Th_Fr_Sa".split("_"),longDateFormat:{LT:"HH:mm",LTS:"HH:mm:ss",L:"DD/MM/YYYY",LL:"D MMMM YYYY",LLL:"D MMMM YYYY HH:mm",LLLL:"dddd, D MMMM YYYY HH:mm"},calendar:{sameDay:"[Today at] LT",nextDay:"[Tomorrow at] LT",nextWeek:"dddd [at] LT",lastDay:"[Yesterday at] LT",lastWeek:"[Last] dddd [at] LT",sameElse:"L"},relativeTime:{future:"in %s",past:"%s ago",s:"a few seconds",ss:"%d seconds",m:"a minute",mm:"%d minutes",h:"an hour",hh:"%d hours",d:"a day",dd:"%d days",M:"a month",MM:"%d months",y:"a year",yy:"%d years"},dayOfMonthOrdinalParse:/\d{1,2}(st|nd|rd|th)/,ordinal:function(t){var e=t%10,n=1===~~(t%100/10)?"th":1===e?"st":2===e?"nd":3===e?"rd":"th";return t+n},week:{dow:1,doy:4}});return e}))},2915:function(t,e,n){(function(t,e){e(n(381))})(0,(function(t){"use strict";
//! moment.js locale configuration
var e=t.defineLocale("eo",{months:"januaro_februaro_marto_aprilo_majo_junio_julio_aŭgusto_septembro_oktobro_novembro_decembro".split("_"),monthsShort:"jan_feb_mart_apr_maj_jun_jul_aŭg_sept_okt_nov_dec".split("_"),weekdays:"dimanĉo_lundo_mardo_merkredo_ĵaŭdo_vendredo_sabato".split("_"),weekdaysShort:"dim_lun_mard_merk_ĵaŭ_ven_sab".split("_"),weekdaysMin:"di_lu_ma_me_ĵa_ve_sa".split("_"),longDateFormat:{LT:"HH:mm",LTS:"HH:mm:ss",L:"YYYY-MM-DD",LL:"[la] D[-an de] MMMM, YYYY",LLL:"[la] D[-an de] MMMM, YYYY HH:mm",LLLL:"dddd[n], [la] D[-an de] MMMM, YYYY HH:mm",llll:"ddd, [la] D[-an de] MMM, YYYY HH:mm"},meridiemParse:/[ap]\.t\.m/i,isPM:function(t){return"p"===t.charAt(0).toLowerCase()},meridiem:function(t,e,n){return t>11?n?"p.t.m.":"P.T.M.":n?"a.t.m.":"A.T.M."},calendar:{sameDay:"[Hodiaŭ je] LT",nextDay:"[Morgaŭ je] LT",nextWeek:"dddd[n je] LT",lastDay:"[Hieraŭ je] LT",lastWeek:"[pasintan] dddd[n je] LT",sameElse:"L"},relativeTime:{future:"post %s",past:"antaŭ %s",s:"kelkaj sekundoj",ss:"%d sekundoj",m:"unu minuto",mm:"%d minutoj",h:"unu horo",hh:"%d horoj",d:"unu tago",dd:"%d tagoj",M:"unu monato",MM:"%d monatoj",y:"unu jaro",yy:"%d jaroj"},dayOfMonthOrdinalParse:/\d{1,2}a/,ordinal:"%da",week:{dow:1,doy:7}});return e}))},5251:function(t,e,n){(function(t,e){e(n(381))})(0,(function(t){"use strict";
//! moment.js locale configuration
var e="ene._feb._mar._abr._may._jun._jul._ago._sep._oct._nov._dic.".split("_"),n="ene_feb_mar_abr_may_jun_jul_ago_sep_oct_nov_dic".split("_"),a=[/^ene/i,/^feb/i,/^mar/i,/^abr/i,/^may/i,/^jun/i,/^jul/i,/^ago/i,/^sep/i,/^oct/i,/^nov/i,/^dic/i],r=/^(enero|febrero|marzo|abril|mayo|junio|julio|agosto|septiembre|octubre|noviembre|diciembre|ene\.?|feb\.?|mar\.?|abr\.?|may\.?|jun\.?|jul\.?|ago\.?|sep\.?|oct\.?|nov\.?|dic\.?)/i,i=t.defineLocale("es-do",{months:"enero_febrero_marzo_abril_mayo_junio_julio_agosto_septiembre_octubre_noviembre_diciembre".split("_"),monthsShort:function(t,a){return t?/-MMM-/.test(a)?n[t.month()]:e[t.month()]:e},monthsRegex:r,monthsShortRegex:r,monthsStrictRegex:/^(enero|febrero|marzo|abril|mayo|junio|julio|agosto|septiembre|octubre|noviembre|diciembre)/i,monthsShortStrictRegex:/^(ene\.?|feb\.?|mar\.?|abr\.?|may\.?|jun\.?|jul\.?|ago\.?|sep\.?|oct\.?|nov\.?|dic\.?)/i,monthsParse:a,longMonthsParse:a,shortMonthsParse:a,weekdays:"domingo_lunes_martes_miércoles_jueves_viernes_sábado".split("_"),weekdaysShort:"dom._lun._mar._mié._jue._vie._sáb.".split("_"),weekdaysMin:"do_lu_ma_mi_ju_vi_sá".split("_"),weekdaysParseExact:!0,longDateFormat:{LT:"h:mm A",LTS:"h:mm:ss A",L:"DD/MM/YYYY",LL:"D [de] MMMM [de] YYYY",LLL:"D [de] MMMM [de] YYYY h:mm A",LLLL:"dddd, D [de] MMMM [de] YYYY h:mm A"},calendar:{sameDay:function(){return"[hoy a la"+(1!==this.hours()?"s":"")+"] LT"},nextDay:function(){return"[mañana a la"+(1!==this.hours()?"s":"")+"] LT"},nextWeek:function(){return"dddd [a la"+(1!==this.hours()?"s":"")+"] LT"},lastDay:function(){return"[ayer a la"+(1!==this.hours()?"s":"")+"] LT"},lastWeek:function(){return"[el] dddd [pasado a la"+(1!==this.hours()?"s":"")+"] LT"},sameElse:"L"},relativeTime:{future:"en %s",past:"hace %s",s:"unos segundos",ss:"%d segundos",m:"un minuto",mm:"%d minutos",h:"una hora",hh:"%d horas",d:"un día",dd:"%d días",w:"una semana",ww:"%d semanas",M:"un mes",MM:"%d meses",y:"un año",yy:"%d años"},dayOfMonthOrdinalParse:/\d{1,2}º/,ordinal:"%dº",week:{dow:1,doy:4}});return i}))},6112:function(t,e,n){(function(t,e){e(n(381))})(0,(function(t){"use strict";
//! moment.js locale configuration
var e="ene._feb._mar._abr._may._jun._jul._ago._sep._oct._nov._dic.".split("_"),n="ene_feb_mar_abr_may_jun_jul_ago_sep_oct_nov_dic".split("_"),a=[/^ene/i,/^feb/i,/^mar/i,/^abr/i,/^may/i,/^jun/i,/^jul/i,/^ago/i,/^sep/i,/^oct/i,/^nov/i,/^dic/i],r=/^(enero|febrero|marzo|abril|mayo|junio|julio|agosto|septiembre|octubre|noviembre|diciembre|ene\.?|feb\.?|mar\.?|abr\.?|may\.?|jun\.?|jul\.?|ago\.?|sep\.?|oct\.?|nov\.?|dic\.?)/i,i=t.defineLocale("es-mx",{months:"enero_febrero_marzo_abril_mayo_junio_julio_agosto_septiembre_octubre_noviembre_diciembre".split("_"),monthsShort:function(t,a){return t?/-MMM-/.test(a)?n[t.month()]:e[t.month()]:e},monthsRegex:r,monthsShortRegex:r,monthsStrictRegex:/^(enero|febrero|marzo|abril|mayo|junio|julio|agosto|septiembre|octubre|noviembre|diciembre)/i,monthsShortStrictRegex:/^(ene\.?|feb\.?|mar\.?|abr\.?|may\.?|jun\.?|jul\.?|ago\.?|sep\.?|oct\.?|nov\.?|dic\.?)/i,monthsParse:a,longMonthsParse:a,shortMonthsParse:a,weekdays:"domingo_lunes_martes_miércoles_jueves_viernes_sábado".split("_"),weekdaysShort:"dom._lun._mar._mié._jue._vie._sáb.".split("_"),weekdaysMin:"do_lu_ma_mi_ju_vi_sá".split("_"),weekdaysParseExact:!0,longDateFormat:{LT:"H:mm",LTS:"H:mm:ss",L:"DD/MM/YYYY",LL:"D [de] MMMM [de] YYYY",LLL:"D [de] MMMM [de] YYYY H:mm",LLLL:"dddd, D [de] MMMM [de] YYYY H:mm"},calendar:{sameDay:function(){return"[hoy a la"+(1!==this.hours()?"s":"")+"] LT"},nextDay:function(){return"[mañana a la"+(1!==this.hours()?"s":"")+"] LT"},nextWeek:function(){return"dddd [a la"+(1!==this.hours()?"s":"")+"] LT"},lastDay:function(){return"[ayer a la"+(1!==this.hours()?"s":"")+"] LT"},lastWeek:function(){return"[el] dddd [pasado a la"+(1!==this.hours()?"s":"")+"] LT"},sameElse:"L"},relativeTime:{future:"en %s",past:"hace %s",s:"unos segundos",ss:"%d segundos",m:"un minuto",mm:"%d minutos",h:"una hora",hh:"%d horas",d:"un día",dd:"%d días",w:"una semana",ww:"%d semanas",M:"un mes",MM:"%d meses",y:"un año",yy:"%d años"},dayOfMonthOrdinalParse:/\d{1,2}º/,ordinal:"%dº",week:{dow:0,doy:4},invalidDate:"Fecha inválida"});return i}))},1146:function(t,e,n){(function(t,e){e(n(381))})(0,(function(t){"use strict";
//! moment.js locale configuration
var e="ene._feb._mar._abr._may._jun._jul._ago._sep._oct._nov._dic.".split("_"),n="ene_feb_mar_abr_may_jun_jul_ago_sep_oct_nov_dic".split("_"),a=[/^ene/i,/^feb/i,/^mar/i,/^abr/i,/^may/i,/^jun/i,/^jul/i,/^ago/i,/^sep/i,/^oct/i,/^nov/i,/^dic/i],r=/^(enero|febrero|marzo|abril|mayo|junio|julio|agosto|septiembre|octubre|noviembre|diciembre|ene\.?|feb\.?|mar\.?|abr\.?|may\.?|jun\.?|jul\.?|ago\.?|sep\.?|oct\.?|nov\.?|dic\.?)/i,i=t.defineLocale("es-us",{months:"enero_febrero_marzo_abril_mayo_junio_julio_agosto_septiembre_octubre_noviembre_diciembre".split("_"),monthsShort:function(t,a){return t?/-MMM-/.test(a)?n[t.month()]:e[t.month()]:e},monthsRegex:r,monthsShortRegex:r,monthsStrictRegex:/^(enero|febrero|marzo|abril|mayo|junio|julio|agosto|septiembre|octubre|noviembre|diciembre)/i,monthsShortStrictRegex:/^(ene\.?|feb\.?|mar\.?|abr\.?|may\.?|jun\.?|jul\.?|ago\.?|sep\.?|oct\.?|nov\.?|dic\.?)/i,monthsParse:a,longMonthsParse:a,shortMonthsParse:a,weekdays:"domingo_lunes_martes_miércoles_jueves_viernes_sábado".split("_"),weekdaysShort:"dom._lun._mar._mié._jue._vie._sáb.".split("_"),weekdaysMin:"do_lu_ma_mi_ju_vi_sá".split("_"),weekdaysParseExact:!0,longDateFormat:{LT:"h:mm A",LTS:"h:mm:ss A",L:"MM/DD/YYYY",LL:"D [de] MMMM [de] YYYY",LLL:"D [de] MMMM [de] YYYY h:mm A",LLLL:"dddd, D [de] MMMM [de] YYYY h:mm A"},calendar:{sameDay:function(){return"[hoy a la"+(1!==this.hours()?"s":"")+"] LT"},nextDay:function(){return"[mañana a la"+(1!==this.hours()?"s":"")+"] LT"},nextWeek:function(){return"dddd [a la"+(1!==this.hours()?"s":"")+"] LT"},lastDay:function(){return"[ayer a la"+(1!==this.hours()?"s":"")+"] LT"},lastWeek:function(){return"[el] dddd [pasado a la"+(1!==this.hours()?"s":"")+"] LT"},sameElse:"L"},relativeTime:{future:"en %s",past:"hace %s",s:"unos segundos",ss:"%d segundos",m:"un minuto",mm:"%d minutos",h:"una hora",hh:"%d horas",d:"un día",dd:"%d días",w:"una semana",ww:"%d semanas",M:"un mes",MM:"%d meses",y:"un año",yy:"%d años"},dayOfMonthOrdinalParse:/\d{1,2}º/,ordinal:"%dº",week:{dow:0,doy:6}});return i}))},5655:function(t,e,n){(function(t,e){e(n(381))})(0,(function(t){"use strict";
//! moment.js locale configuration
var e="ene._feb._mar._abr._may._jun._jul._ago._sep._oct._nov._dic.".split("_"),n="ene_feb_mar_abr_may_jun_jul_ago_sep_oct_nov_dic".split("_"),a=[/^ene/i,/^feb/i,/^mar/i,/^abr/i,/^may/i,/^jun/i,/^jul/i,/^ago/i,/^sep/i,/^oct/i,/^nov/i,/^dic/i],r=/^(enero|febrero|marzo|abril|mayo|junio|julio|agosto|septiembre|octubre|noviembre|diciembre|ene\.?|feb\.?|mar\.?|abr\.?|may\.?|jun\.?|jul\.?|ago\.?|sep\.?|oct\.?|nov\.?|dic\.?)/i,i=t.defineLocale("es",{months:"enero_febrero_marzo_abril_mayo_junio_julio_agosto_septiembre_octubre_noviembre_diciembre".split("_"),monthsShort:function(t,a){return t?/-MMM-/.test(a)?n[t.month()]:e[t.month()]:e},monthsRegex:r,monthsShortRegex:r,monthsStrictRegex:/^(enero|febrero|marzo|abril|mayo|junio|julio|agosto|septiembre|octubre|noviembre|diciembre)/i,monthsShortStrictRegex:/^(ene\.?|feb\.?|mar\.?|abr\.?|may\.?|jun\.?|jul\.?|ago\.?|sep\.?|oct\.?|nov\.?|dic\.?)/i,monthsParse:a,longMonthsParse:a,shortMonthsParse:a,weekdays:"domingo_lunes_martes_miércoles_jueves_viernes_sábado".split("_"),weekdaysShort:"dom._lun._mar._mié._jue._vie._sáb.".split("_"),weekdaysMin:"do_lu_ma_mi_ju_vi_sá".split("_"),weekdaysParseExact:!0,longDateFormat:{LT:"H:mm",LTS:"H:mm:ss",L:"DD/MM/YYYY",LL:"D [de] MMMM [de] YYYY",LLL:"D [de] MMMM [de] YYYY H:mm",LLLL:"dddd, D [de] MMMM [de] YYYY H:mm"},calendar:{sameDay:function(){return"[hoy a la"+(1!==this.hours()?"s":"")+"] LT"},nextDay:function(){return"[mañana a la"+(1!==this.hours()?"s":"")+"] LT"},nextWeek:function(){return"dddd [a la"+(1!==this.hours()?"s":"")+"] LT"},lastDay:function(){return"[ayer a la"+(1!==this.hours()?"s":"")+"] LT"},lastWeek:function(){return"[el] dddd [pasado a la"+(1!==this.hours()?"s":"")+"] LT"},sameElse:"L"},relativeTime:{future:"en %s",past:"hace %s",s:"unos segundos",ss:"%d segundos",m:"un minuto",mm:"%d minutos",h:"una hora",hh:"%d horas",d:"un día",dd:"%d días",w:"una semana",ww:"%d semanas",M:"un mes",MM:"%d meses",y:"un año",yy:"%d años"},dayOfMonthOrdinalParse:/\d{1,2}º/,ordinal:"%dº",week:{dow:1,doy:4},invalidDate:"Fecha inválida"});return i}))},5603:function(t,e,n){(function(t,e){e(n(381))})(0,(function(t){"use strict";
//! moment.js locale configuration
function e(t,e,n,a){var r={s:["mõne sekundi","mõni sekund","paar sekundit"],ss:[t+"sekundi",t+"sekundit"],m:["ühe minuti","üks minut"],mm:[t+" minuti",t+" minutit"],h:["ühe tunni","tund aega","üks tund"],hh:[t+" tunni",t+" tundi"],d:["ühe päeva","üks päev"],M:["kuu aja","kuu aega","üks kuu"],MM:[t+" kuu",t+" kuud"],y:["ühe aasta","aasta","üks aasta"],yy:[t+" aasta",t+" aastat"]};return e?r[n][2]?r[n][2]:r[n][1]:a?r[n][0]:r[n][1]}var n=t.defineLocale("et",{months:"jaanuar_veebruar_märts_aprill_mai_juuni_juuli_august_september_oktoober_november_detsember".split("_"),monthsShort:"jaan_veebr_märts_apr_mai_juuni_juuli_aug_sept_okt_nov_dets".split("_"),weekdays:"pühapäev_esmaspäev_teisipäev_kolmapäev_neljapäev_reede_laupäev".split("_"),weekdaysShort:"P_E_T_K_N_R_L".split("_"),weekdaysMin:"P_E_T_K_N_R_L".split("_"),longDateFormat:{LT:"H:mm",LTS:"H:mm:ss",L:"DD.MM.YYYY",LL:"D. MMMM YYYY",LLL:"D. MMMM YYYY H:mm",LLLL:"dddd, D. MMMM YYYY H:mm"},calendar:{sameDay:"[Täna,] LT",nextDay:"[Homme,] LT",nextWeek:"[Järgmine] dddd LT",lastDay:"[Eile,] LT",lastWeek:"[Eelmine] dddd LT",sameElse:"L"},relativeTime:{future:"%s pärast",past:"%s tagasi",s:e,ss:e,m:e,mm:e,h:e,hh:e,d:e,dd:"%d päeva",M:e,MM:e,y:e,yy:e},dayOfMonthOrdinalParse:/\d{1,2}\./,ordinal:"%d.",week:{dow:1,doy:4}});return n}))},7763:function(t,e,n){(function(t,e){e(n(381))})(0,(function(t){"use strict";
//! moment.js locale configuration
var e=t.defineLocale("eu",{months:"urtarrila_otsaila_martxoa_apirila_maiatza_ekaina_uztaila_abuztua_iraila_urria_azaroa_abendua".split("_"),monthsShort:"urt._ots._mar._api._mai._eka._uzt._abu._ira._urr._aza._abe.".split("_"),monthsParseExact:!0,weekdays:"igandea_astelehena_asteartea_asteazkena_osteguna_ostirala_larunbata".split("_"),weekdaysShort:"ig._al._ar._az._og._ol._lr.".split("_"),weekdaysMin:"ig_al_ar_az_og_ol_lr".split("_"),weekdaysParseExact:!0,longDateFormat:{LT:"HH:mm",LTS:"HH:mm:ss",L:"YYYY-MM-DD",LL:"YYYY[ko] MMMM[ren] D[a]",LLL:"YYYY[ko] MMMM[ren] D[a] HH:mm",LLLL:"dddd, YYYY[ko] MMMM[ren] D[a] HH:mm",l:"YYYY-M-D",ll:"YYYY[ko] MMM D[a]",lll:"YYYY[ko] MMM D[a] HH:mm",llll:"ddd, YYYY[ko] MMM D[a] HH:mm"},calendar:{sameDay:"[gaur] LT[etan]",nextDay:"[bihar] LT[etan]",nextWeek:"dddd LT[etan]",lastDay:"[atzo] LT[etan]",lastWeek:"[aurreko] dddd LT[etan]",sameElse:"L"},relativeTime:{future:"%s barru",past:"duela %s",s:"segundo batzuk",ss:"%d segundo",m:"minutu bat",mm:"%d minutu",h:"ordu bat",hh:"%d ordu",d:"egun bat",dd:"%d egun",M:"hilabete bat",MM:"%d hilabete",y:"urte bat",yy:"%d urte"},dayOfMonthOrdinalParse:/\d{1,2}\./,ordinal:"%d.",week:{dow:1,doy:7}});return e}))},6959:function(t,e,n){(function(t,e){e(n(381))})(0,(function(t){"use strict";
//! moment.js locale configuration
var e={1:"۱",2:"۲",3:"۳",4:"۴",5:"۵",6:"۶",7:"۷",8:"۸",9:"۹",0:"۰"},n={"۱":"1","۲":"2","۳":"3","۴":"4","۵":"5","۶":"6","۷":"7","۸":"8","۹":"9","۰":"0"},a=t.defineLocale("fa",{months:"ژانویه_فوریه_مارس_آوریل_مه_ژوئن_ژوئیه_اوت_سپتامبر_اکتبر_نوامبر_دسامبر".split("_"),monthsShort:"ژانویه_فوریه_مارس_آوریل_مه_ژوئن_ژوئیه_اوت_سپتامبر_اکتبر_نوامبر_دسامبر".split("_"),weekdays:"یک‌شنبه_دوشنبه_سه‌شنبه_چهارشنبه_پنج‌شنبه_جمعه_شنبه".split("_"),weekdaysShort:"یک‌شنبه_دوشنبه_سه‌شنبه_چهارشنبه_پنج‌شنبه_جمعه_شنبه".split("_"),weekdaysMin:"ی_د_س_چ_پ_ج_ش".split("_"),weekdaysParseExact:!0,longDateFormat:{LT:"HH:mm",LTS:"HH:mm:ss",L:"DD/MM/YYYY",LL:"D MMMM YYYY",LLL:"D MMMM YYYY HH:mm",LLLL:"dddd, D MMMM YYYY HH:mm"},meridiemParse:/قبل از ظهر|بعد از ظهر/,isPM:function(t){return/بعد از ظهر/.test(t)},meridiem:function(t,e,n){return t<12?"قبل از ظهر":"بعد از ظهر"},calendar:{sameDay:"[امروز ساعت] LT",nextDay:"[فردا ساعت] LT",nextWeek:"dddd [ساعت] LT",lastDay:"[دیروز ساعت] LT",lastWeek:"dddd [پیش] [ساعت] LT",sameElse:"L"},relativeTime:{future:"در %s",past:"%s پیش",s:"چند ثانیه",ss:"%d ثانیه",m:"یک دقیقه",mm:"%d دقیقه",h:"یک ساعت",hh:"%d ساعت",d:"یک روز",dd:"%d روز",M:"یک ماه",MM:"%d ماه",y:"یک سال",yy:"%d سال"},preparse:function(t){return t.replace(/[۰-۹]/g,(function(t){return n[t]})).replace(/،/g,",")},postformat:function(t){return t.replace(/\d/g,(function(t){return e[t]})).replace(/,/g,"،")},dayOfMonthOrdinalParse:/\d{1,2}م/,ordinal:"%dم",week:{dow:6,doy:12}});return a}))},1897:function(t,e,n){(function(t,e){e(n(381))})(0,(function(t){"use strict";
//! moment.js locale configuration
var e="nolla yksi kaksi kolme neljä viisi kuusi seitsemän kahdeksan yhdeksän".split(" "),n=["nolla","yhden","kahden","kolmen","neljän","viiden","kuuden",e[7],e[8],e[9]];function a(t,e,n,a){var i="";switch(n){case"s":return a?"muutaman sekunnin":"muutama sekunti";case"ss":i=a?"sekunnin":"sekuntia";break;case"m":return a?"minuutin":"minuutti";case"mm":i=a?"minuutin":"minuuttia";break;case"h":return a?"tunnin":"tunti";case"hh":i=a?"tunnin":"tuntia";break;case"d":return a?"päivän":"päivä";case"dd":i=a?"päivän":"päivää";break;case"M":return a?"kuukauden":"kuukausi";case"MM":i=a?"kuukauden":"kuukautta";break;case"y":return a?"vuoden":"vuosi";case"yy":i=a?"vuoden":"vuotta";break}return i=r(t,a)+" "+i,i}function r(t,a){return t<10?a?n[t]:e[t]:t}var i=t.defineLocale("fi",{months:"tammikuu_helmikuu_maaliskuu_huhtikuu_toukokuu_kesäkuu_heinäkuu_elokuu_syyskuu_lokakuu_marraskuu_joulukuu".split("_"),monthsShort:"tammi_helmi_maalis_huhti_touko_kesä_heinä_elo_syys_loka_marras_joulu".split("_"),weekdays:"sunnuntai_maanantai_tiistai_keskiviikko_torstai_perjantai_lauantai".split("_"),weekdaysShort:"su_ma_ti_ke_to_pe_la".split("_"),weekdaysMin:"su_ma_ti_ke_to_pe_la".split("_"),longDateFormat:{LT:"HH.mm",LTS:"HH.mm.ss",L:"DD.MM.YYYY",LL:"Do MMMM[ta] YYYY",LLL:"Do MMMM[ta] YYYY, [klo] HH.mm",LLLL:"dddd, Do MMMM[ta] YYYY, [klo] HH.mm",l:"D.M.YYYY",ll:"Do MMM YYYY",lll:"Do MMM YYYY, [klo] HH.mm",llll:"ddd, Do MMM YYYY, [klo] HH.mm"},calendar:{sameDay:"[tänään] [klo] LT",nextDay:"[huomenna] [klo] LT",nextWeek:"dddd [klo] LT",lastDay:"[eilen] [klo] LT",lastWeek:"[viime] dddd[na] [klo] LT",sameElse:"L"},relativeTime:{future:"%s päästä",past:"%s sitten",s:a,ss:a,m:a,mm:a,h:a,hh:a,d:a,dd:a,M:a,MM:a,y:a,yy:a},dayOfMonthOrdinalParse:/\d{1,2}\./,ordinal:"%d.",week:{dow:1,doy:4}});return i}))},2549:function(t,e,n){(function(t,e){e(n(381))})(0,(function(t){"use strict";
//! moment.js locale configuration
var e=t.defineLocale("fil",{months:"Enero_Pebrero_Marso_Abril_Mayo_Hunyo_Hulyo_Agosto_Setyembre_Oktubre_Nobyembre_Disyembre".split("_"),monthsShort:"Ene_Peb_Mar_Abr_May_Hun_Hul_Ago_Set_Okt_Nob_Dis".split("_"),weekdays:"Linggo_Lunes_Martes_Miyerkules_Huwebes_Biyernes_Sabado".split("_"),weekdaysShort:"Lin_Lun_Mar_Miy_Huw_Biy_Sab".split("_"),weekdaysMin:"Li_Lu_Ma_Mi_Hu_Bi_Sab".split("_"),longDateFormat:{LT:"HH:mm",LTS:"HH:mm:ss",L:"MM/D/YYYY",LL:"MMMM D, YYYY",LLL:"MMMM D, YYYY HH:mm",LLLL:"dddd, MMMM DD, YYYY HH:mm"},calendar:{sameDay:"LT [ngayong araw]",nextDay:"[Bukas ng] LT",nextWeek:"LT [sa susunod na] dddd",lastDay:"LT [kahapon]",lastWeek:"LT [noong nakaraang] dddd",sameElse:"L"},relativeTime:{future:"sa loob ng %s",past:"%s ang nakalipas",s:"ilang segundo",ss:"%d segundo",m:"isang minuto",mm:"%d minuto",h:"isang oras",hh:"%d oras",d:"isang araw",dd:"%d araw",M:"isang buwan",MM:"%d buwan",y:"isang taon",yy:"%d taon"},dayOfMonthOrdinalParse:/\d{1,2}/,ordinal:function(t){return t},week:{dow:1,doy:4}});return e}))},4694:function(t,e,n){(function(t,e){e(n(381))})(0,(function(t){"use strict";
//! moment.js locale configuration
var e=t.defineLocale("fo",{months:"januar_februar_mars_apríl_mai_juni_juli_august_september_oktober_november_desember".split("_"),monthsShort:"jan_feb_mar_apr_mai_jun_jul_aug_sep_okt_nov_des".split("_"),weekdays:"sunnudagur_mánadagur_týsdagur_mikudagur_hósdagur_fríggjadagur_leygardagur".split("_"),weekdaysShort:"sun_mán_týs_mik_hós_frí_ley".split("_"),weekdaysMin:"su_má_tý_mi_hó_fr_le".split("_"),longDateFormat:{LT:"HH:mm",LTS:"HH:mm:ss",L:"DD/MM/YYYY",LL:"D MMMM YYYY",LLL:"D MMMM YYYY HH:mm",LLLL:"dddd D. MMMM, YYYY HH:mm"},calendar:{sameDay:"[Í dag kl.] LT",nextDay:"[Í morgin kl.] LT",nextWeek:"dddd [kl.] LT",lastDay:"[Í gjár kl.] LT",lastWeek:"[síðstu] dddd [kl] LT",sameElse:"L"},relativeTime:{future:"um %s",past:"%s síðani",s:"fá sekund",ss:"%d sekundir",m:"ein minuttur",mm:"%d minuttir",h:"ein tími",hh:"%d tímar",d:"ein dagur",dd:"%d dagar",M:"ein mánaður",MM:"%d mánaðir",y:"eitt ár",yy:"%d ár"},dayOfMonthOrdinalParse:/\d{1,2}\./,ordinal:"%d.",week:{dow:1,doy:4}});return e}))},3049:function(t,e,n){(function(t,e){e(n(381))})(0,(function(t){"use strict";
//! moment.js locale configuration
var e=t.defineLocale("fr-ca",{months:"janvier_février_mars_avril_mai_juin_juillet_août_septembre_octobre_novembre_décembre".split("_"),monthsShort:"janv._févr._mars_avr._mai_juin_juil._août_sept._oct._nov._déc.".split("_"),monthsParseExact:!0,weekdays:"dimanche_lundi_mardi_mercredi_jeudi_vendredi_samedi".split("_"),weekdaysShort:"dim._lun._mar._mer._jeu._ven._sam.".split("_"),weekdaysMin:"di_lu_ma_me_je_ve_sa".split("_"),weekdaysParseExact:!0,longDateFormat:{LT:"HH:mm",LTS:"HH:mm:ss",L:"YYYY-MM-DD",LL:"D MMMM YYYY",LLL:"D MMMM YYYY HH:mm",LLLL:"dddd D MMMM YYYY HH:mm"},calendar:{sameDay:"[Aujourd’hui à] LT",nextDay:"[Demain à] LT",nextWeek:"dddd [à] LT",lastDay:"[Hier à] LT",lastWeek:"dddd [dernier à] LT",sameElse:"L"},relativeTime:{future:"dans %s",past:"il y a %s",s:"quelques secondes",ss:"%d secondes",m:"une minute",mm:"%d minutes",h:"une heure",hh:"%d heures",d:"un jour",dd:"%d jours",M:"un mois",MM:"%d mois",y:"un an",yy:"%d ans"},dayOfMonthOrdinalParse:/\d{1,2}(er|e)/,ordinal:function(t,e){switch(e){default:case"M":case"Q":case"D":case"DDD":case"d":return t+(1===t?"er":"e");case"w":case"W":return t+(1===t?"re":"e")}}});return e}))},2330:function(t,e,n){(function(t,e){e(n(381))})(0,(function(t){"use strict";
//! moment.js locale configuration
var e=t.defineLocale("fr-ch",{months:"janvier_février_mars_avril_mai_juin_juillet_août_septembre_octobre_novembre_décembre".split("_"),monthsShort:"janv._févr._mars_avr._mai_juin_juil._août_sept._oct._nov._déc.".split("_"),monthsParseExact:!0,weekdays:"dimanche_lundi_mardi_mercredi_jeudi_vendredi_samedi".split("_"),weekdaysShort:"dim._lun._mar._mer._jeu._ven._sam.".split("_"),weekdaysMin:"di_lu_ma_me_je_ve_sa".split("_"),weekdaysParseExact:!0,longDateFormat:{LT:"HH:mm",LTS:"HH:mm:ss",L:"DD.MM.YYYY",LL:"D MMMM YYYY",LLL:"D MMMM YYYY HH:mm",LLLL:"dddd D MMMM YYYY HH:mm"},calendar:{sameDay:"[Aujourd’hui à] LT",nextDay:"[Demain à] LT",nextWeek:"dddd [à] LT",lastDay:"[Hier à] LT",lastWeek:"dddd [dernier à] LT",sameElse:"L"},relativeTime:{future:"dans %s",past:"il y a %s",s:"quelques secondes",ss:"%d secondes",m:"une minute",mm:"%d minutes",h:"une heure",hh:"%d heures",d:"un jour",dd:"%d jours",M:"un mois",MM:"%d mois",y:"un an",yy:"%d ans"},dayOfMonthOrdinalParse:/\d{1,2}(er|e)/,ordinal:function(t,e){switch(e){default:case"M":case"Q":case"D":case"DDD":case"d":return t+(1===t?"er":"e");case"w":case"W":return t+(1===t?"re":"e")}},week:{dow:1,doy:4}});return e}))},4470:function(t,e,n){(function(t,e){e(n(381))})(0,(function(t){"use strict";
//! moment.js locale configuration
var e=/^(janvier|février|mars|avril|mai|juin|juillet|août|septembre|octobre|novembre|décembre)/i,n=/(janv\.?|févr\.?|mars|avr\.?|mai|juin|juil\.?|août|sept\.?|oct\.?|nov\.?|déc\.?)/i,a=/(janv\.?|févr\.?|mars|avr\.?|mai|juin|juil\.?|août|sept\.?|oct\.?|nov\.?|déc\.?|janvier|février|mars|avril|mai|juin|juillet|août|septembre|octobre|novembre|décembre)/i,r=[/^janv/i,/^févr/i,/^mars/i,/^avr/i,/^mai/i,/^juin/i,/^juil/i,/^août/i,/^sept/i,/^oct/i,/^nov/i,/^déc/i],i=t.defineLocale("fr",{months:"janvier_février_mars_avril_mai_juin_juillet_août_septembre_octobre_novembre_décembre".split("_"),monthsShort:"janv._févr._mars_avr._mai_juin_juil._août_sept._oct._nov._déc.".split("_"),monthsRegex:a,monthsShortRegex:a,monthsStrictRegex:e,monthsShortStrictRegex:n,monthsParse:r,longMonthsParse:r,shortMonthsParse:r,weekdays:"dimanche_lundi_mardi_mercredi_jeudi_vendredi_samedi".split("_"),weekdaysShort:"dim._lun._mar._mer._jeu._ven._sam.".split("_"),weekdaysMin:"di_lu_ma_me_je_ve_sa".split("_"),weekdaysParseExact:!0,longDateFormat:{LT:"HH:mm",LTS:"HH:mm:ss",L:"DD/MM/YYYY",LL:"D MMMM YYYY",LLL:"D MMMM YYYY HH:mm",LLLL:"dddd D MMMM YYYY HH:mm"},calendar:{sameDay:"[Aujourd’hui à] LT",nextDay:"[Demain à] LT",nextWeek:"dddd [à] LT",lastDay:"[Hier à] LT",lastWeek:"dddd [dernier à] LT",sameElse:"L"},relativeTime:{future:"dans %s",past:"il y a %s",s:"quelques secondes",ss:"%d secondes",m:"une minute",mm:"%d minutes",h:"une heure",hh:"%d heures",d:"un jour",dd:"%d jours",w:"une semaine",ww:"%d semaines",M:"un mois",MM:"%d mois",y:"un an",yy:"%d ans"},dayOfMonthOrdinalParse:/\d{1,2}(er|)/,ordinal:function(t,e){switch(e){case"D":return t+(1===t?"er":"");default:case"M":case"Q":case"DDD":case"d":return t+(1===t?"er":"e");case"w":case"W":return t+(1===t?"re":"e")}},week:{dow:1,doy:4}});return i}))},5044:function(t,e,n){(function(t,e){e(n(381))})(0,(function(t){"use strict";
//! moment.js locale configuration
var e="jan._feb._mrt._apr._mai_jun._jul._aug._sep._okt._nov._des.".split("_"),n="jan_feb_mrt_apr_mai_jun_jul_aug_sep_okt_nov_des".split("_"),a=t.defineLocale("fy",{months:"jannewaris_febrewaris_maart_april_maaie_juny_july_augustus_septimber_oktober_novimber_desimber".split("_"),monthsShort:function(t,a){return t?/-MMM-/.test(a)?n[t.month()]:e[t.month()]:e},monthsParseExact:!0,weekdays:"snein_moandei_tiisdei_woansdei_tongersdei_freed_sneon".split("_"),weekdaysShort:"si._mo._ti._wo._to._fr._so.".split("_"),weekdaysMin:"Si_Mo_Ti_Wo_To_Fr_So".split("_"),weekdaysParseExact:!0,longDateFormat:{LT:"HH:mm",LTS:"HH:mm:ss",L:"DD-MM-YYYY",LL:"D MMMM YYYY",LLL:"D MMMM YYYY HH:mm",LLLL:"dddd D MMMM YYYY HH:mm"},calendar:{sameDay:"[hjoed om] LT",nextDay:"[moarn om] LT",nextWeek:"dddd [om] LT",lastDay:"[juster om] LT",lastWeek:"[ôfrûne] dddd [om] LT",sameElse:"L"},relativeTime:{future:"oer %s",past:"%s lyn",s:"in pear sekonden",ss:"%d sekonden",m:"ien minút",mm:"%d minuten",h:"ien oere",hh:"%d oeren",d:"ien dei",dd:"%d dagen",M:"ien moanne",MM:"%d moannen",y:"ien jier",yy:"%d jierren"},dayOfMonthOrdinalParse:/\d{1,2}(ste|de)/,ordinal:function(t){return t+(1===t||8===t||t>=20?"ste":"de")},week:{dow:1,doy:4}});return a}))},9295:function(t,e,n){(function(t,e){e(n(381))})(0,(function(t){"use strict";
//! moment.js locale configuration
var e=["Eanáir","Feabhra","Márta","Aibreán","Bealtaine","Meitheamh","Iúil","Lúnasa","Meán Fómhair","Deireadh Fómhair","Samhain","Nollaig"],n=["Ean","Feabh","Márt","Aib","Beal","Meith","Iúil","Lún","M.F.","D.F.","Samh","Noll"],a=["Dé Domhnaigh","Dé Luain","Dé Máirt","Dé Céadaoin","Déardaoin","Dé hAoine","Dé Sathairn"],r=["Domh","Luan","Máirt","Céad","Déar","Aoine","Sath"],i=["Do","Lu","Má","Cé","Dé","A","Sa"],o=t.defineLocale("ga",{months:e,monthsShort:n,monthsParseExact:!0,weekdays:a,weekdaysShort:r,weekdaysMin:i,longDateFormat:{LT:"HH:mm",LTS:"HH:mm:ss",L:"DD/MM/YYYY",LL:"D MMMM YYYY",LLL:"D MMMM YYYY HH:mm",LLLL:"dddd, D MMMM YYYY HH:mm"},calendar:{sameDay:"[Inniu ag] LT",nextDay:"[Amárach ag] LT",nextWeek:"dddd [ag] LT",lastDay:"[Inné ag] LT",lastWeek:"dddd [seo caite] [ag] LT",sameElse:"L"},relativeTime:{future:"i %s",past:"%s ó shin",s:"cúpla soicind",ss:"%d soicind",m:"nóiméad",mm:"%d nóiméad",h:"uair an chloig",hh:"%d uair an chloig",d:"lá",dd:"%d lá",M:"mí",MM:"%d míonna",y:"bliain",yy:"%d bliain"},dayOfMonthOrdinalParse:/\d{1,2}(d|na|mh)/,ordinal:function(t){var e=1===t?"d":t%10===2?"na":"mh";return t+e},week:{dow:1,doy:4}});return o}))},2101:function(t,e,n){(function(t,e){e(n(381))})(0,(function(t){"use strict";
//! moment.js locale configuration
var e=["Am Faoilleach","An Gearran","Am Màrt","An Giblean","An Cèitean","An t-Ògmhios","An t-Iuchar","An Lùnastal","An t-Sultain","An Dàmhair","An t-Samhain","An Dùbhlachd"],n=["Faoi","Gear","Màrt","Gibl","Cèit","Ògmh","Iuch","Lùn","Sult","Dàmh","Samh","Dùbh"],a=["Didòmhnaich","Diluain","Dimàirt","Diciadain","Diardaoin","Dihaoine","Disathairne"],r=["Did","Dil","Dim","Dic","Dia","Dih","Dis"],i=["Dò","Lu","Mà","Ci","Ar","Ha","Sa"],o=t.defineLocale("gd",{months:e,monthsShort:n,monthsParseExact:!0,weekdays:a,weekdaysShort:r,weekdaysMin:i,longDateFormat:{LT:"HH:mm",LTS:"HH:mm:ss",L:"DD/MM/YYYY",LL:"D MMMM YYYY",LLL:"D MMMM YYYY HH:mm",LLLL:"dddd, D MMMM YYYY HH:mm"},calendar:{sameDay:"[An-diugh aig] LT",nextDay:"[A-màireach aig] LT",nextWeek:"dddd [aig] LT",lastDay:"[An-dè aig] LT",lastWeek:"dddd [seo chaidh] [aig] LT",sameElse:"L"},relativeTime:{future:"ann an %s",past:"bho chionn %s",s:"beagan diogan",ss:"%d diogan",m:"mionaid",mm:"%d mionaidean",h:"uair",hh:"%d uairean",d:"latha",dd:"%d latha",M:"mìos",MM:"%d mìosan",y:"bliadhna",yy:"%d bliadhna"},dayOfMonthOrdinalParse:/\d{1,2}(d|na|mh)/,ordinal:function(t){var e=1===t?"d":t%10===2?"na":"mh";return t+e},week:{dow:1,doy:4}});return o}))},8794:function(t,e,n){(function(t,e){e(n(381))})(0,(function(t){"use strict";
//! moment.js locale configuration
var e=t.defineLocale("gl",{months:"xaneiro_febreiro_marzo_abril_maio_xuño_xullo_agosto_setembro_outubro_novembro_decembro".split("_"),monthsShort:"xan._feb._mar._abr._mai._xuñ._xul._ago._set._out._nov._dec.".split("_"),monthsParseExact:!0,weekdays:"domingo_luns_martes_mércores_xoves_venres_sábado".split("_"),weekdaysShort:"dom._lun._mar._mér._xov._ven._sáb.".split("_"),weekdaysMin:"do_lu_ma_mé_xo_ve_sá".split("_"),weekdaysParseExact:!0,longDateFormat:{LT:"H:mm",LTS:"H:mm:ss",L:"DD/MM/YYYY",LL:"D [de] MMMM [de] YYYY",LLL:"D [de] MMMM [de] YYYY H:mm",LLLL:"dddd, D [de] MMMM [de] YYYY H:mm"},calendar:{sameDay:function(){return"[hoxe "+(1!==this.hours()?"ás":"á")+"] LT"},nextDay:function(){return"[mañá "+(1!==this.hours()?"ás":"á")+"] LT"},nextWeek:function(){return"dddd ["+(1!==this.hours()?"ás":"a")+"] LT"},lastDay:function(){return"[onte "+(1!==this.hours()?"á":"a")+"] LT"},lastWeek:function(){return"[o] dddd [pasado "+(1!==this.hours()?"ás":"a")+"] LT"},sameElse:"L"},relativeTime:{future:function(t){return 0===t.indexOf("un")?"n"+t:"en "+t},past:"hai %s",s:"uns segundos",ss:"%d segundos",m:"un minuto",mm:"%d minutos",h:"unha hora",hh:"%d horas",d:"un día",dd:"%d días",M:"un mes",MM:"%d meses",y:"un ano",yy:"%d anos"},dayOfMonthOrdinalParse:/\d{1,2}º/,ordinal:"%dº",week:{dow:1,doy:4}});return e}))},7884:function(t,e,n){(function(t,e){e(n(381))})(0,(function(t){"use strict";
//! moment.js locale configuration
function e(t,e,n,a){var r={s:["थोडया सॅकंडांनी","थोडे सॅकंड"],ss:[t+" सॅकंडांनी",t+" सॅकंड"],m:["एका मिणटान","एक मिनूट"],mm:[t+" मिणटांनी",t+" मिणटां"],h:["एका वरान","एक वर"],hh:[t+" वरांनी",t+" वरां"],d:["एका दिसान","एक दीस"],dd:[t+" दिसांनी",t+" दीस"],M:["एका म्हयन्यान","एक म्हयनो"],MM:[t+" म्हयन्यानी",t+" म्हयने"],y:["एका वर्सान","एक वर्स"],yy:[t+" वर्सांनी",t+" वर्सां"]};return a?r[n][0]:r[n][1]}var n=t.defineLocale("gom-deva",{months:{standalone:"जानेवारी_फेब्रुवारी_मार्च_एप्रील_मे_जून_जुलय_ऑगस्ट_सप्टेंबर_ऑक्टोबर_नोव्हेंबर_डिसेंबर".split("_"),format:"जानेवारीच्या_फेब्रुवारीच्या_मार्चाच्या_एप्रीलाच्या_मेयाच्या_जूनाच्या_जुलयाच्या_ऑगस्टाच्या_सप्टेंबराच्या_ऑक्टोबराच्या_नोव्हेंबराच्या_डिसेंबराच्या".split("_"),isFormat:/MMMM(\s)+D[oD]?/},monthsShort:"जाने._फेब्रु._मार्च_एप्री._मे_जून_जुल._ऑग._सप्टें._ऑक्टो._नोव्हें._डिसें.".split("_"),monthsParseExact:!0,weekdays:"आयतार_सोमार_मंगळार_बुधवार_बिरेस्तार_सुक्रार_शेनवार".split("_"),weekdaysShort:"आयत._सोम._मंगळ._बुध._ब्रेस्त._सुक्र._शेन.".split("_"),weekdaysMin:"आ_सो_मं_बु_ब्रे_सु_शे".split("_"),weekdaysParseExact:!0,longDateFormat:{LT:"A h:mm [वाजतां]",LTS:"A h:mm:ss [वाजतां]",L:"DD-MM-YYYY",LL:"D MMMM YYYY",LLL:"D MMMM YYYY A h:mm [वाजतां]",LLLL:"dddd, MMMM Do, YYYY, A h:mm [वाजतां]",llll:"ddd, D MMM YYYY, A h:mm [वाजतां]"},calendar:{sameDay:"[आयज] LT",nextDay:"[फाल्यां] LT",nextWeek:"[फुडलो] dddd[,] LT",lastDay:"[काल] LT",lastWeek:"[फाटलो] dddd[,] LT",sameElse:"L"},relativeTime:{future:"%s",past:"%s आदीं",s:e,ss:e,m:e,mm:e,h:e,hh:e,d:e,dd:e,M:e,MM:e,y:e,yy:e},dayOfMonthOrdinalParse:/\d{1,2}(वेर)/,ordinal:function(t,e){switch(e){case"D":return t+"वेर";default:case"M":case"Q":case"DDD":case"d":case"w":case"W":return t}},week:{dow:0,doy:3},meridiemParse:/राती|सकाळीं|दनपारां|सांजे/,meridiemHour:function(t,e){return 12===t&&(t=0),"राती"===e?t<4?t:t+12:"सकाळीं"===e?t:"दनपारां"===e?t>12?t:t+12:"सांजे"===e?t+12:void 0},meridiem:function(t,e,n){return t<4?"राती":t<12?"सकाळीं":t<16?"दनपारां":t<20?"सांजे":"राती"}});return n}))},3168:function(t,e,n){(function(t,e){e(n(381))})(0,(function(t){"use strict";
//! moment.js locale configuration
function e(t,e,n,a){var r={s:["thoddea sekondamni","thodde sekond"],ss:[t+" sekondamni",t+" sekond"],m:["eka mintan","ek minut"],mm:[t+" mintamni",t+" mintam"],h:["eka voran","ek vor"],hh:[t+" voramni",t+" voram"],d:["eka disan","ek dis"],dd:[t+" disamni",t+" dis"],M:["eka mhoinean","ek mhoino"],MM:[t+" mhoineamni",t+" mhoine"],y:["eka vorsan","ek voros"],yy:[t+" vorsamni",t+" vorsam"]};return a?r[n][0]:r[n][1]}var n=t.defineLocale("gom-latn",{months:{standalone:"Janer_Febrer_Mars_Abril_Mai_Jun_Julai_Agost_Setembr_Otubr_Novembr_Dezembr".split("_"),format:"Janerachea_Febrerachea_Marsachea_Abrilachea_Maiachea_Junachea_Julaiachea_Agostachea_Setembrachea_Otubrachea_Novembrachea_Dezembrachea".split("_"),isFormat:/MMMM(\s)+D[oD]?/},monthsShort:"Jan._Feb._Mars_Abr._Mai_Jun_Jul._Ago._Set._Otu._Nov._Dez.".split("_"),monthsParseExact:!0,weekdays:"Aitar_Somar_Mongllar_Budhvar_Birestar_Sukrar_Son'var".split("_"),weekdaysShort:"Ait._Som._Mon._Bud._Bre._Suk._Son.".split("_"),weekdaysMin:"Ai_Sm_Mo_Bu_Br_Su_Sn".split("_"),weekdaysParseExact:!0,longDateFormat:{LT:"A h:mm [vazta]",LTS:"A h:mm:ss [vazta]",L:"DD-MM-YYYY",LL:"D MMMM YYYY",LLL:"D MMMM YYYY A h:mm [vazta]",LLLL:"dddd, MMMM Do, YYYY, A h:mm [vazta]",llll:"ddd, D MMM YYYY, A h:mm [vazta]"},calendar:{sameDay:"[Aiz] LT",nextDay:"[Faleam] LT",nextWeek:"[Fuddlo] dddd[,] LT",lastDay:"[Kal] LT",lastWeek:"[Fattlo] dddd[,] LT",sameElse:"L"},relativeTime:{future:"%s",past:"%s adim",s:e,ss:e,m:e,mm:e,h:e,hh:e,d:e,dd:e,M:e,MM:e,y:e,yy:e},dayOfMonthOrdinalParse:/\d{1,2}(er)/,ordinal:function(t,e){switch(e){case"D":return t+"er";default:case"M":case"Q":case"DDD":case"d":case"w":case"W":return t}},week:{dow:0,doy:3},meridiemParse:/rati|sokallim|donparam|sanje/,meridiemHour:function(t,e){return 12===t&&(t=0),"rati"===e?t<4?t:t+12:"sokallim"===e?t:"donparam"===e?t>12?t:t+12:"sanje"===e?t+12:void 0},meridiem:function(t,e,n){return t<4?"rati":t<12?"sokallim":t<16?"donparam":t<20?"sanje":"rati"}});return n}))},5349:function(t,e,n){(function(t,e){e(n(381))})(0,(function(t){"use strict";
//! moment.js locale configuration
var e={1:"૧",2:"૨",3:"૩",4:"૪",5:"૫",6:"૬",7:"૭",8:"૮",9:"૯",0:"૦"},n={"૧":"1","૨":"2","૩":"3","૪":"4","૫":"5","૬":"6","૭":"7","૮":"8","૯":"9","૦":"0"},a=t.defineLocale("gu",{months:"જાન્યુઆરી_ફેબ્રુઆરી_માર્ચ_એપ્રિલ_મે_જૂન_જુલાઈ_ઑગસ્ટ_સપ્ટેમ્બર_ઑક્ટ્બર_નવેમ્બર_ડિસેમ્બર".split("_"),monthsShort:"જાન્યુ._ફેબ્રુ._માર્ચ_એપ્રિ._મે_જૂન_જુલા._ઑગ._સપ્ટે._ઑક્ટ્._નવે._ડિસે.".split("_"),monthsParseExact:!0,weekdays:"રવિવાર_સોમવાર_મંગળવાર_બુધ્વાર_ગુરુવાર_શુક્રવાર_શનિવાર".split("_"),weekdaysShort:"રવિ_સોમ_મંગળ_બુધ્_ગુરુ_શુક્ર_શનિ".split("_"),weekdaysMin:"ર_સો_મં_બુ_ગુ_શુ_શ".split("_"),longDateFormat:{LT:"A h:mm વાગ્યે",LTS:"A h:mm:ss વાગ્યે",L:"DD/MM/YYYY",LL:"D MMMM YYYY",LLL:"D MMMM YYYY, A h:mm વાગ્યે",LLLL:"dddd, D MMMM YYYY, A h:mm વાગ્યે"},calendar:{sameDay:"[આજ] LT",nextDay:"[કાલે] LT",nextWeek:"dddd, LT",lastDay:"[ગઇકાલે] LT",lastWeek:"[પાછલા] dddd, LT",sameElse:"L"},relativeTime:{future:"%s મા",past:"%s પહેલા",s:"અમુક પળો",ss:"%d સેકંડ",m:"એક મિનિટ",mm:"%d મિનિટ",h:"એક કલાક",hh:"%d કલાક",d:"એક દિવસ",dd:"%d દિવસ",M:"એક મહિનો",MM:"%d મહિનો",y:"એક વર્ષ",yy:"%d વર્ષ"},preparse:function(t){return t.replace(/[૧૨૩૪૫૬૭૮૯૦]/g,(function(t){return n[t]}))},postformat:function(t){return t.replace(/\d/g,(function(t){return e[t]}))},meridiemParse:/રાત|બપોર|સવાર|સાંજ/,meridiemHour:function(t,e){return 12===t&&(t=0),"રાત"===e?t<4?t:t+12:"સવાર"===e?t:"બપોર"===e?t>=10?t:t+12:"સાંજ"===e?t+12:void 0},meridiem:function(t,e,n){return t<4?"રાત":t<10?"સવાર":t<17?"બપોર":t<20?"સાંજ":"રાત"},week:{dow:0,doy:6}});return a}))},4206:function(t,e,n){(function(t,e){e(n(381))})(0,(function(t){"use strict";
//! moment.js locale configuration
var e=t.defineLocale("he",{months:"ינואר_פברואר_מרץ_אפריל_מאי_יוני_יולי_אוגוסט_ספטמבר_אוקטובר_נובמבר_דצמבר".split("_"),monthsShort:"ינו׳_פבר׳_מרץ_אפר׳_מאי_יוני_יולי_אוג׳_ספט׳_אוק׳_נוב׳_דצמ׳".split("_"),weekdays:"ראשון_שני_שלישי_רביעי_חמישי_שישי_שבת".split("_"),weekdaysShort:"א׳_ב׳_ג׳_ד׳_ה׳_ו׳_ש׳".split("_"),weekdaysMin:"א_ב_ג_ד_ה_ו_ש".split("_"),longDateFormat:{LT:"HH:mm",LTS:"HH:mm:ss",L:"DD/MM/YYYY",LL:"D [ב]MMMM YYYY",LLL:"D [ב]MMMM YYYY HH:mm",LLLL:"dddd, D [ב]MMMM YYYY HH:mm",l:"D/M/YYYY",ll:"D MMM YYYY",lll:"D MMM YYYY HH:mm",llll:"ddd, D MMM YYYY HH:mm"},calendar:{sameDay:"[היום ב־]LT",nextDay:"[מחר ב־]LT",nextWeek:"dddd [בשעה] LT",lastDay:"[אתמול ב־]LT",lastWeek:"[ביום] dddd [האחרון בשעה] LT",sameElse:"L"},relativeTime:{future:"בעוד %s",past:"לפני %s",s:"מספר שניות",ss:"%d שניות",m:"דקה",mm:"%d דקות",h:"שעה",hh:function(t){return 2===t?"שעתיים":t+" שעות"},d:"יום",dd:function(t){return 2===t?"יומיים":t+" ימים"},M:"חודש",MM:function(t){return 2===t?"חודשיים":t+" חודשים"},y:"שנה",yy:function(t){return 2===t?"שנתיים":t%10===0&&10!==t?t+" שנה":t+" שנים"}},meridiemParse:/אחה"צ|לפנה"צ|אחרי הצהריים|לפני הצהריים|לפנות בוקר|בבוקר|בערב/i,isPM:function(t){return/^(אחה"צ|אחרי הצהריים|בערב)$/.test(t)},meridiem:function(t,e,n){return t<5?"לפנות בוקר":t<10?"בבוקר":t<12?n?'לפנה"צ':"לפני הצהריים":t<18?n?'אחה"צ':"אחרי הצהריים":"בערב"}});return e}))},94:function(t,e,n){(function(t,e){e(n(381))})(0,(function(t){"use strict";
//! moment.js locale configuration
var e={1:"१",2:"२",3:"३",4:"४",5:"५",6:"६",7:"७",8:"८",9:"९",0:"०"},n={"१":"1","२":"2","३":"3","४":"4","५":"5","६":"6","७":"7","८":"8","९":"9","०":"0"},a=[/^जन/i,/^फ़र|फर/i,/^मार्च/i,/^अप्रै/i,/^मई/i,/^जून/i,/^जुल/i,/^अग/i,/^सितं|सित/i,/^अक्टू/i,/^नव|नवं/i,/^दिसं|दिस/i],r=[/^जन/i,/^फ़र/i,/^मार्च/i,/^अप्रै/i,/^मई/i,/^जून/i,/^जुल/i,/^अग/i,/^सित/i,/^अक्टू/i,/^नव/i,/^दिस/i],i=t.defineLocale("hi",{months:{format:"जनवरी_फ़रवरी_मार्च_अप्रैल_मई_जून_जुलाई_अगस्त_सितम्बर_अक्टूबर_नवम्बर_दिसम्बर".split("_"),standalone:"जनवरी_फरवरी_मार्च_अप्रैल_मई_जून_जुलाई_अगस्त_सितंबर_अक्टूबर_नवंबर_दिसंबर".split("_")},monthsShort:"जन._फ़र._मार्च_अप्रै._मई_जून_जुल._अग._सित._अक्टू._नव._दिस.".split("_"),weekdays:"रविवार_सोमवार_मंगलवार_बुधवार_गुरूवार_शुक्रवार_शनिवार".split("_"),weekdaysShort:"रवि_सोम_मंगल_बुध_गुरू_शुक्र_शनि".split("_"),weekdaysMin:"र_सो_मं_बु_गु_शु_श".split("_"),longDateFormat:{LT:"A h:mm बजे",LTS:"A h:mm:ss बजे",L:"DD/MM/YYYY",LL:"D MMMM YYYY",LLL:"D MMMM YYYY, A h:mm बजे",LLLL:"dddd, D MMMM YYYY, A h:mm बजे"},monthsParse:a,longMonthsParse:a,shortMonthsParse:r,monthsRegex:/^(जनवरी|जन\.?|फ़रवरी|फरवरी|फ़र\.?|मार्च?|अप्रैल|अप्रै\.?|मई?|जून?|जुलाई|जुल\.?|अगस्त|अग\.?|सितम्बर|सितंबर|सित\.?|अक्टूबर|अक्टू\.?|नवम्बर|नवंबर|नव\.?|दिसम्बर|दिसंबर|दिस\.?)/i,monthsShortRegex:/^(जनवरी|जन\.?|फ़रवरी|फरवरी|फ़र\.?|मार्च?|अप्रैल|अप्रै\.?|मई?|जून?|जुलाई|जुल\.?|अगस्त|अग\.?|सितम्बर|सितंबर|सित\.?|अक्टूबर|अक्टू\.?|नवम्बर|नवंबर|नव\.?|दिसम्बर|दिसंबर|दिस\.?)/i,monthsStrictRegex:/^(जनवरी?|फ़रवरी|फरवरी?|मार्च?|अप्रैल?|मई?|जून?|जुलाई?|अगस्त?|सितम्बर|सितंबर|सित?\.?|अक्टूबर|अक्टू\.?|नवम्बर|नवंबर?|दिसम्बर|दिसंबर?)/i,monthsShortStrictRegex:/^(जन\.?|फ़र\.?|मार्च?|अप्रै\.?|मई?|जून?|जुल\.?|अग\.?|सित\.?|अक्टू\.?|नव\.?|दिस\.?)/i,calendar:{sameDay:"[आज] LT",nextDay:"[कल] LT",nextWeek:"dddd, LT",lastDay:"[कल] LT",lastWeek:"[पिछले] dddd, LT",sameElse:"L"},relativeTime:{future:"%s में",past:"%s पहले",s:"कुछ ही क्षण",ss:"%d सेकंड",m:"एक मिनट",mm:"%d मिनट",h:"एक घंटा",hh:"%d घंटे",d:"एक दिन",dd:"%d दिन",M:"एक महीने",MM:"%d महीने",y:"एक वर्ष",yy:"%d वर्ष"},preparse:function(t){return t.replace(/[१२३४५६७८९०]/g,(function(t){return n[t]}))},postformat:function(t){return t.replace(/\d/g,(function(t){return e[t]}))},meridiemParse:/रात|सुबह|दोपहर|शाम/,meridiemHour:function(t,e){return 12===t&&(t=0),"रात"===e?t<4?t:t+12:"सुबह"===e?t:"दोपहर"===e?t>=10?t:t+12:"शाम"===e?t+12:void 0},meridiem:function(t,e,n){return t<4?"रात":t<10?"सुबह":t<17?"दोपहर":t<20?"शाम":"रात"},week:{dow:0,doy:6}});return i}))},316:function(t,e,n){(function(t,e){e(n(381))})(0,(function(t){"use strict";
//! moment.js locale configuration
function e(t,e,n){var a=t+" ";switch(n){case"ss":return a+=1===t?"sekunda":2===t||3===t||4===t?"sekunde":"sekundi",a;case"m":return e?"jedna minuta":"jedne minute";case"mm":return a+=1===t?"minuta":2===t||3===t||4===t?"minute":"minuta",a;case"h":return e?"jedan sat":"jednog sata";case"hh":return a+=1===t?"sat":2===t||3===t||4===t?"sata":"sati",a;case"dd":return a+=1===t?"dan":"dana",a;case"MM":return a+=1===t?"mjesec":2===t||3===t||4===t?"mjeseca":"mjeseci",a;case"yy":return a+=1===t?"godina":2===t||3===t||4===t?"godine":"godina",a}}var n=t.defineLocale("hr",{months:{format:"siječnja_veljače_ožujka_travnja_svibnja_lipnja_srpnja_kolovoza_rujna_listopada_studenoga_prosinca".split("_"),standalone:"siječanj_veljača_ožujak_travanj_svibanj_lipanj_srpanj_kolovoz_rujan_listopad_studeni_prosinac".split("_")},monthsShort:"sij._velj._ožu._tra._svi._lip._srp._kol._ruj._lis._stu._pro.".split("_"),monthsParseExact:!0,weekdays:"nedjelja_ponedjeljak_utorak_srijeda_četvrtak_petak_subota".split("_"),weekdaysShort:"ned._pon._uto._sri._čet._pet._sub.".split("_"),weekdaysMin:"ne_po_ut_sr_če_pe_su".split("_"),weekdaysParseExact:!0,longDateFormat:{LT:"H:mm",LTS:"H:mm:ss",L:"DD.MM.YYYY",LL:"Do MMMM YYYY",LLL:"Do MMMM YYYY H:mm",LLLL:"dddd, Do MMMM YYYY H:mm"},calendar:{sameDay:"[danas u] LT",nextDay:"[sutra u] LT",nextWeek:function(){switch(this.day()){case 0:return"[u] [nedjelju] [u] LT";case 3:return"[u] [srijedu] [u] LT";case 6:return"[u] [subotu] [u] LT";case 1:case 2:case 4:case 5:return"[u] dddd [u] LT"}},lastDay:"[jučer u] LT",lastWeek:function(){switch(this.day()){case 0:return"[prošlu] [nedjelju] [u] LT";case 3:return"[prošlu] [srijedu] [u] LT";case 6:return"[prošle] [subote] [u] LT";case 1:case 2:case 4:case 5:return"[prošli] dddd [u] LT"}},sameElse:"L"},relativeTime:{future:"za %s",past:"prije %s",s:"par sekundi",ss:e,m:e,mm:e,h:e,hh:e,d:"dan",dd:e,M:"mjesec",MM:e,y:"godinu",yy:e},dayOfMonthOrdinalParse:/\d{1,2}\./,ordinal:"%d.",week:{dow:1,doy:7}});return n}))},2138:function(t,e,n){(function(t,e){e(n(381))})(0,(function(t){"use strict";
//! moment.js locale configuration
var e="vasárnap hétfőn kedden szerdán csütörtökön pénteken szombaton".split(" ");function n(t,e,n,a){var r=t;switch(n){case"s":return a||e?"néhány másodperc":"néhány másodperce";case"ss":return r+(a||e)?" másodperc":" másodperce";case"m":return"egy"+(a||e?" perc":" perce");case"mm":return r+(a||e?" perc":" perce");case"h":return"egy"+(a||e?" óra":" órája");case"hh":return r+(a||e?" óra":" órája");case"d":return"egy"+(a||e?" nap":" napja");case"dd":return r+(a||e?" nap":" napja");case"M":return"egy"+(a||e?" hónap":" hónapja");case"MM":return r+(a||e?" hónap":" hónapja");case"y":return"egy"+(a||e?" év":" éve");case"yy":return r+(a||e?" év":" éve")}return""}function a(t){return(t?"":"[múlt] ")+"["+e[this.day()]+"] LT[-kor]"}var r=t.defineLocale("hu",{months:"január_február_március_április_május_június_július_augusztus_szeptember_október_november_december".split("_"),monthsShort:"jan._feb._márc._ápr._máj._jún._júl._aug._szept._okt._nov._dec.".split("_"),monthsParseExact:!0,weekdays:"vasárnap_hétfő_kedd_szerda_csütörtök_péntek_szombat".split("_"),weekdaysShort:"vas_hét_kedd_sze_csüt_pén_szo".split("_"),weekdaysMin:"v_h_k_sze_cs_p_szo".split("_"),longDateFormat:{LT:"H:mm",LTS:"H:mm:ss",L:"YYYY.MM.DD.",LL:"YYYY. MMMM D.",LLL:"YYYY. MMMM D. H:mm",LLLL:"YYYY. MMMM D., dddd H:mm"},meridiemParse:/de|du/i,isPM:function(t){return"u"===t.charAt(1).toLowerCase()},meridiem:function(t,e,n){return t<12?!0===n?"de":"DE":!0===n?"du":"DU"},calendar:{sameDay:"[ma] LT[-kor]",nextDay:"[holnap] LT[-kor]",nextWeek:function(){return a.call(this,!0)},lastDay:"[tegnap] LT[-kor]",lastWeek:function(){return a.call(this,!1)},sameElse:"L"},relativeTime:{future:"%s múlva",past:"%s",s:n,ss:n,m:n,mm:n,h:n,hh:n,d:n,dd:n,M:n,MM:n,y:n,yy:n},dayOfMonthOrdinalParse:/\d{1,2}\./,ordinal:"%d.",week:{dow:1,doy:4}});return r}))},1423:function(t,e,n){(function(t,e){e(n(381))})(0,(function(t){"use strict";
//! moment.js locale configuration
var e=t.defineLocale("hy-am",{months:{format:"հունվարի_փետրվարի_մարտի_ապրիլի_մայիսի_հունիսի_հուլիսի_օգոստոսի_սեպտեմբերի_հոկտեմբերի_նոյեմբերի_դեկտեմբերի".split("_"),standalone:"հունվար_փետրվար_մարտ_ապրիլ_մայիս_հունիս_հուլիս_օգոստոս_սեպտեմբեր_հոկտեմբեր_նոյեմբեր_դեկտեմբեր".split("_")},monthsShort:"հնվ_փտր_մրտ_ապր_մյս_հնս_հլս_օգս_սպտ_հկտ_նմբ_դկտ".split("_"),weekdays:"կիրակի_երկուշաբթի_երեքշաբթի_չորեքշաբթի_հինգշաբթի_ուրբաթ_շաբաթ".split("_"),weekdaysShort:"կրկ_երկ_երք_չրք_հնգ_ուրբ_շբթ".split("_"),weekdaysMin:"կրկ_երկ_երք_չրք_հնգ_ուրբ_շբթ".split("_"),longDateFormat:{LT:"HH:mm",LTS:"HH:mm:ss",L:"DD.MM.YYYY",LL:"D MMMM YYYY թ.",LLL:"D MMMM YYYY թ., HH:mm",LLLL:"dddd, D MMMM YYYY թ., HH:mm"},calendar:{sameDay:"[այսօր] LT",nextDay:"[վաղը] LT",lastDay:"[երեկ] LT",nextWeek:function(){return"dddd [օրը ժամը] LT"},lastWeek:function(){return"[անցած] dddd [օրը ժամը] LT"},sameElse:"L"},relativeTime:{future:"%s հետո",past:"%s առաջ",s:"մի քանի վայրկյան",ss:"%d վայրկյան",m:"րոպե",mm:"%d րոպե",h:"ժամ",hh:"%d ժամ",d:"օր",dd:"%d օր",M:"ամիս",MM:"%d ամիս",y:"տարի",yy:"%d տարի"},meridiemParse:/գիշերվա|առավոտվա|ցերեկվա|երեկոյան/,isPM:function(t){return/^(ցերեկվա|երեկոյան)$/.test(t)},meridiem:function(t){return t<4?"գիշերվա":t<12?"առավոտվա":t<17?"ցերեկվա":"երեկոյան"},dayOfMonthOrdinalParse:/\d{1,2}|\d{1,2}-(ին|րդ)/,ordinal:function(t,e){switch(e){case"DDD":case"w":case"W":case"DDDo":return 1===t?t+"-ին":t+"-րդ";default:return t}},week:{dow:1,doy:7}});return e}))},9218:function(t,e,n){(function(t,e){e(n(381))})(0,(function(t){"use strict";
//! moment.js locale configuration
var e=t.defineLocale("id",{months:"Januari_Februari_Maret_April_Mei_Juni_Juli_Agustus_September_Oktober_November_Desember".split("_"),monthsShort:"Jan_Feb_Mar_Apr_Mei_Jun_Jul_Agt_Sep_Okt_Nov_Des".split("_"),weekdays:"Minggu_Senin_Selasa_Rabu_Kamis_Jumat_Sabtu".split("_"),weekdaysShort:"Min_Sen_Sel_Rab_Kam_Jum_Sab".split("_"),weekdaysMin:"Mg_Sn_Sl_Rb_Km_Jm_Sb".split("_"),longDateFormat:{LT:"HH.mm",LTS:"HH.mm.ss",L:"DD/MM/YYYY",LL:"D MMMM YYYY",LLL:"D MMMM YYYY [pukul] HH.mm",LLLL:"dddd, D MMMM YYYY [pukul] HH.mm"},meridiemParse:/pagi|siang|sore|malam/,meridiemHour:function(t,e){return 12===t&&(t=0),"pagi"===e?t:"siang"===e?t>=11?t:t+12:"sore"===e||"malam"===e?t+12:void 0},meridiem:function(t,e,n){return t<11?"pagi":t<15?"siang":t<19?"sore":"malam"},calendar:{sameDay:"[Hari ini pukul] LT",nextDay:"[Besok pukul] LT",nextWeek:"dddd [pukul] LT",lastDay:"[Kemarin pukul] LT",lastWeek:"dddd [lalu pukul] LT",sameElse:"L"},relativeTime:{future:"dalam %s",past:"%s yang lalu",s:"beberapa detik",ss:"%d detik",m:"semenit",mm:"%d menit",h:"sejam",hh:"%d jam",d:"sehari",dd:"%d hari",M:"sebulan",MM:"%d bulan",y:"setahun",yy:"%d tahun"},week:{dow:0,doy:6}});return e}))},135:function(t,e,n){(function(t,e){e(n(381))})(0,(function(t){"use strict";
//! moment.js locale configuration
function e(t){return t%100===11||t%10!==1}function n(t,n,a,r){var i=t+" ";switch(a){case"s":return n||r?"nokkrar sekúndur":"nokkrum sekúndum";case"ss":return e(t)?i+(n||r?"sekúndur":"sekúndum"):i+"sekúnda";case"m":return n?"mínúta":"mínútu";case"mm":return e(t)?i+(n||r?"mínútur":"mínútum"):n?i+"mínúta":i+"mínútu";case"hh":return e(t)?i+(n||r?"klukkustundir":"klukkustundum"):i+"klukkustund";case"d":return n?"dagur":r?"dag":"degi";case"dd":return e(t)?n?i+"dagar":i+(r?"daga":"dögum"):n?i+"dagur":i+(r?"dag":"degi");case"M":return n?"mánuður":r?"mánuð":"mánuði";case"MM":return e(t)?n?i+"mánuðir":i+(r?"mánuði":"mánuðum"):n?i+"mánuður":i+(r?"mánuð":"mánuði");case"y":return n||r?"ár":"ári";case"yy":return e(t)?i+(n||r?"ár":"árum"):i+(n||r?"ár":"ári")}}var a=t.defineLocale("is",{months:"janúar_febrúar_mars_apríl_maí_júní_júlí_ágúst_september_október_nóvember_desember".split("_"),monthsShort:"jan_feb_mar_apr_maí_jún_júl_ágú_sep_okt_nóv_des".split("_"),weekdays:"sunnudagur_mánudagur_þriðjudagur_miðvikudagur_fimmtudagur_föstudagur_laugardagur".split("_"),weekdaysShort:"sun_mán_þri_mið_fim_fös_lau".split("_"),weekdaysMin:"Su_Má_Þr_Mi_Fi_Fö_La".split("_"),longDateFormat:{LT:"H:mm",LTS:"H:mm:ss",L:"DD.MM.YYYY",LL:"D. MMMM YYYY",LLL:"D. MMMM YYYY [kl.] H:mm",LLLL:"dddd, D. MMMM YYYY [kl.] H:mm"},calendar:{sameDay:"[í dag kl.] LT",nextDay:"[á morgun kl.] LT",nextWeek:"dddd [kl.] LT",lastDay:"[í gær kl.] LT",lastWeek:"[síðasta] dddd [kl.] LT",sameElse:"L"},relativeTime:{future:"eftir %s",past:"fyrir %s síðan",s:n,ss:n,m:n,mm:n,h:"klukkustund",hh:n,d:n,dd:n,M:n,MM:n,y:n,yy:n},dayOfMonthOrdinalParse:/\d{1,2}\./,ordinal:"%d.",week:{dow:1,doy:4}});return a}))},150:function(t,e,n){(function(t,e){e(n(381))})(0,(function(t){"use strict";
//! moment.js locale configuration
var e=t.defineLocale("it-ch",{months:"gennaio_febbraio_marzo_aprile_maggio_giugno_luglio_agosto_settembre_ottobre_novembre_dicembre".split("_"),monthsShort:"gen_feb_mar_apr_mag_giu_lug_ago_set_ott_nov_dic".split("_"),weekdays:"domenica_lunedì_martedì_mercoledì_giovedì_venerdì_sabato".split("_"),weekdaysShort:"dom_lun_mar_mer_gio_ven_sab".split("_"),weekdaysMin:"do_lu_ma_me_gi_ve_sa".split("_"),longDateFormat:{LT:"HH:mm",LTS:"HH:mm:ss",L:"DD.MM.YYYY",LL:"D MMMM YYYY",LLL:"D MMMM YYYY HH:mm",LLLL:"dddd D MMMM YYYY HH:mm"},calendar:{sameDay:"[Oggi alle] LT",nextDay:"[Domani alle] LT",nextWeek:"dddd [alle] LT",lastDay:"[Ieri alle] LT",lastWeek:function(){switch(this.day()){case 0:return"[la scorsa] dddd [alle] LT";default:return"[lo scorso] dddd [alle] LT"}},sameElse:"L"},relativeTime:{future:function(t){return(/^[0-9].+$/.test(t)?"tra":"in")+" "+t},past:"%s fa",s:"alcuni secondi",ss:"%d secondi",m:"un minuto",mm:"%d minuti",h:"un'ora",hh:"%d ore",d:"un giorno",dd:"%d giorni",M:"un mese",MM:"%d mesi",y:"un anno",yy:"%d anni"},dayOfMonthOrdinalParse:/\d{1,2}º/,ordinal:"%dº",week:{dow:1,doy:4}});return e}))},626:function(t,e,n){(function(t,e){e(n(381))})(0,(function(t){"use strict";
//! moment.js locale configuration
var e=t.defineLocale("it",{months:"gennaio_febbraio_marzo_aprile_maggio_giugno_luglio_agosto_settembre_ottobre_novembre_dicembre".split("_"),monthsShort:"gen_feb_mar_apr_mag_giu_lug_ago_set_ott_nov_dic".split("_"),weekdays:"domenica_lunedì_martedì_mercoledì_giovedì_venerdì_sabato".split("_"),weekdaysShort:"dom_lun_mar_mer_gio_ven_sab".split("_"),weekdaysMin:"do_lu_ma_me_gi_ve_sa".split("_"),longDateFormat:{LT:"HH:mm",LTS:"HH:mm:ss",L:"DD/MM/YYYY",LL:"D MMMM YYYY",LLL:"D MMMM YYYY HH:mm",LLLL:"dddd D MMMM YYYY HH:mm"},calendar:{sameDay:function(){return"[Oggi a"+(this.hours()>1?"lle ":0===this.hours()?" ":"ll'")+"]LT"},nextDay:function(){return"[Domani a"+(this.hours()>1?"lle ":0===this.hours()?" ":"ll'")+"]LT"},nextWeek:function(){return"dddd [a"+(this.hours()>1?"lle ":0===this.hours()?" ":"ll'")+"]LT"},lastDay:function(){return"[Ieri a"+(this.hours()>1?"lle ":0===this.hours()?" ":"ll'")+"]LT"},lastWeek:function(){switch(this.day()){case 0:return"[La scorsa] dddd [a"+(this.hours()>1?"lle ":0===this.hours()?" ":"ll'")+"]LT";default:return"[Lo scorso] dddd [a"+(this.hours()>1?"lle ":0===this.hours()?" ":"ll'")+"]LT"}},sameElse:"L"},relativeTime:{future:"tra %s",past:"%s fa",s:"alcuni secondi",ss:"%d secondi",m:"un minuto",mm:"%d minuti",h:"un'ora",hh:"%d ore",d:"un giorno",dd:"%d giorni",w:"una settimana",ww:"%d settimane",M:"un mese",MM:"%d mesi",y:"un anno",yy:"%d anni"},dayOfMonthOrdinalParse:/\d{1,2}º/,ordinal:"%dº",week:{dow:1,doy:4}});return e}))},9183:function(t,e,n){(function(t,e){e(n(381))})(0,(function(t){"use strict";
//! moment.js locale configuration
var e=t.defineLocale("ja",{eras:[{since:"2019-05-01",offset:1,name:"令和",narrow:"㋿",abbr:"R"},{since:"1989-01-08",until:"2019-04-30",offset:1,name:"平成",narrow:"㍻",abbr:"H"},{since:"1926-12-25",until:"1989-01-07",offset:1,name:"昭和",narrow:"㍼",abbr:"S"},{since:"1912-07-30",until:"1926-12-24",offset:1,name:"大正",narrow:"㍽",abbr:"T"},{since:"1873-01-01",until:"1912-07-29",offset:6,name:"明治",narrow:"㍾",abbr:"M"},{since:"0001-01-01",until:"1873-12-31",offset:1,name:"西暦",narrow:"AD",abbr:"AD"},{since:"0000-12-31",until:-1/0,offset:1,name:"紀元前",narrow:"BC",abbr:"BC"}],eraYearOrdinalRegex:/(元|\d+)年/,eraYearOrdinalParse:function(t,e){return"元"===e[1]?1:parseInt(e[1]||t,10)},months:"1月_2月_3月_4月_5月_6月_7月_8月_9月_10月_11月_12月".split("_"),monthsShort:"1月_2月_3月_4月_5月_6月_7月_8月_9月_10月_11月_12月".split("_"),weekdays:"日曜日_月曜日_火曜日_水曜日_木曜日_金曜日_土曜日".split("_"),weekdaysShort:"日_月_火_水_木_金_土".split("_"),weekdaysMin:"日_月_火_水_木_金_土".split("_"),longDateFormat:{LT:"HH:mm",LTS:"HH:mm:ss",L:"YYYY/MM/DD",LL:"YYYY年M月D日",LLL:"YYYY年M月D日 HH:mm",LLLL:"YYYY年M月D日 dddd HH:mm",l:"YYYY/MM/DD",ll:"YYYY年M月D日",lll:"YYYY年M月D日 HH:mm",llll:"YYYY年M月D日(ddd) HH:mm"},meridiemParse:/午前|午後/i,isPM:function(t){return"午後"===t},meridiem:function(t,e,n){return t<12?"午前":"午後"},calendar:{sameDay:"[今日] LT",nextDay:"[明日] LT",nextWeek:function(t){return t.week()!==this.week()?"[来週]dddd LT":"dddd LT"},lastDay:"[昨日] LT",lastWeek:function(t){return this.week()!==t.week()?"[先週]dddd LT":"dddd LT"},sameElse:"L"},dayOfMonthOrdinalParse:/\d{1,2}日/,ordinal:function(t,e){switch(e){case"y":return 1===t?"元年":t+"年";case"d":case"D":case"DDD":return t+"日";default:return t}},relativeTime:{future:"%s後",past:"%s前",s:"数秒",ss:"%d秒",m:"1分",mm:"%d分",h:"1時間",hh:"%d時間",d:"1日",dd:"%d日",M:"1ヶ月",MM:"%dヶ月",y:"1年",yy:"%d年"}});return e}))},4286:function(t,e,n){(function(t,e){e(n(381))})(0,(function(t){"use strict";
//! moment.js locale configuration
var e=t.defineLocale("jv",{months:"Januari_Februari_Maret_April_Mei_Juni_Juli_Agustus_September_Oktober_Nopember_Desember".split("_"),monthsShort:"Jan_Feb_Mar_Apr_Mei_Jun_Jul_Ags_Sep_Okt_Nop_Des".split("_"),weekdays:"Minggu_Senen_Seloso_Rebu_Kemis_Jemuwah_Septu".split("_"),weekdaysShort:"Min_Sen_Sel_Reb_Kem_Jem_Sep".split("_"),weekdaysMin:"Mg_Sn_Sl_Rb_Km_Jm_Sp".split("_"),longDateFormat:{LT:"HH.mm",LTS:"HH.mm.ss",L:"DD/MM/YYYY",LL:"D MMMM YYYY",LLL:"D MMMM YYYY [pukul] HH.mm",LLLL:"dddd, D MMMM YYYY [pukul] HH.mm"},meridiemParse:/enjing|siyang|sonten|ndalu/,meridiemHour:function(t,e){return 12===t&&(t=0),"enjing"===e?t:"siyang"===e?t>=11?t:t+12:"sonten"===e||"ndalu"===e?t+12:void 0},meridiem:function(t,e,n){return t<11?"enjing":t<15?"siyang":t<19?"sonten":"ndalu"},calendar:{sameDay:"[Dinten puniko pukul] LT",nextDay:"[Mbenjang pukul] LT",nextWeek:"dddd [pukul] LT",lastDay:"[Kala wingi pukul] LT",lastWeek:"dddd [kepengker pukul] LT",sameElse:"L"},relativeTime:{future:"wonten ing %s",past:"%s ingkang kepengker",s:"sawetawis detik",ss:"%d detik",m:"setunggal menit",mm:"%d menit",h:"setunggal jam",hh:"%d jam",d:"sedinten",dd:"%d dinten",M:"sewulan",MM:"%d wulan",y:"setaun",yy:"%d taun"},week:{dow:1,doy:7}});return e}))},2105:function(t,e,n){(function(t,e){e(n(381))})(0,(function(t){"use strict";
//! moment.js locale configuration
var e=t.defineLocale("ka",{months:"იანვარი_თებერვალი_მარტი_აპრილი_მაისი_ივნისი_ივლისი_აგვისტო_სექტემბერი_ოქტომბერი_ნოემბერი_დეკემბერი".split("_"),monthsShort:"იან_თებ_მარ_აპრ_მაი_ივნ_ივლ_აგვ_სექ_ოქტ_ნოე_დეკ".split("_"),weekdays:{standalone:"კვირა_ორშაბათი_სამშაბათი_ოთხშაბათი_ხუთშაბათი_პარასკევი_შაბათი".split("_"),format:"კვირას_ორშაბათს_სამშაბათს_ოთხშაბათს_ხუთშაბათს_პარასკევს_შაბათს".split("_"),isFormat:/(წინა|შემდეგ)/},weekdaysShort:"კვი_ორშ_სამ_ოთხ_ხუთ_პარ_შაბ".split("_"),weekdaysMin:"კვ_ორ_სა_ოთ_ხუ_პა_შა".split("_"),longDateFormat:{LT:"HH:mm",LTS:"HH:mm:ss",L:"DD/MM/YYYY",LL:"D MMMM YYYY",LLL:"D MMMM YYYY HH:mm",LLLL:"dddd, D MMMM YYYY HH:mm"},calendar:{sameDay:"[დღეს] LT[-ზე]",nextDay:"[ხვალ] LT[-ზე]",lastDay:"[გუშინ] LT[-ზე]",nextWeek:"[შემდეგ] dddd LT[-ზე]",lastWeek:"[წინა] dddd LT-ზე",sameElse:"L"},relativeTime:{future:function(t){return t.replace(/(წამ|წუთ|საათ|წელ|დღ|თვ)(ი|ე)/,(function(t,e,n){return"ი"===n?e+"ში":e+n+"ში"}))},past:function(t){return/(წამი|წუთი|საათი|დღე|თვე)/.test(t)?t.replace(/(ი|ე)$/,"ის წინ"):/წელი/.test(t)?t.replace(/წელი$/,"წლის წინ"):t},s:"რამდენიმე წამი",ss:"%d წამი",m:"წუთი",mm:"%d წუთი",h:"საათი",hh:"%d საათი",d:"დღე",dd:"%d დღე",M:"თვე",MM:"%d თვე",y:"წელი",yy:"%d წელი"},dayOfMonthOrdinalParse:/0|1-ლი|მე-\d{1,2}|\d{1,2}-ე/,ordinal:function(t){return 0===t?t:1===t?t+"-ლი":t<20||t<=100&&t%20===0||t%100===0?"მე-"+t:t+"-ე"},week:{dow:1,doy:7}});return e}))},7772:function(t,e,n){(function(t,e){e(n(381))})(0,(function(t){"use strict";
//! moment.js locale configuration
var e={0:"-ші",1:"-ші",2:"-ші",3:"-ші",4:"-ші",5:"-ші",6:"-шы",7:"-ші",8:"-ші",9:"-шы",10:"-шы",20:"-шы",30:"-шы",40:"-шы",50:"-ші",60:"-шы",70:"-ші",80:"-ші",90:"-шы",100:"-ші"},n=t.defineLocale("kk",{months:"қаңтар_ақпан_наурыз_сәуір_мамыр_маусым_шілде_тамыз_қыркүйек_қазан_қараша_желтоқсан".split("_"),monthsShort:"қаң_ақп_нау_сәу_мам_мау_шіл_там_қыр_қаз_қар_жел".split("_"),weekdays:"жексенбі_дүйсенбі_сейсенбі_сәрсенбі_бейсенбі_жұма_сенбі".split("_"),weekdaysShort:"жек_дүй_сей_сәр_бей_жұм_сен".split("_"),weekdaysMin:"жк_дй_сй_ср_бй_жм_сн".split("_"),longDateFormat:{LT:"HH:mm",LTS:"HH:mm:ss",L:"DD.MM.YYYY",LL:"D MMMM YYYY",LLL:"D MMMM YYYY HH:mm",LLLL:"dddd, D MMMM YYYY HH:mm"},calendar:{sameDay:"[Бүгін сағат] LT",nextDay:"[Ертең сағат] LT",nextWeek:"dddd [сағат] LT",lastDay:"[Кеше сағат] LT",lastWeek:"[Өткен аптаның] dddd [сағат] LT",sameElse:"L"},relativeTime:{future:"%s ішінде",past:"%s бұрын",s:"бірнеше секунд",ss:"%d секунд",m:"бір минут",mm:"%d минут",h:"бір сағат",hh:"%d сағат",d:"бір күн",dd:"%d күн",M:"бір ай",MM:"%d ай",y:"бір жыл",yy:"%d жыл"},dayOfMonthOrdinalParse:/\d{1,2}-(ші|шы)/,ordinal:function(t){var n=t%10,a=t>=100?100:null;return t+(e[t]||e[n]||e[a])},week:{dow:1,doy:7}});return n}))},8758:function(t,e,n){(function(t,e){e(n(381))})(0,(function(t){"use strict";
//! moment.js locale configuration
var e={1:"១",2:"២",3:"៣",4:"៤",5:"៥",6:"៦",7:"៧",8:"៨",9:"៩",0:"០"},n={"១":"1","២":"2","៣":"3","៤":"4","៥":"5","៦":"6","៧":"7","៨":"8","៩":"9","០":"0"},a=t.defineLocale("km",{months:"មករា_កុម្ភៈ_មីនា_មេសា_ឧសភា_មិថុនា_កក្កដា_សីហា_កញ្ញា_តុលា_វិច្ឆិកា_ធ្នូ".split("_"),monthsShort:"មករា_កុម្ភៈ_មីនា_មេសា_ឧសភា_មិថុនា_កក្កដា_សីហា_កញ្ញា_តុលា_វិច្ឆិកា_ធ្នូ".split("_"),weekdays:"អាទិត្យ_ច័ន្ទ_អង្គារ_ពុធ_ព្រហស្បតិ៍_សុក្រ_សៅរ៍".split("_"),weekdaysShort:"អា_ច_អ_ព_ព្រ_សុ_ស".split("_"),weekdaysMin:"អា_ច_អ_ព_ព្រ_សុ_ស".split("_"),weekdaysParseExact:!0,longDateFormat:{LT:"HH:mm",LTS:"HH:mm:ss",L:"DD/MM/YYYY",LL:"D MMMM YYYY",LLL:"D MMMM YYYY HH:mm",LLLL:"dddd, D MMMM YYYY HH:mm"},meridiemParse:/ព្រឹក|ល្ងាច/,isPM:function(t){return"ល្ងាច"===t},meridiem:function(t,e,n){return t<12?"ព្រឹក":"ល្ងាច"},calendar:{sameDay:"[ថ្ងៃនេះ ម៉ោង] LT",nextDay:"[ស្អែក ម៉ោង] LT",nextWeek:"dddd [ម៉ោង] LT",lastDay:"[ម្សិលមិញ ម៉ោង] LT",lastWeek:"dddd [សប្តាហ៍មុន] [ម៉ោង] LT",sameElse:"L"},relativeTime:{future:"%sទៀត",past:"%sមុន",s:"ប៉ុន្មានវិនាទី",ss:"%d វិនាទី",m:"មួយនាទី",mm:"%d នាទី",h:"មួយម៉ោង",hh:"%d ម៉ោង",d:"មួយថ្ងៃ",dd:"%d ថ្ងៃ",M:"មួយខែ",MM:"%d ខែ",y:"មួយឆ្នាំ",yy:"%d ឆ្នាំ"},dayOfMonthOrdinalParse:/ទី\d{1,2}/,ordinal:"ទី%d",preparse:function(t){return t.replace(/[១២៣៤៥៦៧៨៩០]/g,(function(t){return n[t]}))},postformat:function(t){return t.replace(/\d/g,(function(t){return e[t]}))},week:{dow:1,doy:4}});return a}))},9282:function(t,e,n){(function(t,e){e(n(381))})(0,(function(t){"use strict";
//! moment.js locale configuration
var e={1:"೧",2:"೨",3:"೩",4:"೪",5:"೫",6:"೬",7:"೭",8:"೮",9:"೯",0:"೦"},n={"೧":"1","೨":"2","೩":"3","೪":"4","೫":"5","೬":"6","೭":"7","೮":"8","೯":"9","೦":"0"},a=t.defineLocale("kn",{months:"ಜನವರಿ_ಫೆಬ್ರವರಿ_ಮಾರ್ಚ್_ಏಪ್ರಿಲ್_ಮೇ_ಜೂನ್_ಜುಲೈ_ಆಗಸ್ಟ್_ಸೆಪ್ಟೆಂಬರ್_ಅಕ್ಟೋಬರ್_ನವೆಂಬರ್_ಡಿಸೆಂಬರ್".split("_"),monthsShort:"ಜನ_ಫೆಬ್ರ_ಮಾರ್ಚ್_ಏಪ್ರಿಲ್_ಮೇ_ಜೂನ್_ಜುಲೈ_ಆಗಸ್ಟ್_ಸೆಪ್ಟೆಂ_ಅಕ್ಟೋ_ನವೆಂ_ಡಿಸೆಂ".split("_"),monthsParseExact:!0,weekdays:"ಭಾನುವಾರ_ಸೋಮವಾರ_ಮಂಗಳವಾರ_ಬುಧವಾರ_ಗುರುವಾರ_ಶುಕ್ರವಾರ_ಶನಿವಾರ".split("_"),weekdaysShort:"ಭಾನು_ಸೋಮ_ಮಂಗಳ_ಬುಧ_ಗುರು_ಶುಕ್ರ_ಶನಿ".split("_"),weekdaysMin:"ಭಾ_ಸೋ_ಮಂ_ಬು_ಗು_ಶು_ಶ".split("_"),longDateFormat:{LT:"A h:mm",LTS:"A h:mm:ss",L:"DD/MM/YYYY",LL:"D MMMM YYYY",LLL:"D MMMM YYYY, A h:mm",LLLL:"dddd, D MMMM YYYY, A h:mm"},calendar:{sameDay:"[ಇಂದು] LT",nextDay:"[ನಾಳೆ] LT",nextWeek:"dddd, LT",lastDay:"[ನಿನ್ನೆ] LT",lastWeek:"[ಕೊನೆಯ] dddd, LT",sameElse:"L"},relativeTime:{future:"%s ನಂತರ",past:"%s ಹಿಂದೆ",s:"ಕೆಲವು ಕ್ಷಣಗಳು",ss:"%d ಸೆಕೆಂಡುಗಳು",m:"ಒಂದು ನಿಮಿಷ",mm:"%d ನಿಮಿಷ",h:"ಒಂದು ಗಂಟೆ",hh:"%d ಗಂಟೆ",d:"ಒಂದು ದಿನ",dd:"%d ದಿನ",M:"ಒಂದು ತಿಂಗಳು",MM:"%d ತಿಂಗಳು",y:"ಒಂದು ವರ್ಷ",yy:"%d ವರ್ಷ"},preparse:function(t){return t.replace(/[೧೨೩೪೫೬೭೮೯೦]/g,(function(t){return n[t]}))},postformat:function(t){return t.replace(/\d/g,(function(t){return e[t]}))},meridiemParse:/ರಾತ್ರಿ|ಬೆಳಿಗ್ಗೆ|ಮಧ್ಯಾಹ್ನ|ಸಂಜೆ/,meridiemHour:function(t,e){return 12===t&&(t=0),"ರಾತ್ರಿ"===e?t<4?t:t+12:"ಬೆಳಿಗ್ಗೆ"===e?t:"ಮಧ್ಯಾಹ್ನ"===e?t>=10?t:t+12:"ಸಂಜೆ"===e?t+12:void 0},meridiem:function(t,e,n){return t<4?"ರಾತ್ರಿ":t<10?"ಬೆಳಿಗ್ಗೆ":t<17?"ಮಧ್ಯಾಹ್ನ":t<20?"ಸಂಜೆ":"ರಾತ್ರಿ"},dayOfMonthOrdinalParse:/\d{1,2}(ನೇ)/,ordinal:function(t){return t+"ನೇ"},week:{dow:0,doy:6}});return a}))},3730:function(t,e,n){(function(t,e){e(n(381))})(0,(function(t){"use strict";
//! moment.js locale configuration
var e=t.defineLocale("ko",{months:"1월_2월_3월_4월_5월_6월_7월_8월_9월_10월_11월_12월".split("_"),monthsShort:"1월_2월_3월_4월_5월_6월_7월_8월_9월_10월_11월_12월".split("_"),weekdays:"일요일_월요일_화요일_수요일_목요일_금요일_토요일".split("_"),weekdaysShort:"일_월_화_수_목_금_토".split("_"),weekdaysMin:"일_월_화_수_목_금_토".split("_"),longDateFormat:{LT:"A h:mm",LTS:"A h:mm:ss",L:"YYYY.MM.DD.",LL:"YYYY년 MMMM D일",LLL:"YYYY년 MMMM D일 A h:mm",LLLL:"YYYY년 MMMM D일 dddd A h:mm",l:"YYYY.MM.DD.",ll:"YYYY년 MMMM D일",lll:"YYYY년 MMMM D일 A h:mm",llll:"YYYY년 MMMM D일 dddd A h:mm"},calendar:{sameDay:"오늘 LT",nextDay:"내일 LT",nextWeek:"dddd LT",lastDay:"어제 LT",lastWeek:"지난주 dddd LT",sameElse:"L"},relativeTime:{future:"%s 후",past:"%s 전",s:"몇 초",ss:"%d초",m:"1분",mm:"%d분",h:"한 시간",hh:"%d시간",d:"하루",dd:"%d일",M:"한 달",MM:"%d달",y:"일 년",yy:"%d년"},dayOfMonthOrdinalParse:/\d{1,2}(일|월|주)/,ordinal:function(t,e){switch(e){case"d":case"D":case"DDD":return t+"일";case"M":return t+"월";case"w":case"W":return t+"주";default:return t}},meridiemParse:/오전|오후/,isPM:function(t){return"오후"===t},meridiem:function(t,e,n){return t<12?"오전":"오후"}});return e}))},1408:function(t,e,n){(function(t,e){e(n(381))})(0,(function(t){"use strict";
//! moment.js locale configuration
var e={1:"١",2:"٢",3:"٣",4:"٤",5:"٥",6:"٦",7:"٧",8:"٨",9:"٩",0:"٠"},n={"١":"1","٢":"2","٣":"3","٤":"4","٥":"5","٦":"6","٧":"7","٨":"8","٩":"9","٠":"0"},a=["کانونی دووەم","شوبات","ئازار","نیسان","ئایار","حوزەیران","تەمموز","ئاب","ئەیلوول","تشرینی یەكەم","تشرینی دووەم","كانونی یەکەم"],r=t.defineLocale("ku",{months:a,monthsShort:a,weekdays:"یه‌كشه‌ممه‌_دووشه‌ممه‌_سێشه‌ممه‌_چوارشه‌ممه‌_پێنجشه‌ممه‌_هه‌ینی_شه‌ممه‌".split("_"),weekdaysShort:"یه‌كشه‌م_دووشه‌م_سێشه‌م_چوارشه‌م_پێنجشه‌م_هه‌ینی_شه‌ممه‌".split("_"),weekdaysMin:"ی_د_س_چ_پ_ه_ش".split("_"),weekdaysParseExact:!0,longDateFormat:{LT:"HH:mm",LTS:"HH:mm:ss",L:"DD/MM/YYYY",LL:"D MMMM YYYY",LLL:"D MMMM YYYY HH:mm",LLLL:"dddd, D MMMM YYYY HH:mm"},meridiemParse:/ئێواره‌|به‌یانی/,isPM:function(t){return/ئێواره‌/.test(t)},meridiem:function(t,e,n){return t<12?"به‌یانی":"ئێواره‌"},calendar:{sameDay:"[ئه‌مرۆ كاتژمێر] LT",nextDay:"[به‌یانی كاتژمێر] LT",nextWeek:"dddd [كاتژمێر] LT",lastDay:"[دوێنێ كاتژمێر] LT",lastWeek:"dddd [كاتژمێر] LT",sameElse:"L"},relativeTime:{future:"له‌ %s",past:"%s",s:"چه‌ند چركه‌یه‌ك",ss:"چركه‌ %d",m:"یه‌ك خوله‌ك",mm:"%d خوله‌ك",h:"یه‌ك كاتژمێر",hh:"%d كاتژمێر",d:"یه‌ك ڕۆژ",dd:"%d ڕۆژ",M:"یه‌ك مانگ",MM:"%d مانگ",y:"یه‌ك ساڵ",yy:"%d ساڵ"},preparse:function(t){return t.replace(/[١٢٣٤٥٦٧٨٩٠]/g,(function(t){return n[t]})).replace(/،/g,",")},postformat:function(t){return t.replace(/\d/g,(function(t){return e[t]})).replace(/,/g,"،")},week:{dow:6,doy:12}});return r}))},3291:function(t,e,n){(function(t,e){e(n(381))})(0,(function(t){"use strict";
//! moment.js locale configuration
var e={0:"-чү",1:"-чи",2:"-чи",3:"-чү",4:"-чү",5:"-чи",6:"-чы",7:"-чи",8:"-чи",9:"-чу",10:"-чу",20:"-чы",30:"-чу",40:"-чы",50:"-чү",60:"-чы",70:"-чи",80:"-чи",90:"-чу",100:"-чү"},n=t.defineLocale("ky",{months:"январь_февраль_март_апрель_май_июнь_июль_август_сентябрь_октябрь_ноябрь_декабрь".split("_"),monthsShort:"янв_фев_март_апр_май_июнь_июль_авг_сен_окт_ноя_дек".split("_"),weekdays:"Жекшемби_Дүйшөмбү_Шейшемби_Шаршемби_Бейшемби_Жума_Ишемби".split("_"),weekdaysShort:"Жек_Дүй_Шей_Шар_Бей_Жум_Ише".split("_"),weekdaysMin:"Жк_Дй_Шй_Шр_Бй_Жм_Иш".split("_"),longDateFormat:{LT:"HH:mm",LTS:"HH:mm:ss",L:"DD.MM.YYYY",LL:"D MMMM YYYY",LLL:"D MMMM YYYY HH:mm",LLLL:"dddd, D MMMM YYYY HH:mm"},calendar:{sameDay:"[Бүгүн саат] LT",nextDay:"[Эртең саат] LT",nextWeek:"dddd [саат] LT",lastDay:"[Кечээ саат] LT",lastWeek:"[Өткөн аптанын] dddd [күнү] [саат] LT",sameElse:"L"},relativeTime:{future:"%s ичинде",past:"%s мурун",s:"бирнече секунд",ss:"%d секунд",m:"бир мүнөт",mm:"%d мүнөт",h:"бир саат",hh:"%d саат",d:"бир күн",dd:"%d күн",M:"бир ай",MM:"%d ай",y:"бир жыл",yy:"%d жыл"},dayOfMonthOrdinalParse:/\d{1,2}-(чи|чы|чү|чу)/,ordinal:function(t){var n=t%10,a=t>=100?100:null;return t+(e[t]||e[n]||e[a])},week:{dow:1,doy:7}});return n}))},6841:function(t,e,n){(function(t,e){e(n(381))})(0,(function(t){"use strict";
//! moment.js locale configuration
function e(t,e,n,a){var r={m:["eng Minutt","enger Minutt"],h:["eng Stonn","enger Stonn"],d:["een Dag","engem Dag"],M:["ee Mount","engem Mount"],y:["ee Joer","engem Joer"]};return e?r[n][0]:r[n][1]}function n(t){var e=t.substr(0,t.indexOf(" "));return r(e)?"a "+t:"an "+t}function a(t){var e=t.substr(0,t.indexOf(" "));return r(e)?"viru "+t:"virun "+t}function r(t){if(t=parseInt(t,10),isNaN(t))return!1;if(t<0)return!0;if(t<10)return 4<=t&&t<=7;if(t<100){var e=t%10,n=t/10;return r(0===e?n:e)}if(t<1e4){while(t>=10)t/=10;return r(t)}return t/=1e3,r(t)}var i=t.defineLocale("lb",{months:"Januar_Februar_Mäerz_Abrëll_Mee_Juni_Juli_August_September_Oktober_November_Dezember".split("_"),monthsShort:"Jan._Febr._Mrz._Abr._Mee_Jun._Jul._Aug._Sept._Okt._Nov._Dez.".split("_"),monthsParseExact:!0,weekdays:"Sonndeg_Méindeg_Dënschdeg_Mëttwoch_Donneschdeg_Freideg_Samschdeg".split("_"),weekdaysShort:"So._Mé._Dë._Më._Do._Fr._Sa.".split("_"),weekdaysMin:"So_Mé_Dë_Më_Do_Fr_Sa".split("_"),weekdaysParseExact:!0,longDateFormat:{LT:"H:mm [Auer]",LTS:"H:mm:ss [Auer]",L:"DD.MM.YYYY",LL:"D. MMMM YYYY",LLL:"D. MMMM YYYY H:mm [Auer]",LLLL:"dddd, D. MMMM YYYY H:mm [Auer]"},calendar:{sameDay:"[Haut um] LT",sameElse:"L",nextDay:"[Muer um] LT",nextWeek:"dddd [um] LT",lastDay:"[Gëschter um] LT",lastWeek:function(){switch(this.day()){case 2:case 4:return"[Leschten] dddd [um] LT";default:return"[Leschte] dddd [um] LT"}}},relativeTime:{future:n,past:a,s:"e puer Sekonnen",ss:"%d Sekonnen",m:e,mm:"%d Minutten",h:e,hh:"%d Stonnen",d:e,dd:"%d Deeg",M:e,MM:"%d Méint",y:e,yy:"%d Joer"},dayOfMonthOrdinalParse:/\d{1,2}\./,ordinal:"%d.",week:{dow:1,doy:4}});return i}))},5466:function(t,e,n){(function(t,e){e(n(381))})(0,(function(t){"use strict";
//! moment.js locale configuration
var e=t.defineLocale("lo",{months:"ມັງກອນ_ກຸມພາ_ມີນາ_ເມສາ_ພຶດສະພາ_ມິຖຸນາ_ກໍລະກົດ_ສິງຫາ_ກັນຍາ_ຕຸລາ_ພະຈິກ_ທັນວາ".split("_"),monthsShort:"ມັງກອນ_ກຸມພາ_ມີນາ_ເມສາ_ພຶດສະພາ_ມິຖຸນາ_ກໍລະກົດ_ສິງຫາ_ກັນຍາ_ຕຸລາ_ພະຈິກ_ທັນວາ".split("_"),weekdays:"ອາທິດ_ຈັນ_ອັງຄານ_ພຸດ_ພະຫັດ_ສຸກ_ເສົາ".split("_"),weekdaysShort:"ທິດ_ຈັນ_ອັງຄານ_ພຸດ_ພະຫັດ_ສຸກ_ເສົາ".split("_"),weekdaysMin:"ທ_ຈ_ອຄ_ພ_ພຫ_ສກ_ສ".split("_"),weekdaysParseExact:!0,longDateFormat:{LT:"HH:mm",LTS:"HH:mm:ss",L:"DD/MM/YYYY",LL:"D MMMM YYYY",LLL:"D MMMM YYYY HH:mm",LLLL:"ວັນdddd D MMMM YYYY HH:mm"},meridiemParse:/ຕອນເຊົ້າ|ຕອນແລງ/,isPM:function(t){return"ຕອນແລງ"===t},meridiem:function(t,e,n){return t<12?"ຕອນເຊົ້າ":"ຕອນແລງ"},calendar:{sameDay:"[ມື້ນີ້ເວລາ] LT",nextDay:"[ມື້ອື່ນເວລາ] LT",nextWeek:"[ວັນ]dddd[ໜ້າເວລາ] LT",lastDay:"[ມື້ວານນີ້ເວລາ] LT",lastWeek:"[ວັນ]dddd[ແລ້ວນີ້ເວລາ] LT",sameElse:"L"},relativeTime:{future:"ອີກ %s",past:"%sຜ່ານມາ",s:"ບໍ່ເທົ່າໃດວິນາທີ",ss:"%d ວິນາທີ",m:"1 ນາທີ",mm:"%d ນາທີ",h:"1 ຊົ່ວໂມງ",hh:"%d ຊົ່ວໂມງ",d:"1 ມື້",dd:"%d ມື້",M:"1 ເດືອນ",MM:"%d ເດືອນ",y:"1 ປີ",yy:"%d ປີ"},dayOfMonthOrdinalParse:/(ທີ່)\d{1,2}/,ordinal:function(t){return"ທີ່"+t}});return e}))},7010:function(t,e,n){(function(t,e){e(n(381))})(0,(function(t){"use strict";
//! moment.js locale configuration
var e={ss:"sekundė_sekundžių_sekundes",m:"minutė_minutės_minutę",mm:"minutės_minučių_minutes",h:"valanda_valandos_valandą",hh:"valandos_valandų_valandas",d:"diena_dienos_dieną",dd:"dienos_dienų_dienas",M:"mėnuo_mėnesio_mėnesį",MM:"mėnesiai_mėnesių_mėnesius",y:"metai_metų_metus",yy:"metai_metų_metus"};function n(t,e,n,a){return e?"kelios sekundės":a?"kelių sekundžių":"kelias sekundes"}function a(t,e,n,a){return e?i(n)[0]:a?i(n)[1]:i(n)[2]}function r(t){return t%10===0||t>10&&t<20}function i(t){return e[t].split("_")}function o(t,e,n,o){var s=t+" ";return 1===t?s+a(t,e,n[0],o):e?s+(r(t)?i(n)[1]:i(n)[0]):o?s+i(n)[1]:s+(r(t)?i(n)[1]:i(n)[2])}var s=t.defineLocale("lt",{months:{format:"sausio_vasario_kovo_balandžio_gegužės_birželio_liepos_rugpjūčio_rugsėjo_spalio_lapkričio_gruodžio".split("_"),standalone:"sausis_vasaris_kovas_balandis_gegužė_birželis_liepa_rugpjūtis_rugsėjis_spalis_lapkritis_gruodis".split("_"),isFormat:/D[oD]?(\[[^\[\]]*\]|\s)+MMMM?|MMMM?(\[[^\[\]]*\]|\s)+D[oD]?/},monthsShort:"sau_vas_kov_bal_geg_bir_lie_rgp_rgs_spa_lap_grd".split("_"),weekdays:{format:"sekmadienį_pirmadienį_antradienį_trečiadienį_ketvirtadienį_penktadienį_šeštadienį".split("_"),standalone:"sekmadienis_pirmadienis_antradienis_trečiadienis_ketvirtadienis_penktadienis_šeštadienis".split("_"),isFormat:/dddd HH:mm/},weekdaysShort:"Sek_Pir_Ant_Tre_Ket_Pen_Šeš".split("_"),weekdaysMin:"S_P_A_T_K_Pn_Š".split("_"),weekdaysParseExact:!0,longDateFormat:{LT:"HH:mm",LTS:"HH:mm:ss",L:"YYYY-MM-DD",LL:"YYYY [m.] MMMM D [d.]",LLL:"YYYY [m.] MMMM D [d.], HH:mm [val.]",LLLL:"YYYY [m.] MMMM D [d.], dddd, HH:mm [val.]",l:"YYYY-MM-DD",ll:"YYYY [m.] MMMM D [d.]",lll:"YYYY [m.] MMMM D [d.], HH:mm [val.]",llll:"YYYY [m.] MMMM D [d.], ddd, HH:mm [val.]"},calendar:{sameDay:"[Šiandien] LT",nextDay:"[Rytoj] LT",nextWeek:"dddd LT",lastDay:"[Vakar] LT",lastWeek:"[Praėjusį] dddd LT",sameElse:"L"},relativeTime:{future:"po %s",past:"prieš %s",s:n,ss:o,m:a,mm:o,h:a,hh:o,d:a,dd:o,M:a,MM:o,y:a,yy:o},dayOfMonthOrdinalParse:/\d{1,2}-oji/,ordinal:function(t){return t+"-oji"},week:{dow:1,doy:4}});return s}))},7595:function(t,e,n){(function(t,e){e(n(381))})(0,(function(t){"use strict";
//! moment.js locale configuration
var e={ss:"sekundes_sekundēm_sekunde_sekundes".split("_"),m:"minūtes_minūtēm_minūte_minūtes".split("_"),mm:"minūtes_minūtēm_minūte_minūtes".split("_"),h:"stundas_stundām_stunda_stundas".split("_"),hh:"stundas_stundām_stunda_stundas".split("_"),d:"dienas_dienām_diena_dienas".split("_"),dd:"dienas_dienām_diena_dienas".split("_"),M:"mēneša_mēnešiem_mēnesis_mēneši".split("_"),MM:"mēneša_mēnešiem_mēnesis_mēneši".split("_"),y:"gada_gadiem_gads_gadi".split("_"),yy:"gada_gadiem_gads_gadi".split("_")};function n(t,e,n){return n?e%10===1&&e%100!==11?t[2]:t[3]:e%10===1&&e%100!==11?t[0]:t[1]}function a(t,a,r){return t+" "+n(e[r],t,a)}function r(t,a,r){return n(e[r],t,a)}function i(t,e){return e?"dažas sekundes":"dažām sekundēm"}var o=t.defineLocale("lv",{months:"janvāris_februāris_marts_aprīlis_maijs_jūnijs_jūlijs_augusts_septembris_oktobris_novembris_decembris".split("_"),monthsShort:"jan_feb_mar_apr_mai_jūn_jūl_aug_sep_okt_nov_dec".split("_"),weekdays:"svētdiena_pirmdiena_otrdiena_trešdiena_ceturtdiena_piektdiena_sestdiena".split("_"),weekdaysShort:"Sv_P_O_T_C_Pk_S".split("_"),weekdaysMin:"Sv_P_O_T_C_Pk_S".split("_"),weekdaysParseExact:!0,longDateFormat:{LT:"HH:mm",LTS:"HH:mm:ss",L:"DD.MM.YYYY.",LL:"YYYY. [gada] D. MMMM",LLL:"YYYY. [gada] D. MMMM, HH:mm",LLLL:"YYYY. [gada] D. MMMM, dddd, HH:mm"},calendar:{sameDay:"[Šodien pulksten] LT",nextDay:"[Rīt pulksten] LT",nextWeek:"dddd [pulksten] LT",lastDay:"[Vakar pulksten] LT",lastWeek:"[Pagājušā] dddd [pulksten] LT",sameElse:"L"},relativeTime:{future:"pēc %s",past:"pirms %s",s:i,ss:a,m:r,mm:a,h:r,hh:a,d:r,dd:a,M:r,MM:a,y:r,yy:a},dayOfMonthOrdinalParse:/\d{1,2}\./,ordinal:"%d.",week:{dow:1,doy:4}});return o}))},9861:function(t,e,n){(function(t,e){e(n(381))})(0,(function(t){"use strict";
//! moment.js locale configuration
var e={words:{ss:["sekund","sekunda","sekundi"],m:["jedan minut","jednog minuta"],mm:["minut","minuta","minuta"],h:["jedan sat","jednog sata"],hh:["sat","sata","sati"],dd:["dan","dana","dana"],MM:["mjesec","mjeseca","mjeseci"],yy:["godina","godine","godina"]},correctGrammaticalCase:function(t,e){return 1===t?e[0]:t>=2&&t<=4?e[1]:e[2]},translate:function(t,n,a){var r=e.words[a];return 1===a.length?n?r[0]:r[1]:t+" "+e.correctGrammaticalCase(t,r)}},n=t.defineLocale("me",{months:"januar_februar_mart_april_maj_jun_jul_avgust_septembar_oktobar_novembar_decembar".split("_"),monthsShort:"jan._feb._mar._apr._maj_jun_jul_avg._sep._okt._nov._dec.".split("_"),monthsParseExact:!0,weekdays:"nedjelja_ponedjeljak_utorak_srijeda_četvrtak_petak_subota".split("_"),weekdaysShort:"ned._pon._uto._sri._čet._pet._sub.".split("_"),weekdaysMin:"ne_po_ut_sr_če_pe_su".split("_"),weekdaysParseExact:!0,longDateFormat:{LT:"H:mm",LTS:"H:mm:ss",L:"DD.MM.YYYY",LL:"D. MMMM YYYY",LLL:"D. MMMM YYYY H:mm",LLLL:"dddd, D. MMMM YYYY H:mm"},calendar:{sameDay:"[danas u] LT",nextDay:"[sjutra u] LT",nextWeek:function(){switch(this.day()){case 0:return"[u] [nedjelju] [u] LT";case 3:return"[u] [srijedu] [u] LT";case 6:return"[u] [subotu] [u] LT";case 1:case 2:case 4:case 5:return"[u] dddd [u] LT"}},lastDay:"[juče u] LT",lastWeek:function(){var t=["[prošle] [nedjelje] [u] LT","[prošlog] [ponedjeljka] [u] LT","[prošlog] [utorka] [u] LT","[prošle] [srijede] [u] LT","[prošlog] [četvrtka] [u] LT","[prošlog] [petka] [u] LT","[prošle] [subote] [u] LT"];return t[this.day()]},sameElse:"L"},relativeTime:{future:"za %s",past:"prije %s",s:"nekoliko sekundi",ss:e.translate,m:e.translate,mm:e.translate,h:e.translate,hh:e.translate,d:"dan",dd:e.translate,M:"mjesec",MM:e.translate,y:"godinu",yy:e.translate},dayOfMonthOrdinalParse:/\d{1,2}\./,ordinal:"%d.",week:{dow:1,doy:7}});return n}))},5493:function(t,e,n){(function(t,e){e(n(381))})(0,(function(t){"use strict";
//! moment.js locale configuration
var e=t.defineLocale("mi",{months:"Kohi-tāte_Hui-tanguru_Poutū-te-rangi_Paenga-whāwhā_Haratua_Pipiri_Hōngoingoi_Here-turi-kōkā_Mahuru_Whiringa-ā-nuku_Whiringa-ā-rangi_Hakihea".split("_"),monthsShort:"Kohi_Hui_Pou_Pae_Hara_Pipi_Hōngoi_Here_Mahu_Whi-nu_Whi-ra_Haki".split("_"),monthsRegex:/(?:['a-z\u0101\u014D\u016B]+\-?){1,3}/i,monthsStrictRegex:/(?:['a-z\u0101\u014D\u016B]+\-?){1,3}/i,monthsShortRegex:/(?:['a-z\u0101\u014D\u016B]+\-?){1,3}/i,monthsShortStrictRegex:/(?:['a-z\u0101\u014D\u016B]+\-?){1,2}/i,weekdays:"Rātapu_Mane_Tūrei_Wenerei_Tāite_Paraire_Hātarei".split("_"),weekdaysShort:"Ta_Ma_Tū_We_Tāi_Pa_Hā".split("_"),weekdaysMin:"Ta_Ma_Tū_We_Tāi_Pa_Hā".split("_"),longDateFormat:{LT:"HH:mm",LTS:"HH:mm:ss",L:"DD/MM/YYYY",LL:"D MMMM YYYY",LLL:"D MMMM YYYY [i] HH:mm",LLLL:"dddd, D MMMM YYYY [i] HH:mm"},calendar:{sameDay:"[i teie mahana, i] LT",nextDay:"[apopo i] LT",nextWeek:"dddd [i] LT",lastDay:"[inanahi i] LT",lastWeek:"dddd [whakamutunga i] LT",sameElse:"L"},relativeTime:{future:"i roto i %s",past:"%s i mua",s:"te hēkona ruarua",ss:"%d hēkona",m:"he meneti",mm:"%d meneti",h:"te haora",hh:"%d haora",d:"he ra",dd:"%d ra",M:"he marama",MM:"%d marama",y:"he tau",yy:"%d tau"},dayOfMonthOrdinalParse:/\d{1,2}º/,ordinal:"%dº",week:{dow:1,doy:4}});return e}))},5966:function(t,e,n){(function(t,e){e(n(381))})(0,(function(t){"use strict";
//! moment.js locale configuration
var e=t.defineLocale("mk",{months:"јануари_февруари_март_април_мај_јуни_јули_август_септември_октомври_ноември_декември".split("_"),monthsShort:"јан_фев_мар_апр_мај_јун_јул_авг_сеп_окт_ное_дек".split("_"),weekdays:"недела_понеделник_вторник_среда_четврток_петок_сабота".split("_"),weekdaysShort:"нед_пон_вто_сре_чет_пет_саб".split("_"),weekdaysMin:"нe_пo_вт_ср_че_пе_сa".split("_"),longDateFormat:{LT:"H:mm",LTS:"H:mm:ss",L:"D.MM.YYYY",LL:"D MMMM YYYY",LLL:"D MMMM YYYY H:mm",LLLL:"dddd, D MMMM YYYY H:mm"},calendar:{sameDay:"[Денес во] LT",nextDay:"[Утре во] LT",nextWeek:"[Во] dddd [во] LT",lastDay:"[Вчера во] LT",lastWeek:function(){switch(this.day()){case 0:case 3:case 6:return"[Изминатата] dddd [во] LT";case 1:case 2:case 4:case 5:return"[Изминатиот] dddd [во] LT"}},sameElse:"L"},relativeTime:{future:"за %s",past:"пред %s",s:"неколку секунди",ss:"%d секунди",m:"една минута",mm:"%d минути",h:"еден час",hh:"%d часа",d:"еден ден",dd:"%d дена",M:"еден месец",MM:"%d месеци",y:"една година",yy:"%d години"},dayOfMonthOrdinalParse:/\d{1,2}-(ев|ен|ти|ви|ри|ми)/,ordinal:function(t){var e=t%10,n=t%100;return 0===t?t+"-ев":0===n?t+"-ен":n>10&&n<20?t+"-ти":1===e?t+"-ви":2===e?t+"-ри":7===e||8===e?t+"-ми":t+"-ти"},week:{dow:1,doy:7}});return e}))},7341:function(t,e,n){(function(t,e){e(n(381))})(0,(function(t){"use strict";
//! moment.js locale configuration
var e=t.defineLocale("ml",{months:"ജനുവരി_ഫെബ്രുവരി_മാർച്ച്_ഏപ്രിൽ_മേയ്_ജൂൺ_ജൂലൈ_ഓഗസ്റ്റ്_സെപ്റ്റംബർ_ഒക്ടോബർ_നവംബർ_ഡിസംബർ".split("_"),monthsShort:"ജനു._ഫെബ്രു._മാർ._ഏപ്രി._മേയ്_ജൂൺ_ജൂലൈ._ഓഗ._സെപ്റ്റ._ഒക്ടോ._നവം._ഡിസം.".split("_"),monthsParseExact:!0,weekdays:"ഞായറാഴ്ച_തിങ്കളാഴ്ച_ചൊവ്വാഴ്ച_ബുധനാഴ്ച_വ്യാഴാഴ്ച_വെള്ളിയാഴ്ച_ശനിയാഴ്ച".split("_"),weekdaysShort:"ഞായർ_തിങ്കൾ_ചൊവ്വ_ബുധൻ_വ്യാഴം_വെള്ളി_ശനി".split("_"),weekdaysMin:"ഞാ_തി_ചൊ_ബു_വ്യാ_വെ_ശ".split("_"),longDateFormat:{LT:"A h:mm -നു",LTS:"A h:mm:ss -നു",L:"DD/MM/YYYY",LL:"D MMMM YYYY",LLL:"D MMMM YYYY, A h:mm -നു",LLLL:"dddd, D MMMM YYYY, A h:mm -നു"},calendar:{sameDay:"[ഇന്ന്] LT",nextDay:"[നാളെ] LT",nextWeek:"dddd, LT",lastDay:"[ഇന്നലെ] LT",lastWeek:"[കഴിഞ്ഞ] dddd, LT",sameElse:"L"},relativeTime:{future:"%s കഴിഞ്ഞ്",past:"%s മുൻപ്",s:"അൽപ നിമിഷങ്ങൾ",ss:"%d സെക്കൻഡ്",m:"ഒരു മിനിറ്റ്",mm:"%d മിനിറ്റ്",h:"ഒരു മണിക്കൂർ",hh:"%d മണിക്കൂർ",d:"ഒരു ദിവസം",dd:"%d ദിവസം",M:"ഒരു മാസം",MM:"%d മാസം",y:"ഒരു വർഷം",yy:"%d വർഷം"},meridiemParse:/രാത്രി|രാവിലെ|ഉച്ച കഴിഞ്ഞ്|വൈകുന്നേരം|രാത്രി/i,meridiemHour:function(t,e){return 12===t&&(t=0),"രാത്രി"===e&&t>=4||"ഉച്ച കഴിഞ്ഞ്"===e||"വൈകുന്നേരം"===e?t+12:t},meridiem:function(t,e,n){return t<4?"രാത്രി":t<12?"രാവിലെ":t<17?"ഉച്ച കഴിഞ്ഞ്":t<20?"വൈകുന്നേരം":"രാത്രി"}});return e}))},5115:function(t,e,n){(function(t,e){e(n(381))})(0,(function(t){"use strict";
//! moment.js locale configuration
function e(t,e,n,a){switch(n){case"s":return e?"хэдхэн секунд":"хэдхэн секундын";case"ss":return t+(e?" секунд":" секундын");case"m":case"mm":return t+(e?" минут":" минутын");case"h":case"hh":return t+(e?" цаг":" цагийн");case"d":case"dd":return t+(e?" өдөр":" өдрийн");case"M":case"MM":return t+(e?" сар":" сарын");case"y":case"yy":return t+(e?" жил":" жилийн");default:return t}}var n=t.defineLocale("mn",{months:"Нэгдүгээр сар_Хоёрдугаар сар_Гуравдугаар сар_Дөрөвдүгээр сар_Тавдугаар сар_Зургадугаар сар_Долдугаар сар_Наймдугаар сар_Есдүгээр сар_Аравдугаар сар_Арван нэгдүгээр сар_Арван хоёрдугаар сар".split("_"),monthsShort:"1 сар_2 сар_3 сар_4 сар_5 сар_6 сар_7 сар_8 сар_9 сар_10 сар_11 сар_12 сар".split("_"),monthsParseExact:!0,weekdays:"Ням_Даваа_Мягмар_Лхагва_Пүрэв_Баасан_Бямба".split("_"),weekdaysShort:"Ням_Дав_Мяг_Лха_Пүр_Баа_Бям".split("_"),weekdaysMin:"Ня_Да_Мя_Лх_Пү_Ба_Бя".split("_"),weekdaysParseExact:!0,longDateFormat:{LT:"HH:mm",LTS:"HH:mm:ss",L:"YYYY-MM-DD",LL:"YYYY оны MMMMын D",LLL:"YYYY оны MMMMын D HH:mm",LLLL:"dddd, YYYY оны MMMMын D HH:mm"},meridiemParse:/ҮӨ|ҮХ/i,isPM:function(t){return"ҮХ"===t},meridiem:function(t,e,n){return t<12?"ҮӨ":"ҮХ"},calendar:{sameDay:"[Өнөөдөр] LT",nextDay:"[Маргааш] LT",nextWeek:"[Ирэх] dddd LT",lastDay:"[Өчигдөр] LT",lastWeek:"[Өнгөрсөн] dddd LT",sameElse:"L"},relativeTime:{future:"%s дараа",past:"%s өмнө",s:e,ss:e,m:e,mm:e,h:e,hh:e,d:e,dd:e,M:e,MM:e,y:e,yy:e},dayOfMonthOrdinalParse:/\d{1,2} өдөр/,ordinal:function(t,e){switch(e){case"d":case"D":case"DDD":return t+" өдөр";default:return t}}});return n}))},370:function(t,e,n){(function(t,e){e(n(381))})(0,(function(t){"use strict";
//! moment.js locale configuration
var e={1:"१",2:"२",3:"३",4:"४",5:"५",6:"६",7:"७",8:"८",9:"९",0:"०"},n={"१":"1","२":"2","३":"3","४":"4","५":"5","६":"6","७":"7","८":"8","९":"9","०":"0"};function a(t,e,n,a){var r="";if(e)switch(n){case"s":r="काही सेकंद";break;case"ss":r="%d सेकंद";break;case"m":r="एक मिनिट";break;case"mm":r="%d मिनिटे";break;case"h":r="एक तास";break;case"hh":r="%d तास";break;case"d":r="एक दिवस";break;case"dd":r="%d दिवस";break;case"M":r="एक महिना";break;case"MM":r="%d महिने";break;case"y":r="एक वर्ष";break;case"yy":r="%d वर्षे";break}else switch(n){case"s":r="काही सेकंदां";break;case"ss":r="%d सेकंदां";break;case"m":r="एका मिनिटा";break;case"mm":r="%d मिनिटां";break;case"h":r="एका तासा";break;case"hh":r="%d तासां";break;case"d":r="एका दिवसा";break;case"dd":r="%d दिवसां";break;case"M":r="एका महिन्या";break;case"MM":r="%d महिन्यां";break;case"y":r="एका वर्षा";break;case"yy":r="%d वर्षां";break}return r.replace(/%d/i,t)}var r=t.defineLocale("mr",{months:"जानेवारी_फेब्रुवारी_मार्च_एप्रिल_मे_जून_जुलै_ऑगस्ट_सप्टेंबर_ऑक्टोबर_नोव्हेंबर_डिसेंबर".split("_"),monthsShort:"जाने._फेब्रु._मार्च._एप्रि._मे._जून._जुलै._ऑग._सप्टें._ऑक्टो._नोव्हें._डिसें.".split("_"),monthsParseExact:!0,weekdays:"रविवार_सोमवार_मंगळवार_बुधवार_गुरूवार_शुक्रवार_शनिवार".split("_"),weekdaysShort:"रवि_सोम_मंगळ_बुध_गुरू_शुक्र_शनि".split("_"),weekdaysMin:"र_सो_मं_बु_गु_शु_श".split("_"),longDateFormat:{LT:"A h:mm वाजता",LTS:"A h:mm:ss वाजता",L:"DD/MM/YYYY",LL:"D MMMM YYYY",LLL:"D MMMM YYYY, A h:mm वाजता",LLLL:"dddd, D MMMM YYYY, A h:mm वाजता"},calendar:{sameDay:"[आज] LT",nextDay:"[उद्या] LT",nextWeek:"dddd, LT",lastDay:"[काल] LT",lastWeek:"[मागील] dddd, LT",sameElse:"L"},relativeTime:{future:"%sमध्ये",past:"%sपूर्वी",s:a,ss:a,m:a,mm:a,h:a,hh:a,d:a,dd:a,M:a,MM:a,y:a,yy:a},preparse:function(t){return t.replace(/[१२३४५६७८९०]/g,(function(t){return n[t]}))},postformat:function(t){return t.replace(/\d/g,(function(t){return e[t]}))},meridiemParse:/पहाटे|सकाळी|दुपारी|सायंकाळी|रात्री/,meridiemHour:function(t,e){return 12===t&&(t=0),"पहाटे"===e||"सकाळी"===e?t:"दुपारी"===e||"सायंकाळी"===e||"रात्री"===e?t>=12?t:t+12:void 0},meridiem:function(t,e,n){return t>=0&&t<6?"पहाटे":t<12?"सकाळी":t<17?"दुपारी":t<20?"सायंकाळी":"रात्री"},week:{dow:0,doy:6}});return r}))},1237:function(t,e,n){(function(t,e){e(n(381))})(0,(function(t){"use strict";
//! moment.js locale configuration
var e=t.defineLocale("ms-my",{months:"Januari_Februari_Mac_April_Mei_Jun_Julai_Ogos_September_Oktober_November_Disember".split("_"),monthsShort:"Jan_Feb_Mac_Apr_Mei_Jun_Jul_Ogs_Sep_Okt_Nov_Dis".split("_"),weekdays:"Ahad_Isnin_Selasa_Rabu_Khamis_Jumaat_Sabtu".split("_"),weekdaysShort:"Ahd_Isn_Sel_Rab_Kha_Jum_Sab".split("_"),weekdaysMin:"Ah_Is_Sl_Rb_Km_Jm_Sb".split("_"),longDateFormat:{LT:"HH.mm",LTS:"HH.mm.ss",L:"DD/MM/YYYY",LL:"D MMMM YYYY",LLL:"D MMMM YYYY [pukul] HH.mm",LLLL:"dddd, D MMMM YYYY [pukul] HH.mm"},meridiemParse:/pagi|tengahari|petang|malam/,meridiemHour:function(t,e){return 12===t&&(t=0),"pagi"===e?t:"tengahari"===e?t>=11?t:t+12:"petang"===e||"malam"===e?t+12:void 0},meridiem:function(t,e,n){return t<11?"pagi":t<15?"tengahari":t<19?"petang":"malam"},calendar:{sameDay:"[Hari ini pukul] LT",nextDay:"[Esok pukul] LT",nextWeek:"dddd [pukul] LT",lastDay:"[Kelmarin pukul] LT",lastWeek:"dddd [lepas pukul] LT",sameElse:"L"},relativeTime:{future:"dalam %s",past:"%s yang lepas",s:"beberapa saat",ss:"%d saat",m:"seminit",mm:"%d minit",h:"sejam",hh:"%d jam",d:"sehari",dd:"%d hari",M:"sebulan",MM:"%d bulan",y:"setahun",yy:"%d tahun"},week:{dow:1,doy:7}});return e}))},9847:function(t,e,n){(function(t,e){e(n(381))})(0,(function(t){"use strict";
//! moment.js locale configuration
var e=t.defineLocale("ms",{months:"Januari_Februari_Mac_April_Mei_Jun_Julai_Ogos_September_Oktober_November_Disember".split("_"),monthsShort:"Jan_Feb_Mac_Apr_Mei_Jun_Jul_Ogs_Sep_Okt_Nov_Dis".split("_"),weekdays:"Ahad_Isnin_Selasa_Rabu_Khamis_Jumaat_Sabtu".split("_"),weekdaysShort:"Ahd_Isn_Sel_Rab_Kha_Jum_Sab".split("_"),weekdaysMin:"Ah_Is_Sl_Rb_Km_Jm_Sb".split("_"),longDateFormat:{LT:"HH.mm",LTS:"HH.mm.ss",L:"DD/MM/YYYY",LL:"D MMMM YYYY",LLL:"D MMMM YYYY [pukul] HH.mm",LLLL:"dddd, D MMMM YYYY [pukul] HH.mm"},meridiemParse:/pagi|tengahari|petang|malam/,meridiemHour:function(t,e){return 12===t&&(t=0),"pagi"===e?t:"tengahari"===e?t>=11?t:t+12:"petang"===e||"malam"===e?t+12:void 0},meridiem:function(t,e,n){return t<11?"pagi":t<15?"tengahari":t<19?"petang":"malam"},calendar:{sameDay:"[Hari ini pukul] LT",nextDay:"[Esok pukul] LT",nextWeek:"dddd [pukul] LT",lastDay:"[Kelmarin pukul] LT",lastWeek:"dddd [lepas pukul] LT",sameElse:"L"},relativeTime:{future:"dalam %s",past:"%s yang lepas",s:"beberapa saat",ss:"%d saat",m:"seminit",mm:"%d minit",h:"sejam",hh:"%d jam",d:"sehari",dd:"%d hari",M:"sebulan",MM:"%d bulan",y:"setahun",yy:"%d tahun"},week:{dow:1,doy:7}});return e}))},2126:function(t,e,n){(function(t,e){e(n(381))})(0,(function(t){"use strict";
//! moment.js locale configuration
var e=t.defineLocale("mt",{months:"Jannar_Frar_Marzu_April_Mejju_Ġunju_Lulju_Awwissu_Settembru_Ottubru_Novembru_Diċembru".split("_"),monthsShort:"Jan_Fra_Mar_Apr_Mej_Ġun_Lul_Aww_Set_Ott_Nov_Diċ".split("_"),weekdays:"Il-Ħadd_It-Tnejn_It-Tlieta_L-Erbgħa_Il-Ħamis_Il-Ġimgħa_Is-Sibt".split("_"),weekdaysShort:"Ħad_Tne_Tli_Erb_Ħam_Ġim_Sib".split("_"),weekdaysMin:"Ħa_Tn_Tl_Er_Ħa_Ġi_Si".split("_"),longDateFormat:{LT:"HH:mm",LTS:"HH:mm:ss",L:"DD/MM/YYYY",LL:"D MMMM YYYY",LLL:"D MMMM YYYY HH:mm",LLLL:"dddd, D MMMM YYYY HH:mm"},calendar:{sameDay:"[Illum fil-]LT",nextDay:"[Għada fil-]LT",nextWeek:"dddd [fil-]LT",lastDay:"[Il-bieraħ fil-]LT",lastWeek:"dddd [li għadda] [fil-]LT",sameElse:"L"},relativeTime:{future:"f’ %s",past:"%s ilu",s:"ftit sekondi",ss:"%d sekondi",m:"minuta",mm:"%d minuti",h:"siegħa",hh:"%d siegħat",d:"ġurnata",dd:"%d ġranet",M:"xahar",MM:"%d xhur",y:"sena",yy:"%d sni"},dayOfMonthOrdinalParse:/\d{1,2}º/,ordinal:"%dº",week:{dow:1,doy:4}});return e}))},6165:function(t,e,n){(function(t,e){e(n(381))})(0,(function(t){"use strict";
//! moment.js locale configuration
var e={1:"၁",2:"၂",3:"၃",4:"၄",5:"၅",6:"၆",7:"၇",8:"၈",9:"၉",0:"၀"},n={"၁":"1","၂":"2","၃":"3","၄":"4","၅":"5","၆":"6","၇":"7","၈":"8","၉":"9","၀":"0"},a=t.defineLocale("my",{months:"ဇန်နဝါရီ_ဖေဖော်ဝါရီ_မတ်_ဧပြီ_မေ_ဇွန်_ဇူလိုင်_သြဂုတ်_စက်တင်ဘာ_အောက်တိုဘာ_နိုဝင်ဘာ_ဒီဇင်ဘာ".split("_"),monthsShort:"ဇန်_ဖေ_မတ်_ပြီ_မေ_ဇွန်_လိုင်_သြ_စက်_အောက်_နို_ဒီ".split("_"),weekdays:"တနင်္ဂနွေ_တနင်္လာ_အင်္ဂါ_ဗုဒ္ဓဟူး_ကြာသပတေး_သောကြာ_စနေ".split("_"),weekdaysShort:"နွေ_လာ_ဂါ_ဟူး_ကြာ_သော_နေ".split("_"),weekdaysMin:"နွေ_လာ_ဂါ_ဟူး_ကြာ_သော_နေ".split("_"),longDateFormat:{LT:"HH:mm",LTS:"HH:mm:ss",L:"DD/MM/YYYY",LL:"D MMMM YYYY",LLL:"D MMMM YYYY HH:mm",LLLL:"dddd D MMMM YYYY HH:mm"},calendar:{sameDay:"[ယနေ.] LT [မှာ]",nextDay:"[မနက်ဖြန်] LT [မှာ]",nextWeek:"dddd LT [မှာ]",lastDay:"[မနေ.က] LT [မှာ]",lastWeek:"[ပြီးခဲ့သော] dddd LT [မှာ]",sameElse:"L"},relativeTime:{future:"လာမည့် %s မှာ",past:"လွန်ခဲ့သော %s က",s:"စက္ကန်.အနည်းငယ်",ss:"%d စက္ကန့်",m:"တစ်မိနစ်",mm:"%d မိနစ်",h:"တစ်နာရီ",hh:"%d နာရီ",d:"တစ်ရက်",dd:"%d ရက်",M:"တစ်လ",MM:"%d လ",y:"တစ်နှစ်",yy:"%d နှစ်"},preparse:function(t){return t.replace(/[၁၂၃၄၅၆၇၈၉၀]/g,(function(t){return n[t]}))},postformat:function(t){return t.replace(/\d/g,(function(t){return e[t]}))},week:{dow:1,doy:4}});return a}))},4924:function(t,e,n){(function(t,e){e(n(381))})(0,(function(t){"use strict";
//! moment.js locale configuration
var e=t.defineLocale("nb",{months:"januar_februar_mars_april_mai_juni_juli_august_september_oktober_november_desember".split("_"),monthsShort:"jan._feb._mars_apr._mai_juni_juli_aug._sep._okt._nov._des.".split("_"),monthsParseExact:!0,weekdays:"søndag_mandag_tirsdag_onsdag_torsdag_fredag_lørdag".split("_"),weekdaysShort:"sø._ma._ti._on._to._fr._lø.".split("_"),weekdaysMin:"sø_ma_ti_on_to_fr_lø".split("_"),weekdaysParseExact:!0,longDateFormat:{LT:"HH:mm",LTS:"HH:mm:ss",L:"DD.MM.YYYY",LL:"D. MMMM YYYY",LLL:"D. MMMM YYYY [kl.] HH:mm",LLLL:"dddd D. MMMM YYYY [kl.] HH:mm"},calendar:{sameDay:"[i dag kl.] LT",nextDay:"[i morgen kl.] LT",nextWeek:"dddd [kl.] LT",lastDay:"[i går kl.] LT",lastWeek:"[forrige] dddd [kl.] LT",sameElse:"L"},relativeTime:{future:"om %s",past:"%s siden",s:"noen sekunder",ss:"%d sekunder",m:"ett minutt",mm:"%d minutter",h:"en time",hh:"%d timer",d:"en dag",dd:"%d dager",w:"en uke",ww:"%d uker",M:"en måned",MM:"%d måneder",y:"ett år",yy:"%d år"},dayOfMonthOrdinalParse:/\d{1,2}\./,ordinal:"%d.",week:{dow:1,doy:4}});return e}))},6744:function(t,e,n){(function(t,e){e(n(381))})(0,(function(t){"use strict";
//! moment.js locale configuration
var e={1:"१",2:"२",3:"३",4:"४",5:"५",6:"६",7:"७",8:"८",9:"९",0:"०"},n={"१":"1","२":"2","३":"3","४":"4","५":"5","६":"6","७":"7","८":"8","९":"9","०":"0"},a=t.defineLocale("ne",{months:"जनवरी_फेब्रुवरी_मार्च_अप्रिल_मई_जुन_जुलाई_अगष्ट_सेप्टेम्बर_अक्टोबर_नोभेम्बर_डिसेम्बर".split("_"),monthsShort:"जन._फेब्रु._मार्च_अप्रि._मई_जुन_जुलाई._अग._सेप्ट._अक्टो._नोभे._डिसे.".split("_"),monthsParseExact:!0,weekdays:"आइतबार_सोमबार_मङ्गलबार_बुधबार_बिहिबार_शुक्रबार_शनिबार".split("_"),weekdaysShort:"आइत._सोम._मङ्गल._बुध._बिहि._शुक्र._शनि.".split("_"),weekdaysMin:"आ._सो._मं._बु._बि._शु._श.".split("_"),weekdaysParseExact:!0,longDateFormat:{LT:"Aको h:mm बजे",LTS:"Aको h:mm:ss बजे",L:"DD/MM/YYYY",LL:"D MMMM YYYY",LLL:"D MMMM YYYY, Aको h:mm बजे",LLLL:"dddd, D MMMM YYYY, Aको h:mm बजे"},preparse:function(t){return t.replace(/[१२३४५६७८९०]/g,(function(t){return n[t]}))},postformat:function(t){return t.replace(/\d/g,(function(t){return e[t]}))},meridiemParse:/राति|बिहान|दिउँसो|साँझ/,meridiemHour:function(t,e){return 12===t&&(t=0),"राति"===e?t<4?t:t+12:"बिहान"===e?t:"दिउँसो"===e?t>=10?t:t+12:"साँझ"===e?t+12:void 0},meridiem:function(t,e,n){return t<3?"राति":t<12?"बिहान":t<16?"दिउँसो":t<20?"साँझ":"राति"},calendar:{sameDay:"[आज] LT",nextDay:"[भोलि] LT",nextWeek:"[आउँदो] dddd[,] LT",lastDay:"[हिजो] LT",lastWeek:"[गएको] dddd[,] LT",sameElse:"L"},relativeTime:{future:"%sमा",past:"%s अगाडि",s:"केही क्षण",ss:"%d सेकेण्ड",m:"एक मिनेट",mm:"%d मिनेट",h:"एक घण्टा",hh:"%d घण्टा",d:"एक दिन",dd:"%d दिन",M:"एक महिना",MM:"%d महिना",y:"एक बर्ष",yy:"%d बर्ष"},week:{dow:0,doy:6}});return a}))},9814:function(t,e,n){(function(t,e){e(n(381))})(0,(function(t){"use strict";
//! moment.js locale configuration
var e="jan._feb._mrt._apr._mei_jun._jul._aug._sep._okt._nov._dec.".split("_"),n="jan_feb_mrt_apr_mei_jun_jul_aug_sep_okt_nov_dec".split("_"),a=[/^jan/i,/^feb/i,/^maart|mrt.?$/i,/^apr/i,/^mei$/i,/^jun[i.]?$/i,/^jul[i.]?$/i,/^aug/i,/^sep/i,/^okt/i,/^nov/i,/^dec/i],r=/^(januari|februari|maart|april|mei|ju[nl]i|augustus|september|oktober|november|december|jan\.?|feb\.?|mrt\.?|apr\.?|ju[nl]\.?|aug\.?|sep\.?|okt\.?|nov\.?|dec\.?)/i,i=t.defineLocale("nl-be",{months:"januari_februari_maart_april_mei_juni_juli_augustus_september_oktober_november_december".split("_"),monthsShort:function(t,a){return t?/-MMM-/.test(a)?n[t.month()]:e[t.month()]:e},monthsRegex:r,monthsShortRegex:r,monthsStrictRegex:/^(januari|februari|maart|april|mei|ju[nl]i|augustus|september|oktober|november|december)/i,monthsShortStrictRegex:/^(jan\.?|feb\.?|mrt\.?|apr\.?|mei|ju[nl]\.?|aug\.?|sep\.?|okt\.?|nov\.?|dec\.?)/i,monthsParse:a,longMonthsParse:a,shortMonthsParse:a,weekdays:"zondag_maandag_dinsdag_woensdag_donderdag_vrijdag_zaterdag".split("_"),weekdaysShort:"zo._ma._di._wo._do._vr._za.".split("_"),weekdaysMin:"zo_ma_di_wo_do_vr_za".split("_"),weekdaysParseExact:!0,longDateFormat:{LT:"HH:mm",LTS:"HH:mm:ss",L:"DD/MM/YYYY",LL:"D MMMM YYYY",LLL:"D MMMM YYYY HH:mm",LLLL:"dddd D MMMM YYYY HH:mm"},calendar:{sameDay:"[vandaag om] LT",nextDay:"[morgen om] LT",nextWeek:"dddd [om] LT",lastDay:"[gisteren om] LT",lastWeek:"[afgelopen] dddd [om] LT",sameElse:"L"},relativeTime:{future:"over %s",past:"%s geleden",s:"een paar seconden",ss:"%d seconden",m:"één minuut",mm:"%d minuten",h:"één uur",hh:"%d uur",d:"één dag",dd:"%d dagen",M:"één maand",MM:"%d maanden",y:"één jaar",yy:"%d jaar"},dayOfMonthOrdinalParse:/\d{1,2}(ste|de)/,ordinal:function(t){return t+(1===t||8===t||t>=20?"ste":"de")},week:{dow:1,doy:4}});return i}))},3901:function(t,e,n){(function(t,e){e(n(381))})(0,(function(t){"use strict";
//! moment.js locale configuration
var e="jan._feb._mrt._apr._mei_jun._jul._aug._sep._okt._nov._dec.".split("_"),n="jan_feb_mrt_apr_mei_jun_jul_aug_sep_okt_nov_dec".split("_"),a=[/^jan/i,/^feb/i,/^maart|mrt.?$/i,/^apr/i,/^mei$/i,/^jun[i.]?$/i,/^jul[i.]?$/i,/^aug/i,/^sep/i,/^okt/i,/^nov/i,/^dec/i],r=/^(januari|februari|maart|april|mei|ju[nl]i|augustus|september|oktober|november|december|jan\.?|feb\.?|mrt\.?|apr\.?|ju[nl]\.?|aug\.?|sep\.?|okt\.?|nov\.?|dec\.?)/i,i=t.defineLocale("nl",{months:"januari_februari_maart_april_mei_juni_juli_augustus_september_oktober_november_december".split("_"),monthsShort:function(t,a){return t?/-MMM-/.test(a)?n[t.month()]:e[t.month()]:e},monthsRegex:r,monthsShortRegex:r,monthsStrictRegex:/^(januari|februari|maart|april|mei|ju[nl]i|augustus|september|oktober|november|december)/i,monthsShortStrictRegex:/^(jan\.?|feb\.?|mrt\.?|apr\.?|mei|ju[nl]\.?|aug\.?|sep\.?|okt\.?|nov\.?|dec\.?)/i,monthsParse:a,longMonthsParse:a,shortMonthsParse:a,weekdays:"zondag_maandag_dinsdag_woensdag_donderdag_vrijdag_zaterdag".split("_"),weekdaysShort:"zo._ma._di._wo._do._vr._za.".split("_"),weekdaysMin:"zo_ma_di_wo_do_vr_za".split("_"),weekdaysParseExact:!0,longDateFormat:{LT:"HH:mm",LTS:"HH:mm:ss",L:"DD-MM-YYYY",LL:"D MMMM YYYY",LLL:"D MMMM YYYY HH:mm",LLLL:"dddd D MMMM YYYY HH:mm"},calendar:{sameDay:"[vandaag om] LT",nextDay:"[morgen om] LT",nextWeek:"dddd [om] LT",lastDay:"[gisteren om] LT",lastWeek:"[afgelopen] dddd [om] LT",sameElse:"L"},relativeTime:{future:"over %s",past:"%s geleden",s:"een paar seconden",ss:"%d seconden",m:"één minuut",mm:"%d minuten",h:"één uur",hh:"%d uur",d:"één dag",dd:"%d dagen",w:"één week",ww:"%d weken",M:"één maand",MM:"%d maanden",y:"één jaar",yy:"%d jaar"},dayOfMonthOrdinalParse:/\d{1,2}(ste|de)/,ordinal:function(t){return t+(1===t||8===t||t>=20?"ste":"de")},week:{dow:1,doy:4}});return i}))},3877:function(t,e,n){(function(t,e){e(n(381))})(0,(function(t){"use strict";
//! moment.js locale configuration
var e=t.defineLocale("nn",{months:"januar_februar_mars_april_mai_juni_juli_august_september_oktober_november_desember".split("_"),monthsShort:"jan._feb._mars_apr._mai_juni_juli_aug._sep._okt._nov._des.".split("_"),monthsParseExact:!0,weekdays:"sundag_måndag_tysdag_onsdag_torsdag_fredag_laurdag".split("_"),weekdaysShort:"su._må._ty._on._to._fr._lau.".split("_"),weekdaysMin:"su_må_ty_on_to_fr_la".split("_"),weekdaysParseExact:!0,longDateFormat:{LT:"HH:mm",LTS:"HH:mm:ss",L:"DD.MM.YYYY",LL:"D. MMMM YYYY",LLL:"D. MMMM YYYY [kl.] H:mm",LLLL:"dddd D. MMMM YYYY [kl.] HH:mm"},calendar:{sameDay:"[I dag klokka] LT",nextDay:"[I morgon klokka] LT",nextWeek:"dddd [klokka] LT",lastDay:"[I går klokka] LT",lastWeek:"[Føregåande] dddd [klokka] LT",sameElse:"L"},relativeTime:{future:"om %s",past:"%s sidan",s:"nokre sekund",ss:"%d sekund",m:"eit minutt",mm:"%d minutt",h:"ein time",hh:"%d timar",d:"ein dag",dd:"%d dagar",w:"ei veke",ww:"%d veker",M:"ein månad",MM:"%d månader",y:"eit år",yy:"%d år"},dayOfMonthOrdinalParse:/\d{1,2}\./,ordinal:"%d.",week:{dow:1,doy:4}});return e}))},2135:function(t,e,n){(function(t,e){e(n(381))})(0,(function(t){"use strict";
//! moment.js locale configuration
var e=t.defineLocale("oc-lnc",{months:{standalone:"genièr_febrièr_març_abril_mai_junh_julhet_agost_setembre_octòbre_novembre_decembre".split("_"),format:"de genièr_de febrièr_de març_d'abril_de mai_de junh_de julhet_d'agost_de setembre_d'octòbre_de novembre_de decembre".split("_"),isFormat:/D[oD]?(\s)+MMMM/},monthsShort:"gen._febr._març_abr._mai_junh_julh._ago._set._oct._nov._dec.".split("_"),monthsParseExact:!0,weekdays:"dimenge_diluns_dimars_dimècres_dijòus_divendres_dissabte".split("_"),weekdaysShort:"dg._dl._dm._dc._dj._dv._ds.".split("_"),weekdaysMin:"dg_dl_dm_dc_dj_dv_ds".split("_"),weekdaysParseExact:!0,longDateFormat:{LT:"H:mm",LTS:"H:mm:ss",L:"DD/MM/YYYY",LL:"D MMMM [de] YYYY",ll:"D MMM YYYY",LLL:"D MMMM [de] YYYY [a] H:mm",lll:"D MMM YYYY, H:mm",LLLL:"dddd D MMMM [de] YYYY [a] H:mm",llll:"ddd D MMM YYYY, H:mm"},calendar:{sameDay:"[uèi a] LT",nextDay:"[deman a] LT",nextWeek:"dddd [a] LT",lastDay:"[ièr a] LT",lastWeek:"dddd [passat a] LT",sameElse:"L"},relativeTime:{future:"d'aquí %s",past:"fa %s",s:"unas segondas",ss:"%d segondas",m:"una minuta",mm:"%d minutas",h:"una ora",hh:"%d oras",d:"un jorn",dd:"%d jorns",M:"un mes",MM:"%d meses",y:"un an",yy:"%d ans"},dayOfMonthOrdinalParse:/\d{1,2}(r|n|t|è|a)/,ordinal:function(t,e){var n=1===t?"r":2===t?"n":3===t?"r":4===t?"t":"è";return"w"!==e&&"W"!==e||(n="a"),t+n},week:{dow:1,doy:4}});return e}))},5858:function(t,e,n){(function(t,e){e(n(381))})(0,(function(t){"use strict";
//! moment.js locale configuration
var e={1:"੧",2:"੨",3:"੩",4:"੪",5:"੫",6:"੬",7:"੭",8:"੮",9:"੯",0:"੦"},n={"੧":"1","੨":"2","੩":"3","੪":"4","੫":"5","੬":"6","੭":"7","੮":"8","੯":"9","੦":"0"},a=t.defineLocale("pa-in",{months:"ਜਨਵਰੀ_ਫ਼ਰਵਰੀ_ਮਾਰਚ_ਅਪ੍ਰੈਲ_ਮਈ_ਜੂਨ_ਜੁਲਾਈ_ਅਗਸਤ_ਸਤੰਬਰ_ਅਕਤੂਬਰ_ਨਵੰਬਰ_ਦਸੰਬਰ".split("_"),monthsShort:"ਜਨਵਰੀ_ਫ਼ਰਵਰੀ_ਮਾਰਚ_ਅਪ੍ਰੈਲ_ਮਈ_ਜੂਨ_ਜੁਲਾਈ_ਅਗਸਤ_ਸਤੰਬਰ_ਅਕਤੂਬਰ_ਨਵੰਬਰ_ਦਸੰਬਰ".split("_"),weekdays:"ਐਤਵਾਰ_ਸੋਮਵਾਰ_ਮੰਗਲਵਾਰ_ਬੁਧਵਾਰ_ਵੀਰਵਾਰ_ਸ਼ੁੱਕਰਵਾਰ_ਸ਼ਨੀਚਰਵਾਰ".split("_"),weekdaysShort:"ਐਤ_ਸੋਮ_ਮੰਗਲ_ਬੁਧ_ਵੀਰ_ਸ਼ੁਕਰ_ਸ਼ਨੀ".split("_"),weekdaysMin:"ਐਤ_ਸੋਮ_ਮੰਗਲ_ਬੁਧ_ਵੀਰ_ਸ਼ੁਕਰ_ਸ਼ਨੀ".split("_"),longDateFormat:{LT:"A h:mm ਵਜੇ",LTS:"A h:mm:ss ਵਜੇ",L:"DD/MM/YYYY",LL:"D MMMM YYYY",LLL:"D MMMM YYYY, A h:mm ਵਜੇ",LLLL:"dddd, D MMMM YYYY, A h:mm ਵਜੇ"},calendar:{sameDay:"[ਅਜ] LT",nextDay:"[ਕਲ] LT",nextWeek:"[ਅਗਲਾ] dddd, LT",lastDay:"[ਕਲ] LT",lastWeek:"[ਪਿਛਲੇ] dddd, LT",sameElse:"L"},relativeTime:{future:"%s ਵਿੱਚ",past:"%s ਪਿਛਲੇ",s:"ਕੁਝ ਸਕਿੰਟ",ss:"%d ਸਕਿੰਟ",m:"ਇਕ ਮਿੰਟ",mm:"%d ਮਿੰਟ",h:"ਇੱਕ ਘੰਟਾ",hh:"%d ਘੰਟੇ",d:"ਇੱਕ ਦਿਨ",dd:"%d ਦਿਨ",M:"ਇੱਕ ਮਹੀਨਾ",MM:"%d ਮਹੀਨੇ",y:"ਇੱਕ ਸਾਲ",yy:"%d ਸਾਲ"},preparse:function(t){return t.replace(/[੧੨੩੪੫੬੭੮੯੦]/g,(function(t){return n[t]}))},postformat:function(t){return t.replace(/\d/g,(function(t){return e[t]}))},meridiemParse:/ਰਾਤ|ਸਵੇਰ|ਦੁਪਹਿਰ|ਸ਼ਾਮ/,meridiemHour:function(t,e){return 12===t&&(t=0),"ਰਾਤ"===e?t<4?t:t+12:"ਸਵੇਰ"===e?t:"ਦੁਪਹਿਰ"===e?t>=10?t:t+12:"ਸ਼ਾਮ"===e?t+12:void 0},meridiem:function(t,e,n){return t<4?"ਰਾਤ":t<10?"ਸਵੇਰ":t<17?"ਦੁਪਹਿਰ":t<20?"ਸ਼ਾਮ":"ਰਾਤ"},week:{dow:0,doy:6}});return a}))},4495:function(t,e,n){(function(t,e){e(n(381))})(0,(function(t){"use strict";
//! moment.js locale configuration
var e="styczeń_luty_marzec_kwiecień_maj_czerwiec_lipiec_sierpień_wrzesień_październik_listopad_grudzień".split("_"),n="stycznia_lutego_marca_kwietnia_maja_czerwca_lipca_sierpnia_września_października_listopada_grudnia".split("_"),a=[/^sty/i,/^lut/i,/^mar/i,/^kwi/i,/^maj/i,/^cze/i,/^lip/i,/^sie/i,/^wrz/i,/^paź/i,/^lis/i,/^gru/i];function r(t){return t%10<5&&t%10>1&&~~(t/10)%10!==1}function i(t,e,n){var a=t+" ";switch(n){case"ss":return a+(r(t)?"sekundy":"sekund");case"m":return e?"minuta":"minutę";case"mm":return a+(r(t)?"minuty":"minut");case"h":return e?"godzina":"godzinę";case"hh":return a+(r(t)?"godziny":"godzin");case"ww":return a+(r(t)?"tygodnie":"tygodni");case"MM":return a+(r(t)?"miesiące":"miesięcy");case"yy":return a+(r(t)?"lata":"lat")}}var o=t.defineLocale("pl",{months:function(t,a){return t?/D MMMM/.test(a)?n[t.month()]:e[t.month()]:e},monthsShort:"sty_lut_mar_kwi_maj_cze_lip_sie_wrz_paź_lis_gru".split("_"),monthsParse:a,longMonthsParse:a,shortMonthsParse:a,weekdays:"niedziela_poniedziałek_wtorek_środa_czwartek_piątek_sobota".split("_"),weekdaysShort:"ndz_pon_wt_śr_czw_pt_sob".split("_"),weekdaysMin:"Nd_Pn_Wt_Śr_Cz_Pt_So".split("_"),longDateFormat:{LT:"HH:mm",LTS:"HH:mm:ss",L:"DD.MM.YYYY",LL:"D MMMM YYYY",LLL:"D MMMM YYYY HH:mm",LLLL:"dddd, D MMMM YYYY HH:mm"},calendar:{sameDay:"[Dziś o] LT",nextDay:"[Jutro o] LT",nextWeek:function(){switch(this.day()){case 0:return"[W niedzielę o] LT";case 2:return"[We wtorek o] LT";case 3:return"[W środę o] LT";case 6:return"[W sobotę o] LT";default:return"[W] dddd [o] LT"}},lastDay:"[Wczoraj o] LT",lastWeek:function(){switch(this.day()){case 0:return"[W zeszłą niedzielę o] LT";case 3:return"[W zeszłą środę o] LT";case 6:return"[W zeszłą sobotę o] LT";default:return"[W zeszły] dddd [o] LT"}},sameElse:"L"},relativeTime:{future:"za %s",past:"%s temu",s:"kilka sekund",ss:i,m:i,mm:i,h:i,hh:i,d:"1 dzień",dd:"%d dni",w:"tydzień",ww:i,M:"miesiąc",MM:i,y:"rok",yy:i},dayOfMonthOrdinalParse:/\d{1,2}\./,ordinal:"%d.",week:{dow:1,doy:4}});return o}))},7971:function(t,e,n){(function(t,e){e(n(381))})(0,(function(t){"use strict";
//! moment.js locale configuration
var e=t.defineLocale("pt-br",{months:"janeiro_fevereiro_março_abril_maio_junho_julho_agosto_setembro_outubro_novembro_dezembro".split("_"),monthsShort:"jan_fev_mar_abr_mai_jun_jul_ago_set_out_nov_dez".split("_"),weekdays:"domingo_segunda-feira_terça-feira_quarta-feira_quinta-feira_sexta-feira_sábado".split("_"),weekdaysShort:"dom_seg_ter_qua_qui_sex_sáb".split("_"),weekdaysMin:"do_2ª_3ª_4ª_5ª_6ª_sá".split("_"),weekdaysParseExact:!0,longDateFormat:{LT:"HH:mm",LTS:"HH:mm:ss",L:"DD/MM/YYYY",LL:"D [de] MMMM [de] YYYY",LLL:"D [de] MMMM [de] YYYY [às] HH:mm",LLLL:"dddd, D [de] MMMM [de] YYYY [às] HH:mm"},calendar:{sameDay:"[Hoje às] LT",nextDay:"[Amanhã às] LT",nextWeek:"dddd [às] LT",lastDay:"[Ontem às] LT",lastWeek:function(){return 0===this.day()||6===this.day()?"[Último] dddd [às] LT":"[Última] dddd [às] LT"},sameElse:"L"},relativeTime:{future:"em %s",past:"há %s",s:"poucos segundos",ss:"%d segundos",m:"um minuto",mm:"%d minutos",h:"uma hora",hh:"%d horas",d:"um dia",dd:"%d dias",M:"um mês",MM:"%d meses",y:"um ano",yy:"%d anos"},dayOfMonthOrdinalParse:/\d{1,2}º/,ordinal:"%dº",invalidDate:"Data inválida"});return e}))},9520:function(t,e,n){(function(t,e){e(n(381))})(0,(function(t){"use strict";
//! moment.js locale configuration
var e=t.defineLocale("pt",{months:"janeiro_fevereiro_março_abril_maio_junho_julho_agosto_setembro_outubro_novembro_dezembro".split("_"),monthsShort:"jan_fev_mar_abr_mai_jun_jul_ago_set_out_nov_dez".split("_"),weekdays:"Domingo_Segunda-feira_Terça-feira_Quarta-feira_Quinta-feira_Sexta-feira_Sábado".split("_"),weekdaysShort:"Dom_Seg_Ter_Qua_Qui_Sex_Sáb".split("_"),weekdaysMin:"Do_2ª_3ª_4ª_5ª_6ª_Sá".split("_"),weekdaysParseExact:!0,longDateFormat:{LT:"HH:mm",LTS:"HH:mm:ss",L:"DD/MM/YYYY",LL:"D [de] MMMM [de] YYYY",LLL:"D [de] MMMM [de] YYYY HH:mm",LLLL:"dddd, D [de] MMMM [de] YYYY HH:mm"},calendar:{sameDay:"[Hoje às] LT",nextDay:"[Amanhã às] LT",nextWeek:"dddd [às] LT",lastDay:"[Ontem às] LT",lastWeek:function(){return 0===this.day()||6===this.day()?"[Último] dddd [às] LT":"[Última] dddd [às] LT"},sameElse:"L"},relativeTime:{future:"em %s",past:"há %s",s:"segundos",ss:"%d segundos",m:"um minuto",mm:"%d minutos",h:"uma hora",hh:"%d horas",d:"um dia",dd:"%d dias",w:"uma semana",ww:"%d semanas",M:"um mês",MM:"%d meses",y:"um ano",yy:"%d anos"},dayOfMonthOrdinalParse:/\d{1,2}º/,ordinal:"%dº",week:{dow:1,doy:4}});return e}))},6459:function(t,e,n){(function(t,e){e(n(381))})(0,(function(t){"use strict";
//! moment.js locale configuration
function e(t,e,n){var a={ss:"secunde",mm:"minute",hh:"ore",dd:"zile",ww:"săptămâni",MM:"luni",yy:"ani"},r=" ";return(t%100>=20||t>=100&&t%100===0)&&(r=" de "),t+r+a[n]}var n=t.defineLocale("ro",{months:"ianuarie_februarie_martie_aprilie_mai_iunie_iulie_august_septembrie_octombrie_noiembrie_decembrie".split("_"),monthsShort:"ian._feb._mart._apr._mai_iun._iul._aug._sept._oct._nov._dec.".split("_"),monthsParseExact:!0,weekdays:"duminică_luni_marți_miercuri_joi_vineri_sâmbătă".split("_"),weekdaysShort:"Dum_Lun_Mar_Mie_Joi_Vin_Sâm".split("_"),weekdaysMin:"Du_Lu_Ma_Mi_Jo_Vi_Sâ".split("_"),longDateFormat:{LT:"H:mm",LTS:"H:mm:ss",L:"DD.MM.YYYY",LL:"D MMMM YYYY",LLL:"D MMMM YYYY H:mm",LLLL:"dddd, D MMMM YYYY H:mm"},calendar:{sameDay:"[azi la] LT",nextDay:"[mâine la] LT",nextWeek:"dddd [la] LT",lastDay:"[ieri la] LT",lastWeek:"[fosta] dddd [la] LT",sameElse:"L"},relativeTime:{future:"peste %s",past:"%s în urmă",s:"câteva secunde",ss:e,m:"un minut",mm:e,h:"o oră",hh:e,d:"o zi",dd:e,w:"o săptămână",ww:e,M:"o lună",MM:e,y:"un an",yy:e},week:{dow:1,doy:7}});return n}))},1793:function(t,e,n){(function(t,e){e(n(381))})(0,(function(t){"use strict";
//! moment.js locale configuration
function e(t,e){var n=t.split("_");return e%10===1&&e%100!==11?n[0]:e%10>=2&&e%10<=4&&(e%100<10||e%100>=20)?n[1]:n[2]}function n(t,n,a){var r={ss:n?"секунда_секунды_секунд":"секунду_секунды_секунд",mm:n?"минута_минуты_минут":"минуту_минуты_минут",hh:"час_часа_часов",dd:"день_дня_дней",ww:"неделя_недели_недель",MM:"месяц_месяца_месяцев",yy:"год_года_лет"};return"m"===a?n?"минута":"минуту":t+" "+e(r[a],+t)}var a=[/^янв/i,/^фев/i,/^мар/i,/^апр/i,/^ма[йя]/i,/^июн/i,/^июл/i,/^авг/i,/^сен/i,/^окт/i,/^ноя/i,/^дек/i],r=t.defineLocale("ru",{months:{format:"января_февраля_марта_апреля_мая_июня_июля_августа_сентября_октября_ноября_декабря".split("_"),standalone:"январь_февраль_март_апрель_май_июнь_июль_август_сентябрь_октябрь_ноябрь_декабрь".split("_")},monthsShort:{format:"янв._февр._мар._апр._мая_июня_июля_авг._сент._окт._нояб._дек.".split("_"),standalone:"янв._февр._март_апр._май_июнь_июль_авг._сент._окт._нояб._дек.".split("_")},weekdays:{standalone:"воскресенье_понедельник_вторник_среда_четверг_пятница_суббота".split("_"),format:"воскресенье_понедельник_вторник_среду_четверг_пятницу_субботу".split("_"),isFormat:/\[ ?[Вв] ?(?:прошлую|следующую|эту)? ?] ?dddd/},weekdaysShort:"вс_пн_вт_ср_чт_пт_сб".split("_"),weekdaysMin:"вс_пн_вт_ср_чт_пт_сб".split("_"),monthsParse:a,longMonthsParse:a,shortMonthsParse:a,monthsRegex:/^(январ[ья]|янв\.?|феврал[ья]|февр?\.?|марта?|мар\.?|апрел[ья]|апр\.?|ма[йя]|июн[ья]|июн\.?|июл[ья]|июл\.?|августа?|авг\.?|сентябр[ья]|сент?\.?|октябр[ья]|окт\.?|ноябр[ья]|нояб?\.?|декабр[ья]|дек\.?)/i,monthsShortRegex:/^(январ[ья]|янв\.?|феврал[ья]|февр?\.?|марта?|мар\.?|апрел[ья]|апр\.?|ма[йя]|июн[ья]|июн\.?|июл[ья]|июл\.?|августа?|авг\.?|сентябр[ья]|сент?\.?|октябр[ья]|окт\.?|ноябр[ья]|нояб?\.?|декабр[ья]|дек\.?)/i,monthsStrictRegex:/^(январ[яь]|феврал[яь]|марта?|апрел[яь]|ма[яй]|июн[яь]|июл[яь]|августа?|сентябр[яь]|октябр[яь]|ноябр[яь]|декабр[яь])/i,monthsShortStrictRegex:/^(янв\.|февр?\.|мар[т.]|апр\.|ма[яй]|июн[ья.]|июл[ья.]|авг\.|сент?\.|окт\.|нояб?\.|дек\.)/i,longDateFormat:{LT:"H:mm",LTS:"H:mm:ss",L:"DD.MM.YYYY",LL:"D MMMM YYYY г.",LLL:"D MMMM YYYY г., H:mm",LLLL:"dddd, D MMMM YYYY г., H:mm"},calendar:{sameDay:"[Сегодня, в] LT",nextDay:"[Завтра, в] LT",lastDay:"[Вчера, в] LT",nextWeek:function(t){if(t.week()===this.week())return 2===this.day()?"[Во] dddd, [в] LT":"[В] dddd, [в] LT";switch(this.day()){case 0:return"[В следующее] dddd, [в] LT";case 1:case 2:case 4:return"[В следующий] dddd, [в] LT";case 3:case 5:case 6:return"[В следующую] dddd, [в] LT"}},lastWeek:function(t){if(t.week()===this.week())return 2===this.day()?"[Во] dddd, [в] LT":"[В] dddd, [в] LT";switch(this.day()){case 0:return"[В прошлое] dddd, [в] LT";case 1:case 2:case 4:return"[В прошлый] dddd, [в] LT";case 3:case 5:case 6:return"[В прошлую] dddd, [в] LT"}},sameElse:"L"},relativeTime:{future:"через %s",past:"%s назад",s:"несколько секунд",ss:n,m:n,mm:n,h:"час",hh:n,d:"день",dd:n,w:"неделя",ww:n,M:"месяц",MM:n,y:"год",yy:n},meridiemParse:/ночи|утра|дня|вечера/i,isPM:function(t){return/^(дня|вечера)$/.test(t)},meridiem:function(t,e,n){return t<4?"ночи":t<12?"утра":t<17?"дня":"вечера"},dayOfMonthOrdinalParse:/\d{1,2}-(й|го|я)/,ordinal:function(t,e){switch(e){case"M":case"d":case"DDD":return t+"-й";case"D":return t+"-го";case"w":case"W":return t+"-я";default:return t}},week:{dow:1,doy:4}});return r}))},950:function(t,e,n){(function(t,e){e(n(381))})(0,(function(t){"use strict";
//! moment.js locale configuration
var e=["جنوري","فيبروري","مارچ","اپريل","مئي","جون","جولاءِ","آگسٽ","سيپٽمبر","آڪٽوبر","نومبر","ڊسمبر"],n=["آچر","سومر","اڱارو","اربع","خميس","جمع","ڇنڇر"],a=t.defineLocale("sd",{months:e,monthsShort:e,weekdays:n,weekdaysShort:n,weekdaysMin:n,longDateFormat:{LT:"HH:mm",LTS:"HH:mm:ss",L:"DD/MM/YYYY",LL:"D MMMM YYYY",LLL:"D MMMM YYYY HH:mm",LLLL:"dddd، D MMMM YYYY HH:mm"},meridiemParse:/صبح|شام/,isPM:function(t){return"شام"===t},meridiem:function(t,e,n){return t<12?"صبح":"شام"},calendar:{sameDay:"[اڄ] LT",nextDay:"[سڀاڻي] LT",nextWeek:"dddd [اڳين هفتي تي] LT",lastDay:"[ڪالهه] LT",lastWeek:"[گزريل هفتي] dddd [تي] LT",sameElse:"L"},relativeTime:{future:"%s پوء",past:"%s اڳ",s:"چند سيڪنڊ",ss:"%d سيڪنڊ",m:"هڪ منٽ",mm:"%d منٽ",h:"هڪ ڪلاڪ",hh:"%d ڪلاڪ",d:"هڪ ڏينهن",dd:"%d ڏينهن",M:"هڪ مهينو",MM:"%d مهينا",y:"هڪ سال",yy:"%d سال"},preparse:function(t){return t.replace(/،/g,",")},postformat:function(t){return t.replace(/,/g,"،")},week:{dow:1,doy:4}});return a}))},490:function(t,e,n){(function(t,e){e(n(381))})(0,(function(t){"use strict";
//! moment.js locale configuration
var e=t.defineLocale("se",{months:"ođđajagemánnu_guovvamánnu_njukčamánnu_cuoŋománnu_miessemánnu_geassemánnu_suoidnemánnu_borgemánnu_čakčamánnu_golggotmánnu_skábmamánnu_juovlamánnu".split("_"),monthsShort:"ođđj_guov_njuk_cuo_mies_geas_suoi_borg_čakč_golg_skáb_juov".split("_"),weekdays:"sotnabeaivi_vuossárga_maŋŋebárga_gaskavahkku_duorastat_bearjadat_lávvardat".split("_"),weekdaysShort:"sotn_vuos_maŋ_gask_duor_bear_láv".split("_"),weekdaysMin:"s_v_m_g_d_b_L".split("_"),longDateFormat:{LT:"HH:mm",LTS:"HH:mm:ss",L:"DD.MM.YYYY",LL:"MMMM D. [b.] YYYY",LLL:"MMMM D. [b.] YYYY [ti.] HH:mm",LLLL:"dddd, MMMM D. [b.] YYYY [ti.] HH:mm"},calendar:{sameDay:"[otne ti] LT",nextDay:"[ihttin ti] LT",nextWeek:"dddd [ti] LT",lastDay:"[ikte ti] LT",lastWeek:"[ovddit] dddd [ti] LT",sameElse:"L"},relativeTime:{future:"%s geažes",past:"maŋit %s",s:"moadde sekunddat",ss:"%d sekunddat",m:"okta minuhta",mm:"%d minuhtat",h:"okta diimmu",hh:"%d diimmut",d:"okta beaivi",dd:"%d beaivvit",M:"okta mánnu",MM:"%d mánut",y:"okta jahki",yy:"%d jagit"},dayOfMonthOrdinalParse:/\d{1,2}\./,ordinal:"%d.",week:{dow:1,doy:4}});return e}))},124:function(t,e,n){(function(t,e){e(n(381))})(0,(function(t){"use strict";
//! moment.js locale configuration
var e=t.defineLocale("si",{months:"ජනවාරි_පෙබරවාරි_මාර්තු_අප්‍රේල්_මැයි_ජූනි_ජූලි_අගෝස්තු_සැප්තැම්බර්_ඔක්තෝබර්_නොවැම්බර්_දෙසැම්බර්".split("_"),monthsShort:"ජන_පෙබ_මාර්_අප්_මැයි_ජූනි_ජූලි_අගෝ_සැප්_ඔක්_නොවැ_දෙසැ".split("_"),weekdays:"ඉරිදා_සඳුදා_අඟහරුවාදා_බදාදා_බ්‍රහස්පතින්දා_සිකුරාදා_සෙනසුරාදා".split("_"),weekdaysShort:"ඉරි_සඳු_අඟ_බදා_බ්‍රහ_සිකු_සෙන".split("_"),weekdaysMin:"ඉ_ස_අ_බ_බ්‍ර_සි_සෙ".split("_"),weekdaysParseExact:!0,longDateFormat:{LT:"a h:mm",LTS:"a h:mm:ss",L:"YYYY/MM/DD",LL:"YYYY MMMM D",LLL:"YYYY MMMM D, a h:mm",LLLL:"YYYY MMMM D [වැනි] dddd, a h:mm:ss"},calendar:{sameDay:"[අද] LT[ට]",nextDay:"[හෙට] LT[ට]",nextWeek:"dddd LT[ට]",lastDay:"[ඊයේ] LT[ට]",lastWeek:"[පසුගිය] dddd LT[ට]",sameElse:"L"},relativeTime:{future:"%sකින්",past:"%sකට පෙර",s:"තත්පර කිහිපය",ss:"තත්පර %d",m:"මිනිත්තුව",mm:"මිනිත්තු %d",h:"පැය",hh:"පැය %d",d:"දිනය",dd:"දින %d",M:"මාසය",MM:"මාස %d",y:"වසර",yy:"වසර %d"},dayOfMonthOrdinalParse:/\d{1,2} වැනි/,ordinal:function(t){return t+" වැනි"},meridiemParse:/පෙර වරු|පස් වරු|පෙ.ව|ප.ව./,isPM:function(t){return"ප.ව."===t||"පස් වරු"===t},meridiem:function(t,e,n){return t>11?n?"ප.ව.":"පස් වරු":n?"පෙ.ව.":"පෙර වරු"}});return e}))},4249:function(t,e,n){(function(t,e){e(n(381))})(0,(function(t){"use strict";
//! moment.js locale configuration
var e="január_február_marec_apríl_máj_jún_júl_august_september_október_november_december".split("_"),n="jan_feb_mar_apr_máj_jún_júl_aug_sep_okt_nov_dec".split("_");function a(t){return t>1&&t<5}function r(t,e,n,r){var i=t+" ";switch(n){case"s":return e||r?"pár sekúnd":"pár sekundami";case"ss":return e||r?i+(a(t)?"sekundy":"sekúnd"):i+"sekundami";case"m":return e?"minúta":r?"minútu":"minútou";case"mm":return e||r?i+(a(t)?"minúty":"minút"):i+"minútami";case"h":return e?"hodina":r?"hodinu":"hodinou";case"hh":return e||r?i+(a(t)?"hodiny":"hodín"):i+"hodinami";case"d":return e||r?"deň":"dňom";case"dd":return e||r?i+(a(t)?"dni":"dní"):i+"dňami";case"M":return e||r?"mesiac":"mesiacom";case"MM":return e||r?i+(a(t)?"mesiace":"mesiacov"):i+"mesiacmi";case"y":return e||r?"rok":"rokom";case"yy":return e||r?i+(a(t)?"roky":"rokov"):i+"rokmi"}}var i=t.defineLocale("sk",{months:e,monthsShort:n,weekdays:"nedeľa_pondelok_utorok_streda_štvrtok_piatok_sobota".split("_"),weekdaysShort:"ne_po_ut_st_št_pi_so".split("_"),weekdaysMin:"ne_po_ut_st_št_pi_so".split("_"),longDateFormat:{LT:"H:mm",LTS:"H:mm:ss",L:"DD.MM.YYYY",LL:"D. MMMM YYYY",LLL:"D. MMMM YYYY H:mm",LLLL:"dddd D. MMMM YYYY H:mm"},calendar:{sameDay:"[dnes o] LT",nextDay:"[zajtra o] LT",nextWeek:function(){switch(this.day()){case 0:return"[v nedeľu o] LT";case 1:case 2:return"[v] dddd [o] LT";case 3:return"[v stredu o] LT";case 4:return"[vo štvrtok o] LT";case 5:return"[v piatok o] LT";case 6:return"[v sobotu o] LT"}},lastDay:"[včera o] LT",lastWeek:function(){switch(this.day()){case 0:return"[minulú nedeľu o] LT";case 1:case 2:return"[minulý] dddd [o] LT";case 3:return"[minulú stredu o] LT";case 4:case 5:return"[minulý] dddd [o] LT";case 6:return"[minulú sobotu o] LT"}},sameElse:"L"},relativeTime:{future:"za %s",past:"pred %s",s:r,ss:r,m:r,mm:r,h:r,hh:r,d:r,dd:r,M:r,MM:r,y:r,yy:r},dayOfMonthOrdinalParse:/\d{1,2}\./,ordinal:"%d.",week:{dow:1,doy:4}});return i}))},4985:function(t,e,n){(function(t,e){e(n(381))})(0,(function(t){"use strict";
//! moment.js locale configuration
function e(t,e,n,a){var r=t+" ";switch(n){case"s":return e||a?"nekaj sekund":"nekaj sekundami";case"ss":return r+=1===t?e?"sekundo":"sekundi":2===t?e||a?"sekundi":"sekundah":t<5?e||a?"sekunde":"sekundah":"sekund",r;case"m":return e?"ena minuta":"eno minuto";case"mm":return r+=1===t?e?"minuta":"minuto":2===t?e||a?"minuti":"minutama":t<5?e||a?"minute":"minutami":e||a?"minut":"minutami",r;case"h":return e?"ena ura":"eno uro";case"hh":return r+=1===t?e?"ura":"uro":2===t?e||a?"uri":"urama":t<5?e||a?"ure":"urami":e||a?"ur":"urami",r;case"d":return e||a?"en dan":"enim dnem";case"dd":return r+=1===t?e||a?"dan":"dnem":2===t?e||a?"dni":"dnevoma":e||a?"dni":"dnevi",r;case"M":return e||a?"en mesec":"enim mesecem";case"MM":return r+=1===t?e||a?"mesec":"mesecem":2===t?e||a?"meseca":"mesecema":t<5?e||a?"mesece":"meseci":e||a?"mesecev":"meseci",r;case"y":return e||a?"eno leto":"enim letom";case"yy":return r+=1===t?e||a?"leto":"letom":2===t?e||a?"leti":"letoma":t<5?e||a?"leta":"leti":e||a?"let":"leti",r}}var n=t.defineLocale("sl",{months:"januar_februar_marec_april_maj_junij_julij_avgust_september_oktober_november_december".split("_"),monthsShort:"jan._feb._mar._apr._maj._jun._jul._avg._sep._okt._nov._dec.".split("_"),monthsParseExact:!0,weekdays:"nedelja_ponedeljek_torek_sreda_četrtek_petek_sobota".split("_"),weekdaysShort:"ned._pon._tor._sre._čet._pet._sob.".split("_"),weekdaysMin:"ne_po_to_sr_če_pe_so".split("_"),weekdaysParseExact:!0,longDateFormat:{LT:"H:mm",LTS:"H:mm:ss",L:"DD. MM. YYYY",LL:"D. MMMM YYYY",LLL:"D. MMMM YYYY H:mm",LLLL:"dddd, D. MMMM YYYY H:mm"},calendar:{sameDay:"[danes ob] LT",nextDay:"[jutri ob] LT",nextWeek:function(){switch(this.day()){case 0:return"[v] [nedeljo] [ob] LT";case 3:return"[v] [sredo] [ob] LT";case 6:return"[v] [soboto] [ob] LT";case 1:case 2:case 4:case 5:return"[v] dddd [ob] LT"}},lastDay:"[včeraj ob] LT",lastWeek:function(){switch(this.day()){case 0:return"[prejšnjo] [nedeljo] [ob] LT";case 3:return"[prejšnjo] [sredo] [ob] LT";case 6:return"[prejšnjo] [soboto] [ob] LT";case 1:case 2:case 4:case 5:return"[prejšnji] dddd [ob] LT"}},sameElse:"L"},relativeTime:{future:"čez %s",past:"pred %s",s:e,ss:e,m:e,mm:e,h:e,hh:e,d:e,dd:e,M:e,MM:e,y:e,yy:e},dayOfMonthOrdinalParse:/\d{1,2}\./,ordinal:"%d.",week:{dow:1,doy:7}});return n}))},1104:function(t,e,n){(function(t,e){e(n(381))})(0,(function(t){"use strict";
//! moment.js locale configuration
var e=t.defineLocale("sq",{months:"Janar_Shkurt_Mars_Prill_Maj_Qershor_Korrik_Gusht_Shtator_Tetor_Nëntor_Dhjetor".split("_"),monthsShort:"Jan_Shk_Mar_Pri_Maj_Qer_Kor_Gus_Sht_Tet_Nën_Dhj".split("_"),weekdays:"E Diel_E Hënë_E Martë_E Mërkurë_E Enjte_E Premte_E Shtunë".split("_"),weekdaysShort:"Die_Hën_Mar_Mër_Enj_Pre_Sht".split("_"),weekdaysMin:"D_H_Ma_Më_E_P_Sh".split("_"),weekdaysParseExact:!0,meridiemParse:/PD|MD/,isPM:function(t){return"M"===t.charAt(0)},meridiem:function(t,e,n){return t<12?"PD":"MD"},longDateFormat:{LT:"HH:mm",LTS:"HH:mm:ss",L:"DD/MM/YYYY",LL:"D MMMM YYYY",LLL:"D MMMM YYYY HH:mm",LLLL:"dddd, D MMMM YYYY HH:mm"},calendar:{sameDay:"[Sot në] LT",nextDay:"[Nesër në] LT",nextWeek:"dddd [në] LT",lastDay:"[Dje në] LT",lastWeek:"dddd [e kaluar në] LT",sameElse:"L"},relativeTime:{future:"në %s",past:"%s më parë",s:"disa sekonda",ss:"%d sekonda",m:"një minutë",mm:"%d minuta",h:"një orë",hh:"%d orë",d:"një ditë",dd:"%d ditë",M:"një muaj",MM:"%d muaj",y:"një vit",yy:"%d vite"},dayOfMonthOrdinalParse:/\d{1,2}\./,ordinal:"%d.",week:{dow:1,doy:4}});return e}))},9915:function(t,e,n){(function(t,e){e(n(381))})(0,(function(t){"use strict";
//! moment.js locale configuration
var e={words:{ss:["секунда","секунде","секунди"],m:["један минут","једног минута"],mm:["минут","минута","минута"],h:["један сат","једног сата"],hh:["сат","сата","сати"],d:["један дан","једног дана"],dd:["дан","дана","дана"],M:["један месец","једног месеца"],MM:["месец","месеца","месеци"],y:["једну годину","једне године"],yy:["годину","године","година"]},correctGrammaticalCase:function(t,e){return t%10>=1&&t%10<=4&&(t%100<10||t%100>=20)?t%10===1?e[0]:e[1]:e[2]},translate:function(t,n,a,r){var i,o=e.words[a];return 1===a.length?"y"===a&&n?"једна година":r||n?o[0]:o[1]:(i=e.correctGrammaticalCase(t,o),"yy"===a&&n&&"годину"===i?t+" година":t+" "+i)}},n=t.defineLocale("sr-cyrl",{months:"јануар_фебруар_март_април_мај_јун_јул_август_септембар_октобар_новембар_децембар".split("_"),monthsShort:"јан._феб._мар._апр._мај_јун_јул_авг._сеп._окт._нов._дец.".split("_"),monthsParseExact:!0,weekdays:"недеља_понедељак_уторак_среда_четвртак_петак_субота".split("_"),weekdaysShort:"нед._пон._уто._сре._чет._пет._суб.".split("_"),weekdaysMin:"не_по_ут_ср_че_пе_су".split("_"),weekdaysParseExact:!0,longDateFormat:{LT:"H:mm",LTS:"H:mm:ss",L:"D. M. YYYY.",LL:"D. MMMM YYYY.",LLL:"D. MMMM YYYY. H:mm",LLLL:"dddd, D. MMMM YYYY. H:mm"},calendar:{sameDay:"[данас у] LT",nextDay:"[сутра у] LT",nextWeek:function(){switch(this.day()){case 0:return"[у] [недељу] [у] LT";case 3:return"[у] [среду] [у] LT";case 6:return"[у] [суботу] [у] LT";case 1:case 2:case 4:case 5:return"[у] dddd [у] LT"}},lastDay:"[јуче у] LT",lastWeek:function(){var t=["[прошле] [недеље] [у] LT","[прошлог] [понедељка] [у] LT","[прошлог] [уторка] [у] LT","[прошле] [среде] [у] LT","[прошлог] [четвртка] [у] LT","[прошлог] [петка] [у] LT","[прошле] [суботе] [у] LT"];return t[this.day()]},sameElse:"L"},relativeTime:{future:"за %s",past:"пре %s",s:"неколико секунди",ss:e.translate,m:e.translate,mm:e.translate,h:e.translate,hh:e.translate,d:e.translate,dd:e.translate,M:e.translate,MM:e.translate,y:e.translate,yy:e.translate},dayOfMonthOrdinalParse:/\d{1,2}\./,ordinal:"%d.",week:{dow:1,doy:7}});return n}))},9131:function(t,e,n){(function(t,e){e(n(381))})(0,(function(t){"use strict";
//! moment.js locale configuration
var e={words:{ss:["sekunda","sekunde","sekundi"],m:["jedan minut","jednog minuta"],mm:["minut","minuta","minuta"],h:["jedan sat","jednog sata"],hh:["sat","sata","sati"],d:["jedan dan","jednog dana"],dd:["dan","dana","dana"],M:["jedan mesec","jednog meseca"],MM:["mesec","meseca","meseci"],y:["jednu godinu","jedne godine"],yy:["godinu","godine","godina"]},correctGrammaticalCase:function(t,e){return t%10>=1&&t%10<=4&&(t%100<10||t%100>=20)?t%10===1?e[0]:e[1]:e[2]},translate:function(t,n,a,r){var i,o=e.words[a];return 1===a.length?"y"===a&&n?"jedna godina":r||n?o[0]:o[1]:(i=e.correctGrammaticalCase(t,o),"yy"===a&&n&&"godinu"===i?t+" godina":t+" "+i)}},n=t.defineLocale("sr",{months:"januar_februar_mart_april_maj_jun_jul_avgust_septembar_oktobar_novembar_decembar".split("_"),monthsShort:"jan._feb._mar._apr._maj_jun_jul_avg._sep._okt._nov._dec.".split("_"),monthsParseExact:!0,weekdays:"nedelja_ponedeljak_utorak_sreda_četvrtak_petak_subota".split("_"),weekdaysShort:"ned._pon._uto._sre._čet._pet._sub.".split("_"),weekdaysMin:"ne_po_ut_sr_če_pe_su".split("_"),weekdaysParseExact:!0,longDateFormat:{LT:"H:mm",LTS:"H:mm:ss",L:"D. M. YYYY.",LL:"D. MMMM YYYY.",LLL:"D. MMMM YYYY. H:mm",LLLL:"dddd, D. MMMM YYYY. H:mm"},calendar:{sameDay:"[danas u] LT",nextDay:"[sutra u] LT",nextWeek:function(){switch(this.day()){case 0:return"[u] [nedelju] [u] LT";case 3:return"[u] [sredu] [u] LT";case 6:return"[u] [subotu] [u] LT";case 1:case 2:case 4:case 5:return"[u] dddd [u] LT"}},lastDay:"[juče u] LT",lastWeek:function(){var t=["[prošle] [nedelje] [u] LT","[prošlog] [ponedeljka] [u] LT","[prošlog] [utorka] [u] LT","[prošle] [srede] [u] LT","[prošlog] [četvrtka] [u] LT","[prošlog] [petka] [u] LT","[prošle] [subote] [u] LT"];return t[this.day()]},sameElse:"L"},relativeTime:{future:"za %s",past:"pre %s",s:"nekoliko sekundi",ss:e.translate,m:e.translate,mm:e.translate,h:e.translate,hh:e.translate,d:e.translate,dd:e.translate,M:e.translate,MM:e.translate,y:e.translate,yy:e.translate},dayOfMonthOrdinalParse:/\d{1,2}\./,ordinal:"%d.",week:{dow:1,doy:7}});return n}))},5893:function(t,e,n){(function(t,e){e(n(381))})(0,(function(t){"use strict";
//! moment.js locale configuration
var e=t.defineLocale("ss",{months:"Bhimbidvwane_Indlovana_Indlov'lenkhulu_Mabasa_Inkhwekhweti_Inhlaba_Kholwane_Ingci_Inyoni_Imphala_Lweti_Ingongoni".split("_"),monthsShort:"Bhi_Ina_Inu_Mab_Ink_Inh_Kho_Igc_Iny_Imp_Lwe_Igo".split("_"),weekdays:"Lisontfo_Umsombuluko_Lesibili_Lesitsatfu_Lesine_Lesihlanu_Umgcibelo".split("_"),weekdaysShort:"Lis_Umb_Lsb_Les_Lsi_Lsh_Umg".split("_"),weekdaysMin:"Li_Us_Lb_Lt_Ls_Lh_Ug".split("_"),weekdaysParseExact:!0,longDateFormat:{LT:"h:mm A",LTS:"h:mm:ss A",L:"DD/MM/YYYY",LL:"D MMMM YYYY",LLL:"D MMMM YYYY h:mm A",LLLL:"dddd, D MMMM YYYY h:mm A"},calendar:{sameDay:"[Namuhla nga] LT",nextDay:"[Kusasa nga] LT",nextWeek:"dddd [nga] LT",lastDay:"[Itolo nga] LT",lastWeek:"dddd [leliphelile] [nga] LT",sameElse:"L"},relativeTime:{future:"nga %s",past:"wenteka nga %s",s:"emizuzwana lomcane",ss:"%d mzuzwana",m:"umzuzu",mm:"%d emizuzu",h:"lihora",hh:"%d emahora",d:"lilanga",dd:"%d emalanga",M:"inyanga",MM:"%d tinyanga",y:"umnyaka",yy:"%d iminyaka"},meridiemParse:/ekuseni|emini|entsambama|ebusuku/,meridiem:function(t,e,n){return t<11?"ekuseni":t<15?"emini":t<19?"entsambama":"ebusuku"},meridiemHour:function(t,e){return 12===t&&(t=0),"ekuseni"===e?t:"emini"===e?t>=11?t:t+12:"entsambama"===e||"ebusuku"===e?0===t?0:t+12:void 0},dayOfMonthOrdinalParse:/\d{1,2}/,ordinal:"%d",week:{dow:1,doy:4}});return e}))},8760:function(t,e,n){(function(t,e){e(n(381))})(0,(function(t){"use strict";
//! moment.js locale configuration
var e=t.defineLocale("sv",{months:"januari_februari_mars_april_maj_juni_juli_augusti_september_oktober_november_december".split("_"),monthsShort:"jan_feb_mar_apr_maj_jun_jul_aug_sep_okt_nov_dec".split("_"),weekdays:"söndag_måndag_tisdag_onsdag_torsdag_fredag_lördag".split("_"),weekdaysShort:"sön_mån_tis_ons_tor_fre_lör".split("_"),weekdaysMin:"sö_må_ti_on_to_fr_lö".split("_"),longDateFormat:{LT:"HH:mm",LTS:"HH:mm:ss",L:"YYYY-MM-DD",LL:"D MMMM YYYY",LLL:"D MMMM YYYY [kl.] HH:mm",LLLL:"dddd D MMMM YYYY [kl.] HH:mm",lll:"D MMM YYYY HH:mm",llll:"ddd D MMM YYYY HH:mm"},calendar:{sameDay:"[Idag] LT",nextDay:"[Imorgon] LT",lastDay:"[Igår] LT",nextWeek:"[På] dddd LT",lastWeek:"[I] dddd[s] LT",sameElse:"L"},relativeTime:{future:"om %s",past:"för %s sedan",s:"några sekunder",ss:"%d sekunder",m:"en minut",mm:"%d minuter",h:"en timme",hh:"%d timmar",d:"en dag",dd:"%d dagar",M:"en månad",MM:"%d månader",y:"ett år",yy:"%d år"},dayOfMonthOrdinalParse:/\d{1,2}(\:e|\:a)/,ordinal:function(t){var e=t%10,n=1===~~(t%100/10)?":e":1===e||2===e?":a":":e";return t+n},week:{dow:1,doy:4}});return e}))},1172:function(t,e,n){(function(t,e){e(n(381))})(0,(function(t){"use strict";
//! moment.js locale configuration
var e=t.defineLocale("sw",{months:"Januari_Februari_Machi_Aprili_Mei_Juni_Julai_Agosti_Septemba_Oktoba_Novemba_Desemba".split("_"),monthsShort:"Jan_Feb_Mac_Apr_Mei_Jun_Jul_Ago_Sep_Okt_Nov_Des".split("_"),weekdays:"Jumapili_Jumatatu_Jumanne_Jumatano_Alhamisi_Ijumaa_Jumamosi".split("_"),weekdaysShort:"Jpl_Jtat_Jnne_Jtan_Alh_Ijm_Jmos".split("_"),weekdaysMin:"J2_J3_J4_J5_Al_Ij_J1".split("_"),weekdaysParseExact:!0,longDateFormat:{LT:"hh:mm A",LTS:"HH:mm:ss",L:"DD.MM.YYYY",LL:"D MMMM YYYY",LLL:"D MMMM YYYY HH:mm",LLLL:"dddd, D MMMM YYYY HH:mm"},calendar:{sameDay:"[leo saa] LT",nextDay:"[kesho saa] LT",nextWeek:"[wiki ijayo] dddd [saat] LT",lastDay:"[jana] LT",lastWeek:"[wiki iliyopita] dddd [saat] LT",sameElse:"L"},relativeTime:{future:"%s baadaye",past:"tokea %s",s:"hivi punde",ss:"sekunde %d",m:"dakika moja",mm:"dakika %d",h:"saa limoja",hh:"masaa %d",d:"siku moja",dd:"siku %d",M:"mwezi mmoja",MM:"miezi %d",y:"mwaka mmoja",yy:"miaka %d"},week:{dow:1,doy:7}});return e}))},7333:function(t,e,n){(function(t,e){e(n(381))})(0,(function(t){"use strict";
//! moment.js locale configuration
var e={1:"௧",2:"௨",3:"௩",4:"௪",5:"௫",6:"௬",7:"௭",8:"௮",9:"௯",0:"௦"},n={"௧":"1","௨":"2","௩":"3","௪":"4","௫":"5","௬":"6","௭":"7","௮":"8","௯":"9","௦":"0"},a=t.defineLocale("ta",{months:"ஜனவரி_பிப்ரவரி_மார்ச்_ஏப்ரல்_மே_ஜூன்_ஜூலை_ஆகஸ்ட்_செப்டெம்பர்_அக்டோபர்_நவம்பர்_டிசம்பர்".split("_"),monthsShort:"ஜனவரி_பிப்ரவரி_மார்ச்_ஏப்ரல்_மே_ஜூன்_ஜூலை_ஆகஸ்ட்_செப்டெம்பர்_அக்டோபர்_நவம்பர்_டிசம்பர்".split("_"),weekdays:"ஞாயிற்றுக்கிழமை_திங்கட்கிழமை_செவ்வாய்கிழமை_புதன்கிழமை_வியாழக்கிழமை_வெள்ளிக்கிழமை_சனிக்கிழமை".split("_"),weekdaysShort:"ஞாயிறு_திங்கள்_செவ்வாய்_புதன்_வியாழன்_வெள்ளி_சனி".split("_"),weekdaysMin:"ஞா_தி_செ_பு_வி_வெ_ச".split("_"),longDateFormat:{LT:"HH:mm",LTS:"HH:mm:ss",L:"DD/MM/YYYY",LL:"D MMMM YYYY",LLL:"D MMMM YYYY, HH:mm",LLLL:"dddd, D MMMM YYYY, HH:mm"},calendar:{sameDay:"[இன்று] LT",nextDay:"[நாளை] LT",nextWeek:"dddd, LT",lastDay:"[நேற்று] LT",lastWeek:"[கடந்த வாரம்] dddd, LT",sameElse:"L"},relativeTime:{future:"%s இல்",past:"%s முன்",s:"ஒரு சில விநாடிகள்",ss:"%d விநாடிகள்",m:"ஒரு நிமிடம்",mm:"%d நிமிடங்கள்",h:"ஒரு மணி நேரம்",hh:"%d மணி நேரம்",d:"ஒரு நாள்",dd:"%d நாட்கள்",M:"ஒரு மாதம்",MM:"%d மாதங்கள்",y:"ஒரு வருடம்",yy:"%d ஆண்டுகள்"},dayOfMonthOrdinalParse:/\d{1,2}வது/,ordinal:function(t){return t+"வது"},preparse:function(t){return t.replace(/[௧௨௩௪௫௬௭௮௯௦]/g,(function(t){return n[t]}))},postformat:function(t){return t.replace(/\d/g,(function(t){return e[t]}))},meridiemParse:/யாமம்|வைகறை|காலை|நண்பகல்|எற்பாடு|மாலை/,meridiem:function(t,e,n){return t<2?" யாமம்":t<6?" வைகறை":t<10?" காலை":t<14?" நண்பகல்":t<18?" எற்பாடு":t<22?" மாலை":" யாமம்"},meridiemHour:function(t,e){return 12===t&&(t=0),"யாமம்"===e?t<2?t:t+12:"வைகறை"===e||"காலை"===e||"நண்பகல்"===e&&t>=10?t:t+12},week:{dow:0,doy:6}});return a}))},3110:function(t,e,n){(function(t,e){e(n(381))})(0,(function(t){"use strict";
//! moment.js locale configuration
var e=t.defineLocale("te",{months:"జనవరి_ఫిబ్రవరి_మార్చి_ఏప్రిల్_మే_జూన్_జులై_ఆగస్టు_సెప్టెంబర్_అక్టోబర్_నవంబర్_డిసెంబర్".split("_"),monthsShort:"జన._ఫిబ్ర._మార్చి_ఏప్రి._మే_జూన్_జులై_ఆగ._సెప్._అక్టో._నవ._డిసె.".split("_"),monthsParseExact:!0,weekdays:"ఆదివారం_సోమవారం_మంగళవారం_బుధవారం_గురువారం_శుక్రవారం_శనివారం".split("_"),weekdaysShort:"ఆది_సోమ_మంగళ_బుధ_గురు_శుక్ర_శని".split("_"),weekdaysMin:"ఆ_సో_మం_బు_గు_శు_శ".split("_"),longDateFormat:{LT:"A h:mm",LTS:"A h:mm:ss",L:"DD/MM/YYYY",LL:"D MMMM YYYY",LLL:"D MMMM YYYY, A h:mm",LLLL:"dddd, D MMMM YYYY, A h:mm"},calendar:{sameDay:"[నేడు] LT",nextDay:"[రేపు] LT",nextWeek:"dddd, LT",lastDay:"[నిన్న] LT",lastWeek:"[గత] dddd, LT",sameElse:"L"},relativeTime:{future:"%s లో",past:"%s క్రితం",s:"కొన్ని క్షణాలు",ss:"%d సెకన్లు",m:"ఒక నిమిషం",mm:"%d నిమిషాలు",h:"ఒక గంట",hh:"%d గంటలు",d:"ఒక రోజు",dd:"%d రోజులు",M:"ఒక నెల",MM:"%d నెలలు",y:"ఒక సంవత్సరం",yy:"%d సంవత్సరాలు"},dayOfMonthOrdinalParse:/\d{1,2}వ/,ordinal:"%dవ",meridiemParse:/రాత్రి|ఉదయం|మధ్యాహ్నం|సాయంత్రం/,meridiemHour:function(t,e){return 12===t&&(t=0),"రాత్రి"===e?t<4?t:t+12:"ఉదయం"===e?t:"మధ్యాహ్నం"===e?t>=10?t:t+12:"సాయంత్రం"===e?t+12:void 0},meridiem:function(t,e,n){return t<4?"రాత్రి":t<10?"ఉదయం":t<17?"మధ్యాహ్నం":t<20?"సాయంత్రం":"రాత్రి"},week:{dow:0,doy:6}});return e}))},2095:function(t,e,n){(function(t,e){e(n(381))})(0,(function(t){"use strict";
//! moment.js locale configuration
var e=t.defineLocale("tet",{months:"Janeiru_Fevereiru_Marsu_Abril_Maiu_Juñu_Jullu_Agustu_Setembru_Outubru_Novembru_Dezembru".split("_"),monthsShort:"Jan_Fev_Mar_Abr_Mai_Jun_Jul_Ago_Set_Out_Nov_Dez".split("_"),weekdays:"Domingu_Segunda_Tersa_Kuarta_Kinta_Sesta_Sabadu".split("_"),weekdaysShort:"Dom_Seg_Ters_Kua_Kint_Sest_Sab".split("_"),weekdaysMin:"Do_Seg_Te_Ku_Ki_Ses_Sa".split("_"),longDateFormat:{LT:"HH:mm",LTS:"HH:mm:ss",L:"DD/MM/YYYY",LL:"D MMMM YYYY",LLL:"D MMMM YYYY HH:mm",LLLL:"dddd, D MMMM YYYY HH:mm"},calendar:{sameDay:"[Ohin iha] LT",nextDay:"[Aban iha] LT",nextWeek:"dddd [iha] LT",lastDay:"[Horiseik iha] LT",lastWeek:"dddd [semana kotuk] [iha] LT",sameElse:"L"},relativeTime:{future:"iha %s",past:"%s liuba",s:"segundu balun",ss:"segundu %d",m:"minutu ida",mm:"minutu %d",h:"oras ida",hh:"oras %d",d:"loron ida",dd:"loron %d",M:"fulan ida",MM:"fulan %d",y:"tinan ida",yy:"tinan %d"},dayOfMonthOrdinalParse:/\d{1,2}(st|nd|rd|th)/,ordinal:function(t){var e=t%10,n=1===~~(t%100/10)?"th":1===e?"st":2===e?"nd":3===e?"rd":"th";return t+n},week:{dow:1,doy:4}});return e}))},7321:function(t,e,n){(function(t,e){e(n(381))})(0,(function(t){"use strict";
//! moment.js locale configuration
var e={0:"-ум",1:"-ум",2:"-юм",3:"-юм",4:"-ум",5:"-ум",6:"-ум",7:"-ум",8:"-ум",9:"-ум",10:"-ум",12:"-ум",13:"-ум",20:"-ум",30:"-юм",40:"-ум",50:"-ум",60:"-ум",70:"-ум",80:"-ум",90:"-ум",100:"-ум"},n=t.defineLocale("tg",{months:{format:"январи_феврали_марти_апрели_майи_июни_июли_августи_сентябри_октябри_ноябри_декабри".split("_"),standalone:"январ_феврал_март_апрел_май_июн_июл_август_сентябр_октябр_ноябр_декабр".split("_")},monthsShort:"янв_фев_мар_апр_май_июн_июл_авг_сен_окт_ноя_дек".split("_"),weekdays:"якшанбе_душанбе_сешанбе_чоршанбе_панҷшанбе_ҷумъа_шанбе".split("_"),weekdaysShort:"яшб_дшб_сшб_чшб_пшб_ҷум_шнб".split("_"),weekdaysMin:"яш_дш_сш_чш_пш_ҷм_шб".split("_"),longDateFormat:{LT:"HH:mm",LTS:"HH:mm:ss",L:"DD.MM.YYYY",LL:"D MMMM YYYY",LLL:"D MMMM YYYY HH:mm",LLLL:"dddd, D MMMM YYYY HH:mm"},calendar:{sameDay:"[Имрӯз соати] LT",nextDay:"[Фардо соати] LT",lastDay:"[Дирӯз соати] LT",nextWeek:"dddd[и] [ҳафтаи оянда соати] LT",lastWeek:"dddd[и] [ҳафтаи гузашта соати] LT",sameElse:"L"},relativeTime:{future:"баъди %s",past:"%s пеш",s:"якчанд сония",m:"як дақиқа",mm:"%d дақиқа",h:"як соат",hh:"%d соат",d:"як рӯз",dd:"%d рӯз",M:"як моҳ",MM:"%d моҳ",y:"як сол",yy:"%d сол"},meridiemParse:/шаб|субҳ|рӯз|бегоҳ/,meridiemHour:function(t,e){return 12===t&&(t=0),"шаб"===e?t<4?t:t+12:"субҳ"===e?t:"рӯз"===e?t>=11?t:t+12:"бегоҳ"===e?t+12:void 0},meridiem:function(t,e,n){return t<4?"шаб":t<11?"субҳ":t<16?"рӯз":t<19?"бегоҳ":"шаб"},dayOfMonthOrdinalParse:/\d{1,2}-(ум|юм)/,ordinal:function(t){var n=t%10,a=t>=100?100:null;return t+(e[t]||e[n]||e[a])},week:{dow:1,doy:7}});return n}))},9041:function(t,e,n){(function(t,e){e(n(381))})(0,(function(t){"use strict";
//! moment.js locale configuration
var e=t.defineLocale("th",{months:"มกราคม_กุมภาพันธ์_มีนาคม_เมษายน_พฤษภาคม_มิถุนายน_กรกฎาคม_สิงหาคม_กันยายน_ตุลาคม_พฤศจิกายน_ธันวาคม".split("_"),monthsShort:"ม.ค._ก.พ._มี.ค._เม.ย._พ.ค._มิ.ย._ก.ค._ส.ค._ก.ย._ต.ค._พ.ย._ธ.ค.".split("_"),monthsParseExact:!0,weekdays:"อาทิตย์_จันทร์_อังคาร_พุธ_พฤหัสบดี_ศุกร์_เสาร์".split("_"),weekdaysShort:"อาทิตย์_จันทร์_อังคาร_พุธ_พฤหัส_ศุกร์_เสาร์".split("_"),weekdaysMin:"อา._จ._อ._พ._พฤ._ศ._ส.".split("_"),weekdaysParseExact:!0,longDateFormat:{LT:"H:mm",LTS:"H:mm:ss",L:"DD/MM/YYYY",LL:"D MMMM YYYY",LLL:"D MMMM YYYY เวลา H:mm",LLLL:"วันddddที่ D MMMM YYYY เวลา H:mm"},meridiemParse:/ก่อนเที่ยง|หลังเที่ยง/,isPM:function(t){return"หลังเที่ยง"===t},meridiem:function(t,e,n){return t<12?"ก่อนเที่ยง":"หลังเที่ยง"},calendar:{sameDay:"[วันนี้ เวลา] LT",nextDay:"[พรุ่งนี้ เวลา] LT",nextWeek:"dddd[หน้า เวลา] LT",lastDay:"[เมื่อวานนี้ เวลา] LT",lastWeek:"[วัน]dddd[ที่แล้ว เวลา] LT",sameElse:"L"},relativeTime:{future:"อีก %s",past:"%sที่แล้ว",s:"ไม่กี่วินาที",ss:"%d วินาที",m:"1 นาที",mm:"%d นาที",h:"1 ชั่วโมง",hh:"%d ชั่วโมง",d:"1 วัน",dd:"%d วัน",w:"1 สัปดาห์",ww:"%d สัปดาห์",M:"1 เดือน",MM:"%d เดือน",y:"1 ปี",yy:"%d ปี"}});return e}))},9005:function(t,e,n){(function(t,e){e(n(381))})(0,(function(t){"use strict";
//! moment.js locale configuration
var e={1:"'inji",5:"'inji",8:"'inji",70:"'inji",80:"'inji",2:"'nji",7:"'nji",20:"'nji",50:"'nji",3:"'ünji",4:"'ünji",100:"'ünji",6:"'njy",9:"'unjy",10:"'unjy",30:"'unjy",60:"'ynjy",90:"'ynjy"},n=t.defineLocale("tk",{months:"Ýanwar_Fewral_Mart_Aprel_Maý_Iýun_Iýul_Awgust_Sentýabr_Oktýabr_Noýabr_Dekabr".split("_"),monthsShort:"Ýan_Few_Mar_Apr_Maý_Iýn_Iýl_Awg_Sen_Okt_Noý_Dek".split("_"),weekdays:"Ýekşenbe_Duşenbe_Sişenbe_Çarşenbe_Penşenbe_Anna_Şenbe".split("_"),weekdaysShort:"Ýek_Duş_Siş_Çar_Pen_Ann_Şen".split("_"),weekdaysMin:"Ýk_Dş_Sş_Çr_Pn_An_Şn".split("_"),longDateFormat:{LT:"HH:mm",LTS:"HH:mm:ss",L:"DD.MM.YYYY",LL:"D MMMM YYYY",LLL:"D MMMM YYYY HH:mm",LLLL:"dddd, D MMMM YYYY HH:mm"},calendar:{sameDay:"[bugün sagat] LT",nextDay:"[ertir sagat] LT",nextWeek:"[indiki] dddd [sagat] LT",lastDay:"[düýn] LT",lastWeek:"[geçen] dddd [sagat] LT",sameElse:"L"},relativeTime:{future:"%s soň",past:"%s öň",s:"birnäçe sekunt",m:"bir minut",mm:"%d minut",h:"bir sagat",hh:"%d sagat",d:"bir gün",dd:"%d gün",M:"bir aý",MM:"%d aý",y:"bir ýyl",yy:"%d ýyl"},ordinal:function(t,n){switch(n){case"d":case"D":case"Do":case"DD":return t;default:if(0===t)return t+"'unjy";var a=t%10,r=t%100-a,i=t>=100?100:null;return t+(e[a]||e[r]||e[i])}},week:{dow:1,doy:7}});return n}))},5768:function(t,e,n){(function(t,e){e(n(381))})(0,(function(t){"use strict";
//! moment.js locale configuration
var e=t.defineLocale("tl-ph",{months:"Enero_Pebrero_Marso_Abril_Mayo_Hunyo_Hulyo_Agosto_Setyembre_Oktubre_Nobyembre_Disyembre".split("_"),monthsShort:"Ene_Peb_Mar_Abr_May_Hun_Hul_Ago_Set_Okt_Nob_Dis".split("_"),weekdays:"Linggo_Lunes_Martes_Miyerkules_Huwebes_Biyernes_Sabado".split("_"),weekdaysShort:"Lin_Lun_Mar_Miy_Huw_Biy_Sab".split("_"),weekdaysMin:"Li_Lu_Ma_Mi_Hu_Bi_Sab".split("_"),longDateFormat:{LT:"HH:mm",LTS:"HH:mm:ss",L:"MM/D/YYYY",LL:"MMMM D, YYYY",LLL:"MMMM D, YYYY HH:mm",LLLL:"dddd, MMMM DD, YYYY HH:mm"},calendar:{sameDay:"LT [ngayong araw]",nextDay:"[Bukas ng] LT",nextWeek:"LT [sa susunod na] dddd",lastDay:"LT [kahapon]",lastWeek:"LT [noong nakaraang] dddd",sameElse:"L"},relativeTime:{future:"sa loob ng %s",past:"%s ang nakalipas",s:"ilang segundo",ss:"%d segundo",m:"isang minuto",mm:"%d minuto",h:"isang oras",hh:"%d oras",d:"isang araw",dd:"%d araw",M:"isang buwan",MM:"%d buwan",y:"isang taon",yy:"%d taon"},dayOfMonthOrdinalParse:/\d{1,2}/,ordinal:function(t){return t},week:{dow:1,doy:4}});return e}))},9444:function(t,e,n){(function(t,e){e(n(381))})(0,(function(t){"use strict";
//! moment.js locale configuration
var e="pagh_wa’_cha’_wej_loS_vagh_jav_Soch_chorgh_Hut".split("_");function n(t){var e=t;return e=-1!==t.indexOf("jaj")?e.slice(0,-3)+"leS":-1!==t.indexOf("jar")?e.slice(0,-3)+"waQ":-1!==t.indexOf("DIS")?e.slice(0,-3)+"nem":e+" pIq",e}function a(t){var e=t;return e=-1!==t.indexOf("jaj")?e.slice(0,-3)+"Hu’":-1!==t.indexOf("jar")?e.slice(0,-3)+"wen":-1!==t.indexOf("DIS")?e.slice(0,-3)+"ben":e+" ret",e}function r(t,e,n,a){var r=i(t);switch(n){case"ss":return r+" lup";case"mm":return r+" tup";case"hh":return r+" rep";case"dd":return r+" jaj";case"MM":return r+" jar";case"yy":return r+" DIS"}}function i(t){var n=Math.floor(t%1e3/100),a=Math.floor(t%100/10),r=t%10,i="";return n>0&&(i+=e[n]+"vatlh"),a>0&&(i+=(""!==i?" ":"")+e[a]+"maH"),r>0&&(i+=(""!==i?" ":"")+e[r]),""===i?"pagh":i}var o=t.defineLocale("tlh",{months:"tera’ jar wa’_tera’ jar cha’_tera’ jar wej_tera’ jar loS_tera’ jar vagh_tera’ jar jav_tera’ jar Soch_tera’ jar chorgh_tera’ jar Hut_tera’ jar wa’maH_tera’ jar wa’maH wa’_tera’ jar wa’maH cha’".split("_"),monthsShort:"jar wa’_jar cha’_jar wej_jar loS_jar vagh_jar jav_jar Soch_jar chorgh_jar Hut_jar wa’maH_jar wa’maH wa’_jar wa’maH cha’".split("_"),monthsParseExact:!0,weekdays:"lojmItjaj_DaSjaj_povjaj_ghItlhjaj_loghjaj_buqjaj_ghInjaj".split("_"),weekdaysShort:"lojmItjaj_DaSjaj_povjaj_ghItlhjaj_loghjaj_buqjaj_ghInjaj".split("_"),weekdaysMin:"lojmItjaj_DaSjaj_povjaj_ghItlhjaj_loghjaj_buqjaj_ghInjaj".split("_"),longDateFormat:{LT:"HH:mm",LTS:"HH:mm:ss",L:"DD.MM.YYYY",LL:"D MMMM YYYY",LLL:"D MMMM YYYY HH:mm",LLLL:"dddd, D MMMM YYYY HH:mm"},calendar:{sameDay:"[DaHjaj] LT",nextDay:"[wa’leS] LT",nextWeek:"LLL",lastDay:"[wa’Hu’] LT",lastWeek:"LLL",sameElse:"L"},relativeTime:{future:n,past:a,s:"puS lup",ss:r,m:"wa’ tup",mm:r,h:"wa’ rep",hh:r,d:"wa’ jaj",dd:r,M:"wa’ jar",MM:r,y:"wa’ DIS",yy:r},dayOfMonthOrdinalParse:/\d{1,2}\./,ordinal:"%d.",week:{dow:1,doy:4}});return o}))},2397:function(t,e,n){(function(t,e){e(n(381))})(0,(function(t){"use strict";
//! moment.js locale configuration
var e={1:"'inci",5:"'inci",8:"'inci",70:"'inci",80:"'inci",2:"'nci",7:"'nci",20:"'nci",50:"'nci",3:"'üncü",4:"'üncü",100:"'üncü",6:"'ncı",9:"'uncu",10:"'uncu",30:"'uncu",60:"'ıncı",90:"'ıncı"},n=t.defineLocale("tr",{months:"Ocak_Şubat_Mart_Nisan_Mayıs_Haziran_Temmuz_Ağustos_Eylül_Ekim_Kasım_Aralık".split("_"),monthsShort:"Oca_Şub_Mar_Nis_May_Haz_Tem_Ağu_Eyl_Eki_Kas_Ara".split("_"),weekdays:"Pazar_Pazartesi_Salı_Çarşamba_Perşembe_Cuma_Cumartesi".split("_"),weekdaysShort:"Paz_Pzt_Sal_Çar_Per_Cum_Cmt".split("_"),weekdaysMin:"Pz_Pt_Sa_Ça_Pe_Cu_Ct".split("_"),meridiem:function(t,e,n){return t<12?n?"öö":"ÖÖ":n?"ös":"ÖS"},meridiemParse:/öö|ÖÖ|ös|ÖS/,isPM:function(t){return"ös"===t||"ÖS"===t},longDateFormat:{LT:"HH:mm",LTS:"HH:mm:ss",L:"DD.MM.YYYY",LL:"D MMMM YYYY",LLL:"D MMMM YYYY HH:mm",LLLL:"dddd, D MMMM YYYY HH:mm"},calendar:{sameDay:"[bugün saat] LT",nextDay:"[yarın saat] LT",nextWeek:"[gelecek] dddd [saat] LT",lastDay:"[dün] LT",lastWeek:"[geçen] dddd [saat] LT",sameElse:"L"},relativeTime:{future:"%s sonra",past:"%s önce",s:"birkaç saniye",ss:"%d saniye",m:"bir dakika",mm:"%d dakika",h:"bir saat",hh:"%d saat",d:"bir gün",dd:"%d gün",w:"bir hafta",ww:"%d hafta",M:"bir ay",MM:"%d ay",y:"bir yıl",yy:"%d yıl"},ordinal:function(t,n){switch(n){case"d":case"D":case"Do":case"DD":return t;default:if(0===t)return t+"'ıncı";var a=t%10,r=t%100-a,i=t>=100?100:null;return t+(e[a]||e[r]||e[i])}},week:{dow:1,doy:7}});return n}))},8254:function(t,e,n){(function(t,e){e(n(381))})(0,(function(t){"use strict";
//! moment.js locale configuration
var e=t.defineLocale("tzl",{months:"Januar_Fevraglh_Març_Avrïu_Mai_Gün_Julia_Guscht_Setemvar_Listopäts_Noemvar_Zecemvar".split("_"),monthsShort:"Jan_Fev_Mar_Avr_Mai_Gün_Jul_Gus_Set_Lis_Noe_Zec".split("_"),weekdays:"Súladi_Lúneçi_Maitzi_Márcuri_Xhúadi_Viénerçi_Sáturi".split("_"),weekdaysShort:"Súl_Lún_Mai_Már_Xhú_Vié_Sát".split("_"),weekdaysMin:"Sú_Lú_Ma_Má_Xh_Vi_Sá".split("_"),longDateFormat:{LT:"HH.mm",LTS:"HH.mm.ss",L:"DD.MM.YYYY",LL:"D. MMMM [dallas] YYYY",LLL:"D. MMMM [dallas] YYYY HH.mm",LLLL:"dddd, [li] D. MMMM [dallas] YYYY HH.mm"},meridiemParse:/d\'o|d\'a/i,isPM:function(t){return"d'o"===t.toLowerCase()},meridiem:function(t,e,n){return t>11?n?"d'o":"D'O":n?"d'a":"D'A"},calendar:{sameDay:"[oxhi à] LT",nextDay:"[demà à] LT",nextWeek:"dddd [à] LT",lastDay:"[ieiri à] LT",lastWeek:"[sür el] dddd [lasteu à] LT",sameElse:"L"},relativeTime:{future:"osprei %s",past:"ja%s",s:n,ss:n,m:n,mm:n,h:n,hh:n,d:n,dd:n,M:n,MM:n,y:n,yy:n},dayOfMonthOrdinalParse:/\d{1,2}\./,ordinal:"%d.",week:{dow:1,doy:4}});function n(t,e,n,a){var r={s:["viensas secunds","'iensas secunds"],ss:[t+" secunds",t+" secunds"],m:["'n míut","'iens míut"],mm:[t+" míuts",t+" míuts"],h:["'n þora","'iensa þora"],hh:[t+" þoras",t+" þoras"],d:["'n ziua","'iensa ziua"],dd:[t+" ziuas",t+" ziuas"],M:["'n mes","'iens mes"],MM:[t+" mesen",t+" mesen"],y:["'n ar","'iens ar"],yy:[t+" ars",t+" ars"]};return a||e?r[n][0]:r[n][1]}return e}))},699:function(t,e,n){(function(t,e){e(n(381))})(0,(function(t){"use strict";
//! moment.js locale configuration
var e=t.defineLocale("tzm-latn",{months:"innayr_brˤayrˤ_marˤsˤ_ibrir_mayyw_ywnyw_ywlywz_ɣwšt_šwtanbir_ktˤwbrˤ_nwwanbir_dwjnbir".split("_"),monthsShort:"innayr_brˤayrˤ_marˤsˤ_ibrir_mayyw_ywnyw_ywlywz_ɣwšt_šwtanbir_ktˤwbrˤ_nwwanbir_dwjnbir".split("_"),weekdays:"asamas_aynas_asinas_akras_akwas_asimwas_asiḍyas".split("_"),weekdaysShort:"asamas_aynas_asinas_akras_akwas_asimwas_asiḍyas".split("_"),weekdaysMin:"asamas_aynas_asinas_akras_akwas_asimwas_asiḍyas".split("_"),longDateFormat:{LT:"HH:mm",LTS:"HH:mm:ss",L:"DD/MM/YYYY",LL:"D MMMM YYYY",LLL:"D MMMM YYYY HH:mm",LLLL:"dddd D MMMM YYYY HH:mm"},calendar:{sameDay:"[asdkh g] LT",nextDay:"[aska g] LT",nextWeek:"dddd [g] LT",lastDay:"[assant g] LT",lastWeek:"dddd [g] LT",sameElse:"L"},relativeTime:{future:"dadkh s yan %s",past:"yan %s",s:"imik",ss:"%d imik",m:"minuḍ",mm:"%d minuḍ",h:"saɛa",hh:"%d tassaɛin",d:"ass",dd:"%d ossan",M:"ayowr",MM:"%d iyyirn",y:"asgas",yy:"%d isgasn"},week:{dow:6,doy:12}});return e}))},1106:function(t,e,n){(function(t,e){e(n(381))})(0,(function(t){"use strict";
//! moment.js locale configuration
var e=t.defineLocale("tzm",{months:"ⵉⵏⵏⴰⵢⵔ_ⴱⵕⴰⵢⵕ_ⵎⴰⵕⵚ_ⵉⴱⵔⵉⵔ_ⵎⴰⵢⵢⵓ_ⵢⵓⵏⵢⵓ_ⵢⵓⵍⵢⵓⵣ_ⵖⵓⵛⵜ_ⵛⵓⵜⴰⵏⴱⵉⵔ_ⴽⵟⵓⴱⵕ_ⵏⵓⵡⴰⵏⴱⵉⵔ_ⴷⵓⵊⵏⴱⵉⵔ".split("_"),monthsShort:"ⵉⵏⵏⴰⵢⵔ_ⴱⵕⴰⵢⵕ_ⵎⴰⵕⵚ_ⵉⴱⵔⵉⵔ_ⵎⴰⵢⵢⵓ_ⵢⵓⵏⵢⵓ_ⵢⵓⵍⵢⵓⵣ_ⵖⵓⵛⵜ_ⵛⵓⵜⴰⵏⴱⵉⵔ_ⴽⵟⵓⴱⵕ_ⵏⵓⵡⴰⵏⴱⵉⵔ_ⴷⵓⵊⵏⴱⵉⵔ".split("_"),weekdays:"ⴰⵙⴰⵎⴰⵙ_ⴰⵢⵏⴰⵙ_ⴰⵙⵉⵏⴰⵙ_ⴰⴽⵔⴰⵙ_ⴰⴽⵡⴰⵙ_ⴰⵙⵉⵎⵡⴰⵙ_ⴰⵙⵉⴹⵢⴰⵙ".split("_"),weekdaysShort:"ⴰⵙⴰⵎⴰⵙ_ⴰⵢⵏⴰⵙ_ⴰⵙⵉⵏⴰⵙ_ⴰⴽⵔⴰⵙ_ⴰⴽⵡⴰⵙ_ⴰⵙⵉⵎⵡⴰⵙ_ⴰⵙⵉⴹⵢⴰⵙ".split("_"),weekdaysMin:"ⴰⵙⴰⵎⴰⵙ_ⴰⵢⵏⴰⵙ_ⴰⵙⵉⵏⴰⵙ_ⴰⴽⵔⴰⵙ_ⴰⴽⵡⴰⵙ_ⴰⵙⵉⵎⵡⴰⵙ_ⴰⵙⵉⴹⵢⴰⵙ".split("_"),longDateFormat:{LT:"HH:mm",LTS:"HH:mm:ss",L:"DD/MM/YYYY",LL:"D MMMM YYYY",LLL:"D MMMM YYYY HH:mm",LLLL:"dddd D MMMM YYYY HH:mm"},calendar:{sameDay:"[ⴰⵙⴷⵅ ⴴ] LT",nextDay:"[ⴰⵙⴽⴰ ⴴ] LT",nextWeek:"dddd [ⴴ] LT",lastDay:"[ⴰⵚⴰⵏⵜ ⴴ] LT",lastWeek:"dddd [ⴴ] LT",sameElse:"L"},relativeTime:{future:"ⴷⴰⴷⵅ ⵙ ⵢⴰⵏ %s",past:"ⵢⴰⵏ %s",s:"ⵉⵎⵉⴽ",ss:"%d ⵉⵎⵉⴽ",m:"ⵎⵉⵏⵓⴺ",mm:"%d ⵎⵉⵏⵓⴺ",h:"ⵙⴰⵄⴰ",hh:"%d ⵜⴰⵙⵙⴰⵄⵉⵏ",d:"ⴰⵙⵙ",dd:"%d oⵙⵙⴰⵏ",M:"ⴰⵢoⵓⵔ",MM:"%d ⵉⵢⵢⵉⵔⵏ",y:"ⴰⵙⴳⴰⵙ",yy:"%d ⵉⵙⴳⴰⵙⵏ"},week:{dow:6,doy:12}});return e}))},9288:function(t,e,n){(function(t,e){e(n(381))})(0,(function(t){"use strict";
//! moment.js locale configuration
var e=t.defineLocale("ug-cn",{months:"يانۋار_فېۋرال_مارت_ئاپرېل_ماي_ئىيۇن_ئىيۇل_ئاۋغۇست_سېنتەبىر_ئۆكتەبىر_نويابىر_دېكابىر".split("_"),monthsShort:"يانۋار_فېۋرال_مارت_ئاپرېل_ماي_ئىيۇن_ئىيۇل_ئاۋغۇست_سېنتەبىر_ئۆكتەبىر_نويابىر_دېكابىر".split("_"),weekdays:"يەكشەنبە_دۈشەنبە_سەيشەنبە_چارشەنبە_پەيشەنبە_جۈمە_شەنبە".split("_"),weekdaysShort:"يە_دۈ_سە_چا_پە_جۈ_شە".split("_"),weekdaysMin:"يە_دۈ_سە_چا_پە_جۈ_شە".split("_"),longDateFormat:{LT:"HH:mm",LTS:"HH:mm:ss",L:"YYYY-MM-DD",LL:"YYYY-يىلىM-ئاينىڭD-كۈنى",LLL:"YYYY-يىلىM-ئاينىڭD-كۈنى، HH:mm",LLLL:"dddd، YYYY-يىلىM-ئاينىڭD-كۈنى، HH:mm"},meridiemParse:/يېرىم كېچە|سەھەر|چۈشتىن بۇرۇن|چۈش|چۈشتىن كېيىن|كەچ/,meridiemHour:function(t,e){return 12===t&&(t=0),"يېرىم كېچە"===e||"سەھەر"===e||"چۈشتىن بۇرۇن"===e?t:"چۈشتىن كېيىن"===e||"كەچ"===e?t+12:t>=11?t:t+12},meridiem:function(t,e,n){var a=100*t+e;return a<600?"يېرىم كېچە":a<900?"سەھەر":a<1130?"چۈشتىن بۇرۇن":a<1230?"چۈش":a<1800?"چۈشتىن كېيىن":"كەچ"},calendar:{sameDay:"[بۈگۈن سائەت] LT",nextDay:"[ئەتە سائەت] LT",nextWeek:"[كېلەركى] dddd [سائەت] LT",lastDay:"[تۆنۈگۈن] LT",lastWeek:"[ئالدىنقى] dddd [سائەت] LT",sameElse:"L"},relativeTime:{future:"%s كېيىن",past:"%s بۇرۇن",s:"نەچچە سېكونت",ss:"%d سېكونت",m:"بىر مىنۇت",mm:"%d مىنۇت",h:"بىر سائەت",hh:"%d سائەت",d:"بىر كۈن",dd:"%d كۈن",M:"بىر ئاي",MM:"%d ئاي",y:"بىر يىل",yy:"%d يىل"},dayOfMonthOrdinalParse:/\d{1,2}(-كۈنى|-ئاي|-ھەپتە)/,ordinal:function(t,e){switch(e){case"d":case"D":case"DDD":return t+"-كۈنى";case"w":case"W":return t+"-ھەپتە";default:return t}},preparse:function(t){return t.replace(/،/g,",")},postformat:function(t){return t.replace(/,/g,"،")},week:{dow:1,doy:7}});return e}))},7691:function(t,e,n){(function(t,e){e(n(381))})(0,(function(t){"use strict";
//! moment.js locale configuration
function e(t,e){var n=t.split("_");return e%10===1&&e%100!==11?n[0]:e%10>=2&&e%10<=4&&(e%100<10||e%100>=20)?n[1]:n[2]}function n(t,n,a){var r={ss:n?"секунда_секунди_секунд":"секунду_секунди_секунд",mm:n?"хвилина_хвилини_хвилин":"хвилину_хвилини_хвилин",hh:n?"година_години_годин":"годину_години_годин",dd:"день_дні_днів",MM:"місяць_місяці_місяців",yy:"рік_роки_років"};return"m"===a?n?"хвилина":"хвилину":"h"===a?n?"година":"годину":t+" "+e(r[a],+t)}function a(t,e){var n,a={nominative:"неділя_понеділок_вівторок_середа_четвер_п’ятниця_субота".split("_"),accusative:"неділю_понеділок_вівторок_середу_четвер_п’ятницю_суботу".split("_"),genitive:"неділі_понеділка_вівторка_середи_четверга_п’ятниці_суботи".split("_")};return!0===t?a["nominative"].slice(1,7).concat(a["nominative"].slice(0,1)):t?(n=/(\[[ВвУу]\]) ?dddd/.test(e)?"accusative":/\[?(?:минулої|наступної)? ?\] ?dddd/.test(e)?"genitive":"nominative",a[n][t.day()]):a["nominative"]}function r(t){return function(){return t+"о"+(11===this.hours()?"б":"")+"] LT"}}var i=t.defineLocale("uk",{months:{format:"січня_лютого_березня_квітня_травня_червня_липня_серпня_вересня_жовтня_листопада_грудня".split("_"),standalone:"січень_лютий_березень_квітень_травень_червень_липень_серпень_вересень_жовтень_листопад_грудень".split("_")},monthsShort:"січ_лют_бер_квіт_трав_черв_лип_серп_вер_жовт_лист_груд".split("_"),weekdays:a,weekdaysShort:"нд_пн_вт_ср_чт_пт_сб".split("_"),weekdaysMin:"нд_пн_вт_ср_чт_пт_сб".split("_"),longDateFormat:{LT:"HH:mm",LTS:"HH:mm:ss",L:"DD.MM.YYYY",LL:"D MMMM YYYY р.",LLL:"D MMMM YYYY р., HH:mm",LLLL:"dddd, D MMMM YYYY р., HH:mm"},calendar:{sameDay:r("[Сьогодні "),nextDay:r("[Завтра "),lastDay:r("[Вчора "),nextWeek:r("[У] dddd ["),lastWeek:function(){switch(this.day()){case 0:case 3:case 5:case 6:return r("[Минулої] dddd [").call(this);case 1:case 2:case 4:return r("[Минулого] dddd [").call(this)}},sameElse:"L"},relativeTime:{future:"за %s",past:"%s тому",s:"декілька секунд",ss:n,m:n,mm:n,h:"годину",hh:n,d:"день",dd:n,M:"місяць",MM:n,y:"рік",yy:n},meridiemParse:/ночі|ранку|дня|вечора/,isPM:function(t){return/^(дня|вечора)$/.test(t)},meridiem:function(t,e,n){return t<4?"ночі":t<12?"ранку":t<17?"дня":"вечора"},dayOfMonthOrdinalParse:/\d{1,2}-(й|го)/,ordinal:function(t,e){switch(e){case"M":case"d":case"DDD":case"w":case"W":return t+"-й";case"D":return t+"-го";default:return t}},week:{dow:1,doy:7}});return i}))},3795:function(t,e,n){(function(t,e){e(n(381))})(0,(function(t){"use strict";
//! moment.js locale configuration
var e=["جنوری","فروری","مارچ","اپریل","مئی","جون","جولائی","اگست","ستمبر","اکتوبر","نومبر","دسمبر"],n=["اتوار","پیر","منگل","بدھ","جمعرات","جمعہ","ہفتہ"],a=t.defineLocale("ur",{months:e,monthsShort:e,weekdays:n,weekdaysShort:n,weekdaysMin:n,longDateFormat:{LT:"HH:mm",LTS:"HH:mm:ss",L:"DD/MM/YYYY",LL:"D MMMM YYYY",LLL:"D MMMM YYYY HH:mm",LLLL:"dddd، D MMMM YYYY HH:mm"},meridiemParse:/صبح|شام/,isPM:function(t){return"شام"===t},meridiem:function(t,e,n){return t<12?"صبح":"شام"},calendar:{sameDay:"[آج بوقت] LT",nextDay:"[کل بوقت] LT",nextWeek:"dddd [بوقت] LT",lastDay:"[گذشتہ روز بوقت] LT",lastWeek:"[گذشتہ] dddd [بوقت] LT",sameElse:"L"},relativeTime:{future:"%s بعد",past:"%s قبل",s:"چند سیکنڈ",ss:"%d سیکنڈ",m:"ایک منٹ",mm:"%d منٹ",h:"ایک گھنٹہ",hh:"%d گھنٹے",d:"ایک دن",dd:"%d دن",M:"ایک ماہ",MM:"%d ماہ",y:"ایک سال",yy:"%d سال"},preparse:function(t){return t.replace(/،/g,",")},postformat:function(t){return t.replace(/,/g,"،")},week:{dow:1,doy:4}});return a}))},588:function(t,e,n){(function(t,e){e(n(381))})(0,(function(t){"use strict";
//! moment.js locale configuration
var e=t.defineLocale("uz-latn",{months:"Yanvar_Fevral_Mart_Aprel_May_Iyun_Iyul_Avgust_Sentabr_Oktabr_Noyabr_Dekabr".split("_"),monthsShort:"Yan_Fev_Mar_Apr_May_Iyun_Iyul_Avg_Sen_Okt_Noy_Dek".split("_"),weekdays:"Yakshanba_Dushanba_Seshanba_Chorshanba_Payshanba_Juma_Shanba".split("_"),weekdaysShort:"Yak_Dush_Sesh_Chor_Pay_Jum_Shan".split("_"),weekdaysMin:"Ya_Du_Se_Cho_Pa_Ju_Sha".split("_"),longDateFormat:{LT:"HH:mm",LTS:"HH:mm:ss",L:"DD/MM/YYYY",LL:"D MMMM YYYY",LLL:"D MMMM YYYY HH:mm",LLLL:"D MMMM YYYY, dddd HH:mm"},calendar:{sameDay:"[Bugun soat] LT [da]",nextDay:"[Ertaga] LT [da]",nextWeek:"dddd [kuni soat] LT [da]",lastDay:"[Kecha soat] LT [da]",lastWeek:"[O'tgan] dddd [kuni soat] LT [da]",sameElse:"L"},relativeTime:{future:"Yaqin %s ichida",past:"Bir necha %s oldin",s:"soniya",ss:"%d soniya",m:"bir daqiqa",mm:"%d daqiqa",h:"bir soat",hh:"%d soat",d:"bir kun",dd:"%d kun",M:"bir oy",MM:"%d oy",y:"bir yil",yy:"%d yil"},week:{dow:1,doy:7}});return e}))},6791:function(t,e,n){(function(t,e){e(n(381))})(0,(function(t){"use strict";
//! moment.js locale configuration
var e=t.defineLocale("uz",{months:"январ_феврал_март_апрел_май_июн_июл_август_сентябр_октябр_ноябр_декабр".split("_"),monthsShort:"янв_фев_мар_апр_май_июн_июл_авг_сен_окт_ноя_дек".split("_"),weekdays:"Якшанба_Душанба_Сешанба_Чоршанба_Пайшанба_Жума_Шанба".split("_"),weekdaysShort:"Якш_Душ_Сеш_Чор_Пай_Жум_Шан".split("_"),weekdaysMin:"Як_Ду_Се_Чо_Па_Жу_Ша".split("_"),longDateFormat:{LT:"HH:mm",LTS:"HH:mm:ss",L:"DD/MM/YYYY",LL:"D MMMM YYYY",LLL:"D MMMM YYYY HH:mm",LLLL:"D MMMM YYYY, dddd HH:mm"},calendar:{sameDay:"[Бугун соат] LT [да]",nextDay:"[Эртага] LT [да]",nextWeek:"dddd [куни соат] LT [да]",lastDay:"[Кеча соат] LT [да]",lastWeek:"[Утган] dddd [куни соат] LT [да]",sameElse:"L"},relativeTime:{future:"Якин %s ичида",past:"Бир неча %s олдин",s:"фурсат",ss:"%d фурсат",m:"бир дакика",mm:"%d дакика",h:"бир соат",hh:"%d соат",d:"бир кун",dd:"%d кун",M:"бир ой",MM:"%d ой",y:"бир йил",yy:"%d йил"},week:{dow:1,doy:7}});return e}))},5666:function(t,e,n){(function(t,e){e(n(381))})(0,(function(t){"use strict";
//! moment.js locale configuration
var e=t.defineLocale("vi",{months:"tháng 1_tháng 2_tháng 3_tháng 4_tháng 5_tháng 6_tháng 7_tháng 8_tháng 9_tháng 10_tháng 11_tháng 12".split("_"),monthsShort:"Thg 01_Thg 02_Thg 03_Thg 04_Thg 05_Thg 06_Thg 07_Thg 08_Thg 09_Thg 10_Thg 11_Thg 12".split("_"),monthsParseExact:!0,weekdays:"chủ nhật_thứ hai_thứ ba_thứ tư_thứ năm_thứ sáu_thứ bảy".split("_"),weekdaysShort:"CN_T2_T3_T4_T5_T6_T7".split("_"),weekdaysMin:"CN_T2_T3_T4_T5_T6_T7".split("_"),weekdaysParseExact:!0,meridiemParse:/sa|ch/i,isPM:function(t){return/^ch$/i.test(t)},meridiem:function(t,e,n){return t<12?n?"sa":"SA":n?"ch":"CH"},longDateFormat:{LT:"HH:mm",LTS:"HH:mm:ss",L:"DD/MM/YYYY",LL:"D MMMM [năm] YYYY",LLL:"D MMMM [năm] YYYY HH:mm",LLLL:"dddd, D MMMM [năm] YYYY HH:mm",l:"DD/M/YYYY",ll:"D MMM YYYY",lll:"D MMM YYYY HH:mm",llll:"ddd, D MMM YYYY HH:mm"},calendar:{sameDay:"[Hôm nay lúc] LT",nextDay:"[Ngày mai lúc] LT",nextWeek:"dddd [tuần tới lúc] LT",lastDay:"[Hôm qua lúc] LT",lastWeek:"dddd [tuần trước lúc] LT",sameElse:"L"},relativeTime:{future:"%s tới",past:"%s trước",s:"vài giây",ss:"%d giây",m:"một phút",mm:"%d phút",h:"một giờ",hh:"%d giờ",d:"một ngày",dd:"%d ngày",w:"một tuần",ww:"%d tuần",M:"một tháng",MM:"%d tháng",y:"một năm",yy:"%d năm"},dayOfMonthOrdinalParse:/\d{1,2}/,ordinal:function(t){return t},week:{dow:1,doy:4}});return e}))},4378:function(t,e,n){(function(t,e){e(n(381))})(0,(function(t){"use strict";
//! moment.js locale configuration
var e=t.defineLocale("x-pseudo",{months:"J~áñúá~rý_F~ébrú~árý_~Márc~h_Áp~ríl_~Máý_~Júñé~_Júl~ý_Áú~gúst~_Sép~témb~ér_Ó~ctób~ér_Ñ~óvém~bér_~Décé~mbér".split("_"),monthsShort:"J~áñ_~Féb_~Már_~Ápr_~Máý_~Júñ_~Júl_~Áúg_~Sép_~Óct_~Ñóv_~Déc".split("_"),monthsParseExact:!0,weekdays:"S~úñdá~ý_Mó~ñdáý~_Túé~sdáý~_Wéd~ñésd~áý_T~húrs~dáý_~Fríd~áý_S~átúr~dáý".split("_"),weekdaysShort:"S~úñ_~Móñ_~Túé_~Wéd_~Thú_~Frí_~Sát".split("_"),weekdaysMin:"S~ú_Mó~_Tú_~Wé_T~h_Fr~_Sá".split("_"),weekdaysParseExact:!0,longDateFormat:{LT:"HH:mm",L:"DD/MM/YYYY",LL:"D MMMM YYYY",LLL:"D MMMM YYYY HH:mm",LLLL:"dddd, D MMMM YYYY HH:mm"},calendar:{sameDay:"[T~ódá~ý át] LT",nextDay:"[T~ómó~rró~w át] LT",nextWeek:"dddd [át] LT",lastDay:"[Ý~ést~érdá~ý át] LT",lastWeek:"[L~ást] dddd [át] LT",sameElse:"L"},relativeTime:{future:"í~ñ %s",past:"%s á~gó",s:"á ~féw ~sécó~ñds",ss:"%d s~écóñ~ds",m:"á ~míñ~úté",mm:"%d m~íñú~tés",h:"á~ñ hó~úr",hh:"%d h~óúrs",d:"á ~dáý",dd:"%d d~áýs",M:"á ~móñ~th",MM:"%d m~óñt~hs",y:"á ~ýéár",yy:"%d ý~éárs"},dayOfMonthOrdinalParse:/\d{1,2}(th|st|nd|rd)/,ordinal:function(t){var e=t%10,n=1===~~(t%100/10)?"th":1===e?"st":2===e?"nd":3===e?"rd":"th";return t+n},week:{dow:1,doy:4}});return e}))},5805:function(t,e,n){(function(t,e){e(n(381))})(0,(function(t){"use strict";
//! moment.js locale configuration
var e=t.defineLocale("yo",{months:"Sẹ́rẹ́_Èrèlè_Ẹrẹ̀nà_Ìgbé_Èbibi_Òkùdu_Agẹmo_Ògún_Owewe_Ọ̀wàrà_Bélú_Ọ̀pẹ̀̀".split("_"),monthsShort:"Sẹ́r_Èrl_Ẹrn_Ìgb_Èbi_Òkù_Agẹ_Ògú_Owe_Ọ̀wà_Bél_Ọ̀pẹ̀̀".split("_"),weekdays:"Àìkú_Ajé_Ìsẹ́gun_Ọjọ́rú_Ọjọ́bọ_Ẹtì_Àbámẹ́ta".split("_"),weekdaysShort:"Àìk_Ajé_Ìsẹ́_Ọjr_Ọjb_Ẹtì_Àbá".split("_"),weekdaysMin:"Àì_Aj_Ìs_Ọr_Ọb_Ẹt_Àb".split("_"),longDateFormat:{LT:"h:mm A",LTS:"h:mm:ss A",L:"DD/MM/YYYY",LL:"D MMMM YYYY",LLL:"D MMMM YYYY h:mm A",LLLL:"dddd, D MMMM YYYY h:mm A"},calendar:{sameDay:"[Ònì ni] LT",nextDay:"[Ọ̀la ni] LT",nextWeek:"dddd [Ọsẹ̀ tón'bọ] [ni] LT",lastDay:"[Àna ni] LT",lastWeek:"dddd [Ọsẹ̀ tólọ́] [ni] LT",sameElse:"L"},relativeTime:{future:"ní %s",past:"%s kọjá",s:"ìsẹjú aayá die",ss:"aayá %d",m:"ìsẹjú kan",mm:"ìsẹjú %d",h:"wákati kan",hh:"wákati %d",d:"ọjọ́ kan",dd:"ọjọ́ %d",M:"osù kan",MM:"osù %d",y:"ọdún kan",yy:"ọdún %d"},dayOfMonthOrdinalParse:/ọjọ́\s\d{1,2}/,ordinal:"ọjọ́ %d",week:{dow:1,doy:4}});return e}))},3839:function(t,e,n){(function(t,e){e(n(381))})(0,(function(t){"use strict";
//! moment.js locale configuration
var e=t.defineLocale("zh-cn",{months:"一月_二月_三月_四月_五月_六月_七月_八月_九月_十月_十一月_十二月".split("_"),monthsShort:"1月_2月_3月_4月_5月_6月_7月_8月_9月_10月_11月_12月".split("_"),weekdays:"星期日_星期一_星期二_星期三_星期四_星期五_星期六".split("_"),weekdaysShort:"周日_周一_周二_周三_周四_周五_周六".split("_"),weekdaysMin:"日_一_二_三_四_五_六".split("_"),longDateFormat:{LT:"HH:mm",LTS:"HH:mm:ss",L:"YYYY/MM/DD",LL:"YYYY年M月D日",LLL:"YYYY年M月D日Ah点mm分",LLLL:"YYYY年M月D日ddddAh点mm分",l:"YYYY/M/D",ll:"YYYY年M月D日",lll:"YYYY年M月D日 HH:mm",llll:"YYYY年M月D日dddd HH:mm"},meridiemParse:/凌晨|早上|上午|中午|下午|晚上/,meridiemHour:function(t,e){return 12===t&&(t=0),"凌晨"===e||"早上"===e||"上午"===e?t:"下午"===e||"晚上"===e?t+12:t>=11?t:t+12},meridiem:function(t,e,n){var a=100*t+e;return a<600?"凌晨":a<900?"早上":a<1130?"上午":a<1230?"中午":a<1800?"下午":"晚上"},calendar:{sameDay:"[今天]LT",nextDay:"[明天]LT",nextWeek:function(t){return t.week()!==this.week()?"[下]dddLT":"[本]dddLT"},lastDay:"[昨天]LT",lastWeek:function(t){return this.week()!==t.week()?"[上]dddLT":"[本]dddLT"},sameElse:"L"},dayOfMonthOrdinalParse:/\d{1,2}(日|月|周)/,ordinal:function(t,e){switch(e){case"d":case"D":case"DDD":return t+"日";case"M":return t+"月";case"w":case"W":return t+"周";default:return t}},relativeTime:{future:"%s后",past:"%s前",s:"几秒",ss:"%d 秒",m:"1 分钟",mm:"%d 分钟",h:"1 小时",hh:"%d 小时",d:"1 天",dd:"%d 天",w:"1 周",ww:"%d 周",M:"1 个月",MM:"%d 个月",y:"1 年",yy:"%d 年"},week:{dow:1,doy:4}});return e}))},5726:function(t,e,n){(function(t,e){e(n(381))})(0,(function(t){"use strict";
//! moment.js locale configuration
var e=t.defineLocale("zh-hk",{months:"一月_二月_三月_四月_五月_六月_七月_八月_九月_十月_十一月_十二月".split("_"),monthsShort:"1月_2月_3月_4月_5月_6月_7月_8月_9月_10月_11月_12月".split("_"),weekdays:"星期日_星期一_星期二_星期三_星期四_星期五_星期六".split("_"),weekdaysShort:"週日_週一_週二_週三_週四_週五_週六".split("_"),weekdaysMin:"日_一_二_三_四_五_六".split("_"),longDateFormat:{LT:"HH:mm",LTS:"HH:mm:ss",L:"YYYY/MM/DD",LL:"YYYY年M月D日",LLL:"YYYY年M月D日 HH:mm",LLLL:"YYYY年M月D日dddd HH:mm",l:"YYYY/M/D",ll:"YYYY年M月D日",lll:"YYYY年M月D日 HH:mm",llll:"YYYY年M月D日dddd HH:mm"},meridiemParse:/凌晨|早上|上午|中午|下午|晚上/,meridiemHour:function(t,e){return 12===t&&(t=0),"凌晨"===e||"早上"===e||"上午"===e?t:"中午"===e?t>=11?t:t+12:"下午"===e||"晚上"===e?t+12:void 0},meridiem:function(t,e,n){var a=100*t+e;return a<600?"凌晨":a<900?"早上":a<1200?"上午":1200===a?"中午":a<1800?"下午":"晚上"},calendar:{sameDay:"[今天]LT",nextDay:"[明天]LT",nextWeek:"[下]ddddLT",lastDay:"[昨天]LT",lastWeek:"[上]ddddLT",sameElse:"L"},dayOfMonthOrdinalParse:/\d{1,2}(日|月|週)/,ordinal:function(t,e){switch(e){case"d":case"D":case"DDD":return t+"日";case"M":return t+"月";case"w":case"W":return t+"週";default:return t}},relativeTime:{future:"%s後",past:"%s前",s:"幾秒",ss:"%d 秒",m:"1 分鐘",mm:"%d 分鐘",h:"1 小時",hh:"%d 小時",d:"1 天",dd:"%d 天",M:"1 個月",MM:"%d 個月",y:"1 年",yy:"%d 年"}});return e}))},9807:function(t,e,n){(function(t,e){e(n(381))})(0,(function(t){"use strict";
//! moment.js locale configuration
var e=t.defineLocale("zh-mo",{months:"一月_二月_三月_四月_五月_六月_七月_八月_九月_十月_十一月_十二月".split("_"),monthsShort:"1月_2月_3月_4月_5月_6月_7月_8月_9月_10月_11月_12月".split("_"),weekdays:"星期日_星期一_星期二_星期三_星期四_星期五_星期六".split("_"),weekdaysShort:"週日_週一_週二_週三_週四_週五_週六".split("_"),weekdaysMin:"日_一_二_三_四_五_六".split("_"),longDateFormat:{LT:"HH:mm",LTS:"HH:mm:ss",L:"DD/MM/YYYY",LL:"YYYY年M月D日",LLL:"YYYY年M月D日 HH:mm",LLLL:"YYYY年M月D日dddd HH:mm",l:"D/M/YYYY",ll:"YYYY年M月D日",lll:"YYYY年M月D日 HH:mm",llll:"YYYY年M月D日dddd HH:mm"},meridiemParse:/凌晨|早上|上午|中午|下午|晚上/,meridiemHour:function(t,e){return 12===t&&(t=0),"凌晨"===e||"早上"===e||"上午"===e?t:"中午"===e?t>=11?t:t+12:"下午"===e||"晚上"===e?t+12:void 0},meridiem:function(t,e,n){var a=100*t+e;return a<600?"凌晨":a<900?"早上":a<1130?"上午":a<1230?"中午":a<1800?"下午":"晚上"},calendar:{sameDay:"[今天] LT",nextDay:"[明天] LT",nextWeek:"[下]dddd LT",lastDay:"[昨天] LT",lastWeek:"[上]dddd LT",sameElse:"L"},dayOfMonthOrdinalParse:/\d{1,2}(日|月|週)/,ordinal:function(t,e){switch(e){case"d":case"D":case"DDD":return t+"日";case"M":return t+"月";case"w":case"W":return t+"週";default:return t}},relativeTime:{future:"%s內",past:"%s前",s:"幾秒",ss:"%d 秒",m:"1 分鐘",mm:"%d 分鐘",h:"1 小時",hh:"%d 小時",d:"1 天",dd:"%d 天",M:"1 個月",MM:"%d 個月",y:"1 年",yy:"%d 年"}});return e}))},4152:function(t,e,n){(function(t,e){e(n(381))})(0,(function(t){"use strict";
//! moment.js locale configuration
var e=t.defineLocale("zh-tw",{months:"一月_二月_三月_四月_五月_六月_七月_八月_九月_十月_十一月_十二月".split("_"),monthsShort:"1月_2月_3月_4月_5月_6月_7月_8月_9月_10月_11月_12月".split("_"),weekdays:"星期日_星期一_星期二_星期三_星期四_星期五_星期六".split("_"),weekdaysShort:"週日_週一_週二_週三_週四_週五_週六".split("_"),weekdaysMin:"日_一_二_三_四_五_六".split("_"),longDateFormat:{LT:"HH:mm",LTS:"HH:mm:ss",L:"YYYY/MM/DD",LL:"YYYY年M月D日",LLL:"YYYY年M月D日 HH:mm",LLLL:"YYYY年M月D日dddd HH:mm",l:"YYYY/M/D",ll:"YYYY年M月D日",lll:"YYYY年M月D日 HH:mm",llll:"YYYY年M月D日dddd HH:mm"},meridiemParse:/凌晨|早上|上午|中午|下午|晚上/,meridiemHour:function(t,e){return 12===t&&(t=0),"凌晨"===e||"早上"===e||"上午"===e?t:"中午"===e?t>=11?t:t+12:"下午"===e||"晚上"===e?t+12:void 0},meridiem:function(t,e,n){var a=100*t+e;return a<600?"凌晨":a<900?"早上":a<1130?"上午":a<1230?"中午":a<1800?"下午":"晚上"},calendar:{sameDay:"[今天] LT",nextDay:"[明天] LT",nextWeek:"[下]dddd LT",lastDay:"[昨天] LT",lastWeek:"[上]dddd LT",sameElse:"L"},dayOfMonthOrdinalParse:/\d{1,2}(日|月|週)/,ordinal:function(t,e){switch(e){case"d":case"D":case"DDD":return t+"日";case"M":return t+"月";case"w":case"W":return t+"週";default:return t}},relativeTime:{future:"%s後",past:"%s前",s:"幾秒",ss:"%d 秒",m:"1 分鐘",mm:"%d 分鐘",h:"1 小時",hh:"%d 小時",d:"1 天",dd:"%d 天",M:"1 個月",MM:"%d 個月",y:"1 年",yy:"%d 年"}});return e}))},381:function(t,e,n){t=n.nmd(t),function(e,n){t.exports=n()}(0,(function(){"use strict";var e,a;function r(){return e.apply(null,arguments)}function i(t){e=t}function o(t){return t instanceof Array||"[object Array]"===Object.prototype.toString.call(t)}function s(t){return null!=t&&"[object Object]"===Object.prototype.toString.call(t)}function l(t,e){return Object.prototype.hasOwnProperty.call(t,e)}function c(t){if(Object.getOwnPropertyNames)return 0===Object.getOwnPropertyNames(t).length;var e;for(e in t)if(l(t,e))return!1;return!0}function u(t){return void 0===t}function h(t){return"number"===typeof t||"[object Number]"===Object.prototype.toString.call(t)}function d(t){return t instanceof Date||"[object Date]"===Object.prototype.toString.call(t)}function f(t,e){var n,a=[],r=t.length;for(n=0;n<r;++n)a.push(e(t[n],n));return a}function p(t,e){for(var n in e)l(e,n)&&(t[n]=e[n]);return l(e,"toString")&&(t.toString=e.toString),l(e,"valueOf")&&(t.valueOf=e.valueOf),t}function m(t,e,n,a){return Kn(t,e,n,a,!0).utc()}function v(){return{empty:!1,unusedTokens:[],unusedInput:[],overflow:-2,charsLeftOver:0,nullInput:!1,invalidEra:null,invalidMonth:null,invalidFormat:!1,userInvalidated:!1,iso:!1,parsedDateParts:[],era:null,meridiem:null,rfc2822:!1,weekdayMismatch:!1}}function g(t){return null==t._pf&&(t._pf=v()),t._pf}function _(t){if(null==t._isValid){var e=g(t),n=a.call(e.parsedDateParts,(function(t){return null!=t})),r=!isNaN(t._d.getTime())&&e.overflow<0&&!e.empty&&!e.invalidEra&&!e.invalidMonth&&!e.invalidWeekday&&!e.weekdayMismatch&&!e.nullInput&&!e.invalidFormat&&!e.userInvalidated&&(!e.meridiem||e.meridiem&&n);if(t._strict&&(r=r&&0===e.charsLeftOver&&0===e.unusedTokens.length&&void 0===e.bigHour),null!=Object.isFrozen&&Object.isFrozen(t))return r;t._isValid=r}return t._isValid}function y(t){var e=m(NaN);return null!=t?p(g(e),t):g(e).userInvalidated=!0,e}a=Array.prototype.some?Array.prototype.some:function(t){var e,n=Object(this),a=n.length>>>0;for(e=0;e<a;e++)if(e in n&&t.call(this,n[e],e,n))return!0;return!1};var b=r.momentProperties=[],M=!1;function z(t,e){var n,a,r,i=b.length;if(u(e._isAMomentObject)||(t._isAMomentObject=e._isAMomentObject),u(e._i)||(t._i=e._i),u(e._f)||(t._f=e._f),u(e._l)||(t._l=e._l),u(e._strict)||(t._strict=e._strict),u(e._tzm)||(t._tzm=e._tzm),u(e._isUTC)||(t._isUTC=e._isUTC),u(e._offset)||(t._offset=e._offset),u(e._pf)||(t._pf=g(e)),u(e._locale)||(t._locale=e._locale),i>0)for(n=0;n<i;n++)a=b[n],r=e[a],u(r)||(t[a]=r);return t}function w(t){z(this,t),this._d=new Date(null!=t._d?t._d.getTime():NaN),this.isValid()||(this._d=new Date(NaN)),!1===M&&(M=!0,r.updateOffset(this),M=!1)}function L(t){return t instanceof w||null!=t&&null!=t._isAMomentObject}function k(t){!1===r.suppressDeprecationWarnings&&"undefined"!==typeof console&&console.warn&&console.warn("Deprecation warning: "+t)}function H(t,e){var n=!0;return p((function(){if(null!=r.deprecationHandler&&r.deprecationHandler(null,t),n){var a,i,o,s=[],c=arguments.length;for(i=0;i<c;i++){if(a="","object"===typeof arguments[i]){for(o in a+="\n["+i+"] ",arguments[0])l(arguments[0],o)&&(a+=o+": "+arguments[0][o]+", ");a=a.slice(0,-2)}else a=arguments[i];s.push(a)}k(t+"\nArguments: "+Array.prototype.slice.call(s).join("")+"\n"+(new Error).stack),n=!1}return e.apply(this,arguments)}),e)}var T,S={};function A(t,e){null!=r.deprecationHandler&&r.deprecationHandler(t,e),S[t]||(k(e),S[t]=!0)}function O(t){return"undefined"!==typeof Function&&t instanceof Function||"[object Function]"===Object.prototype.toString.call(t)}function D(t){var e,n;for(n in t)l(t,n)&&(e=t[n],O(e)?this[n]=e:this["_"+n]=e);this._config=t,this._dayOfMonthOrdinalParseLenient=new RegExp((this._dayOfMonthOrdinalParse.source||this._ordinalParse.source)+"|"+/\d{1,2}/.source)}function V(t,e){var n,a=p({},t);for(n in e)l(e,n)&&(s(t[n])&&s(e[n])?(a[n]={},p(a[n],t[n]),p(a[n],e[n])):null!=e[n]?a[n]=e[n]:delete a[n]);for(n in t)l(t,n)&&!l(e,n)&&s(t[n])&&(a[n]=p({},a[n]));return a}function C(t){null!=t&&this.set(t)}r.suppressDeprecationWarnings=!1,r.deprecationHandler=null,T=Object.keys?Object.keys:function(t){var e,n=[];for(e in t)l(t,e)&&n.push(e);return n};var I={sameDay:"[Today at] LT",nextDay:"[Tomorrow at] LT",nextWeek:"dddd [at] LT",lastDay:"[Yesterday at] LT",lastWeek:"[Last] dddd [at] LT",sameElse:"L"};function P(t,e,n){var a=this._calendar[t]||this._calendar["sameElse"];return O(a)?a.call(e,n):a}function E(t,e,n){var a=""+Math.abs(t),r=e-a.length,i=t>=0;return(i?n?"+":"":"-")+Math.pow(10,Math.max(0,r)).toString().substr(1)+a}var B=/(\[[^\[]*\])|(\\)?([Hh]mm(ss)?|Mo|MM?M?M?|Do|DDDo|DD?D?D?|ddd?d?|do?|w[o|w]?|W[o|W]?|Qo?|N{1,5}|YYYYYY|YYYYY|YYYY|YY|y{2,4}|yo?|gg(ggg?)?|GG(GGG?)?|e|E|a|A|hh?|HH?|kk?|mm?|ss?|S{1,9}|x|X|zz?|ZZ?|.)/g,F=/(\[[^\[]*\])|(\\)?(LTS|LT|LL?L?L?|l{1,4})/g,j={},Y={};function x(t,e,n,a){var r=a;"string"===typeof a&&(r=function(){return this[a]()}),t&&(Y[t]=r),e&&(Y[e[0]]=function(){return E(r.apply(this,arguments),e[1],e[2])}),n&&(Y[n]=function(){return this.localeData().ordinal(r.apply(this,arguments),t)})}function N(t){return t.match(/\[[\s\S]/)?t.replace(/^\[|\]$/g,""):t.replace(/\\/g,"")}function R(t){var e,n,a=t.match(B);for(e=0,n=a.length;e<n;e++)Y[a[e]]?a[e]=Y[a[e]]:a[e]=N(a[e]);return function(e){var r,i="";for(r=0;r<n;r++)i+=O(a[r])?a[r].call(e,t):a[r];return i}}function $(t,e){return t.isValid()?(e=U(e,t.localeData()),j[e]=j[e]||R(e),j[e](t)):t.localeData().invalidDate()}function U(t,e){var n=5;function a(t){return e.longDateFormat(t)||t}F.lastIndex=0;while(n>=0&&F.test(t))t=t.replace(F,a),F.lastIndex=0,n-=1;return t}var W={LTS:"h:mm:ss A",LT:"h:mm A",L:"MM/DD/YYYY",LL:"MMMM D, YYYY",LLL:"MMMM D, YYYY h:mm A",LLLL:"dddd, MMMM D, YYYY h:mm A"};function G(t){var e=this._longDateFormat[t],n=this._longDateFormat[t.toUpperCase()];return e||!n?e:(this._longDateFormat[t]=n.match(B).map((function(t){return"MMMM"===t||"MM"===t||"DD"===t||"dddd"===t?t.slice(1):t})).join(""),this._longDateFormat[t])}var q="Invalid date";function K(){return this._invalidDate}var J="%d",X=/\d{1,2}/;function Q(t){return this._ordinal.replace("%d",t)}var Z={future:"in %s",past:"%s ago",s:"a few seconds",ss:"%d seconds",m:"a minute",mm:"%d minutes",h:"an hour",hh:"%d hours",d:"a day",dd:"%d days",w:"a week",ww:"%d weeks",M:"a month",MM:"%d months",y:"a year",yy:"%d years"};function tt(t,e,n,a){var r=this._relativeTime[n];return O(r)?r(t,e,n,a):r.replace(/%d/i,t)}function et(t,e){var n=this._relativeTime[t>0?"future":"past"];return O(n)?n(e):n.replace(/%s/i,e)}var nt={};function at(t,e){var n=t.toLowerCase();nt[n]=nt[n+"s"]=nt[e]=t}function rt(t){return"string"===typeof t?nt[t]||nt[t.toLowerCase()]:void 0}function it(t){var e,n,a={};for(n in t)l(t,n)&&(e=rt(n),e&&(a[e]=t[n]));return a}var ot={};function st(t,e){ot[t]=e}function lt(t){var e,n=[];for(e in t)l(t,e)&&n.push({unit:e,priority:ot[e]});return n.sort((function(t,e){return t.priority-e.priority})),n}function ct(t){return t%4===0&&t%100!==0||t%400===0}function ut(t){return t<0?Math.ceil(t)||0:Math.floor(t)}function ht(t){var e=+t,n=0;return 0!==e&&isFinite(e)&&(n=ut(e)),n}function dt(t,e){return function(n){return null!=n?(pt(this,t,n),r.updateOffset(this,e),this):ft(this,t)}}function ft(t,e){return t.isValid()?t._d["get"+(t._isUTC?"UTC":"")+e]():NaN}function pt(t,e,n){t.isValid()&&!isNaN(n)&&("FullYear"===e&&ct(t.year())&&1===t.month()&&29===t.date()?(n=ht(n),t._d["set"+(t._isUTC?"UTC":"")+e](n,t.month(),te(n,t.month()))):t._d["set"+(t._isUTC?"UTC":"")+e](n))}function mt(t){return t=rt(t),O(this[t])?this[t]():this}function vt(t,e){if("object"===typeof t){t=it(t);var n,a=lt(t),r=a.length;for(n=0;n<r;n++)this[a[n].unit](t[a[n].unit])}else if(t=rt(t),O(this[t]))return this[t](e);return this}var gt,_t=/\d/,yt=/\d\d/,bt=/\d{3}/,Mt=/\d{4}/,zt=/[+-]?\d{6}/,wt=/\d\d?/,Lt=/\d\d\d\d?/,kt=/\d\d\d\d\d\d?/,Ht=/\d{1,3}/,Tt=/\d{1,4}/,St=/[+-]?\d{1,6}/,At=/\d+/,Ot=/[+-]?\d+/,Dt=/Z|[+-]\d\d:?\d\d/gi,Vt=/Z|[+-]\d\d(?::?\d\d)?/gi,Ct=/[+-]?\d+(\.\d{1,3})?/,It=/[0-9]{0,256}['a-z\u00A0-\u05FF\u0700-\uD7FF\uF900-\uFDCF\uFDF0-\uFF07\uFF10-\uFFEF]{1,256}|[\u0600-\u06FF\/]{1,256}(\s*?[\u0600-\u06FF]{1,256}){1,2}/i;function Pt(t,e,n){gt[t]=O(e)?e:function(t,a){return t&&n?n:e}}function Et(t,e){return l(gt,t)?gt[t](e._strict,e._locale):new RegExp(Bt(t))}function Bt(t){return Ft(t.replace("\\","").replace(/\\(\[)|\\(\])|\[([^\]\[]*)\]|\\(.)/g,(function(t,e,n,a,r){return e||n||a||r})))}function Ft(t){return t.replace(/[-\/\\^$*+?.()|[\]{}]/g,"\\$&")}gt={};var jt={};function Yt(t,e){var n,a,r=e;for("string"===typeof t&&(t=[t]),h(e)&&(r=function(t,n){n[e]=ht(t)}),a=t.length,n=0;n<a;n++)jt[t[n]]=r}function xt(t,e){Yt(t,(function(t,n,a,r){a._w=a._w||{},e(t,a._w,a,r)}))}function Nt(t,e,n){null!=e&&l(jt,t)&&jt[t](e,n._a,n,t)}var Rt,$t=0,Ut=1,Wt=2,Gt=3,qt=4,Kt=5,Jt=6,Xt=7,Qt=8;function Zt(t,e){return(t%e+e)%e}function te(t,e){if(isNaN(t)||isNaN(e))return NaN;var n=Zt(e,12);return t+=(e-n)/12,1===n?ct(t)?29:28:31-n%7%2}Rt=Array.prototype.indexOf?Array.prototype.indexOf:function(t){var e;for(e=0;e<this.length;++e)if(this[e]===t)return e;return-1},x("M",["MM",2],"Mo",(function(){return this.month()+1})),x("MMM",0,0,(function(t){return this.localeData().monthsShort(this,t)})),x("MMMM",0,0,(function(t){return this.localeData().months(this,t)})),at("month","M"),st("month",8),Pt("M",wt),Pt("MM",wt,yt),Pt("MMM",(function(t,e){return e.monthsShortRegex(t)})),Pt("MMMM",(function(t,e){return e.monthsRegex(t)})),Yt(["M","MM"],(function(t,e){e[Ut]=ht(t)-1})),Yt(["MMM","MMMM"],(function(t,e,n,a){var r=n._locale.monthsParse(t,a,n._strict);null!=r?e[Ut]=r:g(n).invalidMonth=t}));var ee="January_February_March_April_May_June_July_August_September_October_November_December".split("_"),ne="Jan_Feb_Mar_Apr_May_Jun_Jul_Aug_Sep_Oct_Nov_Dec".split("_"),ae=/D[oD]?(\[[^\[\]]*\]|\s)+MMMM?/,re=It,ie=It;function oe(t,e){return t?o(this._months)?this._months[t.month()]:this._months[(this._months.isFormat||ae).test(e)?"format":"standalone"][t.month()]:o(this._months)?this._months:this._months["standalone"]}function se(t,e){return t?o(this._monthsShort)?this._monthsShort[t.month()]:this._monthsShort[ae.test(e)?"format":"standalone"][t.month()]:o(this._monthsShort)?this._monthsShort:this._monthsShort["standalone"]}function le(t,e,n){var a,r,i,o=t.toLocaleLowerCase();if(!this._monthsParse)for(this._monthsParse=[],this._longMonthsParse=[],this._shortMonthsParse=[],a=0;a<12;++a)i=m([2e3,a]),this._shortMonthsParse[a]=this.monthsShort(i,"").toLocaleLowerCase(),this._longMonthsParse[a]=this.months(i,"").toLocaleLowerCase();return n?"MMM"===e?(r=Rt.call(this._shortMonthsParse,o),-1!==r?r:null):(r=Rt.call(this._longMonthsParse,o),-1!==r?r:null):"MMM"===e?(r=Rt.call(this._shortMonthsParse,o),-1!==r?r:(r=Rt.call(this._longMonthsParse,o),-1!==r?r:null)):(r=Rt.call(this._longMonthsParse,o),-1!==r?r:(r=Rt.call(this._shortMonthsParse,o),-1!==r?r:null))}function ce(t,e,n){var a,r,i;if(this._monthsParseExact)return le.call(this,t,e,n);for(this._monthsParse||(this._monthsParse=[],this._longMonthsParse=[],this._shortMonthsParse=[]),a=0;a<12;a++){if(r=m([2e3,a]),n&&!this._longMonthsParse[a]&&(this._longMonthsParse[a]=new RegExp("^"+this.months(r,"").replace(".","")+"$","i"),this._shortMonthsParse[a]=new RegExp("^"+this.monthsShort(r,"").replace(".","")+"$","i")),n||this._monthsParse[a]||(i="^"+this.months(r,"")+"|^"+this.monthsShort(r,""),this._monthsParse[a]=new RegExp(i.replace(".",""),"i")),n&&"MMMM"===e&&this._longMonthsParse[a].test(t))return a;if(n&&"MMM"===e&&this._shortMonthsParse[a].test(t))return a;if(!n&&this._monthsParse[a].test(t))return a}}function ue(t,e){var n;if(!t.isValid())return t;if("string"===typeof e)if(/^\d+$/.test(e))e=ht(e);else if(e=t.localeData().monthsParse(e),!h(e))return t;return n=Math.min(t.date(),te(t.year(),e)),t._d["set"+(t._isUTC?"UTC":"")+"Month"](e,n),t}function he(t){return null!=t?(ue(this,t),r.updateOffset(this,!0),this):ft(this,"Month")}function de(){return te(this.year(),this.month())}function fe(t){return this._monthsParseExact?(l(this,"_monthsRegex")||me.call(this),t?this._monthsShortStrictRegex:this._monthsShortRegex):(l(this,"_monthsShortRegex")||(this._monthsShortRegex=re),this._monthsShortStrictRegex&&t?this._monthsShortStrictRegex:this._monthsShortRegex)}function pe(t){return this._monthsParseExact?(l(this,"_monthsRegex")||me.call(this),t?this._monthsStrictRegex:this._monthsRegex):(l(this,"_monthsRegex")||(this._monthsRegex=ie),this._monthsStrictRegex&&t?this._monthsStrictRegex:this._monthsRegex)}function me(){function t(t,e){return e.length-t.length}var e,n,a=[],r=[],i=[];for(e=0;e<12;e++)n=m([2e3,e]),a.push(this.monthsShort(n,"")),r.push(this.months(n,"")),i.push(this.months(n,"")),i.push(this.monthsShort(n,""));for(a.sort(t),r.sort(t),i.sort(t),e=0;e<12;e++)a[e]=Ft(a[e]),r[e]=Ft(r[e]);for(e=0;e<24;e++)i[e]=Ft(i[e]);this._monthsRegex=new RegExp("^("+i.join("|")+")","i"),this._monthsShortRegex=this._monthsRegex,this._monthsStrictRegex=new RegExp("^("+r.join("|")+")","i"),this._monthsShortStrictRegex=new RegExp("^("+a.join("|")+")","i")}function ve(t){return ct(t)?366:365}x("Y",0,0,(function(){var t=this.year();return t<=9999?E(t,4):"+"+t})),x(0,["YY",2],0,(function(){return this.year()%100})),x(0,["YYYY",4],0,"year"),x(0,["YYYYY",5],0,"year"),x(0,["YYYYYY",6,!0],0,"year"),at("year","y"),st("year",1),Pt("Y",Ot),Pt("YY",wt,yt),Pt("YYYY",Tt,Mt),Pt("YYYYY",St,zt),Pt("YYYYYY",St,zt),Yt(["YYYYY","YYYYYY"],$t),Yt("YYYY",(function(t,e){e[$t]=2===t.length?r.parseTwoDigitYear(t):ht(t)})),Yt("YY",(function(t,e){e[$t]=r.parseTwoDigitYear(t)})),Yt("Y",(function(t,e){e[$t]=parseInt(t,10)})),r.parseTwoDigitYear=function(t){return ht(t)+(ht(t)>68?1900:2e3)};var ge=dt("FullYear",!0);function _e(){return ct(this.year())}function ye(t,e,n,a,r,i,o){var s;return t<100&&t>=0?(s=new Date(t+400,e,n,a,r,i,o),isFinite(s.getFullYear())&&s.setFullYear(t)):s=new Date(t,e,n,a,r,i,o),s}function be(t){var e,n;return t<100&&t>=0?(n=Array.prototype.slice.call(arguments),n[0]=t+400,e=new Date(Date.UTC.apply(null,n)),isFinite(e.getUTCFullYear())&&e.setUTCFullYear(t)):e=new Date(Date.UTC.apply(null,arguments)),e}function Me(t,e,n){var a=7+e-n,r=(7+be(t,0,a).getUTCDay()-e)%7;return-r+a-1}function ze(t,e,n,a,r){var i,o,s=(7+n-a)%7,l=Me(t,a,r),c=1+7*(e-1)+s+l;return c<=0?(i=t-1,o=ve(i)+c):c>ve(t)?(i=t+1,o=c-ve(t)):(i=t,o=c),{year:i,dayOfYear:o}}function we(t,e,n){var a,r,i=Me(t.year(),e,n),o=Math.floor((t.dayOfYear()-i-1)/7)+1;return o<1?(r=t.year()-1,a=o+Le(r,e,n)):o>Le(t.year(),e,n)?(a=o-Le(t.year(),e,n),r=t.year()+1):(r=t.year(),a=o),{week:a,year:r}}function Le(t,e,n){var a=Me(t,e,n),r=Me(t+1,e,n);return(ve(t)-a+r)/7}function ke(t){return we(t,this._week.dow,this._week.doy).week}x("w",["ww",2],"wo","week"),x("W",["WW",2],"Wo","isoWeek"),at("week","w"),at("isoWeek","W"),st("week",5),st("isoWeek",5),Pt("w",wt),Pt("ww",wt,yt),Pt("W",wt),Pt("WW",wt,yt),xt(["w","ww","W","WW"],(function(t,e,n,a){e[a.substr(0,1)]=ht(t)}));var He={dow:0,doy:6};function Te(){return this._week.dow}function Se(){return this._week.doy}function Ae(t){var e=this.localeData().week(this);return null==t?e:this.add(7*(t-e),"d")}function Oe(t){var e=we(this,1,4).week;return null==t?e:this.add(7*(t-e),"d")}function De(t,e){return"string"!==typeof t?t:isNaN(t)?(t=e.weekdaysParse(t),"number"===typeof t?t:null):parseInt(t,10)}function Ve(t,e){return"string"===typeof t?e.weekdaysParse(t)%7||7:isNaN(t)?null:t}function Ce(t,e){return t.slice(e,7).concat(t.slice(0,e))}x("d",0,"do","day"),x("dd",0,0,(function(t){return this.localeData().weekdaysMin(this,t)})),x("ddd",0,0,(function(t){return this.localeData().weekdaysShort(this,t)})),x("dddd",0,0,(function(t){return this.localeData().weekdays(this,t)})),x("e",0,0,"weekday"),x("E",0,0,"isoWeekday"),at("day","d"),at("weekday","e"),at("isoWeekday","E"),st("day",11),st("weekday",11),st("isoWeekday",11),Pt("d",wt),Pt("e",wt),Pt("E",wt),Pt("dd",(function(t,e){return e.weekdaysMinRegex(t)})),Pt("ddd",(function(t,e){return e.weekdaysShortRegex(t)})),Pt("dddd",(function(t,e){return e.weekdaysRegex(t)})),xt(["dd","ddd","dddd"],(function(t,e,n,a){var r=n._locale.weekdaysParse(t,a,n._strict);null!=r?e.d=r:g(n).invalidWeekday=t})),xt(["d","e","E"],(function(t,e,n,a){e[a]=ht(t)}));var Ie="Sunday_Monday_Tuesday_Wednesday_Thursday_Friday_Saturday".split("_"),Pe="Sun_Mon_Tue_Wed_Thu_Fri_Sat".split("_"),Ee="Su_Mo_Tu_We_Th_Fr_Sa".split("_"),Be=It,Fe=It,je=It;function Ye(t,e){var n=o(this._weekdays)?this._weekdays:this._weekdays[t&&!0!==t&&this._weekdays.isFormat.test(e)?"format":"standalone"];return!0===t?Ce(n,this._week.dow):t?n[t.day()]:n}function xe(t){return!0===t?Ce(this._weekdaysShort,this._week.dow):t?this._weekdaysShort[t.day()]:this._weekdaysShort}function Ne(t){return!0===t?Ce(this._weekdaysMin,this._week.dow):t?this._weekdaysMin[t.day()]:this._weekdaysMin}function Re(t,e,n){var a,r,i,o=t.toLocaleLowerCase();if(!this._weekdaysParse)for(this._weekdaysParse=[],this._shortWeekdaysParse=[],this._minWeekdaysParse=[],a=0;a<7;++a)i=m([2e3,1]).day(a),this._minWeekdaysParse[a]=this.weekdaysMin(i,"").toLocaleLowerCase(),this._shortWeekdaysParse[a]=this.weekdaysShort(i,"").toLocaleLowerCase(),this._weekdaysParse[a]=this.weekdays(i,"").toLocaleLowerCase();return n?"dddd"===e?(r=Rt.call(this._weekdaysParse,o),-1!==r?r:null):"ddd"===e?(r=Rt.call(this._shortWeekdaysParse,o),-1!==r?r:null):(r=Rt.call(this._minWeekdaysParse,o),-1!==r?r:null):"dddd"===e?(r=Rt.call(this._weekdaysParse,o),-1!==r?r:(r=Rt.call(this._shortWeekdaysParse,o),-1!==r?r:(r=Rt.call(this._minWeekdaysParse,o),-1!==r?r:null))):"ddd"===e?(r=Rt.call(this._shortWeekdaysParse,o),-1!==r?r:(r=Rt.call(this._weekdaysParse,o),-1!==r?r:(r=Rt.call(this._minWeekdaysParse,o),-1!==r?r:null))):(r=Rt.call(this._minWeekdaysParse,o),-1!==r?r:(r=Rt.call(this._weekdaysParse,o),-1!==r?r:(r=Rt.call(this._shortWeekdaysParse,o),-1!==r?r:null)))}function $e(t,e,n){var a,r,i;if(this._weekdaysParseExact)return Re.call(this,t,e,n);for(this._weekdaysParse||(this._weekdaysParse=[],this._minWeekdaysParse=[],this._shortWeekdaysParse=[],this._fullWeekdaysParse=[]),a=0;a<7;a++){if(r=m([2e3,1]).day(a),n&&!this._fullWeekdaysParse[a]&&(this._fullWeekdaysParse[a]=new RegExp("^"+this.weekdays(r,"").replace(".","\\.?")+"$","i"),this._shortWeekdaysParse[a]=new RegExp("^"+this.weekdaysShort(r,"").replace(".","\\.?")+"$","i"),this._minWeekdaysParse[a]=new RegExp("^"+this.weekdaysMin(r,"").replace(".","\\.?")+"$","i")),this._weekdaysParse[a]||(i="^"+this.weekdays(r,"")+"|^"+this.weekdaysShort(r,"")+"|^"+this.weekdaysMin(r,""),this._weekdaysParse[a]=new RegExp(i.replace(".",""),"i")),n&&"dddd"===e&&this._fullWeekdaysParse[a].test(t))return a;if(n&&"ddd"===e&&this._shortWeekdaysParse[a].test(t))return a;if(n&&"dd"===e&&this._minWeekdaysParse[a].test(t))return a;if(!n&&this._weekdaysParse[a].test(t))return a}}function Ue(t){if(!this.isValid())return null!=t?this:NaN;var e=this._isUTC?this._d.getUTCDay():this._d.getDay();return null!=t?(t=De(t,this.localeData()),this.add(t-e,"d")):e}function We(t){if(!this.isValid())return null!=t?this:NaN;var e=(this.day()+7-this.localeData()._week.dow)%7;return null==t?e:this.add(t-e,"d")}function Ge(t){if(!this.isValid())return null!=t?this:NaN;if(null!=t){var e=Ve(t,this.localeData());return this.day(this.day()%7?e:e-7)}return this.day()||7}function qe(t){return this._weekdaysParseExact?(l(this,"_weekdaysRegex")||Xe.call(this),t?this._weekdaysStrictRegex:this._weekdaysRegex):(l(this,"_weekdaysRegex")||(this._weekdaysRegex=Be),this._weekdaysStrictRegex&&t?this._weekdaysStrictRegex:this._weekdaysRegex)}function Ke(t){return this._weekdaysParseExact?(l(this,"_weekdaysRegex")||Xe.call(this),t?this._weekdaysShortStrictRegex:this._weekdaysShortRegex):(l(this,"_weekdaysShortRegex")||(this._weekdaysShortRegex=Fe),this._weekdaysShortStrictRegex&&t?this._weekdaysShortStrictRegex:this._weekdaysShortRegex)}function Je(t){return this._weekdaysParseExact?(l(this,"_weekdaysRegex")||Xe.call(this),t?this._weekdaysMinStrictRegex:this._weekdaysMinRegex):(l(this,"_weekdaysMinRegex")||(this._weekdaysMinRegex=je),this._weekdaysMinStrictRegex&&t?this._weekdaysMinStrictRegex:this._weekdaysMinRegex)}function Xe(){function t(t,e){return e.length-t.length}var e,n,a,r,i,o=[],s=[],l=[],c=[];for(e=0;e<7;e++)n=m([2e3,1]).day(e),a=Ft(this.weekdaysMin(n,"")),r=Ft(this.weekdaysShort(n,"")),i=Ft(this.weekdays(n,"")),o.push(a),s.push(r),l.push(i),c.push(a),c.push(r),c.push(i);o.sort(t),s.sort(t),l.sort(t),c.sort(t),this._weekdaysRegex=new RegExp("^("+c.join("|")+")","i"),this._weekdaysShortRegex=this._weekdaysRegex,this._weekdaysMinRegex=this._weekdaysRegex,this._weekdaysStrictRegex=new RegExp("^("+l.join("|")+")","i"),this._weekdaysShortStrictRegex=new RegExp("^("+s.join("|")+")","i"),this._weekdaysMinStrictRegex=new RegExp("^("+o.join("|")+")","i")}function Qe(){return this.hours()%12||12}function Ze(){return this.hours()||24}function tn(t,e){x(t,0,0,(function(){return this.localeData().meridiem(this.hours(),this.minutes(),e)}))}function en(t,e){return e._meridiemParse}function nn(t){return"p"===(t+"").toLowerCase().charAt(0)}x("H",["HH",2],0,"hour"),x("h",["hh",2],0,Qe),x("k",["kk",2],0,Ze),x("hmm",0,0,(function(){return""+Qe.apply(this)+E(this.minutes(),2)})),x("hmmss",0,0,(function(){return""+Qe.apply(this)+E(this.minutes(),2)+E(this.seconds(),2)})),x("Hmm",0,0,(function(){return""+this.hours()+E(this.minutes(),2)})),x("Hmmss",0,0,(function(){return""+this.hours()+E(this.minutes(),2)+E(this.seconds(),2)})),tn("a",!0),tn("A",!1),at("hour","h"),st("hour",13),Pt("a",en),Pt("A",en),Pt("H",wt),Pt("h",wt),Pt("k",wt),Pt("HH",wt,yt),Pt("hh",wt,yt),Pt("kk",wt,yt),Pt("hmm",Lt),Pt("hmmss",kt),Pt("Hmm",Lt),Pt("Hmmss",kt),Yt(["H","HH"],Gt),Yt(["k","kk"],(function(t,e,n){var a=ht(t);e[Gt]=24===a?0:a})),Yt(["a","A"],(function(t,e,n){n._isPm=n._locale.isPM(t),n._meridiem=t})),Yt(["h","hh"],(function(t,e,n){e[Gt]=ht(t),g(n).bigHour=!0})),Yt("hmm",(function(t,e,n){var a=t.length-2;e[Gt]=ht(t.substr(0,a)),e[qt]=ht(t.substr(a)),g(n).bigHour=!0})),Yt("hmmss",(function(t,e,n){var a=t.length-4,r=t.length-2;e[Gt]=ht(t.substr(0,a)),e[qt]=ht(t.substr(a,2)),e[Kt]=ht(t.substr(r)),g(n).bigHour=!0})),Yt("Hmm",(function(t,e,n){var a=t.length-2;e[Gt]=ht(t.substr(0,a)),e[qt]=ht(t.substr(a))})),Yt("Hmmss",(function(t,e,n){var a=t.length-4,r=t.length-2;e[Gt]=ht(t.substr(0,a)),e[qt]=ht(t.substr(a,2)),e[Kt]=ht(t.substr(r))}));var an=/[ap]\.?m?\.?/i,rn=dt("Hours",!0);function on(t,e,n){return t>11?n?"pm":"PM":n?"am":"AM"}var sn,ln={calendar:I,longDateFormat:W,invalidDate:q,ordinal:J,dayOfMonthOrdinalParse:X,relativeTime:Z,months:ee,monthsShort:ne,week:He,weekdays:Ie,weekdaysMin:Ee,weekdaysShort:Pe,meridiemParse:an},cn={},un={};function hn(t,e){var n,a=Math.min(t.length,e.length);for(n=0;n<a;n+=1)if(t[n]!==e[n])return n;return a}function dn(t){return t?t.toLowerCase().replace("_","-"):t}function fn(t){var e,n,a,r,i=0;while(i<t.length){r=dn(t[i]).split("-"),e=r.length,n=dn(t[i+1]),n=n?n.split("-"):null;while(e>0){if(a=mn(r.slice(0,e).join("-")),a)return a;if(n&&n.length>=e&&hn(r,n)>=e-1)break;e--}i++}return sn}function pn(t){return null!=t.match("^[^/\\\\]*$")}function mn(e){var a=null;if(void 0===cn[e]&&t&&t.exports&&pn(e))try{a=sn._abbr,void 0,n(6700)("./"+e),vn(a)}catch(r){cn[e]=null}return cn[e]}function vn(t,e){var n;return t&&(n=u(e)?yn(t):gn(t,e),n?sn=n:"undefined"!==typeof console&&console.warn&&console.warn("Locale "+t+" not found. Did you forget to load it?")),sn._abbr}function gn(t,e){if(null!==e){var n,a=ln;if(e.abbr=t,null!=cn[t])A("defineLocaleOverride","use moment.updateLocale(localeName, config) to change an existing locale. moment.defineLocale(localeName, config) should only be used for creating a new locale See http://momentjs.com/guides/#/warnings/define-locale/ for more info."),a=cn[t]._config;else if(null!=e.parentLocale)if(null!=cn[e.parentLocale])a=cn[e.parentLocale]._config;else{if(n=mn(e.parentLocale),null==n)return un[e.parentLocale]||(un[e.parentLocale]=[]),un[e.parentLocale].push({name:t,config:e}),null;a=n._config}return cn[t]=new C(V(a,e)),un[t]&&un[t].forEach((function(t){gn(t.name,t.config)})),vn(t),cn[t]}return delete cn[t],null}function _n(t,e){if(null!=e){var n,a,r=ln;null!=cn[t]&&null!=cn[t].parentLocale?cn[t].set(V(cn[t]._config,e)):(a=mn(t),null!=a&&(r=a._config),e=V(r,e),null==a&&(e.abbr=t),n=new C(e),n.parentLocale=cn[t],cn[t]=n),vn(t)}else null!=cn[t]&&(null!=cn[t].parentLocale?(cn[t]=cn[t].parentLocale,t===vn()&&vn(t)):null!=cn[t]&&delete cn[t]);return cn[t]}function yn(t){var e;if(t&&t._locale&&t._locale._abbr&&(t=t._locale._abbr),!t)return sn;if(!o(t)){if(e=mn(t),e)return e;t=[t]}return fn(t)}function bn(){return T(cn)}function Mn(t){var e,n=t._a;return n&&-2===g(t).overflow&&(e=n[Ut]<0||n[Ut]>11?Ut:n[Wt]<1||n[Wt]>te(n[$t],n[Ut])?Wt:n[Gt]<0||n[Gt]>24||24===n[Gt]&&(0!==n[qt]||0!==n[Kt]||0!==n[Jt])?Gt:n[qt]<0||n[qt]>59?qt:n[Kt]<0||n[Kt]>59?Kt:n[Jt]<0||n[Jt]>999?Jt:-1,g(t)._overflowDayOfYear&&(e<$t||e>Wt)&&(e=Wt),g(t)._overflowWeeks&&-1===e&&(e=Xt),g(t)._overflowWeekday&&-1===e&&(e=Qt),g(t).overflow=e),t}var zn=/^\s*((?:[+-]\d{6}|\d{4})-(?:\d\d-\d\d|W\d\d-\d|W\d\d|\d\d\d|\d\d))(?:(T| )(\d\d(?::\d\d(?::\d\d(?:[.,]\d+)?)?)?)([+-]\d\d(?::?\d\d)?|\s*Z)?)?$/,wn=/^\s*((?:[+-]\d{6}|\d{4})(?:\d\d\d\d|W\d\d\d|W\d\d|\d\d\d|\d\d|))(?:(T| )(\d\d(?:\d\d(?:\d\d(?:[.,]\d+)?)?)?)([+-]\d\d(?::?\d\d)?|\s*Z)?)?$/,Ln=/Z|[+-]\d\d(?::?\d\d)?/,kn=[["YYYYYY-MM-DD",/[+-]\d{6}-\d\d-\d\d/],["YYYY-MM-DD",/\d{4}-\d\d-\d\d/],["GGGG-[W]WW-E",/\d{4}-W\d\d-\d/],["GGGG-[W]WW",/\d{4}-W\d\d/,!1],["YYYY-DDD",/\d{4}-\d{3}/],["YYYY-MM",/\d{4}-\d\d/,!1],["YYYYYYMMDD",/[+-]\d{10}/],["YYYYMMDD",/\d{8}/],["GGGG[W]WWE",/\d{4}W\d{3}/],["GGGG[W]WW",/\d{4}W\d{2}/,!1],["YYYYDDD",/\d{7}/],["YYYYMM",/\d{6}/,!1],["YYYY",/\d{4}/,!1]],Hn=[["HH:mm:ss.SSSS",/\d\d:\d\d:\d\d\.\d+/],["HH:mm:ss,SSSS",/\d\d:\d\d:\d\d,\d+/],["HH:mm:ss",/\d\d:\d\d:\d\d/],["HH:mm",/\d\d:\d\d/],["HHmmss.SSSS",/\d\d\d\d\d\d\.\d+/],["HHmmss,SSSS",/\d\d\d\d\d\d,\d+/],["HHmmss",/\d\d\d\d\d\d/],["HHmm",/\d\d\d\d/],["HH",/\d\d/]],Tn=/^\/?Date\((-?\d+)/i,Sn=/^(?:(Mon|Tue|Wed|Thu|Fri|Sat|Sun),?\s)?(\d{1,2})\s(Jan|Feb|Mar|Apr|May|Jun|Jul|Aug|Sep|Oct|Nov|Dec)\s(\d{2,4})\s(\d\d):(\d\d)(?::(\d\d))?\s(?:(UT|GMT|[ECMP][SD]T)|([Zz])|([+-]\d{4}))$/,An={UT:0,GMT:0,EDT:-240,EST:-300,CDT:-300,CST:-360,MDT:-360,MST:-420,PDT:-420,PST:-480};function On(t){var e,n,a,r,i,o,s=t._i,l=zn.exec(s)||wn.exec(s),c=kn.length,u=Hn.length;if(l){for(g(t).iso=!0,e=0,n=c;e<n;e++)if(kn[e][1].exec(l[1])){r=kn[e][0],a=!1!==kn[e][2];break}if(null==r)return void(t._isValid=!1);if(l[3]){for(e=0,n=u;e<n;e++)if(Hn[e][1].exec(l[3])){i=(l[2]||" ")+Hn[e][0];break}if(null==i)return void(t._isValid=!1)}if(!a&&null!=i)return void(t._isValid=!1);if(l[4]){if(!Ln.exec(l[4]))return void(t._isValid=!1);o="Z"}t._f=r+(i||"")+(o||""),Nn(t)}else t._isValid=!1}function Dn(t,e,n,a,r,i){var o=[Vn(t),ne.indexOf(e),parseInt(n,10),parseInt(a,10),parseInt(r,10)];return i&&o.push(parseInt(i,10)),o}function Vn(t){var e=parseInt(t,10);return e<=49?2e3+e:e<=999?1900+e:e}function Cn(t){return t.replace(/\([^()]*\)|[\n\t]/g," ").replace(/(\s\s+)/g," ").replace(/^\s\s*/,"").replace(/\s\s*$/,"")}function In(t,e,n){if(t){var a=Pe.indexOf(t),r=new Date(e[0],e[1],e[2]).getDay();if(a!==r)return g(n).weekdayMismatch=!0,n._isValid=!1,!1}return!0}function Pn(t,e,n){if(t)return An[t];if(e)return 0;var a=parseInt(n,10),r=a%100,i=(a-r)/100;return 60*i+r}function En(t){var e,n=Sn.exec(Cn(t._i));if(n){if(e=Dn(n[4],n[3],n[2],n[5],n[6],n[7]),!In(n[1],e,t))return;t._a=e,t._tzm=Pn(n[8],n[9],n[10]),t._d=be.apply(null,t._a),t._d.setUTCMinutes(t._d.getUTCMinutes()-t._tzm),g(t).rfc2822=!0}else t._isValid=!1}function Bn(t){var e=Tn.exec(t._i);null===e?(On(t),!1===t._isValid&&(delete t._isValid,En(t),!1===t._isValid&&(delete t._isValid,t._strict?t._isValid=!1:r.createFromInputFallback(t)))):t._d=new Date(+e[1])}function Fn(t,e,n){return null!=t?t:null!=e?e:n}function jn(t){var e=new Date(r.now());return t._useUTC?[e.getUTCFullYear(),e.getUTCMonth(),e.getUTCDate()]:[e.getFullYear(),e.getMonth(),e.getDate()]}function Yn(t){var e,n,a,r,i,o=[];if(!t._d){for(a=jn(t),t._w&&null==t._a[Wt]&&null==t._a[Ut]&&xn(t),null!=t._dayOfYear&&(i=Fn(t._a[$t],a[$t]),(t._dayOfYear>ve(i)||0===t._dayOfYear)&&(g(t)._overflowDayOfYear=!0),n=be(i,0,t._dayOfYear),t._a[Ut]=n.getUTCMonth(),t._a[Wt]=n.getUTCDate()),e=0;e<3&&null==t._a[e];++e)t._a[e]=o[e]=a[e];for(;e<7;e++)t._a[e]=o[e]=null==t._a[e]?2===e?1:0:t._a[e];24===t._a[Gt]&&0===t._a[qt]&&0===t._a[Kt]&&0===t._a[Jt]&&(t._nextDay=!0,t._a[Gt]=0),t._d=(t._useUTC?be:ye).apply(null,o),r=t._useUTC?t._d.getUTCDay():t._d.getDay(),null!=t._tzm&&t._d.setUTCMinutes(t._d.getUTCMinutes()-t._tzm),t._nextDay&&(t._a[Gt]=24),t._w&&"undefined"!==typeof t._w.d&&t._w.d!==r&&(g(t).weekdayMismatch=!0)}}function xn(t){var e,n,a,r,i,o,s,l,c;e=t._w,null!=e.GG||null!=e.W||null!=e.E?(i=1,o=4,n=Fn(e.GG,t._a[$t],we(Jn(),1,4).year),a=Fn(e.W,1),r=Fn(e.E,1),(r<1||r>7)&&(l=!0)):(i=t._locale._week.dow,o=t._locale._week.doy,c=we(Jn(),i,o),n=Fn(e.gg,t._a[$t],c.year),a=Fn(e.w,c.week),null!=e.d?(r=e.d,(r<0||r>6)&&(l=!0)):null!=e.e?(r=e.e+i,(e.e<0||e.e>6)&&(l=!0)):r=i),a<1||a>Le(n,i,o)?g(t)._overflowWeeks=!0:null!=l?g(t)._overflowWeekday=!0:(s=ze(n,a,r,i,o),t._a[$t]=s.year,t._dayOfYear=s.dayOfYear)}function Nn(t){if(t._f!==r.ISO_8601)if(t._f!==r.RFC_2822){t._a=[],g(t).empty=!0;var e,n,a,i,o,s,l,c=""+t._i,u=c.length,h=0;for(a=U(t._f,t._locale).match(B)||[],l=a.length,e=0;e<l;e++)i=a[e],n=(c.match(Et(i,t))||[])[0],n&&(o=c.substr(0,c.indexOf(n)),o.length>0&&g(t).unusedInput.push(o),c=c.slice(c.indexOf(n)+n.length),h+=n.length),Y[i]?(n?g(t).empty=!1:g(t).unusedTokens.push(i),Nt(i,n,t)):t._strict&&!n&&g(t).unusedTokens.push(i);g(t).charsLeftOver=u-h,c.length>0&&g(t).unusedInput.push(c),t._a[Gt]<=12&&!0===g(t).bigHour&&t._a[Gt]>0&&(g(t).bigHour=void 0),g(t).parsedDateParts=t._a.slice(0),g(t).meridiem=t._meridiem,t._a[Gt]=Rn(t._locale,t._a[Gt],t._meridiem),s=g(t).era,null!==s&&(t._a[$t]=t._locale.erasConvertYear(s,t._a[$t])),Yn(t),Mn(t)}else En(t);else On(t)}function Rn(t,e,n){var a;return null==n?e:null!=t.meridiemHour?t.meridiemHour(e,n):null!=t.isPM?(a=t.isPM(n),a&&e<12&&(e+=12),a||12!==e||(e=0),e):e}function $n(t){var e,n,a,r,i,o,s=!1,l=t._f.length;if(0===l)return g(t).invalidFormat=!0,void(t._d=new Date(NaN));for(r=0;r<l;r++)i=0,o=!1,e=z({},t),null!=t._useUTC&&(e._useUTC=t._useUTC),e._f=t._f[r],Nn(e),_(e)&&(o=!0),i+=g(e).charsLeftOver,i+=10*g(e).unusedTokens.length,g(e).score=i,s?i<a&&(a=i,n=e):(null==a||i<a||o)&&(a=i,n=e,o&&(s=!0));p(t,n||e)}function Un(t){if(!t._d){var e=it(t._i),n=void 0===e.day?e.date:e.day;t._a=f([e.year,e.month,n,e.hour,e.minute,e.second,e.millisecond],(function(t){return t&&parseInt(t,10)})),Yn(t)}}function Wn(t){var e=new w(Mn(Gn(t)));return e._nextDay&&(e.add(1,"d"),e._nextDay=void 0),e}function Gn(t){var e=t._i,n=t._f;return t._locale=t._locale||yn(t._l),null===e||void 0===n&&""===e?y({nullInput:!0}):("string"===typeof e&&(t._i=e=t._locale.preparse(e)),L(e)?new w(Mn(e)):(d(e)?t._d=e:o(n)?$n(t):n?Nn(t):qn(t),_(t)||(t._d=null),t))}function qn(t){var e=t._i;u(e)?t._d=new Date(r.now()):d(e)?t._d=new Date(e.valueOf()):"string"===typeof e?Bn(t):o(e)?(t._a=f(e.slice(0),(function(t){return parseInt(t,10)})),Yn(t)):s(e)?Un(t):h(e)?t._d=new Date(e):r.createFromInputFallback(t)}function Kn(t,e,n,a,r){var i={};return!0!==e&&!1!==e||(a=e,e=void 0),!0!==n&&!1!==n||(a=n,n=void 0),(s(t)&&c(t)||o(t)&&0===t.length)&&(t=void 0),i._isAMomentObject=!0,i._useUTC=i._isUTC=r,i._l=n,i._i=t,i._f=e,i._strict=a,Wn(i)}function Jn(t,e,n,a){return Kn(t,e,n,a,!1)}r.createFromInputFallback=H("value provided is not in a recognized RFC2822 or ISO format. moment construction falls back to js Date(), which is not reliable across all browsers and versions. Non RFC2822/ISO date formats are discouraged. Please refer to http://momentjs.com/guides/#/warnings/js-date/ for more info.",(function(t){t._d=new Date(t._i+(t._useUTC?" UTC":""))})),r.ISO_8601=function(){},r.RFC_2822=function(){};var Xn=H("moment().min is deprecated, use moment.max instead. http://momentjs.com/guides/#/warnings/min-max/",(function(){var t=Jn.apply(null,arguments);return this.isValid()&&t.isValid()?t<this?this:t:y()})),Qn=H("moment().max is deprecated, use moment.min instead. http://momentjs.com/guides/#/warnings/min-max/",(function(){var t=Jn.apply(null,arguments);return this.isValid()&&t.isValid()?t>this?this:t:y()}));function Zn(t,e){var n,a;if(1===e.length&&o(e[0])&&(e=e[0]),!e.length)return Jn();for(n=e[0],a=1;a<e.length;++a)e[a].isValid()&&!e[a][t](n)||(n=e[a]);return n}function ta(){var t=[].slice.call(arguments,0);return Zn("isBefore",t)}function ea(){var t=[].slice.call(arguments,0);return Zn("isAfter",t)}var na=function(){return Date.now?Date.now():+new Date},aa=["year","quarter","month","week","day","hour","minute","second","millisecond"];function ra(t){var e,n,a=!1,r=aa.length;for(e in t)if(l(t,e)&&(-1===Rt.call(aa,e)||null!=t[e]&&isNaN(t[e])))return!1;for(n=0;n<r;++n)if(t[aa[n]]){if(a)return!1;parseFloat(t[aa[n]])!==ht(t[aa[n]])&&(a=!0)}return!0}function ia(){return this._isValid}function oa(){return Aa(NaN)}function sa(t){var e=it(t),n=e.year||0,a=e.quarter||0,r=e.month||0,i=e.week||e.isoWeek||0,o=e.day||0,s=e.hour||0,l=e.minute||0,c=e.second||0,u=e.millisecond||0;this._isValid=ra(e),this._milliseconds=+u+1e3*c+6e4*l+1e3*s*60*60,this._days=+o+7*i,this._months=+r+3*a+12*n,this._data={},this._locale=yn(),this._bubble()}function la(t){return t instanceof sa}function ca(t){return t<0?-1*Math.round(-1*t):Math.round(t)}function ua(t,e,n){var a,r=Math.min(t.length,e.length),i=Math.abs(t.length-e.length),o=0;for(a=0;a<r;a++)(n&&t[a]!==e[a]||!n&&ht(t[a])!==ht(e[a]))&&o++;return o+i}function ha(t,e){x(t,0,0,(function(){var t=this.utcOffset(),n="+";return t<0&&(t=-t,n="-"),n+E(~~(t/60),2)+e+E(~~t%60,2)}))}ha("Z",":"),ha("ZZ",""),Pt("Z",Vt),Pt("ZZ",Vt),Yt(["Z","ZZ"],(function(t,e,n){n._useUTC=!0,n._tzm=fa(Vt,t)}));var da=/([\+\-]|\d\d)/gi;function fa(t,e){var n,a,r,i=(e||"").match(t);return null===i?null:(n=i[i.length-1]||[],a=(n+"").match(da)||["-",0,0],r=60*a[1]+ht(a[2]),0===r?0:"+"===a[0]?r:-r)}function pa(t,e){var n,a;return e._isUTC?(n=e.clone(),a=(L(t)||d(t)?t.valueOf():Jn(t).valueOf())-n.valueOf(),n._d.setTime(n._d.valueOf()+a),r.updateOffset(n,!1),n):Jn(t).local()}function ma(t){return-Math.round(t._d.getTimezoneOffset())}function va(t,e,n){var a,i=this._offset||0;if(!this.isValid())return null!=t?this:NaN;if(null!=t){if("string"===typeof t){if(t=fa(Vt,t),null===t)return this}else Math.abs(t)<16&&!n&&(t*=60);return!this._isUTC&&e&&(a=ma(this)),this._offset=t,this._isUTC=!0,null!=a&&this.add(a,"m"),i!==t&&(!e||this._changeInProgress?Ia(this,Aa(t-i,"m"),1,!1):this._changeInProgress||(this._changeInProgress=!0,r.updateOffset(this,!0),this._changeInProgress=null)),this}return this._isUTC?i:ma(this)}function ga(t,e){return null!=t?("string"!==typeof t&&(t=-t),this.utcOffset(t,e),this):-this.utcOffset()}function _a(t){return this.utcOffset(0,t)}function ya(t){return this._isUTC&&(this.utcOffset(0,t),this._isUTC=!1,t&&this.subtract(ma(this),"m")),this}function ba(){if(null!=this._tzm)this.utcOffset(this._tzm,!1,!0);else if("string"===typeof this._i){var t=fa(Dt,this._i);null!=t?this.utcOffset(t):this.utcOffset(0,!0)}return this}function Ma(t){return!!this.isValid()&&(t=t?Jn(t).utcOffset():0,(this.utcOffset()-t)%60===0)}function za(){return this.utcOffset()>this.clone().month(0).utcOffset()||this.utcOffset()>this.clone().month(5).utcOffset()}function wa(){if(!u(this._isDSTShifted))return this._isDSTShifted;var t,e={};return z(e,this),e=Gn(e),e._a?(t=e._isUTC?m(e._a):Jn(e._a),this._isDSTShifted=this.isValid()&&ua(e._a,t.toArray())>0):this._isDSTShifted=!1,this._isDSTShifted}function La(){return!!this.isValid()&&!this._isUTC}function ka(){return!!this.isValid()&&this._isUTC}function Ha(){return!!this.isValid()&&(this._isUTC&&0===this._offset)}r.updateOffset=function(){};var Ta=/^(-|\+)?(?:(\d*)[. ])?(\d+):(\d+)(?::(\d+)(\.\d*)?)?$/,Sa=/^(-|\+)?P(?:([-+]?[0-9,.]*)Y)?(?:([-+]?[0-9,.]*)M)?(?:([-+]?[0-9,.]*)W)?(?:([-+]?[0-9,.]*)D)?(?:T(?:([-+]?[0-9,.]*)H)?(?:([-+]?[0-9,.]*)M)?(?:([-+]?[0-9,.]*)S)?)?$/;function Aa(t,e){var n,a,r,i=t,o=null;return la(t)?i={ms:t._milliseconds,d:t._days,M:t._months}:h(t)||!isNaN(+t)?(i={},e?i[e]=+t:i.milliseconds=+t):(o=Ta.exec(t))?(n="-"===o[1]?-1:1,i={y:0,d:ht(o[Wt])*n,h:ht(o[Gt])*n,m:ht(o[qt])*n,s:ht(o[Kt])*n,ms:ht(ca(1e3*o[Jt]))*n}):(o=Sa.exec(t))?(n="-"===o[1]?-1:1,i={y:Oa(o[2],n),M:Oa(o[3],n),w:Oa(o[4],n),d:Oa(o[5],n),h:Oa(o[6],n),m:Oa(o[7],n),s:Oa(o[8],n)}):null==i?i={}:"object"===typeof i&&("from"in i||"to"in i)&&(r=Va(Jn(i.from),Jn(i.to)),i={},i.ms=r.milliseconds,i.M=r.months),a=new sa(i),la(t)&&l(t,"_locale")&&(a._locale=t._locale),la(t)&&l(t,"_isValid")&&(a._isValid=t._isValid),a}function Oa(t,e){var n=t&&parseFloat(t.replace(",","."));return(isNaN(n)?0:n)*e}function Da(t,e){var n={};return n.months=e.month()-t.month()+12*(e.year()-t.year()),t.clone().add(n.months,"M").isAfter(e)&&--n.months,n.milliseconds=+e-+t.clone().add(n.months,"M"),n}function Va(t,e){var n;return t.isValid()&&e.isValid()?(e=pa(e,t),t.isBefore(e)?n=Da(t,e):(n=Da(e,t),n.milliseconds=-n.milliseconds,n.months=-n.months),n):{milliseconds:0,months:0}}function Ca(t,e){return function(n,a){var r,i;return null===a||isNaN(+a)||(A(e,"moment()."+e+"(period, number) is deprecated. Please use moment()."+e+"(number, period). See http://momentjs.com/guides/#/warnings/add-inverted-param/ for more info."),i=n,n=a,a=i),r=Aa(n,a),Ia(this,r,t),this}}function Ia(t,e,n,a){var i=e._milliseconds,o=ca(e._days),s=ca(e._months);t.isValid()&&(a=null==a||a,s&&ue(t,ft(t,"Month")+s*n),o&&pt(t,"Date",ft(t,"Date")+o*n),i&&t._d.setTime(t._d.valueOf()+i*n),a&&r.updateOffset(t,o||s))}Aa.fn=sa.prototype,Aa.invalid=oa;var Pa=Ca(1,"add"),Ea=Ca(-1,"subtract");function Ba(t){return"string"===typeof t||t instanceof String}function Fa(t){return L(t)||d(t)||Ba(t)||h(t)||Ya(t)||ja(t)||null===t||void 0===t}function ja(t){var e,n,a=s(t)&&!c(t),r=!1,i=["years","year","y","months","month","M","days","day","d","dates","date","D","hours","hour","h","minutes","minute","m","seconds","second","s","milliseconds","millisecond","ms"],o=i.length;for(e=0;e<o;e+=1)n=i[e],r=r||l(t,n);return a&&r}function Ya(t){var e=o(t),n=!1;return e&&(n=0===t.filter((function(e){return!h(e)&&Ba(t)})).length),e&&n}function xa(t){var e,n,a=s(t)&&!c(t),r=!1,i=["sameDay","nextDay","lastDay","nextWeek","lastWeek","sameElse"];for(e=0;e<i.length;e+=1)n=i[e],r=r||l(t,n);return a&&r}function Na(t,e){var n=t.diff(e,"days",!0);return n<-6?"sameElse":n<-1?"lastWeek":n<0?"lastDay":n<1?"sameDay":n<2?"nextDay":n<7?"nextWeek":"sameElse"}function Ra(t,e){1===arguments.length&&(arguments[0]?Fa(arguments[0])?(t=arguments[0],e=void 0):xa(arguments[0])&&(e=arguments[0],t=void 0):(t=void 0,e=void 0));var n=t||Jn(),a=pa(n,this).startOf("day"),i=r.calendarFormat(this,a)||"sameElse",o=e&&(O(e[i])?e[i].call(this,n):e[i]);return this.format(o||this.localeData().calendar(i,this,Jn(n)))}function $a(){return new w(this)}function Ua(t,e){var n=L(t)?t:Jn(t);return!(!this.isValid()||!n.isValid())&&(e=rt(e)||"millisecond","millisecond"===e?this.valueOf()>n.valueOf():n.valueOf()<this.clone().startOf(e).valueOf())}function Wa(t,e){var n=L(t)?t:Jn(t);return!(!this.isValid()||!n.isValid())&&(e=rt(e)||"millisecond","millisecond"===e?this.valueOf()<n.valueOf():this.clone().endOf(e).valueOf()<n.valueOf())}function Ga(t,e,n,a){var r=L(t)?t:Jn(t),i=L(e)?e:Jn(e);return!!(this.isValid()&&r.isValid()&&i.isValid())&&(a=a||"()",("("===a[0]?this.isAfter(r,n):!this.isBefore(r,n))&&(")"===a[1]?this.isBefore(i,n):!this.isAfter(i,n)))}function qa(t,e){var n,a=L(t)?t:Jn(t);return!(!this.isValid()||!a.isValid())&&(e=rt(e)||"millisecond","millisecond"===e?this.valueOf()===a.valueOf():(n=a.valueOf(),this.clone().startOf(e).valueOf()<=n&&n<=this.clone().endOf(e).valueOf()))}function Ka(t,e){return this.isSame(t,e)||this.isAfter(t,e)}function Ja(t,e){return this.isSame(t,e)||this.isBefore(t,e)}function Xa(t,e,n){var a,r,i;if(!this.isValid())return NaN;if(a=pa(t,this),!a.isValid())return NaN;switch(r=6e4*(a.utcOffset()-this.utcOffset()),e=rt(e),e){case"year":i=Qa(this,a)/12;break;case"month":i=Qa(this,a);break;case"quarter":i=Qa(this,a)/3;break;case"second":i=(this-a)/1e3;break;case"minute":i=(this-a)/6e4;break;case"hour":i=(this-a)/36e5;break;case"day":i=(this-a-r)/864e5;break;case"week":i=(this-a-r)/6048e5;break;default:i=this-a}return n?i:ut(i)}function Qa(t,e){if(t.date()<e.date())return-Qa(e,t);var n,a,r=12*(e.year()-t.year())+(e.month()-t.month()),i=t.clone().add(r,"months");return e-i<0?(n=t.clone().add(r-1,"months"),a=(e-i)/(i-n)):(n=t.clone().add(r+1,"months"),a=(e-i)/(n-i)),-(r+a)||0}function Za(){return this.clone().locale("en").format("ddd MMM DD YYYY HH:mm:ss [GMT]ZZ")}function tr(t){if(!this.isValid())return null;var e=!0!==t,n=e?this.clone().utc():this;return n.year()<0||n.year()>9999?$(n,e?"YYYYYY-MM-DD[T]HH:mm:ss.SSS[Z]":"YYYYYY-MM-DD[T]HH:mm:ss.SSSZ"):O(Date.prototype.toISOString)?e?this.toDate().toISOString():new Date(this.valueOf()+60*this.utcOffset()*1e3).toISOString().replace("Z",$(n,"Z")):$(n,e?"YYYY-MM-DD[T]HH:mm:ss.SSS[Z]":"YYYY-MM-DD[T]HH:mm:ss.SSSZ")}function er(){if(!this.isValid())return"moment.invalid(/* "+this._i+" */)";var t,e,n,a,r="moment",i="";return this.isLocal()||(r=0===this.utcOffset()?"moment.utc":"moment.parseZone",i="Z"),t="["+r+'("]',e=0<=this.year()&&this.year()<=9999?"YYYY":"YYYYYY",n="-MM-DD[T]HH:mm:ss.SSS",a=i+'[")]',this.format(t+e+n+a)}function nr(t){t||(t=this.isUtc()?r.defaultFormatUtc:r.defaultFormat);var e=$(this,t);return this.localeData().postformat(e)}function ar(t,e){return this.isValid()&&(L(t)&&t.isValid()||Jn(t).isValid())?Aa({to:this,from:t}).locale(this.locale()).humanize(!e):this.localeData().invalidDate()}function rr(t){return this.from(Jn(),t)}function ir(t,e){return this.isValid()&&(L(t)&&t.isValid()||Jn(t).isValid())?Aa({from:this,to:t}).locale(this.locale()).humanize(!e):this.localeData().invalidDate()}function or(t){return this.to(Jn(),t)}function sr(t){var e;return void 0===t?this._locale._abbr:(e=yn(t),null!=e&&(this._locale=e),this)}r.defaultFormat="YYYY-MM-DDTHH:mm:ssZ",r.defaultFormatUtc="YYYY-MM-DDTHH:mm:ss[Z]";var lr=H("moment().lang() is deprecated. Instead, use moment().localeData() to get the language configuration. Use moment().locale() to change languages.",(function(t){return void 0===t?this.localeData():this.locale(t)}));function cr(){return this._locale}var ur=1e3,hr=60*ur,dr=60*hr,fr=3506328*dr;function pr(t,e){return(t%e+e)%e}function mr(t,e,n){return t<100&&t>=0?new Date(t+400,e,n)-fr:new Date(t,e,n).valueOf()}function vr(t,e,n){return t<100&&t>=0?Date.UTC(t+400,e,n)-fr:Date.UTC(t,e,n)}function gr(t){var e,n;if(t=rt(t),void 0===t||"millisecond"===t||!this.isValid())return this;switch(n=this._isUTC?vr:mr,t){case"year":e=n(this.year(),0,1);break;case"quarter":e=n(this.year(),this.month()-this.month()%3,1);break;case"month":e=n(this.year(),this.month(),1);break;case"week":e=n(this.year(),this.month(),this.date()-this.weekday());break;case"isoWeek":e=n(this.year(),this.month(),this.date()-(this.isoWeekday()-1));break;case"day":case"date":e=n(this.year(),this.month(),this.date());break;case"hour":e=this._d.valueOf(),e-=pr(e+(this._isUTC?0:this.utcOffset()*hr),dr);break;case"minute":e=this._d.valueOf(),e-=pr(e,hr);break;case"second":e=this._d.valueOf(),e-=pr(e,ur);break}return this._d.setTime(e),r.updateOffset(this,!0),this}function _r(t){var e,n;if(t=rt(t),void 0===t||"millisecond"===t||!this.isValid())return this;switch(n=this._isUTC?vr:mr,t){case"year":e=n(this.year()+1,0,1)-1;break;case"quarter":e=n(this.year(),this.month()-this.month()%3+3,1)-1;break;case"month":e=n(this.year(),this.month()+1,1)-1;break;case"week":e=n(this.year(),this.month(),this.date()-this.weekday()+7)-1;break;case"isoWeek":e=n(this.year(),this.month(),this.date()-(this.isoWeekday()-1)+7)-1;break;case"day":case"date":e=n(this.year(),this.month(),this.date()+1)-1;break;case"hour":e=this._d.valueOf(),e+=dr-pr(e+(this._isUTC?0:this.utcOffset()*hr),dr)-1;break;case"minute":e=this._d.valueOf(),e+=hr-pr(e,hr)-1;break;case"second":e=this._d.valueOf(),e+=ur-pr(e,ur)-1;break}return this._d.setTime(e),r.updateOffset(this,!0),this}function yr(){return this._d.valueOf()-6e4*(this._offset||0)}function br(){return Math.floor(this.valueOf()/1e3)}function Mr(){return new Date(this.valueOf())}function zr(){var t=this;return[t.year(),t.month(),t.date(),t.hour(),t.minute(),t.second(),t.millisecond()]}function wr(){var t=this;return{years:t.year(),months:t.month(),date:t.date(),hours:t.hours(),minutes:t.minutes(),seconds:t.seconds(),milliseconds:t.milliseconds()}}function Lr(){return this.isValid()?this.toISOString():null}function kr(){return _(this)}function Hr(){return p({},g(this))}function Tr(){return g(this).overflow}function Sr(){return{input:this._i,format:this._f,locale:this._locale,isUTC:this._isUTC,strict:this._strict}}function Ar(t,e){var n,a,i,o=this._eras||yn("en")._eras;for(n=0,a=o.length;n<a;++n){switch(typeof o[n].since){case"string":i=r(o[n].since).startOf("day"),o[n].since=i.valueOf();break}switch(typeof o[n].until){case"undefined":o[n].until=1/0;break;case"string":i=r(o[n].until).startOf("day").valueOf(),o[n].until=i.valueOf();break}}return o}function Or(t,e,n){var a,r,i,o,s,l=this.eras();for(t=t.toUpperCase(),a=0,r=l.length;a<r;++a)if(i=l[a].name.toUpperCase(),o=l[a].abbr.toUpperCase(),s=l[a].narrow.toUpperCase(),n)switch(e){case"N":case"NN":case"NNN":if(o===t)return l[a];break;case"NNNN":if(i===t)return l[a];break;case"NNNNN":if(s===t)return l[a];break}else if([i,o,s].indexOf(t)>=0)return l[a]}function Dr(t,e){var n=t.since<=t.until?1:-1;return void 0===e?r(t.since).year():r(t.since).year()+(e-t.offset)*n}function Vr(){var t,e,n,a=this.localeData().eras();for(t=0,e=a.length;t<e;++t){if(n=this.clone().startOf("day").valueOf(),a[t].since<=n&&n<=a[t].until)return a[t].name;if(a[t].until<=n&&n<=a[t].since)return a[t].name}return""}function Cr(){var t,e,n,a=this.localeData().eras();for(t=0,e=a.length;t<e;++t){if(n=this.clone().startOf("day").valueOf(),a[t].since<=n&&n<=a[t].until)return a[t].narrow;if(a[t].until<=n&&n<=a[t].since)return a[t].narrow}return""}function Ir(){var t,e,n,a=this.localeData().eras();for(t=0,e=a.length;t<e;++t){if(n=this.clone().startOf("day").valueOf(),a[t].since<=n&&n<=a[t].until)return a[t].abbr;if(a[t].until<=n&&n<=a[t].since)return a[t].abbr}return""}function Pr(){var t,e,n,a,i=this.localeData().eras();for(t=0,e=i.length;t<e;++t)if(n=i[t].since<=i[t].until?1:-1,a=this.clone().startOf("day").valueOf(),i[t].since<=a&&a<=i[t].until||i[t].until<=a&&a<=i[t].since)return(this.year()-r(i[t].since).year())*n+i[t].offset;return this.year()}function Er(t){return l(this,"_erasNameRegex")||Rr.call(this),t?this._erasNameRegex:this._erasRegex}function Br(t){return l(this,"_erasAbbrRegex")||Rr.call(this),t?this._erasAbbrRegex:this._erasRegex}function Fr(t){return l(this,"_erasNarrowRegex")||Rr.call(this),t?this._erasNarrowRegex:this._erasRegex}function jr(t,e){return e.erasAbbrRegex(t)}function Yr(t,e){return e.erasNameRegex(t)}function xr(t,e){return e.erasNarrowRegex(t)}function Nr(t,e){return e._eraYearOrdinalRegex||At}function Rr(){var t,e,n=[],a=[],r=[],i=[],o=this.eras();for(t=0,e=o.length;t<e;++t)a.push(Ft(o[t].name)),n.push(Ft(o[t].abbr)),r.push(Ft(o[t].narrow)),i.push(Ft(o[t].name)),i.push(Ft(o[t].abbr)),i.push(Ft(o[t].narrow));this._erasRegex=new RegExp("^("+i.join("|")+")","i"),this._erasNameRegex=new RegExp("^("+a.join("|")+")","i"),this._erasAbbrRegex=new RegExp("^("+n.join("|")+")","i"),this._erasNarrowRegex=new RegExp("^("+r.join("|")+")","i")}function $r(t,e){x(0,[t,t.length],0,e)}function Ur(t){return Xr.call(this,t,this.week(),this.weekday(),this.localeData()._week.dow,this.localeData()._week.doy)}function Wr(t){return Xr.call(this,t,this.isoWeek(),this.isoWeekday(),1,4)}function Gr(){return Le(this.year(),1,4)}function qr(){return Le(this.isoWeekYear(),1,4)}function Kr(){var t=this.localeData()._week;return Le(this.year(),t.dow,t.doy)}function Jr(){var t=this.localeData()._week;return Le(this.weekYear(),t.dow,t.doy)}function Xr(t,e,n,a,r){var i;return null==t?we(this,a,r).year:(i=Le(t,a,r),e>i&&(e=i),Qr.call(this,t,e,n,a,r))}function Qr(t,e,n,a,r){var i=ze(t,e,n,a,r),o=be(i.year,0,i.dayOfYear);return this.year(o.getUTCFullYear()),this.month(o.getUTCMonth()),this.date(o.getUTCDate()),this}function Zr(t){return null==t?Math.ceil((this.month()+1)/3):this.month(3*(t-1)+this.month()%3)}x("N",0,0,"eraAbbr"),x("NN",0,0,"eraAbbr"),x("NNN",0,0,"eraAbbr"),x("NNNN",0,0,"eraName"),x("NNNNN",0,0,"eraNarrow"),x("y",["y",1],"yo","eraYear"),x("y",["yy",2],0,"eraYear"),x("y",["yyy",3],0,"eraYear"),x("y",["yyyy",4],0,"eraYear"),Pt("N",jr),Pt("NN",jr),Pt("NNN",jr),Pt("NNNN",Yr),Pt("NNNNN",xr),Yt(["N","NN","NNN","NNNN","NNNNN"],(function(t,e,n,a){var r=n._locale.erasParse(t,a,n._strict);r?g(n).era=r:g(n).invalidEra=t})),Pt("y",At),Pt("yy",At),Pt("yyy",At),Pt("yyyy",At),Pt("yo",Nr),Yt(["y","yy","yyy","yyyy"],$t),Yt(["yo"],(function(t,e,n,a){var r;n._locale._eraYearOrdinalRegex&&(r=t.match(n._locale._eraYearOrdinalRegex)),n._locale.eraYearOrdinalParse?e[$t]=n._locale.eraYearOrdinalParse(t,r):e[$t]=parseInt(t,10)})),x(0,["gg",2],0,(function(){return this.weekYear()%100})),x(0,["GG",2],0,(function(){return this.isoWeekYear()%100})),$r("gggg","weekYear"),$r("ggggg","weekYear"),$r("GGGG","isoWeekYear"),$r("GGGGG","isoWeekYear"),at("weekYear","gg"),at("isoWeekYear","GG"),st("weekYear",1),st("isoWeekYear",1),Pt("G",Ot),Pt("g",Ot),Pt("GG",wt,yt),Pt("gg",wt,yt),Pt("GGGG",Tt,Mt),Pt("gggg",Tt,Mt),Pt("GGGGG",St,zt),Pt("ggggg",St,zt),xt(["gggg","ggggg","GGGG","GGGGG"],(function(t,e,n,a){e[a.substr(0,2)]=ht(t)})),xt(["gg","GG"],(function(t,e,n,a){e[a]=r.parseTwoDigitYear(t)})),x("Q",0,"Qo","quarter"),at("quarter","Q"),st("quarter",7),Pt("Q",_t),Yt("Q",(function(t,e){e[Ut]=3*(ht(t)-1)})),x("D",["DD",2],"Do","date"),at("date","D"),st("date",9),Pt("D",wt),Pt("DD",wt,yt),Pt("Do",(function(t,e){return t?e._dayOfMonthOrdinalParse||e._ordinalParse:e._dayOfMonthOrdinalParseLenient})),Yt(["D","DD"],Wt),Yt("Do",(function(t,e){e[Wt]=ht(t.match(wt)[0])}));var ti=dt("Date",!0);function ei(t){var e=Math.round((this.clone().startOf("day")-this.clone().startOf("year"))/864e5)+1;return null==t?e:this.add(t-e,"d")}x("DDD",["DDDD",3],"DDDo","dayOfYear"),at("dayOfYear","DDD"),st("dayOfYear",4),Pt("DDD",Ht),Pt("DDDD",bt),Yt(["DDD","DDDD"],(function(t,e,n){n._dayOfYear=ht(t)})),x("m",["mm",2],0,"minute"),at("minute","m"),st("minute",14),Pt("m",wt),Pt("mm",wt,yt),Yt(["m","mm"],qt);var ni=dt("Minutes",!1);x("s",["ss",2],0,"second"),at("second","s"),st("second",15),Pt("s",wt),Pt("ss",wt,yt),Yt(["s","ss"],Kt);var ai,ri,ii=dt("Seconds",!1);for(x("S",0,0,(function(){return~~(this.millisecond()/100)})),x(0,["SS",2],0,(function(){return~~(this.millisecond()/10)})),x(0,["SSS",3],0,"millisecond"),x(0,["SSSS",4],0,(function(){return 10*this.millisecond()})),x(0,["SSSSS",5],0,(function(){return 100*this.millisecond()})),x(0,["SSSSSS",6],0,(function(){return 1e3*this.millisecond()})),x(0,["SSSSSSS",7],0,(function(){return 1e4*this.millisecond()})),x(0,["SSSSSSSS",8],0,(function(){return 1e5*this.millisecond()})),x(0,["SSSSSSSSS",9],0,(function(){return 1e6*this.millisecond()})),at("millisecond","ms"),st("millisecond",16),Pt("S",Ht,_t),Pt("SS",Ht,yt),Pt("SSS",Ht,bt),ai="SSSS";ai.length<=9;ai+="S")Pt(ai,At);function oi(t,e){e[Jt]=ht(1e3*("0."+t))}for(ai="S";ai.length<=9;ai+="S")Yt(ai,oi);function si(){return this._isUTC?"UTC":""}function li(){return this._isUTC?"Coordinated Universal Time":""}ri=dt("Milliseconds",!1),x("z",0,0,"zoneAbbr"),x("zz",0,0,"zoneName");var ci=w.prototype;function ui(t){return Jn(1e3*t)}function hi(){return Jn.apply(null,arguments).parseZone()}function di(t){return t}ci.add=Pa,ci.calendar=Ra,ci.clone=$a,ci.diff=Xa,ci.endOf=_r,ci.format=nr,ci.from=ar,ci.fromNow=rr,ci.to=ir,ci.toNow=or,ci.get=mt,ci.invalidAt=Tr,ci.isAfter=Ua,ci.isBefore=Wa,ci.isBetween=Ga,ci.isSame=qa,ci.isSameOrAfter=Ka,ci.isSameOrBefore=Ja,ci.isValid=kr,ci.lang=lr,ci.locale=sr,ci.localeData=cr,ci.max=Qn,ci.min=Xn,ci.parsingFlags=Hr,ci.set=vt,ci.startOf=gr,ci.subtract=Ea,ci.toArray=zr,ci.toObject=wr,ci.toDate=Mr,ci.toISOString=tr,ci.inspect=er,"undefined"!==typeof Symbol&&null!=Symbol.for&&(ci[Symbol.for("nodejs.util.inspect.custom")]=function(){return"Moment<"+this.format()+">"}),ci.toJSON=Lr,ci.toString=Za,ci.unix=br,ci.valueOf=yr,ci.creationData=Sr,ci.eraName=Vr,ci.eraNarrow=Cr,ci.eraAbbr=Ir,ci.eraYear=Pr,ci.year=ge,ci.isLeapYear=_e,ci.weekYear=Ur,ci.isoWeekYear=Wr,ci.quarter=ci.quarters=Zr,ci.month=he,ci.daysInMonth=de,ci.week=ci.weeks=Ae,ci.isoWeek=ci.isoWeeks=Oe,ci.weeksInYear=Kr,ci.weeksInWeekYear=Jr,ci.isoWeeksInYear=Gr,ci.isoWeeksInISOWeekYear=qr,ci.date=ti,ci.day=ci.days=Ue,ci.weekday=We,ci.isoWeekday=Ge,ci.dayOfYear=ei,ci.hour=ci.hours=rn,ci.minute=ci.minutes=ni,ci.second=ci.seconds=ii,ci.millisecond=ci.milliseconds=ri,ci.utcOffset=va,ci.utc=_a,ci.local=ya,ci.parseZone=ba,ci.hasAlignedHourOffset=Ma,ci.isDST=za,ci.isLocal=La,ci.isUtcOffset=ka,ci.isUtc=Ha,ci.isUTC=Ha,ci.zoneAbbr=si,ci.zoneName=li,ci.dates=H("dates accessor is deprecated. Use date instead.",ti),ci.months=H("months accessor is deprecated. Use month instead",he),ci.years=H("years accessor is deprecated. Use year instead",ge),ci.zone=H("moment().zone is deprecated, use moment().utcOffset instead. http://momentjs.com/guides/#/warnings/zone/",ga),ci.isDSTShifted=H("isDSTShifted is deprecated. See http://momentjs.com/guides/#/warnings/dst-shifted/ for more information",wa);var fi=C.prototype;function pi(t,e,n,a){var r=yn(),i=m().set(a,e);return r[n](i,t)}function mi(t,e,n){if(h(t)&&(e=t,t=void 0),t=t||"",null!=e)return pi(t,e,n,"month");var a,r=[];for(a=0;a<12;a++)r[a]=pi(t,a,n,"month");return r}function vi(t,e,n,a){"boolean"===typeof t?(h(e)&&(n=e,e=void 0),e=e||""):(e=t,n=e,t=!1,h(e)&&(n=e,e=void 0),e=e||"");var r,i=yn(),o=t?i._week.dow:0,s=[];if(null!=n)return pi(e,(n+o)%7,a,"day");for(r=0;r<7;r++)s[r]=pi(e,(r+o)%7,a,"day");return s}function gi(t,e){return mi(t,e,"months")}function _i(t,e){return mi(t,e,"monthsShort")}function yi(t,e,n){return vi(t,e,n,"weekdays")}function bi(t,e,n){return vi(t,e,n,"weekdaysShort")}function Mi(t,e,n){return vi(t,e,n,"weekdaysMin")}fi.calendar=P,fi.longDateFormat=G,fi.invalidDate=K,fi.ordinal=Q,fi.preparse=di,fi.postformat=di,fi.relativeTime=tt,fi.pastFuture=et,fi.set=D,fi.eras=Ar,fi.erasParse=Or,fi.erasConvertYear=Dr,fi.erasAbbrRegex=Br,fi.erasNameRegex=Er,fi.erasNarrowRegex=Fr,fi.months=oe,fi.monthsShort=se,fi.monthsParse=ce,fi.monthsRegex=pe,fi.monthsShortRegex=fe,fi.week=ke,fi.firstDayOfYear=Se,fi.firstDayOfWeek=Te,fi.weekdays=Ye,fi.weekdaysMin=Ne,fi.weekdaysShort=xe,fi.weekdaysParse=$e,fi.weekdaysRegex=qe,fi.weekdaysShortRegex=Ke,fi.weekdaysMinRegex=Je,fi.isPM=nn,fi.meridiem=on,vn("en",{eras:[{since:"0001-01-01",until:1/0,offset:1,name:"Anno Domini",narrow:"AD",abbr:"AD"},{since:"0000-12-31",until:-1/0,offset:1,name:"Before Christ",narrow:"BC",abbr:"BC"}],dayOfMonthOrdinalParse:/\d{1,2}(th|st|nd|rd)/,ordinal:function(t){var e=t%10,n=1===ht(t%100/10)?"th":1===e?"st":2===e?"nd":3===e?"rd":"th";return t+n}}),r.lang=H("moment.lang is deprecated. Use moment.locale instead.",vn),r.langData=H("moment.langData is deprecated. Use moment.localeData instead.",yn);var zi=Math.abs;function wi(){var t=this._data;return this._milliseconds=zi(this._milliseconds),this._days=zi(this._days),this._months=zi(this._months),t.milliseconds=zi(t.milliseconds),t.seconds=zi(t.seconds),t.minutes=zi(t.minutes),t.hours=zi(t.hours),t.months=zi(t.months),t.years=zi(t.years),this}function Li(t,e,n,a){var r=Aa(e,n);return t._milliseconds+=a*r._milliseconds,t._days+=a*r._days,t._months+=a*r._months,t._bubble()}function ki(t,e){return Li(this,t,e,1)}function Hi(t,e){return Li(this,t,e,-1)}function Ti(t){return t<0?Math.floor(t):Math.ceil(t)}function Si(){var t,e,n,a,r,i=this._milliseconds,o=this._days,s=this._months,l=this._data;return i>=0&&o>=0&&s>=0||i<=0&&o<=0&&s<=0||(i+=864e5*Ti(Oi(s)+o),o=0,s=0),l.milliseconds=i%1e3,t=ut(i/1e3),l.seconds=t%60,e=ut(t/60),l.minutes=e%60,n=ut(e/60),l.hours=n%24,o+=ut(n/24),r=ut(Ai(o)),s+=r,o-=Ti(Oi(r)),a=ut(s/12),s%=12,l.days=o,l.months=s,l.years=a,this}function Ai(t){return 4800*t/146097}function Oi(t){return 146097*t/4800}function Di(t){if(!this.isValid())return NaN;var e,n,a=this._milliseconds;if(t=rt(t),"month"===t||"quarter"===t||"year"===t)switch(e=this._days+a/864e5,n=this._months+Ai(e),t){case"month":return n;case"quarter":return n/3;case"year":return n/12}else switch(e=this._days+Math.round(Oi(this._months)),t){case"week":return e/7+a/6048e5;case"day":return e+a/864e5;case"hour":return 24*e+a/36e5;case"minute":return 1440*e+a/6e4;case"second":return 86400*e+a/1e3;case"millisecond":return Math.floor(864e5*e)+a;default:throw new Error("Unknown unit "+t)}}function Vi(){return this.isValid()?this._milliseconds+864e5*this._days+this._months%12*2592e6+31536e6*ht(this._months/12):NaN}function Ci(t){return function(){return this.as(t)}}var Ii=Ci("ms"),Pi=Ci("s"),Ei=Ci("m"),Bi=Ci("h"),Fi=Ci("d"),ji=Ci("w"),Yi=Ci("M"),xi=Ci("Q"),Ni=Ci("y");function Ri(){return Aa(this)}function $i(t){return t=rt(t),this.isValid()?this[t+"s"]():NaN}function Ui(t){return function(){return this.isValid()?this._data[t]:NaN}}var Wi=Ui("milliseconds"),Gi=Ui("seconds"),qi=Ui("minutes"),Ki=Ui("hours"),Ji=Ui("days"),Xi=Ui("months"),Qi=Ui("years");function Zi(){return ut(this.days()/7)}var to=Math.round,eo={ss:44,s:45,m:45,h:22,d:26,w:null,M:11};function no(t,e,n,a,r){return r.relativeTime(e||1,!!n,t,a)}function ao(t,e,n,a){var r=Aa(t).abs(),i=to(r.as("s")),o=to(r.as("m")),s=to(r.as("h")),l=to(r.as("d")),c=to(r.as("M")),u=to(r.as("w")),h=to(r.as("y")),d=i<=n.ss&&["s",i]||i<n.s&&["ss",i]||o<=1&&["m"]||o<n.m&&["mm",o]||s<=1&&["h"]||s<n.h&&["hh",s]||l<=1&&["d"]||l<n.d&&["dd",l];return null!=n.w&&(d=d||u<=1&&["w"]||u<n.w&&["ww",u]),d=d||c<=1&&["M"]||c<n.M&&["MM",c]||h<=1&&["y"]||["yy",h],d[2]=e,d[3]=+t>0,d[4]=a,no.apply(null,d)}function ro(t){return void 0===t?to:"function"===typeof t&&(to=t,!0)}function io(t,e){return void 0!==eo[t]&&(void 0===e?eo[t]:(eo[t]=e,"s"===t&&(eo.ss=e-1),!0))}function oo(t,e){if(!this.isValid())return this.localeData().invalidDate();var n,a,r=!1,i=eo;return"object"===typeof t&&(e=t,t=!1),"boolean"===typeof t&&(r=t),"object"===typeof e&&(i=Object.assign({},eo,e),null!=e.s&&null==e.ss&&(i.ss=e.s-1)),n=this.localeData(),a=ao(this,!r,i,n),r&&(a=n.pastFuture(+this,a)),n.postformat(a)}var so=Math.abs;function lo(t){return(t>0)-(t<0)||+t}function co(){if(!this.isValid())return this.localeData().invalidDate();var t,e,n,a,r,i,o,s,l=so(this._milliseconds)/1e3,c=so(this._days),u=so(this._months),h=this.asSeconds();return h?(t=ut(l/60),e=ut(t/60),l%=60,t%=60,n=ut(u/12),u%=12,a=l?l.toFixed(3).replace(/\.?0+$/,""):"",r=h<0?"-":"",i=lo(this._months)!==lo(h)?"-":"",o=lo(this._days)!==lo(h)?"-":"",s=lo(this._milliseconds)!==lo(h)?"-":"",r+"P"+(n?i+n+"Y":"")+(u?i+u+"M":"")+(c?o+c+"D":"")+(e||t||l?"T":"")+(e?s+e+"H":"")+(t?s+t+"M":"")+(l?s+a+"S":"")):"P0D"}var uo=sa.prototype;return uo.isValid=ia,uo.abs=wi,uo.add=ki,uo.subtract=Hi,uo.as=Di,uo.asMilliseconds=Ii,uo.asSeconds=Pi,uo.asMinutes=Ei,uo.asHours=Bi,uo.asDays=Fi,uo.asWeeks=ji,uo.asMonths=Yi,uo.asQuarters=xi,uo.asYears=Ni,uo.valueOf=Vi,uo._bubble=Si,uo.clone=Ri,uo.get=$i,uo.milliseconds=Wi,uo.seconds=Gi,uo.minutes=qi,uo.hours=Ki,uo.days=Ji,uo.weeks=Zi,uo.months=Xi,uo.years=Qi,uo.humanize=oo,uo.toISOString=co,uo.toString=co,uo.toJSON=co,uo.locale=sr,uo.localeData=cr,uo.toIsoString=H("toIsoString() is deprecated. Please use toISOString() instead (notice the capitals)",co),uo.lang=lr,x("X",0,0,"unix"),x("x",0,0,"valueOf"),Pt("x",Ot),Pt("X",Ct),Yt("X",(function(t,e,n){n._d=new Date(1e3*parseFloat(t))})),Yt("x",(function(t,e,n){n._d=new Date(ht(t))})),
//! moment.js
r.version="2.29.4",i(Jn),r.fn=ci,r.min=ta,r.max=ea,r.now=na,r.utc=m,r.unix=ui,r.months=gi,r.isDate=d,r.locale=vn,r.invalid=y,r.duration=Aa,r.isMoment=L,r.weekdays=yi,r.parseZone=hi,r.localeData=yn,r.isDuration=la,r.monthsShort=_i,r.weekdaysMin=Mi,r.defineLocale=gn,r.updateLocale=_n,r.locales=bn,r.weekdaysShort=bi,r.normalizeUnits=rt,r.relativeTimeRounding=ro,r.relativeTimeThreshold=io,r.calendarFormat=Na,r.prototype=ci,r.HTML5_FMT={DATETIME_LOCAL:"YYYY-MM-DDTHH:mm",DATETIME_LOCAL_SECONDS:"YYYY-MM-DDTHH:mm:ss",DATETIME_LOCAL_MS:"YYYY-MM-DDTHH:mm:ss.SSS",DATE:"YYYY-MM-DD",TIME:"HH:mm",TIME_SECONDS:"HH:mm:ss",TIME_MS:"HH:mm:ss.SSS",WEEK:"GGGG-[W]WW",MONTH:"YYYY-MM"},r}))},9558:function(t,e,n){"use strict";n.d(e,{b:function(){return s}});var a=function(){return(a=Object.assign||function(t){for(var e,n=1,a=arguments.length;n<a;n++)for(var r in e=arguments[n])Object.prototype.hasOwnProperty.call(e,r)&&(t[r]=e[r]);return t}).apply(this,arguments)},r={kebab:/-(\w)/g,styleProp:/:(.*)/,styleList:/;(?![^(]*\))/g};function i(t,e){return e?e.toUpperCase():""}function o(t){for(var e,n={},a=0,o=t.split(r.styleList);a<o.length;a++){var s=o[a].split(r.styleProp),l=s[0],c=s[1];(l=l.trim())&&("string"==typeof c&&(c=c.trim()),n[(e=l,e.replace(r.kebab,i))]=c)}return n}function s(){for(var t,e,n={},r=arguments.length;r--;)for(var i=0,s=Object.keys(arguments[r]);i<s.length;i++)switch(t=s[i]){case"class":case"style":case"directives":if(Array.isArray(n[t])||(n[t]=[]),"style"===t){var l=void 0;l=Array.isArray(arguments[r].style)?arguments[r].style:[arguments[r].style];for(var c=0;c<l.length;c++){var u=l[c];"string"==typeof u&&(l[c]=o(u))}arguments[r].style=l}n[t]=n[t].concat(arguments[r][t]);break;case"staticClass":if(!arguments[r][t])break;void 0===n[t]&&(n[t]=""),n[t]&&(n[t]+=" "),n[t]+=arguments[r][t].trim();break;case"on":case"nativeOn":n[t]||(n[t]={});for(var h=0,d=Object.keys(arguments[r][t]||{});h<d.length;h++)e=d[h],n[t][e]?n[t][e]=[].concat(n[t][e],arguments[r][t][e]):n[t][e]=arguments[r][t][e];break;case"attrs":case"props":case"domProps":case"scopedSlots":case"staticStyle":case"hook":case"transition":n[t]||(n[t]={}),n[t]=a({},arguments[r][t],n[t]);break;case"slot":case"key":case"ref":case"tag":case"show":case"keepAlive":default:n[t]||(n[t]=arguments[r][t])}return n}},3744:function(t,e){"use strict";e.Z=(t,e)=>{const n=t.__vccOpts||t;for(const[a,r]of e)n[a]=r;return n}},7456:function(t,e,n){"use strict";n.d(e,{Jn:function(){return mt},qX:function(){return ht},Xd:function(){return ut},Mq:function(){return gt},ZF:function(){return vt},KN:function(){return _t}});var a=n(8463),r=n(3333),i=n(4444);const o=(t,e)=>e.some((e=>t instanceof e));let s,l;function c(){return s||(s=[IDBDatabase,IDBObjectStore,IDBIndex,IDBCursor,IDBTransaction])}function u(){return l||(l=[IDBCursor.prototype.advance,IDBCursor.prototype.continue,IDBCursor.prototype.continuePrimaryKey])}const h=new WeakMap,d=new WeakMap,f=new WeakMap,p=new WeakMap,m=new WeakMap;function v(t){const e=new Promise(((e,n)=>{const a=()=>{t.removeEventListener("success",r),t.removeEventListener("error",i)},r=()=>{e(z(t.result)),a()},i=()=>{n(t.error),a()};t.addEventListener("success",r),t.addEventListener("error",i)}));return e.then((e=>{e instanceof IDBCursor&&h.set(e,t)})).catch((()=>{})),m.set(e,t),e}function g(t){if(d.has(t))return;const e=new Promise(((e,n)=>{const a=()=>{t.removeEventListener("complete",r),t.removeEventListener("error",i),t.removeEventListener("abort",i)},r=()=>{e(),a()},i=()=>{n(t.error||new DOMException("AbortError","AbortError")),a()};t.addEventListener("complete",r),t.addEventListener("error",i),t.addEventListener("abort",i)}));d.set(t,e)}let _={get(t,e,n){if(t instanceof IDBTransaction){if("done"===e)return d.get(t);if("objectStoreNames"===e)return t.objectStoreNames||f.get(t);if("store"===e)return n.objectStoreNames[1]?void 0:n.objectStore(n.objectStoreNames[0])}return z(t[e])},set(t,e,n){return t[e]=n,!0},has(t,e){return t instanceof IDBTransaction&&("done"===e||"store"===e)||e in t}};function y(t){_=t(_)}function b(t){return t!==IDBDatabase.prototype.transaction||"objectStoreNames"in IDBTransaction.prototype?u().includes(t)?function(...e){return t.apply(w(this),e),z(h.get(this))}:function(...e){return z(t.apply(w(this),e))}:function(e,...n){const a=t.call(w(this),e,...n);return f.set(a,e.sort?e.sort():[e]),z(a)}}function M(t){return"function"===typeof t?b(t):(t instanceof IDBTransaction&&g(t),o(t,c())?new Proxy(t,_):t)}function z(t){if(t instanceof IDBRequest)return v(t);if(p.has(t))return p.get(t);const e=M(t);return e!==t&&(p.set(t,e),m.set(e,t)),e}const w=t=>m.get(t);function L(t,e,{blocked:n,upgrade:a,blocking:r,terminated:i}={}){const o=indexedDB.open(t,e),s=z(o);return a&&o.addEventListener("upgradeneeded",(t=>{a(z(o.result),t.oldVersion,t.newVersion,z(o.transaction),t)})),n&&o.addEventListener("blocked",(t=>n(t.oldVersion,t.newVersion,t))),s.then((t=>{i&&t.addEventListener("close",(()=>i())),r&&t.addEventListener("versionchange",(t=>r(t.oldVersion,t.newVersion,t)))})).catch((()=>{})),s}const k=["get","getKey","getAll","getAllKeys","count"],H=["put","add","delete","clear"],T=new Map;function S(t,e){if(!(t instanceof IDBDatabase)||e in t||"string"!==typeof e)return;if(T.get(e))return T.get(e);const n=e.replace(/FromIndex$/,""),a=e!==n,r=H.includes(n);if(!(n in(a?IDBIndex:IDBObjectStore).prototype)||!r&&!k.includes(n))return;const i=async function(t,...e){const i=this.transaction(t,r?"readwrite":"readonly");let o=i.store;return a&&(o=o.index(e.shift())),(await Promise.all([o[n](...e),r&&i.done]))[0]};return T.set(e,i),i}y((t=>({...t,get:(e,n,a)=>S(e,n)||t.get(e,n,a),has:(e,n)=>!!S(e,n)||t.has(e,n)})));
/**
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
 */
class A{constructor(t){this.container=t}getPlatformInfoString(){const t=this.container.getProviders();return t.map((t=>{if(O(t)){const e=t.getImmediate();return`${e.library}/${e.version}`}return null})).filter((t=>t)).join(" ")}}function O(t){const e=t.getComponent();return"VERSION"===(null===e||void 0===e?void 0:e.type)}const D="@firebase/app",V="0.9.18",C=new r.Yd("@firebase/app"),I="@firebase/app-compat",P="@firebase/analytics-compat",E="@firebase/analytics",B="@firebase/app-check-compat",F="@firebase/app-check",j="@firebase/auth",Y="@firebase/auth-compat",x="@firebase/database",N="@firebase/database-compat",R="@firebase/functions",$="@firebase/functions-compat",U="@firebase/installations",W="@firebase/installations-compat",G="@firebase/messaging",q="@firebase/messaging-compat",K="@firebase/performance",J="@firebase/performance-compat",X="@firebase/remote-config",Q="@firebase/remote-config-compat",Z="@firebase/storage",tt="@firebase/storage-compat",et="@firebase/firestore",nt="@firebase/firestore-compat",at="firebase",rt="10.3.1",it="[DEFAULT]",ot={[D]:"fire-core",[I]:"fire-core-compat",[E]:"fire-analytics",[P]:"fire-analytics-compat",[F]:"fire-app-check",[B]:"fire-app-check-compat",[j]:"fire-auth",[Y]:"fire-auth-compat",[x]:"fire-rtdb",[N]:"fire-rtdb-compat",[R]:"fire-fn",[$]:"fire-fn-compat",[U]:"fire-iid",[W]:"fire-iid-compat",[G]:"fire-fcm",[q]:"fire-fcm-compat",[K]:"fire-perf",[J]:"fire-perf-compat",[X]:"fire-rc",[Q]:"fire-rc-compat",[Z]:"fire-gcs",[tt]:"fire-gcs-compat",[et]:"fire-fst",[nt]:"fire-fst-compat","fire-js":"fire-js",[at]:"fire-js-all"},st=new Map,lt=new Map;function ct(t,e){try{t.container.addComponent(e)}catch(n){C.debug(`Component ${e.name} failed to register with FirebaseApp ${t.name}`,n)}}function ut(t){const e=t.name;if(lt.has(e))return C.debug(`There were multiple attempts to register component ${e}.`),!1;lt.set(e,t);for(const n of st.values())ct(n,t);return!0}function ht(t,e){const n=t.container.getProvider("heartbeat").getImmediate({optional:!0});return n&&n.triggerHeartbeat(),t.container.getProvider(e)}
/**
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
 */
const dt={["no-app"]:"No Firebase App '{$appName}' has been created - call initializeApp() first",["bad-app-name"]:"Illegal App name: '{$appName}",["duplicate-app"]:"Firebase App named '{$appName}' already exists with different options or config",["app-deleted"]:"Firebase App named '{$appName}' already deleted",["no-options"]:"Need to provide options, when not being deployed to hosting via source.",["invalid-app-argument"]:"firebase.{$appName}() takes either no argument or a Firebase App instance.",["invalid-log-argument"]:"First argument to `onLog` must be null or a function.",["idb-open"]:"Error thrown when opening IndexedDB. Original error: {$originalErrorMessage}.",["idb-get"]:"Error thrown when reading from IndexedDB. Original error: {$originalErrorMessage}.",["idb-set"]:"Error thrown when writing to IndexedDB. Original error: {$originalErrorMessage}.",["idb-delete"]:"Error thrown when deleting from IndexedDB. Original error: {$originalErrorMessage}."},ft=new i.LL("app","Firebase",dt);
/**
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
 */
class pt{constructor(t,e,n){this._isDeleted=!1,this._options=Object.assign({},t),this._config=Object.assign({},e),this._name=e.name,this._automaticDataCollectionEnabled=e.automaticDataCollectionEnabled,this._container=n,this.container.addComponent(new a.wA("app",(()=>this),"PUBLIC"))}get automaticDataCollectionEnabled(){return this.checkDestroyed(),this._automaticDataCollectionEnabled}set automaticDataCollectionEnabled(t){this.checkDestroyed(),this._automaticDataCollectionEnabled=t}get name(){return this.checkDestroyed(),this._name}get options(){return this.checkDestroyed(),this._options}get config(){return this.checkDestroyed(),this._config}get container(){return this._container}get isDeleted(){return this._isDeleted}set isDeleted(t){this._isDeleted=t}checkDestroyed(){if(this.isDeleted)throw ft.create("app-deleted",{appName:this._name})}}
/**
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
 */const mt=rt;function vt(t,e={}){let n=t;if("object"!==typeof e){const t=e;e={name:t}}const r=Object.assign({name:it,automaticDataCollectionEnabled:!1},e),o=r.name;if("string"!==typeof o||!o)throw ft.create("bad-app-name",{appName:String(o)});if(n||(n=(0,i.aH)()),!n)throw ft.create("no-options");const s=st.get(o);if(s){if((0,i.vZ)(n,s.options)&&(0,i.vZ)(r,s.config))return s;throw ft.create("duplicate-app",{appName:o})}const l=new a.H0(o);for(const a of lt.values())l.addComponent(a);const c=new pt(n,r,l);return st.set(o,c),c}function gt(t=it){const e=st.get(t);if(!e&&t===it&&(0,i.aH)())return vt();if(!e)throw ft.create("no-app",{appName:t});return e}function _t(t,e,n){var r;let i=null!==(r=ot[t])&&void 0!==r?r:t;n&&(i+=`-${n}`);const o=i.match(/\s|\//),s=e.match(/\s|\//);if(o||s){const t=[`Unable to register library "${i}" with version "${e}":`];return o&&t.push(`library name "${i}" contains illegal characters (whitespace or "/")`),o&&s&&t.push("and"),s&&t.push(`version name "${e}" contains illegal characters (whitespace or "/")`),void C.warn(t.join(" "))}ut(new a.wA(`${i}-version`,(()=>({library:i,version:e})),"VERSION"))}
/**
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
 */
const yt="firebase-heartbeat-database",bt=1,Mt="firebase-heartbeat-store";let zt=null;function wt(){return zt||(zt=L(yt,bt,{upgrade:(t,e)=>{switch(e){case 0:t.createObjectStore(Mt)}}}).catch((t=>{throw ft.create("idb-open",{originalErrorMessage:t.message})}))),zt}async function Lt(t){try{const e=await wt(),n=await e.transaction(Mt).objectStore(Mt).get(Ht(t));return n}catch(e){if(e instanceof i.ZR)C.warn(e.message);else{const t=ft.create("idb-get",{originalErrorMessage:null===e||void 0===e?void 0:e.message});C.warn(t.message)}}}async function kt(t,e){try{const n=await wt(),a=n.transaction(Mt,"readwrite"),r=a.objectStore(Mt);await r.put(e,Ht(t)),await a.done}catch(n){if(n instanceof i.ZR)C.warn(n.message);else{const t=ft.create("idb-set",{originalErrorMessage:null===n||void 0===n?void 0:n.message});C.warn(t.message)}}}function Ht(t){return`${t.name}!${t.options.appId}`}
/**
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
 */const Tt=1024,St=2592e6;class At{constructor(t){this.container=t,this._heartbeatsCache=null;const e=this.container.getProvider("app").getImmediate();this._storage=new Vt(e),this._heartbeatsCachePromise=this._storage.read().then((t=>(this._heartbeatsCache=t,t)))}async triggerHeartbeat(){const t=this.container.getProvider("platform-logger").getImmediate(),e=t.getPlatformInfoString(),n=Ot();if(null===this._heartbeatsCache&&(this._heartbeatsCache=await this._heartbeatsCachePromise),this._heartbeatsCache.lastSentHeartbeatDate!==n&&!this._heartbeatsCache.heartbeats.some((t=>t.date===n)))return this._heartbeatsCache.heartbeats.push({date:n,agent:e}),this._heartbeatsCache.heartbeats=this._heartbeatsCache.heartbeats.filter((t=>{const e=new Date(t.date).valueOf(),n=Date.now();return n-e<=St})),this._storage.overwrite(this._heartbeatsCache)}async getHeartbeatsHeader(){if(null===this._heartbeatsCache&&await this._heartbeatsCachePromise,null===this._heartbeatsCache||0===this._heartbeatsCache.heartbeats.length)return"";const t=Ot(),{heartbeatsToSend:e,unsentEntries:n}=Dt(this._heartbeatsCache.heartbeats),a=(0,i.L)(JSON.stringify({version:2,heartbeats:e}));return this._heartbeatsCache.lastSentHeartbeatDate=t,n.length>0?(this._heartbeatsCache.heartbeats=n,await this._storage.overwrite(this._heartbeatsCache)):(this._heartbeatsCache.heartbeats=[],this._storage.overwrite(this._heartbeatsCache)),a}}function Ot(){const t=new Date;return t.toISOString().substring(0,10)}function Dt(t,e=Tt){const n=[];let a=t.slice();for(const r of t){const t=n.find((t=>t.agent===r.agent));if(t){if(t.dates.push(r.date),Ct(n)>e){t.dates.pop();break}}else if(n.push({agent:r.agent,dates:[r.date]}),Ct(n)>e){n.pop();break}a=a.slice(1)}return{heartbeatsToSend:n,unsentEntries:a}}class Vt{constructor(t){this.app=t,this._canUseIndexedDBPromise=this.runIndexedDBEnvironmentCheck()}async runIndexedDBEnvironmentCheck(){return!!(0,i.hl)()&&(0,i.eu)().then((()=>!0)).catch((()=>!1))}async read(){const t=await this._canUseIndexedDBPromise;if(t){const t=await Lt(this.app);return t||{heartbeats:[]}}return{heartbeats:[]}}async overwrite(t){var e;const n=await this._canUseIndexedDBPromise;if(n){const n=await this.read();return kt(this.app,{lastSentHeartbeatDate:null!==(e=t.lastSentHeartbeatDate)&&void 0!==e?e:n.lastSentHeartbeatDate,heartbeats:t.heartbeats})}}async add(t){var e;const n=await this._canUseIndexedDBPromise;if(n){const n=await this.read();return kt(this.app,{lastSentHeartbeatDate:null!==(e=t.lastSentHeartbeatDate)&&void 0!==e?e:n.lastSentHeartbeatDate,heartbeats:[...n.heartbeats,...t.heartbeats]})}}}function Ct(t){return(0,i.L)(JSON.stringify({version:2,heartbeats:t})).length}
/**
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
 */function It(t){ut(new a.wA("platform-logger",(t=>new A(t)),"PRIVATE")),ut(new a.wA("heartbeat",(t=>new At(t)),"PRIVATE")),_t(D,V,t),_t(D,V,"esm2017"),_t("fire-js","")}It("")},8463:function(t,e,n){"use strict";n.d(e,{H0:function(){return c},wA:function(){return r}});var a=n(4444);class r{constructor(t,e,n){this.name=t,this.instanceFactory=e,this.type=n,this.multipleInstances=!1,this.serviceProps={},this.instantiationMode="LAZY",this.onInstanceCreated=null}setInstantiationMode(t){return this.instantiationMode=t,this}setMultipleInstances(t){return this.multipleInstances=t,this}setServiceProps(t){return this.serviceProps=t,this}setInstanceCreatedCallback(t){return this.onInstanceCreated=t,this}}
/**
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
 */const i="[DEFAULT]";
/**
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
 */class o{constructor(t,e){this.name=t,this.container=e,this.component=null,this.instances=new Map,this.instancesDeferred=new Map,this.instancesOptions=new Map,this.onInitCallbacks=new Map}get(t){const e=this.normalizeInstanceIdentifier(t);if(!this.instancesDeferred.has(e)){const t=new a.BH;if(this.instancesDeferred.set(e,t),this.isInitialized(e)||this.shouldAutoInitialize())try{const n=this.getOrInitializeService({instanceIdentifier:e});n&&t.resolve(n)}catch(n){}}return this.instancesDeferred.get(e).promise}getImmediate(t){var e;const n=this.normalizeInstanceIdentifier(null===t||void 0===t?void 0:t.identifier),a=null!==(e=null===t||void 0===t?void 0:t.optional)&&void 0!==e&&e;if(!this.isInitialized(n)&&!this.shouldAutoInitialize()){if(a)return null;throw Error(`Service ${this.name} is not available`)}try{return this.getOrInitializeService({instanceIdentifier:n})}catch(r){if(a)return null;throw r}}getComponent(){return this.component}setComponent(t){if(t.name!==this.name)throw Error(`Mismatching Component ${t.name} for Provider ${this.name}.`);if(this.component)throw Error(`Component for ${this.name} has already been provided`);if(this.component=t,this.shouldAutoInitialize()){if(l(t))try{this.getOrInitializeService({instanceIdentifier:i})}catch(e){}for(const[t,n]of this.instancesDeferred.entries()){const a=this.normalizeInstanceIdentifier(t);try{const t=this.getOrInitializeService({instanceIdentifier:a});n.resolve(t)}catch(e){}}}}clearInstance(t=i){this.instancesDeferred.delete(t),this.instancesOptions.delete(t),this.instances.delete(t)}async delete(){const t=Array.from(this.instances.values());await Promise.all([...t.filter((t=>"INTERNAL"in t)).map((t=>t.INTERNAL.delete())),...t.filter((t=>"_delete"in t)).map((t=>t._delete()))])}isComponentSet(){return null!=this.component}isInitialized(t=i){return this.instances.has(t)}getOptions(t=i){return this.instancesOptions.get(t)||{}}initialize(t={}){const{options:e={}}=t,n=this.normalizeInstanceIdentifier(t.instanceIdentifier);if(this.isInitialized(n))throw Error(`${this.name}(${n}) has already been initialized`);if(!this.isComponentSet())throw Error(`Component ${this.name} has not been registered yet`);const a=this.getOrInitializeService({instanceIdentifier:n,options:e});for(const[r,i]of this.instancesDeferred.entries()){const t=this.normalizeInstanceIdentifier(r);n===t&&i.resolve(a)}return a}onInit(t,e){var n;const a=this.normalizeInstanceIdentifier(e),r=null!==(n=this.onInitCallbacks.get(a))&&void 0!==n?n:new Set;r.add(t),this.onInitCallbacks.set(a,r);const i=this.instances.get(a);return i&&t(i,a),()=>{r.delete(t)}}invokeOnInitCallbacks(t,e){const n=this.onInitCallbacks.get(e);if(n)for(const r of n)try{r(t,e)}catch(a){}}getOrInitializeService({instanceIdentifier:t,options:e={}}){let n=this.instances.get(t);if(!n&&this.component&&(n=this.component.instanceFactory(this.container,{instanceIdentifier:s(t),options:e}),this.instances.set(t,n),this.instancesOptions.set(t,e),this.invokeOnInitCallbacks(n,t),this.component.onInstanceCreated))try{this.component.onInstanceCreated(this.container,t,n)}catch(a){}return n||null}normalizeInstanceIdentifier(t=i){return this.component?this.component.multipleInstances?t:i:t}shouldAutoInitialize(){return!!this.component&&"EXPLICIT"!==this.component.instantiationMode}}function s(t){return t===i?void 0:t}function l(t){return"EAGER"===t.instantiationMode}
/**
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
 */class c{constructor(t){this.name=t,this.providers=new Map}addComponent(t){const e=this.getProvider(t.name);if(e.isComponentSet())throw new Error(`Component ${t.name} has already been registered with ${this.name}`);e.setComponent(t)}addOrOverwriteComponent(t){const e=this.getProvider(t.name);e.isComponentSet()&&this.providers.delete(t.name),this.addComponent(t)}getProvider(t){if(this.providers.has(t))return this.providers.get(t);const e=new o(t,this);return this.providers.set(t,e),e}getProviders(){return Array.from(this.providers.values())}}},3333:function(t,e,n){"use strict";n.d(e,{Yd:function(){return c},in:function(){return r}});
/**
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
 */
const a=[];var r;(function(t){t[t["DEBUG"]=0]="DEBUG",t[t["VERBOSE"]=1]="VERBOSE",t[t["INFO"]=2]="INFO",t[t["WARN"]=3]="WARN",t[t["ERROR"]=4]="ERROR",t[t["SILENT"]=5]="SILENT"})(r||(r={}));const i={debug:r.DEBUG,verbose:r.VERBOSE,info:r.INFO,warn:r.WARN,error:r.ERROR,silent:r.SILENT},o=r.INFO,s={[r.DEBUG]:"log",[r.VERBOSE]:"log",[r.INFO]:"info",[r.WARN]:"warn",[r.ERROR]:"error"},l=(t,e,...n)=>{if(e<t.logLevel)return;const a=(new Date).toISOString(),r=s[e];if(!r)throw new Error(`Attempted to log a message with an invalid logType (value: ${e})`);console[r](`[${a}]  ${t.name}:`,...n)};class c{constructor(t){this.name=t,this._logLevel=o,this._logHandler=l,this._userLogHandler=null,a.push(this)}get logLevel(){return this._logLevel}set logLevel(t){if(!(t in r))throw new TypeError(`Invalid value "${t}" assigned to \`logLevel\``);this._logLevel=t}setLogLevel(t){this._logLevel="string"===typeof t?i[t]:t}get logHandler(){return this._logHandler}set logHandler(t){if("function"!==typeof t)throw new TypeError("Value assigned to `logHandler` must be a function");this._logHandler=t}get userLogHandler(){return this._userLogHandler}set userLogHandler(t){this._userLogHandler=t}debug(...t){this._userLogHandler&&this._userLogHandler(this,r.DEBUG,...t),this._logHandler(this,r.DEBUG,...t)}log(...t){this._userLogHandler&&this._userLogHandler(this,r.VERBOSE,...t),this._logHandler(this,r.VERBOSE,...t)}info(...t){this._userLogHandler&&this._userLogHandler(this,r.INFO,...t),this._logHandler(this,r.INFO,...t)}warn(...t){this._userLogHandler&&this._userLogHandler(this,r.WARN,...t),this._logHandler(this,r.WARN,...t)}error(...t){this._userLogHandler&&this._userLogHandler(this,r.ERROR,...t),this._logHandler(this,r.ERROR,...t)}}},3977:function(t,e,n){"use strict";n.d(e,{ZF:function(){return a.ZF}});var a=n(7456),r="firebase",i="10.3.1";
/**
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
 */
(0,a.KN)(r,i,"app")},4864:function(t,e,n){"use strict";n.d(e,{Aj:function(){return a.Aj},v0:function(){return a.v0},w7:function(){return a.w7}});var a=n(3831)},9828:function(t,e,n){"use strict";n.d(e,{ad:function(){return a.ad}});var a=n(8036)},2201:function(t,e,n){"use strict";n.d(e,{PO:function(){return F},p7:function(){return te},tv:function(){return ne},yj:function(){return ae}});var a=n(942);
/*!
  * vue-router v4.2.4
  * (c) 2023 Eduardo San Martin Morote
  * @license MIT
  */const r="undefined"!==typeof window;function i(t){return t.__esModule||"Module"===t[Symbol.toStringTag]}const o=Object.assign;function s(t,e){const n={};for(const a in e){const r=e[a];n[a]=c(r)?r.map(t):t(r)}return n}const l=()=>{},c=Array.isArray;const u=/\/$/,h=t=>t.replace(u,"");function d(t,e,n="/"){let a,r={},i="",o="";const s=e.indexOf("#");let l=e.indexOf("?");return s<l&&s>=0&&(l=-1),l>-1&&(a=e.slice(0,l),i=e.slice(l+1,s>-1?s:e.length),r=t(i)),s>-1&&(a=a||e.slice(0,s),o=e.slice(s,e.length)),a=b(null!=a?a:e,n),{fullPath:a+(i&&"?")+i+o,path:a,query:r,hash:o}}function f(t,e){const n=e.query?t(e.query):"";return e.path+(n&&"?")+n+(e.hash||"")}function p(t,e){return e&&t.toLowerCase().startsWith(e.toLowerCase())?t.slice(e.length)||"/":t}function m(t,e,n){const a=e.matched.length-1,r=n.matched.length-1;return a>-1&&a===r&&v(e.matched[a],n.matched[r])&&g(e.params,n.params)&&t(e.query)===t(n.query)&&e.hash===n.hash}function v(t,e){return(t.aliasOf||t)===(e.aliasOf||e)}function g(t,e){if(Object.keys(t).length!==Object.keys(e).length)return!1;for(const n in t)if(!_(t[n],e[n]))return!1;return!0}function _(t,e){return c(t)?y(t,e):c(e)?y(e,t):t===e}function y(t,e){return c(e)?t.length===e.length&&t.every(((t,n)=>t===e[n])):1===t.length&&t[0]===e}function b(t,e){if(t.startsWith("/"))return t;if(!t)return e;const n=e.split("/"),a=t.split("/"),r=a[a.length-1];".."!==r&&"."!==r||a.push("");let i,o,s=n.length-1;for(i=0;i<a.length;i++)if(o=a[i],"."!==o){if(".."!==o)break;s>1&&s--}return n.slice(0,s).join("/")+"/"+a.slice(i-(i===a.length?1:0)).join("/")}var M,z;(function(t){t["pop"]="pop",t["push"]="push"})(M||(M={})),function(t){t["back"]="back",t["forward"]="forward",t["unknown"]=""}(z||(z={}));function w(t){if(!t)if(r){const e=document.querySelector("base");t=e&&e.getAttribute("href")||"/",t=t.replace(/^\w+:\/\/[^\/]+/,"")}else t="/";return"/"!==t[0]&&"#"!==t[0]&&(t="/"+t),h(t)}const L=/^[^#]+#/;function k(t,e){return t.replace(L,"#")+e}function H(t,e){const n=document.documentElement.getBoundingClientRect(),a=t.getBoundingClientRect();return{behavior:e.behavior,left:a.left-n.left-(e.left||0),top:a.top-n.top-(e.top||0)}}const T=()=>({left:window.pageXOffset,top:window.pageYOffset});function S(t){let e;if("el"in t){const n=t.el,a="string"===typeof n&&n.startsWith("#");0;const r="string"===typeof n?a?document.getElementById(n.slice(1)):document.querySelector(n):n;if(!r)return;e=H(r,t)}else e=t;"scrollBehavior"in document.documentElement.style?window.scrollTo(e):window.scrollTo(null!=e.left?e.left:window.pageXOffset,null!=e.top?e.top:window.pageYOffset)}function A(t,e){const n=history.state?history.state.position-e:-1;return n+t}const O=new Map;function D(t,e){O.set(t,e)}function V(t){const e=O.get(t);return O.delete(t),e}let C=()=>location.protocol+"//"+location.host;function I(t,e){const{pathname:n,search:a,hash:r}=e,i=t.indexOf("#");if(i>-1){let e=r.includes(t.slice(i))?t.slice(i).length:1,n=r.slice(e);return"/"!==n[0]&&(n="/"+n),p(n,"")}const o=p(n,t);return o+a+r}function P(t,e,n,a){let r=[],i=[],s=null;const l=({state:i})=>{const o=I(t,location),l=n.value,c=e.value;let u=0;if(i){if(n.value=o,e.value=i,s&&s===l)return void(s=null);u=c?i.position-c.position:0}else a(o);r.forEach((t=>{t(n.value,l,{delta:u,type:M.pop,direction:u?u>0?z.forward:z.back:z.unknown})}))};function c(){s=n.value}function u(t){r.push(t);const e=()=>{const e=r.indexOf(t);e>-1&&r.splice(e,1)};return i.push(e),e}function h(){const{history:t}=window;t.state&&t.replaceState(o({},t.state,{scroll:T()}),"")}function d(){for(const t of i)t();i=[],window.removeEventListener("popstate",l),window.removeEventListener("beforeunload",h)}return window.addEventListener("popstate",l),window.addEventListener("beforeunload",h,{passive:!0}),{pauseListeners:c,listen:u,destroy:d}}function E(t,e,n,a=!1,r=!1){return{back:t,current:e,forward:n,replaced:a,position:window.history.length,scroll:r?T():null}}function B(t){const{history:e,location:n}=window,a={value:I(t,n)},r={value:e.state};function i(a,i,o){const s=t.indexOf("#"),l=s>-1?(n.host&&document.querySelector("base")?t:t.slice(s))+a:C()+t+a;try{e[o?"replaceState":"pushState"](i,"",l),r.value=i}catch(c){console.error(c),n[o?"replace":"assign"](l)}}function s(t,n){const s=o({},e.state,E(r.value.back,t,r.value.forward,!0),n,{position:r.value.position});i(t,s,!0),a.value=t}function l(t,n){const s=o({},r.value,e.state,{forward:t,scroll:T()});i(s.current,s,!0);const l=o({},E(a.value,t,null),{position:s.position+1},n);i(t,l,!1),a.value=t}return r.value||i(a.value,{back:null,current:a.value,forward:null,position:e.length-1,replaced:!0,scroll:null},!0),{location:a,state:r,push:l,replace:s}}function F(t){t=w(t);const e=B(t),n=P(t,e.state,e.location,e.replace);function a(t,e=!0){e||n.pauseListeners(),history.go(t)}const r=o({location:"",base:t,go:a,createHref:k.bind(null,t)},e,n);return Object.defineProperty(r,"location",{enumerable:!0,get:()=>e.location.value}),Object.defineProperty(r,"state",{enumerable:!0,get:()=>e.state.value}),r}function j(t){return"string"===typeof t||t&&"object"===typeof t}function Y(t){return"string"===typeof t||"symbol"===typeof t}const x={path:"/",name:void 0,params:{},query:{},hash:"",fullPath:"/",matched:[],meta:{},redirectedFrom:void 0},N=Symbol("");var R;(function(t){t[t["aborted"]=4]="aborted",t[t["cancelled"]=8]="cancelled",t[t["duplicated"]=16]="duplicated"})(R||(R={}));function $(t,e){return o(new Error,{type:t,[N]:!0},e)}function U(t,e){return t instanceof Error&&N in t&&(null==e||!!(t.type&e))}const W="[^/]+?",G={sensitive:!1,strict:!1,start:!0,end:!0},q=/[.+*?^${}()[\]/\\]/g;function K(t,e){const n=o({},G,e),a=[];let r=n.start?"^":"";const i=[];for(const o of t){const t=o.length?[]:[90];n.strict&&!o.length&&(r+="/");for(let e=0;e<o.length;e++){const a=o[e];let s=40+(n.sensitive?.25:0);if(0===a.type)e||(r+="/"),r+=a.value.replace(q,"\\$&"),s+=40;else if(1===a.type){const{value:t,repeatable:n,optional:l,regexp:c}=a;i.push({name:t,repeatable:n,optional:l});const u=c||W;if(u!==W){s+=10;try{new RegExp(`(${u})`)}catch(h){throw new Error(`Invalid custom RegExp for param "${t}" (${u}): `+h.message)}}let d=n?`((?:${u})(?:/(?:${u}))*)`:`(${u})`;e||(d=l&&o.length<2?`(?:/${d})`:"/"+d),l&&(d+="?"),r+=d,s+=20,l&&(s+=-8),n&&(s+=-20),".*"===u&&(s+=-50)}t.push(s)}a.push(t)}if(n.strict&&n.end){const t=a.length-1;a[t][a[t].length-1]+=.7000000000000001}n.strict||(r+="/?"),n.end?r+="$":n.strict&&(r+="(?:/|$)");const s=new RegExp(r,n.sensitive?"":"i");function l(t){const e=t.match(s),n={};if(!e)return null;for(let a=1;a<e.length;a++){const t=e[a]||"",r=i[a-1];n[r.name]=t&&r.repeatable?t.split("/"):t}return n}function u(e){let n="",a=!1;for(const r of t){a&&n.endsWith("/")||(n+="/"),a=!1;for(const t of r)if(0===t.type)n+=t.value;else if(1===t.type){const{value:i,repeatable:o,optional:s}=t,l=i in e?e[i]:"";if(c(l)&&!o)throw new Error(`Provided param "${i}" is an array but it is not repeatable (* or + modifiers)`);const u=c(l)?l.join("/"):l;if(!u){if(!s)throw new Error(`Missing required param "${i}"`);r.length<2&&(n.endsWith("/")?n=n.slice(0,-1):a=!0)}n+=u}}return n||"/"}return{re:s,score:a,keys:i,parse:l,stringify:u}}function J(t,e){let n=0;while(n<t.length&&n<e.length){const a=e[n]-t[n];if(a)return a;n++}return t.length<e.length?1===t.length&&80===t[0]?-1:1:t.length>e.length?1===e.length&&80===e[0]?1:-1:0}function X(t,e){let n=0;const a=t.score,r=e.score;while(n<a.length&&n<r.length){const t=J(a[n],r[n]);if(t)return t;n++}if(1===Math.abs(r.length-a.length)){if(Q(a))return 1;if(Q(r))return-1}return r.length-a.length}function Q(t){const e=t[t.length-1];return t.length>0&&e[e.length-1]<0}const Z={type:0,value:""},tt=/[a-zA-Z0-9_]/;function et(t){if(!t)return[[]];if("/"===t)return[[Z]];if(!t.startsWith("/"))throw new Error(`Invalid path "${t}"`);function e(t){throw new Error(`ERR (${n})/"${c}": ${t}`)}let n=0,a=n;const r=[];let i;function o(){i&&r.push(i),i=[]}let s,l=0,c="",u="";function h(){c&&(0===n?i.push({type:0,value:c}):1===n||2===n||3===n?(i.length>1&&("*"===s||"+"===s)&&e(`A repeatable param (${c}) must be alone in its segment. eg: '/:ids+.`),i.push({type:1,value:c,regexp:u,repeatable:"*"===s||"+"===s,optional:"*"===s||"?"===s})):e("Invalid state to consume buffer"),c="")}function d(){c+=s}while(l<t.length)if(s=t[l++],"\\"!==s||2===n)switch(n){case 0:"/"===s?(c&&h(),o()):":"===s?(h(),n=1):d();break;case 4:d(),n=a;break;case 1:"("===s?n=2:tt.test(s)?d():(h(),n=0,"*"!==s&&"?"!==s&&"+"!==s&&l--);break;case 2:")"===s?"\\"==u[u.length-1]?u=u.slice(0,-1)+s:n=3:u+=s;break;case 3:h(),n=0,"*"!==s&&"?"!==s&&"+"!==s&&l--,u="";break;default:e("Unknown state");break}else a=n,n=4;return 2===n&&e(`Unfinished custom RegExp for param "${c}"`),h(),o(),r}function nt(t,e,n){const a=K(et(t.path),n);const r=o(a,{record:t,parent:e,children:[],alias:[]});return e&&!r.record.aliasOf===!e.record.aliasOf&&e.children.push(r),r}function at(t,e){const n=[],a=new Map;function r(t){return a.get(t)}function i(t,n,a){const r=!a,c=it(t);c.aliasOf=a&&a.record;const h=ct(e,t),d=[c];if("alias"in t){const e="string"===typeof t.alias?[t.alias]:t.alias;for(const t of e)d.push(o({},c,{components:a?a.record.components:c.components,path:t,aliasOf:a?a.record:c}))}let f,p;for(const e of d){const{path:o}=e;if(n&&"/"!==o[0]){const t=n.record.path,a="/"===t[t.length-1]?"":"/";e.path=n.record.path+(o&&a+o)}if(f=nt(e,n,h),a?a.alias.push(f):(p=p||f,p!==f&&p.alias.push(f),r&&t.name&&!st(f)&&s(t.name)),c.children){const t=c.children;for(let e=0;e<t.length;e++)i(t[e],f,a&&a.children[e])}a=a||f,(f.record.components&&Object.keys(f.record.components).length||f.record.name||f.record.redirect)&&u(f)}return p?()=>{s(p)}:l}function s(t){if(Y(t)){const e=a.get(t);e&&(a.delete(t),n.splice(n.indexOf(e),1),e.children.forEach(s),e.alias.forEach(s))}else{const e=n.indexOf(t);e>-1&&(n.splice(e,1),t.record.name&&a.delete(t.record.name),t.children.forEach(s),t.alias.forEach(s))}}function c(){return n}function u(t){let e=0;while(e<n.length&&X(t,n[e])>=0&&(t.record.path!==n[e].record.path||!ut(t,n[e])))e++;n.splice(e,0,t),t.record.name&&!st(t)&&a.set(t.record.name,t)}function h(t,e){let r,i,s,l={};if("name"in t&&t.name){if(r=a.get(t.name),!r)throw $(1,{location:t});0,s=r.record.name,l=o(rt(e.params,r.keys.filter((t=>!t.optional)).map((t=>t.name))),t.params&&rt(t.params,r.keys.map((t=>t.name)))),i=r.stringify(l)}else if("path"in t)i=t.path,r=n.find((t=>t.re.test(i))),r&&(l=r.parse(i),s=r.record.name);else{if(r=e.name?a.get(e.name):n.find((t=>t.re.test(e.path))),!r)throw $(1,{location:t,currentLocation:e});s=r.record.name,l=o({},e.params,t.params),i=r.stringify(l)}const c=[];let u=r;while(u)c.unshift(u.record),u=u.parent;return{name:s,path:i,params:l,matched:c,meta:lt(c)}}return e=ct({strict:!1,end:!0,sensitive:!1},e),t.forEach((t=>i(t))),{addRoute:i,resolve:h,removeRoute:s,getRoutes:c,getRecordMatcher:r}}function rt(t,e){const n={};for(const a of e)a in t&&(n[a]=t[a]);return n}function it(t){return{path:t.path,redirect:t.redirect,name:t.name,meta:t.meta||{},aliasOf:void 0,beforeEnter:t.beforeEnter,props:ot(t),children:t.children||[],instances:{},leaveGuards:new Set,updateGuards:new Set,enterCallbacks:{},components:"components"in t?t.components||null:t.component&&{default:t.component}}}function ot(t){const e={},n=t.props||!1;if("component"in t)e.default=n;else for(const a in t.components)e[a]="object"===typeof n?n[a]:n;return e}function st(t){while(t){if(t.record.aliasOf)return!0;t=t.parent}return!1}function lt(t){return t.reduce(((t,e)=>o(t,e.meta)),{})}function ct(t,e){const n={};for(const a in t)n[a]=a in e?e[a]:t[a];return n}function ut(t,e){return e.children.some((e=>e===t||ut(t,e)))}const ht=/#/g,dt=/&/g,ft=/\//g,pt=/=/g,mt=/\?/g,vt=/\+/g,gt=/%5B/g,_t=/%5D/g,yt=/%5E/g,bt=/%60/g,Mt=/%7B/g,zt=/%7C/g,wt=/%7D/g,Lt=/%20/g;function kt(t){return encodeURI(""+t).replace(zt,"|").replace(gt,"[").replace(_t,"]")}function Ht(t){return kt(t).replace(Mt,"{").replace(wt,"}").replace(yt,"^")}function Tt(t){return kt(t).replace(vt,"%2B").replace(Lt,"+").replace(ht,"%23").replace(dt,"%26").replace(bt,"`").replace(Mt,"{").replace(wt,"}").replace(yt,"^")}function St(t){return Tt(t).replace(pt,"%3D")}function At(t){return kt(t).replace(ht,"%23").replace(mt,"%3F")}function Ot(t){return null==t?"":At(t).replace(ft,"%2F")}function Dt(t){try{return decodeURIComponent(""+t)}catch(e){}return""+t}function Vt(t){const e={};if(""===t||"?"===t)return e;const n="?"===t[0],a=(n?t.slice(1):t).split("&");for(let r=0;r<a.length;++r){const t=a[r].replace(vt," "),n=t.indexOf("="),i=Dt(n<0?t:t.slice(0,n)),o=n<0?null:Dt(t.slice(n+1));if(i in e){let t=e[i];c(t)||(t=e[i]=[t]),t.push(o)}else e[i]=o}return e}function Ct(t){let e="";for(let n in t){const a=t[n];if(n=St(n),null==a){void 0!==a&&(e+=(e.length?"&":"")+n);continue}const r=c(a)?a.map((t=>t&&Tt(t))):[a&&Tt(a)];r.forEach((t=>{void 0!==t&&(e+=(e.length?"&":"")+n,null!=t&&(e+="="+t))}))}return e}function It(t){const e={};for(const n in t){const a=t[n];void 0!==a&&(e[n]=c(a)?a.map((t=>null==t?null:""+t)):null==a?a:""+a)}return e}const Pt=Symbol(""),Et=Symbol(""),Bt=Symbol(""),Ft=Symbol(""),jt=Symbol("");function Yt(){let t=[];function e(e){return t.push(e),()=>{const n=t.indexOf(e);n>-1&&t.splice(n,1)}}function n(){t=[]}return{add:e,list:()=>t.slice(),reset:n}}function xt(t,e,n,a,r){const i=a&&(a.enterCallbacks[r]=a.enterCallbacks[r]||[]);return()=>new Promise(((o,s)=>{const l=t=>{!1===t?s($(4,{from:n,to:e})):t instanceof Error?s(t):j(t)?s($(2,{from:e,to:t})):(i&&a.enterCallbacks[r]===i&&"function"===typeof t&&i.push(t),o())},c=t.call(a&&a.instances[r],e,n,l);let u=Promise.resolve(c);t.length<3&&(u=u.then(l)),u.catch((t=>s(t)))}))}function Nt(t,e,n,a){const r=[];for(const o of t){0;for(const t in o.components){let s=o.components[t];if("beforeRouteEnter"===e||o.instances[t])if(Rt(s)){const i=s.__vccOpts||s,l=i[e];l&&r.push(xt(l,n,a,o,t))}else{let l=s();0,r.push((()=>l.then((r=>{if(!r)return Promise.reject(new Error(`Couldn't resolve component "${t}" at "${o.path}"`));const s=i(r)?r.default:r;o.components[t]=s;const l=s.__vccOpts||s,c=l[e];return c&&xt(c,n,a,o,t)()}))))}}}return r}function Rt(t){return"object"===typeof t||"displayName"in t||"props"in t||"__vccOpts"in t}function $t(t){const e=(0,a.inject)(Bt),n=(0,a.inject)(Ft),r=(0,a.computed)((()=>e.resolve((0,a.unref)(t.to)))),i=(0,a.computed)((()=>{const{matched:t}=r.value,{length:e}=t,a=t[e-1],i=n.matched;if(!a||!i.length)return-1;const o=i.findIndex(v.bind(null,a));if(o>-1)return o;const s=Kt(t[e-2]);return e>1&&Kt(a)===s&&i[i.length-1].path!==s?i.findIndex(v.bind(null,t[e-2])):o})),o=(0,a.computed)((()=>i.value>-1&&qt(n.params,r.value.params))),s=(0,a.computed)((()=>i.value>-1&&i.value===n.matched.length-1&&g(n.params,r.value.params)));function c(n={}){return Gt(n)?e[(0,a.unref)(t.replace)?"replace":"push"]((0,a.unref)(t.to)).catch(l):Promise.resolve()}return{route:r,href:(0,a.computed)((()=>r.value.href)),isActive:o,isExactActive:s,navigate:c}}const Ut=(0,a.defineComponent)({name:"RouterLink",compatConfig:{MODE:3},props:{to:{type:[String,Object],required:!0},replace:Boolean,activeClass:String,exactActiveClass:String,custom:Boolean,ariaCurrentValue:{type:String,default:"page"}},useLink:$t,setup(t,{slots:e}){const n=(0,a.reactive)($t(t)),{options:r}=(0,a.inject)(Bt),i=(0,a.computed)((()=>({[Jt(t.activeClass,r.linkActiveClass,"router-link-active")]:n.isActive,[Jt(t.exactActiveClass,r.linkExactActiveClass,"router-link-exact-active")]:n.isExactActive})));return()=>{const r=e.default&&e.default(n);return t.custom?r:(0,a.h)("a",{"aria-current":n.isExactActive?t.ariaCurrentValue:null,href:n.href,onClick:n.navigate,class:i.value},r)}}}),Wt=Ut;function Gt(t){if(!(t.metaKey||t.altKey||t.ctrlKey||t.shiftKey)&&!t.defaultPrevented&&(void 0===t.button||0===t.button)){if(t.currentTarget&&t.currentTarget.getAttribute){const e=t.currentTarget.getAttribute("target");if(/\b_blank\b/i.test(e))return}return t.preventDefault&&t.preventDefault(),!0}}function qt(t,e){for(const n in e){const a=e[n],r=t[n];if("string"===typeof a){if(a!==r)return!1}else if(!c(r)||r.length!==a.length||a.some(((t,e)=>t!==r[e])))return!1}return!0}function Kt(t){return t?t.aliasOf?t.aliasOf.path:t.path:""}const Jt=(t,e,n)=>null!=t?t:null!=e?e:n,Xt=(0,a.defineComponent)({name:"RouterView",inheritAttrs:!1,props:{name:{type:String,default:"default"},route:Object},compatConfig:{MODE:3},setup(t,{attrs:e,slots:n}){const r=(0,a.inject)(jt),i=(0,a.computed)((()=>t.route||r.value)),s=(0,a.inject)(Et,0),l=(0,a.computed)((()=>{let t=(0,a.unref)(s);const{matched:e}=i.value;let n;while((n=e[t])&&!n.components)t++;return t})),c=(0,a.computed)((()=>i.value.matched[l.value]));(0,a.provide)(Et,(0,a.computed)((()=>l.value+1))),(0,a.provide)(Pt,c),(0,a.provide)(jt,i);const u=(0,a.ref)();return(0,a.watch)((()=>[u.value,c.value,t.name]),(([t,e,n],[a,r,i])=>{e&&(e.instances[n]=t,r&&r!==e&&t&&t===a&&(e.leaveGuards.size||(e.leaveGuards=r.leaveGuards),e.updateGuards.size||(e.updateGuards=r.updateGuards))),!t||!e||r&&v(e,r)&&a||(e.enterCallbacks[n]||[]).forEach((e=>e(t)))}),{flush:"post"}),()=>{const r=i.value,s=t.name,l=c.value,h=l&&l.components[s];if(!h)return Qt(n.default,{Component:h,route:r});const d=l.props[s],f=d?!0===d?r.params:"function"===typeof d?d(r):d:null,p=t=>{t.component.isUnmounted&&(l.instances[s]=null)},m=(0,a.h)(h,o({},f,e,{onVnodeUnmounted:p,ref:u}));return Qt(n.default,{Component:m,route:r})||m}}});function Qt(t,e){if(!t)return null;const n=t(e);return 1===n.length?n[0]:n}const Zt=Xt;function te(t){const e=at(t.routes,t),n=t.parseQuery||Vt,i=t.stringifyQuery||Ct,u=t.history;const h=Yt(),p=Yt(),v=Yt(),g=(0,a.shallowRef)(x);let _=x;r&&t.scrollBehavior&&"scrollRestoration"in history&&(history.scrollRestoration="manual");const y=s.bind(null,(t=>""+t)),b=s.bind(null,Ot),z=s.bind(null,Dt);function w(t,n){let a,r;return Y(t)?(a=e.getRecordMatcher(t),r=n):r=t,e.addRoute(r,a)}function L(t){const n=e.getRecordMatcher(t);n&&e.removeRoute(n)}function k(){return e.getRoutes().map((t=>t.record))}function H(t){return!!e.getRecordMatcher(t)}function O(t,a){if(a=o({},a||g.value),"string"===typeof t){const r=d(n,t,a.path),i=e.resolve({path:r.path},a),s=u.createHref(r.fullPath);return o(r,i,{params:z(i.params),hash:Dt(r.hash),redirectedFrom:void 0,href:s})}let r;if("path"in t)r=o({},t,{path:d(n,t.path,a.path).path});else{const e=o({},t.params);for(const t in e)null==e[t]&&delete e[t];r=o({},t,{params:b(e)}),a.params=b(a.params)}const s=e.resolve(r,a),l=t.hash||"";s.params=y(z(s.params));const c=f(i,o({},t,{hash:Ht(l),path:s.path})),h=u.createHref(c);return o({fullPath:c,hash:l,query:i===Ct?It(t.query):t.query||{}},s,{redirectedFrom:void 0,href:h})}function C(t){return"string"===typeof t?d(n,t,g.value.path):o({},t)}function I(t,e){if(_!==t)return $(8,{from:e,to:t})}function P(t){return F(t)}function E(t){return P(o(C(t),{replace:!0}))}function B(t){const e=t.matched[t.matched.length-1];if(e&&e.redirect){const{redirect:n}=e;let a="function"===typeof n?n(t):n;return"string"===typeof a&&(a=a.includes("?")||a.includes("#")?a=C(a):{path:a},a.params={}),o({query:t.query,hash:t.hash,params:"path"in a?{}:t.params},a)}}function F(t,e){const n=_=O(t),a=g.value,r=t.state,s=t.force,l=!0===t.replace,c=B(n);if(c)return F(o(C(c),{state:"object"===typeof c?o({},r,c.state):r,force:s,replace:l}),e||n);const u=n;let h;return u.redirectedFrom=e,!s&&m(i,a,n)&&(h=$(16,{to:u,from:a}),nt(a,a,!0,!1)),(h?Promise.resolve(h):R(u,a)).catch((t=>U(t)?U(t,2)?t:et(t):Z(t,u,a))).then((t=>{if(t){if(U(t,2))return F(o({replace:l},C(t.to),{state:"object"===typeof t.to?o({},r,t.to.state):r,force:s}),e||u)}else t=G(u,a,!0,l,r);return W(u,a,t),t}))}function j(t,e){const n=I(t,e);return n?Promise.reject(n):Promise.resolve()}function N(t){const e=ot.values().next().value;return e&&"function"===typeof e.runWithContext?e.runWithContext(t):t()}function R(t,e){let n;const[a,r,i]=ee(t,e);n=Nt(a.reverse(),"beforeRouteLeave",t,e);for(const s of a)s.leaveGuards.forEach((a=>{n.push(xt(a,t,e))}));const o=j.bind(null,t,e);return n.push(o),lt(n).then((()=>{n=[];for(const a of h.list())n.push(xt(a,t,e));return n.push(o),lt(n)})).then((()=>{n=Nt(r,"beforeRouteUpdate",t,e);for(const a of r)a.updateGuards.forEach((a=>{n.push(xt(a,t,e))}));return n.push(o),lt(n)})).then((()=>{n=[];for(const a of i)if(a.beforeEnter)if(c(a.beforeEnter))for(const r of a.beforeEnter)n.push(xt(r,t,e));else n.push(xt(a.beforeEnter,t,e));return n.push(o),lt(n)})).then((()=>(t.matched.forEach((t=>t.enterCallbacks={})),n=Nt(i,"beforeRouteEnter",t,e),n.push(o),lt(n)))).then((()=>{n=[];for(const a of p.list())n.push(xt(a,t,e));return n.push(o),lt(n)})).catch((t=>U(t,8)?t:Promise.reject(t)))}function W(t,e,n){v.list().forEach((a=>N((()=>a(t,e,n)))))}function G(t,e,n,a,i){const s=I(t,e);if(s)return s;const l=e===x,c=r?history.state:{};n&&(a||l?u.replace(t.fullPath,o({scroll:l&&c&&c.scroll},i)):u.push(t.fullPath,i)),g.value=t,nt(t,e,n,l),et()}let q;function K(){q||(q=u.listen(((t,e,n)=>{if(!st.listening)return;const a=O(t),i=B(a);if(i)return void F(o(i,{replace:!0}),a).catch(l);_=a;const s=g.value;r&&D(A(s.fullPath,n.delta),T()),R(a,s).catch((t=>U(t,12)?t:U(t,2)?(F(t.to,a).then((t=>{U(t,20)&&!n.delta&&n.type===M.pop&&u.go(-1,!1)})).catch(l),Promise.reject()):(n.delta&&u.go(-n.delta,!1),Z(t,a,s)))).then((t=>{t=t||G(a,s,!1),t&&(n.delta&&!U(t,8)?u.go(-n.delta,!1):n.type===M.pop&&U(t,20)&&u.go(-1,!1)),W(a,s,t)})).catch(l)})))}let J,X=Yt(),Q=Yt();function Z(t,e,n){et(t);const a=Q.list();return a.length?a.forEach((a=>a(t,e,n))):console.error(t),Promise.reject(t)}function tt(){return J&&g.value!==x?Promise.resolve():new Promise(((t,e)=>{X.add([t,e])}))}function et(t){return J||(J=!t,K(),X.list().forEach((([e,n])=>t?n(t):e())),X.reset()),t}function nt(e,n,i,o){const{scrollBehavior:s}=t;if(!r||!s)return Promise.resolve();const l=!i&&V(A(e.fullPath,0))||(o||!i)&&history.state&&history.state.scroll||null;return(0,a.nextTick)().then((()=>s(e,n,l))).then((t=>t&&S(t))).catch((t=>Z(t,e,n)))}const rt=t=>u.go(t);let it;const ot=new Set,st={currentRoute:g,listening:!0,addRoute:w,removeRoute:L,hasRoute:H,getRoutes:k,resolve:O,options:t,push:P,replace:E,go:rt,back:()=>rt(-1),forward:()=>rt(1),beforeEach:h.add,beforeResolve:p.add,afterEach:v.add,onError:Q.add,isReady:tt,install(t){const e=this;t.component("RouterLink",Wt),t.component("RouterView",Zt),t.config.globalProperties.$router=e,Object.defineProperty(t.config.globalProperties,"$route",{enumerable:!0,get:()=>(0,a.unref)(g)}),r&&!it&&g.value===x&&(it=!0,P(u.location).catch((t=>{0})));const n={};for(const a in x)Object.defineProperty(n,a,{get:()=>g.value[a],enumerable:!0});t.provide(Bt,e),t.provide(Ft,(0,a.shallowReactive)(n)),t.provide(jt,g);const i=t.unmount;ot.add(t),t.unmount=function(){ot.delete(t),ot.size<1&&(_=x,q&&q(),q=null,g.value=x,it=!1,J=!1),i()}}};function lt(t){return t.reduce(((t,e)=>t.then((()=>N(e)))),Promise.resolve())}return st}function ee(t,e){const n=[],a=[],r=[],i=Math.max(e.matched.length,t.matched.length);for(let o=0;o<i;o++){const i=e.matched[o];i&&(t.matched.find((t=>v(t,i)))?a.push(i):n.push(i));const s=t.matched[o];s&&(e.matched.find((t=>v(t,s)))||r.push(s))}return[n,a,r]}function ne(){return(0,a.inject)(Bt)}function ae(){return(0,a.inject)(Ft)}},3002:function(t,e,n){"use strict";n.d(e,{ZP:function(){return Nt},pm:function(){return xt}});var a=n(942),r=Object.defineProperty,i=Object.getOwnPropertySymbols,o=Object.prototype.hasOwnProperty,s=Object.prototype.propertyIsEnumerable,l=(t,e,n)=>e in t?r(t,e,{enumerable:!0,configurable:!0,writable:!0,value:n}):t[e]=n,c=(t,e)=>{for(var n in e||(e={}))o.call(e,n)&&l(t,n,e[n]);if(i)for(var n of i(e))s.call(e,n)&&l(t,n,e[n]);return t},u=t=>"function"===typeof t,h=t=>"string"===typeof t,d=t=>h(t)&&t.trim().length>0,f=t=>"number"===typeof t,p=t=>"undefined"===typeof t,m=t=>"object"===typeof t&&null!==t,v=t=>z(t,"tag")&&d(t.tag),g=t=>window.TouchEvent&&t instanceof TouchEvent,_=t=>z(t,"component")&&b(t.component),y=t=>u(t)||m(t),b=t=>!p(t)&&(h(t)||y(t)||_(t)),M=t=>m(t)&&["height","width","right","left","top","bottom"].every((e=>f(t[e]))),z=(t,e)=>(m(t)||u(t))&&e in t,w=(t=>()=>t++)(0);function L(t){return g(t)?t.targetTouches[0].clientX:t.clientX}function k(t){return g(t)?t.targetTouches[0].clientY:t.clientY}var H,T,S,A=t=>{p(t.remove)?t.parentNode&&t.parentNode.removeChild(t):t.remove()},O=t=>_(t)?O(t.component):v(t)?(0,a.defineComponent)({render(){return t}}):"string"===typeof t?t:(0,a.toRaw)((0,a.unref)(t)),D=t=>{if("string"===typeof t)return t;const e=z(t,"props")&&m(t.props)?t.props:{},n=z(t,"listeners")&&m(t.listeners)?t.listeners:{};return{component:O(t),props:e,listeners:n}},V=()=>"undefined"!==typeof window,C=class{constructor(){this.allHandlers={}}getHandlers(t){return this.allHandlers[t]||[]}on(t,e){const n=this.getHandlers(t);n.push(e),this.allHandlers[t]=n}off(t,e){const n=this.getHandlers(t);n.splice(n.indexOf(e)>>>0,1)}emit(t,e){const n=this.getHandlers(t);n.forEach((t=>t(e)))}},I=t=>["on","off","emit"].every((e=>z(t,e)&&u(t[e])));(function(t){t["SUCCESS"]="success",t["ERROR"]="error",t["WARNING"]="warning",t["INFO"]="info",t["DEFAULT"]="default"})(H||(H={})),function(t){t["TOP_LEFT"]="top-left",t["TOP_CENTER"]="top-center",t["TOP_RIGHT"]="top-right",t["BOTTOM_LEFT"]="bottom-left",t["BOTTOM_CENTER"]="bottom-center",t["BOTTOM_RIGHT"]="bottom-right"}(T||(T={})),function(t){t["ADD"]="add",t["DISMISS"]="dismiss",t["UPDATE"]="update",t["CLEAR"]="clear",t["UPDATE_DEFAULTS"]="update_defaults"}(S||(S={}));var P="Vue-Toastification",E={type:{type:String,default:H.DEFAULT},classNames:{type:[String,Array],default:()=>[]},trueBoolean:{type:Boolean,default:!0}},B={type:E.type,customIcon:{type:[String,Boolean,Object,Function],default:!0}},F={component:{type:[String,Object,Function,Boolean],default:"button"},classNames:E.classNames,showOnHover:{type:Boolean,default:!1},ariaLabel:{type:String,default:"close"}},j={timeout:{type:[Number,Boolean],default:5e3},hideProgressBar:{type:Boolean,default:!1},isRunning:{type:Boolean,default:!1}},Y={transition:{type:[Object,String],default:`${P}__bounce`}},x={position:{type:String,default:T.TOP_RIGHT},draggable:E.trueBoolean,draggablePercent:{type:Number,default:.6},pauseOnFocusLoss:E.trueBoolean,pauseOnHover:E.trueBoolean,closeOnClick:E.trueBoolean,timeout:j.timeout,hideProgressBar:j.hideProgressBar,toastClassName:E.classNames,bodyClassName:E.classNames,icon:B.customIcon,closeButton:F.component,closeButtonClassName:F.classNames,showCloseButtonOnHover:F.showOnHover,accessibility:{type:Object,default:()=>({toastRole:"alert",closeButtonLabel:"close"})},rtl:{type:Boolean,default:!1},eventBus:{type:Object,required:!1,default:()=>new C}},N={id:{type:[String,Number],required:!0,default:0},type:E.type,content:{type:[String,Object,Function],required:!0,default:""},onClick:{type:Function,default:void 0},onClose:{type:Function,default:void 0}},R={container:{type:[Object,Function],default:()=>document.body},newestOnTop:E.trueBoolean,maxToasts:{type:Number,default:20},transition:Y.transition,toastDefaults:Object,filterBeforeCreate:{type:Function,default:t=>t},filterToasts:{type:Function,default:t=>t},containerClassName:E.classNames,onMounted:Function,shareAppContext:[Boolean,Object]},$={CORE_TOAST:x,TOAST:N,CONTAINER:R,PROGRESS_BAR:j,ICON:B,TRANSITION:Y,CLOSE_BUTTON:F},U=(0,a.defineComponent)({name:"VtProgressBar",props:$.PROGRESS_BAR,data(){return{hasClass:!0}},computed:{style(){return{animationDuration:`${this.timeout}ms`,animationPlayState:this.isRunning?"running":"paused",opacity:this.hideProgressBar?0:1}},cpClass(){return this.hasClass?`${P}__progress-bar`:""}},watch:{timeout(){this.hasClass=!1,this.$nextTick((()=>this.hasClass=!0))}},mounted(){this.$el.addEventListener("animationend",this.animationEnded)},beforeUnmount(){this.$el.removeEventListener("animationend",this.animationEnded)},methods:{animationEnded(){this.$emit("close-toast")}}});function W(t,e){return(0,a.openBlock)(),(0,a.createElementBlock)("div",{style:(0,a.normalizeStyle)(t.style),class:(0,a.normalizeClass)(t.cpClass)},null,6)}U.render=W;var G=U,q=(0,a.defineComponent)({name:"VtCloseButton",props:$.CLOSE_BUTTON,computed:{buttonComponent(){return!1!==this.component?O(this.component):"button"},classes(){const t=[`${P}__close-button`];return this.showOnHover&&t.push("show-on-hover"),t.concat(this.classNames)}}}),K=(0,a.createTextVNode)(" × ");function J(t,e){return(0,a.openBlock)(),(0,a.createBlock)((0,a.resolveDynamicComponent)(t.buttonComponent),(0,a.mergeProps)({"aria-label":t.ariaLabel,class:t.classes},t.$attrs),{default:(0,a.withCtx)((()=>[K])),_:1},16,["aria-label","class"])}q.render=J;var X=q,Q={},Z={"aria-hidden":"true",focusable:"false","data-prefix":"fas","data-icon":"check-circle",class:"svg-inline--fa fa-check-circle fa-w-16",role:"img",xmlns:"http://www.w3.org/2000/svg",viewBox:"0 0 512 512"},tt=(0,a.createElementVNode)("path",{fill:"currentColor",d:"M504 256c0 136.967-111.033 248-248 248S8 392.967 8 256 119.033 8 256 8s248 111.033 248 248zM227.314 387.314l184-184c6.248-6.248 6.248-16.379 0-22.627l-22.627-22.627c-6.248-6.249-16.379-6.249-22.628 0L216 308.118l-70.059-70.059c-6.248-6.248-16.379-6.248-22.628 0l-22.627 22.627c-6.248 6.248-6.248 16.379 0 22.627l104 104c6.249 6.249 16.379 6.249 22.628.001z"},null,-1),et=[tt];function nt(t,e){return(0,a.openBlock)(),(0,a.createElementBlock)("svg",Z,et)}Q.render=nt;var at=Q,rt={},it={"aria-hidden":"true",focusable:"false","data-prefix":"fas","data-icon":"info-circle",class:"svg-inline--fa fa-info-circle fa-w-16",role:"img",xmlns:"http://www.w3.org/2000/svg",viewBox:"0 0 512 512"},ot=(0,a.createElementVNode)("path",{fill:"currentColor",d:"M256 8C119.043 8 8 119.083 8 256c0 136.997 111.043 248 248 248s248-111.003 248-248C504 119.083 392.957 8 256 8zm0 110c23.196 0 42 18.804 42 42s-18.804 42-42 42-42-18.804-42-42 18.804-42 42-42zm56 254c0 6.627-5.373 12-12 12h-88c-6.627 0-12-5.373-12-12v-24c0-6.627 5.373-12 12-12h12v-64h-12c-6.627 0-12-5.373-12-12v-24c0-6.627 5.373-12 12-12h64c6.627 0 12 5.373 12 12v100h12c6.627 0 12 5.373 12 12v24z"},null,-1),st=[ot];function lt(t,e){return(0,a.openBlock)(),(0,a.createElementBlock)("svg",it,st)}rt.render=lt;var ct=rt,ut={},ht={"aria-hidden":"true",focusable:"false","data-prefix":"fas","data-icon":"exclamation-circle",class:"svg-inline--fa fa-exclamation-circle fa-w-16",role:"img",xmlns:"http://www.w3.org/2000/svg",viewBox:"0 0 512 512"},dt=(0,a.createElementVNode)("path",{fill:"currentColor",d:"M504 256c0 136.997-111.043 248-248 248S8 392.997 8 256C8 119.083 119.043 8 256 8s248 111.083 248 248zm-248 50c-25.405 0-46 20.595-46 46s20.595 46 46 46 46-20.595 46-46-20.595-46-46-46zm-43.673-165.346l7.418 136c.347 6.364 5.609 11.346 11.982 11.346h48.546c6.373 0 11.635-4.982 11.982-11.346l7.418-136c.375-6.874-5.098-12.654-11.982-12.654h-63.383c-6.884 0-12.356 5.78-11.981 12.654z"},null,-1),ft=[dt];function pt(t,e){return(0,a.openBlock)(),(0,a.createElementBlock)("svg",ht,ft)}ut.render=pt;var mt=ut,vt={},gt={"aria-hidden":"true",focusable:"false","data-prefix":"fas","data-icon":"exclamation-triangle",class:"svg-inline--fa fa-exclamation-triangle fa-w-18",role:"img",xmlns:"http://www.w3.org/2000/svg",viewBox:"0 0 576 512"},_t=(0,a.createElementVNode)("path",{fill:"currentColor",d:"M569.517 440.013C587.975 472.007 564.806 512 527.94 512H48.054c-36.937 0-59.999-40.055-41.577-71.987L246.423 23.985c18.467-32.009 64.72-31.951 83.154 0l239.94 416.028zM288 354c-25.405 0-46 20.595-46 46s20.595 46 46 46 46-20.595 46-46-20.595-46-46-46zm-43.673-165.346l7.418 136c.347 6.364 5.609 11.346 11.982 11.346h48.546c6.373 0 11.635-4.982 11.982-11.346l7.418-136c.375-6.874-5.098-12.654-11.982-12.654h-63.383c-6.884 0-12.356 5.78-11.981 12.654z"},null,-1),yt=[_t];function bt(t,e){return(0,a.openBlock)(),(0,a.createElementBlock)("svg",gt,yt)}vt.render=bt;var Mt=vt,zt=(0,a.defineComponent)({name:"VtIcon",props:$.ICON,computed:{customIconChildren(){return z(this.customIcon,"iconChildren")?this.trimValue(this.customIcon.iconChildren):""},customIconClass(){return h(this.customIcon)?this.trimValue(this.customIcon):z(this.customIcon,"iconClass")?this.trimValue(this.customIcon.iconClass):""},customIconTag(){return z(this.customIcon,"iconTag")?this.trimValue(this.customIcon.iconTag,"i"):"i"},hasCustomIcon(){return this.customIconClass.length>0},component(){return this.hasCustomIcon?this.customIconTag:b(this.customIcon)?O(this.customIcon):this.iconTypeComponent},iconTypeComponent(){const t={[H.DEFAULT]:ct,[H.INFO]:ct,[H.SUCCESS]:at,[H.ERROR]:Mt,[H.WARNING]:mt};return t[this.type]},iconClasses(){const t=[`${P}__icon`];return this.hasCustomIcon?t.concat(this.customIconClass):t}},methods:{trimValue(t,e=""){return d(t)?t.trim():e}}});function wt(t,e){return(0,a.openBlock)(),(0,a.createBlock)((0,a.resolveDynamicComponent)(t.component),{class:(0,a.normalizeClass)(t.iconClasses)},{default:(0,a.withCtx)((()=>[(0,a.createTextVNode)((0,a.toDisplayString)(t.customIconChildren),1)])),_:1},8,["class"])}zt.render=wt;var Lt=zt,kt=(0,a.defineComponent)({name:"VtToast",components:{ProgressBar:G,CloseButton:X,Icon:Lt},inheritAttrs:!1,props:Object.assign({},$.CORE_TOAST,$.TOAST),data(){const t={isRunning:!0,disableTransitions:!1,beingDragged:!1,dragStart:0,dragPos:{x:0,y:0},dragRect:{}};return t},computed:{classes(){const t=[`${P}__toast`,`${P}__toast--${this.type}`,`${this.position}`].concat(this.toastClassName);return this.disableTransitions&&t.push("disable-transition"),this.rtl&&t.push(`${P}__toast--rtl`),t},bodyClasses(){const t=[`${P}__toast-${h(this.content)?"body":"component-body"}`].concat(this.bodyClassName);return t},draggableStyle(){return this.dragStart===this.dragPos.x?{}:this.beingDragged?{transform:`translateX(${this.dragDelta}px)`,opacity:1-Math.abs(this.dragDelta/this.removalDistance)}:{transition:"transform 0.2s, opacity 0.2s",transform:"translateX(0)",opacity:1}},dragDelta(){return this.beingDragged?this.dragPos.x-this.dragStart:0},removalDistance(){return M(this.dragRect)?(this.dragRect.right-this.dragRect.left)*this.draggablePercent:0}},mounted(){this.draggable&&this.draggableSetup(),this.pauseOnFocusLoss&&this.focusSetup()},beforeUnmount(){this.draggable&&this.draggableCleanup(),this.pauseOnFocusLoss&&this.focusCleanup()},methods:{hasProp:z,getVueComponentFromObj:O,closeToast(){this.eventBus.emit(S.DISMISS,this.id)},clickHandler(){this.onClick&&this.onClick(this.closeToast),this.closeOnClick&&(this.beingDragged&&this.dragStart!==this.dragPos.x||this.closeToast())},timeoutHandler(){this.closeToast()},hoverPause(){this.pauseOnHover&&(this.isRunning=!1)},hoverPlay(){this.pauseOnHover&&(this.isRunning=!0)},focusPause(){this.isRunning=!1},focusPlay(){this.isRunning=!0},focusSetup(){addEventListener("blur",this.focusPause),addEventListener("focus",this.focusPlay)},focusCleanup(){removeEventListener("blur",this.focusPause),removeEventListener("focus",this.focusPlay)},draggableSetup(){const t=this.$el;t.addEventListener("touchstart",this.onDragStart,{passive:!0}),t.addEventListener("mousedown",this.onDragStart),addEventListener("touchmove",this.onDragMove,{passive:!1}),addEventListener("mousemove",this.onDragMove),addEventListener("touchend",this.onDragEnd),addEventListener("mouseup",this.onDragEnd)},draggableCleanup(){const t=this.$el;t.removeEventListener("touchstart",this.onDragStart),t.removeEventListener("mousedown",this.onDragStart),removeEventListener("touchmove",this.onDragMove),removeEventListener("mousemove",this.onDragMove),removeEventListener("touchend",this.onDragEnd),removeEventListener("mouseup",this.onDragEnd)},onDragStart(t){this.beingDragged=!0,this.dragPos={x:L(t),y:k(t)},this.dragStart=L(t),this.dragRect=this.$el.getBoundingClientRect()},onDragMove(t){this.beingDragged&&(t.preventDefault(),this.isRunning&&(this.isRunning=!1),this.dragPos={x:L(t),y:k(t)})},onDragEnd(){this.beingDragged&&(Math.abs(this.dragDelta)>=this.removalDistance?(this.disableTransitions=!0,this.$nextTick((()=>this.closeToast()))):setTimeout((()=>{this.beingDragged=!1,M(this.dragRect)&&this.pauseOnHover&&this.dragRect.bottom>=this.dragPos.y&&this.dragPos.y>=this.dragRect.top&&this.dragRect.left<=this.dragPos.x&&this.dragPos.x<=this.dragRect.right?this.isRunning=!1:this.isRunning=!0})))}}}),Ht=["role"];function Tt(t,e){const n=(0,a.resolveComponent)("Icon"),r=(0,a.resolveComponent)("CloseButton"),i=(0,a.resolveComponent)("ProgressBar");return(0,a.openBlock)(),(0,a.createElementBlock)("div",{class:(0,a.normalizeClass)(t.classes),style:(0,a.normalizeStyle)(t.draggableStyle),onClick:e[0]||(e[0]=(...e)=>t.clickHandler&&t.clickHandler(...e)),onMouseenter:e[1]||(e[1]=(...e)=>t.hoverPause&&t.hoverPause(...e)),onMouseleave:e[2]||(e[2]=(...e)=>t.hoverPlay&&t.hoverPlay(...e))},[t.icon?((0,a.openBlock)(),(0,a.createBlock)(n,{key:0,"custom-icon":t.icon,type:t.type},null,8,["custom-icon","type"])):(0,a.createCommentVNode)("v-if",!0),(0,a.createElementVNode)("div",{role:t.accessibility.toastRole||"alert",class:(0,a.normalizeClass)(t.bodyClasses)},["string"===typeof t.content?((0,a.openBlock)(),(0,a.createElementBlock)(a.Fragment,{key:0},[(0,a.createTextVNode)((0,a.toDisplayString)(t.content),1)],2112)):((0,a.openBlock)(),(0,a.createBlock)((0,a.resolveDynamicComponent)(t.getVueComponentFromObj(t.content)),(0,a.mergeProps)({key:1,"toast-id":t.id},t.hasProp(t.content,"props")?t.content.props:{},(0,a.toHandlers)(t.hasProp(t.content,"listeners")?t.content.listeners:{}),{onCloseToast:t.closeToast}),null,16,["toast-id","onCloseToast"]))],10,Ht),t.closeButton?((0,a.openBlock)(),(0,a.createBlock)(r,{key:1,component:t.closeButton,"class-names":t.closeButtonClassName,"show-on-hover":t.showCloseButtonOnHover,"aria-label":t.accessibility.closeButtonLabel,onClick:(0,a.withModifiers)(t.closeToast,["stop"])},null,8,["component","class-names","show-on-hover","aria-label","onClick"])):(0,a.createCommentVNode)("v-if",!0),t.timeout?((0,a.openBlock)(),(0,a.createBlock)(i,{key:2,"is-running":t.isRunning,"hide-progress-bar":t.hideProgressBar,timeout:t.timeout,onCloseToast:t.timeoutHandler},null,8,["is-running","hide-progress-bar","timeout","onCloseToast"])):(0,a.createCommentVNode)("v-if",!0)],38)}kt.render=Tt;var St=kt,At=(0,a.defineComponent)({name:"VtTransition",props:$.TRANSITION,emits:["leave"],methods:{hasProp:z,leave(t){t instanceof HTMLElement&&(t.style.left=t.offsetLeft+"px",t.style.top=t.offsetTop+"px",t.style.width=getComputedStyle(t).width,t.style.position="absolute")}}});function Ot(t,e){return(0,a.openBlock)(),(0,a.createBlock)(a.TransitionGroup,{tag:"div","enter-active-class":t.transition.enter?t.transition.enter:`${t.transition}-enter-active`,"move-class":t.transition.move?t.transition.move:`${t.transition}-move`,"leave-active-class":t.transition.leave?t.transition.leave:`${t.transition}-leave-active`,onLeave:t.leave},{default:(0,a.withCtx)((()=>[(0,a.renderSlot)(t.$slots,"default")])),_:3},8,["enter-active-class","move-class","leave-active-class","onLeave"])}At.render=Ot;var Dt=At,Vt=(0,a.defineComponent)({name:"VueToastification",devtools:{hide:!0},components:{Toast:St,VtTransition:Dt},props:Object.assign({},$.CORE_TOAST,$.CONTAINER,$.TRANSITION),data(){const t={count:0,positions:Object.values(T),toasts:{},defaults:{}};return t},computed:{toastArray(){return Object.values(this.toasts)},filteredToasts(){return this.defaults.filterToasts(this.toastArray)}},beforeMount(){const t=this.eventBus;t.on(S.ADD,this.addToast),t.on(S.CLEAR,this.clearToasts),t.on(S.DISMISS,this.dismissToast),t.on(S.UPDATE,this.updateToast),t.on(S.UPDATE_DEFAULTS,this.updateDefaults),this.defaults=this.$props},mounted(){this.setup(this.container)},methods:{async setup(t){u(t)&&(t=await t()),A(this.$el),t.appendChild(this.$el)},setToast(t){p(t.id)||(this.toasts[t.id]=t)},addToast(t){t.content=D(t.content);const e=Object.assign({},this.defaults,t.type&&this.defaults.toastDefaults&&this.defaults.toastDefaults[t.type],t),n=this.defaults.filterBeforeCreate(e,this.toastArray);n&&this.setToast(n)},dismissToast(t){const e=this.toasts[t];p(e)||p(e.onClose)||e.onClose(),delete this.toasts[t]},clearToasts(){Object.keys(this.toasts).forEach((t=>{this.dismissToast(t)}))},getPositionToasts(t){const e=this.filteredToasts.filter((e=>e.position===t)).slice(0,this.defaults.maxToasts);return this.defaults.newestOnTop?e.reverse():e},updateDefaults(t){p(t.container)||this.setup(t.container),this.defaults=Object.assign({},this.defaults,t)},updateToast({id:t,options:e,create:n}){this.toasts[t]?(e.timeout&&e.timeout===this.toasts[t].timeout&&e.timeout++,this.setToast(Object.assign({},this.toasts[t],e))):n&&this.addToast(Object.assign({},{id:t},e))},getClasses(t){const e=[`${P}__container`,t];return e.concat(this.defaults.containerClassName)}}});function Ct(t,e){const n=(0,a.resolveComponent)("Toast"),r=(0,a.resolveComponent)("VtTransition");return(0,a.openBlock)(),(0,a.createElementBlock)("div",null,[((0,a.openBlock)(!0),(0,a.createElementBlock)(a.Fragment,null,(0,a.renderList)(t.positions,(e=>((0,a.openBlock)(),(0,a.createElementBlock)("div",{key:e},[(0,a.createVNode)(r,{transition:t.defaults.transition,class:(0,a.normalizeClass)(t.getClasses(e))},{default:(0,a.withCtx)((()=>[((0,a.openBlock)(!0),(0,a.createElementBlock)(a.Fragment,null,(0,a.renderList)(t.getPositionToasts(e),(t=>((0,a.openBlock)(),(0,a.createBlock)(n,(0,a.mergeProps)({key:t.id},t),null,16)))),128))])),_:2},1032,["transition","class"])])))),128))])}Vt.render=Ct;var It=Vt,Pt=(t={},e=!0)=>{const n=t.eventBus=t.eventBus||new C;e&&(0,a.nextTick)((()=>{const e=(0,a.createApp)(It,c({},t)),n=e.mount(document.createElement("div")),r=t.onMounted;if(p(r)||r(n,e),t.shareAppContext){const n=t.shareAppContext;!0===n?console.warn(`[${P}] App to share context with was not provided.`):(e._context.components=n._context.components,e._context.directives=n._context.directives,e._context.mixins=n._context.mixins,e._context.provides=n._context.provides,e.config.globalProperties=n.config.globalProperties)}}));const r=(t,e)=>{const a=Object.assign({},{id:w(),type:H.DEFAULT},e,{content:t});return n.emit(S.ADD,a),a.id};function i(t,{content:e,options:a},r=!1){const i=Object.assign({},a,{content:e});n.emit(S.UPDATE,{id:t,options:i,create:r})}return r.clear=()=>n.emit(S.CLEAR,void 0),r.updateDefaults=t=>{n.emit(S.UPDATE_DEFAULTS,t)},r.dismiss=t=>{n.emit(S.DISMISS,t)},r.update=i,r.success=(t,e)=>r(t,Object.assign({},e,{type:H.SUCCESS})),r.info=(t,e)=>r(t,Object.assign({},e,{type:H.INFO})),r.error=(t,e)=>r(t,Object.assign({},e,{type:H.ERROR})),r.warning=(t,e)=>r(t,Object.assign({},e,{type:H.WARNING})),r},Et=()=>{const t=()=>console.warn(`[${P}] This plugin does not support SSR!`);return new Proxy(t,{get(){return t}})};function Bt(t){return V()?I(t)?Pt({eventBus:t},!1):Pt(t,!0):Et()}var Ft=Symbol("VueToastification"),jt=new C,Yt=(t,e)=>{!0===(null==e?void 0:e.shareAppContext)&&(e.shareAppContext=t);const n=Bt(c({eventBus:jt},e));t.provide(Ft,n)},xt=t=>{if(t)return Bt(t);const e=(0,a.getCurrentInstance)()?(0,a.inject)(Ft,void 0):void 0;return e||Bt(jt)},Nt=Yt}}]);
//# sourceMappingURL=chunk-vendors.11d0246e.js.map