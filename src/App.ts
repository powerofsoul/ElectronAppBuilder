import { app } from 'electron';
import { MainPageView } from "./MainPage/MainPage";

app.on("ready", ()=>{
    var mainWindow = new MainPageView();
    mainWindow.show();
});

