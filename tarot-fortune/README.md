# Tarot fortune application with ReactJS
Here is Tarot fortune application with React. 
The goal of this lesson, to understand how to make React code and state manage. And also we'll do until to deploy on Github pages. The state means React's object to manage element status. I'll explain later.

## Step.1 Prepare React App
If you don't have create-react-app, install create-react-app.
Please check [official site](https://reactjs.org/tutorial/tutorial.html)
First one, Delete file in src directory because this project doesn't need default files. Then, create index file to use `touch` command.
```
$ create-react-app react-tarot
$ cd react-tarot
$ rm src/*
$ touch src/index.js
```
We finished preparing the project.
Please building your server.
```
$ npm start
```
Access showed localhost and port number in the terminal.
Default port 3000
`http://localhost:3000`

## Step.2 Create User Interface
This step will develop a user interface.
We will coding to make prepare React.
To the begin, import React then, React minimum need define the class and render.
```
import React, { Component } from 'react';
import ReactDOM from 'react-dom';

class Tarot extends React.Component{
    constructor(props){
        super(props);
    }
    render(){
    }
}
```
`React.Component` means import Component in React library. Just like a Java import and Class define. The React is parent class, So tarot class is child class. We have to prepare Component to use React.  Actually, React has two component which are `Functional Component` and `Class Component`. This lesson use Class Component only.  This project focus on state, So the state needs constructor define. And also we have to define `super(props)`  which coded  in ES6 standard of javascript. If you want to know ES6, check this [site](https://www.w3schools.com/js/js_es6.asp).

Then, I prepared tarot card array. Please, follow this code after import.
```
const card  = [
    ["The Fool", "Adventure / Ignorance", "Cruelty / Ignorance"],
    ["The Magician", "creation / skill", "cowardice / fraud"],
    ["The High Priestess", "knowledge / intelligence", "cruel / selfish"],
    ["The Empress", "Fertility / Maternity", "Excess / Vanity"],
    ["The Emperor", "Responsibility / Paternity", "Arrogance / Respect"],
    ["The Hierophant", "teach / generosity", "narrow / lazy"],
    ["The Lovers", "Romance / Pleasure", "Jealousy / Betrayal"],
    ["The Chariot", "Forward / Victory", "Runaway / Failure"],
    ["Strength", "Power / Courage", "Nature / Confidence"],
    ["The Hermit", "Discovery / Thoughtfulness", "Shady / Closed / Greedy"],
    ["Wheel of Fortune", "opportunity / temporary good fortune", "miscalculation / bad luck"],
    ["Justice", "Balance / Legitimate", "Prejudice / Fraud"],
    ["The Hanged Man", "self-sacrifice / patience", "meaningless sacrifice / blind"],
    ["Death", "Stop / Loss", "Reproduction / Redo from Death"],
    ["Temperance", "Harmony / Stability", "Waste / Instability"],
    ["The Devil", "Nuisance / Bondage / Falling", "Wakefulness from the Vicious Circle"],
    ["The Tower", "destruction / destruction", "required destruction"],
    ["The Stars", "hope / adore", "disillusionment / sorrow"],
    ["The Moon", "Anxiety, Ambiguity, Chaos", "Anxiety Disappearance / Clear / End of Chaos"],
    ["The Sun", "Shining Future / Satisfaction", "Postponement / Failure"],
    ["Judgement", "Resurrection / Improvement", "Restless Repatriation / Regret"],
    ["The World", "completed / complete", "incomplete / halfway"],
];
let btn = ["Shuffle","Past","Present","Future","Reset"];
let deck = card;
let result = [];
```

If you wanna use Japanese tarot card, Please, copy this code.
```
const card  = [
    ["愚者","冒険・無知","軽率・愚考"],
    ["魔術師","創造・手腕","臆病・詐欺"],
    ["女教皇","知識・聡明","残酷・身勝手"],
    ["女帝","豊穣・母性","過剰・虚栄"],
    ["皇帝","責任・父性","傲慢・尊大"],
    ["教皇","教え・寛大","狭量・怠惰"],
    ["恋人","恋愛・快楽", "嫉妬・裏切り"],
    ["戦車","前進・勝利","暴走・挫折"],
    ["力","力・勇気","本性・自惚れ"],
    ["隠者","探索・思慮深さ","陰湿・閉鎖的・貪欲"],
    ["運命の輪","チャンス・一時的な幸運","誤算・不運"],
    ["正義","バランス・正当","偏見・不正"],
    ["吊された男","自己犠牲・忍耐","無意味な犠牲・盲目"],
    ["死神","停止・損失","死からの再生・やり直し"],
    ["節制","調和・堅実","浪費・不安定"],
    ["悪魔","邪心・束縛・堕落","悪循環からの目覚"],
    ["塔","破壊・破滅","必要とされる破壊"],
    ["星","希望・憧れ","幻滅・悲哀"],
    ["月","不安・曖昧・混沌","不安の解消・明瞭・混沌の終り"],
    ["太陽","輝く未来・満足","延期・失敗"],
    ["審判","復活・改善","再起不能・後悔"],
    ["世界","完成・完全","未完成・中途半端"],
];
let btn = ["シャッフル","過去","現在","未来","リセット"];
let deck = card;
let result = [];
```

We will create user interface. Write List tag and button tag inside div in return.
```
render(){
    return (
        <div>
            <ul>
                <li>Past:</li>
                <li>Present:</li>
                <li>Future:</li>
            </ul>
            <button>Shuffle<button>
        </div>
    );
}
```

Actually, JavaScript file can't write HTML source. You can write HTML in JSX or React.

## Step.3 Create Click Event
We will develop click event. 


### Condition
- Card has front and back which are different meaning.
- The deck array has to be rondom condition.

### Event Action
- 1. Shuffle tarot deck
- 2. draw past card
- 3. draw present card
- 4. draw feature card
- 5. Reset

Firstly, define state object in constructor.  Like this.
```
this.state = {}
```

## Step.4 Status Management



### What is props and state?
'props' means propatie. If you wanna another class function, You use props. And `state` means status which can status management in self class only.
Please check bellow code.
```
class test extends react.component{
    testHandler() => (){
        alert("test");
    }
    render(){
        return(){}
    }
}
```

```
class testAnother react.component{
    render(){
        props.testHandler()
    }
}
```


## All Code
```
import React, { Component } from 'react';
import ReactDOM from 'react-dom';

/*
 * Japanese
 * meaning, front, back
 *
 * */
/*
const card  = [
    ["愚者","冒険・無知","軽率・愚考"],
    ["魔術師","創造・手腕","臆病・詐欺"],
    ["女教皇","知識・聡明","残酷・身勝手"],
    ["女帝","豊穣・母性","過剰・虚栄"],
    ["皇帝","責任・父性","傲慢・尊大"],
    ["教皇","教え・寛大","狭量・怠惰"],
    ["恋人","恋愛・快楽", "嫉妬・裏切り"],
    ["戦車","前進・勝利","暴走・挫折"],
    ["力","力・勇気","本性・自惚れ"],
    ["隠者","探索・思慮深さ","陰湿・閉鎖的・貪欲"],
    ["運命の輪","チャンス・一時的な幸運","誤算・不運"],
    ["正義","バランス・正当","偏見・不正"],
    ["吊された男","自己犠牲・忍耐","無意味な犠牲・盲目"],
    ["死神","停止・損失","死からの再生・やり直し"],
    ["節制","調和・堅実","浪費・不安定"],
    ["悪魔","邪心・束縛・堕落","悪循環からの目覚"],
    ["塔","破壊・破滅","必要とされる破壊"],
    ["星","希望・憧れ","幻滅・悲哀"],
    ["月","不安・曖昧・混沌","不安の解消・明瞭・混沌の終り"],
    ["太陽","輝く未来・満足","延期・失敗"],
    ["審判","復活・改善","再起不能・後悔"],
    ["世界","完成・完全","未完成・中途半端"],
];
let btn = ["シャッフル","過去","現在","未来","リセット"];
*/

const card  = [
    ["The Fool", "Adventure / Ignorance", "Cruelty / Ignorance"],
    ["The Magician", "creation / skill", "cowardice / fraud"],
    ["The High Priestess", "knowledge / intelligence", "cruel / selfish"],
    ["The Empress", "Fertility / Maternity", "Excess / Vanity"],
    ["The Emperor", "Responsibility / Paternity", "Arrogance / Respect"],
    ["The Hierophant", "teach / generosity", "narrow / lazy"],
    ["The Lovers", "Romance / Pleasure", "Jealousy / Betrayal"],
    ["The Chariot", "Forward / Victory", "Runaway / Failure"],
    ["Strength", "Power / Courage", "Nature / Confidence"],
    ["The Hermit", "Discovery / Thoughtfulness", "Shady / Closed / Greedy"],
    ["Wheel of Fortune", "opportunity / temporary good fortune", "miscalculation / bad luck"],
    ["Justice", "Balance / Legitimate", "Prejudice / Fraud"],
    ["The Hanged Man", "self-sacrifice / patience", "meaningless sacrifice / blind"],
    ["Death", "Stop / Loss", "Reproduction / Redo from Death"],
    ["Temperance", "Harmony / Stability", "Waste / Instability"],
    ["The Devil", "Nuisance / Bondage / Falling", "Wakefulness from the Vicious Circle"],
    ["The Tower", "destruction / destruction", "required destruction"],
    ["The Stars", "hope / adore", "disillusionment / sorrow"],
    ["The Moon", "Anxiety, Ambiguity, Chaos", "Anxiety Disappearance / Clear / End of Chaos"],
    ["The Sun", "Shining Future / Satisfaction", "Postponement / Failure"],
    ["Judgement", "Resurrection / Improvement", "Restless Repatriation / Regret"],
    ["The World", "completed / complete", "incomplete / halfway"],
];
let btn = ["Shuffle","Past","Present","Future","Reset"];
let deck = card;
let result = [];

class Tarot  extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            result: [],
            btnStr: btn[0],
            count: 0,
        };
    }
    clickHandler(){
        var count = this.state.count;
        var btnString = btn[count+1];
        this.setState({
            btnStr: btnString,
            count: count + 1,
        });
        if(count == 0){
            for(var i = deck.length - 1; i > 0; i--){
                var r = Math.floor(Math.random() * (i + 1));
                var tmp = deck[i];
                deck[i] = deck[r];
                deck[r] = tmp;
            }
            return false;
        }
        if(count == 4){
            deck = card;
            result = [];
            this.setState({
                result: [],
                btnStr: btn[0],
                count: 0,
            });
            return false;
        }
        var r = Math.floor(Math.random() * 2 + 1);
        var meaning = deck[count-1][0] + " " + (r == 1 ? "Front" : "Back") + " " + deck[count-1][r];
        //var meaning = deck[count-1][0] + " " + (r == 1 ? "表" : "裏") + " " + deck[count-1][r];
        result.push(meaning);
        this.setState({
            result: result,
        });
    }
    render() {
        return (
            <div>
                <ul>
                  <li>{btn[1]}: {this.state.result[0]}</li>
                  <li>{btn[2]}: {this.state.result[1]}</li>
                  <li>{btn[3]}: {this.state.result[2]}</li>
                </ul>
                <button onClick={this.clickHandler.bind(this)}>{this.state.btnStr}</button>
            </div>
        );
    }
}

ReactDOM.render(
    <Tarot />,
    document.getElementById('root')
);

```


## Step.5 Deploy to Github pages
Finaly, this project deploy to Github pages. 

> GitHub Pages is a static site hosting service designed to host your 
personal, organization, or project pages directly from a GitHub 
repository.

Please install this package to React app deploy to Github pages.
[react-gh-pages](https://github.com/gitname/react-gh-pages)

```
$ npm install gh-pages --save-dev
```

To need edit package.json to setting deploy. Let's edit with nano editor 
which is default text editor in UNIX OS.
```
$ nano package.json
```

Github account username insted of <YOUR USER NAME>
```package.json
//...
"homepage": "http://<YOUR USER NAME>.github.io/react-tarot"
//...
"scripts": {
  //...
  "predeploy": "npm run build",
  "deploy": "gh-pages -d build"
}
```

`ctrl + x ` command is save and quit.

And next, please create new repository in [Github](https://github.com/) 
that is named __react-tarot__. Actually, You have to use `git init` 
command at first time, but this project is test. Please set repository 
URL and using deploy command.
```
$ git init
$ git remote add origin https://github.com/<YOUR USER 
NAME>/react-tarot.git
$ npm run deploy
```

If you couldn't deploy, try to this command.
```
$ rm -rf node_modules
$ npm install
$ npm run deploy
```

Please type URL to your browser.
```
http://<YOUR USER NAME>.github.io/react-tarot
```

I recommend learning step with React.
1. Tutorial
1. Routing (Develop single page application)
1. How to use component
1. Memorize props and state
1. Basic coding (Ajax, map, forEarch, etc...)
