/**
 * Converts a SQL DATETIME format to a JavaScript Date object.
 * @param {string} sqlDate - The SQL DATETIME format string ("yyyy-mm-dd hh:mm:ss.ms").
 * @returns {Date} - The JavaScript Date object.
 */
export default function (sqlDate) {
	var sqlDateArr1 = sqlDate.split('-');
	var sYear = sqlDateArr1[0];
	var sMonth = (Number(sqlDateArr1[1]) - 1).toString();
	var sqlDateArr2 = sqlDateArr1[2].split(' ');
	var sDay = sqlDateArr2[0];
	var sqlDateArr3 = sqlDateArr2[1].split(':');
	var sHour = sqlDateArr3[0];
	var sMinute = sqlDateArr3[1];
	var sqlDateArr4 = sqlDateArr3[2].split('.');
	var sSecond = sqlDateArr4[0];
	var sMillisecond = sqlDateArr4[1];
	return new Date(sYear, sMonth, sDay, sHour, sMinute, sSecond, sMillisecond);
}
