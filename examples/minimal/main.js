import { init, dot } from "./node_modules/dot.wasm";

(async () => {
  await init();
  console.log("hello", dot(new Float32Array([1, 2]), new Float32Array([3, 4])));
})();

setupCounter(document.querySelector("#counter"));
