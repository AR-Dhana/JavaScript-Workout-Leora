//..sort the given array of object using the key-> title..//
let arrayOfObjectTitleElementsList=[{author:'Bill Gates',title:'The Road Ahead',libraryID: 1254},
                   {author:'Steve Jobs',title:'Walter Isaacson',libraryID: 4264},
                   {author:'Suzanne Collins',title:'Mockingjay:The Final Book of The Hunger Games',libraryID:3245}];
let swapTempVariable=[];
for(i=0;i<arrayOfObjectTitleElementsList.length;i++){
    for(j=i+1;j<arrayOfObjectTitleElementsList.length;j++){
        if(arrayOfObjectTitleElementsList[i].title.charAt()>arrayOfObjectTitleElementsList[j].title.charAt()){
            swapTempVariable=arrayOfObjectTitleElementsList[i];
            arrayOfObjectTitleElementsList[i]=arrayOfObjectTitleElementsList[j];
            arrayOfObjectTitleElementsList[j]=swapTempVariable;
        }
    }
}
console.log(arrayOfObjectTitleElementsList);