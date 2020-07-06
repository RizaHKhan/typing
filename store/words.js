export const state = () => ({
  words: ['one', 'two', 'three', 'four', 'five'],
  letters: [
    'a',
    'b',
    'c',
    'd',
    'e',
    'f',
    'g',
    'h',
    'i',
    'j',
    'k',
    'l',
    'm',
    'n',
    'o',
    'p',
    'q',
    'r',
    's',
    't',
    'u',
    'v',
    'w',
    'x',
    'y',
    'z'
  ]
})

export const getters = {
  GET_WORDS: (state) => state.words,
  GET_LETTERS: (state) => state.letters
}
