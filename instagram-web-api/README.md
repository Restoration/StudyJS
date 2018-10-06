# Using Instagram WEB API

## Step.1  
First one, Please register your instagram account.  
Next,It needs Instagram token key to use Web API,so access this site.  
[Instagram Developer Page](https://www.instagram.com/developer/)


Click Register Your Application  
Please enter the input.  
Change security tab.then release check  _Disable implicit OAuth_  

Next, add your infomation and access this site.  
```
https://instagram.com/oauth/authorize/?client_id=<Your CLIENT ID>&redirect_uri=<Your Valid redirect URIs>&response_type=token&scope=public_content
```

Click _Authorize_ button.  
You redirect valid readirect URI. This URI is added _access_token_ which is your token key.If you wanna check access token key, access authorize url again.

## Step.2
Second one, access instagram web api.
[API Endpoints](https://www.instagram.com/developer/endpoints/)

You can two endpoints , my user information or your media.
- users/self/
- users/self/media/recent/
Replace your access token key.You can two endpoints , my user information or
```
https://api.instagram.com/v1/users/self/recent?access_token=ACCESS_TOKEN
```


JavaScript has http function which can HTTP Request.So if you wanna using web api(facebook,github,instagram,etc...),use [XMLHttpRequest](https://developer.mozilla.org/en-US/docs/Web/API/XMLHttpRequest) 
method.

```JavaScript
const request = new XMLHttpRequest();
request.open('GET','https://api.instagram.com/v1/users/self/media/recent?access_token=ACCESS_TOKEN');
request.send();
```

But,above code can't checking status, so you should add event.Get information wehen open page.
```JavaScript
var request = new XMLHttpRequest();
request.open('GET','https://api.instagram.com/v1/users/self/media/recent?access_token=ACCESS_TOKEN');
request.addEventListener("load", (e) => {
    console.log(e.target.status);
    console.log(e.target.responseText);
});
request.send();
```
In this case, render datas are status and respons text.If it is normal it returns 200.

## Step.3
Another way, don't use addEventListener. Add error handling proccess.If it isn't 200 status render error status and use json data.
```JavaScript
var request = new XMLHttpRequest();
request.open('GET','https://api.instagram.com/v1/users/self/media/recent/?access_token=ACCESS_TOKEN');
request.responseType = 'json';
request.onload = function() {
    var status = request.status;
    if (status === 200) {
        console.log(request.response);
    } else {
        console.log(status);
        return;
    }
};
request.send();
```

## Step.4
Get image data.
```JavaScript
var request = new XMLHttpRequest();
request.open('GET','https://api.instagram.com/v1/users/self/media/recent/?access_token=ACCESS_TOKEN');
request.responseType = 'json';
request.onload = function() {
    var status = request.status;
    if (status === 200) {
        var data = request.response.data;
        for (var i = 0; i< data.length; i++) {
            var standard = data[i].images.standard_resolution;
            console.log(standard);
        }
    } else {
        console.log(status);
        return;
    }
};
request.send();
```

Render image.Follow this function.This function is create image from Instagram API object.
```JavaScript
function createImage(data){
    var img = document.createElement("img");
    img.setAttribute("src",data.url);
    img.setAttribute("width",data.width);
    img.setAttribute("height",data.height);
    return img;
}
```

Finaly,execute into the for loop.
```JavaScript
for (var i = 0; i< data.length; i++) {
    var standard = data[i].images.standard_resolution;
    var image = createImage(standard);
    document.body.appendChild(image);
    console.log(image);
}
```
---
## All code
```JavaScript
var request = new XMLHttpRequest();
request.open('GET','https://api.instagram.com/v1/users/self/media/recent/?access_token=ACCESS_TOKEN');
request.responseType = 'json';
request.onload = function() {
    var status = request.status;
    if (status === 200) {
        var data = request.response.data;
        for (var i = 0; i< data.length; i++) {
            var standard = data[i].images.standard_resolution;
            var image = createImage(standard);
            document.body.appendChild(image);
        }
    } else {
        console.log(status);
        return;
    }
};
request.send();

function createImage(data){
    var img = document.createElement("img");
    img.setAttribute("src",data.url);
    img.setAttribute("width",data.width);
    img.setAttribute("height",data.height);
    return img;
}
```

