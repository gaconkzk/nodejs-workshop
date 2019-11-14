let args = process.argv

// let take our parameters
// FIXME: make it cool
// FIXME: validate command for incorrect command
// let nameArr = args.filter(arg => {
//         console.log(arg, arg === '-n') // <--
//         return arg === '-n'
//     })
//     .map((arg, i) => {
//         console.log(i,arg)
//         return args[i + 1]
//     })

// let nameArr = args.map((arg, i) => {
//     if (arg === '-n') {
//         return args[i + 1]
//     }

//     return null
// }).filter(it => !!it)

// => node srcPath -n abc -2 12 -n 456 -b 7
// map: nul nul abc nul nul 456 nul nul
// filter: [ 'abc', '456' ]
// reduce:

// console.log("-n array: ", nameArr)
// let temp = [];

//  let nameArr = args.filter((arg, i) => {
//     if (arg === '-n' && args[i+1]) {
//         temp.push(args[i + 1])
//     }
//     return arg;
//  })
//  console.log("-n array: ", temp)

let nameArr = args.filter((arg, i) => args[i - 1] === '-n')
console.log("-n array: ", nameArr)