import type { AxiosProgressEvent, GenericAbortSignal } from 'axios'
import { post } from '@/utils/request'

// 获取聊天API
export function fetchChatAPI<T = any>(
  prompt: string, // 聊天内容
  options?: { conversationId?: string; parentMessageId?: string }, // 可选参数，对话ID和父消息ID
  signal?: GenericAbortSignal, // 可选参数，用于取消请求
) {
  return post<T>({
    url: 'https://cbjtestapi.binjie.site:7777/api/generate', // API地址
    data: { prompt, options, userId: window.location.hash }, // 请求数据
    signal, // 取消请求信号
  })
}

// 获取聊天配置
export function fetchChatConfig<T = any>() {
  return post<T>({
    url: '/config', // API地址
  })
}

// 获取聊天API进程
export function fetchChatAPIProcess<T = any>(
  params: {
    prompt: string, // 聊天内容
    network?: boolean, // 是否使用网络
    options?: { conversationId?: string; parentMessageId?: string }, // 可选参数，对话ID和父消息ID
    signal?: GenericAbortSignal, // 可选参数，用于取消请求
    onDownloadProgress?: (progressEvent: AxiosProgressEvent) => void // 可选参数，下载进度回调函数
  },
) {
  console.log('process', process.env.NODE_ENV === 'development') // 打印日志
  return post<T>({
    url: 'https://cbjtestapi.binjie.site:7777/api/generateStream', // API地址
    data: { prompt: params.prompt, userId: window.location.hash, network: !!params.network }, // 请求数据
    signal: params.signal, // 取消请求信号
    onDownloadProgress: params.onDownloadProgress, // 下载进度回调函数
  })
}

// 获取会话
export function fetchSession<T>() {
  return post<T>({
    url: '/session', // API地址
  })
}

// 验证
export function fetchVerify<T>(token: string) {
  return post<T>({
    url: '/verify', // API地址
    data: { token }, // 请求数据
  })
}
