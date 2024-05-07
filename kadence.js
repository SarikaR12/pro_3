let arr = [2, 3, -4, 6, -6, 9, -5]

let max = 0;
let current = arr[0];

for (let i = 0; i < arr.length; i++) {
    max = max + arr[i]
    if (current < 0) {
        return 0;
    }
    if (max < current) {
        max = current;
    }
}
console.log(max);