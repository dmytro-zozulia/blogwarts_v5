//call install event

const cacheName = "live_version";

const cacheAssets = ["index.html", "assets/css/style.css", "assets/js/app.js"];

self.addEventListener("install", (e) => {
  //   console.log("ServiceWorker:Installed");

  e.waitUntil(
    caches
      .open(cacheName)
      .then((cache) => {
        // console.log("Service Worker: Caching files");
        cache.addAll(cacheAssets);
      })
      .then(() => self.skipWaiting())
  );
});

self.addEventListener("activate", (e) => {
  //   console.log("ServiceWorker:Activate");
  //Remove unwanted caches
  e.waitUntil(
    caches.keys().then((cacheNames) => {
      return Promise.all(
        cacheNames.map((cache) => {
          if (cache !== cacheName) {
            // console.log("serviceWorker: Clearing old cache");
            return caches.delete(cache);
          }
        })
      );
    })
  );
});
