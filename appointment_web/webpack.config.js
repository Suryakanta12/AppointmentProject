module.exports = {
    // Other configurations
    devtool: false, // Disable source maps
    module: {
      rules: [
        {
          test: /\.css$/,
          use: ['style-loader', 'css-loader', 'postcss-loader'],
          exclude: /node_modules/,
        },
      ],
    },
  };
  