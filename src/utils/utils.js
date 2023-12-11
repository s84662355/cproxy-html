/*
 * @Description: 
 * @Author: Su Miao
 * @Date: 2023-10-05 17:01:09
 * @LastEditTime: 2023-10-08 14:53:30
 * @LastEditors: Su Miao
 * @FilePath: \007ip-vps-electron\src\utils\utils.js
 */
import { ElMessage } from 'element-plus'
import i18n from '@/i18n'
// 获取本地资源图片
export const useGetImage = (url) => {
  return new URL(`../assets/${url}`, import.meta.url).href
}
// 拷贝
export function useCopyUrl(link) {
  const oInput = document.createElement('textarea')
  oInput.value = link
  document.body.appendChild(oInput)
  oInput.select() // 选择对象
  document.execCommand('Copy') // 执行浏览器复制命令
  oInput.style.display = 'none'
  ElMessage.success(i18n.global.t('message.copySucceed'))
}