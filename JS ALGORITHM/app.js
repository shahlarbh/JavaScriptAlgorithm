// let ArrFunc = arr => {
//     if(Array.isArray(arr)) {
//         let min = arr[0]

//         for(let i = 1; i < arr.length; i++) {
//             if(arr[i] < min) {
//                 min = arr[i]
//             }
//         }
//         console.log(min)
//     }

//     else {
//         alert('Typeof is not Array')
//     }
// }
// ArrFunc([695,922,144,1784,17,4096])



// let NotDifferent = str => {
//     if(typeof str === 'string') {
//         for(let i = 0; i < str.length; i++) {
//             for(let j = i + 1; j < str.length; j++) {
//                 if(str[i] === str[j]) {
//                     console.log(str[j])
//                 }
//             }
//         }
//     }

//     else {
//         alert('Typeof is not String')
//     }
// }
// NotDifferent('Shaxlar')



// let Palindrome = str => {
//     if(typeof str === 'string') {
//         let count = 0

//         for(let i = 0; i < str.length; i++) {
//             if(str[i] === str[str.length - 1 - i]) {
//                 count++
//             }

//             if(count === str.length) {
//                 console.log(str)
//                 alert(`${str} is Palindrome`)
//             }
//         }
//     }

//     else {
//         console.log('Typeof is not String')
//     }
// }
// Palindrome('ada')