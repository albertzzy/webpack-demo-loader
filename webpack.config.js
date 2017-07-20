var path = require('path');

module.exports = {
  entry: './src/foo.js',
  output: {
    path: path.resolve(__dirname, 'dist'),
    filename: 'foo.bundle.js'
  },
  module:{
  	rules:[
	  	{
	  		test:/\.cmp$/,
	  		use:'cmp-loader'
	  	}

  	]
  }
};