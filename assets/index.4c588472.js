import{r as e,B as t,R as n,N as r,K as o,j as a,c as i,G as s,u as c,a as d,b as l,C as u,I as f,d as p,V as m}from"./vendor.01b14db8.js";function h(e){return/^0x[a-fA-F0-9]{40}$/.test(e)}function g(e){return e}function v(e,t=""){return`https://ipfs.io/ipfs/${e}${t}`}const b=/^ipfs:\/\/(?:ipfs\/)?([^/]+)(\/.+)?$/,w=/^Qm[1-9A-HJ-NP-Za-km-z]{44}$/;function x(e,t){const n=b.exec(e);if(n){const[,e,r=""]=n;return t(e,r)}return w.test(e)?t(e):e}function y(e,t,n){return(e=x(e=function(e){try{const t=new URL(e);return"api.niftygateway.com"!==t.host?e:(t.pathname=t.pathname+"/",String(t))}catch(t){return e}}(e=function(e,t){try{const n=new URL(e);return"api.opensea.io"!==n.host&&"testnets-api.opensea.io"!==n.host||!n.pathname.includes("0x%7Bid%7D")?e:(n.pathname=n.pathname.replace(/0x%7Bid%7D/g,t),n.searchParams.set("format","json"),String(n))}catch(n){return e}}(e,t)),n.ipfsUrl)).startsWith("http")&&(e=n.jsonProxy(e)),e}function k(e,t){return x(e,t.ipfsUrl)}function I(e,t){return(null==e?void 0:e.toLowerCase())===(null==t?void 0:t.toLowerCase())}function $(e){return P(Promise.all([...e].map(P)))}function P(e){return new Promise(((t,n)=>{Promise.resolve(e).then(n,t)}))}class A extends Error{constructor(e,t){super(e),this.name="MultipleErrors",this.errors=t}}const C=/\.(?:png|svg|jpg|jepg|gif|webp|jxl|avif)$/,D=/\.(?:mp4|mov|webm|ogv)$/;function E(e){return C.test(e)?"image":D.test(e)?"video":"unknown"}function j(e){return{description:'\n  10,000 unique collectible characters with proof of ownership stored on the\n  Ethereum blockchain. The project that inspired the modern CryptoArt movement.\n  The first "Non-Fungible Token," and inspiration for the Ethereum ERC-721\n  standard that powers most digital art and collectibles.\n',image:`https://www.larvalabs.com/cryptopunks/cryptopunk${e}.png`,imageType:"image",metadataUrl:"",name:`CryptoPunk ${e}`,owner:"",rawData:null}}function T(e){return I(e,"0xb47e3cd837ddf8e4c57f05d70ab865de6e193bbb")}async function U(e,{jsonProxy:t}){var n,r,o;const a=t(`https://api.cryptokitties.co/v3/kitties/${e}`),i=await fetch(a),s=await i.json(),c=null!==(n=null==s?void 0:s.image_url)&&void 0!==n?n:"";return{description:null!==(r=null==s?void 0:s.bio)&&void 0!==r?r:"−",image:c,imageType:c?"image":"unknown",metadataUrl:a,name:null!==(o=null==s?void 0:s.name)&&void 0!==o?o:"Unknown",owner:"",rawData:s}}function B(e){return I(e,"0x06012c8cf97BEaD5deAe237070F9587f8E7A266d")}function M(e,t){return JSON.stringify({operationName:"NFTByTokenId",variables:{contractAddress:e,tokenId:t},query:"\n  query NFTByTokenId($contractAddress: String, $tokenId: String) {\n    nfts(\n      where: { contractAddress: $contractAddress, tokenId: $tokenId }\n      first: 1\n    ) {\n      name\n      image\n      owner {\n        address\n      }\n      estate {\n        size\n        data {\n          description\n        }\n      }\n    }\n  }\n"})}async function N(e){var t,n,r,o,a,i,s,c;const d=await fetch("https://api.thegraph.com/subgraphs/name/decentraland/marketplace",{body:M("0x959e104E1a4dB6317fA58F8295F586e1A978c297",e),method:"POST"}),{data:l}=await d.json(),u=null===(t=null==l?void 0:l.nfts)||void 0===t?void 0:t[0],f=null!==(n=null==u?void 0:u.image)&&void 0!==n?n:"";return{description:null!==(a=null===(o=null===(r=null==u?void 0:u.estate)||void 0===r?void 0:r.data)||void 0===o?void 0:o.description)&&void 0!==a?a:"−",image:f,imageType:f?"image":"unknown",metadataUrl:"",name:null!==(i=null==u?void 0:u.name)&&void 0!==i?i:"Unknown",owner:null!==(c=null===(s=null==u?void 0:u.owner)||void 0===s?void 0:s.address)&&void 0!==c?c:"",rawData:l}}function F(e){return I(e,"0x959e104E1a4dB6317fA58F8295F586e1A978c297")}function S(e,t){return JSON.stringify({operationName:"NFTByTokenId",variables:{contractAddress:e,tokenId:t},query:"\n  query NFTByTokenId($contractAddress: String, $tokenId: String) {\n    nfts(\n      where: { contractAddress: $contractAddress, tokenId: $tokenId }\n      first: 1\n    ) {\n      name\n      image\n      owner {\n        address\n      }\n      parcel {\n        x\n        y\n        data {\n          description\n        }\n      }\n    }\n  }\n"})}async function R(e){var t,n,r,o,a,i,s;const c=await fetch("https://api.thegraph.com/subgraphs/name/decentraland/marketplace",{body:S("0xf87e31492faf9a91b02ee0deaad50d51d56d5d4d",e),method:"POST"}),{data:d}=await c.json(),l=null===(t=null==d?void 0:d.nfts)||void 0===t?void 0:t[0],u=null==l?void 0:l.parcel,f=null!==(n=null==l?void 0:l.image)&&void 0!==n?n:"";return{description:null!==(o=null===(r=null==u?void 0:u.data)||void 0===r?void 0:r.description)&&void 0!==o?o:"-",image:f,imageType:f?"image":"unknown",metadataUrl:"",name:null!==(a=null==l?void 0:l.name)&&void 0!==a?a:`Parcel ${null==u?void 0:u.x},${null==u?void 0:u.y}`,owner:null!==(s=null===(i=null==l?void 0:l.owner)||void 0===i?void 0:i.address)&&void 0!==s?s:"",rawData:d}}function O(e){return I(e,"0xf87e31492faf9a91b02ee0deaad50d51d56d5d4d")}const q={address:"0x7c40c393dc0f283f318791d746d894ddd3693572",methodName:"_tokenIDToCatID",methodHash:"0xfe294644",humanReadableAbi:["function _tokenIDToCatID(uint256 tokenId) view returns (bytes5 catId)"]};async function _(e,t){const n=x(`ipfs://ipfs/bafybeidk4zunuq56w2pf2sncexohlyqae62dzplljkbwswa7jwywh2dava/${e.slice(4,6)}/${e}.png`,t);var r;return function(e,{scale:t=1,padding:n=0}={}){const r=e.naturalWidth*t,o=e.naturalHeight*t,a=Math.max(r*n,o*n),i=document.createElement("canvas");i.width=r+2*a,i.height=o+2*a;const s=i.getContext("2d");return null===s?null:(s.imageSmoothingEnabled=!1,s.drawImage(e,a,a,r,o),i.toDataURL())}(await(r=n,new Promise(((e,t)=>{const n=new Image;n.src=r,n.crossOrigin="",n.onload=()=>e(n),n.onerror=e=>t(e)}))),{scale:4,padding:.125})}async function z(e,t,n){var r;const o=await t(q.address,e,q),a=null!==(r=await _(o,n.ipfsUrl))&&void 0!==r?r:"";return{description:`The (unofficial) wrapped version of MoonCats Rescue. Original cat ID: ${o}.`,image:a,imageType:a?"image":"unknown",metadataUrl:"",name:`Wrapped MoonCat #${e}`,owner:"",rawData:null}}function L(e){return I(e,q.address)}async function W(e,t){const n=await fetch(e);if(!n.ok)throw new Error("Error when trying to request "+e);let r;try{r=await n.json()}catch(a){r={name:"",description:"",image:e}}let o={...r};if(function(e){var t,n,r,o,a,i,s,c,d,l,u,f;if(!e||"object"!=typeof e)return!1;const p=e;return"Asset Metadata"===p.title&&"object"===p.type&&"string"==typeof(null===(n=null===(t=p.properties)||void 0===t?void 0:t.name)||void 0===n?void 0:n.description)&&"string"==typeof(null===(o=null===(r=p.properties)||void 0===r?void 0:r.image)||void 0===o?void 0:o.description)&&"string"==typeof(null===(i=null===(a=p.properties)||void 0===a?void 0:a.description)||void 0===i?void 0:i.description)&&"string"===(null===(c=null===(s=p.properties)||void 0===s?void 0:s.name)||void 0===c?void 0:c.type)&&"string"===(null===(l=null===(d=p.properties)||void 0===d?void 0:d.image)||void 0===l?void 0:l.type)&&"string"===(null===(f=null===(u=p.properties)||void 0===u?void 0:u.description)||void 0===f?void 0:f.type)}(o)&&(o=function(e){var t,n,r,o,a,i;return{name:(null===(n=null===(t=e.properties)||void 0===t?void 0:t.name)||void 0===n?void 0:n.description)||"",description:(null===(o=null===(r=e.properties)||void 0===r?void 0:r.description)||void 0===o?void 0:o.description)||"",image:(null===(i=null===(a=e.properties)||void 0===a?void 0:a.image)||void 0===i?void 0:i.description)||"",rawData:{...e}}}(o)),o=function(e){if(!e||"object"!=typeof e)return e;const t=e;return void 0===(null==t?void 0:t.image)&&"string"==typeof(null==t?void 0:t.imageUrl)?{...t,image:null==t?void 0:t.imageUrl}:e}(o),!function(e){return!(!e||"object"!=typeof e)&&("name"in e&&"image"in e&&"description"in e)}(o))throw new Error("Invalid data received");return function(e,t){return{...e,image:k(e.image,t)}}({description:o.description||"",image:o.image||"",name:o.name||"",rawData:r},t)}const H=["function tokenURI(uint256 _tokenId) external view returns (string)","function ownerOf(uint256 _tokenId) external view returns (address)","function uri(uint256 _id) external view returns (string)"];async function J(e,t,n){return y(await $([e.tokenURI(t),e.uri(t)]).catch((e=>{throw new A("An error occurred while trying to fetch the token URI from the NFT contract. See the “errors” property on this error for details.",e)})),t,n)}async function G(e,t,n,r){return O(e)?R(t):F(e)?N(t):T(e)?j(t):B(e)?U(t,r):L(e)?z(t,function(e){return async function(t,n,r){const o=new e.ethers.Contract(t,r.humanReadableAbi,e.provider),a=await o._tokenIDToCatID(n);return null!=a?a:""}}(n),r):async function(e,t,n,r){const o=new n.ethers.Contract(e,H,n.provider),[a,i]=await Promise.all([J(o,t,r),o.ownerOf(t).catch((()=>""))]),s=await W(a,r),c=E(s.image);return{...s,imageType:c,metadataUrl:a,owner:i}}(e,t,n,r)}function Q(e){let t="";for(let n=0;n<32;++n)t+=("0"+(e>>BigInt(256-8*n-8)&BigInt(255)).toString(16)).slice(-2);return t}function Z(e){let t=BigInt(0);for(const n of e)t=(t<<BigInt(8))+BigInt(n);return t}function K(e){var t;return e=e.replace(/^0x/,""),new Uint8Array((null!==(t=e.match(/.{1,2}/g))&&void 0!==t?t:[]).map((e=>parseInt(e,16))))}function V(e){const t=Z(K(e).subarray(0,32));if(t>=BigInt(2)**BigInt(160))throw new Error(`Encoded value is bigger than the largest possible address.  Decoded value: 0x${t.toString(16)}.`);return`0x${t.toString(16)}`}function Y(e){return"0xc87b56dd"+Q(e)}function X(e){return"0x6352211e"+Q(e)}function ee(e,t,n){return e.request({method:"eth_call",params:[{data:n,to:t},"latest"]})}async function te(e,t,n,r){return y(function(e){const t=K(e),n=Number(Z(t.subarray(0,32))),r=Number(Z(t.subarray(n,n+32))),o=t.subarray(n+32,n+32+r);return(new TextDecoder).decode(o)}(await $(function(e){return[Y(BigInt(e)),(t=BigInt(e),"0x0e89341c"+Q(t))];var t}(t).map((t=>ee(n,e,t)))).catch((e=>{throw new A("An error occurred while trying to fetch the token URI from the NFT contract. See the “errors” property on this error for details.",e)}))),t,r)}async function ne(e,t,n,r){return O(e)?R(t):F(e)?N(t):T(e)?j(t):B(e)?U(t,r):L(e)?z(t,function(e){return async function(t,n,r){if(void 0===e.ethereum)throw new Error("No Ethereum provider");return(await ee(e.ethereum,t,r.methodHash+Q(BigInt(n)))).slice(0,12)}}(n),r):async function(e,t,{ethereum:n},r){const[o,a]=await Promise.all([te(e,t,n,r),ee(n,e,X(BigInt(t))).then(V).catch((()=>""))]),i=await W(o,r),s=E(i.image);return{...i,imageType:s,metadataUrl:o,owner:a}}(e,t,n,r)}function re(e){const t=function(e){if(!e.ethereum){if(!window.ethereum)throw new Error("Missing ethereum provider.");e.ethereum=window.ethereum}return e}(e);return{config:t,async fetchNft(e,n,r){if(!h(e))throw new Error(`Invalid contract address: ${e}`);return function(e,t){return e.image.startsWith("http")?{...e,image:t(e.image,e)}:e}(await ne(e,n,t,r),r.imageProxy)}}}const oe={name:"",description:"",image:""};function ae(e){return function(e){return Array.isArray(e)&&2==e.length&&"ethers"===e[0]}(e)?{config:t=e[1],async fetchNft(e,n,r){if(!h(e))throw new Error(`Invalid contract address: ${e}`);return o=await G(e,n,t,r),a=r.imageProxy,o.image.startsWith("http")?{...o,image:a(o.image,o)}:o;var o,a}}:function(e){return Array.isArray(e)&&2==e.length&&"ethereum"===e[0]}(e)?re(e[1]):e;var t}const ie=e.exports.createContext(null),se=function({children:o,fetcher:a,imageProxy:i=g,ipfsUrl:s=v,jsonProxy:c=g}){if(!a)throw new Error("Please set the fetcher prop on <NftProvider />");const[d,{cache:l}]=e.exports.useMemo((()=>{const e=new Map;return[e,t(e)]}),[]),u={cacheStorage:d,fetcher:ae(a),imageProxy:i,ipfsUrl:s,jsonProxy:c};return n.createElement(r,{value:{cache:l}},n.createElement(ie.Provider,{value:u},o))};const ce="#a669a2",de="#dddddd",le="#000000";function ue({children:e}){return a(n.Fragment,null,a(s,{styles:i`
          @font-face {
            font-family: "IBM Plex Mono";
            font-style: normal;
            font-weight: 400;
            font-display: swap;
            src: url(IBMPlexMono.woff2) format("woff2");
          }
          *,
          *:before,
          *:after {
            box-sizing: border-box;
          }
          body,
          h1,
          button {
            margin: 0;
            font: 16px/1.4 "IBM Plex Mono", monospace;
          }
          button {
            cursor: pointer;
          }
          body,
          a {
            color: ${ce};
            text-decoration: none;
            outline: 0;
          }
          a:focus:not(:focus-visible) {
            background: transparent;
            color: ${ce};
          }
          a:focus-visible {
            background: ${ce};
            color: ${de};
          }
        `}),a("main",{css:i`
          max-width: 1440px;
          min-width: 420px;
          margin: 0 auto;
          padding: 0 80px;
          @media (max-width: 900px) {
            padding: 0 40px;
          }
        `},e))}function fe({swap:e=!1}){const t=[a("a",{key:"by",href:"https://spectre.xyz/",target:"_blank",css:i`
        text-transform: lowercase;
      `},"by Spectre"),a("a",{key:"docs",href:"https://github.com/spectrexyz/use-nft",target:"_blank"},"code & docs")];return a("nav",{css:i`
        display: flex;
        justify-content: space-between;
        align-items: center;
        width: 100%;
        height: 96px;
      `},e?[...t].reverse():t)}function pe(){return a("footer",{css:i`
        padding-top: 50px;
      `},a(fe,{swap:!0}))}const me=[..."🌈🌼🌸🍔🍟🍕🌮🥞🥐🌭🍫🍩🍪🍿🍣🥪🍜🥟🍬🍮💛💖🥡💊🎁🎀"];function he(){return me[Math.floor(Math.random()*me.length)]}function ge(){const t=e.exports.useRef(null);return e.exports.useEffect((()=>function(e,t=1e3/60){const n="function"==typeof t?t:()=>t;let r,o=Date.now()-n();const a=()=>{r=requestAnimationFrame(a);const t=Date.now();t-o<n()||(o=t,e())};return a(),()=>cancelAnimationFrame(r)}((()=>{t.current&&(t.current.innerHTML=he())}),500)),[]),t}function ve(){return a("header",{css:i`
        position: relative;
        padding: 0 0 80px;
      `},a(fe,null),a(be,null),a(we,null))}function be(){const e=ge(),{below:t}=c(),n=t(1e3),r=t(800);return a("h1",{title:"useNft()",css:i`
        margin-top: 24px;
        font-size: ${n?"30px":"40px"};
        text-align: center;
      `},"let"," ",a("span",{ref:e,css:i`
          display: inline-block;
          width: 50px;
          text-align: center;
        `},he())," ","= ",r&&a("br",null),"useNft()")}function we(){return a("p",{css:i`
        margin: 12px 0 0;
        text-align: center;
      `},"Fetch metadata from any ",a("abbr",{title:"Non-fungible token"},"NFT"))}function xe(t){const n=e.exports.useRef(null);return e.exports.useEffect((()=>{const e=n.current;null!==e&&(e.muted=!0,e.setAttribute("autoplay",""),e.setAttribute("playsinline",""))}),[]),a("video",{ref:n,...t,tabIndex:-1})}function ye({contract:t,tokenId:n,service:r,url:i}){const{nft:s,loading:c,error:d,reload:l}=function(t,n){const r=e.exports.useContext(ie);if(null===r)throw new Error("Please wrap your app with <NftProvider />");const{cacheStorage:a,fetcher:i,imageProxy:s,ipfsUrl:c,jsonProxy:d}=r,l=e.exports.useMemo((()=>({imageProxy:s,ipfsUrl:c,jsonProxy:d})),[s,c,d]),u=e.exports.useCallback((()=>i?i.fetchNft(t,n,l):{...oe}),[t,i,l,n]),f=a.has(t+n),p=o(t+n,u,{revalidateOnMount:!f,revalidateOnFocus:!1,revalidateOnReconnect:!1});return e.exports.useMemo((()=>{const{error:e,data:t,mutate:n}=p,r=()=>n().then((()=>!0)).catch((()=>!1));return void 0===e&&void 0===t?{error:void 0,loading:!0,nft:void 0,reload:r,status:"loading"}:void 0!==e?{error:e,loading:!1,nft:void 0,reload:r,status:"error"}:{error:void 0,loading:!1,nft:t,reload:r,status:"done"}}),[p])}(t,n);return a(ke,{url:s&&i,label:r},c?a(Ie,null):d?a($e,{error:d,reload:l}):a(Pe,{nft:s}))}function ke({label:e,url:t,children:n}){return a("a",{...t?{href:t,target:"_blank"}:{},css:i`
        display: block;
        overflow: hidden;
        border-radius: 5px;
        height: 100%;
        &:focus:not(:focus-visible) {
          background: transparent;
          color: ${ce};
          box-shadow: none;
        }
        &:focus-visible {
          background: transparent;
          color: ${ce};
          box-shadow: 0 0 0 2px ${ce};
        }
      `},a("section",{css:i`
          display: grid;
          height: 100%;
          place-items: center;
          grid-template-columns: 100%;
          background: #123;
        `},a("div",{css:i`
            display: flex;
            flex-direction: column;
            width: 100%;
            height: 100%;
            position: relative;
          `},n,a("div",{css:i`
              position: absolute;
              bottom: 0;
              padding: 2px 10px;
              color: ${le};
              background: ${ce};
            `},e))))}function Ie(){return a("div",{css:i`
        display: grid;
        height: 100%;
        place-items: center;
      `},"Loading…")}function $e({error:e,reload:t}){return a("div",{css:i`
        display: grid;
        height: 100%;
        place-items: center;
        text-align: center;
        line-height: 2;
      `},a("p",null,"Loading error.",a("br",null)," ",a("button",{onClick:t},"Retry?")))}function Pe({nft:e}){if(!e)return null;const{image:t}=e,r=e.name||"Untitled",o=e.description||"−";return a(n.Fragment,null,a("div",{css:i`
          width: 100%;
          height: 280px;
          background: ${ce};
          img,
          video {
            display: block;
            width: 100%;
            height: 100%;
            object-fit: cover;
            object-position: 50% 50%;
          }
        `},t.includes(".mp4")?a(xe,{type:"video/mp4",src:t,height:"280"}):t&&a("img",{src:t,height:"280",alt:""})),a("h1",{css:i`
          display: flex;
          align-items: center;
          width: 100%;
          height: 60px;
          margin: 0;
          padding: 0 20px;
          text-align: center;
          white-space: nowrap;

          // truncating
          span {
            overflow: hidden;
            text-overflow: ellipsis;
          }
        `},a("span",{title:r},r)),a("p",{title:o,css:i`
          margin: 0;
          padding: 0 20px;
          line-height: 24px;

          // truncating
          display: -webkit-box;
          -webkit-box-orient: vertical;
          -webkit-line-clamp: 5;
          overflow: hidden;
        `},o))}function Ae({nfts:t}){const[n,r]=e.exports.useState(0),o=d(t.length,{progress:n,config:{mass:.5,tension:400,friction:30}});return e.exports.useEffect((()=>r(1)),[]),a("div",{css:i`
        display: grid;
        gap: 40px;
        grid-template-columns: repeat(auto-fit, minmax(260px, 1fr));
        grid-auto-rows: 510px;
      `},o.map((({progress:e},n)=>{const[r,o,i,s]=t[n];return a(l.div,{key:r+o,style:{opacity:e,transform:e.to((e=>`translate3d(0, ${10*(1-e)}px, 0)`))}},a(ye,{contract:r,service:i,tokenId:o,url:s}))})))}var Ce=function(e){const t=[...e];for(let n=t.length-1;n>0;n--){const e=Math.floor(Math.random()*(n+1));[t[n],t[e]]=[t[e],t[n]]}return t}([["0xf87e31492faf9a91b02ee0deaad50d51d56d5d4d","29264283555200707857850216239132066185199","Decentraland Parcels","https://market.decentraland.org/contracts/0xf87e31492faf9a91b02ee0deaad50d51d56d5d4d/tokens/29264283555200707857850216239132066185199"],["0x959e104e1a4db6317fa58f8295f586e1a978c297","3168","Decentraland Estates","https://market.decentraland.org/contracts/0x959e104e1a4db6317fa58f8295f586e1a978c297/tokens/3168"],["0x32b7495895264ac9d0b12d32afd435453458b1c6","5055","Decentraland Wearables","https://market.decentraland.org/contracts/0x32b7495895264ac9d0b12d32afd435453458b1c6/tokens/4087"],["0xd07dc4262bcdbf85190c01c996b4c06a461d2430","90473","Rarible","https://rarible.com/token/0xd07dc4262bcdbf85190c01c996b4c06a461d2430:90473"],["0x3B3ee1931Dc30C1957379FAc9aba94D1C48a5405","13201","Foundation","https://foundation.app/jenstark/multiverse-13201"],["0xb47e3cd837ddf8e4c57f05d70ab865de6e193bbb","2914","CryptoPunks","https://www.larvalabs.com/cryptopunks/details/2914"],["0xb932a70a57673d89f4acffbe830e8ed7f75fb9e0","22072","SuperRare","https://superrare.co/artwork-v2/pool-22072"],["0xabEFBc9fD2F806065b4f3C237d4b59D9A97Bcac7","2299","Zora","https://zora.co/leafilipo/2299"],["0x06012c8cf97bead5deae237070f9587f8e7a266d","1976426","CryptoKitties","https://www.cryptokitties.co/kitty/1976426"],["0xda98f59e1edecb2545d7b07b794e704ed6cf1f7a","139","Portion.io","https://app.portion.io/#exchange?ID=QmYdqAwiMsb7s1mCTgVE4ZQwohjf8nvUdGnra1J6dx5TDd"],["0x1a9efe6d9a7a977a938f03b1a549bdd9cd316432","11000010018","Nifty Gateway","https://niftygateway.com/itemdetail/secondary/0x1a9efe6d9a7a977a938f03b1a549bdd9cd316432/11000010006"],["0x495f947276749ce646f68ac8c248420045cb7b5e","63990428236934811571513178702512145453357596655980286527887248477662016962561","OpenSea","https://opensea.io/assets/0x495f947276749ce646f68ac8c248420045cb7b5e/63990428236934811571513178702512145453357596655980286527887248477662016962561"],["0xb6dae651468e9593e4581705a09c10a76ac1e0c8","1230","Async Art","https://async.art/art/master/0xb6dae651468e9593e4581705a09c10a76ac1e0c8-1230"],["0x7c40c393dc0f283f318791d746d894ddd3693572","8549","MoonCats","https://opensea.io/assets/0x7c40c393dc0f283f318791d746d894ddd3693572/8549"],["0xfbeef911dc5821886e1dda71586d90ed28174b7d","307801","KnownOrigin","https://knownorigin.io/gallery/307800-red-forest-fires"],["0xb55c5cac5014c662fdbf21a2c59cd45403c482fd","0x555559a5669969a96a656a995aa55555","Clovers","https://clovers.network/clovers/0xdfffdfffd557fd7ff55fdfdffff7ffff"],["0x2a46f2ffd99e19a89476e2f62270e0a35bbf0756","52832","MakersPlace","https://makersplace.com/jeffreylee1/garden-delights-1-of-1-60178/"],["0xd07dc4262bcdbf85190c01c996b4c06a461d2430","344495","Aito","https://thisisaito.xyz/n/0xd07dc4262bcdbf85190c01c996b4c06a461d2430/344495"],["0x6c7B6cc55d4098400aC787C8793205D3E86C37C9","84","JOYWORLD","https://www.joy.world/joy/the-fry-cult"],["0x7bd29408f11d2bfc23c34f18275bbf23bb716bc7","13396","Meebit","https://meebits.larvalabs.com/meebits/detail?index=13396"]]);const De=["ethers",{ethers:{Contract:u},provider:new f("homestead","7236f6a36152476ba61279266233a49c")}],Ee=(e,t)=>"video"===t.imageType?e:`https://ik.imagekit.io/p/${encodeURIComponent(e)}?tr=n-card`,je=e=>`https://api.allorigins.win/raw?url=${encodeURIComponent(e)}`;function Te(){return a(se,{fetcher:De,imageProxy:Ee,jsonProxy:je},a(ue,null,a(ve,null),a(Ae,{nfts:Ce}),a(pe,null)))}p.render(a(n.StrictMode,null,a(m,null,a(Te,null))),document.getElementById("root"));
