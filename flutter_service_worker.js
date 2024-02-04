'use strict';
const MANIFEST = 'flutter-app-manifest';
const TEMP = 'flutter-temp-cache';
const CACHE_NAME = 'flutter-app-cache';
const RESOURCES = {
  "version.json": "01b639592dcb39554046132007661d94",
"index.html": "a5e1e5ca80363d351ede61afc0ebd797",
"/": "a5e1e5ca80363d351ede61afc0ebd797",
"main.dart.js": "ebb62e30ba70ccef983852e3a005895f",
"flutter.js": "f85e6fb278b0fd20c349186fb46ae36d",
"favicon.png": "5dcef449791fa27946b3d35ad8803796",
"icons/Icon-192.png": "ac9a721a12bbc803b44f645561ecb1e1",
"icons/Icon-maskable-192.png": "c457ef57daa1d16f64b27b786ec2ea3c",
"icons/Icon-maskable-512.png": "301a7604d45b3e739efc881eb04896ea",
"icons/Icon-512.png": "96e752610906ba2a93c65f8abe1645f1",
"manifest.json": "6bfdc54bf4662e9e7b6c1bc1da7ff880",
"assets/AssetManifest.json": "6e763ac3ea24a5ed7da5e0750d0b2cd6",
"assets/NOTICES": "3ee94d0bebb40d434c3f8fd9656e6e09",
"assets/FontManifest.json": "dc3d03800ccca4601324923c0b1d6d57",
"assets/packages/cupertino_icons/assets/CupertinoIcons.ttf": "6d342eb68f170c97609e9da345464e5e",
"assets/shaders/ink_sparkle.frag": "e0197fa45cab1b7740352d3a2443fbc3",
"assets/fonts/MaterialIcons-Regular.otf": "95db9098c58fd6db106f1116bae85a0b",
"assets/assets/player_lt.png": "811a87bfbf0f5c9a3c6863cb5114269c",
"assets/assets/soccer_field.jpeg": "e137be386bb8a98d83ffcaebc7d695c9",
"assets/assets/player_dc_small.png": "f92cb5335ea423bea077ad52aa799494",
"assets/assets/section_players.jpeg": "6acd47cf50857779ea3b46d238725444",
"assets/assets/portero.png": "077ed0cc30b7acf6b0a654a667c31189",
"assets/assets/routine4.png": "bfbf3d5cd13fedb928988a7ba0eb1dd3",
"assets/assets/book.jpeg": "01428b9f7cf6b5f4aacaf31222b98bd3",
"assets/assets/routine1.png": "69e245db792b689438e586dd26224000",
"assets/assets/routine2.png": "888622b7dafe239af2b6d0fa864d19a0",
"assets/assets/player_mc.png": "a580b7d904b3d5be71fab8b52cf20fbd",
"assets/assets/section_align.jpeg": "fc3fa88142b8218667a6b90a8b02d417",
"assets/assets/question_mark.jpeg": "fd225f3bb9ef77d59fc61051fb393087",
"assets/assets/section_players1.jpeg": "5bdf78bbadf295fc54c4f2cc59011fcb",
"assets/assets/member.png": "4f99c80fec3a44c3099673a882efa58b",
"assets/assets/there_aren't_match.jpeg": "99ca2ae04424b43634f3d1944a89f455",
"assets/assets/background_payment_1.png": "7a1b7d35d4e53365151a250796ac4202",
"assets/assets/repeat.png": "6c6ff9d02ba362dcf938329e0479d38e",
"assets/assets/background_profile.jpeg": "37c8bbd4909d6e35e6337115c855c0ec",
"assets/assets/player_mcd.png": "f86fd417f3e7417f4476cc9eec54f43c",
"assets/assets/background_payment_3.png": "9dd839360ebb06afe50e01cfe0ed5f27",
"assets/assets/background_payment_2.png": "ade4cc9ae636bebd5ee850f3f942bbe3",
"assets/assets/back2.jpeg": "9d9155878348e6bc79638d3faac76cdc",
"assets/assets/paymentDate.png": "4b531811fa30416d9a00aa7c80a5bf12",
"assets/assets/card2.png": "511032c60156e2ae300ffe78803164bc",
"assets/assets/player_dc.png": "46de26834cdc01b551f5456cffec45c5",
"assets/assets/routine.png": "32d7ea839d4aba201be80e8ad5e7dc1e",
"assets/assets/card1.png": "9266d60d7ff5faee2bc55de9be3275b5",
"assets/assets/cup.png": "574b570e979260f1c2ebacbab91543e8",
"assets/assets/logo.png": "eb9ea1fc7eabc4dd4356be580695fa33",
"assets/assets/player_lt_small.png": "19bff8467bf5190133397e02048cc352",
"assets/assets/section_align_small.jpeg": "d02a096f320c3d4cf8d0f5d4eee5c41f",
"assets/assets/exercises.png": "548834e18d34012ef425a600139bcfb5",
"assets/assets/back_2.png": "7df05136a7809c93f19220deffac1447",
"assets/assets/logo_1.png": "2102832858a8bcb3713c3607ab828df2",
"assets/assets/back.jpeg": "7263b902946b51b1f95d7a6854f7d206",
"assets/assets/b_soccer_1.jpeg": "07294c1f9fe83e05ccc2f2f977ff4a4a",
"assets/assets/player_mcd_small.png": "79ca2524f6e0a5bdb8a578c5420c4620",
"assets/assets/back.png": "e55e2cc005ec85952e41b3aef25e188f",
"canvaskit/canvaskit.js": "2bc454a691c631b07a9307ac4ca47797",
"canvaskit/profiling/canvaskit.js": "38164e5a72bdad0faa4ce740c9b8e564",
"canvaskit/profiling/canvaskit.wasm": "95a45378b69e77af5ed2bc72b2209b94",
"canvaskit/canvaskit.wasm": "bf50631470eb967688cca13ee181af62"
};

// The application shell files that are downloaded before a service worker can
// start.
const CORE = [
  "main.dart.js",
"index.html",
"assets/AssetManifest.json",
"assets/FontManifest.json"];
// During install, the TEMP cache is populated with the application shell files.
self.addEventListener("install", (event) => {
  self.skipWaiting();
  return event.waitUntil(
    caches.open(TEMP).then((cache) => {
      return cache.addAll(
        CORE.map((value) => new Request(value, {'cache': 'reload'})));
    })
  );
});

// During activate, the cache is populated with the temp files downloaded in
// install. If this service worker is upgrading from one with a saved
// MANIFEST, then use this to retain unchanged resource files.
self.addEventListener("activate", function(event) {
  return event.waitUntil(async function() {
    try {
      var contentCache = await caches.open(CACHE_NAME);
      var tempCache = await caches.open(TEMP);
      var manifestCache = await caches.open(MANIFEST);
      var manifest = await manifestCache.match('manifest');
      // When there is no prior manifest, clear the entire cache.
      if (!manifest) {
        await caches.delete(CACHE_NAME);
        contentCache = await caches.open(CACHE_NAME);
        for (var request of await tempCache.keys()) {
          var response = await tempCache.match(request);
          await contentCache.put(request, response);
        }
        await caches.delete(TEMP);
        // Save the manifest to make future upgrades efficient.
        await manifestCache.put('manifest', new Response(JSON.stringify(RESOURCES)));
        return;
      }
      var oldManifest = await manifest.json();
      var origin = self.location.origin;
      for (var request of await contentCache.keys()) {
        var key = request.url.substring(origin.length + 1);
        if (key == "") {
          key = "/";
        }
        // If a resource from the old manifest is not in the new cache, or if
        // the MD5 sum has changed, delete it. Otherwise the resource is left
        // in the cache and can be reused by the new service worker.
        if (!RESOURCES[key] || RESOURCES[key] != oldManifest[key]) {
          await contentCache.delete(request);
        }
      }
      // Populate the cache with the app shell TEMP files, potentially overwriting
      // cache files preserved above.
      for (var request of await tempCache.keys()) {
        var response = await tempCache.match(request);
        await contentCache.put(request, response);
      }
      await caches.delete(TEMP);
      // Save the manifest to make future upgrades efficient.
      await manifestCache.put('manifest', new Response(JSON.stringify(RESOURCES)));
      return;
    } catch (err) {
      // On an unhandled exception the state of the cache cannot be guaranteed.
      console.error('Failed to upgrade service worker: ' + err);
      await caches.delete(CACHE_NAME);
      await caches.delete(TEMP);
      await caches.delete(MANIFEST);
    }
  }());
});

// The fetch handler redirects requests for RESOURCE files to the service
// worker cache.
self.addEventListener("fetch", (event) => {
  if (event.request.method !== 'GET') {
    return;
  }
  var origin = self.location.origin;
  var key = event.request.url.substring(origin.length + 1);
  // Redirect URLs to the index.html
  if (key.indexOf('?v=') != -1) {
    key = key.split('?v=')[0];
  }
  if (event.request.url == origin || event.request.url.startsWith(origin + '/#') || key == '') {
    key = '/';
  }
  // If the URL is not the RESOURCE list then return to signal that the
  // browser should take over.
  if (!RESOURCES[key]) {
    return;
  }
  // If the URL is the index.html, perform an online-first request.
  if (key == '/') {
    return onlineFirst(event);
  }
  event.respondWith(caches.open(CACHE_NAME)
    .then((cache) =>  {
      return cache.match(event.request).then((response) => {
        // Either respond with the cached resource, or perform a fetch and
        // lazily populate the cache only if the resource was successfully fetched.
        return response || fetch(event.request).then((response) => {
          if (response && Boolean(response.ok)) {
            cache.put(event.request, response.clone());
          }
          return response;
        });
      })
    })
  );
});

self.addEventListener('message', (event) => {
  // SkipWaiting can be used to immediately activate a waiting service worker.
  // This will also require a page refresh triggered by the main worker.
  if (event.data === 'skipWaiting') {
    self.skipWaiting();
    return;
  }
  if (event.data === 'downloadOffline') {
    downloadOffline();
    return;
  }
});

// Download offline will check the RESOURCES for all files not in the cache
// and populate them.
async function downloadOffline() {
  var resources = [];
  var contentCache = await caches.open(CACHE_NAME);
  var currentContent = {};
  for (var request of await contentCache.keys()) {
    var key = request.url.substring(origin.length + 1);
    if (key == "") {
      key = "/";
    }
    currentContent[key] = true;
  }
  for (var resourceKey of Object.keys(RESOURCES)) {
    if (!currentContent[resourceKey]) {
      resources.push(resourceKey);
    }
  }
  return contentCache.addAll(resources);
}

// Attempt to download the resource online before falling back to
// the offline cache.
function onlineFirst(event) {
  return event.respondWith(
    fetch(event.request).then((response) => {
      return caches.open(CACHE_NAME).then((cache) => {
        cache.put(event.request, response.clone());
        return response;
      });
    }).catch((error) => {
      return caches.open(CACHE_NAME).then((cache) => {
        return cache.match(event.request).then((response) => {
          if (response != null) {
            return response;
          }
          throw error;
        });
      });
    })
  );
}
