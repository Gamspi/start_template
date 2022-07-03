const path = require('path');
const {BrowserWindow, app} = require('electron');

function createWindow() {
    let win = new BrowserWindow({
        width: 300,
        height: 450,
        // height: 150,
        icon:__dirname+'/img/sc.png',
        resizable: false,
        // frame:false, //рамка
        webPreferences: {
            nodeIntegration: false,
            worldSafeExecuteJavaScript: true,
            contextIsolation: true,
        }
    });
    win.loadFile('dist/index.html')
    win.on('close', () => {
       win = null
    })
}

require('electron-reload')(__dirname,
    path.join(__dirname, 'node_modules', 'bin', 'electron')
)
app.whenReady().then(createWindow)
app.on('window-all-closed',()=>{
    // app.quiet();
})
