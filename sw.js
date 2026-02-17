const cacheName = 'yaqeen-v1';
const assets = [
  '/',
  '/index.html',
  // هنا نضع أي صور أو خطوط تستخدمها
];

// تثبيت ملفات التطبيق في الذاكرة
self.addEventListener('install', e => {
  e.waitUntil(
    caches.open(cacheName).then(cache => {
      cache.addAll(assets);
    })
  );
});

// تشغيل التطبيق من الذاكرة في حال عدم وجود إنترنت
self.addEventListener('fetch', e => {
  e.respondWith(
    caches.match(e.request).then(res => {
      return res || fetch(e.request);
    })
  );
});
