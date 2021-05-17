const CACHE_NAME = "OFFLINE_VERSION";
const URLS_TO_CACHE = ["/", "index.html", "offline.html"];
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

  event.respondWith(
    //Request beispielsweise ein Image oder API-Call

    caches
      .match(event.request)

      .then(() => {
        return fetch(event.request).catch(() => caches.match("offline.html"));
      })
  );
  //self.skipWaiting();
});

self.addEventListener("message", function (event) {
  if (event.data === "skipWaiting") {
    self.skipWaiting();
  }
});
