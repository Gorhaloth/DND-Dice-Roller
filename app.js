var d4button = document.getElementById('d4b');
var d6button = document.getElementById('d6b');
var d8button = document.getElementById('d8b');
var d10button = document.getElementById('d10b');
var d12button = document.getElementById('d12b');
var d20button = document.getElementById('d20b');

function roll(type, num, type2, type3){
    var i;
    var total2 = [];
    console.log(num);
    if(num==0){
        console.log("true");
        var total = (Math.floor(Math.random()*type)+1)
        document.getElementById(type2).innerHTML = total;
    }else{
        for(i = 0; i < num; i++){
        var total = (Math.floor(Math.random()*type)+1)
        total2.push(total);
        console.log(total);
        var sum = total2.reduce(add);
        }
        document.getElementById(type2).innerHTML = sum;    
        document.getElementById(type3).innerHTML = total2;
    }
}
function add(accumulator, a) {
    return accumulator + a;
}//Don't know how this thing works. It just does. Note to self Figure it out later
d4button.onclick = function(){
    roll(4,document.getElementById('d4').value, 'd4sum', 'd4add');
}
d6button.onclick = function(){
    roll(6,document.getElementById('d6').value, 'd6sum', 'd6add');
}
d8button.onclick = function(){
    roll(8,document.getElementById('d8').value, 'd8sum', 'd8add');
}
d10button.onclick = function(){
    roll(10,document.getElementById('d10').value, 'd10sum', 'd10add');
}
d12button.onclick = function(){
    roll(12,document.getElementById('d12').value, 'd12sum', 'd12add');
}
d20button.onclick = function(){
    roll(20,document.getElementById('d20').value, 'd20sum', 'd20add');
}
