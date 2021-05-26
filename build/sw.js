const OFFLINE_VERSION = 2;
const CACHE_NAME = `OFFLINE_${OFFLINE_VERSION}`;
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
  "/assets/images/shopping-cart.png",
  "/assets/images/starter.png",
  "/assets/images/main_dish.png",
  "/assets/images/dessert.png",
];

const self = this;

self.addEventListener("install", (event) => {
  console.log("[ServiceWorker] install event");

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
});

self.addEventListener("message", (event) => {
  if (event.data === "skipWaiting") {
    self.skipWaiting();
  }
});

//synchronizing tabs
self.addEventListener("message", ({ data, source: { id } }) => {
  self.clients.matchAll().then((clients) => {
    clients.forEach((client) => {
      if (client.id !== id) {
        client.postMessage(data);
      }
    });
  });
});
