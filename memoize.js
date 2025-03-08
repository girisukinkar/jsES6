// Using closure to create a memoize function that caches the value
// Performance Optimization


function memoize(fn) {
    const cache = new Map();

    return function(...args) {
        const key = JSON.stringify(args);
        if (cache.has(key)) {
            console.log('cache hit the value is retrieved from cache')
            return cache.get(key);
        }

        const result = fn.apply(this, args);
        cache.set(key, result);
        console.log('cache miss the value is freshly returned and stores in cache')
        return result;
    }
}


const calc = (a, b) => a + b;
const memoizedCalc = memoize(calc);

memoizedCalc(2,3)

memoizedCalc(1, 2);
memoizedCalc(1, 2);