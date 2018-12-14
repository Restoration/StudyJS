class extSlideShow{
	constructor(obj) {
		this.obj = obj;
		this.userInterface();
		this.nextClick();
		this.prevClick();
	}
	userInterface(){
		let element = document.getElementById("extSlideShow");

		// image list
 		let ulEl = document.createElement("ul");
		for(let i=0; i < this.obj.length; i++){
 			let liEl = document.createElement("li");
			let imgEl = document.createElement("img");
			imgEl.setAttribute("alt", this.obj[i].title);
			imgEl.setAttribute("src", this.obj[i].imgPath);

			liEl.appendChild(imgEl);
			ulEl.appendChild(liEl);


		}
			element.appendChild(ulEl);

		// Button
		let leftBtn = document.createElement("button");
		leftBtn.setAttribute("id", "leftBtn");

		let rightBtn = document.createElement("button");
		rightBtn.setAttribute("id", "rightBtn");

		element.appendChild(leftBtn);
		element.appendChild(rightBtn);
	}
	nextClick(){

	}
	prevClick(){

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