const arry = [1,2,3,4,5,6,7,8,9];

//  for of は値をとってくる
for(let v of arry) { 
  console.log(v);
}

//  for in は添字をとってくる
for(let i in arry) {
  console.log(i, arry[i])
}

//  let i,j,kなどは基本的に添字を意味するのでfor inで使用し、for ofではあまり使用しない
//  let of ではvを使用することが多い。