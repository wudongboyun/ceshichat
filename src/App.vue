<script setup lang="ts">
// 引入 Naive UI 的 NConfigProvider 组件和自定义的 NaiveProvider 组件
import { NConfigProvider } from 'naive-ui'
import { NaiveProvider } from '@/components/common'
// 引入 useTheme 和 useLanguage 钩子函数
import { useTheme } from '@/hooks/useTheme'
import { useLanguage } from '@/hooks/useLanguage'

// 使用 useTheme 和 useLanguage 钩子函数获取主题和语言
const { theme, themeOverrides } = useTheme()
const { language } = useLanguage()
</script>

<template>
  <!-- 使用 NConfigProvider 组件包裹 RouterView 组件，实现全局配置 -->
  <NConfigProvider
    class="h-full"
    :theme="theme"
    :theme-overrides="themeOverrides"
    :locale="language"
  >
    <!-- 使用自定义的 NaiveProvider 组件包裹 RouterView 组件，实现全局配置 -->
    <NaiveProvider>
      <RouterView />
    </NaiveProvider>
  </NConfigProvider>
</template>