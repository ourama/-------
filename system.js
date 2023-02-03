function buttonClick(){
    let val = reviewTextarea.value;
    let lines = val.split(/\r\n|\n/);
    let arr = new Array();
    let keepTDMenu = new Array(1, 1, 1, 1, 1);//人数指定保存用
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
        //console.log(elems[i].checked);
        //console.log(tgtDropdownMenu[i].value);
        if (elems[i].checked){
            keepTDMenu[i] = tgtDropdownMenu[i].value;
            //console.log(keepTDMenu[i]);
            while(tgtDropdownMenu[i].value>0){
                let ran = Math.floor(Math.random()*randomNumber);
                //console.log(ran);
                rep = rep +arr[ran]+ "\n" ;
                //console.log(rep);
                arr.splice(ran,1);
                randomNumber = randomNumber-1;
                //msg.innerText = rep;
                tgtDropdownMenu[i].value=tgtDropdownMenu[i].value-1
            }
            msg[i].innerText = rep;
            rep = "";
            tgtDropdownMenu[i].value=keepTDMenu[i]
            //console.log(tgtDropdownMenu[i]);
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

function toTextClick(){
    var copyTarget = "今回の進行は";
    for (var i = 0; i < elems.length; i++) {
        if (elems[i].checked){
        copyTarget += roleName[i] +"が" + msg[i].innerText;
        }
    }
    copyTarget += "になります。よろしくお願いします。";
    copyTarget = copyTarget.replace(/\r?\n/g,"、");
    // 選択しているテキストをクリップボードにコピーする
    navigator.clipboard.writeText(copyTarget)
    .then(() => { alert(copyTarget + 'がコピーできました！') })
    .catch((error) => { alert(error) });
}

  
    let reviewTextarea = document.getElementById('reviewTextarea');
    //let msg = document.getElementById('msg');  
    let checkButton = document.getElementById('checkButton');
    let reAssignButton = document.getElementById('reAssign');
    let toTextButton = document.getElementById('toText');
    toTextButton.addEventListener('click', toTextClick);
    let msg = document.getElementsByClassName('roleBox');
    checkButton.addEventListener('click', buttonClick);
    reAssignButton.addEventListener('click', buttonClick);
    let resetButton = document.getElementById('resetButton');
    resetButton.addEventListener('click',resetClick);
    let roleResetButton = document.getElementById('roleResetButton');
    roleResetButton.addEventListener('click',roleResetClick);
    let elems = document.getElementsByName("role");
    let tgtDropdownMenu = document.getElementsByName('few');
    let rep = "";
    let roleName = ['司会', '書記', 'タイムキーパー', '監視', 'その他'];

'use strict';
{
    const open = document.getElementById('checkButton');
    const close = document.getElementById('close');
    const modal = document.getElementById('modal');
    const mask = document.getElementById('mask');
    
    open.addEventListener('click', function () {
        modal.classList.remove('hidden');
        mask.classList.remove('hidden');
    });
    close.addEventListener('click', function () {
        modal.classList.add('hidden');
        mask.classList.add('hidden');
    });
    mask.addEventListener('click', function () {
        modal.classList.add('hidden');
        mask.classList.add('hidden');
    });
}

