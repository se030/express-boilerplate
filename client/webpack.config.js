import path from 'path';
import Dotenv from 'dotenv-webpack';
import HtmlWebpackPlugin from 'html-webpack-plugin';
import MiniCssExtractPlugin from 'mini-css-extract-plugin';

export default (env, argv) => {
  const isDevmode = argv.mode === 'development';

  return {
    mode: argv.mode,
    entry: ['./src/js/index.js', './src/css/style.scss'],
    output: {
      path: path.join(path.resolve(), 'public'),
      filename: 'bundle.js'
    },
    plugins: [
      new HtmlWebpackPlugin({
        title: 'title',
        favicon: './src/assets/favicon.png'
      }),
      new MiniCssExtractPlugin({
        filename: isDevmode ? '[name].css' : '[contenthash:8].css'
      }),
      new Dotenv({ path: '.env' })
    ],
    module: {
      rules: [
        {
          test: /\.(png|svg|jpe?g)/,
          type: 'asset/resource',
          generator: {
            filename: isDevmode ? 'assets/[name][ext]' : 'assets/[hash:8][ext]'
          },
          exclude: /node_modules/
        },
        {
          test: /\.js$/,
          use: 'babel-loader',
          exclude: /node_modules/
        },
        {
          test: /\.s?css$/,
          use: [MiniCssExtractPlugin.loader, 'css-loader', 'sass-loader'],
          exclude: /node_modules/
        }
      ]
    },
    resolve: {
      alias: {
        Assets: path.join(path.resolve(), 'src/assets')
      }
    },
    devtool: isDevmode ? 'inline-source-map' : false
  };
};
