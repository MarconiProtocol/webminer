const path = require("path");
const CopyWebpackPlugin = require('copy-webpack-plugin');

module.exports = {
  entry: {
    vendors: [
      './src/scripts/classlist.min.js',
      './src/scripts/compatibility.js',
      './src/scripts/modernizr-custom.js',
      './src/scripts/placeholder.min.js',
    ],
    main: './src/index.js',
  },
  module: {
    rules: [
      {
        test: /\.(js|jsx)$/,
        exclude: /(node_modules|bower_components)/,
        loader: "babel-loader",
        options: { presets: ["@babel/env"] }
      },
      {
        test: /\.css$/,
        include: [path.resolve(__dirname, 'src/components'), path.resolve(__dirname, 'src/scenes')],
        use: [
          {
            loader: 'style-loader',
          },
          {
            loader: 'css-loader?importLoader=1&modules&localIdentName=[path]___[name]__[local]___[hash:base64:5]',
          }
        ],
      },
      {
        test: /\.css$/,
        include: path.resolve(__dirname, "src/styles"),
        use: ["style-loader", "css-loader"],
      },
      {
        test: /\.svg$/,
        loader: 'svg-url-loader',
        options: {
          limit: 10 * 1024, //10KB
          noquotes: true,
        }
      },
      {
        test: /\.(jpe?g|png|gif)$/,
        use: [
          {
            loader: 'url-loader',
            options: {
              // Inline files smaller than 10 kB
              limit: 10 * 1024,
            },
          },
          {
            loader: 'image-webpack-loader',
            options: {
              mozjpeg: {
                enabled: false,
                // NOTE: mozjpeg is disabled as it causes errors in some Linux environments
                // Try enabling it in your environment by switching the config to:
                // enabled: true,
                // progressive: true,
              },
              gifsicle: {
                interlaced: false,
              },
              optipng: {
                optimizationLevel: 7,
              },
              pngquant: {
                quality: '65-90',
                speed: 4,
              },
            },
          },
        ],
      },
      {
        test: /\.(eot|ttf|woff|woff2|ico)$/i,
        use: [
          {
            loader: 'file-loader',
          }
        ],
      },
    ]
  },
  resolve: { extensions: ["*", ".js", ".jsx"] },
  output: {
    path: path.join(__dirname, 'dist'),
    publicPath: '/',
    filename: '[name].[hash].js'
  },
  plugins:[
    new CopyWebpackPlugin([
      { from: 'src/images/favicons/favicon.ico', to: path.join(__dirname, 'dist/favicons/') },
      { from: 'src/images/favicons/favicon22.png', to: path.join(__dirname, 'dist/favicons/') },
      { from: 'src/images/favicons/favicon72.png', to: path.join(__dirname, 'dist/favicons/') },
      { from: 'src/images/favicons/favicon114.png', to: path.join(__dirname, 'dist/favicons/') },
      { from: 'src/images/favicons/favicon144.png', to: path.join(__dirname, 'dist/favicons/') },
    ])
  ]
};
