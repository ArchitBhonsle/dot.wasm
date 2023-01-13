import init from "../core/pkg";
interface NormalArrayLike {
    [index: number]: number;
    length: number;
}
interface BigIntArrayLike {
    [index: number]: BigInt;
    length: number;
}
type ArrayLike = NormalArrayLike | BigIntArrayLike;
declare function dot(a: ArrayLike, b: ArrayLike): number | bigint;
export { dot, init };
