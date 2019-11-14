let args = process.argv

let isValidKey = (idx, arr) => (idx) < arr.length && !arr[idx].startsWith('-')

function getKeyValue(key, arrs) {
  arrs.filter((arg, i) => {
    return arrs[i - 1] === `-${key}` && isValidKey(i, arrs)
  })
}

module.exports = {
  getKeyValue
}
