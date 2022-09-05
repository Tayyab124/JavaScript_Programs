var Area="circle"
var l=10, b=20, pi=3.14, r=3
switch (Area) {
    case "circle":
        console.log("the are of circle is :" +pi*r**2);

    case "triangle":
        console.log("the are of triangle is :" +1/2*l*b);

    case " square":
        console.log("the are of square is :"+ l*b);
    default:
        console.log("No match from list");

}