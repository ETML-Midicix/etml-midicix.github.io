function CheckValue(keys){
    key = keys.keyCode;
    charAccepted = [44, 46, 48, 49, 50, 51, 52, 53, 54, 55, 56, 57];
    operator = [13, 42, 43, 45, 47, 99];
    countCara = false;
    countOperator = false;
    for (let i = 0; i < charAccepted.length; i++){
        if (key == charAccepted[i]){
            countCara = true;
            key = String.fromCharCode(key);
        }
    }
    for (let i = 0; i < operator.length; i++){
        if (key == operator[i]){
            countOperator = true;
        }
    }
    if (countCara){
        Add(key);
    }
    if (countOperator){
        key = CheckOperator(key);
        Operation(key);
    }
}

function CheckOperator(operator){
    operatorDict = {13: "equal", 43: "plus", 45: "minus", 42: "power", 47: "divide", 99 : "reset"};

    input = document.getElementById("value");
    value = input.value;
    operators = ["+", "-", "⋅", "÷"]

    checkBefore = true;

    for (let i = 0; i < operators.length; i++){
        if (operators[i] == value.slice(-1)){
            checkBefore = false;
        }
    }
    /*console.log(` test ${operatorDict[operator]}`);
    console.log(operator);*/
    if (checkBefore){
        return operatorDict[operator];
    }
    else{
        return null;
    }
}

function Add(cara){
    input = document.getElementById("value");
    value = input.value;
    cara.toString();

    check = checkComma(value);

    if (cara == "," || cara == "."){
        cara = "comma";
    }


    if (!check && value.length == 0 && cara == "comma"){
        value = value;
    }
    else if (!check && value.length == 1 && value == "0" && cara != "comma"){
        value = cara;
    }
    else if (!check && value.length == 1 && value == "0" && cara == "comma"){
        value += ".";
    }
    else if (!check && cara == "comma"){
        value += ".";
    }
    else if (check && cara == "comma"){
        value == value;
    }
    else{
        value += cara;
    }
    input.value = value;
}

function checkComma(value){
    check = false
    for(let i = 0; i<value.length; i++){
        if (value[i] == "."){
            check = true;
        }
    }
    return check;
}

function Operation(symbol){
    input = document.getElementById("value");
    value = input.value;

    operatorDicts = {"plus": "+", "minus": "-", "power": "⋅", "divide": "÷"};
    operatorChange = ["*", "/"];

    if (symbol != null){
        if (symbol == "reset"){
            input.value = "";
        }
        if (symbol == "equal"){
            value = value.replace("⋅", "*");
            value = value.replace("÷", "/");

            result = eval(value);
            input.value = result;
        }
        if (operatorDicts[symbol]){
            input.value += operatorDicts[symbol];
        }
    }
}