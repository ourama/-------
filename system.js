function butotnClick(){
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
    console.log(val);
    console.log(arr);

    let randomNumber = arr.length;

    for (var i = 0; i < elems.length; i++) {
        console.log(elems[i].checked);
        console.log(tgtDropdownMenu[i].value);
    
    } // end for i
    for (var i = 0; i < elems.length; i++) {
        console.log(elems[i].checked);
        console.log(tgtDropdownMenu[i].value);
        if (elems[i].checked){
            let ran = Math.floor(Math.random()*randomNumber);
            console.log(ran);
            let rep = arr[ran];
            console.log(rep);
            arr.splice(ran,1);
            randomNumber = randomNumber-1;
            msg[i].innerText = rep;
            //msg.innerText = rep;
        }
    }
}
  
    let reviewTextarea = document.getElementById('reviewTextarea');
    //let msg = document.getElementById('msg');  
    let msg = document.getElementsByClassName('roleBox');
    let checkButton = document.getElementById('checkButton');
    checkButton.addEventListener('click', butotnClick);
    let elems = document.getElementsByName("role");
    let tgtDropdownMenu = document.getElementsByName('few');


