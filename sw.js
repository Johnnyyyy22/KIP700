// Offline support: app shell is cached on install; manual page images are cached as you view them
// (or all at once via the "Save all figures for offline" button).
const SHELL='kip700-shell-v1', IMG='kip700-img';
self.addEventListener('install',e=>{e.waitUntil(caches.open(SHELL).then(c=>c.addAll(['./','index.html','manifest.webmanifest','icon-192.png','icon-512.png'])).then(()=>self.skipWaiting()));});
self.addEventListener('activate',e=>{e.waitUntil(caches.keys().then(ks=>Promise.all(ks.filter(k=>k!==SHELL&&k!==IMG).map(k=>caches.delete(k)))).then(()=>self.clients.claim()));});
self.addEventListener('fetch',e=>{
  const r=e.request;if(r.method!=='GET')return;
  const u=new URL(r.url);if(u.origin!==location.origin)return;
  if(u.pathname.includes('/img/')){
    e.respondWith(caches.open(IMG).then(async c=>{const m=await c.match(r);if(m)return m;const n=await fetch(r);if(n.ok)c.put(r,n.clone());return n;}));
    return;}
  // network-first for the app shell so updates arrive, fall back to cache offline
  e.respondWith(fetch(r).then(n=>{const cp=n.clone();caches.open(SHELL).then(c=>c.put(r,cp));return n;}).catch(()=>caches.match(r).then(m=>m||caches.match('index.html'))));
});
