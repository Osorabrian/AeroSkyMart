
    (function() {
      var baseURL = "https://cdn.shopify.com/shopifycloud/checkout-web/assets/";
      var scripts = ["https://cdn.shopify.com/shopifycloud/checkout-web/assets/runtime.esm.en.b637674bb8c90695c8e5.js","https://cdn.shopify.com/shopifycloud/checkout-web/assets/321.esm.en.2a14f246632a7b95e83a.js","https://cdn.shopify.com/shopifycloud/checkout-web/assets/750.esm.en.d3d05dcbb2a7726cbea8.js","https://cdn.shopify.com/shopifycloud/checkout-web/assets/598.esm.en.81c49291ad71b7ee886f.js","https://cdn.shopify.com/shopifycloud/checkout-web/assets/app.esm.en.6b556b32ccae4996cb65.js","https://cdn.shopify.com/shopifycloud/checkout-web/assets/731.esm.en.cb6b141fdd0e9091a359.js","https://cdn.shopify.com/shopifycloud/checkout-web/assets/774.esm.en.ac8018e9f3f6de60e51c.js","https://cdn.shopify.com/shopifycloud/checkout-web/assets/465.esm.en.e955bffd06cf4169566b.js","https://cdn.shopify.com/shopifycloud/checkout-web/assets/844.esm.en.07cf81422d5259dc4e42.js","https://cdn.shopify.com/shopifycloud/checkout-web/assets/Redesign.esm.en.cd8ca950e0cdc7ffa75b.js"];
      var styles = ["https://cdn.shopify.com/shopifycloud/checkout-web/assets/321.esm.en.11b1573c35b3a114f569.css","https://cdn.shopify.com/shopifycloud/checkout-web/assets/app.esm.en.4f985f12761b60fdbbe8.css","https://cdn.shopify.com/shopifycloud/checkout-web/assets/774.esm.en.cb9c8f572540a7bca6d5.css","https://cdn.shopify.com/shopifycloud/checkout-web/assets/661.esm.en.eb37d96415d072919f4a.css"];
      var fontPreconnectUrls = ["https://fonts.shopifycdn.com"];
      var fontPrefetchUrls = ["https://fonts.shopifycdn.com/lato/lato_n4.c86cddcf8b15d564761aaa71b6201ea326f3648b.woff2?valid_until=MTY5ODgwMzM4Mw&hmac=b8fbb67dae388302e8211b33ed2c8c232f201ed9364915a0ec9bee6ce1e12378","https://fonts.shopifycdn.com/lato/lato_n7.f0037142450bd729bdf6ba826f5fdcd80f2787ba.woff2?valid_until=MTY5ODgwMzM4Mw&hmac=fb20441594db7faec1692b76184359b0430e13224167bb1b5c19c9cc11e8a838"];
      var imgPrefetchUrls = ["https://cdn.shopify.com/s/files/1/2457/7775/files/logo-account_x320.png?v=1676927984"];

      function preconnect(url, callback) {
        var link = document.createElement('link');
        link.rel = 'dns-prefetch preconnect';
        link.href = url;
        link.crossOrigin = '';
        link.onload = link.onerror = callback;
        document.head.appendChild(link);
      }

      function preconnectAssets() {
        var resources = [baseURL].concat(fontPreconnectUrls);
        var index = 0;
        (function next() {
          var res = resources[index++];
          if (res) preconnect(res[0], next);
        })();
      }

      function prefetch(url, as, callback) {
        var link = document.createElement('link');
        if (link.relList.supports('prefetch')) {
          link.rel = 'prefetch';
          link.fetchPriority = 'low';
          link.as = as;
          if (as === 'font') link.type = 'font/woff2';
          link.href = url;
          link.crossOrigin = '';
          link.onload = link.onerror = callback;
          document.head.appendChild(link);
        } else {
          var xhr = new XMLHttpRequest();
          xhr.open('GET', url, true);
          xhr.onloadend = callback;
          xhr.send();
        }
      }

      function prefetchAssets() {
        var resources = [].concat(
          scripts.map(function(url) { return [url, 'script']; }),
          styles.map(function(url) { return [url, 'style']; }),
          fontPrefetchUrls.map(function(url) { return [url, 'font']; }),
          imgPrefetchUrls.map(function(url) { return [url, 'image']; })
        );
        var index = 0;
        (function next() {
          var res = resources[index++];
          if (res) prefetch(res[0], res[1], next);
        })();
      }

      function onLoaded() {
        preconnectAssets();
        prefetchAssets();
      }

      if (document.readyState === 'complete') {
        onLoaded();
      } else {
        addEventListener('load', onLoaded);
      }
    })();
  