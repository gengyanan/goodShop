import Vue from 'vue'
import moment from 'moment'
const datafmts=Vue.filter('datafmta',function (input,fmtstring) {
  return moment(input).format(fmtstring)
})
export default {datafmts}
/*
export Vue.filter('datafmta',function (input,fmtstring) {
  console.log(input,fmtstring);
  return moment(input).format(fmtstring)
})
*/
