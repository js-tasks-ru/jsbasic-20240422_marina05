function checkSpam(str) {
  let Str1 = str.toLowerCase();
  return Str1.includes('1xbet') || Str1.includes('xxx');
}


console.log(checkSpam('1XbeT now'));
console.log(checkSpam('free xxxxx'));
console.log(checkSpam('innocent rabbit'));
