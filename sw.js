const CACHE = 'sab-v1';
const PRECACHE = ['./', './index.html', './manifest.json', './recipes.json'];

self.addEventListener('install', e => {
  e.waitUntil(caches.open(CACHE).then(c => c.addAll(PRECACHE).catch(()=>{})));
  self.skipWaiting();
});

self.addEventListener('activate', e => {
  e.waitUntil(caches.keys().then(keys => Promise.all(keys.filter(k=>k!==CACHE).map(k=>caches.delete(k)))));
  self.clients.claim();
});

self.addEventListener('fetch', e => {
  // Network-first for recipe cards (stay fresh)
  if (e.request.url.includes('/recipes/')) {
    e.respondWith(
      fetch(e.request)
        .then(r => { caches.open(CACHE).then(c=>c.put(e.request,r.clone())); return r; })
        .catch(() => caches.match(e.request))
    );
    return;
  }
  // Cache-first for everything else
  e.respondWith(
    caches.match(e.request).then(cached => {
      if (cached) return cached;
      return fetch(e.request).then(r => {
        if (!r || r.status !== 200 || r.type !== 'basic') return r;
        caches.open(CACHE).then(c => c.put(e.request, r.clone()));
        return r;
      });
    })
  );
});
