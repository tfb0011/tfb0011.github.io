// ============================================================
//  TOEIC800 マスター - Service Worker（本番用）
//  戦略: Network-first → キャッシュフォールバック
// ============================================================

const CACHE_NAME = 'toeic800-v3';

const CACHE_FILES = [
  './',
  './index.html',
  './style.css',
  './app.js',
  './data-vocab.js',
  './data-grammar.js',
  './data-part5.js',
  './data-part67.js',
  './data-mock.js',
  './manifest.json',
  './icon.svg',
];

// ---- install: 常に最新ファイルを取得してキャッシュに登録 ----
self.addEventListener('install', event => {
  event.waitUntil(
    (async () => {
      const cache = await caches.open(CACHE_NAME);
      console.log('[SW] インストール: キャッシュ登録開始');
      // cache: 'no-store' でブラウザHTTPキャッシュを完全バイパス
      await Promise.all(
        CACHE_FILES.map(url =>
          fetch(new Request(url, { cache: 'no-store' }))
            .then(res => { if (res.ok) cache.put(url, res); })
            .catch(() => {})
        )
      );
      console.log('[SW] キャッシュ登録完了');
      await self.skipWaiting();
    })()
  );
});

// ---- activate: 古いキャッシュを削除 ----
self.addEventListener('activate', event => {
  event.waitUntil(
    (async () => {
      const keys = await caches.keys();
      await Promise.all(
        keys
          .filter(key => key !== CACHE_NAME)
          .map(key => {
            console.log('[SW] 古いキャッシュを削除:', key);
            return caches.delete(key);
          })
      );
      console.log('[SW] アクティブ化完了');
      await self.clients.claim();
    })()
  );
});

// ---- fetch: Network-first 戦略 ----
self.addEventListener('fetch', event => {
  if (event.request.method !== 'GET') return;

  event.respondWith(
    (async () => {
      try {
        const networkResponse = await fetch(event.request);
        if (networkResponse && networkResponse.status === 200) {
          const cache = await caches.open(CACHE_NAME);
          cache.put(event.request, networkResponse.clone());
        }
        return networkResponse;
      } catch {
        const cached = await caches.match(event.request);
        if (cached) {
          console.log('[SW] キャッシュから返却:', event.request.url);
          return cached;
        }
        if (event.request.mode === 'navigate') {
          return caches.match('./index.html');
        }
      }
    })()
  );
});
