// student detailed list to view the result pass or fail class wise output useing switch case //
let studentDetailsList=[{
    "name":"arun","class":"A","age":25,"gender":"male","marks":[35,45,50,30,50]
  },
  {
    "name":"meenu","class":"B","age":65,"gender":"female","marks":[10,20,30,50,40]
  },
  {
  "name":"jeni","class":"C","age":32,"gender":"female","marks":[65,90,60,85,50]
  },
  {
  "name":"anu","class":"a","age":34,"gender":"female","marks":[55,90,30,60,50]
  },
  {
    "name":"dhanam","class":"a","age":24,"gender":"female","marks":[55,45,30,60,50]
    },
  {
  "name":"gowshik","class":"c","age":40,"gender":"male","marks":[70,60,80,67,50]  
}];

let femalePassMarkList=[];
let malePassMarkList=[];

for(i=0;i<studentDetailsList.length;i++){
    let tempPassCount=0;
    let tempPassCount1=[];
    let tempFailCount=0;
    let tempFailCount1=[];
    let dummyCountMaleFail=0;
    let dummyCountFemaleFail=0;

    studentDetailsList[i].class=studentDetailsList[i].class.toUpperCase();
    studentDetailsList[i].gender=studentDetailsList[i].gender.toUpperCase();
    switch(studentDetailsList[i].class){
        case 'A':
            for(j=0;j<studentDetailsList[i].marks[j];j++){
                if((studentDetailsList[i].gender=="FEMALE")&&(studentDetailsList[i].marks[j]>=50)){
                    tempPassCount+=1;
                    tempPassCount1.push(tempPassCount);
                    if(tempPassCount1.length==5){
                        console.log('Class:',studentDetailsList[i].class,'Name:',studentDetailsList[i].name,'get passed in all',tempPassCount1.length,'subjects');
                    }
                }
                else if((studentDetailsList[i].gender=="MALE")&&(studentDetailsList[i].marks[j]>=30)){
                    tempPassCount+=1;
                    tempPassCount1.push(tempPassCount);
                    if(tempPassCount1.length==5){
                        console.log('Class:',studentDetailsList[i].class,'Name:',studentDetailsList[i].name,'get passed in all',tempPassCount1.length,'subjects');
                    }
                }
                else if((studentDetailsList[i].gender=="MALE")&&(studentDetailsList[i].marks[j]<30)){
                    tempFailCount+=1;
                    tempFailCount1.push(tempFailCount);
                    if(tempFailCount1.length>0){
                        dummyCountMaleFail+=1;
                    }
                }
                else if((studentDetailsList[i].gender=="FEMALE")&&(studentDetailsList[i].marks[j]<50)){
                    tempFailCount+=1;
                    tempFailCount1.push(tempFailCount);
                    if(tempFailCount1.length>0){
                        dummyCountFemaleFail+=1;
                        
                    }
                }
            }
            if(dummyCountMaleFail>=1){
            console.log('Class:',studentDetailsList[i].class,'Name:',studentDetailsList[i].name,'get failed in number of',dummyCountMaleFail,'subjects');
            }
            if(dummyCountFemaleFail>=1){
            console.log('Class:',studentDetailsList[i].class,'Name:',studentDetailsList[i].name,'get failed in number of',dummyCountFemaleFail,'subjects');
            }
        break;
        case 'B':
            for(j=0;j<studentDetailsList[i].marks[j];j++){
                if((studentDetailsList[i].gender=="FEMALE")&&(studentDetailsList[i].marks[j]>=50)){
                    tempPassCount+=1;
                    tempPassCount1.push(tempPassCount);
                    if(tempPassCount1.length==5){
                        console.log('Class:',studentDetailsList[i].class,'Name:',studentDetailsList[i].name,'get passed in all',tempPassCount1.length,'subjects');
                    }
                }
                else if((studentDetailsList[i].gender=="MALE")&&(studentDetailsList[i].marks[j]>=30)){
                    tempPassCount+=1;
                    tempPassCount1.push(tempPassCount);
                    if(tempPassCount1.length==5){
                        console.log('Class:',studentDetailsList[i].class,'Name:',studentDetailsList[i].name,'get passed in all',tempPassCount1.length,'subjects');
                    }
                }
                else if((studentDetailsList[i].gender=="MALE")&&(studentDetailsList[i].marks[j]<30)){
                    tempFailCount+=1;
                    tempFailCount1.push(tempFailCount);
                    if(tempFailCount1.length>0){
                        dummyCountMaleFail+=1;
                    }
                }
                else if((studentDetailsList[i].gender=="FEMALE")&&(studentDetailsList[i].marks[j]<50)){
                    tempFailCount+=1;
                    tempFailCount1.push(tempFailCount);
                    if(tempFailCount1.length>0){
                        dummyCountFemaleFail+=1;
                        
                    }
                }
            }
            if(dummyCountMaleFail>=1){
            console.log('Class:',studentDetailsList[i].class,'Name:',studentDetailsList[i].name,'get failed in number of',dummyCountMaleFail,'subjects');
            }
            if(dummyCountFemaleFail>=1){
            console.log('Class:',studentDetailsList[i].class,'Name:',studentDetailsList[i].name,'get failed in number of',dummyCountFemaleFail,'subjects');
            }
        break;
        case 'C':
            for(j=0;j<studentDetailsList[i].marks[j];j++){
                if((studentDetailsList[i].gender=="FEMALE")&&(studentDetailsList[i].marks[j]>=50)){
                    tempPassCount+=1;
                    tempPassCount1.push(tempPassCount);
                    if(tempPassCount1.length==5){
                        console.log('Class:',studentDetailsList[i].class,'Name:',studentDetailsList[i].name,'get passed in all',tempPassCount1.length,'subjects');
                    }
                }
                else if((studentDetailsList[i].gender=="MALE")&&(studentDetailsList[i].marks[j]>=30)){
                    tempPassCount+=1;
                    tempPassCount1.push(tempPassCount);
                    if(tempPassCount1.length==5){
                        console.log('Class:',studentDetailsList[i].class,'Name:',studentDetailsList[i].name,'get passed in all',tempPassCount1.length,'subjects');
                    }
                }
                else if((studentDetailsList[i].gender=="MALE")&&(studentDetailsList[i].marks[j]<30)){
                    tempFailCount+=1;
                    tempFailCount1.push(tempFailCount);
                    if(tempFailCount1.length>0){
                        dummyCountMaleFail+=1;
                    }
                }
                else if((studentDetailsList[i].gender=="FEMALE")&&(studentDetailsList[i].marks[j]<50)){
                    tempFailCount+=1;
                    tempFailCount1.push(tempFailCount);
                    if(tempFailCount1.length>0){
                        dummyCountFemaleFail+=1;
                        
                    }
                }
            }
            if(dummyCountMaleFail>=1){
            console.log('Class:',studentDetailsList[i].class,'Name:',studentDetailsList[i].name,'get failed in number of',dummyCountMaleFail,'subjects');
            }
            if(dummyCountFemaleFail>=1){
            console.log('Class:',studentDetailsList[i].class,'Name:',studentDetailsList[i].name,'get failed in number of',dummyCountFemaleFail,'subjects');
            }
        break;    
    }
}