const dropArea = document.getElementById('drop-area');
const maxSize = 20 * 1024 * 1024; // image file  max size 20MB
const listArea = document.getElementById('image-list');

function enterEvent(){
    dropArea.style.backgroundColor = 'rgba(128,128,128,0.8)';
}

function leaveEvent(){
    dropArea.style.backgroundColor = 'rgba(128,128,128,0.6)';
}

function overEvent(event) {
  event.preventDefault();
  event.dataTransfer.dropEffect = "move"
}

function dropEvent(event) {
    event.preventDefault();
    let files = event.dataTransfer.files;
    upload(files);
}

function upload(files){
    let filesLength = files.length;
    if(filesLength > 1){
        return false;
    }
    //let formData = new FormData();
    for(let i = 0; i < filesLength; i++){
        console.log((files[i].type.indexOf('image/') < 0));
        console.log(files[i].size);

        if (files[i].type.indexOf('image/') < 0) {
            continue;
        }
        if (files[i].size > maxSize) {
            continue;
        }
        //formData.append('files[]',files[i]);
        renderImage(files[i]);
    }
    //console.log(formData);
}

function renderImage(blob) {
    let image = new Image();
    let url = URL.createObjectURL(blob);
    image.src = url;
    image.addEventListener('load', function () {
        URL.revokeObjectURL(url);
        var li = document.createElement('li');
        li.appendChild(image);
        listArea.appendChild(li);
    });
}

dropArea.addEventListener('dragenter', enterEvent, false);
dropArea.addEventListener('dragleave', leaveEvent, false);
dropArea.addEventListener('dragover', overEvent, false);
dropArea.addEventListener('drop', dropEvent, false);
