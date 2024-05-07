let arr = [44, 3, 56, 7, 8, 90, 2];
let  element = 7;

for (let i = 0; i < arr.length; i++) {

if(arr[i]==element){
    console.log("found element");
    break;
}
else{
    console.log("not found");
}
}




// let arr = [2,5,8,34,9,13]

// let found=false;
// for (let i = 0; i < arr.length; i++) {
//     for (let j = 0; j < arr.length; j++) {
//         if (arr[i]<arr[j]){
//             let temp=arr[i]
//             arr[i]=arr[j]
//             arr[j]=temp;
//             found=true;
//         }
//         if(!found){
//             break;
//         }
//     }
// }
// console.log(arr);


