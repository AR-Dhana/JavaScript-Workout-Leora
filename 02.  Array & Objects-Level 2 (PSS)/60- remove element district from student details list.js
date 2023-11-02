//..remove district from students details list..//
let studentDetailsList=new Object();
studentDetailsList.name='Arul';
studentDetailsList.age=21;
studentDetailsList.gender='male';
studentDetailsList.course='CSE';
studentDetailsList.state='tamil nadu';
studentDetailsList.district='chennai';
studentDetailsList.pincode=6000028;
console.log(studentDetailsList);
delete studentDetailsList.district;
console.log(studentDetailsList);
