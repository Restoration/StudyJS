# HTML5 File API drag and drop
In this lesson, we'll study HTML5 File API. Create drag and drop file uploader with HTML5 File API.

## Step.1
Please, prepare a project folder and index.html.
And add this code in index.html
```HTML
<!DOCTYPE html>
<html lang="en">
<head>
  <meta charset="UTF-8">
  <title>Drag&Drop</title>
</head>
<body>
<style>
#drop-area{
    width: 80%;
    min-height: 300px;
    margin: 0 auto;
    border: dashed 2px #dddddd;
    background: rgba(128,128,128,0.5);
    text-align: center;
    display: -webkit-flex;
    display: flex;
    -webkit-align-items: center;
    align-items: center;
    -webkit-justify-content: center;
    justify-content: center;
}
#image-list{
    display: -webkit-flex;
    display: flex;
    -webkit-justify-content: center;
    justify-content: center;
    list-style: none;
}
#image-list li{
    display: inline-block;
    margin: 0 10px;
}
</style>


<div id="drop-area">
    <p>Just drag and drop fires here.</p>
</div>
<ul id="image-list">
</ul>

<script src="function.js"></script>
</body>
</html>
```

The Above code meaning is drag and drop uploader and image list UI.
Next, create function.js in the project folder. Then, create JavaScript code. In this time, use ES6.
First one, define a variable, function, and event to easily understand.
```JavaScript
let dropArea = document.getElementById('drop-area');
let maxSize = 20 * 1024 * 1024; // image file  max size 20MB
let listArea = document.getElementById('image-list');

function leaveEvent(){
}

function overEvent() {
}

function dropEvent() {
}

dropArea.addEventListener('dragleave', leaveEvent);
dropArea.addEventListener('dragover', overEvent);
dropArea.addEventListener('drop', dropEvent);

```

Create hover action. Add css style each function. 
```JavaScript
function leaveEvent(){
    dropArea.style.backgroundColor = 'rgba(128,128,128,0.6)';
}

function overEvent() {
    dropArea.style.backgroundColor = 'rgba(128,128,128,0.8)';
}

function dropEvent() {
    dropArea.style.backgroundColor = 'rgba(128,128,128,0.6)';
}

```
By doing this, created hover action. Check your browser. It might be added hover action. 
Add argument `event` to overEvent and dropEvent then, we create drop control event with [Event.preventDefault()](https://developer.mozilla.org/ja/docs/Web/API/Event/preventDefault).
And also use [dataTransfer](https://developer.mozilla.org/en-US/docs/Web/API/HTML_Drag_and_Drop_API/Drag_operations#dragdata).
```JavaScript
function overEvent(event) {
    dropArea.style.backgroundColor = 'rgba(128,128,128,0.8)';
    event.preventDefault();
    event.dataTransfer.dropEffect = "move"
}

function dropEvent(event) {
    dropArea.style.backgroundColor = 'rgba(128,128,128,0.6)';
    event.preventDefault();
}
```

Step.2
In this section, create an upload event. Get file data with dataTransfer.
```JavaScript
function dropEvent(event) {
    dropArea.style.backgroundColor = 'rgba(128,128,128,0.6)';
    event.preventDefault();
    let files = event.dataTransfer.files;
    console.log(files);
}
```
Check your browser. It might be displayed file data in your console on web developer tools. 
Next create `upload()` function.
```JavaScript
function upload(files){
    let filesLength = files.length;
    if(filesLength < 0){
        return false;
    }
    for(let i = 0; i < filesLength; i++){
        if (files[i].type.indexOf('image/') < 0) {
            continue;
        }
        if (files[i].size > maxSize) {
            continue;
        }
    }
}

```

This function meaning the file check process. Check the file size and file type. In this lesson, we will not create error message display processing.
If you need error message, create error handling with this for loop.
Execute `upload(files)`  in dropEvent. 
```JavaScript
function dropEvent(event) {
    dropArea.style.backgroundColor = 'rgba(128,128,128,0.6)';
    event.preventDefault();
    let files = event.dataTransfer.files;
    upload(files);
}
```

# step.3
Finally, create displaying a real-time image. Create renderImage function. Create images temporarily in JavaScript. And insert image to ul list.
```JavaScript
function renderImage(blob) {
    let image = new Image();
    let url = URL.createObjectURL(blob);
    image.src = url;
    image.addEventListener('load', function () {
        URL.revokeObjectURL(url);
        let li = document.createElement('li');
        li.appendChild(image);
        listArea.appendChild(li);
    });
}
```
Above code is this flow.
1. Create image temporarily
1. Prepare image object
1. Remove temporarily image
1. Insert image when loaded the image

Execute `renderImage(files[i])` in upload function.
```JavaScript
function upload(files){
    let filesLength = files.length;
    if(filesLength < 0){
        return false;
    }
    for(let i = 0; i < filesLength; i++){
        if (files[i].type.indexOf('image/') < 0) {
            continue;
        }
        if (files[i].size > maxSize) {
            continue;
        }
        renderImage(files[i]);
    }
}
```


## All Code
```JavaScript
let dropArea = document.getElementById('drop-area');
let maxSize = 20 * 1024 * 1024; // image file  max size 20MB
let listArea = document.getElementById('image-list');

function leaveEvent(){
    dropArea.style.backgroundColor = 'rgba(128,128,128,0.6)';
}

function overEvent(event) {
    dropArea.style.backgroundColor = 'rgba(128,128,128,0.8)';
    event.preventDefault();
    event.dataTransfer.dropEffect = "move"
}

function dropEvent(event) {
    dropArea.style.backgroundColor = 'rgba(128,128,128,0.6)';
    event.preventDefault();
    let files = event.dataTransfer.files;
    upload(files);
}

function upload(files){
    let filesLength = files.length;
    if(filesLength < 0){
        return false;
    }
    for(let i = 0; i < filesLength; i++){
        if (files[i].type.indexOf('image/') < 0) {
            continue;
        }
        if (files[i].size > maxSize) {
            continue;
        }
        renderImage(files[i]);
    }
}

function renderImage(blob) {
    let image = new Image();
    let url = URL.createObjectURL(blob);
    image.src = url;
    image.addEventListener('load', function () {
        URL.revokeObjectURL(url);
        let li = document.createElement('li');
        li.appendChild(image);
        listArea.appendChild(li);
    });
}

dropArea.addEventListener('dragleave', leaveEvent);
dropArea.addEventListener('dragover', overEvent);
dropArea.addEventListener('drop', dropEvent);
```


- [HTML Drag and Drop API](https://developer.mozilla.org/ja/docs/Web/API/HTML_Drag_and_Drop_API)
- [createObjectURL](https://developer.mozilla.org/en-US/docs/Web/API/URL/createObjectURL)
- [revokeObjectURL](https://developer.mozilla.org/en-US/docs/Web/API/URL/revokeObjectURL)
