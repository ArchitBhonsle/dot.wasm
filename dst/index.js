import { dot as dotWasm } from "core";
export default function dot(a, b) {
    if (a.length != b.length)
        throw new Error("Both the vectors have different lengths.");
    return dotWasm(new Float64Array(a), new Float64Array(b));
}
