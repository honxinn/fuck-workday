/*!
 * Version: 1.0.1
 * Author: HonXin
 * Released under the MIT License.
 */
(function (global, factory) {
  typeof exports === 'object' && typeof module !== 'undefined' ? module.exports = factory() :
  typeof define === 'function' && define.amd ? define(factory) :
  (global = typeof globalThis !== 'undefined' ? globalThis : global || self, global.workdayCn = factory());
})(this, (function () { 'use strict';

  // 节假日
  const HOLIDAYS_2018 = [
    '2018-02-15', // 春节
    '2018-02-16', // 春节
    '2018-02-17', // 春节
    '2018-02-18', // 春节
    '2018-02-19', // 春节
    '2018-02-20', // 春节
    '2018-02-21', // 春节
    '2018-04-05', // 清明节
    '2018-04-06', // 清明节
    '2018-04-07', // 清明节
    '2018-04-29', // 劳动节
    '2018-04-30', // 劳动节
    '2018-05-01', // 劳动节
    '2018-06-18', // 端午节
    '2018-09-24', // 中秋节
    '2018-10-01', // 国庆节
    '2018-10-02', // 国庆节
    '2018-10-03', // 国庆节
    '2018-10-04', // 国庆节
    '2018-10-05', // 国庆节
    '2018-10-06', // 国庆节
    '2018-10-07', // 国庆节
    '2018-12-30', // 元旦
    '2018-12-31', // 元旦
  ];

  // 工作日(调休)
  const WORKDAYS_2018 = [
    '2018-02-11', // 补春节
    '2018-02-24', // 补春节
    '2018-04-08', // 补清明节
    '2018-04-28', // 补劳动节
    '2018-09-29', // 补国庆节
    '2018-09-30', // 补国庆节
    '2018-12-29', // 补元旦
  ];

  // 节假日
  const HOLIDAYS_2019 = [
    '2019-01-01', // 元旦
    '2019-02-04', // 春节
    '2019-02-05', // 春节
    '2019-02-06', // 春节
    '2019-02-07', // 春节
    '2019-02-08', // 春节
    '2019-02-09', // 春节
    '2019-02-10', // 春节
    '2019-04-05', // 清明节
    '2019-04-06', // 清明节
    '2019-04-07', // 清明节
    '2019-05-01', // 劳动节
    '2019-05-02', // 劳动节
    '2019-05-03', // 劳动节
    '2019-05-04', // 劳动节
    '2019-06-07', // 端午节
    '2019-06-08', // 端午节
    '2019-06-09', // 端午节
    '2019-09-13', // 中秋节
    '2019-09-14', // 中秋节
    '2019-09-15', // 中秋节
    '2019-10-01', // 国庆节
    '2019-10-02', // 国庆节
    '2019-10-03', // 国庆节
    '2019-10-04', // 国庆节
    '2019-10-05', // 国庆节
    '2019-10-06', // 国庆节
    '2019-10-07', // 国庆节
  ];

  // 工作日(调休)
  const WORKDAYS_2019 = [
    '2019-02-02', // 补春节
    '2019-02-03', // 补春节
    '2019-04-28', // 补劳动节
    '2019-05-05', // 补劳动节
    '2019-09-29', // 补国庆节
    '2019-10-12', // 补国庆节
  ];

  // 节假日
  const HOLIDAYS_2020 = [
    '2020-01-01', // 元旦
    '2020-01-24', // 春节
    '2020-01-25', // 春节
    '2020-01-26', // 春节
    '2020-01-27', // 春节
    '2020-01-28', // 春节
    '2020-01-29', // 春节
    '2020-01-30', // 春节
    '2020-04-04', // 清明节
    '2020-04-05', // 清明节
    '2020-04-06', // 清明节
    '2020-05-01', // 劳动节
    '2020-05-02', // 劳动节
    '2020-05-03', // 劳动节
    '2020-05-04', // 劳动节
    '2020-05-05', // 劳动节
    '2020-06-25', // 端午节
    '2020-06-26', // 端午节
    '2020-06-27', // 端午节
    '2020-10-01', // 国庆节
    '2020-10-02', // 国庆节
    '2020-10-03', // 国庆节
    '2020-10-04', // 国庆节
    '2020-10-05', // 国庆节
    '2020-10-06', // 国庆节
    '2020-10-07', // 国庆节
    '2020-10-08', // 国庆节
  ];

  // 工作日(调休)
  const WORKDAYS_2020 = [
    '2020-01-19', // 补春节
    '2020-02-01', // 补春节
    '2020-04-26', // 补劳动节
    '2020-05-09', // 补劳动节
    '2020-06-28', // 补端午节
    '2020-09-27', // 补国庆节
    '2020-10-10', // 补国庆节
  ];

  // 节假日
  const HOLIDAYS_2021 = [
    '2021-01-01', // 元旦
    '2021-02-11', // 春节
    '2021-02-12', // 春节
    '2021-02-13', // 春节
    '2021-02-14', // 春节
    '2021-02-15', // 春节
    '2021-02-16', // 春节
    '2021-02-17', // 春节
    '2021-04-03', // 清明节
    '2021-04-04', // 清明节
    '2021-04-05', // 清明节
    '2021-05-01', // 劳动节
    '2021-05-02', // 劳动节
    '2021-05-03', // 劳动节
    '2021-05-04', // 劳动节
    '2021-05-05', // 劳动节
    '2021-06-12', // 端午节
    '2021-06-13', // 端午节
    '2021-06-14', // 端午节
    '2021-09-19', // 中秋节
    '2021-09-20', // 中秋节
    '2021-09-21', // 中秋节
    '2021-10-01', // 国庆节
    '2021-10-02', // 国庆节
    '2021-10-03', // 国庆节
    '2021-10-04', // 国庆节
    '2021-10-05', // 国庆节
    '2021-10-06', // 国庆节
    '2021-10-07', // 国庆节
  ];

  // 工作日(调休)
  const WORKDAYS_2021 = [
    '2021-02-07', // 补春节
    '2021-02-20', // 补春节
    '2021-04-25', // 补劳动节
    '2021-05-08', // 补劳动节
    '2021-09-18', // 补中秋节
    '2021-09-26', // 补国庆节
    '2021-10-09', // 补国庆节
  ];

  // 节假日
  const HOLIDAYS_2022 = [
    '2022-01-01', // 元旦
    '2022-01-02', // 元旦
    '2022-01-03', // 元旦
    '2022-01-31', // 春节
    '2022-02-01', // 春节
    '2022-02-02', // 春节
    '2022-02-03', // 春节
    '2022-02-04', // 春节
    '2022-02-05', // 春节
    '2022-02-06', // 春节
    '2022-04-03', // 清明节
    '2022-04-04', // 清明节
    '2022-04-05', // 清明节
    '2022-04-30', // 劳动节
    '2022-05-01', // 劳动节
    '2022-05-02', // 劳动节
    '2022-05-03', // 劳动节
    '2022-05-04', // 劳动节
    '2022-06-03', // 端午节
    '2022-06-04', // 端午节
    '2022-06-05', // 端午节
    '2022-09-10', // 中秋节
    '2022-09-11', // 中秋节
    '2022-09-12', // 中秋节
    '2022-10-01', // 国庆节
    '2022-10-02', // 国庆节
    '2022-10-03', // 国庆节
    '2022-10-04', // 国庆节
    '2022-10-05', // 国庆节
    '2022-10-06', // 国庆节
    '2022-10-07', // 国庆节
    '2022-12-31', // 元旦
  ];

  // 工作日(调休)
  const WORKDAYS_2022 = [
    '2022-01-29', // 补春节
    '2022-01-30', // 补春节
    '2022-04-02', // 补清明节
    '2022-04-24', // 补劳动节
    '2022-05-07', // 补劳动节
    '2022-10-08', // 补国庆节
    '2022-10-09', // 补国庆节
  ];

  // 节假日
  const HOLIDAYS_2023 = [
    '2023-01-01', // 元旦
    '2023-01-02', // 元旦
    '2023-01-21', // 春节
    '2023-01-22', // 春节
    '2023-01-23', // 春节
    '2023-01-24', // 春节
    '2023-01-25', // 春节
    '2023-01-26', // 春节
    '2023-01-27', // 春节
    '2023-04-05', // 清明节
    '2023-04-29', // 劳动节
    '2023-04-30', // 劳动节
    '2023-05-01', // 劳动节
    '2023-05-02', // 劳动节
    '2023-05-03', // 劳动节
    '2023-06-22', // 端午节
    '2023-06-23', // 端午节
    '2023-06-24', // 端午节
    '2023-09-29', // 中秋节
    '2023-09-30', // 中秋节
    '2023-10-01', // 国庆节
    '2023-10-02', // 国庆节
    '2023-10-03', // 国庆节
    '2023-10-04', // 国庆节
    '2023-10-05', // 国庆节
    '2023-10-06', // 国庆节
  ];

  // 工作日(调休)
  const WORKDAYS_2023 = [
    '2023-01-28', // 补春节
    '2023-01-29', // 补春节
    '2023-04-23', // 补劳动节
    '2023-05-06', // 补劳动节
    '2023-06-25', // 补端午节
    '2023-10-07', // 补国庆节
    '2023-10-08', // 补国庆节
  ];

  // 节假日
  const HOLIDAYS_2024 = [
    '2024-01-01', // 元旦
    '2024-02-10', // 春节
    '2024-02-11', // 春节
    '2024-02-12', // 春节
    '2024-02-13', // 春节
    '2024-02-14', // 春节
    '2024-02-15', // 春节
    '2024-02-16', // 春节
    '2024-02-17', // 春节
    '2024-04-04', // 清明节
    '2024-04-05', // 清明节
    '2024-04-06', // 清明节
    '2024-05-01', // 劳动节
    '2024-05-02', // 劳动节
    '2024-05-03', // 劳动节
    '2024-05-04', // 劳动节
    '2024-05-05', // 劳动节
    '2024-06-10', // 端午节
    '2024-09-15', // 中秋节
    '2024-09-16', // 中秋节
    '2024-09-17', // 中秋节
    '2024-10-01', // 国庆节
    '2024-10-02', // 国庆节
    '2024-10-03', // 国庆节
    '2024-10-04', // 国庆节
    '2024-10-05', // 国庆节
    '2024-10-06', // 国庆节
    '2024-10-07', // 国庆节
  ];

  // 工作日(调休)
  const WORKDAYS_2024 = [
    '2024-02-04', // 补春节
    '2024-02-18', // 补春节
    '2024-04-07', // 补清明节
    '2024-04-28', // 补劳动节
    '2024-05-11', // 补劳动节
    '2024-09-14', // 补中秋节
    '2024-09-29', // 补国庆节
    '2024-10-12', // 补国庆节
  ];

  // 节假日
  const HOLIDAYS_2025 = [
    '2025-01-01', // 元旦
    '2025-01-28', // 春节
    '2025-01-29', // 春节
    '2025-01-30', // 春节
    '2025-01-31', // 春节
    '2025-02-01', // 春节
    '2025-02-02', // 春节
    '2025-02-03', // 春节
    '2025-02-04', // 春节
    '2025-04-04', // 清明节
    '2025-04-05', // 清明节
    '2025-04-06', // 清明节
    '2025-05-01', // 劳动节
    '2025-05-02', // 劳动节
    '2025-05-03', // 劳动节
    '2025-05-04', // 劳动节
    '2025-05-05', // 劳动节
    '2025-05-31', // 端午节
    '2025-06-01', // 端午节
    '2025-06-02', // 端午节
    '2025-10-01', // 国庆节、中秋节
    '2025-10-02', // 国庆节、中秋节
    '2025-10-03', // 国庆节、中秋节
    '2025-10-04', // 国庆节、中秋节
    '2025-10-05', // 国庆节、中秋节
    '2025-10-06', // 国庆节、中秋节
    '2025-10-07', // 国庆节、中秋节
    '2025-10-08', // 国庆节、中秋节
  ];

  // 工作日(调休)
  const WORKDAYS_2025 = [
    '2025-01-26', // 春节调休
    '2025-02-08', // 春节调休
    '2025-04-27', // 劳动节调休
    '2025-09-28', // 国庆、中秋调休
    '2025-10-11', // 国庆、中秋调休
  ];

  const HOLIDAYS = [
    ...HOLIDAYS_2018,
    ...HOLIDAYS_2019,
    ...HOLIDAYS_2020,
    ...HOLIDAYS_2021,
    ...HOLIDAYS_2022,
    ...HOLIDAYS_2023,
    ...HOLIDAYS_2024,
    ...HOLIDAYS_2025,
  ];

  const WORKDAYS = [
    ...WORKDAYS_2018,
    ...WORKDAYS_2019,
    ...WORKDAYS_2020,
    ...WORKDAYS_2021,
    ...WORKDAYS_2022,
    ...WORKDAYS_2023,
    ...WORKDAYS_2024,
    ...WORKDAYS_2025,
  ];

  const WORKDAY = 'workday';
  const HOLIDAY = 'holiday';
  const WEEKEND = 'weekend';

  const formatDate = date => {
    if (!date) {
      throw new Error('Date is required')
    }
    
    const d = new Date(date);
    if (isNaN(d.getTime())) {
      throw new Error('Invalid date format')
    }
    
    const year = d.getFullYear();
    const month = String(d.getMonth() + 1).padStart(2, '0');
    const day = String(d.getDate()).padStart(2, '0');
    return `${year}-${month}-${day}`
  };

  /**
   * 判断是否是工作日
   * @param {Date} date - 日期
   * @return {boolean} - 是否是工作日
   */
  function isWorkday(date) {
    const dayStr = formatDate(date);
    if (WORKDAYS.includes(dayStr)) return true
    if (HOLIDAYS.includes(dayStr)) return false
    return !isWeekend(date)
  }

  /**
   * 判断是否是节假日
   * @param {Date} date - 日期
   * @return {boolean} - 是否是节假日
   */
  function isHoliday(date) {
    const dayStr = formatDate(date);
    return HOLIDAYS.includes(dayStr) || (isWeekend(date) && !WORKDAYS.includes(dayStr))
  }

  /**
   * 判断是否是周末
   * @param {Date} date - 日期
   * @return {boolean} - 是否是周末
   */
  function isWeekend(date) {
    const d = new Date(date);
    const day = d.getDay();
    return day === 0 || day === 6
  }

  /**
   * 判断是否是工作日
   * @param {Date} date - 日期
   * @return {boolean} - 是否是工作日
   */
  function isWeekday(date) {
    return !isWeekend(date)
  }

  /**
   * 获取指定日期所在周/月的工作日数组
   * @param {Date} date - 日期
   * @param type
   * @params {String} type - 类型
   * @return {Array} - 工作日数组
   */
  function getWorkdays(date, type = 'week') {
    if (![ 'week', 'month' ].includes(type)) {
      throw new Error('Invalid type: must be "week" or "month"')
    }
    
    const d = new Date(date);
    const start = type === 'week' 
      ? new Date(d.setDate(d.getDate() - d.getDay())) 
      : new Date(d.getFullYear(), d.getMonth(), 1);
    const end = type === 'week'
      ? new Date(d.setDate(d.getDate() + 6))
      : new Date(d.getFullYear(), d.getMonth() + 1, 0);
    return getWorkdaysBetween(start, end)
  }

  /**
   * 获取下一个工作日
   * @param {Date} date - 日期
   * @return {Date} - 下一个工作日
   */
  function getNextWorkday(date) {
    const d = new Date(date);
    while (!isWorkday(d)) {
      d.setDate(d.getDate() + 1);
    }
    return d
  }

  /**
   * 获取两个日期之间的所有工作日
   * @param {Date} startDate - 开始日期
   * @param {Date} endDate - 结束日期
   * @return {Date[]} - 工作日日期数组
   */
  function getWorkdaysBetween(startDate, endDate) {
    if (!startDate || !endDate) throw new Error('Invalid Arguments: startDate and endDate are required')
    const days = [];
    const start = new Date(startDate);
    const end = new Date(endDate);

    if (start > end) return days
    
    const current = new Date(start);
    while (current <= end) {
      if (isWorkday(current)) {
        days.push(new Date(current));
      }
      current.setDate(current.getDate() + 1);
    }
    return days
  }

  /**
   * 获取指定日期的状态
   * @param {Date} date - 日期
   * @return {string} - 日期状态
   */
  function getDateType(date) {
    const dayStr = formatDate(date);
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
  function getMonthWorkdays(year, month) {
    if (typeof year !== 'number' || isNaN(year)) throw new Error('Invalid Type: year must be a number')
    if (typeof month !== 'number' || isNaN(month)) throw new Error('Invalid Type: month must be a number')

    if (month < 1 || month > 12) throw new Error('Invalid month')
    const startDate = new Date(year, month - 1, 1);
    const endDate = new Date(year, month, 0);
    return getWorkdaysBetween(startDate, endDate).length
  }

  var workdayCn = /*#__PURE__*/Object.freeze({
    __proto__: null,
    getDateType: getDateType,
    getMonthWorkdays: getMonthWorkdays,
    getNextWorkday: getNextWorkday,
    getWorkdays: getWorkdays,
    getWorkdaysBetween: getWorkdaysBetween,
    isHoliday: isHoliday,
    isWeekday: isWeekday,
    isWeekend: isWeekend,
    isWorkday: isWorkday
  });

  return workdayCn;

}));
