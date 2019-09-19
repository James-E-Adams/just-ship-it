const f = x => Math.min(x, 10) * Math.max(x, 25)

const maxSize = 10
const memoF = (function() {
  const hashTable = {}
  return function(x) {
    console.log('getting f(', x, ')')
    if (!hashTable.hasOwnProperty(x)) {
      const keys = Object.keys(hashTable)
      if (keys.length > maxSize - 1) {
        const keyToDelete = keys[0]
        console.log('deleting key: ', keyToDelete)
        delete hashTable[keyToDelete]
      }
      console.log('computing f(', x, ')')
      hashTable[x] = f(x)
    }
    return hashTable[x]
  }
})()
