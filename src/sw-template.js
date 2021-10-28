if (typeof importScripts === "function") {
  importScripts(
    "https://storage.googleapis.com/workbox-cdn/releases/5.1.3/workbox-sw.js"
  );
  /* global workbox */
  if (workbox) {
    console.log("Workbox is loaded");
    workbox.core.skipWaiting();
    workbox.core.clientsClaim();

    /* injection point for manifest files.  */
    workbox.precaching.precacheAndRoute(self.__WB_MANIFEST);

    /* custom cache rules */
    // 1. stylesheet
    workbox.routing.registerRoute(
      new RegExp(".css$"),
      new workbox.strategies.CacheFirst({
        cacheName: "ca-cache-stylesheets",
      })
    );

    workbox.routing.registerRoute(
      new RegExp(".(png|svg|jpg|jpeg)$"),
      new workbox.strategies.CacheFirst({
        cacheName: "ca-cache-images",
      })
    );

    workbox.routing.registerRoute(
      new RegExp("https://reqres.in/api/users/*"),
      new workbox.strategies.NetworkFirst({
        cacheName: "ca-cache-api",
      })
    );

    workbox.routing.registerRoute(
      new RegExp("https://www.whatasite.ml/*"),
      //new RegExp('http://localhost:5000/*'),
      new workbox.strategies.NetworkFirst({
        cacheName: "ca-cache-local",
      })
    );
  } else {
    // console.log('Workbox could not be loaded. No Offline support');
  }
}
