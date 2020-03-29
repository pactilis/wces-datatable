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
    "url": "iframe.html",
    "revision": "dc97e3520b0b670c0377f3e451243c1f"
  },
  {
    "url": "index.html",
    "revision": "22093a95cfe3140fe786392d467877d6"
  },
  {
    "url": "inline-entry.0-73eedab9.js",
    "revision": "90a64e3eab38a019c8669513dc1fb57b"
  },
  {
    "url": "inline-entry.0-97b9c8e7.js",
    "revision": "384027e5584643e2804b08372a5f366d"
  },
  {
    "url": "legacy/inline-entry.0-7fb3b0e2.js",
    "revision": "17def4feacf605bdfac4e0d107d1f742"
  },
  {
    "url": "legacy/inline-entry.0-a8c47c4f.js",
    "revision": "95d6294e6ccd5dbcb1257493a1264799"
  },
  {
    "url": "legacy/lit-html-d467101e.js",
    "revision": "4bfa1cdeb9d65b1946b8c60672cf899f"
  },
  {
    "url": "legacy/storybook-71786874.js",
    "revision": "198d214d1e3d0a461ec1549778a1d996"
  },
  {
    "url": "legacy/storybook-9dc97b03.js",
    "revision": "4ce411166d788b9bf9b568cd6cf62990"
  },
  {
    "url": "lit-html-862ef6f9.js",
    "revision": "07665161c2dd660741b8dbcae0040359"
  },
  {
    "url": "polyfills/core-js.577a5602a7262d6256830802d4aaab43.js",
    "revision": "ccf205728fe514f8276191669b5ea48d"
  },
  {
    "url": "polyfills/custom-elements-es5-adapter.84b300ee818dce8b351c7cc7c100bcf7.js",
    "revision": "cff507bc95ad1d6bf1a415cc9c8852b0"
  },
  {
    "url": "polyfills/dynamic-import.b745cfc9384367cc18b42bbef2bbdcd9.js",
    "revision": "ed55766050be285197b8f511eacedb62"
  },
  {
    "url": "polyfills/fetch.191258a74d74243758f52065f3d0962a.js",
    "revision": "fcdc4efda1fe1b52f814e36273ff745d"
  },
  {
    "url": "polyfills/regenerator-runtime.9090ed1c23690e3072c21a7873cad285.js",
    "revision": "9af9d9e480dfccc420d30729e319b821"
  },
  {
    "url": "polyfills/systemjs.6dfbfd8f2c3e558918ed74d133a6757a.js",
    "revision": "683aabfb9b006607885b83e45e9a1768"
  },
  {
    "url": "polyfills/webcomponents.6954abecfe8b165751e6bc9b0af6c639.js",
    "revision": "894a294495257c3d389efa3e1bd9bde7"
  },
  {
    "url": "storybook-41472cde.js",
    "revision": "a9b332b8e8bb8da5a15e62f479523de1"
  },
  {
    "url": "storybook-80cdf036.js",
    "revision": "f3586e0ea737afec546799c1b23ed579"
  }
].concat(self.__precacheManifest || []);
workbox.precaching.precacheAndRoute(self.__precacheManifest, {});

workbox.routing.registerNavigationRoute(workbox.precaching.getCacheKeyForURL("/index.html"));
