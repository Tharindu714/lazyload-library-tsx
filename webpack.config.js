const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const { CleanWebpackPlugin } = require('clean-webpack-plugin');

module.exports = {
  mode: 'development',
  entry: './src/index.tsx',  // Main entry file for your React app
  output: {
    filename: 'bundle.js',
    path: path.resolve(__dirname, 'dist'),
    publicPath: '/',  // Ensures correct path to resources in the browser
  },
  resolve: {
    extensions: ['.ts', '.tsx', '.js'],  // Allows import of TypeScript and JavaScript files
  },
  module: {
    rules: [
      {
        test: /\.tsx?$/,  // Regex to target all .ts and .tsx files
        use: 'ts-loader',  // Use ts-loader to handle TypeScript files
        exclude: /node_modules/,
      },
      {
        test: /\.css$/,  // If you're using CSS, add this rule
        use: ['style-loader', 'css-loader'],
      },
    ],
  },
  plugins: [
    new CleanWebpackPlugin(),  // Cleans dist folder before every build
    new HtmlWebpackPlugin({
      template: './public/index.html',  // Template HTML file
    }),
  ],
  devtool: 'source-map',  // Generates source maps for debugging
  devServer: {
    static: path.join(__dirname, 'public'),
    compress: true,
    port: 9000,
    hot: true,  
    open: true,
    historyApiFallback: true, 
  },
};
