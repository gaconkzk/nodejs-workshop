let isValue = (item) => !item.startsWith('-')

function getValueByKey(key, arrs) {
  return arrs
    .find((item, i) => arrs[i - 1] === `-${key}` && isValue(item))
}

module.exports = {
  getValueByKey
}
