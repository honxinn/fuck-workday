import { HOLIDAYS, WORKDAYS } from '../holidays'
import { WORKDAY, HOLIDAY, WEEKEND } from '../common/constant'

const formatDate = date => {
  if (!date) {
    throw new Error('Date is required')
  }
  
  const d = new Date(date)
  if (isNaN(d.getTime())) {
    throw new Error('Invalid date format')
  }
  
  const year = d.getFullYear()
  const month = String(d.getMonth() + 1).padStart(2, '0')
  const day = String(d.getDate()).padStart(2, '0')
  return `${year}-${month}-${day}`
}

/**
 * 判断是否是工作日
 * @param {Date} date - 日期
 * @return {boolean} - 是否是工作日
 */
export function isWorkday(date) {
  const dayStr = formatDate(date)
  if (WORKDAYS.includes(dayStr)) return true
  if (HOLIDAYS.includes(dayStr)) return false
  return !isWeekend(date)
}

/**
 * 判断是否是节假日
 * @param {Date} date - 日期
 * @return {boolean} - 是否是节假日
 */
export function isHoliday(date) {
  const dayStr = formatDate(date)
  return HOLIDAYS.includes(dayStr) || (isWeekend(date) && !WORKDAYS.includes(dayStr))
}

/**
 * 判断是否是周末
 * @param {Date} date - 日期
 * @return {boolean} - 是否是周末
 */
export function isWeekend(date) {
  const d = new Date(date)
  const day = d.getDay()
  return day === 0 || day === 6
}

/**
 * 判断是否是工作日
 * @param {Date} date - 日期
 * @return {boolean} - 是否是工作日
 */
export function isWeekday(date) {
  return !isWeekend(date)
}

/**
 * 获取指定日期所在周/月的工作日数组
 * @param {Date} date - 日期
 * @param type
 * @params {String} type - 类型
 * @return {Array} - 工作日数组
 */
export function getWorkdays(date, type = 'week') {
  if (![ 'week', 'month' ].includes(type)) {
    throw new Error('Invalid type: must be "week" or "month"')
  }
  
  const d = new Date(date)
  const start = type === 'week' 
    ? new Date(d.setDate(d.getDate() - d.getDay())) 
    : new Date(d.getFullYear(), d.getMonth(), 1)
  const end = type === 'week'
    ? new Date(d.setDate(d.getDate() + 6))
    : new Date(d.getFullYear(), d.getMonth() + 1, 0)
  return getWorkdaysBetween(start, end)
}

/**
 * 获取下一个工作日
 * @param {Date} date - 日期
 * @return {Date} - 下一个工作日
 */
export function getNextWorkday(date) {
  const d = new Date(date)
  while (!isWorkday(d)) {
    d.setDate(d.getDate() + 1)
  }
  return d
}

/**
 * 获取两个日期之间的所有工作日
 * @param {Date} startDate - 开始日期
 * @param {Date} endDate - 结束日期
 * @return {Date[]} - 工作日日期数组
 */
export function getWorkdaysBetween(startDate, endDate) {
  if (!startDate || !endDate) throw new Error('Invalid Arguments: startDate and endDate are required')
  const days = []
  const start = new Date(startDate)
  const end = new Date(endDate)

  if (start > end) return days
  
  const current = new Date(start)
  while (current <= end) {
    if (isWorkday(current)) {
      days.push(new Date(current))
    }
    current.setDate(current.getDate() + 1)
  }
  return days
}

/**
 * 获取指定日期的状态
 * @param {Date} date - 日期
 * @return {string} - 日期状态
 */
export function getDateType(date) {
  const dayStr = formatDate(date)
  if (WORKDAYS.includes(dayStr)) return WORKDAY
  if (HOLIDAYS.includes(dayStr)) return HOLIDAY
  return isWeekend(date) ? WEEKEND : WORKDAY
}

/**
 * 获取指定月份的工作日数量
 * @param {number} year - 年份
 * @param {number} month - 月份
 * @return {number} - 工作日数量
 */
export function getMonthWorkdays(year, month) {
  if (typeof year !== 'number' || isNaN(year)) throw new Error('Invalid Type: year must be a number')
  if (typeof month !== 'number' || isNaN(month)) throw new Error('Invalid Type: month must be a number')

  if (month < 1 || month > 12) throw new Error('Invalid month')
  const startDate = new Date(year, month - 1, 1)
  const endDate = new Date(year, month, 0)
  return getWorkdaysBetween(startDate, endDate).length
}
