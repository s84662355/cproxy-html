/*
 * @Description: 正则表达式工具
 * @Author: Lin Jiexin
 * @Date: 2020-09-11 17:07:13
 * @LastEditTime: 2020-09-11 17:07:47
 * @LastEditors: Lin Jiexin
 */

// 邮箱地址
const emailReg = /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/
// IP正则
const ipREG = /^((25[0-5]|2[0-4]\d|((1\d{2})|([1-9]?\d)))\.){3}(25[0-5]|2[0-4]\d|((1\d{2})|([1-9]?\d)))$/
// 网站正则
const Website = /^((https|http|ftp|rtsp|mms){0,1}(:\/\/){0,1})www\.(([A-Za-z0-9-~]+)\.)+([A-Za-z0-9-~\/])+$/

export {
  emailReg,
  ipREG,
  Website
}
