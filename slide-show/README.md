# JavaScript SlideShow
In this lesson, We are going to study slide show with JavaScript. Recently You can create good slide show with CSS only. But, We try to original slide show.
Before, coding we have to understand how to make slide show.
The slideshow has many ways to how to make.
In this lesson, I chose the most simple way which replaces the image path.
Don't worry! very easy!


And this lesson use ES6.
Let's study ES6 together.

```HTML
<!DOCTYPE HTML>
<html lang="en-US">
<head>
	<meta charset="UTF-8">
	<title>Slide Show</title>
	<link rel="stylesheet" href="css/style.css" />
</head>
<body>

<div id="extSlideShow"></div>

<script type="text/javascript" src="js/extSlideShowClass.js"></script>

</body>
</html>
```

## Class and Constructor
Before lesson I taught function base coding to make Modal Window. But this lesson will use class, becaouse Class base coding is to easy understand.
First one, define Class.

`"use strict";` means to use strict mode to writing more rigorous code.

[strict mode](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Strict_mode)

```JavaScript
"use strict";
class extSlideShow{
	constructor() {
	}
}
```


Please define all methods to easily understand.
I'll explain these methods.

|  Method Name  |  detail  |
| ---- | ---- |
|  userInterface  |  The userInterface method means to make UI, an image view area, prev, next button.  |
|  renderImage  |  To change the image when a user clicks the prev button or next button. This function needs current image number, therefore I'll make argument later.  |
|  nextClick  |  To change the next image when a user clicks.  |
|  prevClick  |  To change the previous image when a user clicks.  |

```JavaScript
// To create user interface
userInterface(){
	
}
// To change slide image
renderImage(){
}
	
//  To show next image
nextClick(){
	
}
// To show previous image
prevClick(){
	
}
```


Please prepare contractor,  the node target to insert,the images object, a current variable of slideshow number and to make user interface process.
```JavaScript
	constructor(target,obj) {
		this.target = target;
		this.obj = obj;
		this.current = 0;
		this.userInterface();
	}
```

I'll make a execute process which needs the target id and image object.
```JavaScript
let obj = [
	{
		"title": "Image 1",
		"imgPath": "./img/image-1.jpg",
	},
	{
		"title": "Image 2",
		"imgPath": "./img/image-2.jpg",
	},
	{
		"title": "Image 3",
		"imgPath": "./img/image-3.jpg",
	}
];
const slide = new extSlideShow("#extSlideShow",obj);
```
Now you can use an array containing images.

## userInterface method
Then, I'll create user interface which is slideshow view area and button. Please create the HTML Node with JavaScript method.
```JavaScript
userInterface(){
		// Image Content
		let imgEl = document.createElement("img");
		imgEl.setAttribute("id", "view");
		imgEl.setAttribute("alt", this.obj[this.current].title);
		imgEl.setAttribute("src", this.obj[this.current].imgPath);
		element.appendChild(imgEl);
}
```
You can create the image from the object with the above code.
Similarly, please create the button with below code.

```JavaScript
	let leftBtn = document.createElement("button");
	leftBtn.setAttribute("id", "leftBtn");
	leftBtn.innerHTML = '&#x2039;';

	let rightBtn = document.createElement("button");
	rightBtn.setAttribute("id", "rightBtn");
	rightBtn.innerHTML = '&#x203a;';

	element.appendChild(leftBtn);
	element.appendChild(rightBtn);
```

In here, please add an event handler to the buttons.
You can it with an addEventListner method, but you can't ES5 code.
This is important point. You have to use ES6 code in Java ScriptClass, therefore please use arrow function code. If you use ES5 code, your functions execute. Even if you don't click, executed click function.
```JavaScript
		// Event handler
		// This is ES5
		// rightBtn.addEventListener("click", this.nextClick(),false);
		// leftBtn.addEventListener("click", this.prevClick(),false);
		
		// This is ES6
		rightBtn.addEventListener('click', () => this.nextClick());
		leftBtn.addEventListener('click', () => this.prevClick());
```

The userinterface method all code.
```JavaScript
	userInterface(){
		let element = document.querySelector(this.target);

		// Image Content
		let imgEl = document.createElement("img");
		imgEl.setAttribute("id", "view");
		imgEl.setAttribute("alt", this.obj[this.current].title);
		imgEl.setAttribute("src", this.obj[this.current].imgPath);
		element.appendChild(imgEl);

		// Button
		let leftBtn = document.createElement("button");
		leftBtn.setAttribute("id", "leftBtn");
		leftBtn.innerHTML = '&#x2039;';

		let rightBtn = document.createElement("button");
		rightBtn.setAttribute("id", "rightBtn");
		rightBtn.innerHTML = '&#x203a;';

		element.appendChild(leftBtn);
		element.appendChild(rightBtn);

		// Event handler
		rightBtn.addEventListener('click', () => this.nextClick());
		leftBtn.addEventListener('click', () => this.prevClick());

	}
```

##  Stylesheet
The next, please create stylesheet, you have to design slideshow.
```CSS
#extSlideShow{
	position: relative;
	margin: 0 auto;
	width: 640px;
	height: 425px;
	border: solid 2px solid #666;
}
#extSlideShow img{
	position: absolute;
	width: 640px;
	height: 425px;
}
#leftBtn,
#rightBtn{
	position: absolute;
	z-index: 1000;
	top: 50%;
	border: 0;
	background: 0;
    font-size: 30px;
    color: #fff;
}

#rightBtn{
	right: 10px;
}
#leftBtn{
	left: 10px;
}
```

## renderImage method
Then, reference an object from an array to display an image. The changing new image by using this method.
```JavaScript
	renderImage(number){
		let element = document.getElementById("extSlideShow").child("img");
		element.setAttribute("alt", this.obj[number].title);
		element.setAttribute("src", this.objnumber.imgPath);
	}
```


Let's run the event as a trial. Let's execute it as follows.
when you click rightBtn, It will change image.
```JavaScript
	nextClick(){
		this.renderImage(2);
	}
```

## nextClick method
In this part, I'll create a click event to display the next image. increment to the current variable when the user clicks next button. Please, be careful,  you have to create a limit. If the current variable is the max, it has to be reset.
```JavaScript
	nextClick(){
		if(this.current < this.obj.length -1){
			this.current++;
		}else {
			this.current = 0;
		}
		this.renderImage(this.current);
	}
```
If the current variable is small for the number minus 1 from the maximum value of obj first, increment current. If it is not the case (current is greater than the maximum number of obj), reset it to 0. Finally, You give the current variable to renderImage.


## prevClick method
The last part, Please make click event to display the previous image. The previous event totally opposite to next event. It uses decrement to the current variable and also, you have to create the limit.
```JavaScript
	prevClick(){
		if (this.current == 0) {
			this.current = this.obj.length -1;
		} else {
			this.current--;
		}
		this.renderImage(this.current);
	}
```

## All code

```JavaScript
"use strict";
class extSlideShow{

	constructor(target,obj) {
		this.target = target;
		this.obj = obj;
		this.current = 0;
		this.userInterface();
	}
	userInterface(){
		let element = document.querySelector(this.target);

		// Image Content
		let imgEl = document.createElement("img");
		imgEl.setAttribute("id", "view");
		imgEl.setAttribute("alt", this.obj[this.current].title);
		imgEl.setAttribute("src", this.obj[this.current].imgPath);
		element.appendChild(imgEl);

		// Button
		let leftBtn = document.createElement("button");
		leftBtn.setAttribute("id", "leftBtn");
		leftBtn.innerHTML = '&#x2039;';

		let rightBtn = document.createElement("button");
		rightBtn.setAttribute("id", "rightBtn");
		rightBtn.innerHTML = '&#x203a;';

		element.appendChild(leftBtn);
		element.appendChild(rightBtn);

		// Event handler
		rightBtn.addEventListener('click', () => this.nextClick());
		leftBtn.addEventListener('click', () => this.prevClick());

	}
	renderImage(number){
		let element = document.getElementById("view");
		element.setAttribute("alt", this.obj[number].title);
		element.setAttribute("src", this.obj[number].imgPath);
	}
	nextClick(){
		if(this.current < this.obj.length -1){
			this.current++;
		}else {
			this.current = 0;
		}
		this.renderImage(this.current);
	}
	prevClick(){
		if (this.current == 0) {
			this.current = this.obj.length -1;
		} else {
			this.current--;
		}
		this.renderImage(this.current);
	}
}


let obj = [
	{
		"title": "Image 1",
		"imgPath": "./img/image-1.jpg",
	},
	{
		"title": "Image 2",
		"imgPath": "./img/image-2.jpg",
	},
	{
		"title": "Image 3",
		"imgPath": "./img/image-3.jpg",
	}
];
const slide = new extSlideShow("#extSlideShow",obj);
```
I prepared arrays to make it easier to manage by grouping image paths and titles together. You can this slideshow apply to another thing.
For example, We learned Instagram API, You can get image object from Instagram API, So If you put Instagram image object to the argument and changed the structure, You can create Instagram's slideshow.
