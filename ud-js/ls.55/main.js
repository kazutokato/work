//  配列 JavaScriptでは複数データ型でも配列として持つことが出来る。
const arry = [1, 2, 3, 4, 5, 6, "moji", true];

arry.unshift("new item");
const val = arry.shift();
console.log(arry);