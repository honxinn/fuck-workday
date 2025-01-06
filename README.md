# workday-cn

> 一个用于判断中国工作日的 JavaScript 工具包，支持法定节假日和调休判断。

[![](https://img.shields.io/badge/npm-v1.0.0-blue)](https://www.npmjs.com/package/workday-cn)

## 特性
- 支持法定节假日判断
- 支持调休工作日判断
- 支持工作日范围计算
- 基于 Day.js
- 零配置，开箱即用
- 支持多种模块规范 (CommonJS/ESM/UMD)

## 安装

```bash
npm install workday-cn
# 或
yarn add workday-cn
```

## 使用

支持多种模块引入方式：

```javascript
// ESM
import { isWorkday } from 'workday-cn';

// CommonJS
const { isWorkday } = require('workday-cn');

// UMD (通过 CDN)
<script src="https://unpkg.com/workday-cn/dist/workday-cn.umd.js"></script>
const { isWorkday } = window.workdayCn;
```

## API

### 日期判断

#### isWorkday(date: Date | string): boolean
判断指定日期是否为工作日（包含调休）。

```javascript
isWorkday(new Date('2024-05-01')); // false
isWorkday('2024-05-02'); // false
```

#### isHoliday(date: Date | string): boolean
判断指定日期是否为法定节假日。

```javascript
isHoliday(new Date('2024-05-01')); // true
```

#### isWeekend(date: Date | string): boolean
判断指定日期是否为周末。

```javascript
isWeekend(new Date('2024-05-04')); // true
```

### 日期计算

#### getNextWorkday(date: Date | string): Date
获取指定日期之后的第一个工作日。

```javascript
const next = getNextWorkday(new Date('2024-05-01'));
console.log(next); // 2024-05-06
```

#### getWorkdaysBetween(startDate: Date | string, endDate: Date | string): Date[]
获取两个日期之间的所有工作日。

```javascript
const workdays = getWorkdaysBetween(
  '2024-05-01',
  '2024-05-10'
);
console.log(workdays.length); // 5
```

#### getWorkdays(date: Date | string, type: 'week' | 'month' = 'week'): Date[]
获取指定日期所在周或月的所有工作日。

```javascript
// 获取本周工作日
const weekWorkdays = getWorkdays(new Date());

// 获取本月工作日
const monthWorkdays = getWorkdays(new Date(), 'month');
```

#### getMonthWorkdays(year: number, month: number): number
获取指定月份的工作日数量。

```javascript
const count = getMonthWorkdays(2024, 5); // 获取2024年5月的工作日数量
```

#### getDateType(date: Date | string): string
获取指定日期的类型（'workday' | 'holiday' | 'weekend'）。

```javascript
const type = getDateType(new Date('2024-05-01')); // 'holiday'
```

## 注意事项

- 日期参数支持 Date 对象或 'YYYY-MM-DD' 格式的字符串
- 节假日数据基于国务院发布的法定节假日安排
- 每年的节假日数据会定期更新

## 许可

[MIT](http://opensource.org/licenses/MIT)

Copyright (c) 2025-present HonXin