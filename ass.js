function sum(num1,num2,num3){
    if (num1 === num2 && num2 === num3){
       
        alert('numbarada wy is le,egyihin');
    }
    else {
        let MaxNum=Math.max(num1,num2,num3);
        alert(` numbarka ugu wayn waa ${MaxNum} ` );
    }

    
}
sum(parseFloat(prompt('enter anumber')),parseFloat(prompt('enter anumber')),parseFloat(prompt('enter anumber')));