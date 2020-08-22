let a=[10,17,18,17,15];
console.log("Operation one-->Filter elements less than 15");
a=a.filter((d) => d>15);
console.log(a);
console.log("Operation two-->All values and their indexes");
a.forEach((index,i)=>{console.log("index-->"+i+" "+"corresponding value-->"+a[i])});
console.log("Operation three-->Map and multiply by 10");
a=a.map((d) =>d*10);
console.log(a);