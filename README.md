# Package threads.js in a library

* `lib` is built with parcel for NodeJS (CJS module) and CDN delivery (UMD ? IIFE ?)
* `main-parcel` works as expected (with and without the `threads/register` !?) - (resolved from `package.json:module`)
* `main-webpack` works as expected if we remove `threads/register` from `lib` and import the `ThreadsPlugin` - (resolved from `package.json:module`)
* `main-node` works as expected with the parcel CJS build (resolved from `package.json:main`)
* `main-vue` behaves like `main-webpack`
* `main-react` requires `npm run eject` to configure webpack plugins, then behaves like `main-webpack`
* CDN delivery is impossible with the parcel browser build as code splitting creates a dedicated worker file, I wasn't able to disable code splitting automatically enabled by parcel

Tree shaking does not work with threads.js and parcel (see `npm run build:browser:treeshaking`): 
```
../node_modules/threads/dist-esm/worker/implementation.browser.js does not export 'default'
```
