import { BrowserWindow } from 'electron';

export class Window{
    private _viewPath: string;
    private _model;
    constructor(viewPath: string, model) {
        this._viewPath = `file://${__dirname}/${viewPath}`;
        this._model = model;
    }
    public show(){    
        let win:any = new BrowserWindow();
        win.viewModel = this._model;
        
        win.loadURL(this._viewPath);

        //Injecting ViewModel intro current view
        win.webContents.executeJavaScript(`
            var electron = require('electron');
            viewModel = electron.remote.getCurrentWindow().viewModel;
        `);
    }
}