function deepClone(obj) {
    return structuredClone(obj);
}
const obj = {
    a: 1,
    b: {
        c: new Date(),
        d: new Set([1, 2])
    },
    circular: null
};

obj.circular = obj;

const clone = deepClone(obj);

console.log(clone);