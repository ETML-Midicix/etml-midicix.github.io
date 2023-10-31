var dict = {
    "A": "ALPHA",
    "B" : "BRAVO",
    "C": "CHARLIE",
    "D" : "DELTA",
    "E" : "ECHO",
    "F" : "FOXTROT",
    "G" : "GOLF",
    "H" : "HOTEL",
    "I" : "INDIA",
    "J" : "JULIETT",
    "K" : "KILO",
    "L" : "LIMA",
    "M" : "MIKE",
    "N" : "NOVEMBER",
    "O" : "OSCAR",
    "P" : "PAPA",
    "Q" : "QUEBEC",
    "R" : "ROMEO",
    "S" : "SIERRA",
    "T" : "TANGO",
    "U" : "UNIFORM",
    "V" : "VICTOR",
    "W" : "WHISKEY",
    "X" : "XRAY",
    "Y" : "YANKEE",
    "Z" : "ZULU",
    " " : "/"
};

function Init()
{
    
    val1 = document.getElementById('val1');
    val2 = document.getElementById('val2');
    val3 = document.getElementById('val3');
    val4 = document.getElementById('val4');

    allVal = [val1, val2, val3, val4]

    for (let i = 0; i < allVal.length; i++)
    {
        random = Math.floor(Math.random() * (Object.keys(dict).length - 1));
        letterPlace = String.fromCharCode(65 + random);
        allVal[i].innerText = dict[letterPlace];
    }

    input1 = document.getElementById('input1');
    input2 = document.getElementById('input2');
    input1.value = "";
    input2.value = "";
}

function ConvertOTAN(check)
{
    input1 = document.getElementById('input1');
    input2 = document.getElementById('input2');

    value1 = input1.value;
    value2 = input2.value;
    result = "";

    
    if (check == 0){
        for (let i = 0; i < value1.length; i++)
        {
            convert = dict[value1[i].toUpperCase()];
            converted = convert.charAt(0) + convert.slice(1).toLowerCase();
            if (i == 0){
                space = "";
            }
            else{
                space = " ";
            }
            result += (space + converted);
        }
    
        input2.value = result;    
    }
    if (check == 1){
        save = 0;
        for (let i = 0; i < value2.length; i++)
        {
            if (value2[i] == " "){
                mot = value2.slice(save, i);
                console.log(value2);

                for (let j = 0; j < Object.keys(dict).length; j++){
                    //console.log("a " + dict[value2[j].toUpperCase()]);
                    //console.log("aa " + mot.toUpperCase());
                    console.log("wooooo" + dict["ALPHA"]);
                    if (dict[Object.keys(dict)[j].toUpperCase()] == mot.toUpperCase()){
                        mot = Object.keys(dict)[j];
                    }
                }

                result += mot

                console.log(dict[value2[0].toUpperCase()]);
                console.log("WW= " + Object.keys(dict)[2].toUpperCase());



                save = i + 1;
                console.log("result = " + result);
            }
            /*if (dict[i.toUpperCase()] == value2[value2.length - 1]){
                result += Object.keys(dict)[i];
            }*/
        }

        console.log(Object.keys(dict)[1]);

        input1.value = result;
    }
}

function Copy(inputEntry){
    input = document.getElementById(inputEntry).value
    navigator.clipboard.writeText(input);
    
    document.getElementById(`copied${inputEntry}`).innerText = "Copié !";
}