const path = require('path'); // Импортируем модуль "path" для работы с путями файлов
const HtmlWebpackPlugin = require('html-webpack-plugin');
const MiniCssExtractPlugin = require("mini-css-extract-plugin");
// const SpriteLoaderPlugin = require('svg-sprite-loader/plugin');
// const CopyPlugin = require("copy-webpack-plugin");

module.exports = {
  entry: path.resolve(__dirname, "src", "index.js"),

  output: {
    path: path.resolve(__dirname, "dist"), // Путь для выходного файла сборки
    clean: true, // Очищение папки 'dist'
    filename: "[name].[contenthash].js", // Имя выходного файла сборки
    assetModuleFilename: (pathData) => {
      const filepath = path
        .dirname(pathData.filename)
        .split("/")
        .slice(1)
        .join("/");
      return `${filepath}/[name][ext]`;
    }, // сохраняет исходную структуру папок
  },

  module: {
    rules: [
      {
        test: /\.(js|jsx)$/,
        exclude: /node_modules/,
        use: {
          loader: "babel-loader",
        },
      },
      {
        test: /\.html$/i,
        loader: "html-loader",
      },
      {
        test: /\.(c|sa|sc)ss$/i, // Регулярное выражение для обработки файлов с расширением .scss
        use: [MiniCssExtractPlugin.loader, "css-loader", "sass-loader"], // Загрузчики, используемые для обработки SCSS-файлов
      },
    ],
  },

  plugins: [
    // new CopyPlugin({
    //   patterns: [
    //     { from: 'src/favicon.ico', to: 'favicon.ico' },
    //     { from: 'src/img/favicons/favicon.svg', to: 'img/favicons/favicon.svg' },
    //   ],
    // }),
    new HtmlWebpackPlugin({
      template: "static/index.html",
    }),
    new MiniCssExtractPlugin({
      filename: "css/style.css", // Имя выходного файла стилей
    }),
  ],

  resolve: {
    extensions: [".js", ".jsx"],
  },

  devServer: {
    static: {
      directory: path.join(__dirname, "dist"), // Каталог для статики
    },
    open: true, // Автоматически открывать браузер
    historyApiFallback: true, // Для работы с маршрутизацией
    host: '127.0.0.1'
  },

  mode: "development", // Режим сборки
};