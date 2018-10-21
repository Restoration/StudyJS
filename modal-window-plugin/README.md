# Modal Window Plugin

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
var overLay = document.getElementById('overLay');
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
