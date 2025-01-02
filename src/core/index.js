import dayjs from 'dayjs'
import isSameOrBefore from 'dayjs/plugin/isSameOrBefore'
import isSameOrAfter from 'dayjs/plugin/isSameOrAfter'
import isBetween from 'dayjs/plugin/isBetween'
import { HOLIDAYS, WORKDAYS } from '../holidays'
import { WORKDAY, HOLIDAY, WEEKEND } from '../common/constant'
dayjs.extend(isSameOrBefore)
dayjs.extend(isSameOrAfter)
dayjs.extend(isBetween)

const formatDate = date => dayjs(date).format('YYYY-MM-DD')

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
  const d = dayjs(date)
  const day = d.day()
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
  
  const d = dayjs(date)
  const start = d.startOf(type)
  const end = d.endOf(type)
  return getWorkdaysBetween(start, end)
}

/**
 * 获取下一个工作日
 * @param {Date} date - 日期
 * @return {Date} - 下一个工作日
 */
export function getNextWorkday(date) {
  let d = dayjs(date)
  while (!isWorkday(d)) {
    d = d.add(1, 'day')
  }
  return d.toDate()
}

/**
 * 获取两个日期之间的所有工作日
 * @param {Date} startDate - 开始日期
 * @param {Date} endDate - 结束日期
 * @return {Date[]} - 工作日日期数组
 */
export function getWorkdaysBetween(startDate, endDate) {
  if (!startDate || !endDate) throw new Error('Invalid Arguments: startDate and endDate are required')
  const start = dayjs(startDate)
  const end = dayjs(endDate)
  const days = []

  if (start.isAfter(end)) return days
  
  let current = start
  while (current.isSameOrBefore(end, 'day')) {
    if (isWorkday(current)) {
      days.push(current.toDate())
    }
    current = current.add(1, 'day')
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
  const startDate = dayjs(`${year}-${month}-01`)
  const endDate = startDate.endOf('month')
  return getWorkdaysBetween(startDate, endDate).length
}
