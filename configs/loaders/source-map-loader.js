const {cacheDirectory} = require('../options');
// const marked = require('marked');
// const renderer = new marked.Renderer();

module.exports = () => {
  return {
    loader: 'source-map-loader',
    options: {
    }
  };
}
