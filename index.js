
let salaryPerDay = 100000;
document.querySelector('#salaryPerDay').innerHTML=salaryPerDay.toLocaleString("en-US", {style:"currency", currency:"VND"})
document.querySelector('#btnCalculateSalary').addEventListener('click',function(e){
    e.preventDefault();
    let workingdays = document.querySelector('#workdays').value;
    
    sumSalary = workingdays * salaryPerDay;
    document.querySelector('#salary').innerHTML=`Lương của ${workingdays} làm việc= ${sumSalary.toLocaleString("en-US", {style:"currency", currency:"VND"})}`;
})
document.querySelector('#btnCalculateAverage').addEventListener('click',function(e){
    e.preventDefault();
    let num1 = document.querySelector('#num1').value;
    let num2 = document.querySelector('#num2').value;
    let num3 = document.querySelector('#num3').value;
    let num4 = document.querySelector('#num4').value;
    let num5 = document.querySelector('#num5').value;
    average = (1*num1+1*num2+1*num3+1*num4+1*num5)/5;
    document.querySelector('#result').innerHTML=`Giá trị trung bình = ${average}`;
})
let currencyRate = 23500;
document.querySelector('#currencyRate').innerHTML=currencyRate.toLocaleString("en-US", {style:"currency", currency:"VND"})
document.querySelector('#btnCalculateVndAmount').addEventListener('click',function(e){
    e.preventDefault();
    let usdAmount = document.querySelector('#usdAmount').value;
    
    vndAmount = currencyRate * usdAmount;
    document.querySelector('#vndAmount').innerHTML=` ${vndAmount.toLocaleString("en-US", {style:"currency", currency:"VND"})}`;
})
document.querySelector('#btnCalRect').addEventListener('click',function(e){
    e.preventDefault();
    let width = 1*document.querySelector('#width').value;
    let length = 1*document.querySelector('#length').value;
    let c = (width+length)*2;
    let s = width*length;
    document.querySelector('#resultRect').innerHTML=`Chu vi = ${c} <br/>Diện tích=${s}`;
})
document.querySelector('#btnSumDegit').addEventListener('click',function(e){
    e.preventDefault();
    let number = 1*document.querySelector('#number').value;
 
    let so_hang_don_vi = number%10;
    let so_hang_chuc = Math.floor(number/10) ;
    document.querySelector('#resultOfSumDegit').innerHTML=`Tổng 2 ký số = ${so_hang_chuc+so_hang_don_vi}`;
})