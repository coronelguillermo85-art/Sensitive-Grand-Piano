const { app, BrowserWindow } = require('electron')

const gotTheLock = app.requestSingleInstanceLock()
if (!gotTheLock) { app.quit() }

const createWindow = () => {
  const win = new BrowserWindow({
    width: 1280,
    height: 800,
    title: 'Sensitive Grand Piano',
    webPreferences: { devTools: false }
  })
  win.loadURL('https://sensitive-grand-piano.vercel.app/')
  win.setMenu(null)
}

app.whenReady().then(createWindow)
app.on('window-all-closed', () => app.quit())
