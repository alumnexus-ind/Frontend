// let person = {
//     name : "Rudra",
//     subject : "jasgd"
// };

// const {name , subject} = person;

// console.log(name)


// let name = "Rudra";
// let newarr = [...name, "Bajaj"]

// console.log(newarr)

// let person = {
//     name : "Rudra",
//     last : "Bajaj"
// }

// let newobj = {...person , subject : "Code"}

// console.log(newobj)


let arr = [3, 4, 5, 6, 7, 8, 9, 3, 34, 6];

function add(...arr) {
    let sum = 0;
    for (let i = 0; i < arr.length; i++) {
        sum = arr[i] + sum;
    }
    return sum;
}


console.log(add(arr));
