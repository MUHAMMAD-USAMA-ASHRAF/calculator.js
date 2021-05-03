var abc = document.getElementById('inp');


function check(number){
    abc.value += number;
} 

function calculate(){
    abc.value = eval(abc.value);
}
function clean(){
    abc.value = "" ;
}