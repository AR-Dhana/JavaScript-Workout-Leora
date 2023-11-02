// prime or not

let n=5;
let flag=0;
if (n == 0 || n == 1){
    flag = 1;
}
for (i = 2; i <= n / 2; ++i){
    if (n % i == 0) {
        flag = 1;
      }
}
if (flag == 0){
    console.log(n+' prime');
}
else{
    console.log(n+' not prime')
}