const { app, BrowserWindow } = require("electron");
const path = require("path");

const createWindow = () => {
  // (1)
  const win = new BrowserWindow({
    width: 1024,
    height: 768,
    webPreferences: {
      nodeIntegration: true,
    },
  });

  win.loadFile(`${path.join(__dirname, "dist/index.html")}`); // (2)
};

app.whenReady().then(() => {
  createWindow();

  app.on("activate", () => {
    // (3)
    if (BrowserWindow.getAllWindows().length === 0) {
      createWindow();
    }
  });
});

app.on("window-all-closed", () => {
  // (4)
  if (process.platform !== "darwin") {
    app.quit();
  }
});
