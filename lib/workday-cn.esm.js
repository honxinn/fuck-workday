/*!
 * Version: 1.0.0
 * Author: HonXin
 * Released under the MIT License.
 */
function getDefaultExportFromCjs (x) {
	return x && x.__esModule && Object.prototype.hasOwnProperty.call(x, 'default') ? x['default'] : x;
}

var dayjs_min$1 = {exports: {}};

var dayjs_min = dayjs_min$1.exports;

var hasRequiredDayjs_min;

function requireDayjs_min () {
	if (hasRequiredDayjs_min) return dayjs_min$1.exports;
	hasRequiredDayjs_min = 1;
	(function (module, exports) {
		!function(t,e){module.exports=e();}(dayjs_min,(function(){var t=1e3,e=6e4,n=36e5,r="millisecond",i="second",s="minute",u="hour",a="day",o="week",c="month",f="quarter",h="year",d="date",l="Invalid Date",$=/^(\d{4})[-/]?(\d{1,2})?[-/]?(\d{0,2})[Tt\s]*(\d{1,2})?:?(\d{1,2})?:?(\d{1,2})?[.:]?(\d+)?$/,y=/\[([^\]]+)]|Y{1,4}|M{1,4}|D{1,2}|d{1,4}|H{1,2}|h{1,2}|a|A|m{1,2}|s{1,2}|Z{1,2}|SSS/g,M={name:"en",weekdays:"Sunday_Monday_Tuesday_Wednesday_Thursday_Friday_Saturday".split("_"),months:"January_February_March_April_May_June_July_August_September_October_November_December".split("_"),ordinal:function(t){var e=["th","st","nd","rd"],n=t%100;return "["+t+(e[(n-20)%10]||e[n]||e[0])+"]"}},m=function(t,e,n){var r=String(t);return !r||r.length>=e?t:""+Array(e+1-r.length).join(n)+t},v={s:m,z:function(t){var e=-t.utcOffset(),n=Math.abs(e),r=Math.floor(n/60),i=n%60;return (e<=0?"+":"-")+m(r,2,"0")+":"+m(i,2,"0")},m:function t(e,n){if(e.date()<n.date())return -t(n,e);var r=12*(n.year()-e.year())+(n.month()-e.month()),i=e.clone().add(r,c),s=n-i<0,u=e.clone().add(r+(s?-1:1),c);return +(-(r+(n-i)/(s?i-u:u-i))||0)},a:function(t){return t<0?Math.ceil(t)||0:Math.floor(t)},p:function(t){return {M:c,y:h,w:o,d:a,D:d,h:u,m:s,s:i,ms:r,Q:f}[t]||String(t||"").toLowerCase().replace(/s$/,"")},u:function(t){return void 0===t}},g="en",D={};D[g]=M;var p="$isDayjsObject",S=function(t){return t instanceof _||!(!t||!t[p])},w=function t(e,n,r){var i;if(!e)return g;if("string"==typeof e){var s=e.toLowerCase();D[s]&&(i=s),n&&(D[s]=n,i=s);var u=e.split("-");if(!i&&u.length>1)return t(u[0])}else {var a=e.name;D[a]=e,i=a;}return !r&&i&&(g=i),i||!r&&g},O=function(t,e){if(S(t))return t.clone();var n="object"==typeof e?e:{};return n.date=t,n.args=arguments,new _(n)},b=v;b.l=w,b.i=S,b.w=function(t,e){return O(t,{locale:e.$L,utc:e.$u,x:e.$x,$offset:e.$offset})};var _=function(){function M(t){this.$L=w(t.locale,null,!0),this.parse(t),this.$x=this.$x||t.x||{},this[p]=!0;}var m=M.prototype;return m.parse=function(t){this.$d=function(t){var e=t.date,n=t.utc;if(null===e)return new Date(NaN);if(b.u(e))return new Date;if(e instanceof Date)return new Date(e);if("string"==typeof e&&!/Z$/i.test(e)){var r=e.match($);if(r){var i=r[2]-1||0,s=(r[7]||"0").substring(0,3);return n?new Date(Date.UTC(r[1],i,r[3]||1,r[4]||0,r[5]||0,r[6]||0,s)):new Date(r[1],i,r[3]||1,r[4]||0,r[5]||0,r[6]||0,s)}}return new Date(e)}(t),this.init();},m.init=function(){var t=this.$d;this.$y=t.getFullYear(),this.$M=t.getMonth(),this.$D=t.getDate(),this.$W=t.getDay(),this.$H=t.getHours(),this.$m=t.getMinutes(),this.$s=t.getSeconds(),this.$ms=t.getMilliseconds();},m.$utils=function(){return b},m.isValid=function(){return !(this.$d.toString()===l)},m.isSame=function(t,e){var n=O(t);return this.startOf(e)<=n&&n<=this.endOf(e)},m.isAfter=function(t,e){return O(t)<this.startOf(e)},m.isBefore=function(t,e){return this.endOf(e)<O(t)},m.$g=function(t,e,n){return b.u(t)?this[e]:this.set(n,t)},m.unix=function(){return Math.floor(this.valueOf()/1e3)},m.valueOf=function(){return this.$d.getTime()},m.startOf=function(t,e){var n=this,r=!!b.u(e)||e,f=b.p(t),l=function(t,e){var i=b.w(n.$u?Date.UTC(n.$y,e,t):new Date(n.$y,e,t),n);return r?i:i.endOf(a)},$=function(t,e){return b.w(n.toDate()[t].apply(n.toDate("s"),(r?[0,0,0,0]:[23,59,59,999]).slice(e)),n)},y=this.$W,M=this.$M,m=this.$D,v="set"+(this.$u?"UTC":"");switch(f){case h:return r?l(1,0):l(31,11);case c:return r?l(1,M):l(0,M+1);case o:var g=this.$locale().weekStart||0,D=(y<g?y+7:y)-g;return l(r?m-D:m+(6-D),M);case a:case d:return $(v+"Hours",0);case u:return $(v+"Minutes",1);case s:return $(v+"Seconds",2);case i:return $(v+"Milliseconds",3);default:return this.clone()}},m.endOf=function(t){return this.startOf(t,!1)},m.$set=function(t,e){var n,o=b.p(t),f="set"+(this.$u?"UTC":""),l=(n={},n[a]=f+"Date",n[d]=f+"Date",n[c]=f+"Month",n[h]=f+"FullYear",n[u]=f+"Hours",n[s]=f+"Minutes",n[i]=f+"Seconds",n[r]=f+"Milliseconds",n)[o],$=o===a?this.$D+(e-this.$W):e;if(o===c||o===h){var y=this.clone().set(d,1);y.$d[l]($),y.init(),this.$d=y.set(d,Math.min(this.$D,y.daysInMonth())).$d;}else l&&this.$d[l]($);return this.init(),this},m.set=function(t,e){return this.clone().$set(t,e)},m.get=function(t){return this[b.p(t)]()},m.add=function(r,f){var d,l=this;r=Number(r);var $=b.p(f),y=function(t){var e=O(l);return b.w(e.date(e.date()+Math.round(t*r)),l)};if($===c)return this.set(c,this.$M+r);if($===h)return this.set(h,this.$y+r);if($===a)return y(1);if($===o)return y(7);var M=(d={},d[s]=e,d[u]=n,d[i]=t,d)[$]||1,m=this.$d.getTime()+r*M;return b.w(m,this)},m.subtract=function(t,e){return this.add(-1*t,e)},m.format=function(t){var e=this,n=this.$locale();if(!this.isValid())return n.invalidDate||l;var r=t||"YYYY-MM-DDTHH:mm:ssZ",i=b.z(this),s=this.$H,u=this.$m,a=this.$M,o=n.weekdays,c=n.months,f=n.meridiem,h=function(t,n,i,s){return t&&(t[n]||t(e,r))||i[n].slice(0,s)},d=function(t){return b.s(s%12||12,t,"0")},$=f||function(t,e,n){var r=t<12?"AM":"PM";return n?r.toLowerCase():r};return r.replace(y,(function(t,r){return r||function(t){switch(t){case"YY":return String(e.$y).slice(-2);case"YYYY":return b.s(e.$y,4,"0");case"M":return a+1;case"MM":return b.s(a+1,2,"0");case"MMM":return h(n.monthsShort,a,c,3);case"MMMM":return h(c,a);case"D":return e.$D;case"DD":return b.s(e.$D,2,"0");case"d":return String(e.$W);case"dd":return h(n.weekdaysMin,e.$W,o,2);case"ddd":return h(n.weekdaysShort,e.$W,o,3);case"dddd":return o[e.$W];case"H":return String(s);case"HH":return b.s(s,2,"0");case"h":return d(1);case"hh":return d(2);case"a":return $(s,u,!0);case"A":return $(s,u,!1);case"m":return String(u);case"mm":return b.s(u,2,"0");case"s":return String(e.$s);case"ss":return b.s(e.$s,2,"0");case"SSS":return b.s(e.$ms,3,"0");case"Z":return i}return null}(t)||i.replace(":","")}))},m.utcOffset=function(){return 15*-Math.round(this.$d.getTimezoneOffset()/15)},m.diff=function(r,d,l){var $,y=this,M=b.p(d),m=O(r),v=(m.utcOffset()-this.utcOffset())*e,g=this-m,D=function(){return b.m(y,m)};switch(M){case h:$=D()/12;break;case c:$=D();break;case f:$=D()/3;break;case o:$=(g-v)/6048e5;break;case a:$=(g-v)/864e5;break;case u:$=g/n;break;case s:$=g/e;break;case i:$=g/t;break;default:$=g;}return l?$:b.a($)},m.daysInMonth=function(){return this.endOf(c).$D},m.$locale=function(){return D[this.$L]},m.locale=function(t,e){if(!t)return this.$L;var n=this.clone(),r=w(t,e,!0);return r&&(n.$L=r),n},m.clone=function(){return b.w(this.$d,this)},m.toDate=function(){return new Date(this.valueOf())},m.toJSON=function(){return this.isValid()?this.toISOString():null},m.toISOString=function(){return this.$d.toISOString()},m.toString=function(){return this.$d.toUTCString()},M}(),k=_.prototype;return O.prototype=k,[["$ms",r],["$s",i],["$m",s],["$H",u],["$W",a],["$M",c],["$y",h],["$D",d]].forEach((function(t){k[t[1]]=function(e){return this.$g(e,t[0],t[1])};})),O.extend=function(t,e){return t.$i||(t(e,_,O),t.$i=!0),O},O.locale=w,O.isDayjs=S,O.unix=function(t){return O(1e3*t)},O.en=D[g],O.Ls=D,O.p={},O})); 
	} (dayjs_min$1));
	return dayjs_min$1.exports;
}

var dayjs_minExports = requireDayjs_min();
var dayjs = /*@__PURE__*/getDefaultExportFromCjs(dayjs_minExports);

var isSameOrBefore$2 = {exports: {}};

var isSameOrBefore$1 = isSameOrBefore$2.exports;

var hasRequiredIsSameOrBefore;

function requireIsSameOrBefore () {
	if (hasRequiredIsSameOrBefore) return isSameOrBefore$2.exports;
	hasRequiredIsSameOrBefore = 1;
	(function (module, exports) {
		!function(e,i){module.exports=i();}(isSameOrBefore$1,(function(){return function(e,i){i.prototype.isSameOrBefore=function(e,i){return this.isSame(e,i)||this.isBefore(e,i)};}})); 
	} (isSameOrBefore$2));
	return isSameOrBefore$2.exports;
}

var isSameOrBeforeExports = requireIsSameOrBefore();
var isSameOrBefore = /*@__PURE__*/getDefaultExportFromCjs(isSameOrBeforeExports);

var isSameOrAfter$2 = {exports: {}};

var isSameOrAfter$1 = isSameOrAfter$2.exports;

var hasRequiredIsSameOrAfter;

function requireIsSameOrAfter () {
	if (hasRequiredIsSameOrAfter) return isSameOrAfter$2.exports;
	hasRequiredIsSameOrAfter = 1;
	(function (module, exports) {
		!function(e,t){module.exports=t();}(isSameOrAfter$1,(function(){return function(e,t){t.prototype.isSameOrAfter=function(e,t){return this.isSame(e,t)||this.isAfter(e,t)};}})); 
	} (isSameOrAfter$2));
	return isSameOrAfter$2.exports;
}

var isSameOrAfterExports = requireIsSameOrAfter();
var isSameOrAfter = /*@__PURE__*/getDefaultExportFromCjs(isSameOrAfterExports);

var isBetween$2 = {exports: {}};

var isBetween$1 = isBetween$2.exports;

var hasRequiredIsBetween;

function requireIsBetween () {
	if (hasRequiredIsBetween) return isBetween$2.exports;
	hasRequiredIsBetween = 1;
	(function (module, exports) {
		!function(e,i){module.exports=i();}(isBetween$1,(function(){return function(e,i,t){i.prototype.isBetween=function(e,i,s,f){var n=t(e),o=t(i),r="("===(f=f||"()")[0],u=")"===f[1];return (r?this.isAfter(n,s):!this.isBefore(n,s))&&(u?this.isBefore(o,s):!this.isAfter(o,s))||(r?this.isBefore(n,s):!this.isAfter(n,s))&&(u?this.isAfter(o,s):!this.isBefore(o,s))};}})); 
	} (isBetween$2));
	return isBetween$2.exports;
}

var isBetweenExports = requireIsBetween();
var isBetween = /*@__PURE__*/getDefaultExportFromCjs(isBetweenExports);

// 节假日
const HOLIDAYS_2025 = [
  '2025-01-01', // 元旦
  '2025-01-28', // 春节
  '2025-01-29',
  '2025-01-30',
  '2025-01-31',
  '2025-02-01',
  '2025-02-02',
  '2025-02-03',
  '2025-02-04',
  '2025-04-04', // 清明节
  '2025-04-05',
  '2025-04-06',
  '2025-05-01', // 劳动节
  '2025-05-02',
  '2025-05-03',
  '2025-05-04',
  '2025-05-05',
  '2025-05-31', // 端午节
  '2025-06-01',
  '2025-06-02',
  '2025-10-01', // 国庆节、中秋节
  '2025-10-02',
  '2025-10-03',
  '2025-10-04',
  '2025-10-05',
  '2025-10-06',
  '2025-10-07',
  '2025-10-08',
];

// 工作日(调休)
const WORKDAYS_2025 = [
  '2025-01-26', // 春节调休
  '2025-02-08',
  '2025-04-27', // 劳动节调休
  '2025-09-28', // 国庆、中秋调休
  '2025-10-11',
];

const HOLIDAYS = [
  ...HOLIDAYS_2025,
];

const WORKDAYS = [
  ...WORKDAYS_2025,
];

const WORKDAY = 'workday';
const HOLIDAY = 'holiday';
const WEEKEND = 'weekend';

dayjs.extend(isSameOrBefore);
dayjs.extend(isSameOrAfter);
dayjs.extend(isBetween);

const formatDate = date => dayjs(date).format('YYYY-MM-DD');

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
  const d = dayjs(date);
  const day = d.day();
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
  
  const d = dayjs(date);
  const start = d.startOf(type);
  const end = d.endOf(type);
  return getWorkdaysBetween(start, end)
}

/**
 * 获取下一个工作日
 * @param {Date} date - 日期
 * @return {Date} - 下一个工作日
 */
function getNextWorkday(date) {
  let d = dayjs(date);
  while (!isWorkday(d)) {
    d = d.add(1, 'day');
  }
  return d.toDate()
}

/**
 * 获取两个日期之间的所有工作日
 * @param {Date} startDate - 开始日期
 * @param {Date} endDate - 结束日期
 * @return {Date[]} - 工作日日期数组
 */
function getWorkdaysBetween(startDate, endDate) {
  if (!startDate || !endDate) throw new Error('Invalid Arguments: startDate and endDate are required')
  const start = dayjs(startDate);
  const end = dayjs(endDate);
  const days = [];

  if (start.isAfter(end)) return days
  
  let current = start;
  while (current.isSameOrBefore(end, 'day')) {
    if (isWorkday(current)) {
      days.push(current.toDate());
    }
    current = current.add(1, 'day');
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
  const startDate = dayjs(`${year}-${month}-01`);
  const endDate = startDate.endOf('month');
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

export { workdayCn as default };
