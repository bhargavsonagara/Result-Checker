const calcy = () =>{
    let phy = document.getElementById('phy').value;
    let chem = document.getElementById('chem').value;
    let maths = document.getElementById('maths').value;
    let wd = document.getElementById('wd').value;
    let cmp = document.getElementById('comp').value;

    let total = 0;
    total = parseFloat(phy) + parseFloat(chem) + parseFloat(maths) + parseFloat(wd) + parseFloat(cmp); 
    let perc = total/5;
    let grade = "";
    if(perc<=100 && perc>90){
        grade="O";
    }else if(perc<=90 && perc>80){
        grade="A";
    }else if(perc<=80 && perc>70){
        grade="B";
    }else if(perc<=70 && perc>60){
        grade="C";
    }else if(perc<=60 && perc>50){
        grade="D";
    }else if(perc<=50 && perc>=35.5){
        grade="E";
    }else{
        grade="F";
    }

    if(perc>=35.5){
        document.getElementById('showData').innerHTML=`Out of 500 your total is ${total} and percentage is ${perc}%.<br>Your grade is ${grade}. You are Pass.`
    }else{
        document.getElementById('showData').innerHTML=`Out of 500 your total is ${total} and percentage is ${perc}%.<br>Your grade is ${grade}. You are Fail.`
    }

}