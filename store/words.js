export const state = () => ({
  words: [
    'one',
    'two',
    'three',
    'four',
    'five',
    'six',
    'seven',
    'eight',
    'nine',
    'news',
    'fifteen',
    'ten',
    'English',
    'Indian',
    'hammer',
    'axe',
    'zoo',
    'zoology',
    'pepper',
    'green',
    'blue',
    'pink',
    'terrible',
    'horrible',
    'system',
    'design',
    'please',
    'thanks',
    'updated',
    'xenophone',
    'associated'
  ]
})

export const getters = {
  GET_WORDS: (state) => state.words,
  GET_LETTERS: (state) => state.letters
}
