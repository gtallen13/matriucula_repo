const { app, BrowserWindow} = require ('electron')

function createWindow ()

{
    //create the browser window
    let win = new BrowserWindow({
        
        width: 800,
        height: 600,
        minHeigth: 600,
        minWidth: 800,
        center: true,
        webPreferences :{
            nodeIntegration: true
        }
    })

    win.loadFile('index.html');
}

app.on ('ready', createWindow);