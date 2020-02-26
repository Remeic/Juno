const CopyPlugin = require('copy-webpack-plugin');


module.exports = {
  mode: 'production',
  devtool: "#source-map",
	watch: true,
  entry: {
    index: './src/index.js',
    contentScript: './src/contentScript.js'
  },
  output: {
    filename: '[name].js',
    path: __dirname + '/dist'
  },
  module: {
    rules: [
      {
        test: /\.jsx?$/,
        exclude: /(node_modules)/,
        use: {
          loader: 'babel-loader',
          options: {
            presets: ['@babel/preset-env'],
            plugins: [
              ["@babel/plugin-transform-react-jsx", { "pragma":"h" }]
            ]
          }
        }
      }
    ]
  },
  resolve: {
    extensions: ['.js', '.jsx']
  },
  plugins: [
    new CopyPlugin([
      { from: './src/html', to: './' },
      { from: './manifest.json', to: './' },
    ]),
  ],
};