module.exports = {
  // 表示当前目录即为根目录，ESLint 规则将被限制到该目录下
  root: true,
  env: {
    "browser": true,
  "es2021": true,
    "node": true
  },
  // ESLint 中基础配置需要继承的配置
  // eslint-config-standard eslint-plugin-import eslint-plugin-node eslint-plugin-promise eslint-plugin-promise eslint-plugin-vue 
  extends: [
      // https://github.com/vuejs/eslint-plugin-vue
      "plugin:vue/vue3-essential",
       // https://github.com/vuejs/eslint-config-standard
      '@vue/standard'
  ],
  globals: {
		defineProps: 'readonly',
		defineEmits: 'readonly',
		defineExpose: 'readonly',
		withDefaults: 'readonly',
	},
  rules: {
      "no-console": process.env.NODE_ENV === "production" ? "warn" : "off",
      "no-debugger": process.env.NODE_ENV === "production" ? "warn" : "off",
      'space-before-function-paren': 'off' //解决eslint与Prettier的空格冲突
  }
  
}