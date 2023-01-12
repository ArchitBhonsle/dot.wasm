import "./style.css";
const { init, dot } = await import("dot.wasm");
await init();

const areaA = document.querySelector<HTMLTextAreaElement>("#vec-a")!;
const areaB = document.querySelector<HTMLTextAreaElement>("#vec-b")!;
const resultSpan = document.querySelector<HTMLSpanElement>("#result")!;
const errorSpan = document.querySelector<HTMLSpanElement>("#error")!;

areaA.addEventListener("input", evaluate);
areaB.addEventListener("input", evaluate);

function parseVecInput(text: string): Array<number> {
  return text
    .split(",")
    .map((t) => t.trim())
    .map((t) => parseFloat(t))
    .filter((n) => !isNaN(n));
}

function evaluate() {
  const vecA = parseVecInput(areaA.value);
  const vecB = parseVecInput(areaB.value);

  try {
    const result = dot(new Float64Array(vecA), new Float64Array(vecB));
    resultSpan.innerText = result.toString();
    errorSpan.innerText = "";
  } catch (err) {
    if (err instanceof Error) {
      console.error(err);
      resultSpan.innerText = "";
      errorSpan.innerText = err.message;
    }
  }
}
