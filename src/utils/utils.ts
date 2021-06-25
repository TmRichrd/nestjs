export function formatDate(time: any): any {
  var date = new Date(parseInt(time));
  var year = date.getFullYear();
  var mon = date.getMonth() + 1;
  var day = date.getDate();
  var hour  = date.getHours()
  var m = date.getMinutes()
  var s = date.getSeconds()
  return `${year}-${mon}-${day} ${hour}:${m}:${s}`
}
