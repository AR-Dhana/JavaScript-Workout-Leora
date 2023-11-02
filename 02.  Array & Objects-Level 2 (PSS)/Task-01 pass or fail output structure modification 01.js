// pass or fail status of all students from students detail list //
let studentDetailsList=[{ "name":"arun","class":"A","age":25,"gender":"male","marks":[35,45,50,20,50] },
                        { "name":"meenu","class":"B","age":65,"gender":"female","marks":[10,20,30,50,40] },
                        { "name":"jeni","class":"C","age":32,"gender":"female","marks":[65,90,60,85,50] },
                        { "name":"selvi","class":"a","age":34,"gender":"female","marks":[55,90,30,60,50] },
                        { "name":"ammu","class":"a","age":24,"gender":"female","marks":[55,45,30,60,50] },
                        { "name":"ram","class":"c","age":40,"gender":"male","marks":[70,60,80,67,50] }
];
let studentDetailsResult=[];
for(i=0;i<studentDetailsList.length;i++){
    let tempPassCount=0;
    let tempFailCount=0;
    let dummyFailCount=0;
    studentDetailsList[i].class=studentDetailsList[i].class.toUpperCase();
    studentDetailsList[i].gender=studentDetailsList[i].gender.toUpperCase();
    switch(studentDetailsList[i].class){
        case 'A':
            for(j=0;j<studentDetailsList[i].marks[j];j++){
                if((studentDetailsList[i].gender=="FEMALE")&&(studentDetailsList[i].marks[j]>=50)||(studentDetailsList[i].gender=="MALE")&&(studentDetailsList[i].marks[j]>=30)){
                    tempPassCount+=1;
                    if(tempPassCount==5){
                        studentDetailsResult.push({Class:studentDetailsList[i].class,Name:studentDetailsList[i].name,get_pass_the_all_subjects:tempPassCount});
                    }
                }
                else if((studentDetailsList[i].gender=="MALE")&&(studentDetailsList[i].marks[j]<30)||(studentDetailsList[i].gender=="FEMALE")&&(studentDetailsList[i].marks[j]<50)){
                    tempFailCount+=1;
                    if(tempFailCount>0){
                        dummyFailCount+=1;
                    }
                }
            }
            if(dummyFailCount>0){
                studentDetailsResult.push({Class:studentDetailsList[i].class,Name:studentDetailsList[i].name,get_failed_in_number_of_subjects:dummyFailCount});
            }
        break;
        case 'B':
            for(j=0;j<studentDetailsList[i].marks[j];j++){
                if((studentDetailsList[i].gender=="FEMALE")&&(studentDetailsList[i].marks[j]>=50)||(studentDetailsList[i].gender=="MALE")&&(studentDetailsList[i].marks[j]>=30)){
                    tempPassCount+=1;
                    if(tempPassCount==5){
                        studentDetailsResult.push({Class:studentDetailsList[i].class,Name:studentDetailsList[i].name,get_pass_the_all_subjects:tempPassCount});
                    }
                }
                else if((studentDetailsList[i].gender=="MALE")&&(studentDetailsList[i].marks[j]<30)||(studentDetailsList[i].gender=="FEMALE")&&(studentDetailsList[i].marks[j]<50)){
                    tempFailCount+=1;
                    if(tempFailCount>0){
                        dummyFailCount+=1;
                    }
                }
            }
            if(dummyFailCount>0){
                studentDetailsResult.push({Class:studentDetailsList[i].class,Name:studentDetailsList[i].name,get_failed_in_number_of_subjects:dummyFailCount});
            }
        break;
        case 'C':
            for(j=0;j<studentDetailsList[i].marks[j];j++){
                if((studentDetailsList[i].gender=="FEMALE")&&(studentDetailsList[i].marks[j]>=50)||(studentDetailsList[i].gender=="MALE")&&(studentDetailsList[i].marks[j]>=30)){
                    tempPassCount+=1;
                    if(tempPassCount==5){
                        studentDetailsResult.push({Class:studentDetailsList[i].class,Name:studentDetailsList[i].name,get_pass_the_all_subjects:tempPassCount});
                    }
                }
                else if((studentDetailsList[i].gender=="MALE")&&(studentDetailsList[i].marks[j]<30)||(studentDetailsList[i].gender=="FEMALE")&&(studentDetailsList[i].marks[j]<50)){
                    tempFailCount+=1;
                    if(tempFailCount>0){
                        dummyFailCount+=1;
                    }
                }
            }
            if(dummyFailCount>0){
                studentDetailsResult.push({Class:studentDetailsList[i].class,Name:studentDetailsList[i].name,get_failed_in_number_of_subjects:dummyFailCount});
            }
        break;
    }
}
console.log(studentDetailsResult);