const fabric = require("@umijs/fabric")

module.exports = {
  ...fabric.prettier,
  // your rules
  semi: false,
  singleQuote: false,
}
