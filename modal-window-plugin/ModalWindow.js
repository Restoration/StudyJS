var modal = document.getElementById('modalWindow');
var open = document.getElementById('open');
var close = document.getElementById('close');

function show(){
    var overLay = document.createElement('div');
    overLay.setAttribute("id","overLay");
    document.body.append(overLay);
    overLay.addEventListener('click',hide);
    modal.style.display = "block";
}

function hide(){
    overLay.remove();
    modal.style.display = "none";
}

open.addEventListener('click',show);
close.addEventListener('click',hide);
