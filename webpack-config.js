const path = require('path');

module.exports = {
  mode: 'development', // Set the mode to 'development'
  entry: './assets/js/week.js', // Specify the entry point of your JavaScript code
  output: {
    path: path.resolve(__dirname, 'dist'), // Specify the output directory
    filename: 'bundle.js', // Specify the bundled file name
  },
  module: {
    rules: [
      {
        test: /\.js$/,
        exclude: /node_modules/,
        use: {
          loader: 'babel-loader',
          options: {
            presets: ['@babel/preset-env'], // Use @babel/preset-env for transpiling
          },
        },
      },
    ],
  },
};
