import init, { bigint64, biguint64, float32, float64, int16, int32, int8, uint16, uint32, uint8, } from "../core/pkg";
function dot(a, b) {
    if (a.length != b.length)
        throw new Error(`The vectors have different lengths (${a.length} != ${b.length})`);
    const aClass = a.constructor.name, bClass = b.constructor.name;
    if (aClass != bClass)
        throw new Error(`The vectors have different types (${aClass} != ${bClass})`);
    if (aClass == "Array") {
        a = new Float64Array(a);
        b = new Float64Array(b);
    }
    switch (aClass) {
        case "Int8Array":
            return int8(a, b);
        case "Uint8Array":
            return uint8(a, b);
        case "Int16Array":
            return int16(a, b);
        case "Uint16Array":
            return uint16(a, b);
        case "Int32Array":
            return int32(a, b);
        case "Uint32Array":
            return uint32(a, b);
        case "BigInt64Array":
            return bigint64(a, b);
        case "BigUint64Array":
            return biguint64(a, b);
        case "Float32Array":
            return float32(a, b);
        case "Float64Array":
            return float64(a, b);
        default:
            throw new Error(`Type ${aClass} is not supported`);
    }
}
export { dot, init };
