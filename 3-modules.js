// CommonJS, every file is module (by default)
// Modules - Encapsulated Code (onyl share minimum)

const names = require('./4-names_firstmodule')
const sayHi = require('./5-utils_secondmodule')
const data = require('./6-alternative-flavor')
require('./7-mind-grenate')

sayHi('Jens')
sayHi(names.franz)
sayHi(names.hans)
