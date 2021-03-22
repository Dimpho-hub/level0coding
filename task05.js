function AreaOfTriangle(num1, num2, num3){
    /* Semiperimiter of a triangle [S = (0.5) * (a + b + c)] */
    var s = (0.5) * (num1 + num2 + num3); 

    /* Herona's formula [ Area = Sqrt{s(s-a)(s-b)(s-c)} ] */
    var area = Math.sqrt(s * ((s - num1) * (s - num2) * (s - num3)));

    return area;
}

console.log(AreaOfTriangle(3,4,5));