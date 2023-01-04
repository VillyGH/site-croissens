const { defineConfig } = require("@vue/cli-service");
module.exports = {
  configureWebpack: {
    devtool: 'source-map'
  },
  publicPath:
    process.env.NODE_ENV === 'production'
      ? '/tp3-depart'
      : '/'
}

