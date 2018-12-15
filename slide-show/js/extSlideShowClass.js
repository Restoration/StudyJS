class extSlideShow{
	constructor(obj) {
		this.obj = obj;
		this.current = 0;
		this.userInterface();
	}
	userInterface(){
		let element = document.getElementById("extSlideShow");

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
		console.log(element);
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


let images = [
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

new extSlideShow(images);