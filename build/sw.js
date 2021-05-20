const CACHE_NAME = "OFFLINE_VERSION";
const URLS_TO_CACHE = [
  "/",
  "/main.js",
  "/manifest.json",
  "/favicon.ico",
  "/favicon96.png",
  "/favicon192.png",
  "/favicon256.png",
  "/favicon512.png",
  "/static/js/bundle.js",
  "/static/js/vendors~main.chunk.js",
  "/static/js/main.chunk.js",
  "/static/media/shopping-cart.png",
  "/static/media/dessert.png",
  "/static/media/main-dish.png",
];

const self = this;

self.addEventListener("install", (event) => {
  console.log("[ServiceWorker] install event");
  //self.skipWaiting();

  event.waitUntil(
    (async () => {
      const cache = await caches.open(CACHE_NAME);

      await cache.addAll(URLS_TO_CACHE);
      console.log("files cached");
    })()
  );
});

self.addEventListener("activate", (event) => {
  console.log("[ServiceWorker] activate event");
  //self.skipWaiting();

  event.waitUntil(
    caches.keys().then((cacheNames) => {
      return Promise.all(
        cacheNames.map((cacheName) => {
          if (cacheName !== CACHE_NAME) {
            caches.delete(cacheName);
          } else {
            return null;
          }
        })
      );
    })
  );
});

self.addEventListener("fetch", (event) => {
  console.log("[ServiceWorker] fetch event" + event.request.url);

  self.clients.matchAll().then((clients) => {
    clients.forEach((client) => {
      client.postMessage(
        `Hi ${client.id} you are loading the path ${event.request.url}`
      );
    });
  });

  if (event.request.method === "GET") {
    event.respondWith(
      fetch(event.request).catch(() => {
        return caches.match(event.request);
      })
    );
  }

  if (event.request.method === "POST") {
    event.respondWith(
      fetch(event.request).catch(() => {
        return caches.match(event.request);
      })
    );
  }

  //self.skipWaiting();
});

self.addEventListener("message", function (event) {
  if (event.data === "skipWaiting") {
    self.skipWaiting();
  }
});
