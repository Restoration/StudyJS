var modal = document.getElementById('modalWindow');
var open = document.getElementById('open');
var close = document.getElementById('close');

function show(){
    var overLay = document.createElement('div');
    overLay.setAttribute("id","overLay");
    document.body.append(overLay);
    overLay.addEventListener('click',hide);
    modal.style.display = "block";
    center(modal);
}

function hide(){
    overLay.remove();
    modal.style.display = "none";
}

function center(elem){
    var height = elem.clientHeight;
    var width = elem.clientWidth;
    elem.style.top = '50%';
    elem.style.left = '50%';
    console.log(height);
    console.log(width);
    elem.style.marginTop = '-'+(height/2)+'px';
    elem.style.marginLeft = '-'+(width/2)+'px';
}

open.addEventListener('click',show);
close.addEventListener('click',hide);
