# JavaScript SlideShow
In this lesson, We are going to study slide show with JavaScript. Recently You can create good slide show with CSS only. But, We try to original slide show.
Before, coding we have to understand how to make slide show.
Don't worry! very easy!


And this lesson use ES6.
Let's study ES6 together.

```HTML

```


Before lesson I taught function base coding to make Modal Window. But this lesson will use class, becaouse Class base coding is to easy understand.
First one, define Class.
```JavaScript
Class extSlideShow{
	constructor() {
	}
}
```




Please define method.
Make userinterface method to make user interface.

わかりやすくするために最初にメソッドを定義してしまいます。

```JavaScript
// To create user interface
userInterface(){
	
}
//  To show next image
nextClick(){
	
}
// To show previous image
prevClick(){
	
}
```

すべての関数を自動化させるためにコンストラクタを以下のように書きます
```
	constructor(obj) {
		this.obj = obj;
		this.userInterface();
		this.nextClick();
		this.prevClick();
	}
```

では実際に処理を通していきます。
画像用のオブジェクトを渡す必要があります
配列に画像の名前とパスを格納したオブジェクトを用意します
そしてクラスを呼び出してください
このクラスを呼び出すには以下の処理を書く必要があります。
※このオブジェクトの構造に関してはスラックで送る
```
let obj = [
	{
		"title": "Image 1",
		"imgPath": "../img/image-1.jpg",
	},
	{
		"title": "Image 2",
		"imgPath": "../img/image-2.jpg",
	},
	{
		"title": "Image 3",
		"imgPath": "../img/image-3.jpg",
	}
]
new extSlideShow(obj);
```

これで画像を格納した配列を使うことができるようになりました
次にUIを作成します
これらの画像情報を元にスライドショーの要素となるリストとコントローラーを作成し、#extSlideShowにインサートを行います
JSのメソッドを使ってNodeを生成します。
```JavaScript
userInterface(){
		// Image Content
		for(let i=0; i < this.obj.length; i++){
			let imgEl = document.createElement("img");
			imgEl.setAttribute("alt", this.obj[i].title);
			imgEl.setAttribute("src", this.obj[i].imgPath);
			element.appendChild(imgEl);
		}
}
```
これで画像を表示することができました。
同様に画像を送ったり戻ったりするためのコントローラーを生成します

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

出来上がったコードは以下
Userinterface method code
```JavaScript
userInterface(){
	let element = document.getElementById("extSlideShow");

	// Image Content
	for(let i=0; i < this.obj.length; i++){
		let imgEl = document.createElement("img");
		imgEl.setAttribute("alt", this.obj[i].title);
		imgEl.setAttribute("src", this.obj[i].imgPath);
		element.appendChild(imgEl);
	}
	
	// Button
	let leftBtn = document.createElement("button");
	leftBtn.setAttribute("id", "leftBtn");
	leftBtn.innerHTML = '&#x2039;';

	let rightBtn = document.createElement("button");
	rightBtn.setAttribute("id", "rightBtn");
	rightBtn.innerHTML = '&#x203a;';

	element.appendChild(leftBtn);
	element.appendChild(rightBtn);

}
```

それでは表示ができたのでCSSを使って
スライドショーのデザインをしていきます。
今回は進むボタンと戻るボタンにfontawesomeを使用します

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


# nextClick method
次に進むためのクリックイベントの作成をしていきます

# prevClick method
前に戻るためのクリックイベントの作成をしていきます

# All code

配列を用意したのは画像のパスとタイトルをひとまとめにして管理をしやすくするためです。
実際にはuserinterfaceメソッドを実装せずにスクラッチでur li imgタグを書いてスライドショーを使ってもらっても大丈夫です。

さらに今回は応用をしてインスタグラムと連携させたものをつくる