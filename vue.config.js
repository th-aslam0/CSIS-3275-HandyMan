const { DefinePlugin } = require('webpack');
module.exports = {
  // other webpack configuration options...
  plugins: [
    new DefinePlugin({
      '__VUE_PROD_HYDRATION_MISMATCH_DETAILS__': false,
    }),
  ],
};
const { defineConfig } = require('@vue/cli-service')
module.exports = defineConfig({
  transpileDependencies: true
})
