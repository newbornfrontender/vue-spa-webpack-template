'use strict'

function readOptions(filename) {
  let options

  try {
    options = require(filename)
  } catch(e) {
    console.error(`No config file found at: ${filename}`)

    options = {}
  }

  return options
}

export function getConfigOptions(name) {
  // const options = readOptions(path)
  const options = readOptions(`../../options/webpack/${name}`)

  return options
}

// const path = (option) => {
//   require(option);
// };

// export default path;
