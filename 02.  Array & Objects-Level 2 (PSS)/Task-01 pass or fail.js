// check gender wise marks print the pass mark status //
let studentDetailsList=[{
    "name":"arun","class":"A","age":25,"gender":"male","marks":[34,45,33,20,30]
  },
  {
    "name":"meenu","class":"B","age":65,"gender":"female","marks":[10,20,30,40,40]
  },
  {
  "name":"jeni","class":"C","age":32,"gender":"female","marks":[65,90,60,85,50]
  },
  {
  "name":"anu","class":"A","age":34,"gender":"female","marks":[70,90,70,89,67]
  },
  {
  "name":"gowshik","class":"C","age":40,"gender":"male","marks":[70,60,80,67,50]  
}];

let femalePassMarkList=[];
let malePassMarkList=[];

for(i=0;i<studentDetailsList.length;i++){
    let tempCount=0;
    studentDetailsList[i].name=studentDetailsList[i].name.toUpperCase();
    studentDetailsList[i].class=studentDetailsList[i].class.toUpperCase();
    studentDetailsList[i].gender=studentDetailsList[i].gender.toUpperCase();
    for(j=0;j<=studentDetailsList[i].marks.length;j++){
        if((studentDetailsList[i].gender=="FEMALE")&&(studentDetailsList[i].marks[j]>=50)){
            tempCount=tempCount+1;
            if(tempCount==5){
                femalePassMarkList.push(studentDetailsList[i].name);
            }
        }
        else if((studentDetailsList[i].gender=="MALE")&&(studentDetailsList[i].marks[j])>=30){
            tempCount=tempCount+1;
            if(tempCount==5){
                malePassMarkList.push(studentDetailsList[i].name);
            }
        }
    }
}
console.log(femalePassMarkList,"get pass mark in all 5 subjects of above 50");
console.log(malePassMarkList,"get pass mark in all 5 subjects of above 30");