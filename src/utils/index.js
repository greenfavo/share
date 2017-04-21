export function sliceWord (str, num) {
  str = str.slice(0, num) + '...'
  return str
}
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
