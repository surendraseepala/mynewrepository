function add() {
    let a = document.getElementById('inputbox1');
    let b = document.getElementById('inputbox2');

    let res = parseInt(a.value) + parseInt(b.value);

    document.getElementById('result').textContent='Result is:'+res;
}
function sub() {
    let a = document.getElementById('inputbox1');
    let b = document.getElementById('inputbox2');

    let res = parseInt(a.value) - parseInt(b.value);

    document.getElementById('result').textContent='Result is:'+res;
}
function mul() {
    let a = document.getElementById('inputbox1');
    let b = document.getElementById('inputbox2');

    let res = parseInt(a.value) * parseInt(b.value);

    document.getElementById('result').textContent='Result is:'+res;
}
function div() {
    let a = document.getElementById('inputbox1');
    let b = document.getElementById('inputbox2');

    let res = parseInt(a.value) / parseInt(b.value);

    document.getElementById('result').textContent='Result is:'+res;
}
function exp() {
    let a = document.getElementById('inputbox1');
    let b = document.getElementById('inputbox2');

    let res = parseInt(a.value) ** parseInt(b.value);

    document.getElementById('result').textContent='Result is:'+res;
}
function findMax() {
    let a = document.getElementById('inputbox1').value;
    let b = document.getElementById('inputbox2').value;
     let res=Math.max(parseInt(a),parseInt(b))
    document.getElementById('result').textContent='Result is:'+res;
}
function findMin(){
    let a=document.getElementById('inputbox1').value;
    let b=document.getElementById('inputbox2').value;
    let res=Math.min(parseInt(a),parseInt(b));
    document.getElementById('result').textContent='Result is:'+res;

}

function sqrt(){
    let a=document.getElementById('inputbox1').value;
    let b=document.getElementById('inputbox2').value;
    let res=Math.sqrt(parseInt(a),parseInt(b))
    document.getElementById('result').textContent='Result is:'+res;
}
