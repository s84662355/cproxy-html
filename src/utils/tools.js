/*
 * @Description: 
 * @Author: Zheng Canbin
 * @Date: 2023-10-12 15:55:44
 * @LastEditTime: 2023-10-12 15:56:33
 * @LastEditors: Zheng Canbin
 * @FilePath: \007ip-vps-electron\src\utils\tools.js
 */
function dispatchEventStroage () {
    const signSetItem = localStorage.setItem
    localStorage.setItem = function (key, val) {
        let setEvent = new Event('setItemEvent')
        setEvent.key = key
        setEvent.newValue = val
        window.dispatchEvent(setEvent)
        signSetItem.apply(this, arguments)
    }
}
 
export default dispatchEventStroage
