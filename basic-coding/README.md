# How to beautiful coding for JavaScript

In this lesson, I'm going to sutdy how to coding for JavaScrpt and how to use jQuery. We will sutdy basic coding. And also, we study about ES6.



## What is beautiful code?
I suppose to beautiful code is easy to understand when another developer read the code. You have to decide a good variable name and write the unified code. You have to be conscious to another developer.


You should read style guide to write beautiful code.  
- [Google JavaScript Style Guide](https://google.github.io/styleguide/jsguide.html)
- [jQuery JavaScript Style Guide](https://contribute.jquery.org/style-guide/js/)
- [Airbnb JavaScript Style Guide](https://github.com/airbnb/javascript)
- [Node.js Style Guide](https://github.com/felixge/node-style-guide)


## How to make JavaScript code
You have to know JavaScipt API. JavaScript has many method, so you memorize API method and how to use. In my opinio, To improve coding skill, you should read another developer code which is very important. If you read the code, you can use this code. Conversely, if you can't understand code, you will not use it.
JavaScript is very simple because you bind HTML element and event only.


## Puzzle Game
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


```JavaScript
const empty = 15;

function render(){
}

function check(){
}

function shffle(){
}

function init(){
}

init();
```


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
        boardElement.appendChild(imgElement);
        if(i % 4 == 3){
            // create br tag
            let brElement = document.createElement('br');
            // insert br tag to board
            boardElement.appendChild(brElement);
        }
    }
}

function check(){
}

function shffle(){
}

function userInterface(){
}

function init(){
    render();
}

init();
```




```JavaScript
function clickHandler(){
    let clickPiece;
    let emptyPiece;
    let hit = false;
    let num = parseInt(id.substring(1));
    if( (num == (empty - 4)) || (empty + 4) ){
        hit = true;
    } else if( ( (num % 4) != 0 ) && ( (num - 1) == empty ) ){
        hit = true;
    } else if( ( (num % 4) != 3 ) && ( (num + 1) == empty ) ){
        hit = true;
    }
    if(hit == true){
        clickPiece = document.getElementById('#image-'+i);
        emptyPiece = document.getElementById('#image-'+empty);
        let tmp = clickPiece.src;
        clickPiece.setAttribute('src');
        emptyPiece.setAttribute('src',tmp);
        empty = num;
    }
}
```


```JavaScript
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
```


```JavaScript
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
```



```JavaScript
function userInterface(){
    for(let i=0; i < 16; i++){
        let id = 'image-'+i;
        let imgElement = document.getElementById(id);
        imgElement.addEventListener('click', () => check(id), false);
    }
}
```


```JavaScript
function init(){
    render();
    userInterface();
}
```


```JavaScript
function shuffle(){
    let imgNumber;
    for(let i=0; i < 300; i++){
        let imgNumber = Math.floor(Math.random() * 16);
        let id = 'image-'+imgNumber;
        check(id);
    }
}
```


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
