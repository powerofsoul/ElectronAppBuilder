import { app } from 'electron';
import { MainPageWindow } from "./MainPage/MainPageWindow";

app.on("ready", ()=>{
    var mainWindow = new MainPageWindow();
    mainWindow.show();
});
