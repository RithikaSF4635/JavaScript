var num=16;//Number
var Num=16; 
var Name="Rithi";//string
var flag=false;//boolean


var x=1;
var count=0;
while(count<5)
{
    document.write("<p>"+x+"</p>");
    x+=2;
    count++;
}



function addNumber(a,b)
{
    var total=a+b;
    return total;
}
var output=addNumber("5","15");
document.write("<h5>The total is : "+output+"</h5>");
var car1="Audi";
var car2="Volvo";
var car3="BMW";

var cars=["BMW","Volvo","Audi"];

cars.push(45)


for (var i=0;i<cars.length;i++)
{
    document.write("<h5>"+cars[i]+"</h5>");
}

var Car={
    car_model:"Tesla",
    car_brand:"Model 3",
    price : 1500000,

    teslaAutoPilot : function()
    {
        document.write("<h3>This car has Audio pilot</h3>");
    }
}


document.write("<h5>"+Car.car_brand+"</h5>");

function Cars(car_brand,car_model,price)
{
    this.car_brand = car_brand;
    this.car_model=car_model;
    this.price=price;
    this.teslaAutoPilot=function()
    {
        document.write("<h3>This car has Audio pilot</h3>");
    }
}

var c1=new Cars("Tesla","Model 3",1500000);
var c2=new Cars("Audi","A6",5000000);
c1.teslaAutoPilot();
document.write("<h5>"+c2.car_model+"</h5>");

var str1=12;

document.write(typeof(str1));