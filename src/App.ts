import { app } from 'electron';
import { MainPageWindow } from "./windows/MainPage/MainPageWindow";

app.on("ready", ()=>{
    var mainWindow = new MainPageWindow();
    mainWindow.show();
});
