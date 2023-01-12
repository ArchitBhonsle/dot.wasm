import init, {
  bigint64,
  biguint64,
  float32,
  float64,
  int16,
  int32,
  int8,
  uint16,
  uint32,
  uint8,
} from "core";

interface NormalArrayLike {
  [index: number]: number;
  length: number;
}

interface BigIntArrayLike {
  [index: number]: BigInt;
  length: number;
}

type ArrayLike = NormalArrayLike | BigIntArrayLike;

function dot(a: ArrayLike, b: ArrayLike) {
  if (a.length != b.length)
    throw new Error(
      `Both the vectors have different lengths (${a.length} != ${b.length})`
    );

  const aClass = a.constructor.name,
    bClass = b.constructor.name;

  if (aClass != bClass)
    throw new Error(
      `The vectors have different types (${aClass} != ${bClass})`
    );

  if (aClass == "Array") {
    a = new Float64Array(a as NormalArrayLike);
    b = new Float64Array(b as NormalArrayLike);
  }

  switch (aClass) {
    case "Int8Array":
      return int8(a as Int8Array, b as Int8Array);
    case "Uint8Array":
      return uint8(a as Uint8Array, b as Uint8Array);
    case "Int16Array":
      return int16(a as Int16Array, b as Int16Array);
    case "Uint16Array":
      return uint16(a as Uint16Array, b as Uint16Array);
    case "Int32Array":
      return int32(a as Int32Array, b as Int32Array);
    case "Uint32Array":
      return uint32(a as Uint32Array, b as Uint32Array);
    case "BigInt64Array":
      return bigint64(a as BigInt64Array, b as BigInt64Array);
    case "BigUint64Array":
      return biguint64(a as BigUint64Array, b as BigUint64Array);
    case "Float32Array":
      return float32(a as Float32Array, b as Float32Array);
    case "Float64Array":
      return float64(a as Float64Array, b as Float64Array);
    default:
      throw new Error(`Type ${aClass} is not supported`);
  }
}

export { dot, init };
