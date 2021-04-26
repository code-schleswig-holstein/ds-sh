/**
 * Welcome to your Workbox-powered service worker!
 *
 * You'll need to register this file in your web app and you should
 * disable HTTP caching for this file too.
 * See https://goo.gl/nhQhGp
 *
 * The rest of the code is auto-generated. Please don't update this file
 * directly; instead, make changes to your Workbox build configuration
 * and re-run your build process.
 * See https://goo.gl/2aRDsh
 */

importScripts("https://storage.googleapis.com/workbox-cdn/releases/4.3.1/workbox-sw.js");

self.addEventListener('message', (event) => {
  if (event.data && event.data.type === 'SKIP_WAITING') {
    self.skipWaiting();
  }
});

/**
 * The workboxSW.precacheAndRoute() method efficiently caches and responds to
 * requests for URLs in the manifest.
 * See https://goo.gl/S9QRab
 */
self.__precacheManifest = [
  {
    "url": "404.html",
    "revision": "b291726ed1ab24369611d6dd03b89764"
  },
  {
    "url": "assets/css/0.styles.4c7276ac.css",
    "revision": "da36e71b907aa35b99771993d9055cfa"
  },
  {
    "url": "assets/fonts/font.8973d1e9.woff2",
    "revision": "8973d1e998c655bb9536a35ac4a4c8f0"
  },
  {
    "url": "assets/fonts/font.983ffc2e.woff2",
    "revision": "983ffc2ea8bf3ca4b543b9359c0a9661"
  },
  {
    "url": "assets/fonts/font.9eeace45.woff",
    "revision": "9eeace4537a60f019f7a48c67126eb61"
  },
  {
    "url": "assets/fonts/font.b814f6f1.woff",
    "revision": "b814f6f1db27b581e9985e67bdf5f6ba"
  },
  {
    "url": "assets/img/search.83621669.svg",
    "revision": "83621669651b9a3d4bf64d1a670ad856"
  },
  {
    "url": "assets/js/1.c6b6638c.js",
    "revision": "6da72b79e0f28560295847e3213fb5b7"
  },
  {
    "url": "assets/js/10.3ed77d12.js",
    "revision": "a2354e44142a08a3c22d5a123d44d972"
  },
  {
    "url": "assets/js/11.9e1ec743.js",
    "revision": "b6451acb50f6b7cccabf677679d54b89"
  },
  {
    "url": "assets/js/12.43aea828.js",
    "revision": "ebf70332a17f30a02ad9ec8ca6e78bb4"
  },
  {
    "url": "assets/js/13.c76083f6.js",
    "revision": "9aa8c59759dd3296c9a4c0e28c824b8e"
  },
  {
    "url": "assets/js/14.90957956.js",
    "revision": "5ad8bd0c9fb7c0398b299a1d63a03e95"
  },
  {
    "url": "assets/js/15.428db9d3.js",
    "revision": "88b744582ed2dabfb51d3445880e4a83"
  },
  {
    "url": "assets/js/16.f592ec3d.js",
    "revision": "de1beb29e1984287b64b4eb617a9705f"
  },
  {
    "url": "assets/js/3.585926a9.js",
    "revision": "ab8131541b27cc04699d94d4d9654df0"
  },
  {
    "url": "assets/js/4.6d3cb57c.js",
    "revision": "26d75071f57c920b6cd5fe6d89b506ce"
  },
  {
    "url": "assets/js/5.5188d264.js",
    "revision": "cfe5357c0a32265a28690834ca6053dd"
  },
  {
    "url": "assets/js/6.07ba20c7.js",
    "revision": "af83610902977cf4de9953b1931d27b2"
  },
  {
    "url": "assets/js/7.ccd474ff.js",
    "revision": "46b137560d632861040b0ba071f8a89a"
  },
  {
    "url": "assets/js/8.57baf784.js",
    "revision": "57b5edb01b1cab9160dfc17175e9b96d"
  },
  {
    "url": "assets/js/9.4f3e6296.js",
    "revision": "47609e59b67056145077f903726921a2"
  },
  {
    "url": "assets/js/app.309e6611.js",
    "revision": "66618e5a0204065c55cc87203a7a4d19"
  },
  {
    "url": "components/buttons.html",
    "revision": "e0e4aca74102104088f0c887c2e8040d"
  },
  {
    "url": "components/index.html",
    "revision": "14ea9180537afec7e950baaf673d79d5"
  },
  {
    "url": "components/links.html",
    "revision": "053394cfe96509611c91da887c5df764"
  },
  {
    "url": "components/text-styles.html",
    "revision": "7a5498e868eca768d24f4029c9a3c9a3"
  },
  {
    "url": "icons/android-chrome-192x192.png",
    "revision": "e5a279ceb899dbcc54dcdd8d067394a1"
  },
  {
    "url": "icons/android-chrome-512x512.png",
    "revision": "883db8c12f45319fbd5b2b6a2fe8d49d"
  },
  {
    "url": "icons/apple-touch-icon-precomposed.png",
    "revision": "382147b99b2ffe77911a1cc1f5635ebe"
  },
  {
    "url": "icons/apple-touch-icon.png",
    "revision": "ba52d2291672713eb9b93e19e86acf04"
  },
  {
    "url": "icons/favicon-16x16.png",
    "revision": "4db0b048c08c5e52e46ece140888b484"
  },
  {
    "url": "icons/favicon-32x32.png",
    "revision": "a9356321ca88454e7609ecf3498096ff"
  },
  {
    "url": "icons/mstile-150x150.png",
    "revision": "d09f18b9178be7828e94a14bc3ac6164"
  },
  {
    "url": "icons/mstile-310x150.png",
    "revision": "b51946bf79ceacc22522008f87014678"
  },
  {
    "url": "icons/mstile-310x310.png",
    "revision": "c646d1337d5daaa259d9b7c78ddd0211"
  },
  {
    "url": "icons/mstile-70x70.png",
    "revision": "b8497d2094f7b0b2f84ca31ecef66842"
  },
  {
    "url": "icons/safari-pinned-tab.svg",
    "revision": "2ae37dd25eda2981ed5ce0f3695d13d6"
  },
  {
    "url": "img/dev-icon.svg",
    "revision": "2fafa241c757543af4e8f48c1fb330dc"
  },
  {
    "url": "img/itvsh-logo.svg",
    "revision": "36dc2bba308ce02ca748a29527a58208"
  },
  {
    "url": "img/logo-lg.svg",
    "revision": "c34b27af672081585bb9a7cea603667d"
  },
  {
    "url": "img/logo-sm.svg",
    "revision": "71b0b91f846a374657841297ff97c7ad"
  },
  {
    "url": "img/sh-logo.svg",
    "revision": "b2176e0fd01f7c7e7e81e85582c8108f"
  },
  {
    "url": "index.html",
    "revision": "cd6681bdf3d36fe027e6af2dbcae4d0e"
  },
  {
    "url": "projects/index.html",
    "revision": "db95e5e0ed9164f103b8faa2acc80b8b"
  }
].concat(self.__precacheManifest || []);
workbox.precaching.precacheAndRoute(self.__precacheManifest, {});
addEventListener('message', event => {
  const replyPort = event.ports[0]
  const message = event.data
  if (replyPort && message && message.type === 'skip-waiting') {
    event.waitUntil(
      self.skipWaiting().then(
        () => replyPort.postMessage({ error: null }),
        error => replyPort.postMessage({ error })
      )
    )
  }
})
