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

let nameArr = args.map((arg, i) => {
    if (arg === '-n') {
        return args[i + 1]
    }

    return null
}).filter(it => !!it)


// YeuChesen: check validation for (index + 1) > array length and after "-n" is "-***" 
//example input array: ["node", "srcPath", "-n", "abc", "-2", "12", "-n", "456", "-b", "7", "-n", "-a"]
//output: ["abc", "456"]
let tempArr = test.reduce((rs, itm, idx) => {
    if (itm === '-n' && (idx + 1) < test.length && !test[idx+1].startsWith('-')) rs.push(test[idx+1]);
    return rs;
  }, []);

// => node srcPath -n abc -2 12 -n 456 -b 7
// map: nul nul abc nul nul 456 nul nul
// filter: [ 'abc', '456' ]
// reduce:

console.log("-n array: ", nameArr)