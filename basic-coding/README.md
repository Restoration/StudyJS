# How to beautiful coding for JavaScript

In this lesson, I'm going to study how to beautiful coding for JavaScrpt. We will study basic coding. And also, we study about ES6.


## What is beautiful code?
I suppose to beautiful code is easy to understand when another developer read the code. You need to decide a good variable or function name and write the unified code. You have to be conscious of another developer. And you should write regularity code.

You should read style guide to write beautiful code.
- [Google JavaScript Style Guide](https://google.github.io/styleguide/jsguide.html)
- [jQuery JavaScript Style Guide](https://contribute.jquery.org/style-guide/js/)
- [Airbnb JavaScript Style Guide](https://github.com/airbnb/javascript)
- [Node.js Style Guide](https://github.com/felixge/node-style-guide)


## How to make JavaScript code
You have to know JavaScipt API. JavaScript has many methods, so you memorize the API method and how to use. In my opinion, To improve coding skill, you should read another developer code which is very important. If you read the code, you can use this code. Conversely, if you can't understand code, you will not use it.
JavaScript is very simple because you bind HTML element and event only.


## My code design pattern
First thing, defined a userinterface function and init function. The init function likes constructor.
And the userInterface function will include bind function and init function is read at first.
Like this.
```
function userInterface(){
    // addEventListener
}
function init(){
    //Extected at first
}
```

### For example
```JavaScript
function userInterface(){
    // addEventListener
    window.addEventListener('load', () => testFunction(), false);
    element.addEventListener('change', () => test(), false);
    element.addEventListener('click', () => hoge(arg), false);
    element.addEventListener('mouseover',() => foo(arg1,arg2), false);
}
function init(){
    hoge();
    foo();
    userInterface();
}
init();
```

In this code pattern, you can use jQuery, too.
```JavaScript
function userInterface(){
    $("#item-1").on("click",hoge());
    $("#item-2").on("click",hoge());
    $("#item-3").on("click",hoge());
}
function init(){
    userInterface();
}
init();
```


## Puzzle Game

First thing, You have to prepare HTML and CSS files.

```HTML
<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <title>Puzzle Game</title>
    <link rel="stylesheet" href="./css/style.css">
</head>
<body>
    <form action="">
        <input id="shuffle" type="button" value="shuffle">
    </form>
    <div id="board"></div>
</script>
</body>
</html>
```

```css
body {
    line-height: 0;
}

#shuffle{
    display: block;
    margin: 0 auto 20px;
    text-align: center;
}

#board{
    display: block;
    width: 600px;
    height: 600px;
    margin: 20px auto;
}
#board img{
    margin: 0;
    padding: 0;
    border: 0;
    vertical-align: baseline;
}
```

If you already prepare the file, we will prepare javascript files. Make an external file or internal code.
In my opinion, defined function name and global variable at first. like this.
```JavaScript
var empty = 15;

function render(){
}

function check(){
}

function shuffle(){
}

function userInterface(){
}

function init(){
}

init();
```

| function name | meaning |
|---|---|
| render |  Render puzzle game element |
| check | Check the piece to can move  |
| shuffle | Shuffle piece |
| userInterface | To bind function and element |
| init | execute at first |


I always use init function, this function executes at the first time when it loads the browser.  The init function include another function to control. In this case, you need to execute render function. so init function has to include render function.
```JavaScript
function init(){
    render();
}
init();
```
It's my coding rule. And then, make dynamic HTML element. You should make HTML element with the highest priority to easy understand. In this part, The function to show element is render function which create HTML NODE with JavaScript.
```JavaScript
function render(){
    let boardElement = document.getElementById('board');
    for(let i=0; i < 16; i++){
        // create image tag
        let imgElement = document.createElement('img');
        imgElement.setAttribute('src','./img/'+i+'.png');
        imgElement.setAttribute('width','150');
        imgElement.setAttribute('height','150');
        imgElement.setAttribute('id',,'image-'+i);
        // insert image tag to board element
        boardElement.appendChild(imgElement);
    }
}

function check(){
}

function shuffle(){
}

function userInterface(){
}

function init(){
    render();
}

init();
```

The next, we will make click event function. The check function is the event function. When you click the piece, the piece position move to space.
 Using switch logic to move the piece. Hence, you have to prepare a temporary variable.
```JavaScript
function check(id){
    let clickPiece;
    let emptyPiece;
    let hit = false;
    let num = parseInt(id.substring(6));
    // control part
    if( (num == (empty - 4)) || (empty + 4) ){
        hit = true;
    } else if( ( (num % 4) != 0 ) && ( (num - 1) == empty ) ){
        hit = true;
    } else if( ( (num % 4) != 3 ) && ( (num + 1) == empty ) ){
        hit = true;
    }
    if(hit == true){
        // move part
        clickPiece = document.getElementById('image-'+num);
        emptyPiece = document.getElementById('image-'+empty);
        let tmp = clickPiece.src;
        clickPiece.setAttribute('src', emptyPiece.src);
        emptyPiece.setAttribute('src',tmp);
        empty = num;
    }
}
```

Then you have to bind to the event function and the HTML element. The userInterface function includes addEventListener API, You need bind event to each piece.
```JavaScript
function userInterface(){
    for(let i=0; i < 16; i++){
        let id = 'image-'+i;
        let imgElement = document.getElementById(id);
        imgElement.addEventListener('click', () => check(id), false);
    }
}
```

As well, you have to execute userInterface function for the first time. So follow execute the function in init function.
```JavaScript
function init(){
    render();
    userInterface();
}
```

You already developed puzzle. In the next part, I will develop a shuffle function.
When you click the shuffle button, the piece renders to random.
```JavaScript
function shuffle(){
    let imgNumber;
    for(let i=0; i < 300; i++){
        imgNumber = Math.floor(Math.random() * 16);
        let id = 'image-'+imgNumber;
        check(id);
    }
}
```

Finaly, you have to bind the event to the element.
```JavaScript
function userInterface(){
    for(let i=0; i < 16; i++){
        let id = 'image-'+i;
        let imgElement = document.getElementById(id);
        imgElement.addEventListener('click', () => check(id), false);
    }
    // add bellow code
    let shuffleBtn = document.getElementById('shuffle');
    shuffleBtn.addEventListener('click', () => shuffle(), false);
}
```

## All code
```HTML
<!DOCTYPE html>
<html lang="en">
<head>
  <meta charset="UTF-8">
  <title>Puzzle Game</title>
  <link rel="stylesheet" href="./css/style.css">
</head>
<body>
<form action="">
    <input id="shuffle" type="button" value="shuffle">
</form>
<div id="board"></div>
</body>
</html>
```

```CSS
body {
    line-height: 0;
    background: #dddddd;
}
#shuffle{
    display: block;
    margin: 0 auto 20px;
    text-align: center;
}
#board{
    display: block;
    width: 600px;
    height: 600px;
    margin: 20px auto;
}
#board img{
    margin: 0;
    padding: 0;
    border: 0;
    vertical-align: baseline;
}
```

```JavaScript
var empty = 15;

function render(){
    let boardElement = document.getElementById('board');
    for(let i=0; i < 16; i++){
        // create image tag
        let imgElement = document.createElement('img');
        imgElement.setAttribute('src','./img/'+i+'.png');
        imgElement.setAttribute('width','150');
        imgElement.setAttribute('height','150');
        imgElement.setAttribute('id','image-'+i);
        boardElement.appendChild(imgElement);
    }
}

function check(id){
    let clickPiece;
    let emptyPiece;
    let hit = false;
    let num = parseInt(id.substring(6));
    if( (num == (empty - 4)) || (empty + 4) ){
        hit = true;
    } else if( ( (num % 4) != 0 ) && ( (num - 1) == empty ) ){
        hit = true;
    } else if( ( (num % 4) != 3 ) && ( (num + 1) == empty ) ){
        hit = true;
    }
    if(hit == true){
        clickPiece = document.getElementById('image-'+num);
        emptyPiece = document.getElementById('image-'+empty);
        let tmp = clickPiece.src;
        clickPiece.setAttribute('src', emptyPiece.src);
        emptyPiece.setAttribute('src',tmp);
        empty = num;
    }
}

function shuffle(){
    let imgNumber;
    for(let i=0; i < 300; i++){
        imgNumber = Math.floor(Math.random() * 16);
        let id = 'image-'+imgNumber;
        check(id);
    }
}

function userInterface(){
    for(let i=0; i < 16; i++){
        let id = 'image-'+i;
        let imgElement = document.getElementById(id);
        imgElement.addEventListener('click', () => check(id), false);
    }
    let shuffleBtn = document.getElementById('shuffle');
    shuffleBtn.addEventListener('click', () => shuffle(), false);
}

function init(){
    render();
    userInterface();
}

init();
```


