// 字符截断加省略号
export function sliceWord (str, num) {
  str = str.slice(0, num) + '...'
  return str
}
// 日期格式化
export function dateFormat (str) {
  function paddNum (num) {
    if (num < 10) {
      num = '0' + num
    }
    return num
  }
  let date = new Date(str)
  let year = date.getFullYear()
  let month = date.getMonth() + 1
  let day = date.getDate()
  let hour = date.getHours()
  let minute = date.getMinutes()
  return `${year}-${paddNum(month)}-${paddNum(day)} ${paddNum(hour)}:${paddNum(minute)}`
}
// 获取cookie
export function getCookie (name) {
  let cookie = document.cookie
  let nameStart = cookie.indexOf(name + '=')
  let nameEnd = name.length + nameStart
  let valueStart = nameEnd + 1
  let valueEnd = cookie.indexOf(';', valueStart)
  let value = cookie.slice(valueStart, valueEnd)
  return value
}
