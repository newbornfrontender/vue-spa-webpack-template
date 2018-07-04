'use strict';

const autoprefixer = ({ browsers, grid } = {}) => ({
  browsers, // browsers: [ prefixes ]
  cascade: false,
  grid, // grid: true
});

module.exports = {
  autoprefixer,
};
