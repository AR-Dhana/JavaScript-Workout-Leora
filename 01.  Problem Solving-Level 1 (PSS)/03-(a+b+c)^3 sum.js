//program to slove (a+b+c)^3
let a=1;
let b=2;
let c=3;

/**formula */
console.log("(a+b+c)^3=a^3+B^3+c^3+3(a+b)(b+c)(c+a)");

/** LHS */
let d=a+b+c;
let z=d**3;

/** RHS */
let e=a**3;
let f=b**3;
let g=c**3;
let h=3*(a+b)*(b+c)*(c+a);
let x=e+f+g+h;

/** LHS = RHS */
if(z==x){
    console.log("hence proved");
}