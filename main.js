const {
    app,
    BrowserWindow
} = require('electron')

function createWindow () {
  const config = {
    width: 1500,
    height: 420,
    resizable: false,
    darkTheme: true,
    autoHideMenuBar: true,
    webPreferences: {
      nodeIntegration: true
    }
  }
  const win = new BrowserWindow(config)
  win.loadFile('index.html')
}

app.on('ready', createWindow)
