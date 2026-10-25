// 📱 巡查報告系統 PWA 背景服務線程
self.addEventListener('install', (event) => {
  self.skipWaiting();
});

self.addEventListener('activate', (event) => {
  event.waitUntil(self.clients.claim());
});

self.addEventListener('fetch', (event) => {
  // 保持線上即時透傳，不攔截任何巡查報告的上傳流量
  event.respondWith(fetch(event.request));
});
