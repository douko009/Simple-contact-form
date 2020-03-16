document.getElementById('send').addEventListener('click', updateValue);

function updateValue(){

    let name = document.getElementById('name').value;
    let last = document.getElementById('last').value;

    let printName = document.getElementById('printName');
    let printLastname = document.getElementById ('printLastname');

    printName.innerHTML = `Name: ${name}`;
    printLastname.innerHTML = `Last Name: ${last}`;
}


/*

<div class="buttons">
<div class ="addbutton">
    <button id="add" class="addi"> + </button>
<div class ="minbutton">
    <button id="min" class="minu"> - </button>
<div class ="divibutton">
    <button id="divide" class="divi"> / </button>
<div class ="risebutton">
    <button id="rise" class="rises"> x^2 </button>
<div class ="multiplbutton">
    <button id="multipl" class="multi"> * </button>
<div class ="equalbutton">
    <button id="equal" class="equals"> = </button>
</div>
</div>

*/