// .eslintrc.js
module.exports = {
  parserOptions:{
    parser:'babel-eslint',
  },
  extends: [
    'plugin:vue/recommended'
  ],
  plugins: [
    'vuetify'
  ],
  rules: {
    'vuetify/no-deprecated-classes': 'error',
    'indent':["error",2]
  }
}
