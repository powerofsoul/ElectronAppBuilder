import { app } from 'electron';
import { MainWindow } from "./MainPage/MainWindow";

app.on("ready", ()=>{
    var mainWindow = new MainWindow();
    mainWindow.show();
});
