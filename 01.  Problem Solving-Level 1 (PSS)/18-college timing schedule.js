let time=10;

if ((time>=9)&&(time<=12))
{
    console.log("Morning Classes");
}
else if ((time>12)&&(time<=13)) {
    console.log("Lunch Break");
}
else if ((time>13)&&(time<=16)) {
    console.log("Afternoon Classes");
}
else if ((time>16)&&(time<=17)) {
    console.log("Tea Break");
}
else if ((time>17)&&(time<=19)) {
    console.log("Evening Classes");
}
else
{
    console.log("College Closed");
}
