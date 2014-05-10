var transformer = require('dat-transformer');
var tString = transformer('string');
var tJson = transformer('json');
// require any other modules you may need here.

module.exports = transformer.Conversion(tString, tJson, convert);

function convert(str) {
  return JSON.parse(str);
};
