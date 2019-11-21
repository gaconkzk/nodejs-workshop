let isValidKey = (idx, arr) => (idx) < arr.length && !arr[idx].startsWith('-')

function getValueByKey(key, arrs) {
  return arrs
    .find((_, i) => arrs[i - 1] === `-${key}` && isValidKey(i, arrs))
}

module.exports = {
  getValueByKey
}
