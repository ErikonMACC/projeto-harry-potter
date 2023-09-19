const splitWords = (text, numWords) => {
  const words = text.split(' ')
  let part1 = '', part2 = ''
  words.forEach((word, idx) => {
    if (idx < numWords) {
       part1 += ' ' + word
    } else {
        part2 += ' ' + word 
    }
  })
  return [part1.trim(), part2.trim()]
}