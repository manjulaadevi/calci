let operate="";
let firstnumber="";
let secondnumber="";
function append(num)
{
    if (operator=="")
    {
        firstnumber+=num;
        document.getElementById('result').value=firstnumber;
    }
    else{
        secondnumber+=num;
        document.getElementById('result').value=secondnumber;
    }
}
function operate(op)
{
    operate=op;
}
function result()
{
    let res;
    switch(operator){
        case '+':
            res=parseInt(firstnumber)+parseInt(secondnumber);
            break;
        case '-':
            res=parseInt(firstnumber)-parseInt(secondnumber);
            break;
        case '*':
            res=parseInt(firstnumber)*parseInt(secondnumber);
            break;
        case '/':
            res=parseInt(firstnumber)/parseInt(secondnumber);
            break;
    }
    document.getElementById('result').value=res;
}
function clearresult()
{
    operate="";
    firstnumber="";
    secondnumber="";
    document.getElementById('result').value="";
}

