import path from 'path';
import PugPlugin from 'pug-plugin';
import Dotenv from 'dotenv-webpack';

export default (env, argv) => {
  const isDevmode = argv.mode === 'development';

  return {
    mode: argv.mode,
    entry: { index: './src/index.pug' },
    output: {
      path: path.join(path.resolve(), 'public'),
      filename: 'bundle.js',
      publicPath: ''
    },
    plugins: [
      new PugPlugin({
        pretty: isDevmode ? true : false,
        extractCss: {
          filename: isDevmode ? '[name].css' : '[contenthash:8].css'
        }
      }),
      new Dotenv({ path: '.env' })
    ],
    module: {
      rules: [
        {
          test: /\.pug$/,
          use: {
            loader: PugPlugin.loader,
            options: {
              title: 'title'
            }
          },
          exclude: /node_modules/
        },
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
          use: {
            loader: 'babel-loader'
          },
          exclude: /node_modules/
        },
        {
          test: /\.scss$/,
          use: ['css-loader', 'sass-loader'],
          exclude: /node_modules/
        }
      ]
    },
    resolve: {
      alias: {
        Assets: path.join(path.resolve(), 'src/assets'),
        Style: path.join(path.resolve(), 'src/css'),
        Script: path.join(path.resolve(), 'src/js')
      }
    },
    devtool: isDevmode ? 'inline-source-map' : false
  };
};
