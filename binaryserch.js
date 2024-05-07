let arr = [2, 5, 6, 7, 8, 9]

let search = (arr, element, start, end) => {
    mid = (start + end) / 2;

    if (arr[mid] === element) {
        return mid;
    }
    else if (arr[mid] > element) {
        return search(arr, element, start, mid - 1);
    }
    else {
        return search(arr, element, mid + 1, end);
    }

}

let res = search(arr, 1, 0, arr.length - 1);
console.log(res); 