
export default {
  bootstrap: () => import('./main.server.mjs').then(m => m.default),
  inlineCriticalCss: true,
  baseHref: '/E-Comerce/',
  locale: undefined,
  routes: [
  {
    "renderMode": 2,
    "redirectTo": "/E-Comerce/login",
    "route": "/E-Comerce"
  },
  {
    "renderMode": 2,
    "preload": [
      "chunk-3BOTIIIV.js",
      "chunk-NIOZYWYZ.js"
    ],
    "route": "/E-Comerce/login"
  },
  {
    "renderMode": 2,
    "preload": [
      "chunk-33IDF7WA.js",
      "chunk-NIOZYWYZ.js"
    ],
    "route": "/E-Comerce/register"
  },
  {
    "renderMode": 2,
    "preload": [
      "chunk-TZSA6T4Z.js",
      "chunk-NIOZYWYZ.js"
    ],
    "route": "/E-Comerce/forget"
  },
  {
    "renderMode": 2,
    "preload": [
      "chunk-P4F3E6PP.js",
      "chunk-3I2CUNVT.js",
      "chunk-K7JNYOXB.js",
      "chunk-VTBKJ64V.js",
      "chunk-RJW4F5IF.js"
    ],
    "route": "/E-Comerce/home"
  },
  {
    "renderMode": 2,
    "preload": [
      "chunk-5R76BZUV.js"
    ],
    "route": "/E-Comerce/brands"
  },
  {
    "renderMode": 2,
    "preload": [
      "chunk-LWUWSOCA.js",
      "chunk-VTBKJ64V.js"
    ],
    "route": "/E-Comerce/cart"
  },
  {
    "renderMode": 2,
    "preload": [
      "chunk-NIVMSER7.js",
      "chunk-RJW4F5IF.js"
    ],
    "route": "/E-Comerce/category"
  },
  {
    "renderMode": 2,
    "preload": [
      "chunk-UPW3IM2E.js",
      "chunk-POJF7H73.js"
    ],
    "route": "/E-Comerce/allorders"
  },
  {
    "renderMode": 2,
    "preload": [
      "chunk-6HSEJBVD.js",
      "chunk-PNU75DGW.js",
      "chunk-VTBKJ64V.js"
    ],
    "route": "/E-Comerce/products"
  },
  {
    "renderMode": 2,
    "preload": [
      "chunk-4C5HPJJ5.js"
    ],
    "route": "/E-Comerce/product-details"
  },
  {
    "renderMode": 2,
    "preload": [
      "chunk-L5X22SP2.js",
      "chunk-3I2CUNVT.js",
      "chunk-VTBKJ64V.js"
    ],
    "route": "/E-Comerce/wishlist"
  },
  {
    "renderMode": 1,
    "preload": [
      "chunk-2CS35TKD.js",
      "chunk-POJF7H73.js",
      "chunk-NIOZYWYZ.js"
    ],
    "route": "/E-Comerce/checkout/*"
  },
  {
    "renderMode": 1,
    "preload": [
      "chunk-AFSM6H7M.js",
      "chunk-PNU75DGW.js",
      "chunk-K7JNYOXB.js",
      "chunk-VTBKJ64V.js"
    ],
    "route": "/E-Comerce/details/*"
  },
  {
    "renderMode": 2,
    "preload": [
      "chunk-AVHEB64D.js"
    ],
    "route": "/E-Comerce/**"
  }
],
  entryPointToBrowserMapping: undefined,
  assets: {
    'index.csr.html': {size: 4407, hash: 'bdb6dc664941d2a0bc21078755a96b4edc16df43df9319cf3d4c6e029ddf4299', text: () => import('./assets-chunks/index_csr_html.mjs').then(m => m.default)},
    'index.server.html': {size: 1471, hash: '11dd816c0170711673cda0073f2d1bd86c577fc8a5fc21b32e103b5363b0e5da', text: () => import('./assets-chunks/index_server_html.mjs').then(m => m.default)},
    'login/index.html': {size: 16732, hash: 'ecaaf61b46fac8fa76c7ed6d9a90c139e37e88bd3e5116535828818ef84e2326', text: () => import('./assets-chunks/login_index_html.mjs').then(m => m.default)},
    'forget/index.html': {size: 16732, hash: 'bce66b1703c50c135b293f4f290959eaaf31320017d6a5c792f5f66b7921aae3', text: () => import('./assets-chunks/forget_index_html.mjs').then(m => m.default)},
    'register/index.html': {size: 16732, hash: '5bab269711caa4ac28bc80f598bd659fa947cfc2b45f589eda796c379b5d7822', text: () => import('./assets-chunks/register_index_html.mjs').then(m => m.default)},
    'brands/index.html': {size: 16680, hash: '5057b60b7ca7c4402b03dcff37cace7e006641f93cd3de793e513eeaf90f1ef2', text: () => import('./assets-chunks/brands_index_html.mjs').then(m => m.default)},
    'category/index.html': {size: 16732, hash: '0ecd648096e2afbb22eefee267c9cd8bc4461298dc8103ba341bd12a8ca560d0', text: () => import('./assets-chunks/category_index_html.mjs').then(m => m.default)},
    'cart/index.html': {size: 16732, hash: '5668e660c9437cd22ffc401f71774d455869c871ee57c641ddb329018e64151e', text: () => import('./assets-chunks/cart_index_html.mjs').then(m => m.default)},
    'product-details/index.html': {size: 16680, hash: '7caeead81d0d7de796d756958213e9839007bbe7f2c764570902579fcd3c0e52', text: () => import('./assets-chunks/product-details_index_html.mjs').then(m => m.default)},
    'products/index.html': {size: 16784, hash: '565ccc8ef2fba40d8ef5b2b070412a5f77e867c84ef4f8e2539e1200129a7735', text: () => import('./assets-chunks/products_index_html.mjs').then(m => m.default)},
    'allorders/index.html': {size: 16732, hash: 'e4b46c8dd856ef125c1c39528c2f83a74b3b7dd5415f109ddbd4ce3954ed236b', text: () => import('./assets-chunks/allorders_index_html.mjs').then(m => m.default)},
    'wishlist/index.html': {size: 16784, hash: '401bce25248ed6ffe09b2d2d1b8393a6bc11626541bd6561bcf897c6d3c1a7db', text: () => import('./assets-chunks/wishlist_index_html.mjs').then(m => m.default)},
    'home/index.html': {size: 16888, hash: '4ec6d03b77a65a5b7c9275e418c70d3d35f65afc96ddcca1f2fd7a0209a0704d', text: () => import('./assets-chunks/home_index_html.mjs').then(m => m.default)},
    'styles-EVO5Z5QT.css': {size: 209165, hash: 'GJ8hcZtGItw', text: () => import('./assets-chunks/styles-EVO5Z5QT_css.mjs').then(m => m.default)}
  },
};
