
const { DefinePlugin } = require('webpack');
module.exports = {
  // other webpack configuration options...
  plugins: [
    new DefinePlugin({
      '__VUE_PROD_HYDRATION_MISMATCH_DETAILS__': false,
    }),
  ],
};
import vue from '@vitejs/plugin-vue'
const { defineConfig } = require('@vue/cli-service')
module.exports = defineConfig({
  transpileDependencies: true,
  plugins: [
		vue({
			template: {
				compilerOptions: {
					isCustomElement: tagName => {
						return tagName === 'vue-advanced-chat' || tagName === 'emoji-picker'
					}
				}
			}
		})
	],
})
