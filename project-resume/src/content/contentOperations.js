const fs = require('fs');
const path = require('path');

const dir = './data';

/**
 * @summary a function to concat all JSON files in the data folder into one array
 */
export function getContent() {
  return fs.readdirSync(dir)
           .filter(name => path.extname(name) === '.json')
           .map(name => require(path.join(dir, name)));
}