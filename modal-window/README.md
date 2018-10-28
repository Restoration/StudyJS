# Modal Window

## Step.1
First one, To understand how to make modal window. Modal window has two layers, It't likes background layer and content layer.
And this lesson will make it to responsive.

Let's coding with HTML and CSS.
```HTML
<!DOCTYPE html>
<html lang="en">
<head>
  <meta charset="UTF-8">
  <title>Modal Window Plugin</title>
  <link rel="stylesheet" href="style.css">
</head>
<body>
    <button id="open">Button</button>
    <div id="modalWindow">
        <div class="modalHeader">
            <h2>Modal Window Title</h2>
            <div id="close"><p>Close</p></div>
        </div>
        <div class="modalBody"></div>
    </div>
    <script src="ModalWindow.js"></script>
</body>
</html>
```


```CSS
@charset "UTF-8";
/* CSS Document */

#overLay{
    position: absolute;
    z-index: 100;
    top: 0px;
    left: 0px;
    width: 100%;
    height: 100%;
    background: rgba(0,0,0,0.6);
}
#modalWindow{
    display: none;
    position: absolute;
    z-index: 101;
    width: 80%;
    height: 300px;
    background: #ffffff;
}
#close{
    position: absolute;
    top: 10px;
    right: 10px;
    cursor: pointer;
}

```

This code is basic source. It will be modal window.

## Step.2
The second section is to create event.
Modal window has tow events, show modal window and hide modal window when user click button.
So you need make show and hide events.
To easy understand, define function at first.

```JavaScript
function show(){
}

function hide(){
}
```

The handler function is to bind object and event that is define.

```JavaScript
var modal = document.getElementById('modalWindow');
var open = document.getElementById('open');
var close = document.getElementById('close');

function show(){
}

function hide(){
}
```

Create show event. A function is for displaying a modal window. To begun with create overlay element.then, displaying modal window element.
```JavaScript
function show(){
    var overLay = document.createElement('div');
    overLay.setAttribute("id","overLay");
    document.body.append(overLay);
    modal.style.display = "block";
}
```
The next, add follow this event listener function.
```JavaScript
open.addEventListener('click',show);
```

Ando so, add hide event. To do the everse show function. Remove overlay element and change style display for modal window element.
```JavaScript
function hide(){
    overLay.remove();
    modal.style.display = "none";
}
```

Finaly, add hide event listner.
```JavaScipt
close.addEventListener('click',hide);
```

With this We was able to create basic modal window. In the next chapter We will controll the modal window and move.  
The all Javascript code in this chapter.
```JavaScript
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
```

## Step.3
Modal window needs centerling. To element should be add css style.
```CSS
position: absolute;
top: 50%;
left: 50%;
margin-top: -(element height / 2) px;
margin-left: -(element width / 2) px;
```
Therefore, adding style source in show function.
```JavaScript
function show(){
    var overLay = document.createElement('div');
    overLay.setAttribute("id","overLay");
    document.body.append(overLay);
    overLay.addEventListener('click',hide);
    modal.style.display = "block";

    // start the center process from here
    var height = modal.clientHeight;
    var width = modal.clientWidth;
    modal.style.top = '50%';
    modal.style.left = '50%';
    modal.style.marginTop = '-'+(height/2)+'px';
    modal.style.marginLeft = '-'+(width/2)+'px';
}
```

In this case, centering process can be function. Please create center function.
```JavaScript
function center(elem){
    var height = elem.clientHeight;
    var width = elem.clientWidth;
    elem.style.top = '50%';
    elem.style.left = '50%';
    elem.style.marginTop = '-'+(height/2)+'px';
    elem.style.marginLeft = '-'+(width/2)+'px';
}
```
And include center function in show function. Add this line.
```JavaScript
center(modal);
```

All JavaScript code
```JavaScript
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
    elem.style.marginTop = '-'+(height/2)+'px';
    elem.style.marginLeft = '-'+(width/2)+'px';
}

open.addEventListener('click',show);
close.addEventListener('click',hide);
```

In today's lesson. We practiced adding css style to element and adding DOM control. We made a confusing modal window to understand JavaScript. There are many simpler things than this. If you wanna study 
more basic Web UI using JavaScript, It's convenient to use such a [site](https://www.w3schools.com/js/default.asp).
