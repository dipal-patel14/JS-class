


// const App = electron.app;



// const BrowserWindow = electron.BrowserWindow;



// var MainWindow = null;



// App.on("ready", () => {

//   MainWindow = new BrowserWindow({width:500,height:500});

//   MainWindow.loadURL(`file:///${__dirname}/Welcome.html`);

// })const electron = require("electron");





// const electron = require("electron");



// const App = electron.app;



// const BrowserWindow = electron.BrowserWindow;



// var MainWindow = null;



// App.on("ready", () => {

//   MainWindow = new BrowserWindow({width:1000,height:1000});

//   MainWindow.loadURL("https://www.babylonjs.com/demos/pbrglossy/");

// })







const electron = require("electron");



const App = electron.app;



const BrowserWindow = electron.BrowserWindow;



var MainWindow = null;



App.on("ready", () => {

  MainWindow = new BrowserWindow({width:500,height:500});

  MainWindow.loadURL(`file:///${__dirname}/Welcome.html`);

})