'use strict';

export default ({ interpolate, evaluate } = {}) => ({
  ejsLoader: {
    variable: 'data',
    interpolate, // interpolate: /\{\{(.+?)\}\}/g
    evaluate, // evaluate: /\[\[(.+?)\]\]/g
  },
});
