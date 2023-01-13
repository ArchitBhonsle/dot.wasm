import "./style.css";
const { init, dot } = await import("dot.wasm");
await init();

const areaA = document.querySelector<HTMLTextAreaElement>("#vec-a")!;
const areaB = document.querySelector<HTMLTextAreaElement>("#vec-b")!;
const output = document.querySelector<HTMLSpanElement>("#output")!;

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
    const result = dot(vecA, vecB);
    output.classList.remove("error");
    output.innerText = `Result: ${result}`;
  } catch (err) {
    if (err instanceof Error) {
      output.classList.add("error");
      output.innerText = `Error: ${err.message}`;
      console.error(err);
    }
  }
}
