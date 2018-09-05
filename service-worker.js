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

importScripts("https://storage.googleapis.com/workbox-cdn/releases/3.4.1/workbox-sw.js");

/**
 * The workboxSW.precacheAndRoute() method efficiently caches and responds to
 * requests for URLs in the manifest.
 * See https://goo.gl/S9QRab
 */
self.__precacheManifest = [
  {
    "url": "404.html",
    "revision": "b53f3cfb5f757cfac32ede5282fd5862"
  },
  {
    "url": "assets/css/0.styles.0618f7b4.css",
    "revision": "5f6e1488f0e0120401a73b7a8dfa7b08"
  },
  {
    "url": "assets/img/clinics.f988d579.jpg",
    "revision": "f988d579ff5a928ca39e10deecea9ff2"
  },
  {
    "url": "assets/img/CypressDashboardTest.9c492d60.jpg",
    "revision": "9c492d60e5fad0655579261e2940ba6a"
  },
  {
    "url": "assets/img/dashboard.6d9c9160.jpg",
    "revision": "6d9c91600f593f3da72cea9d97cabef4"
  },
  {
    "url": "assets/img/DashboardThumbnail.8b0385c0.jpg",
    "revision": "8b0385c0318771acbb476f9717b1696b"
  },
  {
    "url": "assets/img/metrics.0564a0ca.jpg",
    "revision": "0564a0cac0124f55a960d45f083cf23a"
  },
  {
    "url": "assets/img/NarrativeDropdown.0df26b83.jpg",
    "revision": "0df26b831ef05510e05b76a9b79485c2"
  },
  {
    "url": "assets/img/Scrollbar_CSS_Adjustment.e7b74dfc.jpg",
    "revision": "e7b74dfcb05494a27871eab90e4d34fe"
  },
  {
    "url": "assets/img/search.83621669.svg",
    "revision": "83621669651b9a3d4bf64d1a670ad856"
  },
  {
    "url": "assets/img/sparklines.53df746d.jpg",
    "revision": "53df746d2c83590c62f1c71554f49d6e"
  },
  {
    "url": "assets/img/validations.b5c8d612.jpg",
    "revision": "b5c8d6120c1a05a673608c2a6cc47800"
  },
  {
    "url": "assets/js/10.deb74c4a.js",
    "revision": "ff8a68093bed901ef63189b8b6103d1d"
  },
  {
    "url": "assets/js/11.6b836bf2.js",
    "revision": "b796596b1ef50e68f773b0ad5c62e82d"
  },
  {
    "url": "assets/js/12.db73e4b5.js",
    "revision": "aacf7a40d1f2676e8fc4dd71bdd4fd53"
  },
  {
    "url": "assets/js/13.e9163d45.js",
    "revision": "8a427a8e99fe24af26836eb5d68c8284"
  },
  {
    "url": "assets/js/14.916f61fc.js",
    "revision": "cb67c2aaef8ae6613e97c9253e0cfeeb"
  },
  {
    "url": "assets/js/15.6ff1b8e5.js",
    "revision": "137ca0f514df5bb1e7b4d8ac0f8772f1"
  },
  {
    "url": "assets/js/16.c23a2b6d.js",
    "revision": "bf20f0162a59d70429da12afdb566a59"
  },
  {
    "url": "assets/js/17.b8542119.js",
    "revision": "6e5018105a9d8411509fd0598ef5b233"
  },
  {
    "url": "assets/js/18.f3d20159.js",
    "revision": "33605d10237d9bd8df22514cc66b2d47"
  },
  {
    "url": "assets/js/19.472e3fa7.js",
    "revision": "f5e229060a0037c5ad7434e90ddb68d2"
  },
  {
    "url": "assets/js/2.d9b0988d.js",
    "revision": "873d807fbe0b32de14317cdcb0423764"
  },
  {
    "url": "assets/js/20.6c0e11a3.js",
    "revision": "d40b4119a1f1ec3ae3121bdd90afac8f"
  },
  {
    "url": "assets/js/21.cbc624b0.js",
    "revision": "408254fbf20bedc32bc6725d960e827a"
  },
  {
    "url": "assets/js/22.afee111e.js",
    "revision": "c29fbb35a264bb9a9b27293bd42209af"
  },
  {
    "url": "assets/js/23.4c9743f8.js",
    "revision": "aa3b9125091103388986d5a919f80b63"
  },
  {
    "url": "assets/js/24.37197fbf.js",
    "revision": "f81a8591232dcc46dc3d7fa325182ca5"
  },
  {
    "url": "assets/js/25.ce770030.js",
    "revision": "39b190b1035fe86a7b3919fb5e932de4"
  },
  {
    "url": "assets/js/26.ffef31d3.js",
    "revision": "771baf0d1736de5c856722665c0cf5b2"
  },
  {
    "url": "assets/js/27.37e21c81.js",
    "revision": "4dd76c869baeb865fc56a10c7b3bca39"
  },
  {
    "url": "assets/js/28.e8e19da0.js",
    "revision": "569ffda70232a8df169a33803f849dc0"
  },
  {
    "url": "assets/js/29.bc8c5494.js",
    "revision": "29228e562b4d61f12ccb6742b60940da"
  },
  {
    "url": "assets/js/3.07850e13.js",
    "revision": "7725912474644f8c6429e03e0d2689dd"
  },
  {
    "url": "assets/js/30.0074301c.js",
    "revision": "c3e652d35299bb163444e805de84f251"
  },
  {
    "url": "assets/js/4.ae8b6d84.js",
    "revision": "cfc68b3871890903c5ee3307d5d16010"
  },
  {
    "url": "assets/js/5.398e5acf.js",
    "revision": "6932c593647350209aa007fa0a379607"
  },
  {
    "url": "assets/js/6.861493c9.js",
    "revision": "9eddb4168c2f65b2fcec96c6e7b6be98"
  },
  {
    "url": "assets/js/7.f149b18a.js",
    "revision": "42508526c1a45772e1f19a6e7be183c0"
  },
  {
    "url": "assets/js/8.90deac09.js",
    "revision": "78887e821f866e4ddb83bcd7d09d3821"
  },
  {
    "url": "assets/js/9.42b6a76f.js",
    "revision": "aaf21be091a3f80b9b855845e0f7b43e"
  },
  {
    "url": "assets/js/app.48bb9d1d.js",
    "revision": "f5c10e26a3c07efec98de4e2b5f57a2a"
  },
  {
    "url": "dashboard-thumbnail/index.html",
    "revision": "dbe1d15da347cbdd20e9aed901c482b9"
  },
  {
    "url": "dashboard-thumbnail/narrative-dropdown-panel.html",
    "revision": "23823d8f5fb7a051e175fa39c06c928b"
  },
  {
    "url": "dashboard-thumbnail/scrollbar-css-adjustments.html",
    "revision": "48b514e2f71b580d7e13b586130bc4e4"
  },
  {
    "url": "index.html",
    "revision": "297867bbd72db5254a1012216284d106"
  },
  {
    "url": "issues.html",
    "revision": "4008b23f57c0830475d62f35620ce6c4"
  },
  {
    "url": "measure-calculation/index.html",
    "revision": "67409418da474c8eb5315f6338fc64fd"
  },
  {
    "url": "redux/index.html",
    "revision": "17ce52e20cce5688a0034d9d05e234ae"
  },
  {
    "url": "redux/redux-computed-state.html",
    "revision": "dc4b2fdc31cf07dccdeaebecf86eee0d"
  },
  {
    "url": "redux/redux-middleware.html",
    "revision": "37508ce7f5642070d83e3d022b4f9160"
  },
  {
    "url": "redux/redux-observable-arrays.html",
    "revision": "ac3f68c9f29f9c674eb1121b4b85aa35"
  },
  {
    "url": "redux/redux-reducer-testing.html",
    "revision": "e150358478fb7bf71d82faeae4f0073a"
  },
  {
    "url": "redux/redux-selector-helpers.html",
    "revision": "b38e8e6f902e595b947d1d2cfc15a510"
  },
  {
    "url": "redux/redux-store.html",
    "revision": "543b6df187df969ba61fe89ca7bf24f0"
  },
  {
    "url": "search.component-tests.html",
    "revision": "acb4b6fd5c7901d92aaac300ed2d42af"
  },
  {
    "url": "testing/code-coverage.html",
    "revision": "209ce3403cd56c521ea8ec8f3e3bda12"
  },
  {
    "url": "testing/cypress-e2e-tests.html",
    "revision": "ad7e090d8b56915d13e68238165d4c83"
  },
  {
    "url": "testing/npm-audit.html",
    "revision": "ee54dd93728b97009f54ab004af7b6e8"
  },
  {
    "url": "todo/ReferentialsDiagram.html",
    "revision": "98b1cdb2f2229d8e139c4c6b72282a5d"
  },
  {
    "url": "todo/scrollbar-hover.html",
    "revision": "6448a3ae9ee5714d980e15ff0790eab5"
  }
].concat(self.__precacheManifest || []);
workbox.precaching.suppressWarnings();
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
