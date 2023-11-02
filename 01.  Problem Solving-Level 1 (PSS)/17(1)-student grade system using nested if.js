let myMark=60;
let grade;

if(myMark<=100){
    grade='s';
    if(myMark<=90){
        grade='a';
        if(myMark<=80){
            grade='b';
            if(myMark<=70){
                grade='c';
                if(myMark<=60){
                    grade='d';
                    if(myMark<=55){
                        grade='e';
                        if(myMark<50){
                            grade='fail';
                            if(myMark<0){
                                grade="invalid";
                            }
                        }
                    }
                }
            }
        }
    }
}
else{
    grade="invalid";
}
console.log(grade);