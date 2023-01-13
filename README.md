<div align="center">
  <h1>dot.wasm</h1>
  <strong>Dot product accelerated by WebAssembly</strong>
</div>

## Quick Start

This quickstart uses [vite](https://vitejs.dev/) to quickly scaffold a JavaScript project.
```sh
npm create vite@latest    # select the options you want
npm install dot.wasm      # install the library
```

Now where you want to use the library (in a JS or TS file)
```js
// we need to import it with it's path (the wasm file is not handled properly by vite)
import { init, dot } from "./node_modules/dot.wasm";
```

Before using the `dot` function we need to call `init` to instantiate the WebAssembly module.
The `dot` function takes two `ArrayLike` objects as its arguments. This can either be JavaScript
`Array`s or [Typed Arrays](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Typed_arrays).
```js
await init();
console.log(
  dot(new Float32Array([1, 2]), new Float32Array([3, 4]))
); // 11
```

This function throws an error if the two arguments:
  1. are of different lengths
  2. are of different types
  1. are not in the list of supported types
