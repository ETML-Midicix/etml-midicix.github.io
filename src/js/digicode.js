color = "red";
third = `"le nombre de doyen(s) dans la section informatique"`;
forth = `"le nombre de section à l'ETML"`;
answer = `Mon troisième est ${third}\nMon dernier est ${forth}`;

function Digicode(button){
    if (button.style.backgroundColor != color){
        Active(button)
    }
    else{
        Inactive(button)
    }
}

function Active(button){
    button.style.backgroundColor = color;
}

function Inactive(button){
    button.style.backgroundColor = null;
}

function LoadList(){
    c1 = document.getElementById("c1");
    c2 = document.getElementById("c2");
    c3 = document.getElementById("c3");
    c4 = document.getElementById("c4");
    c5 = document.getElementById("c5");
    c6 = document.getElementById("c6");
    c7 = document.getElementById("c7");
    c8 = document.getElementById("c8");
    c9 = document.getElementById("c9");
    c10 = document.getElementById("c10");
    c11 = document.getElementById("c11");
    c12 = document.getElementById("c12");
    c13 = document.getElementById("c13");
    c14 = document.getElementById("c14");
    c15 = document.getElementById("c15");
    c16 = document.getElementById("c16");
    c17 = document.getElementById("c17");
    c18 = document.getElementById("c18");
    c19 = document.getElementById("c19");
    c20 = document.getElementById("c20");
    c21 = document.getElementById("c21");
    c22 = document.getElementById("c22");
    c23 = document.getElementById("c23");
    c24 = document.getElementById("c24");
    c25 = document.getElementById("c25");
    
    list = [c1, c2, c3, c4, c5, c6, c7, c8 , c9, c10, 
        c11, c12, c13, c14, c15, c16, c17, c18 , c19, c20,
        c21, c22, c23, c24, c25];
    
    return list;
}


function Check(){
    checking = true;
    answerList = [];
    acceptedNumber = [1, 6, 7, 11, 12, 13, 16, 17, 21];
    acceptedLength = acceptedNumber.length;
    realLength = 0
    
    list=LoadList();

    for (let i = 0; i < acceptedNumber.length; i++){
        for (let j = 1; j <= list.length; j++){
            if (acceptedNumber[i] == j){
                answerList.push(list[j-1]);
            }
        }
    }

    for (let i = 0; i < answerList.length; i++){
        if (answerList[i].style.backgroundColor != color){
            checking = false;
        }
    }

    for (let k = 0; k < list.length; k++){
        if (list[k].style.backgroundColor == color){
            realLength++;
        }
    }

    if (realLength > acceptedLength){
        checking = false;
    }

    if (checking){
        alert(answer);
    }
}