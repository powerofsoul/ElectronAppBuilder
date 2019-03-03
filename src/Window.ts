import { BrowserWindow } from 'electron';
const fs = require("fs");

import * as config from "./config.json";

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
        

        win.webContents.on('did-finish-load', function() {
            config.styles.forEach(css => {
                console.log(`${__dirname}/${css}`);
                fs.readFile(`${__dirname}/${css}`, "utf-8", function(error, data) {
                    win.webContents.insertCSS(data)
                })
            })
        });
       
        //Injecting ViewModel intro current view
        win.webContents.executeJavaScript(`
            let $ = require('jquery')
            var electron = require('electron');
            viewModel = electron.remote.getCurrentWindow().viewModel;

            //Make each field update viewmodel variables
            $('[bind]').each(function(){
                let attr = $(this).attr('bind');
               
                $(this).on('change', ()=>{
                    debugger
                    let value = $(this).val();
                    if(!isNaN(value)){
                        value = parseInt(value);
                    }

                    viewModel[attr] = value;
                }); 

                viewModel.registerListener(attr, ()=>{
                    $(this).val(viewModel[attr]);
                })
            })
        `);
    }
}