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

コンストラクタを以下のように書きます。
コンストラクタ内でユーザーインターフェースを作る処理とスライドショーの現在の番号を定義しておきます。
```JavaScript
	constructor(obj) {
		this.obj = obj;
		this.current = 0;
		this.userInterface();
	}
```

では実際に処理を通していきます。
画像用のオブジェクトを渡す必要があります
配列に画像の名前とパスを格納したオブジェクトを用意します
そしてクラスを呼び出してください
このクラスを呼び出すには以下の処理を書く必要があります。
※このオブジェクトの構造に関してはスラックで送る
```JavaScript
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
		let imgEl = document.createElement("img");
		imgEl.setAttribute("id", "view");
		imgEl.setAttribute("alt", this.obj[this.current].title);
		imgEl.setAttribute("src", this.obj[this.current].imgPath);
		element.appendChild(imgEl);
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

ここでイベントハンドラーを付け加えます
rightBtnとleftBtnにaddEventListnerで紐付けます
ここで注意してほしいことがあります従来のES5の書き方でイベントを紐づけるとクラス読み込み時に処理が通ってしまいます
したがってクリックをしてないにも関わらずクリックイベントが実行されます
以下のように書いてください
```JavaScript
		// Event handler
		// This is ES5
		// rightBtn.addEventListener("click", this.nextClick(),false);
		// leftBtn.addEventListener("click", this.prevClick(),false);
		
		// This is ES6
		rightBtn.addEventListener('click', () => this.nextClick());
		leftBtn.addEventListener('click', () => this.prevClick());
```


出来上がったコードは以下
Userinterface method code
```JavaScript
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

# renderImage method
次に配列からオブジェクトを参照して画像を表示させるためのメソッドを作ります
このメソッドを通すことによって新しい画像に差し替えます
```JavaScript
	renderImage(number){
		let element = document.getElementById("extSlideShow").child("img");
		element.setAttribute("alt", this.obj[number].title);
		element.setAttribute("src", this.objnumber.imgPath);
	}
```

ためしにイベントを実行してみましょう。以下のようにして実行してみましょう。
```JavaScript
	nextClick(){
		this.renderImage(2);
	}
```



# nextClick method
次に進むためのクリックイベントの作成をしていきます。クリックされるごとにコンストラクタ内で定義しているcurrentをインクリメントします。
しかしインクリメントするだけではダメです。スライドショーの枚数の最大まできたらインクリメントさせないという制限をしなければいけません。
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
最初にthis.objから-1した数に対してcurrentが少ない場合はthis.currentをインクリメントさせます。
もしそうでなかった場合は（currentがobjの最大数よりも大きい場合）は0にリセットします。
最後にrenderImageに渡します。


# prevClick method
前に戻るためのクリックイベントの作成をしていきます。戻るイベントはnextClickイベントの逆でcurrentをデクリメントさせることによって画像を入れ替えます。
ここでも制限をかける必要があります。配列は0始まりという制約があるため少しややこしくなっていまいます。
もしも0だった場合はthis.objの最大の数から-1した数をthis.currentに入れます。

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

# All code
```JavaScript
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
```

配列を用意したのは画像のパスとタイトルをひとまとめにして管理をしやすくするためです。
このスライドショーを応用すればまた違った内容のものを作ることも可能です。
以前、Instagram APIを使用して画像を表示させるところまで作りました。これを応用してInstagramから取得したオブジェクトをスライドショーの引数に渡し、構造を変更することでInstagramのスライドショーを作成することもできます。
またモーダルウィンドウと兼ね合わせて作成してみるなど応用して勉強してみるのもいいかもしれません。