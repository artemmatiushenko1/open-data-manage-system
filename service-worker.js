/**
 * Welcome to your Workbox-powered service worker!
 *
 * You'll need to register this file in your web app and you should
 * disable HTTP caching for this file too.
 * See https://goo.gl/nhQhGp
 *
 * The rest of the code is auto-generated. Please don't update this file
 * directly; instead, make changes to your Workbox build configuration
 * and re-run your build process.
 * See https://goo.gl/2aRDsh
 */

importScripts("https://storage.googleapis.com/workbox-cdn/releases/4.3.1/workbox-sw.js");

self.addEventListener('message', (event) => {
  if (event.data && event.data.type === 'SKIP_WAITING') {
    self.skipWaiting();
  }
});

/**
 * The workboxSW.precacheAndRoute() method efficiently caches and responds to
 * requests for URLs in the manifest.
 * See https://goo.gl/S9QRab
 */
self.__precacheManifest = [
  {
    "url": "03-01.jpg",
    "revision": "61ccd31b9a99e4dc0b2115d7a181dc71"
  },
  {
    "url": "03-02.jpg",
    "revision": "0e42c83dcc174ebfdbb611ab0956fcd9"
  },
  {
    "url": "03-03.jpg",
    "revision": "dd23072447e0798b536bd162235d14c3"
  },
  {
    "url": "03-04.jpg",
    "revision": "661a64ee2776ef94b23ba82f7ee50969"
  },
  {
    "url": "03-05.jpg",
    "revision": "6f52dcb2ccb40af28a65a4b796eb918d"
  },
  {
    "url": "03-06.jpg",
    "revision": "2643698d9412e41a449c1edee719fb29"
  },
  {
    "url": "03-07.jpg",
    "revision": "c4a788f41d803f8b9bddb5adc0513be6"
  },
  {
    "url": "03-08.jpg",
    "revision": "4c810503ec4bc1adfd29904056fc2886"
  },
  {
    "url": "03-09.jpg",
    "revision": "9c798bc91f80f84b6b0e7f7fba26d65b"
  },
  {
    "url": "03-10.jpg",
    "revision": "bb5b18b65591e9d058edbc14b02c6ba5"
  },
  {
    "url": "03-11.jpg",
    "revision": "6a88d8f48c63e79c72ec45ae84a8d9ff"
  },
  {
    "url": "04-01.jpg",
    "revision": "4bbafd5dd4000461cef55f669139b17b"
  },
  {
    "url": "05-01.jpg",
    "revision": "8d54b111a4b6b5fb4cd39e4c7261b927"
  },
  {
    "url": "06-01.jpg",
    "revision": "cf2dab320c48c5ead6fe105863629e4e"
  },
  {
    "url": "06-02.jpg",
    "revision": "aa286f8fd6540b7a7b6d36392a63f505"
  },
  {
    "url": "06-03.jpg",
    "revision": "239fa5fb2a9063f1e261ae2db81fceef"
  },
  {
    "url": "06-04.jpg",
    "revision": "a2dbf924afd6a8580ce4a2d2bcd6e049"
  },
  {
    "url": "06-05.jpg",
    "revision": "22f4f542b283cdc3d027eb664424d3c8"
  },
  {
    "url": "06-06.jpg",
    "revision": "12017ddd5b9179e8f53e93044acee998"
  },
  {
    "url": "06-07.jpg",
    "revision": "1ded65fc56da9f0008ae4ef2eacc8175"
  },
  {
    "url": "1.jpg",
    "revision": "f1ea37a492254cc85dd6fd1e89b1a6b4"
  },
  {
    "url": "1.png",
    "revision": "d41d8cd98f00b204e9800998ecf8427e"
  },
  {
    "url": "12-01.jpg",
    "revision": "cc85570b3c89f73291af87791115986a"
  },
  {
    "url": "12-02.jpg",
    "revision": "f2b24c5c4beb21d5302c64b59445927a"
  },
  {
    "url": "12-03.jpg",
    "revision": "61fe98dff39d0887978deb0af605571b"
  },
  {
    "url": "12-04.jpg",
    "revision": "ff2468e7fbb03e034be0ffd7312dc7d9"
  },
  {
    "url": "12-05.jpg",
    "revision": "a126fe17514d81279c677666fd459d9d"
  },
  {
    "url": "12-06.jpg",
    "revision": "c25686b2f77ac7c5a2d4706f43e40132"
  },
  {
    "url": "12-07.jpg",
    "revision": "de17f3eb1df503250bcf1a5a4b533eec"
  },
  {
    "url": "12-08.jpg",
    "revision": "f3b58c768c18919a6fa2ab59ea6627db"
  },
  {
    "url": "13-01.jpg",
    "revision": "b22f06060909d43d796a8ffd4b0743a0"
  },
  {
    "url": "13-02.jpg",
    "revision": "2d2bca0518716a8dfaf37ef5c15e54ee"
  },
  {
    "url": "13-03.jpg",
    "revision": "fec1a3db903dc05c462fb6f384a400d6"
  },
  {
    "url": "2.jpg",
    "revision": "572bc2e4ef3efb7c81bbbcac5f09147b"
  },
  {
    "url": "3.jpg",
    "revision": "248757985bb49f73624c6923057530ac"
  },
  {
    "url": "4.jpg",
    "revision": "407c52446e2e463c4f8e494d52dbe485"
  },
  {
    "url": "404.html",
    "revision": "7d10b10630bb6b8254f65136a814172e"
  },
  {
    "url": "5.jpg",
    "revision": "7e861769b640afa00fcc0ac4b72d9c52"
  },
  {
    "url": "assets/css/0.styles.445c820a.css",
    "revision": "7f015db3e66e0edd0edcee08eed5e1eb"
  },
  {
    "url": "assets/img/create-metadata-key.b0cfde8d.png",
    "revision": "b0cfde8def7ef7da5c595ab55fe0281c"
  },
  {
    "url": "assets/img/create-type.86a7184b.png",
    "revision": "86a7184beee9f7994bae6e540007ba44"
  },
  {
    "url": "assets/img/delete-metadata-key.059971c1.png",
    "revision": "059971c1a6aa2fe67a950001bced3fc8"
  },
  {
    "url": "assets/img/delete-type-by-id.fc7a7c24.png",
    "revision": "fc7a7c248c1de38b71c5664ef4a27048"
  },
  {
    "url": "assets/img/get-all-metadata-keys.d18ec182.png",
    "revision": "d18ec182e9dda6da1d347d3b7319c9b3"
  },
  {
    "url": "assets/img/get-all-types.193c475a.png",
    "revision": "193c475a53982f10c9b27373786ad13b"
  },
  {
    "url": "assets/img/get-metadata-key-by-id.89dab7e1.png",
    "revision": "89dab7e11bbaa25b2177ff1ebc6c612b"
  },
  {
    "url": "assets/img/get-type-by-id.9700fafc.png",
    "revision": "9700fafc5309d3d976ae4af6b7c625fb"
  },
  {
    "url": "assets/img/search.83621669.svg",
    "revision": "83621669651b9a3d4bf64d1a670ad856"
  },
  {
    "url": "assets/img/SQL_scheme.b6684a80.png",
    "revision": "b6684a80a32870bb6118a80c8aeff2f3"
  },
  {
    "url": "assets/img/update-metadata-key-by-id.4462b176.png",
    "revision": "4462b176a62c69589480760f9450cdce"
  },
  {
    "url": "assets/img/update-type-by-id.cc12a2cd.png",
    "revision": "cc12a2cd1a206f8d71095e14ce45a363"
  },
  {
    "url": "assets/js/10.01d8e812.js",
    "revision": "135383e37e9f4f687ab1f33ca46b6cea"
  },
  {
    "url": "assets/js/11.e90ca262.js",
    "revision": "e45a4a105eb90e8b291b84d251298194"
  },
  {
    "url": "assets/js/12.cd56407f.js",
    "revision": "95fa4098449e58a4b502ff1b664685ca"
  },
  {
    "url": "assets/js/13.b62fd117.js",
    "revision": "b8c753cd72894d2810dfde0ec57ccdd5"
  },
  {
    "url": "assets/js/14.c77a2fa0.js",
    "revision": "88449c133cb4257cbf7c5d6d1da89fe9"
  },
  {
    "url": "assets/js/15.cb8ff6d3.js",
    "revision": "1b8869ed39373fa183c8762c28350b19"
  },
  {
    "url": "assets/js/16.f545d272.js",
    "revision": "5ffce76a53da413bdbd9f9ec15406154"
  },
  {
    "url": "assets/js/17.892ad8ee.js",
    "revision": "15e715e6c27d4ff330b8271f9f300491"
  },
  {
    "url": "assets/js/18.fd3acb5c.js",
    "revision": "60f87158a63c34e24cb9a068622e29b5"
  },
  {
    "url": "assets/js/19.3d56db05.js",
    "revision": "88c7be85a96dc0cc35e1ffb380c9cc42"
  },
  {
    "url": "assets/js/2.574fa552.js",
    "revision": "ea577ccaa82e2d517999a3bdf16f6d07"
  },
  {
    "url": "assets/js/20.83a5a2ef.js",
    "revision": "d6fc44a5a5dfdd114537ca858055fa80"
  },
  {
    "url": "assets/js/21.36705384.js",
    "revision": "705765d4517ca258df3ea774209ee8e4"
  },
  {
    "url": "assets/js/22.73867127.js",
    "revision": "ceeda20ebcc756bf58ce9b04e0e89e99"
  },
  {
    "url": "assets/js/23.38538839.js",
    "revision": "a29b5846fd4e0fe41f8b26998ee0bb5e"
  },
  {
    "url": "assets/js/24.75055673.js",
    "revision": "c053cf0dfc238d79d885d646922a53f0"
  },
  {
    "url": "assets/js/25.04de054e.js",
    "revision": "f5f190e5301c91df4fb41b9151ee5d9b"
  },
  {
    "url": "assets/js/26.6c7b5512.js",
    "revision": "1a5622a17c284510922409680c793099"
  },
  {
    "url": "assets/js/28.0f7d9104.js",
    "revision": "66daad47dbb345be7a6911b6e121da1f"
  },
  {
    "url": "assets/js/3.3d6b4c45.js",
    "revision": "afe7a41f013891e369734f083af08c6f"
  },
  {
    "url": "assets/js/4.66db50f7.js",
    "revision": "55b59fa214776f73d4c437f37353dc86"
  },
  {
    "url": "assets/js/5.2c0fb0a8.js",
    "revision": "8acc44ba200d114be212a860c99d6d85"
  },
  {
    "url": "assets/js/6.fb53ca0d.js",
    "revision": "c13b79aaaa876ef3da49ff68f9ebecad"
  },
  {
    "url": "assets/js/7.f08b25df.js",
    "revision": "1b2432bab498621be4725bffe5d79346"
  },
  {
    "url": "assets/js/8.69b4c58c.js",
    "revision": "d7c60d919482cdb3e38c0e4f77ac115f"
  },
  {
    "url": "assets/js/9.b27284f8.js",
    "revision": "810bcf1f1fb3763be01117ea59c5699c"
  },
  {
    "url": "assets/js/app.ca2400fa.js",
    "revision": "c40770578b29edc39a3e6db2c6ec4222"
  },
  {
    "url": "conclusion/index.html",
    "revision": "273c4aae4c9a96bff9dda0dde127a7d2"
  },
  {
    "url": "design/index.html",
    "revision": "9ecaed142dbdb17a3b6d7f1b0afeb9a9"
  },
  {
    "url": "index.html",
    "revision": "b58cb8c8e8dd29a2ba6defad8d193460"
  },
  {
    "url": "intro/index.html",
    "revision": "5d2fce4f48828e419aee7d8997bc0c55"
  },
  {
    "url": "license.html",
    "revision": "70a2edbdcd1a16b29dc6ec11e14ab937"
  },
  {
    "url": "myAvatar.png",
    "revision": "b76db1e62eb8e7fca02a487eb3eac10c"
  },
  {
    "url": "requirements/index.html",
    "revision": "349fbc3c51e41d4607919352e5bce6ea"
  },
  {
    "url": "requirements/stakeholders-needs.html",
    "revision": "c0e840721160a3f11ffa9e40015f30a9"
  },
  {
    "url": "requirements/state-of-the-art.html",
    "revision": "f6cb0bfaeff52400d5f42f90196a3250"
  },
  {
    "url": "software/index.html",
    "revision": "cb7f00dc4b1b81127478446d5ab938fd"
  },
  {
    "url": "test/index.html",
    "revision": "7d456a9476778116f1802ce2083fbcf6"
  },
  {
    "url": "use cases/DataConsumer.html",
    "revision": "f8c688b3098204f888ddcb80169e3d68"
  },
  {
    "url": "use cases/DataPublisher.html",
    "revision": "51c1beb6561ad98e79ead0145ada3b45"
  },
  {
    "url": "use cases/index.html",
    "revision": "5c40dbf751a7502247457a40721e3cc2"
  }
].concat(self.__precacheManifest || []);
workbox.precaching.precacheAndRoute(self.__precacheManifest, {});
addEventListener('message', event => {
  const replyPort = event.ports[0]
  const message = event.data
  if (replyPort && message && message.type === 'skip-waiting') {
    event.waitUntil(
      self.skipWaiting().then(
        () => replyPort.postMessage({ error: null }),
        error => replyPort.postMessage({ error })
      )
    )
  }
})
