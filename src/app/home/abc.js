let a=[1,2,1,5,8,9,3,1,1,1,3,3]

// a.map((item1,index) => {
//     a.filter((item2,j=index+1)=> {
//         if(index!=j) {
//             if(item1!=item2) {
//                 a.splice(index,1);
//             }
//         }
//     })
// })

// a = a.filter((item,index) => {
//     console.log(a.indexOf(item), index)
//     return a.indexOf(item) === index
// })

// console.log(a)

// var arr = [1, 2, [3, 4],[5, 6]];
// // var arr1 = [].concat.apply([], arr);

// var arr1 = [].concat(...arr);
// console.log(arr1)

let arrObj = [
    {
        health: [
            {id: 1, name: 'a'},
            {id: 2, name: 'b'}
        ]
    },
    {
        wealth: [
            {id: 3, name: 'c'},
            {id: 4, name: 'd'}
        ]
    }
]

call() 

var key
var d

function call() {
    arrObj.filter((item,index) => {
        key = Object.keys(item)
        if(key!='wealth') {
            d = arrObj[index][key]
        }
    })
}
console.log(d)

