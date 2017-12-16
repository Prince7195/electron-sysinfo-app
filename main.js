const electron = require('electron');
const { app, BrowserWindow } = electron;
const path = require('path');
const url = require('url');

// set env
process.env.NODE_ENV = 'production'

let win;

function createWindow() {

    // initializing the Browser window with width, height and app icon
    win = new BrowserWindow({ 
        width: 800, 
        height: 600, 
        icon: __dirname + '/img/sysinfo.ico' 
    });

    // loading the inital html file
    win.loadURL(url.format({
        pathname: path.join(__dirname, 'index.html'),
        protocol: 'file:',
        slashes: true
    }));

    // to open development tools for development only
    win.webContents.openDevTools();

    win.on('closed', () => {
        win = null;
    });

}

// creating the application window
app.on('ready', createWindow);

// quit when all windows are closed
app.on('window-all-closed', () => {

    // only in windows
    // in mac cmd + Q is required to close 
    if (process.platform !== 'darwin') {
        app.quit();
    }
});
