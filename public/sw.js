if(!self.define){const e=e=>{"require"!==e&&(e+=".js");let s=Promise.resolve();return c[e]||(s=new Promise(async s=>{if("document"in self){const c=document.createElement("script");c.src=e,document.head.appendChild(c),c.onload=s}else importScripts(e),s()})),s.then(()=>{if(!c[e])throw new Error(`Module ${e} didn’t register its module`);return c[e]})},s=(s,c)=>{Promise.all(s.map(e)).then(e=>c(1===e.length?e[0]:e))},c={require:Promise.resolve(s)};self.define=(s,a,n)=>{c[s]||(c[s]=Promise.resolve().then(()=>{let c={};const r={uri:location.origin+s.slice(1)};return Promise.all(a.map(s=>{switch(s){case"exports":return c;case"module":return r;default:return e(s)}})).then(e=>{const s=n(...e);return c.default||(c.default=s),c})}))}}define("./sw.js",["./workbox-432e0d0b"],(function(e){"use strict";importScripts(),e.skipWaiting(),e.clientsClaim(),e.precacheAndRoute([{url:"/_next/static/chunks/71247caf95475e3ea7f9a0f8a30beb258b23d005.12120617df70a9c35252.js",revision:"5f0ade0a2b84f07f81c1de1c6acfeb82"},{url:"/_next/static/chunks/f6078781a05fe1bcb0902d23dbbb2662c8d200b3.e451b599d448b2c1ba50.js",revision:"077e7542031dc8c905e4a8064f13eeec"},{url:"/_next/static/chunks/framework.085e84bea8b122ad7b41.js",revision:"59bb0a3271ddef6462ff12a22cebcf20"},{url:"/_next/static/chunks/main-beeb9e968b6e4f5b92ac.js",revision:"5abc8fa0e7cc89381a4eef656a5d8cb5"},{url:"/_next/static/chunks/pages/_app-0bb8cb817f93269a9695.js",revision:"b087ca9d9901187894ff376439fbc492"},{url:"/_next/static/chunks/pages/_error-4f0601949c71cd429f69.js",revision:"273dcac8fdda1fa392833a393033de36"},{url:"/_next/static/chunks/pages/index-306796ab1b571c126fca.js",revision:"5f1d5f079baeed5d6eb3d4661f7e04e0"},{url:"/_next/static/chunks/polyfills-72582ec57bbe34c511dc.js",revision:"66e31ef2328be7fae18408e3263d7995"},{url:"/_next/static/chunks/webpack-ccf5ab034a524403276a.js",revision:"8c19f623e8389f11131a054a7e17ff95"},{url:"/_next/static/p3pc91BtBsCK-BQsYhchq/_buildManifest.js",revision:"8eb8bae4bc9260fc39ec3ece99cc8802"},{url:"/_next/static/p3pc91BtBsCK-BQsYhchq/_ssgManifest.js",revision:"abee47769bf307639ace4945f9cfd4ff"},{url:"/favicon.ico",revision:"21b739d43fcb9bbb83d8541fe4fe88fa"},{url:"/img/cover.png",revision:"8f5771ad3f27909414b4f6fc24cd1fbc"},{url:"/img/hero-illustration.svg",revision:"70b29078f21f2d829ca450d4ae01ba3d"},{url:"/img/icon-192.png",revision:"d27169d080684ebb57b8387d05c4b444"},{url:"/img/icon-512.png",revision:"f1d74b43a3832183202483a40d9e9d84"},{url:"/img/logo.svg",revision:"37ec18e21a0e84e78077565dd634314d"},{url:"/manifest.json",revision:"965fccd2869d577787a9cf102279d0f8"},{url:"/vercel.svg",revision:"4b4f1876502eb6721764637fe5c41702"}],{ignoreURLParametersMatching:[]}),e.cleanupOutdatedCaches(),e.registerRoute("/",new e.NetworkFirst({cacheName:"start-url",plugins:[new e.ExpirationPlugin({maxEntries:1,maxAgeSeconds:86400,purgeOnQuotaError:!0})]}),"GET"),e.registerRoute(/^https:\/\/fonts\.(?:googleapis|gstatic)\.com\/.*/i,new e.CacheFirst({cacheName:"google-fonts",plugins:[new e.ExpirationPlugin({maxEntries:4,maxAgeSeconds:31536e3,purgeOnQuotaError:!0})]}),"GET"),e.registerRoute(/\.(?:eot|otf|ttc|ttf|woff|woff2|font.css)$/i,new e.StaleWhileRevalidate({cacheName:"static-font-assets",plugins:[new e.ExpirationPlugin({maxEntries:4,maxAgeSeconds:604800,purgeOnQuotaError:!0})]}),"GET"),e.registerRoute(/\.(?:jpg|jpeg|gif|png|svg|ico|webp)$/i,new e.StaleWhileRevalidate({cacheName:"static-image-assets",plugins:[new e.ExpirationPlugin({maxEntries:64,maxAgeSeconds:86400,purgeOnQuotaError:!0})]}),"GET"),e.registerRoute(/\.(?:js)$/i,new e.StaleWhileRevalidate({cacheName:"static-js-assets",plugins:[new e.ExpirationPlugin({maxEntries:32,maxAgeSeconds:86400,purgeOnQuotaError:!0})]}),"GET"),e.registerRoute(/\.(?:css|less)$/i,new e.StaleWhileRevalidate({cacheName:"static-style-assets",plugins:[new e.ExpirationPlugin({maxEntries:32,maxAgeSeconds:86400,purgeOnQuotaError:!0})]}),"GET"),e.registerRoute(/\.(?:json|xml|csv)$/i,new e.NetworkFirst({cacheName:"static-data-assets",plugins:[new e.ExpirationPlugin({maxEntries:32,maxAgeSeconds:86400,purgeOnQuotaError:!0})]}),"GET"),e.registerRoute(/\/api\/.*$/i,new e.NetworkFirst({cacheName:"apis",networkTimeoutSeconds:10,plugins:[new e.ExpirationPlugin({maxEntries:16,maxAgeSeconds:86400,purgeOnQuotaError:!0})]}),"GET"),e.registerRoute(/.*/i,new e.NetworkFirst({cacheName:"others",networkTimeoutSeconds:10,plugins:[new e.ExpirationPlugin({maxEntries:32,maxAgeSeconds:86400,purgeOnQuotaError:!0})]}),"GET")}));
