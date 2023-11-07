const path = require('path');
const WebpackPwaManifest = require('webpack-pwa-manifest');
const ImageminWebpackPlugin = require('imagemin-webpack-plugin').default;
const ImageminMozjpeg = require('imagemin-mozjpeg');
const { merge } = require('webpack-merge');
const common = require('./webpack.common');

module.exports = merge(common, {
  mode: 'production',
  devtool: 'source-map',
  module: {
    rules: [
      {
        test: /\.js$/,
        exclude: /node_modules/,
        use: [
          {
            loader: 'babel-loader',
            options: {
              presets: ['@babel/preset-env'],
            },
          },
        ],
      },
    ],
  },
  plugins: [
    new WebpackPwaManifest({
      filename: 'manifest.json',
      publicPath: '/',
      inject: true,

      id: 'restaurant-apps-id-pwa-1',
      start_url: '.',
      name: 'Restaurant Apps ID',
      short_name: 'Restaurant ID',
      description: 'Daftar Restaurant Indonesia',
      background_color: '#FFFFFF',
      theme_color: '#E5E5E5',
      crossorigin: 'use-credentials',
      fingerprints: true,
      icons: [
        {
          src: path.resolve('src/public/icons/icon.png'),
          sizes: [32, 64, 128, 192, 256, 512],
          purpose: 'any',
          type: 'image/png',
          destination: 'assets/icons',
        },
        {
          src: path.resolve('src/public/maskable_icon.png'),
          size: '512x512',
          purpose: 'maskable',
          type: 'image/png',
          destination: 'assets',
        },
      ],
    }),

    new ImageminWebpackPlugin({
      plugins: [
        ImageminMozjpeg({
          quality: 50,
          progressive: true,
        }),
      ],
    }),
  ],
});
