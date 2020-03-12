const electron = require('electron');

// Create the app and BrowserWindow processes created
const { app, BrowserWindow } = electron;

// Listen for app to be ready before doing stuff with it.
app.on('ready', () => {
    const mainWindow = new BrowserWindow({});
    mainWindow.loadURL(`file://${__dirname}/index.html`);
});