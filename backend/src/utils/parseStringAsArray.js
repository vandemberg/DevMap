module.exports = function parserStringAsArray(items) {
  return items.split(',').map((item) => item.trim())
}