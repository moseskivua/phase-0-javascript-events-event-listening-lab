function addingEventListener() {
    const input = document.getElementById('input');
    input.addEventListener('click', function() {
    alert(`${input.id} was clicked!`);
    });
}
const input2 = document.getElementById('input');
function clickAlert() {
    //alert(`${input.id} was clicked!`);
    alert('I was clicked!');
}
input2.addEventListener('click', clickAlert);
