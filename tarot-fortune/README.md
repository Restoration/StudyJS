# Tarot fortune application with ReactJS
Here is Tarot fortune application with React. The purpose of this 
lesson, to understand how to make React code. In this lesson, focus on 
state manage. And also we'll do until to deploy on Github pages.

## Step.1 Prepare React App
If you don't have create-react-app, install create-react-app.
```
$ create-react-app react-tarot
```

This project doesn't need default files.
```
$
```

## Step.2 Create User Interface
React minimum need define class and render.
To the begin, extend React component to use React.
```
```

### What is props and state?

## Step.3 Create Click Event
### Condition
- Card has front and back which are different meaning.

### Event Action
- 1. Shuffle tarot deck
- 2. draw past card
- 3. draw present card
- 4. draw feature card
- 5. Reset


## Step.4 Status Management

## All Code

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
