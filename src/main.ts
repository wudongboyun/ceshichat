// 引入Vue框架
import { createApp } from 'vue'
// 引入App组件
import App from './App.vue'
// 引入国际化配置
import { setupI18n } from './locales'
// 引入插件配置
import { setupAssets } from './plugins'
// 引入状态管理配置
import { setupStore } from './store'
// 引入路由配置
import { setupRouter } from './router'

// 异步函数bootstrap
async function bootstrap() {
  // 创建Vue实例
  const app = createApp(App)
  // 配置插件
  setupAssets()
  // 配置状态管理
  setupStore(app)
  // 配置国际化
  setupI18n(app)
  // 配置路由
  await setupRouter(app)
  // 挂载Vue实例
  app.mount('#app')
}

// 调用bootstrap函数
bootstrap()