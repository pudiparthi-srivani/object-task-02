function deepDiff(a, b) {

    let result = {};

    for (let key in b) {

        if (!(key in a)) {

            result[key] = {
                added: b[key]
            };

        } else if (
            typeof a[key] === "object" &&
            typeof b[key] === "object"
        ) {

            let diff = deepDiff(a[key], b[key]);

            if (Object.keys(diff).length > 0) {
                result[key] = diff;
            }

        }else if (a[key] !== b[key]) {

            result[key] = {
                from: a[key],
                to: b[key]
            };
        }
    }
    for (let key in a) {

        if (!(key in b)) {

            result[key] = {
                removed: a[key]
            };
        }
    }
    return result;
}

let object1 = {
    x: 1,
    y: {
        z: 2
    }
};

let object2 = {
    x: 1,
    y: {
        z: 3
    },
    w: 4
};

console.log(deepDiff(object1, object2));