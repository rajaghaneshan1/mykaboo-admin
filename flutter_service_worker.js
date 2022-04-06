'use strict';
const MANIFEST = 'flutter-app-manifest';
const TEMP = 'flutter-temp-cache';
const CACHE_NAME = 'flutter-app-cache';
const RESOURCES = {
  ".git/config": "920a11de313bfb8d93d81f4a3a5b71b6",
".git/description": "a0a7c3fff21f2aea3cfa1d0316dd816c",
".git/HEAD": "4cf2d64e44205fe628ddd534e1151b58",
".git/hooks/applypatch-msg.sample": "ce562e08d8098926a3862fc6e7905199",
".git/hooks/commit-msg.sample": "579a3c1e12a1e74a98169175fb913012",
".git/hooks/fsmonitor-watchman.sample": "ea587b0fae70333bce92257152996e70",
".git/hooks/post-update.sample": "2b7ea5cee3c49ff53d41e00785eb974c",
".git/hooks/pre-applypatch.sample": "054f9ffb8bfe04a599751cc757226dda",
".git/hooks/pre-commit.sample": "305eadbbcd6f6d2567e033ad12aabbc4",
".git/hooks/pre-merge-commit.sample": "39cb268e2a85d436b9eb6f47614c3cbc",
".git/hooks/pre-push.sample": "2c642152299a94e05ea26eae11993b13",
".git/hooks/pre-rebase.sample": "56e45f2bcbc8226d2b4200f7c46371bf",
".git/hooks/pre-receive.sample": "2ad18ec82c20af7b5926ed9cea6aeedd",
".git/hooks/prepare-commit-msg.sample": "2b5c047bdb474555e1787db32b2d2fc5",
".git/hooks/push-to-checkout.sample": "c7ab00c7784efeadad3ae9b228d4b4db",
".git/hooks/update.sample": "647ae13c682f7827c22f5fc08a03674e",
".git/info/exclude": "036208b4a1ab4a235d75c181e685e5a3",
"assets/AssetManifest.json": "ac3d5fb8072964626a4efb7e3681b24e",
"assets/assets/burgermenu/events.png": "4ba3bdf98f2e60c8feecaa46f81161b9",
"assets/assets/burgermenu/favorites.png": "1c0898d9e2f2abed02e46eeec05c155a",
"assets/assets/burgermenu/friends.png": "d6397318dd1abb3228b3881b85fe922c",
"assets/assets/burgermenu/invite_friends.png": "c9243b9cd853bef800768e1ae8e1c4af",
"assets/assets/burgermenu/my_posts.png": "4884c6d5ed00fca09e402abd9f003cab",
"assets/assets/burgermenu/news.png": "0147fd270cc637efea6799c22b145de0",
"assets/assets/burgermenu/notifications.png": "751c0f3fc5d12f9c55afe811270c434c",
"assets/assets/burgermenu/privacy.png": "20510170f638b7301f63cbd639aa0f83",
"assets/assets/burgermenu/settings.png": "a2760d8d3f5cc50c9ecb1f6010d20991",
"assets/assets/categories/accidents.png": "350d0d95200e396edcebe2f543d5a3e6",
"assets/assets/categories/all.png": "06302a1c0b4ec102f08251bd73f39515",
"assets/assets/categories/carnival.png": "8bbf17292cb6c0d17b9e87b895159e48",
"assets/assets/categories/concerts.png": "cd3b36537ccd63980125327ef6ce301e",
"assets/assets/categories/crime.png": "21d691ffa1c52113eea8fbc4e8fec6cf",
"assets/assets/categories/eventCircus.png": "85b588f8a7bdd0731c100f0c466b2dac",
"assets/assets/categories/eventConcert.png": "7ef1a734d1f565626f8ddca324131634",
"assets/assets/categories/eventConference.png": "4dc966461a2a86eb121681b0bb71ca81",
"assets/assets/categories/events.png": "054f3a4b710db83feb3915ad0fd8ee47",
"assets/assets/categories/eventWedding.png": "9245698effd475d2e30deb6f90b3bc0b",
"assets/assets/categories/faith.png": "b10eed5c785b60884dec962c6bf101a8",
"assets/assets/categories/law.png": "325b276e0c904658fd7bc5ad252e22b6",
"assets/assets/categories/music.png": "1a98be44d83e487b540365f23a907abd",
"assets/assets/categories/news.png": "50b63c50ff1e95230e47dbe4ab7e3737",
"assets/assets/categories/politics.png": "d314d9e3109c01e99af044c986f339fd",
"assets/assets/categories/sports.png": "b096ef2147c8c920845746b5fc9157e5",
"assets/assets/categories/tech.png": "3bfd82682a2b31397c01876bf48374c7",
"assets/assets/categories/travel.png": "8af2c21540304f7203587817ac716d7b",
"assets/assets/common/address.png": "b50f107c32b7b9b0b9782ce79b975bd1",
"assets/assets/common/birthday.png": "977cfab8fb03a99cd0179e9148b89e97",
"assets/assets/common/chat.png": "119e47e077596038122cd42eb08bef56",
"assets/assets/common/crime.png": "1f568299753aaab5b5c2696c5a6778c6",
"assets/assets/common/dashed_border.png": "9781a0701c4dc97fc9ce8b092896ab37",
"assets/assets/common/date_field.png": "7b930b89397690f9ada820790729ecaa",
"assets/assets/common/dining.png": "199e26981c013fd98064a5b6ef23e360",
"assets/assets/common/email.png": "6d24b92ff2e5870d47698e848cf2f5c2",
"assets/assets/common/entertainment.png": "6ae42a8305bc430bbd7f94268138029b",
"assets/assets/common/events.png": "a43e09edbf9b1bef09c908c6a706f39f",
"assets/assets/common/language.png": "4b4cf0882d78a478c4db2f19a955e81f",
"assets/assets/common/location.png": "654d7b032d57e668cdfffb1bd13b5d82",
"assets/assets/common/menu_dot.png": "4bea53fbd97e527bffd5392e85dafda4",
"assets/assets/common/menu_dot_vertical.png": "a4f5baddee63b1a21dade4f3f0bb838a",
"assets/assets/common/name.png": "3818edc3a55555eee6fa5eed5abe46e9",
"assets/assets/common/phone.png": "d9d33939bdd45c912e73e7f9a365353d",
"assets/assets/common/politics.png": "66d329ffc07099720807e0b3bd74f909",
"assets/assets/common/search_filter.png": "dd0b559068eed8d46dea50370a903568",
"assets/assets/common/security.png": "d65b19696517caadfd19604791186034",
"assets/assets/common/sort_icon.png": "7c0a6e156e16a7968018fa04ddebec64",
"assets/assets/common/sports.png": "49b98f16e45871710e92a2f95984894e",
"assets/assets/common/user_name.png": "ece19074dfaf151ca04690db6a371a7e",
"assets/assets/common/wine_tasting.png": "e54abecfbff893605453033665649810",
"assets/assets/fonts/arial/arial.ttf": "5995c725ca5a13be62d3dc75c2fc59fc",
"assets/assets/home/feed.png": "742053f3a334501d782f7f5931585b27",
"assets/assets/home/home.png": "7936410f11f31c14d176841abe8ffef5",
"assets/assets/home/post.png": "2dd7ba31a0cbc68c9596dec84c844ba2",
"assets/assets/home/profile.png": "ef9fdcfdb8e75d8afa83a962ae6dce0c",
"assets/assets/home/saved.png": "4c62c4afae6ef833fd27414946e4eedb",
"assets/assets/job/all.png": "9a1e23464df44375521bdec0f8940f73",
"assets/assets/job/arts.png": "9cf54bda13cdffa26d436064c37ff2f4",
"assets/assets/job/auto.png": "56730e765dea77b6609617c07d4937e2",
"assets/assets/job/carpenter.png": "6793ed22837a92aef4884757a8e6a71d",
"assets/assets/job/sales.png": "9d23850b4efdb70cec709f51fcf42fce",
"assets/assets/login_signup/forgot_password.png": "f7bb456223d5c44bd27829eee7e63e58",
"assets/assets/login_signup/language.png": "21ff15adab4a6e15f843ee8ad8aef9f9",
"assets/assets/login_signup/reset_password.png": "c47de90c64a2e9023467d7183e78e309",
"assets/assets/login_signup/signup_successful.png": "e6b0cfaa9c5d31a81adbf5e7499ec7e5",
"assets/assets/login_signup/speaker.png": "81223d5ff66da1999478111858beb205",
"assets/assets/news/add_event.png": "1d6415770b86cb1d65403fd55d5d4e21",
"assets/assets/news/add_job.png": "18fd4f813c121e1c69fdd2610a0185fa",
"assets/assets/news/add_news.png": "5f6a46e0493f8664169275e2412db335",
"assets/assets/news/add_to_calendar.png": "4118a5ee9a373cb350f34763a484e0f0",
"assets/assets/news/all_news.png": "06302a1c0b4ec102f08251bd73f39515",
"assets/assets/news/archive_rounded.png": "b428e0808c323f7a8a46023c22b95ff6",
"assets/assets/news/block_user.png": "94c32c15f0bda79077ec7c7aa14d67d8",
"assets/assets/news/comment.png": "f0839e4111ff6a0a692aa33012ccf8da",
"assets/assets/news/concerts.png": "78cef42e55f6793db3c010ec31123b77",
"assets/assets/news/copy_link.png": "a51a11cb19b7e514a8343fbd98363a9a",
"assets/assets/news/delete_rounded.png": "50d843ccdf3e529fbc534ebc56dad585",
"assets/assets/news/dislike.png": "48c2227b29989c81632cbcfe6d948ddc",
"assets/assets/news/events.png": "054f3a4b710db83feb3915ad0fd8ee47",
"assets/assets/news/heart.png": "6abfc7265aad03260c8874dfcd1e4821",
"assets/assets/news/hide.png": "8936644cf2467fe4439819114a397f53",
"assets/assets/news/like.png": "fadd35b66d802a6240b585bd3903052e",
"assets/assets/news/marker.png": "847e66cafd4d4a7574ccac32a56bc8a6",
"assets/assets/news/messenger.png": "3b867959ec50863a67aa717407880221",
"assets/assets/news/politics.png": "ee234fe9138b863ea0ac331fc5e9a11f",
"assets/assets/news/report.png": "808a7eb93c037f5dee3f59ca36416f38",
"assets/assets/news/save.png": "61c485ce727d61472cb0961fe4a58a5c",
"assets/assets/news/see_less.png": "f0c7719d23d52840eb08943996b1eb3d",
"assets/assets/news/see_more.png": "d217f26168fc89b014bc89aeb50d2fb2",
"assets/assets/news/share.png": "9768ed21439b0d56ece57ae18567b510",
"assets/assets/news/share_new_post.png": "235faedd28f26a944670b08434be325e",
"assets/assets/news/share_rounded.png": "67d7d12e235bc7f1a8b663f624e62d26",
"assets/assets/news/sports.png": "d34f6bb18f13f51651db8080a815ace1",
"assets/assets/news/theft.png": "6dfcd4a401540f281a57f7c62df8306c",
"assets/assets/news/upload_image_placeholder.png": "06ca9165e8ebf8e2a3f3c69e121df02e",
"assets/assets/notifications/remove.png": "c2d17d5777889ed359b487587383cd62",
"assets/assets/notifications/report.png": "c3f15673b3e1d2373c5b820db239dfb3",
"assets/assets/notifications/sleep.png": "b0bfd8e30060023cf34fd4420ffe8241",
"assets/assets/profile/block.png": "d24e94b98867a5c480659743a64c00ff",
"assets/assets/profile/camera.png": "f9eb27f00e6c83f63c5670c9edcd0967",
"assets/assets/profile/gallery.png": "111f8df902bcfd429b7690898a016707",
"assets/assets/profile/hide_user.png": "fa2239278c1a9560c8ac4b34d583af22",
"assets/assets/profile/notifications.png": "9d300694d5d92d655785e125c63af3f1",
"assets/assets/profile/profile_image.png": "f3781888394a3d7e7582542a11193aab",
"assets/assets/profile/report_post.png": "95ee782e58310efcfe36ff97745f9cf0",
"assets/assets/profile/total_post.png": "8bb82058b4ffb3781a8f655ddebf1e10",
"assets/assets/profile/unfollow.png": "937212907b2ed0b83f1920ba46739e06",
"assets/assets/profile/upload_photo.png": "f1342655ffb8367e507846610a85bf7b",
"assets/assets/referral/contact.png": "eb0c0d3842b3ee9d34cfcb91eea48406",
"assets/assets/referral/facebook.png": "42382edc3dee0753c02c1c32a926c80d",
"assets/assets/referral/google_plus.png": "dca483970ad270bbe5285bcc8f70501c",
"assets/assets/referral/instagram.png": "da31371b90897b74afd4251374f82dbb",
"assets/assets/referral/messenger.png": "b8a4e53d664474fbd802059a82447952",
"assets/assets/referral/refer.png": "0cbb606c05fa915c4638fce17ac259e2",
"assets/assets/referral/whatsapp.png": "500c4cb45ee622406788ee0bc4acb79c",
"assets/FontManifest.json": "0236d8131ec52ac914efd320c0b9c5f9",
"assets/fonts/MaterialIcons-Regular.otf": "7e7a6cccddf6d7b20012a548461d5d81",
"assets/NOTICES": "2d92d39152c95a7ffa832505992f6144",
"assets/packages/cupertino_icons/assets/CupertinoIcons.ttf": "6d342eb68f170c97609e9da345464e5e",
"canvaskit/canvaskit.js": "c2b4e5f3d7a3d82aed024e7249a78487",
"canvaskit/canvaskit.wasm": "4b83d89d9fecbea8ca46f2f760c5a9ba",
"canvaskit/profiling/canvaskit.js": "ae2949af4efc61d28a4a80fffa1db900",
"canvaskit/profiling/canvaskit.wasm": "95e736ab31147d1b2c7b25f11d4c32cd",
"favicon.png": "5dcef449791fa27946b3d35ad8803796",
"icons/Icon-192.png": "ac9a721a12bbc803b44f645561ecb1e1",
"icons/Icon-512.png": "96e752610906ba2a93c65f8abe1645f1",
"icons/Icon-maskable-192.png": "c457ef57daa1d16f64b27b786ec2ea3c",
"icons/Icon-maskable-512.png": "301a7604d45b3e739efc881eb04896ea",
"index.html": "2ac98ac9ff59cb6623d5d655b1878803",
"/": "2ac98ac9ff59cb6623d5d655b1878803",
"main.dart.js": "a91d6909925ef0f6679050f7beb64d0a",
"manifest.json": "1e403faef9c4aff01c2ff1dc13bef6af",
"version.json": "8053ffd70f157bac957562243b7bb2c2"
};

// The application shell files that are downloaded before a service worker can
// start.
const CORE = [
  "/",
"main.dart.js",
"index.html",
"assets/NOTICES",
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
        // lazily populate the cache.
        return response || fetch(event.request).then((response) => {
          cache.put(event.request, response.clone());
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
