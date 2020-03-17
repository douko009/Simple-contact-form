//I don't have Integ.Prog thats why i don't have any functionalities in my form other than the display name and lastname.
document.getElementById('send').addEventListener('click', updateValue);
function updateValue() {
    var name = document.getElementById('name').value;
    var last = document.getElementById('last').value;
    var printName = document.getElementById('printName');
    var printLastname = document.getElementById('printLastname');
    printName.innerHTML = "Name: " + name;
    printLastname.innerHTML = "Last Name: " + last;
}
