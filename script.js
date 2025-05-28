
// Array With Functions (map ,filter, foreach, indexof, findindex ,includes, every, some)

// 1.  Map 

let arr = [10, 20, 30, 40, 50];

const arrMap = arr.map((val) => {
    return val * val;
})

console.log("Map = ", arrMap);


// 2. Filter 

const arrFilter = arr.filter((val) => {
    return val > 20;
})

console.log("Filter = ", arrFilter);


// 3. forEach 

arr.forEach((val) => {
    console.log(val);
})


// 4. indexof

console.log("index of Value : ", arr.indexOf(40));



// 5. findindex

const arrFindindex = arr.findIndex((val) => {
    return val == 30;
})

console.log(arrFindindex);// 2

// 6. includes 

console.log(arr.includes(20)); // true
console.log(arr.includes(2));  // false



// 7. every

const arrEvery = arr.every((val) => {
    return val > 5;
})

console.log(arrEvery);



// 8. some 

const arrSome = arr.some((val) => {
    return val > 10;
})

console.log(arrSome);




// Array With Functions Push ,Pop, shift, unshifts, Splice string function


// 1. Push 

let arr2 = [1, 2, 3, 4, 5];

arr2.push(6)
console.log("push - 6 : ", arr2);


// 2. Pop 

arr2.pop();
console.log("after pop (removed 6):", arr2);


// 3. shift

arr2.shift();
console.log("shift - 1 : ", arr2);


// 4. unshift


arr2.unshift(99);
console.log("unshift - 99 : ", arr2);


// 5. Splice 


arr2.splice(1, 0, 88);
console.log(arr2);