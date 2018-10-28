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
