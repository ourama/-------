function buttonClick(){
    let val = reviewTextarea.value;
    let lines = val.split(/\r\n|\n/);
    let arr = new Array()
    //msg.innerText = val;
    for ( var i = 0; i < lines.length; i++ ) {
        // 空行は無視する
        if ( lines[i] == '' ) {
            continue;
        }
        arr.push( lines[i] );
    }
    //console.log(val);
    //console.log(arr);

    let randomNumber = arr.length;

    for (var i = 0; i < elems.length; i++) {
        console.log(elems[i].checked);
        console.log(tgtDropdownMenu[i].value);
    
    } // end for i
    for (var i = 0; i < elems.length; i++) {
        console.log(elems[i].checked);
        console.log(tgtDropdownMenu[i].value);
        if (elems[i].checked){
            while(tgtDropdownMenu[i].value>0){
                let ran = Math.floor(Math.random()*randomNumber);
                console.log(ran);
                rep = rep +arr[ran]+ "\n" ;
                console.log(rep);
                arr.splice(ran,1);
                randomNumber = randomNumber-1;
                //msg.innerText = rep;
                tgtDropdownMenu[i].value=tgtDropdownMenu[i].value-1
            }
            msg[i].innerText = rep;
            rep = "";
        } else{
            rep = "";
            msg[i].innerText = rep;
        }
    }
}
function resetClick(){
    for (var i = 0; i < elems.length; i++) {
        msg[i].innerText = "";
        elems[i].checked=false;
    rep = ""
    tgtDropdownMenu[i].value = 1;
    reviewTextarea.value = "";
    }
}

function roleResetClick(){
    for (var i = 0; i < elems.length; i++) {
        msg[i].innerText = "";
        elems[i].checked=false;
    rep = ""
    tgtDropdownMenu[i].value = 1;
    }
}
  
    let reviewTextarea = document.getElementById('reviewTextarea');
    //let msg = document.getElementById('msg');  
    let checkButton = document.getElementById('checkButton');
    let msg = document.getElementsByClassName('roleBox');
    checkButton.addEventListener('click', buttonClick);
    let resetButton = document.getElementById('resetButton');
    resetButton.addEventListener('click',resetClick);
    let roleResetButton = document.getElementById('roleResetButton');
    roleResetButton.addEventListener('click',roleResetClick);
    let elems = document.getElementsByName("role");
    let tgtDropdownMenu = document.getElementsByName('few');
    let rep = "";



