mod utils;

use wasm_bindgen::prelude::*;

// When the `wee_alloc` feature is enabled, use `wee_alloc` as the global
// allocator.
#[cfg(feature = "wee_alloc")]
#[global_allocator]
static ALLOC: wee_alloc::WeeAlloc = wee_alloc::WeeAlloc::INIT;

macro_rules! stamp_dot {
    ($name:ident, $type:ty, $default:literal) => {
        #[wasm_bindgen]
        pub fn $name(a: &[$type], b: &[$type]) -> $type {
            a.iter()
                .zip(b.iter())
                .map(|(ai, bi)| ai * bi)
                .reduce(|acc, e| acc + e)
                .unwrap_or($default)
        }
    };
}

stamp_dot!(int8, i8, 0);
stamp_dot!(uint8, u8, 0);
stamp_dot!(int16, i16, 0);
stamp_dot!(uint16, u16, 0);
stamp_dot!(int32, i32, 0);
stamp_dot!(uint32, u32, 0);
stamp_dot!(bigint64, i64, 0);
stamp_dot!(biguint64, u64, 0);
stamp_dot!(float32, f32, 0.0);
stamp_dot!(float64, f64, 0.0);
